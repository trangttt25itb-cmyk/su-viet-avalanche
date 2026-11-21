-- ╔════════════════════════════════════════════╗
-- ║ SỬ VIỆT - GAMIFICATION: NHIỆM VỤ, THÀNH TỰU, XẾP HẠNG    ║
-- ╚════════════════════════════════════════════╝

USE SuViet;
GO

-- ══ THÊM CỘT EXP & LEVEL VÀO BẢNG USERS ══
IF NOT EXISTS (SELECT * FROM sys.columns WHERE name = 'exp' AND object_id = OBJECT_ID('Users'))
    ALTER TABLE Users ADD exp INT DEFAULT 0;

IF NOT EXISTS (SELECT * FROM sys.columns WHERE name = 'level' AND object_id = OBJECT_ID('Users'))
    ALTER TABLE Users ADD level INT DEFAULT 1;

IF NOT EXISTS (SELECT * FROM sys.columns WHERE name = 'rank_title' AND object_id = OBJECT_ID('Users'))
    ALTER TABLE Users ADD rank_title NVARCHAR(50) DEFAULT N'Học Sinh';

IF NOT EXISTS (SELECT * FROM sys.columns WHERE name = 'avatar' AND object_id = OBJECT_ID('Users'))
    ALTER TABLE Users ADD avatar NVARCHAR(500) DEFAULT NULL;

IF NOT EXISTS (SELECT * FROM sys.columns WHERE name = 'last_login' AND object_id = OBJECT_ID('Users'))
    ALTER TABLE Users ADD last_login DATE DEFAULT NULL;

GO
PRINT N'✅ Cập nhật bảng Users (exp, level, rank_title, avatar, last_login)';

-- ══ BẢNG DAILY MISSIONS ══
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='DailyMissions' AND xtype='U')
BEGIN
CREATE TABLE DailyMissions (
    id          INT PRIMARY KEY IDENTITY(1,1),
    code        VARCHAR(50)   UNIQUE NOT NULL,
    title       NVARCHAR(200) NOT NULL,
    description NVARCHAR(500),
    exp_reward  INT           DEFAULT 10,
    icon        NVARCHAR(10)  DEFAULT N'🎯',
    sort_order  INT           DEFAULT 0
);
END
GO

IF NOT EXISTS (SELECT * FROM DailyMissions WHERE code = N'LOGIN_DAILY')
INSERT INTO DailyMissions (code, title, description, exp_reward, icon, sort_order) VALUES
(N'LOGIN_DAILY',   N'Đăng nhập hàng ngày',          N'Đăng nhập vào hệ thống mỗi ngày',                    10, N'📅', 1),
(N'LEARN_STORY',   N'Học 1 bài lịch sử',            N'Đọc ít nhất 1 câu chuyện lịch sử trong ngày',        20, N'📖', 2),
(N'QUIZ_5',        N'Trả lời 5 câu hỏi quiz',        N'Hoàn thành ít nhất 5 câu hỏi trong phần quiz',       30, N'❓', 3),
(N'CORRECT_3',     N'Trả lời đúng 3 câu liên tiếp',  N'Chuỗi 3 câu đúng liên tiếp trong quiz',              25, N'🎯', 4),
(N'VIEW_MINDMAP',  N'Xem 1 sơ đồ tư duy',            N'Mở và xem ít nhất 1 sơ đồ tư duy trong ngày',        15, N'🧠', 5),
(N'SHARE_STORY',   N'Chia sẻ 1 câu chuyện',          N'Chia sẻ bất kỳ câu chuyện lịch sử nào ra ngoài',     20, N'📢', 6);
GO
PRINT N'✅ Tạo bảng DailyMissions & chèn 6 nhiệm vụ mẫu';

-- ══ BẢNG TIẾN TRÌNH NHIỆM VỤ CỦA USER ══
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='UserDailyProgress' AND xtype='U')
BEGIN
CREATE TABLE UserDailyProgress (
    id              INT PRIMARY KEY IDENTITY(1,1),
    user_id         INT      NOT NULL,
    mission_id      INT      NOT NULL,
    mission_date    DATE     NOT NULL DEFAULT CAST(GETDATE() AS DATE),
    current_count   INT      DEFAULT 0,
    required_count  INT      DEFAULT 1,
    is_completed    BIT      DEFAULT 0,
    completed_at    DATETIME NULL,
    exp_claimed     BIT      DEFAULT 0,
    FOREIGN KEY (user_id)    REFERENCES Users(id)         ON DELETE CASCADE,
    FOREIGN KEY (mission_id) REFERENCES DailyMissions(id) ON DELETE CASCADE,
    CONSTRAINT uq_user_mission_date UNIQUE (user_id, mission_id, mission_date)
);
END
GO
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name='idx_udp_user_date')
    CREATE INDEX idx_udp_user_date ON UserDailyProgress(user_id, mission_date);
