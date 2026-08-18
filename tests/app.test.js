/**
 * tests/app.test.js — UI 控制器集成测试（DOM stub）
 * 运行: node --test tests/*.test.js
 */
"use strict";

var test = require("node:test");
var assert = require("node:assert");

var domHelper = require("./helpers/dom");
var env = domHelper.installDom();
var registry = env.registry;

require("../js/data.js");
require("../js/i18n.js");
require("../js/search.js");
var KM = require("../js/app.js");
var app = KM.app;

function childrenOf(id) {
  return registry[id].children;
}
function textOf(id) {
  return registry[id].textContent;
}

test("初始化：默认中文首页", function () {
  assert.strictEqual(app.state.lang, "zh");
  assert.strictEqual(registry["home-view"].hidden, false);
  assert.strictEqual(registry["results-view"].hidden, true);
  assert.strictEqual(registry["dish-view"].hidden, true);
  assert.strictEqual(registry["not-found-view"].hidden, true);
  assert.strictEqual(childrenOf("collection-cards").length, 3);
  assert.strictEqual(childrenOf("popular-tags").length, 8);
  assert.strictEqual(childrenOf("spice-chips").length, 6);
  assert.strictEqual(childrenOf("category-chips").length, 12); // 全部 + 11 类
  assert.strictEqual(registry["history"].hidden, true);
  assert.strictEqual(textOf("app-title"), "韩餐点餐助手");
});

test("首页点击筛选直接展开对应菜品列表", function () {
  app.showHome();
  app.setSpice(4);
  assert.strictEqual(app.state.view, "results");
  var spice4Count = KM.dishes.filter(function (d) { return d.spice === 4; }).length;
  assert.strictEqual(childrenOf("results-list").length, spice4Count);
  assert.ok(textOf("results-title").indexOf("辣度") !== -1);

  app.setCategory("noodle"); // 辣度4 + 面食
  assert.strictEqual(app.state.view, "results");
  var noodleSpice4 = KM.dishes.filter(function (d) { return d.category === "noodle" && d.spice === 4; }).length;
  assert.strictEqual(childrenOf("results-list").length, noodleSpice4);

  app.setSpice(1); // 辣度1 + 面食
  assert.strictEqual(app.state.view, "results");
  var noodleSpice1 = KM.dishes.filter(function (d) { return d.category === "noodle" && d.spice === 1; }).length;
  assert.strictEqual(childrenOf("results-list").length, noodleSpice1);

  app.setSpice(0); // 只保留 类型·面食
  assert.strictEqual(app.state.view, "results");
  var noodleAll = KM.dishes.filter(function (d) { return d.category === "noodle"; }).length;
  assert.strictEqual(childrenOf("results-list").length, noodleAll);
  assert.ok(textOf("results-title").indexOf("类型") !== -1);

  app.setCategory(null); // 全部复位 → 回首页
  assert.strictEqual(app.state.view, "home");
});

test("模糊搜索「辣的鸡肉」返回结果并按相关度排序", function () {
  app.runSearch("辣的鸡肉");
  assert.strictEqual(app.state.view, "results");
  var expected = KM.search.query(KM.dishes, "辣的鸡肉", null).length;
  assert.ok(expected >= 4, "应命中多道菜");
  assert.strictEqual(childrenOf("results-list").length, expected);
  assert.strictEqual(textOf("results-title"), "搜索结果");
  // 相关度第一：닭갈비（菜名含 辣+鸡）
  assert.strictEqual(childrenOf("results-list")[0].children[0].children[0].textContent, "辣炒鸡排");
});

test("辣度筛选 4 后结果收窄为 2 道", function () {
  app.setSpice(4);
  assert.strictEqual(childrenOf("results-list").length, 2);
  var names = childrenOf("results-list").map(function (li) {
    return li.children[0].children[0].textContent;
  });
  assert.deepStrictEqual(names.sort(), ["辣炒鸡排", "辣牛肉汤"]);
  app.setSpice(0); // 复位
});

test("单结果搜索自动进入详情页", function () {
  app.runSearch("비빔냉면"); // 唯一命中
  assert.strictEqual(app.state.view, "dish");
  assert.strictEqual(textOf("dish-name"), "拌冷面");
});

test("详情页渲染：价格/换算/热量/评分", function () {
  app.openDish("dakgalbi");
  assert.strictEqual(textOf("dish-name"), "辣炒鸡排");
  assert.strictEqual(textOf("dish-roman"), "Dakgalbi");
  assert.strictEqual(textOf("dish-category"), "烤肉烤物");
  assert.ok(textOf("dish-price").indexOf("₩13,000") !== -1, "应显示韩元价格");
  assert.ok(textOf("dish-price").indexOf("¥") !== -1, "应显示人民币换算");
  assert.strictEqual(textOf("dish-kcal"), "🔥 520 kcal");
  assert.strictEqual(textOf("dish-rating-num"), "4.6 / 5");
  assert.strictEqual(childrenOf("dish-tastes").length, 2); // 辣 / 咸香
  assert.strictEqual(childrenOf("my-rating-stars").length, 5);
  assert.strictEqual(registry["clear-my-rating"].hidden, true);
});

test("用户评分：打分持久化并可清除", function () {
  app.rateDish("dakgalbi", 3);
  assert.strictEqual(JSON.parse(env.storageData["km:ratings"]).dakgalbi, 3);
  assert.strictEqual(registry["clear-my-rating"].hidden, false);
  assert.ok(childrenOf("my-rating-stars")[2].classList.contains("on"));

  app.clearMyRating();
  assert.deepStrictEqual(JSON.parse(env.storageData["km:ratings"]), {});
  assert.strictEqual(registry["clear-my-rating"].hidden, true);
});

