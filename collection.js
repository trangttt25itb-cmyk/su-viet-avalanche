// ========== THẺ SƯU TẬP NHÂN VẬT ==========

const allCards = [
  {
    id: 'ngo-quyen', order: 1,
    name: 'Ngô Quyền', title: 'Anh hùng sông Bạch Đằng', year: '938', topic: 'Chống ngoại xâm',

    img: 'images/ngo-quyen.jpg', rarity: 'rare', rarityLabel: '⚔️ Hiếm',
    color: { bg: 'linear-gradient(135deg,#0B3D2E,#1B6B4A)', border: '#2ECC71', glow: 'rgba(46,204,113,0.4)' },
    desc: 'Đánh tan quân Nam Hán, chấm dứt 1000 năm Bắc thuộc.',
    unlockedBy: { game: 'g1', condition: 'complete' }, unlockHint: 'Hoàn thành Game 1',
    quote: '"Một cọc sắt dưới lòng sông có thể nhấn chìm vạn thuyền giặc."',
    detail: 'Ngô Quyền (898–944) xuất thân từ Đường Lâm, Hà Nội. Ông lấy con gái Dương Đình Nghệ và sau đó đánh bại quân Nam Hán trên sông Bạch Đằng năm 938, chấm dứt hơn 1000 năm Bắc thuộc, mở ra kỷ nguyên độc lập tự chủ.',
  },
  {
    id: 'tran-hung-dao', order: 2,
    name: 'Trần Hưng Đạo', title: 'Đại Nguyên Soái', year: '1288', topic: 'Chống ngoại xâm',
    img: 'images/hungdao.jpg', rarity: 'epic', rarityLabel: '🐉 Sử Thi',
    color: { bg: 'linear-gradient(135deg,#1A2A6B,#3B5BA9)', border: '#5DADE2', glow: 'rgba(93,173,226,0.4)' },
    desc: '3 lần đánh bại quân Nguyên Mông, tác giả Hịch tướng sĩ.',
    unlockedBy: { game: 'g1', condition: 'score>=200' }, unlockHint: 'Game 1 đạt 200 điểm',
    quote: '"Nếu bệ hạ muốn hàng, xin hãy chém đầu thần trước đã."',
    detail: 'Trần Hưng Đạo (1228–1300) tên thật Trần Quốc Tuấn. Ông 3 lần đánh bại đế quốc Nguyên Mông hùng mạnh nhất thế giới lúc bấy giờ. Tác phẩm Hịch tướng sĩ của ông được coi là áng văn chương bất hủ.',
  },
  {
    id: 'hai-ba-trung', order: 3,
    name: 'Hai Bà Trưng', title: 'Biểu Tượng Bất Khuất', year: '40 SCN', topic: 'Chống ngoại xâm',
    img: 'images/haibatrung.jpg', rarity: 'rare', rarityLabel: '🌺 Hiếm',
    color: { bg: 'linear-gradient(135deg,#6B0F3A,#A8336B)', border: '#E91E8C', glow: 'rgba(233,30,140,0.4)' },
    desc: 'Khởi nghĩa chống Đông Hán, hai nữ anh hùng đầu tiên của Việt Nam.',
    unlockedBy: { game: 'g1', condition: 'score>=320' }, unlockHint: 'Game 1 đạt 320 điểm',
    quote: '"Một xin rửa sạch nước thù, hai xin đem lại nghiệp xưa họ Hùng."',
    detail: 'Hai Bà Trưng (? – 43 SCN) gồm Trưng Trắc và Trưng Nhị, quê Mê Linh. Năm 40 SCN phất cờ khởi nghĩa, xưng vương, làm chủ 65 thành trì. Là hai nữ anh hùng đầu tiên trong lịch sử Việt Nam.',
  },
  {
    id: 'dinh-bo-linh', order: 4,
    name: 'Đinh Bộ Lĩnh', title: 'Hoàng Đế Đầu Tiên', year: '968', topic: 'Triều đại',
    img: 'images/DinhBoLinh.jpg', rarity: 'rare', rarityLabel: '🏰 Hiếm',
    color: { bg: 'linear-gradient(135deg,#2C2C54,#474787)', border: '#9B59B6', glow: 'rgba(155,89,182,0.4)' },
    desc: 'Dẹp loạn 12 sứ quân, lập Đại Cồ Việt — nhà nước phong kiến đầu tiên.',
    unlockedBy: { game: 'g2', condition: 'score>=7' }, unlockHint: 'Game 2 đúng 7/9',
    quote: '"Dẹp loạn mười hai sứ quân, non sông thu về một mối."',
    detail: 'Đinh Bộ Lĩnh (924–979) quê Hoa Lư, Ninh Bình. Dẹp loạn 12 sứ quân năm 968, thống nhất đất nước, lập Đại Cồ Việt — nhà nước phong kiến trung ương tập quyền đầu tiên của Việt Nam.',
  },
  {
    id: 'nguyen-trai', order: 5,
    name: 'Nguyễn Trãi', title: 'Danh Nhân Văn Hóa', year: 'TK XV', topic: 'Văn học-Văn hóa',
    img: 'images/NguyenTrai.jpg', rarity: 'epic', rarityLabel: '✍️ Sử Thi',
    color: { bg: 'linear-gradient(135deg,#4A2E0E,#7B5A2E)', border: '#D4A855', glow: 'rgba(212,168,85,0.4)' },
    desc: 'Soạn Bình Ngô đại cáo, quân sư tài ba của Lê Lợi.',
    unlockedBy: { game: 'g2', condition: 'score>=9' }, unlockHint: 'Game 2 đúng 9/9',
    quote: '"Việc nhân nghĩa cốt ở yên dân, quân điếu phạt trước lo trừ bạo."',
    detail: 'Nguyễn Trãi (1380–1442) hiệu Ức Trai. Quân sư tài ba của Lê Lợi, soạn Bình Ngô đại cáo năm 1428. Được UNESCO công nhận là Danh nhân Văn hóa Thế giới năm 1980.',
  },
  {
    id: 'ly-thuong-kiet', order: 6,
   name: 'Lý Thường Kiệt', title: 'Danh Tướng Nhà Lý', year: '1077', topic: 'Chống ngoại xâm',
    img: 'images/LyThuongKiet.jpg', rarity: 'rare', rarityLabel: '📜 Hiếm',
    color: { bg: 'linear-gradient(135deg,#0D3B4A,#1B6B7B)', border: '#48C9B0', glow: 'rgba(72,201,176,0.4)' },
    desc: 'Tác giả Nam quốc sơn hà — Tuyên ngôn Độc lập đầu tiên.',
    unlockedBy: { game: 'g4', condition: 'round>=3' }, unlockHint: 'Game 4 hoàn thành vòng 3',
    quote: '"Nam quốc sơn hà Nam đế cư — Tiệt nhiên định phận tại thiên thư."',
    detail: 'Lý Thường Kiệt (1019–1105) tên thật Ngô Tuấn. Ông chủ động tấn công Tống năm 1075 và đọc bài thơ "Nam quốc sơn hà" — được coi là bản Tuyên ngôn Độc lập đầu tiên của Việt Nam.',
  },
  {
    id: 'le-loi', order: 7,
    name: 'Lê Lợi', title: 'Bình Định Vương', year: '1428', topic: 'Chống ngoại xâm',
    img: 'images/LeLoi.jpg', rarity: 'epic', rarityLabel: '🔥 Sử Thi',
    color: { bg: 'linear-gradient(135deg,#5C1A00,#A63B0A)', border: '#E67E22', glow: 'rgba(230,126,34,0.4)' },
    desc: 'Lãnh đạo khởi nghĩa Lam Sơn 10 năm, lập nhà Hậu Lê.',
    unlockedBy: { game: 'g4', condition: 'round>=5' }, unlockHint: 'Game 4 hoàn thành 5/5 vòng',
    quote: '"Mười năm nếm mật nằm gai — Lam Sơn khởi nghĩa dựng xây sơn hà."',
    detail: 'Lê Lợi (1385–1433) quê Thanh Hóa. Phát động khởi nghĩa Lam Sơn năm 1418, kiên trì kháng chiến 10 năm, đánh đuổi hoàn toàn quân Minh năm 1428, lập ra nhà Hậu Lê kéo dài 360 năm.',
  },
  {
    id: 'ba-trieu', order: 8,
    name: 'Bà Triệu', title: 'Nữ Tướng Cưỡi Voi', year: '248', topic: 'Chống ngoại xâm',
    img: 'images/BaTrieu.jpg', rarity: 'rare', rarityLabel: '🌿 Hiếm',
    color: { bg: 'linear-gradient(135deg,#1E5631,#3D8B4E)', border: '#58D68D', glow: 'rgba(88,214,141,0.4)' },
    desc: 'Cưỡi voi xung trận chống quân Đông Ngô năm 248.',
    unlockedBy: { game: 'g5', condition: 'pct>=70' }, unlockHint: 'Game 5 trả lời đúng 7/10',
    quote: '"Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông."',
    detail: 'Bà Triệu (226–248) tên thật Triệu Thị Trinh, quê Thanh Hóa. Năm 19 tuổi cưỡi voi xung trận chống quân Đông Ngô với câu nói nổi tiếng bất hủ về chí khí của người Việt.',
  },
  {
    id: 'vo-thi-sau', order: 9,
   name: 'Võ Thị Sáu', title: 'Anh Hùng Trẻ Tuổi', year: '1952', topic: 'Thời hiện đại',
    img: 'images/VoThiSau.jpg', rarity: 'rare', rarityLabel: '💫 Hiếm',
    color: { bg: 'linear-gradient(135deg,#5B1A3A,#8E2C5A)', border: '#EC7FA9', glow: 'rgba(236,127,169,0.4)' },
    desc: 'Hy sinh năm 19 tuổi tại Côn Đảo, biểu tượng bất khuất.',
    unlockedBy: { game: 'g5', condition: 'pct>=90' }, unlockHint: 'Game 5 trả lời đúng 9/10',
    quote: '"Tôi không có tội gì. Đả đảo thực dân Pháp! Việt Nam độc lập muôn năm!"',
    detail: 'Võ Thị Sáu (1933–1952) quê Bà Rịa–Vũng Tàu. Tham gia kháng chiến từ năm 14 tuổi, bị bắt và hy sinh tại Côn Đảo năm 19 tuổi. Là người đầu tiên được truy tặng danh hiệu Anh hùng Lực lượng Vũ trang.',
  },
  {
   id: 'quang-trung', order: 10,
    name: 'Quang Trung', title: 'Anh Hùng Áo Vải', year: '1789', topic: 'Chống ngoại xâm',
    img: 'images/quangtrung.jpg', rarity: 'legendary', rarityLabel: '👑 Huyền Thoại',
    color: { bg: 'linear-gradient(135deg,#7B4A00,#C0392B)', border: '#F39C12', glow: 'rgba(243,156,18,0.5)' },
    desc: 'Đại phá 20 vạn quân Thanh trong 5 ngày Tết Kỷ Dậu.',
    unlockedBy: { game: 'g3', condition: 'perfect' }, unlockHint: 'Game 3 Quiz đúng 10/10',
    quote: '"Đánh cho để dài tóc — Đánh cho để đen răng — Đánh cho nó chích luân bất phản!"',
    detail: 'Quang Trung — Nguyễn Huệ (1753–1792) quê Bình Định. Lãnh đạo phong trào Tây Sơn, đánh tan 20 vạn quân Thanh chỉ trong 5 ngày Tết 1789. Được sử sách đánh giá là thiên tài quân sự xuất chúng nhất Việt Nam.',
  },
  {
    id: 'ho-chi-minh', order: 11,
    name: 'Hồ Chí Minh', title: 'Cha Già Dân Tộc', year: '1945', topic: 'Danh nhân',
    img: 'images/chandunghcm.jpg', rarity: 'legendary', rarityLabel: '👑 Huyền Thoại',
    color: { bg: 'linear-gradient(135deg,#1B1F3B,#3A2A6B)', border: '#FFD700', glow: 'rgba(255,215,0,0.5)' },
    desc: 'Đọc Tuyên ngôn Độc lập 2/9/1945, khai sinh nước Việt Nam.',
    unlockedBy: { condition: 'allComplete' }, unlockHint: 'Hoàn thành tất cả 5 game',
    quote: '"Không có gì quý hơn độc lập, tự do."',
    detail: 'Hồ Chí Minh (1890–1969) tên khai sinh Nguyễn Sinh Cung, quê Nghệ An. Bôn ba 30 năm tìm đường cứu nước, sáng lập Đảng Cộng sản Việt Nam năm 1930, đọc Tuyên ngôn Độc lập ngày 2/9/1945.',
  },
  {
    id: 'vo-nguyen-giap', order: 12,
    name: 'Võ Nguyên Giáp', title: 'Vị Tướng Huyền Thoại', year: '1954', topic: 'Thời hiện đại',
    img: 'images/vonguyengiap.jfif', rarity: 'legendary', rarityLabel: '⭐ Huyền Thoại',
    color: { bg: 'linear-gradient(135deg,#2C3E50,#34495E)', border: '#ECF0F1', glow: 'rgba(236,240,241,0.4)' },
    desc: 'Chỉ huy Điện Biên Phủ, đại tướng lừng danh thế giới.',
    unlockedBy: { condition: 'cardsUnlocked>=11' }, unlockHint: 'Mở khóa 11 thẻ trước',
    quote: '"Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ."',
    detail: 'Võ Nguyên Giáp (1911–2013) quê Quảng Bình. Tự học binh pháp, trở thành Đại tướng đầu tiên của Quân đội Nhân dân Việt Nam. Chiến thắng Điện Biên Phủ 1954 được thế giới ca ngợi là thiên tài quân sự.',
  },
  {
    id: 'hung-vuong', order: 13,
    name: 'Hùng Vương', title: 'Vua Dựng Nước', year: 'Thời đại Hùng Vương', topic: 'Triều đại',
    img: 'images/hungvuong.jpg', rarity: 'legendary', rarityLabel: '👑 Huyền Thoại',
    color: { bg: 'linear-gradient(135deg,#4A3510,#8B6B2E)', border: '#D4A93C', glow: 'rgba(212,169,60,0.4)' },
    desc: 'Dựng nước Văn Lang, đặt nền móng văn minh sông Hồng.',
    unlockedBy: { game: 'g1', condition: 'score>=440' }, unlockHint: 'Game 1 đạt 440 điểm',
    quote: '"Các Vua Hùng đã có công dựng nước — Bác cháu ta phải cùng nhau giữ lấy nước."',
    detail: 'Theo truyền thuyết, các Vua Hùng dựng nước Văn Lang, đặt kinh đô tại Phong Châu, đặt nền móng cho văn minh sông Hồng và ý thức "đồng bào" của người Việt. Năm 2012, tín ngưỡng thờ cúng Hùng Vương được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại.',
  },
  {
    id: 'an-duong-vuong', order: 14,
    name: 'An Dương Vương', title: 'Vua Nước Âu Lạc', year: '257 TCN — 179 TCN', topic: 'Triều đại',
    img: 'images/adv1.jpg', rarity: 'epic', rarityLabel: '🏯 Sử Thi',
    color: { bg: 'linear-gradient(135deg,#0D3B3B,#1B6B6B)', border: '#48C9B0', glow: 'rgba(72,201,176,0.4)' },
    desc: 'Xây thành Cổ Loa, chế nỏ thần — bi kịch mất nước vì mất cảnh giác.',
    unlockedBy: { game: 'g1', condition: 'score>=500' }, unlockHint: 'Game 1 đạt 500 điểm',
    quote: '"Kẻ ngồi sau lưng nhà ngươi chính là giặc!"',
    detail: 'An Dương Vương (Thục Phán) lập nước Âu Lạc năm 257 TCN, xây thành Cổ Loa hình trôn ốc kiên cố và sở hữu nỏ thần bách phát bách trúng. Vì tin tưởng Trọng Thủy, bí mật nỏ thần bị đánh cắp, dẫn đến bi kịch mất nước năm 179 TCN.',
  },
  {
    id: 'my-chau', order: 15,
    name: 'Mỵ Châu', title: 'Bi Kịch Tình Yêu', year: '179 TCN', topic: 'Văn học-Văn hóa',
    img: 'images/mychauu.jpg', rarity: 'rare', rarityLabel: '🕊️ Hiếm',
    color: { bg: 'linear-gradient(135deg,#4A0E2E,#7B2D55)', border: '#E88FC0', glow: 'rgba(232,143,192,0.4)' },
    desc: 'Công chúa Âu Lạc — tình yêu chân thành nhưng đặt lòng tin nhầm chỗ.',
    unlockedBy: { game: 'g2', condition: 'score>=3' }, unlockHint: 'Game 2 đúng 3/9',
    quote: 'Tương truyền máu Mỵ Châu chảy xuống biển hóa thành ngọc trai.',
    detail: 'Mỵ Châu, con gái An Dương Vương, kết duyên cùng Trọng Thủy. Vì tin tưởng chồng tuyệt đối, nàng vô tình để lộ bí mật nỏ thần, dẫn đến thành Cổ Loa thất thủ. Câu chuyện của nàng vẫn là đề tài tranh luận: nạn nhân hay tội nhân?',
  },
  {
    id: 'trieu-da', order: 16,
    name: 'Triệu Đà', title: 'Vua Nam Việt', year: '257 TCN — 137 TCN', topic: 'Triều đại',
    img: 'images/trieuda.png', rarity: 'epic', rarityLabel: '👑 Sử Thi',
    color: { bg: 'linear-gradient(135deg,#3D1A00,#7B4A00)', border: '#C9861F', glow: 'rgba(201,134,31,0.4)' },
    desc: 'Lập nước Nam Việt, dùng mưu kế thôn tính Âu Lạc.',
    unlockedBy: { game: 'g2', condition: 'score>=5' }, unlockHint: 'Game 2 đúng 5/9',
    quote: '"Đất Việt ta xưa vốn là đất mọi rợ, ta cũng là một chúa mọi mà thôi."',
    detail: 'Triệu Đà lập nước Nam Việt sau khi nhà Tần sụp đổ, trị vì gần 70 năm. Hai lần đánh Âu Lạc thất bại trước nỏ thần, ông dùng hôn nhân chính trị (Trọng Thủy - Mỵ Châu) để thôn tính năm 179 TCN — một nhân vật gây tranh cãi giữa "vua khai quốc" và "kẻ xâm lược".',
  },
  {
    id: 'le-thanh-tong', order: 17,
    name: 'Lê Thánh Tông', title: 'Minh Quân Thời Hồng Đức', year: '1442 — 1497', topic: 'Triều đại',
    img: 'images/vua-le-thanh-tong.jpg', rarity: 'legendary', rarityLabel: '👑 Huyền Thoại',
    color: { bg: 'linear-gradient(135deg,#5C4400,#A67C00)', border: '#F1C40F', glow: 'rgba(241,196,15,0.4)' },
    desc: 'Ban hành Luật Hồng Đức, đưa Đại Việt vào thời hoàng kim.',
    unlockedBy: { game: 'g2', condition: 'score>=8' }, unlockHint: 'Game 2 đúng 8/9',
    quote: '"Pháp luật là phép công của nhà nước, ta cùng các ngươi phải tuân theo."',
    detail: 'Lê Thánh Tông trị vì 38 năm (1460-1497), ban hành Luật Hồng Đức nhân văn bậc nhất thời phong kiến, cải cách hành chính thành 13 đạo thừa tuyên, mở mang bờ cõi và lập Hội Tao Đàn — đưa Đại Việt vào thời kỳ hoàng kim rực rỡ nhất lịch sử phong kiến.',
  },
  {
    id: 'nguyen-du', order: 18,
    name: 'Nguyễn Du', title: 'Đại Thi Hào Dân Tộc', year: '1765 — 1820', topic: 'Văn học-Văn hóa',
    img: 'images/thihaonguyendu.jpg', rarity: 'epic', rarityLabel: '📜 Sử Thi',
    color: { bg: 'linear-gradient(135deg,#3A1A5C,#6B2D9B)', border: '#C39BD3', glow: 'rgba(195,155,211,0.4)' },
    desc: 'Tác giả Truyện Kiều — kiệt tác văn học Việt Nam.',
    unlockedBy: { game: 'g5', condition: 'pct>=50' }, unlockHint: 'Game 5 trả lời đúng 5/10',
    quote: '"Trải qua một cuộc bể dâu, những điều trông thấy mà đau đớn lòng."',
    detail: 'Nguyễn Du (1765-1820) trải qua mười năm gió bụi trước khi ra làm quan triều Nguyễn. Từ tiểu thuyết Kim Vân Kiều truyện của Trung Quốc, ông sáng tạo nên Truyện Kiều — 3.254 câu thơ lục bát bất hủ. Năm 1965 ông được vinh danh Danh nhân văn hóa thế giới.',
  },
  {
    id: 'ly-bi', order: 19,
    name: 'Lý Bí', title: 'Vị Hoàng Đế Đầu Tiên', year: '503 — 548', topic: 'Chống ngoại xâm',
    img: 'images/lybi.jpg', rarity: 'rare', rarityLabel: '👑 Hiếm',
    color: { bg: 'linear-gradient(135deg,#0D2A5C,#1B4B8B)', border: '#5DADE2', glow: 'rgba(93,173,226,0.4)' },
    desc: 'Đánh bại nhà Lương, lập nước Vạn Xuân, xưng đế.',
    unlockedBy: { game: 'g5', condition: 'pct>=30' }, unlockHint: 'Game 5 trả lời đúng 3/10',
    quote: '"Mong xã tắc được bền vững đến muôn đời."',
    detail: 'Năm 544, sau khi đánh bại quân Lương, Lý Bí lên ngôi Hoàng đế, lấy hiệu Lý Nam Đế, đặt tên nước Vạn Xuân — người Việt đầu tiên dám xưng đế ngang hàng vua phương Bắc, thể hiện ý thức tự chủ dân tộc mạnh mẽ chưa từng có.',
  },
  {
    id: 'nguyen-van-troi', order: 20,
    name: 'Nguyễn Văn Trỗi', title: 'Người Con Bất Khuất', year: '1940 — 1964', topic: 'Thời hiện đại',
    img: 'images/tuongnguyenvantroi.jpg', rarity: 'rare', rarityLabel: '🔥 Hiếm',
    color: { bg: 'linear-gradient(135deg,#5C0000,#A61B1B)', border: '#E74C3C', glow: 'rgba(231,76,60,0.4)' },
    desc: 'Chiến sĩ biệt động thành, hiên ngang trước pháp trường ở tuổi 24.',
    unlockedBy: { game: 'g5', condition: 'pct>=60' }, unlockHint: 'Game 5 trả lời đúng 6/10',
    quote: '"Còn giặc Mỹ thì không có hạnh phúc, phải đánh đuổi chúng đi."',
    detail: 'Nguyễn Văn Trỗi (1940-1964), chàng thợ điện Sài Gòn, bị bắt khi thực hiện nhiệm vụ đặt mìn tại cầu Công Lý năm 1964. Bị tra tấn nhiều tháng nhưng không khai báo, anh hiên ngang bước ra pháp trường ngày 15/10/1964, trở thành biểu tượng bất khuất của thanh niên miền Nam.',
  },
  
  {
    id: 'le-hoan', order: 22,
    name: 'Lê Hoàn', title: 'Đại Thắng Quân Tống', year: '941 — 1005', topic: 'Chống ngoại xâm',
    img: 'images/lehoan1.jpg', rarity: 'rare', rarityLabel: '⚔️ Hiếm',
    color: { bg: 'linear-gradient(135deg,#0B3D1E,#1B6B3A)', border: '#2ECC71', glow: 'rgba(46,204,113,0.4)' },
    desc: 'Đánh tan 30 vạn quân Tống, dựng nghiệp nhà Tiền Lê.',
    unlockedBy: { game: 'g1', condition: 'score>=260' }, unlockHint: 'Game 1 đạt 260 điểm',
    quote: '"Đại Cồ Việt tuy nhỏ, nhưng lòng người quyết một dạ giữ nước, ắt không dễ khuất phục."',
    detail: 'Lê Hoàn được suy tôn lên ngôi năm 980 giữa lúc quân Tống lăm le xâm lược. Năm 981, ông tái sử dụng kế cọc ngầm của Ngô Quyền trên sông Bạch Đằng, kết hợp phục binh ở Chi Lăng, đại thắng quân Tống, mở ra thời kỳ thịnh trị của nhà Tiền Lê.',
  },
  {
    id: 'ly-thai-to', order: 23,
    name: 'Lý Thái Tổ', title: 'Khai Sinh Thăng Long', year: '974 — 1028', topic: 'Triều đại',
    img: 'images/lythaito2.jpg', rarity: 'legendary', rarityLabel: '🐉 Huyền Thoại',
    color: { bg: 'linear-gradient(135deg,#4A3500,#8B6B00)', border: '#F4C542', glow: 'rgba(244,197,66,0.4)' },
    desc: 'Ban Chiếu dời đô, khai sinh kinh đô Thăng Long nghìn năm.',
    unlockedBy: { game: 'g1', condition: 'score>=380' }, unlockHint: 'Game 1 đạt 380 điểm',
    quote: '"Thành Đại La... được thế rồng cuộn hổ ngồi... thực là chốn hội tụ trọng yếu của bốn phương."',
    detail: 'Lý Công Uẩn được suy tôn lên ngôi năm 1009, lập ra nhà Lý. Năm 1010, ông ban Chiếu dời đô, dời kinh đô từ Hoa Lư ra Đại La, đặt tên Thăng Long — mở ra kinh đô nghìn năm văn hiến của Việt Nam.',
  },
  {
    id: 'tran-nhan-tong', order: 24,
    name: 'Trần Nhân Tông', title: 'Vua Phật Đại Việt', year: '1258 — 1308', topic: 'Chống ngoại xâm',
    img: 'images/trannhantong2.jpg', rarity: 'legendary', rarityLabel: '🙏 Huyền Thoại',
    color: { bg: 'linear-gradient(135deg,#5C3A00,#A6721B)', border: '#E67E22', glow: 'rgba(230,126,34,0.4)' },
    desc: 'Hai lần đánh bại Nguyên Mông, rồi từ bỏ ngai vàng tu hành.',
    unlockedBy: { game: 'g3', condition: 'score>=6' }, unlockHint: 'Game 3 Quiz đúng 6/10',
    quote: '"Cư trần lạc đạo thả tùy duyên."',
    detail: 'Trần Nhân Tông hai lần lãnh đạo quân dân Đại Việt đánh bại đế chế Nguyên Mông (1285, 1288). Năm 1299, ông từ bỏ ngai vàng, lên Yên Tử xuất gia, sáng lập Thiền phái Trúc Lâm — dòng thiền thuần Việt đầu tiên trong lịch sử Phật giáo dân tộc.',
  },
  {
    id: 'ho-quy-ly', order: 25,
    name: 'Hồ Quý Ly', title: 'Nhà Cải Cách Táo Bạo', year: '1336 — 1407', topic: 'Triều đại',
    img: 'images/REPLACE-hoquyly.jpg', rarity: 'rare', rarityLabel: '📜 Hiếm',
    color: { bg: 'linear-gradient(135deg,#3A3A3A,#6B6B6B)', border: '#95A5A6', glow: 'rgba(149,165,166,0.4)' },
    desc: 'Cải cách tiền giấy, ruộng đất — nhưng đánh mất giang sơn.',
    unlockedBy: { game: 'g3', condition: 'score>=8' }, unlockHint: 'Game 3 Quiz đúng 8/10',
    quote: '"Ta không sợ mất tiếng vạn thế, chỉ sợ dân nghèo không được yên ổn."',
    detail: 'Hồ Quý Ly lập nhà Hồ năm 1400, đổi quốc hiệu Đại Ngu, thực hiện loạt cải cách táo bạo: tiền giấy, hạn điền, hạn nô, cải tổ khoa cử. Năm 1407, do thiếu sự đồng thuận của dân chúng, nhà Hồ nhanh chóng sụp đổ trước quân Minh xâm lược.',
  },
  {
    id: 'phan-boi-chau', order: 26,
    name: 'Phan Bội Châu', title: 'Nhà Cách Mạng Đông Du', year: '1867 — 1940', topic: 'Danh nhân',
    img: 'images/REPLACE-phanboichau.jpg', rarity: 'rare', rarityLabel: '🔥 Hiếm',
    color: { bg: 'linear-gradient(135deg,#4A2E10,#7B4A1E)', border: '#D4A855', glow: 'rgba(212,168,85,0.4)' },
    desc: 'Phát động phong trào Đông Du, thức tỉnh lòng yêu nước cả một thế hệ.',
    unlockedBy: { game: 'g1', condition: 'score>=150' }, unlockHint: 'Game 1 đạt 150 điểm',
    quote: '"Sinh vi nam tử yếu hi kỳ, khẳng hứa càn khôn tự chuyển di."',
    detail: 'Phan Bội Châu lập Duy Tân Hội (1904) rồi phát động phong trào Đông Du, đưa gần 200 thanh niên Việt Nam sang Nhật du học. Dù phong trào sụp đổ năm 1908-1909 do Pháp - Nhật ký hiệp ước, tư tưởng duy tân của ông đã thức tỉnh cả một thế hệ yêu nước Việt Nam.',
  },
];
const RARITY_COLORS = {
  rare:      { bg: 'linear-gradient(135deg,#1A2A4A,#2C3E6B)', border: '#4A90D9', glow: 'rgba(74,144,217,0.4)' },
  epic:      { bg: 'linear-gradient(135deg,#4A0E6B,#7B2D9B)', border: '#C39BD3', glow: 'rgba(195,155,211,0.4)' },
  legendary: { bg: 'linear-gradient(135deg,#7B4A00,#C0392B)', border: '#F39C12', glow: 'rgba(243,156,18,0.5)' },
};