PRINT N'✅ Tạo bảng UserDailyProgress';

-- ══ BẢNG THÀNH TỰU ══
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Achievements' AND xtype='U')
BEGIN
CREATE TABLE Achievements (
    id              INT PRIMARY KEY IDENTITY(1,1),
    code            VARCHAR(80)   UNIQUE NOT NULL,
    title           NVARCHAR(200) NOT NULL,
    description     NVARCHAR(500),
    icon            NVARCHAR(10)  DEFAULT N'🏆',
    rarity          VARCHAR(20)   DEFAULT 'common'
                                  CHECK (rarity IN ('common','rare','epic','legendary')),
    exp_reward      INT           DEFAULT 50,
    condition_type  VARCHAR(50),
    condition_value INT           DEFAULT 1
);
END
GO

IF NOT EXISTS (SELECT * FROM Achievements WHERE code = N'LOGIN_3')
INSERT INTO Achievements (code, title, description, icon, rarity, exp_reward, condition_type, condition_value) VALUES
(N'LOGIN_3',        N'Khởi đầu hành trình',     N'Đăng nhập 3 ngày liên tiếp',            N'🌱', 'common',    50,  N'LOGIN_STREAK',  3),
(N'LOGIN_7',        N'Học sinh chuyên cần',      N'Đăng nhập 7 ngày liên tiếp',            N'📅', 'common',    100, N'LOGIN_STREAK',  7),
(N'LOGIN_30',       N'Chiến binh kiên trì',      N'Đăng nhập 30 ngày liên tiếp',           N'🔥', 'rare',      300, N'LOGIN_STREAK',  30),
(N'LOGIN_100',      N'Hào Kiệt Việt Nam',        N'Đăng nhập 100 ngày liên tiếp',          N'👑', 'legendary', 1000,N'LOGIN_STREAK',  100),
(N'QUIZ_10',        N'Người học hỏi',            N'Hoàn thành 10 câu quiz',                N'❓', 'common',    50,  N'QUIZ_TOTAL',    10),
(N'QUIZ_50',        N'Thư sinh uyên bác',        N'Hoàn thành 50 câu quiz',                N'📚', 'common',    150, N'QUIZ_TOTAL',    50),
(N'QUIZ_100',       N'Học giả lịch sử',          N'Hoàn thành 100 câu quiz',               N'🎓', 'rare',      300, N'QUIZ_TOTAL',    100),
(N'QUIZ_500',       N'Sử gia vĩ đại',            N'Hoàn thành 500 câu quiz',               N'⭐', 'epic',      800, N'QUIZ_TOTAL',    500),
(N'STORY_5',        N'Ham học hỏi',              N'Đọc 5 câu chuyện lịch sử',              N'📖', 'common',    50,  N'STORY_READ',    5),
(N'STORY_20',       N'Người yêu sử',             N'Đọc 20 câu chuyện lịch sử',             N'📜', 'rare',      200, N'STORY_READ',    20),
(N'STORY_ALL',      N'Thông sử Việt Nam',        N'Đọc đủ tất cả câu chuyện',              N'🏛️', 'legendary', 1500,N'STORY_READ',    100),
(N'EXP_500',        N'Tân Binh',                 N'Đạt 500 EXP',                           N'🥉', 'common',    0,   N'EXP_TOTAL',     500),
(N'EXP_2000',       N'Chiến Binh',               N'Đạt 2.000 EXP',                         N'🥈', 'common',    0,   N'EXP_TOTAL',     2000),
(N'EXP_5000',       N'Dũng Sĩ',                  N'Đạt 5.000 EXP',                         N'🥇', 'rare',      0,   N'EXP_TOTAL',     5000),
(N'EXP_10000',      N'Anh Hùng',                 N'Đạt 10.000 EXP',                        N'🏆', 'epic',      0,   N'EXP_TOTAL',     10000),
(N'FIRST_QUIZ',     N'Lần đầu thử thách',        N'Hoàn thành bài quiz đầu tiên',          N'🎯', 'common',    30,  N'QUIZ_TOTAL',    1),
(N'PERFECT_QUIZ',   N'Trăm phần trăm',           N'Đạt điểm tuyệt đối trong 1 bài quiz',  N'💯', 'epic',      500, N'PERFECT_QUIZ',  1),
(N'REVIEW_SUBMIT',  N'Tiếng nói cộng đồng',      N'Gửi đánh giá đầu tiên',                N'💬', 'common',    30,  N'REVIEW_SUBMIT', 1);
GO
PRINT N'✅ Tạo bảng Achievements & chèn 18 thành tựu mẫu';

