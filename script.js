// 1. KHO DỮ LIỆU TỔNG HỢP
const allQuizzes = {
  "van-lang": [
    { question: "Vị vua đầu tiên của nước Văn Lang là ai?", options: ["Kinh Dương Vương", "Hùng Vương", "An Dương Vương", "Lạc Long Quân"], correct: 1, difficulty: "easy", explanation: "Hùng Vương là người lập ra nhà nước Văn Lang - nhà nước đầu tiên trong lịch sử Việt Nam." },
    { question: "Kinh đô của nước Văn Lang được đặt tại đâu?", options: ["Cổ Loa (Hà Nội)", "Phong Châu (Phú Thọ)", "Hoa Lư (Ninh Bình)", "Phú Xuân (Huế)"], correct: 1, difficulty: "easy", explanation: "Vua Hùng đóng đô ở Phong Châu (nay thuộc tỉnh Phú Thọ)." },
    { question: "Nước Văn Lang trải qua bao nhiêu đời vua Hùng?", options: ["10 đời", "12 đời", "20 đời", "18 đời"], correct: 3, difficulty: "easy", explanation: "Lịch sử ghi chép nước Văn Lang có 18 đời vua Hùng nối ngôi nhau trị vì." },
    { question: "Sự tích nào giải thích nguồn gốc 'Con Rồng Cháu Tiên'?", options: ["Lạc Long Quân và Âu Cơ", "Sơn Tinh Thủy Tinh", "Bánh chưng bánh giầy", "Thạch Sanh"], correct: 0, difficulty: "easy", explanation: "Sự tích Lạc Long Quân (Rồng) và Âu Cơ (Tiên) đẻ ra bọc trăm trứng là nguồn gốc của dân tộc ta." },
    { question: "Người đứng đầu các bộ trong nhà nước Văn Lang gọi là gì?", options: ["Lạc hầu", "Bồ chính", "Lạc tướng", "Quan lang"], correct: 2, difficulty: "medium", explanation: "Dưới vua là Lạc hầu (văn), Lạc tướng (võ). Người đứng đầu các bộ là Lạc tướng." },
    { question: "Ai lãnh đạo Âu Lạc đánh bại quân xâm lược nhà Tần?", options: ["Hùng Vương", "Thục Phán", "Hai Bà Trưng", "Lý Bí"], correct: 1, difficulty: "medium", explanation: "Thục Phán đã lãnh đạo người dân Tây Âu và Lạc Việt đánh bại quân Tần xâm lược." },
    { question: "Thục Phán lên ngôi lấy hiệu là gì?", options: ["Hùng Vương", "Triệu Đà", "Đinh Tiên Hoàng", "An Dương Vương"], correct: 3, difficulty: "easy", explanation: "Sau khi thắng quân Tần, Thục Phán lên ngôi vua, lấy hiệu là An Dương Vương." },
    { question: "Tên nước ta dưới thời An Dương Vương là gì?", options: ["Văn Lang", "Đại Việt", "Vạn Xuân", "Âu Lạc"], correct: 3, difficulty: "easy", explanation: "An Dương Vương hợp nhất hai vùng đất Lạc Việt và Tây Âu, đặt tên nước là Âu Lạc." },
    { question: "Thành Cổ Loa có kiến trúc độc đáo theo hình gì?", options: ["Hình vuông", "Hình xoáy trôn ốc", "Hình tròn", "Hình tam giác"], correct: 1, difficulty: "medium", explanation: "Thành Cổ Loa được xây dựng với các vòng thành xoáy như hình trôn ốc." },
    { question: "Loại vũ khí huyền thoại gắn liền với An Dương Vương?", options: ["Gươm thần", "Nỏ thần (Nỏ Liên Châu)", "Thương bạc", "Súng thần công"], correct: 1, difficulty: "easy", explanation: "An Dương Vương nhờ có Nỏ Liên Châu (Nỏ thần) của Cao Lỗ chế tạo mà giữ được đất nước." },
    { question: "Di chỉ khảo cổ tiêu biểu của thời đại kim khí Việt Nam?", options: ["Đồ đá cũ", "Văn hóa Sa Huỳnh", "Văn hóa Óc Eo", "Văn hóa Đông Sơn"], correct: 3, difficulty: "medium", explanation: "Văn hóa Đông Sơn là đỉnh cao của thời đại kim khí với kỹ thuật đúc đồng tinh xảo." },
    { question: "Vật phẩm là biểu tượng quyền lực văn hóa thời bấy giờ?", options: ["Trống đồng Ngọc Lũ", "Cồng chiêng", "Tượng gỗ", "Ấm trà"], correct: 0, difficulty: "easy", explanation: "Trống đồng là biểu tượng quyền lực và trình độ kỹ thuật tuyệt vời của người Việt cổ." },
    { question: "Nghề chính của cư dân Văn Lang - Âu Lạc là gì?", options: ["Săn bắt", "Thủ công nghiệp", "Buôn bán", "Trồng lúa nước"], correct: 3, difficulty: "easy", explanation: "Người Việt cổ cư trú ở đồng bằng sông Hồng, làm nghề chính là trồng lúa nước." },
    { question: "Sự tích chống giặc ngoại xâm thời Hùng Vương thứ 6?", options: ["Sự tích Trầu Cau", "Thánh Gióng", "Sự tích Dưa Hấu", "Sự tích quả bầu"], correct: 1, difficulty: "easy", explanation: "Thánh Gióng đại diện cho tinh thần quật cường chống giặc Ân thời vua Hùng thứ 6." },
    { question: "Con gái của An Dương Vương trong truyền thuyết là ai?", options: ["Mỵ Nương", "Tiên Dung", "Mỵ Châu", "Ngọc Hoa"], correct: 2, difficulty: "medium", explanation: "Mỵ Châu là con gái An Dương Vương, gắn liền với mối tình bi kịch với Trọng Thủy." },
    { question: "Ai là người đã mưu hại Mỵ Châu để lấy cắp nỏ thần?", options: ["Triệu Đà", "Cao Lỗ", "Lý Ông Trọng", "Trọng Thủy"], correct: 3, difficulty: "medium", explanation: "Trọng Thủy là con trai Triệu Đà, lợi dụng tình cảm của Mỵ Châu để đánh tráo nỏ thần." },
    { question: "Nhà nước Văn Lang ra đời vào khoảng thời gian nào?", options: ["Thế kỷ VII TCN", "Thế kỷ III TCN", "Năm 938", "Năm 40 TCN"], correct: 0, difficulty: "hard", explanation: "Nhà nước Văn Lang được hình thành vào khoảng thế kỷ thứ 7 trước Công nguyên." },
    { question: "Tục làm bánh chưng, bánh giầy có từ đời vua Hùng thứ mấy?", options: ["Đời thứ 1", "Đời thứ 18", "Đời thứ 6", "Đời thứ 10"], correct: 2, difficulty: "medium", explanation: "Tục này gắn liền với Lang Liêu vào thời vua Hùng thứ 6 sau khi thắng giặc Ân." },
    { question: "Người chế tạo ra Nỏ thần giúp An Dương Vương là ai?", options: ["Trần Hưng Đạo", "Yết Kiêu", "Thạch Sanh", "Cao Lỗ"], correct: 3, difficulty: "medium", explanation: "Cao Lỗ là vị tướng giỏi đã giúp An Dương Vương chế tạo ra nỏ bắn một lần được nhiều phát." },
    { question: "Lễ hội mùng 10 tháng 3 âm lịch hàng năm là gì?", options: ["Lễ hội Gióng", "Lễ hội chùa Hương", "Lễ hội gò Đống Đa", "Giỗ Tổ Hùng Vương"], correct: 3, difficulty: "easy", explanation: "'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba'." },
    { question: "Loại trang phục phổ biến của nam giới thời Văn Lang?", options: ["Mặc áo dài", "Mặc comple", "Ở trần, đóng khố", "Mặc áo tứ thân"], correct: 2, difficulty: "easy", explanation: "Do khí hậu nóng ẩm, nam giới thời bấy giờ thường ở trần và đóng khố." },
    { question: "Cư dân Văn Lang thường ở loại nhà nào?", options: ["Nhà tầng", "Nhà biệt thự", "Nhà hang", "Nhà sàn"], correct: 3, difficulty: "easy", explanation: "Nhà sàn giúp tránh thú dữ và ẩm thấp, là kiến trúc tiêu biểu trên mặt trống đồng." },
    { question: "Sự tích 'Mai An Tiêm' gắn liền với loại quả nào?", options: ["Quả bưởi", "Quả khế", "Quả cam", "Quả dưa hấu"], correct: 3, difficulty: "easy", explanation: "Mai An Tiêm bị đày ra đảo hoang và đã tìm thấy giống dưa hấu quý." },
    { question: "Thành Cổ Loa hiện nay thuộc huyện nào của Hà Nội?", options: ["Sóc Sơn", "Gia Lâm", "Ba Vì", "Đông Anh"], correct: 3, difficulty: "medium", explanation: "Khu di tích thành Cổ Loa hiện nay nằm ở huyện Đông Anh, Hà Nội." },
    { question: "Tín ngưỡng chính của người Việt cổ là gì?", options: ["Phật giáo", "Thiên chúa giáo", "Hồi giáo", "Thờ cúng tổ tiên"], correct: 3, difficulty: "easy", explanation: "Thờ cúng tổ tiên và thờ các vị thần tự nhiên là tín ngưỡng lâu đời nhất của người Việt." },
    { question: "Sơn Tinh dùng gì để cưới được Mỵ Nương?", options: ["Vàng bạc", "Kim cương", "Trân châu", "Voi 9 ngà, Gà 9 cựa, Ngựa 9 hồng mao"], correct: 3, difficulty: "medium", explanation: "Đây là các lễ vật quý hiếm mà vua Hùng yêu cầu để gả công chúa Mỵ Nương." },
    { question: "Nước Âu Lạc bị Triệu Đà thôn tính vào năm nào?", options: ["Năm 179 TCN", "Năm 111 TCN", "Năm 208 TCN", "Năm 40"], correct: 0, difficulty: "hard", explanation: "Triệu Đà đã dùng kế 'con rể' để lấy cắp bí mật nỏ thần và đánh chiếm Âu Lạc năm 179 TCN." },
    { question: "Người đứng đầu các bản làng thời Văn Lang gọi là gì?", options: ["Lạc tướng", "Quan lang", "Thổ tù", "Bồ chính"], correct: 3, difficulty: "medium", explanation: "Bồ chính là người đứng đầu các đơn vị làng xã thời Văn Lang." },
    { question: "Bánh giầy có hình tròn tượng trưng cho cái gì?", options: ["Đất", "Mặt trăng", "Sự đoàn kết", "Trời"], correct: 3, difficulty: "medium", explanation: "Theo quan niệm xưa, bánh giầy hình tròn tượng trưng cho Trời, bánh chưng hình vuông tượng trưng cho Đất." },
    { question: "Vị thần giúp An Dương Vương xây thành Cổ Loa?", options: ["Thần Mặt Trời", "Thần núi", "Thần biển", "Thần Kim Quy"], correct: 3, difficulty: "easy", explanation: "Thần Kim Quy (Rùa Vàng) đã giúp vua trừ yêu quái để xây thành và tặng móng nỏ." },
    { question: "Nước Văn Lang được chia thành bao nhiêu bộ để cai quản?", options: ["10 bộ", "15 bộ", "18 bộ", "20 bộ"], correct: 1, difficulty: "medium", explanation: "Nước Văn Lang được chia thành 15 bộ, đứng đầu mỗi bộ là Lạc tướng." },
    { question: "Theo truyền thuyết, ai là cha của Lạc Long Quân, được coi là thủy tổ người Việt?", options: ["Đế Minh", "Vua Thần Nông", "Hùng Vương", "Kinh Dương Vương"], correct: 3, difficulty: "hard", explanation: "Kinh Dương Vương là con trai Đế Minh, được xem là vị vua đầu tiên khai sinh dòng dõi Lạc Long Quân." },
    { question: "Hình ảnh loài chim nào được khắc phổ biến trên trống đồng Đông Sơn?", options: ["Chim Hồng Hạc", "Chim Phượng", "Chim Sẻ", "Chim Lạc"], correct: 3, difficulty: "medium", explanation: "Chim Lạc là hình ảnh biểu tượng thường thấy trên mặt trống đồng Đông Sơn." },
    { question: "Người Việt cổ thời Văn Lang có tục xăm mình chủ yếu nhằm mục đích gì?", options: ["Làm đẹp", "Tránh bị thủy quái làm hại khi xuống nước", "Phân biệt giai cấp", "Thể hiện quyền lực"], correct: 1, difficulty: "medium", explanation: "Do thường xuyên lội nước, người Việt cổ xăm hình thủy quái lên mình để tránh bị làm hại." },
    { question: "Sự tích Trầu Cau lý giải nguồn gốc phong tục nào của người Việt?", options: ["Tục nhuộm răng đen", "Tục thờ cúng tổ tiên", "Tục cưới hỏi", "Tục ăn trầu"], correct: 3, difficulty: "easy", explanation: "Sự tích Trầu Cau cảm động về tình anh em, vợ chồng đã trở thành nguồn gốc của tục ăn trầu." },
    { question: "Sau khi thôn tính Âu Lạc, Triệu Đà lập ra nước nào?", options: ["Đại Việt", "Nam Chiếu", "Đại Cồ Việt", "Nam Việt"], correct: 3, difficulty: "medium", explanation: "Triệu Đà sáp nhập Âu Lạc vào lãnh thổ, lập nên nước Nam Việt năm 179 TCN." },
    { question: "Nền văn hóa nào là giai đoạn phát triển sớm nhất, mở đầu cho văn hóa Đông Sơn?", options: ["Văn hóa Sa Huỳnh", "Văn hóa Óc Eo", "Văn hóa Hòa Bình", "Văn hóa Phùng Nguyên"], correct: 3, difficulty: "hard", explanation: "Văn hóa Phùng Nguyên (khoảng 2000 - 1500 TCN) là giai đoạn mở đầu thời đại kim khí, tiền đề cho văn hóa Đông Sơn." },
    { question: "Mối quan hệ giữa vua Hùng, Lạc hầu, Lạc tướng với dân chúng được ví như thế nào?", options: ["Chủ nô và nô lệ", "Vua và thần dân xa lạ", "Không có quan hệ gắn kết", "Cha con"], correct: 3, difficulty: "medium", explanation: "Quan hệ vua - dân thời Văn Lang còn khá gần gũi, giản dị, được ví như quan hệ cha con." },
    { question: "Quan niệm 'đồng bào' của người Việt bắt nguồn từ truyền thuyết nào?", options: ["Thánh Gióng", "Sơn Tinh Thủy Tinh", "Bánh chưng bánh giầy", "Bọc trăm trứng của Âu Cơ"], correct: 3, difficulty: "easy", explanation: "Chữ 'đồng bào' nghĩa là cùng một bọc, bắt nguồn từ tích Âu Cơ đẻ ra bọc trăm trứng." },
    { question: "Chử Đồng Tử và Tiên Dung là truyền thuyết tiêu biểu thời Hùng Vương gắn với hoạt động nào?", options: ["Trị thủy chống lũ lụt", "Đánh giặc ngoại xâm", "Chế tác trống đồng", "Buôn bán, giao thương"], correct: 3, difficulty: "medium", explanation: "Chử Đồng Tử được xem là ông tổ nghề buôn, câu chuyện gắn liền với việc giao thương buôn bán trên sông." },
    { question: "Vị thần nào trong 'Tứ bất tử' của tín ngưỡng Việt Nam gắn liền với việc trị thủy, chống lụt thời Hùng Vương?", options: ["Chử Đồng Tử", "Thánh Gióng", "Liễu Hạnh", "Tản Viên Sơn Thánh (Sơn Tinh)"], correct: 3, difficulty: "medium", explanation: "Sơn Tinh - Tản Viên Sơn Thánh được thờ là vị thần trị thủy, bảo vệ dân khỏi thiên tai." },
    { question: "Công cụ lao động và vũ khí thời văn hóa Đông Sơn chủ yếu được chế tác từ chất liệu nào?", options: ["Đá", "Sắt", "Gốm", "Đồng thau"], correct: 3, difficulty: "medium", explanation: "Đồng thau (hợp kim đồng - thiếc) là chất liệu chủ đạo để đúc công cụ, vũ khí thời Đông Sơn." },
    { question: "Nghề thủ công nào phát triển nổi bật, thể hiện trình độ kỹ thuật cao của cư dân Đông Sơn?", options: ["Dệt lụa", "Làm giấy", "Nung gốm sứ men lam", "Đúc đồng"], correct: 3, difficulty: "medium", explanation: "Kỹ thuật đúc đồng đạt trình độ điêu luyện, tiêu biểu là trống đồng và các loại vũ khí bằng đồng." },
    { question: "Vũ khí chủ lực giúp quân đội Âu Lạc phòng thủ trước quân xâm lược là gì?", options: ["Súng thần công", "Voi chiến", "Thuyền chiến lớn", "Nỏ Liên Châu và thành Cổ Loa kiên cố"], correct: 3, difficulty: "easy", explanation: "Sự kết hợp giữa thành Cổ Loa kiên cố và Nỏ Liên Châu tạo nên sức mạnh phòng thủ đặc biệt của Âu Lạc." },
    { question: "Xã hội Văn Lang - Âu Lạc thời kỳ này đang trong quá trình chuyển biến từ chế độ nào sang chế độ nào?", options: ["Từ chiếm hữu nô lệ sang phong kiến", "Từ phong kiến sang tư bản", "Từ mẫu hệ sang phụ hệ", "Từ phụ hệ sang mẫu hệ"], correct: 2, difficulty: "hard", explanation: "Xã hội thời Hùng Vương đang chuyển dần từ chế độ mẫu hệ sang phụ hệ." },
    { question: "Thánh Gióng quê ở làng nào?", options: ["Làng Đường Lâm", "Làng Cổ Loa", "Làng Lam Sơn", "Làng Phù Đổng (Gia Lâm, Hà Nội)"], correct: 3, difficulty: "medium", explanation: "Thánh Gióng gắn liền với làng Phù Đổng, nay thuộc huyện Gia Lâm, Hà Nội." },
    { question: "Theo truyền thuyết, Âu Cơ và Lạc Long Quân đã chia 100 người con như thế nào?", options: ["Tất cả theo cha", "Tất cả theo mẹ", "Chia đều cho hai vùng đồng bằng", "50 con theo cha xuống biển, 50 con theo mẹ lên núi"], correct: 3, difficulty: "easy", explanation: "50 người con theo cha Lạc Long Quân xuống biển, 50 người theo mẹ Âu Cơ lên núi, đây là cội nguồn của các vùng miền dân tộc Việt." },
    { question: "Trước khi lập nước Nam Việt, Triệu Đà từng giữ chức vụ gì dưới thời nhà Tần?", options: ["Thái thú Giao Chỉ", "Tể tướng nhà Tần", "Tướng quân nhà Hán", "Quận úy quận Nam Hải"], correct: 3, difficulty: "hard", explanation: "Triệu Đà nguyên là Quận úy quận Nam Hải của nhà Tần trước khi cát cứ lập nước Nam Việt." },
    { question: "Trống đồng Đông Sơn được phát hiện đầu tiên tại địa phương nào?", options: ["Làng Ngọc Lũ, Hà Nam", "Cổ Loa, Hà Nội", "Phong Châu, Phú Thọ", "Làng Đông Sơn, Thanh Hóa"], correct: 3, difficulty: "hard", explanation: "Tên gọi 'văn hóa Đông Sơn' bắt nguồn từ nơi phát hiện đầu tiên là làng Đông Sơn, tỉnh Thanh Hóa." },
    { question: "Theo truyền thuyết bánh chưng bánh giầy, Lang Liêu là người con trai thứ mấy của vua Hùng?", options: ["Con trưởng", "Con thứ 2", "Con út được sủng ái nhất", "Con thứ 18, nghèo khó nhất"], correct: 3, difficulty: "medium", explanation: "Lang Liêu là con trai thứ 18, mồ côi mẹ và nghèo khó nhất trong số các hoàng tử, nhưng nhờ lòng hiếu thảo đã dâng lễ vật quý giá nhất." }
],
   "bac-thuoc": [
    { question: "Cuộc khởi nghĩa đầu tiên chống ách đô hộ phương Bắc do ai lãnh đạo?", options: ["Bà Triệu", "Hai Bà Trưng", "Lý Bí", "Mai Thúc Loan"], correct: 1, difficulty: "easy", explanation: "Năm 40, Hai Bà Trưng (Trưng Trắc, Trưng Nhị) phất cờ khởi nghĩa, mở đầu truyền thống chống Bắc thuộc." },
    { question: "Trưng Trắc khởi binh nhằm trả thù cho ai bị Thái thú Tô Định giết hại?", options: ["Cha ruột", "Chồng là Thi Sách", "Em trai", "Con trai"], correct: 1, difficulty: "easy", explanation: "Thi Sách, chồng Trưng Trắc, bị Tô Định sát hại, là một trong những nguyên nhân trực tiếp dẫn đến khởi nghĩa." },
    { question: "Viên tướng nhà Hán nào đã đem quân đàn áp khởi nghĩa Hai Bà Trưng?", options: ["Sĩ Nhiếp", "Tô Định", "Mã Viện", "Lục Dận"], correct: 2, difficulty: "medium", explanation: "Mã Viện được vua Hán cử đem đại quân sang đàn áp cuộc khởi nghĩa Hai Bà Trưng năm 42-43." },
    { question: "Sau khi khởi nghĩa thất bại, Hai Bà Trưng đã làm gì?", options: ["Đầu hàng nhà Hán", "Chạy sang Chiêm Thành", "Trốn vào rừng ẩn náu", "Tuẫn tiết tại sông Hát Giang"], correct: 3, difficulty: "medium", explanation: "Theo truyền thống sử sách, Hai Bà Trưng đã trầm mình tại sông Hát Giang để giữ trọn khí tiết." },
    { question: "Khởi nghĩa Bà Triệu nổ ra vào năm nào?", options: ["40", "248", "542", "722"], correct: 1, difficulty: "medium", explanation: "Năm 248, Bà Triệu (Triệu Thị Trinh) dấy binh khởi nghĩa chống ách đô hộ nhà Ngô." },
    { question: "Câu nói nổi tiếng thể hiện khí phách của Bà Triệu là gì?", options: ["'Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ...'", "'Đầu ta chưa rơi xuống đất...'", "'Thà làm quỷ nước Nam...'", "'Nợ nước chưa xong đầu đã bạc'"], correct: 0, difficulty: "medium", explanation: "Câu nói thể hiện chí khí không cam chịu làm tì thiếp, quyết đánh đuổi quân xâm lược của Bà Triệu." },
    { question: "Bà Triệu khởi nghĩa chủ yếu tại vùng đất nào?", options: ["Núi Nưa, Thanh Hóa", "Mê Linh", "Hoa Lư", "Cổ Loa"], correct: 0, difficulty: "medium", explanation: "Bà Triệu dấy binh khởi nghĩa tại vùng núi Nưa (Triệu Sơn, Thanh Hóa ngày nay)." },
    { question: "Ai là người lãnh đạo cuộc khởi nghĩa năm 542, đánh đuổi quân Lương, lập nước Vạn Xuân?", options: ["Triệu Quang Phục", "Lý Bí", "Phùng Hưng", "Mai Thúc Loan"], correct: 1, difficulty: "easy", explanation: "Lý Bí lãnh đạo khởi nghĩa thắng lợi năm 542, lên ngôi hoàng đế, lập ra nước Vạn Xuân." },
    { question: "Lý Bí xưng đế, lấy hiệu là gì?", options: ["Lý Nam Đế", "Lý Thái Tổ", "Lý Nam Vương", "Vạn Xuân Đế"], correct: 0, difficulty: "easy", explanation: "Lý Bí lên ngôi hoàng đế, xưng là Lý Nam Đế, đặt tên nước là Vạn Xuân." },
    { question: "Quốc hiệu do Lý Bí đặt cho nước ta mang ý nghĩa gì?", options: ["Sự yên vui muôn thuở", "Đất nước rộng lớn", "Mong đất nước bền vững, tồn tại muôn đời như mùa xuân", "Chiến thắng vĩnh viễn"], correct: 2, difficulty: "medium", explanation: "'Vạn Xuân' gửi gắm ước vọng về một đất nước tồn tại lâu bền, tươi đẹp như mùa xuân bất tận." },
    { question: "Sau khi Lý Nam Đế mất, ai tiếp tục lãnh đạo kháng chiến chống quân Lương?", options: ["Lý Phật Tử", "Triệu Quang Phục", "Lý Thiên Bảo", "Phạm Tu"], correct: 1, difficulty: "medium", explanation: "Triệu Quang Phục được Lý Nam Đế trao quyền, tiếp tục lãnh đạo cuộc kháng chiến chống quân Lương xâm lược." },
    { question: "Triệu Quang Phục lập căn cứ kháng chiến nổi tiếng ở đâu?", options: ["Đầm Dạ Trạch", "Núi Nưa", "Cổ Loa", "Hoa Lư"], correct: 0, difficulty: "medium", explanation: "Ông xây dựng căn cứ tại đầm Dạ Trạch (Hưng Yên), dùng lối đánh du kích khiến quân Lương hao tổn nặng nề." },
    { question: "Triệu Quang Phục được nhân dân gọi bằng biệt danh nào gắn với căn cứ Dạ Trạch?", options: ["Dạ Trạch Vương", "Bố Cái Đại Vương", "Vạn Thắng Vương", "Bình Định Vương"], correct: 0, difficulty: "medium", explanation: "Dân gian gọi ông là Dạ Trạch Vương do gắn liền với chiến khu đầm lầy Dạ Trạch." },
    { question: "Ai là người cuối cùng tranh giành và kết thúc nhà nước Vạn Xuân?", options: ["Lý Thiên Bảo", "Lý Phật Tử", "Triệu Việt Vương", "Phạm Tu"], correct: 1, difficulty: "hard", explanation: "Lý Phật Tử (cháu Lý Nam Đế) tranh ngôi và đánh bại Triệu Việt Vương, trở thành vị vua cuối cùng của Vạn Xuân trước khi bị nhà Tùy đánh bại." },
    { question: "Khởi nghĩa Mai Thúc Loan nổ ra vào khoảng năm nào?", options: ["713 - 722", "542", "905", "40"], correct: 0, difficulty: "medium", explanation: "Mai Thúc Loan dấy binh khởi nghĩa chống nhà Đường vào khoảng những năm 713-722." },
    { question: "Mai Thúc Loan xưng đế, được nhân dân gọi là gì?", options: ["Mai Hắc Đế", "Bố Cái Đại Vương", "Vạn Xuân Đế", "Lý Nam Đế"], correct: 0, difficulty: "easy", explanation: "Do có nước da ngăm đen, ông được gọi là Mai Hắc Đế (Vua Đen họ Mai)." },
    { question: "Mai Thúc Loan xây dựng căn cứ khởi nghĩa tại đâu?", options: ["Sa Nam (Nghệ An)", "Đầm Dạ Trạch", "Đường Lâm", "Mê Linh"], correct: 0, difficulty: "medium", explanation: "Ông chọn vùng Sa Nam (Nam Đàn, Nghệ An) làm căn cứ, xây thành Vạn An." },
    { question: "Khởi nghĩa Phùng Hưng chống lại ách đô hộ của triều đại nào?", options: ["Nhà Hán", "Nhà Ngô", "Nhà Đường", "Nhà Lương"], correct: 2, difficulty: "medium", explanation: "Phùng Hưng lãnh đạo nhân dân khởi nghĩa chống ách đô hộ tàn bạo của nhà Đường vào cuối thế kỷ VIII." },
    { question: "Phùng Hưng quê ở vùng đất nào?", options: ["Đường Lâm (Sơn Tây, Hà Nội)", "Mê Linh", "Sa Nam", "Cổ Loa"], correct: 0, difficulty: "medium", explanation: "Phùng Hưng quê ở Đường Lâm, cùng quê với Ngô Quyền sau này." },
    { question: "Nhân dân suy tôn Phùng Hưng là gì sau khi ông mất?", options: ["Bố Cái Đại Vương", "Mai Hắc Đế", "Vạn Thắng Vương", "Dạ Trạch Vương"], correct: 0, difficulty: "easy", explanation: "'Bố Cái Đại Vương' nghĩa là vua Cha Mẹ, thể hiện lòng biết ơn của dân với người có công như cha mẹ." },
    { question: "Ai là người khởi xướng phong trào tự chủ, được xem là mở đầu cho họ Khúc giành quyền tự chủ đầu thế kỷ X?", options: ["Khúc Thừa Dụ", "Khúc Hạo", "Khúc Thừa Mỹ", "Dương Đình Nghệ"], correct: 0, difficulty: "medium", explanation: "Năm 905, Khúc Thừa Dụ nhân lúc nhà Đường suy yếu đã chiếm giữ Tống Bình, xưng là Tiết độ sứ, mở đầu thời kỳ tự chủ." },
    { question: "Con trai Khúc Thừa Dụ, người tiếp tục củng cố nền tự chủ, là ai?", options: ["Khúc Hạo", "Khúc Thừa Mỹ", "Dương Đình Nghệ", "Ngô Quyền"], correct: 0, difficulty: "medium", explanation: "Khúc Hạo kế nghiệp cha, tiến hành nhiều cải cách hành chính quan trọng, củng cố nền tự chủ." },
    { question: "Chính sách nổi bật của Khúc Hạo trong việc quản lý đất nước là gì?", options: ["Định lại mức thuế, lập sổ hộ khẩu, chia lại các khu vực hành chính", "Xây thành lũy kiên cố", "Đúc tiền riêng", "Mở khoa thi tuyển chọn nhân tài"], correct: 0, difficulty: "hard", explanation: "Khúc Hạo cải cách hành chính, định lại thuế khóa, lập sổ hộ khẩu nhằm quản lý đất nước hiệu quả hơn." },
    { question: "Ai đã đánh bại quân Nam Hán, giữ vững quyền tự chủ sau khi họ Khúc suy yếu?", options: ["Dương Đình Nghệ", "Ngô Quyền", "Kiều Công Tiễn", "Lý Nam Đế"], correct: 0, difficulty: "medium", explanation: "Dương Đình Nghệ đánh đuổi quân Nam Hán xâm lược, tiếp tục giữ vững quyền tự chủ cho đất nước." },
    { question: "Dưới thời Bắc thuộc, các triều đại phong kiến phương Bắc gọi nước ta bằng tên gì phổ biến nhất?", options: ["Giao Chỉ / An Nam", "Đại Việt", "Nam Việt", "Đại Ngu"], correct: 0, difficulty: "easy", explanation: "Trong thời Bắc thuộc, các triều đại Trung Hoa thường gọi vùng đất ta là Giao Chỉ, sau đổi thành An Nam đô hộ phủ." },
    { question: "Chính sách bóc lột nào của phong kiến phương Bắc gây bất bình lớn trong dân chúng?", options: ["Mở trường học miễn phí", "Bắt cống nạp sản vật quý và lao dịch nặng nề", "Giảm thuế cho nông dân", "Cấp đất cho dân nghèo"], correct: 1, difficulty: "easy", explanation: "Chính quyền đô hộ bóc lột nặng nề qua tô thuế, cống nạp sản vật quý và bắt dân đi lao dịch." },
    { question: "Sĩ Nhiếp, một Thái thú người Việt được tôn sùng, gắn liền với công lao gì?", options: ["Đánh đuổi quân Hán", "Truyền bá chữ Hán và Nho học vào Giao Chỉ", "Xây thành Cổ Loa", "Lãnh đạo khởi nghĩa"], correct: 1, difficulty: "hard", explanation: "Sĩ Nhiếp được xem là người có công truyền bá Nho học, chữ Hán vào Giao Chỉ, được dân tôn xưng là 'Sĩ Vương'." },
    { question: "Trong suốt hơn 1000 năm Bắc thuộc, yếu tố nào giúp dân tộc ta không bị đồng hóa hoàn toàn?", options: ["Nhờ chính sách khoan hồng của phương Bắc", "Ý thức dân tộc, tiếng nói và phong tục truyền thống được gìn giữ", "Do địa hình cách trở hoàn toàn", "Nhờ sự giúp đỡ từ bên ngoài"], correct: 1, difficulty: "medium", explanation: "Chính ý thức dân tộc mạnh mẽ cùng việc bền bỉ giữ gìn tiếng Việt, phong tục đã giúp ta không bị đồng hóa." },
    { question: "Cuộc khởi nghĩa Hai Bà Trưng ban đầu đã làm chủ được bao nhiêu thành trì ở Giao Chỉ?", options: ["10 thành", "65 thành", "30 thành", "100 thành"], correct: 1, difficulty: "hard", explanation: "Nghĩa quân Hai Bà Trưng nhanh chóng làm chủ 65 thành trì, buộc Tô Định phải bỏ chạy về nước." },
    { question: "Sau khi giành thắng lợi, Trưng Trắc xưng vương và đóng đô ở đâu?", options: ["Cổ Loa", "Mê Linh", "Luy Lâu", "Hoa Lư"], correct: 1, difficulty: "medium", explanation: "Trưng Trắc xưng Trưng Nữ Vương, đóng đô tại Mê Linh, quê hương của hai Bà." },
    { question: "Nhà Ngô cử viên tướng nào đem quân đàn áp cuộc khởi nghĩa Bà Triệu?", options: ["Tô Định", "Mã Viện", "Lục Dận", "Sĩ Nhiếp"], correct: 2, difficulty: "hard", explanation: "Lục Dận được vua Ngô cử đem quân đàn áp khởi nghĩa Bà Triệu năm 248." },
    { question: "Sau khi đánh bại quân Lương, Triệu Quang Phục xưng vương với hiệu là gì?", options: ["Vạn Xuân Vương", "Dạ Trạch Vương", "Triệu Việt Vương", "Lý Nam Đế"], correct: 2, difficulty: "medium", explanation: "Triệu Quang Phục lên ngôi, xưng là Triệu Việt Vương, tiếp tục sự nghiệp nhà nước Vạn Xuân." },
    { question: "Lý Phật Tử là ai trong lịch sử nhà nước Vạn Xuân?", options: ["Con trai Triệu Quang Phục", "Tướng nhà Lương", "Cháu Lý Nam Đế, giành ngôi và trở thành Hậu Lý Nam Đế", "Một sứ quân thời loạn 12 sứ quân"], correct: 2, difficulty: "hard", explanation: "Lý Phật Tử là cháu Lý Nam Đế, sau tranh giành và thay thế Triệu Việt Vương, trở thành vị vua cuối cùng của nhà nước Vạn Xuân (Hậu Lý Nam Đế)." },
    { question: "Ai là tướng của Lý Bí, được xem là một trong những khai quốc công thần của Vạn Xuân, hy sinh khi đánh quân Lương?", options: ["Phạm Tu", "Triệu Quang Phục", "Lý Thiên Bảo", "Lý Phật Tử"], correct: 0, difficulty: "hard", explanation: "Lão tướng Phạm Tu là khai quốc công thần nhà Tiền Lý, đã anh dũng hy sinh khi chặn quân Lương ở cửa sông Tô Lịch." },
    { question: "Chùa Trấn Quốc (Hà Nội) tương truyền gắn liền với sự kiện nào của thời Tiền Lý?", options: ["Được xây dựng ngay sau khi Lý Nam Đế lên ngôi, gần nơi đóng đô", "Nơi Hai Bà Trưng tuẫn tiết", "Nơi Mai Hắc Đế lập căn cứ", "Nơi Phùng Hưng qua đời"], correct: 0, difficulty: "hard", explanation: "Chùa Trấn Quốc có nguồn gốc từ thời Lý Nam Đế, ban đầu được dựng gần khu vực kinh đô của nhà nước Vạn Xuân." },
    { question: "Nhà Đường đặt ách đô hộ nước ta dưới tên gọi hành chính nào?", options: ["Giao Châu", "An Nam đô hộ phủ", "Tĩnh Hải quân", "Quận Nhật Nam"], correct: 1, difficulty: "medium", explanation: "Nhà Đường lập ra An Nam đô hộ phủ để cai quản vùng đất Việt, đây cũng là nguồn gốc tên gọi 'An Nam'." },
    { question: "Khởi nghĩa Mai Thúc Loan từng liên kết với sự trợ giúp của các nước láng giềng nào?", options: ["Champa và Chân Lạp", "Nhà Đường", "Nam Chiếu", "Nhật Bản"], correct: 0, difficulty: "hard", explanation: "Sử sách ghi nhận Mai Hắc Đế từng liên kết với Champa, Chân Lạp và một số nước khác để tăng cường lực lượng chống nhà Đường." },
    { question: "Quân khởi nghĩa của Mai Hắc Đế từng tiến đánh và làm chủ thành nào trong thời gian ngắn?", options: ["Tống Bình (Hà Nội)", "Cổ Loa", "Luy Lâu", "Phong Châu"], correct: 0, difficulty: "hard", explanation: "Nghĩa quân Mai Hắc Đế từng đánh chiếm và làm chủ thành Tống Bình trong một thời gian trước khi bị nhà Đường phản công." },
    { question: "Danh xưng 'Tĩnh Hải quân' xuất hiện dưới thời nhà nào cai trị nước ta?", options: ["Nhà Đường (giai đoạn cuối)", "Nhà Hán", "Nhà Lương", "Nhà Tống"], correct: 0, difficulty: "hard", explanation: "Cuối thời Đường, khu vực Giao Châu được đổi tên hành chính thành Tĩnh Hải quân." },
    { question: "Ai là người đầu tiên trong họ Khúc được nhà Đường buộc phải công nhận chức Tiết độ sứ?", options: ["Khúc Thừa Dụ", "Khúc Hạo", "Khúc Thừa Mỹ", "Dương Đình Nghệ"], correct: 0, difficulty: "medium", explanation: "Khúc Thừa Dụ tự xưng Tiết độ sứ năm 905 và được nhà Đường suy yếu buộc phải công nhận trên danh nghĩa." },
    { question: "Khúc Thừa Mỹ, người kế nghiệp Khúc Hạo, đã gặp thất bại trước thế lực nào?", options: ["Nam Hán", "Nhà Đường", "Nhà Lương", "Champa"], correct: 0, difficulty: "hard", explanation: "Khúc Thừa Mỹ bị quân Nam Hán đánh bại và bắt giữ, chấm dứt giai đoạn tự chủ đầu tiên của họ Khúc." },
    { question: "Dương Đình Nghệ là nhạc phụ (cha vợ) của nhân vật lịch sử nổi tiếng nào sau này?", options: ["Ngô Quyền", "Đinh Bộ Lĩnh", "Lê Hoàn", "Lý Công Uẩn"], correct: 0, difficulty: "medium", explanation: "Dương Đình Nghệ là cha vợ của Ngô Quyền, người sau này đánh thắng quân Nam Hán trên sông Bạch Đằng." },
    { question: "Kiều Công Tiễn, kẻ sát hại Dương Đình Nghệ, có hành động phản quốc nào tiếp theo?", options: ["Cầu cứu quân Nam Hán sang can thiệp", "Tự lập làm vua", "Xin thần phục nhà Đường", "Chạy sang Champa lánh nạn"], correct: 0, difficulty: "medium", explanation: "Sau khi giết Dương Đình Nghệ đoạt quyền, Kiều Công Tiễn cầu cứu quân Nam Hán, dẫn đến trận Bạch Đằng lịch sử." },
    { question: "Trước khi có chữ Quốc ngữ, chữ viết chính thức được sử dụng trong hành chính suốt thời Bắc thuộc là gì?", options: ["Chữ Hán", "Chữ Nôm", "Chữ Phạn", "Chữ Chăm cổ"], correct: 0, difficulty: "easy", explanation: "Chữ Hán được chính quyền đô hộ sử dụng làm văn tự hành chính chính thức suốt thời kỳ Bắc thuộc." },
    { question: "Tôn giáo nào được du nhập mạnh mẽ vào nước ta trong thời kỳ Bắc thuộc, cùng với Nho giáo và Đạo giáo?", options: ["Phật giáo", "Hồi giáo", "Ấn Độ giáo", "Thiên Chúa giáo"], correct: 0, difficulty: "easy", explanation: "Phật giáo du nhập từ rất sớm và phát triển song song cùng Nho giáo, Đạo giáo trong thời Bắc thuộc." },
    { question: "Cuộc đấu tranh của nhân dân ta thời Bắc thuộc diễn ra theo đặc điểm nào xuyên suốt hơn 1000 năm?", options: ["Chỉ diễn ra một lần duy nhất", "Liên tục, bền bỉ qua nhiều thế hệ, nhiều cuộc khởi nghĩa nối tiếp nhau", "Hoàn toàn im lặng chịu đựng", "Chỉ có tính chất tự phát nhỏ lẻ, không có tổ chức"], correct: 1, difficulty: "medium", explanation: "Suốt hơn 1000 năm Bắc thuộc, các cuộc khởi nghĩa liên tục nổ ra từ Hai Bà Trưng đến họ Khúc, thể hiện tinh thần quật cường bền bỉ." },
    { question: "Ý nghĩa lớn nhất của hơn 1000 năm đấu tranh thời Bắc thuộc là gì?", options: ["Giúp phương Bắc củng cố quyền cai trị", "Không để lại ý nghĩa gì đáng kể", "Khẳng định sức sống bền bỉ và bảo tồn được bản sắc dân tộc Việt", "Khiến dân tộc ta bị đồng hóa hoàn toàn"], correct: 2, difficulty: "medium", explanation: "Dù bị đô hộ hơn nghìn năm, dân tộc ta vẫn giữ vững bản sắc văn hóa, tiếng nói và ý chí giành lại độc lập." },
    { question: "Cuộc khởi nghĩa Lý Bí có sự tham gia hỗ trợ của thủ lĩnh vùng nào ở phía Nam?", options: ["Đức Châu (một thủ lĩnh địa phương)", "Champa", "Chân Lạp", "Ai Lao"], correct: 0, difficulty: "hard", explanation: "Nhiều thủ lĩnh địa phương như ở Đức Châu đã hưởng ứng và tham gia cuộc khởi nghĩa của Lý Bí chống nhà Lương." },
    { question: "Trận Bạch Đằng năm 938 diễn ra ngay sau bối cảnh lịch sử nào của thời kỳ Bắc thuộc?", options: ["Kiều Công Tiễn cầu cứu quân Nam Hán sang xâm lược", "Khởi nghĩa Mai Hắc Đế thất bại", "Loạn 12 sứ quân", "Khúc Thừa Mỹ bị bắt"], correct: 0, difficulty: "medium", explanation: "Việc Kiều Công Tiễn cầu cứu Nam Hán đã dẫn đến cuộc xâm lược mà Ngô Quyền đánh bại trên sông Bạch Đằng năm 938, chấm dứt thời Bắc thuộc." }
],
 "ly-tran": [
    { question: "Lý Thường Kiệt lãnh đạo cuộc kháng chiến chống quân xâm lược nào?", options: ["Quân Nguyên", "Quân Tống", "Quân Thanh", "Quân Minh"], correct: 1, difficulty: "easy", explanation: "Lý Thường Kiệt là linh hồn của cuộc kháng chiến chống quân Tống xâm lược (1075 - 1077)." },
    { question: "Người thầy giáo được mệnh danh là 'Vạn thế sư biểu' thời Trần là ai?", options: ["Nguyễn Hiền", "Lê Văn Hưu", "Chu Văn An", "Mạc Đĩnh Chi"], correct: 2, difficulty: "medium", explanation: "Chu Văn An là nhà giáo mẫu mực, được tôn vinh là 'Người thầy của muôn đời'." },
    { question: "Vị vua cuối cùng của triều đại nhà Lý là ai?", options: ["Lý Huệ Tông", "Lý Cao Tông", "Lý Anh Tông", "Lý Chiêu Hoàng"], correct: 3, difficulty: "medium", explanation: "Lý Chiêu Hoàng là nữ hoàng duy nhất, sau đó bà nhường ngôi cho chồng là Trần Cảnh, kết thúc triều Lý." },
    { question: "Bộ luật thành văn đầu tiên của nước ta thời Lý có tên là gì?", options: ["Luật Gia Long", "Luật Hồng Đức", "Quốc triều hình luật", "Hình thư"], correct: 3, difficulty: "medium", explanation: "Năm 1042, nhà Lý ban hành bộ 'Hình thư', bộ luật thành văn đầu tiên của Việt Nam." },
    { question: "Thái sư có công lớn trong việc thành lập nhà Trần là ai?", options: ["Trần Thủ Độ", "Trần Quang Khải", "Trần Nhật Duật", "Trần Quốc Toản"], correct: 0, difficulty: "easy", explanation: "Trần Thủ Độ là người đạo diễn cuộc chuyển giao quyền lực từ nhà Lý sang nhà Trần năm 1226." },
    { question: "Lý Thường Kiệt đã sử dụng chiến thuật gì khi đánh quân Tống năm 1075?", options: ["Vườn không nhà trống", "Tiên phát chế nhân", "Vây thành", "Du kích"], correct: 1, difficulty: "hard", explanation: "Chiến thuật đánh sang đất Tống để phá hủy kho tàng của giặc được gọi là 'Tiên phát chế nhân'." },
    { question: "Vị trạng nguyên trẻ tuổi nhất lịch sử Việt Nam (13 tuổi) thời Trần là ai?", options: ["Mạc Đĩnh Chi", "Lương Thế Vinh", "Nguyễn Hiền", "Lê Quý Đôn"], correct: 2, difficulty: "medium", explanation: "Nguyễn Hiền đỗ Trạng nguyên năm 1247 khi mới 13 tuổi, được gọi là Trạng Hiền." },
    { question: "Tướng giặc nào đã phải chui vào ống đồng để chạy trốn về nước?", options: ["Toa Đô", "Ô Mã Nhi", "Liễu Thăng", "Thoát Hoan"], correct: 3, difficulty: "medium", explanation: "Thoát Hoan kinh hãi trước sức mạnh quân Trần nên phải chui vào ống đồng để lính khiêng chạy trốn." },
    { question: "Công chúa nhà Trần nào đã được gả cho vua Chăm-pa để đổi lấy hai châu Ô, Lý?", options: ["Công chúa Ngọc Hân", "Công chúa An Tư", "Công chúa Huyền Trân", "Công chúa Thiên Thành"], correct: 2, difficulty: "easy", explanation: "Huyền Trân Công Chúa đã vì đại nghĩa mà gả cho vua Chế Mân, giúp bờ cõi mở thêm hai châu Ô và Lý." },
    { question: "Ai là người chỉ huy trận chiến trên sông Bạch Đằng năm 1288?", options: ["Trần Thái Tông", "Trần Thánh Tông", "Trần Quang Khải", "Trần Quốc Tuấn"], correct: 3, difficulty: "easy", explanation: "Hưng Đạo Vương Trần Quốc Tuấn đã tái hiện chiến thắng cọc gỗ trên sông Bạch Đằng đánh tan quân Nguyên." },
    { question: "Tên nước ta dưới thời nhà Lý và nhà Trần là gì?", options: ["Đại Cồ Việt", "Đại Nam", "Việt Nam", "Đại Việt"], correct: 3, difficulty: "easy", explanation: "Năm 1054, vua Lý Thánh Tông đổi tên nước từ Đại Cồ Việt thành Đại Việt." },
    { question: "Câu nói: 'Đầu thần chưa rơi xuống đất, xin bệ hạ đừng lo' là của ai?", options: ["Trần Bình Trọng", "Trần Thủ Độ", "Trần Quốc Tuấn", "Yết Kiêu"], correct: 1, difficulty: "medium", explanation: "Đây là câu trả lời đanh thép của Trần Thủ Độ khi vua Trần Thái Tông hỏi về kế sách đánh giặc." },
    { question: "Chùa Một Cột (Liên Hoa Đài) được xây dựng dưới triều đại nào?", options: ["Nhà Đinh", "Nhà Trần", "Nhà Lê", "Nhà Lý"], correct: 3, difficulty: "easy", explanation: "Chùa Một Cột được vua Lý Thái Tông cho xây dựng theo giấc mơ thấy Phật Bà Quan Âm." },
    { question: "Vị vua nào nhà Trần đã đi tu và trở thành Sơ tổ thiền phái Trúc Lâm?", options: ["Trần Thái Tông", "Trần Thánh Tông", "Trần Anh Tông", "Trần Nhân Tông"], correct: 3, difficulty: "medium", explanation: "Vua Trần Nhân Tông sau khi dẹp giặc đã nhường ngôi và đi tu tại núi Yên Tử." },
    { question: "Hội nghị Bình Than được tổ chức nhằm mục đích gì?", options: ["Bàn kế hoạch dời đô", "Bầu vua mới", "Phân chia ruộng đất", "Bàn kế sách đánh giặc Nguyên Mông"], correct: 3, difficulty: "medium", explanation: "Hội nghị Bình Than quy tụ các vương hầu, tướng lĩnh bàn cách chống quân Nguyên lần 2." },
    { question: "Tác giả của bộ sử 'Đại Việt sử ký' đầu tiên là ai?", options: ["Ngô Sĩ Liên", "Phan Huy Chú", "Trần Trọng Kim", "Lê Văn Hưu"], correct: 3, difficulty: "hard", explanation: "Lê Văn Hưu là người biên soạn bộ quốc sử đầu tiên của nước ta năm 1272." },
    { question: "Ai là người có công dẹp loạn 12 sứ quân, mở đường cho sự ổn định trước thời Lý?", options: ["Đinh Bộ Lĩnh", "Lê Hoàn", "Ngô Quyền", "Lý Công Uẩn"], correct: 0, difficulty: "easy", explanation: "Đinh Bộ Lĩnh đã dẹp loạn 12 sứ quân, thống nhất đất nước và lập ra nhà Đinh." },
    { question: "Trận đánh tiêu biểu nhất trên sông Như Nguyệt gắn liền với ai?", options: ["Trần Hưng Đạo", "Ngô Quyền", "Lê Lợi", "Lý Thường Kiệt"], correct: 3, difficulty: "medium", explanation: "Phòng tuyến Như Nguyệt là nơi Lý Thường Kiệt chặn đứng quân Tống xâm lược." },
    { question: "Câu nói: 'Thà làm quỷ nước Nam còn hơn làm vương đất Bắc' là của ai?", options: ["Trần Bình Trọng", "Trần Hưng Đạo", "Trần Quang Khải", "Nguyễn Trung Trực"], correct: 0, difficulty: "easy", explanation: "Câu nói bất hủ của Trần Bình Trọng khi bị quân Nguyên bắt và dụ dỗ đầu hàng." },
    { question: "Tướng quân nào thời Trần nổi tiếng với biệt tài bơi lặn?", options: ["Dã Tượng", "Phạm Ngũ Lão", "Trần Khánh Dư", "Yết Kiêu"], correct: 3, difficulty: "medium", explanation: "Yết Kiêu có biệt tài bơi lặn, thường đục thuyền giặc trong cuộc kháng chiến chống Nguyên Mông." },
    { question: "Vua Lý Công Uẩn quyết định dời đô từ Hoa Lư về Thăng Long vào năm nào?", options: ["1009", "1054", "1075", "1010"], correct: 3, difficulty: "easy", explanation: "Năm 1010, Lý Công Uẩn ban Chiếu dời đô, chuyển kinh đô về Đại La và đổi tên thành Thăng Long." },
    { question: "Văn Miếu - nơi thờ Khổng Tử và là biểu tượng nền giáo dục Đại Việt, được xây dựng năm nào?", options: ["1010", "1076", "1226", "1070"], correct: 3, difficulty: "medium", explanation: "Văn Miếu được xây dựng năm 1070 dưới thời vua Lý Thánh Tông." },
    { question: "Quốc Tử Giám - trường đại học đầu tiên của Việt Nam - được thành lập năm nào?", options: ["1070", "1226", "1428", "1076"], correct: 3, difficulty: "medium", explanation: "Năm 1076, nhà Lý lập Quốc Tử Giám để dạy học cho con em hoàng tộc và quan lại." },
    { question: "Công chúa nào thời Trần giả làm cung nữ sang trại giặc để do thám, góp phần vào chiến thắng kháng Nguyên lần 2?", options: ["Công chúa Huyền Trân", "Công chúa Thiên Thành", "Công chúa Ngọc Hân", "Công chúa An Tư"], correct: 3, difficulty: "hard", explanation: "Công chúa An Tư đã hy sinh hạnh phúc cá nhân, giúp triều đình có thêm thời gian chuẩn bị kháng chiến." },
    { question: "Quân Nguyên Mông đã bao nhiêu lần đem quân xâm lược Đại Việt thời Trần?", options: ["1 lần", "2 lần", "4 lần", "3 lần"], correct: 3, difficulty: "easy", explanation: "Quân Nguyên Mông xâm lược Đại Việt 3 lần vào các năm 1258, 1285 và 1288, đều bị đánh bại." },
    { question: "Hội nghị Diên Hồng được tổ chức nhằm mục đích gì?", options: ["Bàn việc dời đô", "Phong tước cho các tướng lĩnh", "Lập thái tử", "Hỏi ý kiến các bô lão về việc nên hòa hay nên đánh quân Nguyên"], correct: 3, difficulty: "easy", explanation: "Hội nghị Diên Hồng thể hiện ý chí quyết chiến của toàn dân tộc trước nguy cơ xâm lược của quân Nguyên." },
    { question: "Trần Quốc Tuấn còn được nhân dân tôn kính gọi bằng danh hiệu nào?", options: ["Vạn Thế Sư Biểu", "Bố Cái Đại Vương", "Bình Định Vương", "Đức Thánh Trần"], correct: 3, difficulty: "medium", explanation: "Nhân dân tôn thờ Trần Hưng Đạo là 'Đức Thánh Trần' vì công lao to lớn trong ba lần kháng chiến chống Nguyên Mông." },
    { question: "Tác phẩm nào của Trần Quốc Tuấn được viết để khích lệ tinh thần chiến đấu của tướng sĩ?", options: ["Bình Ngô đại cáo", "Nam quốc sơn hà", "Chiếu dời đô", "Hịch tướng sĩ"], correct: 3, difficulty: "easy", explanation: "'Hịch tướng sĩ' là áng văn hùng tráng kêu gọi tướng sĩ rèn luyện, quyết tâm đánh bại quân Nguyên Mông." },
    { question: "Ai là nguyên phi có công lớn giúp nhà Lý khi nhiếp chính lúc vua còn nhỏ tuổi?", options: ["Huyền Trân", "An Tư", "Ngọc Hân", "Ỷ Lan"], correct: 3, difficulty: "medium", explanation: "Nguyên phi Ỷ Lan hai lần nhiếp chính, có nhiều đóng góp trong việc trị nước thời Lý." },
    { question: "Nhà Lý tồn tại trong khoảng thời gian bao lâu?", options: ["Khoảng 100 năm", "Khoảng 300 năm", "Khoảng 50 năm", "Khoảng 215 năm"], correct: 3, difficulty: "hard", explanation: "Nhà Lý tồn tại từ năm 1009 đến 1225, khoảng 215 năm." },
    { question: "Ai là người nhường ngôi để chuyển giao quyền lực từ nhà Lý sang nhà Trần năm 1226?", options: ["Lý Huệ Tông", "Lý Cao Tông", "Lý Anh Tông", "Lý Chiêu Hoàng"], correct: 3, difficulty: "medium", explanation: "Nữ hoàng Lý Chiêu Hoàng đã nhường ngôi cho chồng là Trần Cảnh, chính thức mở ra triều đại nhà Trần." },
    { question: "Trần Cảnh lên ngôi hoàng đế lấy niên hiệu là gì?", options: ["Trần Thái Tông", "Trần Thánh Tông", "Trần Nhân Tông", "Trần Anh Tông"], correct: 0, difficulty: "easy", explanation: "Trần Cảnh lên ngôi, trở thành vị vua đầu tiên của nhà Trần với niên hiệu Trần Thái Tông." },
    { question: "Trận đánh nào đã kết thúc thắng lợi cuộc kháng chiến chống quân Nguyên Mông lần thứ nhất (1258)?", options: ["Trận Bạch Đằng", "Trận Chương Dương", "Trận Vạn Kiếp", "Trận Đông Bộ Đầu"], correct: 3, difficulty: "medium", explanation: "Chiến thắng Đông Bộ Đầu buộc quân Nguyên phải rút chạy khỏi Thăng Long, kết thúc cuộc xâm lược lần thứ nhất." },
    { question: "Câu nói nào của Trần Bình Trọng thể hiện khí phách bất khuất trước quân xâm lược?", options: ["'Không có gì quý hơn độc lập tự do'", "'Đánh cho sử tri Nam quốc anh hùng chi hữu chủ'", "'Nam quốc sơn hà Nam đế cư'", "'Thà làm quỷ nước Nam còn hơn làm vương đất Bắc'"], correct: 3, difficulty: "easy", explanation: "Câu nói bất hủ này thể hiện tinh thần thà chết vinh còn hơn sống nhục của Trần Bình Trọng." },
    { question: "Sau khi lãnh đạo kháng chiến thắng lợi, vua Trần Nhân Tông đã làm gì để lại dấu ấn về tư tưởng?", options: ["Dời đô về Thanh Hóa", "Ban hành bộ luật Hồng Đức", "Cải cách thi cử", "Đi tu, sáng lập Thiền phái Trúc Lâm Yên Tử"], correct: 3, difficulty: "medium", explanation: "Trần Nhân Tông nhường ngôi, xuất gia tu hành và trở thành Sơ tổ Thiền phái Trúc Lâm Yên Tử." },
    { question: "Bài thơ thần 'Nam quốc sơn hà' được tương truyền vang lên tại đâu để khích lệ tinh thần quân sĩ?", options: ["Thành Cổ Loa", "Sông Bạch Đằng", "Ải Chi Lăng", "Phòng tuyến sông Như Nguyệt"], correct: 3, difficulty: "medium", explanation: "Tương truyền Lý Thường Kiệt cho đọc vang bài thơ thần tại phòng tuyến Như Nguyệt để cổ vũ quân sĩ." },
    { question: "Trần Quang Khải là tác giả bài thơ nổi tiếng nào mừng chiến thắng quân Nguyên Mông?", options: ["Hịch tướng sĩ", "Nam quốc sơn hà", "Bạch Đằng giang phú", "Tụng giá hoàn kinh sư"], correct: 3, difficulty: "hard", explanation: "'Tụng giá hoàn kinh sư' (Phò giá về kinh) do Trần Quang Khải sáng tác khi hộ giá vua trở về Thăng Long sau chiến thắng." },
    { question: "Ai là viên tướng chỉ huy quân Mông Cổ trong cuộc xâm lược Đại Việt lần thứ nhất (1258)?", options: ["Thoát Hoan", "Toa Đô", "Ô Mã Nhi", "Ngột Lương Hợp Thai"], correct: 3, difficulty: "hard", explanation: "Ngột Lương Hợp Thai chỉ huy đội quân Mông Cổ xâm lược Đại Việt lần thứ nhất năm 1258." },
    { question: "Hội nghị Diên Hồng được tổ chức vào năm nào, trước cuộc kháng chiến chống Nguyên Mông lần thứ hai?", options: ["1258", "1288", "1226", "1284"], correct: 3, difficulty: "medium", explanation: "Hội nghị Diên Hồng được tổ chức năm 1284, ngay trước thềm cuộc kháng chiến lần thứ hai chống quân Nguyên." },
    { question: "Ai là người chỉ huy chiến thắng Hàm Tử, góp phần bao vây tiêu diệt cánh quân Toa Đô năm 1285?", options: ["Trần Quốc Toản", "Phạm Ngũ Lão", "Trần Bình Trọng", "Trần Nhật Duật"], correct: 3, difficulty: "hard", explanation: "Trần Nhật Duật chỉ huy trận Hàm Tử, phối hợp cùng Trần Quang Khải trong trận Chương Dương, góp phần tiêu diệt quân Toa Đô." },
    { question: "Phạm Ngũ Lão nổi tiếng với giai thoại nào thể hiện chí lớn dù xuất thân bình dân?", options: ["Ngồi đan sọt bên đường mải nghĩ việc nước, bị lính đâm giáo vào đùi mà không hay biết", "Chui vào ống đồng chạy trốn", "Từ chối nhận giải thưởng của vua Nguyên", "Bơi lặn giỏi để đục thuyền giặc"], correct: 0, difficulty: "medium", explanation: "Giai thoại này cho thấy Phạm Ngũ Lão dù xuất thân nghèo khó nhưng có chí lớn, sau được Trần Hưng Đạo trọng dụng." },
    { question: "Nhà Trần thực hiện chế độ đặc biệt nào để tránh tranh giành ngôi báu, củng cố quyền lực dòng họ?", options: ["Chế độ Thái thượng hoàng", "Chế độ khoa cử ba năm một lần", "Chế độ tuyển phi ngoài hoàng tộc", "Chế độ lập nhiều thái tử"], correct: 0, difficulty: "hard", explanation: "Vua nhường ngôi sớm cho con và lui về làm Thái thượng hoàng để cùng giám sát, tránh tranh chấp quyền lực." },
    { question: "Trước khi quân Nguyên Mông xâm lược lần 2 (1285), nhà Trần đã thực hiện kế sách nào ở Thăng Long?", options: ["Cố thủ tử chiến trong thành", "Cầu hòa ngay lập tức", "Đầu hàng để tránh đổ máu", "Thực hiện 'vườn không nhà trống', rút lui bảo toàn lực lượng"], correct: 3, difficulty: "medium", explanation: "Chiến lược 'vườn không nhà trống' khiến quân Nguyên không có lương thực, tạo điều kiện cho quân Trần phản công." },
    { question: "Tướng nào của quân Nguyên bị giết chết trong trận Bạch Đằng năm 1288?", options: ["Thoát Hoan", "Toa Đô", "Áo Lỗ Xích", "Ô Mã Nhi"], correct: 3, difficulty: "hard", explanation: "Ô Mã Nhi bị bắt sống trong trận Bạch Đằng năm 1288, góp phần vào đại thắng của quân Trần." },
    { question: "Đền Kiếp Bạc (Hải Dương) thờ vị anh hùng dân tộc nào?", options: ["Trần Quốc Tuấn", "Lý Thường Kiệt", "Lê Lợi", "Ngô Quyền"], correct: 0, difficulty: "medium", explanation: "Đền Kiếp Bạc là nơi thờ Hưng Đạo Đại Vương Trần Quốc Tuấn, gắn với căn cứ của ông thời kháng chiến chống Nguyên." },
    { question: "Nhà Trần đặt ra khoa thi nào để chọn nhân tài, tổ chức đều đặn hơn so với nhà Lý?", options: ["Thi Hội, thi Đình định kỳ", "Thi tuyển võ quan riêng", "Thi vấn đáp trực tiếp với vua", "Thi chọn quan qua tiến cử"], correct: 0, difficulty: "hard", explanation: "Nhà Trần tổ chức khoa cử quy củ hơn, đặt thêm các kỳ thi Hội, thi Đình để tuyển chọn nhân tài cho đất nước." },
    { question: "Ai là công chúa nhà Trần nổi tiếng vì đã hai lần lấy chồng là vua nước ngoài để phục vụ chính sách ngoại giao?", options: ["Huyền Trân", "An Tư", "Thiên Thành", "Ngọc Hoa"], correct: 0, difficulty: "hard", explanation: "Huyền Trân Công chúa được gả cho vua Chế Mân của Chăm-pa, sau khi vua Chăm mất bà trở về Đại Việt." },
    { question: "Chiến thắng nào được xem là trận thủy chiến lớn và mang tính quyết định nhất, kết thúc cuộc kháng chiến chống Nguyên Mông lần thứ ba?", options: ["Trận Chương Dương", "Trận Tây Kết", "Trận Hàm Tử", "Trận Bạch Đằng (1288)"], correct: 3, difficulty: "easy", explanation: "Trận Bạch Đằng năm 1288 tái hiện chiến thuật cọc gỗ, tiêu diệt hoàn toàn đoàn thuyền lương của quân Nguyên." }
],
    "le-nguyen": [
    { question: "Quân Lam Sơn đã đánh bại quân xâm lược nào?", options: ["Quân Tống", "Quân Nguyên", "Quân Thanh", "Quân Minh"], correct: 3, difficulty: "easy", explanation: "Khởi nghĩa Lam Sơn do Lê Lợi lãnh đạo đã đánh tan quân xâm lược nhà Minh sau 10 năm." },
    { question: "Vị vua nào được coi là vị vua anh minh nhất thời Lê Sơ?", options: ["Lê Thái Tổ", "Lê Thái Tông", "Lê Hiển Tông", "Lê Thánh Tông"], correct: 3, difficulty: "easy", explanation: "Lê Thánh Tông đã đưa nước ta lên đỉnh cao về chính trị, quân sự và văn hóa (Thời Hồng Đức)." },
    { question: "Hội thề nào thể hiện sự gắn kết giữa Lê Lợi và các tướng lĩnh?", options: ["Hội thề Đông Quan", "Hội thề Bình Than", "Hội thề Diên Hồng", "Hội thề Lũng Nhai"], correct: 3, difficulty: "medium", explanation: "Năm 1416, Lê Lợi cùng 18 người bạn chiến đấu đã tổ chức Hội thề Lũng Nhai để quyết tâm đánh giặc." },
    { question: "Vương hiệu của Nguyễn Huệ sau khi lên ngôi hoàng đế là gì?", options: ["Thái Đức", "Cảnh Thịnh", "Gia Long", "Quang Trung"], correct: 3, difficulty: "easy", explanation: "Nguyễn Huệ lên ngôi hoàng đế năm 1788, lấy niên hiệu là Quang Trung để tiến quân ra Bắc." },
    { question: "Vua Lê Thánh Tông đã cho biên soạn bộ luật nổi tiếng nào?", options: ["Luật Gia Long", "Hình thư", "Luật Hình dân", "Luật Hồng Đức"], correct: 3, difficulty: "medium", explanation: "Luật Hồng Đức là bộ luật tiến bộ, có nhiều điều khoản bảo vệ quyền lợi phụ nữ thời bấy giờ." },
    { question: "Chiến thắng nào đã kết thúc hoàn toàn 20 năm đô hộ của nhà Minh?", options: ["Trận Tốt Động - Chúc Động", "Trận Rạch Gầm - Xoài Mút", "Trận Ngọc Hồi - Đống Đa", "Trận Chi Lăng - Xương Giang"], correct: 3, difficulty: "medium", explanation: "Chiến thắng Chi Lăng - Xương Giang buộc nhà Minh phải rút quân, công nhận độc lập của nước ta." },
    { question: "Nguyễn Huệ đã đánh tan quân Xiêm trong trận chiến nào?", options: ["Trận Bạch Đằng", "Trận Ngọc Hồi", "Trận Đống Đa", "Trận Rạch Gầm - Xoài Mút"], correct: 3, difficulty: "easy", explanation: "Năm 1785, Nguyễn Huệ đã lập nên chiến thắng vang dội tiêu diệt 5 vạn quân Xiêm tại Rạch Gầm - Xoài Mút." },
    { question: "Kinh đô của nước ta dưới thời vua Quang Trung đặt tại đâu?", options: ["Thăng Long", "Cổ Loa", "Hoa Lư", "Phú Xuân (Huế)"], correct: 3, difficulty: "medium", explanation: "Vua Quang Trung chọn Phú Xuân (Huế) làm kinh đô để thuận tiện cai quản cả hai miền Nam - Bắc." },
    { question: "Triều đại nào đã tiến hành cuộc cải cách hành chính chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên?", options: ["Nhà Lê", "Nhà Tây Sơn", "Nhà Mạc", "Nhà Nguyễn (Vua Minh Mạng)"], correct: 3, difficulty: "hard", explanation: "Cuộc cải cách hành chính quy mô lớn này được vua Minh Mạng thực hiện vào những năm 1831 - 1832." },
    { question: "Ai là người được vua Quang Trung tin tưởng giao trọng trách soạn thảo các văn bản ngoại giao?", options: ["Nguyễn Nhạc", "Bùi Thị Xuân", "Trần Quang Diệu", "Ngô Thì Nhậm"], correct: 3, difficulty: "hard", explanation: "Danh sĩ Ngô Thì Nhậm là người giúp vua Quang Trung trong các kế sách đối ngoại với nhà Thanh." },
    { question: "Vị nữ tướng tiêu biểu nhất của nhà Tây Sơn là ai?", options: ["Trưng Trắc", "Bà Triệu", "Huyền Trân Công Chúa", "Bùi Thị Xuân"], correct: 3, difficulty: "medium", explanation: "Đô đốc Bùi Thị Xuân là nữ tướng nổi tiếng về lòng dũng cảm và tài luyện voi chiến." },
    { question: "Nguyễn Trãi đã viết tác phẩm nào để vạch trần tội ác của quân Minh?", options: ["Bạch Đằng giang phú", "Ức Trai thi tập", "Quốc âm thi tập", "Bình Ngô đại cáo"], correct: 3, difficulty: "easy", explanation: "'Bình Ngô đại cáo' được coi là bản Tuyên ngôn Độc lập thứ hai của dân tộc Việt Nam." },
    { question: "Vua Quang Trung mất vào năm nào?", options: ["1789", "1802", "1785", "1792"], correct: 3, difficulty: "medium", explanation: "Vua Quang Trung đột ngột qua đời năm 1792 khi còn rất nhiều dự định cải cách dở dang." },
    { question: "Ai là người khởi xướng phong trào Cần Vương?", options: ["Nguyễn Trung Trực", "Phan Đình Phùng", "Hoàng Hoa Thám", "Hàm Nghi và Tôn Thất Thuyết"], correct: 3, difficulty: "medium", explanation: "Sau khi kinh thành Huế thất thủ, Tôn Thất Thuyết nhân danh vua Hàm Nghi ra chiếu Cần Vương." },
    { question: "Tòa thành nào được xây dựng kiên cố tại Huế dưới thời nhà Nguyễn?", options: ["Thành Cổ Loa", "Thành Tây Đô", "Thành Điện Hải", "Kinh thành Huế"], correct: 3, difficulty: "easy", explanation: "Kinh thành Huế là công trình kiến trúc phòng thủ và cung điện quy mô nhất triều Nguyễn." },
    { question: "Triều đại nào là triều đại phong kiến cuối cùng của Việt Nam?", options: ["Nhà Lê", "Nhà Tây Sơn", "Nhà Mạc", "Nhà Nguyễn"], correct: 3, difficulty: "easy", explanation: "Nhà Nguyễn (1802 - 1945) là triều đại phong kiến cuối cùng, kết thúc khi vua Bảo Đại thoái vị." },
    { question: "Trận Ngọc Hồi - Đống Đa diễn ra vào mùa nào?", options: ["Mùa Hè", "Mùa Thu", "Mùa Đông", "Mùa Xuân (Tết Kỷ Dậu)"], correct: 3, difficulty: "easy", explanation: "Vua Quang Trung đã thần tốc tiến quân đánh tan quân Thanh ngay trong dịp Tết năm 1789." },
    { question: "Vua cuối cùng của triều Nguyễn là ai?", options: ["Duy Tân", "Hàm Nghi", "Khải Định", "Bảo Đại"], correct: 3, difficulty: "medium", explanation: "Vua Bảo Đại thoái vị ngày 30/8/1945 tại kinh đô Huế, nộp ấn kiếm cho cách mạng." },
    { question: "Lê Lợi chính thức phất cờ khởi nghĩa Lam Sơn vào năm nào?", options: ["1416", "1427", "1428", "1418"], correct: 3, difficulty: "medium", explanation: "Năm 1418, Lê Lợi dựng cờ khởi nghĩa tại Lam Sơn (Thanh Hóa), mở đầu 10 năm kháng chiến chống Minh." },
    { question: "Trước khi phò tá Lê Lợi khởi nghĩa, Nguyễn Trãi đã dâng lên kế sách chiến lược nào?", options: ["Bình Ngô sách", "Hịch tướng sĩ", "Bình Ngô đại cáo", "Thiên đô chiếu"], correct: 0, difficulty: "hard", explanation: "'Bình Ngô sách' của Nguyễn Trãi vạch ra chiến lược đánh vào lòng người, là kim chỉ nam cho cuộc khởi nghĩa Lam Sơn." },
    { question: "Ai đã hy sinh, đóng giả Lê Lợi để đánh lạc hướng, giúp chủ tướng thoát khỏi vòng vây quân Minh?", options: ["Lê Lai", "Nguyễn Xí", "Đinh Liệt", "Lưu Nhân Chú"], correct: 0, difficulty: "medium", explanation: "Sự hy sinh của Lê Lai được dân gian ghi nhớ qua câu 'Hai mốt Lê Lai, hai hai Lê Lợi'." },
    { question: "Hồ Quý Ly lập ra nhà Hồ, thay thế triều đại nào?", options: ["Nhà Lý", "Nhà Lê", "Nhà Mạc", "Nhà Trần"], correct: 3, difficulty: "medium", explanation: "Năm 1400, Hồ Quý Ly phế truất vua Trần, lập nên nhà Hồ." },
    { question: "Hồ Quý Ly đã thực hiện cải cách tiền tệ nào gây nhiều tranh cãi đương thời?", options: ["Phát hành tiền giấy (Thông bảo hội sao)", "Đúc tiền vàng", "Bãi bỏ thuế ruộng", "Cấm lưu hành tiền đồng"], correct: 0, difficulty: "hard", explanation: "Việc phát hành tiền giấy là cải cách táo bạo nhưng vấp phải sự phản đối vì dân chúng chưa quen sử dụng." },
    { question: "Nguyễn Huệ cùng hai người anh nào phát động phong trào khởi nghĩa Tây Sơn?", options: ["Nguyễn Nhạc và Nguyễn Lữ", "Nguyễn Ánh và Nguyễn Hoàng", "Nguyễn Trãi và Nguyễn Chích", "Nguyễn Kim và Nguyễn Hoàng"], correct: 0, difficulty: "easy", explanation: "Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ đã cùng dựng cờ khởi nghĩa tại đất Tây Sơn." },
    { question: "Phong trào Tây Sơn khởi phát từ vùng đất nào?", options: ["Gia Định", "Phú Xuân", "Thanh Hóa", "Ấp Tây Sơn, Bình Định"], correct: 3, difficulty: "medium", explanation: "Ấp Tây Sơn (Bình Định) là quê hương và cũng là nơi phát tích của phong trào nông dân Tây Sơn." },
    { question: "Nhà Nguyễn được thành lập bởi ai và vào năm nào?", options: ["Nguyễn Huệ, năm 1789", "Nguyễn Hoàng, năm 1558", "Nguyễn Kim, năm 1533", "Nguyễn Ánh, năm 1802"], correct: 3, difficulty: "easy", explanation: "Nguyễn Ánh lên ngôi năm 1802, lấy niên hiệu Gia Long, lập ra triều Nguyễn." },
    { question: "Vua Gia Long đặt quốc hiệu nước ta là gì?", options: ["Đại Việt", "Đại Nam", "Đại Cồ Việt", "Việt Nam"], correct: 3, difficulty: "medium", explanation: "Năm 1804, vua Gia Long chính thức đặt quốc hiệu là Việt Nam." },
    { question: "Vị vua nào của triều Nguyễn đã đổi quốc hiệu từ Việt Nam thành Đại Nam?", options: ["Gia Long", "Thiệu Trị", "Tự Đức", "Minh Mạng"], correct: 3, difficulty: "hard", explanation: "Năm 1838, vua Minh Mạng đổi quốc hiệu thành Đại Nam." },
    { question: "Chính sách đối ngoại nổi bật của các vua đầu triều Nguyễn (Minh Mạng, Thiệu Trị, Tự Đức) là gì?", options: ["Mở cửa giao thương tự do", "Xâm chiếm các nước láng giềng", "Học hỏi kỹ thuật phương Tây", "Bế quan tỏa cảng, hạn chế giao thương với phương Tây"], correct: 3, difficulty: "medium", explanation: "Chính sách 'bế quan tỏa cảng' khiến đất nước dần lạc hậu, tạo điều kiện cho thực dân Pháp xâm lược sau này." },
    { question: "Tác phẩm 'Hoàng Lê nhất thống chí' phản ánh giai đoạn lịch sử nào?", options: ["Sự nghiệp thống nhất đất nước cuối Lê - đầu Nguyễn", "Cuộc kháng chiến chống Nguyên Mông", "Thời kỳ Bắc thuộc", "Khởi nghĩa Lam Sơn"], correct: 0, difficulty: "hard", explanation: "Tác phẩm ghi lại các sự kiện lịch sử từ cuối thời Lê - Trịnh đến khi Nguyễn Ánh thống nhất đất nước." },
    { question: "Nhà bác học nào thời Lê trung hưng nổi tiếng với tác phẩm bách khoa 'Vân đài loại ngữ'?", options: ["Ngô Sĩ Liên", "Phan Huy Chú", "Nguyễn Bỉnh Khiêm", "Lê Quý Đôn"], correct: 3, difficulty: "medium", explanation: "Lê Quý Đôn là nhà bác học lớn, để lại nhiều công trình biên khảo giá trị về nhiều lĩnh vực." },
    { question: "Bộ chính sử đồ sộ nhất triều Nguyễn, ghi chép theo thể biên niên, có tên là gì?", options: ["Đại Việt sử ký toàn thư", "Lam Sơn thực lục", "Khâm định Việt sử", "Đại Nam thực lục"], correct: 3, difficulty: "hard", explanation: "'Đại Nam thực lục' do Quốc sử quán triều Nguyễn biên soạn, là bộ sử lớn nhất về triều đại này." },
    { question: "Ai là nhà tiên tri, danh sĩ nổi tiếng thời Mạc với câu sấm truyền 'Hoành Sơn nhất đái, vạn đại dung thân'?", options: ["Lê Quý Đôn", "Nguyễn Trãi", "Chu Văn An", "Nguyễn Bỉnh Khiêm"], correct: 3, difficulty: "medium", explanation: "Trạng Trình Nguyễn Bỉnh Khiêm được biết đến với những lời sấm truyền nổi tiếng, ảnh hưởng đến quyết định của chúa Nguyễn Hoàng vào Nam." },
    { question: "Nguyễn Trãi có hiệu là gì?", options: ["Ngọa Long", "Trạng Trình", "Nhị Khê", "Ức Trai"], correct: 3, difficulty: "easy", explanation: "Nguyễn Trãi hiệu là Ức Trai, tác giả của nhiều áng văn thơ bất hủ như Bình Ngô đại cáo." },
    { question: "Sau khi lên ngôi, Lê Lợi được biết đến với miếu hiệu là gì?", options: ["Lê Thánh Tông", "Lê Nhân Tông", "Lê Hiến Tông", "Lê Thái Tổ"], correct: 3, difficulty: "easy", explanation: "Lê Lợi lên ngôi lập ra nhà Hậu Lê, sau khi mất được truy tôn miếu hiệu Lê Thái Tổ." },
    { question: "Ai là vị vua cuối cùng của triều Tây Sơn, bị Nguyễn Ánh tiêu diệt năm 1802?", options: ["Nguyễn Nhạc", "Nguyễn Huệ", "Nguyễn Lữ", "Nguyễn Quang Toản (Cảnh Thịnh)"], correct: 3, difficulty: "hard", explanation: "Nguyễn Quang Toản (niên hiệu Cảnh Thịnh), con Quang Trung, là vị vua cuối cùng của triều Tây Sơn." },
    { question: "Bộ luật 'Hoàng Việt luật lệ' (Luật Gia Long) được ban hành dưới triều vua nào?", options: ["Minh Mạng", "Thiệu Trị", "Tự Đức", "Gia Long"], correct: 3, difficulty: "medium", explanation: "Bộ luật này được biên soạn và ban hành dưới thời vua Gia Long, vị vua sáng lập triều Nguyễn." },
    { question: "Ai là tác giả của kiệt tác văn học 'Truyện Kiều'?", options: ["Nguyễn Trãi", "Nguyễn Đình Chiểu", "Hồ Xuân Hương", "Nguyễn Du"], correct: 3, difficulty: "easy", explanation: "Nguyễn Du là đại thi hào dân tộc, tác giả của kiệt tác 'Truyện Kiều' (Đoạn trường tân thanh)." },
    { question: "Nguyễn Chích là người có công đề xuất kế sách chiến lược nào giúp nghĩa quân Lam Sơn thoát thế bị vây khốn ở Thanh Hóa?", options: ["Rút vào Nghệ An làm bàn đạp tiến đánh cả nước", "Cầu hòa với nhà Minh", "Đánh thẳng ra Thăng Long", "Xây thành cố thủ"], correct: 0, difficulty: "hard", explanation: "Kế sách của Nguyễn Chích giúp nghĩa quân Lam Sơn chuyển từ thế bị động sang chủ động, làm chủ Nghệ An - Tân Bình - Thuận Hóa." },
    { question: "Trận Tốt Động - Chúc Động (1426) có ý nghĩa gì đối với cuộc khởi nghĩa Lam Sơn?", options: ["Kết thúc hoàn toàn cuộc khởi nghĩa", "Làm thất bại kế hoạch phản công của quân Minh, chuyển thế trận sang thế chủ động cho nghĩa quân", "Mở đầu khởi nghĩa Lam Sơn", "Buộc Lê Lợi phải rút quân"], correct: 1, difficulty: "hard", explanation: "Chiến thắng Tốt Động - Chúc Động đập tan cuộc phản công lớn của quân Minh, tạo đà cho chiến thắng Chi Lăng - Xương Giang sau đó." },
    { question: "Ai là võ tướng nổi tiếng đã chém chết Liễu Thăng tại ải Chi Lăng năm 1427?", options: ["Lê Sát", "Nguyễn Xí", "Đinh Liệt", "Lê Lợi trực tiếp chỉ huy phục kích"], correct: 3, difficulty: "hard", explanation: "Quân Lam Sơn phục kích tại ải Chi Lăng, chém chết chủ tướng Liễu Thăng, khiến quân Minh đại bại." },
    { question: "Sau đại thắng quân Minh, hội thề nào được tổ chức để giảng hòa và cho quân Minh rút về nước trong danh dự?", options: ["Hội thề Lũng Nhai", "Hội thề Đông Quan", "Hội thề Bình Than", "Hội thề Diên Hồng"], correct: 1, difficulty: "medium", explanation: "Hội thề Đông Quan (1427) là cam kết giữa hai bên để quân Minh rút quân an toàn, chấm dứt chiến tranh." },
    { question: "Vua Quang Trung đã tiến hành cải cách giáo dục nào, đề cao chữ viết riêng của dân tộc?", options: ["Dùng chữ Nôm trong thi cử và văn bản hành chính", "Bãi bỏ hoàn toàn khoa cử", "Chỉ dạy chữ Hán", "Du nhập chữ Latinh"], correct: 0, difficulty: "medium", explanation: "Quang Trung coi trọng chữ Nôm, cho dùng trong nhiều văn bản nhà nước, thể hiện tinh thần tự chủ văn hóa dân tộc." },
    { question: "Viện nào được vua Quang Trung lập ra để chấn hưng giáo dục, dịch sách chữ Hán sang chữ Nôm?", options: ["Viện Sùng chính", "Quốc Tử Giám", "Viện Hàn lâm", "Quốc sử quán"], correct: 0, difficulty: "hard", explanation: "Viện Sùng chính do La Sơn Phu Tử Nguyễn Thiếp đứng đầu, có nhiệm vụ dịch sách và chấn hưng nền học vấn." },
    { question: "Ai là danh sĩ ẩn dật được vua Quang Trung nhiều lần mời ra giúp nước, được gọi là La Sơn Phu Tử?", options: ["Ngô Thì Nhậm", "Nguyễn Thiếp", "Phan Huy Ích", "Vũ Văn Dũng"], correct: 1, difficulty: "hard", explanation: "Nguyễn Thiếp (La Sơn Phu Tử) là danh sĩ được vua Quang Trung trọng dụng, góp ý xây dựng đất nước." },
    { question: "Vua Minh Mạng cho xây dựng cơ quan nào để giám sát, phản biện các quyết sách của triều đình?", options: ["Đô sát viện", "Quốc sử quán", "Cơ mật viện", "Nội các"], correct: 0, difficulty: "hard", explanation: "Đô sát viện có nhiệm vụ giám sát quan lại và phản biện chính sách, thể hiện bộ máy hành chính chặt chẽ thời Minh Mạng." },
    { question: "Thành Gia Định (Sài Gòn xưa) do ai xây dựng làm căn cứ trước khi Nguyễn Ánh thống nhất đất nước?", options: ["Nguyễn Ánh", "Nguyễn Huệ", "Lê Văn Duyệt", "Võ Tánh"], correct: 0, difficulty: "medium", explanation: "Nguyễn Ánh xây dựng Gia Định thành căn cứ vững chắc trong thời gian chống lại nhà Tây Sơn ở phía Nam." },
    { question: "Đại thần nào của triều Nguyễn nổi tiếng công minh, được thờ và tôn kính rộng rãi ở vùng Gia Định (Nam Bộ)?", options: ["Lê Văn Duyệt", "Nguyễn Văn Thành", "Trương Đăng Quế", "Phan Thanh Giản"], correct: 0, difficulty: "medium", explanation: "Tả quân Lê Văn Duyệt là Tổng trấn Gia Định thành, được nhân dân Nam Bộ tôn kính, lập lăng thờ (Lăng Ông Bà Chiểu)." }
],
   "khang-chien-phap": [
    { question: "Chiến thắng Điện Biên Phủ lừng lẫy năm châu diễn ra vào năm nào?", options: ["1945", "1975", "1930", "1954"], correct: 3, difficulty: "easy", explanation: "Chiến thắng Điện Biên Phủ ngày 7/5/1954 đã kết thúc thắng lợi 9 năm kháng chiến chống Pháp." },
    { question: "Ai là người đọc Bản Tuyên ngôn Độc lập tại quảng trường Ba Đình?", options: ["Võ Nguyên Giáp", "Phạm Văn Đồng", "Trường Chinh", "Hồ Chí Minh"], correct: 3, difficulty: "easy", explanation: "Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa." },
    { question: "Vị đại tướng tài ba lãnh đạo chiến dịch Điện Biên Phủ là ai?", options: ["Văn Tiến Dũng", "Nguyễn Chí Thanh", "Lê Trọng Tấn", "Võ Nguyên Giáp"], correct: 3, difficulty: "easy", explanation: "Đại tướng Võ Nguyên Giáp là Tổng tư lệnh trực tiếp chỉ huy chiến dịch Điện Biên Phủ." },
    { question: "Ngày Quốc khánh của nước Việt Nam Dân chủ Cộng hòa là ngày nào?", options: ["30/04", "19/05", "22/12", "02/09"], correct: 3, difficulty: "easy", explanation: "Ngày 2/9 là ngày Quốc khánh của nước ta, kỷ niệm sự kiện Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập năm 1945." },
    { question: "Phương châm của chiến dịch Điện Biên Phủ đã thay đổi từ 'Đánh nhanh thắng nhanh' sang gì?", options: ["Đánh lâu dài", "Vừa đánh vừa đàm", "Tổng tiến công", "Đánh chắc tiến chắc"], correct: 3, difficulty: "medium", explanation: "Đại tướng Võ Nguyên Giáp đã có quyết định lịch sử khi chuyển sang phương châm 'Đánh chắc tiến chắc'." },
    { question: "Ai là người anh hùng đã lấy thân mình lấp lỗ châu mai?", options: ["Tô Vĩnh Diện", "Bế Văn Đàn", "La Văn Cầu", "Phan Đình Giót"], correct: 3, difficulty: "easy", explanation: "Anh hùng Phan Đình Giót đã hy sinh thân mình lấp lỗ châu mai để đồng đội xông lên trong trận Him Lam." },
    { question: "Hiệp định nào được ký kết sau chiến thắng Điện Biên Phủ?", options: ["Hiệp định Pa-ri", "Hiệp định Sơ bộ", "Hòa ước Nhâm Tuất", "Hiệp định Giơ-nê-vơ"], correct: 3, difficulty: "medium", explanation: "Hiệp định Giơ-nê-vơ (1954) được ký kết, lập lại hòa bình ở Đông Dương." },
    { question: "Chiến thắng Điện Biên Phủ diễn ra trong bao nhiêu ngày đêm?", options: ["45 ngày đêm", "55 ngày đêm", "60 ngày đêm", "56 ngày đêm"], correct: 3, difficulty: "medium", explanation: "Chiến dịch Điện Biên Phủ bắt đầu từ 13/3 và kết thúc vào 7/5/1954, tổng cộng 56 ngày đêm." },
    { question: "Chủ tịch Hồ Chí Minh ra đi tìm đường cứu nước từ bến cảng nào?", options: ["Cảng Hải Phòng", "Cảng Đà Nẵng", "Cảng Ba Son", "Cảng Nhà Rồng"], correct: 3, difficulty: "easy", explanation: "Ngày 5/6/1911, người thanh niên Nguyễn Tất Thành đã rời bến cảng Nhà Rồng." },
    { question: "Ngày thành lập Quân đội Nhân dân Việt Nam là ngày nào?", options: ["19/08", "02/09", "30/04", "22/12"], correct: 3, difficulty: "medium", explanation: "Ngày 22/12 hàng năm là ngày thành lập Quân đội và cũng là Ngày hội Quốc phòng toàn dân." },
    { question: "Ngày 19/8/1945 gắn liền với sự kiện lịch sử nào?", options: ["Cách mạng tháng Tám thành công tại Hà Nội", "Ngày Bác Hồ đọc Tuyên ngôn Độc lập", "Ngày toàn quốc kháng chiến", "Ngày thành lập Việt Minh"], correct: 0, difficulty: "medium", explanation: "Ngày 19/8/1945, cuộc khởi nghĩa giành chính quyền thắng lợi ở Hà Nội, mở đầu cho thắng lợi của Cách mạng tháng Tám." },
    { question: "Chiến dịch Việt Bắc Thu Đông (1947) có ý nghĩa như thế nào?", options: ["Giải phóng hoàn toàn miền Bắc", "Mở đầu cuộc kháng chiến toàn quốc", "Buộc Pháp ký hiệp định đầu hàng", "Đánh bại kế hoạch 'đánh nhanh thắng nhanh' của Pháp"], correct: 3, difficulty: "hard", explanation: "Chiến thắng Việt Bắc làm phá sản chiến lược đánh nhanh thắng nhanh, buộc Pháp chuyển sang đánh lâu dài." },
    { question: "Chiến dịch Biên giới Thu Đông năm 1950 nhằm mục tiêu chính nào?", options: ["Giải phóng Điện Biên Phủ", "Bao vây Hà Nội", "Đánh chiếm Sài Gòn", "Khai thông biên giới Việt - Trung"], correct: 3, difficulty: "medium", explanation: "Chiến dịch Biên giới giúp khai thông tuyến đường liên lạc quốc tế với các nước xã hội chủ nghĩa." },
    { question: "Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh được phát đi vào thời điểm nào?", options: ["Ngày 2/9/1945", "Ngày 7/5/1954", "Ngày 6/3/1946", "Đêm 19/12/1946"], correct: 3, difficulty: "medium", explanation: "Đêm 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến, phát động cuộc kháng chiến toàn dân." },
    { question: "Cứ điểm nào được coi là trận mở màn, 'cánh cửa thép' đầu tiên bị tiêu diệt trong chiến dịch Điện Biên Phủ?", options: ["Cứ điểm Độc Lập", "Đồi A1", "Cứ điểm Hồng Cúm", "Cứ điểm Him Lam"], correct: 3, difficulty: "medium", explanation: "Trận Him Lam (13/3/1954) là trận mở màn chiến dịch, tạo khí thế quyết chiến cho quân ta." },
    { question: "Anh hùng nào đã lấy thân mình làm giá đỡ súng máy trong chiến dịch Điện Biên Phủ?", options: ["Phan Đình Giót", "Tô Vĩnh Diện", "La Văn Cầu", "Bế Văn Đàn"], correct: 3, difficulty: "medium", explanation: "Bế Văn Đàn đã dũng cảm lấy vai làm giá súng, giúp đồng đội hoàn thành nhiệm vụ chiến đấu." },
    { question: "Anh hùng Tô Vĩnh Diện nổi tiếng với hành động dũng cảm nào trong chiến dịch Điện Biên Phủ?", options: ["Lấp lỗ châu mai", "Bắt sống tướng địch", "Cắm cờ trên đồi A1", "Lấy thân chèn pháo không cho lăn xuống vực"], correct: 3, difficulty: "medium", explanation: "Tô Vĩnh Diện hy sinh thân mình chèn khẩu pháo, không để pháo lăn xuống vực trong lúc kéo pháo vào trận địa." },
    { question: "Mặt trận Việt Minh do Chủ tịch Hồ Chí Minh thành lập vào năm nào?", options: ["1930", "1945", "1954", "1941"], correct: 3, difficulty: "medium", explanation: "Năm 1941, Mặt trận Việt Minh được thành lập, quy tụ các lực lượng yêu nước chuẩn bị cho Cách mạng tháng Tám." },
    { question: "Đội Việt Nam Tuyên truyền Giải phóng quân - tiền thân của Quân đội Nhân dân Việt Nam - được thành lập ở đâu?", options: ["Tân Trào, Tuyên Quang", "Pác Bó, Cao Bằng", "Điện Biên Phủ", "Khu rừng Trần Hưng Đạo, Cao Bằng"], correct: 3, difficulty: "medium", explanation: "Ngày 22/12/1944, đội quân đầu tiên được thành lập tại khu rừng Trần Hưng Đạo, tỉnh Cao Bằng." },
    { question: "Ai là người được giao làm Đội trưởng đầu tiên của Đội Việt Nam Tuyên truyền Giải phóng quân?", options: ["Võ Nguyên Giáp", "Chu Văn Tấn", "Phùng Chí Kiên", "Hoàng Sâm"], correct: 3, difficulty: "hard", explanation: "Đồng chí Hoàng Sâm được cử làm Đội trưởng đầu tiên, dưới sự chỉ đạo trực tiếp của Võ Nguyên Giáp." },
    { question: "Kế hoạch quân sự nào của Pháp - Mỹ nhằm giành thắng lợi quyết định trong Đông Xuân 1953-1954?", options: ["Kế hoạch Đờ Lát đờ Tátxinhi", "Kế hoạch Rơve", "Kế hoạch Staley - Taylor", "Kế hoạch Nava"], correct: 3, difficulty: "medium", explanation: "Kế hoạch Nava là nỗ lực quân sự cuối cùng của Pháp nhằm xoay chuyển cục diện chiến tranh." },
    { question: "Ai là chỉ huy tập đoàn cứ điểm Điện Biên Phủ phía quân Pháp?", options: ["Tướng Nava", "Tướng Salan", "Tướng Cogny", "Tướng De Castries"], correct: 3, difficulty: "medium", explanation: "Tướng De Castries chỉ huy trực tiếp tập đoàn cứ điểm và đã đầu hàng khi chiến dịch kết thúc." },
    { question: "Hiệp định Giơ-ne-vơ 1954 quy định vĩ tuyến nào là giới tuyến quân sự tạm thời giữa hai miền?", options: ["Vĩ tuyến 16", "Vĩ tuyến 18", "Vĩ tuyến 20", "Vĩ tuyến 17"], correct: 3, difficulty: "easy", explanation: "Vĩ tuyến 17 (sông Bến Hải) được chọn làm giới tuyến quân sự tạm thời, dự kiến tổng tuyển cử thống nhất năm 1956." },
    { question: "Chiến thắng Điện Biên Phủ có ý nghĩa quốc tế to lớn như thế nào?", options: ["Kết thúc Chiến tranh thế giới thứ hai", "Thành lập Liên Hợp Quốc", "Mở đầu Chiến tranh Lạnh", "Cổ vũ phong trào giải phóng dân tộc trên thế giới, góp phần làm sụp đổ hệ thống thuộc địa"], correct: 3, difficulty: "medium", explanation: "Chiến thắng Điện Biên Phủ là đòn giáng mạnh vào chủ nghĩa thực dân, cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên toàn thế giới." },
    { question: "Trước khi trở thành chiến trường quyết định, Điện Biên Phủ vốn là địa danh thuộc tỉnh nào?", options: ["Sơn La", "Lào Cai", "Hòa Bình", "Lai Châu (nay là Điện Biên)"], correct: 3, difficulty: "hard", explanation: "Điện Biên Phủ khi đó thuộc tỉnh Lai Châu, nay đã tách thành tỉnh Điện Biên." },
    { question: "Ngày Nam Bộ kháng chiến chống thực dân Pháp quay lại xâm lược là ngày nào?", options: ["19/12/1946", "2/9/1945", "7/5/1954", "23/9/1945"], correct: 3, difficulty: "medium", explanation: "Ngày 23/9/1945, quân dân Nam Bộ đã anh dũng đứng lên kháng chiến khi Pháp quay lại xâm lược Sài Gòn." },
    { question: "Chiến dịch nào diễn ra năm 1952 giúp ta giải phóng phần lớn vùng Tây Bắc?", options: ["Chiến dịch Biên giới", "Chiến dịch Điện Biên Phủ", "Chiến dịch Hòa Bình", "Chiến dịch Tây Bắc"], correct: 3, difficulty: "medium", explanation: "Chiến dịch Tây Bắc năm 1952 giúp quân ta giải phóng phần lớn vùng Tây Bắc, tạo bàn đạp chiến lược." },
    { question: "Quân Pháp bắt đầu nhảy dù chiếm đóng Điện Biên Phủ vào thời gian nào?", options: ["Tháng 3/1954", "Tháng 12/1946", "Tháng 5/1954", "Tháng 11/1953"], correct: 3, difficulty: "hard", explanation: "Quân Pháp nhảy dù chiếm Điện Biên Phủ từ tháng 11/1953, biến nơi đây thành tập đoàn cứ điểm mạnh." },
    { question: "Ai giữ chức Tổng Tư lệnh Quân đội Nhân dân Việt Nam trong suốt cuộc kháng chiến chống Pháp?", options: ["Văn Tiến Dũng", "Nguyễn Chí Thanh", "Hoàng Văn Thái", "Võ Nguyên Giáp"], correct: 3, difficulty: "easy", explanation: "Đại tướng Võ Nguyên Giáp giữ cương vị Tổng Tư lệnh Quân đội Nhân dân Việt Nam trong suốt kháng chiến chống Pháp." },
    { question: "Hiệp định Sơ bộ giữa Việt Nam và Pháp được ký kết vào ngày nào?", options: ["19/12/1946", "2/9/1945", "20/7/1954", "6/3/1946"], correct: 3, difficulty: "medium", explanation: "Hiệp định Sơ bộ 6/3/1946 là văn kiện ngoại giao đầu tiên giữa Chính phủ ta và Pháp sau Cách mạng tháng Tám." },
    { question: "Hiệp định Giơ-ne-vơ về Đông Dương được ký chính thức vào ngày nào?", options: ["7/5/1954", "2/9/1954", "19/12/1954", "20/7/1954"], correct: 3, difficulty: "medium", explanation: "Hiệp định Giơ-ne-vơ được ký ngày 20/7/1954, lập lại hòa bình ở Đông Dương." },
    { question: "Ai là Trưởng đoàn đại biểu Chính phủ Việt Nam Dân chủ Cộng hòa tại Hội nghị Giơ-ne-vơ?", options: ["Hồ Chí Minh", "Trường Chinh", "Võ Nguyên Giáp", "Phạm Văn Đồng"], correct: 3, difficulty: "medium", explanation: "Phó Thủ tướng Phạm Văn Đồng dẫn đầu đoàn đại biểu ta tham dự Hội nghị Giơ-ne-vơ." },
    { question: "Đảng Cộng sản Đông Dương đổi tên thành Đảng Lao động Việt Nam tại Đại hội nào?", options: ["Đại hội I", "Đại hội III", "Đại hội IV", "Đại hội II (1951)"], correct: 3, difficulty: "hard", explanation: "Đại hội đại biểu toàn quốc lần thứ II (1951) quyết định đổi tên Đảng thành Đảng Lao động Việt Nam." },
    { question: "Quốc dân Đại hội Tân Trào quyết định Tổng khởi nghĩa được tổ chức vào thời gian nào?", options: ["Tháng 5/1941", "Tháng 12/1946", "Tháng 9/1945", "Tháng 8/1945"], correct: 3, difficulty: "medium", explanation: "Quốc dân Đại hội họp tại Tân Trào tháng 8/1945, quyết định phát động Tổng khởi nghĩa giành chính quyền." },
    { question: "Ủy ban Dân tộc Giải phóng Việt Nam do Quốc dân Đại hội Tân Trào bầu ra, ai đứng đầu?", options: ["Võ Nguyên Giáp", "Trường Chinh", "Phạm Văn Đồng", "Hồ Chí Minh"], correct: 3, difficulty: "easy", explanation: "Hồ Chí Minh được bầu làm Chủ tịch Ủy ban Dân tộc Giải phóng Việt Nam." },
    { question: "Trận Đông Khê có vai trò như thế nào trong chiến dịch Biên giới Thu Đông 1950?", options: ["Trận kết thúc chiến dịch", "Không có vai trò quan trọng", "Là trận thất bại của ta", "Trận mở màn, tạo bàn đạp cho toàn chiến dịch"], correct: 3, difficulty: "medium", explanation: "Chiến thắng Đông Khê mở màn chiến dịch, tạo đà cho quân ta giành thắng lợi toàn chiến dịch Biên giới." },
    { question: "Đồi nào ở Điện Biên Phủ là nơi giao tranh ác liệt nhất, quân ta phải dùng khối bộc phá gần 1 tấn để đánh chiếm?", options: ["Đồi Him Lam", "Đồi Độc Lập", "Đồi Hồng Cúm", "Đồi A1"], correct: 3, difficulty: "hard", explanation: "Đồi A1 là cứ điểm then chốt, giao tranh ác liệt kéo dài, quân ta phải dùng khối bộc phá lớn để tiêu diệt hầm ngầm." },
    { question: "Trước chiến dịch Điện Biên Phủ, quân ta đã mở chiến dịch nào ở Thượng Lào (1953) để phối hợp chiến trường?", options: ["Chiến dịch Hòa Bình", "Chiến dịch Tây Bắc", "Chiến dịch Biên giới", "Chiến dịch Thượng Lào"], correct: 3, difficulty: "hard", explanation: "Chiến dịch Thượng Lào năm 1953 giúp mở rộng vùng giải phóng, phối hợp với chiến trường chính." },
    { question: "Phương tiện vận tải thô sơ nào nổi tiếng đã giúp vận chuyển lương thực, vũ khí vào chiến dịch Điện Biên Phủ?", options: ["Xe bò kéo", "Thuyền độc mộc", "Xe ngựa", "Xe đạp thồ"], correct: 3, difficulty: "easy", explanation: "Hàng vạn chiếc xe đạp thồ đã được dân công cải tiến để chở hàng trăm kg hàng hóa vượt núi rừng tiếp tế cho chiến dịch." },
    { question: "Trước Cách mạng tháng Tám, lực lượng vũ trang nòng cốt của Việt Minh được hợp nhất thành tên gọi gì?", options: ["Vệ quốc đoàn", "Quân đội Nhân dân", "Dân quân tự vệ", "Việt Nam Giải phóng quân"], correct: 3, difficulty: "hard", explanation: "Đội Việt Nam Tuyên truyền Giải phóng quân cùng các lực lượng vũ trang khác được hợp nhất thành Việt Nam Giải phóng quân." },
    { question: "Chiến khu nào được coi là căn cứ địa cách mạng chính trước Tổng khởi nghĩa tháng Tám?", options: ["Chiến khu Đồng Tháp Mười", "Chiến khu D", "Chiến khu Ba Lòng", "Chiến khu Việt Bắc"], correct: 3, difficulty: "medium", explanation: "Chiến khu Việt Bắc là căn cứ địa cách mạng quan trọng, nơi Bác Hồ và Trung ương Đảng lãnh đạo phong trào." },
    { question: "Chủ tịch Hồ Chí Minh soạn thảo bản Tuyên ngôn Độc lập tại địa điểm nào ở Hà Nội?", options: ["Phủ Chủ tịch", "Quảng trường Ba Đình", "Nhà sàn Bác Hồ", "Nhà số 48 phố Hàng Ngang"], correct: 3, difficulty: "medium", explanation: "Bác Hồ soạn thảo Tuyên ngôn Độc lập tại ngôi nhà số 48 phố Hàng Ngang, Hà Nội." },
    { question: "Chủ tịch Hồ Chí Minh phát động phong trào nào để chống 'giặc dốt' sau Cách mạng tháng Tám?", options: ["Đời sống mới", "Diệt giặc đói", "Tuần lễ vàng", "Bình dân học vụ"], correct: 3, difficulty: "easy", explanation: "Phong trào Bình dân học vụ được phát động nhằm xóa nạn mù chữ cho nhân dân." },
    { question: "Phong trào 'Tuần lễ vàng' được phát động nhằm mục đích gì?", options: ["Xây dựng trường học", "Phát triển nông nghiệp", "Đào tạo cán bộ", "Quyên góp vàng bạc ủng hộ chính quyền cách mạng non trẻ"], correct: 3, difficulty: "medium", explanation: "Tuần lễ vàng kêu gọi nhân dân quyên góp vàng bạc để giúp chính quyền cách mạng vượt qua khó khăn tài chính ban đầu." },
    { question: "Theo Hiệp ước Hoa - Pháp (2/1946), quân đội nước nào rút khỏi miền Bắc, thay bằng quân Pháp?", options: ["Quân Nhật", "Quân Anh", "Quân Mỹ", "Quân Trung Hoa Dân Quốc (Tưởng Giới Thạch)"], correct: 3, difficulty: "hard", explanation: "Hiệp ước Hoa - Pháp dẫn đến việc quân Tưởng Giới Thạch rút khỏi miền Bắc, quân Pháp ra thay thế." },
    { question: "Sau Hiệp định Sơ bộ 6/3/1946, ta còn ký thêm văn kiện nào để kéo dài hòa hoãn với Pháp?", options: ["Hiệp định Giơ-ne-vơ", "Hiệp định Pa-ri", "Hòa ước Nhâm Tuất", "Tạm ước 14/9/1946"], correct: 3, difficulty: "medium", explanation: "Tạm ước 14/9/1946 được ký nhằm tranh thủ thêm thời gian hòa bình để chuẩn bị lực lượng." },
    { question: "Pháo đài Láng ở Hà Nội gắn liền với sự kiện nào khi bắn phát pháo đầu tiên mở đầu kháng chiến toàn quốc?", options: ["Ngày 2/9/1945", "Ngày 7/5/1954", "Ngày 23/9/1945", "Đêm 19/12/1946"], correct: 3, difficulty: "medium", explanation: "Pháo đài Láng nổ súng vào đêm 19/12/1946, mở đầu cho cuộc kháng chiến toàn quốc chống Pháp." },
    { question: "Ai là Bộ trưởng Bộ Quốc phòng đầu tiên của nước Việt Nam Dân chủ Cộng hòa?", options: ["Chu Văn Tấn", "Phan Anh", "Tạ Quang Bửu", "Võ Nguyên Giáp"], correct: 3, difficulty: "medium", explanation: "Võ Nguyên Giáp giữ chức Bộ trưởng Bộ Quốc phòng đầu tiên khi Chính phủ lâm thời thành lập năm 1945." },
    { question: "Trận Tu Vũ (1951) là một phần của chiến dịch nào trong kháng chiến chống Pháp?", options: ["Chiến dịch Biên giới", "Chiến dịch Điện Biên Phủ", "Chiến dịch Việt Bắc", "Chiến dịch Hòa Bình"], correct: 3, difficulty: "hard", explanation: "Trận Tu Vũ là trận mở màn quan trọng trong chiến dịch Hòa Bình (1951-1952)." },
    { question: "Ngày Toàn quốc kháng chiến (19/12/1946) diễn ra sau sự kiện nào khiến quan hệ Việt - Pháp đổ vỡ hoàn toàn?", options: ["Hiệp định Giơ-ne-vơ thất bại", "Chiến dịch Biên giới kết thúc", "Hội nghị Đà Lạt bế tắc", "Pháp gửi tối hậu thư đòi tước vũ khí tự vệ Hà Nội"], correct: 3, difficulty: "medium", explanation: "Trước tối hậu thư ngang ngược của Pháp, Chủ tịch Hồ Chí Minh đã phát động Toàn quốc kháng chiến." }
],
   "khang-chien-my": [
    { question: "Chiến dịch Hồ Chí Minh lịch sử kết thúc vào ngày tháng năm nào?", options: ["30/04/1975", "02/09/1945", "19/05/1890", "22/12/1944"], correct: 0, difficulty: "easy", explanation: "Đúng 11h30 ngày 30/4/1975, lá cờ cách mạng tung bay trên nóc Dinh Độc Lập, kết thúc kháng chiến chống Mỹ." },
    { question: "Phong trào 'Đồng khởi' bắt đầu từ tỉnh nào ở miền Nam?", options: ["Cà Mau", "Bến Tre", "Tây Ninh", "Quảng Nam"], correct: 1, difficulty: "easy", explanation: "Phong trào Đồng khởi (1960) nổ ra mạnh mẽ nhất và giành thắng lợi đầu tiên tại tỉnh Bến Tre." },
    { question: "Tên gọi của tuyến đường vận tải chiến lược chi viện cho miền Nam?", options: ["Đường số 1", "Đường 9 Nam Lào", "Đường Hồ Chí Minh", "Đường Trường Sơn Đông"], correct: 2, difficulty: "easy", explanation: "Đường Hồ Chí Minh (Đường Trường Sơn) là tuyến huyết mạch huyền thoại chi viện cho tiền tuyến miền Nam." },
    { question: "Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân diễn ra vào năm nào?", options: ["1960", "1965", "1972", "1968"], correct: 3, difficulty: "medium", explanation: "Cuộc tập kích chiến lược Tết Mậu Thân 1968 đã buộc Mỹ phải xuống thang chiến tranh." },
    { question: "Trận 'Điện Biên Phủ trên không' năm 1972 diễn ra chủ yếu ở đâu?", options: ["Hà Nội và Hải Phòng", "Sài Gòn", "Huế", "Đà Nẵng"], correct: 0, difficulty: "medium", explanation: "Đây là tên gọi ca ngợi chiến thắng 12 ngày đêm chống cuộc tập kích bằng máy bay B-52 của Mỹ vào Hà Nội, Hải Phòng." },
    { question: "Hiệp định Pa-ri được ký kết năm nào?", options: ["1970", "1973", "1972", "1975"], correct: 1, difficulty: "easy", explanation: "Hiệp định Pa-ri được ký ngày 27/1/1973, buộc Mỹ phải rút toàn bộ quân đội về nước." },
    { question: "Thành phố nào là nơi đầu tiên được giải phóng trong chiến dịch mùa Xuân 1975?", options: ["Huế", "Đà Nẵng", "Buôn Ma Thuột", "Sài Gòn"], correct: 2, difficulty: "easy", explanation: "Trận Buôn Ma Thuột (10/3/1975) là trận then chốt mở màn cho đại thắng mùa Xuân năm 1975." },
    { question: "Chiếc xe tăng mang số hiệu nào đã húc đổ cổng Dinh Độc Lập?", options: ["Xe tăng 843", "Xe tăng 555", "Xe tăng 123", "Xe tăng 390"], correct: 3, difficulty: "medium", explanation: "Xe tăng 390 là chiếc đầu tiên húc đổ cổng chính Dinh Độc Lập trưa 30/4/1975." },
    { question: "Tổng thống cuối cùng của chính quyền Sài Gòn là ai?", options: ["Dương Văn Minh", "Nguyễn Văn Thiệu", "Ngô Đình Diệm", "Nguyễn Cao Kỳ"], correct: 0, difficulty: "easy", explanation: "Đại tướng Dương Văn Minh đã tuyên bố đầu hàng không điều kiện vào trưa ngày 30/4/1975." },
    { question: "Năm 1976, Thành phố Sài Gòn - Gia Định chính thức được đổi tên thành gì?", options: ["Thành phố Hòa Bình", "Thành phố Hồ Chí Minh", "Thành phố Phương Nam", "Thành phố Thủ Đô"], correct: 1, difficulty: "easy", explanation: "Để vinh danh công lao vĩ đại của Bác, thành phố đã được mang tên Người." },
    { question: "Ai là người đã cắm lá cờ giải phóng trên nóc Dinh Độc Lập trưa 30/4/1975?", options: ["Nguyễn Văn Thiệu", "Dương Văn Minh", "Bùi Quang Thận", "Phạm Xuân Thệ"], correct: 2, difficulty: "medium", explanation: "Trung úy Bùi Quang Thận là người cắm lá cờ Mặt trận Dân tộc Giải phóng trên nóc Dinh Độc Lập." },
    { question: "Chiến thắng Vạn Tường (1965) có ý nghĩa gì đối với cuộc kháng chiến chống Mỹ?", options: ["Kết thúc chiến tranh", "Giải phóng hoàn toàn miền Nam", "Mở đầu chiến dịch Hồ Chí Minh", "Chứng minh khả năng đánh thắng quân Mỹ trong chiến tranh cục bộ"], correct: 3, difficulty: "medium", explanation: "Vạn Tường là trận đọ sức trực tiếp đầu tiên với quân viễn chinh Mỹ, chứng minh quân dân ta có thể đánh thắng." },
    { question: "Đường Hồ Chí Minh trên biển nổi tiếng với hình thức vận chuyển bí mật nào?", options: ["Đoàn tàu không số", "Xe đạp thồ", "Voi vận tải", "Khinh khí cầu"], correct: 0, difficulty: "hard", explanation: "Những 'đoàn tàu không số' đã vận chuyển vũ khí bí mật chi viện cho chiến trường miền Nam qua đường biển." },
    { question: "Chiến lược chiến tranh nào được Mỹ áp dụng ở miền Nam trong giai đoạn đầu những năm 1960?", options: ["Chiến tranh cục bộ", "Chiến tranh đặc biệt", "Việt Nam hóa chiến tranh", "Chiến tranh phá hoại"], correct: 1, difficulty: "hard", explanation: "'Chiến tranh đặc biệt' (1961-1965) dựa vào quân đội Sài Gòn, có cố vấn và vũ khí Mỹ hỗ trợ." },
    { question: "Sau thất bại của chiến lược 'Chiến tranh cục bộ', Mỹ chuyển sang thực hiện chiến lược nào?", options: ["Chiến tranh đặc biệt", "Chiến tranh đơn phương", "Việt Nam hóa chiến tranh", "Chiến tranh tổng lực"], correct: 2, difficulty: "hard", explanation: "'Việt Nam hóa chiến tranh' nhằm rút dần quân Mỹ, tăng cường vai trò chiến đấu của quân đội Sài Gòn." },
    { question: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập vào năm nào?", options: ["1954", "1968", "1975", "1960"], correct: 3, difficulty: "medium", explanation: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam thành lập ngày 20/12/1960, tập hợp các lực lượng yêu nước ở miền Nam." },
    { question: "Ai là Chủ tịch đầu tiên của Mặt trận Dân tộc Giải phóng miền Nam Việt Nam?", options: ["Nguyễn Hữu Thọ", "Huỳnh Tấn Phát", "Nguyễn Thị Bình", "Trần Văn Trà"], correct: 0, difficulty: "medium", explanation: "Luật sư Nguyễn Hữu Thọ được bầu làm Chủ tịch đầu tiên của Mặt trận." },
    { question: "Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975 mở màn bằng chiến dịch nào?", options: ["Chiến dịch Huế - Đà Nẵng", "Chiến dịch Tây Nguyên", "Chiến dịch Hồ Chí Minh", "Chiến dịch Hồ Chí Minh trên không"], correct: 1, difficulty: "easy", explanation: "Chiến dịch Tây Nguyên (mở màn bằng trận Buôn Ma Thuột) là đòn tiến công chiến lược đầu tiên trong cuộc Tổng tiến công mùa Xuân 1975." },
    { question: "Ai là Tư lệnh trực tiếp chỉ huy Chiến dịch Hồ Chí Minh lịch sử?", options: ["Đại tướng Võ Nguyên Giáp", "Thượng tướng Trần Văn Trà", "Đại tướng Văn Tiến Dũng", "Trung tướng Lê Trọng Tấn"], correct: 2, difficulty: "medium", explanation: "Đại tướng Văn Tiến Dũng được cử làm Tư lệnh Chiến dịch Hồ Chí Minh, dưới sự chỉ đạo chung của Bộ Chính trị và Đại tướng Võ Nguyên Giáp." },
    { question: "Chiến dịch giải phóng Huế - Đà Nẵng diễn ra vào thời gian nào năm 1975?", options: ["Tháng 1/1975", "Tháng 2/1975", "Tháng 4/1975", "Tháng 3/1975"], correct: 3, difficulty: "easy", explanation: "Huế được giải phóng ngày 26/3 và Đà Nẵng ngày 29/3/1975, mở đường cho đại thắng mùa Xuân." },
    { question: "Hiệp định Pa-ri (1973) có nội dung quan trọng nào liên quan đến quân đội Mỹ?", options: ["Mỹ cam kết rút hết quân viễn chinh khỏi Việt Nam", "Mỹ được tiếp tục đóng quân tại miền Nam", "Mỹ viện trợ vô thời hạn cho chính quyền Sài Gòn", "Mỹ và Việt Nam thiết lập quan hệ ngoại giao"], correct: 0, difficulty: "medium", explanation: "Hiệp định Pa-ri buộc Mỹ phải rút hết quân viễn chinh và cam kết tôn trọng độc lập, chủ quyền, thống nhất của Việt Nam." },
    { question: "Địa đạo Củ Chi có vai trò như thế nào trong kháng chiến chống Mỹ?", options: ["Là nơi đặt trụ sở chính quyền Sài Gòn", "Là căn cứ ẩn nấp, chiến đấu của quân và dân gần Sài Gòn", "Là tuyến phòng thủ của quân Mỹ", "Là nơi tổ chức Hội nghị Pa-ri"], correct: 1, difficulty: "easy", explanation: "Hệ thống địa đạo Củ Chi giúp quân dân ta ẩn nấp, chiến đấu ngay sát nách căn cứ quân sự của địch." },
    { question: "Ngày 30/4 hằng năm ở Việt Nam được gọi là ngày gì?", options: ["Ngày Quốc khánh", "Ngày Thương binh Liệt sĩ", "Ngày Giải phóng miền Nam, thống nhất đất nước", "Ngày thành lập Quân đội Nhân dân"], correct: 2, difficulty: "easy", explanation: "Ngày 30/4 kỷ niệm chiến thắng lịch sử, giải phóng hoàn toàn miền Nam, thống nhất đất nước năm 1975." },
    { question: "Ai là Tổng Bí thư của Đảng trong phần lớn giai đoạn kháng chiến chống Mỹ?", options: ["Trường Chinh", "Nguyễn Văn Linh", "Đỗ Mười", "Lê Duẩn"], correct: 3, difficulty: "hard", explanation: "Lê Duẩn giữ cương vị Bí thư thứ nhất/Tổng Bí thư, có vai trò lãnh đạo quan trọng trong suốt cuộc kháng chiến chống Mỹ." },
    { question: "Trận 'Điện Biên Phủ trên không' cuối năm 1972 buộc Mỹ phải làm gì sau đó?", options: ["Quay lại bàn đàm phán và ký Hiệp định Pa-ri", "Rút toàn bộ cố vấn quân sự ngay lập tức", "Chấm dứt viện trợ cho chính quyền Sài Gòn", "Đầu hàng vô điều kiện"], correct: 0, difficulty: "hard", explanation: "Thất bại nặng nề trong 12 ngày đêm cuối 1972 buộc Mỹ phải nối lại đàm phán và ký Hiệp định Pa-ri đầu năm 1973." },
    { question: "Chiến thắng Ấp Bắc (1963) chứng minh quân dân ta có thể đánh bại chiến thuật nào của Mỹ - ngụy?", options: ["Bình định nông thôn", "'Trực thăng vận, thiết xa vận'", "Chiến tranh hóa học", "Dồn dân lập ấp chiến lược"], correct: 1, difficulty: "hard", explanation: "Chiến thắng Ấp Bắc chứng minh khả năng đánh bại chiến thuật cơ động bằng trực thăng và xe bọc thép của Mỹ - ngụy." },
    { question: "Ai là Đại sứ Mỹ cuối cùng tại Sài Gòn trước ngày 30/4/1975?", options: ["Ellsworth Bunker", "Henry Cabot Lodge", "Graham Martin", "Maxwell Taylor"], correct: 2, difficulty: "medium", explanation: "Graham Martin là Đại sứ Mỹ cuối cùng tại Sài Gòn, phải di tản bằng trực thăng khi Sài Gòn thất thủ." },
    { question: "Chiến dịch không quân nào của Mỹ mở đầu cuộc chiến tranh phá hoại miền Bắc lần thứ nhất năm 1965?", options: ["Chiến dịch Linebacker", "Chiến dịch Tuyến lửa", "Chiến dịch Bão táp sa mạc", "Chiến dịch Sấm Rền (Rolling Thunder)"], correct: 3, difficulty: "medium", explanation: "Chiến dịch Sấm Rền (Rolling Thunder) mở đầu cuộc ném bom phá hoại miền Bắc bằng không quân từ năm 1965." },
    { question: "Ai là đại diện của Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam ký Hiệp định Pa-ri 1973?", options: ["Nguyễn Thị Bình", "Lê Đức Thọ", "Xuân Thủy", "Nguyễn Duy Trinh"], correct: 0, difficulty: "medium", explanation: "Bà Nguyễn Thị Bình, Bộ trưởng Ngoại giao Chính phủ CMLT, là người đại diện ký Hiệp định Pa-ri." },
    { question: "Sự kiện Vịnh Bắc Bộ (8/1964) được Mỹ dùng làm cớ để làm gì?", options: ["Rút quân khỏi miền Nam", "Mở rộng chiến tranh phá hoại miền Bắc bằng không quân", "Ký Hiệp định Giơ-ne-vơ", "Thành lập Mặt trận Dân tộc Giải phóng"], correct: 1, difficulty: "easy", explanation: "Mỹ dựng lên 'sự kiện Vịnh Bắc Bộ' làm cớ leo thang, mở rộng chiến tranh phá hoại bằng không quân ra miền Bắc." },
    { question: "Chiến thắng Bình Giã (1964-1965) chứng minh điều gì về chiến lược của Mỹ - ngụy?", options: ["Sự thành công của chiến lược Việt Nam hóa chiến tranh", "Mỹ đã rút hết quân khỏi miền Nam", "Sự phá sản của chiến lược 'Chiến tranh đặc biệt'", "Kết thúc hoàn toàn cuộc kháng chiến"], correct: 2, difficulty: "hard", explanation: "Chiến thắng Bình Giã cho thấy quân đội Sài Gòn không thể đứng vững, đánh dấu sự phá sản của chiến lược Chiến tranh đặc biệt." },
    { question: "'Ấp chiến lược' là biện pháp gom dân của chính quyền Sài Gòn nhằm mục đích gì?", options: ["Phát triển kinh tế nông thôn", "Xây dựng trường học cho dân", "Tổ chức bầu cử địa phương", "Cô lập lực lượng cách mạng khỏi sự ủng hộ của nhân dân"], correct: 3, difficulty: "medium", explanation: "Ấp chiến lược nhằm tách dân khỏi cách mạng, kiểm soát chặt chẽ đời sống nhân dân nông thôn miền Nam." },
    { question: "Chiến thắng Núi Thành (1965) được ghi nhận là trận đánh nào?", options: ["Trận đầu tiên quân ta đánh trực tiếp với quân Mỹ và giành thắng lợi", "Trận cuối cùng của kháng chiến chống Mỹ", "Trận mở màn chiến dịch Hồ Chí Minh", "Trận phòng ngự lớn nhất miền Trung"], correct: 0, difficulty: "hard", explanation: "Trận Núi Thành (Quảng Nam) là trận đánh trực tiếp đầu tiên của quân ta với quân viễn chinh Mỹ và giành thắng lợi." },
    { question: "Cuộc Tổng tiến công Xuân Mậu Thân 1968 đợt 1 được phát động vào thời điểm nào?", options: ["Mùa hè năm 1968", "Đêm Giao thừa Tết Mậu Thân, tháng 1/1968", "Cuối năm 1968", "Đầu năm 1969"], correct: 1, difficulty: "medium", explanation: "Cuộc Tổng tiến công đợt 1 nổ ra đồng loạt vào đêm Giao thừa Tết Mậu Thân, gây bất ngờ lớn cho địch." },
    { question: "Sự kiện Mỹ Lai (Sơn Mỹ) năm 1968 là gì?", options: ["Một chiến thắng lớn của quân giải phóng", "Cuộc đàm phán bí mật Việt - Mỹ", "Vụ thảm sát dân thường do quân Mỹ gây ra, gây chấn động dư luận thế giới", "Một trận không chiến lớn"], correct: 2, difficulty: "hard", explanation: "Vụ thảm sát Mỹ Lai gây phẫn nộ trong dư luận Mỹ và quốc tế, làm gia tăng phong trào phản chiến." },
    { question: "Phong trào phản chiến ở Mỹ phát triển mạnh mẽ sau sự kiện nào?", options: ["Hiệp định Pa-ri 1973", "Chiến dịch Hồ Chí Minh 1975", "Sự kiện Vịnh Bắc Bộ 1964", "Tổng tiến công Mậu Thân 1968 và vụ thảm sát Mỹ Lai"], correct: 3, difficulty: "medium", explanation: "Những sự kiện chấn động này khiến người dân Mỹ ngày càng phản đối cuộc chiến tranh tại Việt Nam." },
    { question: "Tổng thống Mỹ nào tuyên bố ngừng ném bom miền Bắc và chấp nhận đàm phán tại Pa-ri năm 1968?", options: ["Lyndon B. Johnson", "Richard Nixon", "John F. Kennedy", "Gerald Ford"], correct: 0, difficulty: "hard", explanation: "Tổng thống Johnson tuyên bố ngừng ném bom một phần miền Bắc và chấp nhận đàm phán sau Tổng tiến công Mậu Thân." },
    { question: "Hội nghị Pa-ri về Việt Nam chính thức khai mạc vào năm nào?", options: ["1965", "1968", "1972", "1973"], correct: 1, difficulty: "medium", explanation: "Hội nghị Pa-ri khai mạc năm 1968, kéo dài đàm phán gần 5 năm trước khi ký Hiệp định năm 1973." },
    { question: "Ai là Cố vấn đặc biệt của đoàn Việt Nam Dân chủ Cộng hòa trong đàm phán Hiệp định Pa-ri?", options: ["Xuân Thủy", "Nguyễn Duy Trinh", "Lê Đức Thọ", "Nguyễn Cơ Thạch"], correct: 2, difficulty: "medium", explanation: "Lê Đức Thọ là Cố vấn đặc biệt, trực tiếp đàm phán bí mật với Kissinger dẫn đến Hiệp định Pa-ri." },
    { question: "Lê Đức Thọ được trao giải thưởng quốc tế nào cùng Kissinger sau Hiệp định Pa-ri (nhưng đã từ chối nhận)?", options: ["Giải thưởng Lenin", "Huân chương Hồ Chí Minh", "Giải Nobel Văn học", "Giải Nobel Hòa bình"], correct: 3, difficulty: "hard", explanation: "Lê Đức Thọ được trao giải Nobel Hòa bình 1973 nhưng từ chối nhận vì cho rằng hòa bình thực sự chưa lập lại ở Việt Nam." },
    { question: "'Mùa hè đỏ lửa' năm 1972 gắn liền chủ yếu với các mặt trận nào?", options: ["Quảng Trị, Kon Tum, An Lộc (Bình Long)", "Sài Gòn, Cần Thơ, Mỹ Tho", "Hà Nội, Hải Phòng", "Huế, Đà Nẵng"], correct: 0, difficulty: "medium", explanation: "Cuộc tiến công chiến lược năm 1972 diễn ra ác liệt tại ba mặt trận lớn: Quảng Trị, Kon Tum và An Lộc." },
    { question: "Cuộc chiến đấu bảo vệ Thành cổ Quảng Trị năm 1972 nổi tiếng kéo dài bao nhiêu ngày đêm?", options: ["56 ngày đêm", "81 ngày đêm", "30 ngày đêm", "120 ngày đêm"], correct: 1, difficulty: "hard", explanation: "Cuộc chiến đấu bảo vệ Thành cổ Quảng Trị kéo dài 81 ngày đêm ác liệt, trở thành biểu tượng của tinh thần chiến đấu kiên cường." },
    { question: "'Chiến dịch Linebacker II' là tên gọi phía Mỹ đặt cho trận đánh nào?", options: ["Trận Tổng tiến công Mậu Thân", "Chiến dịch Hồ Chí Minh", "Trận 'Điện Biên Phủ trên không' cuối năm 1972", "Trận Buôn Ma Thuột"], correct: 2, difficulty: "hard", explanation: "Linebacker II là tên phía Mỹ đặt cho chiến dịch ném bom B-52 vào Hà Nội, Hải Phòng cuối năm 1972." },
    { question: "Theo tinh thần Hiệp định Pa-ri 1973, sau khi Mỹ rút quân, lực lượng nào vẫn ở lại miền Nam?", options: ["Toàn bộ quân đội Mỹ", "Quân đồng minh của Mỹ", "Không có lực lượng nào ở lại", "Quân đội nhân dân Việt Nam"], correct: 3, difficulty: "medium", explanation: "Hiệp định quy định chỉ quân Mỹ và đồng minh phải rút, còn lực lượng vũ trang cách mạng vẫn ở lại miền Nam." },
    { question: "Chiến dịch nào cuối năm 1974 - đầu 1975 mang tính trinh sát chiến lược, giải phóng toàn tỉnh Phước Long?", options: ["Chiến dịch Đường 14 - Phước Long", "Chiến dịch Tây Nguyên", "Chiến dịch Huế - Đà Nẵng", "Chiến dịch Hồ Chí Minh"], correct: 0, difficulty: "medium", explanation: "Chiến dịch Đường 14 - Phước Long thắng lợi, mở đầu cho quyết tâm giải phóng hoàn toàn miền Nam." },
    { question: "Chiến thắng Phước Long (đầu năm 1975) có ý nghĩa chiến lược quan trọng nào?", options: ["Kết thúc hoàn toàn cuộc chiến tranh", "Khẳng định khả năng thắng lớn khi Mỹ không còn khả năng can thiệp trở lại", "Buộc Mỹ ký lại hiệp định mới", "Mở đầu chiến dịch Điện Biên Phủ trên không"], correct: 1, difficulty: "hard", explanation: "Chiến thắng này cho thấy quân đội Sài Gòn suy yếu và Mỹ không còn khả năng can thiệp quân sự trở lại, củng cố quyết tâm giải phóng miền Nam." },
    { question: "Ai là Tư lệnh trực tiếp chỉ huy Chiến dịch Tây Nguyên năm 1975?", options: ["Văn Tiến Dũng", "Trần Văn Trà", "Hoàng Minh Thảo", "Lê Trọng Tấn"], correct: 2, difficulty: "medium", explanation: "Trung tướng Hoàng Minh Thảo được cử làm Tư lệnh Chiến dịch Tây Nguyên, mở màn bằng trận Buôn Ma Thuột." },
    { question: "Ngày 21/4/1975 gắn liền với sự kiện chính trị quan trọng nào trước ngày giải phóng Sài Gòn?", options: ["Sài Gòn được giải phóng", "Ký Hiệp định Pa-ri", "Mỹ rút quân hoàn toàn", "Tổng thống Nguyễn Văn Thiệu tuyên bố từ chức"], correct: 3, difficulty: "hard", explanation: "Trước sức ép quân sự, Nguyễn Văn Thiệu tuyên bố từ chức Tổng thống ngày 21/4/1975, chỉ 9 ngày trước khi Sài Gòn được giải phóng." },
    { question: "Chiến dịch giải phóng Sài Gòn - Gia Định được Bộ Chính trị quyết định mang tên gì để vinh danh Chủ tịch Hồ Chí Minh?", options: ["Chiến dịch Hồ Chí Minh", "Chiến dịch Giải phóng miền Nam", "Chiến dịch Toàn thắng", "Chiến dịch Đại thắng Mùa xuân"], correct: 0, difficulty: "easy", explanation: "Bộ Chính trị quyết định đặt tên Chiến dịch Hồ Chí Minh cho trận quyết chiến chiến lược cuối cùng, thể hiện lòng tôn kính với Bác." },
    { question: "Cuộc kháng chiến chống Mỹ cứu nước của nhân dân Việt Nam kéo dài trong khoảng bao nhiêu năm?", options: ["9 năm", "21 năm (1954-1975)", "30 năm", "15 năm"], correct: 1, difficulty: "medium", explanation: "Cuộc kháng chiến chống Mỹ kéo dài 21 năm, từ sau Hiệp định Giơ-ne-vơ 1954 đến đại thắng mùa Xuân 1975." }
],
  "ngo-dinh-tienle": [
    { question: "Ngô Quyền lên ngôi vua vào năm nào?", options: ["935", "939", "938", "944"], correct: 1, difficulty: "easy", explanation: "Sau chiến thắng Bạch Đằng năm 938, năm 939 Ngô Quyền chính thức xưng vương." },
    { question: "Ngô Quyền đóng đô ở đâu sau khi lên ngôi?", options: ["Hoa Lư", "Thăng Long", "Cổ Loa", "Phong Châu"], correct: 2, difficulty: "easy", explanation: "Ngô Quyền chọn Cổ Loa làm kinh đô, nối tiếp truyền thống từ thời An Dương Vương." },
    { question: "Sau khi Ngô Quyền mất (944), ai đã cướp ngôi của cháu ngoại mình?", options: ["Kiều Công Tiễn", "Đỗ Thích", "Ngô Xương Xí", "Dương Tam Kha"], correct: 3, difficulty: "medium", explanation: "Dương Tam Kha, em vợ Ngô Quyền, đã tiếm quyền, tự xưng vương thay vì để con Ngô Quyền nối ngôi." },
    { question: "Tình trạng đất nước bị chia cắt, cát cứ sau khi nhà Ngô suy yếu được gọi là gì?", options: ["Loạn kiêu binh", "Loạn Tam Vương", "Loạn Lam Sơn", "Loạn 12 sứ quân"], correct: 3, difficulty: "easy", explanation: "Đất nước bị chia thành 12 vùng do các sứ quân cát cứ, gây cảnh loạn lạc kéo dài." },
    { question: "Ai là người đã dẹp loạn 12 sứ quân, thống nhất đất nước?", options: ["Lê Hoàn", "Ngô Xương Văn", "Lý Công Uẩn", "Đinh Bộ Lĩnh"], correct: 3, difficulty: "easy", explanation: "Đinh Bộ Lĩnh lần lượt đánh dẹp các sứ quân, thống nhất giang sơn về một mối." },
    { question: "Đinh Bộ Lĩnh lớn lên và xây dựng lực lượng tại vùng đất nào?", options: ["Lam Sơn, Thanh Hóa", "Đường Lâm, Hà Nội", "Mê Linh", "Hoa Lư, Ninh Bình"], correct: 3, difficulty: "medium", explanation: "Đinh Bộ Lĩnh sinh trưởng ở Hoa Lư, sau này chọn nơi đây làm kinh đô." },
    { question: "Thuở nhỏ, Đinh Bộ Lĩnh nổi tiếng với trò chơi nào thể hiện chí lớn cầm quân?", options: ["Đấu vật", "Thả diều", "Bắn nỏ", "Cờ lau tập trận"], correct: 3, difficulty: "easy", explanation: "Trò chơi 'cờ lau tập trận' cùng đám trẻ chăn trâu thể hiện khí phách và tài chỉ huy từ nhỏ." },
    { question: "Đinh Bộ Lĩnh lên ngôi hoàng đế vào năm nào?", options: ["966", "970", "975", "968"], correct: 3, difficulty: "medium", explanation: "Năm 968, sau khi dẹp xong loạn 12 sứ quân, Đinh Bộ Lĩnh lên ngôi hoàng đế." },
    { question: "Đinh Bộ Lĩnh lấy hiệu là gì khi lên ngôi?", options: ["Đinh Thái Tổ", "Đinh Phế Đế", "Đinh Cao Tổ", "Đinh Tiên Hoàng"], correct: 3, difficulty: "easy", explanation: "Ông lấy hiệu là Đinh Tiên Hoàng, vị hoàng đế đầu tiên của nước Đại Cồ Việt." },
    { question: "Quốc hiệu nước ta dưới thời nhà Đinh là gì?", options: ["Văn Lang", "Âu Lạc", "Đại Việt", "Đại Cồ Việt"], correct: 3, difficulty: "medium", explanation: "Đinh Tiên Hoàng đặt quốc hiệu là Đại Cồ Việt, khẳng định nền độc lập tự chủ." },
    { question: "Kinh đô của nước Đại Cồ Việt được đặt ở đâu?", options: ["Cổ Loa", "Thăng Long", "Phú Xuân", "Hoa Lư"], correct: 3, difficulty: "easy", explanation: "Hoa Lư (Ninh Bình) được chọn làm kinh đô nhờ địa thế hiểm trở, dễ phòng thủ." },
    { question: "Việc Đinh Tiên Hoàng xưng đế và đặt quốc hiệu riêng có ý nghĩa gì?", options: ["Xin thần phục nhà Tống", "Sáp nhập vào Trung Hoa", "Chỉ mang tính hình thức", "Khẳng định nền độc lập, ngang hàng với hoàng đế phương Bắc"], correct: 3, difficulty: "medium", explanation: "Đây là lần đầu một vị vua Việt xưng đế, thể hiện ý chí tự chủ hoàn toàn của dân tộc." },
    { question: "Đồng tiền Thái Bình Hưng Bảo - đồng tiền đầu tiên của Việt Nam - được đúc dưới triều đại nào?", options: ["Nhà Ngô", "Nhà Tiền Lê", "Nhà Lý", "Nhà Đinh"], correct: 3, difficulty: "medium", explanation: "Nhà Đinh cho đúc tiền Thái Bình Hưng Bảo, đánh dấu mốc tiền tệ độc lập đầu tiên." },
    { question: "Quân đội thời Đinh được tổ chức thành bao nhiêu đạo?", options: ["5 đạo", "12 đạo", "18 đạo", "10 đạo"], correct: 3, difficulty: "hard", explanation: "Đinh Tiên Hoàng tổ chức quân đội chính quy gồm 10 đạo để bảo vệ đất nước." },
    { question: "Ai đã sát hại vua Đinh Tiên Hoàng và con trưởng Đinh Liễn năm 979?", options: ["Lê Hoàn", "Ngô Nhật Khánh", "Dương Tam Kha", "Đỗ Thích"], correct: 3, difficulty: "medium", explanation: "Đỗ Thích ám sát cha con Đinh Tiên Hoàng, gây biến loạn trong triều đình." },
    { question: "Sau khi vua Đinh bị sát hại, ai được lập lên ngôi khi còn nhỏ tuổi?", options: ["Đinh Liễn", "Lê Long Đĩnh", "Lê Long Việt", "Đinh Toàn"], correct: 3, difficulty: "medium", explanation: "Đinh Toàn lên ngôi khi mới 6 tuổi, quyền hành thực tế nằm trong tay Thập đạo tướng quân Lê Hoàn." },
    { question: "Ai là vị thái hậu đã khoác long bào lên vai Lê Hoàn, suy tôn ông lên ngôi vua?", options: ["Ỷ Lan", "Huyền Trân", "Bùi Thị Xuân", "Dương Vân Nga"], correct: 3, difficulty: "easy", explanation: "Trước nguy cơ quân Tống xâm lược, Thái hậu Dương Vân Nga đã suy tôn Lê Hoàn lên ngôi để lãnh đạo kháng chiến." },
    { question: "Lê Hoàn lên ngôi, lập ra triều đại nào?", options: ["Nhà Hậu Lê", "Nhà Lý", "Nhà Trần", "Nhà Tiền Lê"], correct: 3, difficulty: "easy", explanation: "Lê Hoàn lập ra nhà Tiền Lê, kế tục nhà Đinh trị vì đất nước." },
    { question: "Lê Hoàn lãnh đạo nhân dân đánh bại quân xâm lược nào vào năm 981?", options: ["Quân Nam Hán", "Quân Nguyên", "Quân Minh", "Quân Tống"], correct: 3, difficulty: "easy", explanation: "Năm 981, Lê Hoàn đánh tan quân Tống xâm lược, bảo vệ vững chắc nền độc lập non trẻ." },
    { question: "Ngoài chống ngoại xâm, Lê Hoàn (Lê Đại Hành) còn có công lao nổi bật nào?", options: ["Xây dựng Văn Miếu", "Ban hành bộ luật Hồng Đức", "Dời đô về Thăng Long", "Mở mang nông nghiệp, khơi kênh đào, đẩy mạnh kinh tế"], correct: 3, difficulty: "medium", explanation: "Ông chú trọng phát triển nông nghiệp, cho đào kênh, mở mang giao thương buôn bán." },
    { question: "Vị vua nào của nhà Tiền Lê nổi tiếng bạo ngược, thường dùng hình phạt tàn ác?", options: ["Lê Long Việt", "Lê Hoàn", "Lê Thánh Tông", "Lê Long Đĩnh"], correct: 3, difficulty: "medium", explanation: "Lê Long Đĩnh nổi tiếng tàn bạo, thường bày ra các cách hành hình dã man với tù nhân." },
    { question: "Lê Long Đĩnh còn có biệt danh gì do bệnh tật khiến ông phải nằm khi thiết triều?", options: ["Lê Thánh Tông", "Lê Đại Hành", "Lê Uy Mục", "Lê Ngọa Triều"], correct: 3, difficulty: "medium", explanation: "Do mắc bệnh nặng phải nằm khi coi triều chính, ông được gọi là Lê Ngọa Triều." },
    { question: "Nhà Tiền Lê chấm dứt và nhường ngôi cho triều đại nào vào năm 1009?", options: ["Nhà Trần", "Nhà Hồ", "Nhà Mạc", "Nhà Lý"], correct: 3, difficulty: "medium", explanation: "Sau khi Lê Long Đĩnh mất, triều thần suy tôn Lý Công Uẩn lên ngôi, mở ra nhà Lý." },
    { question: "Ai được triều thần suy tôn lên ngôi năm 1009, sáng lập nhà Lý?", options: ["Lý Thái Tông", "Lý Thánh Tông", "Lý Nhân Tông", "Lý Công Uẩn"], correct: 3, difficulty: "easy", explanation: "Lý Công Uẩn lên ngôi, lấy hiệu Lý Thái Tổ, mở đầu triều đại nhà Lý kéo dài hơn 200 năm." },
    { question: "Trước khi lên ngôi, Lý Công Uẩn từng giữ chức vụ gì trong triều Tiền Lê?", options: ["Thái sư", "Tể tướng", "Thượng thư", "Điện tiền chỉ huy sứ"], correct: 3, difficulty: "hard", explanation: "Ông giữ chức Điện tiền chỉ huy sứ, nắm quyền chỉ huy quân cấm vệ trong triều." },
    { question: "Kinh đô Hoa Lư có địa hình đặc trưng nào giúp thuận lợi cho phòng thủ quân sự?", options: ["Đồng bằng rộng lớn", "Ven biển thuận lợi giao thương", "Cao nguyên đất đỏ", "Núi non hiểm trở bao quanh"], correct: 3, difficulty: "medium", explanation: "Hoa Lư có địa thế núi đá vôi hiểm trở, rất thuận lợi cho việc phòng thủ đất nước." },
    { question: "Việc Đinh Bộ Lĩnh xây dựng lực lượng từ sứ quân Trần Lãm cho thấy điều gì trong chiến lược dẹp loạn?", options: ["Chỉ dùng vũ lực đàn áp", "Nhờ cậy hoàn toàn vào quân nước ngoài", "Không cần liên minh với ai", "Biết liên kết, quy phục các thế lực để tăng sức mạnh"], correct: 3, difficulty: "medium", explanation: "Đinh Bộ Lĩnh khôn khéo liên kết với sứ quân Trần Lãm, tăng cường thế lực trước khi dẹp các sứ quân khác." },
    { question: "Con trai nào của Đinh Tiên Hoàng từng được phong Thái tử nhưng bị giết do mâu thuẫn ngôi vị?", options: ["Đinh Toàn", "Đinh Hạng Lang", "Đinh Đế", "Đinh Liễn"], correct: 3, difficulty: "hard", explanation: "Đinh Liễn vì bất mãn khi vua cha lập em út Đinh Hạng Lang làm Thái tử nên đã giết em, sau đó cả hai cha con đều bị Đỗ Thích sát hại." },
    { question: "Thời kỳ Ngô - Đinh - Tiền Lê được đánh giá là giai đoạn có ý nghĩa gì trong lịch sử dân tộc?", options: ["Thời kỳ Bắc thuộc kéo dài", "Thời kỳ suy vong hoàn toàn", "Thời kỳ chia cắt vĩnh viễn", "Buổi đầu xây dựng và củng cố nền độc lập tự chủ"], correct: 3, difficulty: "medium", explanation: "Đây là giai đoạn đặt nền móng quan trọng cho một quốc gia độc lập, tự chủ lâu dài sau nghìn năm Bắc thuộc." },
    { question: "Ai là người kế vị Ngô Quyền nhưng bị Dương Tam Kha cướp ngôi khi còn nhỏ tuổi?", options: ["Ngô Xương Văn", "Ngô Xương Xí", "Ngô Nhật Khánh", "Ngô Xương Ngập"], correct: 3, difficulty: "medium", explanation: "Ngô Xương Ngập là con trưởng Ngô Quyền, đáng lẽ được nối ngôi nhưng bị chú là Dương Tam Kha tiếm quyền." },
    { question: "Ngô Quyền là con rể của ai?", options: ["Khúc Thừa Dụ", "Kiều Công Tiễn", "Khúc Hạo", "Dương Đình Nghệ"], correct: 3, difficulty: "medium", explanation: "Ngô Quyền lấy con gái Dương Đình Nghệ và từng là nha tướng dưới quyền ông." },
    { question: "Trước khi khởi binh, Ngô Quyền từng được Dương Đình Nghệ giao trấn giữ vùng nào?", options: ["Đường Lâm", "Cổ Loa", "Hoa Lư", "Ái Châu (Thanh Hóa)"], correct: 3, difficulty: "hard", explanation: "Ngô Quyền được Dương Đình Nghệ tin cậy giao trấn giữ Ái Châu (Thanh Hóa ngày nay)." },
    { question: "Ngô Quyền đem quân trị tội Kiều Công Tiễn với mục đích gì?", options: ["Giành lại ngôi vua", "Mở rộng lãnh thổ", "Chiếm thành Đại La", "Trả thù cho Dương Đình Nghệ bị sát hại"], correct: 3, difficulty: "medium", explanation: "Kiều Công Tiễn sát hại Dương Đình Nghệ, Ngô Quyền đem quân ra Bắc trị tội, dẫn đến trận Bạch Đằng lịch sử." },
    { question: "Sau khi Ngô Quyền qua đời (944), nhà Ngô tồn tại thêm khoảng bao lâu trước khi rơi vào loạn 12 sứ quân?", options: ["Khoảng 5 năm", "Khoảng 50 năm", "Khoảng 2 năm", "Khoảng 20 năm"], correct: 3, difficulty: "hard", explanation: "Nhà Ngô suy yếu dần và đến khoảng năm 965 thì rơi vào tình trạng loạn 12 sứ quân." },
    { question: "Sứ quân nào trong loạn 12 sứ quân đóng ở vùng Phong Châu (Phú Thọ)?", options: ["Trần Lãm", "Ngô Nhật Khánh", "Đỗ Cảnh Thạc", "Kiều Công Hãn"], correct: 3, difficulty: "hard", explanation: "Kiều Công Hãn là một trong 12 sứ quân, chiếm cứ vùng Phong Châu." },
    { question: "Đinh Bộ Lĩnh liên kết với sứ quân nào đầu tiên để tăng cường thế lực trước khi dẹp loạn?", options: ["Kiều Công Hãn", "Ngô Nhật Khánh", "Phạm Bạch Hổ", "Trần Lãm (Bố Hải Khẩu)"], correct: 3, difficulty: "medium", explanation: "Đinh Bộ Lĩnh liên kết với sứ quân Trần Lãm ở Bố Hải Khẩu (Thái Bình), được Trần Lãm coi như con nuôi và giao binh quyền." },
    { question: "Con trai Đinh Tiên Hoàng là Đinh Liễn từng được cử đi sứ nhà Tống để làm gì?", options: ["Xin thần phục hoàn toàn", "Xin viện binh", "Dâng cống phẩm hàng năm", "Cầu phong, được phong Giao Chỉ quận vương"], correct: 3, difficulty: "hard", explanation: "Đinh Liễn sang sứ nhà Tống, được vua Tống phong làm Giao Chỉ quận vương, xác lập quan hệ bang giao." },
    { question: "Đinh Bộ Lĩnh từng có biệt danh thời trẻ là gì, thể hiện chí lớn của ông?", options: ["Bình Định Vương", "Vạn Xuân Vương", "Hưng Đạo Vương", "Vạn Thắng Vương"], correct: 3, difficulty: "medium", explanation: "Đinh Bộ Lĩnh được xưng tụng là 'Vạn Thắng Vương' trong quá trình dẹp loạn 12 sứ quân, thắng khắp nơi." },
    { question: "Trước khi lên ngôi, Lê Hoàn giữ chức vụ gì trong triều đình nhà Đinh?", options: ["Thái sư", "Tể tướng", "Thái phó", "Thập đạo tướng quân (Tổng chỉ huy quân đội)"], correct: 3, difficulty: "medium", explanation: "Lê Hoàn giữ chức Thập đạo tướng quân, nắm quyền chỉ huy toàn bộ quân đội nhà Đinh." },
    { question: "Năm 981, Lê Hoàn đánh bại quân Tống tại địa điểm nào?", options: ["Sông Như Nguyệt", "Cổ Loa", "Sông Cầu", "Sông Bạch Đằng và ải Chi Lăng"], correct: 3, difficulty: "medium", explanation: "Lê Hoàn tổ chức phòng ngự và phản công đánh bại quân Tống tại sông Bạch Đằng và vùng ải Chi Lăng (Bắc Sơn)." },
    { question: "Ngoài chống Tống, Lê Hoàn còn đem quân chinh phạt nước nào ở phía Nam năm 982?", options: ["Chân Lạp", "Ai Lao", "Xiêm La", "Chiêm Thành (Champa)"], correct: 3, difficulty: "medium", explanation: "Năm 982, Lê Hoàn đem quân đánh Chiêm Thành để mở mang bờ cõi phía Nam và trừng phạt việc bắt giữ sứ giả." },
    { question: "Tên hiệu đầy đủ của vua Lê Hoàn là gì?", options: ["Lê Thái Tổ", "Lê Thánh Tông", "Lê Ngọa Triều", "Lê Đại Hành"], correct: 3, difficulty: "easy", explanation: "Lê Hoàn được biết đến với miếu hiệu Lê Đại Hành, vị vua sáng lập triều Tiền Lê." },
    { question: "Nhà Tiền Lê trải qua tất cả bao nhiêu đời vua?", options: ["5 đời", "2 đời", "7 đời", "3 đời"], correct: 3, difficulty: "medium", explanation: "Nhà Tiền Lê có 3 đời vua: Lê Đại Hành, Lê Trung Tông và Lê Long Đĩnh." },
    { question: "Vị vua thứ hai của nhà Tiền Lê, ở ngôi chỉ vài ngày rồi bị em trai sát hại, là ai?", options: ["Lê Long Đĩnh", "Lê Đại Hành", "Lê Long Kính", "Lê Trung Tông (Lê Long Việt)"], correct: 3, difficulty: "hard", explanation: "Lê Trung Tông (Lê Long Việt) chỉ ở ngôi 3 ngày thì bị em là Lê Long Đĩnh sát hại để cướp ngôi." },
    { question: "Việc Lê Hoàn cho binh lính thay phiên về làm ruộng lúc thái bình thể hiện chính sách gì?", options: ["Trọng nông ức thương", "Tịnh điền", "Quân điền", "Ngụ binh ư nông"], correct: 3, difficulty: "hard", explanation: "Chính sách 'ngụ binh ư nông' (gửi binh vào nông) giúp vừa duy trì quân đội, vừa đảm bảo sản xuất nông nghiệp." },
    { question: "Kinh đô Hoa Lư có đặc điểm địa hình gì giúp phòng thủ tự nhiên hiệu quả?", options: ["Đồng bằng bằng phẳng", "Ven biển", "Cao nguyên đất đỏ bazan", "Núi đá vôi hiểm trở bao quanh tạo thành lũy thành tự nhiên"], correct: 3, difficulty: "medium", explanation: "Địa hình núi đá vôi trùng điệp bao quanh Hoa Lư tạo thành hệ thống phòng thủ tự nhiên vững chắc." },
    { question: "Ai là người từng là hoàng hậu của cả hai vị vua Đinh Tiên Hoàng và Lê Đại Hành?", options: ["Ỷ Lan", "Huyền Trân", "Bùi Thị Xuân", "Dương Vân Nga"], correct: 3, difficulty: "medium", explanation: "Dương Vân Nga là một nhân vật lịch sử đặc biệt, từng là hoàng hậu của cả Đinh Tiên Hoàng và sau đó là Lê Đại Hành." },
    { question: "Hiện nay, đền thờ vua Đinh và vua Lê tọa lạc tại đâu?", options: ["Cổ Loa, Hà Nội", "Lam Sơn, Thanh Hóa", "Huế", "Cố đô Hoa Lư, Ninh Bình"], correct: 3, difficulty: "easy", explanation: "Khu di tích Cố đô Hoa Lư (Ninh Bình) là nơi tọa lạc đền thờ vua Đinh Tiên Hoàng và vua Lê Đại Hành." },
    { question: "Loạn 12 sứ quân diễn ra trong khoảng thời gian nào?", options: ["Khoảng 938 - 944", "Khoảng 979 - 981", "Khoảng 1005 - 1009", "Khoảng 965 - 968"], correct: 3, difficulty: "hard", explanation: "Loạn 12 sứ quân kéo dài khoảng 3 năm, từ 965 đến khi Đinh Bộ Lĩnh dẹp yên và lên ngôi năm 968." }
],
"doi-moi": [
    { question: "Cuộc Tổng tuyển cử bầu Quốc hội chung của cả nước sau ngày thống nhất diễn ra vào ngày nào?", options: ["30/4/1975", "2/9/1975", "2/7/1976", "25/4/1976"], correct: 3, difficulty: "medium", explanation: "Ngày 25/4/1976, cả nước tiến hành Tổng tuyển cử bầu Quốc hội khóa VI thống nhất." },
    { question: "Tại kỳ họp Quốc hội khóa VI năm 1976, nước ta được đổi tên chính thức là gì?", options: ["Việt Nam Dân chủ Cộng hòa", "Cộng hòa Miền Nam Việt Nam", "Việt Nam Cộng hòa", "Cộng hòa Xã hội Chủ nghĩa Việt Nam"], correct: 3, difficulty: "easy", explanation: "Quốc hội quyết định đổi tên nước thành Cộng hòa Xã hội Chủ nghĩa Việt Nam, tên gọi được dùng đến ngày nay." },
    { question: "Thành phố Sài Gòn - Gia Định được đổi tên thành Thành phố Hồ Chí Minh vào năm nào?", options: ["1975", "1980", "1986", "1976"], correct: 3, difficulty: "easy", explanation: "Năm 1976, để tưởng nhớ công lao của Chủ tịch Hồ Chí Minh, thành phố được vinh dự mang tên Người." },
    { question: "Đại hội Đảng toàn quốc lần thứ VI (1986) đã đề ra chủ trương lớn nào?", options: ["Cải cách ruộng đất", "Kế hoạch 5 năm lần thứ nhất", "Chính sách bế quan tỏa cảng", "Đường lối Đổi mới"], correct: 3, difficulty: "easy", explanation: "Đại hội VI (12/1986) khởi xướng công cuộc Đổi mới toàn diện đất nước." },
    { question: "Đổi mới kinh tế chủ trương chuyển đổi từ cơ chế nào sang cơ chế nào?", options: ["Từ kinh tế thị trường sang kinh tế bao cấp", "Từ nông nghiệp sang công nghiệp hoàn toàn", "Không có thay đổi về cơ chế", "Từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng XHCN"], correct: 3, difficulty: "medium", explanation: "Đây là bước chuyển đổi quan trọng nhất, mở đường cho sự phát triển kinh tế nhiều thành phần." },
    { question: "Việt Nam gia nhập tổ chức ASEAN vào năm nào?", options: ["1986", "1991", "2000", "1995"], correct: 3, difficulty: "easy", explanation: "Ngày 28/7/1995, Việt Nam chính thức trở thành thành viên thứ 7 của ASEAN." },
    { question: "Việt Nam và Hoa Kỳ chính thức bình thường hóa quan hệ ngoại giao vào năm nào?", options: ["1991", "2000", "2007", "1995"], correct: 3, difficulty: "medium", explanation: "Năm 1995, Việt Nam và Hoa Kỳ tuyên bố bình thường hóa quan hệ ngoại giao." },
    { question: "Việt Nam trở thành thành viên chính thức của Tổ chức Thương mại Thế giới (WTO) vào năm nào?", options: ["2000", "2006", "2010", "2007"], correct: 3, difficulty: "medium", explanation: "Ngày 11/1/2007, Việt Nam chính thức gia nhập WTO, đánh dấu bước hội nhập kinh tế toàn diện." },
    { question: "Cuộc chiến đấu bảo vệ biên giới Tây Nam của Tổ quốc diễn ra chủ yếu trong giai đoạn nào?", options: ["1979 - 1985", "1986 - 1990", "1991 - 1995", "1975 - 1979"], correct: 3, difficulty: "medium", explanation: "Quân dân ta chiến đấu bảo vệ biên giới Tây Nam trước sự tấn công của tập đoàn Khmer Đỏ, cao điểm cuối 1978 đầu 1979." },
    { question: "Cuộc chiến đấu bảo vệ biên giới phía Bắc của Tổ quốc diễn ra vào năm nào?", options: ["1975", "1986", "1991", "1979"], correct: 3, difficulty: "easy", explanation: "Đầu năm 1979, quân dân ta đã chiến đấu anh dũng bảo vệ toàn vẹn lãnh thổ biên giới phía Bắc." },
    { question: "Hiến pháp đầu tiên của nước Việt Nam thống nhất được Quốc hội thông qua vào năm nào?", options: ["1976", "1986", "1992", "1980"], correct: 3, difficulty: "medium", explanation: "Hiến pháp năm 1980 là bản Hiến pháp đầu tiên áp dụng chung cho cả nước sau ngày thống nhất." },
    { question: "Hiến pháp nào đánh dấu bước phát triển quan trọng của công cuộc Đổi mới, được ban hành năm 1992?", options: ["Hiến pháp 1980", "Hiến pháp 2013", "Hiến pháp 1946", "Hiến pháp 1992"], correct: 3, difficulty: "easy", explanation: "Hiến pháp 1992 thể chế hóa đường lối Đổi mới, xác lập nền kinh tế thị trường định hướng XHCN." },
    { question: "Việt Nam lần đầu tiên tổ chức Hội nghị cấp cao APEC vào năm nào?", options: ["2003", "2010", "2017", "2006"], correct: 3, difficulty: "medium", explanation: "Năm 2006, Việt Nam đăng cai tổ chức thành công Hội nghị Cấp cao APEC lần thứ 14 tại Hà Nội." },
    { question: "Luật Đầu tư nước ngoài tại Việt Nam - văn bản pháp lý quan trọng mở cửa thu hút vốn ngoại - được ban hành năm nào?", options: ["1986", "1990", "1995", "1987"], correct: 3, difficulty: "hard", explanation: "Luật Đầu tư nước ngoài năm 1987 là một trong những văn bản pháp lý đầu tiên mở cửa nền kinh tế." },
    { question: "Chương trình mục tiêu quốc gia nổi bật nhằm cải thiện đời sống nông thôn thời kỳ Đổi mới có tên gì?", options: ["Cải cách ruộng đất", "Hợp tác hóa nông nghiệp", "Khoán sản phẩm", "Xây dựng nông thôn mới"], correct: 3, difficulty: "easy", explanation: "Chương trình Xây dựng nông thôn mới góp phần thay đổi diện mạo nhiều vùng quê Việt Nam." },
    { question: "Việt Nam chính thức trở thành thành viên của Liên Hợp Quốc vào năm nào?", options: ["1975", "1986", "1995", "1977"], correct: 3, difficulty: "medium", explanation: "Ngày 20/9/1977, Việt Nam được kết nạp là thành viên thứ 149 của Liên Hợp Quốc." },
    { question: "Chính sách 'khoán 10' trong nông nghiệp (1988) đã mang lại kết quả nổi bật nào?", options: ["Giảm sản lượng nông nghiệp", "Xóa bỏ hoàn toàn hợp tác xã", "Không có tác động rõ rệt", "Tăng nhanh sản lượng lương thực, đưa Việt Nam thành nước xuất khẩu gạo"], correct: 3, difficulty: "medium", explanation: "Khoán 10 giao quyền tự chủ sản xuất cho nông dân, giúp sản lượng lúa gạo tăng vọt." },
    { question: "Việt Nam bắt đầu xuất khẩu gạo trở lại sau nhiều năm thiếu đói vào khoảng thời gian nào?", options: ["Cuối thập niên 1970", "Đầu thập niên 2000", "Sau năm 2007", "Cuối thập niên 1980"], correct: 3, difficulty: "medium", explanation: "Nhờ chính sách Đổi mới nông nghiệp, cuối những năm 1980 Việt Nam đã có gạo dư để xuất khẩu." },
    { question: "Việt Nam lần đầu tiên được bầu làm Ủy viên không thường trực Hội đồng Bảo an Liên Hợp Quốc vào giai đoạn nào?", options: ["2000 - 2001", "2015 - 2016", "2020 - 2021", "2008 - 2009"], correct: 3, difficulty: "hard", explanation: "Việt Nam đảm nhiệm vai trò Ủy viên không thường trực Hội đồng Bảo an nhiệm kỳ 2008-2009." },
    { question: "Công cuộc Đổi mới chủ trương phát triển nền kinh tế theo hướng nào về thành phần kinh tế?", options: ["Chỉ duy trì kinh tế quốc doanh", "Chỉ phát triển kinh tế tư nhân", "Xóa bỏ mọi hình thức sở hữu tư nhân", "Đa dạng hóa nhiều thành phần kinh tế cùng phát triển"], correct: 3, difficulty: "medium", explanation: "Đổi mới thừa nhận và khuyến khích sự phát triển của nhiều thành phần kinh tế khác nhau." },
    { question: "Đường Hồ Chí Minh (tuyến đường bộ hiện đại) được xây dựng trong thời bình nhằm mục đích gì?", options: ["Phục vụ mục đích quân sự như thời chiến", "Nối liền Việt Nam với Trung Quốc", "Chỉ phục vụ du lịch", "Phát triển giao thông, kinh tế các vùng miền núi phía Tây đất nước"], correct: 3, difficulty: "medium", explanation: "Tuyến đường góp phần thúc đẩy phát triển kinh tế - xã hội các tỉnh miền núi, trung du phía Tây." },
    { question: "Việt Nam tổ chức thành công Đại hội Thể thao Đông Nam Á (SEA Games) lần đầu tiên vào năm nào?", options: ["1999", "2009", "2013", "2003"], correct: 3, difficulty: "easy", explanation: "Năm 2003, Việt Nam lần đầu đăng cai SEA Games 22, đánh dấu bước hội nhập thể thao khu vực." },
    { question: "Việt Nam đăng cai SEA Games gần đây nhất (dời từ 2021 sang 2022) mang tên gọi nào?", options: ["SEA Games 30", "SEA Games 32", "SEA Games 29", "SEA Games 31"], correct: 3, difficulty: "easy", explanation: "SEA Games 31 được tổ chức tại Việt Nam vào năm 2022, để lại nhiều dấu ấn tốt đẹp." },
    { question: "Sau khi gia nhập WTO năm 2007, Việt Nam đẩy mạnh chủ trương gì trong quan hệ quốc tế?", options: ["Đóng cửa nền kinh tế", "Chỉ hợp tác với một số nước láng giềng", "Hạn chế đầu tư nước ngoài", "Hội nhập quốc tế toàn diện, sâu rộng"], correct: 3, difficulty: "medium", explanation: "Việt Nam theo đuổi chính sách đối ngoại đa phương hóa, đa dạng hóa, hội nhập ngày càng sâu rộng." },
    { question: "Chương trình nào giúp Việt Nam giảm mạnh tỷ lệ hộ nghèo, được cộng đồng quốc tế đánh giá cao?", options: ["Chương trình cải cách ruộng đất", "Chính sách bao cấp toàn dân", "Chương trình hợp tác hóa nông nghiệp", "Chương trình mục tiêu quốc gia giảm nghèo bền vững"], correct: 3, difficulty: "easy", explanation: "Việt Nam được Liên Hợp Quốc ghi nhận là một trong những quốc gia giảm nghèo thành công nhất." },
    { question: "Việt Nam ký Hiệp định Thương mại song phương với Hoa Kỳ (BTA) vào năm nào?", options: ["1995", "2006", "2010", "2000"], correct: 3, difficulty: "medium", explanation: "Hiệp định Thương mại Việt - Mỹ (BTA) được ký năm 2000, mở ra giai đoạn hợp tác kinh tế mạnh mẽ hơn giữa hai nước." },
    { question: "Công cuộc Đổi mới đã giúp Việt Nam chuyển mình theo hướng phát triển nào?", options: ["Duy trì nền kinh tế thuần nông nghiệp", "Quay lại mô hình kinh tế bao cấp", "Không có sự thay đổi đáng kể", "Công nghiệp hóa, hiện đại hóa đất nước"], correct: 3, difficulty: "easy", explanation: "Đổi mới thúc đẩy quá trình công nghiệp hóa, hiện đại hóa, đưa đất nước phát triển toàn diện hơn." },
    { question: "Ý nghĩa bao trùm của thời kỳ Thống nhất - Đổi mới đối với đất nước là gì?", options: ["Duy trì tình trạng khó khăn kéo dài", "Chỉ có ý nghĩa về mặt quân sự", "Không tạo ra thay đổi lớn nào", "Đưa đất nước từ nghèo nàn, bị bao vây cấm vận vươn lên hội nhập và phát triển"], correct: 3, difficulty: "medium", explanation: "Đây là giai đoạn chuyển mình toàn diện, đưa Việt Nam từ một nước nghèo, bị cô lập trở thành quốc gia hội nhập quốc tế sâu rộng." },
    { question: "Thành phần kinh tế nào lần đầu tiên được chính thức thừa nhận và khuyến khích phát triển từ thời kỳ Đổi mới?", options: ["Kinh tế quốc doanh", "Kinh tế tập thể", "Kinh tế bao cấp", "Kinh tế tư nhân"], correct: 3, difficulty: "medium", explanation: "Đổi mới đã cởi trói và tạo điều kiện cho khu vực kinh tế tư nhân phát triển mạnh mẽ, đóng góp lớn cho nền kinh tế." },
    { question: "Sự kiện nào được coi là dấu mốc chính thức khép lại 30 năm chiến tranh, mở ra thời kỳ hòa bình xây dựng đất nước?", options: ["Hiệp định Giơ-ne-vơ 1954", "Hiệp định Pa-ri 1973", "Đại hội Đảng lần thứ VI 1986", "Đại thắng mùa Xuân 1975 và Tổng tuyển cử thống nhất 1976"], correct: 3, difficulty: "easy", explanation: "Chiến thắng 30/4/1975 và cuộc Tổng tuyển cử năm 1976 đã hoàn thành sự nghiệp thống nhất đất nước về mặt nhà nước." },
    { question: "Đại hội Đảng nào chính thức xác định 'kinh tế thị trường định hướng xã hội chủ nghĩa' là mô hình kinh tế tổng quát của Việt Nam?", options: ["Đại hội VI (1986)", "Đại hội VII (1991)", "Đại hội X (2006)", "Đại hội IX (2001)"], correct: 3, difficulty: "hard", explanation: "Đại hội IX năm 2001 chính thức xác định mô hình kinh tế thị trường định hướng xã hội chủ nghĩa cho Việt Nam." },
    { question: "Việt Nam thiết lập quan hệ ngoại giao chính thức với Liên minh châu Âu (EU) vào năm nào?", options: ["1995", "2000", "2007", "1990"], correct: 3, difficulty: "hard", explanation: "Việt Nam và EU chính thức thiết lập quan hệ ngoại giao vào năm 1990." },
    { question: "Việt Nam bình thường hóa quan hệ ngoại giao với Trung Quốc vào năm nào?", options: ["1979", "1995", "2000", "1991"], correct: 3, difficulty: "medium", explanation: "Sau nhiều năm căng thẳng, Việt Nam và Trung Quốc bình thường hóa quan hệ ngoại giao vào năm 1991." },
    { question: "Việt Nam gia nhập Diễn đàn Hợp tác Kinh tế châu Á - Thái Bình Dương (APEC) vào năm nào?", options: ["1995", "2003", "2006", "1998"], correct: 3, difficulty: "medium", explanation: "Việt Nam chính thức trở thành thành viên APEC vào năm 1998." },
    { question: "Việt Nam đăng cai Hội nghị Cấp cao APEC lần thứ hai (sau lần đầu năm 2006) vào năm nào?", options: ["2010", "2014", "2020", "2017"], correct: 3, difficulty: "medium", explanation: "Việt Nam đăng cai APEC lần thứ hai vào năm 2017 tại Đà Nẵng." },
    { question: "Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP) chính thức có hiệu lực với Việt Nam vào năm nào?", options: ["2016", "2020", "2015", "2019"], correct: 3, difficulty: "hard", explanation: "CPTPP có hiệu lực đối với Việt Nam từ tháng 1 năm 2019." },
    { question: "Hiệp định Thương mại tự do Việt Nam - EU (EVFTA) chính thức có hiệu lực vào năm nào?", options: ["2018", "2022", "2015", "2020"], correct: 3, difficulty: "medium", explanation: "EVFTA chính thức có hiệu lực từ ngày 1/8/2020, mở ra cơ hội lớn cho thương mại Việt Nam - EU." },
    { question: "Việt Nam và Hoa Kỳ nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện vào năm nào?", options: ["2020", "2015", "2018", "2023"], correct: 3, difficulty: "medium", explanation: "Tháng 9/2023, Việt Nam và Hoa Kỳ chính thức nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện." },
    { question: "Hiến pháp hiện hành của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam được thông qua vào năm nào?", options: ["1992", "1980", "2001", "2013"], correct: 3, difficulty: "easy", explanation: "Hiến pháp năm 2013 là bản Hiến pháp hiện hành của Việt Nam, kế thừa và phát triển từ Hiến pháp 1992." },
    { question: "Hiến pháp năm 1992 (thời kỳ đầu Đổi mới) do Quốc hội khóa nào thông qua?", options: ["Quốc hội khóa VI", "Quốc hội khóa IX", "Quốc hội khóa X", "Quốc hội khóa VIII"], correct: 3, difficulty: "hard", explanation: "Hiến pháp 1992 được Quốc hội khóa VIII thông qua ngày 15/4/1992." },
    { question: "Chính sách 'khoán 10' trong nông nghiệp được ban hành theo văn kiện nào của Bộ Chính trị?", options: ["Nghị quyết Đại hội VI", "Chỉ thị 100-CT/TW", "Nghị quyết 26-NQ/TW", "Nghị quyết 10-NQ/TW (1988)"], correct: 3, difficulty: "hard", explanation: "Nghị quyết 10-NQ/TW ngày 5/4/1988 chính thức đề ra chính sách khoán sản phẩm đến hộ nông dân." },
    { question: "Việt Nam ban hành Luật Doanh nghiệp lần đầu tiên vào năm nào, tạo hành lang pháp lý cho khu vực kinh tế tư nhân trong nước?", options: ["1990", "1992", "1986", "1999"], correct: 3, difficulty: "hard", explanation: "Luật Doanh nghiệp năm 1999 là dấu mốc quan trọng, đơn giản hóa thủ tục thành lập doanh nghiệp tư nhân trong nước." },
    { question: "Thành phần kinh tế tư nhân trong nước được bảo hộ và tạo điều kiện phát triển rõ ràng hơn từ văn bản pháp lý nào?", options: ["Luật Đầu tư nước ngoài", "Hiến pháp 1980", "Luật Hợp tác xã", "Luật Doanh nghiệp"], correct: 3, difficulty: "medium", explanation: "Luật Doanh nghiệp (ban hành và sửa đổi các năm 1999, 2005...) tạo hành lang pháp lý thông thoáng cho kinh tế tư nhân phát triển." },
    { question: "Việt Nam được bầu làm Ủy viên không thường trực Hội đồng Bảo an Liên Hợp Quốc nhiệm kỳ thứ hai vào giai đoạn nào?", options: ["2008 - 2009", "2015 - 2016", "2012 - 2013", "2020 - 2021"], correct: 3, difficulty: "medium", explanation: "Sau nhiệm kỳ đầu 2008-2009, Việt Nam tiếp tục đảm nhiệm vai trò này nhiệm kỳ 2020-2021." },
    { question: "Việt Nam đàm phán gia nhập WTO trong khoảng thời gian bao lâu trước khi chính thức trở thành thành viên năm 2007?", options: ["Khoảng 3 năm", "Khoảng 20 năm", "Khoảng 5 năm", "Khoảng 11 năm"], correct: 3, difficulty: "hard", explanation: "Việt Nam bắt đầu đàm phán gia nhập WTO từ năm 1995 và chính thức trở thành thành viên năm 2007, tổng cộng khoảng 11 năm." },
    { question: "Chương trình mục tiêu quốc gia Xây dựng nông thôn mới được chính thức phát động từ năm nào?", options: ["2000", "1995", "2015", "2010"], correct: 3, difficulty: "medium", explanation: "Chương trình mục tiêu quốc gia Xây dựng nông thôn mới được phát động chính thức từ năm 2010." },
    { question: "Việt Nam thực hiện xóa bỏ chế độ tem phiếu bao cấp, chuyển sang giá cả thị trường vào khoảng thời gian nào?", options: ["Đầu thập niên 1990", "Ngay sau 1975", "Sau năm 2000", "Cuối thập niên 1980 (khoảng 1989)"], correct: 3, difficulty: "medium", explanation: "Cuối những năm 1980, đặc biệt từ 1989, Việt Nam từng bước xóa bỏ chế độ tem phiếu, chuyển sang cơ chế giá thị trường." },
    { question: "Việt Nam trở thành nền kinh tế lớn thứ mấy trong khối ASEAN tính theo quy mô GDP trong những năm gần đây (theo các xếp hạng phổ biến)?", options: ["Lớn nhất khối", "Thứ 5", "Thứ 6", "Nằm trong tốp đầu (thường thứ 3-4)"], correct: 3, difficulty: "hard", explanation: "Nhờ tăng trưởng liên tục sau Đổi mới, quy mô kinh tế Việt Nam đã vươn lên nhóm đầu trong khối ASEAN." },
    { question: "Việt Nam bắt đầu thực hiện cam kết cắt giảm thuế quan trong Khu vực Mậu dịch Tự do ASEAN (AFTA) từ năm nào?", options: ["1995", "2000", "2003", "1996"], correct: 3, difficulty: "hard", explanation: "Sau khi gia nhập ASEAN năm 1995, Việt Nam bắt đầu thực hiện lộ trình cắt giảm thuế quan AFTA từ năm 1996." },
    { question: "Đại hội Đảng toàn quốc gần đây nhất (tính đến nay) đề ra phương hướng, nhiệm vụ phát triển đất nước là đại hội lần thứ mấy?", options: ["Đại hội XII (2016)", "Đại hội XI (2011)", "Đại hội X (2006)", "Đại hội XIII (2021)"], correct: 3, difficulty: "easy", explanation: "Đại hội đại biểu toàn quốc lần thứ XIII của Đảng (2021) là đại hội gần đây nhất đề ra phương hướng phát triển đất nước." }
]

};
const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 'http://localhost:3000/api' : 'https://exemption-famine-egging.ngrok-free.dev/api';

