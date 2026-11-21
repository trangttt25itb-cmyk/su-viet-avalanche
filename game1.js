// ========== GAME 1: ĐOÁN NHÂN VẬT ==========
// ===== GAME 1 SETUP =====
const GAME1_TOPICS = [
  { label: '👥 Tất cả nhân vật', value: 'all' },
  { label: '⚔️ Anh hùng kháng chiến', value: 'resistance' },
  { label: '👑 Hoàng đế - Vua chúa', value: 'emperor' },
  { label: '👩 Nữ anh hùng', value: 'female' },
  { label: '🎖️ Quân sư - Tướng quân', value: 'general' },
  { label: '✍️ Danh nhân văn hóa', value: 'culture' },
];

const GAME1_TOPIC_MAP = {
  'all': null,
  // ⚔️ Anh hùng kháng chiến — những người trực tiếp lãnh đạo/tham gia chống ngoại xâm
  'resistance': ['Ngô Quyền', 'Hai Bà Trưng', 'Trần Hưng Đạo', 'Lê Lợi', 'Nguyễn Huệ (Quang Trung)',
    'Hồ Chí Minh', 'Võ Nguyên Giáp', 'Phan Bội Châu', 'Nguyễn Văn Trỗi', 'Lý Bí (Lý Nam Đế)',
    'Phan Đình Giót', 'Bế Văn Đàn', 'Trần Quốc Toản', 'Trần Bình Trọng', 'Nguyễn Thái Học',
    'Phan Châu Trinh', 'Lý Thường Kiệt', 'Hoàng Hoa Thám', 'Bà Triệu', 'Võ Thị Sáu'],

  // 👑 Hoàng đế - Vua chúa — những người từng lên ngôi/đứng đầu nhà nước
  'emperor': ['Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lý Thái Tổ', 'Lê Hoàn', 'Trần Nhân Tông',
    'Nguyễn Huệ (Quang Trung)', 'Hùng Vương', 'An Dương Vương', 'Lý Bí (Lý Nam Đế)',
    'Lê Thánh Tông', 'Lê Lợi'],

  // 👩 Nữ anh hùng
  'female': ['Hai Bà Trưng', 'Bà Triệu', 'Võ Thị Sáu', 'Nguyễn Thị Định', 'Bùi Thị Xuân', 'Mỵ Châu',
    'Nguyên Phi Ỷ Lan', 'Dương Vân Nga', 'Huyền Trân Công Chúa', 'Nguyễn Thị Minh Khai'],

  // 🎖️ Quân sư - Tướng quân — chỉ huy quân sự, không phải người đứng đầu nhà nước
  'general': ['Trần Hưng Đạo', 'Võ Nguyên Giáp', 'Lý Thường Kiệt', 'Hoàng Hoa Thám', 'Cao Lỗ',
    'Yết Kiêu', 'Trần Khánh Dư', 'Bùi Thị Xuân', 'Trần Quốc Toản', 'Trần Bình Trọng',
    'Phan Đình Giót', 'Bế Văn Đàn', 'Nguyễn Văn Trỗi'],

  // ✍️ Danh nhân văn hóa — học giả, nhà tư tưởng, nhà cải cách
  'culture': ['Nguyễn Trãi', 'Chu Văn An', 'Lý Thường Kiệt', 'Lang Liêu', 'Hồ Chí Minh',
    'Phan Bội Châu', 'Phan Châu Trinh', 'Nguyễn Du', 'Lê Quý Đôn', 'Mạc Đĩnh Chi'],
};

function getGame1DataByTopic(topic, count) {
  let pool = g1Data;
  if (topic !== 'all') {
    const names = GAME1_TOPIC_MAP[topic] || [];
    pool = pool.filter(p => names.includes(p.name));
  }
  return seededShuffle(pool, getDailyRandom('game1')).slice(0, Math.min(count, pool.length));
}

