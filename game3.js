// ========== GAME 3: QUIZ ==========

// 🔧 TOPICS cho Game 3
const GAME3_TOPICS = [
  { label: '📖 Tất cả chủ đề', value: 'Tất cả' },
  { label: '⚔️ Chống ngoại xâm', value: 'Chống ngoại xâm' },
  { label: '👤 Danh nhân', value: 'Danh nhân' },
  { label: '👑 Triều đại', value: 'Triều đại' },
  { label: '✍️ Văn học - Văn hóa', value: 'Văn học-Văn hóa' },
  { label: '🔫 Thời hiện đại', value: 'Thời hiện đại' },
];

const quizData = [
  { q: 'Ngô Quyền đánh tan quân Nam Hán trên sông nào?', opts: ['Sông Hồng', 'Sông Bạch Đằng', 'Sông Cả', 'Sông Mã'], ans: 1, explain: 'Năm 938, Ngô Quyền đóng cọc nhọn xuống sông Bạch Đằng, nhử thuyền địch vào rồi đánh tan khi thủy triều rút.', topic: 'Chống ngoại xâm' },
  { q: 'Trận Điện Biên Phủ kết thúc vào năm nào?', opts: ['1945', '1950', '1954', '1968'], ans: 2, explain: 'Ngày 7/5/1954, chiến dịch Điện Biên Phủ kết thúc thắng lợi, buộc Pháp ký Hiệp định Genève.', topic: 'Thời hiện đại' },
  { q: 'Ai là người đọc Tuyên ngôn Độc lập ngày 2/9/1945?', opts: ['Võ Nguyên Giáp', 'Trần Phú', 'Hồ Chí Minh', 'Lê Duẩn'], ans: 2, explain: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, Hà Nội ngày 2/9/1945.', topic: 'Danh nhân' },
  { q: 'Nhà nước đầu tiên của người Việt cổ tên là gì?', opts: ['Âu Lạc', 'Văn Lang', 'Đại Việt', 'Đại Cồ Việt'], ans: 1, explain: 'Văn Lang là nhà nước đầu tiên, do các Vua Hùng thành lập khoảng 2879 TCN.', topic: 'Triều đại' },
  { q: 'Quang Trung đại phá quân Thanh vào năm nào?', opts: ['1785', '1789', '1802', '1771'], ans: 1, explain: 'Tết Kỷ Dậu 1789, Nguyễn Huệ (Quang Trung) hành quân thần tốc, đại phá 29 vạn quân Thanh trong 5 ngày.', topic: 'Chống ngoại xâm' },
  { q: 'Trần Hưng Đạo đánh bại quân Nguyên Mông mấy lần?', opts: ['1 lần', '2 lần', '3 lần', '4 lần'], ans: 2, explain: 'Nhà Trần dưới sự chỉ huy của Trần Hưng Đạo đã 3 lần đánh bại quân Nguyên Mông vào các năm 1258, 1285, 1288.', topic: 'Chống ngoại xâm' },
  { q: 'Khởi nghĩa Lam Sơn do ai lãnh đạo?', opts: ['Nguyễn Trãi', 'Lê Lợi', 'Đinh Bộ Lĩnh', 'Lý Thái Tổ'], ans: 1, explain: 'Lê Lợi dấy binh khởi nghĩa tại Lam Sơn (Thanh Hóa) năm 1418, chống quân Minh đô hộ suốt 10 năm.', topic: 'Chống ngoại xâm' },
  { q: 'Hai Bà Trưng khởi nghĩa chống lại ách đô hộ của nước nào?', opts: ['Tần', 'Hán', 'Đường', 'Tống'], ans: 1, explain: 'Năm 40 SCN, Hai Bà Trưng khởi nghĩa chống lại ách đô hộ của nhà Hán (Đông Hán).', topic: 'Chống ngoại xâm' },
  { q: '"Hịch tướng sĩ" là tác phẩm của ai?', opts: ['Nguyễn Trãi', 'Lý Thường Kiệt', 'Trần Hưng Đạo', 'Ngô Thì Nhậm'], ans: 2, explain: 'Trần Hưng Đạo viết Hịch tướng sĩ để khích lệ tinh thần chiến đấu trước cuộc xâm lăng của Nguyên Mông.', topic: 'Văn học-Văn hóa' },
  { q: 'Chiến dịch Hồ Chí Minh kết thúc vào ngày nào?', opts: ['30/4/1975', '2/9/1945', '7/5/1954', '21/7/1954'], ans: 0, explain: 'Ngày 30/4/1975, xe tăng quân giải phóng tiến vào Dinh Độc Lập, đất nước hoàn toàn thống nhất.', topic: 'Thời hiện đại' },
  { q: 'An Dương Vương xây thành nào để bảo vệ đất nước?', opts: ['Thành Thăng Long', 'Thành Cổ Loa', 'Thành Hoa Lư', 'Thành Đại La'], ans: 1, explain: 'An Dương Vương xây thành Cổ Loa hình xoắn ốc tại Đông Anh, Hà Nội — một công trình quân sự độc đáo thời cổ đại.', topic: 'Triều đại' },
  { q: '"Nam quốc sơn hà" được coi là bản Tuyên ngôn Độc lập đầu tiên, do ai sáng tác?', opts: ['Nguyễn Trãi', 'Lý Thái Tổ', 'Lý Thường Kiệt', 'Trần Hưng Đạo'], ans: 2, explain: 'Lý Thường Kiệt được cho là tác giả bài thơ "Nam quốc sơn hà", đọc tại đền Trương Hống, Trương Hát trong cuộc kháng Tống năm 1077.', topic: 'Văn học-Văn hóa' },
  { q: 'Nhà Lý dời đô từ Hoa Lư về đâu vào năm 1010?', opts: ['Phú Xuân', 'Thăng Long', 'Đại La', 'Cổ Loa'], ans: 1, explain: 'Năm 1010, Lý Thái Tổ dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long (nay là Hà Nội).', topic: 'Triều đại' },
  { q: 'Đinh Bộ Lĩnh dẹp loạn bao nhiêu sứ quân để thống nhất đất nước?', opts: ['8 sứ quân', '10 sứ quân', '12 sứ quân', '15 sứ quân'], ans: 2, explain: 'Đinh Bộ Lĩnh dẹp loạn 12 sứ quân năm 968, lập ra nhà Đinh, đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư.', topic: 'Triều đại' },
  { q: 'Khởi nghĩa Yên Thế do ai lãnh đạo chống thực dân Pháp?', opts: ['Phan Bội Châu', 'Hoàng Hoa Thám', 'Phan Châu Trinh', 'Nguyễn Thái Học'], ans: 1, explain: 'Hoàng Hoa Thám (Đề Thám) lãnh đạo khởi nghĩa Yên Thế (1884–1913) — cuộc kháng chiến dài nhất chống Pháp thời đó.', topic: 'Danh nhân' },
  { q: 'Hiệp định Genève năm 1954 chia cắt Việt Nam tại vĩ tuyến bao nhiêu?', opts: ['Vĩ tuyến 16', 'Vĩ tuyến 17', 'Vĩ tuyến 18', 'Vĩ tuyến 19'], ans: 1, explain: 'Hiệp định Genève tháng 7/1954 tạm thời chia đôi Việt Nam tại vĩ tuyến 17 (sông Bến Hải, Quảng Trị).', topic: 'Thời hiện đại' },
  { q: 'Ai là vị vua sáng lập nhà Nguyễn, triều đại phong kiến cuối cùng của Việt Nam?', opts: ['Nguyễn Ánh (Gia Long)', 'Nguyễn Huệ', 'Minh Mạng', 'Tự Đức'], ans: 0, explain: 'Nguyễn Ánh lên ngôi năm 1802, lấy niên hiệu Gia Long, thống nhất đất nước và lập ra nhà Nguyễn.', topic: 'Triều đại' },
  { q: 'Chiến thắng nào đã chấm dứt sự xâm lược của quân Nguyên Mông lần thứ 3?', opts: ['Trận Tây Kết', 'Trận Bạch Đằng 1288', 'Trận Đống Đa', 'Trận Chi Lăng'], ans: 1, explain: 'Năm 1288, trận Bạch Đằng do Trần Hưng Đạo chỉ huy đã tiêu diệt hoàn toàn đạo quân Nguyên Mông lần thứ 3.', topic: 'Chống ngoại xâm' },
  { q: '"Bình Ngô đại cáo" là tác phẩm của ai?', opts: ['Lê Lợi', 'Nguyễn Trãi', 'Ngô Sĩ Liên', 'Lê Thánh Tông'], ans: 1, explain: 'Nguyễn Trãi soạn Bình Ngô đại cáo năm 1428, thay Lê Lợi tuyên bố nền độc lập sau khi đuổi quân Minh ra khỏi đất nước.', topic: 'Văn học-Văn hóa' },
  { q: 'Việt Nam tuyên bố độc lập hoàn toàn, thống nhất đất nước vào năm nào?', opts: ['1973', '1975', '1976', '1977'], ans: 1, explain: 'Ngày 30/4/1975, miền Nam hoàn toàn giải phóng. Năm 1976, nước Cộng hòa Xã hội Chủ nghĩa Việt Nam chính thức thành lập.', topic: 'Thời hiện đại' },
// ===== BỔ SUNG: Danh nhân (từ 2 → 12 câu) =====
{ q: 'Nguyễn Trãi là tác giả của áng văn nào tuyên bố nền độc lập sau khi đuổi quân Minh?', opts: ['Hịch tướng sĩ', 'Bình Ngô đại cáo', 'Nam quốc sơn hà', 'Chiếu dời đô'], ans: 1, explain: 'Nguyễn Trãi soạn Bình Ngô đại cáo năm 1428, thay Lê Lợi tuyên bố nền độc lập dân tộc.', topic: 'Danh nhân' },
{ q: 'Ai là tác giả bài thơ thần "Nam quốc sơn hà"?', opts: ['Lý Thường Kiệt', 'Trần Hưng Đạo', 'Nguyễn Trãi', 'Lý Thái Tổ'], ans: 0, explain: 'Lý Thường Kiệt được cho là tác giả bài thơ "Nam quốc sơn hà", vang lên trong cuộc kháng Tống năm 1077.', topic: 'Danh nhân' },
{ q: 'Đại thi hào nào là tác giả Truyện Kiều?', opts: ['Nguyễn Du', 'Nguyễn Trãi', 'Lê Quý Đôn', 'Chu Văn An'], ans: 0, explain: 'Nguyễn Du (1765–1820) là tác giả Truyện Kiều, kiệt tác văn học được UNESCO vinh danh.', topic: 'Danh nhân' },
{ q: 'Ai được tôn là "Vạn thế sư biểu" — người thầy của muôn đời?', opts: ['Lê Quý Đôn', 'Chu Văn An', 'Nguyễn Bỉnh Khiêm', 'Nguyễn Trãi'], ans: 1, explain: 'Chu Văn An (1292–1370) là nhà giáo nổi tiếng thời Trần, được tôn là "Vạn thế sư biểu".', topic: 'Danh nhân' },
{ q: 'Nhà bác học nào được xem là lớn nhất thời phong kiến Việt Nam?', opts: ['Lê Quý Đôn', 'Ngô Sĩ Liên', 'Phan Huy Chú', 'Nguyễn Trãi'], ans: 0, explain: 'Lê Quý Đôn (1726–1784) để lại hàng chục công trình đồ sộ về sử học, địa lý, văn học và triết học.', topic: 'Danh nhân' },
{ q: 'Ai lãnh đạo phong trào Đông Du đưa thanh niên sang Nhật học?', opts: ['Phan Châu Trinh', 'Phan Bội Châu', 'Nguyễn Thái Học', 'Hoàng Hoa Thám'], ans: 1, explain: 'Phan Bội Châu (1867–1940) khởi xướng phong trào Đông Du nhằm tìm con đường cứu nước.', topic: 'Danh nhân' },
{ q: 'Nữ tướng đầu tiên của Quân đội Nhân dân Việt Nam là ai?', opts: ['Võ Thị Sáu', 'Nguyễn Thị Định', 'Bùi Thị Xuân', 'Nguyễn Thị Minh Khai'], ans: 1, explain: 'Nguyễn Thị Định (1920–1992) là nữ tướng đầu tiên, lãnh đạo phong trào Đồng Khởi Bến Tre năm 1960.', topic: 'Danh nhân' },
{ q: 'Ai chỉ huy chiến dịch Điện Biên Phủ năm 1954?', opts: ['Nguyễn Chí Thanh', 'Võ Nguyên Giáp', 'Lê Duẩn', 'Văn Tiến Dũng'], ans: 1, explain: 'Đại tướng Võ Nguyên Giáp chỉ huy chiến dịch Điện Biên Phủ, đánh bại thực dân Pháp năm 1954.', topic: 'Danh nhân' },
{ q: 'Thủ lĩnh khởi nghĩa Yên Bái chống Pháp năm 1930 là ai?', opts: ['Phan Bội Châu', 'Nguyễn Thái Học', 'Hoàng Hoa Thám', 'Phan Châu Trinh'], ans: 1, explain: 'Nguyễn Thái Học (1902–1930) lãnh đạo Việt Nam Quốc dân Đảng, chỉ huy khởi nghĩa Yên Bái năm 1930.', topic: 'Danh nhân' },
{ q: 'Ai chủ trương đường lối cải cách "khai dân trí, chấn dân khí"?', opts: ['Phan Bội Châu', 'Phan Châu Trinh', 'Nguyễn Thái Học', 'Huỳnh Thúc Kháng'], ans: 1, explain: 'Phan Châu Trinh (1872–1926) chủ trương cải cách ôn hòa để nâng cao dân trí, dân khí.', topic: 'Danh nhân' },
{ q: 'Ai là nữ tướng cưỡi voi khởi nghĩa chống quân Đông Ngô năm 248?', opts: ['Bà Triệu', 'Hai Bà Trưng', 'Bùi Thị Xuân', 'Nguyễn Thị Định'], ans: 0, explain: 'Bà Triệu lãnh đạo nghĩa quân chống quân Đông Ngô năm 248, hy sinh anh dũng khi mới 23 tuổi.', topic: 'Danh nhân' },
{ q: 'Trần Quốc Toản nổi tiếng với hành động nào thể hiện lòng yêu nước tuổi trẻ?', opts: ['Bóp nát quả cam', 'Viết Hịch tướng sĩ', 'Chỉ huy trận Bạch Đằng', 'Lập Thiền phái Trúc Lâm'], ans: 0, explain: 'Vì còn nhỏ tuổi không được dự bàn việc nước, Trần Quốc Toản đã bóp nát quả cam trong tay lúc nào không hay.', topic: 'Danh nhân' },
{ q: 'Ai được coi là danh y lớn nhất của y học cổ truyền Việt Nam, tác giả "Hải Thượng Y Tông Tâm Lĩnh"?', opts: ['Tuệ Tĩnh', 'Hải Thượng Lãn Ông', 'Lê Quý Đôn', 'Nguyễn Đình Chiểu'], ans: 1, explain: 'Hải Thượng Lãn Ông (Lê Hữu Trác) để lại bộ sách y học đồ sộ, đặt nền móng cho y học cổ truyền Việt Nam.', topic: 'Danh nhân' },
{ q: 'Ai là tác giả các bản điều trần đề nghị cải cách đất nước cuối thế kỷ 19?', opts: ['Nguyễn Trường Tộ', 'Phan Thanh Giản', 'Trương Định', 'Nguyễn Tri Phương'], ans: 0, explain: 'Nguyễn Trường Tộ gửi nhiều bản điều trần đề nghị triều Nguyễn canh tân đất nước nhưng không được chấp thuận.', topic: 'Danh nhân' },
{ q: 'Nữ anh hùng nào hy sinh tại Côn Đảo khi mới 19 tuổi thời kháng chiến chống Pháp?', opts: ['Võ Thị Sáu', 'Nguyễn Thị Minh Khai', 'Bùi Thị Xuân', 'Nguyễn Thị Định'], ans: 0, explain: 'Võ Thị Sáu tham gia cách mạng từ năm 14 tuổi, hy sinh anh dũng tại Côn Đảo năm 1952.', topic: 'Danh nhân' },
{ q: 'Ai là Tổng Bí thư đầu tiên của Đảng Cộng sản Việt Nam?', opts: ['Trần Phú', 'Lê Hồng Phong', 'Hà Huy Tập', 'Nguyễn Văn Cừ'], ans: 0, explain: 'Trần Phú được bầu làm Tổng Bí thư đầu tiên của Đảng năm 1930, soạn thảo Luận cương chính trị.', topic: 'Danh nhân' },
{ q: 'Vị vua nào lãnh đạo phong trào Duy Tân chống Pháp, sau bị đày sang đảo Réunion?', opts: ['Vua Duy Tân', 'Vua Hàm Nghi', 'Vua Thành Thái', 'Vua Khải Định'], ans: 0, explain: 'Vua Duy Tân tham gia mưu khởi nghĩa chống Pháp năm 1916, thất bại và bị đày sang đảo Réunion.', topic: 'Danh nhân' },
{ q: 'Nguyễn Thị Minh Khai là một trong những nữ chiến sĩ cách mạng tiêu biểu thời kỳ nào?', opts: ['Trước khi thành lập Đảng', 'Đảng Cộng sản thời kỳ đầu', 'Kháng chiến chống Mỹ', 'Thời kỳ Đổi mới'], ans: 1, explain: 'Nguyễn Thị Minh Khai là nữ chiến sĩ cách mạng tiêu biểu thời kỳ đầu của Đảng, hy sinh năm 1941.', topic: 'Danh nhân' },
{ q: 'Triệu Đà sáp nhập Âu Lạc vào lãnh thổ nào, mở đầu hơn 1000 năm Bắc thuộc?', opts: ['Nam Hán', 'Nam Việt', 'Đông Ngô', 'Đại Lý'], ans: 1, explain: 'Sau khi đánh bại An Dương Vương, Triệu Đà sáp nhập Âu Lạc vào Nam Việt, mở đầu hơn 1000 năm Bắc thuộc.', topic: 'Danh nhân' },
{ q: 'Triệu Đà dùng mưu kế gì để đánh bại Âu Lạc của An Dương Vương?', opts: ['Tấn công bất ngờ ban đêm', 'Cho con trai Trọng Thủy cầu hôn Mỵ Châu để đánh cắp nỏ thần', 'Mua chuộc tướng lĩnh', 'Giả vờ cầu hòa rồi phục kích'], ans: 1, explain: 'Trọng Thủy, con trai Triệu Đà, cầu hôn Mỵ Châu rồi lợi dụng lòng tin để đánh cắp bí mật nỏ thần.', topic: 'Danh nhân' },
{ q: 'Lý Bí (Lý Nam Đế) lập ra nhà nước nào sau khi đánh đuổi quân nhà Lương?', opts: ['Đại Cồ Việt', 'Vạn Xuân', 'Âu Lạc', 'Đại Việt'], ans: 1, explain: 'Năm 544, Lý Bí lên ngôi, xưng Lý Nam Đế, đặt tên nước là Vạn Xuân, mong đất nước trường tồn muôn đời.', topic: 'Danh nhân' },
{ q: 'Ai là tướng lĩnh nối tiếp sự nghiệp kháng chiến sau khi Lý Bí qua đời?', opts: ['Phùng Hưng', 'Triệu Quang Phục', 'Mai Thúc Loan', 'Lý Phật Tử'], ans: 1, explain: 'Triệu Quang Phục tiếp tục kháng chiến sau khi Lý Bí mất, dùng chiến thuật đầm Dạ Trạch đánh bại quân Lương, khôi phục Vạn Xuân.', topic: 'Danh nhân' },
{ q: 'Nguyễn Văn Trỗi nổi tiếng với hành động nào trước khi bị xử bắn năm 1964?', opts: ['Đánh bom cầu Công Lý', 'Mưu sát Bộ trưởng Quốc phòng Mỹ McNamara', 'Ám sát viên chức chính quyền Sài Gòn', 'Giải cứu tù chính trị'], ans: 1, explain: 'Nguyễn Văn Trỗi tham gia kế hoạch đặt mìn ám sát Bộ trưởng Quốc phòng Mỹ McNamara khi ông sang thăm Sài Gòn năm 1964, kế hoạch bị bại lộ.', topic: 'Danh nhân' },
{ q: 'Trong truyền thuyết Âu Lạc, Mỵ Châu là con gái của vị vua nào?', opts: ['Hùng Vương', 'An Dương Vương', 'Lý Nam Đế', 'Triệu Đà'], ans: 1, explain: 'Mỵ Châu là con gái An Dương Vương, được gả cho Trọng Thủy — con trai Triệu Đà, dẫn đến bi kịch mất nước Âu Lạc.', topic: 'Danh nhân' },

// ===== BỔ SUNG: Văn học - Văn hóa (từ 3 → 10 câu) =====
{ q: 'Nguyễn Trãi được UNESCO vinh danh là gì?', opts: ['Anh hùng dân tộc', 'Danh nhân văn hóa thế giới', 'Nhà quân sự kiệt xuất', 'Nhà giáo nhân dân'], ans: 1, explain: 'Nguyễn Trãi được UNESCO công nhận là Danh nhân văn hóa thế giới nhờ những đóng góp to lớn về văn học và tư tưởng.', topic: 'Văn học-Văn hóa' },
{ q: '"Truyện Kiều" viết bằng loại chữ nào?', opts: ['Chữ Hán', 'Chữ Nôm', 'Chữ Quốc ngữ', 'Chữ Phạn'], ans: 1, explain: 'Truyện Kiều của Nguyễn Du được viết bằng chữ Nôm, thể hiện đỉnh cao văn học dân tộc.', topic: 'Văn học-Văn hóa' },
{ q: 'Bộ luật nào được ban hành dưới thời vua Lê Thánh Tông?', opts: ['Luật Gia Long', 'Luật Hồng Đức', 'Hình thư', 'Luật Hình sự triều Nguyễn'], ans: 1, explain: 'Vua Lê Thánh Tông ban hành bộ luật Hồng Đức, một trong những bộ luật tiến bộ bậc nhất thời phong kiến.', topic: 'Văn học-Văn hóa' },
{ q: 'Tín ngưỡng thờ cúng Hùng Vương được UNESCO công nhận vào năm nào?', opts: ['2010', '2012', '2015', '2018'], ans: 1, explain: 'Năm 2012, UNESCO công nhận Tín ngưỡng thờ cúng Hùng Vương là di sản văn hóa phi vật thể của nhân loại.', topic: 'Văn học-Văn hóa' },
{ q: 'Ai là tác giả bộ "Đại Việt sử ký toàn thư"?', opts: ['Lê Văn Hưu', 'Ngô Sĩ Liên', 'Phan Huy Chú', 'Lê Quý Đôn'], ans: 1, explain: 'Ngô Sĩ Liên biên soạn "Đại Việt sử ký toàn thư" — bộ chính sử quan trọng bậc nhất của Việt Nam.', topic: 'Văn học-Văn hóa' },
{ q: 'Bộ quốc sử thành văn đầu tiên của Việt Nam là gì?', opts: ['Đại Việt sử ký', 'Đại Việt sử ký toàn thư', 'Đại Nam thực lục', 'Việt sử lược'], ans: 0, explain: 'Lê Văn Hưu soạn "Đại Việt sử ký" thời Trần, là bộ quốc sử thành văn đầu tiên của nước ta.', topic: 'Văn học-Văn hóa' },
{ q: 'Thiền phái Trúc Lâm Yên Tử do ai sáng lập?', opts: ['Trần Thái Tông', 'Trần Nhân Tông', 'Trần Anh Tông', 'Trần Thánh Tông'], ans: 1, explain: 'Vua Trần Nhân Tông sau khi nhường ngôi đã xuất gia, sáng lập Thiền phái Trúc Lâm mang đậm bản sắc Việt.', topic: 'Văn học-Văn hóa' },
{ q: 'Văn Miếu - Quốc Tử Giám, trường đại học đầu tiên của Việt Nam, được xây dựng dưới triều đại nào?', opts: ['Nhà Lý', 'Nhà Trần', 'Nhà Lê', 'Nhà Nguyễn'], ans: 0, explain: 'Văn Miếu được xây năm 1070, Quốc Tử Giám lập năm 1076 dưới triều Lý, là trường đại học đầu tiên của Việt Nam.', topic: 'Văn học-Văn hóa' },
{ q: 'Bia đá tiến sĩ tại Văn Miếu - Quốc Tử Giám ghi danh những ai?', opts: ['Người đỗ đạt qua các khoa thi', 'Các vị vua triều Lý', 'Danh tướng có công', 'Các nhà sư nổi tiếng'], ans: 0, explain: 'Bia tiến sĩ tại Văn Miếu khắc tên những người đỗ đạt trong các khoa thi thời phong kiến, được UNESCO công nhận Di sản Tư liệu Thế giới.', topic: 'Văn học-Văn hóa' },
{ q: 'Chữ Nôm được người Việt sáng tạo dựa trên nền tảng chữ viết nào?', opts: ['Chữ Hán', 'Chữ Phạn', 'Chữ Latinh', 'Chữ Chăm'], ans: 0, explain: 'Chữ Nôm được sáng tạo dựa trên chữ Hán, dùng để ghi âm tiếng Việt, thể hiện ý thức tự chủ văn hóa dân tộc.', topic: 'Văn học-Văn hóa' },
{ q: 'Ai là dịch giả nổi tiếng của "Chinh phụ ngâm" sang chữ Nôm?', opts: ['Đoàn Thị Điểm', 'Hồ Xuân Hương', 'Bà Huyện Thanh Quan', 'Nguyễn Du'], ans: 0, explain: 'Đoàn Thị Điểm được cho là dịch giả bản Nôm nổi tiếng của "Chinh phụ ngâm", nguyên tác chữ Hán của Đặng Trần Côn.', topic: 'Văn học-Văn hóa' },
{ q: 'Nhã nhạc cung đình Huế được UNESCO công nhận là loại hình di sản gì?', opts: ['Di sản văn hóa phi vật thể', 'Di sản thiên nhiên', 'Di sản tư liệu', 'Di sản hỗn hợp'], ans: 0, explain: 'Năm 2003, Nhã nhạc cung đình Huế được UNESCO công nhận là Kiệt tác di sản văn hóa phi vật thể của nhân loại.', topic: 'Văn học-Văn hóa' },
{ q: 'Hát Xoan Phú Thọ, di sản được UNESCO công nhận, có nguồn gốc gắn với thời kỳ nào?', opts: ['Thời Hùng Vương', 'Thời Bắc thuộc', 'Thời Lý - Trần', 'Thời Nguyễn'], ans: 0, explain: 'Hát Xoan gắn liền với tín ngưỡng thờ cúng Hùng Vương, có nguồn gốc từ thời đại các Vua Hùng.', topic: 'Văn học-Văn hóa' },
{ q: 'Ai là tác giả tập thơ "Nhật ký trong tù"?', opts: ['Hồ Chí Minh', 'Tố Hữu', 'Nguyễn Du', 'Xuân Diệu'], ans: 0, explain: 'Hồ Chí Minh viết "Nhật ký trong tù" bằng chữ Hán trong thời gian bị giam giữ tại Trung Quốc (1942-1943).', topic: 'Văn học-Văn hóa' },
{ q: '"Truyền kỳ mạn lục" là tác phẩm nổi tiếng của ai?', opts: ['Nguyễn Dữ', 'Nguyễn Trãi', 'Nguyễn Bỉnh Khiêm', 'Lê Quý Đôn'], ans: 0, explain: 'Nguyễn Dữ, sống thế kỷ 16, là tác giả "Truyền kỳ mạn lục" — tác phẩm văn xuôi chữ Hán nổi tiếng của Việt Nam.', topic: 'Văn học-Văn hóa' },
{ q: 'Áo dài Việt Nam hiện đại được định hình rõ nét vào thời kỳ nào?', opts: ['Đầu thế kỷ 20', 'Thời Hùng Vương', 'Thời Lý - Trần', 'Thời Tây Sơn'], ans: 0, explain: 'Áo dài hiện đại được cách tân vào đầu thế kỷ 20, tiêu biểu là kiểu áo dài Lemur do họa sĩ Cát Tường thiết kế.', topic: 'Văn học-Văn hóa' },
{ q: 'Dưới triều Nguyễn, Quốc Tử Giám được chuyển về đâu?', opts: ['Huế', 'Đà Nẵng', 'Sài Gòn', 'Hải Phòng'], ans: 0, explain: 'Nhà Nguyễn lập Quốc Tử Giám mới tại Huế, kinh đô của triều đại, để đào tạo quan lại cho triều đình.', topic: 'Văn học-Văn hóa' },


// ===== BỔ SUNG: Thời hiện đại (từ 4 → 11 câu) =====
{ q: 'Đảng Cộng sản Việt Nam được thành lập vào ngày nào?', opts: ['2/9/1930', '3/2/1930', '19/8/1945', '30/4/1930'], ans: 1, explain: 'Ngày 3/2/1930, Nguyễn Ái Quốc chủ trì hội nghị hợp nhất, thành lập Đảng Cộng sản Việt Nam.', topic: 'Thời hiện đại' },
{ q: 'Cách mạng Tháng Tám thành công vào năm nào?', opts: ['1943', '1945', '1946', '1954'], ans: 1, explain: 'Năm 1945, nhân dân cả nước tổng khởi nghĩa giành chính quyền, mở đường cho ngày độc lập 2/9.', topic: 'Thời hiện đại' },
{ q: 'Chiến thắng "Điện Biên Phủ trên không" diễn ra vào năm nào?', opts: ['1968', '1972', '1973', '1975'], ans: 1, explain: 'Năm 1972, quân dân Hà Nội đánh bại cuộc tập kích chiến lược bằng B-52 của Mỹ.', topic: 'Thời hiện đại' },
{ q: 'Hiệp định Paris về chấm dứt chiến tranh Việt Nam được ký năm nào?', opts: ['1968', '1972', '1973', '1975'], ans: 2, explain: 'Hiệp định Paris ký năm 1973, Mỹ rút quân khỏi Việt Nam, tạo tiền đề cho thống nhất đất nước.', topic: 'Thời hiện đại' },
{ q: 'Đại hội Đảng nào khởi xướng công cuộc Đổi mới?', opts: ['Đại hội IV', 'Đại hội V', 'Đại hội VI', 'Đại hội VII'], ans: 2, explain: 'Đại hội Đảng lần thứ VI năm 1986 khởi xướng công cuộc Đổi mới toàn diện đất nước.', topic: 'Thời hiện đại' },
{ q: 'Việt Nam gia nhập ASEAN vào năm nào?', opts: ['1990', '1995', '2000', '2007'], ans: 1, explain: 'Năm 1995, Việt Nam chính thức gia nhập ASEAN, đánh dấu bước hội nhập khu vực quan trọng.', topic: 'Thời hiện đại' },
{ q: 'Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO) vào năm nào?', opts: ['1995', '2000', '2007', '2010'], ans: 2, explain: 'Năm 2007, Việt Nam chính thức gia nhập WTO, hội nhập sâu vào kinh tế toàn cầu.', topic: 'Thời hiện đại' },
// --- Thời hiện đại (+9) ---
{ q: 'Nước Việt Nam Dân chủ Cộng hòa được thành lập vào ngày nào?', opts: ['2/9/1945', '19/8/1945', '3/2/1930', '30/4/1975'], ans: 0, explain: 'Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.', topic: 'Thời hiện đại' },
{ q: 'Chiến dịch nào mở đầu cho Tổng tiến công và nổi dậy mùa Xuân 1975?', opts: ['Chiến dịch Tây Nguyên (Buôn Ma Thuột)', 'Chiến dịch Huế - Đà Nẵng', 'Chiến dịch Hồ Chí Minh', 'Chiến dịch Biên giới'], ans: 0, explain: 'Chiến dịch Tây Nguyên với trận then chốt Buôn Ma Thuột (3/1975) mở màn cho Tổng tiến công mùa Xuân 1975.', topic: 'Thời hiện đại' },
{ q: 'Sự kiện Vịnh Bắc Bộ (1964) được Mỹ dùng làm cớ để làm gì?', opts: ['Mở rộng ném bom miền Bắc', 'Rút quân khỏi Việt Nam', 'Ký Hiệp định Paris', 'Đưa quân vào Tây Nguyên'], ans: 0, explain: 'Mỹ dựng lên "sự kiện Vịnh Bắc Bộ" làm cớ leo thang chiến tranh, mở rộng ném bom phá hoại miền Bắc.', topic: 'Thời hiện đại' },
{ q: 'Việt Nam và Mỹ bình thường hóa quan hệ ngoại giao vào năm nào?', opts: ['1991', '1995', '2000', '2006'], ans: 1, explain: 'Năm 1995, Việt Nam và Mỹ chính thức bình thường hóa quan hệ ngoại giao sau nhiều năm đàm phán.', topic: 'Thời hiện đại' },
{ q: 'Công cuộc Đổi mới năm 1986 chuyển nền kinh tế Việt Nam theo hướng nào?', opts: ['Kinh tế thị trường định hướng XHCN', 'Kinh tế kế hoạch hóa tập trung', 'Kinh tế tự cung tự cấp', 'Kinh tế bao cấp toàn phần'], ans: 0, explain: 'Đại hội VI (1986) khởi xướng Đổi mới, chuyển từ kinh tế kế hoạch hóa sang kinh tế thị trường định hướng XHCN.', topic: 'Thời hiện đại' },
{ q: 'Quốc hội khóa đầu tiên của nước Việt Nam Dân chủ Cộng hòa được bầu vào năm nào?', opts: ['1945', '1946', '1954', '1960'], ans: 1, explain: 'Ngày 6/1/1946, cuộc tổng tuyển cử đầu tiên được tổ chức, bầu ra Quốc hội khóa I của nước Việt Nam mới.', topic: 'Thời hiện đại' },
{ q: 'Kế hoạch Nava của thực dân Pháp bị phá sản hoàn toàn sau chiến dịch nào?', opts: ['Điện Biên Phủ', 'Biên giới', 'Hòa Bình', 'Tây Bắc'], ans: 0, explain: 'Chiến thắng Điện Biên Phủ năm 1954 đã đánh bại hoàn toàn kế hoạch Nava, buộc Pháp phải đàm phán tại Genève.', topic: 'Thời hiện đại' },
{ q: 'Việt Nam lần đầu trở thành Ủy viên không thường trực Hội đồng Bảo an Liên Hợp Quốc vào năm nào?', opts: ['2008', '2000', '2013', '1995'], ans: 0, explain: 'Việt Nam trúng cử làm Ủy viên không thường trực Hội đồng Bảo an LHQ nhiệm kỳ 2008-2009.', topic: 'Thời hiện đại' },
{ q: 'Phong trào "Đồng khởi" nổ ra ở Bến Tre vào năm nào?', opts: ['1959', '1960', '1963', '1968'], ans: 1, explain: 'Phong trào Đồng khởi bùng nổ ở Bến Tre năm 1960, đánh dấu bước chuyển quan trọng của cách mạng miền Nam.', topic: 'Thời hiện đại' },
// ===== BỔ SUNG: Triều đại (từ 5 → 11 câu) =====
{ q: 'Nhà Hồ được thành lập vào năm nào?', opts: ['1400', '1407', '1418', '1428'], ans: 0, explain: 'Hồ Quý Ly phế truất nhà Trần, lập ra nhà Hồ vào năm 1400.', topic: 'Triều đại' },
{ q: 'Triều đại nào tồn tại lâu nhất trong lịch sử phong kiến Việt Nam?', opts: ['Nhà Lý', 'Nhà Trần', 'Nhà Lê', 'Nhà Nguyễn'], ans: 2, explain: 'Nhà Lê (Hậu Lê) tồn tại gần 360 năm, là triều đại phong kiến kéo dài nhất lịch sử Việt Nam.', topic: 'Triều đại' },
{ q: 'Ai là vị vua đầu tiên của nhà Trần?', opts: ['Trần Thái Tông', 'Trần Thánh Tông', 'Trần Nhân Tông', 'Trần Anh Tông'], ans: 0, explain: 'Trần Thái Tông (Trần Cảnh) là vị vua đầu tiên của nhà Trần, lên ngôi năm 1225.', topic: 'Triều đại' },
{ q: 'Kinh đô Hoa Lư gắn liền với những triều đại nào?', opts: ['Lý - Trần', 'Đinh - Tiền Lê', 'Lê - Nguyễn', 'Ngô - Lý'], ans: 1, explain: 'Hoa Lư là kinh đô của nhà Đinh và nhà Tiền Lê trước khi Lý Thái Tổ dời đô về Thăng Long.', topic: 'Triều đại' },
{ q: 'Nhà Nguyễn đóng đô ở đâu?', opts: ['Thăng Long', 'Hoa Lư', 'Phú Xuân (Huế)', 'Sài Gòn'], ans: 2, explain: 'Nhà Nguyễn đóng đô tại Phú Xuân (Huế), là triều đại phong kiến cuối cùng của Việt Nam.', topic: 'Triều đại' },
{ q: 'Ai lên ngôi lập ra nhà Nguyễn, lấy niên hiệu Gia Long?', opts: ['Nguyễn Huệ', 'Nguyễn Ánh', 'Nguyễn Phúc Chu', 'Nguyễn Phúc Khoát'], ans: 1, explain: 'Nguyễn Ánh lên ngôi năm 1802, lấy niên hiệu Gia Long, thống nhất đất nước và lập ra nhà Nguyễn.', topic: 'Triều đại' },
{ q: 'Nước Âu Lạc ra đời sau khi An Dương Vương làm gì?', opts: ['Hợp nhất Âu Việt và Lạc Việt', 'Dời đô về Thăng Long', 'Đánh bại quân Nam Hán', 'Ban hành luật Hồng Đức'], ans: 0, explain: 'An Dương Vương hợp nhất bộ tộc Âu Việt và Lạc Việt, lập nên nước Âu Lạc, thay thế Văn Lang.', topic: 'Triều đại' },
{ q: 'Triều đại nào đầu tiên đặt quốc hiệu Đại Cồ Việt?', opts: ['Nhà Ngô', 'Nhà Đinh', 'Nhà Tiền Lê', 'Nhà Lý'], ans: 1, explain: 'Năm 968, Đinh Bộ Lĩnh lên ngôi hoàng đế, đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư.', topic: 'Triều đại' },
{ q: 'Thời kỳ Bắc thuộc của Việt Nam kéo dài khoảng bao nhiêu năm?', opts: ['Khoảng 500 năm', 'Khoảng 700 năm', 'Hơn 1000 năm', 'Khoảng 300 năm'], ans: 2, explain: 'Thời Bắc thuộc kéo dài từ năm 179 TCN đến năm 938, hơn 1000 năm dưới ách đô hộ phương Bắc.', topic: 'Triều đại' },
{ q: 'Nhà Trần lên thay thế triều đại nào?', opts: ['Nhà Lý', 'Nhà Đinh', 'Nhà Ngô', 'Nhà Tiền Lê'], ans: 0, explain: 'Năm 1225, nhà Trần thay thế nhà Lý thông qua cuộc chuyển giao quyền lực do Trần Thủ Độ sắp đặt.', topic: 'Triều đại' },
{ q: 'Ai là vị vua cuối cùng của nhà Lý, nhường ngôi cho nhà Trần?', opts: ['Lý Chiêu Hoàng', 'Lý Huệ Tông', 'Lý Cao Tông', 'Lý Anh Tông'], ans: 0, explain: 'Lý Chiêu Hoàng là nữ hoàng đế cuối cùng của nhà Lý, nhường ngôi cho chồng là Trần Cảnh năm 1225.', topic: 'Triều đại' },
{ q: 'Ba anh em nào đã sáng lập phong trào Tây Sơn?', opts: ['Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ', 'Nguyễn Ánh, Nguyễn Huệ, Nguyễn Nhạc', 'Nguyễn Huệ, Nguyễn Lữ, Nguyễn Trãi', 'Nguyễn Nhạc, Nguyễn Lữ, Nguyễn Ánh'], ans: 0, explain: 'Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ dựng cờ khởi nghĩa Tây Sơn năm 1771.', topic: 'Triều đại' },
{ q: 'Thời kỳ Nam - Bắc triều là cuộc phân tranh giữa hai thế lực nào?', opts: ['Nhà Mạc và Lê trung hưng', 'Trịnh và Nguyễn', 'Lý và Trần', 'Tây Sơn và Nguyễn Ánh'], ans: 0, explain: 'Nam - Bắc triều là cuộc phân tranh giữa nhà Mạc (Bắc triều) và nhà Lê trung hưng (Nam triều) thế kỷ 16.', topic: 'Triều đại' },
{ q: 'Cuộc phân tranh Trịnh - Nguyễn lấy ranh giới tại đâu?', opts: ['Sông Gianh', 'Sông Bến Hải', 'Sông Mã', 'Sông Lam'], ans: 0, explain: 'Sông Gianh (Quảng Bình) là ranh giới phân chia Đàng Trong - Đàng Ngoài suốt thời Trịnh - Nguyễn phân tranh.', topic: 'Triều đại' },
{ q: 'Ai là vị hoàng đế cuối cùng của Việt Nam, thoái vị năm 1945?', opts: ['Bảo Đại', 'Khải Định', 'Thành Thái', 'Duy Tân'], ans: 0, explain: 'Vua Bảo Đại thoái vị ngày 30/8/1945, chấm dứt chế độ quân chủ phong kiến tại Việt Nam.', topic: 'Triều đại' },


// ===== BỔ SUNG: Chống ngoại xâm (từ 6 → 12 câu) =====
{ q: 'Lý Thường Kiệt chủ động tấn công sang đất Tống vào năm nào?', opts: ['1075', '1077', '1010', '1428'], ans: 0, explain: 'Năm 1075, Lý Thường Kiệt chủ động tấn công sang đất Tống để phá tan âm mưu xâm lược.', topic: 'Chống ngoại xâm' },
{ q: 'Ai lãnh đạo phong trào Cần Vương chống Pháp?', opts: ['Vua Hàm Nghi', 'Vua Duy Tân', 'Vua Thành Thái', 'Vua Tự Đức'], ans: 0, explain: 'Vua Hàm Nghi xuống chiếu Cần Vương năm 1885, kêu gọi văn thân sĩ phu cả nước chống Pháp.', topic: 'Chống ngoại xâm' },
{ q: 'Chiến thắng Rạch Gầm – Xoài Mút do ai chỉ huy?', opts: ['Nguyễn Huệ', 'Nguyễn Nhạc', 'Nguyễn Lữ', 'Nguyễn Ánh'], ans: 0, explain: 'Nguyễn Huệ đánh tan 5 vạn quân Xiêm xâm lược trên sông Tiền năm 1785.', topic: 'Chống ngoại xâm' },
{ q: 'Cuộc kháng chiến chống Pháp của nhân dân ta kết thúc bằng chiến thắng nào?', opts: ['Trận Cầu Giấy', 'Điện Biên Phủ', 'Trận Đống Đa', 'Khởi nghĩa Yên Thế'], ans: 1, explain: 'Chiến thắng Điện Biên Phủ năm 1954 buộc thực dân Pháp phải ký Hiệp định Genève, chấm dứt chiến tranh.', topic: 'Chống ngoại xâm' },
{ q: 'Ai lãnh đạo khởi nghĩa Yên Thế kéo dài gần 30 năm chống Pháp?', opts: ['Phan Đình Phùng', 'Hoàng Hoa Thám', 'Nguyễn Thiện Thuật', 'Tống Duy Tân'], ans: 1, explain: 'Hoàng Hoa Thám lãnh đạo khởi nghĩa Yên Thế, cuộc kháng chiến nông dân bền bỉ nhất chống Pháp.', topic: 'Chống ngoại xâm' },
{ q: 'Chiến dịch nào giải phóng vùng biên giới Việt - Trung năm 1950?', opts: ['Chiến dịch Điện Biên Phủ', 'Chiến dịch Biên giới', 'Chiến dịch Tây Bắc', 'Chiến dịch Hòa Bình'], ans: 1, explain: 'Chiến dịch Biên giới năm 1950 giải phóng vùng biên giới, khai thông đường liên lạc quốc tế.', topic: 'Chống ngoại xâm' },
{ q: 'Trận nào tiêu diệt viện binh do Liễu Thăng chỉ huy năm 1427?', opts: ['Chi Lăng', 'Bạch Đằng', 'Tốt Động', 'Ngọc Hồi'], ans: 0, explain: 'Nghĩa quân Lam Sơn phục kích chém Liễu Thăng tại ải Chi Lăng năm 1427, đập tan viện binh nhà Minh.', topic: 'Chống ngoại xâm' },
{ q: 'Chiến thắng Tốt Động - Chúc Động (1426) là bước ngoặt của cuộc khởi nghĩa nào?', opts: ['Khởi nghĩa Lam Sơn', 'Khởi nghĩa Tây Sơn', 'Khởi nghĩa Yên Thế', 'Khởi nghĩa Bãi Sậy'], ans: 0, explain: 'Chiến thắng Tốt Động - Chúc Động giáng đòn nặng vào quân Minh, tạo đà cho khởi nghĩa Lam Sơn phát triển.', topic: 'Chống ngoại xâm' },
{ q: 'Trận Ngọc Hồi - Đống Đa (mùng 5 Tết Kỷ Dậu) nằm trong chiến dịch nào?', opts: ['Đại phá quân Thanh', 'Đại phá quân Nguyên', 'Kháng chiến chống Tống', 'Kháng chiến chống Minh'], ans: 0, explain: 'Ngọc Hồi - Đống Đa là trận quyết chiến then chốt trong chiến dịch đại phá 29 vạn quân Thanh của Quang Trung.', topic: 'Chống ngoại xâm' },
{ q: 'Nguyễn Thiện Thuật lãnh đạo cuộc khởi nghĩa nào chống Pháp cuối thế kỷ 19?', opts: ['Khởi nghĩa Bãi Sậy', 'Khởi nghĩa Yên Thế', 'Khởi nghĩa Ba Đình', 'Khởi nghĩa Hương Khê'], ans: 0, explain: 'Nguyễn Thiện Thuật lãnh đạo khởi nghĩa Bãi Sậy (Hưng Yên) trong phong trào Cần Vương.', topic: 'Chống ngoại xâm' },
{ q: 'Phong trào Cần Vương do vua Hàm Nghi phát động kéo dài đến năm nào?', opts: ['1888', '1892', '1896', '1900'], ans: 2, explain: 'Phong trào Cần Vương kéo dài đến năm 1896, khi Phan Đình Phùng hy sinh và khởi nghĩa Hương Khê tan rã.', topic: 'Chống ngoại xâm' },
{ q: 'Chiến thắng nào buộc quân Nguyên Mông lần 2 phải rút chạy khỏi Thăng Long năm 1285?', opts: ['Chương Dương - Hàm Tử', 'Bạch Đằng', 'Tây Kết', 'Vạn Kiếp'], ans: 0, explain: 'Chiến thắng Chương Dương - Hàm Tử năm 1285 mở đường cho quân Trần tiến vào giải phóng Thăng Long.', topic: 'Chống ngoại xâm' },
{ q: 'Chiến thuật nào được nhà Trần áp dụng cả 3 lần kháng chiến chống Nguyên Mông?', opts: ['Vườn không nhà trống', 'Đánh nhanh thắng nhanh', 'Vây thành diệt viện', 'Tấn công phủ đầu'], ans: 0, explain: 'Kế "vườn không nhà trống" khiến quân Nguyên Mông thiếu lương thực, tạo điều kiện cho quân Trần phản công.', topic: 'Chống ngoại xâm' },
{ q: 'Hoàng Hoa Thám (Đề Thám) lập căn cứ kháng chiến chủ yếu ở đâu?', opts: ['Yên Thế, Bắc Giang', 'Ba Đình, Thanh Hóa', 'Hương Khê, Hà Tĩnh', 'Bãi Sậy, Hưng Yên'], ans: 0, explain: 'Hoàng Hoa Thám xây dựng căn cứ kháng chiến bền vững tại vùng rừng núi Yên Thế, Bắc Giang gần 30 năm.', topic: 'Chống ngoại xâm' },

// ===== BỔ SUNG THÊM (15 câu, 3 câu/chủ đề) =====
{ q: 'Cuộc khởi nghĩa Hai Bà Trưng năm 40 nổ ra đầu tiên tại đâu?', opts: ['Mê Linh', 'Cổ Loa', 'Luy Lâu', 'Hoa Lư'], ans: 0, explain: 'Hai Bà Trưng phất cờ khởi nghĩa tại Mê Linh (nay thuộc Hà Nội), quê hương của Trưng Trắc.', topic: 'Chống ngoại xâm' },
{ q: 'Năm 981, ai chỉ huy quân Đại Cồ Việt đánh bại quân Tống xâm lược?', opts: ['Lê Hoàn', 'Đinh Bộ Lĩnh', 'Ngô Quyền', 'Lý Thái Tổ'], ans: 0, explain: 'Lê Hoàn chỉ huy quân Đại Cồ Việt đánh tan quân Tống xâm lược trên sông Bạch Đằng năm 981.', topic: 'Chống ngoại xâm' },
{ q: 'Trận đánh nào tiêu diệt viện binh Liễu Thăng, buộc Vương Thông xin hòa, kết thúc khởi nghĩa Lam Sơn?', opts: ['Chi Lăng – Xương Giang', 'Tốt Động – Chúc Động', 'Bạch Đằng 1288', 'Ngọc Hồi – Đống Đa'], ans: 0, explain: 'Chiến thắng Chi Lăng – Xương Giang năm 1427 tiêu diệt 10 vạn viện binh Minh, buộc Vương Thông xin hòa, rút quân về nước.', topic: 'Chống ngoại xâm' },
{ q: 'Trần Hưng Đạo là tác giả bộ binh pháp nổi tiếng nào?', opts: ['Vạn Kiếp tông bí truyền thư', 'Binh thư yếu lược toàn tập', 'Hổ trướng khu cơ', 'Hoàng Việt binh thư'], ans: 0, explain: '"Vạn Kiếp tông bí truyền thư" là bộ binh pháp do Trần Hưng Đạo biên soạn, đúc kết kinh nghiệm quân sự của ông.', topic: 'Danh nhân' },
{ q: 'Sau Cách mạng Tháng Tám, Hồ Chí Minh phát động phong trào nào để xóa nạn mù chữ?', opts: ['Bình dân học vụ', 'Đông Kinh Nghĩa Thục', 'Duy Tân', 'Cần Vương'], ans: 0, explain: 'Chủ tịch Hồ Chí Minh phát động phong trào "Bình dân học vụ" năm 1945 nhằm xóa nạn mù chữ cho toàn dân.', topic: 'Danh nhân' },
{ q: 'Nữ sĩ nào nổi tiếng thời trung đại với phong cách thơ Nôm trào phúng, phá cách?', opts: ['Hồ Xuân Hương', 'Đoàn Thị Điểm', 'Bà Huyện Thanh Quan', 'Ngô Chi Lan'], ans: 0, explain: 'Hồ Xuân Hương được mệnh danh là "Bà chúa thơ Nôm" với phong cách thơ trào phúng, táo bạo hiếm có thời trung đại.', topic: 'Danh nhân' },
{ q: 'Vua Gia Long cho ban hành bộ luật nào để cai trị đất nước?', opts: ['Hoàng Việt luật lệ', 'Luật Hồng Đức', 'Quốc triều hình luật', 'Hình thư'], ans: 0, explain: 'Vua Gia Long ban hành "Hoàng Việt luật lệ" (thường gọi luật Gia Long) làm bộ luật chính thức của triều Nguyễn.', topic: 'Triều đại' },
{ q: 'Kinh thành Huế được xây dựng theo kiểu kiến trúc thành lũy nào của châu Âu?', opts: ['Vauban', 'Baroque', 'Gothic', 'La Mã cổ điển'], ans: 0, explain: 'Kinh thành Huế được xây dựng theo kiểu thành lũy Vauban (Pháp), kết hợp với phong thủy phương Đông.', topic: 'Triều đại' },
{ q: 'Nhà Tây Sơn chính thức chấm dứt tồn tại vào năm nào?', opts: ['1802', '1789', '1792', '1788'], ans: 0, explain: 'Năm 1802, Nguyễn Ánh đánh bại triều Tây Sơn, lên ngôi lập ra nhà Nguyễn, chấm dứt vương triều Tây Sơn.', topic: 'Triều đại' },
{ q: 'Bộ sách địa chí nổi tiếng "Phủ biên tạp lục" ghi chép về vùng đất Đàng Trong là tác phẩm của ai?', opts: ['Lê Quý Đôn', 'Trịnh Hoài Đức', 'Phan Huy Chú', 'Ngô Sĩ Liên'], ans: 0, explain: 'Lê Quý Đôn viết "Phủ biên tạp lục" khi làm quan trấn thủ, ghi chép chi tiết về địa lý, kinh tế vùng Thuận Hóa.', topic: 'Văn học-Văn hóa' },
{ q: 'Lễ hội Ok Om Bok là lễ hội truyền thống của dân tộc nào ở Nam Bộ?', opts: ['Khmer', 'Chăm', 'Hoa', 'Ê-đê'], ans: 0, explain: 'Ok Om Bok (lễ cúng trăng) là lễ hội truyền thống quan trọng của đồng bào Khmer Nam Bộ.', topic: 'Văn học-Văn hóa' },
{ q: 'Chợ nổi Cái Răng, nét văn hóa sông nước đặc trưng miền Tây, thuộc tỉnh/thành nào?', opts: ['Cần Thơ', 'Vĩnh Long', 'An Giang', 'Sóc Trăng'], ans: 0, explain: 'Chợ nổi Cái Răng thuộc thành phố Cần Thơ, là một trong những chợ nổi lớn và nổi tiếng nhất miền Tây Nam Bộ.', topic: 'Văn học-Văn hóa' },
{ q: 'Hội nghị Thượng đỉnh Mỹ - Triều lần thứ 2 được tổ chức tại Hà Nội vào năm nào?', opts: ['2019', '2017', '2020', '2018'], ans: 0, explain: 'Tháng 2/2019, Hà Nội đăng cai tổ chức Hội nghị Thượng đỉnh Mỹ - Triều lần thứ 2, thu hút sự chú ý của thế giới.', topic: 'Thời hiện đại' },
{ q: 'Đại lễ kỷ niệm 1000 năm Thăng Long - Hà Nội được tổ chức vào năm nào?', opts: ['2010', '2000', '2005', '2015'], ans: 0, explain: 'Năm 2010, Việt Nam tổ chức Đại lễ kỷ niệm 1000 năm Thăng Long - Hà Nội, đánh dấu tròn một thiên niên kỷ kể từ khi Lý Thái Tổ dời đô.', topic: 'Thời hiện đại' },
{ q: 'Việt Nam trúng cử Ủy viên không thường trực Hội đồng Bảo an LHQ nhiệm kỳ 2020-2021 vào năm nào?', opts: ['2019', '2018', '2020', '2017'], ans: 0, explain: 'Năm 2019, Việt Nam trúng cử với số phiếu gần như tuyệt đối, đảm nhiệm vai trò Ủy viên không thường trực HĐBA LHQ nhiệm kỳ 2020-2021.', topic: 'Thời hiện đại' },
];

// ⏳ KIỂU CÂU HỎI MỚI: SẮP XẾP THEO ĐÚNG TRÌNH TỰ THỜI GIAN
// items được lưu theo ĐÚNG thứ tự thời gian — lúc chơi sẽ bị xáo trộn ngẫu nhiên
const orderQuizData = [
  {
    type: 'order',
    topic: 'Chống ngoại xâm',
    q: 'Sắp xếp các chiến thắng sau theo đúng trình tự thời gian (từ sớm nhất đến muộn nhất):',
    items: ['Trận Bạch Đằng — Ngô Quyền (938)', 'Đại phá quân Nguyên Mông lần 3 (1288)', 'Khởi nghĩa Lam Sơn toàn thắng (1428)', 'Đại phá quân Thanh (1789)'],
    explain: 'Thứ tự đúng: Bạch Đằng 938 → Bạch Đằng 1288 (chống Nguyên Mông) → Lam Sơn toàn thắng 1428 → Đại phá quân Thanh 1789.',
  },
  {
    type: 'order',
    topic: 'Triều đại',
    q: 'Sắp xếp các triều đại sau theo đúng trình tự xuất hiện trong lịch sử:',
    items: ['Nhà Đinh (968)', 'Nhà Lý (1009)', 'Nhà Trần (1225)', 'Nhà Nguyễn (1802)'],
    explain: 'Thứ tự xuất hiện: Đinh → Lý → Trần → Nguyễn, trải dài từ thế kỷ 10 đến thế kỷ 19.',
  },
  {
    type: 'order',
    topic: 'Thời hiện đại',
    q: 'Sắp xếp các sự kiện sau theo đúng trình tự thời gian:',
    items: ['Thành lập Đảng Cộng sản Việt Nam (1930)', 'Cách mạng Tháng Tám thành công (1945)', 'Chiến thắng Điện Biên Phủ (1954)', 'Ngày thống nhất đất nước (1975)'],
    explain: 'Bốn cột mốc lớn của lịch sử hiện đại: 1930 → 1945 → 1954 → 1975.',
  },
  {
    type: 'order',
    topic: 'Danh nhân',
    q: 'Sắp xếp các danh nhân sau theo đúng trình tự thời gian họ sống/hoạt động:',
    items: ['Hai Bà Trưng (thế kỷ 1)', 'Lý Thường Kiệt (thế kỷ 11)', 'Nguyễn Trãi (thế kỷ 15)', 'Hồ Chí Minh (thế kỷ 20)'],
    explain: 'Trải dài gần 2000 năm lịch sử: từ Hai Bà Trưng thời Bắc thuộc đến Hồ Chí Minh thời hiện đại.',
  },
];

// 🔗 KIỂU CÂU HỎI MỚI: GHÉP CẶP
const matchQuizData = [
  {
    type: 'match',
    topic: 'Danh nhân',
    q: 'Ghép mỗi nhân vật với tác phẩm/dấu ấn nổi bật của họ:',
    pairs: [
      { left: 'Nguyễn Trãi', right: 'Bình Ngô đại cáo' },
      { left: 'Trần Hưng Đạo', right: 'Hịch tướng sĩ' },
      { left: 'Lý Thường Kiệt', right: 'Nam quốc sơn hà' },
      { left: 'Nguyễn Du', right: 'Truyện Kiều' },
    ],
    explain: 'Mỗi danh nhân đều gắn liền với một tác phẩm để đời — cách dễ nhớ nhất khi ôn sử!',
  },
  {
    type: 'match',
    topic: 'Chống ngoại xâm',
    q: 'Ghép mỗi vị tướng/thủ lĩnh với chiến thắng do họ chỉ huy:',
    pairs: [
      { left: 'Ngô Quyền', right: 'Bạch Đằng 938' },
      { left: 'Lê Lợi', right: 'Khởi nghĩa Lam Sơn' },
      { left: 'Quang Trung', right: 'Đại phá quân Thanh' },
      { left: 'Võ Nguyên Giáp', right: 'Điện Biên Phủ' },
    ],
    explain: 'Mỗi cuộc kháng chiến lớn đều gắn liền với tên tuổi một vị chỉ huy trong sử sách.',
  },
  {
    type: 'match',
    topic: 'Triều đại',
    q: 'Ghép mỗi vị vua với kinh đô/dấu mốc gắn liền với họ:',
    pairs: [
      { left: 'Đinh Bộ Lĩnh', right: 'Hoa Lư' },
      { left: 'Lý Thái Tổ', right: 'Dời đô về Thăng Long' },
      { left: 'Gia Long', right: 'Phú Xuân (Huế)' },
      { left: 'An Dương Vương', right: 'Thành Cổ Loa' },
    ],
    explain: 'Kinh đô hoặc công trình gắn liền chính là "dấu vân tay" giúp nhận diện từng vị vua.',
  },
  {
    type: 'match',
    topic: 'Văn học-Văn hóa',
    q: 'Ghép mỗi di sản với loại hình được UNESCO công nhận:',
    pairs: [
      { left: 'Nhã nhạc cung đình Huế', right: 'Di sản văn hóa phi vật thể' },
      { left: 'Bia tiến sĩ Văn Miếu', right: 'Di sản Tư liệu Thế giới' },
      { left: 'Truyện Kiều', right: 'Kiệt tác văn học chữ Nôm' },
      { left: 'Nguyễn Trãi', right: 'Danh nhân văn hóa thế giới' },
    ],
    explain: 'Việt Nam có nhiều di sản được UNESCO vinh danh ở các hạng mục khác nhau — mỗi loại một ý nghĩa riêng.',
  },
];

// 🧙 Ngân hàng mẹo nhớ vui theo chủ đề — KHÔNG lộ đáp án cụ thể
const SAGE_TIPS = {
  'Chống ngoại xâm': [
    'Mẹo nhỏ: các trận đánh lớn thường gắn với dòng sông hoặc địa danh cụ thể — thử nhớ theo "trận nào, sông nào" nhé!',
    'Bí kíp: những cuộc kháng chiến oanh liệt thường có một vị tướng gắn liền với tên tuổi — ai là "linh hồn" của trận đánh này?',
    'Gợi ý: để ý xem câu hỏi nhắc đến quân xâm lược nào — Nam Hán, Tống, Nguyên Mông, Minh hay Thanh — mỗi thời một "khắc tinh" riêng đấy!',
  ],
  'Danh nhân': [
    'Mẹo nhỏ: mỗi danh nhân thường gắn với MỘT dấu ấn nổi bật nhất — một trận đánh, một tác phẩm, hay một câu nói để đời.',
    'Bí kíp: thử liên tưởng đến hình ảnh hay biểu tượng thường thấy về nhân vật này ở sách giáo khoa nhé!',
    'Gợi ý: để ý mốc thời gian trong câu hỏi — nó thường là "chìa khóa" giúp khoanh vùng đúng nhân vật.',
  ],
  'Triều đại': [
    'Mẹo nhỏ: thử nhớ theo thứ tự triều đại — Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ, Hậu Lê, Nguyễn — xem sự kiện rơi vào giai đoạn nào.',
    'Bí kíp: tên kinh đô thường là gợi ý tốt — Hoa Lư, Thăng Long, Phú Xuân... mỗi nơi gắn với một giai đoạn riêng!',
    'Gợi ý: để ý xem câu hỏi nói về việc "dựng nước", "dời đô" hay "ban luật" — mỗi loại sự kiện thường gắn với một triều đại đặc trưng.',
  ],
  'Văn học-Văn hóa': [
    'Mẹo nhỏ: thử nhớ theo thể loại — thơ, sử ký, luật pháp — mỗi thể loại thường có "cha đẻ" riêng biệt.',
    'Bí kíp: nhiều tác phẩm nổi tiếng gắn liền với chữ Nôm hoặc chữ Hán — để ý xem câu hỏi có nhắc đến không nhé!',
    'Gợi ý: các danh hiệu như "Danh nhân văn hóa thế giới" hay "Vạn thế sư biểu" thường đi kèm một cái tên quen thuộc trong sách sử.',
  ],
  'Thời hiện đại': [
    'Mẹo nhỏ: thử sắp mốc thời gian theo trình tự — 1930, 1945, 1954, 1975 — mỗi năm là một cột mốc lớn của dân tộc.',
    'Bí kíp: để ý xem sự kiện liên quan đến kháng Pháp, kháng Mỹ, hay thời kỳ Đổi mới — mỗi giai đoạn có "nhân vật chính" riêng.',
    'Gợi ý: nhiều câu hỏi hiện đại xoay quanh các hiệp định hoặc đại hội quan trọng — thử nhớ theo "văn kiện nào, năm nào" nhé!',
  ],
};
const SAGE_TIPS_GENERIC = [
  'Mẹo nhỏ: đọc kỹ lại câu hỏi một lần nữa — đôi khi đáp án nằm ngay trong cách diễn đạt của câu hỏi đấy!',
  'Bí kíp: thử loại trừ đáp án nghe "sai sai" hoặc không liên quan trước, rồi cân nhắc giữa các lựa chọn còn lại.',
  'Gợi ý: liên tưởng đến những gì đã học ở lớp — có thể câu hỏi này khá quen thuộc trong sách giáo khoa lịch sử!',
];

let comboStreak = 0;
let maxCombo = 0;
let lifelineFiftyUsed = false;
let lifelineSkipUsed = false;
let lifelineSageUsed = false;
let qIndex = 0, qScore = 0;
let q3Timer = null, q3TimeLeft = 20;

// Câu hỏi đã từng trả lời ĐÚNG (dùng q.q làm khóa, vì cả câu trắc nghiệm/order/match đều có field q)
// Lưu vĩnh viễn để chặn cộng XP toàn cục nhiều lần cho cùng 1 câu khi chơi lại
function getG3AnsweredCorrectSet() {
  return loadProgress('g3_answered_correct', []);
}
function markG3AnsweredCorrect(qText) {
  const set = getG3AnsweredCorrectSet();
  if (!set.includes(qText)) {
    set.push(qText);
    saveProgress('g3_answered_correct', set);
    return true; // lần đầu tiên
  }
  return false; // đã từng đúng câu này trước đó
}
let activeQuizData = [];
let selectedTopic = 'Tất cả';
let quizMode = '1player'; // '1player' | '1v1'
let currentPlayer = 1;
let p1Score = 0, p2Score = 0;
// 🏟️ Đấu trường 1v1: thanh máu + cướp điểm
let p1Lives = 3, p2Lives = 3;
let stealMode = false;
let arenaWinnerByLives = null;
// 📖 Nhật ký trả lời để "Xem lại đáp án" ở màn kết quả
let answerLog = [];
// 📖 Cốt truyện: chương hiện tại đang chơi (để hiện đúng lời dẫn/kết của nhân vật)
let currentChapterTopic = null;
comboStreak = 0;
maxCombo = 0;
lifelineFiftyUsed = false;
lifelineSkipUsed = false;
lifelineSageUsed = false;

// 👹 3 câu hỏi cuối cùng của lượt chơi = pha đấu Boss (bộ đề phải có hơn 3 câu)
function isBossQuestion() {
  return activeQuizData.length > 3 && qIndex >= activeQuizData.length - 3;
}

// 🃏 Đọc buff XP từ thẻ sưu tầm (nếu collection.js đã load)
function getTopicBuffMultiplier(topic) {
  return typeof getCardBuffMultiplier === 'function' ? getCardBuffMultiplier(topic) : 1;
}

// 🎭 Nhân vật lịch sử "phản hồi" theo từng chủ đề
const HISTORY_COMPANIONS = {
  'Chống ngoại xâm': { name: 'Trần Hưng Đạo', emoji: '🛡️' },
  'Văn học-Văn hóa': { name: 'Nguyễn Trãi', emoji: '📜' },
  'Danh nhân': { name: 'Hồ Chí Minh', emoji: '🎓' },
  'Triều đại': { name: 'Lý Thái Tổ', emoji: '👑' },
  'Thời hiện đại': { name: 'Võ Nguyên Giáp', emoji: '🎖️' },
};
const HISTORY_COMPANION_DEFAULT = { name: 'Sử Việt', emoji: '📖' };

// 👹 Tên Boss theo từng chủ đề + số máu Boss (3 đòn = 3 câu hỏi liên tiếp)
const BOSS_NAMES = {
  'Chống ngoại xâm': 'Quân Nguyên Mông',
  'Danh nhân': 'Bóng Ma Thời Gian',
  'Triều đại': 'Loạn Thế Sứ Quân',
  'Văn học-Văn hóa': 'Ma Trận Cổ Văn',
  'Thời hiện đại': 'Giặc Ngoại Xâm',
};
const BOSS_NAME_DEFAULT = 'Trùm Cuối Sử Việt';
const BOSS_MAX_HEALTH = 3;
let bossHealth = BOSS_MAX_HEALTH;

// 💬 Lời thoại nhân vật đồng hành trên màn kết quả, theo mức thành tích
const RESULT_SPEECH = {
  perfect: (name) => `${name}: Xuất chúng! Con đã nắm vững sử nước nhà!`,
  good: (name) => `${name}: Khá lắm! Tiếp tục rèn luyện nhé!`,
  ok: (name) => `${name}: Tạm ổn, nhưng cần chăm chỉ hơn đấy!`,
  fail: (name) => `${name}: Đừng nản lòng, thất bại là mẹ thành công!`,
};

function ensureCompanionEl() {
  let el = document.getElementById('history-companion');
  if (!el) {
    el = document.createElement('div');
    el.id = 'history-companion';
    el.innerHTML = `<span class="companion-emoji" id="companion-emoji">📖</span><span id="companion-text"></span>`;
    document.body.appendChild(el);
  }
  return el;
}

function reactCompanion(topic, isCorrect) {
  const el = ensureCompanionEl();
  const info = HISTORY_COMPANIONS[topic] || HISTORY_COMPANION_DEFAULT;
  document.getElementById('companion-emoji').textContent = info.emoji;
  document.getElementById('companion-text').textContent = isCorrect
    ? `${info.name}: Chuẩn lắm!`
    : `${info.name}: Chưa đúng rồi!`;
  el.classList.remove('companion-nod', 'companion-shake', 'show');
  void el.offsetWidth; // reflow để chạy lại animation
  el.classList.add('show', isCorrect ? 'companion-nod' : 'companion-shake');
  clearTimeout(window.__companionHideTimer);
  window.__companionHideTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

// 👹 Khung thanh máu Boss — chèn động vào đầu quiz-card
function ensureBossHealthEl() {
  let el = document.getElementById('boss-health-wrap');
  if (!el) {
    el = document.createElement('div');
    el.id = 'boss-health-wrap';
    el.innerHTML = `
      <div class="boss-health-name" id="boss-health-name"></div>
      <div class="boss-health-track"><div class="boss-health-fill" id="boss-health-fill"></div></div>
    `;
    const quizCard = document.getElementById('quiz-card');
    const questionEl = document.getElementById('quiz-question');
    if (quizCard && questionEl) quizCard.insertBefore(el, questionEl);
    else document.body.appendChild(el);
  }
  return el;
}

// 💬 Câu thoại chiến thắng của nhân vật lịch sử khi hạ gục Boss
const BOSS_VICTORY_QUOTES = {
  'Chống ngoại xâm': 'Trần Hưng Đạo: "Khoan thư sức dân để làm kế sâu rễ bền gốc" — con đã xứng danh hậu thế!',
  'Danh nhân': 'Hồ Chí Minh: "Không có việc gì khó, chỉ sợ lòng không bền" — con đã chứng minh điều đó!',
  'Triều đại': 'Lý Thái Tổ: "Dời đô để mưu nghiệp lớn" — con đã nắm vững cơ nghiệp cha ông!',
  'Văn học-Văn hóa': 'Nguyễn Trãi: "Việc nhân nghĩa cốt ở yên dân" — con đã thấu hiểu hồn cốt văn hóa Việt!',
  'Thời hiện đại': 'Võ Nguyên Giáp: "Thần tốc, táo bạo, chắc thắng" — trận này con đã thắng thần tốc!',
};
const BOSS_VICTORY_QUOTE_DEFAULT = 'Sử Việt: Con đã hạ gục Boss lịch sử — quá xuất sắc!';

// 📖 Cốt truyện xuyên suốt: mỗi chủ đề = 1 chương, có lời dẫn trước và lời kết sau khi hoàn thành
const CHAPTER_STORY = {
  'Chống ngoại xâm': {
    intro: ['Trần Hưng Đạo: Ngoại xâm bao phen tràn tới, nhưng đất Việt chưa một lần khuất phục.', 'Con đã sẵn sàng ôn lại những trận đánh làm nên khí phách dân tộc chưa?'],
    outro: ['Trần Hưng Đạo: "Khoan thư sức dân để làm kế sâu rễ bền gốc" — con đã thấu hiểu tinh thần ấy!'],
  },
  'Danh nhân': {
    intro: ['Hồ Chí Minh: Mỗi danh nhân là một ngọn đèn soi đường cho dân tộc.', 'Hãy cùng ta điểm lại những tên tuổi đã làm rạng danh sử Việt.'],
    outro: ['Hồ Chí Minh: "Không có việc gì khó, chỉ sợ lòng không bền" — con đã chứng minh điều đó!'],
  },
  'Triều đại': {
    intro: ['Lý Thái Tổ: Từ Văn Lang đến Đại Việt, bao triều đại đã dựng xây cơ đồ.', 'Con đã nắm vững dòng chảy các triều đại chưa?'],
    outro: ['Lý Thái Tổ: "Dời đô để mưu nghiệp lớn" — con đã nắm vững cơ nghiệp cha ông!'],
  },
  'Văn học-Văn hóa': {
    intro: ['Nguyễn Trãi: Còn văn hóa là còn dân tộc.', 'Hãy cùng ta ôn lại những áng văn, di sản để đời.'],
    outro: ['Nguyễn Trãi: "Việc nhân nghĩa cốt ở yên dân" — con đã thấu hiểu hồn cốt văn hóa Việt!'],
  },
  'Thời hiện đại': {
    intro: ['Võ Nguyên Giáp: Từ 1930 đến 1975, dân tộc ta đã đi một chặng đường thần tốc.', 'Con đã sẵn sàng ôn lại những cột mốc lịch sử hiện đại chưa?'],
    outro: ['Võ Nguyên Giáp: "Thần tốc, táo bạo, chắc thắng" — trận này con đã thắng thần tốc!'],
  },
  'Chương đặc biệt': {
    intro: ['Sử Việt: Con đã hoàn thành cả 5 chương lịch sử!', 'Giờ là lúc đối mặt thử thách tổng hợp — pha Boss hội tụ mọi thời kỳ!'],
    outro: ['Sử Việt: Con đã chinh phục toàn bộ dòng chảy lịch sử dân tộc — một Nhà Sử Học thực thụ!'],
  },
};
const CHAPTER_ORDER = ['Chống ngoại xâm', 'Danh nhân', 'Triều đại', 'Văn học-Văn hóa', 'Thời hiện đại'];

function getCompletedChapters() {
  return loadProgress('g3_chapters_completed', []);
}
function markChapterCompleted(topic) {
  const done = getCompletedChapters();
  if (!done.includes(topic)) {
    done.push(topic);
    saveProgress('g3_chapters_completed', done);
  }
  return done;
}
function isSpecialChapterUnlocked() {
  const done = getCompletedChapters();
  return CHAPTER_ORDER.every(t => done.includes(t));
}

function highlightExplainNumbers(text) {
  return text.replace(/(\d{2,4}\s?(?:TCN|SCN)?)/g, '<strong>$1</strong>');
}
function renderExplainBox(el, explain, isCorrect) {
  el.innerHTML = `<span class="explain-icon">📖</span><span class="explain-body">${highlightExplainNumbers(explain)}</span>`;
  el.className = 'quiz-explain show' + (isCorrect ? '' : ' wrong');
}

// 🎨 CSS cho hiệu ứng Boss + nhân vật đồng hành (chèn 1 lần duy nhất)
function injectGame3ExtraStyles() {
  if (document.getElementById('game3-extra-styles')) return;
  const style = document.createElement('style');
  style.id = 'game3-extra-styles';
  style.textContent = `
    @keyframes bossShake {
      0%,100% { transform: translate(0,0); }
      10% { transform: translate(-6px,4px); }
      20% { transform: translate(6px,-4px); }
      30% { transform: translate(-6px,-4px); }
      40% { transform: translate(6px,4px); }
      50% { transform: translate(-4px,2px); }
      60% { transform: translate(4px,-2px); }
      70% { transform: translate(-3px,3px); }
      80% { transform: translate(3px,-3px); }
      90% { transform: translate(-2px,1px); }
    }
    .boss-shake { animation: bossShake 0.5s ease; }
    .boss-mode {
      border: 3px solid #C0392B !important;
      box-shadow: 0 0 30px rgba(192,57,43,0.55) !important;
    }
    @keyframes bossPulse {
      0%,100% { transform: scale(1); }
      50% { transform: scale(1.07); }
    }
    .boss-label {
      display:inline-block;background:#C0392B;color:#fff;font-weight:900;
      padding:6px 16px;border-radius:999px;margin-bottom:10px;
      animation: bossPulse 1s infinite;
    }
    #boss-health-wrap {
      display:none; max-width:360px; margin:0 auto 14px;
    }
    #boss-health-wrap.show { display:block; }
    .boss-health-name {
      text-align:center; font-weight:900; color:#C0392B; margin-bottom:6px;
      font-size:0.95rem; letter-spacing:0.5px;
    }
    .boss-health-track {
      height:16px; border-radius:999px; background:rgba(192,57,43,0.15);
      border:2px solid #C0392B; overflow:hidden;
    }
    .boss-health-fill {
      height:100%; background:linear-gradient(90deg,#ff6b4a,#C0392B);
      transition: width 0.4s ease;
    }
    #history-companion {
      position:fixed;bottom:20px;right:20px;background:#1A2A4A;color:#fff;
      border-radius:16px;padding:10px 16px;display:flex;align-items:center;gap:8px;
      box-shadow:0 6px 20px rgba(0,0,0,0.3);z-index:500;font-weight:700;font-size:0.85rem;
      transform: translateY(140%); transition: transform 0.3s ease;
    }
    #history-companion.show { transform: translateY(0); }
    #history-companion .companion-emoji { font-size:1.8rem; }
    @keyframes nodAnim {
      0%,100% { transform: rotate(0deg); }
      25% { transform: rotate(-10deg); }
      75% { transform: rotate(10deg); }
    }
    @keyframes shakeHeadAnim {
      0%,100% { transform: translateX(0); }
      25% { transform: translateX(-6px); }
      75% { transform: translateX(6px); }
    }
    .companion-nod .companion-emoji { animation: nodAnim 0.5s ease 2; display:inline-block; }
    .companion-shake .companion-emoji { animation: shakeHeadAnim 0.4s ease 2; display:inline-block; }

    .quiz-explain.show {
      display: flex; align-items: center; gap: 18px;
      background: linear-gradient(135deg, #fff8e8 0%, #fdecc8 100%) !important;
      border-left: 8px solid #f5a623; border-radius: 20px;
      padding: 18px 24px; box-shadow: 0 8px 24px rgba(245,166,35,0.15);
      font-size: 1rem; line-height: 1.5; color: #1e2a4a;
    }
    .quiz-explain.show.wrong { border-left-color: #C0392B; }
    .quiz-explain.show .explain-icon { font-size: 2rem; flex-shrink: 0; }
    .quiz-explain.show .explain-body strong { color: #e8710a; font-weight: 800; }

    /* 🎨 Màn kết quả Quiz — thiết kế lại theo mức độ thành tích */
   /* 🎨 Màn kết quả Quiz — phong cách sắc phong giấy cổ */
    .result-screen {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      background: linear-gradient(160deg, #FBF0D9 0%, #F3E0B8 100%) !important;
      color: #3D2510 !important;
      padding: 36px 28px 28px !important;
    }
    .result-screen.result-pop { animation: resultPopIn 0.55s cubic-bezier(0.34,1.56,0.64,1); }
    @keyframes resultPopIn {
      0% { transform: scale(0.85); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
    .result-screen.tier-fail, .result-screen.tier-ok,
    .result-screen.tier-good, .result-screen.tier-perfect {
      background: linear-gradient(160deg, #FBF0D9 0%, #F3E0B8 100%) !important;
    }

    .result-screen .result-trophy {
      display: flex; align-items: center; justify-content: center;
      width: 92px; height: 92px; margin: 0 auto 14px;
      border-radius: 50%; font-size: 2.5rem;
      background: radial-gradient(circle at 35% 30%, #fff3d0, #e8b64a 55%, #a9761f 100%);
      border: 4px solid #8B0000;
      box-shadow: 0 8px 22px rgba(139,0,0,0.35), inset 0 0 0 3px rgba(255,255,255,0.3);
      animation: trophyBreathe 2s ease-in-out infinite;
    }
    @keyframes trophyBreathe {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.06); }
    }

    #result-title { color: #8B0000 !important; font-weight: 900 !important; }
    #result-sub { color: #6b4a1f !important; font-weight: 600 !important; }

    .result-screen .final-score {
      display: inline-block;
      font-size: 2.6rem; font-weight: 900;
      color: #8B0000 !important;
      background: #fff8e7;
      border: 3px solid #E8B64A;
      border-radius: 18px;
      padding: 4px 26px;
      -webkit-text-fill-color: initial;
    }

    .result-screen .badge-grid .badge {
      opacity: 0;
      transform: translateY(14px) scale(0.85);
      animation: badgePopIn 0.45s ease forwards;
      background: linear-gradient(180deg, #E8B64A, #C9861F);
      color: #3D2510; font-weight: 800; font-size: 0.8rem;
      padding: 8px 14px; border-radius: 999px;
      border: 1px solid rgba(139,0,0,0.25);
      box-shadow: 0 3px 8px rgba(0,0,0,0.15);
    }
    @keyframes badgePopIn {
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .result-screen .replay-btn {
      background: #8B0000 !important; color: #fff8e7 !important;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .result-screen .replay-btn:hover {
      transform: translateY(-3px) scale(1.04);
      box-shadow: 0 10px 24px rgba(139,0,0,0.35);
    }

    .confetti-piece {
      position: absolute; top: -12px; width: 8px; height: 14px;
      opacity: 0.9; pointer-events: none;
      animation-name: confettiFall; animation-timing-function: linear;
      animation-fill-mode: forwards; z-index: 2;
    }
    @keyframes confettiFall {
      to { transform: translateY(520px) rotate(540deg); opacity: 0; }
    }

    #quiz-result .result-screen {
      background-color: #FBF0D9 !important;
      background-image:
        radial-gradient(circle at 1px 1px, rgba(139,0,0,0.08) 1px, transparent 0),
        linear-gradient(160deg, #FBF0D9 0%, #F3E0B8 100%) !important;
      background-size: 18px 18px, 100% 100% !important;
      border-top: 14px solid #8B0000 !important;
      border-bottom: 14px solid #8B0000 !important;
      box-shadow: inset 0 0 60px rgba(139,0,0,0.08), 0 10px 30px rgba(0,0,0,0.3) !important;
    }

    .result-companion {
      display: flex; align-items: center; gap: 14px;
      justify-content: center; margin: 14px auto 18px; max-width: 460px;
    }
    .result-companion-avatar {
      font-size: 3rem; flex-shrink: 0;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.25));
      animation: nodAnim 1.6s ease-in-out infinite;
    }
    .result-companion-bubble {
      position: relative;
      background: #fff8e7; color: #3D2510;
      border: 1px solid #d9c69a;
      border-radius: 14px; padding: 10px 16px;
      font-weight: 700; font-size: 0.9rem; text-align: left;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .result-companion-bubble::before {
      content: '';
      position: absolute; left: -8px; top: 50%; transform: translateY(-50%);
      border-width: 8px 10px 8px 0;
      border-style: solid;
      border-color: transparent #fff8e7 transparent transparent;
    }

    .result-compare, .result-weak {
      text-align: center; font-weight: 700; font-size: 0.9rem;
      color: #6b4a1f; margin-bottom: 8px;
    }

    .result-actions-row {
      display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;
      margin: 16px 0 10px;
    }
    .chest-btn, .review-toggle-btn {
      border: none; border-radius: 999px; padding: 10px 20px;
      font-weight: 800; font-size: 0.85rem; cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .chest-btn {
      background: linear-gradient(135deg, #E8B64A, #C9861F); color: #3D2510;
    }
    .chest-btn:hover:not(:disabled) { transform: translateY(-2px) scale(1.04); box-shadow: 0 6px 16px rgba(169,118,31,0.4); }
    .chest-btn:disabled { opacity: 0.85; cursor: default; }
    .chest-btn.chest-opened { animation: chestPop 0.4s ease; }
    @keyframes chestPop {
      0% { transform: scale(1); } 50% { transform: scale(1.15); } 100% { transform: scale(1); }
    }
    .review-toggle-btn { background: #8B0000; color: #fff8e7; }
    .review-toggle-btn:hover { transform: translateY(-2px) scale(1.04); box-shadow: 0 6px 16px rgba(139,0,0,0.3); }

    .answer-review-panel {
      max-height: 0; overflow: hidden; transition: max-height 0.4s ease;
      text-align: left; margin-top: 4px;
    }
    .answer-review-panel.open { max-height: 1000px; overflow-y: auto; }
    .review-item { padding: 10px 14px; border-radius: 10px; margin-bottom: 8px; font-size: 0.85rem; }
    .review-item.correct { background: rgba(46,107,31,0.1); }
    .review-item.wrong { background: rgba(139,0,0,0.08); }
    .review-q { font-weight: 700; margin-bottom: 4px; color: #3D2510; }
    .review-explain { opacity: 0.85; font-size: 0.8rem; color: #6b4a1f; }

    #chapter-story-overlay {
      position: fixed; inset: 0; background: rgba(26,42,74,0.92);
      display: flex; align-items: center; justify-content: center;
      z-index: 900; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
    }
    #chapter-story-overlay.show { opacity: 1; pointer-events: auto; }

    .chapter-story-card {
      position: relative;
      overflow: hidden;
      background: linear-gradient(160deg, #FDECC8 0%, #FBDFAE 55%, #F8D08E 100%);
      border: 2px solid #E8C27A;
      border-radius: 28px;
      padding: 36px 32px 30px;
      max-width: 440px;
      text-align: center;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset, 0 16px 45px rgba(0,0,0,0.4);
      transform: translateY(20px);
      transition: transform 0.3s ease;
    }
    #chapter-story-overlay.show .chapter-story-card { transform: translateY(0); }
    .chapter-story-card::before,
    .chapter-story-card::after {
      content: '';
      position: absolute;
      bottom: -10px;
      width: 160px; height: 100px;
      background: radial-gradient(circle, rgba(217,164,65,0.35), transparent 70%);
      pointer-events: none;
    }
    .chapter-story-card::before { left: -30px; }
    .chapter-story-card::after  { right: -30px; }

    .chapter-story-icon-row {
      position: relative;
      display: flex; align-items: center; justify-content: center;
      gap: 14px; margin-bottom: 6px;
    }
    .chapter-leaf svg { display: block; opacity: 0.9; }
    .chapter-leaf--right svg { transform: scaleX(-1); }
    .chapter-story-avatar { font-size: 3rem; line-height: 1; filter: drop-shadow(0 6px 10px rgba(0,0,0,0.15)); }
    .chapter-sparkle { position: absolute; color: #E8B85A; font-size: 0.9rem; opacity: 0.85; }
    .chapter-sparkle--1 { top: -6px; left: 24%; }
    .chapter-sparkle--2 { top: 2px; right: 22%; font-size: 0.7rem; }

    .chapter-story-title {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      margin: 8px 0 0; font-weight: 800; font-size: 1.3rem;
    }
    .chapter-title-prefix { color: #1A2A4A; }
    .chapter-title-name  { color: #A62D2D; }

    .chapter-card-divider {
      display: flex; align-items: center; gap: 10px;
      max-width: 200px; margin: 12px auto 20px;
    }
    .chapter-card-divider::before, .chapter-card-divider::after {
      content: ''; flex: 1; height: 2px;
      background: linear-gradient(90deg, transparent, #D9A441, transparent);
    }
    .chapter-card-divider span { color: #D9A441; font-size: 1rem; }

    .chapter-story-text {
      background: #FFFDF7;
      border-radius: 18px;
      padding: 18px 22px;
      box-shadow: 0 6px 18px rgba(139,90,43,0.12);
      margin-bottom: 24px;
    }
    .chapter-story-text p { color: #3D2510; font-weight: 600; font-size: 0.9rem; line-height: 1.6; margin: 0 0 8px; }
    .chapter-story-text p:last-child { margin-bottom: 0; }
    .chapter-story-text strong { color: #A62D2D; }

    .chapter-story-btn {
      border: 2px solid #F1C87A; border-radius: 999px; padding: 12px 34px;
      background: linear-gradient(180deg, #D65B4A 0%, #A62D2D 55%, #8B1E1E 100%);
      color: #fff8e7; font-weight: 800; font-size: 1rem; cursor: pointer;
      box-shadow: 0 8px 22px rgba(139,30,30,0.45), 0 0 0 4px rgba(241,200,122,0.25);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .chapter-story-btn:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 10px 26px rgba(139,30,30,0.55), 0 0 0 4px rgba(241,200,122,0.35);
    }

    @media (max-width: 480px) {
      .chapter-story-card { padding: 28px 20px 24px; }
      .chapter-story-avatar { font-size: 2.4rem; }
      .chapter-story-title { font-size: 1.1rem; }
      .chapter-leaf svg { width: 26px; height: 42px; }
    }
  `;
  document.head.appendChild(style);
}

// 📌 Ghi nhớ câu vừa dùng ở lượt gần nhất (dùng q.q làm khóa, mọi kiểu câu đều có field q)
// để "Chơi lại" không ra trùng y hệt bộ câu cũ trong cùng phiên
let g3UsedQTexts = [];

function buildActiveQuizWithSetup(topic, count) {
  // 🎲 Che do 1 nguoi tron them 2 kieu cau hoi moi (sap xep thoi gian + ghep cap).
  // Che do 1v1 giu nguyen chi dung trac nghiem de khong pha co che thanh mau/cuop diem.
  let pool = quizMode === '1v1' ? quizData : quizData.concat(orderQuizData, matchQuizData);
  if (topic !== 'Tất cả') {
    pool = pool.filter(q => q.topic === topic);
  }

  // Random thật (không còn seed theo ngày) + né các câu vừa dùng ở lượt trước
  const wantCount = Math.min(count, pool.length);
  let available = pool.filter(q => !g3UsedQTexts.includes(q.q));
  if (available.length < wantCount) {
    g3UsedQTexts = [];
    available = [...pool];
  }
  let selected = [...available].sort(() => Math.random() - 0.5).slice(0, wantCount);
  g3UsedQTexts.push(...selected.map(q => q.q));

  // 👹 Dam bao cau Boss (cau cuoi cung) luon la cau trac nghiem, giu nguyen co che x2 XP
  if (selected.length > 1) {
    const lastIdx = selected.length - 1;
    if (selected[lastIdx].type === 'order' || selected[lastIdx].type === 'match') {
      const mcqIdx = selected.findIndex((q, i) => i !== lastIdx && q.type !== 'order' && q.type !== 'match');
      if (mcqIdx !== -1) {
        const tmp = selected[lastIdx];
        selected[lastIdx] = selected[mcqIdx];
        selected[mcqIdx] = tmp;
      }
    }
  }

  activeQuizData = selected;
}

function startGame3WithSetup() {
  const setup = getGameSetup('game-3');
  if (!setup || setup.count <= 0 || setup.count > 100) {
    setup.count = 10;  // Default
  }
  console.log('Game 3 Setup:', setup);

  qIndex = 0;
  qScore = 0;
  p1Score = 0;
  p2Score = 0;
  currentPlayer = 1;

  buildActiveQuizWithSetup(setup.topic, setup.count);

  if (activeQuizData.length === 0) {
    showToast('❌ Không có câu hỏi cho chủ đề này!', '⚠️');
    return;
  }

  currentChapterTopic = setup.topic;
  const launchGame = () => { showGame('g3'); renderQuiz(); };
  if (quizMode !== '1v1' && CHAPTER_STORY[setup.topic]) {
    showChapterIntroOverlay(setup.topic, launchGame);
  } else {
    launchGame();
  }
}

function renderQuiz() {
  if (qIndex >= activeQuizData.length) { showQuizResult(); return; }
  const q = activeQuizData[qIndex];
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-card').style.display = 'block';

  // Progress dots
  const prog = document.getElementById('quiz-progress');
  prog.innerHTML = '';
  activeQuizData.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'progress-dot' + (i < qIndex ? ' done' : i === qIndex ? ' current' : '');
    prog.appendChild(d);
  });

  document.getElementById('quiz-explain').className = 'quiz-explain';
  injectGame3ExtraStyles();
  injectGame3QuestionTypeStyles();

  const quizCardEl = document.getElementById('quiz-card');
  const isSpecialType = q.type === 'order' || q.type === 'match';

  // 👹 PHA ĐẤU BOSS: 3 câu hỏi cuối cùng của lượt chơi
  const bossHealthWrap = ensureBossHealthEl();
  if (isBossQuestion()) {
    if (qIndex === activeQuizData.length - 3) bossHealth = BOSS_MAX_HEALTH; // vừa bước vào pha Boss → reset đầy máu
    const bossName = BOSS_NAMES[q.topic] || BOSS_NAME_DEFAULT;
    quizCardEl.classList.add('boss-mode');
    document.getElementById('quiz-question').innerHTML =
      `<span class="boss-label">👹 TRẬN BOSS: ${bossName}!</span><br><span class="q-num">${qIndex+1}</span>${q.q}`;
    quizCardEl.classList.remove('boss-shake');
    void quizCardEl.offsetWidth; // reflow để chạy lại animation
    quizCardEl.classList.add('boss-shake');

    bossHealthWrap.classList.add('show');
    document.getElementById('boss-health-name').textContent = `${bossName} — ${bossHealth}/${BOSS_MAX_HEALTH} đòn`;
    document.getElementById('boss-health-fill').style.width = (bossHealth / BOSS_MAX_HEALTH * 100) + '%';
  } else {
    quizCardEl.classList.remove('boss-mode', 'boss-shake');
    document.getElementById('quiz-question').innerHTML = `<span class="q-num">${qIndex+1}</span>${q.q}`;
    bossHealthWrap.classList.remove('show');
  }

   // Hiển thị chủ đề đã chọn
  const setup = getGameSetup('game-3');
  if (setup && setup.topic !== 'Tất cả') {
    const topicName = GAME3_TOPICS.find(t => t.value === setup.topic)?.label || 'Tất cả';
    const subtitle = document.getElementById('g3-subtitle');
    if (subtitle) {
      subtitle.textContent = '📚 ' + topicName;
      subtitle.style.display = 'block';
    }
  } else {
    const subtitle = document.getElementById('g3-subtitle');
    if (subtitle) subtitle.style.display = 'none';
  }

  const nextBtn = document.getElementById('quiz-next');
  nextBtn.classList.remove('show');

  const opts = document.getElementById('quiz-options');
  opts.className = '';
  opts.innerHTML = '';

  if (q.type === 'order') {
    renderOrderQuiz(q, opts);
  } else if (q.type === 'match') {
    renderMatchQuiz(q, opts);
  } else {
    const letters = ['A', 'B', 'C', 'D'];
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.innerHTML = `<div class="opt-letter">${letters[i]}</div>${opt}`;
      btn.onclick = () => selectQuiz(i, q.ans, q.explain);
      opts.appendChild(btn);
    });
  }