async function awardExp(amount, note) {
    const token = localStorage.getItem('token');
    if (!token || !amount) return;
    try {
        await fetch(`${API}/exp/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token, 'ngrok-skip-browser-warning': 'true' },
            body: JSON.stringify({ amount: amount, source_type: 'QUIZ', note: note || '' })
        });
    } catch (err) {
        console.warn('Không thể cộng EXP:', err.message);
    }
}

async function openLeaderboard() {
    let modal = document.getElementById('leaderboard-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'leaderboard-modal';
        modal.className = 'lb-modal';
        modal.innerHTML = `
          <div class="lb-box">
            <div class="lb-header">
              <span class="lb-close" onclick="document.getElementById('leaderboard-modal').classList.remove('show')">✕</span>
              <h3>&#9876; B&#7842;NG X&#7870;P H&#7840;NG &#9876;</h3>
            </div>
            <div class="lb-deco">◆ ◆ ◆</div>
            <div id="lb-content" class="lb-content"><div class="lb-loading">Đang tải...</div></div>
          </div>`;
        document.body.appendChild(modal);
    }
    modal.classList.add('show');
    const content = document.getElementById('lb-content');
    content.innerHTML = '<div class="lb-loading">Đang tải...</div>';

    function getTitle(level) {
        const lv = level || 1;
        if (lv >= 25) return 'Huyền Thoại Lịch Sử';
        if (lv >= 18) return 'Bậc Thầy Sử Học';
        if (lv >= 12) return 'Đại Nhân Lịch Sử';
        if (lv >= 8) return 'Hiệp Sĩ Sử Học';
        if (lv >= 4) return 'Dũng Sĩ Lịch Sử';
        return 'Học Sinh';
    }
    function initials(name) {
        const parts = (name || '').trim().split(/\s+/);
        if (parts.length === 0) return '?';
        return (parts[parts.length - 1][0] || '?').toUpperCase();
    }

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API}/leaderboard`, {
            headers: token ? { 'Authorization': 'Bearer ' + token, 'ngrok-skip-browser-warning': 'true' } : { 'ngrok-skip-browser-warning': 'true' }
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message || 'Lỗi tải bảng xếp hạng');

        const rows = data.data || [];
        const myName = (JSON.parse(localStorage.getItem('suVietUser') || '{}').fullname) || null;

        let html = '<div class="lb-list">';
        if (rows.length === 0) {
            html += '<div class="lb-empty">Chưa có dữ liệu xếp hạng.</div>';
        } else {
            rows.forEach((r, i) => {
                const name = r.fullname || r.username || r.name || 'Ẩn danh';
                const exp = r.exp ?? r.points ?? 0;
                const level = r.level ?? 1;
                const isMe = myName && name === myName;
                const topClass = i === 0 ? ' top1' : i === 1 ? ' top2' : i === 2 ? ' top3' : '';
                const medal = i === 0 ? '<span class="lb-medal">🥇</span>' : i === 1 ? '<span class="lb-medal">🥈</span>' : i === 2 ? '<span class="lb-medal">🥉</span>' : '';
                const rankNum = i > 2 ? `<div class="lb-rank-num">#${i + 1}</div>` : `<div class="lb-rank-num"></div>`;

                html += `<div class="lb-row${topClass}${isMe ? ' me' : ''}">
                  ${rankNum}
                  <div class="lb-avatar">${medal}${initials(name)}</div>
                  <div class="lb-info">
                    <div class="lb-name">${name}${isMe ? '<span class="lb-tag">← Bạn</span>' : ''}</div>
                    <div class="lb-title">${getTitle(level)}</div>
                  </div>
                  <div class="lb-exp-wrap">
                    <div class="lb-exp">⚡ ${exp}</div>
                    <div class="lb-lv">Lv.${level}</div>
                  </div>
                </div>`;
            });
        }
        html += '</div>';

        if (data.myRank) {
            const m = data.myRank;
            html += `<div class="lb-myrank">
              <strong>Hạng của bạn:</strong> #${m.rank_pos ?? '-'} — ${m.exp ?? m.points ?? 0} EXP
            </div>`;
        }
        content.innerHTML = html;
    } catch (err) {
        content.innerHTML = `<div class="lb-empty">Không tải được bảng xếp hạng. (${err.message})</div>`;
    }
}
let currentQuiz = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;
let answerLog = [];
let userAnswers = [];

// ══ RANDOM QUIZ LOGIC ══
function shuffleArray(arr, rng = Math.random) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getRandomQuestions(topic, count, difficulty) {
    let pool = (allQuizzes[topic] || []).map(q => ({ ...q, _topic: topic }));
    if (difficulty && difficulty !== 'all') {
        pool = pool.filter(q => q.difficulty === difficulty);
    }
 const shuffled = shuffleArray(pool, getDailyRandom('quiz-' + topic));
    return shuffled.slice(0, Math.min(count, pool.length));
}
function getMixedRandomQuestions(count, difficulty) {
    let allQ = [];
    Object.keys(allQuizzes).forEach(topic => {
        allQuizzes[topic].forEach(q => allQ.push({ ...q, _topic: topic }));
    });
    if (difficulty && difficulty !== 'all') {
        allQ = allQ.filter(q => q.difficulty === difficulty);
    }
      const shuffled = shuffleArray(allQ, getDailyRandom('quiz-mixed'));
    return shuffled.slice(0, Math.min(count, allQ.length));
}

function generateQuizData(topic, count, difficulty) {
    if (topic === 'tong-on') return getMixedRandomQuestions(count, difficulty);
    return getRandomQuestions(topic, count, difficulty);
}
const quizContainer = document.querySelector('.quiz');
const urlParams = new URLSearchParams(window.location.search || window.location.href.split('?')[1] || '');
const topicParam = urlParams.get('topic');
let currentTopic = (topicParam && allQuizzes[topicParam]) ? topicParam : "van-lang";
let currentQuestionCount = 30;
let currentDifficulty = 'all';
let quizData = generateQuizData(currentTopic, currentQuestionCount);

function startTimer() {
    timeLeft = 15;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        const timerDisplay = document.getElementById('timer');
        if (timerDisplay) {
            timerDisplay.innerText = timeLeft;
            if (timeLeft <= 5) {
                timerDisplay.style.color = '#dc3545';
                timerDisplay.style.fontWeight = '900';
            } else {
                timerDisplay.style.color = '#8B0000';
                timerDisplay.style.fontWeight = '700';
            }
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            goToNextOnTimeout();
        }
    }, 1000);
}