function startGame1WithSetup() {
  const setup = getGameSetup('game-1');
  const filteredData = getGame1DataByTopic(setup.topic, setup.count);

  if (filteredData.length === 0) {
    showToast('❌ Không có dữ liệu cho chủ đề này!', '⚠️');
    return;
  }

  if (filteredData.length < setup.count) {
    showToast(`⚠️ Chủ đề này chỉ có ${filteredData.length} câu hỏi!`, '📋');
  }

  window.g1Data_filtered = filteredData;
  g1Index = 0;
  g1Score = 0;
  g1Lives = 3;
 clearInterval(g1Timer);
  showGame('g1');
  // Reset UI trước
  document.getElementById('g1-lives').textContent = '3';
  document.getElementById('g1-score').textContent = '0';
  document.getElementById('g1-current').textContent = '1';
  document.getElementById('g1-total').textContent = filteredData.length;
  renderG1();
}
const g1Data = [
  
  {
  img: 'images/ngoquyen.jpg',
  name: 'Ngô Quyền',
  clue: 'Năm 938, vị tướng này cắm cọc sắt dưới lòng sông, đánh tan quân Nam Hán và chấm dứt 1000 năm Bắc thuộc.',
  options: ['Ngô Quyền', 'Trần Hưng Đạo', 'Đinh Bộ Lĩnh', 'Lê Lợi'],
  answer: 'Ngô Quyền',
  bio: 'Ngô Quyền (898–944) là người dẹp tan quân Nam Hán trong trận Bạch Đằng lịch sử, chấm dứt hơn 1000 năm Bắc thuộc và mở ra kỷ nguyên độc lập tự chủ cho dân tộc Việt.'
},
 {
  img: 'images/hungdao.jpg',
  name: 'Trần Hưng Đạo',
  clue: 'Đại nguyên soái 3 lần đánh bại quân Nguyên Mông. Ông viết "Hịch tướng sĩ" để khích lệ quân sĩ.',
  options: ['Lý Thường Kiệt', 'Trần Hưng Đạo', 'Lê Lợi', 'Quang Trung'],
  answer: 'Trần Hưng Đạo',
  bio: 'Trần Hưng Đạo (1228–1300) là nhà quân sự kiệt xuất nhất thời Trần, 3 lần lãnh đạo quân dân Đại Việt đánh bại đế chế Nguyên Mông hùng mạnh. Ông được nhân dân tôn kính là Đức Thánh Trần.'
},
 {
    img: 'images/haibatrung.jpg',
    name: 'Hai Bà Trưng',
    clue: 'Năm 40 sau CN, hai chị em này khởi nghĩa chống lại ách đô hộ của Đông Hán, trở thành biểu tượng bất khuất của người Việt.',
    options: ['Bà Triệu', 'Hai Bà Trưng', 'Nguyễn Thị Định', 'Võ Thị Sáu'],
    answer: 'Hai Bà Trưng',
    bio: 'Trưng Trắc và Trưng Nhị là hai chị em phất cờ khởi nghĩa năm 40, đánh chiếm 65 thành trì, lập nên nền độc lập ngắn ngủi đầu tiên sau thời Bắc thuộc. Trưng Trắc lên ngôi vua, giữ vững quyền tự chủ hơn 3 năm.'
  },
  {
    img: 'images/quangtrung.jpg',
    name: 'Quang Trung',
    clue: '"Anh hùng áo vải" xuất thân từ Bình Định, đại phá 20 vạn quân Thanh chỉ trong 5 ngày Tết Kỷ Dậu 1789.',
    options: ['Lê Lợi', 'Nguyễn Huệ (Quang Trung)', 'Phan Bội Châu', 'Võ Nguyên Giáp'],
    answer: 'Nguyễn Huệ (Quang Trung)',
    bio: 'Nguyễn Huệ (1753–1792), tức vua Quang Trung, xuất thân áo vải đất Tây Sơn, đã đại phá 29 vạn quân Thanh chỉ trong 5 ngày Tết Kỷ Dậu 1789 bằng cuộc hành quân thần tốc, trở thành một trong những vị tướng tài ba nhất lịch sử Việt Nam.'
  },
  {
    img: 'images/hcm-avatar.jpg',
    name: 'Hồ Chí Minh',
    clue: 'Ngày 2/9/1945, người đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
    options: ['Võ Nguyên Giáp', 'Phan Bội Châu', 'Hồ Chí Minh', 'Trần Phú'],
    answer: 'Hồ Chí Minh',
    bio: 'Hồ Chí Minh (1890–1969) bôn ba 30 năm tìm đường cứu nước, đọc bản Tuyên ngôn Độc lập ngày 2/9/1945 tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa và trở thành vị Chủ tịch đầu tiên của nước Việt Nam độc lập.'
  },
  {
    img: 'images/VoNguyenGiap.jfif',
    name: 'Võ Nguyên Giáp',
    clue: 'Đại tướng này chỉ huy trận Điện Biên Phủ năm 1954, đánh bại thực dân Pháp, được thế giới gọi là "Vị tướng huyền thoại".',
    options: ['Nguyễn Chí Thanh', 'Lê Duẩn', 'Võ Nguyên Giáp', 'Hoàng Văn Thái'],
    answer: 'Võ Nguyên Giáp',
    bio: 'Đại tướng Võ Nguyên Giáp (1911–2013) chỉ huy chiến dịch Điện Biên Phủ năm 1954, đánh bại thực dân Pháp sau gần một thế kỷ đô hộ. Ông được giới quân sự thế giới kính nể, mệnh danh là "Vị tướng huyền thoại".'
  },
  {
    img: 'images/LyThuongKiet.jpg',
    name: 'Lý Thường Kiệt',
    clue: 'Danh tướng nhà Lý, tác giả bài thơ "Nam quốc sơn hà" — được coi là bản Tuyên ngôn Độc lập đầu tiên của Việt Nam.',
    options: ['Lý Thái Tổ', 'Lý Thường Kiệt', 'Trần Quốc Tuấn', 'Nguyễn Trãi'],
    answer: 'Lý Thường Kiệt',
    bio: 'Lý Thường Kiệt (1019–1105) là danh tướng nhà Lý, người đánh bại 30 vạn quân Tống trên phòng tuyến sông Như Nguyệt. Bài thơ "Nam quốc sơn hà" gắn liền với tên tuổi ông được coi là bản tuyên ngôn độc lập đầu tiên của dân tộc.'
  },
  {
    img: 'images/LeLoi.jpg',
    name: 'Lê Lợi',
    clue: 'Người khởi xướng cuộc khởi nghĩa Lam Sơn năm 1418, sau 10 năm kháng chiến đã đánh đuổi quân Minh, lập ra nhà Hậu Lê.',
    options: ['Lê Lợi', 'Nguyễn Trãi', 'Đinh Bộ Lĩnh', 'Lý Thái Tổ'],
    answer: 'Lê Lợi',
    bio: 'Lê Lợi (1385–1433) khởi xướng cuộc khởi nghĩa Lam Sơn năm 1418, sau 10 năm kháng chiến gian khổ đã đánh đuổi quân Minh, lên ngôi vua lập ra nhà Hậu Lê, mở đầu thời kỳ tự chủ kéo dài gần 360 năm.'
  },
  {
    img: 'images/DinhBoLinh.jpg',
    name: 'Đinh Bộ Lĩnh',
    clue: 'Người dẹp loạn 12 sứ quân, thống nhất đất nước năm 968, đặt quốc hiệu là Đại Cồ Việt — vị hoàng đế đầu tiên của Việt Nam.',
    options: ['Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lê Hoàn', 'Lý Thái Tổ'],
    answer: 'Đinh Bộ Lĩnh',
    bio: 'Đinh Bộ Lĩnh (924–979) dẹp loạn 12 sứ quân, thống nhất đất nước năm 968 và đặt quốc hiệu Đại Cồ Việt, trở thành vị hoàng đế đầu tiên của Việt Nam, mở đầu thời kỳ phong kiến độc lập.'
  },
  {
    img: 'images/BaTrieu.jpg',
    name: 'Bà Triệu',
    clue: 'Năm 248, người phụ nữ này cưỡi voi xung trận, khởi nghĩa chống quân Đông Ngô với câu nói bất hủ về chí khí của mình.',
    options: ['Bà Triệu', 'Hai Bà Trưng', 'Võ Thị Sáu', 'Nguyễn Thị Định'],
    answer: 'Bà Triệu',
    bio: 'Bà Triệu (Triệu Thị Trinh, 226–248) cưỡi voi xông trận khởi nghĩa chống quân Đông Ngô năm 248, nổi tiếng với câu nói khẳng khái về chí khí "đạp luồng sóng dữ, chém cá kình ở biển Đông". Bà hy sinh khi mới 23 tuổi.'
  },
  {
    img: 'images/REPLACE-ylan.jpg',
    name: 'Nguyên Phi Ỷ Lan',
    clue: 'Phi tần nhà Lý, hai lần được vua giao quyền nhiếp chính khi vua thân chinh đánh giặc, nổi tiếng trị nước giỏi giang.',
    options: ['Nguyên Phi Ỷ Lan', 'Dương Vân Nga', 'Huyền Trân Công Chúa', 'Mỵ Châu'],
    answer: 'Nguyên Phi Ỷ Lan',
    bio: 'Nguyên Phi Ỷ Lan là phi tần nhà Lý, hai lần được vua Lý Thánh Tông giao quyền nhiếp chính khi vua thân chinh đánh giặc. Bà trị nước giỏi giang, được sử sách ca ngợi là một trong những nữ chính trị gia tài năng nhất lịch sử phong kiến Việt Nam.'
  },
  {
    img: 'images/REPLACE-duongvanga.jpg',
    name: 'Dương Vân Nga',
    clue: 'Thái hậu nhà Đinh, trong lúc đất nước lâm nguy đã trao hoàng bào cho Thập đạo tướng quân Lê Hoàn lên ngôi.',
    options: ['Dương Vân Nga', 'Nguyên Phi Ỷ Lan', 'Huyền Trân Công Chúa', 'Bùi Thị Xuân'],
    answer: 'Dương Vân Nga',
    bio: 'Dương Vân Nga là Thái hậu nhà Đinh, trong lúc đất nước lâm nguy trước nạn ngoại xâm đã quyết đoán trao hoàng bào cho Thập đạo tướng quân Lê Hoàn lên ngôi, mở ra nhà Tiền Lê và giúp giữ vững nền độc lập dân tộc.'
  },
  {
    img: 'images/REPLACE-huyentran.jpg',
    name: 'Huyền Trân Công Chúa',
    clue: 'Công chúa nhà Trần được gả cho vua Chiêm Thành Chế Mân, nhờ đó Đại Việt có thêm châu Ô, châu Lý.',
    options: ['Huyền Trân Công Chúa', 'Mỵ Châu', 'Dương Vân Nga', 'Nguyên Phi Ỷ Lan'],
    answer: 'Huyền Trân Công Chúa',
    bio: 'Huyền Trân Công Chúa là con gái vua Trần Nhân Tông, được gả cho vua Chiêm Thành Chế Mân theo chính sách bang giao. Cuộc hôn nhân này giúp Đại Việt mở rộng lãnh thổ về phía nam, có thêm châu Ô và châu Lý (vùng Huế - Quảng Trị ngày nay).'
  },
  {
    img: 'images/REPLACE-minhkhai.jpg',
    name: 'Nguyễn Thị Minh Khai',
    clue: 'Nữ chiến sĩ cách mạng, Bí thư Thành ủy Sài Gòn - Chợ Lớn, hy sinh năm 1941 trong phong trào đấu tranh chống Pháp.',
    options: ['Nguyễn Thị Minh Khai', 'Nguyễn Thị Định', 'Võ Thị Sáu', 'Bùi Thị Xuân'],
    answer: 'Nguyễn Thị Minh Khai',
    bio: 'Nguyễn Thị Minh Khai (1910–1941) là nữ chiến sĩ cách mạng kiên cường, từng giữ chức Bí thư Thành ủy Sài Gòn - Chợ Lớn. Bà bị thực dân Pháp xử bắn năm 1941, trở thành biểu tượng của tinh thần bất khuất trong phong trào cách mạng Việt Nam.'
  },
  {
    img: 'images/REPLACE-nguyendu.jpg',
    name: 'Nguyễn Du',
    clue: 'Đại thi hào dân tộc, tác giả "Truyện Kiều" — kiệt tác văn học chữ Nôm được UNESCO vinh danh Danh nhân văn hóa thế giới.',
    options: ['Nguyễn Du', 'Nguyễn Trãi', 'Chu Văn An', 'Lê Quý Đôn'],
    answer: 'Nguyễn Du',
    bio: 'Nguyễn Du (1765–1820) là đại thi hào dân tộc, tác giả "Truyện Kiều" — kiệt tác văn học chữ Nôm phản ánh sâu sắc số phận con người trong xã hội phong kiến. Ông được UNESCO vinh danh là Danh nhân văn hóa thế giới.'
  },
  {
    img: 'images/REPLACE-lequydon.jpg',
    name: 'Lê Quý Đôn',
    clue: 'Nhà bác học lớn nhất thời phong kiến Việt Nam, để lại nhiều công trình về sử học, địa lý, văn học, triết học.',
    options: ['Lê Quý Đôn', 'Chu Văn An', 'Nguyễn Trãi', 'Mạc Đĩnh Chi'],
    answer: 'Lê Quý Đôn',
    bio: 'Lê Quý Đôn (1726–1784) được xem là nhà bác học lớn nhất thời phong kiến Việt Nam, để lại hàng chục công trình đồ sộ về sử học, địa lý, văn học và triết học, thể hiện kiến thức uyên bác hiếm có đương thời.'
  },
  {
    img: 'images/REPLACE-macdinhchi.jpg',
    name: 'Mạc Đĩnh Chi',
    clue: 'Trạng nguyên thời Trần, nổi tiếng thông minh dù tướng mạo xấu xí, từng đối đáp xuất sắc khi đi sứ nhà Nguyên.',
    options: ['Mạc Đĩnh Chi', 'Lê Quý Đôn', 'Chu Văn An', 'Nguyễn Trãi'],
    answer: 'Mạc Đĩnh Chi',
    bio: 'Mạc Đĩnh Chi là Trạng nguyên thời Trần, nổi tiếng thông minh dù tướng mạo xấu xí. Khi đi sứ nhà Nguyên, ông đối đáp xuất sắc trước triều đình phương Bắc, khiến vua quan nhà Nguyên phải nể phục tài năng của sứ thần Đại Việt.'
  },
  {
    img: 'images/NguyenTrai.jpg',
    name: 'Nguyễn Trãi',
    clue: 'Quân sư tài ba của Lê Lợi, tác giả "Bình Ngô đại cáo" — áng văn tuyên bố nền độc lập sau khi đuổi quân Minh.',
    options: ['Lê Lợi', 'Ngô Thì Nhậm', 'Nguyễn Trãi', 'Trần Quốc Tuấn'],
    answer: 'Nguyễn Trãi',
    bio: 'Nguyễn Trãi (1380–1442) là quân sư tài ba của Lê Lợi trong cuộc khởi nghĩa Lam Sơn, tác giả "Bình Ngô đại cáo" — áng văn tuyên bố nền độc lập sau khi đánh đuổi quân Minh. Ông được UNESCO vinh danh Danh nhân văn hóa thế giới.'
  },
  {
    img: 'images/VoThiSau.jpg',
    name: 'Võ Thị Sáu',
    clue: 'Nữ anh hùng trẻ tuổi nhất, hy sinh năm 19 tuổi tại Côn Đảo năm 1952, biểu tượng của tinh thần bất khuất chống Pháp.',
    options: ['Nguyễn Thị Định', 'Võ Thị Sáu', 'Bà Triệu', 'Hai Bà Trưng'],
    answer: 'Võ Thị Sáu',
    bio: 'Võ Thị Sáu (1933–1952) là nữ anh hùng trẻ tuổi, tham gia hoạt động cách mạng từ năm 14 tuổi và hy sinh khi mới 19 tuổi tại nhà tù Côn Đảo, trở thành biểu tượng bất khuất của tuổi trẻ Việt Nam trong kháng chiến chống Pháp.'
  },
  {
  img: 'images/lythaito.jpg',
  name: 'Lý Thái Tổ',
  clue: 'Năm 1010, vị vua này dời đô từ Hoa Lư về Đại La, đổi tên thành Thăng Long, mở ra thời kỳ phát triển rực rỡ.',
  options: ['Lý Thái Tổ', 'Đinh Bộ Lĩnh', 'Lê Lợi', 'Trần Nhân Tông'],
  answer: 'Lý Thái Tổ',
  bio: 'Lý Thái Tổ (Lý Công Uẩn, 974–1028) là người sáng lập nhà Lý. Năm 1010, ông dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long, mở ra thời kỳ phát triển rực rỡ kéo dài hơn 200 năm cho dân tộc Đại Việt.'
},
{
  img: 'images/phanboichau.jpg',
  name: 'Phan Bội Châu',
  clue: 'Nhà yêu nước đầu thế kỷ 20, khởi xướng phong trào Đông Du đưa thanh niên sang Nhật học để cứu nước.',
  options: ['Phan Châu Trinh', 'Phan Bội Châu', 'Nguyễn Thái Học', 'Hoàng Hoa Thám'],
  answer: 'Phan Bội Châu',
  bio: 'Phan Bội Châu (1867–1940) là nhà yêu nước tiêu biểu đầu thế kỷ 20, khởi xướng phong trào Đông Du đưa thanh niên Việt Nam sang Nhật Bản học tập nhằm tìm con đường cứu nước theo hướng duy tân.'
},
{
  img: 'images/nguyenthidinh.jpg',
  name: 'Nguyễn Thị Định',
  clue: 'Nữ tướng đầu tiên của Quân đội Nhân dân Việt Nam, lãnh đạo phong trào Đồng Khởi tại Bến Tre.',
  options: ['Võ Thị Sáu', 'Nguyễn Thị Định', 'Bà Triệu', 'Hai Bà Trưng'],
  answer: 'Nguyễn Thị Định',
  bio: 'Nguyễn Thị Định (1920–1992) là nữ tướng đầu tiên của Quân đội Nhân dân Việt Nam. Bà lãnh đạo phong trào Đồng Khởi nổi tiếng tại Bến Tre năm 1960, mở đầu cao trào đấu tranh vũ trang ở miền Nam.'
},
{
  img: 'images/lhoan.jpg',
  name: 'Lê Hoàn',
  clue: 'Vị vua lập ra nhà Tiền Lê, đánh tan quân Tống xâm lược năm 981, bảo vệ nền độc lập dân tộc.',
  options: ['Lê Hoàn', 'Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lý Thái Tổ'],
  answer: 'Lê Hoàn',
  bio: 'Lê Hoàn (941–1005) lập ra nhà Tiền Lê, lãnh đạo quân dân Đại Cồ Việt đánh tan quân Tống xâm lược năm 981, bảo vệ vững chắc nền độc lập dân tộc vừa giành được sau thời Bắc thuộc.'
},
{
  img: 'images/TranNhanTong.jpg',
  name: 'Trần Nhân Tông',
  clue: 'Vị vua nhà Trần 2 lần lãnh đạo kháng chiến chống Nguyên Mông, sau xuất gia lập thiền phái Trúc Lâm Yên Tử.',
  options: ['Trần Thái Tông', 'Trần Nhân Tông', 'Trần Hưng Đạo', 'Trần Quang Khải'],
  answer: 'Trần Nhân Tông',
  bio: 'Trần Nhân Tông (1258–1308) là vị vua hai lần lãnh đạo quân dân Đại Việt kháng chiến chống quân Nguyên Mông thắng lợi. Sau khi nhường ngôi, ông xuất gia tu hành và sáng lập thiền phái Trúc Lâm Yên Tử mang đậm bản sắc Việt.'
},
{
  img: 'images/hoanghoatham.jpg',
  name: 'Hoàng Hoa Thám',
  clue: 'Thủ lĩnh khởi nghĩa Yên Thế, lãnh đạo cuộc kháng chiến chống Pháp dài nhất — gần 30 năm tại vùng rừng núi Bắc Giang.',
  options: ['Phan Bội Châu', 'Hoàng Hoa Thám', 'Nguyễn Thái Học', 'Phan Đình Phùng'],
  answer: 'Hoàng Hoa Thám',
  bio: 'Hoàng Hoa Thám (1858–1913), còn gọi là Đề Thám, là thủ lĩnh khởi nghĩa Yên Thế, lãnh đạo cuộc kháng chiến chống Pháp kéo dài gần 30 năm tại vùng rừng núi Bắc Giang — cuộc khởi nghĩa nông dân bền bỉ nhất lịch sử chống Pháp.'
},
{
  img: 'images/NguyenTraiImg.jpg',
  name: 'Chu Văn An',
  clue: 'Nhà giáo nổi tiếng thời Trần, được tôn là "Vạn thế sư biểu", dâng Thất trảm sớ đòi chém 7 tên gian thần.',
  options: ['Nguyễn Trãi', 'Chu Văn An', 'Lê Văn Hưu', 'Ngô Sĩ Liên'],
  answer: 'Chu Văn An',
  bio: 'Chu Văn An (1292–1370) là nhà giáo nổi tiếng thời Trần, được hậu thế tôn là "Vạn thế sư biểu" — người thầy của muôn đời. Ông từng dâng Thất trảm sớ đòi chém 7 tên gian thần, thể hiện khí tiết cương trực hiếm có.'
},
{
  img: 'images/nguyenvantroi.jpg',
  name: 'Nguyễn Văn Trỗi',
  clue: 'Anh hùng chống Mỹ, hy sinh năm 24 tuổi tại Sài Gòn năm 1964 với câu nói bất hủ: "Hãy nhớ lấy lời tôi!".',
  options: ['Nguyễn Văn Trỗi', 'Phan Đình Giót', 'Bế Văn Đàn', 'La Văn Cầu'],
  answer: 'Nguyễn Văn Trỗi',
  bio: 'Nguyễn Văn Trỗi (1940–1964) là chiến sĩ biệt động Sài Gòn, hy sinh năm 24 tuổi khi mưu sát Bộ trưởng Quốc phòng Mỹ McNamara bất thành. Câu nói cuối cùng "Hãy nhớ lấy lời tôi!" trở thành biểu tượng tinh thần bất khuất của thanh niên Việt Nam.'
},
{
    img: 'images/adv2.jpg',
    name: 'An Dương Vương',
    clue: 'Vị vua xây thành Cổ Loa, sở hữu nỏ thần Liên Châu, lập nên nước Âu Lạc.',
    options: ['Hùng Vương', 'An Dương Vương', 'Triệu Đà', 'Lý Nam Đế'],
    answer: 'An Dương Vương',
    bio: 'An Dương Vương (Thục Phán) là người lập nên nước Âu Lạc, xây thành Cổ Loa với kiến trúc 9 vòng xoáy ốc độc đáo và sở hữu nỏ thần Liên Châu. Tuy nhiên, đất nước sụp đổ do bi kịch tình yêu giữa Mỵ Châu và Trọng Thủy.'
  },
  {
    img: 'images/ynls_mc.png',
    name: 'Mỵ Châu',
    clue: 'Con gái An Dương Vương, vì mối tình với Trọng Thủy mà vô tình làm mất nỏ thần.',
    options: ['Mỵ Châu', 'Bà Triệu', 'Ngọc Hoa', 'Huyền Trân'],
    answer: 'Mỵ Châu',
    bio: 'Mỵ Châu là con gái An Dương Vương, vì mối tình với Trọng Thủy đã vô tình tiết lộ bí mật nỏ thần, dẫn đến sự sụp đổ của nước Âu Lạc. Câu chuyện của nàng trở thành bài học cảnh tỉnh sâu sắc trong văn hóa dân gian Việt Nam.'
  },
  {
    img: 'images/advtrongthuy.jpg',
    name: 'Trọng Thủy',
    clue: 'Con trai Triệu Đà, lấy Mỵ Châu làm vợ rồi đánh cắp bí mật nỏ thần đem về cho cha.',
    options: ['Trọng Thủy', 'Triệu Đà', 'Cao Lỗ', 'Lưu Hoằng Tháo'],
    answer: 'Trọng Thủy',
    bio: 'Trọng Thủy là con trai Triệu Đà, theo kế hoạch của cha đã cưới Mỵ Châu làm vợ rồi đánh cắp bí mật chế tạo nỏ thần đem về, góp phần dẫn đến sự diệt vong của nước Âu Lạc.'
  },
  {
    img: 'images/trieuda.jpg',
    name: 'Triệu Đà',
    clue: 'Vua Nam Việt dùng kế thông gia, sai con trai cưới Mỵ Châu để chiếm nước Âu Lạc.',
    options: ['Triệu Đà', 'Trọng Thủy', 'Mã Viện', 'Tô Định'],
    answer: 'Triệu Đà',
    bio: 'Triệu Đà là vua Nam Việt, dùng mưu kế thông gia gả con trai Trọng Thủy cho Mỵ Châu nhằm đánh cắp bí mật quân sự, cuối cùng thôn tính được nước Âu Lạc của An Dương Vương.'
  },
  {
    img: 'images/ynls_hv.png',
    name: 'Hùng Vương',
    clue: 'Vị vua lập ra nước Văn Lang, đóng đô ở Phong Châu — nhà nước đầu tiên của người Việt.',
    options: ['Hùng Vương', 'An Dương Vương', 'Lê Hoàn', 'Đinh Bộ Lĩnh'],
    answer: 'Hùng Vương',
    bio: 'Hùng Vương là danh hiệu các vị vua lập ra nước Văn Lang, đóng đô ở Phong Châu — nhà nước đầu tiên của người Việt cổ, đặt nền móng cho lịch sử dựng nước hàng nghìn năm của dân tộc.'
  },
  {
    img: 'images/banhchung.jpg',
    name: 'Lang Liêu',
    clue: 'Hoàng tử thời Hùng Vương sáng tạo ra bánh chưng, bánh dày để dâng lên vua cha.',
    options: ['Lang Liêu', 'Sơn Tinh', 'Mai An Tiêm', 'Chử Đồng Tử'],
    answer: 'Lang Liêu',
    bio: 'Lang Liêu là hoàng tử thời Hùng Vương, người sáng tạo ra bánh chưng vuông tượng trưng cho đất và bánh dày tròn tượng trưng cho trời để dâng vua cha, trở thành món ăn truyền thống không thể thiếu trong ngày Tết của người Việt.'
  },
  {
    img: 'images/advcaolo.jpg',
    name: 'Cao Lỗ',
    clue: 'Vị tướng tài giỏi đã chế tạo ra nỏ thần Liên Châu giúp An Dương Vương giữ thành Cổ Loa.',
    options: ['Cao Lỗ', 'Lý Ông Trọng', 'Phạm Tu', 'Triệu Quang Phục'],
    answer: 'Cao Lỗ',
    bio: 'Cao Lỗ là vị tướng tài giỏi thời An Dương Vương, người chế tạo ra nỏ thần Liên Châu có khả năng bắn nhiều mũi tên cùng lúc, giúp giữ vững thành Cổ Loa trước các cuộc tấn công của quân Triệu Đà.'
  },
  {
    img: 'images/lybi.jpg',
    name: 'Lý Bí (Lý Nam Đế)',
    clue: 'Lãnh đạo khởi nghĩa chống nhà Lương, lập ra nước Vạn Xuân, lên ngôi xưng là Nam Đế.',
    options: ['Lý Bí (Lý Nam Đế)', 'Triệu Quang Phục', 'Phùng Hưng', 'Mai Thúc Loan'],
    answer: 'Lý Bí (Lý Nam Đế)',
    bio: 'Lý Bí (503–548) lãnh đạo cuộc khởi nghĩa chống nhà Lương, lập ra nước Vạn Xuân năm 544 và lên ngôi xưng là Lý Nam Đế, thể hiện ý chí xưng đế ngang hàng với phương Bắc của dân tộc Việt.'
  },
  {
    img: 'images/ma-vien-tan-cong.jpg',
    name: 'Mã Viện',
    clue: 'Tướng nhà Đông Hán được cử sang đàn áp cuộc khởi nghĩa của Hai Bà Trưng.',
    options: ['Mã Viện', 'Tô Định', 'Triệu Đà', 'Lưu Hoằng Tháo'],
    answer: 'Mã Viện',
    bio: 'Mã Viện là tướng nhà Đông Hán được cử sang đàn áp cuộc khởi nghĩa Hai Bà Trưng. Sau nhiều năm chiến đấu ác liệt, ông đã dập tắt được cuộc khởi nghĩa, đưa nước ta trở lại ách đô hộ của phong kiến phương Bắc.'
  },
  {
    img: 'images/luu-hoang-thao.jpg',
    name: 'Lưu Hoằng Tháo',
    clue: 'Hoàng tử Nam Hán tử trận trong trận Bạch Đằng năm 938 do Ngô Quyền chỉ huy.',
    options: ['Lưu Hoằng Tháo', 'Mã Viện', 'Triệu Đà', 'Thoát Hoan'],
    answer: 'Lưu Hoằng Tháo',
    bio: 'Lưu Hoằng Tháo là hoàng tử Nam Hán, được cử dẫn quân xâm lược Đại Việt nhưng tử trận trong trận Bạch Đằng năm 938 do Ngô Quyền chỉ huy, đánh dấu thất bại nặng nề của quân Nam Hán và chấm dứt thời Bắc thuộc.'
  },
  {
    img: 'images/lethanhtong.png',
    name: 'Lê Thánh Tông',
    clue: 'Vị vua đưa Đại Việt phát triển rực rỡ, ban hành bộ luật Hồng Đức nổi tiếng.',
    options: ['Lê Thánh Tông', 'Lê Lợi', 'Lê Hoàn', 'Lê Thái Tổ'],
    answer: 'Lê Thánh Tông',
    bio: 'Lê Thánh Tông (1442–1497) là vị vua đưa Đại Việt phát triển rực rỡ về mọi mặt, ban hành bộ luật Hồng Đức tiến bộ bậc nhất thời phong kiến, mở rộng lãnh thổ và xây dựng bộ máy nhà nước quy củ.'
  },
  {
    img: 'images/phan-dinh-giot.png',
    name: 'Phan Đình Giót',
    clue: 'Anh hùng lấy thân mình lấp lỗ châu mai trong chiến dịch Điện Biên Phủ năm 1954.',
    options: ['Phan Đình Giót', 'Bế Văn Đàn', 'Tô Vĩnh Diện', 'La Văn Cầu'],
    answer: 'Phan Đình Giót',
    bio: 'Phan Đình Giót (1922–1954) là chiến sĩ anh hùng đã lấy thân mình lấp lỗ châu mai của địch trong chiến dịch Điện Biên Phủ, hy sinh để đồng đội xông lên tiêu diệt cứ điểm, trở thành biểu tượng quả cảm của Quân đội Nhân dân Việt Nam.'
  },
  {
    img: 'images/buithixuan.jpg',
    name: 'Bùi Thị Xuân',
    clue: 'Nữ tướng kiệt xuất của nhà Tây Sơn, chỉ huy đội tượng binh dưới thời Quang Trung.',
    options: ['Bùi Thị Xuân', 'Bà Triệu', 'Nguyễn Thị Định', 'Võ Thị Sáu'],
    answer: 'Bùi Thị Xuân',
    bio: 'Bùi Thị Xuân là nữ tướng kiệt xuất của nhà Tây Sơn, chỉ huy đội tượng binh thiện chiến dưới thời Quang Trung, góp công lớn trong các chiến dịch đánh dẹp quân Xiêm và quân Thanh xâm lược.'
  },
  {
    img: 'images/REPLACE-tranquoctoan.jpg',
    name: 'Trần Quốc Toản',
    clue: 'Chàng thiếu niên bóp nát quả cam vì không được dự hội nghị Bình Than bàn việc đánh giặc Nguyên.',
    options: ['Trần Quốc Toản', 'Trần Hưng Đạo', 'Trần Nhân Tông', 'Trần Khánh Dư'],
    answer: 'Trần Quốc Toản',
    bio: 'Trần Quốc Toản là chàng thiếu niên quý tộc nhà Trần, vì còn nhỏ tuổi không được dự hội nghị Bình Than bàn việc đánh giặc Nguyên mà tức giận bóp nát quả cam trong tay. Sau đó ông tự chiêu mộ quân, lập công lớn trong kháng chiến chống Nguyên Mông.'
  },
  {
    img: 'images/REPLACE-yetkieu.jpg',
    name: 'Yết Kiêu',
    clue: 'Gia tướng của Trần Hưng Đạo nổi tiếng với khả năng lặn sâu, đục thủng thuyền giặc Nguyên.',
    options: ['Yết Kiêu', 'Dã Tượng', 'Trần Khánh Dư', 'Trần Quốc Toản'],
    answer: 'Yết Kiêu',
    bio: 'Yết Kiêu là gia tướng trung thành của Trần Hưng Đạo, nổi tiếng với khả năng lặn sâu dưới nước, từng đục thủng nhiều thuyền chiến của giặc Nguyên, góp phần quan trọng vào chiến thắng trên sông nước trong kháng chiến chống Nguyên Mông.'
  },
  {
    img: 'images/REPLACE-trankhanhdu.jpg',
    name: 'Trần Khánh Dư',
    clue: 'Danh tướng thủy quân nhà Trần, lập công lớn trong trận Vân Đồn chặn đoàn thuyền lương giặc Nguyên.',
    options: ['Trần Khánh Dư', 'Trần Nhật Duật', 'Trần Quang Khải', 'Trần Bình Trọng'],
    answer: 'Trần Khánh Dư',
    bio: 'Trần Khánh Dư là danh tướng thủy quân nhà Trần, lập công lớn trong trận Vân Đồn khi chặn đứng và tiêu diệt đoàn thuyền lương của giặc Nguyên, góp phần quyết định vào thắng lợi chung của cuộc kháng chiến.'
  },
  {
    img: 'images/REPLACE-tranbinhtrong.jpg',
    name: 'Trần Bình Trọng',
    clue: 'Tướng nhà Trần với câu nói bất hủ: "Ta thà làm ma nước Nam, chứ không thèm làm vương đất Bắc."',
    options: ['Trần Bình Trọng', 'Trần Khánh Dư', 'Trần Quốc Toản', 'Trần Nhật Duật'],
    answer: 'Trần Bình Trọng',
    bio: 'Trần Bình Trọng là tướng nhà Trần, bị giặc Nguyên bắt và dụ hàng nhưng đã khẳng khái đáp lại bằng câu nói bất hủ "Ta thà làm ma nước Nam, chứ không thèm làm vương đất Bắc", rồi anh dũng hy sinh, trở thành tấm gương khí tiết sáng ngời.'
  },
  {
    img: 'images/phanchautrinh.jpg',
    name: 'Phan Châu Trinh',
    clue: 'Nhà yêu nước chủ trương "khai dân trí, chấn dân khí", hoạt động song hành cùng Phan Bội Châu.',
    options: ['Phan Châu Trinh', 'Phan Bội Châu', 'Nguyễn Thái Học', 'Huỳnh Thúc Kháng'],
    answer: 'Phan Châu Trinh',
    bio: 'Phan Châu Trinh (1872–1926) là nhà yêu nước chủ trương đường lối cải cách ôn hòa "khai dân trí, chấn dân khí, hậu dân sinh", hoạt động song hành nhưng theo hướng khác với Phan Bội Châu trong phong trào yêu nước đầu thế kỷ 20.'
  },
  {
    img: 'images/nguyenthaihoc.jpg',
    name: 'Nguyễn Thái Học',
    clue: 'Lãnh đạo Việt Nam Quốc dân Đảng, chỉ huy khởi nghĩa Yên Bái năm 1930 chống thực dân Pháp.',
    options: ['Nguyễn Thái Học', 'Phan Bội Châu', 'Hoàng Hoa Thám', 'Phan Châu Trinh'],
    answer: 'Nguyễn Thái Học',
    bio: 'Nguyễn Thái Học (1902–1930) là lãnh đạo Việt Nam Quốc dân Đảng, chỉ huy cuộc khởi nghĩa Yên Bái năm 1930 chống thực dân Pháp. Khởi nghĩa thất bại và ông bị xử tử ở tuổi 28, nhưng tinh thần đấu tranh để lại dấu ấn sâu sắc trong lịch sử dân tộc.'
  },
  {
  img: 'images/vovankiet.jpg',
  name: 'Võ Văn Kiệt',
  clue: 'Thủ tướng thúc đẩy mạnh mẽ công cuộc Đổi mới, chủ trương xây đường dây điện 500kV Bắc – Nam.',
  options: ['Võ Văn Kiệt', 'Đỗ Mười', 'Phạm Văn Đồng', 'Nguyễn Phú Trọng'],
  answer: 'Võ Văn Kiệt',
  bio: 'Võ Văn Kiệt (1922–2008) là Thủ tướng thúc đẩy mạnh mẽ công cuộc Đổi mới, chủ trương xây dựng đường dây điện 500kV Bắc – Nam, góp phần đưa Việt Nam hội nhập kinh tế thế giới.'
},
{
  img: 'images/nguyenphutrong.jpg',
  name: 'Nguyễn Phú Trọng',
  clue: 'Tổng Bí thư qua ba nhiệm kỳ liên tiếp, nổi tiếng với công cuộc phòng, chống tham nhũng.',
  options: ['Nguyễn Phú Trọng', 'Nông Đức Mạnh', 'Trần Đức Lương', 'Lê Khả Phiêu'],
  answer: 'Nguyễn Phú Trọng',
  bio: 'Nguyễn Phú Trọng (1944–2024) là Tổng Bí thư qua ba nhiệm kỳ liên tiếp, đẩy mạnh công cuộc phòng, chống tham nhũng, để lại nhiều dấu ấn trong công tác xây dựng Đảng.'
},
{
  img: 'images/REPLACE-tovinhdien.jpg',
  name: 'Tô Vĩnh Diện',
  clue: 'Anh hùng lấy thân mình chèn pháo, không để khẩu pháo lăn xuống vực trong chiến dịch Điện Biên Phủ.',
  options: ['Tô Vĩnh Diện', 'Phan Đình Giót', 'Bế Văn Đàn', 'La Văn Cầu'],
  answer: 'Tô Vĩnh Diện',
  bio: 'Tô Vĩnh Diện (1924–1954) là chiến sĩ pháo binh đã lấy thân mình chèn pháo, không để khẩu pháo lăn xuống vực trên đường kéo pháo vào Điện Biên Phủ, hy sinh anh dũng để bảo vệ vũ khí cho chiến dịch.'
},
{
  img: 'images/REPLACE-lavancau.jpg',
  name: 'La Văn Cầu',
  clue: 'Anh hùng tự chặt đứt cánh tay bị thương để tiếp tục chiến đấu trong chiến dịch Biên giới 1950.',
  options: ['La Văn Cầu', 'Tô Vĩnh Diện', 'Phan Đình Giót', 'Bế Văn Đàn'],
  answer: 'La Văn Cầu',
  bio: 'La Văn Cầu (1932–2023) là chiến sĩ anh hùng nổi tiếng với hành động tự chặt đứt cánh tay bị thương để tiếp tục ôm bộc phá xông lên tiêu diệt lô cốt địch trong chiến dịch Biên giới năm 1950.'
},
{
  img: 'images/REPLACE-phandinhphung.jpg',
  name: 'Phan Đình Phùng',
  clue: 'Lãnh tụ cuộc khởi nghĩa Hương Khê — cuộc khởi nghĩa lớn nhất trong phong trào Cần Vương chống Pháp.',
  options: ['Phan Đình Phùng', 'Hoàng Hoa Thám', 'Nguyễn Thiện Thuật', 'Tống Duy Tân'],
  answer: 'Phan Đình Phùng',
  bio: 'Phan Đình Phùng (1847–1895) là lãnh tụ cuộc khởi nghĩa Hương Khê, cuộc khởi nghĩa quy mô và bền bỉ nhất trong phong trào Cần Vương chống thực dân Pháp cuối thế kỷ 19.'
},
{
  img: 'images/REPLACE-tranquangkhai.jpg',
  name: 'Trần Quang Khải',
  clue: 'Thượng tướng nhà Trần, tác giả bài thơ "Tụng giá hoàn kinh sư" mừng chiến thắng quân Nguyên.',
  options: ['Trần Quang Khải', 'Trần Hưng Đạo', 'Trần Nhật Duật', 'Trần Khánh Dư'],
  answer: 'Trần Quang Khải',
  bio: 'Trần Quang Khải là Thượng tướng nhà Trần, lập nhiều công lớn trong kháng chiến chống Nguyên Mông và là tác giả bài thơ "Tụng giá hoàn kinh sư" nổi tiếng mừng chiến thắng khải hoàn.'
},
{
  img: 'images/REPLACE-trannhatduat.jpg',
  name: 'Trần Nhật Duật',
  clue: 'Tướng nhà Trần thông thạo nhiều ngôn ngữ, có công thu phục và chiêu hàng tướng giặc Nguyên.',
  options: ['Trần Nhật Duật', 'Trần Quang Khải', 'Trần Khánh Dư', 'Trần Bình Trọng'],
  answer: 'Trần Nhật Duật',
  bio: 'Trần Nhật Duật là tướng nhà Trần nổi tiếng thông thạo nhiều ngôn ngữ và am hiểu phong tục các dân tộc, có công lớn trong việc thu phục lòng người và chiêu hàng tướng giặc trong kháng chiến chống Nguyên Mông.'
},
{
  img: 'images/REPLACE-ngosilien.jpg',
  name: 'Ngô Sĩ Liên',
  clue: 'Sử gia thời Lê, biên soạn "Đại Việt sử ký toàn thư" — bộ chính sử đồ sộ của dân tộc.',
  options: ['Ngô Sĩ Liên', 'Lê Văn Hưu', 'Lê Quý Đôn', 'Phan Huy Chú'],
  answer: 'Ngô Sĩ Liên',
  bio: 'Ngô Sĩ Liên là sử gia thời Lê, biên soạn "Đại Việt sử ký toàn thư" — bộ chính sử đồ sộ và quan trọng bậc nhất của Việt Nam, ghi chép lịch sử dân tộc từ thời Hồng Bàng đến thời Hậu Lê.'
},
{
  img: 'images/REPLACE-levanhuu.jpg',
  name: 'Lê Văn Hưu',
  clue: 'Sử gia thời Trần, tác giả "Đại Việt sử ký" — bộ quốc sử đầu tiên của Việt Nam.',
  options: ['Lê Văn Hưu', 'Ngô Sĩ Liên', 'Chu Văn An', 'Lê Quý Đôn'],
  answer: 'Lê Văn Hưu',
  bio: 'Lê Văn Hưu (1230–1322) là sử gia thời Trần, tác giả "Đại Việt sử ký" — bộ quốc sử thành văn đầu tiên của Việt Nam, đặt nền móng cho nền sử học dân tộc.'
},
{
  img: 'images/REPLACE-datuong.jpg',
  name: 'Dã Tượng',
  clue: 'Gia tướng trung thành của Trần Hưng Đạo, cùng Yết Kiêu lập nhiều công lớn chống quân Nguyên.',
  options: ['Dã Tượng', 'Yết Kiêu', 'Trần Khánh Dư', 'Phạm Ngũ Lão'],
  answer: 'Dã Tượng',
  bio: 'Dã Tượng là gia tướng trung thành của Trần Hưng Đạo, cùng với Yết Kiêu lập nhiều chiến công trong các cuộc kháng chiến chống quân Nguyên Mông, nổi tiếng với lòng trung nghĩa tuyệt đối với chủ tướng.'
},
  {
    img: 'images/REPLACE-bevandan.jpg',
    name: 'Bế Văn Đàn',
    clue: 'Anh hùng lấy thân mình làm giá súng trong chiến dịch Điện Biên Phủ.',
    options: ['Bế Văn Đàn', 'Phan Đình Giót', 'Tô Vĩnh Diện', 'La Văn Cầu'],
    answer: 'Bế Văn Đàn',
    bio: 'Bế Văn Đàn (1931–1954) là chiến sĩ anh hùng đã lấy thân mình làm giá súng để đồng đội tiêu diệt địch trong chiến dịch Điện Biên Phủ, hy sinh anh dũng và trở thành tấm gương sáng về tinh thần xả thân vì đồng đội.'
  },
];


