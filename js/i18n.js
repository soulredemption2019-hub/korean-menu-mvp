/**
 * js/i18n.js — 界面文案字典（单一数据源，无冗余）
 *
 * 用法: KM.i18n.t(lang, "key.path", { var: value })
 * 三种语言: ko / en / zh（UI 语言码用 zh，不再使用 cn）
 */
(function (global) {
  "use strict";

  var DICT = {
    ko: {
      langName: "한국어",
      title: "한국 메뉴 도우미",
      subtitle: "한국 음식 메뉴 검색·번역·발음 도우미",
      placeholder: "메뉴, 재료, 맛으로 검색. 예: 매운 찌개 / 치킨",
      searchBtn: "검색",
      searchAria: "메뉴 검색",
      history: { title: "최근 검색", clear: "지우기" },
      filters: { spice: "맵기", category: "종류", all: "전체" },
      spiceLevels: ["안 매움", "살짝 매움", "보통 매움", "매움", "아주 매움"],
      categories: {
        stew: "찌개·조림",
        soup: "국·탕",
        rice: "밥",
        noodle: "면",
        grill: "구이",
        stir: "볶음",
        fried: "튀김",
        snack: "분식·떡",
        side: "반찬·안주",
        drink: "음료",
        porridge: "죽"
      },
      tastes: {
        spicy: "매운", sweet: "달콤", savory: "짭짤", mild: "담백",
        sour: "새콤", hot: "따뜻한", cold: "차가운", fresh: "산뜻한"
      },
      collections: { title: "테마 추천" },
      popular: { title: "인기 메뉴" },
      results: { title: "검색 결과", count: "{n}개", backHome: "← 홈" },
      theme: { count: "{n}개 메뉴" },
      notFound: { title: "😅 메뉴를 찾지 못했어요", hint: "재료나 맛으로 검색해 보세요. 예: '매운 치킨', '따뜻한 국'" },
      card: {
        price: "가격",
        approx: "약",
        kcal: "칼로리",
        spice: "맵기",
        rating: "별점",
        ratingAria: "평점 {rating}점",
        myRating: "내 별점",
        rateHint: "별점을 눌러 평가해 주세요",
        clearRating: "내 별점 지우기",
        ingredients: "주요 재료",
        tip: "팁",
        listen: "발음 듣기",
        listenStop: "발음 중지",
        inTheme: "이 메뉴가 나오는 테마"
      },
      tts: { unsupported: "이 브라우저는 음성 발음을 지원하지 않아요." },
      footer: "메뉴 데이터는 계속 추가할 예정이에요 · 가격은 참고용"
    },
    en: {
      langName: "English",
      title: "Korean Menu Helper",
      subtitle: "Search, translate, and pronounce Korean dishes",
      placeholder: "Search by dish, ingredient, or taste. e.g. spicy stew / chicken",
      searchBtn: "Search",
      searchAria: "Search menus",
      history: { title: "Recent searches", clear: "Clear" },
      filters: { spice: "Spiciness", category: "Type", all: "All" },
      spiceLevels: ["Not spicy", "Mild", "Medium", "Spicy", "Very spicy"],
      categories: {
        stew: "Stews & braises",
        soup: "Soups",
        rice: "Rice",
        noodle: "Noodles",
        grill: "Grill",
        stir: "Stir-fries",
        fried: "Fried",
        snack: "Street food & rice cakes",
        side: "Side dishes",
        drink: "Drinks",
        porridge: "Porridge"
      },
      tastes: {
        spicy: "Spicy", sweet: "Sweet", savory: "Savory", mild: "Mild",
        sour: "Tangy", hot: "Warm", cold: "Cold", fresh: "Fresh"
      },
      collections: { title: "Theme Picks" },
      popular: { title: "Popular dishes" },
      results: { title: "Search results", count: "{n} results", backHome: "← Home" },
      theme: { count: "{n} dishes" },
      notFound: { title: "😅 No dishes found", hint: "Try searching by ingredient or taste, e.g. 'spicy chicken', 'warm soup'." },
      card: {
        price: "Price",
        approx: "approx.",
        kcal: "kcal",
        spice: "Spiciness",
        rating: "Rating",
        ratingAria: "Rated {rating} out of 5",
        myRating: "My rating",
        rateHint: "Tap a star to rate",
        clearRating: "Clear my rating",
        ingredients: "Main ingredients",
        tip: "Tip",
        listen: "Listen to pronunciation",
        listenStop: "Stop pronunciation",
        inTheme: "Themes featuring this dish"
      },
      tts: { unsupported: "This browser doesn't support speech synthesis." },
      footer: "Menu data keeps growing · prices are estimates"
    },
    zh: {
      langName: "中文",
      title: "韩餐点餐助手",
      subtitle: "韩餐菜单搜索、翻译与发音助手",
      placeholder: "按菜名、食材、口味搜索。例如：辣的鸡肉 / 汤",
      searchBtn: "查询",
      searchAria: "搜索菜单",
      history: { title: "最近搜索", clear: "清空" },
      filters: { spice: "辣度", category: "类型", all: "全部" },
      spiceLevels: ["不辣", "微辣", "中辣", "很辣", "超辣"],
      categories: {
        stew: "汤锅炖菜",
        soup: "汤类",
        rice: "米饭类",
        noodle: "面食",
        grill: "烤肉烤物",
        stir: "炒菜",
        fried: "炸物",
        snack: "街头小吃·糕饼",
        side: "小菜·下酒菜",
        drink: "饮品",
        porridge: "粥类"
      },
      tastes: {
        spicy: "辣", sweet: "甜", savory: "咸香", mild: "清淡",
        sour: "酸爽", hot: "暖热", cold: "冰凉", fresh: "清爽"
      },
      collections: { title: "专题推荐" },
      popular: { title: "热门菜单" },
      results: { title: "搜索结果", count: "{n} 道菜", backHome: "← 首页" },
      theme: { count: "{n} 道菜" },
      notFound: { title: "😅 暂时没找到这个菜单", hint: "试试按食材或口味搜索，例如「辣的鸡肉」「热汤」" },
      card: {
        price: "价格",
        approx: "约",
        kcal: "热量",
        spice: "辣度",
        rating: "评分",
        ratingAria: "评分 {rating} 分",
        myRating: "我的评分",
        rateHint: "点击星星打分",
        clearRating: "清除我的评分",
        ingredients: "主要食材",
        tip: "小贴士",
        listen: "听韩语发音",
        listenStop: "停止发音",
        inTheme: "这道菜出现的专题"
      },
      tts: { unsupported: "当前浏览器不支持语音合成。" },
      footer: "菜单数据会持续扩充 · 价格仅供参考"
    }
  };

  /**
   * 取字典文案: t("zh", "card.price") → "价格"
   * 支持 {var} 插值: t("zh", "results.count", { n: 3 }) → "3 道菜"
   */
  function t(lang, path, vars) {
    var dict = DICT[lang] || DICT.ko;
    var value = path.split(".").reduce(function (acc, key) {
      return acc ? acc[key] : undefined;
    }, dict);
    if (value === undefined || value === null) return path;
    if (typeof value !== "string") return value;
    return value.replace(/\{(\w+)\}/g, function (_, name) {
      return vars && vars[name] !== undefined ? vars[name] : "{" + name + "}";
    });
  }

  var KM = (global.KM = global.KM || {});
  KM.i18n = { langs: ["ko", "en", "zh"], dict: DICT, t: t };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = KM;
  }
})(typeof window !== "undefined" ? window : globalThis);