function goToNextOnTimeout() {
    clearInterval(timerInterval);
    if (currentQuiz < quizData.length - 1) {
        currentQuiz++;
        loadQuiz();
    }
    // Nếu là câu cuối, chỉ dừng đếm giờ, người dùng tự bấm "Nộp bài"
}

function loadQuiz() {
    if (!quizContainer) return;
    const currentQuizData = quizData[currentQuiz];
    if (!currentQuizData) return;

    const labels = ['A', 'B', 'C', 'D'];
    const answeredCount = userAnswers.filter(a => a !== null && a !== undefined).length;
    const selected = userAnswers[currentQuiz];
    quizContainer.innerHTML = `
        <div class="quiz-card">
            <div class="scroll-top"></div>
            <div class="quiz-card-body">
                <div class="quiz-header">
                    <div class="quiz-header-left">
                        <span class="quiz-icon">📜</span>
                        <span class="quiz-counter">Câu hỏi <strong>${currentQuiz + 1}</strong>/${quizData.length}</span>
                    </div>
                    <div class="timer-box">
                        <span>⏳</span>
                        <span id="timer">15</span>s
                    </div>
                    <div class="quiz-header-right">
                        <span class="quiz-icon">✅</span>
                        <span class="quiz-score">Đã chọn: <strong>${answeredCount}/${quizData.length}</strong></span>
                    </div>
                </div>
                <div class="quiz-divider-line"></div>
                <h2 class="quiz-question">${currentQuizData.question}</h2>
                <div class="quiz-divider-line"></div>
                <div class="quiz-options">
                    ${currentQuizData.options.map((option, index) => `
                        <button class="option-btn" onclick="checkAnswer(${index})"${selected === index ? ' style="background:rgba(139,0,0,0.12);border-color:#8B0000;"' : ''}>
                            <span class="option-label">${labels[index]}</span>
                            <span class="option-text">${option}</span>
                        </button>
                    `).join('')}
                </div>
                <div style="text-align:center;margin-top:18px;">
                    <button onclick="submitQuiz()" style="padding:12px 32px;border:none;border-radius:30px;background:#8B0000;color:#fff;font-weight:800;font-size:15px;cursor:pointer;font-family:'Poppins',sans-serif;box-shadow:0 4px 14px rgba(139,0,0,0.3);">📝 Nộp bài</button>
                </div>
                <div id="feedback" class="feedback"></div>
            </div>
            <div class="scroll-bottom"></div>
        </div>
    `;
    startTimer();
}

