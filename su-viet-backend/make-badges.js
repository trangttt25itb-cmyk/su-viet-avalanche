// Cách dùng (trong thư mục su-viet-backend):
//   node make-badges.js https://TENGITHUB.github.io/su-viet-badges/badges
// Script tạo thư mục "badges" gồm 1.json..4.json và 1.svg..4.svg.
// Tham số là địa chỉ công khai SẼ chứa thư mục badges (không có dấu / ở cuối).
const fs = require('fs');
const path = require('path');

const base = (process.argv[2] || '').replace(/\/+$/, '');
if (!/^https:\/\//.test(base)) {
    console.log('Cách dùng: node make-badges.js https://trangttt25itb-cmyk.github.io/su-viet-badges/badges/');
    process.exit(1);
}

// Khớp với BADGES trong nft-routes.js
const BADGES = {
    1: { name: 'Học trò Sử Việt', minLevel: 2,  color: '#8b5a2b' },
    2: { name: 'Người kể sử',     minLevel: 4,  color: '#a0261c' },
    3: { name: 'Sử gia tập sự',   minLevel: 7,  color: '#1f5f8b' },
    4: { name: 'Nhà sử học',      minLevel: 10, color: '#b8860b' }
};

const out = path.join(__dirname, 'badges');
fs.mkdirSync(out, { recursive: true });

for (const [id, b] of Object.entries(BADGES)) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="48" fill="#2b1a10"/>
  <circle cx="256" cy="220" r="130" fill="${b.color}" stroke="#f1d58a" stroke-width="10"/>
  <text x="256" y="250" font-family="Georgia, serif" font-size="110" font-weight="bold" text-anchor="middle" fill="#f1d58a">${id}</text>
  <text x="256" y="420" font-family="Georgia, serif" font-size="38" text-anchor="middle" fill="#f1d58a">${b.name}</text>
  <text x="256" y="465" font-family="Georgia, serif" font-size="26" text-anchor="middle" fill="#c9b27a">SỬ VIỆT</text>
</svg>
`;
    fs.writeFileSync(path.join(out, `${id}.svg`), svg, 'utf8');

    const meta = {
        name: b.name,
        description: `Huy hiệu học tập Sử Việt dành cho người học đạt cấp ${b.minLevel}. Huy hiệu không thể chuyển nhượng.`,
        image: `${base}/${id}.svg`,
        attributes: [
            { trait_type: 'Cấp độ yêu cầu', value: b.minLevel },
            { trait_type: 'Loại', value: 'Huy hiệu học tập' }
        ]
    };
    fs.writeFileSync(path.join(out, `${id}.json`), JSON.stringify(meta, null, 2), 'utf8');
}
console.log('✅ Đã tạo thư mục: ' + out);
console.log('Mỗi huy hiệu có file .json và .svg. Địa chỉ ảnh trong file .json: ' + base + '/<số>.svg');