-- ══ BẢNG THÀNH TỰU CỦA USER ══
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='UserAchievements' AND xtype='U')
BEGIN
CREATE TABLE UserAchievements (
    id             INT PRIMARY KEY IDENTITY(1,1),
    user_id        INT      NOT NULL,
    achievement_id INT      NOT NULL,
    unlocked_at    DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id)        REFERENCES Users(id)        ON DELETE CASCADE,
    FOREIGN KEY (achievement_id) REFERENCES Achievements(id) ON DELETE CASCADE,
    CONSTRAINT uq_user_achievement UNIQUE (user_id, achievement_id)
);
END
GO
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name='idx_ua_user_id')
    CREATE INDEX idx_ua_user_id ON UserAchievements(user_id);
PRINT N'✅ Tạo bảng UserAchievements';

-- ══ BẢNG EXP LOGS ══
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='ExpLogs' AND xtype='U')
BEGIN
CREATE TABLE ExpLogs (
    id          INT PRIMARY KEY IDENTITY(1,1),
    user_id     INT          NOT NULL,
    source_type VARCHAR(50)  NOT NULL,
    source_id   INT          NULL,
    exp_amount  INT          NOT NULL,
    note        NVARCHAR(300),
    created_at  DATETIME     DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
END
GO
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name='idx_exp_user_date')
    CREATE INDEX idx_exp_user_date ON ExpLogs(user_id, created_at);
PRINT N'✅ Tạo bảng ExpLogs';

-- ══ VIEW: BẢNG XẾP HẠNG ══
GO
IF OBJECT_ID('vw_Leaderboard', 'V') IS NOT NULL
    DROP VIEW vw_Leaderboard;
GO
CREATE VIEW vw_Leaderboard AS
SELECT
    ROW_NUMBER() OVER (ORDER BY u.exp DESC) AS rank_pos,
    u.id,
    u.fullname,
    u.username,
    u.exp,
    u.level,
    u.rank_title,
    u.avatar,
    (SELECT COUNT(*) FROM UserAchievements ua WHERE ua.user_id = u.id) AS achievement_count
FROM Users u;
GO
PRINT N'✅ Tạo view vw_Leaderboard';

-- ══ VIEW: TÓM TẮT THÀNH TỰU CỦA USER ══
IF OBJECT_ID('vw_UserAchievementSummary', 'V') IS NOT NULL
    DROP VIEW vw_UserAchievementSummary;
GO
CREATE VIEW vw_UserAchievementSummary AS
SELECT
    u.id          AS user_id,
    u.fullname,
    COUNT(ua.id)  AS total_unlocked,
    SUM(a.exp_reward) AS total_achievement_exp,
    MAX(ua.unlocked_at) AS last_unlock_at
FROM Users u
LEFT JOIN UserAchievements ua ON ua.user_id = u.id
LEFT JOIN Achievements a      ON a.id = ua.achievement_id
GROUP BY u.id, u.fullname;
GO
PRINT N'✅ Tạo view vw_UserAchievementSummary';

-- ══ DỮ LIỆU MẪU: THÊM 5 USER ══
IF NOT EXISTS (SELECT * FROM Users WHERE username = N'anhunviet')
INSERT INTO Users (fullname, username, email, password, exp, level, rank_title, last_login) VALUES
(N'Nguyễn Văn Hùng',    N'anhunviet',  N'hunviet@gmail.com',   '$2a$10$examplehash1111111111111111111111111111111111111111111', 5680, 18, N'Anh Hùng Việt', CAST(GETDATE() AS DATE)),
(N'Lê Thị Nhỏ',         N'sugianhob',  N'sunho@gmail.com',      '$2a$10$examplehash2222222222222222222222222222222222222222222', 3890, 13, N'Sử Gia Nhỏ',   CAST(GETDATE() AS DATE)),
(N'Phạm Hào Kiệt',      N'haoViet',    N'haoviet@gmail.com',    '$2a$10$examplehash3333333333333333333333333333333333333333333', 3120, 10, N'Hào Kiệt Việt',CAST(GETDATE() AS DATE)),
(N'Trần Thị Thùy Trang', N'thuytrang', N'thuytrang@gmail.com',  '$2a$10$examplehash4444444444444444444444444444444444444444444', 1250, 5,  N'Chiến Binh',   CAST(GETDATE() AS DATE)),
(N'Võ Minh Khoa',        N'minhkhoa',  N'minhkhoa@gmail.com',   '$2a$10$examplehash5555555555555555555555555555555555555555555', 870,  3,  N'Học Sinh',     CAST(GETDATE() AS DATE));
GO