function playSound(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        if (type === 'correct') {
            o.frequency.setValueAtTime(523, ctx.currentTime);
            o.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
            o.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
            g.gain.setValueAtTime(0.3, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            o.start(); o.stop(ctx.currentTime + 0.5);
        } else if (type === 'wrong') {
            o.type = 'sawtooth';
            o.frequency.setValueAtTime(200, ctx.currentTime);
            o.frequency.setValueAtTime(150, ctx.currentTime + 0.1);
            g.gain.setValueAtTime(0.3, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
            o.start(); o.stop(ctx.currentTime + 0.4);
        } else if (type === 'firework') {
            // Một tiếng "pop" duy nhất giả lập pháo hoa nổ
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.type = 'sine';
            const startFreq = 900;
            osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(startFreq * 2.5, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.35);
        } else {
            o.type = 'triangle';
            o.frequency.setValueAtTime(300, ctx.currentTime);
            o.frequency.setValueAtTime(200, ctx.currentTime + 0.2);
            g.gain.setValueAtTime(0.2, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            o.start(); o.stop(ctx.currentTime + 0.5);
        }
    } catch(e) {}
}

window.checkAnswer = (selectedIndex) => {
    // Chỉ ghi nhớ lựa chọn của người dùng, KHÔNG chấm điểm và KHÔNG tự chuyển câu.
    // Người dùng có thể đổi ý, dùng mũi tên để xem lại/chuyển câu khác,
    // và chỉ khi bấm "Nộp bài" (submitQuiz) mới được chấm điểm.
    userAnswers[currentQuiz] = selectedIndex;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        if (i === selectedIndex) {
            btn.style.background = 'rgba(139,0,0,0.12)';
            btn.style.borderColor = '#8B0000';
        } else {
            btn.style.background = '';
            btn.style.borderColor = '';
        }
    });

    playSound('correct');

    // Cập nhật lại số câu đã chọn hiển thị ở góc phải
    const scoreEl = document.querySelector('.quiz-score strong');
    if (scoreEl) {
        const answeredCount = userAnswers.filter(a => a !== null && a !== undefined).length;
        scoreEl.textContent = answeredCount + '/' + quizData.length;
    }
};

