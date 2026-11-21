// ════════════════════════════════════════════════════════════
// DÁN VÀO server.js, ngay TRƯỚC dòng "// ══ START SERVER ══"
// Cài thư viện:  npm install ethers
// Thêm vào .env:
//   NFT_CONTRACT=0x...địa_chỉ_contract_sau_khi_deploy
//   MINTER_PRIVATE_KEY=0x...khóa_ví_owner_CHỈ_DÙNG_VÍ_TEST
// ════════════════════════════════════════════════════════════
const { ethers } = require('ethers');

const FUJI_RPC = 'https://api.avax-test.network/ext/bc/C/rpc';
const NFT_ABI = ['function mintBadge(address to, uint256 id)'];

// Huy hiệu theo cấp độ (level = floor(exp/300)+1, đúng như /api/exp/add đang tính)
const BADGES = {
    1: { name: 'Học trò Sử Việt',   minLevel: 2 },
    2: { name: 'Người kể sử',       minLevel: 4 },
    3: { name: 'Sử gia tập sự',     minLevel: 7 },
    4: { name: 'Nhà sử học',        minLevel: 10 }
};

let nftContract = null;
function getNft() {
    if (!nftContract) {
        const provider = new ethers.JsonRpcProvider(FUJI_RPC);
        const signer = new ethers.Wallet(process.env.MINTER_PRIVATE_KEY, provider);
        nftContract = new ethers.Contract(process.env.NFT_CONTRACT, NFT_ABI, signer);
    }
    return nftContract;
}

function authUser(req) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return null;
    try { return jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key'); }
    catch (_) { return null; }
}

// ══ API DANH SÁCH HUY HIỆU NFT ══
app.get('/api/nft/badges', async (req, res) => {
    try {
        const user = authUser(req);
        if (!user) return res.status(401).json({ success: false, message: '❌ Chưa đăng nhập' });

        const lvReq = pool.request();
        lvReq.input('userId', sql.Int, user.id);
        const lv = await lvReq.query(`SELECT level FROM Users WHERE id = @userId`);
        const level = lv.recordset[0]?.level || 1;

        const clReq = pool.request();
        clReq.input('userId', sql.Int, user.id);
        const cl = await clReq.query(`SELECT badge_id, tx_hash FROM NftClaims WHERE user_id = @userId`);
        const claimed = {};
        cl.recordset.forEach(r => { claimed[r.badge_id] = r.tx_hash; });

        const badges = Object.entries(BADGES).map(([id, b]) => ({
            id: Number(id),
            name: b.name,
            minLevel: b.minLevel,
            eligible: level >= b.minLevel,
            claimed: id in claimed,
            txHash: claimed[id] || null
        }));
        res.json({ success: true, level, badges });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// ══ API NHẬN HUY HIỆU NFT (server mint về ví người chơi) ══
app.post('/api/nft/claim', async (req, res) => {
    const user = authUser(req);
    if (!user) return res.status(401).json({ success: false, message: '❌ Chưa đăng nhập' });

    const badgeId = Number(req.body.badgeId);
    const wallet = (req.body.wallet || '').trim();
    if (!BADGES[badgeId]) return res.status(400).json({ success: false, message: '❌ Huy hiệu không tồn tại' });
    if (!ethers.isAddress(wallet)) return res.status(400).json({ success: false, message: '❌ Địa chỉ ví không hợp lệ' });

    let inserted = false;
    try {
        // 1. Kiểm tra đủ cấp độ (đọc từ DB, không tin dữ liệu từ trình duyệt)
        const lvReq = pool.request();
        lvReq.input('userId', sql.Int, user.id);
        const lv = await lvReq.query(`SELECT level FROM Users WHERE id = @userId`);
        const level = lv.recordset[0]?.level || 1;
        if (level < BADGES[badgeId].minLevel)
            return res.status(403).json({ success: false, message: `❌ Cần đạt cấp ${BADGES[badgeId].minLevel} để nhận huy hiệu này` });

        // 2. Giữ chỗ trước (UNIQUE user_id+badge_id chặn bấm 2 lần)
        const insReq = pool.request();
        insReq.input('userId', sql.Int, user.id);
        insReq.input('badgeId', sql.Int, badgeId);
        insReq.input('wallet', sql.NVarChar, wallet);
        try {
            await insReq.query(`INSERT INTO NftClaims (user_id, badge_id, wallet) VALUES (@userId, @badgeId, @wallet)`);
            inserted = true;
        } catch (e) {
            if (e.message.includes('UNIQUE') || e.message.includes('UQ_NftClaims'))
                return res.status(400).json({ success: false, message: '❌ Bạn đã nhận huy hiệu này rồi' });
            throw e;
        }

        // 3. Mint trên Fuji
        const tx = await getNft().mintBadge(wallet, badgeId);
        await tx.wait();

        const upReq = pool.request();
        upReq.input('userId', sql.Int, user.id);
        upReq.input('badgeId', sql.Int, badgeId);
        upReq.input('tx', sql.NVarChar, tx.hash);
        await upReq.query(`UPDATE NftClaims SET tx_hash = @tx WHERE user_id = @userId AND badge_id = @badgeId`);

        res.json({ success: true, txHash: tx.hash, explorer: `https://testnet.snowtrace.io/tx/${tx.hash}` });
    } catch (err) {
        // Mint lỗi thì nhả chỗ để người chơi thử lại
        if (inserted) {
            try {
                const delReq = pool.request();
                delReq.input('userId', sql.Int, user.id);
                delReq.input('badgeId', sql.Int, badgeId);
                await delReq.query(`DELETE FROM NftClaims WHERE user_id = @userId AND badge_id = @badgeId AND tx_hash IS NULL`);
            } catch (_) {}
        }
        console.error('❌ Lỗi mint NFT:', err.message);
        res.status(500).json({ success: false, message: '❌ Không mint được: ' + err.message });

        -- Chạy 1 lần trong SQL Server Management Studio / Azure Data Studio
CREATE TABLE NftClaims (
    id         INT IDENTITY(1,1) PRIMARY KEY,
    user_id    INT           NOT NULL,
    badge_id   INT           NOT NULL,
    wallet     NVARCHAR(42)  NOT NULL,
    tx_hash    NVARCHAR(80)  NULL,
    created_at DATETIME      NOT NULL DEFAULT GETDATE(),
    CONSTRAINT UQ_NftClaims UNIQUE (user_id, badge_id)
);