let g1Index = 0, g1Score = 0, g1Lives = 3;
let g1Timer = null, g1TimeLeft = 20;

// Danh sách tên nhân vật đã từng trả lời ĐÚNG (lưu vĩnh viễn, không mất khi restart)
// Dùng để chặn cộng XP toàn cục nhiều lần cho cùng 1 câu khi chơi lại
function getG1AnsweredCorrectSet() {
  return loadProgress('g1_answered_correct', []);
}

function showG1Play() {
  document.getElementById('g1-play').style.display = 'block';
  document.getElementById('g1-gameover').classList.remove('show');
  document.getElementById('g1-complete').classList.remove('show');
}

function renderG1() {
  showG1Play();
  const q = (window.g1Data_filtered || g1Data)[g1Index];
  document.getElementById('g1-score').textContent = g1Score;
 const _total = window.g1Data_filtered?.length || g1Data.length;
document.getElementById('g1-current').textContent = g1Index + 1;
document.getElementById('g1-total').textContent = _total;
document.getElementById('g1-progress-bar').style.width = ((g1Index + 1) / _total * 100) + '%';

  // Hiển thị chủ đề đã chọn
  const setup = getGameSetup('game-1');
if (setup && setup.topic !== 'all') {
  const topicName = GAME1_TOPICS.find(t => t.value === setup.topic)?.label || 'Tất cả';
  const subtitle = document.getElementById('g1-subtitle');
  if (subtitle) {
    subtitle.textContent = '📚 ' + topicName;
    subtitle.style.display = 'block';
  }
}
  document.getElementById('g1-lives').textContent = g1Lives;
 const silBox = document.getElementById('sil-box');
silBox.className = 'silhouette-box mystery';
silBox.innerHTML = `<img src="${q.img}" alt="${q.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;filter:brightness(0.15) blur(2px);transition:filter 0.5s ease;">`;
  document.getElementById('g1-clue').textContent = q.clue;
  document.getElementById('g1-result').className = 'result-msg';
  document.getElementById('g1-bio-box').style.display = 'none';
  document.getElementById('g1-next').className = 'next-btn';
document.getElementById('g1-hint-btn').disabled = false;
document.getElementById('g1-hint-extra').style.display = 'none';
  const grid = document.getElementById('g1-options');
  grid.innerHTML = '';
  [...q.options].sort(() => Math.random() - 0.5).forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectG1(opt, q.answer);
    grid.appendChild(btn);
  });
  clearInterval(g1Timer);
