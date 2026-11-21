// ===== nft-client.js (bản 2: có hình huy hiệu, thông báo đẹp, lỗi dễ hiểu) =====
// Dùng với huy-hieu.html: cần <button id="btnWallet"> và <div id="badgeList">,
// và ethers (CDN) được nạp trước file này.
(function () {
    const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
        ? 'http://localhost:3000/api' : '/api';
    const IMG_BASE = 'https://trangttt25itb-cmyk.github.io/su-viet-badges/';
    const EXPLORER = 'https://testnet.snowtrace.io';
    const FUJI = { chainId: '0xA869', chainName: 'Avalanche Fuji Testnet',
        nativeCurrency: { name: 'AVAX', symbol: 'AVAX', decimals: 18 },
        rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
        blockExplorerUrls: [EXPLORER] };
    const CLAIM_ABI = ['function claim(uint256 id, uint256 deadline, bytes signature)'];
    let wallet = null;

    const token = () => localStorage.getItem('token');
    const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const authHeaders = () => ({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + token() });

    // ── Thông báo nhỏ góc màn hình (thay cho alert) ──
    function toast(msg, type) {
        const colors = { ok: '#2e7d32', err: '#8b0000', info: '#2c1b12' };
        const t = document.createElement('div');
        t.setAttribute('role', 'status');
        t.textContent = msg;
        t.style.cssText = 'position:fixed;right:20px;bottom:24px;z-index:100000;max-width:340px;padding:14px 18px;'
            + 'border-radius:12px;color:#fff;font:600 14px Poppins,sans-serif;line-height:1.5;'
            + 'box-shadow:0 8px 24px rgba(0,0,0,.35);border:1.5px solid #c8a96e;background:' + (colors[type] || colors.info);
        document.body.appendChild(t);
        setTimeout(() => { t.style.transition = 'opacity .5s'; t.style.opacity = '0'; }, 4200);
        setTimeout(() => t.remove(), 4800);
    }

    // ── Đổi lỗi kỹ thuật thành câu tiếng Việt dễ hiểu ──
    function friendly(e) {
        const m = String(e && (e.shortMessage || e.message) || e);
        if (e && (e.code === 4001 || e.code === 'ACTION_REJECTED' || /reject|denied/i.test(m))) return 'Bạn đã từ chối giao dịch trong ví.';
        if (/insufficient funds/i.test(m)) return 'Ví chưa có AVAX testnet để trả phí. Hãy xin AVAX miễn phí ở faucet của Avalanche.';
        if (/AlreadyOwned/i.test(m)) return 'Ví này đã có huy hiệu này rồi.';
        if (/Expired/i.test(m)) return 'Chữ ký đã hết hạn, hãy bấm nhận lại.';
        if (/BadSignature/i.test(m)) return 'Chữ ký không hợp lệ. Hãy báo cho quản trị viên.';
        return m;
    }

    async function connectWallet() {
        if (!window.ethereum) {
            toast('Bạn cần cài ví Core hoặc MetaMask trên trình duyệt trước.', 'err');
            return null;
        }
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            try {
                await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: FUJI.chainId }] });
            } catch (e) {
                if (e.code === 4902) await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [FUJI] });
                else throw e;
            }
            wallet = accounts[0];
            const btn = document.getElementById('btnWallet');
            if (btn) btn.textContent = '✅ ' + wallet.slice(0, 6) + '…' + wallet.slice(-4);
            return wallet;
        } catch (e) {
            toast('Không kết nối được ví: ' + friendly(e), 'err');
            return null;
        }
    }

    async function loadBadges() {
        const box = document.getElementById('badgeList');
        if (!box) return;
        if (!token()) {
            box.innerHTML = '<p class="badge-msg">Hãy <a href="login-signup.html">đăng nhập</a> để xem và nhận huy hiệu.</p>';
            return;
        }
        box.innerHTML = '<p class="badge-msg">Đang tải huy hiệu…</p>';
        try {
            const r = await fetch(API + '/nft/badges', { headers: { Authorization: 'Bearer ' + token() } });
            const d = await r.json();
            if (!d.success) { box.innerHTML = '<p class="badge-msg">' + esc(d.message) + '</p>'; return; }
            box.innerHTML = d.badges.map(b => {
                const state = b.claimed ? 'owned' : (b.eligible ? 'ready' : 'locked');
                const action = b.claimed
                    ? '<a class="badge-link" href="' + EXPLORER + '/tx/' + esc(b.txHash || '') + '" target="_blank" rel="noopener">✅ Đã nhận · xem giao dịch</a>'
                    : '<button ' + (b.eligible ? '' : 'disabled') + ' data-id="' + b.id + '">' + (b.eligible ? 'Nhận NFT' : '🔒 Chưa đủ cấp') + '</button>';
                return '<div class="badge-card ' + state + '">'
                    + '<img src="' + IMG_BASE + b.id + '.svg" alt="Huy hiệu ' + esc(b.name) + '" width="130" height="130" loading="lazy">'
                    + '<h4>' + esc(b.name) + '</h4>'
                    + '<p>Cần cấp ' + b.minLevel + ' · bạn: cấp ' + d.level + '</p>'
                    + action + '</div>';
            }).join('');
            box.querySelectorAll('button[data-id]').forEach(btn =>
                btn.addEventListener('click', () => claim(Number(btn.dataset.id), btn)));
        } catch (e) {
            box.innerHTML = '<p class="badge-msg">Không kết nối được máy chủ. Hãy kiểm tra server đang chạy.</p>';
        }
    }

    async function claim(badgeId, btn) {
        const label = btn.textContent;
        try {
            if (!window.ethers) throw new Error('Thiếu thư viện ethers.');
            if (!wallet && !(await connectWallet())) return;
            btn.disabled = true;

            btn.textContent = 'Đang xin chữ ký…';
            const sRes = await fetch(API + '/nft/sign', { method: 'POST', headers: authHeaders(), body: JSON.stringify({ badgeId, wallet }) });
            const s = await sRes.json();
            if (!s.success) throw new Error(s.message || 'Chưa đủ điều kiện nhận huy hiệu.');

            btn.textContent = 'Xác nhận trong ví…';
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(s.contract, CLAIM_ABI, signer);
            const tx = await contract.claim(badgeId, s.deadline, s.signature);

            btn.textContent = 'Đang ghi lên blockchain…';
            await tx.wait();

            btn.textContent = 'Đang ghi nhận…';
            let confirmed = null;
            for (let i = 0; i < 5; i++) {
                const cRes = await fetch(API + '/nft/confirm', { method: 'POST', headers: authHeaders(), body: JSON.stringify({ badgeId, txHash: tx.hash }) });
                confirmed = await cRes.json();
                if (confirmed.success || cRes.status !== 409) break;
                await new Promise(r => setTimeout(r, 2000));
            }
            if (!confirmed || !confirmed.success) throw new Error((confirmed && confirmed.message) || 'Chưa ghi nhận được.');
            toast('🎉 Chúc mừng! Bạn đã nhận huy hiệu NFT.', 'ok');
        } catch (e) {
            console.error(e);
            toast(friendly(e), 'err');
        } finally {
            btn.disabled = false; btn.textContent = label;
            loadBadges();
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('btnWallet')?.addEventListener('click', connectWallet);
        if (window.ethereum && window.ethereum.on) {
            window.ethereum.on('accountsChanged', a => {
                wallet = a[0] || null;
                const btn = document.getElementById('btnWallet');
                if (btn) btn.textContent = wallet ? '✅ ' + wallet.slice(0, 6) + '…' + wallet.slice(-4) : 'Kết nối ví';
            });
        }
        loadBadges();
    });
})();