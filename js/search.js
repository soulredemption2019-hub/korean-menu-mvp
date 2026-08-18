/**
 * js/search.js — 纯函数搜索引擎（无 DOM 依赖，可单测）
 *
 * 功能：
 *   tokenize  查询分词（英文/韩文按词切分；中文按字切分并过滤助词）
 *   scoreDish 相关度打分（菜名 > 罗马音 > 类型/口味标签 > 别名 > 食材 > 描述）
 *   query     组合检索：模糊搜索 + 辣度/类型筛选，按相关度排序返回
 */
(function (global) {
  "use strict";

  var STOP_CHARS = "的了和与或想吃喝点要来份碗个也就一这那最我你是在有吗吧啊呢会能都很太没啥什么么哪些".split("");

  /** 分词：返回 [{ text, cjk: [单字...] }]，cjk 为空数组表示非中文词 */
  function tokenize(query) {
    return String(query || "")
      .toLowerCase()
      .split(/[\s,，、.。!！?？:：;；'"“”"（）()[\]「」]+/)
      .filter(Boolean)
      .map(function (word) {
        var cjkMatch = word.match(/[\u4e00-\u9fff]/g);
        var chars = cjkMatch
          ? cjkMatch.filter(function (c) { return STOP_CHARS.indexOf(c) === -1; })
          : [];
        return { text: word, cjk: chars };
      });
  }

  function lowerAll(list) {
    return (list || []).map(function (s) { return String(s).toLowerCase(); });
  }

  /** 提取菜品各检索字段（三种语言） */
  function buildIndex(dish, dict) {
    var nameTexts = lowerAll([dish.name.ko, dish.name.en, dish.name.zh]);
    var ingredientTexts = lowerAll([dish.ingredients.ko, dish.ingredients.en, dish.ingredients.zh]);
    var bodyTexts = lowerAll([
      dish.desc.ko, dish.desc.en, dish.desc.zh,
      dish.tip.ko, dish.tip.en, dish.tip.zh
    ]);
    var termTexts = lowerAll([
      dish.searchTerms.ko, dish.searchTerms.en, dish.searchTerms.zh
    ].reduce(function (acc, list) { return acc.concat(list); }, []));

    // 类型 / 口味标签（三语，用于结构化检索）
    var labelTexts = [];
    ["ko", "en", "zh"].forEach(function (lang) {
      var d = dict[lang] || {};
      if (d.categories && d.categories[dish.category]) labelTexts.push(d.categories[dish.category].toLowerCase());
      (dish.tastes || []).forEach(function (taste) {
        if (d.tastes && d.tastes[taste]) labelTexts.push(d.tastes[taste].toLowerCase());
      });
    });

    return {
      names: nameTexts,
      roman: dish.roman.toLowerCase(),
      labels: labelTexts,
      terms: termTexts,
      ingredients: ingredientTexts,
      body: bodyTexts
    };
  }

  /** 打分：{ matched: 是否所有 token 都命中, score: 相关度总分 } */
  function scoreDish(dish, tokens, dict) {
    var idx = buildIndex(dish, dict);
    var score = 0;
    var matchedTokens = 0;

    tokens.forEach(function (tok) {
      var gained = 0;

      if (tok.cjk.length > 0) {
        // 中文：单字 AND 匹配
        var hitChars = 0;
        tok.cjk.forEach(function (ch) {
          var cs = 0;
          if (idx.names.some(function (n) { return n.indexOf(ch) !== -1; })) cs = 8;
          else if (idx.labels.some(function (t) { return t.indexOf(ch) !== -1; })) cs = 6;
          else if (idx.terms.some(function (t) { return t.indexOf(ch) !== -1; })) cs = 5;
          else if (idx.ingredients.some(function (t) { return t.indexOf(ch) !== -1; })) cs = 3;
          else if (idx.body.some(function (t) { return t.indexOf(ch) !== -1; })) cs = 1;
          if (cs > 0) { hitChars++; gained += cs; }
        });
        if (hitChars === tok.cjk.length) matchedTokens++;
      } else {
        var t = tok.text;
        if (idx.names.some(function (n) { return n === t; })) gained = 14;
        else if (idx.names.some(function (n) { return n.indexOf(t) !== -1; })) gained = 10;
        else if (idx.roman.indexOf(t) !== -1) gained = 9;
        else if (idx.labels.some(function (x) { return x.indexOf(t) !== -1; })) gained = 7;
        else if (idx.terms.some(function (x) { return x.indexOf(t) !== -1; })) gained = 6;
        else if (idx.ingredients.some(function (x) { return x.indexOf(t) !== -1; })) gained = 4;
        else if (idx.body.some(function (x) { return x.indexOf(t) !== -1; })) gained = 2;
        if (gained > 0) matchedTokens++;
      }

      score += gained;
    });

    return { matched: matchedTokens === tokens.length, score: score };
  }

  /**
   * 组合检索。
   * filters: { spice: 1..5 | 0, category: string | null }
   * 返回按相关度降序（同分按评分降序）的菜品数组。
   */
  function query(dishes, q, filters, dict) {
    var tokens = tokenize(q);
    if (tokens.length === 0) tokens = [{ text: "", cjk: [] }];
    var d = dict || KM.i18n.dict;

    var results = dishes
      .map(function (dish) {
        return { dish: dish, s: scoreDish(dish, tokens, d) };
      })
      .filter(function (r) { return r.s.matched; });

    if (filters) {
      if (filters.spice) {
        results = results.filter(function (r) { return r.dish.spice === filters.spice; });
      }
      if (filters.category) {
        results = results.filter(function (r) { return r.dish.category === filters.category; });
      }
    }

    results.sort(function (a, b) {
      return b.s.score - a.s.score || b.dish.rating - a.dish.rating;
    });

    return results.map(function (r) { return r.dish; });
  }

  /** 按 id 找菜 */
  function byId(dishes, id) {
    return dishes.filter(function (d) { return d.id === id; })[0] || null;
  }

  /** 某专题下的菜品（按评分降序） */
  function inCollection(dishes, collectionKey, filters) {
    var list = dishes.filter(function (d) {
      return (d.collections || []).indexOf(collectionKey) !== -1;
    });
    if (filters) {
      if (filters.spice) list = list.filter(function (d) { return d.spice === filters.spice; });
      if (filters.category) list = list.filter(function (d) { return d.category === filters.category; });
    }
    return list.slice().sort(function (a, b) { return b.rating - a.rating; });
  }

  /** 人气菜单：按评分取前 N 道 */
  function popular(dishes, n) {
    return dishes.slice().sort(function (a, b) { return b.rating - a.rating; }).slice(0, n || 8);
  }

  var KM = (global.KM = global.KM || {});
  KM.search = {
    tokenize: tokenize,
    scoreDish: scoreDish,
    query: query,
    byId: byId,
    inCollection: inCollection,
    popular: popular,
    stopChars: STOP_CHARS
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = KM;
  }
})(typeof window !== "undefined" ? window : globalThis);
