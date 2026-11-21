// ===== INTRO STARS =====
// Chạy trên máy mình thì gọi localhost, còn trên web thật (cmw.id.vn) thì gọi cùng domain qua /api
const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:3000/api'
  : '/api';

// Chống XSS: escape mọi dữ liệu từ server trước khi chèn vào innerHTML
function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('intro-stars');
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'intro-star';
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${2+Math.random()*4}s;--delay:${Math.random()*4}s;`;
    container.appendChild(s);
  }
});

// ===== PARTICLES (chạy sau khi intro đóng) =====
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });

  const SYMBOLS = ['⚔', '🛡', '★', '✦', '◆', '▲'];
  const particles = Array.from({length: 38}, () => ({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-0.5)*0.4, vy: -0.2-Math.random()*0.4,
    size: 8+Math.random()*14,
    sym: SYMBOLS[Math.floor(Math.random()*SYMBOLS.length)],
    alpha: 0.1+Math.random()*0.3,
    color: Math.random()>0.5 ? '#F39C12' : '#C0392B',
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.sym, p.x, p.y);
      p.x += p.vx; p.y += p.vy;
      if (p.y < -20) { p.y = H+10; p.x = Math.random()*W; }
      if (p.x < -20) p.x = W+10;
      if (p.x > W+20) p.x = -10;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== CONFETTI =====
function launchConfetti() {
  const colors = ['#C0392B','#F39C12','#F1C40F','#27AE60','#2980B9','#fff','#E74C3C'];
  for (let i = 0; i < 90; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const color = colors[Math.floor(Math.random()*colors.length)];
    const size = 6+Math.random()*10;
    el.style.cssText = `
      left:${Math.random()*100}vw;
      width:${size}px; height:${size}px;
      background:${color};
      --dur:${2+Math.random()*2}s;
      --delay:${Math.random()*0.8}s;
      --dx:${(Math.random()-0.5)*120}px;
      --br:${Math.random()>0.5?'50%':'2px'};
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3800);
  }
}

// ===== ÂM THANH (Web Audio API — không cần file mp3) =====
let audioCtx = null;

function playIntroSound() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Chuỗi nốt nhạc "heroic" đơn giản
    const notes = [261.6, 329.6, 392, 523.3, 659.3];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, audioCtx.currentTime + i*0.12);
      gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + i*0.12 + 0.05);
      gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + i*0.12 + 0.25);
      osc.start(audioCtx.currentTime + i*0.12);
      osc.stop(audioCtx.currentTime + i*0.12 + 0.3);
    });
  } catch(e) {}
}

function playCorrectSound() {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.type = 'triangle'; osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.3);
    osc.start(); osc.stop(audioCtx.currentTime + 0.3);
  } catch(e) {}
}

function playWrongSound() {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.type = 'sawtooth'; osc.frequency.value = 180;
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.35);
    osc.start(); osc.stop(audioCtx.currentTime + 0.35);
  } catch(e) {}
}

// ===== BẮT ĐẦU (nút intro) =====
function startGame() {
  playIntroSound();
  launchConfetti();
  document.getElementById('intro-screen').classList.add('hide');
  initParticles();
}

// ===== localStorage HELPERS =====
function saveProgress(key, value) {
  try { localStorage.setItem('suviet_' + key, JSON.stringify(value)); } catch(e) {}
}
function loadProgress(key, fallback) {
  try {
    const v = localStorage.getItem('suviet_' + key);
    if (v === null) return fallback;
    const parsed = JSON.parse(v);
    if (typeof parsed === 'number' && isNaN(parsed)) return fallback;
    return parsed;
  } catch(e) { return fallback; }
}
// ===== XP & LEVEL =====
let totalXP = loadProgress('xp', 0);

const LEVEL_NAMES = [
  'Sử Học Sinh', 'Học Trò Lịch Sử', 'Chiến Binh Sử', 
  'Dũng Sĩ Lịch Sử', 'Hiệp Sĩ Sử Học', 'Đại Nhân Lịch Sử',
  'Bậc Thầy Sử Học', 'Huyền Thoại Lịch Sử'
];

function getLevelInfo(xp) {
  const level = Math.floor(xp / 100) + 1;
  const capped = Math.min(level, LEVEL_NAMES.length);
  return {
    level: capped,
    name: LEVEL_NAMES[capped - 1],
    progress: xp % 100
  };
}

