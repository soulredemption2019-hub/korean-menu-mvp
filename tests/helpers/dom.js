/**
 * tests/helpers/dom.js — 极简 DOM stub，用于在 Node 中集成测试 app.js
 * 仅实现 app.js 实际用到的 API 子集。
 */
"use strict";

function createClassList() {
  var set = [];
  return {
    _set: set,
    add: function (c) { if (set.indexOf(c) === -1) set.push(c); },
    remove: function (c) {
      var i = set.indexOf(c);
      if (i !== -1) set.splice(i, 1);
    },
    toggle: function (c, force) {
      var has = set.indexOf(c) !== -1;
      if (force === undefined) force = !has;
      if (force && !has) set.push(c);
      if (!force && has) {
        var i = set.indexOf(c);
        if (i !== -1) set.splice(i, 1);
      }
    },
    contains: function (c) { return set.indexOf(c) !== -1; }
  };
}

function createEl(tag, id) {
  var listeners = {};
  var attrs = {};
  var styleBag = {};
  var el = {
    tag: tag,
    id: id || "",
    children: [],
    hidden: false,
    disabled: false,
    value: "",
    type: "",
    classList: createClassList(),
    style: {
      setProperty: function (k, v) { styleBag[k] = v; }
    },
    _styleBag: styleBag,
    addEventListener: function (ev, fn) {
      (listeners[ev] = listeners[ev] || []).push(fn);
    },
    appendChild: function (c) {
      el.children.push(c);
      return c;
    },
    setAttribute: function (k, v) { attrs[k] = String(v); },
    getAttribute: function (k) { return Object.prototype.hasOwnProperty.call(attrs, k) ? attrs[k] : null; }
  };

  Object.defineProperty(el, "textContent", {
    get: function () { return el._text; },
    set: function (v) { el._text = String(v); }
  });
  Object.defineProperty(el, "innerHTML", {
    get: function () { return el._html; },
    set: function (v) { el._html = String(v); el.children = []; }
  });
  Object.defineProperty(el, "className", {
    get: function () { return el.classList._set.join(" "); },
    set: function (v) {
      el.classList._set.length = 0;
      String(v).split(/\s+/).filter(Boolean).forEach(function (c) { el.classList._set.push(c); });
    }
  });
  Object.defineProperty(el, "listeners", { get: function () { return listeners; } });

  el._text = "";
  el._html = "";
  return el;
}

/** app.js 引用的全部 DOM id */
var APP_IDS = [
  "app-title", "app-subtitle",
  "lang-switch",
  "search-form", "search-aria", "search-input", "search-btn",
  "history", "history-title", "history-chips", "clear-history",
  "filter-spice-label", "spice-chips", "filter-cat-label", "category-chips",
  "home-view", "collections-title", "collection-cards", "popular-title", "popular-tags",
  "results-view", "results-title", "results-count", "results-list", "back-home",
  "dish-view", "dish-name", "dish-roman", "listen-btn",
  "dish-category", "dish-tastes",
  "price-label", "dish-price", "currency-toggle",
  "spice-label", "dish-spice-peppers", "dish-spice-text",
  "kcal-label", "dish-kcal",
  "rating-label", "dish-rating-stars", "dish-rating-num",
  "my-rating-label", "my-rating-stars", "clear-my-rating",
  "dish-desc", "ingredients-label", "dish-ingredients",
  "tip-label", "dish-tip", "in-theme-label", "dish-collections",
  "not-found-view", "not-found-title", "not-found-hint",
  "footer-note"
];

/**
 * 组装浏览器全局环境（document / location / localStorage / speechSynthesis）。
 * 返回 { doc, registry, location, storageData, speech }。
 */
function installDom() {
  var registry = {};
  APP_IDS.forEach(function (id) { registry[id] = createEl("div", id); });

  // 语言切换按钮
  ["ko", "en", "zh"].forEach(function (lang) {
    var btn = createEl("button");
    btn.setAttribute("data-lang", lang);
    registry["lang-switch"].children.push(btn);
  });

  // 货币切换按钮
  ["CNY", "USD"].forEach(function (cur) {
    var btn = createEl("button");
    btn.setAttribute("data-currency", cur);
    registry["currency-toggle"].children.push(btn);
  });

  var doc = {
    readyState: "complete",
    title: "",
    documentElement: { setAttribute: function () {} },
    getElementById: function (id) { return registry[id] || null; },
    createElement: function (tag) { return createEl(tag); },
    addEventListener: function () {}
  };

  var hashListeners = [];
  var locationObj = { _hash: "" };
  Object.defineProperty(locationObj, "hash", {
    get: function () { return locationObj._hash; },
    set: function (v) {
      locationObj._hash = String(v);
      hashListeners.forEach(function (fn) { fn(); });
    }
  });

  var storageData = {};
  var speech = {
    spoken: [],
    cancelled: 0,
    speak: function (u) { speech.spoken.push(u); },
    cancel: function () { speech.cancelled++; },
    getVoices: function () { return [{ lang: "ko-KR", name: "Test Korean" }]; }
  };

  global.document = doc;
  global.location = locationObj;
  global.localStorage = {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(storageData, k) ? storageData[k] : null; },
    setItem: function (k, v) { storageData[k] = String(v); },
    removeItem: function (k) { delete storageData[k]; }
  };
  global.addEventListener = function (ev, fn) {
    if (ev === "hashchange") hashListeners.push(fn);
  };
  global.speechSynthesis = speech;
  global.SpeechSynthesisUtterance = function (text) {
    this.text = text;
    this.lang = "";
    this.rate = 1;
    this.voice = null;
  };

  return { doc: doc, registry: registry, location: locationObj, storageData: storageData, speech: speech };
}

module.exports = { createEl: createEl, APP_IDS: APP_IDS, installDom: installDom };