document.getElementById('combo-display').textContent =
  comboStreak >= 2 ? `🔥 Combo x${comboStreak} (${comboStreak>=5?'x2':'x1.5'} XP)` : '';
updateComboFireBar();
document.getElementById('btn-5050').disabled = lifelineFiftyUsed || isSpecialType;
document.getElementById('btn-skip').disabled = lifelineSkipUsed;
document.getElementById('btn-sage').disabled = lifelineSageUsed;
document.getElementById('sage-tip-box').style.display = 'none';
if (quizMode === '1v1') {
  const stealBanner = document.getElementById('quiz-steal-banner');
  if (stealBanner) stealBanner.style.display = 'none';
  updateArenaLives();
}
  clearInterval(q3Timer);
  q3TimeLeft = isSpecialType ? 30 : 20;
  document.getElementById('g3-timer').textContent = '⏱ ' + q3TimeLeft + 's';
  document.getElementById('g3-timer').style.color = '#1A2A4A'; 
  q3Timer = setInterval(() => {
    q3TimeLeft--;
    document.getElementById('g3-timer').textContent = '⏱ ' + q3TimeLeft + 's';
    if (q3TimeLeft <= 5) document.getElementById('g3-timer').style.color = '#e74c3c';
    if (q3TimeLeft <= 0) {
      clearInterval(q3Timer);
      if (q.type === 'order') finishOrderQuiz();
      else if (q.type === 'match') finishMatchQuiz();
      else selectQuiz(-1, activeQuizData[qIndex].ans, activeQuizData[qIndex].explain);
    }
  }, 1000);
}

