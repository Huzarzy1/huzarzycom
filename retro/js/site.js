/* retro/js/site.js: language chips, current-section marker, e-mail links, dateline. */
(function () {
  var S = window.RETRO_STRINGS || {};
  var root = document.documentElement;
  var LOCALES = { en: 'en-CA', fr: 'fr-CA', de: 'de-DE', pl: 'pl-PL' };

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

  // Turn e-mail addresses inside [data-linkify] into mailto: links (after text is set).
  function linkify(el) {
    var text = el.textContent;
    var re = /[\w.+-]+@[\w-]+(\.[\w-]+)+/g, last = 0, m;
    var frag = document.createDocumentFragment();
    while ((m = re.exec(text))) {
      frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var a = document.createElement('a');
      a.href = 'mailto:' + m[0];
      a.textContent = m[0];
      frag.appendChild(a);
      last = m.index + m[0].length;
    }
    frag.appendChild(document.createTextNode(text.slice(last)));
    el.textContent = '';
    el.appendChild(frag);
  }

  function applyLang(lang) {
    if (!S[lang]) lang = 'en';
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var v = get(S[lang], key);
      if (v == null) v = get(S.en, key);
      if (v != null) nodes[i].textContent = v;
      if (nodes[i].hasAttribute('data-linkify')) linkify(nodes[i]);
    }
    var dl = document.querySelector('[data-date]');
    if (dl && window.Intl) {
      var d = new Date(dl.getAttribute('data-date') + 'T12:00:00');
      dl.textContent = d.toLocaleDateString(LOCALES[lang], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    var chips = document.querySelectorAll('.lang button');
    for (var j = 0; j < chips.length; j++) {
      chips[j].setAttribute('aria-pressed', chips[j].getAttribute('data-lang') === lang ? 'true' : 'false');
    }
    root.lang = lang;
    store('lang', lang);
  }

  // The section row lights up whichever post the address points at (home by default).
  function markCurrent() {
    var hash = location.hash || '#home';
    var links = document.querySelectorAll('.sec a');
    for (var k = 0; k < links.length; k++) {
      if (links[k].getAttribute('href') === hash) links[k].setAttribute('aria-current', 'location');
      else links[k].removeAttribute('aria-current');
    }
  }

  var chips = document.querySelectorAll('.lang button');
  for (var i = 0; i < chips.length; i++) {
    chips[i].addEventListener('click', function () {
      applyLang(this.getAttribute('data-lang'));
    });
  }

  window.addEventListener('hashchange', markCurrent);
  markCurrent();
  applyLang(stored('lang', 'en'));
})();
