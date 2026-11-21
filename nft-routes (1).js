// ===== nft-routes.js (BACKEND Express) =====
// Cài:  npm install ethers
// .env (KHÔNG đưa lên GitHub):
//   BADGE_SIGNER_KEY=0x...   <- khoá ví RIÊNG chỉ để ký (ví mới, không chứa tiền).
//                               Địa chỉ ví này phải trùng trustedSigner của contract.
//   BADGE_CONTRACT=0x...     <- địa chỉ contract SuVietBadge đã deploy trên Fuji
//
// Dùng trong server.js, đặt ngay TRƯỚC dòng "// ══ START SERVER ══":
//   require('./nft-routes')(app, { getPool: () => pool, sql, jwt });
const { ethers } = require('ethers');

const FUJI_RPC = 'https://api.avax-test.network/ext/bc/C/rpc';
const CHAIN_ID = 43113;
const ABI = [
    'event BadgeClaimed(address indexed to, uint256 indexed id)',
    'function balanceOf(address account, uint256 id) view returns (uint256)'
];

// Huy hiệu theo cấp độ (level = floor(exp/300)+1, đúng như /api/exp/add đang tính)
const BADGES = {
    1: { name: 'Học trò Sử Việt', minLevel: 2 },
    2: { name: 'Người kể sử',     minLevel: 4 },
    3: { name: 'Sử gia tập sự',   minLevel: 7 },
    4: { name: 'Nhà sử học',      minLevel: 10 }
};

