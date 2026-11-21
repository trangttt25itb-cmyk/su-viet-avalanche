// ===== badge-routes.js (BACKEND Express) =====
// Cài: npm i ethers
// .env cần có (KHÔNG đưa lên GitHub):
//   BADGE_SIGNER_KEY=0x...   <- khoá ví RIÊNG chỉ để ký (ví mới, không chứa tiền)
//   BADGE_CONTRACT=0x...     <- địa chỉ contract SuVietBadge mới trên Fuji
//
// Dùng trong server của bạn:
//   require('./badge-routes')(app, authMiddleware, isCardUnlockedInDB);
const { ethers } = require('ethers');

const signer = new ethers.Wallet(process.env.BADGE_SIGNER_KEY);
const DOMAIN = {
  name: 'SuVietBadge',
  version: '1',
  chainId: 43113, // Fuji
  verifyingContract: process.env.BADGE_CONTRACT,
};
const TYPES = {
  Claim: [
    { name: 'to', type: 'address' },
    { name: 'id', type: 'uint256' },
    { name: 'deadline', type: 'uint256' },
  ],
};

// authMiddleware: middleware JWT hiện có của bạn (gắn req.user)
// isCardUnlockedInDB(userId, badgeId): hàm bạn viết, trả true nếu SQL Server ghi nhận
//   người dùng này ĐÃ đủ điều kiện nhận thẻ đó (KHÔNG tin dữ liệu từ localStorage).
module.exports = function (app, authMiddleware, isCardUnlockedInDB) {
  app.post('/api/badge/sign', authMiddleware, async (req, res) => {
    try {
      const { wallet, badgeId } = req.body || {};
      if (!ethers.isAddress(wallet) || !Number.isInteger(badgeId) || badgeId < 1 || badgeId > 1000) {
        return res.status(400).json({ success: false, message: 'Dữ liệu không hợp lệ' });
      }
      const ok = await isCardUnlockedInDB(req.user.id, badgeId); // đổi req.user.id cho khớp code của bạn
      if (!ok) {
        return res.status(403).json({ success: false, message: 'Bạn chưa đủ điều kiện nhận huy hiệu này' });
      }
      const deadline = Math.floor(Date.now() / 1000) + 600; // chữ ký có hạn 10 phút
      const signature = await signer.signTypedData(DOMAIN, TYPES, { to: wallet, id: badgeId, deadline });
      res.json({ success: true, deadline, signature });
    } catch (e) {
      console.error('badge/sign error:', e);
      res.status(500).json({ success: false, message: 'Lỗi máy chủ' });
    }
  });
};