window.submitQuiz = function() {
    clearInterval(timerInterval);

    const unanswered = userAnswers.filter(a => a === null || a === undefined).length;
    if (unanswered > 0) {
        const ok = confirm('Bạn còn ' + unanswered + ' câu chưa trả lời. Vẫn muốn nộp bài chứ?');
        if (!ok) return;
    }

    answerLog = quizData.map((q, i) => ({
        topic: q._topic || currentTopic,
        question: q.question,
        options: q.options,
        selected: userAnswers[i],
        correctIndex: q.correct,
        correct: userAnswers[i] === q.correct,
        explanation: q.explanation
    }));
    score = answerLog.filter(a => a.correct).length * 10;

    saveQuizResult();
    showResult();
};

function saveQuizResult() {
    const quizRecord = JSON.parse(localStorage.getItem('suVietQuizRecord')) || {
        totalQuizzes: 0, totalScore: 0, totalEXP: 0, lastDate: null
    };
    quizRecord.totalQuizzes++;
    quizRecord.totalScore += score;
    quizRecord.totalEXP += Math.floor(score / 3);
    quizRecord.lastDate = new Date().toLocaleDateString('vi-VN');
    localStorage.setItem('suVietQuizRecord', JSON.stringify(quizRecord));
    awardExp(score, 'Quiz - ' + currentTopic);
}

