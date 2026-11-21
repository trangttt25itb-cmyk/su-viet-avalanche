// ========== GAME 4: HÀNH TRÌNH XUYÊN THỜI GIAN - NÂNG CẤP ==========

const GAME4_TOPICS = [
  { label: '📅 Tất cả sự kiện', value: 'all' },
  { label: '🏛️ Cổ đại - Trung đại', value: 'ancient' },
  { label: '⚔️ Chiến trận nổi tiếng', value: 'battle' },
  { label: '👑 Triều đại & Lãnh đạo', value: 'dynasty' },
  { label: '🔫 Hiện đại & Cách mạng', value: 'modern' },
];

const journeyRounds = [
  // ===== VÒNG 1: Cổ đại (40-1010) =====
  {
    events: [
      { id: 'j1', text: 'Hai Bà Trưng khởi nghĩa', year: 40, topic: 'ancient' },
      { id: 'j2', text: 'Ngô Quyền — Bạch Đằng', year: 938, topic: 'battle' },
      { id: 'j3', text: 'Đinh Bộ Lĩnh thống nhất', year: 968, topic: 'dynasty' },
      { id: 'j4', text: 'Lý Công Uẩn dời đô Thăng Long', year: 1010, topic: 'dynasty' },
      { id: 'j5', text: 'Bà Triệu cưỡi voi xung trận', year: 248, topic: 'ancient' },
    ]
  },
  // ===== VÒNG 2: Triều Lý - Trần (1077-1288) =====
  {
    events: [
      { id: 'j6', text: 'Lý Thường Kiệt — sông Như Nguyệt', year: 1077, topic: 'battle' },
      { id: 'j7', text: 'Trần Hưng Đạo — Bạch Đằng lần 3', year: 1288, topic: 'battle' },
      { id: 'j8', text: 'Nguyễn Trãi học với Lê Lợi', year: 1418, topic: 'dynasty' },
      { id: 'j9', text: 'Trần Nhân Tông lên ngôi', year: 1278, topic: 'dynasty' },
      { id: 'j10', text: 'Chiến dịch Tây Kết thắng lợi', year: 1258, topic: 'battle' },
    ]
  },
  // ===== VÒNG 3: Lê & Nguyễn (1428-1558) =====
  {
    events: [
      { id: 'j11', text: 'Lê Lợi lập nhà Lê Sơ', year: 1428, topic: 'dynasty' },
      { id: 'j12', text: 'Nguyễn Hoàng vào Nam Định cư', year: 1558, topic: 'dynasty' },
      { id: 'j13', text: 'Bình Ngô đại cáo tuyên bố độc lập', year: 1427, topic: 'ancient' },
      { id: 'j14', text: 'Lý Thái Tổ dời đô Thăng Long', year: 1010, topic: 'dynasty' },
      { id: 'j15', text: 'Chiến dịch Tây Sơn dẹp loạn', year: 1427, topic: 'battle' },
    ]
  },
  // ===== VÒNG 4: Tây Sơn & Anh Hùng (1789-1858) =====
  {
    events: [
      { id: 'j16', text: 'Quang Trung đại phá quân Thanh', year: 1789, topic: 'battle' },
      { id: 'j17', text: 'Nguyễn Ánh lập nhà Nguyễn', year: 1802, topic: 'dynasty' },
      { id: 'j18', text: 'Pháp tấn công Đà Nẵng', year: 1858, topic: 'modern' },
      { id: 'j19', text: 'Phong trào chống Pháp bắt đầu', year: 1858, topic: 'battle' },
      { id: 'j20', text: 'Nguyễn Huệ xưng vương Tây Sơn', year: 1777, topic: 'dynasty' },
    ]
  },
  // ===== VÒNG 5: Thuộc địa Pháp (1867-1930) =====
  {
    events: [
      { id: 'j21', text: 'Pháp chiếm Nam Kỳ (6 tỉnh)', year: 1867, topic: 'modern' },
      { id: 'j22', text: 'Phong trào Cần Vương nổ ra', year: 1885, topic: 'battle' },
      { id: 'j23', text: 'Khởi nghĩa Yên Thế (Hoàng Hoa Thám)', year: 1884, topic: 'battle' },
      { id: 'j24', text: 'Phong trào Đông Du của Phan Bội Châu', year: 1905, topic: 'modern' },
      { id: 'j25', text: 'Đảng Cộng sản Việt Nam thành lập', year: 1930, topic: 'modern' },
    ]
  },
  // ===== VÒNG 6: Cách mạng Tháng Tám (1945) =====
  {
    events: [
      { id: 'j26', text: 'Tuyên ngôn Độc lập 2/9/1945', year: 1945, topic: 'modern' },
      { id: 'j27', text: 'Cách mạng Tháng Tám thắng lợi', year: 1945, topic: 'battle' },
      { id: 'j28', text: 'Hồ Chí Minh đọc tuyên ngôn', year: 1945, topic: 'dynasty' },
      { id: 'j29', text: 'Quốc dân đảng hoạt động chống Nhật', year: 1941, topic: 'battle' },
      { id: 'j30', text: 'Mặt trận Việt Minh thành lập', year: 1941, topic: 'modern' },
    ]
  },
  // ===== VÒNG 7: Kháng Pháp (1946-1954) =====
  {
    events: [
      { id: 'j31', text: 'Chiến dịch Điện Biên Phủ', year: 1954, topic: 'battle' },
      { id: 'j32', text: 'Chiến thắng Tây Bắc (Sơn La, Điện Biên Phủ)', year: 1952, topic: 'battle' },
      { id: 'j33', text: 'Hiệp định Genève ký kết', year: 1954, topic: 'modern' },
      { id: 'j34', text: 'Quân Pháp rút khỏi Việt Nam', year: 1954, topic: 'modern' },
      { id: 'j35', text: 'Đại ngũ chủ Võ Nguyên Giáp lãnh đạo', year: 1950, topic: 'dynasty' },
    ]
  },
  // ===== VÒNG 8: Kháng Mỹ (1964-1973) =====
  {
    events: [
      { id: 'j36', text: 'Mỹ ném bom miền Bắc lần đầu', year: 1964, topic: 'modern' },
      { id: 'j37', text: 'Tết Mậu Thân - Chiến dịch quy mô', year: 1968, topic: 'battle' },
      { id: 'j38', text: 'Hiệp định Paris ký kết', year: 1973, topic: 'modern' },
      { id: 'j39', text: 'Cuộc chiến 20 năm chống Mỹ bắt đầu', year: 1955, topic: 'battle' },
      { id: 'j40', text: 'Chiến dịch Hồ Chí Minh chuẩn bị', year: 1973, topic: 'battle' },
    ]
  },
  // ===== VÒNG 9: Thống nhất (1974-1975) =====
  {
    events: [
      { id: 'j41', text: 'Tấn công Phú Bồn & Bình Định', year: 1974, topic: 'battle' },
      { id: 'j42', text: 'Chiến dịch Hồ Chí Minh bùng nổ', year: 1975, topic: 'battle' },
      { id: 'j43', text: 'Giải phóng Huế - Đà Nẵng', year: 1975, topic: 'battle' },
      { id: 'j44', text: 'Xe tăng Quân Giải phóng tiến vào Sài Gòn', year: 1975, topic: 'modern' },
      { id: 'j45', text: 'Ngày 30/4 - Nước Việt Nam hoàn toàn thống nhất', year: 1975, topic: 'modern' },
    ]
  },
  // ===== VÒNG 10: Các sự kiện nổi bật khác =====
  {
    events: [
      { id: 'j46', text: 'Lý Thường Kiệt đánh bại Nam Tông', year: 1077, topic: 'battle' },
      { id: 'j47', text: 'An Dương Vương xây thành Cổ Loa', year: -210, topic: 'ancient' },
      { id: 'j48', text: 'Lê Lai liều mình cứu chúa', year: 1419, topic: 'battle' },
      { id: 'j49', text: 'Chu Văn An - Vạn thế sư biểu', year: 1339, topic: 'dynasty' },
      { id: 'j50', text: 'Nguyễn Trãi soạn Bình Ngô đại cáo', year: 1427, topic: 'ancient' },
    ]
  },
  // ===== VÒNG 11-13: Bổ sung Cổ đại - Bắc thuộc (thêm 15 sự kiện) =====
  {
    events: [
      { id: 'j51', text: 'Triệu Đà lập nước Nam Việt', year: -207, topic: 'ancient' },
      { id: 'j52', text: 'An Dương Vương mất nước Âu Lạc', year: -179, topic: 'ancient' },
      { id: 'j53', text: 'Hai Bà Trưng hy sinh ở Hát Môn', year: 43, topic: 'ancient' },
      { id: 'j54', text: 'Lý Nam Đế lập nước Vạn Xuân', year: 544, topic: 'ancient' },
      { id: 'j55', text: 'Triệu Quang Phục đánh bại quân Lương', year: 550, topic: 'ancient' },
    ]
  },
  {
    events: [
      { id: 'j56', text: 'Mai Hắc Đế khởi nghĩa', year: 722, topic: 'ancient' },
      { id: 'j57', text: 'Phùng Hưng - Bố Cái Đại Vương khởi nghĩa', year: 791, topic: 'ancient' },
      { id: 'j58', text: 'Khúc Thừa Dụ giành quyền tự chủ', year: 905, topic: 'ancient' },
      { id: 'j59', text: 'Dương Đình Nghệ đánh bại quân Nam Hán', year: 931, topic: 'ancient' },
      { id: 'j60', text: 'Kiều Công Tiễn sát hại Dương Đình Nghệ', year: 937, topic: 'ancient' },
    ]
  },
  {
    events: [
      { id: 'j61', text: 'Ngô Quyền xưng vương, lập nhà Ngô', year: 939, topic: 'ancient' },
      { id: 'j62', text: 'Loạn 12 sứ quân bùng nổ', year: 965, topic: 'ancient' },
      { id: 'j63', text: 'Lê Hoàn lên ngôi, lập nhà Tiền Lê', year: 980, topic: 'ancient' },
      { id: 'j64', text: 'Lê Hoàn đại phá quân Tống', year: 981, topic: 'ancient' },
      { id: 'j65', text: 'Lý Công Uẩn lên ngôi, lập nhà Lý', year: 1009, topic: 'ancient' },
    ]
  },
  // ===== VÒNG 14: Bổ sung Triều đại & Lãnh đạo (thêm 8 sự kiện) =====
  {
    events: [
      { id: 'j66', text: 'Lý Thánh Tông đặt quốc hiệu Đại Việt', year: 1054, topic: 'dynasty' },
      { id: 'j67', text: 'Trần Thái Tông lập nhà Trần', year: 1225, topic: 'dynasty' },
      { id: 'j68', text: 'Hồ Quý Ly lập nhà Hồ', year: 1400, topic: 'dynasty' },
      { id: 'j69', text: 'Lê Thánh Tông ban hành Luật Hồng Đức', year: 1483, topic: 'dynasty' },
      { id: 'j70', text: 'Mạc Đăng Dung lập nhà Mạc', year: 1527, topic: 'dynasty' },
    ]
  },
  {
    events: [
      { id: 'j71', text: 'Trịnh - Nguyễn phân tranh bắt đầu', year: 1627, topic: 'dynasty' },
      { id: 'j72', text: 'Minh Mạng lên ngôi, cải cách hành chính', year: 1820, topic: 'dynasty' },
      { id: 'j73', text: 'Vua Bảo Đại thoái vị', year: 1945, topic: 'dynasty' },
      { id: 'j74', text: 'Nguyễn Tất Thành ra đi tìm đường cứu nước', year: 1911, topic: 'modern' },
      { id: 'j75', text: 'Xô Viết Nghệ Tĩnh bùng nổ', year: 1930, topic: 'modern' },
    ]
  },
  // ===== VÒNG 15: Bổ sung Hiện đại & Cách mạng (thêm 6 sự kiện) =====
  {
    events: [
      { id: 'j76', text: 'Nhật đảo chính Pháp tại Đông Dương', year: 1945, topic: 'modern' },
      { id: 'j77', text: 'Chiến dịch Biên Giới thắng lợi', year: 1950, topic: 'modern' },
      { id: 'j78', text: 'Phong trào Đồng Khởi Bến Tre', year: 1960, topic: 'modern' },
      { id: 'j79', text: 'Mặt trận Dân tộc Giải phóng miền Nam thành lập', year: 1960, topic: 'modern' },
      { id: 'j80', text: 'Chiến dịch Đường 9 - Nam Lào', year: 1971, topic: 'modern' },
      { id: 'j81', text: 'Việt Nam gia nhập Liên Hợp Quốc', year: 1977, topic: 'modern' },
    ]
  },
  // ===== VÒNG 16: Bổ sung Trịnh - Nguyễn phân tranh & Nam tiến =====
  {
    events: [
      { id: 'j82', text: 'Nguyễn Bỉnh Khiêm khuyên Nguyễn Hoàng "Hoành Sơn nhất đái"', year: 1558, topic: 'dynasty' },
      { id: 'j83', text: 'Đào Duy Từ giúp chúa Nguyễn xây lũy Thầy', year: 1630, topic: 'dynasty' },
      { id: 'j84', text: 'Chiến tranh Trịnh - Nguyễn kết thúc, hai bên đình chiến', year: 1672, topic: 'battle' },
      { id: 'j85', text: 'Chúa Nguyễn lập phủ Gia Định, mở mang bờ cõi phương Nam', year: 1698, topic: 'ancient' },
      { id: 'j86', text: 'Nghĩa quân Tây Sơn hạ thành Quy Nhơn', year: 1773, topic: 'battle' },
    ]
  },
  // ===== VÒNG 17: Bổ sung Tây Sơn & đầu triều Nguyễn =====
  {
    events: [
      { id: 'j87', text: 'Nguyễn Huệ ra Bắc lần 2, tiêu diệt họ Trịnh', year: 1786, topic: 'battle' },
      { id: 'j88', text: 'Nguyễn Ánh phản công, chiếm lại thành Gia Định', year: 1788, topic: 'battle' },
      { id: 'j89', text: 'Vua Quang Trung đột ngột qua đời', year: 1792, topic: 'dynasty' },
      { id: 'j90', text: 'Nguyễn Ánh đánh chiếm kinh thành Phú Xuân', year: 1801, topic: 'battle' },
      { id: 'j91', text: 'Nguyễn Ánh lên ngôi, lấy niên hiệu Gia Long', year: 1802, topic: 'dynasty' },
    ]
  },
  // ===== VÒNG 18: Bổ sung cận đại & hiện đại =====
  {
    events: [
      { id: 'j92', text: 'Trương Định khởi nghĩa chống Pháp ở Nam Kỳ', year: 1862, topic: 'battle' },
      { id: 'j93', text: 'Phan Đình Phùng lãnh đạo khởi nghĩa Hương Khê', year: 1885, topic: 'battle' },
      { id: 'j94', text: 'Nguyễn Ái Quốc gửi yêu sách đến Hội nghị Versailles', year: 1919, topic: 'modern' },
      { id: 'j95', text: 'Thực dân Pháp đàn áp đẫm máu phong trào Xô Viết Nghệ Tĩnh', year: 1931, topic: 'modern' },
      { id: 'j96', text: 'Việt Nam ký Hiệp định Thương mại song phương với Mỹ (BTA)', year: 2001, topic: 'modern' },
    ]
  },
  // ===== VÒNG 19: Bổ sung nhân vật còn thiếu (Hùng Vương, Mỵ Châu, Nguyễn Văn Trỗi) =====
  {
    events: [
      { id: 'j97', text: 'Hùng Vương lập nước Văn Lang', year: -2879, topic: 'ancient' },
      { id: 'j98', text: 'Mỵ Châu để lộ bí mật nỏ thần cho Trọng Thủy', year: -179, topic: 'ancient' },
      { id: 'j99', text: 'Nguyễn Văn Trỗi hy sinh vì mưu sát McNamara', year: 1964, topic: 'modern' },
    ]
  },
];

