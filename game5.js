// ========== GAME 5: VÒNG QUAY LỊCH SỬ ==========
const wheelSegments = [
  { label: '⚔️\nChiến trận', color: '#C0392B', qSet: 'battle' },
  { label: '👑\nTriều đại', color: '#8E44AD', qSet: 'dynasty' },
  { label: '🌟\nNhân vật', color: '#F39C12', qSet: 'person' },
  { label: '📅\nNăm tháng', color: '#2980B9', qSet: 'year' },
  { label: '🗺️\nĐịa danh', color: '#27AE60', qSet: 'place' },
  { label: '📜\nVăn hóa', color: '#E67E22', qSet: 'culture' },
];
// ========== BỘ CÂU HỎI ĐẦY ĐỦ - MỖI CHỦ ĐỀ 20 CÂU ==========
// Copy toàn bộ object bên dưới, dán đè lên object `wheelQuestions` cũ trong script.js

const wheelQuestions = {
  battle: [
    { q: 'Trong trận Bạch Đằng 938, Ngô Quyền dùng gì để bẫy thuyền giặc?', opts: ['Xích sắt', 'Cọc nhọn', 'Lửa', 'Đá tảng'], ans: 1, exp: 'Ngô Quyền cắm cọc nhọn bịt sắt xuống lòng sông, khi thủy triều rút thuyền địch bị cọc đâm thủng.' },
    { q: 'Trận Chi Lăng – Xương Giang năm 1427 tiêu diệt đạo viện binh của nhà nào?', opts: ['Nguyên', 'Minh', 'Thanh', 'Tống'], ans: 1, exp: 'Lê Lợi và Nguyễn Trãi dùng kế mai phục tiêu diệt 10 vạn quân Minh tiếp viện tại Chi Lăng.' },
    { q: 'Chiến thắng Điện Biên Phủ 1954 kết thúc sự đô hộ của nước nào tại Việt Nam?', opts: ['Mỹ', 'Anh', 'Pháp', 'Nhật'], ans: 2, exp: 'Sau thất bại Điện Biên Phủ, Pháp ký Hiệp định Genève, chấm dứt gần 100 năm đô hộ.' },
    { q: 'Trận Rạch Gầm – Xoài Mút năm 1785 do ai chỉ huy đánh bại quân Xiêm?', opts: ['Nguyễn Huệ', 'Nguyễn Ánh', 'Trần Hưng Đạo', 'Lê Lợi'], ans: 0, exp: 'Nguyễn Huệ chỉ huy đánh tan 5 vạn quân Xiêm xâm lược trên sông Rạch Gầm – Xoài Mút năm 1785.' },
    { q: 'Chiến dịch Tây Nguyên năm 1975 mở đầu bằng trận đánh ở đâu?', opts: ['Buôn Ma Thuột', 'Pleiku', 'Kon Tum', 'Đà Lạt'], ans: 0, exp: 'Trận Buôn Ma Thuột (10/3/1975) mở màn Chiến dịch Tây Nguyên, tạo bước ngoặt cho Đại thắng mùa Xuân 1975.' },
    { q: 'Năm 981, Lê Hoàn đánh bại quân xâm lược nào trên sông Bạch Đằng?', opts: ['Tống', 'Nguyên', 'Minh', 'Thanh'], ans: 0, exp: 'Năm 981, Lê Hoàn chỉ huy quân Đại Cồ Việt đánh tan quân Tống xâm lược, bảo vệ nền độc lập non trẻ.' },
    { q: 'Trận Bạch Đằng năm 1288 do ai chỉ huy đánh tan quân Nguyên Mông?', opts: ['Trần Quốc Tuấn', 'Trần Thủ Độ', 'Trần Quang Khải', 'Trần Nhật Duật'], ans: 0, exp: 'Trần Quốc Tuấn (Trần Hưng Đạo) chỉ huy trận Bạch Đằng 1288, dùng lại kế cắm cọc tiêu diệt đạo quân Nguyên Mông của Ô Mã Nhi.' },
    { q: 'Trận Đông Bộ Đầu năm 1258 đánh bại quân xâm lược nào lần thứ nhất?', opts: ['Nguyên Mông', 'Minh', 'Tống', 'Xiêm'], ans: 0, exp: 'Trận Đông Bộ Đầu (Thăng Long) năm 1258 đánh bại cuộc xâm lược lần thứ nhất của quân Nguyên Mông.' },
    { q: 'Trong kháng chiến chống Nguyên Mông lần 2 (1285), Trần Nhật Duật lập công lớn ở trận nào?', opts: ['Hàm Tử', 'Chương Dương', 'Tây Kết', 'Vạn Kiếp'], ans: 0, exp: 'Trần Nhật Duật chỉ huy đánh thắng trận Hàm Tử năm 1285, góp phần đánh bại quân Nguyên Mông xâm lược lần 2.' },
    { q: 'Trận Vạn Kiếp là nơi Trần Hưng Đạo lập căn cứ chống quân xâm lược nào?', opts: ['Nguyên Mông', 'Minh', 'Thanh', 'Tống'], ans: 0, exp: 'Vạn Kiếp (Hải Dương) là căn cứ quan trọng của Trần Hưng Đạo trong ba lần kháng chiến chống Nguyên Mông.' },
    { q: 'Hai Bà Trưng khởi nghĩa năm 40 đánh đuổi viên quan nào của nhà Hán?', opts: ['Tô Định', 'Mã Viện', 'Sĩ Nhiếp', 'Cao Biền'], ans: 0, exp: 'Năm 40, Hai Bà Trưng phất cờ khởi nghĩa đánh đuổi Thái thú Tô Định, giành lại độc lập trong thời gian ngắn.' },
    { q: 'Bà Triệu khởi nghĩa năm 248 chống lại ách đô hộ của nhà nào?', opts: ['Đông Ngô', 'Hán', 'Đường', 'Tống'], ans: 0, exp: 'Bà Triệu (Triệu Thị Trinh) lãnh đạo khởi nghĩa năm 248 chống ách đô hộ của nhà Đông Ngô.' },
    { q: 'Trận Tốt Động – Chúc Động (1426) là chiến thắng quan trọng của nghĩa quân nào?', opts: ['Lam Sơn', 'Tây Sơn', 'Cần Vương', 'Yên Thế'], ans: 0, exp: 'Trận Tốt Động – Chúc Động năm 1426 là chiến thắng lớn của nghĩa quân Lam Sơn trước quân Minh, mở đường tiến về Đông Quan.' },
    { q: 'Trận Ngọc Hồi – Đống Đa (1789) do ai chỉ huy đại phá quân Thanh?', opts: ['Nguyễn Huệ', 'Nguyễn Nhạc', 'Nguyễn Lữ', 'Trần Quang Diệu'], ans: 0, exp: 'Vua Quang Trung (Nguyễn Huệ) chỉ huy đại phá 29 vạn quân Thanh trong trận Ngọc Hồi – Đống Đa dịp Tết Kỷ Dậu 1789.' },
    { q: 'Trận Cầu Giấy lần thứ nhất (1873) khiến viên chỉ huy Pháp nào tử trận?', opts: ['Francis Garnier', 'Henri Rivière', 'Courbet', 'Bourée'], ans: 0, exp: 'Trong trận Cầu Giấy 1873, quân ta phối hợp với quân Cờ Đen giết chết Francis Garnier, chỉ huy quân Pháp.' },
    { q: 'Chiến dịch Biên giới năm 1950 giải phóng tuyến đường nào?', opts: ['Đường số 4', 'Đường số 9', 'Đường 14', 'Đường 1A'], ans: 0, exp: 'Chiến dịch Biên giới Thu Đông 1950 giải phóng tuyến Đường số 4, khai thông biên giới Việt – Trung.' },
    { q: 'Chiến dịch Hồ Chí Minh (1975) kết thúc bằng sự kiện nào?', opts: ['Giải phóng Sài Gòn', 'Giải phóng Huế', 'Giải phóng Đà Nẵng', 'Ký Hiệp định Paris'], ans: 0, exp: 'Chiến dịch Hồ Chí Minh kết thúc ngày 30/4/1975 với sự kiện xe tăng quân Giải phóng tiến vào Dinh Độc Lập, giải phóng Sài Gòn.' },
    { q: 'Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân diễn ra vào năm nào?', opts: ['1968', '1972', '1965', '1975'], ans: 0, exp: 'Tết Mậu Thân 1968, quân dân ta đồng loạt tiến công vào các đô thị miền Nam, gây chấn động dư luận Mỹ.' },
    { q: 'Trận Ấp Bắc (1963) là thất bại của chiến lược nào do Mỹ hậu thuẫn?', opts: ['Chiến tranh đặc biệt', 'Chiến tranh cục bộ', 'Việt Nam hóa chiến tranh', 'Chiến tranh đơn phương'], ans: 0, exp: 'Chiến thắng Ấp Bắc năm 1963 đánh dấu thất bại bước đầu của chiến lược "Chiến tranh đặc biệt" do Mỹ hậu thuẫn.' },
    { q: 'Hoàng Hoa Thám lãnh đạo cuộc khởi nghĩa nông dân nổi tiếng nào chống Pháp?', opts: ['Yên Thế', 'Bãi Sậy', 'Hương Khê', 'Ba Đình'], ans: 0, exp: 'Hoàng Hoa Thám lãnh đạo khởi nghĩa Yên Thế kéo dài gần 30 năm (1884–1913), là cuộc khởi nghĩa nông dân bền bỉ nhất chống Pháp.' },
    { q: 'Trận Chương Dương – Hàm Tử (1285) do ai chỉ huy giành lại kinh thành Thăng Long?', opts: ['Trần Quang Khải', 'Trần Nhật Duật', 'Trần Khánh Dư', 'Trần Bình Trọng'], ans: 0, exp: 'Trần Quang Khải chỉ huy trận Chương Dương, phối hợp với trận Hàm Tử, đánh bật quân Nguyên Mông khỏi Thăng Long năm 1285.' },
    { q: 'Trận Cầu Giấy lần thứ hai (1883) khiến chỉ huy Pháp Henri Rivière tử trận, do quân nào phối hợp thực hiện?', opts: ['Quân Cờ Đen', 'Quân Cờ Vàng', 'Nghĩa quân Cần Vương', 'Nghĩa quân Yên Thế'], ans: 0, exp: 'Quân Cờ Đen của Lưu Vĩnh Phúc phối hợp với quân triều đình phục kích, giết chết Henri Rivière tại Cầu Giấy năm 1883.' },
    { q: 'Chiến dịch Điện Biên Phủ trên không (1972) diễn ra chủ yếu trên bầu trời thành phố nào?', opts: ['Hà Nội', 'Hải Phòng', 'Huế', 'Vinh'], ans: 0, exp: 'Quân dân Hà Nội đánh bại cuộc tập kích chiến lược bằng máy bay B-52 của Mỹ trong 12 ngày đêm cuối năm 1972.' },
    { q: 'Chiến dịch nào giải phóng Huế và Đà Nẵng trong Tổng tiến công mùa Xuân 1975?', opts: ['Chiến dịch Huế – Đà Nẵng', 'Chiến dịch Tây Nguyên', 'Chiến dịch Hồ Chí Minh', 'Chiến dịch Đường 9'], ans: 0, exp: 'Sau chiến thắng Tây Nguyên, Chiến dịch Huế – Đà Nẵng (3/1975) giải phóng hai thành phố lớn miền Trung, mở đường tiến vào Sài Gòn.' },
  ],
  dynasty: [
    { q: 'Triều đại nào xây dựng Văn Miếu – Quốc Tử Giám đầu tiên?', opts: ['Trần', 'Lý', 'Lê Sơ', 'Nguyễn'], ans: 1, exp: 'Năm 1070, vua Lý Thánh Tông cho xây Văn Miếu thờ Khổng Tử; năm 1076 lập Quốc Tử Giám.' },
    { q: 'Nhà Nguyễn đóng đô ở đâu?', opts: ['Hà Nội', 'Huế', 'Đà Nẵng', 'Hội An'], ans: 1, exp: 'Gia Long thống nhất đất nước năm 1802, chọn Phú Xuân (Huế) làm kinh đô.' },
    { q: 'Đinh Bộ Lĩnh lập nước tên gì sau khi dẹp loạn 12 sứ quân?', opts: ['Đại Việt', 'Đại Cồ Việt', 'Văn Lang', 'Âu Lạc'], ans: 1, exp: 'Năm 968, Đinh Bộ Lĩnh lên ngôi Hoàng đế, đặt quốc hiệu là Đại Cồ Việt.' },
    { q: 'Nhà Trần ba lần đánh thắng quân xâm lược nào?', opts: ['Nguyên Mông', 'Tống', 'Minh', 'Thanh'], ans: 0, exp: 'Nhà Trần ba lần kháng chiến (1258, 1285, 1288) đánh bại quân xâm lược Nguyên Mông hùng mạnh.' },
    { q: 'Nhà Hồ đổi quốc hiệu Đại Việt thành tên gì?', opts: ['Đại Ngu', 'Đại Nam', 'Vạn Xuân', 'Đại Cồ Việt'], ans: 0, exp: 'Hồ Quý Ly lập nhà Hồ năm 1400, đổi quốc hiệu thành Đại Ngu.' },
    { q: 'Nhà Lê Sơ do ai sáng lập sau khi đánh đuổi quân Minh?', opts: ['Lê Lợi', 'Lê Thánh Tông', 'Lê Thái Tông', 'Lê Nhân Tông'], ans: 0, exp: 'Năm 1428, Lê Lợi lên ngôi Hoàng đế, lập ra nhà Lê Sơ sau chiến thắng khởi nghĩa Lam Sơn.' },
    { q: 'Nhà Mạc do Mạc Đăng Dung lập nên sau khi cướp ngôi triều đại nào?', opts: ['Lê Sơ', 'Trần', 'Lý', 'Nguyễn'], ans: 0, exp: 'Năm 1527, Mạc Đăng Dung phế truất vua Lê, lập ra nhà Mạc.' },
    { q: 'Nhà Tây Sơn gắn liền với ba anh em nào?', opts: ['Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ', 'Nguyễn Trãi, Nguyễn Chích, Nguyễn Xí', 'Trịnh Kiểm, Trịnh Tùng, Trịnh Tráng', 'Nguyễn Hoàng, Nguyễn Phúc Nguyên, Nguyễn Phúc Tần'], ans: 0, exp: 'Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ dựng cờ khởi nghĩa Tây Sơn năm 1771, lập nên vương triều Tây Sơn.' },
    { q: 'Triều đại phong kiến cuối cùng trong lịch sử Việt Nam là triều nào?', opts: ['Nguyễn', 'Lê', 'Trần', 'Mạc'], ans: 0, exp: 'Nhà Nguyễn (1802–1945) là triều đại phong kiến cuối cùng, kết thúc khi vua Bảo Đại thoái vị.' },
    { q: 'Ai là người sáng lập nhà Lý và dời đô về Thăng Long?', opts: ['Lý Công Uẩn', 'Lý Thái Tông', 'Lý Thánh Tông', 'Lý Nhân Tông'], ans: 0, exp: 'Lý Công Uẩn (Lý Thái Tổ) lập nhà Lý năm 1009 và dời đô từ Hoa Lư về Thăng Long năm 1010.' },
    { q: 'Chế độ Thái thượng hoàng nhường ngôi sớm cho con là nét đặc trưng của triều đại nào?', opts: ['Trần', 'Lý', 'Lê', 'Nguyễn'], ans: 0, exp: 'Nhà Trần có truyền thống vua nhường ngôi sớm, lên làm Thái thượng hoàng để rèn dạy vua kế vị và tránh tranh giành ngôi báu.' },
    { q: 'Nhà Ngô, triều đại đầu tiên sau thời Bắc thuộc, do ai sáng lập?', opts: ['Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lê Hoàn', 'Phùng Hưng'], ans: 0, exp: 'Sau chiến thắng Bạch Đằng 938, Ngô Quyền xưng vương, lập ra nhà Ngô, mở đầu thời kỳ độc lập tự chủ.' },
    { q: 'Nhà Trần thay thế trực tiếp triều đại nào trước đó?', opts: ['Nhà Lý', 'Nhà Đinh', 'Nhà Tiền Lê', 'Nhà Ngô'], ans: 0, exp: 'Năm 1225, Trần Cảnh lên ngôi thay thế nhà Lý, lập ra nhà Trần.' },
    { q: 'Ai là vị vua sáng lập triều Nguyễn, niên hiệu Gia Long?', opts: ['Nguyễn Ánh', 'Nguyễn Huệ', 'Nguyễn Phúc Chu', 'Nguyễn Hoàng'], ans: 0, exp: 'Nguyễn Ánh lên ngôi năm 1802, lấy niên hiệu Gia Long, thống nhất đất nước và lập ra triều Nguyễn.' },
    { q: 'Thời kỳ Lê Trung Hưng nối tiếp giai đoạn nào của nhà Hậu Lê?', opts: ['Lê Sơ', 'Lê Mạt', 'Lê Trung Cổ', 'Lê Thánh Tông'], ans: 0, exp: 'Sau khi nhà Mạc cướp ngôi, con cháu nhà Lê khôi phục vương quyền, mở ra thời kỳ Lê Trung Hưng nối tiếp Lê Sơ.' },
    { q: 'Ranh giới phân chia Đàng Trong – Đàng Ngoài thời Trịnh – Nguyễn phân tranh là con sông nào?', opts: ['Sông Gianh', 'Sông Bến Hải', 'Sông Mã', 'Sông Lam'], ans: 0, exp: 'Sông Gianh (Quảng Bình) là ranh giới chia cắt Đàng Trong (chúa Nguyễn) và Đàng Ngoài (chúa Trịnh) suốt hơn 200 năm.' },
    { q: 'Ai là người sáng lập nhà Hồ, sau khi phế truất vua Trần?', opts: ['Hồ Quý Ly', 'Hồ Hán Thương', 'Hồ Nguyên Trừng', 'Hồ Tông Thốc'], ans: 0, exp: 'Năm 1400, Hồ Quý Ly phế truất vua Trần, lập ra nhà Hồ, đổi quốc hiệu thành Đại Ngu.' },
    { q: 'Niên hiệu Quang Trung là của vị vua nào trong triều Tây Sơn?', opts: ['Nguyễn Huệ', 'Nguyễn Nhạc', 'Nguyễn Lữ', 'Nguyễn Quang Toản'], ans: 0, exp: 'Nguyễn Huệ lên ngôi Hoàng đế năm 1788, lấy niên hiệu Quang Trung, nổi tiếng với chiến thắng Ngọc Hồi – Đống Đa.' },
    { q: 'Nhà Đinh do Đinh Bộ Lĩnh sáng lập, đóng đô ở đâu?', opts: ['Hoa Lư', 'Thăng Long', 'Cổ Loa', 'Phú Xuân'], ans: 0, exp: 'Đinh Bộ Lĩnh đóng đô ở Hoa Lư (Ninh Bình), địa thế hiểm trở thuận lợi phòng thủ.' },
    { q: 'Nhà Tiền Lê do ai sáng lập sau khi lên thay nhà Đinh?', opts: ['Lê Hoàn', 'Lê Lợi', 'Lê Long Đĩnh', 'Lê Thái Tổ'], ans: 0, exp: 'Lê Hoàn lên ngôi năm 980, lập ra nhà Tiền Lê, sau đó đánh bại quân Tống xâm lược năm 981.' },
    { q: 'Nhà Lý tồn tại qua bao nhiêu đời vua, kéo dài hơn 200 năm?', opts: ['9 đời vua', '7 đời vua', '11 đời vua', '5 đời vua'], ans: 0, exp: 'Nhà Lý (1009–1225) trải qua 9 đời vua, là một trong những triều đại thịnh trị và ổn định lâu dài của Đại Việt.' },
    { q: 'Vua nào của nhà Lê Sơ ban hành bộ luật Hồng Đức nổi tiếng?', opts: ['Lê Thánh Tông', 'Lê Thái Tổ', 'Lê Nhân Tông', 'Lê Hiến Tông'], ans: 0, exp: 'Vua Lê Thánh Tông ban hành bộ luật Hồng Đức, một trong những bộ luật tiến bộ bậc nhất thời phong kiến Việt Nam.' },
    { q: 'Nhà Nguyễn trải qua bao nhiêu đời vua trước khi Bảo Đại thoái vị năm 1945?', opts: ['13 đời vua', '10 đời vua', '15 đời vua', '8 đời vua'], ans: 0, exp: 'Nhà Nguyễn (1802–1945) có tổng cộng 13 đời vua, từ Gia Long đến Bảo Đại.' },
    { q: 'Giai đoạn Nam – Bắc triều là cuộc đối đầu giữa nhà Mạc và thế lực nào?', opts: ['Lê Trung Hưng (phù Lê)', 'Chúa Trịnh', 'Chúa Nguyễn', 'Nhà Tây Sơn'], ans: 0, exp: 'Nam – Bắc triều (thế kỷ 16) là cuộc đối đầu giữa nhà Mạc (Bắc triều) và lực lượng phù Lê Trung Hưng (Nam triều).' },
  ],
  person: [
    { q: 'Ai là tác giả của "Bình Ngô đại cáo"?', opts: ['Lê Lợi', 'Trần Hưng Đạo', 'Nguyễn Trãi', 'Ngô Thì Nhậm'], ans: 2, exp: 'Nguyễn Trãi viết Bình Ngô đại cáo theo lệnh Lê Lợi năm 1428, tuyên bố nền độc lập sau 20 năm chống Minh.' },
    { q: 'Trần Nhân Tông sau khi nhường ngôi đã trở thành ai?', opts: ['Trạng nguyên', 'Thiền sư', 'Đại tướng', 'Sứ thần'], ans: 1, exp: 'Trần Nhân Tông xuất gia, sáng lập Thiền phái Trúc Lâm Yên Tử — dòng thiền mang bản sắc Việt Nam.' },
    { q: 'Võ Thị Sáu quê ở tỉnh nào?', opts: ['Bà Rịa – Vũng Tàu', 'Bình Dương', 'Đồng Nai', 'Long An'], ans: 0, exp: 'Võ Thị Sáu sinh tại Đất Đỏ, Bà Rịa – Vũng Tàu, anh hùng liệt sĩ trẻ nhất Việt Nam.' },
    { q: 'Hai Bà Trưng có tên thật là gì?', opts: ['Trưng Trắc và Trưng Nhị', 'Triệu Thị Trinh và Triệu Quốc Đạt', 'Bùi Thị Xuân và Bùi Thị Nhạn', 'Nguyễn Thị Định và Nguyễn Thị Minh Khai'], ans: 0, exp: 'Hai Bà Trưng tên thật là Trưng Trắc và Trưng Nhị, lãnh đạo cuộc khởi nghĩa chống nhà Hán năm 40.' },
    { q: 'Lý Thường Kiệt gắn liền với bài thơ thần nổi tiếng nào?', opts: ['Nam quốc sơn hà', 'Hịch tướng sĩ', 'Bình Ngô đại cáo', 'Cáo tật thị chúng'], ans: 0, exp: 'Lý Thường Kiệt được cho là tác giả bài thơ "Nam quốc sơn hà", được xem là bản tuyên ngôn độc lập đầu tiên của Việt Nam.' },
    { q: 'Trần Hưng Đạo viết tác phẩm nào để khích lệ tinh thần tướng sĩ trước quân Nguyên Mông?', opts: ['Hịch tướng sĩ', 'Binh thư yếu lược', 'Vạn Kiếp tông bí truyền thư', 'Nam quốc sơn hà'], ans: 0, exp: 'Trần Hưng Đạo viết "Hịch tướng sĩ" để khích lệ tinh thần chiến đấu của quân sĩ trước cuộc xâm lược của quân Nguyên Mông.' },
    { q: 'Chủ tịch Hồ Chí Minh sinh ra tại tỉnh nào?', opts: ['Nghệ An', 'Hà Tĩnh', 'Thanh Hóa', 'Quảng Bình'], ans: 0, exp: 'Hồ Chí Minh sinh năm 1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.' },
    { q: 'Ai là người lãnh đạo phong trào Đông Du đầu thế kỷ XX?', opts: ['Phan Bội Châu', 'Phan Châu Trinh', 'Huỳnh Thúc Kháng', 'Lương Văn Can'], ans: 0, exp: 'Phan Bội Châu khởi xướng phong trào Đông Du (1905–1908), đưa thanh niên Việt Nam sang Nhật Bản du học.' },
    { q: 'Nguyễn Du là tác giả của kiệt tác văn học nào?', opts: ['Truyện Kiều', 'Chinh phụ ngâm', 'Lục Vân Tiên', 'Cung oán ngâm khúc'], ans: 0, exp: 'Nguyễn Du sáng tác "Truyện Kiều" bằng chữ Nôm, được xem là kiệt tác của văn học Việt Nam.' },
    { q: 'Phan Châu Trinh chủ trương con đường cứu nước theo hướng nào?', opts: ['Cải cách, duy tân đất nước', 'Bạo động vũ trang', 'Cầu viện nước ngoài', 'Đấu tranh nghị trường'], ans: 0, exp: 'Phan Châu Trinh chủ trương cải cách, "khai dân trí, chấn dân khí, hậu dân sinh" thay vì bạo động vũ trang.' },
    { q: 'Ai đã ra đi tìm đường cứu nước tại bến cảng Nhà Rồng năm 1911?', opts: ['Nguyễn Tất Thành', 'Phan Bội Châu', 'Phan Châu Trinh', 'Nguyễn An Ninh'], ans: 0, exp: 'Ngày 5/6/1911, Nguyễn Tất Thành (Hồ Chí Minh) rời bến cảng Nhà Rồng, bắt đầu hành trình tìm đường cứu nước.' },
    { q: 'Đại tướng Võ Nguyên Giáp là tổng chỉ huy chiến dịch lịch sử nào năm 1954?', opts: ['Điện Biên Phủ', 'Biên giới', 'Hòa Bình', 'Tây Bắc'], ans: 0, exp: 'Đại tướng Võ Nguyên Giáp là Tổng Tư lệnh chỉ huy Chiến dịch Điện Biên Phủ, làm nên chiến thắng "lừng lẫy năm châu, chấn động địa cầu".' },
    { q: 'Kim Đồng là ai trong lịch sử cách mạng Việt Nam?', opts: ['Đội trưởng đội thiếu niên tiền phong đầu tiên', 'Vị tướng trẻ tuổi nhất', 'Nhà thơ cách mạng', 'Chiến sĩ tình báo'], ans: 0, exp: 'Kim Đồng (Nông Văn Dền) là đội trưởng đầu tiên của Đội Thiếu niên Tiền phong, hy sinh khi làm nhiệm vụ liên lạc, bảo vệ cán bộ.' },
    { q: 'Nguyễn Thị Minh Khai là ai trong phong trào cách mạng Việt Nam?', opts: ['Nhà cách mạng, một trong những lãnh đạo nữ tiêu biểu', 'Nữ tướng thời Hai Bà Trưng', 'Nhà văn hóa thời Nguyễn', 'Nữ sĩ thời Lê'], ans: 0, exp: 'Nguyễn Thị Minh Khai là nhà cách mạng tiền bối, một trong những nữ lãnh đạo tiêu biểu của Đảng Cộng sản Đông Dương.' },
    { q: 'Ngô Quyền được tôn vinh là "vị tổ trung hưng" nhờ chiến thắng nào?', opts: ['Bạch Đằng năm 938', 'Bạch Đằng năm 981', 'Bạch Đằng năm 1288', 'Chi Lăng năm 1427'], ans: 0, exp: 'Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng năm 938, chấm dứt hơn 1000 năm Bắc thuộc.' },
    { q: 'Nguyễn Bỉnh Khiêm được người đời gọi bằng biệt danh nào?', opts: ['Trạng Trình', 'Trạng Bùng', 'Trạng Ăn', 'Trạng Lường'], ans: 0, exp: 'Nguyễn Bỉnh Khiêm được gọi là "Trạng Trình", nổi tiếng với các câu sấm ký tiên tri.' },
    { q: 'Chu Văn An được hậu thế tôn vinh vì vai trò gì?', opts: ['Người thầy giáo mẫu mực', 'Vị tướng bách chiến bách thắng', 'Nhà cải cách kinh tế', 'Danh y nổi tiếng'], ans: 0, exp: 'Chu Văn An là nhà giáo nổi tiếng thời Trần, được tôn là "Vạn thế sư biểu" — người thầy chuẩn mực muôn đời.' },
    { q: '"Hưng Đạo Vương" là tước hiệu của nhân vật lịch sử nào?', opts: ['Trần Quốc Tuấn', 'Trần Quang Khải', 'Trần Nhật Duật', 'Trần Khánh Dư'], ans: 0, exp: 'Trần Quốc Tuấn được phong tước Hưng Đạo Vương, là vị tướng ba lần đánh bại quân Nguyên Mông.' },
    { q: 'Ai là vị nữ tướng chỉ huy voi trận trong khởi nghĩa Tây Sơn?', opts: ['Bùi Thị Xuân', 'Nguyễn Thị Định', 'Võ Thị Sáu', 'Nguyễn Thị Minh Khai'], ans: 0, exp: 'Bùi Thị Xuân là nữ tướng tài ba của nhà Tây Sơn, nổi tiếng với đội tượng binh thiện chiến.' },
    { q: 'Nguyễn Ái Quốc là một trong những tên gọi của nhân vật lịch sử nào?', opts: ['Hồ Chí Minh', 'Phan Bội Châu', 'Trần Phú', 'Lê Hồng Phong'], ans: 0, exp: 'Nguyễn Ái Quốc là tên gọi Chủ tịch Hồ Chí Minh sử dụng trong thời gian hoạt động cách mạng ở nước ngoài.' },
    { q: 'Trần Quốc Toản nổi tiếng với hành động nào thể hiện lòng yêu nước tuổi trẻ?', opts: ['Bóp nát quả cam', 'Viết Hịch tướng sĩ', 'Chỉ huy trận Bạch Đằng', 'Lập Thiền phái Trúc Lâm'], ans: 0, exp: 'Vì còn nhỏ tuổi không được dự bàn việc nước, Trần Quốc Toản đã bóp nát quả cam trong tay lúc nào không hay.' },
    { q: 'Đại tướng nào là Tổng Tư lệnh Quân đội Nhân dân Việt Nam lâu năm nhất, được thế giới vinh danh?', opts: ['Võ Nguyên Giáp', 'Nguyễn Chí Thanh', 'Văn Tiến Dũng', 'Chu Huy Mân'], ans: 0, exp: 'Đại tướng Võ Nguyên Giáp giữ vai trò Tổng Tư lệnh quân đội trong suốt hai cuộc kháng chiến chống Pháp và chống Mỹ.' },
    { q: 'Ai là Tổng Bí thư đầu tiên của Đảng Cộng sản Việt Nam?', opts: ['Trần Phú', 'Lê Hồng Phong', 'Hà Huy Tập', 'Nguyễn Văn Cừ'], ans: 0, exp: 'Trần Phú được bầu làm Tổng Bí thư đầu tiên của Đảng năm 1930, soạn thảo Luận cương chính trị.' },
    { q: 'Nữ tướng nào lãnh đạo phong trào Đồng Khởi Bến Tre năm 1960?', opts: ['Nguyễn Thị Định', 'Nguyễn Thị Minh Khai', 'Võ Thị Sáu', 'Bùi Thị Xuân'], ans: 0, exp: 'Nguyễn Thị Định là nữ tướng đầu tiên của Quân đội Nhân dân Việt Nam, lãnh đạo phong trào Đồng Khởi Bến Tre năm 1960.' },
    { q: 'Theo truyền thuyết, Hùng Vương là người sáng lập ra nhà nước nào của người Việt cổ?', opts: ['Văn Lang', 'Âu Lạc', 'Nam Việt', 'Đại Cồ Việt'], ans: 0, exp: 'Các Vua Hùng lập ra nhà nước Văn Lang, nhà nước đầu tiên trong lịch sử Việt Nam, đóng đô ở Phong Châu.' },
    { q: 'Truyền thuyết nào gắn liền với nguồn gốc "con Rồng cháu Tiên" của dân tộc Việt, liên quan đến các Vua Hùng?', opts: ['Lạc Long Quân – Âu Cơ', 'Sơn Tinh – Thủy Tinh', 'Thánh Gióng', 'Bánh chưng bánh giầy'], ans: 0, exp: 'Truyền thuyết Lạc Long Quân – Âu Cơ kể về nguồn gốc trăm trứng, trăm con, là cội nguồn "con Rồng cháu Tiên" dẫn đến các đời Vua Hùng.' },
    { q: 'Ngày Giỗ Tổ Hùng Vương được tổ chức vào ngày nào âm lịch hằng năm?', opts: ['Mùng 10 tháng 3', 'Mùng 3 tháng 3', 'Rằm tháng Giêng', 'Mùng 5 tháng 5'], ans: 0, exp: 'Giỗ Tổ Hùng Vương diễn ra vào ngày 10/3 âm lịch hằng năm, tưởng nhớ công lao dựng nước của các Vua Hùng.' },
    { q: 'Triệu Đà là người sáp nhập Âu Lạc vào lãnh thổ nào, mở đầu hơn 1000 năm Bắc thuộc?', opts: ['Nam Việt', 'Nam Hán', 'Đông Ngô', 'Đại Lý'], ans: 0, exp: 'Sau khi đánh bại An Dương Vương, Triệu Đà sáp nhập Âu Lạc vào Nam Việt, mở đầu thời kỳ hơn 1000 năm Bắc thuộc.' },
    { q: 'Triệu Đà dùng mưu kế gì để đánh bại Âu Lạc của An Dương Vương?', opts: ['Cho con trai cầu hôn để đánh cắp nỏ thần', 'Đem quân tấn công bất ngờ ban đêm', 'Mua chuộc các tướng lĩnh', 'Giả vờ cầu hòa rồi phục kích'], ans: 0, exp: 'Triệu Đà cho con trai là Trọng Thủy sang cầu hôn Mỵ Châu, lợi dụng đó đánh cắp bí mật nỏ thần rồi đem quân xâm lược.' },
    { q: 'Sau khi thôn tính Âu Lạc, Triệu Đà xưng là gì?', opts: ['Triệu Vũ Đế', 'Nam Việt Vương', 'An Nam Đô hộ', 'Giao Chỉ Vương'], ans: 0, exp: 'Triệu Đà tự xưng là Triệu Vũ Đế, cai trị vùng đất Nam Việt bao gồm cả Âu Lạc vừa thôn tính.' },
    { q: 'Lý Bí (Lý Nam Đế) lập ra nhà nước nào sau khi đánh đuổi quân nhà Lương?', opts: ['Vạn Xuân', 'Đại Cồ Việt', 'Âu Lạc', 'Đại Việt'], ans: 0, exp: 'Năm 544, Lý Bí lên ngôi, xưng là Lý Nam Đế, đặt tên nước là Vạn Xuân, mong đất nước trường tồn muôn đời.' },
    { q: 'Lý Bí xây dựng kinh đô của nhà nước Vạn Xuân ở đâu?', opts: ['Vùng cửa sông Tô Lịch (Hà Nội ngày nay)', 'Hoa Lư', 'Cổ Loa', 'Phong Châu'], ans: 0, exp: 'Lý Bí cho xây dựng kinh đô ở vùng cửa sông Tô Lịch, khu vực Hà Nội ngày nay, làm trung tâm của nhà nước Vạn Xuân.' },
    { q: 'Ai là tướng lĩnh nối tiếp sự nghiệp kháng chiến sau khi Lý Bí qua đời, đánh đuổi được quân Lương?', opts: ['Triệu Quang Phục', 'Lý Phật Tử', 'Phùng Hưng', 'Mai Thúc Loan'], ans: 0, exp: 'Triệu Quang Phục tiếp tục lãnh đạo kháng chiến sau khi Lý Bí mất, dùng chiến thuật đầm Dạ Trạch đánh bại quân Lương, khôi phục Vạn Xuân.' },
    { q: 'Nguyễn Văn Trỗi nổi tiếng với hành động nào trước khi bị xử bắn năm 1964?', opts: ['Mưu sát Bộ trưởng Quốc phòng Mỹ McNamara', 'Ám sát viên chức chính quyền Sài Gòn', 'Đánh bom cầu Công Lý', 'Giải cứu tù chính trị'], ans: 0, exp: 'Nguyễn Văn Trỗi tham gia kế hoạch đặt mìn ám sát Bộ trưởng Quốc phòng Mỹ McNamara khi ông này sang thăm Sài Gòn năm 1964, kế hoạch bị bại lộ.' },
    { q: 'Trước khi hy sinh, câu nói nào của Nguyễn Văn Trỗi được lưu truyền như một biểu tượng khí phách?', opts: ['"Còn giặc Mỹ thì không có hạnh phúc"', '"Không có gì quý hơn độc lập tự do"', '"Nước Việt Nam là một"', '"Thà hy sinh tất cả chứ không chịu mất nước"'], ans: 0, exp: 'Trước lúc bị xử bắn, Nguyễn Văn Trỗi hô vang lời khẳng định ý chí đấu tranh, trở thành biểu tượng bất khuất của tuổi trẻ miền Nam.' },
    { q: 'Nguyễn Văn Trỗi làm nghề gì trước khi tham gia hoạt động cách mạng nội thành Sài Gòn?', opts: ['Thợ điện', 'Giáo viên', 'Công nhân in ấn', 'Thợ may'], ans: 0, exp: 'Nguyễn Văn Trỗi là thợ điện ở Sài Gòn, tham gia tổ chức biệt động thành trước khi thực hiện kế hoạch đánh mìn.' },
    { q: 'An Dương Vương là người sáng lập nhà nước nào, kế tục thời đại Hùng Vương?', opts: ['Âu Lạc', 'Văn Lang', 'Nam Việt', 'Vạn Xuân'], ans: 0, exp: 'An Dương Vương (Thục Phán) hợp nhất bộ tộc Âu Việt và Lạc Việt, lập ra nước Âu Lạc, kế tục thời đại Hùng Vương.' },
    { q: 'An Dương Vương xây thành gì làm kinh đô, nổi tiếng với kiến trúc hình xoáy ốc?', opts: ['Thành Cổ Loa', 'Thành Hoa Lư', 'Thành Thăng Long', 'Thành Tây Đô'], ans: 0, exp: 'An Dương Vương cho xây thành Cổ Loa (nay thuộc Đông Anh, Hà Nội), có cấu trúc hình xoáy ốc độc đáo làm kinh đô Âu Lạc.' },
    { q: 'Mỵ Châu là con gái của vị vua nào trong truyền thuyết Âu Lạc?', opts: ['An Dương Vương', 'Hùng Vương', 'Triệu Đà', 'Lý Nam Đế'], ans: 0, exp: 'Mỵ Châu là con gái An Dương Vương, được gả cho Trọng Thủy — con trai Triệu Đà, dẫn đến bi kịch mất nước Âu Lạc.' },
    { q: 'Trong truyền thuyết, Mỵ Châu vô tình để lộ bí mật gì cho Trọng Thủy, dẫn đến mất nước?', opts: ['Bí mật nỏ thần', 'Vị trí kho lương', 'Sơ đồ thành Cổ Loa', 'Lịch xuất quân'], ans: 0, exp: 'Vì tin chồng, Mỵ Châu để Trọng Thủy xem trộm nỏ thần rồi tráo đổi, khiến Âu Lạc mất đi vũ khí phòng thủ và bị Triệu Đà thôn tính.' },
  ],
  year: [
    { q: 'Năm nào Lý Thái Tổ dời đô từ Hoa Lư về Thăng Long?', opts: ['968', '1010', '1075', '1054'], ans: 1, exp: 'Năm 1010, vua Lý Thái Tổ viết Chiếu dời đô, chuyển kinh đô từ Hoa Lư về Đại La (đổi tên Thăng Long).' },
    { q: 'Hiệp định Paris về Việt Nam được ký vào năm nào?', opts: ['1968', '1972', '1973', '1975'], ans: 2, exp: 'Ngày 27/1/1973, Hiệp định Paris ký kết, Mỹ rút quân khỏi Việt Nam.' },
    { q: 'Năm nào Pháp nổ súng tấn công Đà Nẵng mở đầu xâm lược Việt Nam?', opts: ['1858', '1862', '1867', '1873'], ans: 0, exp: 'Ngày 1/9/1858, liên quân Pháp – Tây Ban Nha nổ súng vào Đà Nẵng, mở đầu cuộc xâm lược.' },
    { q: 'Năm nào Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng?', opts: ['938', '981', '1288', '968'], ans: 0, exp: 'Năm 938, Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng, chấm dứt hơn 1000 năm Bắc thuộc.' },
    { q: 'Năm nào diễn ra trận Bạch Đằng đánh bại quân Nguyên Mông lần thứ 3?', opts: ['1288', '1258', '1285', '1279'], ans: 0, exp: 'Năm 1288, Trần Hưng Đạo chỉ huy trận Bạch Đằng, đánh bại đạo quân Nguyên Mông xâm lược lần thứ ba.' },
    { q: 'Lê Lợi lên ngôi Hoàng đế, lập nhà Lê Sơ vào năm nào?', opts: ['1428', '1418', '1427', '1400'], ans: 0, exp: 'Sau khi đánh đuổi quân Minh, Lê Lợi lên ngôi Hoàng đế năm 1428, mở đầu triều Lê Sơ.' },
    { q: 'Chiến thắng Ngọc Hồi – Đống Đa diễn ra vào năm nào?', opts: ['1789', '1785', '1792', '1802'], ans: 0, exp: 'Mùa xuân Kỷ Dậu 1789, vua Quang Trung đại phá 29 vạn quân Thanh trong trận Ngọc Hồi – Đống Đa.' },
    { q: 'Nguyễn Ánh lên ngôi, lập ra triều Nguyễn vào năm nào?', opts: ['1802', '1792', '1789', '1806'], ans: 0, exp: 'Năm 1802, Nguyễn Ánh lên ngôi lấy niên hiệu Gia Long, thống nhất đất nước và lập triều Nguyễn.' },
    { q: 'Đảng Cộng sản Việt Nam được thành lập vào năm nào?', opts: ['1930', '1925', '1941', '1945'], ans: 0, exp: 'Ngày 3/2/1930, Đảng Cộng sản Việt Nam được thành lập tại Hương Cảng dưới sự chủ trì của Nguyễn Ái Quốc.' },
    { q: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập vào năm nào?', opts: ['1945', '1946', '1954', '1944'], ans: 0, exp: 'Ngày 2/9/1945, tại Quảng trường Ba Đình, Hồ Chí Minh đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.' },
    { q: 'Chiến thắng Điện Biên Phủ diễn ra vào năm nào?', opts: ['1954', '1953', '1955', '1950'], ans: 0, exp: 'Chiến dịch Điện Biên Phủ kết thúc thắng lợi ngày 7/5/1954, buộc Pháp phải ký Hiệp định Genève.' },
    { q: 'Miền Nam Việt Nam hoàn toàn giải phóng, thống nhất đất nước vào năm nào?', opts: ['1975', '1973', '1976', '1974'], ans: 0, exp: 'Ngày 30/4/1975, Chiến dịch Hồ Chí Minh toàn thắng, giải phóng hoàn toàn miền Nam, thống nhất đất nước.' },
    { q: 'Khoa thi Nho học đầu tiên của Việt Nam được tổ chức vào năm nào?', opts: ['1075', '1010', '1076', '1070'], ans: 0, exp: 'Năm 1075, nhà Lý mở khoa thi Nho học đầu tiên để tuyển chọn nhân tài cho đất nước.' },
    { q: 'Đinh Bộ Lĩnh lên ngôi Hoàng đế, lập nước Đại Cồ Việt vào năm nào?', opts: ['968', '938', '980', '1009'], ans: 0, exp: 'Năm 968, sau khi dẹp loạn 12 sứ quân, Đinh Bộ Lĩnh lên ngôi Hoàng đế, đặt quốc hiệu Đại Cồ Việt.' },
    { q: 'Quân Minh sang xâm lược, chấm dứt nhà Hồ vào năm nào?', opts: ['1407', '1400', '1418', '1428'], ans: 0, exp: 'Năm 1407, nhà Minh đánh bại nhà Hồ, bắt cha con Hồ Quý Ly, bắt đầu 20 năm đô hộ nước ta.' },
    { q: 'Khởi nghĩa Lam Sơn do Lê Lợi phát động bắt đầu vào năm nào?', opts: ['1418', '1407', '1428', '1400'], ans: 0, exp: 'Năm 1418, Lê Lợi dựng cờ khởi nghĩa tại Lam Sơn (Thanh Hóa), mở đầu cuộc kháng chiến chống quân Minh kéo dài 10 năm.' },
    { q: 'Nguyễn Huệ đem quân ra Bắc lần đầu tiêu diệt họ Trịnh vào năm nào?', opts: ['1786', '1789', '1788', '1792'], ans: 0, exp: 'Năm 1786, Nguyễn Huệ đem quân ra Bắc với danh nghĩa "phù Lê diệt Trịnh", tiêu diệt chính quyền chúa Trịnh.' },
    { q: 'Ngày Toàn quốc kháng chiến chống Pháp bùng nổ vào năm nào?', opts: ['1946', '1945', '1947', '1954'], ans: 0, exp: 'Đêm 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến, mở đầu cuộc kháng chiến chống thực dân Pháp.' },
    { q: 'Mỹ bắt đầu đổ quân viễn chinh trực tiếp vào miền Nam Việt Nam năm nào?', opts: ['1965', '1960', '1968', '1954'], ans: 0, exp: 'Năm 1965, Mỹ đổ quân viễn chinh trực tiếp vào miền Nam, mở đầu chiến lược "Chiến tranh cục bộ".' },
    { q: 'Đại hội Đảng khởi xướng công cuộc Đổi Mới diễn ra vào năm nào?', opts: ['1986', '1975', '1991', '1996'], ans: 0, exp: 'Đại hội Đảng toàn quốc lần thứ VI năm 1986 khởi xướng công cuộc Đổi Mới, chuyển đổi sang nền kinh tế thị trường định hướng xã hội chủ nghĩa.' },
    { q: 'Năm nào Trần Quang Khải giành lại kinh thành Thăng Long trong trận Chương Dương?', opts: ['1285', '1258', '1288', '1279'], ans: 0, exp: 'Năm 1285, trận Chương Dương – Hàm Tử giúp quân Trần giành lại kinh thành Thăng Long từ tay quân Nguyên Mông.' },
    { q: 'Năm nào diễn ra Hội nghị Diên Hồng, hội nghị các bô lão trước cuộc kháng chiến chống Nguyên Mông lần 2?', opts: ['1284', '1258', '1285', '1288'], ans: 0, exp: 'Năm 1284, vua Trần triệu tập Hội nghị Diên Hồng hỏi ý kiến các bô lão nên hòa hay đánh trước nguy cơ Nguyên Mông xâm lược.' },
    { q: 'Năm nào Việt Nam tổ chức Đại lễ kỷ niệm 1000 năm Thăng Long – Hà Nội?', opts: ['2010', '2000', '2005', '2015'], ans: 0, exp: 'Năm 2010, Việt Nam tổ chức Đại lễ kỷ niệm 1000 năm Thăng Long – Hà Nội, tròn một thiên niên kỷ kể từ khi Lý Thái Tổ dời đô.' },
    { q: 'Năm nào Việt Nam ký Hiệp định Thương mại song phương với Mỹ (BTA)?', opts: ['2001', '1995', '2007', '2006'], ans: 0, exp: 'Năm 2001, Việt Nam và Mỹ ký Hiệp định Thương mại song phương, mở đường cho quan hệ kinh tế hai nước phát triển mạnh.' },
  ],
  place: [
    { q: 'Kinh đô của nước Văn Lang (thời Hùng Vương) ở đâu?', opts: ['Hoa Lư', 'Phong Châu', 'Cổ Loa', 'Thăng Long'], ans: 1, exp: 'Phong Châu (nay thuộc Phú Thọ) là kinh đô của nước Văn Lang thời các Vua Hùng.' },
    { q: 'Đại bản doanh khởi nghĩa Lam Sơn của Lê Lợi ở tỉnh nào?', opts: ['Nghệ An', 'Thanh Hóa', 'Ninh Bình', 'Hà Tĩnh'], ans: 1, exp: 'Lam Sơn thuộc huyện Thọ Xuân, tỉnh Thanh Hóa — nơi Lê Lợi phát động khởi nghĩa năm 1418.' },
    { q: 'Trận Bạch Đằng 1288 diễn ra trên con sông chảy qua tỉnh nào hiện nay?', opts: ['Hải Phòng & Quảng Ninh', 'Thái Bình & Nam Định', 'Hà Nam & Hưng Yên', 'Bắc Giang & Lạng Sơn'], ans: 0, exp: 'Sông Bạch Đằng chảy qua Hải Phòng và Quảng Ninh, là nơi diễn ra 3 trận thủy chiến lịch sử.' },
    { q: 'Cổ Loa, kinh đô của nhà nước Âu Lạc, nay thuộc thành phố nào?', opts: ['Hà Nội', 'Hải Phòng', 'Ninh Bình', 'Vĩnh Phúc'], ans: 0, exp: 'Thành Cổ Loa (huyện Đông Anh, Hà Nội) là kinh đô của nhà nước Âu Lạc thời An Dương Vương.' },
    { q: 'Hoa Lư, kinh đô của nhà Đinh và Tiền Lê, nay thuộc tỉnh nào?', opts: ['Ninh Bình', 'Thanh Hóa', 'Nam Định', 'Hà Nam'], ans: 0, exp: 'Hoa Lư (Ninh Bình) là kinh đô của Đại Cồ Việt dưới hai triều Đinh và Tiền Lê.' },
    { q: 'Thăng Long, kinh đô của các triều Lý, Trần, Lê, nay là thành phố nào?', opts: ['Hà Nội', 'Huế', 'Hải Phòng', 'Nam Định'], ans: 0, exp: 'Thăng Long (nay là Hà Nội) là kinh đô của Đại Việt suốt các triều Lý, Trần và phần lớn triều Lê.' },
    { q: 'Kinh đô của triều Nguyễn, nơi có Đại Nội và lăng tẩm các vua, ở đâu?', opts: ['Huế', 'Đà Nẵng', 'Hội An', 'Quảng Trị'], ans: 0, exp: 'Huế (Phú Xuân) là kinh đô triều Nguyễn từ 1802–1945, nơi lưu giữ Đại Nội và hệ thống lăng tẩm các vua Nguyễn.' },
    { q: 'Chiến dịch Điện Biên Phủ diễn ra tại tỉnh nào ngày nay?', opts: ['Điện Biên', 'Lai Châu', 'Sơn La', 'Lào Cai'], ans: 0, exp: 'Điện Biên Phủ, nay thuộc tỉnh Điện Biên, là nơi diễn ra chiến dịch quyết định năm 1954.' },
    { q: 'Địa đạo Củ Chi, biểu tượng của chiến tranh du kích, thuộc thành phố nào?', opts: ['TP. Hồ Chí Minh', 'Cần Thơ', 'Biên Hòa', 'Vũng Tàu'], ans: 0, exp: 'Địa đạo Củ Chi thuộc huyện Củ Chi, TP. Hồ Chí Minh, là hệ thống địa đạo nổi tiếng trong kháng chiến chống Mỹ.' },
    { q: 'Bến cảng Nhà Rồng, nơi Bác Hồ ra đi tìm đường cứu nước, nằm ở đâu?', opts: ['Sài Gòn (TP. Hồ Chí Minh)', 'Hải Phòng', 'Đà Nẵng', 'Vũng Tàu'], ans: 0, exp: 'Bến cảng Nhà Rồng nằm bên sông Sài Gòn, là nơi Nguyễn Tất Thành lên tàu ra đi tìm đường cứu nước năm 1911.' },
    { q: 'Pác Bó, nơi Bác Hồ về nước trực tiếp lãnh đạo cách mạng năm 1941, thuộc tỉnh nào?', opts: ['Cao Bằng', 'Lạng Sơn', 'Hà Giang', 'Bắc Kạn'], ans: 0, exp: 'Pác Bó thuộc huyện Hà Quảng, tỉnh Cao Bằng, là nơi Bác Hồ về nước năm 1941 sau 30 năm bôn ba nước ngoài.' },
    { q: 'Tân Trào, "thủ đô kháng chiến" nơi diễn ra Quốc dân Đại hội 1945, thuộc tỉnh nào?', opts: ['Tuyên Quang', 'Thái Nguyên', 'Bắc Kạn', 'Cao Bằng'], ans: 0, exp: 'Tân Trào (Tuyên Quang) là nơi diễn ra Quốc dân Đại hội tháng 8/1945, quyết định Tổng khởi nghĩa giành chính quyền.' },
    { q: 'Ngã ba Đồng Lộc, nơi 10 nữ thanh niên xung phong hy sinh, thuộc tỉnh nào?', opts: ['Hà Tĩnh', 'Nghệ An', 'Quảng Bình', 'Thanh Hóa'], ans: 0, exp: 'Ngã ba Đồng Lộc thuộc huyện Can Lộc, Hà Tĩnh, là nơi 10 nữ thanh niên xung phong hy sinh anh dũng năm 1968.' },
    { q: 'Đền Hùng, nơi thờ các Vua Hùng, tọa lạc tại tỉnh nào?', opts: ['Phú Thọ', 'Vĩnh Phúc', 'Yên Bái', 'Hòa Bình'], ans: 0, exp: 'Khu di tích Đền Hùng nằm trên núi Nghĩa Lĩnh, tỉnh Phú Thọ, là nơi thờ tự các Vua Hùng.' },
    { q: 'Yên Tử, nơi Trần Nhân Tông sáng lập Thiền phái Trúc Lâm, thuộc tỉnh nào?', opts: ['Quảng Ninh', 'Hải Dương', 'Bắc Giang', 'Hải Phòng'], ans: 0, exp: 'Núi Yên Tử thuộc tỉnh Quảng Ninh, là nơi Trần Nhân Tông tu hành và sáng lập Thiền phái Trúc Lâm Yên Tử.' },
    { q: 'Lam Kinh, khu di tích lăng tẩm các vua nhà Lê Sơ, thuộc tỉnh nào?', opts: ['Thanh Hóa', 'Nghệ An', 'Ninh Bình', 'Hà Tĩnh'], ans: 0, exp: 'Lam Kinh (huyện Thọ Xuân, Thanh Hóa) là nơi an táng Lê Lợi và nhiều vua, hoàng hậu triều Lê Sơ.' },
    { q: 'Phố cổ Hội An, di sản văn hóa thế giới, thuộc tỉnh thành nào?', opts: ['Quảng Nam', 'Đà Nẵng', 'Thừa Thiên Huế', 'Quảng Ngãi'], ans: 0, exp: 'Phố cổ Hội An thuộc tỉnh Quảng Nam, từng là thương cảng sầm uất bậc nhất Đông Nam Á thế kỷ XVI–XVIII.' },
    { q: 'Phong trào Xô Viết Nghệ Tĩnh (1930–1931) nổ ra chủ yếu ở hai tỉnh nào?', opts: ['Nghệ An và Hà Tĩnh', 'Thanh Hóa và Nghệ An', 'Quảng Bình và Quảng Trị', 'Hà Tĩnh và Quảng Bình'], ans: 0, exp: 'Xô Viết Nghệ Tĩnh là cao trào cách mạng 1930–1931, nổ ra mạnh mẽ tại hai tỉnh Nghệ An và Hà Tĩnh.' },
    { q: 'Thành cổ Quảng Trị, nơi diễn ra 81 ngày đêm chiến đấu ác liệt năm 1972, thuộc tỉnh nào?', opts: ['Quảng Trị', 'Quảng Bình', 'Thừa Thiên Huế', 'Quảng Nam'], ans: 0, exp: 'Thành cổ Quảng Trị là nơi diễn ra 81 ngày đêm chiến đấu ác liệt giữa ta và địch trong mùa hè đỏ lửa năm 1972.' },
    { q: 'Dinh Độc Lập, nơi xe tăng quân Giải phóng tiến vào ngày 30/4/1975, nằm ở đâu?', opts: ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ'], ans: 0, exp: 'Dinh Độc Lập nằm tại TP. Hồ Chí Minh (Sài Gòn), là nơi ghi dấu thời khắc lịch sử ngày 30/4/1975.' },
    { q: 'Sông Như Nguyệt, nơi vang lên bài thơ "Nam quốc sơn hà" năm 1077, nay thuộc tỉnh nào?', opts: ['Bắc Ninh', 'Bắc Giang', 'Vĩnh Phúc', 'Hà Nội'], ans: 0, exp: 'Sông Như Nguyệt (sông Cầu) chảy qua Bắc Ninh, là nơi Lý Thường Kiệt lập phòng tuyến chặn quân Tống năm 1077.' },
    { q: 'Địa đạo Vịnh Mốc, biểu tượng chiến tranh nhân dân thời chống Mỹ, thuộc tỉnh nào?', opts: ['Quảng Trị', 'Quảng Bình', 'Thừa Thiên Huế', 'Quảng Nam'], ans: 0, exp: 'Địa đạo Vịnh Mốc thuộc huyện Vĩnh Linh, tỉnh Quảng Trị, là nơi người dân trú ẩn và chiến đấu suốt thời kỳ chống Mỹ.' },
    { q: 'Chợ Bến Thành, biểu tượng nổi tiếng của Sài Gòn xưa, nằm ở thành phố nào?', opts: ['TP. Hồ Chí Minh', 'Cần Thơ', 'Biên Hòa', 'Vũng Tàu'], ans: 0, exp: 'Chợ Bến Thành nằm ở trung tâm TP. Hồ Chí Minh, được xây dựng từ đầu thế kỷ 20, là biểu tượng lâu đời của thành phố.' },
    { q: 'Nhà tù Côn Đảo, nơi giam giữ nhiều chiến sĩ cách mạng, thuộc tỉnh nào ngày nay?', opts: ['Bà Rịa – Vũng Tàu', 'Kiên Giang', 'Cà Mau', 'Bến Tre'], ans: 0, exp: 'Côn Đảo là huyện đảo thuộc tỉnh Bà Rịa – Vũng Tàu, nơi thực dân Pháp và đế quốc Mỹ giam giữ hàng vạn chiến sĩ cách mạng.' },
  ],
  culture: [
    { q: 'Chữ Nôm được dùng để viết tác phẩm nổi tiếng nào?', opts: ['Đại Việt sử ký', 'Truyện Kiều', 'Bình Ngô đại cáo', 'Hịch tướng sĩ'], ans: 1, exp: 'Nguyễn Du viết Truyện Kiều bằng chữ Nôm — một kiệt tác văn học của dân tộc Việt Nam.' },
    { q: 'Lễ hội Đền Hùng (Giỗ Tổ Hùng Vương) diễn ra vào ngày mấy tháng 3 Âm lịch?', opts: ['Mùng 1', 'Mùng 3', 'Mùng 5', 'Mùng 10'], ans: 3, exp: 'Giỗ Tổ Hùng Vương diễn ra ngày 10/3 Âm lịch hàng năm, là ngày Quốc lễ của Việt Nam.' },
    { q: 'Trống đồng Đông Sơn là biểu tượng văn hóa của nền văn minh nào?', opts: ['Óc Eo', 'Sa Huỳnh', 'Đông Sơn', 'Đồng Nai'], ans: 2, exp: 'Trống đồng Đông Sơn (3000–2000 năm trước) là đỉnh cao của văn minh lúa nước miền Bắc Việt Nam cổ đại.' },
    { q: 'Áo dài, trang phục truyền thống tiêu biểu của phụ nữ Việt Nam, gắn liền với vùng nào?', opts: ['Cả ba miền Việt Nam', 'Chỉ miền Bắc', 'Chỉ miền Nam', 'Chỉ miền Trung'], ans: 0, exp: 'Áo dài là trang phục truyền thống được cả ba miền Bắc – Trung – Nam Việt Nam coi là biểu tượng văn hóa dân tộc.' },
    { q: 'Bánh chưng, bánh giầy gắn liền với truyền thuyết về nhân vật nào?', opts: ['Lang Liêu', 'Sơn Tinh', 'Thánh Gióng', 'Chử Đồng Tử'], ans: 0, exp: 'Truyền thuyết kể hoàng tử Lang Liêu làm bánh chưng, bánh giầy dâng vua Hùng, tượng trưng cho trời đất.' },
    { q: 'Tết Nguyên Đán của Việt Nam được tính theo lịch nào?', opts: ['Âm lịch', 'Dương lịch', 'Lịch Phật giáo', 'Lịch can chi riêng'], ans: 0, exp: 'Tết Nguyên Đán là lễ hội lớn nhất trong năm, được tính theo Âm lịch, đánh dấu năm mới truyền thống.' },
    { q: 'Múa rối nước là loại hình nghệ thuật dân gian đặc trưng của vùng nào?', opts: ['Đồng bằng Bắc Bộ', 'Tây Nguyên', 'Nam Bộ', 'Duyên hải miền Trung'], ans: 0, exp: 'Múa rối nước là loại hình nghệ thuật độc đáo bắt nguồn từ đồng bằng Bắc Bộ, biểu diễn trên mặt nước.' },
    { q: 'Nhã nhạc cung đình, được UNESCO công nhận di sản văn hóa, gắn liền với triều đại và vùng nào?', opts: ['Nhà Nguyễn, Huế', 'Nhà Lê, Thăng Long', 'Nhà Trần, Nam Định', 'Nhà Lý, Bắc Ninh'], ans: 0, exp: 'Nhã nhạc cung đình Huế là loại hình âm nhạc cung đình triều Nguyễn, được UNESCO công nhận là Di sản văn hóa phi vật thể.' },
    { q: 'Ca trù là loại hình nghệ thuật truyền thống đặc trưng của khu vực nào?', opts: ['Miền Bắc Việt Nam', 'Miền Trung Việt Nam', 'Miền Nam Việt Nam', 'Tây Nguyên'], ans: 0, exp: 'Ca trù là loại hình nghệ thuật hát thơ cổ truyền có nguồn gốc từ miền Bắc Việt Nam, được UNESCO công nhận di sản.' },
    { q: 'Dân ca Quan họ là nét văn hóa đặc trưng của tỉnh nào?', opts: ['Bắc Ninh', 'Nghệ An', 'Thanh Hóa', 'Hà Nam'], ans: 0, exp: 'Dân ca Quan họ Bắc Ninh là loại hình dân ca đối đáp nổi tiếng, được UNESCO công nhận Di sản văn hóa phi vật thể.' },
    { q: 'Ai là người có công lớn trong việc sáng tạo và hoàn thiện chữ Quốc ngữ?', opts: ['Alexandre de Rhodes', 'Nguyễn Trường Tộ', 'Trương Vĩnh Ký', 'Phan Thanh Giản'], ans: 0, exp: 'Alexandre de Rhodes, một giáo sĩ phương Tây, có công lớn trong việc hệ thống hóa và phổ biến chữ Quốc ngữ.' },
    { q: 'Đờn ca tài tử là loại hình nghệ thuật đặc trưng của vùng nào?', opts: ['Nam Bộ', 'Bắc Bộ', 'Trung Bộ', 'Tây Bắc'], ans: 0, exp: 'Đờn ca tài tử Nam Bộ là loại hình nghệ thuật dân gian đặc sắc, được UNESCO công nhận Di sản văn hóa phi vật thể.' },
    { q: 'Hội Lim, lễ hội gắn với dân ca Quan họ, được tổ chức ở tỉnh nào?', opts: ['Bắc Ninh', 'Bắc Giang', 'Hải Dương', 'Hưng Yên'], ans: 0, exp: 'Hội Lim được tổ chức tại huyện Tiên Du, tỉnh Bắc Ninh, là dịp trình diễn dân ca Quan họ nổi tiếng.' },
    { q: 'Chùa Một Cột, công trình kiến trúc độc đáo thời Lý, nằm ở đâu?', opts: ['Hà Nội', 'Ninh Bình', 'Bắc Ninh', 'Nam Định'], ans: 0, exp: 'Chùa Một Cột được vua Lý Thái Tông cho xây dựng tại Hà Nội, mang kiến trúc độc đáo hình bông sen.' },
    { q: 'Bia đá ghi tên các tiến sĩ tại Văn Miếu – Quốc Tử Giám để làm gì?', opts: ['Tôn vinh nhân tài khoa bảng', 'Ghi công các vị vua', 'Ghi chép luật pháp', 'Thờ các vị thần nông nghiệp'], ans: 0, exp: '82 bia tiến sĩ tại Văn Miếu – Quốc Tử Giám ghi danh những người đỗ đạt qua các khoa thi, nhằm tôn vinh nhân tài đất nước.' },
    { q: 'Cải lương là loại hình sân khấu đặc trưng phát triển mạnh ở vùng nào?', opts: ['Nam Bộ', 'Bắc Bộ', 'Trung Bộ', 'Tây Nguyên'], ans: 0, exp: 'Cải lương là loại hình sân khấu ra đời và phát triển mạnh ở Nam Bộ đầu thế kỷ XX.' },
    { q: 'Tranh Đông Hồ, dòng tranh dân gian nổi tiếng, có xuất xứ từ tỉnh nào?', opts: ['Bắc Ninh', 'Bắc Giang', 'Hải Dương', 'Hưng Yên'], ans: 0, exp: 'Tranh dân gian Đông Hồ xuất xứ từ làng Đông Hồ, tỉnh Bắc Ninh, nổi tiếng với kỹ thuật in khắc gỗ và màu sắc từ tự nhiên.' },
    { q: 'Lễ hội Chọi trâu truyền thống nổi tiếng của Việt Nam được tổ chức ở đâu?', opts: ['Đồ Sơn, Hải Phòng', 'Sầm Sơn, Thanh Hóa', 'Cửa Lò, Nghệ An', 'Sa Pa, Lào Cai'], ans: 0, exp: 'Lễ hội Chọi trâu Đồ Sơn (Hải Phòng) là lễ hội truyền thống nổi tiếng, tổ chức vào tháng 8 Âm lịch hàng năm.' },
    { q: 'Không gian văn hóa Cồng chiêng, di sản UNESCO, là nét văn hóa đặc trưng của vùng nào?', opts: ['Tây Nguyên', 'Tây Bắc', 'Đông Bắc', 'Đồng bằng sông Cửu Long'], ans: 0, exp: 'Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại.' },
    { q: 'Bánh Trung Thu là món ăn truyền thống gắn liền với dịp lễ nào?', opts: ['Tết Trung Thu', 'Tết Nguyên Đán', 'Tết Đoan Ngọ', 'Lễ Vu Lan'], ans: 0, exp: 'Bánh Trung Thu là món ăn truyền thống không thể thiếu trong dịp Tết Trung Thu, rằm tháng 8 Âm lịch.' },
    { q: 'Hát Xoan Phú Thọ, di sản UNESCO, có nguồn gốc gắn với tín ngưỡng nào?', opts: ['Thờ cúng Hùng Vương', 'Thờ Thành hoàng làng', 'Thờ Mẫu', 'Thờ Phật'], ans: 0, exp: 'Hát Xoan gắn liền với tín ngưỡng thờ cúng Hùng Vương, có nguồn gốc từ thời đại các Vua Hùng tại Phú Thọ.' },
    { q: 'Đờn ca tài tử Nam Bộ được UNESCO công nhận là di sản văn hóa phi vật thể vào năm nào?', opts: ['2013', '2003', '2010', '2016'], ans: 0, exp: 'Năm 2013, UNESCO công nhận Đờn ca tài tử Nam Bộ là Di sản văn hóa phi vật thể đại diện của nhân loại.' },
    { q: 'Tín ngưỡng thờ cúng Hùng Vương được UNESCO công nhận là di sản văn hóa phi vật thể vào năm nào?', opts: ['2012', '2010', '2015', '2003'], ans: 0, exp: 'Năm 2012, UNESCO công nhận Tín ngưỡng thờ cúng Hùng Vương là di sản văn hóa phi vật thể của nhân loại.' },
    { q: 'Chữ Nôm được sáng tạo dựa trên nền tảng chữ viết nào?', opts: ['Chữ Hán', 'Chữ Phạn', 'Chữ Latinh', 'Chữ Chăm'], ans: 0, exp: 'Chữ Nôm được sáng tạo dựa trên chữ Hán, dùng để ghi âm tiếng Việt, thể hiện ý thức tự chủ văn hóa dân tộc.' },
  ],
};

let g5Score = 0, g5Correct = 0, g5Wrong = 0; let g5Timer = null, g5TimeLeft = 15;
let g5SpinCount = 0;
const G5_MAX_SPINS = 10;
let wheelSpinning = false;
let currentWheelAngle = 0;
let currentQSet = null;

// 🎲 CƯỢC ĐIỂM CÂU KHÓ
const G5_BET_CHANCE = 0.3; // 30% số lần quay trúng sẽ là câu khó có cược
const G5_BET_AMOUNTS = [10, 20, 50, 100];
let g5CurrentBet = 0;       // số điểm đang cược cho câu hiện tại (0 = không cược)
let g5IsBetQuestion = false; // câu hiện tại có phải câu khó/cược không

// 📌 Danh sách câu hỏi được đánh dấu THỰC SỰ KHÓ theo từng chủ đề (dùng cho câu cược)
// Copy chính xác nội dung "q" từ wheelQuestions để thêm/bớt câu tùy ý
const G5_HARD_QUESTIONS = {
  battle: [
    'Trận Đông Bộ Đầu năm 1258 đánh bại quân xâm lược nào lần thứ nhất?',
    'Trong kháng chiến chống Nguyên Mông lần 2 (1285), Trần Nhật Duật lập công lớn ở trận nào?',
    'Trận Vạn Kiếp là nơi Trần Hưng Đạo lập căn cứ chống quân xâm lược nào?',
    'Trận Cầu Giấy lần thứ nhất (1873) khiến viên chỉ huy Pháp nào tử trận?',
    'Trận Ấp Bắc (1963) là thất bại của chiến lược nào do Mỹ hậu thuẫn?',
  ],
  dynasty: [
    'Chế độ Thái thượng hoàng nhường ngôi sớm cho con là nét đặc trưng của triều đại nào?',
    'Thời kỳ Lê Trung Hưng nối tiếp giai đoạn nào của nhà Hậu Lê?',
    'Ranh giới phân chia Đàng Trong – Đàng Ngoài thời Trịnh – Nguyễn phân tranh là con sông nào?',
    'Nhà Mạc do Mạc Đăng Dung lập nên sau khi cướp ngôi triều đại nào?',
  ],
  person: [
    'Kim Đồng là ai trong lịch sử cách mạng Việt Nam?',
    'Nguyễn Thị Minh Khai là ai trong phong trào cách mạng Việt Nam?',
    'Nguyễn Bỉnh Khiêm được người đời gọi bằng biệt danh nào?',
    'Ai là vị nữ tướng chỉ huy voi trận trong khởi nghĩa Tây Sơn?',
  ],
  year: [
    'Khoa thi Nho học đầu tiên của Việt Nam được tổ chức vào năm nào?',
    'Quân Minh sang xâm lược, chấm dứt nhà Hồ vào năm nào?',
    'Nguyễn Huệ đem quân ra Bắc lần đầu tiêu diệt họ Trịnh vào năm nào?',
    'Đại hội Đảng khởi xướng công cuộc Đổi Mới diễn ra vào năm nào?',
  ],
  place: [
    'Lam Kinh, khu di tích lăng tẩm các vua nhà Lê Sơ, thuộc tỉnh nào?',
    'Tân Trào, "thủ đô kháng chiến" nơi diễn ra Quốc dân Đại hội 1945, thuộc tỉnh nào?',
    'Pác Bó, nơi Bác Hồ về nước trực tiếp lãnh đạo cách mạng năm 1941, thuộc tỉnh nào?',
    'Kinh đô của nước Văn Lang (thời Hùng Vương) ở đâu?',
  ],
  culture: [
    'Ca trù là loại hình nghệ thuật truyền thống đặc trưng của khu vực nào?',
    'Đờn ca tài tử là loại hình nghệ thuật đặc trưng của vùng nào?',
    'Không gian văn hóa Cồng chiêng, di sản UNESCO, là nét văn hóa đặc trưng của vùng nào?',
    'Nhã nhạc cung đình, được UNESCO công nhận di sản văn hóa, gắn liền với triều đại và vùng nào?',
  ],
};

// 📌 Ghi nhớ các câu đã hỏi trong ván hiện tại (dùng q.q làm khóa) để né lặp lại giữa các lượt quay
let g5UsedQTexts = [];

// Bốc 1 câu hỏi — nếu hard=true thì ưu tiên bốc trong danh sách câu khó của chủ đề đó,
// nếu chủ đề chưa có câu khó nào được khai báo thì fallback về bốc ngẫu nhiên như bình thường.
// Random thật (không còn seed theo ngày) + né các câu vừa hỏi trong ván này.
function pickG5Question(qSet, hard) {
  const pool = wheelQuestions[qSet];

  const pickFrom = (list) => {
    let available = list.filter(q => !g5UsedQTexts.includes(q.q));
    if (available.length === 0) available = list; // hết câu chưa dùng thì cho phép lặp lại
    const picked = available[Math.floor(Math.random() * available.length)];
    g5UsedQTexts.push(picked.q);
    return picked;
  };

  if (hard) {
    const hardTexts = G5_HARD_QUESTIONS[qSet] || [];
    const hardPool = pool.filter(q => hardTexts.includes(q.q));
    if (hardPool.length > 0) {
      return pickFrom(hardPool);
    }
  }
  return pickFrom(pool);
}

// ===== Hành trình thời gian (dải mốc lịch sử theo tiến trình chơi) =====
const G5_ERAS = [
  { icon: '⛓️', label: 'Bắc thuộc' },
  { icon: '🏹', label: 'Ngô-Đinh-Lê' },
  { icon: '🐉', label: 'Lý-Trần' },
  { icon: '👑', label: 'Lê-Nguyễn' },
  { icon: '⚓', label: 'Cận đại' },
  { icon: '🚩', label: 'Hiện đại' },
];
let g5EraStatus = []; // index -> 'correct' | 'wrong'

// ===== Khóa đáp án 3 giây (buộc suy nghĩ trước khi thấy lựa chọn) =====
let g5FastGuess = false;
let g5HintTimer = null;

// Câu hỏi đã từng trả lời ĐÚNG (dùng nội dung câu hỏi làm khóa)
// Lưu vĩnh viễn để chặn cộng XP toàn cục nhiều lần khi replay
function getG5AnsweredCorrectSet() {
  return loadProgress('g5_answered_correct', []);
}
function markG5AnsweredCorrect(qText) {
  const set = getG5AnsweredCorrectSet();
  if (!set.includes(qText)) {
    set.push(qText);
    saveProgress('g5_answered_correct', set);
    return true;
  }
  return false;
}

// Lấy danh sách mảnh đang active theo chủ đề đã chọn (topic = 'all' thì lấy hết)
function getActiveSegments() {
  return wheelSegments; // Luôn hiện đủ 6 mảnh
}

function ensureG5TimelineEl() {
  const existing = document.getElementById('g5-timeline');
  if (existing) existing.remove(); // dọn luôn nếu đã lỡ render trước đó
  return null;
}

function renderG5Timeline() {
  // Đã tắt: không hiện dải icon "Hành trình thời gian" nữa
  return;
}

function drawWheel(angle, segments) {
  const canvas = document.getElementById('spin-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 140, cy = 140, r = 130;
  const activeSegments = segments || getActiveSegments();
  const segAngle = (2 * Math.PI) / activeSegments.length;
  ctx.clearRect(0, 0, 280, 280);

  activeSegments.forEach((seg, i) => {
    const start = angle + i * segAngle;
    const end = start + segAngle;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + segAngle / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 11px Nunito, sans-serif';
    const lines = seg.label.split('\n');
    lines.forEach((line, li) => {
      ctx.fillText(line, r - 12, (li - (lines.length-1)/2) * 14 + 2);
    });
    ctx.restore();
  });

  // Center circle
  ctx.beginPath();
  ctx.arc(cx, cy, 22, 0, 2*Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.strokeStyle = '#DDD';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#1A2A4A';
  ctx.font = 'bold 18px Nunito';
  ctx.textAlign = 'center';
  ctx.fillText('🎡', cx, cy + 6);
}

function spinWheel() {
  if (wheelSpinning) return;
  const maxSpins = window.g5Config?.maxSpins || G5_MAX_SPINS;
  if (g5SpinCount >= maxSpins) return;
  wheelSpinning = true;
  document.getElementById('spin-btn').disabled = true;
  document.getElementById('wheel-qbox').classList.remove('show');

  // Chỉ random trong các mảnh thuộc chủ đề đã chọn
  const activeSegments = getActiveSegments();

  const extraSpins = 4 + Math.random() * 4; // 4-8 full rotations
  const randSeg = Math.floor(Math.random() * activeSegments.length);
  const segAngle = (2 * Math.PI) / activeSegments.length;
  // Target: pointer (top = -π/2) lands in middle of chosen segment
  const targetAngle = -Math.PI/2 - (randSeg * segAngle + segAngle/2);
  const totalRotation = extraSpins * 2 * Math.PI + ((targetAngle - currentWheelAngle) % (2*Math.PI));

  const startAngle = currentWheelAngle;
  const endAngle = startAngle + totalRotation;
  const duration = 3000;
  const startTime = performance.now();

  function ease(t) {
    // Ease out cubic
    return 1 - Math.pow(1 - t, 3);
  }

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    currentWheelAngle = startAngle + (endAngle - startAngle) * ease(progress);
    drawWheel(currentWheelAngle, activeSegments);
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      currentWheelAngle = endAngle % (2 * Math.PI);
      wheelSpinning = false;
      const chosenSeg = activeSegments[randSeg];
      currentQSet = chosenSeg.qSet;
      showWheelQuestion(chosenSeg);
    }
  }
  requestAnimationFrame(animate);
}

// 🎨 CSS cho bảng cược (chèn 1 lần duy nhất)
function injectG5BetStyles() {
  if (document.getElementById('g5-bet-styles')) return;
  const style = document.createElement('style');
  style.id = 'g5-bet-styles';
  style.textContent = `
    #g5-bet-panel {
      text-align: center; padding: 14px 10px; margin-bottom: 10px;
      background: rgba(243,156,18,0.1); border: 2px dashed #F39C12; border-radius: 14px;
    }
    .g5-bet-title { font-weight: 800; font-family: 'Baloo 2', cursive; font-size: 1rem; margin-bottom: 4px; }
    .g5-bet-sub { font-size: 0.85rem; opacity: 0.8; margin-bottom: 10px; }
    .g5-bet-amounts { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 10px; }
    .g5-bet-btn {
      background: #F39C12; border: none; border-radius: 999px; padding: 8px 18px;
      font-weight: 800; color: #1A2A4A; cursor: pointer; transition: transform 0.15s ease;
    }
    .g5-bet-btn:hover:not(:disabled) { transform: translateY(-2px) scale(1.05); }
    .g5-bet-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .g5-bet-skip-btn {
      background: transparent; border: 2px solid rgba(255,255,255,0.4); border-radius: 999px;
      padding: 7px 18px; font-weight: 700; color: inherit; cursor: pointer;
    }
    .g5-bet-skip-btn:hover { border-color: #fff; }
  `;
  document.head.appendChild(style);
}

// 🎲 Bước 1: quay xong -> quyết định đây có phải câu khó (có cược) hay không, rồi bốc câu tương ứng
function showWheelQuestion(seg) {
  const topic = window.g5Config?.topic || 'all';
  const qSet = (topic !== 'all' && wheelQuestions[topic]) ? topic : seg.qSet;

  g5CurrentBet = 0;
  g5IsBetQuestion = Math.random() < G5_BET_CHANCE;

  const q = pickG5Question(qSet, g5IsBetQuestion);
  window.g5CurrentQText = q.q; // lưu lại câu hỏi hiện tại để answerWheel() dùng làm khóa chống farm

  // Luôn hiện câu hỏi + đáp án bình thường trước — cược (nếu có) chỉ hiện SAU khi đã chọn 1 đáp án
  revealG5Question(q, seg);
}

// 🎲 Bước 2 (chỉ câu khó): che câu hỏi, hiện bảng chọn mức cược
// 🎯 Người chơi vừa CHỌN xong 1 đáp án (chưa biết đúng/sai) — nếu là câu khó thì hỏi cược trước khi chấm
function selectWheelAnswer(chosen, correct, explain, btn) {
  clearInterval(g5Timer);
  clearInterval(g5HintTimer);
  const hint = document.getElementById('g5-guess-hint');
  if (hint) hint.style.display = 'none';

  document.querySelectorAll('.wheel-opt').forEach(b => {
    b.disabled = true;
    if (b === btn) b.classList.add('w-selected-pending');
  });

  if (g5IsBetQuestion) {
    window.g5PendingAnswer = { chosen, correct, explain, btn };
    renderG5BetPanel();
  } else {
    answerWheel(chosen, correct, explain, btn);
  }
}

// 🎲 Bước 2 (chỉ câu khó, sau khi đã chọn đáp án): hiện bảng chọn mức cược ngay dưới các đáp án
function renderG5BetPanel() {
  injectG5BetStyles();
  document.getElementById('g5-timer').textContent = '';

  const opts = document.getElementById('wheel-opts');
  let panel = document.getElementById('g5-bet-panel');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'g5-bet-panel';
    opts.parentNode.insertBefore(panel, opts.nextSibling);
  }
  panel.innerHTML = `
    <div class="g5-bet-title">🎲 Đây là câu khó! Cược điểm để nhân đôi thưởng nếu đúng, hoặc bỏ qua cho an toàn.</div>
    <div class="g5-bet-sub">Điểm hiện có: <b>${g5Score}</b> — cược xong mới biết đúng/sai!</div>
    <div class="g5-bet-amounts">
      ${G5_BET_AMOUNTS.map(a => `<button class="g5-bet-btn" data-amt="${a}">${a} điểm</button>`).join('')}
    </div>
    <button class="g5-bet-skip-btn" id="g5-bet-skip">🚫 Không cược</button>
  `;
  panel.querySelectorAll('.g5-bet-btn').forEach(btn => {
    btn.onclick = () => placeG5Bet(Number(btn.dataset.amt));
  });
  document.getElementById('g5-bet-skip').onclick = () => placeG5Bet(0);
}

// 🎲 Bước 3: xác nhận mức cược (không trừ điểm ngay — chỉ trừ nếu cược thua), rồi chấm điểm câu vừa chọn
function placeG5Bet(amount) {
  g5CurrentBet = amount;
  const panel = document.getElementById('g5-bet-panel');
  if (panel) panel.remove();
  if (amount > 0) {
    showToast(`🎲 Đã đặt cược ${amount} điểm — đúng thì x2, sai thì mất!`, '🎲');
  }
  const p = window.g5PendingAnswer;
  answerWheel(p.chosen, p.correct, p.explain, p.btn);
}

// 📖 Hiển thị câu hỏi thật (dùng chung cho câu thường và câu khó sau khi đã cược xong)
function revealG5Question(q, seg) {
  document.getElementById('wheel-category').textContent = seg.label.replace('\n', ' ');
  document.getElementById('wheel-qtext').textContent = (g5IsBetQuestion ? '🎲 ' : '') + q.q;

  const opts = document.getElementById('wheel-opts');
  opts.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'wheel-opt';
    btn.innerHTML = `<strong>${letters[i]}.</strong> ${opt}`;
    btn.onclick = () => selectWheelAnswer(i, q.ans, q.exp, btn);
    opts.appendChild(btn);
  });

  // Khóa đáp án 3 giây, buộc người chơi nghĩ trước khi thấy lựa chọn
  clearInterval(g5HintTimer);
  g5FastGuess = false;
  opts.style.opacity = '0.12';
  opts.style.pointerEvents = 'none';

  let hint = document.getElementById('g5-guess-hint');
  if (!hint) {
    hint = document.createElement('div');
    hint.id = 'g5-guess-hint';
    hint.style.cssText = 'text-align:center;margin:8px 0;font-family:\'Baloo 2\',cursive;';
    opts.parentNode.insertBefore(hint, opts);
  }
  hint.style.display = 'block';
  let g5HintCount = 3;
  hint.innerHTML = `<div style="opacity:0.85;">🧠 Nghĩ đáp án đi... mở khóa sau <b>${g5HintCount}s</b></div>
    <button id="g5-fastguess-btn" style="margin-top:6px;background:#F39C12;border:none;border-radius:20px;padding:6px 16px;font-weight:700;color:#1A2A4A;cursor:pointer;">💡 Tôi chắc chắn rồi! (+10 XP nếu đúng)</button>`;

  const g5RevealOpts = (fast) => {
    clearInterval(g5HintTimer);
    hint.style.display = 'none';
    opts.style.opacity = '1';
    opts.style.pointerEvents = 'auto';
    if (fast) g5FastGuess = true;
  };
  document.getElementById('g5-fastguess-btn').onclick = () => g5RevealOpts(true);
  g5HintTimer = setInterval(() => {
    g5HintCount--;
    if (g5HintCount <= 0) { g5RevealOpts(false); return; }
    hint.querySelector('b').textContent = g5HintCount + 's';
  }, 1000);

  const qbox = document.getElementById('wheel-qbox');
  if (qbox) { qbox.style.display = 'block'; }
  clearInterval(g5Timer);
  g5TimeLeft = 15;
  document.getElementById('g5-timer').textContent = '⏱ 15s';
  document.getElementById('g5-timer').style.color = '';
  g5Timer = setInterval(() => {
    g5TimeLeft--;
    document.getElementById('g5-timer').textContent = '⏱ ' + g5TimeLeft + 's';
    if (g5TimeLeft <= 5) document.getElementById('g5-timer').style.color = '#e74c3c';
    if (g5TimeLeft <= 0) { clearInterval(g5Timer); answerWheel(-1, -1, 'Hết giờ!', null); }
  }, 1000);
}
function answerWheel(chosen, correct, explain, btn) {
  clearInterval(g5Timer);
  document.querySelectorAll('.wheel-opt').forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('w-correct');
    if (i === chosen && chosen !== correct) b.classList.add('w-wrong');
  });

  if (chosen === correct) {
    g5Correct++;
    // Lần đầu đúng câu này -> full XP. Đã từng đúng trước đó (chơi lại) -> chỉ 20% XP an ủi, chặn farm.
    const isFirstTime = markG5AnsweredCorrect(window.g5CurrentQText || '');
    const earned = isFirstTime ? 25 : 5;
    g5Score += earned;
    addXP(earned);
    // syncXPToServer(earned, 'GAME5', 'Vòng Quay Lịch Sử - trả lời đúng');
    playCorrectSound();
    showToast(`+${earned} XP ⚡`, '⚡');
    if (g5FastGuess && isFirstTime) {
      g5Score += 10;
      addXP(10);
      showToast('⚡ Phản xạ nhanh +10 XP!', '🔥');
    }
  } else {
    g5Wrong++;
    g5Score = Math.max(0, g5Score - 10); // Sai -> trừ 10 điểm ván, không xuống dưới 0
    playWrongSound();
  }

  // 🎲 Xử lý kết quả cược — trừ/cộng ngay lúc chấm điểm, không trừ trước khi biết đúng/sai
  if (g5IsBetQuestion && g5CurrentBet > 0) {
    if (chosen === correct) {
      const winAmount = g5CurrentBet * 2;
      g5Score += winAmount;
      showToast(`🎲 Cược thắng! +${winAmount} điểm`, '🎉');
    } else {
      g5Score = Math.max(0, g5Score - g5CurrentBet);
      showToast(`🎲 Cược thua! Mất ${g5CurrentBet} điểm`, '💸');
    }
    document.getElementById('g5-score').textContent = g5Score;
  }
  g5IsBetQuestion = false;
  g5CurrentBet = 0;

  g5EraStatus[g5SpinCount % G5_ERAS.length] = (chosen === correct) ? 'correct' : 'wrong';
  renderG5Timeline();
  g5FastGuess = false;

  // Show explain
  const exp = document.createElement('div');
  exp.style.cssText = 'margin-top:12px;padding:12px 14px;background:rgba(255,255,255,0.12);border-radius:10px;font-size:0.85rem;line-height:1.5;color:rgba(255,255,255,0.9);';
  exp.textContent = (chosen === correct ? '✅ ' : '📖 ') + explain;
  document.getElementById('wheel-opts').appendChild(exp);

  document.getElementById('g5-score').textContent = g5Score;
  g5SpinCount++;

  const maxSpins = window.g5Config?.maxSpins || G5_MAX_SPINS;
  const spinEl = document.getElementById('g5-spins-left');
  const left = maxSpins - g5SpinCount;
  if (spinEl) spinEl.textContent = left > 0 ? `🎡 Còn ${left} lượt quay` : '🏁 Hết lượt!';
  if (g5SpinCount >= maxSpins) { setTimeout(showG5Result, 1800); }

  document.getElementById('g5-correct').textContent = g5Correct;
  document.getElementById('g5-wrong').textContent = g5Wrong;
  saveProgress('g5_correct', g5Correct);

  // Mở thẻ sưu tập theo % đúng, dựa trên số lượt thực tế đã chọn (không hardcode 7/9)
  checkG5Collection();

  // Re-enable spin after 1.5s
  setTimeout(() => {
    document.getElementById('spin-btn').disabled = false;
  }, 1500);
}

