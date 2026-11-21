// ===== badge-claim-frontend.js (TRANG WEB) =====
// Thêm vào trang game (trước các file khác):
//   <script src="https://cdn.jsdelivr.net/npm/ethers@6.13.4/dist/ethers.umd.min.js"></script>
//   <script src="badge-claim-frontend.js"></script>
// Gọi từ nút "Nhận NFT" trong cửa sổ chi tiết thẻ:  claimBadge(card.order)
// (badgeId = số thứ tự thẻ, khớp với metadata /badges/<id>.json)

const BADGE_CONTRACT = '0xDIA_CHI_CONTRACT_MOI'; // thay bằng địa chỉ contract mới deploy
const FUJI = {
  chainId: '0xA869', // 43113
  chainName: 'Avalanche Fuji Testnet',
  nativeCurrency: { name: 'AVAX', symbol: 'AVAX', decimals: 18 },
  rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
};
const BADGE_ABI = ['function claim(uint256 id, uint256 deadline, bytes signature)'];

async function connectFuji() {
  if (!window.ethereum) throw new Error('Bạn cần cài ví Core hoặc MetaMask');
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  try {
    await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: FUJI.chainId }] });
  } catch (e) {
    if (e.code === 4902) await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [FUJI] });
    else throw e;
  }
  const provider = new ethers.BrowserProvider(window.ethereum);
  return provider.getSigner();
}

async function claimBadge(badgeId) {
  try {
    const signer = await connectFuji();
    const wallet = await signer.getAddress();

    // 1) Xin chữ ký từ server (server kiểm tra thành tích trong database)
    const res = await fetch(API + '/badge/sign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('token') },
      body: JSON.stringify({ wallet, badgeId }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Chưa đủ điều kiện nhận huy hiệu');

    // 2) Người học tự gửi giao dịch claim, contract kiểm tra chữ ký on-chain
    showToast('⏳ Đang gửi giao dịch...', '⏳');
    const contract = new ethers.Contract(BADGE_CONTRACT, BADGE_ABI, signer);
    const tx = await contract.claim(badgeId, data.deadline, data.signature);
    await tx.wait();
    showToast('🏅 Đã nhận huy hiệu NFT!', '🏅');
    return tx.hash; // hiển thị link giao dịch trên explorer của Fuji
  } catch (e) {
    console.error(e);
    showToast('❌ ' + (e.shortMessage || e.message || 'Không nhận được huy hiệu'), '❌');
  }
}