let g4Round = 0, g4Score = 0, g4Combo = 0;
let g4Selected = [];
let g4Events = [];
let g4Locked = false;
let g4CurrentRounds = [...journeyRounds];
let g4TimerInterval = null;
let g4TimeLeft = 30;
const G4_ROUND_TIME = 30; // số giây mỗi vòng

// Sự kiện đã từng được xếp ĐÚNG vị trí (theo id sự kiện, ví dụ 'j1', 'j17'...)
// Lưu vĩnh viễn để chặn cộng XP toàn cục nhiều lần khi replay
function getG4AnsweredCorrectSet() {
  return loadProgress('g4_answered_correct', []);
}

function startG4Timer() {
  stopG4Timer(); // dọn timer cũ nếu có
  g4TimeLeft = G4_ROUND_TIME;
  updateG4TimerDisplay();

  g4TimerInterval = setInterval(() => {
    g4TimeLeft--;
    updateG4TimerDisplay();

    if (g4TimeLeft <= 0) {
      stopG4Timer();
      handleG4TimeUp();
    }
  }, 1000);
}

function stopG4Timer() {
  if (g4TimerInterval) {
    clearInterval(g4TimerInterval);
    g4TimerInterval = null;
  }
}

function updateG4TimerDisplay() {
  const timerEl = document.getElementById('g4-timer');
  if (timerEl) {
    timerEl.textContent = `⏱ ${g4TimeLeft}s`;
    // Đổi màu cảnh báo khi sắp hết giờ
    timerEl.style.color = g4TimeLeft <= 10 ? '#E74C3C' : '';
  }
}