// Mở khóa thẻ theo tỉ lệ % đúng, áp dụng được với mọi mức maxSpins (5/10/20...)
function checkG5Collection() {
  const maxSpins = window.g5Config?.maxSpins || G5_MAX_SPINS;
  const pct = maxSpins > 0 ? Math.round((g5Correct / maxSpins) * 100) : 0;

  saveProgress('game_g5', { completed: false, pct });

  unlockCard('ba-trieu');
  unlockCard('vo-thi-sau');
}

function showG5Result() {
  document.getElementById('spin-btn').disabled = true;

  const maxSpins = window.g5Config?.maxSpins || G5_MAX_SPINS;
  const pct = Math.round((g5Correct / maxSpins) * 100);

  let trophy = pct >= 80 ? '🏆' : pct >= 60 ? '🥈' : pct >= 40 ? '🎖️' : '📚';
  let msg = pct >= 80 ? 'Bậc thầy lịch sử!' : pct >= 60 ? 'Rất giỏi!' : pct >= 40 ? 'Khá tốt!' : 'Cần cố gắng hơn!';

  const qbox = document.getElementById('wheel-qbox');
  if (qbox) {
    qbox.style.display = 'block';
    qbox.querySelector('div').innerHTML = `
      <div style="text-align:center;padding:20px 0;">
        <div style="font-size:3rem;">${trophy}</div>
        <div style="font-family:'Baloo 2',cursive;font-size:1.4rem;font-weight:800;margin:8px 0;">${msg}</div>
        <div style="font-size:1rem;opacity:0.8;margin-bottom:16px;">✅ ${g5Correct}/${maxSpins} câu đúng · ⚡ ${g5Score} XP</div>
        <button onclick="resetG5()" style="background:#F39C12;border:none;border-radius:50px;padding:12px 28px;font-family:'Baloo 2',cursive;font-size:1rem;font-weight:700;color:#1A2A4A;cursor:pointer;">🔄 Chơi lại</button>
      </div>
    `;
  }
  saveProgress('g5_best', Math.max(g5Correct, loadProgress('g5_best', 0)));

  const maxSpins2 = window.g5Config?.maxSpins || G5_MAX_SPINS;
  const finalPct = maxSpins2 > 0 ? Math.round((g5Correct / maxSpins2) * 100) : 0;
  saveProgress('game_g5', { completed: true, pct: finalPct });
  unlockCard('ho-chi-minh');
  unlockCard('vo-nguyen-giap');
}

