// ========== GAME 2: KÉO THẢ ==========
// ========== GAME 2 MODIFICATIONS ==========
// Thêm code này vào game2.js

// 🔧 TOPICS cho Game 2
const GAME2_TOPICS = [
  { label: '📅 Tất cả sự kiện', value: 'all' },
  { label: '⚔️ Kháng chiến cổ đại', value: 'ancient' },
  { label: '🔫 Kháng chiến hiện đại', value: 'modern' },
  { label: '👑 Triều đại', value: 'dynasty' },
];

/**
 * Lọc ALL_DRAG_EVENTS theo topic + count
 */
function getGame2DataByTopic(topic, count) {
  let pool = ALL_DRAG_EVENTS;

  // Filter theo topic
  if (topic === 'ancient') {
    // Cổ đại: trước năm 1800
    pool = pool.filter(e => parseInt(e.year) < 1800);
  } else if (topic === 'modern') {
    // Hiện đại: từ 1800 trở đi
    pool = pool.filter(e => parseInt(e.year) >= 1800);
  } else if (topic === 'dynasty') {
    // Triều đại: những sự kiện liên quan triều đại
    const dynastyKeywords = ['Lý', 'Trần', 'Lê', 'Nguyễn', 'Đinh', 'dời đô', 'thành lập'];
    pool = pool.filter(e => 
      dynastyKeywords.some(kw => e.text.includes(kw))
    );
  }
  // 'all' không filter gì

  // Trộn khó/dễ + né lặp lại giữa các lượt chơi (random thật, KHÔNG seed theo ngày nữa)
  return pickG2EventsMixed(pool, Math.min(count, pool.length));
}

/**
 * Khởi động Game 2 với setup
 */
function startGame2WithSetup() {
  const setup = getGameSetup('game-2');
  
  console.log('Game 2 Setup:', setup);

  // Reset state TRƯỚC khi bốc dữ liệu, để không bị vướng usedEventSets của ván trước
  dragState = {};
  draggedId = null;
  usedEventSets = [];
  dragTimeLeft = 90;
  clearInterval(dragTimer);

  // Lưu config để resetDrag() có thể bốc lại bộ MỚI mỗi lần bấm "Chơi lại"
  window.g2Config = { topic: setup.topic, count: setup.count };

  // Filter + bốc dữ liệu (đã trộn khó/dễ ngay trong getGame2DataByTopic)
  const filteredData = getGame2DataByTopic(setup.topic, setup.count);

  if (filteredData.length === 0) {
    showToast('❌ Không có dữ liệu cho chủ đề này!', '⚠️');
    return;
  }

  window.g2Data_filtered = filteredData;
  dragEvents = filteredData;

  // Render
  showGame('g2')
  initDrag_Modified(dragEvents);
}

/**
 * Sửa initDrag để dùng dragEvents được truyền vào
 * (thay vì random select từ ALL_DRAG_EVENTS)
 */
function initDrag_Modified(eventsList) {
  dragState = {};
  draggedId = null;
  dragEvents = eventsList || [];  // Dùng data đã filter

  // Đếm ngược
  clearInterval(dragTimer);
  dragTimeLeft = 90;
  updateTimerDisplay();
  dragTimer = setInterval(() => {
    dragTimeLeft--;
    updateTimerDisplay();
    if (dragTimeLeft <= 0) { clearInterval(dragTimer); checkDrag(); }
  }, 1000);

  if (touchGhost) { touchGhost.remove(); touchGhost = null; }

  const pool = document.getElementById('events-pool');
  pool.innerHTML = '';
  const slots = document.getElementById('timeline-slots');
  slots.innerHTML = '';

  // Shuffle events để hiển thị
  const shuffled = [...dragEvents].sort(() => Math.random() - 0.5);
  shuffled.forEach(ev => {
    const el = document.createElement('div');
    el.className = 'drag-event';
    el.id = 'drag-' + ev.id;
    el.textContent = ev.text;
    el.draggable = true;

    // Mouse drag
    el.addEventListener('dragstart', () => {
      draggedId = ev.id;
      el.classList.add('dragging');
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));

    // Touch drag
    el.addEventListener('touchstart', e => {
      draggedId = ev.id;
      if (touchGhost) touchGhost.remove();
      
      const touch = e.touches[0];
      touchGhost = document.createElement('div');
      touchGhost.className = 'drag-ghost';
      touchGhost.textContent = ev.text;
      touchGhost.style.left = touch.clientX + 'px';
      touchGhost.style.top = touch.clientY + 'px';
      document.body.appendChild(touchGhost);
    }, { passive: true });

    el.addEventListener('touchmove', e => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touchGhost) {
        touchGhost.style.left = touch.clientX + 'px';
        touchGhost.style.top = touch.clientY + 'px';
      }
      document.querySelectorAll('.timeline-slot').forEach(s => s.classList.remove('drag-over'));
      const el2 = document.elementFromPoint(touch.clientX, touch.clientY);
      const slot = el2 && el2.closest('.timeline-slot');
      if (slot) slot.classList.add('drag-over');
    }, { passive: false });

    el.addEventListener('touchend', e => {
      if (touchGhost) { touchGhost.remove(); touchGhost = null; }
      document.querySelectorAll('.timeline-slot').forEach(s => s.classList.remove('drag-over'));
      const touch = e.changedTouches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const slot = target && target.closest('.timeline-slot');
      if (slot && draggedId) {
        dropToSlot(slot, slot.dataset.year);
      }
      draggedId = null;
    }, { passive: true });

    pool.appendChild(el);
  });

  // Tạo slots
  dragEvents.forEach(ev => {
    const slot = document.createElement('div');
    slot.className = 'timeline-slot';
    slot.dataset.year = ev.year;
    slot.dataset.eventId = '';
    slot.innerHTML = `<div class="slot-year">${ev.year}</div><div class="slot-content"><span class="slot-empty">Kéo sự kiện vào đây...</span></div>`;
    slot.addEventListener('dragover', e => { e.preventDefault(); slot.classList.add('drag-over'); });
    slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));
    slot.addEventListener('drop', e => { e.preventDefault(); slot.classList.remove('drag-over'); dropToSlot(slot, ev.year); });
    slots.appendChild(slot);
  });

  document.getElementById('g2-result').className = 'result-msg';
}

