/**
 * tests/search.test.js — 搜索引擎单测（分词 / 打分 / 排序 / 筛选）
 * 运行: node --test tests/*.test.js
 */
"use strict";

var test = require("node:test");
var assert = require("node:assert");

var KM = require("../js/data.js");
require("../js/i18n.js");
require("../js/search.js");

var search = KM.search;
var dishes = KM.dishes;

function ids(list) {
  return list.map(function (d) { return d.id; });
}

// ===== 分词 =====

test("分词：空格/标点切分", function () {
  var tokens = search.tokenize("spicy chicken, soup");
  assert.deepStrictEqual(tokens.map(function (t) { return t.text; }), ["spicy", "chicken", "soup"]);
});

test("分词：中文按字切分并过滤助词", function () {
  var tokens = search.tokenize("辣的鸡肉");
  assert.strictEqual(tokens.length, 1);
  assert.deepStrictEqual(tokens[0].cjk, ["辣", "鸡", "肉"]);
});

test("分词：全助词查询被过滤为空字符集", function () {
  var tokens = search.tokenize("想的");
  assert.strictEqual(tokens.length, 1);
  assert.deepStrictEqual(tokens[0].cjk, []);
});

// ===== 召回与排序 =====

test("模糊搜索「辣的鸡肉」", function () {
  var results = search.query(dishes, "辣的鸡肉", null);
  var got = ids(results);
  ["dakgalbi", "jjimdak", "fried-chicken"].forEach(function (id) {
    assert.ok(got.indexOf(id) !== -1, "应包含 " + id);
  });
  // 相关度：菜名含「辣」「鸡」的 닭갈비 应排第一
  assert.strictEqual(got[0], "dakgalbi");
});

test("模糊搜索「汤」", function () {
  var results = search.query(dishes, "汤", null);
  ["kimchi-jjigae", "galbitang", "yukgaejang"].forEach(function (id) {
    assert.ok(ids(results).indexOf(id) !== -1, "应包含 " + id);
  });
});

test("模糊搜索「想喝汤」（助词过滤）", function () {
  var results = search.query(dishes, "想喝汤", null);
  assert.ok(results.length > 5);
  assert.ok(ids(results).indexOf("kimchi-jjigae") !== -1);
});

test("英文搜索 spicy chicken", function () {
  var results = search.query(dishes, "spicy chicken", null);
  ["dakgalbi", "fried-chicken"].forEach(function (id) {
    assert.ok(ids(results).indexOf(id) !== -1, "应包含 " + id);
  });
});

test("韩文搜索 매운 찌개", function () {
  var results = search.query(dishes, "매운 찌개", null);
  ["kimchi-jjigae", "sundubu-jjigae", "budae-jjigae"].forEach(function (id) {
    assert.ok(ids(results).indexOf(id) !== -1, "应包含 " + id);
  });
});

test("相关度：菜名命中排在别名命中之前", function () {
  // "fried" 在炸鸡菜名中出现，其他菜只有别名命中
  var results = search.query(dishes, "fried", null);
  assert.strictEqual(ids(results)[0], "fried-chicken");
});

test("相关度：名称精确命中得分最高", function () {
  var results = search.query(dishes, "냉면", null);
  assert.strictEqual(ids(results)[0], "naengmyeon");
});

test("无结果查询返回空数组", function () {
  var results = search.query(dishes, "가나다라마바사", null);
  assert.deepStrictEqual(results, []);
});

// ===== 筛选 =====

test("辣度筛选：辣的鸡肉 + spice4 → 닭갈비/육개장", function () {
  var results = search.query(dishes, "辣的鸡肉", { spice: 4 });
  assert.deepStrictEqual(ids(results).sort(), ["dakgalbi", "yukgaejang"]);
});

test("类型筛选：汤 + soup 类", function () {
  var results = search.query(dishes, "汤", { category: "soup" });
  assert.ok(results.length > 0);
  ids(results).forEach(function (id) {
    assert.strictEqual(KM.search.byId(dishes, id).category, "soup");
  });
  ["galbitang", "haejanguk", "yukgaejang"].forEach(function (id) {
    assert.ok(ids(results).indexOf(id) !== -1, "应包含 " + id);
  });
});

test("组合筛选：辣度1 + 面食", function () {
  var results = search.query(dishes, "", { spice: 1, category: "noodle" });
  assert.ok(results.length > 0);
  ids(results).forEach(function (id) {
    var d = KM.search.byId(dishes, id);
    assert.strictEqual(d.spice, 1);
    assert.strictEqual(d.category, "noodle");
  });
  assert.ok(ids(results).indexOf("naengmyeon") !== -1);
  assert.ok(ids(results).indexOf("japchae") !== -1);
});

// ===== 辅助查询 =====

test("byId 查找", function () {
  assert.strictEqual(search.byId(dishes, "bibimbap").roman, "Bibimbap");
  assert.strictEqual(search.byId(dishes, "不存在"), null);
});

test("inCollection 专题数量", function () {
  assert.strictEqual(search.inCollection(dishes, "idol").length, 4);
  assert.strictEqual(search.inCollection(dishes, "kdrama").length, 8);
  assert.strictEqual(search.inCollection(dishes, "variety").length, 6);
});

test("inCollection 组合筛选", function () {
  var results = search.inCollection(dishes, "kdrama", { spice: 1 });
  ids(results).forEach(function (id) {
    assert.strictEqual(KM.search.byId(dishes, id).spice, 1);
  });
});

test("popular 返回评分最高的前 N 道", function () {
  var top = search.popular(dishes, 5);
  assert.strictEqual(top.length, 5);
  for (var i = 1; i < top.length; i++) {
    assert.ok(top[i - 1].rating >= top[i].rating, "应按评分降序");
  }
});
