// ============================================================
// 韩国菜单翻译 · 通用语言切换框架
// ------------------------------------------------------------
// 怎么加一种新语言（不用改任何逻辑，只加数据）：
//   1. LANGUAGES 里加一行，例如 { code: "ja", label: "日本語" }
//   2. I18N 里加一块该语言的界面文案（每个 key 都要有）
//   3. 每个菜单的 name / desc / ingredients / tip 补该语言
//   缺的词会自动回退到默认语言（DEFAULT_LANG），不会白屏。
// ============================================================

// ===== 语言注册表（下拉框选项来源）=====
const LANGUAGES = [
  { code: "zh", label: "中文" },
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" }
];

const DEFAULT_LANG = "zh";
const STORAGE_KEY = "korean-menu-lang";

// ===== 菜单数据（name/desc/ingredients/tip 都按语言存）=====
const DISHES = [
  {
    name: { zh: "泡菜汤", ko: "김치찌개", en: "Kimchi Stew" },
    roman: "Kimchi Jjigae",
    desc: {
      zh: "用发酵泡菜和猪肉（或金枪鱼）一起煮的汤锅，是韩国家常菜的代表。",
      ko: "발효된 김치와 돼지고기(또는 참치)를 함께 끓인 찌개로, 한국 가정식의 대표입니다.",
      en: "A stew made with fermented kimchi and pork (or tuna) — the representative Korean home-cooked dish."
    },
    ingredients: {
      zh: "泡菜、猪肉、豆腐、洋葱、大葱",
      ko: "김치, 돼지고기, 두부, 양파, 대파",
      en: "Kimchi, pork, tofu, onion, scallion"
    },
    spice: 3,
    tip: {
      zh: "很下饭，配白米饭吃最正宗。怕辣可以说“안 맵게 해주세요”（请做不辣的）。",
      ko: "밥과 함께 먹으면 최고입니다. 맵지 않게 하려면 '안 맵게 해주세요'라고 말하세요.",
      en: "Best eaten with rice. To make it milder, say '안 맵게 해주세요' (please make it not spicy)."
    }
  },
  {
    name: { zh: "拌饭", ko: "비빔밥", en: "Mixed Rice Bowl" },
    roman: "Bibimbap",
    desc: {
      zh: "米饭上铺各种蔬菜、鸡蛋和辣椒酱，吃之前拌匀。",
      ko: "밥 위에 여러 가지 나물과 계란, 고추장을 얹어 비벼 먹는 음식입니다.",
      en: "Rice topped with seasoned vegetables, an egg and gochujang, mixed together before eating."
    },
    ingredients: {
      zh: "米饭、蔬菜、鸡蛋、辣椒酱、芝麻油",
      ko: "밥, 나물, 계란, 고추장, 참기름",
      en: "Rice, vegetables, egg, gochujang, sesame oil"
    },
    spice: 1,
    tip: {
      zh: "全州拌饭最有名；辣椒酱可以按自己口味少放。",
      ko: "전주 비빔밥이 가장 유명합니다. 고추장은 입맛에 맞게 조절하세요.",
      en: "Jeonju bibimbap is the most famous. Adjust the gochujang to your own taste."
    }
  },
  {
    name: { zh: "烤牛肉", ko: "불고기", en: "Grilled Marinated Beef" },
    roman: "Bulgogi",
    desc: {
      zh: "用酱油、糖、梨汁腌过的薄牛肉片，甜咸口味。",
      ko: "간장, 설탕, 배즙에 재운 얇은 소고기를 구운 음식으로, 달콤한 양념이 특징입니다.",
      en: "Thin slices of beef marinated in soy sauce, sugar and pear juice, then grilled — sweet and savory."
    },
    ingredients: {
      zh: "牛肉、洋葱、酱油、梨、大蒜",
      ko: "소고기, 양파, 간장, 배, 마늘",
      en: "Beef, onion, soy sauce, pear, garlic"
    },
    spice: 1,
    tip: {
      zh: "甜口不辣，很适合第一次吃韩餐的人。",
      ko: "맵지 않고 달콤해서 한국 음식을 처음 먹는 분에게 추천합니다.",
      en: "Not spicy and sweet — great for people trying Korean food for the first time."
    }
  },
  {
    name: { zh: "烤五花肉", ko: "삼겹살", en: "Grilled Pork Belly" },
    roman: "Samgyeopsal",
    desc: {
      zh: "厚切五花肉在铁板上烤，用生菜包着吃。",
      ko: "두툼한 삼겹살을 철판에 구워 상추에 싸 먹는 음식입니다.",
      en: "Thick slices of pork belly grilled on an iron plate, wrapped in lettuce leaves."
    },
    ingredients: {
      zh: "猪五花、生菜、蒜、青阳辣椒、包饭酱",
      ko: "삼겹살, 상추, 마늘, 청양고추, 쌈장",
      en: "Pork belly, lettuce, garlic, cheongyang pepper, ssamjang"
    },
    spice: 1,
    tip: {
      zh: "烤到微焦蘸盐吃最香；配烧酒（소주）是经典组合。",
      ko: "겉이 노릇하게 구워 소금에 찍어 먹으면 가장 맛있습니다. 소주와 함께 먹는 것이 정석입니다.",
      en: "Best eaten with salt when crispy. The classic pairing is with soju."
    }
  },
  {
    name: { zh: "辣炒年糕", ko: "떡볶이", en: "Spicy Rice Cakes" },
    roman: "Tteokbokki",
    desc: {
      zh: "糯米年糕用辣酱炒制，韩国街边小吃代表。",
      ko: "쫄깃한 떡을 매운 양념에 볶은 음식으로, 길거리 음식의 대표입니다.",
      en: "Chewy rice cakes stir-fried in spicy sauce — a Korean street food icon."
    },
    ingredients: {
      zh: "年糕、鱼糕、辣椒酱、大葱",
      ko: "떡, 어묵, 고추장, 대파",
      en: "Rice cakes, fish cake, gochujang, scallion"
    },
    spice: 3,
    tip: {
      zh: "通常配鱼糕串（어묵）一起吃；加奶酪会更柔和。",
      ko: "보통 어묵과 함께 먹습니다. 치즈를 올리면 맛이 부드러워집니다.",
      en: "Usually eaten with fish cake (eomuk). Adding cheese makes it milder."
    }
  },
  {
    name: { zh: "冷面", ko: "냉면", en: "Cold Noodles" },
    roman: "Naengmyeon",
    desc: {
      zh: "荞麦冷面配冰镇牛肉汤，夏天必吃。",
      ko: "메밀국수에 차가운 육수를 부어 먹는 음식으로, 여름에 인기가 많습니다.",
      en: "Buckwheat noodles in ice-cold beef broth — a must-have in summer."
    },
    ingredients: {
      zh: "荞麦面、牛肉汤、黄瓜、鸡蛋、梨",
      ko: "메밀면, 소고기 육수, 오이, 계란, 배",
      en: "Buckwheat noodles, beef broth, cucumber, egg, pear"
    },
    spice: 1,
    tip: {
      zh: "吃前可以让店员剪一下面；加醋和芥末更开胃。",
      ko: "먹기 전에 가위로 면을 잘라 달라고 하세요. 식초와 겨자를 넣으면 더 시원합니다.",
      en: "Ask the staff to cut the noodles before eating. Vinegar and mustard make it fresher."
    }
  },
  {
    name: { zh: "大酱汤", ko: "된장찌개", en: "Soybean Paste Stew" },
    roman: "Doenjang Jjigae",
    desc: {
      zh: "用大豆酱做底的浓汤，健康清淡的家常味。",
      ko: "된장으로 끓인 진한 국물의 찌개로, 건강하고 담백한 가정식입니다.",
      en: "A hearty stew made with fermented soybean paste — healthy, homey and mild."
    },
    ingredients: {
      zh: "大酱、豆腐、西葫芦、洋葱、青椒",
      ko: "된장, 두부, 애호박, 양파, 청양고추",
      en: "Doenjang, tofu, zucchini, onion, green chili"
    },
    spice: 1,
    tip: {
      zh: "不辣，配米饭吃很舒服。",
      ko: "맵지 않고 밥과 함께 먹기 좋습니다.",
      en: "Not spicy — goes well with a bowl of rice."
    }
  },
  {
    name: { zh: "嫩豆腐汤", ko: "순두부찌개", en: "Soft Tofu Stew" },
    roman: "Sundubu Jjigae",
    desc: {
      zh: "嫩豆腐配辣汤，滚烫上桌，通常加一个鸡蛋。",
      ko: "부드러운 순두부와 매운 국물을 끓인 찌개로, 뜨겁게 나오며 계란을 넣어 먹습니다.",
      en: "Soft tofu in a spicy broth, served boiling hot and often finished with an egg."
    },
    ingredients: {
      zh: "嫩豆腐、辣汤底、鸡蛋、蛤蜊",
      ko: "순두부, 매운 국물, 계란, 바지락",
      en: "Soft tofu, spicy broth, egg, clams"
    },
    spice: 3,
    tip: {
      zh: "上桌时还很烫；会附一碗米饭，把饭泡进去很好吃。",
      ko: "나올 때 아주 뜨거우니 조심하세요. 밥을 말아 먹으면 맛있습니다.",
      en: "Very hot when served — be careful. Soaking rice in the broth is delicious."
    }
  },
  {
    name: { zh: "杂菜", ko: "잡채", en: "Stir-fried Glass Noodles" },
    roman: "Japchae",
    desc: {
      zh: "红薯粉条炒蔬菜，甜咸口味，韩国节日菜之一。",
      ko: "당면에 여러 채소를 볶은 음식으로, 달콤한 맛이 나는 명절 음식입니다.",
      en: "Sweet potato glass noodles stir-fried with vegetables — a sweet, savory holiday dish."
    },
    ingredients: {
      zh: "粉条、菠菜、胡萝卜、洋葱、芝麻",
      ko: "당면, 시금치, 당근, 양파, 참깨",
      en: "Glass noodles, spinach, carrot, onion, sesame"
    },
    spice: 1,
    tip: {
      zh: "不辣；和烤牛肉（불고기）一起点是常见组合。",
      ko: "맵지 않습니다. 불고기와 함께 주문하는 경우가 많습니다.",
      en: "Not spicy. Often ordered together with bulgogi."
    }
  },
  {
    name: { zh: "紫菜包饭", ko: "김밥", en: "Seaweed Rice Rolls" },
    roman: "Kimbap",
    desc: {
      zh: "紫菜卷米饭和蔬菜，便利店和街边都常见。",
      ko: "김에 밥과 채소를 말아 만든 음식으로, 편의점과 길거리에서 흔히 볼 수 있습니다.",
      en: "Rice and vegetables rolled in dried seaweed — common in convenience stores and on the street."
    },
    ingredients: {
      zh: "紫菜、米饭、胡萝卜、鸡蛋、火腿",
      ko: "김, 밥, 당근, 계란, 햄",
      en: "Seaweed, rice, carrot, egg, ham"
    },
    spice: 1,
    tip: {
      zh: "不辣，方便带走；野餐和赶课时首选。",
      ko: "맵지 않고 간편하게 들고 다닐 수 있어 소풍이나 수업 시간에 좋습니다.",
      en: "Not spicy and easy to carry — great for picnics or busy class days."
    }
  },
  {
    name: { zh: "韩国拉面", ko: "라면", en: "Korean Instant Noodles" },
    roman: "Ramyun",
    desc: {
      zh: "辛拉面这类煮面，韩国人从小吃到大。",
      ko: "신라면 같은 매운 인스턴트 면으로, 한국인이라면 누구나 좋아하는 음식입니다.",
      en: "Spicy instant noodles like Shin Ramyun — Korea's beloved comfort food."
    },
    ingredients: {
      zh: "面饼、辣味调料包、鸡蛋、大葱",
      ko: "면, 매운 스프, 계란, 대파",
      en: "Noodles, spicy seasoning packet, egg, scallion"
    },
    spice: 3,
    tip: {
      zh: "可以加鸡蛋和芝士；在便利店买回去煮最方便。",
      ko: "계란과 치즈를 넣어 먹을 수 있습니다. 편의점에서 사서 끓이면 가장 간편합니다.",
      en: "Add an egg or cheese. Easiest to cook from a convenience store pack."
    }
  },
  {
    name: { zh: "辣炒鸡排", ko: "닭갈비", en: "Spicy Stir-fried Chicken" },
    roman: "Dakgalbi",
    desc: {
      zh: "用辣酱炒鸡肉、年糕和蔬菜，春川特色菜。",
      ko: "매운 양념에 닭고기와 떡, 채소를 볶은 춘천의 대표 음식입니다.",
      en: "Chicken, rice cakes and vegetables stir-fried in spicy sauce — a Chuncheon specialty."
    },
    ingredients: {
      zh: "鸡肉、年糕、辣酱、卷心菜、红薯",
      ko: "닭고기, 떡, 고추장, 양배추, 고구마",
      en: "Chicken, rice cakes, gochujang, cabbage, sweet potato"
    },
    spice: 4,
    tip: {
      zh: "比较辣；快吃完时可以加饭炒成炒饭（볶음밥）。",
      ko: "꽤 맵습니다. 다 먹은 후 볶음밥을 주문해 볶아 먹는 것이 인기입니다.",
      en: "Quite spicy. After finishing, order fried rice (bokkeumbap) cooked in the same pan."
    }
  },
  {
    name: { zh: "部队锅", ko: "부대찌개", en: "Army Stew" },
    roman: "Budae Jjigae",
    desc: {
      zh: "午餐肉、火腿、香肠加辣汤底的火锅，战后诞生的“混合锅”。",
      ko: "햄과 소시지, 통조림 등을 매운 국물에 끓인 찌개로, 전쟁 후 생겨난 '모둠 찌개'입니다.",
      en: "A hot pot of ham, sausage and canned goods in spicy broth, born after the Korean War."
    },
    ingredients: {
      zh: "午餐肉、香肠、豆腐、泡菜、拉面",
      ko: "런천미트, 소시지, 두부, 김치, 라면",
      en: "Luncheon meat, sausage, tofu, kimchi, ramyun"
    },
    spice: 3,
    tip: {
      zh: "分量足，适合两三个人一起吃；可以加拉面。",
      ko: "양이 많아 2~3명이 함께 먹기 좋습니다. 라면 사리를 추가할 수 있습니다.",
      en: "Big portion — great for 2-3 people. You can add ramyun noodles."
    }
  },
  {
    name: { zh: "排骨汤", ko: "갈비탕", en: "Beef Short Rib Soup" },
    roman: "Galbitang",
    desc: {
      zh: "牛排骨炖的清汤，肉烂汤浓，清淡滋补。",
      ko: "소갈비를 푹 끓인 맑은 국물의 탕으로, 고기가 부드럽고 국물이 진합니다.",
      en: "Beef short ribs simmered into a clear, rich broth — light and nourishing."
    },
    ingredients: {
      zh: "牛排骨、萝卜、大葱、蒜",
      ko: "소갈비, 무, 대파, 마늘",
      en: "Beef short ribs, radish, scallion, garlic"
    },
    spice: 1,
    tip: {
      zh: "配细面（소면）吃也很常见。",
      ko: "담백하고 보양식입니다. 소면과 함께 먹는 것도 흔합니다.",
      en: "Light and restorative. Also commonly eaten with thin noodles (somyeon)."
    }
  },
  {
    name: { zh: "安东炖鸡", ko: "찜닭", en: "Braised Chicken" },
    roman: "Jjimdak",
    desc: {
      zh: "用酱油炖鸡肉和蔬菜，甜辣酱汁浓郁。",
      ko: "간장으로 닭고기와 채소를 조린 음식으로, 달고 매운 양념이 진하게 배어 있습니다.",
      en: "Chicken and vegetables braised in soy sauce — a rich, sweet and spicy sauce."
    },
    ingredients: {
      zh: "鸡肉、土豆、粉条、胡萝卜、辣椒",
      ko: "닭고기, 감자, 당면, 당근, 고추",
      en: "Chicken, potato, glass noodles, carrot, chili"
    },
    spice: 3,
    tip: {
      zh: "粉条吸满汤汁是精华；和米饭一起吃。",
      ko: "국물을 흡수한 당면이 별미입니다. 밥과 함께 드세요.",
      en: "The glass noodles that soak up the sauce are the highlight. Eat it with rice."
    }
  }
];