function resetG5() {
  g5Score = 0; g5Correct = 0; g5Wrong = 0; g5SpinCount = 0;
  g5EraStatus = [];
  g5CurrentBet = 0;
  g5IsBetQuestion = false;
  g5UsedQTexts = [];
  const betPanel = document.getElementById('g5-bet-panel');
  if (betPanel) betPanel.remove();
  clearInterval(g5HintTimer);
  const hintEl = document.getElementById('g5-guess-hint');
  if (hintEl) hintEl.style.display = 'none';
  renderG5Timeline();

  const maxSpins = window.g5Config?.maxSpins || G5_MAX_SPINS;

  document.getElementById('g5-score').textContent = 0;
  document.getElementById('g5-correct').textContent = 0;
  document.getElementById('g5-wrong').textContent = 0;
  document.getElementById('g5-spins-left').textContent = `🎡 Còn ${maxSpins} lượt quay`;
  document.getElementById('spin-btn').disabled = false;
  document.getElementById('wheel-qbox').style.display = 'none';

  // Vẽ lại vòng quay đúng theo chủ đề hiện tại (số mảnh có thể thay đổi)
  currentWheelAngle = 0;
  drawWheel(0, getActiveSegments());
}

// Init wheel on load
window.addEventListener('load', () => {
  drawWheel(0, getActiveSegments());
});
const GAME5_TOPICS = [
  { label: '🎲 Tất cả chủ đề', value: 'all' },
  { label: '⚔️ Chiến trận', value: 'battle' },
  { label: '👑 Triều đại', value: 'dynasty' },
  { label: '👤 Nhân vật', value: 'person' },
  { label: '📅 Năm tháng', value: 'year' },
  { label: '🗺️ Địa danh', value: 'place' },
  { label: '✍️ Văn hóa', value: 'culture' },
];
 
/**
 * Khởi động Game 5 với setup
 */
function startGame5WithSetup() {
  const setup = getGameSetup('game-5');
  
  console.log('Game 5 Setup:', setup);
 
  // Reset state
  g5Score = 0;
  g5Correct = 0;
  g5Wrong = 0;
  g5SpinCount = 0;

  // Tính số câu hỏi tối đa có sẵn cho chủ đề đã chọn, tránh lặp quá nhiều
  let availableQuestions;
  if (setup.topic === 'all') {
    availableQuestions = Object.values(wheelQuestions)
      .reduce((sum, arr) => sum + arr.length, 0);
  } else {
    availableQuestions = (wheelQuestions[setup.topic] || []).length;
  }
  const safeMaxSpins = Math.min(setup.count, availableQuestions || setup.count);

  if (safeMaxSpins < setup.count) {
    showToast(`⚠️ Chủ đề này chỉ có ${safeMaxSpins} câu hỏi`, '📌');
  }
 
  // Lưu config
  window.g5Config = {
    topic: setup.topic,
    maxSpins: safeMaxSpins,
  };
 
  // Show game
  showGame('g5');
  resetG5();
}