function addXP(amount) {
  // Chặn NaN ngay từ đầu
  if (typeof amount !== 'number' || isNaN(amount) || !isFinite(amount)) return;
  const oldLevel = getLevelInfo(totalXP).level;
  totalXP += amount;
  // Đảm bảo totalXP không bao giờ là NaN
  if (isNaN(totalXP)) totalXP = 0;
  saveProgress('xp', totalXP);

  const info = getLevelInfo(totalXP);

  const xpEl = document.getElementById('xp-count');
  if (xpEl) xpEl.textContent = totalXP;

  const fillEl = document.getElementById('xp-fill');
  if (fillEl) fillEl.style.width = info.progress + '%';

  const levelEl = document.getElementById('level-count');
  if (levelEl) levelEl.textContent = info.level + ' — ' + info.name;

  // Level up toast
  if (info.level > oldLevel) {
    showToast(`🎊 Lên cấp ${info.level}: ${info.name}!`, '🎊');
    launchConfetti();
  }

  if (typeof updateLeaderboard === 'function') updateLeaderboard();

  // Đồng bộ XP lên server
  try {
    const token = localStorage.getItem('token');
    if (token && amount > 0) {
      fetch(API + '/exp/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
        body: JSON.stringify({ amount, source_type: 'GAME', note: 'Game XP' })
      }).catch(() => {});
    }
  } catch(e) {}
}                          // ← THÊM DÒNG NÀY — đóng hàm addXP()

function initXPDisplay() {
  const info = getLevelInfo(totalXP);
  const xpEl = document.getElementById('xp-count');
  if (xpEl) xpEl.textContent = totalXP;
  const fillEl = document.getElementById('xp-fill');
  if (fillEl) fillEl.style.width = info.progress + '%';
  const levelEl = document.getElementById('level-count');
  if (levelEl) levelEl.textContent = info.level + ' — ' + info.name;
}

// ===== TOAST =====
let toastTimer = null;

function showToast(msg, icon = '⚡') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const msgEl = document.getElementById('toast-msg');
  const iconEl = document.getElementById('toast-icon');

  if (msgEl) msgEl.textContent = msg;
  if (iconEl) iconEl.textContent = icon;

  toast.classList.add('show');

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}
// ===== LOADING SCREEN =====
const LOADING_MESSAGES = [
  '⚔️ Đang chuẩn bị chiến trường...',
  '📜 Lật giở trang sử...',
  '🐉 Triệu hồi anh hùng dân tộc...',
  '🏹 Mài kiếm sắc bén...',
  '🎯 Tập hợp quân sĩ...',
  '🗺️ Vẽ bản đồ hành trình...',
];

function showLoadingThenGame(gameId, btn) {
  const overlay = document.getElementById('game-loading');
  const fill    = document.getElementById('loading-bar-fill');
  const text    = document.getElementById('loading-text');
  if (!overlay) { showGame(gameId, btn); return; }

  // Random câu loading
  text.textContent = LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];

  // Reset bar
  fill.style.width = '0%';
  overlay.classList.remove('hiding');
  overlay.style.display = 'flex';

  // Animate bar 0→100% trong ~900ms
  let pct = 0;
  const interval = setInterval(() => {
    pct += 2;
    fill.style.width = pct + '%';
    if (pct >= 100) {
      clearInterval(interval);
      // Fade out rồi chuyển game
      setTimeout(() => {
        overlay.classList.add('hiding');
        setTimeout(() => {
          overlay.style.display = 'none';
          overlay.classList.remove('hiding');
          showGame(gameId, btn);
        }, 400);
      }, 150);
    }
  }, 18);
}
// ===== TAB / GAME SWITCH =====
function showGame(id, btn) {
  document.querySelectorAll('.game-panel').forEach(p => {
    p.classList.remove('active');
  });

  const game = document.getElementById(id);
  if (game) game.classList.add('active');

  // Nếu truyền btn thì dùng btn, không thì tự tìm tab tương ứng theo aria-controls
  const targetBtn = btn || document.querySelector(`.tab-btn[aria-controls="${id}"]`);
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (targetBtn) targetBtn.classList.add('active');
}


// 🏷️ Bỏ hậu tố "(@username)" (nếu có) để lấy đúng họ tên gốc khi tính chữ viết tắt avatar
function getCleanNameForInitials(name) {
  return (name || '').replace(/\s*\(@[^)]*\)\s*$/, '');
}