function buildDiagnosis() {
    const topicNamesShort = {
        'van-lang': 'Văn Lang',
        'bac-thuoc': 'Bắc Thuộc',
        'ly-tran': 'Lý - Trần',
        'le-nguyen': 'Lê - Nguyễn',
        'khang-chien-phap': 'Kháng chiến chống Pháp',
        'khang-chien-my': 'Kháng chiến chống Mỹ',
        'ngo-dinh-tienle': 'Ngô - Đinh - Tiền Lê',
        'ho-thuoc-minh': 'Nhà Hồ - Thuộc Minh'
        
    };

    const stats = {};
    answerLog.forEach(function(a) {
        if (!stats[a.topic]) stats[a.topic] = { correct: 0, total: 0 };
        stats[a.topic].total++;
        if (a.correct) stats[a.topic].correct++;
    });
    const topics = Object.keys(stats);
    if (topics.length === 0) return '';

    const scrollWrapOpen = '<div class="scroll-diagnosis">'
        + '<div class="scroll-rod"></div>'
        + '<div class="scroll-paper">'
        + '<div class="scroll-badge">SẮC PHONG ĐÁNH GIÁ</div>'
        + '<div style="text-align:center;color:#a9761f;font-size:11px;letter-spacing:6px;margin-top:8px;margin-bottom:10px;opacity:0.7;">◆ ◆ ◆</div>';
    const scrollWrapClose = '</div><div class="scroll-rod"></div></div>';

    if (topics.length === 1) {
        const t = topics[0];
        const s = stats[t];
        const pct = Math.round((s.correct / s.total) * 100);
        const name = topicNamesShort[t] || t;
        let msg, tone;
        if (pct >= 80) {
            tone = '#2e6b1f';
            msg = 'Người đã tinh thông phần <strong>' + name + '</strong>, đúng ' + s.correct + '/' + s.total + ' câu.';
        } else if (pct >= 50) {
            tone = '#a9761f';
            msg = 'Người đúng ' + s.correct + '/' + s.total + ' câu phần <strong>' + name + '</strong> — nên ôn lại những điều chưa vững.';
        } else {
            tone = '#8B0000';
            msg = 'Người chỉ đúng ' + s.correct + '/' + s.total + ' câu phần <strong>' + name + '</strong> — cần ôn lại kỹ phần này.';
        }

        return scrollWrapOpen
            + '<div style="font-family:\'Poppins\',sans-serif;font-size:16.5px;line-height:1.9;color:#5a3a12;text-align:center;">' + msg + '</div>'
            + '<div style="text-align:center;margin-top:16px;">'
            + '<span style="display:inline-block;background:linear-gradient(180deg,' + tone + ',' + tone + 'cc);color:#fff9e6;font-family:\'Poppins\',sans-serif;font-weight:800;font-size:13.5px;letter-spacing:0.5px;padding:7px 22px;border-radius:20px;border:1.5px solid rgba(244,211,116,0.6);box-shadow:0 4px 12px rgba(0,0,0,0.25);">' + pct + '% chính xác</span>'
            + '</div>'
            + scrollWrapClose;
    }

    const rows = topics.map(function(t) {
        const s = stats[t];
        return { name: topicNamesShort[t] || t, correct: s.correct, total: s.total, pct: s.correct / s.total };
    }).sort(function(a, b) {
        if (a.pct !== b.pct) return a.pct - b.pct;
        return b.total - a.total;
    });

   const breakdownHtml = rows.map(function(r) {
        const tone = r.pct >= 0.7 ? '#2e6b1f' : (r.pct >= 0.4 ? '#a9761f' : '#8B0000');
        const barWidth = Math.max(6, Math.round(r.pct * 100));
        return '<div style="margin-bottom:12px;">'
            + '<div style="display:flex;justify-content:space-between;font-family:\'Poppins\',sans-serif;font-size:14.5px;color:#5a3a12;margin-bottom:4px;">'
            + '<span style="font-weight:600;">' + r.name + '</span>'
            + '<span style="font-family:\'Poppins\',sans-serif;font-weight:800;color:' + tone + ';">' + r.correct + '/' + r.total + '</span>'
            + '</div>'
            + '<div style="background:rgba(169,118,31,0.2);border-radius:6px;height:8px;overflow:hidden;box-shadow:inset 0 1px 3px rgba(0,0,0,0.15);">'
            + '<div style="width:' + barWidth + '%;height:100%;background:linear-gradient(90deg,' + tone + 'aa,' + tone + ');border-radius:6px;"></div>'
            + '</div></div>';
    }).join('');

    const minPct = rows[0].pct;
    const weakestGroup = rows.filter(function(r) { return r.pct === minPct; });
    let suggestion;
    if (minPct >= 0.7) {
        suggestion = 'Người đã nắm khá đều các giai đoạn — tiếp tục giữ vững nhé!';
    } else if (weakestGroup.length === 1) {
        const w = weakestGroup[0];
        suggestion = 'Người nên ôn lại phần <strong>' + w.name + '</strong> (chỉ đúng ' + w.correct + '/' + w.total + ' câu).';
    } else {
        const names = weakestGroup.map(function(r) { return '<strong>' + r.name + '</strong>'; }).join(', ');
        suggestion = 'Người nên ôn lại các phần: ' + names + ' (đều đang ở mức thấp nhất).';
    }

    return scrollWrapOpen
        + breakdownHtml
        + '<div style="margin-top:16px;padding-top:14px;border-top:1px dashed rgba(169,118,31,0.5);font-family:\'Poppins\',sans-serif;font-size:14.5px;color:#5a3a12;text-align:center;line-height:1.8;">' + suggestion + '</div>'
        + scrollWrapClose;
}
function showResult() {
    const percent = Math.round((score / (quizData.length * 10)) * 100);

    let medal = '🥉'; let msg = 'Cố gắng hơn nhé!';
    if (percent >= 80) { medal = '🥇'; msg = 'Xuất sắc! Bạn là Sử gia thực thụ!'; }
    else if (percent >= 60) { medal = '🥈'; msg = 'Khá tốt! Tiếp tục ôn luyện nhé!'; }

    quizContainer.innerHTML = `
        <div class="quiz-card result-card">
            <div style="font-size:4rem;margin-bottom:12px;">${medal}</div>
            <h2 style="color:#8B0000;font-family:'Georgia',serif;margin-bottom:8px;">Hoàn thành!</h2>
            <p style="color:#666;margin-bottom:20px;">${msg}</p>
            <div style="font-size:3rem;font-weight:800;color:#8B0000;margin-bottom:4px;">${score}</div>
            <div style="color:#8a6d3b;font-weight:600;margin-bottom:8px;">điểm / ${quizData.length * 10} điểm tối đa</div>
            ${buildDiagnosis()}
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
                <button onclick="reviewAnswers()" style="padding:12px 28px;border:2px solid #a9761f;border-radius:30px;background:#fff8e7;color:#8B0000;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;">📖 Xem lại đáp án</button>
                <button onclick="location.reload()" style="padding:12px 28px;border:2px solid #8B0000;border-radius:30px;background:#fff;color:#8B0000;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;">🔄 Làm lại</button>
                <button onclick="window.location.href='index.html'" style="padding:12px 28px;border:none;border-radius:30px;background:#8B0000;color:#fff;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;">🏠 Trang chủ</button>
            </div>
        </div>
    `;
    if (typeof confetti !== "undefined") {
        confetti({ particleCount: 300, spread: 160 });
        playSound('firework');
    }
}
window.reviewAnswers = function() {
    const labels = ['A', 'B', 'C', 'D'];
    let html = '<div class="quiz-card" style="max-width:700px;text-align:left;background:#fdf8ee;border-radius:20px;padding:28px 24px;box-shadow:0 10px 40px rgba(0,0,0,0.35);">' +
        '<h2 style="color:#8B0000;font-family:\'Georgia\',serif;text-align:center;margin-bottom:20px;">📖 Xem lại đáp án</h2>';

    answerLog.forEach((a, i) => {
        const isCorrect = a.correct;
        const borderColor = isCorrect ? '#2e6b1f' : '#8B0000';
        const bgColor = isCorrect ? 'rgba(46,107,31,0.06)' : 'rgba(139,0,0,0.06)';
        html += '<div style="border:2px solid ' + borderColor + ';background-color:#fff;background-image:linear-gradient(' + bgColor + ',' + bgColor + ');border-radius:14px;padding:16px 18px;margin-bottom:14px;">';
        html += '<div style="font-weight:700;color:#4a2e0d;margin-bottom:10px;">Câu ' + (i + 1) + ': ' + a.question + '</div>';
        html += '<div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px;">';

        a.options.forEach((opt, oi) => {
            let style = 'padding:8px 12px;border-radius:8px;font-size:14px;';
            if (oi === a.correctIndex) {
                style += 'background:rgba(46,107,31,0.15);border:2px solid #2e6b1f;font-weight:700;color:#2e6b1f;';
            } else if (oi === a.selected && !isCorrect) {
                style += 'background:rgba(139,0,0,0.12);border:2px solid #8B0000;color:#8B0000;font-weight:700;';
            } else {
                style += 'background:#fff;border:1px solid #ddd;color:#555;';
            }
            html += '<div style="' + style + '">' + labels[oi] + '. ' + opt +
                (oi === a.correctIndex ? ' ✅' : (oi === a.selected && !isCorrect ? ' ❌' : '')) +
                '</div>';
        });

        if (a.selected === null || a.selected === undefined) {
            html += '<div style="font-size:13px;color:#a9761f;font-style:italic;margin-bottom:6px;">(Bạn chưa trả lời câu này)</div>';
        }
        html += '</div>';
        html += '<div style="font-size:13.5px;color:#4a2e0d;background:#faf3e0;border-left:4px solid #a9761f;padding:8px 12px;border-radius:6px;"><strong>Giải thích:</strong> ' + a.explanation + '</div>';
        html += '</div>';
    });

    html += '<div style="text-align:center;margin-top:10px;">' +
        '<button onclick="showResult()" style="padding:12px 28px;border:2px solid #8B0000;border-radius:30px;background:#fff;color:#8B0000;font-weight:700;cursor:pointer;font-family:\'Poppins\',sans-serif;">⬅ Quay lại kết quả</button>' +
        '</div></div>';

    quizContainer.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
window.loadTopic = function(topic, event) {
      currentTopic = topic; 
    const topicNames = {
    'van-lang': 'Văn Lang', 'bac-thuoc': 'Bắc Thuộc',
    'ly-tran': 'Lý - Trần', 'le-nguyen': 'Lê - Nguyễn',
    'khang-chien-phap': 'Chống Pháp', 'khang-chien-my': 'Chống Mỹ',
    'ngo-dinh-tienle': 'Ngô - Đinh - Tiền Lê',
    'ho-thuoc-minh': 'Nhà Hồ - Thuộc Minh',
   
    'tong-on': '🔥 Tổng Ôn Toàn Bộ'
};
const topicIcons = {
    'van-lang': 'images/icon-van-lang2.png',
    'bac-thuoc': 'images/icon-bac-thuoc.png',
    'ly-tran': 'images/icon-ly-tran.png',
    'le-nguyen': 'images/icon-le-nguyen.png',
    'khang-chien-phap': 'images/icon-phap.png',
    'khang-chien-my': 'images/icon-my.png',
    'ngo-dinh-tienle': 'images/icon-van-lang2.png',
    'ho-thuoc-minh': 'images/icon-le-nguyen.png',
   
    'tong-on': 'images/icon-my.png'
};
    document.getElementById('ready-title').textContent = topicNames[topic] || topic;
    document.getElementById('ready-icon').src = topicIcons[topic] || 'images/icon-van-lang.png';
    document.getElementById('ready-screen').style.display = 'flex';
    document.getElementById('quiz-section').style.display = 'none';

    if (allQuizzes[topic] || topic === 'tong-on') {
        currentQuiz = 0;
        score = 0;
        answerLog = [];
        quizData = generateQuizData(topic, currentQuestionCount, currentDifficulty);
        userAnswers = new Array(quizData.length).fill(null);
        document.getElementById('ready-count').textContent = quizData.length;
    }

    // Cập nhật active nav (chỉ trong thanh chọn chủ đề, không đụng navbar chính)
    document.querySelectorAll('.quiz-nav-container .nav-item').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
};

window.changeQuestion = function(step) {
     if (document.getElementById('quiz-section').style.display === 'none') return;
    clearInterval(timerInterval);
    currentQuiz += step;
    if (currentQuiz < 0) currentQuiz = quizData.length - 1;
    if (currentQuiz >= quizData.length) currentQuiz = 0;
    loadQuiz();
};
window.selectDifficulty = function(diff) {
    currentDifficulty = diff;
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.diff === diff);
    });
    // Lưu ý: kho câu hỏi hiện chưa gắn nhãn độ khó (dễ/trung bình/khó) cho từng câu,
    // nên việc chọn ở đây tạm thời chỉ đổi giao diện nút, chưa lọc được câu hỏi theo độ khó.
    quizData = generateQuizData(currentTopic, currentQuestionCount, currentDifficulty);
    userAnswers = new Array(quizData.length).fill(null);
    document.getElementById('ready-count').textContent = quizData.length;
};