// ===== KIỂM TRA ĐIỀU KIỆN MỞ KHÓA =====
function checkUnlockCondition(card) {
  if (!card.unlockedBy) return true;
  const { game, condition } = card.unlockedBy;
  const gp = game ? loadProgress(`game_${game}`, {}) : {};
  if (condition === 'complete') return gp.completed === true;
  if (condition === 'perfect') return gp.perfect === true;
  if (condition.startsWith('score>=')) return (gp.score || 0) >= Number(condition.split('>=')[1]);
  if (condition.startsWith('pct>=')) return (gp.pct || 0) >= Number(condition.split('>=')[1]);
  if (condition === 'allComplete') return ['g1','g2','g3','g4','g5'].every(g => loadProgress(`game_${g}`, {}).completed);
  if (condition.startsWith('cardsUnlocked>=')) return loadProgress('unlocked_cards', []).length >= Number(condition.split('>=')[1]);
  return false;
}

// ===== UNLOCK SYSTEM =====
function unlockCard(id) {
  const unlocked = loadProgress('unlocked_cards', []);
  if (unlocked.includes(id)) return;
  const card = allCards.find(c => c.id === id);
  if (!card || !checkUnlockCondition(card)) return;
  unlocked.push(id);
  saveProgress('unlocked_cards', unlocked);
  showToast(`🃏 Mở khóa: ${card.name}!`, '🃏');
  launchConfetti();
  renderCollection();
  checkEraCollectionTitle(card.topic);
}