function handleG4TimeUp() {
  if (g4Locked) return; // đã xác nhận rồi thì thôi
  showToast('⏰ Hết giờ!', '⚠️');
  // Tự động chấm điểm với những gì đã chọn (kể cả chưa chọn đủ)
  checkJourney(true);
}

// ===== INIT AUDIO - FIX 1: NHẠC KHÔNG PHÁT =====
function ensureAudio() {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) {}
  }
}

// ===== SETUP - FIX 3: LOGIC SỐ CÂU =====
// ❌ CŨ: function getGame4DataByTopic(topic, count) {...}
// ✅ MỚI:
function getGame4DataByTopic(topic, count) {
  // Flatten tất cả events từ mọi vòng
  let allEvents = [];
  
  journeyRounds.forEach(round => {
    if (topic === 'all') {
      allEvents.push(...round.events);
    } else {
      allEvents.push(...round.events.filter(e => e.topic === topic));
    }
  });

  // Shuffle ngẫu nhiên thật (không còn seed theo ngày, để mỗi ván khác nhau)
  allEvents = [...allEvents].sort(() => Math.random() - 0.5);

  // Lấy đúng số lượng cần thiết
  const selectedEvents = allEvents.slice(0, Math.min(count, allEvents.length));

  // Chia thành nhiều vòng, mỗi vòng tối đa 5 sự kiện
  const EVENTS_PER_ROUND = 5;
  const rounds = [];
  for (let i = 0; i < selectedEvents.length; i += EVENTS_PER_ROUND) {
    rounds.push({ events: selectedEvents.slice(i, i + EVENTS_PER_ROUND) });
  }

  // Nếu vòng cuối quá ít (dưới 3 sự kiện), gộp vào vòng trước cho đỡ vô nghĩa
  if (rounds.length >= 2 && rounds[rounds.length - 1].events.length < 3) {
    const last = rounds.pop();
    rounds[rounds.length - 1].events.push(...last.events);
  }

  return rounds;
}