function selectQuiz(chosen, correct, explain) {
  if (quizMode === '1v1') { arenaSelectQuiz(chosen, correct, explain); return; }
  clearInterval(q3Timer);
  const btns = document.querySelectorAll('.quiz-opt');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('show-correct');
    if (i === chosen && chosen !== correct) b.classList.add('selected-wrong');
    if (i === chosen && chosen === correct) b.classList.add('selected-correct');
  });

  const exp = document.getElementById('quiz-explain');
  renderExplainBox(exp, explain, chosen === correct);
  reactCompanion(activeQuizData[qIndex].topic, chosen === correct);
  answerLog.push({
    q: activeQuizData[qIndex].q,
    topic: activeQuizData[qIndex].topic,
    isCorrect: chosen === correct,
    explain: explain,
  });

 if (chosen === correct) {
    if (quizMode === '1v1') {
      if (currentPlayer === 1) p1Score++; else p2Score++;
    } else {
      qScore++;
    }
    comboStreak++;
    if (comboStreak > maxCombo) maxCombo = comboStreak;
    const multiplier = comboStreak >= 5 ? 2 : comboStreak >= 2 ? 1.5 : 1;

    // 🚀 Thưởng tốc độ: trả lời càng nhanh, XP càng cao
    const elapsed = 20 - q3TimeLeft;
    let speedBase, speedLabel;
    if (elapsed <= 5) { speedBase = 20; speedLabel = '⚡ Siêu tốc!'; }
    else if (elapsed <= 10) { speedBase = 15; speedLabel = '🚀 Nhanh!'; }
    else if (elapsed <= 15) { speedBase = 10; speedLabel = '🙂 Ổn!'; }
    else { speedBase = 5; speedLabel = '🐢 Hơi chậm!'; }

    const bossMultiplier = isBossQuestion() ? 2 : 1;
    const cardMultiplier = getTopicBuffMultiplier(activeQuizData[qIndex].topic);
    const fullXP = Math.round(speedBase * multiplier * cardMultiplier) * bossMultiplier;
    // Lần đầu đúng câu này -> full XP. Đã từng đúng trước đó (chơi lại) -> chỉ 20% XP an ủi, chặn farm.
    const isFirstTime = markG3AnsweredCorrect(activeQuizData[qIndex].q);
    const earnedXP = isFirstTime ? fullXP : Math.max(1, Math.round(fullXP * 0.2));
    addXP(earnedXP);
    playCorrectSound();
    if (isBossQuestion()) {
      const bossTopic = activeQuizData[qIndex].topic;
      const bossName = BOSS_NAMES[bossTopic] || BOSS_NAME_DEFAULT;
      bossHealth = Math.max(0, bossHealth - 1);
      const bossFillEl = document.getElementById('boss-health-fill');
      const bossNameEl = document.getElementById('boss-health-name');
      if (bossFillEl) bossFillEl.style.width = (bossHealth / BOSS_MAX_HEALTH * 100) + '%';
      if (bossHealth <= 0) {
        if (bossNameEl) bossNameEl.textContent = `${bossName} — ĐÃ HẠ GỤC!`;
        const quote = BOSS_VICTORY_QUOTES[bossTopic] || BOSS_VICTORY_QUOTE_DEFAULT;
        showToast(`👹 HẠ GỤC ${bossName}! +${earnedXP} XP (x2)`, '👹');
        exp.textContent += ` — ${quote}`;
      } else {
        if (bossNameEl) bossNameEl.textContent = `${bossName} — ${bossHealth}/${BOSS_MAX_HEALTH} đòn`;
        showToast(`👹 Trúng đòn ${bossName}! Còn ${bossHealth} máu. +${earnedXP} XP (x2)`, '👹');
      }
    } else if (multiplier > 1) {
      showToast(`🔥 Combo x${comboStreak}! +${earnedXP} XP`, '🔥');
    } else {
      showToast(`${speedLabel} +${earnedXP} XP`, '⚡');
    }
  } else {
    comboStreak = 0;
    playWrongSound();
    if (isBossQuestion()) {
      const bossName = BOSS_NAMES[activeQuizData[qIndex].topic] || BOSS_NAME_DEFAULT;
      showToast(`👹 ${bossName} phản đòn! Mất combo!`, '💥');
    }
  }
  updateComboFireBar();

  document.getElementById('quiz-next').classList.add('show');
}
// 🏟️ ĐẤU TRƯỜNG 1v1: xử lý riêng cho thanh máu + cướp điểm
function arenaSelectQuiz(chosen, correct, explain) {
  clearInterval(q3Timer);
  const btns = document.querySelectorAll('.quiz-opt');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('show-correct');
    if (i === chosen && chosen !== correct) b.classList.add('selected-wrong');
    if (i === chosen && chosen === correct) b.classList.add('selected-correct');
  });

  const exp = document.getElementById('quiz-explain');
  renderExplainBox(exp, explain, chosen === correct);
  reactCompanion(activeQuizData[qIndex].topic, chosen === correct);
  answerLog.push({
    q: activeQuizData[qIndex].q,
    topic: activeQuizData[qIndex].topic,
    isCorrect: chosen === correct,
    explain: explain,
  });

  const bossMultiplier = isBossQuestion() ? 2 : 1;

  if (!stealMode) {
    // Lượt trả lời chính thức của người chơi hiện tại
    if (chosen === correct) {
      if (currentPlayer === 1) p1Score++; else p2Score++;
      const earnedXP = 15 * bossMultiplier;
      addXP(earnedXP);
      playCorrectSound();
      if (isBossQuestion()) {
        const bossName = BOSS_NAMES[activeQuizData[qIndex].topic] || BOSS_NAME_DEFAULT;
        showToast(`👹 Người chơi ${currentPlayer} tung đòn vào ${bossName}! +${earnedXP} XP (x2)`, '👹');
      } else {
        showToast(`✅ Người chơi ${currentPlayer} trả lời đúng! +${earnedXP} XP`, '✅');
      }
      document.getElementById('quiz-next').classList.add('show');
    } else {
      if (currentPlayer === 1) p1Lives--; else p2Lives--;
      if (isBossQuestion()) {
        if (currentPlayer === 1) p1Lives--; else p2Lives--;
        showToast('👹 Boss phản đòn cực mạnh — mất thêm 1 mạng!', '💥');
      }
      playWrongSound();
      updateArenaLives();

      const loser = currentPlayer;
      if ((loser === 1 && p1Lives <= 0) || (loser === 2 && p2Lives <= 0)) {
        endArenaMatch(loser === 1 ? 2 : 1);
        return;
      }

      const stealer = loser === 1 ? 2 : 1;
      showToast(`💔 Người chơi ${loser} mất 1 mạng!`, '💔');
      stealMode = true;
      currentPlayer = stealer;
      document.getElementById('quiz-player-turn').textContent = currentPlayer;

      setTimeout(() => {
        const stealBanner = document.getElementById('quiz-steal-banner');
        if (stealBanner) {
          stealBanner.style.display = 'block';
          document.getElementById('quiz-steal-player').textContent = stealer;
        }
        const btns2 = document.querySelectorAll('.quiz-opt');
        btns2.forEach((b, i) => {
          if (i !== chosen) {
            b.disabled = false;
            b.classList.remove('show-correct');
          }
        });
        exp.className = 'quiz-explain';
        exp.textContent = '';

        q3TimeLeft = 10;
        document.getElementById('g3-timer').textContent = '⏱ 10s';
        document.getElementById('g3-timer').style.color = '#C0392B';
        q3Timer = setInterval(() => {
          q3TimeLeft--;
          document.getElementById('g3-timer').textContent = '⏱ ' + q3TimeLeft + 's';
          if (q3TimeLeft <= 0) { clearInterval(q3Timer); arenaSelectQuiz(-1, correct, explain); }
        }, 1000);
      }, 1200);
    }
  } else {
    // Lượt cướp điểm
    stealMode = false;
    const stealBanner = document.getElementById('quiz-steal-banner');
    if (stealBanner) stealBanner.style.display = 'none';

    if (chosen === correct) {
      if (currentPlayer === 1) p1Score++; else p2Score++;
      const earnedXP = 15 * bossMultiplier;
      addXP(earnedXP);
      playCorrectSound();
      showToast(`${isBossQuestion() ? '👹 HẠ GỤC BOSS! ' : '🏆 '}Người chơi ${currentPlayer} CƯỚP ĐIỂM thành công! +${earnedXP} XP`, '🏆');
    } else {
      playWrongSound();
      showToast('😅 Cướp điểm thất bại! Không ai ghi điểm câu này.', '💨');
    }
    document.getElementById('quiz-next').classList.add('show');
  }
}

