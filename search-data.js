/* ============================================================
   SEARCH-DATA.JS — Nguồn dữ liệu dùng chung cho tìm kiếm tổng hợp
   Dán <script src="search-data.js"></script> TRƯỚC search-engine.js
   trên MỌI trang có ô tìm kiếm.
   ============================================================ */

const SEARCH_DATA = {

  /* ---- 28 nhân vật / câu chuyện lịch sử (từ cau-chuyen.html) ---- */
  stories: [
    { id: 12, name: "Hùng Vương",        title: "Dựng Nước Văn Lang",                    year: "~2879 TCN", cat: "unite",  icon: "🐉" },
    { id: 13, name: "An Dương Vương",    title: "Thành Cổ Loa & Nỏ Thần Kim Quy",        year: "257 TCN",    cat: "unite",  icon: "🏯" },
    { id: 14, name: "Mỵ Châu",           title: "Tình Yêu Hay Phản Bội?",                year: "179 TCN",    cat: "hero",   icon: "🕊️" },
    { id: 16, name: "Triệu Đà",          title: "Kẻ Thù Thâm Hiểm Nhất",                 year: "179 TCN",    cat: "battle", icon: "🗡️" },
    { id: 4,  name: "Hai Bà Trưng",      title: "Khởi Nghĩa Chống Ách Đô Hộ",            year: "40",         cat: "hero",   icon: "👸" },
    { id: 9,  name: "Bà Triệu",          title: "Nữ Tướng Cưỡi Voi Đánh Giặc",           year: "248",        cat: "hero",   icon: "🐘" },
    { id: 19, name: "Lý Bí",             title: "Lập Nước Vạn Xuân",                     year: "544",        cat: "battle", icon: "⚔️" },
    { id: 1,  name: "Ngô Quyền",         title: "Ngô Quyền Phá Quân Nam Hán",            year: "938",        cat: "battle", icon: "⚔️" },
    { id: 6,  name: "Đinh Bộ Lĩnh",      title: "Dẹp Loạn 12 Sứ Quân",                   year: "968",        cat: "unite",  icon: "👑" },
    { id: 22, name: "Lê Hoàn",           title: "Đánh Bại Quân Tống Xâm Lược",           year: "981",        cat: "battle", icon: "⚔️" },
    { id: 24, name: "Lý Thái Tổ",        title: "Dời Đô Ra Thăng Long",                  year: "1010",       cat: "unite",  icon: "👑" },
    { id: 10, name: "Lý Thường Kiệt",    title: "Nam Quốc Sơn Hà",                       year: "1077",       cat: "battle", icon: "📜" },
    { id: 25, name: "Trần Nhân Tông",    title: "Vị Vua Phật Hoàng",                     year: "1258",       cat: "unite",  icon: "🏯" },
    { id: 2,  name: "Hưng Đạo Vương",    title: "Ba Lần Đánh Bại Quân Nguyên Mông",      year: "1288",       cat: "battle", icon: "🛡️" },
    { id: 26, name: "Hồ Quý Ly",         title: "Cải Cách Táo Bạo & Bi Kịch Nhà Hồ",     year: "1400",       cat: "unite",  icon: "📜" },
    { id: 5,  name: "Lê Lợi",            title: "10 Năm Kháng Chiến Chống Quân Minh",    year: "1418",       cat: "battle", icon: "🏯" },
    { id: 15, name: "Nguyễn Trãi",       title: "Bình Ngô Đại Cáo",                      year: "Thế kỷ XV",  cat: "battle", icon: "📜" },
    { id: 17, name: "Lê Thánh Tông",     title: "Luật Hồng Đức & Thời Kỳ Thịnh Trị",     year: "1460",       cat: "unite",  icon: "📜" },
    { id: 18, name: "Nguyễn Du",         title: "Truyện Kiều — Kiệt Tác Văn Học",        year: "1765",       cat: "modern", icon: "📜" },
    { id: 3,  name: "Quang Trung",       title: "Đại Phá 29 Vạn Quân Thanh",             year: "1789",       cat: "battle", icon: "🔥" },
    { id: 28, name: "Phan Bội Châu",     title: "Phong Trào Đông Du",                    year: "1905",       cat: "modern", icon: "📜" },
    { id: 7,  name: "Hồ Chí Minh",       title: "Tuyên Ngôn Độc Lập 2/9/1945",           year: "1945",       cat: "modern", icon: "⭐" },
    { id: 11, name: "Võ Thị Sáu",        title: "Người Con Gái Đất Đỏ",                  year: "1952",       cat: "hero",   icon: "🌺" },
    { id: 8,  name: "Võ Nguyên Giáp",    title: "Chiến Thắng Điện Biên Phủ",             year: "1954",       cat: "modern", icon: "⭐" },
    { id: 20, name: "Nguyễn Văn Trỗi",   title: "Hãy Nhớ Lấy Lời Tôi!",                  year: "1964",       cat: "modern", icon: "🔥" },
    { id: 27, name: "Chiến Dịch Hồ Chí Minh", title: "Ngày Thống Nhất Non Sông",         year: "1975",       cat: "modern", icon: "⭐" },
    { id: 21, name: "Võ Văn Kiệt",       title: "Công Cuộc Đổi Mới Đất Nước",            year: "1991",       cat: "modern", icon: "🏗️" },
    { id: 23, name: "Nguyễn Phú Trọng",  title: "Phòng Chống Tham Nhũng",                year: "2011",       cat: "modern", icon: "📌" }
  ].map(s => ({ ...s, type: "story", url: "cau-chuyen-detail.html?id=" + s.id })),

  /* ---- 8 chủ đề quiz thật sự có dữ liệu trong script.js (allQuizzes) ----
     Lưu ý: "ho-thuoc-minh" và "tong-on" xuất hiện trong topicNames nhưng
     KHÔNG có dữ liệu trong allQuizzes — không đưa vào tìm kiếm để tránh
     dẫn người dùng tới trang trống. */
  quizTopics: [
    { id: "van-lang",          name: "Văn Lang",                  count: 50 },
    { id: "bac-thuoc",         name: "Bắc Thuộc",                 count: 49 },
    { id: "ngo-dinh-tienle",   name: "Ngô - Đinh - Tiền Lê",       count: 49 },
    { id: "ly-tran",           name: "Lý - Trần",                 count: 48 },
    { id: "le-nguyen",         name: "Lê - Nguyễn",                count: 48 },
    { id: "khang-chien-phap",  name: "Chống Pháp",                count: 50 },
    { id: "khang-chien-my",    name: "Chống Mỹ",                  count: 50 },
    { id: "doi-moi",           name: "Thống Nhất - Đổi Mới",       count: 50 }
  ].map(q => ({
    ...q,
    type: "quiz",
    title: "Chủ đề: " + q.name,
    icon: "❓",
    url: "quiz.html?topic=" + q.id
  })),

  /* ---- Các trang chức năng chính của site ---- */
  pages: [
    { name: "Trang chủ",           keywords: ["home", "trang chu"],              url: "index.html",           icon: "🏠" },
    { name: "Hành trình lịch sử",  keywords: ["timeline", "hanh trinh"],          url: "index.html#timeline",  icon: "📅" },
    { name: "Câu chuyện",          keywords: ["story", "cau chuyen"],             url: "cau-chuyen.html",      icon: "📖" },
    { name: "Quiz",                keywords: ["quiz", "trac nghiem", "cau hoi"],  url: "quiz-langding.html",   icon: "❓" },
    { name: "Nhân vật",            keywords: ["nhan vat", "character"],           url: "index.html#nhanvat",   icon: "👤" },
    { name: "Trò chơi lịch sử",    keywords: ["game", "tro choi"],                url: "game.html",            icon: "🎮" },
    { name: "Sơ đồ tư duy",        keywords: ["mindmap", "so do tu duy"],         url: "index.html#mindmap",   icon: "🧠" },
    { name: "Trải nghiệm người dùng", keywords: ["danh gia", "review", "feedback", "trai nghiem nguoi dung"], url: "train-nghiem-nguoi-dung.html", icon: "📊" },
    { name: "Cộng đồng hỏi đáp",   keywords: ["cong dong", "hoi dap", "community", "forum"], url: "cong-dong.html", icon: "💬" },

    /* -- Các thời kỳ lịch sử (dùng chung ở phần Hành trình lịch sử) -- */
    { name: "Văn Lang - Âu Lạc",           keywords: ["van lang", "au lac", "hung vuong", "an duong vuong"], url: "van-lang.html",         icon: "🐉" },
    { name: "Thời Bắc thuộc",              keywords: ["bac thuoc", "hai ba trung", "ba trieu"],              url: "bac-thuoc.html",        icon: "⚔️" },
    { name: "Ngô - Đinh - Tiền Lê",        keywords: ["ngo dinh tien le", "ngo quyen", "dinh bo linh", "le hoan"], url: "ngo-dinh-tienle.html", icon: "🏯" },
    { name: "Nhà Lý - Trần",               keywords: ["ly tran", "ly thuong kiet", "tran hung dao"],         url: "ly-tran.html",          icon: "🛡️" },
    { name: "Nhà Hồ - thuộc Minh",         keywords: ["ho thuoc minh", "ho quy ly"],                         url: "ho-thuoc-minh.html",    icon: "📜" },
    { name: "Hậu Lê - Nguyễn",             keywords: ["le nguyen", "le loi", "nguyen trai", "quang trung"],  url: "le-nguyen.html",        icon: "👑" },
    { name: "Kháng chiến chống Pháp",      keywords: ["chong phap", "vo thi sau", "vo nguyen giap"],         url: "chong-phap.html",       icon: "🔥" },
    { name: "Kháng chiến chống Mỹ",        keywords: ["chong my", "ho chi minh", "nguyen van troi"],         url: "chong-my.html",         icon: "⭐" }
  ].map(p => ({ ...p, type: "page", title: p.name }))
};