function startGame4WithSetup() {
  const setup = getGameSetup('game-4');
  if (!setup || setup.count <= 0 || setup.count > 100) {
    setup.count = 10;
  }
  console.log('Game 4 Setup:', setup);

  g4Round = 0;
  g4Score = 0;
  g4Combo = 0;
  
  g4CurrentRounds = getGame4DataByTopic(setup.topic, setup.count);
  
  if (g4CurrentRounds.length === 0 || g4CurrentRounds[0].events.length === 0) {
    showToast('❌ Không có dữ liệu cho chủ đề này!', '⚠️');
    return;
  }

  // Cảnh báo nếu chủ đề không đủ số sự kiện như đã chọn
  const actualTotal = g4CurrentRounds.reduce((sum, r) => sum + r.events.length, 0);
  if (actualTotal < setup.count) {
    showToast(`⚠️ Chủ đề này chỉ có ${actualTotal} sự kiện`, '📌');
  }

  showGame('g4');
  renderJourney();
}

// ===== RENDER - FIX 2: HIỂN THỊ CHỦĐỀ =====
// ❌ CŨ:
/*
function renderJourney() {
  ...
  const setup = getGameSetup('game-4');
  if (setup && setup.topic !== 'all') {
    const topicName = GAME4_TOPICS.find(t => t.value === setup.topic)?.label || 'Tất cả';
    const subtitle = document.getElementById('g4-subtitle');
    if (subtitle) {
      subtitle.textContent = '📚 ' + topicName;
      subtitle.style.display = 'block';
    }
  }
*/

