const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
require('dotenv').config();

const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// SQL Server config
const sqlConfig = {
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        }
    },
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: true,
        encrypt: true,
        enableKeepAlive: true,
        connectionTimeout: 15000,
        requestTimeout: 15000
    }
};

// Test database connection
let pool;
sql.connect(sqlConfig).then(p => {
    pool = p;
    console.log('✅ Kết nối SQL Server thành công!');
}).catch(err => {
    console.error('❌ Lỗi kết nối SQL Server:', err);
});

// ══ API REGISTER ══
app.post('/api/register', async (req, res) => {
    try {
        const { fullname: name, username, email, password } = req.body;

        if (!name || !username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Vui lòng điền đầy đủ thông tin'
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: 'Mật khẩu phải ít nhất 8 ký tự'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const request = pool.request();
        request.input('name', sql.NVarChar, name);
        request.input('username', sql.NVarChar, username);
        request.input('email', sql.NVarChar, email);
        request.input('hashedPassword', sql.VarChar, hashedPassword);
        await request.query(
            `INSERT INTO Users (fullname, username, email, password) 
             VALUES (@name, @username, @email, @hashedPassword)`
        );

        res.status(201).json({
            success: true,
            message: '✅ Đăng ký thành công! Vui lòng đăng nhập.'
        });

    } catch (err) {
        console.error('❌ Lỗi register:', err.message);

        if (err.message.includes('UNIQUE')) {
            return res.status(400).json({
                success: false,
                message: '❌ Username hoặc email đã tồn tại'
            });
        }

        res.status(500).json({
            success: false,
            message: '❌ Lỗi server: ' + err.message
        });
    }
});

// ══ API LOGIN ══
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: 'Vui lòng nhập username và password'
            });
        }

        const request = pool.request();
        request.input('username', sql.NVarChar, username);
        const result = await request.query(
            `SELECT * FROM Users WHERE username = @username`
        );

        if (result.recordset.length === 0) {
            return res.status(401).json({
                success: false,
                message: '❌ Username không tồn tại'
            });
        }

        const user = result.recordset[0];

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: '❌ Mật khẩu không đúng'
            });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username, email: user.email },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: '✅ Đăng nhập thành công!',
            token: token,
            user: {
                id: user.id,
                name: user.fullname,
                username: user.username,
                email: user.email
            }
        });

    } catch (err) {
        console.error('❌ Lỗi login:', err.message);
        res.status(500).json({
            success: false,
            message: '❌ Lỗi server: ' + err.message
        });
    }
});

// ══ API LƯU LINK SƠ ĐỒ TƯ DUY ══
app.post('/api/mindmap', async (req, res) => {
    try {
        const { token, mainUrl, period0, period1, period2, period3, period4, period5 } = req.body;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: '❌ Vui lòng đăng nhập'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

        const checkRequest = pool.request();
        checkRequest.input('userId', sql.Int, decoded.id);
        const checkResult = await checkRequest.query(
            `SELECT * FROM MindmapLinks WHERE user_id = @userId`
        );

        const saveRequest = pool.request();
        saveRequest.input('userId', sql.Int, decoded.id);
        saveRequest.input('mainUrl', sql.NVarChar, mainUrl || '');
        saveRequest.input('period0', sql.NVarChar, period0 || '');
        saveRequest.input('period1', sql.NVarChar, period1 || '');
        saveRequest.input('period2', sql.NVarChar, period2 || '');
        saveRequest.input('period3', sql.NVarChar, period3 || '');
        saveRequest.input('period4', sql.NVarChar, period4 || '');
        saveRequest.input('period5', sql.NVarChar, period5 || '');

        if (checkResult.recordset.length > 0) {
            await saveRequest.query(
                `UPDATE MindmapLinks SET 
                    main_url = @mainUrl,
                    period_0 = @period0,
                    period_1 = @period1,
                    period_2 = @period2,
                    period_3 = @period3,
                    period_4 = @period4,
                    period_5 = @period5,
                    updated_at = GETDATE()
                WHERE user_id = @userId`
            );
        } else {
            await saveRequest.query(
                `INSERT INTO MindmapLinks (user_id, main_url, period_0, period_1, period_2, period_3, period_4, period_5) 
                 VALUES (@userId, @mainUrl, @period0, @period1, @period2, @period3, @period4, @period5)`
            );
        }

        res.json({
            success: true,
            message: '✅ Đã lưu sơ đồ tư duy!'
        });

    } catch (err) {
        console.error('❌ Lỗi mindmap:', err.message);
        res.status(500).json({
            success: false,
            message: '❌ Lỗi: ' + err.message
        });
    }
});