// ========== IMPLEMENTATION STEPS ==========
/*
1. Copy GAME2_TOPICS vào game2.js
2. Copy hàm getGame2DataByTopic() vào game2.js
3. Copy hàm startGame2WithSetup() vào game2.js
4. Copy hàm initDrag_Modified() vào game2.js
5. Sửa resetDrag(): Gọi initDrag_Modified thay vì initDrag
6. Tùy chọn: Sửa checkDrag để dùng biến dragEvents.length
7. Test: Click Game 2 tab → Modal hiện → Chọn topic + count → Chơi
*/
const ALL_DRAG_EVENTS = [
  { id:'e1',  text:'Hai Bà Trưng khởi nghĩa', year:'40', explain:'Năm 40 SCN, Trưng Trắc và Trưng Nhị khởi nghĩa chống Đông Hán, trở thành biểu tượng bất khuất của dân tộc.' },
  { id:'e2',  text:'Chiến thắng Bạch Đằng — Ngô Quyền', year:'938', explain:'Ngô Quyền cắm cọc sắt dưới sông Bạch Đằng, đánh tan quân Nam Hán, chấm dứt 1000 năm Bắc thuộc.' },
  { id:'e3',  text:'Đinh Bộ Lĩnh thống nhất đất nước', year:'968', explain:'Đinh Bộ Lĩnh dẹp loạn 12 sứ quân, lập ra nhà nước Đại Cồ Việt, vị hoàng đế đầu tiên của Việt Nam.' },
  { id:'e4',  text:'Nhà Lý dời đô về Thăng Long', year:'1010', explain:'Vua Lý Thái Tổ dời đô từ Hoa Lư về Đại La, đổi tên thành Thăng Long, mở ra thời kỳ phát triển rực rỡ.' },
  { id:'e5',  text:'Khởi nghĩa Lam Sơn thắng lợi', year:'1428', explain:'Sau 10 năm kháng chiến, Lê Lợi đánh đuổi quân Minh, lập ra nhà Hậu Lê, giành lại độc lập.' },
  { id:'e6',  text:'Đại phá quân Thanh — Quang Trung', year:'1789', explain:'Vua Quang Trung đại phá 20 vạn quân Thanh chỉ trong 5 ngày Tết Kỷ Dậu, bảo vệ nền độc lập.' },
  { id:'e7',  text:'Tuyên ngôn Độc lập 2/9', year:'1945', explain:'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.' },
  { id:'e8',  text:'Chiến thắng Điện Biên Phủ', year:'1954', explain:'Sau 56 ngày đêm chiến đấu, quân ta đánh bại thực dân Pháp, buộc Pháp ký Hiệp định Genève.' },
  { id:'e9',  text:'Thống nhất đất nước', year:'1975', explain:'Chiến dịch Hồ Chí Minh toàn thắng, giải phóng miền Nam, thống nhất đất nước sau 30 năm chiến tranh.' },
  { id:'e10', text:'Nhà Trần đánh bại Mông Cổ lần 1', year:'1258', explain:'Quân dân nhà Trần lần đầu đánh bại đạo quân Mông Cổ hùng mạnh, bảo vệ nền độc lập dân tộc.' },
  { id:'e11', text:'Chiến thắng Bạch Đằng — Trần Hưng Đạo', year:'1288', explain:'Trần Hưng Đạo dùng kế cọc nhọn trên sông Bạch Đằng, đánh tan quân Nguyên Mông lần 3.' },
  { id:'e12', text:'Nguyễn Huệ lên ngôi Hoàng đế', year:'1788', explain:'Nguyễn Huệ lên ngôi Hoàng đế, lấy hiệu Quang Trung, chuẩn bị đại phá quân Thanh xâm lược.' },
  { id:'e13', text:'Pháp chiếm thành Hà Nội lần đầu', year:'1873', explain:'Thực dân Pháp tấn công và chiếm thành Hà Nội lần đầu, mở đầu quá trình xâm lược toàn Việt Nam.' },
  { id:'e14', text:'Khởi nghĩa Yên Bái', year:'1930', explain:'Nguyễn Thái Học lãnh đạo khởi nghĩa Yên Bái chống Pháp, thất bại nhưng thể hiện tinh thần bất khuất.' },
  { id:'e15', text:'Hiệp định Paris ký kết', year:'1973', explain:'Hiệp định Paris được ký, Mỹ rút quân khỏi Việt Nam, tạo tiền đề cho thống nhất đất nước năm 1975.' },
  { id:'e16', text:'Việt Nam gia nhập ASEAN', year:'1995', explain:'Việt Nam chính thức gia nhập ASEAN, đánh dấu bước hội nhập quan trọng vào cộng đồng khu vực.' },
  { id:'e17', text:'Lý Thường Kiệt phá Tống', year:'1075', explain:'Lý Thường Kiệt chủ động tấn công sang đất Tống để phá tan âm mưu xâm lược của nhà Tống.' },
  { id:'e18', text:'Trận Chi Lăng — tiêu diệt quân Minh', year:'1427', explain:'Nghĩa quân Lam Sơn tiêu diệt viện binh nhà Minh tại Chi Lăng, buộc quân Minh phải rút về nước.' },
  { id:'e19', text:'Hội nghị Thành Đô', year:'1990', explain:'Hội nghị bình thường hóa quan hệ Việt Nam — Trung Quốc sau nhiều năm căng thẳng.' },
  { id:'e20', text:'Nam Quốc Sơn Hà — Lý Thường Kiệt', year:'1077', explain:'Bài thơ "Nam quốc sơn hà" vang lên trên sông Như Nguyệt, được coi là bản Tuyên ngôn Độc lập đầu tiên.' },
  { id:'e21', text:'Đất nước gia nhập WTO', year:'2007', explain:'Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới, hội nhập sâu vào kinh tế toàn cầu.' },
  { id:'e22', text:'Nhà Nguyễn thành lập', year:'1802', explain:'Nguyễn Ánh lên ngôi vua, lập ra nhà Nguyễn, triều đại phong kiến cuối cùng của Việt Nam.' },
{ id:'e23', text:'Nguyễn Tất Thành ra đi tìm đường cứu nước', year:'1911', explain:'Ngày 5/6/1911, Nguyễn Tất Thành (Hồ Chí Minh) rời bến cảng Nhà Rồng, bắt đầu hành trình 30 năm tìm đường cứu nước.' },
{ id:'e24', text:'Thành lập Đảng Cộng sản Việt Nam', year:'1930', explain:'Ngày 3/2/1930, Nguyễn Ái Quốc chủ trì hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam.' },
{ id:'e25', text:'Thành lập Mặt trận Việt Minh', year:'1941', explain:'Hồ Chí Minh về nước, chủ trì Hội nghị Trung ương 8, thành lập Mặt trận Việt Minh để tập hợp lực lượng cách mạng.' },
{ id:'e26', text:'Cách mạng Tháng Tám thành công', year:'1945', explain:'Nhân dân cả nước tổng khởi nghĩa giành chính quyền, lật đổ chế độ thực dân phong kiến, mở đường cho ngày độc lập 2/9.' },
{ id:'e27', text:'Khởi nghĩa Tây Sơn bùng nổ', year:'1771', explain:'Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ dựng cờ khởi nghĩa tại Tây Sơn, mở đầu phong trào nông dân lớn nhất thế kỷ 18.' },
{ id:'e28', text:'Chiến thắng Rạch Gầm – Xoài Mút', year:'1785', explain:'Nguyễn Huệ đánh tan 5 vạn quân Xiêm xâm lược trên sông Tiền, bảo vệ vững chắc vùng đất phía Nam.' },
{ id:'e29', text:'Đại phá quân Thanh — Ngọc Hồi - Đống Đa', year:'1789', explain:'Trận quyết chiến Ngọc Hồi - Đống Đa vào mùng 5 Tết Kỷ Dậu, đánh tan đại quân Thanh, giải phóng Thăng Long.' },
{ id:'e30', text:'Ban hành Luật Hồng Đức', year:'1483', explain:'Vua Lê Thánh Tông ban hành bộ luật Hồng Đức, một trong những bộ luật tiến bộ bậc nhất thời phong kiến Việt Nam.' },
{ id:'e31', text:'Phong trào Cần Vương', year:'1885', explain:'Vua Hàm Nghi xuống chiếu Cần Vương, kêu gọi văn thân sĩ phu cả nước đứng lên chống thực dân Pháp.' },
{ id:'e32', text:'Chiến dịch Biên giới thắng lợi', year:'1950', explain:'Quân ta giải phóng vùng biên giới Việt - Trung, khai thông đường liên lạc quốc tế cho cuộc kháng chiến chống Pháp.' },
{ id:'e33', text:'Phong trào Đồng Khởi Bến Tre', year:'1960', explain:'Nhân dân Bến Tre nổi dậy đồng loạt, mở đầu cao trào đấu tranh vũ trang của nhân dân miền Nam.' },
{ id:'e34', text:'Chiến thắng "Điện Biên Phủ trên không"', year:'1972', explain:'Quân dân Hà Nội đánh bại cuộc tập kích chiến lược bằng B-52 của Mỹ, buộc Mỹ phải nối lại đàm phán Paris.' },
{ id:'e35', text:'Đại hội Đảng khởi xướng Đổi mới', year:'1986', explain:'Đại hội Đảng lần thứ VI khởi xướng công cuộc Đổi mới toàn diện đất nước, chuyển sang nền kinh tế thị trường định hướng XHCN.' },
{ id:'e36', text:'Việt Nam bình thường hóa quan hệ với Mỹ', year:'1995', explain:'Việt Nam và Hoa Kỳ chính thức thiết lập quan hệ ngoại giao, khép lại giai đoạn thù địch sau chiến tranh.' },
{ id:'e37', text:'Trần Hưng Đạo soạn Hịch tướng sĩ', year:'1285', explain:'Trước cuộc kháng chiến chống Nguyên Mông lần 2, Trần Hưng Đạo viết "Hịch tướng sĩ" để khích lệ tinh thần quân đội.' },
{ id:'e38', text:'Nhà Hồ thất bại trước quân Minh', year:'1407', explain:'Hồ Quý Ly thất bại trong kháng chiến chống quân Minh xâm lược, đất nước rơi vào 20 năm đô hộ.' },
{ id:'e39', text:'Lý Thái Tổ lên ngôi, sáng lập nhà Lý', year:'1009', explain:'Lý Công Uẩn lên ngôi năm 1009, sáng lập nhà Lý, mở đầu một triều đại hưng thịnh lâu dài của Đại Việt.' },
{ id:'e40', text:'Lê Hoàn lên ngôi, lập nhà Tiền Lê', year:'980', explain:'Lê Hoàn lên ngôi năm 980, lập ra nhà Tiền Lê, tiếp nối và củng cố nền độc lập của Đại Cồ Việt.' },
{ id:'e41', text:'Trần Thái Tông lên ngôi, mở đầu nhà Trần', year:'1225', explain:'Trần Cảnh lên ngôi năm 1225 sau khi nhà Lý suy yếu, mở đầu triều đại nhà Trần trong lịch sử Việt Nam.' },
{ id:'e42', text:'Trần Nhân Tông lập Thiền phái Trúc Lâm Yên Tử', year:'1299', explain:'Sau khi nhường ngôi, vua Trần Nhân Tông xuất gia và sáng lập Thiền phái Trúc Lâm mang đậm bản sắc Việt.' },
{ id:'e43', text:'Lê Lợi dựng cờ khởi nghĩa Lam Sơn', year:'1418', explain:'Năm 1418, Lê Lợi dấy binh khởi nghĩa tại Lam Sơn (Thanh Hóa), mở đầu 10 năm kháng chiến chống quân Minh.' },
{ id:'e44', text:'Lê Thánh Tông lên ngôi, mở thời kỳ thịnh trị', year:'1460', explain:'Lê Thánh Tông lên ngôi năm 1460, đưa Đại Việt bước vào thời kỳ phát triển thịnh trị bậc nhất lịch sử phong kiến.' },
{ id:'e45', text:'Lê Thánh Tông lập bản đồ Hồng Đức, mở mang bờ cõi', year:'1471', explain:'Vua Lê Thánh Tông cho lập bản đồ Hồng Đức và mở rộng lãnh thổ về phía Nam trong thời kỳ trị vì của mình.' },
{ id:'e46', text:'Mạc Đăng Dung cướp ngôi nhà Lê, lập nhà Mạc', year:'1527', explain:'Năm 1527, Mạc Đăng Dung phế truất vua Lê, lập ra nhà Mạc, mở đầu thời kỳ Nam - Bắc triều đầy biến động.' },
{ id:'e47', text:'Chiến tranh Trịnh - Nguyễn bùng nổ', year:'1627', explain:'Cuộc chiến tranh giữa hai tập đoàn phong kiến Trịnh và Nguyễn bùng nổ năm 1627, chia cắt đất nước thành Đàng Trong - Đàng Ngoài.' },
{ id:'e48', text:'Vua Minh Mạng lên ngôi, củng cố nhà Nguyễn', year:'1820', explain:'Vua Minh Mạng lên ngôi năm 1820, tiến hành nhiều cải cách hành chính, củng cố quyền lực trung ương nhà Nguyễn.' },
{ id:'e49', text:'Liên quân Pháp - Tây Ban Nha tấn công Đà Nẵng', year:'1858', explain:'Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công Đà Nẵng, mở đầu cuộc xâm lược Việt Nam của thực dân Pháp.' },
{ id:'e50', text:'Pháp thiết lập chế độ bảo hộ, xóa bỏ thực quyền vua Nguyễn', year:'1897', explain:'Pháp hoàn thiện bộ máy bảo hộ, các vua nhà Nguyễn từ đây chỉ còn mang tính hình thức, không còn thực quyền cai trị.' },
{ id:'e51', text:'Trần Quốc Toản bóp nát quả cam', year:'1282', explain:'Tuổi trẻ chưa được dự bàn việc nước, Trần Quốc Toản uất ức bóp nát quả cam trong tay, sau đó lập đội quân riêng đánh giặc Nguyên Mông.' },
{ id:'e52', text:'Hội nghị Diên Hồng', year:'1284', explain:'Vua Trần triệu tập các bô lão cả nước về Thăng Long hỏi ý kiến nên hòa hay đánh trước nguy cơ Nguyên Mông xâm lược lần 2, toàn dân đồng thanh "Đánh!".' },
{ id:'e53', text:'Nguyễn Trãi dâng Bình Ngô sách', year:'1416', explain:'Nguyễn Trãi tìm đến Lê Lợi tại Lam Sơn, dâng kế sách đánh giặc Minh mang tên "Bình Ngô sách", đặt nền móng chiến lược cho khởi nghĩa.' },
{ id:'e54', text:'Nghĩa quân Lam Sơn giải phóng Nghệ An', year:'1424', explain:'Theo kế "vào Nghệ An làm đất đứng chân" của Nguyễn Chích, nghĩa quân Lam Sơn giải phóng Nghệ An, tạo bước ngoặt cho cuộc kháng chiến.' },
{ id:'e55', text:'Nghĩa quân Lam Sơn vây hãm thành Đông Quan', year:'1426', explain:'Sau chiến thắng Tốt Động – Chúc Động, nghĩa quân Lam Sơn xiết chặt vòng vây quanh thành Đông Quan, dồn quân Minh vào thế cùng quẫn.' },
{ id:'e56', text:'Nguyễn Trãi bị oan án Lệ Chi Viên', year:'1442', explain:'Sau khi vua Lê Thái Tông đột ngột qua đời tại Lệ Chi Viên, Nguyễn Trãi bị vu oan và chịu án tru di tam tộc, một trong những nỗi oan lớn nhất sử Việt.' },
{ id:'e57', text:'Loạn kiêu binh thời Lê – Trịnh', year:'1782', explain:'Kiêu binh ở kinh thành Thăng Long nổi loạn phế lập chúa Trịnh tùy tiện, cho thấy sự suy sụp nghiêm trọng của chính quyền Lê – Trịnh cuối thế kỷ 18.' },
{ id:'e58', text:'Nguyễn Ánh cầu viện quân Xiêm', year:'1784', explain:'Trước sức ép của Tây Sơn, Nguyễn Ánh sang cầu viện Xiêm La, dẫn đến việc 5 vạn quân Xiêm kéo sang xâm lược, sau đó bị Nguyễn Huệ đánh tan năm 1785.' },
{ id:'e59', text:'Nguyễn Ánh chiếm lại thành Quy Nhơn', year:'1799', explain:'Trong cuộc chiến với nhà Tây Sơn, Nguyễn Ánh đánh chiếm thành Quy Nhơn, một mốc quan trọng trên đường khôi phục thế lực ở phía Nam.' },
{ id:'e60', text:'Vua Quang Trung đột ngột qua đời', year:'1792', explain:'Vua Quang Trung qua đời khi mới 39 tuổi, đang trong giai đoạn chuẩn bị lực lượng hùng mạnh, để lại khoảng trống lớn cho triều Tây Sơn.' },
{ id:'e61', text:'Pháp chiếm ba tỉnh miền Tây Nam Kỳ', year:'1867', explain:'Sau khi đã chiếm ba tỉnh miền Đông, Pháp tiếp tục thôn tính ba tỉnh miền Tây Nam Kỳ, hoàn tất việc kiểm soát toàn bộ Nam Kỳ lục tỉnh.' },
{ id:'e62', text:'Ký Hòa ước Patenôtre, xác lập chế độ bảo hộ', year:'1884', explain:'Triều đình Huế ký Hòa ước Patenôtre với Pháp, chính thức đặt Bắc Kỳ và Trung Kỳ dưới chế độ bảo hộ của thực dân Pháp.' },
{ id:'e63', text:'Phong trào Duy Tân — Đông Kinh Nghĩa Thục', year:'1907', explain:'Các sĩ phu yêu nước lập trường Đông Kinh Nghĩa Thục tại Hà Nội, truyền bá tư tưởng duy tân, cải cách giáo dục và văn hóa theo hướng mới.' },
{ id:'e64', text:'Khởi nghĩa Thái Nguyên', year:'1917', explain:'Đội Cấn và Lương Ngọc Quyến lãnh đạo binh lính người Việt nổi dậy chiếm tỉnh lỵ Thái Nguyên, một trong những cuộc khởi nghĩa vũ trang tiêu biểu đầu thế kỷ 20.' },
{ id:'e65', text:'Xô Viết Nghệ Tĩnh bị đàn áp đẫm máu', year:'1931', explain:'Thực dân Pháp đàn áp khốc liệt phong trào Xô Viết Nghệ Tĩnh, hàng nghìn người bị bắt, tù đày hoặc sát hại, phong trào tạm thời lắng xuống.' },
{ id:'e66', text:'Việt Nam gia nhập Liên Hợp Quốc', year:'1977', explain:'Ngày 20/9/1977, Việt Nam chính thức trở thành thành viên thứ 149 của Liên Hợp Quốc, đánh dấu bước hội nhập quốc tế quan trọng.' },
{ id:'e67', text:'Chiến tranh biên giới phía Bắc', year:'1979', explain:'Quân dân Việt Nam chiến đấu bảo vệ biên giới phía Bắc trước cuộc tấn công quy mô lớn, giữ vững chủ quyền lãnh thổ đất nước.' },
{ id:'e68', text:'Ký Hiệp định Thương mại song phương Việt – Mỹ (BTA)', year:'2001', explain:'Việt Nam và Hoa Kỳ ký Hiệp định Thương mại song phương, mở đường cho quan hệ kinh tế hai nước phát triển mạnh mẽ những năm sau đó.' },
{ id:'e69', text:'Việt Nam tổ chức Hội nghị Cấp cao APEC', year:'2006', explain:'Việt Nam đăng cai tổ chức Hội nghị Cấp cao APEC tại Hà Nội, khẳng định vị thế và uy tín ngày càng tăng trên trường quốc tế.' },
{ id:'e70', text:'Việt Nam lần đầu là Ủy viên không thường trực Hội đồng Bảo an LHQ', year:'2008', explain:'Việt Nam lần đầu tiên trúng cử làm Ủy viên không thường trực Hội đồng Bảo an Liên Hợp Quốc nhiệm kỳ 2008–2009.' },
{ id:'e71', text:'Lý Bí lập nước Vạn Xuân', year:'544', explain:'Lý Bí đánh đuổi quân nhà Lương, lên ngôi xưng Lý Nam Đế, đặt tên nước là Vạn Xuân.' },
{ id:'e72', text:'Nguyễn Văn Trỗi hy sinh vì mưu sát McNamara', year:'1964', explain:'Nguyễn Văn Trỗi tham gia kế hoạch đặt mìn ám sát Bộ trưởng Quốc phòng Mỹ McNamara, bị bắt và xử bắn, trở thành biểu tượng bất khuất.' },
];