function updateArenaLives() {
  const p1El = document.getElementById('p1-lives');
  const p2El = document.getElementById('p2-lives');
  if (p1El) p1El.textContent = '❤️'.repeat(Math.max(p1Lives, 0)) + '🖤'.repeat(3 - Math.max(p1Lives, 0));
  if (p2El) p2El.textContent = '❤️'.repeat(Math.max(p2Lives, 0)) + '🖤'.repeat(3 - Math.max(p2Lives, 0));
}

function endArenaMatch(winner) {
  clearInterval(q3Timer);
  arenaWinnerByLives = winner;
  showToast(`🏆 Người chơi ${winner} CHIẾN THẮNG! Đối thủ đã hết mạng!`, '🏆');
  qIndex = activeQuizData.length;
  setTimeout(() => showQuizResult(), 1000);
}

function updateComboFireBar() {
  const track = document.getElementById('combo-fire-track');
  const fill = document.getElementById('combo-fire-fill');
  if (!track || !fill) return;

  if (comboStreak >= 2) {
    track.style.display = 'block';
    const pct = Math.min(comboStreak / 5, 1) * 100; // đầy thanh ở combo x5
    fill.style.width = pct + '%';
    fill.classList.toggle('max-combo', comboStreak >= 5);
  } else {
    track.style.display = 'none';
    fill.style.width = '0%';
    fill.classList.remove('max-combo');
  }
}
// ============================================================
// ⏳ KIỂU CÂU HỎI: SẮP XẾP THEO ĐÚNG TRÌNH TỰ THỜI GIAN
// ============================================================
let orderPlayerSequence = [];
let orderShuffledItems = [];