// ✅ MỚI:
function renderJourney() {
  g4Selected = [];
  g4Locked = false;

  if (g4Round >= g4CurrentRounds.length) {
    showJourneyComplete();
    return;
  }

  // HIỂN THỊ CHỦ ĐỀ + SỐ SỰ KIỆN THỰC TẾ + SỐ VÒNG
  const setup = getGameSetup('game-4');
  let topicDisplay = 'Tất cả sự kiện';
  
  if (setup && setup.topic !== 'all') {
    const topicObj = GAME4_TOPICS.find(t => t.value === setup.topic);
    if (topicObj) topicDisplay = topicObj.label;
  }

  // Đếm tổng số sự kiện thực tế đang chơi (cộng dồn tất cả các vòng)
  const actualTotal = g4CurrentRounds.reduce((sum, r) => sum + r.events.length, 0);
  
  const subtitle = document.getElementById('g4-subtitle');
  if (subtitle) {
    subtitle.innerHTML = `📚 ${topicDisplay} <span style="color:#F39C12; font-size:0.9rem;">(${actualTotal} sự kiện · Vòng ${g4Round + 1}/${g4CurrentRounds.length})</span>`;
    subtitle.style.display = 'block';
  }

  // Cập nhật số vòng tổng trên thanh điểm
  const totalRoundEl = document.getElementById('g4-total-round');
  if (totalRoundEl) totalRoundEl.textContent = g4CurrentRounds.length;

   g4Events = [...g4CurrentRounds[g4Round].events].sort(() => Math.random() - 0.5);

  document.getElementById('g4-score').textContent = g4Score;
  document.getElementById('g4-round').textContent = g4Round + 1;
  document.getElementById('g4-combo').textContent = g4Combo;
  document.getElementById('g4-result').className = 'result-msg';
  document.getElementById('g4-chips-wrap').innerHTML = '';

  const grid = document.getElementById('g4-grid');
  grid.innerHTML = '';
  g4Events.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'journey-event-card';
    card.id = 'jcard-' + ev.id;
    card.innerHTML = `<div style="font-size:1.1rem;margin-bottom:6px;animation:bounce 0.6s ease;">📜</div>${ev.text}`;
    card.onclick = () => selectJourneyEvent(ev.id, card);
    grid.appendChild(card);
  });

  const checkBtn = document.getElementById('g4-check-btn');
  checkBtn.textContent = '✅ Xác nhận thứ tự';
  checkBtn.onclick = checkJourney;

  startG4Timer(); // bắt đầu đếm ngược cho vòng này
}

