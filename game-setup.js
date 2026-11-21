// ========== GAME SETUP SYSTEM ==========
// File này quản lý: Chọn chủ đề + Số câu hỏi trước khi chơi

// 🔧 CONFIG: Định nghĩa topics cho từng game
const GAME_SETUP_CONFIG = {
  'game-1': {
    name: '🎯 Đoán Nhân Vật',
    topics: [
      { label: '👥 Tất cả nhân vật', value: 'all' },
      { label: '⚔️ Anh hùng kháng chiến', value: 'resistance' },
      { label: '👑 Hoàng đế - Vua chúa', value: 'emperor' },
      { label: '👩 Nữ anh hùng', value: 'female' },
      { label: '🎖️ Quân sư - Tướng quân', value: 'general' },
      { label: '✍️ Danh nhân văn hóa', value: 'culture' },
    ],
  },
  'game-2': {
    name: '🎪 Kéo Thả Sự Kiện',
    topics: [
      { label: '📅 Tất cả sự kiện', value: 'all' },
      { label: '⚔️ Kháng chiến cổ đại', value: 'ancient' },
      { label: '🔫 Kháng chiến hiện đại', value: 'modern' },
      { label: '👑 Triều đại', value: 'dynasty' },
    ],
  },
  'game-3': {
    name: '📚 Quiz Thử Thách',
    topics: [
      { label: '📖 Tất cả chủ đề', value: 'Tất cả' },
      { label: '⚔️ Chống ngoại xâm', value: 'Chống ngoại xâm' },
      { label: '👤 Danh nhân', value: 'Danh nhân' },
      { label: '👑 Triều đại', value: 'Triều đại' },
      { label: '✍️ Văn học - Văn hóa', value: 'Văn học-Văn hóa' },
      { label: '🔫 Thời hiện đại', value: 'Thời hiện đại' },
    ],
  },
  'game-4': {
    name: '⏳ Hành Trình Thời Gian',
    topics: [
      { label: '📅 Tất cả sự kiện', value: 'all' },
      { label: '🏛️ Cổ đại - Trung đại', value: 'ancient' },
      { label: '⚔️ Chiến trận nổi tiếng', value: 'battle' },
      { label: '👑 Triều đại & Lãnh đạo', value: 'dynasty' },
      { label: '🔫 Hiện đại & Cách mạng', value: 'modern' },
    ],
  },
  'game-5': {
    name: '🎡 Vòng Quay Lịch Sử',
    topics: [
      { label: '🎲 Tất cả chủ đề', value: 'all' },
      { label: '⚔️ Chiến trận', value: 'battle' },
      { label: '👑 Triều đại', value: 'dynasty' },
      { label: '👤 Nhân vật', value: 'person' },
      { label: '📅 Năm tháng', value: 'year' },
      { label: '🗺️ Địa danh', value: 'place' },
      { label: '✍️ Văn hóa', value: 'culture' },
    ],
  },
};

const QUESTION_COUNTS = [5, 10, 20];

// 📍 STATE
let gameSetupState = {
  currentGame: null,
  selectedTopic: 'all',
  selectedCount: 10,
};

// ========== CORE FUNCTIONS ==========

/**
 * Cập nhật tab nào đang active trên thanh game-tabs.
 * Dùng chung cho mọi tab (game 1-5 + sưu tập) để đồng bộ với showGame().
 */
function setActiveTab(btn) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }
}

/**
 * Hiển thị modal chọn chủ đề + số câu
 * ✅ FIX: nhận thêm tham số btn (nút tab vừa bấm) để cập nhật class active,
 * giống cách showGame('g6', this) đang làm cho tab Sưu Tập.
 * Nếu không truyền btn (gọi từ nơi khác), fallback dùng window.event để vẫn hoạt động
 * mà không cần sửa HTML onclick="showGameSetup('game-1')".
 */
function showGameSetup(gameId, btn) {
  const config = GAME_SETUP_CONFIG[gameId];
  if (!config) {
    console.error('Game config không tìm thấy:', gameId);
    return;
  }

  // ✅ FIX CHÍNH: cập nhật active cho đúng tab vừa bấm
  const clickedBtn = btn || window.event?.currentTarget || window.event?.target?.closest('.tab-btn');
  setActiveTab(clickedBtn);

  gameSetupState.currentGame = gameId;
  gameSetupState.selectedTopic = 'all';
  gameSetupState.selectedCount = 10;

  // Reset modal
  const modal = document.getElementById('game-setup-modal');
  if (!modal) {
    console.error('game-setup-modal HTML không tìm thấy!');
    return;
  }

  // Update title
  document.getElementById('setup-title').textContent = config.name;

  // Render topics
  const topicGrid = document.getElementById('setup-topics');
  topicGrid.innerHTML = '';
  config.topics.forEach(topic => {
    const tBtn = document.createElement('button');
    tBtn.className = 'setup-topic-btn';
    tBtn.dataset.value = topic.value;
    if (topic.value === gameSetupState.selectedTopic) tBtn.classList.add('active');
    tBtn.innerHTML = `<span>${topic.label}</span>`;
    tBtn.onclick = () => selectTopic(topic.value);
    topicGrid.appendChild(tBtn);
  });

  // Render counts (tách hàm riêng để gọi lại khi đổi chủ đề)
  renderSetupCounts(gameId);

  // Show modal
  modal.classList.add('show');
  modal.style.display = 'flex';
}

/**
 * Chọn chủ đề
 */
/**
 * Render các nút chọn số câu hỏi.
 * Tự động khóa (disable) số câu vượt quá số câu thực có của chủ đề đang chọn.
 */