// ===== 界面文案（每个语言一块；加语言 = 加一块）=====
const I18N = {
  zh: {
    title: "🍜 韩国菜单翻译",
    subtitle: "给在韩留学生的韩餐查询工具",
    placeholder: "输入菜名（中/韩/英文均可），例如：泡菜汤",
    searchBtn: "查询",
    spiceLabel: "辣度",
    ingredientsLabel: "主要食材：",
    notFoundTitle: "😅 暂时没找到这个菜单",
    notFoundHint: "可以试试上方常见菜单，或者直接问店员。",
    matchTitle: "有 {n} 个可能的结果：",
    footer: "第一版 MVP · 菜单数据会慢慢扩充",
    docTitle: "韩国菜单翻译 · 留学生版",
    spice: { 1: "不辣", 2: "微辣", 3: "中辣", 4: "很辣", 5: "超辣" }
  },
  ko: {
    title: "🍜 한식 메뉴 번역",
    subtitle: "한국에서 생활하는 외국인 유학생을 위한 한식 검색 도구",
    placeholder: "메뉴 이름을 입력하세요 (예: 김치찌개)",
    searchBtn: "검색",
    spiceLabel: "맵기",
    ingredientsLabel: "주요 재료: ",
    notFoundTitle: "😅 이 메뉴를 찾지 못했어요",
    notFoundHint: "위의 인기 메뉴를 눌러보거나, 점원에게 직접 물어보세요.",
    matchTitle: "검색 결과 {n}개:",
    footer: "첫 번째 MVP · 메뉴 데이터는 계속 추가됩니다",
    docTitle: "한식 메뉴 번역 · 유학생 버전",
    spice: { 1: "안 매움", 2: "약간 매움", 3: "보통", 4: "많이 매움", 5: "아주 많이 매움" }
  },
  en: {
    title: "🍜 Korean Menu Translator",
    subtitle: "A Korean food lookup tool for international students living in Korea",
    placeholder: "Enter a dish name (Korean / Chinese / English), e.g. Kimchi Stew",
    searchBtn: "Search",
    spiceLabel: "Spiciness",
    ingredientsLabel: "Main ingredients: ",
    notFoundTitle: "😅 We couldn't find this dish",
    notFoundHint: "Try a popular dish above, or ask the staff directly.",
    matchTitle: "{n} possible matches:",
    footer: "First MVP · More dishes coming soon",
    docTitle: "Korean Menu Translator · Student Version",
    spice: { 1: "Not spicy", 2: "Mild", 3: "Medium", 4: "Very spicy", 5: "Extremely spicy" }
  }
};