g1TimeLeft = 20;
document.getElementById('g1-timer').textContent = '⏱ 20s';
g1Timer = setInterval(() => {
  g1TimeLeft--;
  document.getElementById('g1-timer').textContent = '⏱ ' + g1TimeLeft + 's';
  if (g1TimeLeft <= 5) document.getElementById('g1-timer').style.color = '#e74c3c';
  if (g1TimeLeft <= 0) { clearInterval(g1Timer); selectG1('__timeout__', (window.g1Data_filtered || g1Data)[g1Index].answer); }
}, 1000);
}

function selectG1(chosen, correct) {
  clearInterval(g1Timer);
  document.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('correct');
    if (b.textContent === chosen && chosen !== correct) b.classList.add('wrong');
  });
 const silBox = document.getElementById('sil-box');
silBox.className = 'silhouette-box revealed';
const img = silBox.querySelector('img');
if (img) {
  img.style.transition = 'filter 1.2s ease, transform 1s ease';
  img.style.filter = 'brightness(1) blur(0)';
  img.style.transform = 'scale(1.08)';
  setTimeout(() => { img.style.transform = 'scale(1)'; }, 1200);
}

  const res = document.getElementById('g1-result');
  const _qNow = (window.g1Data_filtered || g1Data)[g1Index];
  if (chosen === correct) {
    // Chỉ cộng XP toàn cục cho lần ĐẦU TIÊN trả lời đúng câu này (chống farm XP bằng cách chơi lại)
    const answeredSet = getG1AnsweredCorrectSet();
    const isFirstTime = !answeredSet.includes(_qNow.name);

    g1Score += 20;
    res.className = 'result-msg success show';
    playCorrectSound();

    if (isFirstTime) {
      addXP(20);
      answeredSet.push(_qNow.name);
      saveProgress('g1_answered_correct', answeredSet);
      res.textContent = '🎉 Chính xác! +20 XP';
    } else {
      res.textContent = '🎉 Chính xác! (+20 điểm, XP câu này đã nhận trước đó)';
    }
  } else {
    res.className = 'result-msg fail show';
    playWrongSound();
    res.textContent = `❌ Sai rồi! Đáp án đúng là: ${correct} (-10 điểm)`;
    g1Score = Math.max(0, g1Score - 10);
    g1Lives--;
    document.getElementById('g1-lives').textContent = g1Lives;
  }
  document.getElementById('g1-score').textContent = g1Score;

  const _q = (window.g1Data_filtered || g1Data)[g1Index];
  document.getElementById('g1-bio-name').textContent = '📜 ' + _q.name;
  document.getElementById('g1-bio-text').textContent = _q.bio || 'Đang cập nhật thông tin...';
  document.getElementById('g1-bio-box').style.display = 'block';

  document.getElementById('g1-next').className = 'next-btn show';
}