// 📌 Các sự kiện được đánh dấu KHÓ (mốc ít quen thuộc hơn số còn lại trong pool)
const G2_HARD_IDS = ['e17','e19','e20','e30','e37','e38','e39','e40','e41','e42','e44','e45','e46','e47','e48','e50','e53','e54','e55','e57','e58','e59','e62','e64','e65','e68','e70'];
const G2_HARD_RATIO = 0.35; // ~35% số câu mỗi lượt là câu khó

// Bốc `count` sự kiện từ `pool`, trộn khó/dễ theo G2_HARD_RATIO, và né các id vừa dùng ở lượt trước.
// Nếu pool còn lại (sau khi né) không đủ số lượng cần, tự động reset usedEventSets rồi bốc lại từ đầu.
function pickG2EventsMixed(pool, count) {
  let available = pool.filter(e => !usedEventSets.includes(e.id));
  if (available.length < count) {
    usedEventSets = [];
    available = [...pool];
  }

  const hardPool = available.filter(e => G2_HARD_IDS.includes(e.id));
  const easyPool = available.filter(e => !G2_HARD_IDS.includes(e.id));

  let hardCount = Math.min(Math.round(count * G2_HARD_RATIO), hardPool.length);
  let easyCount = count - hardCount;
  if (easyCount > easyPool.length) {
    easyCount = easyPool.length;
    hardCount = Math.min(count - easyCount, hardPool.length);
  }

  const pickedHard = [...hardPool].sort(() => Math.random() - 0.5).slice(0, hardCount);
  const pickedEasy = [...easyPool].sort(() => Math.random() - 0.5).slice(0, easyCount);

  const selected = [...pickedHard, ...pickedEasy].sort(() => Math.random() - 0.5);
  usedEventSets.push(...selected.map(e => e.id));
  return selected;
}