// ===== DOM 元素 =====
const inputEl = document.getElementById("dish-input");
const btnEl = document.getElementById("search-btn");
const resultEl = document.getElementById("result");
const notFoundEl = document.getElementById("not-found");
const tagBox = document.getElementById("quick-tags");
const langSelectEl = document.getElementById("lang-select");
const matchListEl = document.getElementById("match-list");
const matchListTitleEl = document.getElementById("match-list-title");
const matchListBoxEl = document.getElementById("match-list-box");

// ===== 语言状态（从 localStorage 读取，非法值回退默认）=====
function loadLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return LANGUAGES.some(function (l) { return l.code === stored; }) ? stored : DEFAULT_LANG;
}

let lang = loadLang();
let currentDish = null;     // 当前显示中的菜单，切换语言后重新渲染
let currentMatches = null;  // 当前显示中的搜索结果列表

// ===== 通用取词（缺词自动回退默认语言）=====
function t(key) {
  const text = I18N[lang][key];
  return text !== undefined ? text : I18N[DEFAULT_LANG][key];
}

function dishText(dish, field) {
  const map = dish[field];
  if (!map) return "";
  return map[lang] !== undefined ? map[lang] : map[DEFAULT_LANG];
}

// ===== 应用语言：界面文字 + 下拉框 + 快捷按钮 + 重新渲染结果 =====
function applyLang() {
  // 下拉框选项（只在第一次构建）
  if (langSelectEl.options.length === 0) {
    LANGUAGES.forEach(function (l) {
      const opt = document.createElement("option");
      opt.value = l.code;
      opt.textContent = l.label;
      langSelectEl.appendChild(opt);
    });
  }
  langSelectEl.value = lang;

  // 更新所有带 data-i18n 标记的文字
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t(el.dataset.i18n);
  });

  document.title = t("docTitle");
  inputEl.placeholder = t("placeholder");
  renderTags();

  // 如果结果卡片或搜索结果列表正显示着，立即切换成新语言
  if (currentDish) {
    renderDish(currentDish);
  } else if (currentMatches) {
    showMatchList(currentMatches);
  }
}