// ══ API LẤY LINK SƠ ĐỒ TƯ DUY ══
app.get('/api/mindmap', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: '❌ Vui lòng đăng nhập'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

        const request = pool.request();
        request.input('userId', sql.Int, decoded.id);
        const result = await request.query(
            `SELECT * FROM MindmapLinks WHERE user_id = @userId`
        );

        if (result.recordset.length === 0) {
            return res.json({
                success: true,
                data: null
            });
        }

        res.json({
            success: true,
            data: result.recordset[0]
        });

    } catch (err) {
        console.error('❌ Lỗi lấy mindmap:', err.message);
        res.status(500).json({
            success: false,
            message: '❌ Lỗi: ' + err.message
        });
    }
});

// ══ API GỬI REVIEW ══
app.post('/api/reviews', async (req, res) => {
    try {
        const { token, rating, categories, comment } = req.body;
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        if (!rating || rating < 1 || rating > 5)
            return res.status(400).json({ success: false, message: '❌ Rating không hợp lệ' });
        if (!comment || comment.trim().length < 10)
            return res.status(400).json({ success: false, message: '❌ Nhận xét quá ngắn' });
        const catsStr = Array.isArray(categories) ? categories.join(',') : '';
        const request = pool.request();
        request.input('userId', sql.Int, decoded.id);
        request.input('rating', sql.Int, rating);
        request.input('categories', sql.NVarChar, catsStr);
        request.input('comment', sql.NVarChar, comment.trim());
        await request.query(
            `INSERT INTO Reviews (user_id, rating, categories, comment)
             VALUES (@userId, @rating, @categories, @comment)`
        );
        res.json({ success: true, message: '✅ Đã gửi đánh giá!' });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// ══ API LẤY REVIEWS ══
app.get('/api/reviews', async (req, res) => {
    try {
        const request = pool.request();
        const result = await request.query(
            `SELECT r.id, r.rating, r.categories, r.comment, r.helpful, r.created_at,
                    u.fullname as name, LEFT(u.fullname, 1) as initial
             FROM Reviews r
             JOIN Users u ON r.user_id = u.id
             ORDER BY r.created_at DESC`
        );
        res.json({ success: true, data: result.recordset });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// ══ API VOTE HELPFUL ══
app.post('/api/reviews/helpful', async (req, res) => {
    try {
        const { token, reviewId, action } = req.body;
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const delta = action === 'add' ? 1 : -1;
        const request = pool.request();
        request.input('delta', sql.Int, delta);
        request.input('reviewId', sql.Int, reviewId);
        await request.query(`UPDATE Reviews SET helpful = helpful + @delta WHERE id = @reviewId`);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// ══ API CỘNG ĐỒNG HỎI ĐÁP ══

// Lấy danh sách câu hỏi (lọc theo topic nếu có), kèm số trả lời + reaction
app.get('/api/questions', async (req, res) => {
    try {
        const { topic } = req.query;
        let currentUserId = null;
        const headerToken = req.headers.authorization?.split(' ')[1];
        if (headerToken) {
            try { currentUserId = jwt.verify(headerToken, process.env.JWT_SECRET || 'your-secret-key').id; } catch (_) {}
        }
        const request = pool.request();
        let query = `
            SELECT q.id, q.user_id as authorId, q.title, q.content, q.topic, q.created_at,
                   u.fullname as authorName,
                   (SELECT COUNT(*) FROM Answers a WHERE a.question_id = q.id) as answerCount,
                   (SELECT COUNT(*) FROM QuestionVotes v WHERE v.question_id = q.id) as voteCount
            FROM Questions q
            JOIN Users u ON q.user_id = u.id`;
        if (topic) {
            query += ` WHERE q.topic = @topic`;
            request.input('topic', sql.NVarChar, topic);
        }
        query += ` ORDER BY q.created_at DESC`;
        const result = await request.query(query);

        let questions = result.recordset;
        if (currentUserId) {
            const vReq = pool.request();
            vReq.input('userId', sql.Int, currentUserId);
            const vResult = await vReq.query(`SELECT question_id, reaction_type FROM QuestionVotes WHERE user_id = @userId`);
            const votedMap = new Map(vResult.recordset.map(r => [r.question_id, r.reaction_type]));
            questions = questions.map(q => ({ ...q, votedType: votedMap.get(q.id) || null }));
        }

        res.json({ success: true, data: questions });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// Đăng câu hỏi mới
app.post('/api/questions', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

        const { title, content, topic } = req.body;
        if (!title || !title.trim() || !content || !content.trim())
            return res.status(400).json({ success: false, message: '❌ Vui lòng nhập đầy đủ tiêu đề và nội dung' });

        const request = pool.request();
        request.input('userId', sql.Int, decoded.id);
        request.input('title', sql.NVarChar, title.trim());
        request.input('content', sql.NVarChar, content.trim());
        request.input('topic', sql.NVarChar, topic || null);
        await request.query(
            `INSERT INTO Questions (user_id, title, content, topic)
             VALUES (@userId, @title, @content, @topic)`
        );
        res.json({ success: true, message: '✅ Đã đăng câu hỏi!' });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// Sửa câu hỏi (chỉ chủ sở hữu)
app.put('/api/questions/:id', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const questionId = req.params.id;
        const { title, content, topic } = req.body;
        if (!title || !title.trim() || !content || !content.trim())
            return res.status(400).json({ success: false, message: '❌ Vui lòng nhập đầy đủ tiêu đề và nội dung' });

        const ownerReq = pool.request();
        ownerReq.input('id', sql.Int, questionId);
        const ownerResult = await ownerReq.query(`SELECT user_id FROM Questions WHERE id = @id`);
        if (ownerResult.recordset.length === 0)
            return res.status(404).json({ success: false, message: '❌ Không tìm thấy câu hỏi' });
        if (ownerResult.recordset[0].user_id !== decoded.id)
            return res.status(403).json({ success: false, message: '❌ Bạn không có quyền sửa câu hỏi này' });

        const updReq = pool.request();
        updReq.input('id', sql.Int, questionId);
        updReq.input('title', sql.NVarChar, title.trim());
        updReq.input('content', sql.NVarChar, content.trim());
        updReq.input('topic', sql.NVarChar, topic || null);
        await updReq.query(`UPDATE Questions SET title=@title, content=@content, topic=@topic WHERE id=@id`);

        res.json({ success: true, message: '✅ Đã cập nhật câu hỏi!' });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// Xóa câu hỏi (chỉ chủ sở hữu) — xóa luôn dữ liệu liên quan
app.delete('/api/questions/:id', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const questionId = req.params.id;

        const ownerReq = pool.request();
        ownerReq.input('id', sql.Int, questionId);
        const ownerResult = await ownerReq.query(`SELECT user_id FROM Questions WHERE id = @id`);
        if (ownerResult.recordset.length === 0)
            return res.status(404).json({ success: false, message: '❌ Không tìm thấy câu hỏi' });
        if (ownerResult.recordset[0].user_id !== decoded.id)
            return res.status(403).json({ success: false, message: '❌ Bạn không có quyền xóa câu hỏi này' });

        const delAVReq = pool.request();
        delAVReq.input('id', sql.Int, questionId);
        await delAVReq.query(`DELETE FROM AnswerVotes WHERE answer_id IN (SELECT id FROM Answers WHERE question_id = @id)`);

        const delAReq = pool.request();
        delAReq.input('id', sql.Int, questionId);
        await delAReq.query(`DELETE FROM Answers WHERE question_id = @id`);

        const delQVReq = pool.request();
        delQVReq.input('id', sql.Int, questionId);
        await delQVReq.query(`DELETE FROM QuestionVotes WHERE question_id = @id`);

        const delNReq = pool.request();
        delNReq.input('id', sql.Int, questionId);
        await delNReq.query(`DELETE FROM Notifications WHERE question_id = @id`);

        const delQReq = pool.request();
        delQReq.input('id', sql.Int, questionId);
        await delQReq.query(`DELETE FROM Questions WHERE id = @id`);

        res.json({ success: true, message: '✅ Đã xóa câu hỏi!' });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// Lấy chi tiết câu hỏi + danh sách trả lời (kèm reaction, is_best, authorId)
app.get('/api/questions/:id/answers', async (req, res) => {
    try {
        const questionId = req.params.id;
        let currentUserId = null;
        const token = req.headers.authorization?.split(' ')[1];
        if (token) {
            try { currentUserId = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key').id; } catch (_) {}
        }

        const qReq = pool.request();
        qReq.input('id', sql.Int, questionId);
        const qResult = await qReq.query(
            `SELECT q.id, q.user_id as authorId, q.title, q.content, q.topic, q.created_at, u.fullname as authorName,
                    (SELECT COUNT(*) FROM QuestionVotes v WHERE v.question_id = q.id) as voteCount
             FROM Questions q JOIN Users u ON q.user_id = u.id WHERE q.id = @id`
        );
        if (qResult.recordset.length === 0)
            return res.status(404).json({ success: false, message: '❌ Không tìm thấy câu hỏi' });

        let question = qResult.recordset[0];
        if (currentUserId) {
            const qvReq = pool.request();
            qvReq.input('userId', sql.Int, currentUserId);
            qvReq.input('qId', sql.Int, questionId);
            const qvResult = await qvReq.query(`SELECT reaction_type FROM QuestionVotes WHERE user_id = @userId AND question_id = @qId`);
            question.votedType = qvResult.recordset.length > 0 ? qvResult.recordset[0].reaction_type : null;
        }

        const aReq = pool.request();
        aReq.input('id', sql.Int, questionId);
        const aResult = await aReq.query(
            `SELECT a.id, a.user_id as authorId, a.content, a.created_at, a.is_best, u.fullname as authorName,
                    (SELECT COUNT(*) FROM AnswerVotes v WHERE v.answer_id = a.id) as voteCount
             FROM Answers a JOIN Users u ON a.user_id = u.id
             WHERE a.question_id = @id
             ORDER BY a.is_best DESC, (SELECT COUNT(*) FROM AnswerVotes v WHERE v.answer_id = a.id) DESC, a.created_at ASC`
        );

        let answers = aResult.recordset;
        if (currentUserId) {
            const vReq = pool.request();
            vReq.input('userId', sql.Int, currentUserId);
            vReq.input('qId', sql.Int, questionId);
            const vResult = await vReq.query(
                `SELECT answer_id, reaction_type FROM AnswerVotes v
                 JOIN Answers a ON v.answer_id = a.id
                 WHERE v.user_id = @userId AND a.question_id = @qId`
            );
            const votedMap = new Map(vResult.recordset.map(r => [r.answer_id, r.reaction_type]));
            answers = answers.map(a => ({ ...a, votedType: votedMap.get(a.id) || null }));
        }

        res.json({ success: true, question, answers });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// Đăng trả lời cho 1 câu hỏi (+ tạo thông báo cho chủ câu hỏi)
app.post('/api/questions/:id/answers', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

        const { content } = req.body;
        if (!content || !content.trim())
            return res.status(400).json({ success: false, message: '❌ Vui lòng nhập nội dung trả lời' });

        const request = pool.request();
        request.input('questionId', sql.Int, req.params.id);
        request.input('userId', sql.Int, decoded.id);
        request.input('content', sql.NVarChar, content.trim());
        await request.query(
            `INSERT INTO Answers (question_id, user_id, content)
             VALUES (@questionId, @userId, @content)`
        );

        try {
            const qOwnerReq = pool.request();
            qOwnerReq.input('qId', sql.Int, req.params.id);
            const qOwnerResult = await qOwnerReq.query(`SELECT user_id FROM Questions WHERE id = @qId`);
            if (qOwnerResult.recordset.length > 0) {
                const ownerId = qOwnerResult.recordset[0].user_id;
                if (ownerId !== decoded.id) {
                    const nameReq = pool.request();
                    nameReq.input('uid', sql.Int, decoded.id);
                    const nameResult = await nameReq.query(`SELECT fullname FROM Users WHERE id = @uid`);
                    const actorName = nameResult.recordset[0]?.fullname || 'Người dùng';

                    const notiReq = pool.request();
                    notiReq.input('userId', sql.Int, ownerId);
                    notiReq.input('type', sql.NVarChar, 'new_answer');
                    notiReq.input('questionId', sql.Int, req.params.id);
                    notiReq.input('actorName', sql.NVarChar, actorName);
                    await notiReq.query(
                        `INSERT INTO Notifications (user_id, type, question_id, actor_name)
                         VALUES (@userId, @type, @questionId, @actorName)`
                    );
                }
            }
        } catch (notiErr) {
            console.error('❌ Lỗi tạo thông báo:', notiErr.message);
        }

        res.json({ success: true, message: '✅ Đã gửi trả lời!' });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// Sửa câu trả lời (chỉ chủ sở hữu)
app.put('/api/answers/:id', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const answerId = req.params.id;
        const { content } = req.body;
        if (!content || !content.trim())
            return res.status(400).json({ success: false, message: '❌ Vui lòng nhập nội dung trả lời' });

        const ownerReq = pool.request();
        ownerReq.input('id', sql.Int, answerId);
        const ownerResult = await ownerReq.query(`SELECT user_id FROM Answers WHERE id = @id`);
        if (ownerResult.recordset.length === 0)
            return res.status(404).json({ success: false, message: '❌ Không tìm thấy câu trả lời' });
        if (ownerResult.recordset[0].user_id !== decoded.id)
            return res.status(403).json({ success: false, message: '❌ Bạn không có quyền sửa câu trả lời này' });

        const updReq = pool.request();
        updReq.input('id', sql.Int, answerId);
        updReq.input('content', sql.NVarChar, content.trim());
        await updReq.query(`UPDATE Answers SET content = @content WHERE id = @id`);

        res.json({ success: true, message: '✅ Đã cập nhật câu trả lời!' });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// Xóa câu trả lời (chỉ chủ sở hữu)
app.delete('/api/answers/:id', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const answerId = req.params.id;

        const ownerReq = pool.request();
        ownerReq.input('id', sql.Int, answerId);
        const ownerResult = await ownerReq.query(`SELECT user_id FROM Answers WHERE id = @id`);
        if (ownerResult.recordset.length === 0)
            return res.status(404).json({ success: false, message: '❌ Không tìm thấy câu trả lời' });
        if (ownerResult.recordset[0].user_id !== decoded.id)
            return res.status(403).json({ success: false, message: '❌ Bạn không có quyền xóa câu trả lời này' });

        const delVotesReq = pool.request();
        delVotesReq.input('id', sql.Int, answerId);
        await delVotesReq.query(`DELETE FROM AnswerVotes WHERE answer_id = @id`);

        const delReq = pool.request();
        delReq.input('id', sql.Int, answerId);
        await delReq.query(`DELETE FROM Answers WHERE id = @id`);

        res.json({ success: true, message: '✅ Đã xóa câu trả lời!' });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// Đánh dấu / bỏ đánh dấu câu trả lời hay nhất (chỉ chủ câu hỏi)
app.post('/api/answers/:id/best', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const answerId = req.params.id;

        const aReq = pool.request();
        aReq.input('id', sql.Int, answerId);
        const aResult = await aReq.query(`SELECT question_id, is_best FROM Answers WHERE id = @id`);
        if (aResult.recordset.length === 0)
            return res.status(404).json({ success: false, message: '❌ Không tìm thấy câu trả lời' });
        const { question_id: questionId, is_best } = aResult.recordset[0];

        const qReq = pool.request();
        qReq.input('qId', sql.Int, questionId);
        const qResult = await qReq.query(`SELECT user_id FROM Questions WHERE id = @qId`);
        if (qResult.recordset.length === 0 || qResult.recordset[0].user_id !== decoded.id)
            return res.status(403).json({ success: false, message: '❌ Chỉ người đặt câu hỏi mới được chọn câu trả lời hay nhất' });

        const resetReq = pool.request();
        resetReq.input('qId', sql.Int, questionId);
        await resetReq.query(`UPDATE Answers SET is_best = 0 WHERE question_id = @qId`);

        if (!is_best) {
            const setReq = pool.request();
            setReq.input('id', sql.Int, answerId);
            await setReq.query(`UPDATE Answers SET is_best = 1 WHERE id = @id`);
        }

        res.json({ success: true, isBest: !is_best });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// Vote / unvote 1 câu trả lời — reaction đầy đủ (👍❤️😆😮😢😠)
app.post('/api/answers/:id/vote', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const answerId = req.params.id;
        const validTypes = ['like','love','haha','wow','sad','angry'];
        const reactionType = validTypes.includes(req.body.type) ? req.body.type : 'like';

        const checkReq = pool.request();
        checkReq.input('answerId', sql.Int, answerId);
        checkReq.input('userId', sql.Int, decoded.id);
        const checkResult = await checkReq.query(
            `SELECT id, reaction_type FROM AnswerVotes WHERE answer_id = @answerId AND user_id = @userId`
        );

        if (checkResult.recordset.length > 0) {
            const existing = checkResult.recordset[0];
            if (existing.reaction_type === reactionType) {
                const delReq = pool.request();
                delReq.input('answerId', sql.Int, answerId);
                delReq.input('userId', sql.Int, decoded.id);
                await delReq.query(`DELETE FROM AnswerVotes WHERE answer_id = @answerId AND user_id = @userId`);
                return res.json({ success: true, voted: false, type: null });
            } else {
                const updReq = pool.request();
                updReq.input('answerId', sql.Int, answerId);
                updReq.input('userId', sql.Int, decoded.id);
                updReq.input('type', sql.NVarChar, reactionType);
                await updReq.query(`UPDATE AnswerVotes SET reaction_type = @type WHERE answer_id = @answerId AND user_id = @userId`);
                return res.json({ success: true, voted: true, type: reactionType });
            }
        } else {
            const insReq = pool.request();
            insReq.input('answerId', sql.Int, answerId);
            insReq.input('userId', sql.Int, decoded.id);
            insReq.input('type', sql.NVarChar, reactionType);
            await insReq.query(`INSERT INTO AnswerVotes (answer_id, user_id, reaction_type) VALUES (@answerId, @userId, @type)`);
            return res.json({ success: true, voted: true, type: reactionType });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// Vote / unvote 1 câu hỏi — reaction đầy đủ
app.post('/api/questions/:id/vote', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const questionId = req.params.id;
        const validTypes = ['like','love','haha','wow','sad','angry'];
        const reactionType = validTypes.includes(req.body.type) ? req.body.type : 'like';

        const checkReq = pool.request();
        checkReq.input('questionId', sql.Int, questionId);
        checkReq.input('userId', sql.Int, decoded.id);
        const checkResult = await checkReq.query(
            `SELECT id, reaction_type FROM QuestionVotes WHERE question_id = @questionId AND user_id = @userId`
        );

        if (checkResult.recordset.length > 0) {
            const existing = checkResult.recordset[0];
            if (existing.reaction_type === reactionType) {
                const delReq = pool.request();
                delReq.input('questionId', sql.Int, questionId);
                delReq.input('userId', sql.Int, decoded.id);
                await delReq.query(`DELETE FROM QuestionVotes WHERE question_id = @questionId AND user_id = @userId`);
                return res.json({ success: true, voted: false, type: null });
            } else {
                const updReq = pool.request();
                updReq.input('questionId', sql.Int, questionId);
                updReq.input('userId', sql.Int, decoded.id);
                updReq.input('type', sql.NVarChar, reactionType);
                await updReq.query(`UPDATE QuestionVotes SET reaction_type = @type WHERE question_id = @questionId AND user_id = @userId`);
                return res.json({ success: true, voted: true, type: reactionType });
            }
        } else {
            const insReq = pool.request();
            insReq.input('questionId', sql.Int, questionId);
            insReq.input('userId', sql.Int, decoded.id);
            insReq.input('type', sql.NVarChar, reactionType);
            await insReq.query(`INSERT INTO QuestionVotes (question_id, user_id, reaction_type) VALUES (@questionId, @userId, @type)`);
            return res.json({ success: true, voted: true, type: reactionType });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// ══ API THÔNG BÁO ══
app.get('/api/notifications', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

        const request = pool.request();
        request.input('userId', sql.Int, decoded.id);
        const result = await request.query(
            `SELECT TOP 20 n.id, n.type, n.question_id, n.actor_name, n.is_read, n.created_at, q.title as questionTitle
             FROM Notifications n
             JOIN Questions q ON n.question_id = q.id
             WHERE n.user_id = @userId
             ORDER BY n.created_at DESC`
        );
        const unreadReq = pool.request();
        unreadReq.input('userId', sql.Int, decoded.id);
        const unreadResult = await unreadReq.query(
            `SELECT COUNT(*) as cnt FROM Notifications WHERE user_id = @userId AND is_read = 0`
        );

        res.json({ success: true, data: result.recordset, unreadCount: unreadResult.recordset[0].cnt });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

app.post('/api/notifications/read', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Vui lòng đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

        const request = pool.request();
        request.input('userId', sql.Int, decoded.id);
        await request.query(`UPDATE Notifications SET is_read = 1 WHERE user_id = @userId`);

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// 🏷️ Nếu trong danh sách có tên trùng nhau, thêm @username vào các dòng bị trùng để phân biệt
function disambiguateDuplicateNames(list) {
    const nameCount = {};
    list.forEach(row => {
        const key = (row.fullname || '').trim();
        nameCount[key] = (nameCount[key] || 0) + 1;
    });
    return list.map(row => {
        const key = (row.fullname || '').trim();
        if (nameCount[key] > 1 && row.username) {
            return { ...row, fullname: `${row.fullname} (@${row.username})` };
        }
        return row;
    });
}

// ══ API BẢNG XẾP HẠNG ══
app.get('/api/leaderboard', async (req, res) => {
    try {
        const headerToken = req.headers.authorization?.split(' ')[1];
        let currentUserId = null;
        if (headerToken) {
            try {
                const decoded = jwt.verify(headerToken, process.env.JWT_SECRET || 'your-secret-key');
                currentUserId = decoded.id;
            } catch (_) {}
        }
        const request = pool.request();
        const topResult = await request.query(`SELECT TOP 10 * FROM vw_Leaderboard WHERE exp > 0 ORDER BY rank_pos`);
        let myRank = null;
        if (currentUserId) {
            const myReq = pool.request();
            myReq.input('userId', sql.Int, currentUserId);
            const myResult = await myReq.query(`SELECT * FROM vw_Leaderboard WHERE id = @userId`);
            if (myResult.recordset.length > 0) myRank = myResult.recordset[0];
        }

        const combined = [...topResult.recordset];
        if (myRank && !combined.some(r => r.id === myRank.id)) combined.push(myRank);
        const disambiguated = disambiguateDuplicateNames(combined);
        const data = disambiguated.slice(0, topResult.recordset.length);
        const myRankFixed = myRank ? disambiguated.find(r => r.id === myRank.id) : null;

        res.json({ success: true, data, myRank: myRankFixed });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// ══ API BẢNG XẾP HẠNG TUẦN ══
app.get('/api/leaderboard/weekly', async (req, res) => {
    try {
        const headerToken = req.headers.authorization?.split(' ')[1];
        let currentUserId = null;
        if (headerToken) {
            try {
                const decoded = jwt.verify(headerToken, process.env.JWT_SECRET || 'your-secret-key');
                currentUserId = decoded.id;
            } catch (_) {}
        }
        const request = pool.request();
        const topResult = await request.query(`SELECT TOP 10 * FROM vw_WeeklyLeaderboard WHERE weekly_exp > 0 ORDER BY rank_pos`);
        let myRank = null;
        if (currentUserId) {
            const myReq = pool.request();
            myReq.input('userId', sql.Int, currentUserId);
            const myResult = await myReq.query(`SELECT * FROM vw_WeeklyLeaderboard WHERE id = @userId`);
            if (myResult.recordset.length > 0) myRank = myResult.recordset[0];
        }

        const combined = [...topResult.recordset];
        if (myRank && !combined.some(r => r.id === myRank.id)) combined.push(myRank);
        const disambiguated = disambiguateDuplicateNames(combined);
        const data = disambiguated.slice(0, topResult.recordset.length);
        const myRankFixed = myRank ? disambiguated.find(r => r.id === myRank.id) : null;

        res.json({ success: true, data, myRank: myRankFixed });
    } catch (err) {
        res.status(500).json({ success: false, message: '❌ Lỗi: ' + err.message });
    }
});

// ══ API CỘNG EXP (có giới hạn chống gian lận) ══
const EXP_MAX_PER_REQUEST = 500;   // tối đa mỗi lần gọi
const EXP_MAX_PER_DAY     = 1500;  // tối đa mỗi ngày cho mỗi tài khoản

app.post('/api/exp/add', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ success: false, message: '❌ Chưa đăng nhập' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

        let amount = Number(req.body.amount);
        if (!Number.isInteger(amount) || amount <= 0)
            return res.status(400).json({ success: false, message: '❌ EXP không hợp lệ' });
        amount = Math.min(amount, EXP_MAX_PER_REQUEST);
        const sourceType = String(req.body.source_type || 'GAME').slice(0, 50);
        const note = String(req.body.note || '').slice(0, 600);

        const r = pool.request();
        r.input('userId', sql.Int, decoded.id);
        r.input('amount', sql.Int, amount);
        r.input('dailyCap', sql.Int, EXP_MAX_PER_DAY);
        r.input('sourceType', sql.VarChar(50), sourceType);
        r.input('note', sql.NVarChar(600), note);

        // Tính tổng EXP hôm nay, cộng phần còn trong hạn mức, ghi log: tất cả trong 1 giao dịch
        const q = await r.query(`
            SET XACT_ABORT ON;
            BEGIN TRAN;
            DECLARE @used INT = (
                SELECT ISNULL(SUM(exp_amount), 0)
                FROM ExpLogs WITH (UPDLOCK, HOLDLOCK)
                WHERE user_id = @userId
                  AND created_at >= CAST(CAST(GETDATE() AS DATE) AS DATETIME));
            DECLARE @grant INT = CASE WHEN @used + @amount > @dailyCap THEN @dailyCap - @used ELSE @amount END;
            IF @grant < 0 SET @grant = 0;
            IF @grant > 0
            BEGIN
                UPDATE Users SET exp = exp + @grant, level = (exp + @grant) / 300 + 1 WHERE id = @userId;
                INSERT INTO ExpLogs (user_id, source_type, exp_amount, note)
                VALUES (@userId, @sourceType, @grant, @note);
            END
            SELECT exp, level, @grant AS granted FROM Users WHERE id = @userId;
            COMMIT;
        `);

        const row = q.recordset[0];
        res.json({
            success: true,
            newExp: row.exp,
            newLevel: row.level,
            granted: row.granted,
            capped: row.granted < Number(req.body.amount)
        });
    } catch (err) {
        console.error('❌ exp/add:', err.message);
        res.status(500).json({ success: false, message: '❌ Lỗi máy chủ' });
    }
});

// ══ API ĐỌC TRUYỆN (TTS) ══
app.post('/api/tts', async (req, res) => {
    try {
        const { text } = req.body;
        if (!text || !text.trim()) {
            return res.status(400).json({ success: false, message: '❌ Thiếu nội dung cần đọc' });
        }

        const tts = new MsEdgeTTS();
        await tts.setMetadata('vi-VN-HoaiMyNeural', OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
        const { audioStream } = await tts.toStream(text);

        res.setHeader('Content-Type', 'audio/mpeg');
        audioStream.pipe(res);
    } catch (err) {
        console.error('❌ Lỗi TTS:', err.message);
        res.status(500).json({ success: false, message: '❌ Lỗi TTS: ' + err.message });
    }
});

// ══ API PROXY CHO GEMINI (giấu khóa) ══
async function callGeminiWithRetry(contents, maxRetries = 3) {
    const MODEL = 'gemini-3.1-flash-lite';

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': process.env.GEMINI_API_KEY
                },
                body: JSON.stringify({ contents })
            }
        );

        const data = await response.json();

        if (response.ok) {
            return { ok: true, status: response.status, data };
        }

        const isOverloaded = response.status === 503;
        const isLastAttempt = attempt === maxRetries - 1;

        if (isOverloaded && !isLastAttempt) {
            const delay = 1000 * Math.pow(2, attempt);
            console.log(`⏳ Model quá tải (503), thử lại lần ${attempt + 1} sau ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
        }

        return { ok: false, status: response.status, data };
    }
}

app.post('/api/chat', async (req, res) => {
    try {
        const contents = req.body.contents || [];

        const result = await callGeminiWithRetry(contents);

        if (!result.ok) {
            console.error('❌ Gemini API lỗi:', result.status, JSON.stringify(result.data));
            return res.status(result.status).json(result.data);
        }

        res.json(result.data);
    } catch (err) {
        console.error('❌ Lỗi Gemini:', err.message);
        res.status(500).json({ success: false, message: '❌ Lỗi Gemini: ' + err.message });
    }
});

// ══ API HUY HIỆU NFT (chữ ký EIP-712) ══
require('./nft-routes')(app, { getPool: () => pool, sql, jwt });

// ══ START SERVER ══
const path = require('path');
const WEB_DIR = 'D:\\thư mục của tôi\\JDBC\\history_webside';
app.use(express.static(WEB_DIR));
app.get('/', (req, res) => res.sendFile(path.join(WEB_DIR, 'index.html')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});