function renderOrderQuiz(q, container) {
  orderPlayerSequence = [];
  orderShuffledItems = q.items.map((label, idx) => ({ label, idx })).sort(() => Math.random() - 0.5);

  container.className = 'order-quiz-wrap';
  container.innerHTML = `
    <div class="order-target" id="order-target"></div>
    <div class="order-pool" id="order-pool"></div>
    <div class="order-hint">👆 Bấm theo đúng thứ tự thời gian, từ sớm nhất đến muộn nhất</div>
  `;
  renderOrderPool();
  renderOrderTarget();
}

function renderOrderPool() {
  const pool = document.getElementById('order-pool');
  if (!pool) return;
  pool.innerHTML = '';
  orderShuffledItems.forEach(item => {
    if (orderPlayerSequence.includes(item.idx)) return;
    const btn = document.createElement('button');
    btn.className = 'order-item-btn';
    btn.textContent = item.label;
    btn.onclick = () => {
      orderPlayerSequence.push(item.idx);
      renderOrderPool();
      renderOrderTarget();
      if (orderPlayerSequence.length === orderShuffledItems.length) {
        setTimeout(() => finishOrderQuiz(), 300);
      }
    };
    pool.appendChild(btn);
  });
}

function renderOrderTarget() {
  const target = document.getElementById('order-target');
  if (!target) return;
  const q = activeQuizData[qIndex];
  target.innerHTML = '';
  for (let i = 0; i < q.items.length; i++) {
    const slot = document.createElement('div');
    slot.className = 'order-slot';
    if (orderPlayerSequence[i] !== undefined) {
      slot.classList.add('filled');
      slot.textContent = `${i + 1}. ${q.items[orderPlayerSequence[i]]}`;
    } else {
      slot.textContent = `${i + 1}. …`;
    }
    target.appendChild(slot);
  }
}