function isUnlocked(id) {
  return loadProgress('unlocked_cards', []).includes(id);
}

// ===== BUFF XP THEO THẺ SƯU TẦM (dùng cho Game 3 Quiz) =====
function getCardBuffMultiplier(topic) {
  const unlocked = loadProgress('unlocked_cards', []);
  const matchingCards = allCards.filter(c => c.topic === topic);
  const ownedCount = matchingCards.filter(c => unlocked.includes(c.id)).length;
  return 1 + ownedCount * 0.1; // mỗi thẻ cùng chủ đề: +10% XP
}

// ===== DANH HIỆU BỘ SƯU TẬP THEO THỜI KỲ =====
const ERA_TITLES = {
  'Chống ngoại xâm': '🛡️ Hộ Quốc Đại Tướng',
  'Danh nhân': '🎓 Tri Kỷ Danh Nhân',
  'Triều đại': '👑 Sử Gia Triều Đại',
  'Văn học-Văn hóa': '📜 Học Giả Văn Hóa',
  'Thời hiện đại': '🔫 Chứng Nhân Thời Đại',
};

function checkEraCollectionTitle(topic) {
  if (!topic) return;
  const unlocked = loadProgress('unlocked_cards', []);
  const matchingCards = allCards.filter(c => c.topic === topic);
  if (matchingCards.length === 0) return;
  const allOwned = matchingCards.every(c => unlocked.includes(c.id));
  if (!allOwned) return;
  const earned = loadProgress('era_titles_unlocked', []);
  if (earned.includes(topic)) return;
  earned.push(topic);
  saveProgress('era_titles_unlocked', earned);
  showToast(`🏵️ Danh hiệu mới: ${ERA_TITLES[topic] || topic}!`, '🏵️');
  launchConfetti();
}

