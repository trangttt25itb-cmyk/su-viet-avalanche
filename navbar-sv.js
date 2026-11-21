// Thanh menu dùng chung: đọc người dùng, đăng xuất, mở menu trên điện thoại
(function () {
    var raw = null;
    try { raw = JSON.parse(localStorage.getItem('suVietUser') || 'null'); } catch (e) {}
    var item = document.getElementById('navUserItem');
    var login = document.getElementById('navLoginLink');
    if (raw && item) {
        var email = raw.email || '';
        var name = raw.name || email.split('@')[0] || 'Người dùng';
        var initial = (name[0] || 'U').toUpperCase();
        document.getElementById('navEmailText').textContent = email || name;
        document.getElementById('navDropEmail').textContent = email;
        document.getElementById('navDropName').textContent = name;
        ['navAvatarCircle', 'navDropAvatar'].forEach(function (id) {
            var el = document.getElementById(id);
            if (!el) return;
            el.textContent = initial;
            if (raw.avatar && /^(https?:\/\/|images\/|data:image\/)/.test(raw.avatar)) {
                var img = document.createElement('img');
                img.alt = '';
                img.onerror = function () { img.remove(); el.textContent = initial; };
                img.src = raw.avatar;
                el.textContent = '';
                el.appendChild(img);
            }
        });
        item.style.display = '';
        if (login) login.style.display = 'none';
    }

    var trigger = document.getElementById('navUserTrigger');
    var dropdown = document.getElementById('navUserDropdown');
    function toggleUser() {
        if (!dropdown) return;
        dropdown.classList.toggle('open');
        trigger.setAttribute('aria-expanded', dropdown.classList.contains('open'));
    }
    if (trigger) {
        trigger.addEventListener('click', toggleUser);
        trigger.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleUser(); }
        });
    }
    document.addEventListener('click', function (e) {
        if (dropdown && !e.target.closest('.nav-user-item')) dropdown.classList.remove('open');
    });

    var logout = document.getElementById('navLogout');
    if (logout) logout.addEventListener('click', function () {
        ['suVietUser', 'token', 'user', 'history_user'].forEach(function (k) { localStorage.removeItem(k); });
    });

    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('navMenu');
    if (toggle && menu) toggle.addEventListener('click', function () {
        menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
    });
})();