module.exports = function (app, { getPool, sql, jwt }) {
    if (!process.env.BADGE_SIGNER_KEY || !process.env.BADGE_CONTRACT)
        throw new Error('Thiếu BADGE_SIGNER_KEY hoặc BADGE_CONTRACT trong .env');
    if (!process.env.JWT_SECRET)
        console.warn('⚠️ JWT_SECRET chưa đặt trong .env: đang dùng khoá mặc định, ai cũng có thể giả token!');

    const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
    const CONTRACT = ethers.getAddress(process.env.BADGE_CONTRACT);
    const signer = new ethers.Wallet(process.env.BADGE_SIGNER_KEY);
    const provider = new ethers.JsonRpcProvider(FUJI_RPC, CHAIN_ID);
    const readContract = new ethers.Contract(CONTRACT, ABI, provider);
    const iface = new ethers.Interface(ABI);

    const DOMAIN = { name: 'SuVietBadge', version: '1', chainId: CHAIN_ID, verifyingContract: CONTRACT };
    const TYPES = {
        Claim: [
            { name: 'to', type: 'address' },
            { name: 'id', type: 'uint256' },
            { name: 'deadline', type: 'uint256' }
        ]
    };

    function authUser(req) {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return null;
        try { return jwt.verify(token, JWT_SECRET); } catch (_) { return null; }
    }

    // Cấp độ lấy từ DB, không tin dữ liệu từ trình duyệt
    async function getLevel(userId) {
        const r = getPool().request();
        r.input('userId', sql.Int, userId);
        const out = await r.query(`SELECT level FROM Users WHERE id = @userId`);
        return out.recordset[0]?.level || 1;
    }

    async function getClaim(userId, badgeId) {
        const r = getPool().request();
        r.input('userId', sql.Int, userId);
        r.input('badgeId', sql.Int, badgeId);
        const out = await r.query(`SELECT wallet, tx_hash FROM NftClaims WHERE user_id = @userId AND badge_id = @badgeId`);
        return out.recordset[0] || null;
    }

    // ══ DANH SÁCH HUY HIỆU ══
    app.get('/api/nft/badges', async (req, res) => {
        try {
            const user = authUser(req);
            if (!user) return res.status(401).json({ success: false, message: '❌ Chưa đăng nhập' });

            const level = await getLevel(user.id);
            const r = getPool().request();
            r.input('userId', sql.Int, user.id);
            const cl = await r.query(`SELECT badge_id, tx_hash FROM NftClaims WHERE user_id = @userId AND tx_hash IS NOT NULL`);
            const claimed = {};
            cl.recordset.forEach(row => { claimed[row.badge_id] = row.tx_hash; });

            const badges = Object.entries(BADGES).map(([id, b]) => ({
                id: Number(id),
                name: b.name,
                minLevel: b.minLevel,
                eligible: level >= b.minLevel,
                claimed: Number(id) in claimed,
                txHash: claimed[id] || null
            }));
            res.json({ success: true, level, badges });
        } catch (err) {
            res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
        }
    });

    // ══ BƯỚC 1: XIN CHỮ KÝ (server kiểm tra cấp độ trong DB) ══
    app.post('/api/nft/sign', async (req, res) => {
        try {
            const user = authUser(req);
            if (!user) return res.status(401).json({ success: false, message: '❌ Chưa đăng nhập' });

            const badgeId = Number(req.body.badgeId);
            const walletRaw = String(req.body.wallet || '').trim();
            if (!BADGES[badgeId]) return res.status(400).json({ success: false, message: '❌ Huy hiệu không tồn tại' });
            if (!ethers.isAddress(walletRaw)) return res.status(400).json({ success: false, message: '❌ Địa chỉ ví không hợp lệ' });
            const wallet = ethers.getAddress(walletRaw);

            const level = await getLevel(user.id);
            if (level < BADGES[badgeId].minLevel)
                return res.status(403).json({ success: false, message: `❌ Cần đạt cấp ${BADGES[badgeId].minLevel} để nhận huy hiệu này` });

            const existing = await getClaim(user.id, badgeId);
            if (existing?.tx_hash)
                return res.status(400).json({ success: false, message: '❌ Bạn đã nhận huy hiệu này rồi' });

            // Ví đã giữ huy hiệu on-chain thì contract sẽ từ chối, báo sớm cho người chơi
            const bal = await readContract.balanceOf(wallet, badgeId);
            if (bal > 0n)
                return res.status(400).json({ success: false, message: '❌ Ví này đã có huy hiệu này rồi' });

            // Ghi nhận ví đã xin chữ ký (tx_hash còn NULL = đang chờ claim on-chain)
            const w = getPool().request();
            w.input('userId', sql.Int, user.id);
            w.input('badgeId', sql.Int, badgeId);
            w.input('wallet', sql.NVarChar, wallet);
            const upd = await w.query(
                `UPDATE NftClaims SET wallet = @wallet WHERE user_id = @userId AND badge_id = @badgeId AND tx_hash IS NULL`
            );
            if (upd.rowsAffected[0] === 0 && !existing) {
                try {
                    const i = getPool().request();
                    i.input('userId', sql.Int, user.id);
                    i.input('badgeId', sql.Int, badgeId);
                    i.input('wallet', sql.NVarChar, wallet);
                    await i.query(`INSERT INTO NftClaims (user_id, badge_id, wallet) VALUES (@userId, @badgeId, @wallet)`);
                } catch (e) {
                    if (!/UNIQUE|UQ_NftClaims/.test(e.message)) throw e; // bấm 2 lần cùng lúc: bỏ qua
                }
            }

            const deadline = Math.floor(Date.now() / 1000) + 600; // chữ ký có hạn 10 phút
            const signature = await signer.signTypedData(DOMAIN, TYPES, { to: wallet, id: badgeId, deadline });
            res.json({ success: true, contract: CONTRACT, deadline, signature });
        } catch (err) {
            console.error('❌ Lỗi nft/sign:', err.message);
            res.status(500).json({ success: false, message: '❌ Lỗi máy chủ' });
        }
    });

    // ══ BƯỚC 2: XÁC NHẬN SAU KHI NGƯỜI CHƠI ĐÃ CLAIM ON-CHAIN ══
    app.post('/api/nft/confirm', async (req, res) => {
        try {
            const user = authUser(req);
            if (!user) return res.status(401).json({ success: false, message: '❌ Chưa đăng nhập' });

            const badgeId = Number(req.body.badgeId);
            const txHash = String(req.body.txHash || '').trim();
            if (!BADGES[badgeId]) return res.status(400).json({ success: false, message: '❌ Huy hiệu không tồn tại' });
            if (!/^0x[0-9a-fA-F]{64}$/.test(txHash))
                return res.status(400).json({ success: false, message: '❌ Mã giao dịch không hợp lệ' });

            const claim = await getClaim(user.id, badgeId);
            if (!claim) return res.status(400).json({ success: false, message: '❌ Chưa xin chữ ký cho huy hiệu này' });
            if (claim.tx_hash) return res.json({ success: true, txHash: claim.tx_hash });

            const receipt = await provider.getTransactionReceipt(txHash);
            if (!receipt) return res.status(409).json({ success: false, message: '⏳ Giao dịch chưa được xác nhận, thử lại sau ít giây' });
            if (receipt.status !== 1) return res.status(400).json({ success: false, message: '❌ Giao dịch thất bại trên chuỗi' });

            // Tìm sự kiện BadgeClaimed do đúng contract phát ra, đúng ví và đúng huy hiệu
            const ok = receipt.logs.some(log => {
                if (log.address.toLowerCase() !== CONTRACT.toLowerCase()) return false;
                try {
                    const ev = iface.parseLog(log);
                    return ev && ev.name === 'BadgeClaimed'
                        && ev.args.to.toLowerCase() === claim.wallet.toLowerCase()
                        && Number(ev.args.id) === badgeId;
                } catch (_) { return false; }
            });
            if (!ok) return res.status(400).json({ success: false, message: '❌ Giao dịch không phải nhận huy hiệu này về ví đã đăng ký' });

            // Một giao dịch chỉ gắn được với một lượt nhận
            const dup = getPool().request();
            dup.input('tx', sql.NVarChar, txHash);
            const dupRes = await dup.query(`SELECT 1 AS x FROM NftClaims WHERE tx_hash = @tx`);
            if (dupRes.recordset.length > 0)
                return res.status(400).json({ success: false, message: '❌ Giao dịch này đã được dùng' });

            const u = getPool().request();
            u.input('userId', sql.Int, user.id);
            u.input('badgeId', sql.Int, badgeId);
            u.input('tx', sql.NVarChar, txHash);
            await u.query(`UPDATE NftClaims SET tx_hash = @tx WHERE user_id = @userId AND badge_id = @badgeId`);

            res.json({ success: true, txHash, explorer: `https://testnet.snowtrace.io/tx/${txHash}` });
        } catch (err) {
            console.error('❌ Lỗi nft/confirm:', err.message);
            res.status(500).json({ success: false, message: '❌ Lỗi máy chủ' });
        }
    });
};
