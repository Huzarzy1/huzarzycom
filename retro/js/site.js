/* retro/js/site.js: language chips and current-page marker. */
(function () {
  var S = window.RETRO_STRINGS || {};
  var root = document.documentElement;

  function get(obj, path) {
    var cur = obj, parts = path.split('.');
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return null;
      cur = cur[parts[i]];
    }
    return cur == null ? null : cur;
  }

  function stored(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch (e) { return fallback; }
  }
  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  function applyLang(lang) {
    if (!S[lang]) lang = 'en';
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var v = get(S[lang], key);
      if (v == null) v = get(S.en, key);
      if (v != null) nodes[i].textContent = v;
    }
    var chips = document.querySelectorAll('.lang button');
    for (var j = 0; j < chips.length; j++) {
      chips[j].setAttribute('aria-pressed', chips[j].getAttribute('data-lang') === lang ? 'true' : 'false');
    }
    root.lang = lang;
    store('lang', lang);
  }

  var chips = document.querySelectorAll('.lang button');
  for (var i = 0; i < chips.length; i++) {
    chips[i].addEventListener('click', function () {
      applyLang(this.getAttribute('data-lang'));
    });
  }

  var page = document.body.getAttribute('data-page');
  var links = document.querySelectorAll('.sections a[data-page]');
  for (var k = 0; k < links.length; k++) {
    if (links[k].getAttribute('data-page') === page) links[k].setAttribute('aria-current', 'page');
  }

  applyLang(stored('lang', 'en'));
})();
