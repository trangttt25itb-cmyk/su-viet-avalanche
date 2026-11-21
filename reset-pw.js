const sql = require('mssql');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const [, , who, newPass] = process.argv;
if (!who || !newPass) {
    console.log('Cách dùng: node reset-pw.js <username hoặc email> <mật khẩu mới>');
    process.exit(1);
}
if (newPass.length < 8) {
    console.log('Mật khẩu mới phải ít nhất 8 ký tự');
    process.exit(1);
}

const sqlConfig = {
    authentication: { type: 'default', options: { userName: process.env.DB_USER, password: process.env.DB_PASSWORD } },
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: { trustServerCertificate: true, encrypt: true, connectionTimeout: 15000, requestTimeout: 15000 }
};

(async () => {
    try {
        const pool = await sql.connect(sqlConfig);
        const hash = await bcrypt.hash(newPass, 10);
        const r = pool.request();
        r.input('who', sql.NVarChar, who);
        r.input('hash', sql.VarChar, hash);
        const out = await r.query(
            `UPDATE Users SET password = @hash WHERE username = @who OR email = @who;
             SELECT username, email FROM Users WHERE username = @who OR email = @who;`
        );
        const rows = out.recordset || [];
        if (rows.length === 0) {
            console.log('❌ Không tìm thấy tài khoản nào khớp với: ' + who);
        } else {
            console.log('✅ Đã đổi mật khẩu cho tài khoản (username): ' + rows.map(x => x.username).join(', '));
        }
        await pool.close();
    } catch (e) {
        console.error('❌ Lỗi:', e.message);
    }
})();