function renderSetupCounts(gameId) {
  const countGrid = document.getElementById('setup-counts');
  countGrid.innerHTML = '';

  // Đếm số câu thực có theo chủ đề đang chọn — chỉ áp dụng cho game-3 (có quizData)
  let poolSize = Infinity;
  if (gameId === 'game-3' && typeof quizData !== 'undefined') {
    poolSize = gameSetupState.selectedTopic === 'Tất cả'
      ? quizData.length
      : quizData.filter(q => q.topic === gameSetupState.selectedTopic).length;
  }

  QUESTION_COUNTS.forEach(count => {
    const cBtn = document.createElement('button');
    cBtn.className = 'setup-count-btn';
    cBtn.dataset.count = count;
    const disabled = count > poolSize;

    if (disabled) {
      cBtn.disabled = true;
      cBtn.style.opacity = '0.4';
      cBtn.style.cursor = 'not-allowed';
      cBtn.innerHTML = `<span>${count}</span><small>câu (chỉ có ${poolSize})</small>`;
    } else {
      cBtn.innerHTML = `<span>${count}</span><small>câu</small>`;
      cBtn.onclick = () => selectCount(count);
      if (count === gameSetupState.selectedCount) cBtn.classList.add('active');
    }

    countGrid.appendChild(cBtn);
  });

  // Nếu số câu đang chọn bị khóa (do đổi chủ đề), tự động chọn lại số hợp lệ lớn nhất
  if (gameSetupState.selectedCount > poolSize) {
    const validCounts = QUESTION_COUNTS.filter(c => c <= poolSize);
    if (validCounts.length > 0) {
      selectCount(validCounts[validCounts.length - 1]);
      renderSetupCounts(gameId); // render lại để cập nhật nút active đúng
    }
  }
}
function selectTopic(topicValue) {
  gameSetupState.selectedTopic = topicValue;
  document.querySelectorAll('.setup-topic-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === topicValue);
  });
  // Render lại số câu vì pool có thể thay đổi theo chủ đề mới
  renderSetupCounts(gameSetupState.currentGame);
}

/**
 * Chọn số câu
 */
function selectCount(count) {
  gameSetupState.selectedCount = count;
  document.querySelectorAll('.setup-count-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.count) === count);
  });
}

/**
 * Đóng modal
 * Lưu ý: KHÔNG bỏ active của tab khi đóng modal (Hủy) — tab vẫn nên giữ trạng thái
 * đang được chọn vì nội dung panel tương ứng vẫn đang hiển thị phía sau modal.
 */
function closeGameSetup() {
  const modal = document.getElementById('game-setup-modal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
}

/**
 * Lưu config & khởi động game
 */
function startGameWithSetup() {
  // Lưu setup vào localStorage
  const setupData = {
    topic: gameSetupState.selectedTopic,
    count: gameSetupState.selectedCount,
    timestamp: Date.now(),
  };
  localStorage.setItem('gameSetup_' + gameSetupState.currentGame, JSON.stringify(setupData));

  // Close modal
  closeGameSetup();

  // Khởi động game tương ứng
  const startFunctions = {
    'game-1': () => startGame1WithSetup?.(),
    'game-2': () => startGame2WithSetup?.(),
    'game-3': () => startGame3WithSetup?.(),
    'game-4': () => startGame4WithSetup?.(),
    'game-5': () => startGame5WithSetup?.(),
  };

  const gameId = gameSetupState.currentGame;
const tabBtn = document.querySelector(`.tab-btn[aria-controls="${gameId.replace('game-','g')}"]`);
const startFn = startFunctions[gameId];
if (startFn) {
  showLoadingThenGame(gameId.replace('game-','g'), tabBtn);
  setTimeout(startFn, 400); // chạy game sau khi loading bắt đầu
}
   else {
    console.error('Không tìm thấy hàm khởi động cho:', gameSetupState.currentGame);
  }

  showToast('✅ Bắt đầu chơi!', '🎮');
}

/**
 * Lấy setup data từ localStorage
 */
function getGameSetup(gameId) {
  const data = localStorage.getItem('gameSetup_' + gameId);
  if (data) {
    return JSON.parse(data);
  }
  // Default
  return {
    topic: 'all',
    count: 10,
  };
}

// ========== EXPORT cho các game file ==========
// Các game sử dụng: getGameSetup('game-1') để lấy config
// ══ THỬ THÁCH HÀNG NGÀY — đọc ?daily=1&mode=...&topic=...&count=..., khoá setup, tự bắt đầu ══
(function initDailyChallenge() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('daily') !== '1') return;

  const gameId = params.get('mode');
  const topic = params.get('topic');
  const count = parseInt(params.get('count'), 10);
  if (!gameId || !GAME_SETUP_CONFIG[gameId] || !topic || !count) return;

  window.DAILY_CHALLENGE_MODE = true;

  // Ghi thẳng setup vào localStorage, bỏ qua modal chọn chủ đề/số câu
  localStorage.setItem('gameSetup_' + gameId, JSON.stringify({
    topic, count, timestamp: Date.now(), daily: true,
  }));

  document.addEventListener('DOMContentLoaded', () => {
    const tabBtn = document.querySelector(`.tab-btn[aria-controls="${gameId.replace('game-', 'g')}"]`);
    setActiveTab(tabBtn);

    const startFunctions = {
      'game-1': () => startGame1WithSetup?.(),
      'game-2': () => startGame2WithSetup?.(),
      'game-3': () => startGame3WithSetup?.(),
      'game-4': () => startGame4WithSetup?.(),
      'game-5': () => startGame5WithSetup?.(),
    };
    const startFn = startFunctions[gameId];
    if (startFn) {
      showLoadingThenGame(gameId.replace('game-', 'g'), tabBtn);
      setTimeout(startFn, 400);
    }
  });
})();