function selectJourneyEvent(id, card) {
  if (g4Locked) return;

  // Nếu bấm lại thẻ đã chọn → bỏ chọn (cho phép sửa lại trước khi xác nhận)
  if (g4Selected.includes(id)) {
    deselectJourneyEvent(id, card);
    return;
  }

  g4Selected.push(id);
  card.classList.add('selected');
  card.style.animation = 'slideIn 0.3s ease';
  
  const badge = document.createElement('div');
  badge.className = 'order-badge';
  badge.textContent = g4Selected.length;
  card.appendChild(badge);

  updateJourneyChips();

  // Không tự động kiểm tra nữa — người chơi tự bấm nút "Xác nhận thứ tự"
  // khi đã chọn đủ và muốn nộp bài
}

function deselectJourneyEvent(id, card) {
  // Bỏ id khỏi danh sách đã chọn
  g4Selected = g4Selected.filter(x => x !== id);
  card.classList.remove('selected');

  // Xóa badge số thứ tự cũ
  const oldBadge = card.querySelector('.order-badge');
  if (oldBadge) oldBadge.remove();

  // Đánh lại số thứ tự cho các thẻ còn lại (vì có thể bỏ ở giữa)
  g4Selected.forEach((evId, i) => {
    const c = document.getElementById('jcard-' + evId);
    if (c) {
      const b = c.querySelector('.order-badge');
      if (b) b.textContent = i + 1;
    }
  });

  updateJourneyChips();
}