// ===== BẢNG XẾP HẠNG THẬT =====
// ===== BẢNG XẾP HẠNG CỔ TRANG =====
async function updateLeaderboard() {
  const lb = document.getElementById('lb-list');
  if (!lb) return;

  try {
    const token = localStorage.getItem('token');
    const res = await fetch(API + '/leaderboard', {
      headers: token ? { 'Authorization': 'Bearer ' + token } : {}
    });
    const json = await res.json();
    if (!json.success) return;

    const me = JSON.parse(localStorage.getItem('user') || '{}');
    const top = json.data;
    const myRank = json.myRank;

    // Xây dựng cấu trúc cuộn giấy
    const wrap = lb.closest('.leaderboard');
    if (wrap) {
      wrap.innerHTML = `
        <div class="lb-scroll-top">
          <div class="lb-scroll-title">⚔ BẢNG XẾP HẠNG ⚔</div>
        </div>
        <div class="lb-bg">
          <div class="lb-ornament">✦ ◆ ✦</div>
          <div id="lb-rows"></div>
          <div class="lb-scroll-bottom">
            <div class="lb-scroll-footer">✦ Sử Việt · Lịch sử dân tộc trường tồn ✦</div>
          </div>
        </div>
      `;

      const rows = document.getElementById('lb-rows');

      const medals  = ['lb-gold', 'lb-silver', 'lb-bronze'];
      const icons   = ['🥇', '🥈', '🥉'];

      top.forEach(u => {
        const isMine  = u.id === me.id;
        const pos     = u.rank_pos;
        const cls     = pos <= 3 ? medals[pos - 1] : '';
        const icon    = pos <= 3 ? icons[pos - 1] : null;
        const initials = getCleanNameForInitials(u.fullname || u.username || '?')
          .split(' ').slice(-2)
          .map(w => w[0]).join('').toUpperCase().slice(0, 2);

        const row = document.createElement('div');
        row.className = 'lb-item ' + cls + (isMine ? ' lb-me' : '');
        row.innerHTML = `
          ${icon
            ? `<div class="lb-rank-icon">${icon}</div>`
            : `<div class="lb-rank-num">#${pos}</div>`
          }
          <div class="lb-avatar${isMine ? ' lb-avatar-me' : ''}">${esc(initials)}</div>
          <div class="lb-info">
            <div class="lb-name">
              ${esc(u.fullname || u.username)}
              ${isMine ? '<span class="lb-me-tag">← Bạn</span>' : ''}
            </div>
            <div class="lb-rank-title">${esc(u.rank_title || 'Học Sinh')}</div>
          </div>
          <div class="lb-xp-wrap">
            <div class="lb-xp-num${isMine ? ' lb-xp-me' : ''}">⚡ ${(u.exp || 0).toLocaleString()}</div>
            <div class="lb-xp-lv">Lv.${esc(u.level || 1)}</div>
          </div>
        `;
        rows.appendChild(row);
      });

      // Nếu mình ngoài top 10
      if (myRank && myRank.rank_pos > 10) {
        const sep = document.createElement('div');
        sep.className = 'lb-sep-dots';
        sep.textContent = '• • •';
        rows.appendChild(sep);

        const initials = getCleanNameForInitials(myRank.fullname || myRank.username || '?')
          .split(' ').slice(-2)
          .map(w => w[0]).join('').toUpperCase().slice(0, 2);

        const myRow = document.createElement('div');
        myRow.className = 'lb-item lb-me';
        myRow.innerHTML = `
          <div class="lb-rank-num" style="color:#F08070;">#${myRank.rank_pos}</div>
          <div class="lb-avatar lb-avatar-me">${esc(initials)}</div>
          <div class="lb-info">
            <div class="lb-name">
              ${esc(myRank.fullname || myRank.username)}
              <span class="lb-me-tag">← Bạn</span>
            </div>
            <div class="lb-rank-title">${esc(myRank.rank_title || 'Học Sinh')}</div>
          </div>
          <div class="lb-xp-wrap">
            <div class="lb-xp-num lb-xp-me">⚡ ${(myRank.exp || 0).toLocaleString()}</div>
            <div class="lb-xp-lv">Lv.${esc(myRank.level || 1)}</div>
          </div>
        `;
        rows.appendChild(myRow);
      }

    } else {
      // Fallback nếu không có .leaderboard wrap
      lb.innerHTML = '<p style="color:rgba(200,145,58,0.5);text-align:center;padding:16px;">Đang tải...</p>';
    }

  } catch(e) {
    const lb2 = document.getElementById('lb-list');
    if (lb2) lb2.innerHTML =
      '<p style="color:rgba(200,145,58,0.4);text-align:center;padding:16px;">Không thể tải bảng xếp hạng</p>';
  }
}
// ===== SYNC XP LÊN SERVER =====
function syncXPToServer(amount, sourceType, note) {
  if (!amount || amount <= 0) return;
  const token = localStorage.getItem('token');
  if (!token) return;
  
  fetch(API + '/exp/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
      amount: amount,
      source_type: sourceType || 'GAME',
      note: note || ''
    })
  }).catch(err => console.log('Lỗi sync XP:', err));
}

// ===== START GAME =====
document.addEventListener('DOMContentLoaded', () => {
  initXPDisplay();

  if (typeof buildActiveQuiz === 'function') buildActiveQuiz();
  if (typeof renderQuiz === 'function') renderQuiz();
  if (typeof renderJourney === 'function') renderJourney();
  if (typeof renderCollection === 'function') renderCollection();
  if (typeof updateLeaderboard === 'function') {
    updateLeaderboard();
  }
});
// ===== SCROLL GAME TABS =====
function scrollGameTabs(dir) {
  const wrap = document.getElementById('gameTabsScroll');
  if (wrap) wrap.scrollBy({ left: dir * 150, behavior: 'smooth' });
}