let dragEvents = [];

let usedEventSets = [];

let dragState = {};
let dragTimer = null;
let dragTimeLeft = 90;
let draggedId = null;
let touchGhost = null; // FIX 3: ghost element for touch drag

// Danh sách id sự kiện đã từng đặt ĐÚNG (lưu vĩnh viễn, không mất khi chơi lại)
// Dùng để chặn cộng XP toàn cục nhiều lần cho cùng 1 sự kiện khi replay
function getG2AnsweredCorrectSet() {
  return loadProgress('g2_answered_correct', []);
}

function initDrag() {
  dragState = {};
  draggedId = null;
  // Chọn 9 sự kiện ngẫu nhiên chưa dùng
  let available = ALL_DRAG_EVENTS.filter(e => !usedEventSets.includes(e.id));
  if (available.length < 9) { usedEventSets = []; available = [...ALL_DRAG_EVENTS]; }
  dragEvents = available.sort(() => Math.random() - 0.5).slice(0, 9);
  usedEventSets.push(...dragEvents.map(e => e.id));

  // Đếm ngược
  clearInterval(dragTimer);
  dragTimeLeft = 90;
  updateTimerDisplay();
  dragTimer = setInterval(() => {
    dragTimeLeft--;
    updateTimerDisplay();
    if (dragTimeLeft <= 0) { clearInterval(dragTimer); checkDrag(); }
  }, 1000);
  if (touchGhost) { touchGhost.remove(); touchGhost = null; }

  const pool = document.getElementById('events-pool');
  pool.innerHTML = '';
  const slots = document.getElementById('timeline-slots');
  slots.innerHTML = '';

  const shuffled = [...dragEvents].sort(() => Math.random() - 0.5);
  shuffled.forEach(ev => {
    const el = document.createElement('div');
    el.className = 'drag-event';
    el.id = 'drag-' + ev.id;
    el.textContent = ev.text;
    el.draggable = true;

    // Mouse drag
    el.addEventListener('dragstart', () => {
      draggedId = ev.id;
      el.classList.add('dragging');
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));

    // FIX 3: Touch drag with ghost + touchend to drop
    el.addEventListener('touchstart', e => {
      draggedId = ev.id;
      const touch = e.touches[0];
      // create ghost
      touchGhost = document.createElement('div');
      touchGhost.className = 'drag-ghost';
      touchGhost.textContent = ev.text;
      touchGhost.style.left = touch.clientX + 'px';
      touchGhost.style.top = touch.clientY + 'px';
      document.body.appendChild(touchGhost);
    }, { passive: true });

    el.addEventListener('touchmove', e => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touchGhost) {
        touchGhost.style.left = touch.clientX + 'px';
        touchGhost.style.top = touch.clientY + 'px';
      }
      // highlight slot under finger
      document.querySelectorAll('.timeline-slot').forEach(s => s.classList.remove('drag-over'));
      const el2 = document.elementFromPoint(touch.clientX, touch.clientY);
      const slot = el2 && el2.closest('.timeline-slot');
      if (slot) slot.classList.add('drag-over');
    }, { passive: false });

    el.addEventListener('touchend', e => {
      if (touchGhost) { touchGhost.remove(); touchGhost = null; }
      document.querySelectorAll('.timeline-slot').forEach(s => s.classList.remove('drag-over'));
      const touch = e.changedTouches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const slot = target && target.closest('.timeline-slot');
      if (slot && draggedId) {
        dropToSlot(slot, slot.dataset.year);
      }
      draggedId = null;
    }, { passive: true });

    pool.appendChild(el);
  });

  dragEvents.forEach(ev => {
    const slot = document.createElement('div');
    slot.className = 'timeline-slot';
    slot.dataset.year = ev.year;
    slot.dataset.eventId = '';
    slot.innerHTML = `<div class="slot-year">${ev.year}</div><div class="slot-content"><span class="slot-empty">Kéo sự kiện vào đây...</span></div>`;
    slot.addEventListener('dragover', e => { e.preventDefault(); slot.classList.add('drag-over'); });
    slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));
    slot.addEventListener('drop', e => { e.preventDefault(); slot.classList.remove('drag-over'); dropToSlot(slot, ev.year); });
    slots.appendChild(slot);
  });

  document.getElementById('g2-result').className = 'result-msg';
}