window.selectQuestionCount = function(count) {
    currentQuestionCount = count;
    document.querySelectorAll('.count-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.count) === count);
    });
    quizData = generateQuizData(currentTopic, currentQuestionCount, currentDifficulty);
    userAnswers = new Array(quizData.length).fill(null);
    document.getElementById('ready-count').textContent = quizData.length;
};

window.scrollNav = function(direction) {
    const nav = document.getElementById('navScroll');
    if (!nav) return;
    nav.scrollBy({ left: direction * 200, behavior: 'smooth' });
};

function startQuizNow() {
    quizData = generateQuizData(currentTopic, currentQuestionCount, currentDifficulty);
    if (quizData.length === 0) {
        alert('Không có câu hỏi nào phù hợp với độ khó đã chọn. Vui lòng chọn độ khó khác.');
        return;
    }
    document.getElementById('ready-screen').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'flex';
    currentQuiz = 0;
    score = 0;
    answerLog = [];
    userAnswers = new Array(quizData.length).fill(null);
    loadQuiz();
}

document.addEventListener('DOMContentLoaded', () => {
    if (topicParam && allQuizzes[topicParam]) {
       const topicMap = {
    'van-lang': 0, 'bac-thuoc': 1, 'ly-tran': 2,
    'le-nguyen': 3, 'khang-chien-phap': 4, 'khang-chien-my': 5,
    'ngo-dinh-tienle': 6, 'ho-thuoc-minh': 7, 'doi-moi': 8, 'tong-on': 9
};
        const idx = topicMap[topicParam] ?? 0;
        const navItems = document.querySelectorAll('.quiz-nav-container .nav-item');
        window.loadTopic(topicParam, { target: navItems[idx] || navItems[0] });
    }

});
// ══ HAMBURGER MENU MOBILE ══
function toggleMobileNav() {
    const ul = document.querySelector('.nav-menu-sv');
    const btn = document.getElementById('navToggle');
    if (!ul || !btn) return;
    ul.classList.toggle('open');
    btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', ul.classList.contains('open') ? 'true' : 'false');
}

