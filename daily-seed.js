// daily-seed.js — RNG có seed dùng chung cho Thử Thách Hàng Ngày
if (typeof window.DAILY_CHALLENGE_MODE === 'undefined') {
  window.DAILY_CHALLENGE_MODE = false; // set true ở trang/chế độ thử thách hàng ngày
}

function hashStringToSeed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// salt: để mỗi game/mỗi vòng có thứ tự xáo khác nhau dù cùng ngày
function getDailyRandom(salt = '') {
  if (!window.DAILY_CHALLENGE_MODE) return Math.random;
  const todayStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  return mulberry32(hashStringToSeed(todayStr + '|' + salt));
}

function seededShuffle(arr, rng = Math.random) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}