test("货币切换：美元换算与按钮状态", function () {
  app.openDish("dakgalbi");
  app.setCurrency("USD");
  assert.ok(textOf("dish-price").indexOf("$") !== -1, "应显示美元换算");
  assert.strictEqual(childrenOf("currency-toggle")[1].getAttribute("aria-pressed"), "true");
  assert.strictEqual(JSON.parse(env.storageData["km:prefs"]).currency, "USD", "货币偏好应持久化");
  app.setCurrency("CNY");
  assert.strictEqual(childrenOf("currency-toggle")[0].getAttribute("aria-pressed"), "true");
  assert.strictEqual(JSON.parse(env.storageData["km:prefs"]).currency, "CNY");
});

test("语言切换：详情页三语同步重渲染", function () {
  app.openDish("dakgalbi");
  app.setLang("en");
  assert.strictEqual(textOf("dish-name"), "Spicy Stir-fried Chicken");
  assert.strictEqual(textOf("price-label"), "Price");
  assert.strictEqual(childrenOf("lang-switch")[1].getAttribute("aria-pressed"), "true");
  assert.strictEqual(JSON.parse(env.storageData["km:prefs"]).lang, "en", "语言偏好应持久化");
  app.setLang("zh");
  assert.strictEqual(textOf("dish-name"), "辣炒鸡排");
});

test("TTS：韩语发音、语音选择与停止", function () {
  app.openDish("dakgalbi");
  app.tts.play(app.state.dish);
  assert.strictEqual(env.speech.spoken.length, 1);
  var u = env.speech.spoken[0];
  assert.strictEqual(u.lang, "ko-KR");
  assert.strictEqual(u.text, "닭갈비");
  assert.strictEqual(u.voice.lang, "ko-KR");
  assert.strictEqual(app.tts.speaking, true);
  assert.strictEqual(textOf("listen-btn"), "⏹");
  assert.strictEqual(registry["listen-btn"].getAttribute("aria-pressed"), "true");

  app.tts.play(app.state.dish); // 再次点击 → 停止
  assert.ok(env.speech.cancelled >= 1);
  assert.strictEqual(app.tts.speaking, false);
  assert.strictEqual(textOf("listen-btn"), "🔊");
});

test("专题页：数量与出处说明", function () {
  app.openTheme("idol");
  assert.strictEqual(app.state.view, "results");
  assert.strictEqual(childrenOf("results-list").length, 4);
  assert.ok(textOf("results-title").indexOf("爱豆同款") !== -1);
  assert.strictEqual(textOf("results-count"), "4 道菜");

  // 有 appearances 的菜（炸鸡/五花肉/年糕）应带出处说明
  var liWithNote = childrenOf("results-list").filter(function (li) {
    return li.children.length === 2 && li.children[1].className === "result-note";
  });
  assert.strictEqual(liWithNote.length, 3);
});

test("回到首页按钮", function () {
  app.openTheme("idol");
  assert.strictEqual(app.state.view, "results");
  assert.strictEqual(textOf("back-home"), "← 首页");
  registry["back-home"].listeners.click[0]();
  assert.strictEqual(app.state.view, "home");
  assert.strictEqual(env.location.hash, "");
});

test("搜索历史：记录/去重/回看/清空", function () {
  var history = JSON.parse(env.storageData["km:history"]);
  assert.ok(history.indexOf("辣的鸡肉") !== -1, "应记录之前搜索");

  app.runSearch("牛肉");
  assert.strictEqual(registry["history"].hidden, false);
  assert.ok(childrenOf("history-chips").length >= 2);

  var countBefore = JSON.parse(env.storageData["km:history"]).length;
  app.runSearch("牛肉"); // 重复搜索去重
  var countAfter = JSON.parse(env.storageData["km:history"]).length;
  assert.strictEqual(countAfter, countBefore, "重复搜索不应增加记录");

  app.clearHistory();
  assert.strictEqual(registry["history"].hidden, true);
  assert.strictEqual(childrenOf("history-chips").length, 0);
});

test("hash 深链接：dish / theme / 空 hash", function () {
  env.location.hash = "#/dish/kimchi-jjigae";
  assert.strictEqual(app.state.view, "dish");
  assert.strictEqual(textOf("dish-name"), "泡菜汤");

  env.location.hash = "#/theme/variety";
  assert.strictEqual(app.state.view, "results");
  assert.strictEqual(childrenOf("results-list").length, 6);
  assert.ok(textOf("results-title").indexOf("综艺同款") !== -1);

  env.location.hash = "";
  assert.strictEqual(app.state.view, "home");
  assert.strictEqual(registry["home-view"].hidden, false);
});

test("防抖实时搜索", async function () {
  registry["search-input"].value = "泡菜";
  registry["search-input"].listeners.input[0]();
  await new Promise(function (resolve) { setTimeout(resolve, 350); });
  assert.strictEqual(app.state.view, "results");
  assert.ok(childrenOf("results-list").length >= 2, "「泡菜」应命中多道菜");
  assert.strictEqual(registry["history"].hidden, true, "实时搜索不应写入历史");
});

test("未找到状态", function () {
  app.runSearch("가나다라마바");
  assert.strictEqual(app.state.view, "notfound");
  assert.ok(textOf("not-found-title").indexOf("没找到") !== -1);
});