const DAILY_CHALLENGE_SCHEDULE = [
  { day: 0, gameId: 'game-3', topic: 'Tất cả', count: 10, label: 'Quiz Tổng Hợp' },       // Chủ nhật
  { day: 1, gameId: 'game-1', topic: 'all',    count: 10, label: 'Ai Là Ai' },            // Thứ 2
  { day: 2, gameId: 'game-2', topic: 'all',    count: 9,  label: 'Sắp Xếp Sự Kiện' },      // Thứ 3
  { day: 3, gameId: 'game-4', topic: 'all',    count: 10, label: 'Hành Trình Lịch Sử' },   // Thứ 4
  { day: 4, gameId: 'game-5', topic: 'all',    count: 10, label: 'Vòng Quay Kiến Thức' },  // Thứ 5
  { day: 5, gameId: 'game-3', topic: 'Tất cả', count: 10, label: 'Quiz Tổng Hợp' },        // Thứ 6
  { day: 6, gameId: 'game-1', topic: 'all',    count: 10, label: 'Ai Là Ai' },             // Thứ 7
];
function getTodayChallenge() {
  return DAILY_CHALLENGE_SCHEDULE.find(s => s.day === new Date().getDay());
}
// Gọi hàm này ở trang chủ để gắn link "🔥 Thử thách hôm nay"
function renderDailyChallengeLink(elId) {
  const c = getTodayChallenge();
  const el = document.getElementById(elId);
  if (!el) return;
  el.href = `game.html?daily=1&mode=${c.gameId}&topic=${encodeURIComponent(c.topic)}&count=${c.count}`;
  const labelEl = el.querySelector('.daily-label');
  if (labelEl) labelEl.textContent = c.label;
}