// ===== 常见菜单快捷按钮（取前 8 个，随语言切换）=====
function renderTags() {
  tagBox.innerHTML = "";
  DISHES.slice(0, 8).forEach(function (dish) {
    const b = document.createElement("button");
    b.className = "tag";
    b.textContent = dish.name[lang] || dish.name[DEFAULT_LANG];
    b.addEventListener("click", function () {
      inputEl.value = b.textContent;
      search();
    });
    tagBox.appendChild(b);
  });
}

// ===== 查询逻辑（模糊搜索）=====
function search() {
  const q = inputEl.value.trim().toLowerCase();
  if (!q) return;

  const matches = findMatches(q);

  if (matches.length === 1) {
    renderDish(matches[0]);
  } else if (matches.length > 1) {
    showMatchList(matches);
  } else {
    showNotFound();
  }
}

// 模糊匹配：精确 > 开头匹配 > 包含匹配，跨所有语言 + 罗马音
function findMatches(q) {
  return DISHES
    .map(function (d) {
      const names = Object.values(d.name).concat([d.roman]);
      let score = null; // 越小越接近：0 精确 / 1 开头 / 2 包含
      names.forEach(function (s) {
        const lower = s.toLowerCase();
        if (lower === q) score = score === null ? 0 : Math.min(score, 0);
        else if (lower.startsWith(q)) score = score === null ? 1 : Math.min(score, 1);
        else if (lower.includes(q)) score = score === null ? 2 : Math.min(score, 2);
      });
      return { dish: d, score: score };
    })
    .filter(function (r) { return r.score !== null; })
    .sort(function (a, b) { return a.score - b.score; })
    .map(function (r) { return r.dish; });
}