-- Gán thành tựu cho user mẫu
INSERT INTO UserAchievements (user_id, achievement_id)
SELECT u.id, a.id FROM Users u, Achievements a
WHERE u.username = N'anhunviet' 
  AND a.code IN (N'LOGIN_3',N'LOGIN_7',N'LOGIN_30',N'QUIZ_10',N'QUIZ_50',N'QUIZ_100',N'STORY_5',N'STORY_20',N'EXP_500',N'EXP_2000',N'EXP_5000',N'FIRST_QUIZ',N'PERFECT_QUIZ')
  AND NOT EXISTS (SELECT 1 FROM UserAchievements ua WHERE ua.user_id = u.id AND ua.achievement_id = a.id);

INSERT INTO UserAchievements (user_id, achievement_id)
SELECT u.id, a.id FROM Users u, Achievements a
WHERE u.username = N'sugianhob' 
  AND a.code IN (N'LOGIN_3',N'LOGIN_7',N'QUIZ_10',N'QUIZ_50',N'STORY_5',N'EXP_500',N'EXP_2000',N'FIRST_QUIZ')
  AND NOT EXISTS (SELECT 1 FROM UserAchievements ua WHERE ua.user_id = u.id AND ua.achievement_id = a.id);

INSERT INTO UserAchievements (user_id, achievement_id)
SELECT u.id, a.id FROM Users u, Achievements a
WHERE u.username = N'thuytrang' 
  AND a.code IN (N'LOGIN_3',N'QUIZ_10',N'STORY_5',N'EXP_500',N'FIRST_QUIZ',N'REVIEW_SUBMIT')
  AND NOT EXISTS (SELECT 1 FROM UserAchievements ua WHERE ua.user_id = u.id AND ua.achievement_id = a.id);
GO

-- Nhiệm vụ hôm nay cho thuytrang
INSERT INTO UserDailyProgress (user_id, mission_id, mission_date, current_count, required_count, is_completed, completed_at, exp_claimed)
SELECT u.id, m.id, CAST(GETDATE() AS DATE),
    CASE m.code WHEN N'LOGIN_DAILY' THEN 1 ELSE 0 END,
    CASE m.code WHEN N'QUIZ_5' THEN 5 ELSE 1 END,
    CASE m.code WHEN N'LOGIN_DAILY' THEN 1 ELSE 0 END,
    CASE m.code WHEN N'LOGIN_DAILY' THEN GETDATE() ELSE NULL END,
    CASE m.code WHEN N'LOGIN_DAILY' THEN 1 ELSE 0 END
FROM Users u, DailyMissions m
WHERE u.username = N'thuytrang'
  AND NOT EXISTS (
    SELECT 1 FROM UserDailyProgress udp 
    WHERE udp.user_id = u.id AND udp.mission_id = m.id AND udp.mission_date = CAST(GETDATE() AS DATE)
  );
GO

-- EXP Logs mẫu
INSERT INTO ExpLogs (user_id, source_type, exp_amount, note)
SELECT u.id, N'DAILY_LOGIN', 10, N'Đăng nhập ngày ' + CONVERT(NVARCHAR, GETDATE(), 103)
FROM Users u WHERE u.username = N'thuytrang';
GO

PRINT N'';
PRINT N'══════════════════════════════════════════════';
PRINT N'✅ HOÀN TẤT! Các bảng đã tạo:';
PRINT N'   • Users          (cập nhật thêm exp/level)';
PRINT N'   • DailyMissions  (6 nhiệm vụ hàng ngày)';
PRINT N'   • UserDailyProgress';
PRINT N'   • Achievements   (18 thành tựu)';
PRINT N'   • UserAchievements';
PRINT N'   • ExpLogs';
PRINT N'   • vw_Leaderboard (view xếp hạng)';
PRINT N'   • vw_UserAchievementSummary';
PRINT N'   • 5 user mẫu có dữ liệu thực tế';
PRINT N'══════════════════════════════════════════════';

