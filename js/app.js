/**
 * js/app.js — UI 控制器
 *
 * 职责：状态管理、视图渲染、事件绑定、TTS、评分、搜索历史、
 *       偏好持久化、hash 深链接路由（#/dish/<id> / #/theme/<key> / #/search/<q>）。
 * 交互约定：点击辣度/类型筛选，有搜索词或专题时在其内部过滤；
 *       否则直接按条件浏览全部菜品（首页也能点筛选展开列表）。
 * 无构建依赖，挂载到 KM.app；Node 中配合 DOM stub 可做集成测试。
 */
(function (global) {
  "use strict";

  var KM = global.KM;
  var doc = global.document;
  if (!KM || !KM.dishes || !KM.search || !KM.i18n || !doc) return;

  // ===== 存储（带容错） =====
  var KEYS = { prefs: "km:prefs", history: "km:history", ratings: "km:ratings" };
  var store = {
    get: function (key, fallback) {
      try {
        var raw = global.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { global.localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    },
    remove: function (key) {
      try { global.localStorage.removeItem(key); } catch (e) { /* ignore */ }
    }
  };

  // ===== 状态 =====
  var state = {
    lang: "zh",
    currency: "CNY",
    spice: 0,          // 0 = 全部
    category: null,    // null = 全部
    view: "home",      // home | results | dish | notfound
    query: "",
    results: [],
    resultsTitle: "",
    themeKey: null,
    dish: null
  };

  var prefs = store.get(KEYS.prefs, {});
  if (prefs.lang && KM.i18n.langs.indexOf(prefs.lang) !== -1) state.lang = prefs.lang;
  if (prefs.currency && KM.currencies[prefs.currency]) state.currency = prefs.currency;

  function $id(id) { return doc.getElementById(id); }
  function dict() { return KM.i18n.dict[state.lang]; }
  function t(key, vars) { return KM.i18n.t(state.lang, key, vars); }
  function savePrefs() {
    store.set(KEYS.prefs, { lang: state.lang, currency: state.currency });
  }

  function fmtKRW(n) {
    try { return "₩" + n.toLocaleString("ko-KR"); } catch (e) { return "₩" + n.toLocaleString(); }
  }

  // ===== 视图切换 =====
  var views = {
    home: $id("home-view"),
    results: $id("results-view"),
    dish: $id("dish-view"),
    notfound: $id("not-found-view")
  };

  function showView(name) {
    state.view = name;
    Object.keys(views).forEach(function (k) {
      if (views[k]) views[k].hidden = k !== name;
    });
  }

  // ===== 渲染：静态文案 =====
  function renderStatic() {
    var d = dict();
    doc.title = d.title;
    if (doc.documentElement && doc.documentElement.setAttribute) {
      doc.documentElement.setAttribute("lang", state.lang === "zh" ? "zh-CN" : state.lang);
    }
    $id("app-title").textContent = d.title;
    $id("app-subtitle").textContent = d.subtitle;
    $id("search-input").setAttribute("placeholder", d.placeholder);
    $id("search-aria").textContent = d.searchAria;
    $id("search-btn").textContent = d.searchBtn;
    $id("history-title").textContent = d.history.title;
    $id("clear-history").textContent = d.history.clear;
    $id("filter-spice-label").textContent = d.filters.spice;
    $id("filter-cat-label").textContent = d.filters.category;
    $id("collections-title").textContent = d.collections.title;
    $id("popular-title").textContent = d.popular.title;
    $id("back-home").textContent = d.results.backHome;
    $id("price-label").textContent = d.card.price;
    $id("spice-label").textContent = d.card.spice;
    $id("kcal-label").textContent = d.card.kcal;
    $id("rating-label").textContent = d.card.rating;
    $id("my-rating-label").textContent = d.card.myRating;
    $id("ingredients-label").textContent = d.card.ingredients + ": ";
    $id("tip-label").textContent = d.card.tip + ": ";
    $id("in-theme-label").textContent = d.card.inTheme;
    $id("not-found-title").textContent = d.notFound.title;
    $id("not-found-hint").textContent = d.notFound.hint;
    $id("footer-note").textContent = d.footer;
    renderLangButtons();
    renderCurrencyButtons();
  }

  function renderLangButtons() {
    var box = $id("lang-switch");
    Array.prototype.forEach.call(box.children, function (btn) {
      var active = btn.getAttribute("data-lang") === state.lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("active", active);
    });
  }

  function renderCurrencyButtons() {
    var box = $id("currency-toggle");
    Array.prototype.forEach.call(box.children, function (btn) {
      var active = btn.getAttribute("data-currency") === state.currency;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("active", active);
    });
  }

  // ===== 渲染：筛选器 =====
  function renderFilters() {
    var d = dict();
    var spiceBox = $id("spice-chips");
    spiceBox.innerHTML = "";
    [0, 1, 2, 3, 4, 5].forEach(function (level) {
      var chip = doc.createElement("button");
      chip.type = "button";
      chip.className = "chip" + (state.spice === level ? " active" : "");
      chip.setAttribute("aria-pressed", state.spice === level ? "true" : "false");
      chip.textContent = level === 0 ? d.filters.all : "🌶".repeat(level) + " " + d.spiceLevels[level - 1];
      chip.addEventListener("click", function () { setSpice(level); });
      spiceBox.appendChild(chip);
    });

    var catBox = $id("category-chips");
    catBox.innerHTML = "";
    [null].concat(KM.schema.categories).forEach(function (cat) {
      var chip = doc.createElement("button");
      chip.type = "button";
      chip.className = "chip" + (state.category === cat ? " active" : "");
      chip.setAttribute("aria-pressed", state.category === cat ? "true" : "false");
      chip.textContent = cat === null ? d.filters.all : d.categories[cat];
      chip.addEventListener("click", function () { setCategory(cat); });
      catBox.appendChild(chip);
    });
  }

  function setSpice(level) {
    state.spice = level;
    renderFilters();
    rerunCurrentList();
  }

  function setCategory(cat) {
    state.category = cat;
    renderFilters();
    rerunCurrentList();
  }

  /** 筛选变化后重跑当前视图：搜索/专题内重过滤，其余情况按条件浏览全部菜品 */
  function rerunCurrentList() {
    if (state.view === "dish") return; // 阅读详情时不打断
    if (state.view === "results") {
      if (state.themeKey) {
        openTheme(state.themeKey);
      } else if (state.query) {
        runSearch(state.query, { addToHistory: false });
      } else {
        browseFiltered();
      }
      return;
    }
    // 首页 / 未找到 → 点击筛选直接按条件展开菜品列表
    browseFiltered();
  }

  /** 无搜索词时按辣度/类型条件浏览全部菜品 */
  function browseFiltered() {
    if (state.spice === 0 && state.category === null) {
      showHome();
      return;
    }
    var results = KM.dishes
      .filter(function (dish) {
        return (state.spice === 0 || dish.spice === state.spice) &&
          (state.category === null || dish.category === state.category);
      })
      .sort(function (a, b) { return b.rating - a.rating; });

    state.themeKey = null;
    state.query = "";
    state.results = results;
    state.resultsTitle = filterTitle();

    if (results.length === 0) {
      showNotFound();
      return;
    }
    renderResults();
    showView("results");
    if (typeof views.results.scrollIntoView === "function") {
      views.results.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /** 组合筛选标题，如「辣度 · 中辣」「类型 · 面食」「辣度 · 中辣 + 类型 · 面食」 */
  function filterTitle() {
    var d = dict();
    var parts = [];
    if (state.spice > 0) parts.push(d.filters.spice + " · " + d.spiceLevels[state.spice - 1]);
    if (state.category) parts.push(d.filters.category + " · " + d.categories[state.category]);
    return parts.join(" + ");
  }

  // ===== 渲染：首页 =====
  function renderCollections() {
    var box = $id("collection-cards");
    box.innerHTML = "";
    KM.collections.forEach(function (col) {
      var card = doc.createElement("button");
      card.type = "button";
      card.className = "collection-card";

      var emoji = doc.createElement("span");
      emoji.className = "collection-emoji";
      emoji.textContent = col.emoji;

      var name = doc.createElement("span");
      name.className = "collection-name";
      name.textContent = col.name[state.lang];

      var desc = doc.createElement("span");
      desc.className = "collection-desc";
      desc.textContent = col.desc[state.lang];

      var count = doc.createElement("span");
      count.className = "collection-count";
      count.textContent = t("theme.count", { n: KM.search.inCollection(KM.dishes, col.key).length });

      card.appendChild(emoji);
      card.appendChild(name);
      card.appendChild(desc);
      card.appendChild(count);
      card.addEventListener("click", function () { navigate("#/theme/" + col.key); });
      box.appendChild(card);
    });
  }

  function renderPopular() {
    var box = $id("popular-tags");
    box.innerHTML = "";
    KM.search.popular(KM.dishes, 8).forEach(function (dish) {
      var chip = doc.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.textContent = dish.name[state.lang];
      chip.addEventListener("click", function () { navigate("#/dish/" + dish.id); });
      box.appendChild(chip);
    });
  }

  function showHome() {
    state.themeKey = null;
    state.query = "";
    $id("search-input").value = "";
    renderCollections();
    renderPopular();
    showView("home");
  }

  // ===== 渲染：搜索结果 =====
  function renderResults() {
    $id("results-title").textContent = state.resultsTitle;
    $id("results-count").textContent = state.themeKey
      ? t("theme.count", { n: state.results.length })
      : t("results.count", { n: state.results.length });

    var list = $id("results-list");
    list.innerHTML = "";
    state.results.forEach(function (dish) {
      var li = doc.createElement("li");
      var item = doc.createElement("button");
      item.type = "button";
      item.className = "result-item";

      var nameEl = doc.createElement("span");
      nameEl.className = "result-name";
      nameEl.textContent = dish.name[state.lang];

      var romanEl = doc.createElement("span");
      romanEl.className = "result-roman";
      romanEl.textContent = dish.roman;

      var metaEl = doc.createElement("span");
      metaEl.className = "result-meta";
      metaEl.textContent = "🌶".repeat(dish.spice) + " · " + fmtKRW(dish.price.min) + "~ · ★" + dish.rating.toFixed(1);

      item.appendChild(nameEl);
      item.appendChild(romanEl);
      item.appendChild(metaEl);
      item.addEventListener("click", function () { navigate("#/dish/" + dish.id); });

      li.appendChild(item);
      list.appendChild(li);
    });
  }

  function renderThemeResults() {
    // 专题模式：结果项附带出处说明
    renderResults();
    var items = $id("results-list").children;
    Array.prototype.forEach.call(items, function (li, i) {
      var dish = state.results[i];
      if (!dish) return;
      var note = (dish.appearances || []).filter(function (a) {
        return a.collection === state.themeKey;
      })[0];
      if (note && note.note && note.note[state.lang]) {
        var p = doc.createElement("p");
        p.className = "result-note";
        p.textContent = note.note[state.lang];
        li.appendChild(p);
      }
    });
  }

  // ===== 渲染：菜品详情 =====
  function renderPrice(dish) {
    var cur = KM.currencies[state.currency];
    function conv(n) {
      return cur.symbol + Math.round(n * cur.rate).toLocaleString();
    }
    $id("dish-price").textContent =
      fmtKRW(dish.price.min) + " ~ " + fmtKRW(dish.price.max) +
      " (" + t("card.approx") + " " + conv(dish.price.min) + " ~ " + conv(dish.price.max) + ")";
  }

  function renderDish(dish) {
    var d = dict();
    $id("dish-name").textContent = dish.name[state.lang];
    $id("dish-roman").textContent = dish.roman;
    $id("dish-category").textContent = d.categories[dish.category];

    var tasteBox = $id("dish-tastes");
    tasteBox.innerHTML = "";
    (dish.tastes || []).forEach(function (taste) {
      var chip = doc.createElement("span");
      chip.className = "chip chip-static chip-taste";
      chip.textContent = d.tastes[taste];
      tasteBox.appendChild(chip);
    });

    renderPrice(dish);
    $id("dish-spice-peppers").textContent = "🌶".repeat(dish.spice);
    $id("dish-spice-text").textContent = d.spiceLevels[dish.spice - 1];
    $id("dish-kcal").textContent = "🔥 " + dish.kcal + " kcal";

    // 平均评分（半星显示 + 数值）
    var starsEl = $id("dish-rating-stars");
    starsEl.innerHTML = "★★★★★";
    starsEl.setAttribute("aria-label", t("card.ratingAria", { rating: dish.rating.toFixed(1) }));
    starsEl.style.setProperty("--rating", String(dish.rating));
    $id("dish-rating-num").textContent = dish.rating.toFixed(1) + " / 5";

    renderMyRating(dish);

    $id("dish-desc").textContent = dish.desc[state.lang];
    $id("dish-ingredients").textContent = dish.ingredients[state.lang];
    $id("dish-tip").textContent = dish.tip[state.lang];

    // 所属专题
    var colBox = $id("dish-collections");
    colBox.innerHTML = "";
    (dish.collections || []).forEach(function (key) {
      var col = KM.collections.filter(function (c) { return c.key === key; })[0];
      if (!col) return;
      var chip = doc.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.textContent = col.emoji + " " + col.name[state.lang];
      chip.addEventListener("click", function () { navigate("#/theme/" + key); });
      colBox.appendChild(chip);
    });

    renderListenButton();
  }

  function renderMyRating(dish) {
    var ratings = store.get(KEYS.ratings, {});
    var mine = ratings[dish.id] || 0;

    var box = $id("my-rating-stars");
    box.innerHTML = "";
    box.setAttribute("aria-label", t("card.rateHint"));
    for (var i = 1; i <= 5; i++) {
      (function (value) {
        var star = doc.createElement("button");
        star.type = "button";
        star.className = "star" + (value <= mine ? " on" : "");
        star.textContent = value <= mine ? "★" : "☆";
        star.setAttribute("aria-label", value + " ★");
        star.addEventListener("click", function () { rateDish(dish.id, value); });
        box.appendChild(star);
      })(i);
    }

    var clearBtn = $id("clear-my-rating");
    clearBtn.hidden = !mine;
    clearBtn.textContent = t("card.clearRating");
  }

  function rateDish(dishId, value) {
    var ratings = store.get(KEYS.ratings, {});
    ratings[dishId] = value;
    store.set(KEYS.ratings, ratings);
    if (KM.supabase && KM.supabase.ready) {
      KM.supabase.saveRating(dishId, value).catch(function () { /* 云端失败静默忽略，本地已保存 */ });
    }
    if (state.view === "dish" && state.dish && state.dish.id === dishId) {
      renderMyRating(state.dish);
    }
  }

  function clearMyRating() {
    if (!state.dish) return;
    var ratings = store.get(KEYS.ratings, {});
    delete ratings[state.dish.id];
    store.set(KEYS.ratings, ratings);
    if (KM.supabase && KM.supabase.ready) {
      KM.supabase.deleteRating(state.dish.id).catch(function () { /* 云端失败静默忽略 */ });
    }
    renderMyRating(state.dish);
  }

  // ===== 渲染：未找到 =====
  function showNotFound() {
    showView("notfound");
  }

  // ===== TTS 发音 =====
  var tts = {
    speaking: false,
    supported: typeof global.SpeechSynthesisUtterance !== "undefined" &&
      typeof global.speechSynthesis !== "undefined",
    play: function (dish) {
      if (!this.supported) return;
      if (this.speaking) {
        global.speechSynthesis.cancel();
        this.setSpeaking(false);
        return;
      }
      var u = new global.SpeechSynthesisUtterance(dish.name.ko);
      u.lang = "ko-KR";
      u.rate = 0.9;
      try {
        var voices = global.speechSynthesis.getVoices() || [];
        for (var i = 0; i < voices.length; i++) {
          if (voices[i].lang && voices[i].lang.toLowerCase().indexOf("ko") === 0) {
            u.voice = voices[i];
            break;
          }
        }
      } catch (e) { /* 无法枚举 voice 时使用默认 */ }
      u.onend = function () { tts.setSpeaking(false); };
      u.onerror = function () { tts.setSpeaking(false); };
      this.setSpeaking(true);
      global.speechSynthesis.speak(u);
    },
    setSpeaking: function (speaking) {
      this.speaking = speaking;
      var btn = $id("listen-btn");
      if (!btn) return;
      btn.textContent = speaking ? "⏹" : "🔊";
      btn.setAttribute("aria-pressed", speaking ? "true" : "false");
      btn.setAttribute("aria-label", t(speaking ? "card.listenStop" : "card.listen"));
      btn.classList.toggle("speaking", speaking);
    },
    stop: function () {
      if (this.speaking) {
        global.speechSynthesis.cancel();
        this.setSpeaking(false);
      }
    }
  };

  function renderListenButton() {
    var btn = $id("listen-btn");
    btn.disabled = !tts.supported;
    if (!tts.supported) {
      btn.setAttribute("aria-label", t("tts.unsupported"));
    }
    tts.setSpeaking(tts.speaking);
  }

  // ===== 搜索历史 =====
  function getHistory() {
    return store.get(KEYS.history, []);
  }

  function addHistory(q) {
    var list = getHistory().filter(function (x) { return x !== q; });
    list.unshift(q);
    store.set(KEYS.history, list.slice(0, 8));
    renderHistory();
  }

  function renderHistory() {
    var list = getHistory();
    var box = $id("history");
    box.hidden = list.length === 0;
    var chips = $id("history-chips");
    chips.innerHTML = "";
    list.forEach(function (q) {
      var chip = doc.createElement("button");
      chip.type = "button";
      chip.className = "chip chip-history";
      chip.textContent = q;
      chip.addEventListener("click", function () { navigate("#/search/" + encodeURIComponent(q)); });
      chips.appendChild(chip);
    });
  }

  function clearHistory() {
    store.remove(KEYS.history);
    renderHistory();
  }

  // ===== 搜索 =====
  function runSearch(q, opts) {
    var o = opts || {};
    q = String(q || "").trim();
    state.query = q;
    $id("search-input").value = q;

    if (!q) {
      showHome();
      return;
    }

    var results = KM.search.query(KM.dishes, q, { spice: state.spice, category: state.category });
    state.themeKey = null;
    state.results = results;

    if (o.addToHistory !== false) addHistory(q);

    if (results.length === 0) {
      showNotFound();
    } else if (results.length === 1 && !o.forceList) {
      navigate("#/dish/" + results[0].id);
    } else {
      state.resultsTitle = t("results.title");
      renderResults();
      showView("results");
    }
  }

  function openTheme(key) {
    var col = KM.collections.filter(function (c) { return c.key === key; })[0];
    if (!col) {
      showHome();
      return;
    }
    state.themeKey = key;
    state.query = "";
    state.results = KM.search.inCollection(KM.dishes, key, { spice: state.spice, category: state.category });
    state.resultsTitle = col.emoji + " " + col.name[state.lang];
    renderThemeResults();
    showView("results");
  }

  function openDish(id) {
    var dish = KM.search.byId(KM.dishes, id);
    if (!dish) {
      showNotFound();
      return;
    }
    state.dish = dish;
    state.themeKey = null;
    renderDish(dish);
    showView("dish");
  }

  // ===== hash 路由 =====
  function navigate(hash) {
    if (global.location.hash === hash) {
      applyHash();
      return;
    }
    global.location.hash = hash;
  }

  function applyHash() {
    var raw = String(global.location.hash || "").replace(/^#\/?/, "");
    var parts = raw.split("/");
    if (parts[0] === "dish" && parts[1]) {
      openDish(decodeURIComponent(parts[1]));
    } else if (parts[0] === "theme" && parts[1]) {
      openTheme(decodeURIComponent(parts[1]));
    } else if (parts[0] === "search" && parts[1]) {
      runSearch(decodeURIComponent(parts[1]));
    } else {
      showHome();
    }
  }

  // ===== 实时搜索（防抖） =====
  var debounceTimer = null;
  function debouncedLiveSearch() {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      var q = $id("search-input").value;
      if (q.trim()) {
        runSearch(q, { addToHistory: false, forceList: true });
      } else {
        showHome();
      }
    }, 250);
  }

  // ===== 语言 / 货币切换 =====
  function setLang(lang) {
    if (KM.i18n.langs.indexOf(lang) === -1) return;
    state.lang = lang;
    savePrefs();
    renderStatic();
    renderFilters();
    renderHistory();
    rerenderCurrentView();
  }

  function setCurrency(currency) {
    if (!KM.currencies[currency]) return;
    state.currency = currency;
    savePrefs();
    renderStatic();
    if (state.view === "dish" && state.dish) renderPrice(state.dish);
  }

  function rerenderCurrentView() {
    switch (state.view) {
      case "home":
        renderCollections();
        renderPopular();
        break;
      case "results":
        if (state.themeKey) {
          var col = KM.collections.filter(function (c) { return c.key === state.themeKey; })[0];
          state.resultsTitle = col ? col.emoji + " " + col.name[state.lang] : state.resultsTitle;
          renderThemeResults();
        } else {
          state.resultsTitle = state.query ? t("results.title") : filterTitle();
          renderResults();
        }
        break;
      case "dish":
        if (state.dish) renderDish(state.dish);
        break;
      default:
        break;
    }
  }

  // ===== 事件绑定 =====
  function bindEvents() {
    $id("search-form").addEventListener("submit", function (e) {
      if (e && e.preventDefault) e.preventDefault();
      navigate("#/search/" + encodeURIComponent($id("search-input").value.trim()));
    });

    $id("search-input").addEventListener("input", debouncedLiveSearch);

    Array.prototype.forEach.call($id("lang-switch").children, function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });

    Array.prototype.forEach.call($id("currency-toggle").children, function (btn) {
      btn.addEventListener("click", function () {
        setCurrency(btn.getAttribute("data-currency"));
      });
    });

    $id("listen-btn").addEventListener("click", function () {
      if (state.dish) tts.play(state.dish);
    });

    $id("clear-my-rating").addEventListener("click", clearMyRating);

    $id("clear-history").addEventListener("click", clearHistory);

    $id("back-home").addEventListener("click", function () {
      navigate("");
    });

    if (global.addEventListener) {
      global.addEventListener("hashchange", applyHash);
    }
  }

  // ===== 云端评分恢复（换浏览器/清缓存后合并回本地） =====
  function syncRatingsFromCloud() {
    if (!KM.supabase || !KM.supabase.ready) return;
    KM.supabase.fetchRatings().then(function (rows) {
      if (!rows || !rows.length) return;
      var ratings = store.get(KEYS.ratings, {});
      var changed = false;
      rows.forEach(function (r) {
        if (r && r.dish_id && ratings[r.dish_id] !== r.score) {
          ratings[r.dish_id] = r.score;
          changed = true;
        }
      });
      if (changed) {
        store.set(KEYS.ratings, ratings);
        if (state.dish) renderMyRating(state.dish);
      }
    }).catch(function () { /* 云端不可用时忽略，保持本地数据 */ });
  }

  // ===== 初始化 =====
  function init() {
    bindEvents();
    renderStatic();
    renderFilters();
    renderHistory();
    applyHash();
    syncRatingsFromCloud();
  }

  if (doc.readyState === "loading" && doc.addEventListener) {
    doc.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // ===== 暴露 API（测试与调试用） =====
  KM.app = {
    state: state,
    tts: tts,
    navigate: navigate,
    applyHash: applyHash,
    runSearch: runSearch,
    openDish: openDish,
    openTheme: openTheme,
    showHome: showHome,
    setLang: setLang,
    setCurrency: setCurrency,
    setSpice: setSpice,
    setCategory: setCategory,
    rateDish: rateDish,
    clearMyRating: clearMyRating,
    clearHistory: clearHistory
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = KM;
  }
})(typeof window !== "undefined" ? window : globalThis);
