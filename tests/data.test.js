/**
 * tests/data.test.js — 数据层与 i18n 一致性校验
 * 运行: node --test tests/*.test.js
 */
"use strict";

var test = require("node:test");
var assert = require("node:assert");

var KM = require("../js/data.js");
require("../js/i18n.js");

var dishes = KM.dishes;
var collections = KM.collections;
var schema = KM.schema;

test("菜品数量为 117 道（本地精修 20 + 远程新增 97）", function () {
  assert.strictEqual(dishes.length, 117);
});

test("id 唯一", function () {
  var ids = dishes.map(function (d) { return d.id; });
  assert.strictEqual(new Set(ids).size, ids.length);
});

test("每道菜 schema 字段完整", function () {
  dishes.forEach(function (d) {
    ["id", "roman", "name", "category", "tastes", "desc", "ingredients", "tip",
      "spice", "price", "kcal", "rating", "searchTerms", "collections", "appearances"]
      .forEach(function (field) {
        assert.ok(d[field] !== undefined, d.id + " 缺少字段 " + field);
      });
    ["ko", "en", "zh"].forEach(function (lang) {
      ["name", "desc", "ingredients", "tip", "searchTerms"].forEach(function (field) {
        assert.ok(d[field][lang], d.id + " 缺少 " + field + "." + lang);
      });
    });
  });
});

test("category / tastes 值合法", function () {
  dishes.forEach(function (d) {
    assert.ok(schema.categories.indexOf(d.category) !== -1, d.id + " 非法 category: " + d.category);
    d.tastes.forEach(function (t) {
      assert.ok(schema.tastes.indexOf(t) !== -1, d.id + " 非法 taste: " + t);
    });
  });
});

test("价格区间合法（min > 0 且 min <= max）", function () {
  dishes.forEach(function (d) {
    assert.ok(d.price.min > 0 && d.price.max >= d.price.min, d.id + " 价格非法");
  });
});

test("评分 / 辣度 / 热量范围合法", function () {
  dishes.forEach(function (d) {
    assert.ok(d.rating >= 0 && d.rating <= 5, d.id + " 评分非法");
    assert.ok(d.spice >= 1 && d.spice <= 5, d.id + " 辣度非法");
    assert.ok(d.kcal > 0, d.id + " 热量非法");
  });
});

test("collections / appearances 引用合法", function () {
  var keys = collections.map(function (c) { return c.key; });
  dishes.forEach(function (d) {
    d.collections.forEach(function (key) {
      assert.ok(keys.indexOf(key) !== -1, d.id + " 引用不存在的专题 " + key);
    });
    d.appearances.forEach(function (a) {
      assert.ok(keys.indexOf(a.collection) !== -1, d.id + " appearance 专题非法");
      assert.ok(a.note.ko && a.note.en && a.note.zh, d.id + " appearance 缺三语 note");
    });
  });
});

test("专题存在且非空", function () {
  collections.forEach(function (c) {
    var count = dishes.filter(function (d) { return d.collections.indexOf(c.key) !== -1; }).length;
    assert.ok(count > 0, "专题 " + c.key + " 为空");
    assert.ok(c.name.ko && c.name.en && c.name.zh, c.key + " 缺三语名称");
    assert.ok(c.desc.ko && c.desc.en && c.desc.zh, c.key + " 缺三语描述");
  });
});

test("汇率定义合法", function () {
  assert.ok(KM.currencies.CNY.rate > 0);
  assert.ok(KM.currencies.USD.rate > 0);
});

// ===== i18n 一致性 =====

function flattenKeys(obj, prefix, acc) {
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    var path = prefix ? prefix + "." + key : key;
    if (typeof value === "string") acc.push(path);
    else if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      flattenKeys(value, path, acc);
    }
  });
  return acc;
}

test("三种语言字典键集合完全一致", function () {
  var dict = KM.i18n.dict;
  var langs = KM.i18n.langs;
  var keySets = langs.map(function (lang) {
    return flattenKeys(dict[lang], "", []).sort().join("\n");
  });
  assert.strictEqual(keySets[0], keySets[1], "ko/en 键不一致");
  assert.strictEqual(keySets[1], keySets[2], "en/zh 键不一致");
});

test("每种语言都定义了全部 category / taste / 辣度标签", function () {
  var dict = KM.i18n.dict;
  KM.i18n.langs.forEach(function (lang) {
    schema.categories.forEach(function (cat) {
      assert.ok(dict[lang].categories[cat], lang + " 缺 category 标签 " + cat);
    });
    schema.tastes.forEach(function (t) {
      assert.ok(dict[lang].tastes[t], lang + " 缺 taste 标签 " + t);
    });
    assert.strictEqual(dict[lang].spiceLevels.length, 5, lang + " spiceLevels 应为 5 项");
  });
});

test("t() 取值与插值", function () {
  assert.strictEqual(KM.i18n.t("zh", "card.price"), "价格");
  assert.strictEqual(KM.i18n.t("zh", "results.count", { n: 3 }), "3 道菜");
  assert.strictEqual(KM.i18n.t("en", "results.count", { n: 2 }), "2 results");
  assert.strictEqual(KM.i18n.t("zh", "不存在的.key"), "不存在的.key"); // 容错
});
