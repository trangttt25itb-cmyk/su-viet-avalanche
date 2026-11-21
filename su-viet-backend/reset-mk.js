require('dotenv').config();
const sql = require('mssql');
const bcrypt = require('bcryptjs');
(async () => {
  const pool = await sql.connect({
    authentication: { type: 'default', options: { userName: process.env.DB_USER, password: process.env.DB_PASSWORD } },
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: { trustServerCertificate: true, encrypt: true }
  });
  const hash = await bcrypt.hash('SuViet@2026', 10);
  const r = await pool.request()
    .input('h', sql.VarChar, hash)
    .input('u', sql.NVarChar, 'thuytrang')
    .query('UPDATE Users SET password=@h WHERE username=@u');
  console.log('Đã cập nhật', r.rowsAffected[0], 'tài khoản');
  process.exit();
})();