function finishOrderQuiz() {
  clearInterval(q3Timer);
  const q = activeQuizData[qIndex];
  document.querySelectorAll('#order-pool .order-item-btn').forEach(b => b.disabled = true);

  // Nếu hết giờ mà chưa xếp xong, tự điền nốt các mục còn lại (coi như chưa chọn)
  while (orderPlayerSequence.length < q.items.length) {
    const remaining = q.items.map((_, idx) => idx).filter(idx => !orderPlayerSequence.includes(idx));
    orderPlayerSequence.push(remaining[0]);
  }
  renderOrderTarget();

  let correctCount = 0;
  orderPlayerSequence.forEach((itemIdx, pos) => { if (itemIdx === pos) correctCount++; });
  const isFullyCorrect = correctCount === q.items.length;

  document.querySelectorAll('#order-target .order-slot').forEach((slot, i) => {
    slot.classList.add(orderPlayerSequence[i] === i ? 'order-correct' : 'order-wrong');
  });

  const exp = document.getElementById('quiz-explain');
  renderExplainBox(exp, q.explain, isFullyCorrect);
  reactCompanion(q.topic, isFullyCorrect);

  answerLog.push({ q: q.q, topic: q.topic, isCorrect: isFullyCorrect, explain: q.explain });

  if (isFullyCorrect) {
    qScore++;
    comboStreak++;
    if (comboStreak > maxCombo) maxCombo = comboStreak;
    const fullXp = Math.round(25 * getTopicBuffMultiplier(q.topic));
    const isFirstTime = markG3AnsweredCorrect(q.q);
    const xp = isFirstTime ? fullXp : Math.max(1, Math.round(fullXp * 0.2));
    addXP(xp);
    playCorrectSound();
    showToast(`🗓️ Xếp đúng thứ tự! +${xp} XP`, '🗓️');
  } else if (correctCount > 0) {
    comboStreak = 0;
    const xp = correctCount * 5;
    addXP(xp);
    showToast(`📖 Đúng ${correctCount}/${q.items.length} vị trí, +${xp} XP an ủi`, '📖');
    playWrongSound();
  } else {
    comboStreak = 0;
    playWrongSound();
  }
  updateComboFireBar();
  document.getElementById('quiz-next').classList.add('show');
}