// ===== CSS ĐỘNG cho shine + flip =====
function injectCollectionStyles() {
  if (document.getElementById('coll-dynamic-styles')) return;
  const style = document.createElement('style');
  style.id = 'coll-dynamic-styles';
  style.textContent = `
    /* ===== SHINE EFFECT trên thẻ đã mở ===== */
    .coll-card.unlocked {
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
    .coll-card.unlocked::after {
      content: '';
      position: absolute;
      top: -60%;
      left: -60%;
      width: 40%;
      height: 200%;
      background: linear-gradient(
        105deg,
        transparent 40%,
        rgba(255,255,255,0.18) 50%,
        transparent 60%
      );
      transform: rotate(25deg);
      transition: none;
      pointer-events: none;
      opacity: 0;
    }
    .coll-card.unlocked:hover::after {
      opacity: 1;
      animation: cardShine 0.6s ease forwards;
    }
    @keyframes cardShine {
      0%   { left: -60%; }
      100% { left: 130%; }
    }

    /* Legendary thẻ — shine liên tục */
    .coll-card.unlocked.legendary-card::after {
      opacity: 1;
      animation: cardShineContinuous 2.5s infinite;
    }
    @keyframes cardShineContinuous {
      0%   { left: -60%; opacity: 0; }
      20%  { opacity: 1; }
      80%  { opacity: 1; }
      100% { left: 130%; opacity: 0; }
    }

    /* ===== FLIP 3D cho thẻ khóa ===== */
    .coll-card-flip-wrap {
      perspective: 800px;
      width: 100%;
      height: 100%;
      min-height: 240px;
    }
    .coll-card-flip-inner {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 240px;
      transform-style: preserve-3d;
      transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .coll-card-flip-inner.flipped {
      transform: rotateY(180deg);
    }
    .coll-card-face {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 16px 12px;
      border-radius: 14px;
    }
    .coll-card-back {
      transform: rotateY(180deg);
      background: linear-gradient(135deg, #1a2a4a, #2c3e6b);
      border-radius: 14px;
      text-align: center;
      padding: 16px 12px;
    }
    .coll-card-back .unlock-title {
      font-family: 'Baloo 2', cursive;
      font-size: 0.85rem;
      font-weight: 800;
      color: #F39C12;
      margin-bottom: 8px;
    }
    .coll-card-back .unlock-hint {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.75);
      line-height: 1.5;
      margin-bottom: 12px;
    }
    .coll-card-back .unlock-btn {
      background: linear-gradient(135deg, #F39C12, #C0392B);
      color: #fff;
      border: none;
      border-radius: 50px;
      padding: 8px 18px;
      font-family: 'Baloo 2', cursive;
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .coll-card-back .unlock-btn:hover { transform: scale(1.05); }

    /* ===== SỐ THỨ TỰ thẻ ===== */
    .coll-order-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      background: rgba(0,0,0,0.35);
      color: rgba(255,255,255,0.6);
      font-size: 0.68rem;
      font-weight: 800;
      padding: 2px 7px;
      border-radius: 50px;
      letter-spacing: 0.5px;
      z-index: 2;
    }

    /* ===== NÚT CHIA SẺ trong modal ===== */
    .card-modal-share-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.12);
      color: #fff;
      border: 1.5px solid rgba(255,255,255,0.25);
      border-radius: 50px;
      padding: 10px 22px;
      font-family: 'Baloo 2', cursive;
      font-size: 0.88rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      margin: 14px auto 0;
    }
    .card-modal-share-btn:hover {
      background: rgba(255,255,255,0.22);
      transform: translateY(-2px);
    }
    .card-modal-share-btn.copied {
      background: rgba(39,174,96,0.3);
      border-color: #27AE60;
    }
  `;
  document.head.appendChild(style);
}