function dropToSlot(slot, year) {
  if (!draggedId) return;
  const ev = dragEvents.find(e => e.id === draggedId);
  if (!ev) return;

  // Remove from any previous slot
  Object.keys(dragState).forEach(k => { if (dragState[k] === draggedId) delete dragState[k]; });

  // Return old occupant to pool if slot taken
  const existing = slot.dataset.eventId;
  if (existing && existing !== draggedId) {
    const pool = document.getElementById('events-pool');
    const el = document.getElementById('drag-' + existing);
    if (el) pool.appendChild(el);
  }

  dragState[year] = draggedId;
  slot.dataset.eventId = draggedId;
  slot.querySelector('.slot-content').innerHTML = `<strong>${ev.text}</strong>`;
  slot.className = 'timeline-slot';

  const dragEl = document.getElementById('drag-' + draggedId);
  if (dragEl) dragEl.remove();
  draggedId = null;
}

function checkDrag() {
  clearInterval(dragTimer);
  let correct = 0;
  let wrong = 0;
  const correctEventIds = [];

  document.querySelectorAll('.timeline-slot').forEach(slot => {
    const year = slot.dataset.year;
    const eventId = slot.dataset.eventId;
    const expected = dragEvents.find(e => e.year === year);
    if (expected && eventId === expected.id) {
      slot.classList.add('correct-slot');
      correct++;
      correctEventIds.push(expected.id);
    } else {
      wrong++;
      slot.classList.add('wrong-slot');
      const correctEvent = dragEvents.find(e => e.year === year);
      if (correctEvent) {
        const hint = document.createElement('div');
        hint.style.cssText = 'font-size:0.78rem;color:#c0392b;margin-top:6px;line-height:1.4;padding:4px 8px;';
        hint.innerHTML = `✅ <b>Đúng:</b> ${correctEvent.text}<br>📖 ${correctEvent.explain}`;
        slot.appendChild(hint);
      }
    }
  });

  // Điểm hiển thị trong ván: +15/đúng, -5/sai, không xuống dưới 0
  const scoreDisplay = Math.max(0, correct * 15 - wrong * 5);

  // Chỉ cộng XP toàn cục cho những sự kiện lần ĐẦU TIÊN đặt đúng (chống farm XP bằng cách replay)
  const answeredSet = getG2AnsweredCorrectSet();
  const newlyEarnedIds = correctEventIds.filter(id => !answeredSet.includes(id));
  const xp = newlyEarnedIds.length * 15;
  if (newlyEarnedIds.length > 0) {
    saveProgress('g2_answered_correct', [...answeredSet, ...newlyEarnedIds]);
  }

  const res = document.getElementById('g2-result');

  // Luôn lưu progress trước khi mở khóa, bất kể đúng hết hay không
  saveProgress('game_g2', { completed: true, score: correct });
  saveProgress('g2_best', Math.max(correct, loadProgress('g2_best', 0)));
  checkG2Collection();
  unlockCard('ho-chi-minh');
  unlockCard('vo-nguyen-giap');
  // syncXPToServer(xp, 'GAME2', 'Kéo Thả Sự Kiện - ' + correct + '/' + dragEvents.length + ' đúng');

  if (correct === dragEvents.length) {
    res.className = 'result-msg success show';
    playCorrectSound();
    res.textContent = xp > 0
      ? `🎉 Hoàn hảo! Tất cả ${correct}/${dragEvents.length} đúng! +${xp} XP (điểm ván: ${scoreDisplay})`
      : `🎉 Hoàn hảo! Tất cả ${correct}/${dragEvents.length} đúng! (Điểm ván: ${scoreDisplay} — các sự kiện này đã nhận XP trước đó)`;
  } else {
    res.className = 'result-msg fail show';
    playWrongSound();
    res.textContent = xp > 0
      ? `📊 Đúng ${correct}/${dragEvents.length}, sai ${wrong}. +${xp} XP (điểm ván: ${scoreDisplay}). Thử lại để đạt điểm tuyệt đối!`
      : `📊 Đúng ${correct}/${dragEvents.length}, sai ${wrong}. Điểm ván: ${scoreDisplay}. Thử lại để đạt điểm tuyệt đối!`;
  }
  if (xp > 0) addXP(xp);
}

function resetDrag() {
  clearInterval(dragTimer);
  const cfg = window.g2Config || { topic: 'all', count: (window.g2Data_filtered || dragEvents).length || 9 };
  const freshData = getGame2DataByTopic(cfg.topic, cfg.count);
  window.g2Data_filtered = freshData;
  dragEvents = freshData;
  initDrag_Modified(freshData);
}
function updateTimerDisplay() {
  let el = document.getElementById('g2-timer');
  if (!el) return;
  const m = Math.floor(dragTimeLeft / 60);
  const s = dragTimeLeft % 60;
  el.textContent = `⏱ ${m}:${s.toString().padStart(2,'0')}`;
  el.style.color = dragTimeLeft <= 15 ? '#e74c3c' : '#1A2A4A';
  const bar = document.getElementById('g2-timer-bar');
  if (bar) {
    const pct = (dragTimeLeft / 90) * 100;
    bar.style.width = pct + '%';
    bar.style.background = dragTimeLeft <= 15 
      ? 'linear-gradient(90deg,#e74c3c,#c0392b)' 
      : dragTimeLeft <= 30 
        ? 'linear-gradient(90deg,#F39C12,#e67e22)' 
        : 'linear-gradient(90deg,#27AE60,#F39C12)';
  }
}