USE SuViet;

-- Thêm 5 user ảo (mật khẩu: Test@1234)
INSERT INTO Users (fullname, username, email, password, exp, level, rank_title, last_login)
VALUES
(N'Nguyễn Anh Kiệt',   N'anhkiet_sv',   N'anhkiet@suviet.vn',   '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p84yszMAkz4OOkW0jl3eHi', 8500, 28, N'Huyền Thoại Lịch Sử', CAST(GETDATE() AS DATE)),
(N'Trần Minh Đức',     N'minhduc_sv',   N'minhduc@suviet.vn',    '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p84yszMAkz4OOkW0jl3eHi', 6200, 21, N'Bậc Thầy Sử Học',     CAST(GETDATE() AS DATE)),
(N'Lê Thị Hoa',        N'hoale_sv',     N'hoale@suviet.vn',      '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p84yszMAkz4OOkW0jl3eHi', 4100, 14, N'Đại Nhân Lịch Sử',    CAST(GETDATE() AS DATE)),
(N'Phạm Văn Long',     N'pvlong_sv',    N'pvlong@suviet.vn',     '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p84yszMAkz4OOkW0jl3eHi', 2300, 8,  N'Hiệp Sĩ Sử Học',      CAST(GETDATE() AS DATE)),
(N'Võ Thị Lan Anh',   N'lananh_sv',    N'lananh@suviet.vn',     '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p84yszMAkz4OOkW0jl3eHi', 950,  4,  N'Dũng Sĩ Lịch Sử',     CAST(GETDATE() AS DATE));

SELECT id, fullname, username FROM Users ORDER BY id DESC;
-- Bước 1: Xóa constraint và index username
DROP INDEX idx_users_username ON Users;
ALTER TABLE Users DROP CONSTRAINT UQ__Users__F3DBC572CE0DDAB6;

-- Xóa thêm constraint và index email
DROP INDEX idx_users_email ON Users;
ALTER TABLE Users DROP CONSTRAINT UQ__Users__AB6E6164102702A9;

-- Bước 2: Đổi kiểu cột
ALTER TABLE Users ALTER COLUMN fullname NVARCHAR(255);
ALTER TABLE Users ALTER COLUMN username NVARCHAR(100);
ALTER TABLE Users ALTER COLUMN email NVARCHAR(255);

-- Bước 3: Tạo lại constraint và index
ALTER TABLE Users ADD CONSTRAINT UQ_Users_username UNIQUE (username);
CREATE INDEX idx_users_username ON Users(username);
ALTER TABLE Users ADD CONSTRAINT UQ_Users_email UNIQUE (email);
CREATE INDEX idx_users_email ON Users(email);

SELECT name, type_desc FROM sys.objects 
WHERE parent_object_id = OBJECT_ID('Users') 
AND type IN ('UQ', 'PK');

-- Xóa constraint email còn lại
DROP INDEX idx_users_email ON Users;
ALTER TABLE Users DROP CONSTRAINT UQ__Users__AB6E6164102702A9;

-- Đổi kiểu cột email
ALTER TABLE Users ALTER COLUMN email NVARCHAR(255);

-- Tạo lại
ALTER TABLE Users ADD CONSTRAINT UQ_Users_email UNIQUE (email);
CREATE INDEX idx_users_email ON Users(email);

UPDATE Users SET fullname = N'Huỳnh Minh Thư' WHERE username = 'thuhm';

UPDATE Users SET exp = 0 WHERE exp IS NULL;
UPDATE Users SET level = 1 WHERE level IS NULL;

CREATE TRIGGER trg_Users_UpdateRankTitle
ON Users
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    IF UPDATE(level)
    BEGIN
        UPDATE u
        SET rank_title = CASE
            WHEN i.level >= 28 THEN N'Huyền Thoại Lịch Sử'
            WHEN i.level >= 21 THEN N'Bậc Thầy Sử Học'
            WHEN i.level >= 14 THEN N'Đại Nhân Lịch Sử'
            WHEN i.level >= 8  THEN N'Hiệp Sĩ Sử Học'
            WHEN i.level >= 4  THEN N'Dũng Sĩ Lịch Sử'
            WHEN i.level >= 3  THEN N'Chiến Binh Sử'
            WHEN i.level >= 2  THEN N'Học Trò Lịch Sử'
            ELSE N'Sử Học Sinh'
        END
        FROM Users u
        INNER JOIN inserted i ON u.id = i.id;
    END