function updateJourneyChips() {
  const wrap = document.getElementById('g4-chips-wrap');
  wrap.innerHTML = '';
  
  g4Selected.forEach((id, i) => {
    const ev = g4Events.find(e => e.id === id);
    if (!ev) return;
    
    if (i > 0) {
      const arrow = document.createElement('span');
      arrow.className = 'journey-arrow';
      arrow.textContent = '→';
      wrap.appendChild(arrow);
    }
    
    const chip = document.createElement('div');
    chip.className = 'journey-chip';
    chip.style.animation = `slideIn 0.3s ease ${i * 0.1}s both`;
    chip.innerHTML = `<span class="chip-num">${i+1}</span>${ev.text}`;
    wrap.appendChild(chip);
  });
}

function showTimelineVisual(correctOrder) {
  const wrap = document.getElementById('g4-chips-wrap');
  wrap.innerHTML = '<div style="font-size:0.8rem;font-weight:700;color:#999;margin:12px 0 8px 0;letter-spacing:1px;">📅 DÒNG THỜI GIAN ĐÚNG</div>';
  
  const tl = document.createElement('div');
  tl.className = 'timeline-visual';
  tl.style.cssText = 'display:flex;gap:12px;align-items:center;overflow-x:auto;padding:8px 0;';
  
  correctOrder.forEach((id, i) => {
    const ev = g4Events.find(e => e.id === id);
    if (!ev) return;
    
    const node = document.createElement('div');
    node.className = 'timeline-node';
    node.style.cssText = `
      flex-shrink:0;
      text-align:center;
      padding:12px 8px;
      border-radius:10px;
      background:linear-gradient(135deg,#27AE60,#2ECC71);
      color:#fff;
      font-weight:700;
      min-width:100px;
      animation:slideIn 0.4s ease ${i * 0.1}s both;
    `;
    node.innerHTML = `
      <div style="font-size:0.8rem;margin-bottom:4px;">${ev.text}</div>
      <div style="font-size:1.2rem;font-weight:900;">${ev.year}</div>
    `;
    tl.appendChild(node);
    
    if (i < correctOrder.length - 1) {
      const spacer = document.createElement('div');
      spacer.textContent = '→';
      spacer.style.cssText = 'color:#999;font-weight:700;flex-shrink:0;';
      tl.appendChild(spacer);
    }
  });
  
  wrap.appendChild(tl);
}

