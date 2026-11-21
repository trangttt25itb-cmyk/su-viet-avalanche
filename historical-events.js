<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bản Đồ Lịch Sử Việt Nam - Nâng Cấp</title>
    
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.css" />
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #f5f5f5;
            height: 100vh;
            overflow: hidden;
        }

        .container {
            display: flex;
            flex-direction: column;
            height: 100vh;
        }

        /* ════ HEADER ════ */
        .map-header {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: white;
            padding: 12px 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            z-index: 10;
        }

        .map-header h1 {
            font-size: 1.3rem;
            margin-bottom: 8px;
        }

        /* ════ MAIN CONTENT ════ */
        .content {
            display: flex;
            flex: 1;
            gap: 0;
            overflow: hidden;
        }

        /* ════ SIDEBAR ════ */
        .sidebar {
            width: 300px;
            background: white;
            display: flex;
            flex-direction: column;
            box-shadow: 2px 0 8px rgba(0,0,0,0.1);
            overflow-y: auto;
            z-index: 10;
        }

        .sidebar-section {
            padding: 16px;
            border-bottom: 1px solid #eee;
        }

        .sidebar-title {
            font-size: 0.9rem;
            font-weight: 700;
            color: #1a1a2e;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* ════ FILTER ════ */
        .filter-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .filter-tag {
            padding: 6px 12px;
            border: 2px solid #ddd;
            border-radius: 20px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.2s;
            background: white;
            color: #1a1a2e;
            font-weight: 600;
        }

        .filter-tag:hover {
            border-color: #f39c12;
            color: #f39c12;
        }

        .filter-tag.active {
            background: #f39c12;
            border-color: #f39c12;
            color: white;
        }

        /* ════ EVENTS LIST ════ */
        .events-list {
            flex: 1;
            padding: 12px;
            overflow-y: auto;
        }

        .event-item {
            padding: 10px;
            margin-bottom: 8px;
            background: #f9f9f9;
            border-left: 4px solid #f39c12;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .event-item:hover {
            background: #eff3f5;
            transform: translateX(4px);
        }

        .event-item.active {
            background: #fff3cd;
            border-left-color: #d4a500;
        }

        .event-year {
            font-size: 0.75rem;
            color: #f39c12;
            font-weight: 700;
        }

        .event-title {
            font-size: 0.85rem;
            font-weight: 700;
            color: #1a1a2e;
        }

        .event-location {
            font-size: 0.75rem;
            color: #666;
        }

        /* ════ MAP ════ */
        .map-wrapper {
            flex: 1;
            position: relative;
            overflow: hidden;
        }

        #map {
            width: 100%;
            height: 100%;
        }

        /* ════ TIMELINE BOTTOM ════ */
        .timeline-bottom {
            height: 100px;
            background: white;
            border-top: 2px solid #eee;
            overflow-x: auto;
            overflow-y: hidden;
            display: flex;
            align-items: center;
            padding: 0 20px;
            gap: 10px;
            z-index: 10;
        }

        .timeline-item {
            flex-shrink: 0;
            padding: 8px 12px;
            background: #f9f9f9;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
            min-width: 100px;
            text-align: center;
        }

        .timeline-item:hover {
            background: #eff3f5;
            transform: translateY(-2px);
        }

        .timeline-item.active {
            background: #f39c12;
            color: white;
        }

        .timeline-year {
            font-size: 0.75rem;
            font-weight: 700;
            color: #f39c12;
        }

        .timeline-item.active .timeline-year {
            color: white;
        }

        .timeline-name {
            font-size: 0.8rem;
            font-weight: 600;
            color: #1a1a2e;
        }

        .timeline-item.active .timeline-name {
            color: white;
        }

        /* ════ POPUP ════ */
        .leaflet-popup-content {
            font-family: 'Poppins', sans-serif;
            margin: 0 !important;
        }
        .leaflet-popup-content-wrapper {
            max-height: 60vh;
            overflow-y: auto;
        }

        .popup-box {
            padding: 0;
            border-radius: 8px;
            overflow: hidden;
        }

        .popup-header {
            background: linear-gradient(135deg, #f39c12, #d4a500);
            padding: 12px;
            color: #1a1a2e;
        }

        .popup-title {
            font-weight: 800;
            font-size: 0.95rem;
        }

        .popup-body {
            padding: 12px;
        }

        .popup-year {
            font-size: 0.8rem;
            color: #f39c12;
            font-weight: 700;
            margin-bottom: 6px;
        }

        .popup-desc {
            font-size: 0.85rem;
            color: #333;
            line-height: 1.4;
            margin-bottom: 8px;
        }

        .popup-character {
            font-size: 0.8rem;
            background: #f9f9f9;
            padding: 6px;
            border-radius: 4px;
            color: #666;
        }

        /* ════ CUSTOM MARKER ════ */
        .custom-marker {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border: 3px solid #f39c12;
            border-radius: 50%;
            font-size: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            cursor: pointer;
            animation: pulse 2s infinite;
        }

        .custom-marker:hover {
            transform: scale(1.2);
            box-shadow: 0 4px 12px rgba(243, 156, 18, 0.4);
        }

        @keyframes pulse {
            0%, 100% { box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
            50% { box-shadow: 0 2px 16px rgba(243, 156, 18, 0.4); }
        }

        /* ════ PERIOD COLORS ════ */
        .period-hung { color: #3498db; }
        .period-ly { color: #9b59b6; }
        .period-tran { color: #e74c3c; }
        .period-le-nguyen { color: #1abc9c; }
        .period-tay-son { color: #f39c12; }
        .period-khang-phap { color: #34495e; }
        .period-khang-my { color: #c0392b; }

        /* ════ SCROLLBAR ════ */
        .events-list::-webkit-scrollbar,
        .timeline-bottom::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        .events-list::-webkit-scrollbar-thumb,
        .timeline-bottom::-webkit-scrollbar-thumb {
            background: #f39c12;
            border-radius: 3px;
        }

        /* ════ RESPONSIVE ════ */
        @media (max-width: 768px) {
            .content {
                flex-direction: column;
            }

            .sidebar {
                width: 100%;
                max-height: 30%;
            }

            .map-wrapper {
                flex: 1;
            }

            .timeline-bottom {
                height: 80px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- HEADER -->
        <div class="map-header">
            <h1>📍 Bản Đồ Lịch Sử Việt Nam - Nâng Cấp</h1>
            <p style="font-size: 0.9rem; opacity: 0.8;">Khám phá các sự kiện, routes, timeline và mật độ sự kiện</p>
        </div>

        <!-- MAIN -->
        <div class="content">
            <!-- SIDEBAR -->
            <div class="sidebar">
                <!-- FILTER -->
                <div class="sidebar-section">
                    <div class="sidebar-title">⏰ Lọc theo giai đoạn</div>
                    <div class="filter-tags" id="periodFilters"></div>
                </div>

                <!-- EVENTS LIST -->
                <div class="sidebar-section" style="flex: 1; padding: 0;">
                    <div style="padding: 16px; border-bottom: 1px solid #eee;">
                        <div class="sidebar-title">📌 Sự Kiện (<span id="eventCount">20</span>)</div>
                    </div>
                    <div class="events-list" id="eventsList"></div>
                </div>
            </div>

            <!-- MAP WRAPPER -->
            <div class="map-wrapper">
               <div id="map"></div>
        <button id="fullscreenBtn" style="position:absolute; top:10px; right:10px; z-index:999; padding:10px 16px; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:700; cursor:pointer; font-size:0.9rem;">⛶ Fullscreen</button>
      </div>
        </div>

        <!-- TIMELINE BOTTOM -->
        <div class="timeline-bottom" id="timelineBottom"></div>
    </div>

    <!-- Leaflet JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.umd.js"></script>

    <script>
        // ════ DATA (đã bổ sung đầy đủ: detailedDesc, causes, result, impact, funFacts, timeline, keyFigures) ════
        const events = [
            {
                id: 1, title: 'Trận Bạch Đằng', year: 938, location: 'Hải Phòng', lat: 20.8517, lng: 106.9197,
                character: 'Ngô Quyền', desc: 'Ngô Quyền đánh bại quân Tống, lập nước Đại Việt độc lập.', icon: '⚔️', period: 'ly',
                detailedDesc: 'Ngô Quyền tập hợp lực lượng, lợi dụng thủy triều sông Bạch Đằng để bố trí trận địa cọc ngầm, tiêu diệt hoàn toàn thủy quân Nam Hán.',
                causes: 'Nam Hán lợi dụng loạn 12 sứ quân để xâm lược, dân ta cần một trận quyết chiến để giành độc lập.',
                result: 'Quân Nam Hán đại bại, tướng Hoằng Tháo tử trận.',
                impact: 'Chấm dứt hơn 1000 năm Bắc thuộc, mở ra thời kỳ độc lập tự chủ lâu dài cho dân tộc.',
                funFacts: ['Ngô Quyền cho đóng cọc gỗ đầu bịt sắt dưới lòng sông, lợi dụng thủy triều lên xuống để nhử địch.', 'Đây được xem là trận thủy chiến kinh điển đầu tiên trong sử Việt.'],
                timeline: [{date:'937', event:'Ngô Quyền chuẩn bị lực lượng'}, {date:'938', event:'Trận Bạch Đằng diễn ra và toàn thắng'}, {date:'939', event:'Ngô Quyền xưng vương, lập triều đình'}],
                keyFigures: [{name:'Ngô Quyền', role:'Chủ tướng chỉ huy trận đánh'}, {name:'Hoằng Tháo', role:'Tướng chỉ huy quân Nam Hán'}]
            },
            {
                id: 2, title: 'Thành Cổ Loa', year: -210, location: 'Hà Nội', lat: 21.0285, lng: 105.8581,
                character: 'An Dương Vương', desc: 'An Dương Vương xây dựng thành Cổ Loa.', icon: '🏰', period: 'hung',
                detailedDesc: 'An Dương Vương Thục Phán xây dựng kinh đô Cổ Loa với cấu trúc 9 vòng thành xoáy trôn ốc, một công trình quân sự - kiến trúc độc đáo thời cổ.',
                causes: 'Cần một kinh đô kiên cố để phòng thủ trước nguy cơ xâm lược từ phương Bắc.',
                result: 'Thành Cổ Loa trở thành kinh đô của nước Âu Lạc.',
                impact: 'Là minh chứng cho trình độ kỹ thuật quân sự và kiến trúc phát triển của người Việt cổ.',
                funFacts: ['Thành có cấu trúc xoáy ốc độc đáo, hiếm có trong kiến trúc cổ đại thế giới.', 'Gắn liền với truyền thuyết nỏ thần và chuyện tình Mỵ Châu - Trọng Thủy.'],
                timeline: [{date:'257 TCN', event:'Thục Phán lập nước Âu Lạc'}, {date:'~210 TCN', event:'Xây dựng thành Cổ Loa'}],
                keyFigures: [{name:'An Dương Vương (Thục Phán)', role:'Vua sáng lập, người xây thành'}]
            },
            {
                id: 3, title: 'Khởi nghĩa Hai Bà Trưng', year: 40, location: 'Hà Nội', lat: 21.0285, lng: 105.8581,
                character: 'Hai Bà Trưng', desc: 'Hai chị em Trưng Trắc và Trưng Nhị khởi nghĩa.', icon: '👸', period: 'hung',
                detailedDesc: 'Trưng Trắc và Trưng Nhị dấy binh khởi nghĩa chống lại ách đô hộ tàn bạo của nhà Hán, giành lại quyền tự chủ trong 3 năm.',
                causes: 'Chính sách cai trị hà khắc của Thái thú Tô Định và cái chết của Thi Sách (chồng Trưng Trắc).',
                result: 'Đánh đuổi quân Hán, Trưng Trắc lên ngôi vua, đóng đô ở Mê Linh.',
                impact: 'Là cuộc khởi nghĩa lớn đầu tiên của phụ nữ Việt Nam chống ngoại xâm, biểu tượng bất khuất dân tộc.',
                funFacts: ['Đây là lần đầu tiên phụ nữ Việt Nam lãnh đạo một cuộc khởi nghĩa quy mô lớn.', 'Nhiều nữ tướng khác cũng tham gia như Bát Nàn, Lê Chân.'],
                timeline: [{date:'40', event:'Hai Bà Trưng phất cờ khởi nghĩa'}, {date:'40-43', event:'Trưng Trắc xưng vương, cai trị đất nước'}, {date:'43', event:'Mã Viện đàn áp, khởi nghĩa thất bại'}],
                keyFigures: [{name:'Trưng Trắc', role:'Lãnh đạo khởi nghĩa, xưng vương'}, {name:'Trưng Nhị', role:'Đồng lãnh đạo khởi nghĩa'}]
            },
            {
                id: 4, title: 'Trận Tây Kết', year: 1258, location: 'Hưng Yên', lat: 20.7623, lng: 106.0503,
                character: 'Trần Hưng Đạo', desc: 'Trần Hưng Đạo đánh tan quân Mông Nguyên.', icon: '🏹', period: 'tran',
                detailedDesc: 'Trong cuộc kháng chiến chống Mông Nguyên lần thứ nhất, quân Trần phản công quyết liệt tại Tây Kết, đánh bật quân xâm lược.',
                causes: 'Quân Mông Cổ tiến đánh Đại Việt trên đường bành trướng xuống phía Nam.',
                result: 'Quân Mông Cổ phải rút chạy khỏi Thăng Long.',
                impact: 'Là chiến thắng mở đầu cho truyền thống 3 lần đại thắng quân Nguyên Mông của nhà Trần.',
                funFacts: ['Đây là lần đầu tiên quân Mông Cổ - đội quân từng bất bại ở châu Âu và châu Á - phải nếm mùi thất bại tại Đại Việt.'],
                timeline: [{date:'1257', event:'Quân Mông Cổ tiến vào Đại Việt'}, {date:'1258', event:'Trận Tây Kết, quân Mông Cổ rút lui'}],
                keyFigures: [{name:'Trần Thái Tông', role:'Vua chỉ huy kháng chiến'}, {name:'Trần Hưng Đạo', role:'Tướng lĩnh chủ chốt'}]
            },
            {
                id: 5, title: 'Dời đô Thăng Long', year: 1010, location: 'Hà Nội', lat: 21.0285, lng: 105.8581,
                character: 'Lý Thái Tổ', desc: 'Lý Thái Tổ dời đô đến Thăng Long.', icon: '🏛️', period: 'ly',
                detailedDesc: 'Lý Thái Tổ ban "Chiếu dời đô", chuyển kinh đô từ Hoa Lư về thành Đại La, đổi tên thành Thăng Long với ý nghĩa "rồng bay lên".',
                causes: 'Hoa Lư địa thế chật hẹp, không thuận lợi cho phát triển lâu dài của đất nước.',
                result: 'Thăng Long trở thành kinh đô, trung tâm chính trị - kinh tế - văn hóa của Đại Việt.',
                impact: 'Đặt nền móng cho sự phát triển rực rỡ hơn 1000 năm của Hà Nội ngày nay.',
                funFacts: ['Tương truyền khi thuyền vua đến Đại La, có rồng vàng bay lên nên đặt tên là Thăng Long.'],
                timeline: [{date:'1009', event:'Lý Công Uẩn lên ngôi, lập nhà Lý'}, {date:'1010', event:'Ban Chiếu dời đô, dời về Thăng Long'}],
                keyFigures: [{name:'Lý Thái Tổ (Lý Công Uẩn)', role:'Vua sáng lập nhà Lý, người dời đô'}]
            },
            {
                id: 6, title: 'Trận Như Nguyệt', year: 1077, location: 'Bắc Ninh', lat: 21.25, lng: 106.05,
                character: 'Lý Thường Kiệt', desc: 'Lý Thường Kiệt đánh bại quân Tống trên phòng tuyến sông Như Nguyệt.', icon: '🗺️', period: 'ly',
                detailedDesc: 'Lý Thường Kiệt lập phòng tuyến trên sông Như Nguyệt, chặn đứng và đánh bại đại quân nhà Tống xâm lược.',
                causes: 'Nhà Tống muốn thôn tính Đại Việt sau khi bị Lý Thường Kiệt chủ động tấn công trước (phạt Tống).',
                result: 'Quân Tống đại bại, phải giảng hòa và rút quân.',
                impact: 'Bài thơ "Nam quốc sơn hà" được xem là bản Tuyên ngôn độc lập đầu tiên của Việt Nam, ra đời trong trận này.',
                funFacts: ['Lý Thường Kiệt cho ngâm bài thơ thần "Nam quốc sơn hà" trong đền để khích lệ tinh thần quân sĩ.'],
                timeline: [{date:'1075', event:'Lý Thường Kiệt chủ động tấn công đất Tống'}, {date:'1077', event:'Trận Như Nguyệt, đánh bại quân Tống'}],
                keyFigures: [{name:'Lý Thường Kiệt', role:'Tổng chỉ huy quân đội Đại Việt'}]
            },
            {
                id: 7, title: 'Bình Ngô Đại Cáo', year: 1428, location: 'Hà Nội', lat: 21.0285, lng: 105.8581,
                character: 'Nguyễn Trãi', desc: 'Nguyễn Trãi soạn Bình Ngô Đại Cáo.', icon: '📜', period: 'le-nguyen',
                detailedDesc: 'Sau khi đánh thắng quân Minh, Nguyễn Trãi thay lời Lê Lợi viết "Bình Ngô Đại Cáo" tuyên bố nền độc lập của Đại Việt.',
                causes: 'Kết thúc thắng lợi cuộc khởi nghĩa Lam Sơn chống quân Minh xâm lược 10 năm.',
                result: 'Bản cáo được công bố rộng rãi, chính thức khẳng định chủ quyền quốc gia.',
                impact: 'Được coi là bản Tuyên ngôn độc lập thứ hai của dân tộc Việt Nam, áng văn chính luận bất hủ.',
                funFacts: ['Áng văn mở đầu bằng câu nổi tiếng khẳng định "núi sông bờ cõi đã chia, phong tục Bắc Nam cũng khác".'],
                timeline: [{date:'1427', event:'Chiến thắng Chi Lăng - Xương Giang'}, {date:'1428', event:'Lê Lợi lên ngôi, Nguyễn Trãi soạn Bình Ngô Đại Cáo'}],
                keyFigures: [{name:'Nguyễn Trãi', role:'Tác giả, quân sư của Lê Lợi'}, {name:'Lê Lợi', role:'Lãnh đạo khởi nghĩa Lam Sơn'}]
            },
            {
                id: 8, title: 'Lê Lợi lập nhà Lê', year: 1428, location: 'Hà Nội', lat: 21.03, lng: 105.86,
                character: 'Lê Lợi', desc: 'Lê Lợi lập nhà Lê Sơ.', icon: '👑', period: 'le-nguyen',
                detailedDesc: 'Sau 10 năm kháng chiến gian khổ (khởi nghĩa Lam Sơn), Lê Lợi lên ngôi hoàng đế, lập ra triều Lê Sơ.',
                causes: 'Thắng lợi của cuộc khởi nghĩa Lam Sơn chống quân Minh xâm lược.',
                result: 'Nhà Lê Sơ được thành lập, mở ra giai đoạn thịnh trị của Đại Việt.',
                impact: 'Đặt nền tảng cho một trong những triều đại thịnh vượng và tồn tại lâu dài nhất trong lịch sử Việt Nam.',
                funFacts: ['Lê Lợi khởi nghĩa từ vùng núi Lam Sơn (Thanh Hóa) với lực lượng ban đầu rất nhỏ.'],
                timeline: [{date:'1418', event:'Lê Lợi dựng cờ khởi nghĩa tại Lam Sơn'}, {date:'1428', event:'Lê Lợi lên ngôi, lập nhà Lê Sơ'}],
                keyFigures: [{name:'Lê Lợi (Lê Thái Tổ)', role:'Người sáng lập nhà Lê Sơ'}]
            },
            {
                id: 9, title: 'Nguyễn Hoàng vào Nam', year: 1558, location: 'Thuận Hóa', lat: 16.4637, lng: 107.5909,
                character: 'Nguyễn Hoàng', desc: 'Nguyễn Hoàng vào trấn thủ Thuận Hóa, mở đầu công cuộc Nam tiến.', icon: '🌾', period: 'le-nguyen',
                detailedDesc: 'Nguyễn Hoàng xin vào trấn thủ vùng Thuận Hóa để tránh sự tranh giành quyền lực với họ Trịnh, từ đó gây dựng cơ nghiệp chúa Nguyễn ở Đàng Trong.',
                causes: 'Mâu thuẫn quyền lực giữa các dòng họ Trịnh - Nguyễn trong triều Lê.',
                result: 'Hình thành thế lực chúa Nguyễn cai quản vùng Đàng Trong, dẫn tới thời kỳ Trịnh - Nguyễn phân tranh.',
                impact: 'Mở đầu cho công cuộc khai phá, mở rộng lãnh thổ về phía Nam của dân tộc Việt Nam.',
                funFacts: ['Nguyễn Hoàng được xem là người đặt nền móng đầu tiên cho vùng đất Đàng Trong sau này.'],
                timeline: [{date:'1558', event:'Nguyễn Hoàng vào trấn thủ Thuận Hóa'}, {date:'1600s', event:'Các chúa Nguyễn tiếp tục mở rộng về phương Nam'}],
                keyFigures: [{name:'Nguyễn Hoàng', role:'Chúa Nguyễn đầu tiên'}]
            },
            {
                id: 10, title: 'Khởi nghĩa Tây Sơn', year: 1771, location: 'Bình Định', lat: 13.7794, lng: 109.2261,
                character: 'Ba anh em Tây Sơn', desc: 'Phong trào Tây Sơn nổi dậy.', icon: '🎭', period: 'tay-son',
                detailedDesc: 'Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ dựng cờ khởi nghĩa tại ấp Tây Sơn, mở đầu phong trào nông dân lớn nhất lịch sử.',
                causes: 'Chế độ phong kiến mục nát, đời sống nhân dân cực khổ dưới thời chúa Nguyễn ở Đàng Trong.',
                result: 'Phong trào phát triển mạnh, lần lượt đánh đổ chúa Nguyễn, chúa Trịnh và quân Xiêm, Thanh xâm lược.',
                impact: 'Là cuộc khởi nghĩa nông dân quy mô lớn nhất, tạm thời thống nhất đất nước sau nhiều thế kỷ chia cắt.',
                funFacts: ['Ba anh em Tây Sơn xuất thân từ một gia đình buôn bán nhỏ ở vùng Bình Định.'],
                timeline: [{date:'1771', event:'Ba anh em Tây Sơn dựng cờ khởi nghĩa'}, {date:'1777', event:'Lật đổ chúa Nguyễn ở Đàng Trong'}],
                keyFigures: [{name:'Nguyễn Nhạc', role:'Anh cả, người khởi xướng phong trào'}, {name:'Nguyễn Huệ', role:'Em thứ, sau này là vua Quang Trung'}, {name:'Nguyễn Lữ', role:'Em út, tham gia chỉ huy'}]
            },
            {
                id: 11, title: 'Đại phá quân Thanh', year: 1789, location: 'Hà Nội', lat: 21.0285, lng: 105.8581,
                character: 'Quang Trung', desc: 'Quang Trung đánh bại 20 vạn quân Thanh.', icon: '⚡', period: 'tay-son',
                detailedDesc: 'Nguyễn Huệ lên ngôi hoàng đế lấy hiệu Quang Trung, thần tốc hành quân ra Bắc, đánh tan 20 vạn quân Thanh chỉ trong 5 ngày Tết Kỷ Dậu.',
                causes: 'Vua Lê Chiêu Thống cầu viện nhà Thanh đưa quân sang xâm lược Đại Việt.',
                result: 'Quân Thanh đại bại, Tôn Sĩ Nghị bỏ chạy về nước.',
                impact: 'Là một trong những chiến công quân sự lừng lẫy nhất lịch sử Việt Nam, thể hiện thiên tài quân sự của Quang Trung.',
                funFacts: ['Quân Tây Sơn hành quân thần tốc từ Phú Xuân ra Thăng Long chỉ trong khoảng thời gian rất ngắn để đánh úp bất ngờ.', 'Trận đánh diễn ra đúng dịp Tết Nguyên Đán khiến quân Thanh không kịp trở tay.'],
                timeline: [{date:'25/11/1788 (âm lịch)', event:'Nguyễn Huệ lên ngôi hoàng đế, hiệu Quang Trung'}, {date:'Tết Kỷ Dậu 1789', event:'Đại phá 20 vạn quân Thanh'}],
                keyFigures: [{name:'Quang Trung (Nguyễn Huệ)', role:'Hoàng đế, tổng chỉ huy chiến dịch'}, {name:'Tôn Sĩ Nghị', role:'Tướng chỉ huy quân Thanh'}]
            },
            {
                id: 12, title: 'Nguyễn Ánh thống nhất', year: 1802, location: 'Huế', lat: 16.4673, lng: 107.5898,
                character: 'Nguyễn Ánh', desc: 'Nguyễn Ánh lập nhà Nguyễn.', icon: '🏯', period: 'le-nguyen',
                detailedDesc: 'Sau khi đánh bại nhà Tây Sơn, Nguyễn Ánh lên ngôi hoàng đế lấy hiệu Gia Long, thống nhất đất nước, đóng đô tại Huế.',
                causes: 'Cuộc chiến tranh kéo dài giữa nhà Tây Sơn và lực lượng Nguyễn Ánh.',
                result: 'Nhà Nguyễn được thành lập, lãnh thổ Việt Nam được thống nhất trải dài từ Bắc vào Nam.',
                impact: 'Là triều đại phong kiến cuối cùng trong lịch sử Việt Nam, tồn tại đến năm 1945.',
                funFacts: ['Đây là lần đầu tiên lãnh thổ Việt Nam có hình dạng gần giống với bản đồ hiện đại ngày nay.'],
                timeline: [{date:'1802', event:'Nguyễn Ánh lên ngôi, lấy hiệu Gia Long'}, {date:'1802', event:'Đóng đô tại Huế, đặt quốc hiệu Việt Nam'}],
                keyFigures: [{name:'Nguyễn Ánh (Gia Long)', role:'Vua sáng lập nhà Nguyễn'}]
            },
            {
                id: 13, title: 'Pháp tấn công Đà Nẵng', year: 1858, location: 'Đà Nẵng', lat: 16.0544, lng: 108.2022,
                character: 'Tự Đức', desc: 'Pháp nổ súng tấn công Đà Nẵng, mở đầu cuộc xâm lược Việt Nam.', icon: '🔫', period: 'khang-phap',
                detailedDesc: 'Liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà, Đà Nẵng, chính thức mở đầu cuộc chiến tranh xâm lược Việt Nam.',
                causes: 'Pháp lấy cớ triều Nguyễn cấm đạo, giết giáo sĩ để tiến hành xâm lược, thực chất nhằm mở rộng thuộc địa.',
                result: 'Quân dân ta chống trả quyết liệt khiến Pháp sa lầy nhiều tháng tại Đà Nẵng.',
                impact: 'Mở đầu thời kỳ Pháp thuộc kéo dài gần 100 năm ở Việt Nam.',
                funFacts: ['Dù có vũ khí hiện đại, quân Pháp vẫn bị cầm chân tại Đà Nẵng nhiều tháng do sự kháng cự của quân dân ta.'],
                timeline: [{date:'1/9/1858', event:'Pháp nổ súng tấn công Đà Nẵng'}, {date:'1859', event:'Pháp chuyển hướng đánh vào Gia Định'}],
                keyFigures: [{name:'Vua Tự Đức', role:'Hoàng đế nhà Nguyễn đương thời'}, {name:'Nguyễn Tri Phương', role:'Tướng chỉ huy chống Pháp tại Đà Nẵng'}]
            },
            {
                id: 14, title: 'Khởi nghĩa Yên Thế', year: 1884, location: 'Bắc Giang', lat: 21.4167, lng: 106.1833,
                character: 'Hoàng Hoa Thám', desc: 'Hoàng Hoa Thám lãnh đạo khởi nghĩa nông dân Yên Thế.', icon: '🏔️', period: 'khang-phap',
                detailedDesc: 'Hoàng Hoa Thám lãnh đạo cuộc khởi nghĩa nông dân kéo dài gần 30 năm tại vùng rừng núi Yên Thế, chống lại thực dân Pháp.',
                causes: 'Pháp mở rộng chiếm đóng, cướp đất, áp bức nông dân vùng trung du Bắc Kỳ.',
                result: 'Nghĩa quân cầm cự được rất lâu nhờ địa hình hiểm trở, gây nhiều tổn thất cho Pháp.',
                impact: 'Là cuộc khởi nghĩa nông dân kéo dài nhất trong phong trào chống Pháp, thể hiện ý chí bất khuất.',
                funFacts: ['Hoàng Hoa Thám được mệnh danh là "Hùm thiêng Yên Thế" vì tài dùng binh và sự bền bỉ chống Pháp gần 30 năm.'],
                timeline: [{date:'1884', event:'Bắt đầu cuộc khởi nghĩa Yên Thế'}, {date:'1913', event:'Hoàng Hoa Thám hy sinh, khởi nghĩa kết thúc'}],
                keyFigures: [{name:'Hoàng Hoa Thám (Đề Thám)', role:'Lãnh đạo cuộc khởi nghĩa'}]
            },
            {
                id: 15, title: 'Phong trào Đông Du', year: 1905, location: 'Nghệ An', lat: 18.6667, lng: 105.6667,
                character: 'Phan Bội Châu', desc: 'Phan Bội Châu khởi xướng phong trào Đông Du.', icon: '✈️', period: 'khang-phap',
                detailedDesc: 'Phan Bội Châu vận động thanh niên Việt Nam sang Nhật Bản du học nhằm học hỏi tư tưởng và kỹ thuật để về cứu nước.',
                causes: 'Ảnh hưởng của công cuộc Duy Tân ở Nhật Bản và mong muốn tìm con đường cứu nước mới.',
                result: 'Hàng trăm thanh niên Việt Nam sang Nhật học tập trước khi phong trào bị Pháp - Nhật cấu kết dập tắt.',
                impact: 'Đánh dấu bước chuyển trong tư tưởng cứu nước Việt Nam, từ đấu tranh vũ trang truyền thống sang tìm kiếm con đường duy tân.',
                funFacts: ['Đây là phong trào du học có tổ chức đầu tiên của thanh niên Việt Nam ra nước ngoài.'],
                timeline: [{date:'1904', event:'Phan Bội Châu lập Duy Tân Hội'}, {date:'1905-1908', event:'Phong trào Đông Du đưa thanh niên sang Nhật'}, {date:'1909', event:'Pháp - Nhật cấu kết, phong trào tan rã'}],
                keyFigures: [{name:'Phan Bội Châu', role:'Người khởi xướng phong trào'}]
            },
            {
                id: 16, title: 'Đảng Cộng sản Việt Nam thành lập', year: 1930, location: 'Hồng Kông', lat: 22.3193, lng: 114.1694,
                character: 'Hồ Chí Minh', desc: 'Hồ Chí Minh chủ trì hội nghị thành lập Đảng Cộng sản Việt Nam.', icon: '🚩', period: 'khang-phap',
                detailedDesc: 'Nguyễn Ái Quốc (Hồ Chí Minh) chủ trì hội nghị hợp nhất ba tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam tại Hồng Kông.',
                causes: 'Phong trào cách mạng Việt Nam cần một chính đảng thống nhất để lãnh đạo đấu tranh giành độc lập.',
                result: 'Đảng Cộng sản Việt Nam ra đời, thống nhất đường lối cách mạng cả nước.',
                impact: 'Là bước ngoặt quan trọng, mở ra giai đoạn cách mạng Việt Nam có sự lãnh đạo thống nhất của một chính đảng.',
                funFacts: ['Hội nghị thành lập Đảng được tổ chức bí mật tại Cửu Long, Hồng Kông.'],
                timeline: [{date:'3/2/1930', event:'Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam'}],
                keyFigures: [{name:'Nguyễn Ái Quốc (Hồ Chí Minh)', role:'Người chủ trì thành lập Đảng'}]
            },
            {
                id: 17, title: 'Cách mạng Tháng Tám', year: 1945, location: 'Hà Nội', lat: 21.0285, lng: 105.8581,
                character: 'Hồ Chí Minh', desc: 'Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.', icon: '🇻🇳', period: 'khang-my',
                detailedDesc: 'Nhân dân cả nước tổng khởi nghĩa giành chính quyền; ngày 2/9/1945 Hồ Chí Minh đọc Tuyên ngôn Độc lập tại quảng trường Ba Đình.',
                causes: 'Thời cơ thuận lợi khi phát xít Nhật đầu hàng Đồng Minh, khoảng trống quyền lực tại Đông Dương.',
                result: 'Nước Việt Nam Dân chủ Cộng hòa ra đời, chấm dứt chế độ quân chủ và ách đô hộ thực dân - phát xít.',
                impact: 'Là bước ngoặt vĩ đại của lịch sử dân tộc, mở ra kỷ nguyên độc lập, tự do.',
                funFacts: ['Bản Tuyên ngôn Độc lập trích dẫn cả Tuyên ngôn Độc lập Mỹ (1776) và Tuyên ngôn Nhân quyền Pháp (1789).'],
                timeline: [{date:'14-8/1945', event:'Tổng khởi nghĩa giành chính quyền trên cả nước'}, {date:'2/9/1945', event:'Hồ Chí Minh đọc Tuyên ngôn Độc lập'}],
                keyFigures: [{name:'Hồ Chí Minh', role:'Chủ tịch nước, người đọc Tuyên ngôn Độc lập'}]
            },
            {
                id: 18, title: 'Chiến dịch Điện Biên Phủ', year: 1954, location: 'Điện Biên Phủ', lat: 21.3924, lng: 103.0188,
                character: 'Võ Nguyên Giáp', desc: 'Chiến dịch Điện Biên Phủ kết thúc, quân Pháp đầu hàng.', icon: '🎖️', period: 'khang-phap',
                detailedDesc: 'Đại tướng Võ Nguyên Giáp chỉ huy quân đội ta bao vây, tấn công tập đoàn cứ điểm Điện Biên Phủ, buộc quân Pháp phải đầu hàng.',
                causes: 'Pháp xây dựng Điện Biên Phủ thành tập đoàn cứ điểm mạnh nhất Đông Dương nhằm nghiền nát chủ lực Việt Minh.',
                result: 'Toàn bộ tập đoàn cứ điểm Pháp bị tiêu diệt, tướng De Castries cùng toàn bộ binh lính đầu hàng.',
                impact: 'Chiến thắng "lừng lẫy năm châu, chấn động địa cầu", buộc Pháp ký Hiệp định Genève, chấm dứt chiến tranh Đông Dương.',
                funFacts: ['Tướng Giáp đã thay đổi phương án tác chiến từ "đánh nhanh, thắng nhanh" sang "đánh chắc, tiến chắc" ngay trước giờ nổ súng.', 'Bộ đội ta kéo pháo bằng tay qua địa hình núi rừng hiểm trở để bao vây cứ điểm.'],
                timeline: [{date:'13/3/1954', event:'Quân ta nổ súng mở màn chiến dịch'}, {date:'7/5/1954', event:'Tập đoàn cứ điểm Điện Biên Phủ thất thủ'}],
                keyFigures: [{name:'Võ Nguyên Giáp', role:'Đại tướng, Tổng chỉ huy chiến dịch'}, {name:'De Castries', role:'Tướng chỉ huy quân Pháp tại Điện Biên Phủ'}]
            },
            {
                id: 19, title: 'Tổng tiến công Tết Mậu Thân', year: 1968, location: 'Miền Nam', lat: 16.0, lng: 108.0,
                character: 'Bộ Chỉ huy Miền', desc: 'Quân Giải phóng tổng tiến công và nổi dậy đồng loạt trên toàn miền Nam.', icon: '💥', period: 'khang-my',
                detailedDesc: 'Quân Giải phóng bất ngờ tổng tiến công vào hầu hết các đô thị miền Nam đúng dịp Tết, gây chấn động dư luận Mỹ.',
                causes: 'Cần tạo bước ngoặt chiến lược, làm lung lay ý chí xâm lược của Mỹ và chính quyền Sài Gòn.',
                result: 'Về quân sự chưa đạt mục tiêu đề ra, nhưng gây chấn động chính trị to lớn tại Mỹ.',
                impact: 'Buộc Mỹ phải xuống thang chiến tranh, ngồi vào bàn đàm phán Paris, là bước ngoặt quan trọng của cuộc kháng chiến.',
                funFacts: ['Sự kiện được phát sóng trực tiếp trên truyền hình Mỹ, làm thay đổi mạnh mẽ dư luận phản đối chiến tranh tại Mỹ.'],
                timeline: [{date:'30/1/1968', event:'Tổng tiến công đồng loạt nổ ra tại nhiều đô thị'}, {date:'1968', event:'Mỹ tuyên bố ngừng ném bom miền Bắc, chấp nhận đàm phán'}],
                keyFigures: [{name:'Võ Nguyên Giáp', role:'Người chỉ đạo chiến lược quân sự'}]
            },
            {
                id: 20, title: 'Giải phóng Sài Gòn', year: 1975, location: 'Sài Gòn', lat: 10.7769, lng: 106.7009,
                character: 'Văn Tiến Dũng', desc: 'Chiến dịch Hồ Chí Minh toàn thắng, đất nước thống nhất.', icon: '🏁', period: 'khang-my',
                detailedDesc: 'Chiến dịch Hồ Chí Minh lịch sử kết thúc bằng việc xe tăng quân Giải phóng tiến vào Dinh Độc Lập, chính quyền Sài Gòn tuyên bố đầu hàng.',
                causes: 'Sau Hiệp định Paris, quân đội Sài Gòn suy yếu nghiêm trọng, thời cơ giải phóng hoàn toàn miền Nam đã chín muồi.',
                result: 'Miền Nam hoàn toàn giải phóng, đất nước thống nhất sau 21 năm chia cắt.',
                impact: 'Kết thúc cuộc kháng chiến chống Mỹ, mở ra thời kỳ xây dựng và thống nhất đất nước.',
                funFacts: ['Xe tăng số hiệu 390 là một trong những chiếc đầu tiên húc đổ cổng Dinh Độc Lập ngày 30/4/1975.'],
                timeline: [{date:'26/4/1975', event:'Chiến dịch Hồ Chí Minh chính thức mở màn'}, {date:'30/4/1975', event:'Sài Gòn hoàn toàn giải phóng'}],
                keyFigures: [{name:'Văn Tiến Dũng', role:'Tư lệnh chiến dịch Hồ Chí Minh'}, {name:'Dương Văn Minh', role:'Tổng thống cuối cùng chính quyền Sài Gòn, người tuyên bố đầu hàng'}]
            }
        ];

        const periods = [
            { value: 'hung', label: 'Hùng Vương', color: '#3498db' },
            { value: 'ly', label: 'Triều Lý', color: '#9b59b6' },
            { value: 'tran', label: 'Triều Trần', color: '#e74c3c' },
            { value: 'le-nguyen', label: 'Lê-Nguyễn', color: '#1abc9c' },
            { value: 'tay-son', label: 'Tây Sơn', color: '#f39c12' },
            { value: 'khang-phap', label: 'Kháng Pháp', color: '#34495e' },
            { value: 'khang-my', label: 'Kháng Mỹ', color: '#c0392b' }
        ];

        let filteredEvents = [...events];
        let selectedPeriods = [];
        let map;
        let markers = [];
        let routes = [];

        // ════ INIT ════
        function init() {
            initMap();
            renderFilters();
            renderTimeline();
            renderEvents();
            renderMarkers();
        }

        // ════ INIT MAP ════
        function initMap() {
            map = L.map('map').setView([16, 105.5], 6);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap',
                maxZoom: 19
            }).addTo(map);

            renderHeatMap();
        }

        // ════ HEAT MAP ════
        function renderHeatMap() {
            events.forEach(event => {
                L.circleMarker([event.lat, event.lng], {
                    radius: 15,
                    fillColor: '#f39c12',
                    color: '#f39c12',
                    weight: 0,
                    opacity: 0,
                    fillOpacity: 0.1
                }).addTo(map);
            });
        }

        // ════ RENDER FILTERS ════
        function renderFilters() {
            const html = periods.map(p => `
                <div class="filter-tag" onclick="togglePeriod('${p.value}')" style="--color: ${p.color};">
                    ${p.label}
                </div>
            `).join('');
            
            document.getElementById('periodFilters').innerHTML = html;
        }

        // ════ TOGGLE PERIOD ════
        function togglePeriod(period) {
            if (selectedPeriods.includes(period)) {
                selectedPeriods = selectedPeriods.filter(p => p !== period);
            } else {
                selectedPeriods.push(period);
            }

            const tags = document.querySelectorAll('.filter-tag');
            tags.forEach(tag => {
                const text = tag.textContent.trim();
                const p = periods.find(x => x.label === text);
                if (selectedPeriods.includes(p.value)) {
                    tag.classList.add('active');
                } else {
                    tag.classList.remove('active');
                }
            });

            filterEvents();
        }

        // ════ FILTER EVENTS ════
        function filterEvents() {
            if (selectedPeriods.length === 0) {
                filteredEvents = [...events];
            } else {
                filteredEvents = events.filter(e => selectedPeriods.includes(e.period));
            }

            renderEvents();
            renderMarkers();
            renderRoutes();
            renderTimeline();
        }

        // ════ RENDER EVENTS ════
        function renderEvents() {
            const list = document.getElementById('eventsList');
            document.getElementById('eventCount').textContent = filteredEvents.length;
            
            list.innerHTML = filteredEvents
                .sort((a, b) => a.year - b.year)
                .map(e => `
                    <div class="event-item" onclick="selectEvent(${e.id})">
                        <div class="event-year">${e.year}</div>
                        <div class="event-title">${e.title}</div>
                        <div class="event-location">📍 ${e.location}</div>
                    </div>
                `).join('');
        }

        // ════ RENDER MARKERS ════
        function renderMarkers() {
            markers.forEach(m => map.removeLayer(m));
            markers = [];

            filteredEvents.forEach(event => {
                const html = `
                    <div class="popup-box">
                        <div class="popup-header">
                            <span style="font-size:24px; margin-right:8px;">${event.icon}</span>
                            <span class="popup-title">${event.title}</span>
                        </div>
                        <div class="popup-body">
                            <div class="popup-year">Năm: ${event.year}</div>
                            <div class="popup-desc"><strong>📖 Mô tả:</strong> ${event.detailedDesc}</div>
                            <div style="font-size:0.8rem; color:#333; margin-top:8px;">
                                <strong>🎯 Nguyên nhân:</strong> ${event.causes}<br>
                                <strong>✅ Kết quả:</strong> ${event.result}<br>
                                <strong>⭐ Ảnh hưởng:</strong> ${event.impact}
                            </div>
                            <div class="popup-character">👤 ${event.character}</div>
                            
                            <!-- FUN FACTS -->
                            ${event.funFacts ? `<div style="margin-top:12px; border-top:1px solid #eee; padding-top:8px;">
                                <strong style="font-size:0.85rem; color:#1a1a2e;">🎯 Sự thật thú vị:</strong>
                                <ul style="font-size:0.75rem; color:#666; margin:6px 0 0 18px; padding:0;">
                                    ${event.funFacts.map(f => `<li>${f}</li>`).join('')}
                                </ul>
                            </div>` : ''}
                            
                            <!-- TIMELINE -->
                            ${event.timeline ? `<div style="margin-top:12px; border-top:1px solid #eee; padding-top:8px;">
                                <strong style="font-size:0.85rem; color:#1a1a2e;">📅 Timeline:</strong>
                                <div style="font-size:0.75rem; color:#666; margin:6px 0;">
                                    ${event.timeline.map(t => `<div>• <strong>${t.date}:</strong> ${t.event}</div>`).join('')}
                                </div>
                            </div>` : ''}
                            
                            <!-- KEY FIGURES -->
                            ${event.keyFigures ? `<div style="margin-top:12px; border-top:1px solid #eee; padding-top:8px;">
                                <strong style="font-size:0.85rem; color:#1a1a2e;">👥 Nhân vật chính:</strong>
                                <div style="font-size:0.75rem; color:#666; margin:6px 0;">
                                    ${event.keyFigures.map(f => `<div>• <strong>${f.name}</strong> - ${f.role}</div>`).join('')}
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                `;

                const marker = L.marker([event.lat, event.lng], {
                    icon: L.divIcon({
                        html: `<div class="custom-marker">${event.icon}</div>`,
                        className: 'marker-wrapper',
                        iconSize: [40, 40],
                        iconAnchor: [20, 20]
                    })
                }).addTo(map).bindPopup(html, { maxWidth: 320 });

                marker.eventId = event.id;
                markers.push(marker);
            });
        }

        // ════ RENDER ROUTES ════
        function renderRoutes() {
            routes.forEach(r => map.removeLayer(r));
            routes = [];

            const sortedEvents = [...filteredEvents].sort((a, b) => a.year - b.year);
            
            for (let i = 0; i < sortedEvents.length - 1; i++) {
                const from = sortedEvents[i];
                const to = sortedEvents[i + 1];

                const polyline = L.polyline(
                    [[from.lat, from.lng], [to.lat, to.lng]],
                    {
                        color: '#f39c12',
                        weight: 2,
                        opacity: 0.4,
                        dashArray: '5, 5',
                        lineCap: 'round'
                    }
                ).addTo(map);

                routes.push(polyline);
            }
        }

        // ════ RENDER TIMELINE BOTTOM ════
        function renderTimeline() {
            const timeline = document.getElementById('timelineBottom');
            
            const uniquePeriods = [...new Set(filteredEvents.map(e => e.period))];
            const sortedPeriods = periods.filter(p => uniquePeriods.includes(p.value));

            timeline.innerHTML = sortedPeriods.map(p => {
                const eventsInPeriod = filteredEvents.filter(e => e.period === p.value);
                return `
                    <div class="timeline-item" onclick="selectPeriodTimeline('${p.value}')">
                        <div class="timeline-year">${eventsInPeriod.length} sự kiện</div>
                        <div class="timeline-name">${p.label}</div>
                    </div>
                `;
            }).join('');
        }

        // ════ SELECT EVENT ════
        function selectEvent(id) {
            const event = events.find(e => e.id === id);
            if (event) {
                map.setView([event.lat, event.lng], 9);
                const marker = markers.find(m => m.eventId === id);
                if (marker) marker.openPopup();
            }
        }

        // ════ SELECT PERIOD TIMELINE ════
        function selectPeriodTimeline(period) {
            selectedPeriods = [period];
            
            document.querySelectorAll('.filter-tag').forEach(tag => {
                const text = tag.textContent.trim();
                const p = periods.find(x => x.label === text);
                if (p.value === period) {
                    tag.classList.add('active');
                } else {
                    tag.classList.remove('active');
                }
            });

            filterEvents();
        }

        // ════ FULLSCREEN ════
        document.getElementById('fullscreenBtn').addEventListener('click', function() {
            const container = document.querySelector('.container') || document.body;
            if (!document.fullscreenElement) {
                container.requestFullscreen().catch(err => alert('Cannot fullscreen'));
            } else {
                document.exitFullscreen();
            }
        });

        // Init
        init();
    </script>
</body>
</html>