/* ============================================================
   SEARCH-ENGINE.JS — Logic tìm kiếm tổng hợp dùng chung
   Yêu cầu: search-data.js phải được nạp TRƯỚC file này.
   Yêu cầu: trang phải có <input id="navSearchInput"> trong ô tìm kiếm.
   Tự động: tự tạo dropdown gợi ý, không cần thêm HTML nào khác.
   Nút tìm kiếm cũ (onclick="doNavSearch()") vẫn hoạt động bình thường.
   ============================================================ */

(function () {
  if (typeof SEARCH_DATA === "undefined") {
    console.warn("[search-engine] Không tìm thấy SEARCH_DATA — hãy nạp search-data.js trước.");
    return;
  }

  /* ---- Gộp toàn bộ dữ liệu tìm kiếm thành 1 mảng phẳng ---- */
  const ALL_ITEMS = [
    ...SEARCH_DATA.pages,
    ...SEARCH_DATA.stories,
    ...SEARCH_DATA.quizTopics
  ];

  /* ---- Bỏ dấu tiếng Việt để so khớp không phân biệt dấu ---- */
  function normalize(str) {
    return (str || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/gi, "d")
      .toLowerCase()
      .trim();
  }

  function searchableText(item) {
    if (item._search) return item._search;
    const parts = [item.name, item.title, item.year, ...(item.keywords || [])].filter(Boolean);
    item._search = normalize(parts.join(" "));
    return item._search;
  }

  const TYPE_LABEL = { page: "Trang chức năng", story: "Nhân vật / Câu chuyện", quiz: "Chủ đề Quiz" };
  const TYPE_ORDER = { page: 0, story: 1, quiz: 2 };

  function runSearch(rawQuery, limit) {
    const q = normalize(rawQuery);
    if (!q) return [];
    const scored = [];
    for (const item of ALL_ITEMS) {
      const text = searchableText(item);
      const idx = text.indexOf(q);
      if (idx === -1) continue;
      // Điểm thấp hơn = khớp tốt hơn (khớp từ đầu chuỗi được ưu tiên)
      const score = idx + TYPE_ORDER[item.type] * 0.01;
      scored.push({ item, score });
    }
    scored.sort((a, b) => a.score - b.score);
    const results = scored.map(s => s.item);
    return typeof limit === "number" ? results.slice(0, limit) : results;
  }

  /* ---- Style dropdown (chèn 1 lần duy nhất) ---- */
  function ensureStyle() {
    if (document.getElementById("gsearch-style")) return;
    const style = document.createElement("style");
    style.id = "gsearch-style";
    style.textContent = `
      .gsearch-wrap{position:relative;}
      .gsearch-dropdown{
        position:absolute; top:calc(100% + 8px); right:0; width:340px; max-width:90vw;
        background:#fffdf8; border:1px solid rgba(139,0,0,0.18); border-radius:14px;
        box-shadow:0 12px 32px rgba(44,27,18,0.22); z-index:9999; overflow:hidden;
        font-family:inherit; max-height:0; opacity:0; visibility:hidden; transform:translateY(-6px);
        transition:max-height .32s ease, opacity .22s ease, transform .22s ease, visibility 0s linear .32s;
      }
      .gsearch-dropdown.open{
        display:block; max-height:420px; opacity:1; visibility:visible; transform:translateY(0);
        overflow-y:auto;
        transition:max-height .32s ease, opacity .22s ease, transform .22s ease, visibility 0s linear 0s;
      }
      .gsearch-group-label{
        padding:10px 16px 4px; font-size:11px; font-weight:700; letter-spacing:1px;
        color:#8B0000; text-transform:uppercase; opacity:0.75;
      }
      .gsearch-item{
        display:flex; align-items:center; gap:10px; padding:9px 16px; cursor:pointer;
        color:#2c1b12; text-decoration:none; font-size:14px; transition:background .15s;
      }
      .gsearch-item:hover, .gsearch-item.active{ background:rgba(139,0,0,0.07); }
      .gsearch-item .gs-icon{ font-size:16px; flex-shrink:0; }
      .gsearch-item .gs-text{ display:flex; flex-direction:column; min-width:0; }
      .gsearch-item .gs-title{ font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
      .gsearch-item .gs-sub{ font-size:11.5px; color:#8a7259; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
      .gsearch-empty{ padding:16px; font-size:13px; color:#8a7259; text-align:center; }
      .gsearch-viewall{
        display:block; text-align:center; padding:11px; font-size:13px; font-weight:700;
        color:#8B0000; text-decoration:none; border-top:1px solid rgba(139,0,0,0.12);
        background:rgba(139,0,0,0.03);
      }
      .gsearch-viewall:hover{ background:rgba(139,0,0,0.08); }
      .gsearch-item{ opacity:0; transform:translateY(-6px); animation:gsearchItemIn .28s ease forwards; }
      @keyframes gsearchItemIn{ to{ opacity:1; transform:translateY(0); } }
      .gsearch-jump-highlight{ animation:gsearchPulse 1.4s ease; }
      @keyframes gsearchPulse{
        0%{box-shadow:0 0 0 0 rgba(244,197,66,.9);}
        35%{box-shadow:0 0 0 16px rgba(244,197,66,0);}
        100%{box-shadow:0 0 0 0 rgba(244,197,66,0);}
      }
    `;
    document.head.appendChild(style);
  }

  function itemSubtitle(item) {
    if (item.type === "story") return (item.year ? item.year + " · " : "") + item.title;
    if (item.type === "quiz") return item.count + " câu hỏi";
    return "Trang chức năng";
  }

  function renderDropdown(dropdown, query) {
    const results = runSearch(query, 8);
    if (!results.length) {
      dropdown.innerHTML = `<div class="gsearch-empty">Không tìm thấy kết quả cho "${escapeHtml(query)}"</div>`;
      dropdown.classList.add("open");
      return;
    }
    let lastType = null;
    let html = "";
    for (const item of results) {
      if (item.type !== lastType) {
        html += `<div class="gsearch-group-label">${TYPE_LABEL[item.type]}</div>`;
        lastType = item.type;
      }
      html += `
        <a class="gsearch-item" href="${item.url}" data-url="${item.url}">
          <span class="gs-icon">${item.icon || "🔎"}</span>
          <span class="gs-text">
            <span class="gs-title">${escapeHtml(item.name || item.title)}</span>
            <span class="gs-sub">${escapeHtml(itemSubtitle(item))}</span>
          </span>
        </a>`;
    }
    html += `<a class="gsearch-viewall" href="search-results.html?q=${encodeURIComponent(query)}">Xem tất cả kết quả cho "${escapeHtml(query)}" →</a>`;
    dropdown.innerHTML = html;
    dropdown.classList.add("open");
    dropdown.querySelectorAll(".gsearch-item").forEach((el, i) => {
      el.style.animationDelay = (i * 0.04) + "s";
    });
  }

  function escapeHtml(str) {
    return (str || "").toString().replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  /* ---- Tự động nhảy tới kết quả đang có mặt trên trang, ngay khi đang gõ ---- */
  function autoJumpToMatch(query) {
    const resolver = window.SuVietSearch && window.SuVietSearch.resolveLocal;
    if (typeof resolver !== "function") return;
    const results = runSearch(query, 5);
    for (const item of results) {
      const el = resolver(item);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.remove("gsearch-jump-highlight");
        void el.offsetWidth;
        el.classList.add("gsearch-jump-highlight");
        setTimeout(() => el.classList.remove("gsearch-jump-highlight"), 1500);
        break;
      }
    }
  }

  function mount(input) {
    if (input.dataset.gsearchMounted) return;
    input.dataset.gsearchMounted = "1";
    ensureStyle();

    // Bọc input trong 1 wrapper định vị tương đối, nếu chưa có
    let wrap = input.closest(".gsearch-wrap");
    if (!wrap) {
      wrap = document.createElement("span");
      wrap.className = "gsearch-wrap";
      input.parentNode.insertBefore(wrap, input);
      wrap.appendChild(input);
    }

    const dropdown = document.createElement("div");
    dropdown.className = "gsearch-dropdown";
    wrap.appendChild(dropdown);

    let debounceTimer = null;
    input.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      const val = input.value.trim();
      if (!val) { dropdown.classList.remove("open"); return; }
      debounceTimer = setTimeout(() => {
        renderDropdown(dropdown, val);
        autoJumpToMatch(val);
      }, 120);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { dropdown.classList.remove("open"); input.blur(); }
      if (e.key === "Enter") {
        e.preventDefault();
        const val = input.value.trim();
        if (val) window.location.href = "search-results.html?q=" + encodeURIComponent(val);
      }
    });

    input.addEventListener("focus", () => {
      if (input.value.trim()) dropdown.classList.add("open");
    });

    dropdown.addEventListener("click", (e) => {
      const link = e.target.closest(".gsearch-item");
      if (!link) return;
      const url = link.getAttribute("data-url");
      const item = ALL_ITEMS.find(it => it.url === url);
      const resolver = window.SuVietSearch && window.SuVietSearch.resolveLocal;
      const localEl = item && typeof resolver === "function" ? resolver(item) : null;
      if (localEl) {
        e.preventDefault();
        dropdown.classList.remove("open");
        input.value = item.name || item.title;
        localEl.scrollIntoView({ behavior: "smooth", block: "center" });
        localEl.classList.remove("gsearch-jump-highlight");
        void localEl.offsetWidth;
        localEl.classList.add("gsearch-jump-highlight");
        setTimeout(() => localEl.classList.remove("gsearch-jump-highlight"), 1500);
      }
    });

    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) dropdown.classList.remove("open");
    });
  }

  /* ---- Ghi đè hàm doNavSearch() cũ để nút bấm cũng dùng trang kết quả mới ---- */
  window.doNavSearch = function () {
    const input = document.getElementById("navSearchInput");
    const q = input ? input.value.trim() : "";
    if (q) window.location.href = "search-results.html?q=" + encodeURIComponent(q);
  };

  /* ---- API công khai, dùng lại cho search-results.html ---- */
  window.SuVietSearch = {
    search: runSearch,
    normalize: normalize,
    TYPE_LABEL: TYPE_LABEL,
    itemSubtitle: itemSubtitle,
    escapeHtml: escapeHtml
  };

  function init() {
    document.querySelectorAll("#navSearchInput, #navSearchInputMobile").forEach(mount);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();