function nextG1() {
  if (g1Lives <= 0) {
    showG1GameOver();
    return;
  }
  g1Index++;
  if (g1Index >= (window.g1Data_filtered || g1Data).length) {
    showG1Complete();
    return;
  }
  renderG1();
}

function showG1GameOver() {
  document.getElementById('g1-play').style.display = 'none';
  document.getElementById('g1-complete').classList.remove('show');
  document.getElementById('g1-gameover-score').textContent = g1Score + ' điểm';
  document.getElementById('g1-gameover').classList.add('show');
  playWrongSound();
  // syncXPToServer(g1Score, 'GAME1', 'Game 1 - Hết mạng');
}

function showG1Complete() {
  
  document.getElementById('g1-play').style.display = 'none';
  document.getElementById('g1-gameover').classList.remove('show');

  const pct = g1Score / ((window.g1Data_filtered?.length || g1Data.length) * 20);
  let trophy = '🏆', title = 'Xuất sắc!', sub = 'Bạn nhớ rất giỏi các nhân vật lịch sử!';
  if (pct < 0.4)      { trophy = '📚'; title = 'Cần cố gắng hơn!'; sub = 'Hãy ôn tập thêm và thử lại nhé!'; }
  else if (pct < 0.7) { trophy = '🎖️'; title = 'Khá tốt!'; sub = 'Bạn đang trên đà tiến bộ!'; }
  else if (pct < 1)   { trophy = '🥈'; title = 'Rất giỏi!'; sub = 'Chỉ còn một bước nữa thôi!'; }

  document.getElementById('g1-complete-trophy').textContent = trophy;
  document.getElementById('g1-complete-title').textContent = title;
  document.getElementById('g1-complete-sub').textContent = sub;
  document.getElementById('g1-complete-score').textContent = g1Score + ' điểm';
  document.getElementById('g1-complete').classList.add('show');
  showToast('🏅 Hoàn thành Game 1!', '🏅');
  launchConfetti();
saveProgress('g1_best', Math.max(g1Score, loadProgress('g1_best', 0)));
// syncXPToServer(g1Score, 'GAME1', 'Hoàn thành Game 1 - Đoán Nhân Vật');

// Lưu progress để checkUnlockCondition đọc được
saveProgress('game_g1', { completed: true, score: g1Score });

// Để hệ thống tự kiểm tra điều kiện và mở khóa đúng theo allCards
unlockCard('ngo-quyen');
unlockCard('tran-hung-dao');
unlockCard('hai-ba-trung');
unlockCard('ho-chi-minh');
unlockCard('vo-nguyen-giap');
}