// ===== CHECK - FIX 1: THÊM AUDIO =====
// ❌ CŨ: function checkJourney() {...}
// ✅ MỚI: Thêm ensureAudio() ở đầu
function checkJourney(forceCheck = false) {
  // Nếu chưa chọn đủ mà KHÔNG phải do hết giờ ép buộc -> chặn lại như cũ
  if (!forceCheck && (g4Locked || g4Selected.length < g4Events.length)) {
    if (g4Selected.length < g4Events.length) {
      showToast('Hãy chọn tất cả sự kiện!', '⚠️');
    }
    return;
  }
  if (g4Locked) return; // đã khóa rồi thì thôi, tránh chấm 2 lần

  stopG4Timer(); // dừng đếm ngược ngay khi xác nhận (dù chủ động hay hết giờ)

  // THÊM DÒNG NÀY ĐỂ KHỞI TẠO AUDIO
  ensureAudio();

  g4Locked = true;
  const correctOrder = [...g4Events].sort((a, b) => a.year - b.year).map(e => e.id);
  let allCorrect = true;

  g4Selected.forEach((id, i) => {
    const card = document.getElementById('jcard-' + id);
    if (card) {
      card.classList.add('locked');
      if (id === correctOrder[i]) {
        card.classList.add('correct-order');
        const ev = g4Events.find(e => e.id === id);
        if (ev) {
          const yearTag = document.createElement('div');
          yearTag.style.cssText = 'font-size:0.75rem;color:#27AE60;margin-top:4px;font-weight:800;';
          yearTag.textContent = 'Năm ' + ev.year;
          card.appendChild(yearTag);
        }
      } else {
        card.classList.add('wrong-order');
        allCorrect = false;
      }
    }
  });

  const res = document.getElementById('g4-result');
  if (allCorrect) {
    showTimelineVisual(correctOrder);
    g4Combo++;
    const bonus = g4Combo > 1 ? g4Combo * 5 : 0;
    const points = 30 + bonus;
    g4Score += points;

    // Chỉ cộng XP toàn cục cho các sự kiện lần ĐẦU TIÊN xếp đúng (chống farm bằng replay)
    const answeredSet = getG4AnsweredCorrectSet();
    const eventIds = g4Events.map(e => e.id);
    const newIds = eventIds.filter(id => !answeredSet.includes(id));
    const xp = newIds.length > 0 ? points : Math.max(1, Math.round(points * 0.2));
    if (newIds.length > 0) {
      saveProgress('g4_answered_correct', [...answeredSet, ...newIds]);
    }

    res.className = 'result-msg success show';
    res.textContent = `🎉 Xuất sắc! +${xp} XP${g4Combo > 1 ? ` (Combo x${g4Combo}!)` : ''}`;
    addXP(xp);
    // syncXPToServer(xp, 'GAME4', 'Hành Trình Thời Gian - Vòng ' + (g4Round + 1));
    playCorrectSound();
    launchConfetti();

  } else {
    g4Combo = 0;
    g4Score = Math.max(0, g4Score - 10); // Xếp sai -> trừ 10 điểm ván, không xuống dưới 0
    res.className = 'result-msg fail show';
    const correctNames = correctOrder.map(id => {
      const ev = g4Events.find(e => e.id === id);
      return ev ? `${ev.text} (${ev.year})` : '';
    });
    res.innerHTML = `❌ Chưa đúng! (-10 điểm) Thứ tự đúng:<br><small>${correctNames.join(' → ')}</small>`;
    playWrongSound();
  }

  document.getElementById('g4-combo').textContent = g4Combo;
  document.getElementById('g4-score').textContent = g4Score;

  const checkBtn = document.getElementById('g4-check-btn');
  checkBtn.textContent = g4Round < g4CurrentRounds.length - 1 ? '➜ Vòng tiếp theo' : '🏁 Xem kết quả';
  checkBtn.onclick = nextJourneyRound;
}

function nextJourneyRound() {
  g4Round++;

  // Lưu progress mỗi khi qua vòng để checkUnlockCondition đọc được
  saveProgress('game_g4', { completed: false, round: g4Round });
  unlockCard('ly-thuong-kiet'); // tự kiểm tra round>=3 bên trong

  if (g4Round >= g4CurrentRounds.length) {
    showJourneyComplete();
    return;
  }

  renderJourney();
}

function showJourneyComplete() {
  stopG4Timer();
  document.getElementById('g4-grid').innerHTML = '';
  document.getElementById('g4-chips-wrap').innerHTML = '';
  
  const res = document.getElementById('g4-result');
  res.className = 'result-msg success show';
  res.innerHTML = `🏆 Hoàn thành tất cả sự kiện!<br><strong>Tổng điểm: ${g4Score}</strong>`;
  
  const checkBtn = document.getElementById('g4-check-btn');
  checkBtn.textContent = '🔄 Chơi lại';
  checkBtn.onclick = resetJourney;
  
  showToast('🏅 Hoàn thành Game 4!', '🏅');
  saveProgress('g4_best', Math.max(g4Score, loadProgress('g4_best', 0)));
  saveProgress('game_g4', { completed: true, round: g4CurrentRounds.length });
  unlockCard('le-loi');
  unlockCard('ho-chi-minh');
  unlockCard('vo-nguyen-giap');
}

function resetJourney() {
  stopG4Timer();
  g4Round = 0;
  g4Score = 0;
  g4Combo = 0;
  renderJourney(); // renderJourney sẽ tự startG4Timer() lại
}