END;
UPDATE Users
SET rank_title = CASE
    WHEN level >= 28 THEN N'Huyền Thoại Lịch Sử'
    WHEN level >= 21 THEN N'Bậc Thầy Sử Học'
    WHEN level >= 14 THEN N'Đại Nhân Lịch Sử'
    WHEN level >= 8  THEN N'Hiệp Sĩ Sử Học'
    WHEN level >= 4  THEN N'Dũng Sĩ Lịch Sử'
    WHEN level >= 3  THEN N'Chiến Binh Sử'
    WHEN level >= 2  THEN N'Học Trò Lịch Sử'
    ELSE N'Sử Học Sinh'
END;

SELECT username, level, rank_title FROM Users ORDER BY level DESC;

-- ══ VIEW: BẢNG XẾP HẠNG TUẦN ══
IF OBJECT_ID('vw_WeeklyLeaderboard', 'V') IS NOT NULL
    DROP VIEW vw_WeeklyLeaderboard;
GO
CREATE VIEW vw_WeeklyLeaderboard AS
SELECT
    ROW_NUMBER() OVER (ORDER BY SUM(el.exp_amount) DESC) AS rank_pos,
    u.id,
    u.fullname,
    u.username,
    u.avatar,
    u.rank_title,
    SUM(el.exp_amount) AS weekly_exp
FROM ExpLogs el
JOIN Users u ON u.id = el.user_id
WHERE el.exp_amount > 0
  AND el.created_at >= DATEADD(DAY, DATEDIFF(DAY, 0, GETDATE()) / 7 * 7, 0)
GROUP BY u.id, u.fullname, u.username, u.avatar, u.rank_title;
GO
PRINT N'✅ Tạo view vw_WeeklyLeaderboard';

-- ══ BẢNG CÂU HỎI ══
CREATE TABLE Questions (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    title NVARCHAR(255) NOT NULL,
    content NVARCHAR(MAX) NOT NULL,
    topic NVARCHAR(100) NULL,          -- vd: 'Văn Lang - Âu Lạc', 'Nhà Trần'...
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- ══ BẢNG TRẢ LỜI ══
CREATE TABLE Answers (
    id INT IDENTITY(1,1) PRIMARY KEY,
    question_id INT NOT NULL,
    user_id INT NOT NULL,
    content NVARCHAR(MAX) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (question_id) REFERENCES Questions(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- ══ BẢNG VOTE CÂU TRẢ LỜI ══
CREATE TABLE AnswerVotes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    answer_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (answer_id) REFERENCES Answers(id),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    CONSTRAINT UQ_AnswerVote UNIQUE (answer_id, user_id)   -- 1 user chỉ vote 1 lần / câu trả lời
);

CREATE TABLE QuestionVotes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    question_id INT NOT NULL FOREIGN KEY REFERENCES Questions(id),
    user_id INT NOT NULL FOREIGN KEY REFERENCES Users(id),
    created_at DATETIME DEFAULT GETDATE(),
    CONSTRAINT UQ_QuestionVote UNIQUE (question_id, user_id)
);
ALTER TABLE QuestionVotes ADD reaction_type NVARCHAR(20) NOT NULL DEFAULT 'like';

-- 1) Đánh dấu câu trả lời hay nhất
ALTER TABLE Answers ADD is_best BIT NOT NULL DEFAULT 0;

-- 2) Reaction đầy đủ (👍❤️😆😮😢😠) cho câu trả lời, giống câu hỏi
ALTER TABLE AnswerVotes ADD reaction_type NVARCHAR(20) NOT NULL DEFAULT 'like';

-- 3) Bảng thông báo
CREATE TABLE Notifications (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL FOREIGN KEY REFERENCES Users(id),
    type NVARCHAR(30) NOT NULL,
    question_id INT NOT NULL,
    actor_name NVARCHAR(200),
    is_read BIT NOT NULL DEFAULT 0,
    created_at DATETIME DEFAULT GETDATE()
);

ALTER TABLE Answers ADD is_best BIT NOT NULL DEFAULT 0;


ALTER TABLE AnswerVotes ADD reaction_type NVARCHAR(20) NOT NULL DEFAULT 'like';
   SELECT TOP 5 * FROM ExpLogs ORDER BY id DESC;

   SELECT id, username, email, fullname, exp, level FROM Users ORDER BY id;