function restartG1() {
  g1Index = 0;
  g1Score = 0;
  g1Lives = 3;

  const setup = getGameSetup('game-1');
  window.g1Data_filtered = getGame1DataByTopic(setup.topic, setup.count);

  renderG1();
}
function buyHint() {
  if (totalXP < 15) { showToast('Không đủ XP!', '❌'); return; }
  const q = (window.g1Data_filtered || g1Data)[g1Index];
  addXP(-15);
  document.getElementById('g1-hint-extra').style.display = 'block';
  const hints = [
    '🏛️ Triều đại: ' + (q.clue.includes('Lý') ? 'Nhà Lý' : q.clue.includes('Trần') ? 'Nhà Trần' : q.clue.includes('Lê') ? 'Nhà Lê' : q.clue.includes('Tây Sơn') ? 'Tây Sơn' : 'Thời kỳ hiện đại'),
    '⚔️ Nổi tiếng vì: ' + (q.clue.includes('đánh') ? 'chiến công quân sự' : q.clue.includes('viết') || q.clue.includes('tác giả') ? 'văn chương, trí tuệ' : q.clue.includes('khởi nghĩa') ? 'lãnh đạo khởi nghĩa' : 'cống hiến cho dân tộc'),
    '🔢 Số ký tự trong tên: ' + q.name.length + ' chữ cái',
  ];
  const randomHint = hints[Math.floor(Math.random() * hints.length)];
  document.getElementById('g1-hint-extra').textContent = '🔍 ' + randomHint;
  document.getElementById('g1-hint-btn').disabled = true;
}