// ============================================================
// 🔗 KIỂU CÂU HỎI: GHÉP CẶP
// ============================================================
let matchSelectedLeft = null;
let matchMatchedPairs = [];
let matchWrongAttempts = 0;
let matchRightShuffled = [];

function renderMatchQuiz(q, container) {
  matchSelectedLeft = null;
  matchMatchedPairs = [];
  matchWrongAttempts = 0;
  matchRightShuffled = q.pairs.map((p, idx) => ({ label: p.right, idx })).sort(() => Math.random() - 0.5);

  container.className = 'match-quiz-wrap';
  container.innerHTML = `
    <div class="match-col match-col-left" id="match-col-left"></div>
    <div class="match-col match-col-right" id="match-col-right"></div>
  `;
  renderMatchColumns();
}

function renderMatchColumns() {
  const q = activeQuizData[qIndex];
  const left = document.getElementById('match-col-left');
  const right = document.getElementById('match-col-right');
  if (!left || !right) return;
  left.innerHTML = '';
  right.innerHTML = '';

  q.pairs.forEach((p, idx) => {
    const btn = document.createElement('button');
    btn.className = 'match-item';
    btn.textContent = p.left;
    if (matchMatchedPairs.includes(idx)) btn.classList.add('matched');
    if (matchSelectedLeft === idx) btn.classList.add('selected');
    btn.disabled = matchMatchedPairs.includes(idx);
    btn.onclick = () => {
      matchSelectedLeft = idx;
      renderMatchColumns();
    };
    left.appendChild(btn);
  });

  matchRightShuffled.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'match-item';
    btn.textContent = item.label;
    if (matchMatchedPairs.includes(item.idx)) btn.classList.add('matched');
    btn.disabled = matchMatchedPairs.includes(item.idx) || matchSelectedLeft === null;
    btn.onclick = () => {
      if (matchSelectedLeft === null) return;
      if (item.idx === matchSelectedLeft) {
        matchMatchedPairs.push(item.idx);
        matchSelectedLeft = null;
        renderMatchColumns();
        if (matchMatchedPairs.length === q.pairs.length) {
          setTimeout(() => finishMatchQuiz(), 300);
        }
      } else {
        matchWrongAttempts++;
        btn.classList.add('match-wrong-flash');
        playWrongSound();
        setTimeout(() => { matchSelectedLeft = null; renderMatchColumns(); }, 500);
      }
    };
    right.appendChild(btn);
  });
}

function finishMatchQuiz() {
  clearInterval(q3Timer);
  const q = activeQuizData[qIndex];
  document.querySelectorAll('#match-col-left .match-item, #match-col-right .match-item').forEach(b => b.disabled = true);

  const allMatched = matchMatchedPairs.length === q.pairs.length;

  const exp = document.getElementById('quiz-explain');
  renderExplainBox(exp, q.explain, allMatched);
  reactCompanion(q.topic, allMatched);

  answerLog.push({ q: q.q, topic: q.topic, isCorrect: allMatched, explain: q.explain });

  if (allMatched) {
    qScore++;
    comboStreak++;
    if (comboStreak > maxCombo) maxCombo = comboStreak;
    const fullXp = Math.round((matchWrongAttempts === 0 ? 25 : 15) * getTopicBuffMultiplier(q.topic));
    const isFirstTime = markG3AnsweredCorrect(q.q);
    const xp = isFirstTime ? fullXp : Math.max(1, Math.round(fullXp * 0.2));
    addXP(xp);
    playCorrectSound();
    showToast(matchWrongAttempts === 0 ? `🔗 Ghép hoàn hảo! +${xp} XP` : `🔗 Ghép xong (có nhầm) +${xp} XP`, '🔗');
  } else {
    comboStreak = 0;
    const xp = matchMatchedPairs.length * 5;
    if (xp > 0) addXP(xp);
    showToast(`📖 Hết giờ! Ghép đúng ${matchMatchedPairs.length}/${q.pairs.length}`, '📖');
    playWrongSound();
  }
  updateComboFireBar();
  document.getElementById('quiz-next').classList.add('show');
}

// ============================================================
// 🎨 CSS cho 2 kiểu câu hỏi mới (chèn 1 lần duy nhất)
// ============================================================
function injectGame3QuestionTypeStyles() {
  if (document.getElementById('game3-question-type-styles')) return;
  const style = document.createElement('style');
  style.id = 'game3-question-type-styles';
  style.textContent = `
    .order-quiz-wrap, .match-quiz-wrap { display: flex; flex-direction: column; gap: 14px; }
    .order-target { display: flex; flex-direction: column; gap: 8px; }
    .order-slot {
      border: 2px dashed #C9861F; border-radius: 12px; padding: 10px 14px;
      font-weight: 700; color: #6b4a1f; min-height: 20px; transition: all 0.2s ease;
      background: rgba(232,182,74,0.08);
    }
    .order-slot.filled { border-style: solid; background: #fff8e7; color: #3D2510; }
    .order-slot.order-correct { border-color: #2E6B1F; background: rgba(46,107,31,0.12); color: #2E6B1F; }
    .order-slot.order-wrong { border-color: #8B0000; background: rgba(139,0,0,0.08); color: #8B0000; }
    .order-pool { display: flex; flex-wrap: wrap; gap: 8px; }
    .order-item-btn {
      border: 2px solid #E8B64A; background: #fff8e7; color: #3D2510;
      border-radius: 999px; padding: 8px 16px; font-weight: 700; cursor: pointer;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .order-item-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.15); }
    .order-item-btn:disabled { opacity: 0.4; cursor: default; }
    .order-hint { font-size: 0.82rem; opacity: 0.75; text-align: center; }

    .match-quiz-wrap { flex-direction: row; gap: 16px; }
    .match-col { flex: 1; display: flex; flex-direction: column; gap: 8px; }
    .match-item {
      border: 2px solid #E8B64A; background: #fff8e7; color: #3D2510;
      border-radius: 12px; padding: 10px 12px; font-weight: 700; cursor: pointer;
      text-align: left; transition: all 0.15s ease;
    }
    .match-item:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.15); }
    .match-item.selected { border-color: #1A2A4A; background: #e8eef7; }
    .match-item.matched { border-color: #2E6B1F; background: rgba(46,107,31,0.12); color: #2E6B1F; opacity: 0.85; cursor: default; }
    .match-wrong-flash { animation: matchWrongFlash 0.5s ease; }
    @keyframes matchWrongFlash {
      0%,100% { background: #fff8e7; }
      50% { background: rgba(139,0,0,0.25); }
    }
    @media (max-width: 520px) {
      .match-quiz-wrap { flex-direction: column; }
    }
  `;
  document.head.appendChild(style);
}

function nextQuiz() {
  if (quizMode === '1v1') {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    showToast(`🎮 Lượt của Người chơi ${currentPlayer}!`, '🎮');
    document.getElementById('quiz-player-turn').textContent = currentPlayer;
  }
  qIndex++;
  renderQuiz();
}

// 🔢 Điểm số chạy lên dần thay vì hiện thẳng con số cuối
function animateScoreCount(finalScore, totalQuestions) {
  const el = document.getElementById('final-score');
  if (!el) return;
  const duration = 700;
  const startTime = performance.now();
  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const current = Math.round(finalScore * progress);
    el.textContent = `${current}/${totalQuestions}`;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = `${finalScore}/${totalQuestions}`;
  }
  requestAnimationFrame(tick);
}

// 🎉 Confetti rơi ăn mừng khi đạt điểm khá/giỏi/xuất sắc
function spawnConfetti(container, count) {
  const colors = ['#E8B64A', '#8B0000', '#C9861F', '#FBF0D9', '#A9761F'];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (1.5 + Math.random() * 1.2) + 's';
    piece.style.animationDelay = (Math.random() * 0.4) + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
}