// ===== RENDER COLLECTION TAB =====
function renderCollection() {
  injectCollectionStyles();

  const wrap = document.getElementById('collection-grid');
  if (!wrap) return;

  const unlocked = loadProgress('unlocked_cards', []);
  if (unlocked.length === 0) {
    unlocked.push('ngo-quyen');
    saveProgress('unlocked_cards', unlocked);
  }

  const total = allCards.length;
  const got = unlocked.length;

  const counter = document.getElementById('collection-counter');
  if (counter) {
    counter.textContent = `${got}/${total} thẻ đã mở khóa`;
    counter.style.background = got === total
      ? 'linear-gradient(135deg,#F39C12,#C0392B)'
      : 'rgba(255,255,255,0.15)';
  }

  wrap.innerHTML = '';
  const sorted = [...allCards].sort((a, b) => a.order - b.order);

  sorted.forEach(card => {
    const locked = !unlocked.includes(card.id);
    const rc = card.color || RARITY_COLORS[card.rarity];
    const canUnlock = locked && checkUnlockCondition(card);

    const el = document.createElement('div');
    el.className = 'coll-card' + (locked ? ' locked' : ` unlocked ${card.rarity}-card`);
   el.style.cssText = `
  background: ${locked 
    ? (card.rarity === 'rare' ? 'linear-gradient(135deg, #0D1F3C, #1A3A6B)' :
       card.rarity === 'epic' ? 'linear-gradient(135deg, #2D0845, #4A1A6B)' :
       'linear-gradient(135deg, #3D1A00, #5C3A1A)')
    : rc.bg};
  border: 2.5px solid ${locked ? '#444' : rc.border};
  box-shadow: ${locked ? 'none' : `0 0 18px ${rc.glow}, 0 8px 24px rgba(0,0,0,0.3)`};
  border-radius: 14px;
  min-height: 240px;
  position: relative;
`;

    if (locked) {
      // ===== FLIP 3D cho thẻ khóa =====
      el.innerHTML = `
        <div class="coll-card-flip-wrap">
          <div class="coll-card-flip-inner" id="flip-${card.id}">
            <!-- Mặt trước: khóa -->
            <div class="coll-card-face" style="background:#1a1a2e;border-radius:14px;">
              <div style="font-size:2.5rem;margin-bottom:8px;">🔒</div>
              <div style="color:#888;font-weight:800;font-size:1.1rem;letter-spacing:4px;">???</div>
              <div style="font-size:0.72rem;color:#666;margin-top:6px;font-style:italic;text-align:center;padding:0 8px;">
                ${canUnlock ? '🔓 Nhấn để xem điều kiện' : '📋 ' + card.unlockHint}
              </div>
            </div>
            <!-- Mặt sau: điều kiện mở khóa -->
            <div class="coll-card-back coll-card-face">
              <div style="font-size:1.8rem;margin-bottom:8px;">${card.rarity === 'legendary' ? '👑' : card.rarity === 'epic' ? '✨' : '⭐'}</div>
              <div class="unlock-title">Điều kiện mở khóa</div>
              <div class="unlock-hint">${card.unlockHint}</div>
              ${canUnlock
                ? `<button class="unlock-btn" onclick="unlockCard('${card.id}');event.stopPropagation()">🔓 Mở khóa ngay!</button>`
                : `<div style="font-size:0.75rem;color:rgba(255,255,255,0.4);">Chưa đủ điều kiện</div>`
              }
            </div>
          </div>
        </div>
      `;

      // Click để lật thẻ
      el.addEventListener('click', () => {
        const inner = document.getElementById(`flip-${card.id}`);
        if (inner) inner.classList.toggle('flipped');
      });

    } else {
      // ===== THẺ ĐÃ MỞ: có số thứ tự + shine =====
      el.innerHTML = `
        <div class="coll-order-badge">#${String(card.order).padStart(3,'0')}</div>
        <div class="coll-rarity">${card.rarityLabel}</div>
        <div class="coll-img-wrap">
          <img src="${card.img}" alt="${card.name}" onerror="this.style.display='none'">
        </div>
        <div class="coll-name">${card.name}</div>
        <div class="coll-title">${card.title}</div>
        <div class="coll-year">📅 ${card.year}</div>
        <div class="coll-desc">${card.desc}</div>
      `;

      el.addEventListener('mouseenter', () => {
        el.style.transform = 'translateY(-6px) scale(1.03)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
      el.addEventListener('click', () => openCardModal(card));
    }

    wrap.appendChild(el);
  });
}

function checkG2Collection() {
  unlockCard('dinh-bo-linh');
  unlockCard('nguyen-trai');
}

function checkG5Collection() {
  unlockCard('ba-trieu');
  unlockCard('vo-thi-sau');
}

// ===== MODAL THẺ NHÂN VẬT =====
function openCardModal(card) {
  const existing = document.getElementById('card-modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'card-modal-overlay';
  overlay.id = 'card-modal-overlay';
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  const mc = card.color || RARITY_COLORS[card.rarity];
  overlay.innerHTML = `
    <div class="card-modal card-modal--${card.rarity}" style="background:${mc.bg} !important; border-color:${mc.border} !important; box-shadow:0 0 50px ${mc.glow}, 0 20px 60px rgba(0,0,0,0.5) !important;">
      <div class="card-modal-bg-glow" style="background:${mc.border} !important;"></div>
      <button class="card-modal-close" onclick="document.getElementById('card-modal-overlay').remove()">✕</button>

      <div class="card-modal-header">
        <div class="card-modal-img-ring">
          <img class="card-modal-img" src="${card.img}" alt="${card.name}" onerror="this.style.display='none'">
        </div>
        <!-- Số thứ tự -->
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.4);font-weight:700;letter-spacing:1px;margin-bottom:4px;">
          #${String(card.order).padStart(3,'0')}
        </div>
        <div class="card-modal-rarity-badge">${card.rarityLabel}</div>
      </div>

      <div class="card-modal-name">${card.name}</div>
      <div class="card-modal-title">${card.title}</div>
      <div class="card-modal-year">📅 ${card.year}</div>
      <div class="card-modal-quote">${card.quote}</div>
      <div class="card-modal-divider"></div>
      <div class="card-modal-detail">${card.detail}</div>

      <!-- NÚT CHIA SẺ -->
      <button class="card-modal-share-btn" id="share-btn-${card.id}" onclick="shareCard('${card.id}')">
        🔗 Chia sẻ thẻ này
      </button>
    </div>
  `;

  document.body.appendChild(overlay);

  if (card.rarity === 'legendary') {
    launchConfetti();
    showToast('👑 Thẻ Huyền Thoại!', '👑');
  } else if (card.rarity === 'epic') {
    showToast('✨ Thẻ Sử Thi!', '✨');
  }
}

// ===== CHIA SẺ THẺ =====
function shareCard(cardId) {
  const card = allCards.find(c => c.id === cardId);
  if (!card) return;

  const text = `🏆 Tôi vừa mở khóa thẻ "${card.name}" (${card.rarityLabel}) trong Sử Việt!\n${card.quote}\n👉 Chơi tại: ${window.location.origin}`;

  const btn = document.getElementById(`share-btn-${cardId}`);

  // Thử Web Share API (mobile)
  if (navigator.share) {
    navigator.share({ title: `Thẻ ${card.name} — Sử Việt`, text }).catch(() => {});
    return;
  }

  // Fallback: copy vào clipboard
  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      btn.textContent = '✅ Đã sao chép!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = '🔗 Chia sẻ thẻ này';
        btn.classList.remove('copied');
      }, 2000);
    }
    showToast('📋 Đã sao chép thông tin thẻ!', '📋');
  }).catch(() => {
    showToast('❌ Không thể sao chép', '❌');
  });
}