// 多个结果：显示可点选的列表
function showMatchList(matches) {
  currentDish = null;
  currentMatches = matches;
  resultEl.classList.add("hidden");
  notFoundEl.classList.add("hidden");
  matchListEl.classList.remove("hidden");

  matchListTitleEl.textContent = t("matchTitle").replace("{n}", matches.length);
  matchListBoxEl.innerHTML = "";

  matches.forEach(function (d) {
    const b = document.createElement("button");
    b.className = "match-item";
    b.textContent = (d.name[lang] || d.name[DEFAULT_LANG]) + " · " + d.roman;
    b.addEventListener("click", function () {
      renderDish(d);
    });
    matchListBoxEl.appendChild(b);
  });
}

function renderDish(d) {
  currentDish = d;
  currentMatches = null;
  matchListEl.classList.add("hidden");
  notFoundEl.classList.add("hidden");
  resultEl.classList.remove("hidden");

  const nameEl = document.getElementById("dish-name");
  const subEl = document.getElementById("dish-sub");

  // 主标题显示当前语言的菜名；副标题显示韩文原名 + 罗马音（韩文模式只显示罗马音）
  nameEl.textContent = d.name[lang] || d.name[DEFAULT_LANG];
  if (lang === "ko") {
    subEl.textContent = d.roman;
  } else {
    subEl.textContent = d.name.ko + " · " + d.roman;
  }

  document.getElementById("spice-level").textContent = "🌶".repeat(d.spice);
  document.getElementById("spice-text").textContent =
    (I18N[lang].spice && I18N[lang].spice[d.spice]) || I18N[DEFAULT_LANG].spice[d.spice];

  document.getElementById("dish-desc").textContent = dishText(d, "desc");
  document.getElementById("dish-ingredients").textContent = dishText(d, "ingredients");
  document.getElementById("dish-tip").textContent = dishText(d, "tip");
}

function showNotFound() {
  currentDish = null;
  currentMatches = null;
  matchListEl.classList.add("hidden");
  resultEl.classList.add("hidden");
  notFoundEl.classList.remove("hidden");
}

// ===== 事件绑定 =====
btnEl.addEventListener("click", search);
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") search();
});

langSelectEl.addEventListener("change", function () {
  lang = langSelectEl.value;
  localStorage.setItem(STORAGE_KEY, lang);
  applyLang();
});

// ===== 初始化 =====
applyLang();