// 📜 Khối nội dung mở rộng trên màn kết quả (nhân vật thoại, so sánh điểm, rương, xem lại)
function ensureResultExtras() {
  let el = document.getElementById('result-extras');
  if (!el) {
    el = document.createElement('div');
    el.id = 'result-extras';
    const replayBtn = document.querySelector('#quiz-result .replay-btn');
    if (replayBtn && replayBtn.parentNode) {
      replayBtn.parentNode.insertBefore(el, replayBtn);
    }
  }
  return el;
}

// 🎁 Rương phần thưởng — luôn có chút XP thêm để không bao giờ "về tay không"
function openTreasureChest(btn) {
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  const bonus = 5 + Math.floor(Math.random() * 11); // 5-15 XP
  addXP(bonus);
  btn.classList.add('chest-opened');
  btn.innerHTML = `🎉 +${bonus} XP thưởng thêm!`;
  showToast(`🎁 Rương mở ra! +${bonus} XP`, '🎁');
}

// 📖 Bật/tắt bảng xem lại toàn bộ đáp án đã trả lời
function toggleAnswerReview() {
  const panel = document.getElementById('answer-review-panel');
  const btn = document.getElementById('review-toggle-btn');
  if (!panel) return;
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '🔼 Ẩn đáp án' : '📖 Xem lại đáp án';
}

function showQuizResult() {
  document.getElementById('quiz-card').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';

  const totalQuestions = activeQuizData.length;
  const finalScore = quizMode === '1v1' ? Math.max(p1Score, p2Score) : qScore;
  const pct = totalQuestions > 0 ? finalScore / totalQuestions : 0;

  let trophy = '🏆', title = 'Xuất sắc!', sub = 'Bạn là bậc thầy Lịch Sử!';
  if (pct < 0.4) { 
    trophy = '📚'; 
    title = 'Cần cố gắng hơn!'; 
    sub = 'Hãy ôn tập và thử lại nhé!'; 
  } else if (pct < 0.7) { 
    trophy = '🎖️'; 
    title = 'Khá tốt!'; 
    sub = 'Bạn đang trên đà tiến bộ!'; 
  } else if (pct < 1) { 
    trophy = '🥈'; 
    title = 'Rất giỏi!'; 
    sub = 'Chỉ còn một bước nữa thôi!'; 
  }

  if (quizMode === '1v1' && arenaWinnerByLives) {
    trophy = '🏆';
    title = `Người chơi ${arenaWinnerByLives} CHIẾN THẮNG!`;
    sub = 'Đối thủ đã hết mạng — trận đấu kết thúc sớm!';
  }

  // 🎨 Làm mới giao diện màn kết quả theo mức độ thành tích
  injectGame3ExtraStyles();
  let tier = 'fail';
  if (pct >= 1) tier = 'perfect';
  else if (pct >= 0.7) tier = 'good';
  else if (pct >= 0.4) tier = 'ok';

  const resultScreenEl = document.querySelector('#quiz-result .result-screen');
  if (resultScreenEl) {
    resultScreenEl.classList.remove('tier-fail', 'tier-ok', 'tier-good', 'tier-perfect');
    resultScreenEl.classList.add('tier-' + tier);
    resultScreenEl.classList.remove('result-pop');
    void resultScreenEl.offsetWidth;
    resultScreenEl.classList.add('result-pop');
  }

  document.getElementById('result-trophy').textContent = trophy;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-sub').textContent = sub + (maxCombo >= 2 ? ` · Combo cao nhất: x${maxCombo} 🔥` : '');

  // Đếm số điểm chạy lên thay vì hiện thẳng
  animateScoreCount(finalScore, totalQuestions);

  const badges = [];
  if (finalScore >= Math.ceil(totalQuestions * 0.8)) badges.push('🏅 Nhà Sử Học Tập Sự');
  if (finalScore === totalQuestions) badges.push('👑 Bậc Thầy Lịch Sử');
  if (finalScore >= Math.ceil(totalQuestions * 0.5)) badges.push('🔥 Tinh thần học hỏi');

  const bg = document.getElementById('badge-grid');
  bg.innerHTML = badges.map((b, i) => `<div class="badge" style="animation-delay:${0.3 + i * 0.15}s">${b}</div>`).join('');

  // 🎉 Hiệu ứng confetti khi đạt điểm khá trở lên
  if ((tier === 'good' || tier === 'perfect') && resultScreenEl) {
    spawnConfetti(resultScreenEl, tier === 'perfect' ? 40 : 22);
  }

  // 🎭 Nhân vật đồng hành "nói" theo kết quả
  const lastTopic = activeQuizData.length ? activeQuizData[activeQuizData.length - 1].topic : null;
  const companionInfo = HISTORY_COMPANIONS[lastTopic] || HISTORY_COMPANION_DEFAULT;
  const speechFn = RESULT_SPEECH[tier] || RESULT_SPEECH.ok;
  const companionHTML = `
    <div class="result-companion">
      <div class="result-companion-avatar">${companionInfo.emoji}</div>
      <div class="result-companion-bubble">${speechFn(companionInfo.name)}</div>
    </div>`;

  // 📊 So sánh với lần chơi trước (theo % để không phụ thuộc số câu)
  const setupForCompare = getGameSetup('game-3');
  const cmpKey = 'g3_prev_pct_' + (setupForCompare ? setupForCompare.topic : 'Tất cả') + '_' + quizMode;
  const prevPct = loadProgress(cmpKey, null);
  const curPctRounded = Math.round(pct * 100);
  let comparisonHTML = '';
  if (prevPct !== null) {
    const arrow = curPctRounded > prevPct ? '📈' : curPctRounded < prevPct ? '📉' : '➖';
    comparisonHTML = `<div class="result-compare">Lần trước: <b>${prevPct}%</b> → Lần này: <b>${curPctRounded}%</b> ${arrow}</div>`;
  }
  saveProgress(cmpKey, curPctRounded);

  // 📖 Cốt truyện: đánh dấu hoàn thành chương + kiểm tra mở khóa chương đặc biệt
  let chapterOutroHTML = '';
  let specialUnlockHTML = '';
  if (quizMode !== '1v1' && currentChapterTopic && CHAPTER_STORY[currentChapterTopic] && pct >= 0.5) {
    const wasUnlockedBefore = isSpecialChapterUnlocked();
    if (currentChapterTopic !== 'Chương đặc biệt') markChapterCompleted(currentChapterTopic);
    const story = CHAPTER_STORY[currentChapterTopic];
    chapterOutroHTML = `<div class="result-compare" style="font-style:italic;">${story.outro.join(' ')}</div>`;
    if (!wasUnlockedBefore && isSpecialChapterUnlocked()) {
      showToast('🌟 Đã mở khóa Chương đặc biệt — Đại chiến Boss cuối cùng!', '🌟');
    }
  }
  if (isSpecialChapterUnlocked() && currentChapterTopic !== 'Chương đặc biệt') {
    specialUnlockHTML = `<div class="result-actions-row"><button class="chest-btn" onclick="playSpecialChapter()">🌟 Chơi Chương đặc biệt</button></div>`;
  }

  // 📌 Gợi ý chủ đề cần ôn tập dựa trên các câu trả lời sai
  const wrongTally = {};
  answerLog.forEach(a => { if (!a.isCorrect) wrongTally[a.topic] = (wrongTally[a.topic] || 0) + 1; });
  const weakTopics = Object.entries(wrongTally).sort((a, b) => b[1] - a[1]).slice(0, 2).map(e => e[0]);
  let weakHTML = '';
  if (weakTopics.length) {
    weakHTML = `<div class="result-weak">📌 Nên ôn lại: <b>${weakTopics.join(', ')}</b></div>`;
  } else if (answerLog.length > 0) {
    weakHTML = `<div class="result-weak">🎯 Không có chủ đề nào cần ôn thêm — quá đỉnh!</div>`;
  }

  // 📖 Bảng xem lại đáp án
  const reviewHTML = answerLog.map((a, i) => `
    <div class="review-item ${a.isCorrect ? 'correct' : 'wrong'}">
      <div class="review-q">${a.isCorrect ? '✅' : '❌'} Câu ${i + 1}: ${a.q}</div>
      <div class="review-explain">📖 ${a.explain}</div>
    </div>
  `).join('');

  // 🎁 Rương thưởng chỉ xuất hiện khi đạt thành tích Khá trở lên (≥70% số câu đúng)
  const chestButtonHTML = (tier === 'good' || tier === 'perfect')
    ? `<button class="chest-btn" onclick="openTreasureChest(this)">🎁 Mở rương thưởng</button>`
    : '';

  const extrasEl = ensureResultExtras();
  extrasEl.innerHTML = companionHTML + chapterOutroHTML + comparisonHTML + weakHTML + `
    <div class="result-actions-row">
      ${chestButtonHTML}
      <button class="review-toggle-btn" id="review-toggle-btn" onclick="toggleAnswerReview()">📖 Xem lại đáp án</button>
    </div>
    <div id="answer-review-panel" class="answer-review-panel">${reviewHTML || '<p style="opacity:0.6;">Không có dữ liệu câu hỏi.</p>'}</div>
  ` + specialUnlockHTML;

  const xpReward = Math.round(finalScore * (100 / totalQuestions));
  addXP(xpReward);
  saveProgress('g3_best', Math.max(finalScore, loadProgress('g3_best', 0)));
  
// syncXPToServer(xpReward, 'GAME3', 'Quiz Thử Thách - ' + finalScore + '/' + totalQuestions + ' đúng');
  // Lưu progress chuẩn để checkUnlockCondition đọc được
  saveProgress('game_g3', {
    completed: true,
    score: finalScore,
    perfect: finalScore === totalQuestions
  });

  unlockCard('quang-trung');
  unlockCard('ho-chi-minh');     // tự kiểm tra allComplete bên trong
  unlockCard('vo-nguyen-giap');  // tự kiểm tra cardsUnlocked>=11 bên trong
}

function restartQuiz() {
  qIndex = 0;
  qScore = 0;
  p1Score = 0;
  p2Score = 0;
  currentPlayer = 1;
  lifelineFiftyUsed = false;
  lifelineSkipUsed = false;
  lifelineSageUsed = false;
  p1Lives = 3;
  p2Lives = 3;
  stealMode = false;
  arenaWinnerByLives = null;
  answerLog = [];
  bossHealth = BOSS_MAX_HEALTH;
  
  const setup = getGameSetup('game-3');
  buildActiveQuizWithSetup(setup.topic, setup.count);
  
  if (activeQuizData.length === 0) {
    showToast('❌ Không có câu hỏi cho chủ đề này!', '⚠️');
    return;
  }
  
  renderQuiz();
}

function setQuizMode(mode) {
  quizMode = mode;
  document.getElementById('quiz-1v1-banner').style.display = mode === '1v1' ? 'block' : 'none';
  restartQuiz();
}
function useFiftyFifty() {
  if (lifelineFiftyUsed) return;
  if (totalXP < 20) { showToast('Không đủ XP!', '❌'); return; }
  addXP(-20);
  lifelineFiftyUsed = true;
  document.getElementById('btn-5050').disabled = true;

  const q = activeQuizData[qIndex];
  const wrongIndices = [0,1,2,3].filter(i => i !== q.ans);
  const toHide = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);
  const btns = document.querySelectorAll('.quiz-opt');
  toHide.forEach(i => { if (btns[i]) btns[i].style.visibility = 'hidden'; });
  showToast('🎲 Đã loại bỏ 2 đáp án sai!', '🎲');
}

function askHistorySage() {
  if (lifelineSageUsed) return;
  if (totalXP < 10) { showToast('Không đủ XP!', '❌'); return; }
  addXP(-10);
  lifelineSageUsed = true;
  document.getElementById('btn-sage').disabled = true;

  const q = activeQuizData[qIndex];
  const tipsForTopic = SAGE_TIPS[q.topic] || SAGE_TIPS_GENERIC;
  const tip = tipsForTopic[Math.floor(Math.random() * tipsForTopic.length)];

  document.getElementById('sage-tip-text').textContent = tip;
  document.getElementById('sage-tip-box').style.display = 'block';
  showToast('🧙 Sử Gia AI đã gợi ý cho bạn!', '🧙');
}

function useSkip() {
  if (lifelineSkipUsed) return;
  lifelineSkipUsed = true;
  document.getElementById('btn-skip').disabled = true;
  clearInterval(q3Timer);
  showToast('⏭️ Đã bỏ qua câu này!', '⏭️');
  nextQuiz();
}

// 🌿 SVG lá nguyệt quế trang trí 2 bên icon chương (dùng chung, chèn 1 lần)
const CHAPTER_LAUREL_SVG = `
<svg width="34" height="56" viewBox="0 0 44 70" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 68 C22 50 22 30 22 4" stroke="#C9A24A" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="12" cy="14" rx="10" ry="5" fill="#D9A441" transform="rotate(-30 12 14)"/>
  <ellipse cx="32" cy="14" rx="10" ry="5" fill="#D9A441" transform="rotate(30 32 14)"/>
  <ellipse cx="10" cy="30" rx="10" ry="5" fill="#D9A441" transform="rotate(-30 10 30)"/>
  <ellipse cx="34" cy="30" rx="10" ry="5" fill="#D9A441" transform="rotate(30 34 30)"/>
  <ellipse cx="9" cy="46" rx="10" ry="5" fill="#D9A441" transform="rotate(-30 9 46)"/>
  <ellipse cx="35" cy="46" rx="10" ry="5" fill="#D9A441" transform="rotate(30 35 46)"/>
</svg>`;

// 📖 Tách "Tên nhân vật: lời thoại" thành 2 phần để in đậm tên tác giả câu quote
function formatChapterIntroText(lines) {
  return lines.map((line, i) => {
    if (i === 0) {
      const idx = line.indexOf(':');
      if (idx !== -1) {
        const author = line.slice(0, idx);
        const rest = line.slice(idx + 1).trim();
        return `<p><strong>${author}:</strong> ${rest}</p>`;
      }
    }
    return `<p>${line}</p>`;
  }).join('');
}

// 📖 Màn hình dẫn truyện đầu mỗi chương
function ensureChapterStoryEl() {
  let el = document.getElementById('chapter-story-overlay');
  if (!el) {
    el = document.createElement('div');
    el.id = 'chapter-story-overlay';
    el.innerHTML = `
      <div class="chapter-story-card">
        <div class="chapter-story-icon-row">
          <span class="chapter-leaf">${CHAPTER_LAUREL_SVG}</span>
          <span class="chapter-story-avatar" id="chapter-story-avatar"></span>
          <span class="chapter-leaf chapter-leaf--right">${CHAPTER_LAUREL_SVG}</span>
          <span class="chapter-sparkle chapter-sparkle--1">✦</span>
          <span class="chapter-sparkle chapter-sparkle--2">✦</span>
        </div>
        <h3 class="chapter-story-title" id="chapter-story-title"></h3>
        <div class="chapter-card-divider"><span>✦</span></div>
        <div class="chapter-story-text" id="chapter-story-text"></div>
        <button class="chapter-story-btn" id="chapter-story-btn">Bắt đầu ⚔️</button>
      </div>
    `;
    document.body.appendChild(el);
  }
  return el;
}

function showChapterIntroOverlay(topic, onContinue) {
  const story = CHAPTER_STORY[topic];
  if (!story) { onContinue(); return; }
  injectGame3ExtraStyles();
  const info = HISTORY_COMPANIONS[topic] || HISTORY_COMPANION_DEFAULT;
  const el = ensureChapterStoryEl();
  document.getElementById('chapter-story-avatar').textContent = info.emoji;
  document.getElementById('chapter-story-title').innerHTML =
    `<span class="chapter-title-icon">📖</span><span class="chapter-title-prefix">Chương:</span><span class="chapter-title-name">${topic}</span>`;
  document.getElementById('chapter-story-text').innerHTML = formatChapterIntroText(story.intro);
  el.classList.add('show');
  const btn = document.getElementById('chapter-story-btn');
  btn.onclick = () => {
    el.classList.remove('show');
    onContinue();
  };
}

// 🌟 Chương đặc biệt: mở khi hoàn thành đủ 5 chương, gộp câu hỏi mọi chủ đề + pha Boss cuối
function playSpecialChapter() {
  if (!isSpecialChapterUnlocked()) { showToast('❌ Chưa mở khóa Chương đặc biệt!', '🔒'); return; }
  qIndex = 0; qScore = 0; p1Score = 0; p2Score = 0; currentPlayer = 1;
  quizMode = '1player';
  buildActiveQuizWithSetup('Tất cả', 15);
  if (activeQuizData.length === 0) { showToast('❌ Không đủ câu hỏi!', '⚠️'); return; }
  currentChapterTopic = 'Chương đặc biệt';
  showChapterIntroOverlay('Chương đặc biệt', () => { showGame('g3'); renderQuiz(); });
}