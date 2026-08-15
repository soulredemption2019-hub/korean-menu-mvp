// ============================================
// 한국 메뉴 번역 · 다국어 버전 (한국어 / English / 中文)
// ============================================

const DISHES = [
  {
    roman: "Kimchi Jjigae",
    name: { ko: "김치찌개", en: "Kimchi Stew", cn: "泡菜汤" },
    desc: {
      ko: "잘 익은 김치와 돼지고기(또는 참치)를 넣고 끓인 찌개로, 한국 가정식의 대표 메뉴예요.",
      en: "A stew made with well-fermented kimchi and pork (or tuna). A representative Korean home-style dish.",
      cn: "用发酵泡菜和猪肉（或金枪鱼）一起煮的汤锅，是韩国家常菜的代表。"
    },
    ingredients: {
      ko: "김치, 돼지고기, 두부, 양파, 대파",
      en: "Kimchi, pork, tofu, onion, green onion",
      cn: "泡菜、猪肉、豆腐、洋葱、大葱"
    },
    tip: {
      ko: "밥과 함께 먹으면 아주 잘 어울려요. 맵지 않게 먹고 싶다면 '안 맵게 해주세요'라고 말하세요.",
      en: "Great with rice. If you want it less spicy, say '안 맵게 해주세요' (please make it not spicy).",
      cn: "很下饭，配白米饭吃最正宗。怕辣可以说“안 맵게 해주세요”（请做不辣的）。"
    },
    spice: 3
  },
  {
    roman: "Bibimbap",
    name: { ko: "비빔밥", en: "Bibimbap", cn: "拌饭" },
    desc: {
      ko: "밥 위에 여러 가지 나물과 달걀, 고추장을 올려 비벼 먹는 음식이에요.",
      en: "Rice topped with assorted vegetables, an egg, and gochujang, mixed together before eating.",
      cn: "米饭上铺各种蔬菜、鸡蛋和辣椒酱，吃之前拌匀。"
    },
    ingredients: {
      ko: "밥, 나물, 달걀, 고추장, 참기름",
      en: "Rice, vegetables, egg, gochujang, sesame oil",
      cn: "米饭、蔬菜、鸡蛋、辣椒酱、芝麻油"
    },
    tip: {
      ko: "전주비빔밥이 가장 유명해요. 고추장은 입맛에 맞게 조금만 넣어도 돼요.",
      en: "Jeonju bibimbap is the most famous. Add gochujang to your taste.",
      cn: "全州拌饭最有名；辣椒酱可以按自己口味少放。"
    },
    spice: 1
  },
  {
    roman: "Bulgogi",
    name: { ko: "불고기", en: "Bulgogi", cn: "烤牛肉" },
    desc: {
      ko: "간장, 설탕, 배즙에 재운 얇은 쇠고기를 달콤짭짤하게 구운 요리예요.",
      en: "Thin-sliced beef marinated in soy sauce, sugar, and pear juice, grilled sweet and savory.",
      cn: "用酱油、糖、梨汁腌过的薄牛肉片，甜咸口味。"
    },
    ingredients: {
      ko: "소고기, 양파, 간장, 배, 마늘",
      en: "Beef, onion, soy sauce, pear, garlic",
      cn: "牛肉、洋葱、酱油、梨、大蒜"
    },
    tip: {
      ko: "달콤하고 맵지 않아서 처음 한국 음식을 접하는 분에게 좋아요.",
      en: "Sweet and not spicy — great for first-time Korean food eaters.",
      cn: "甜口不辣，很适合第一次吃韩餐的人。"
    },
    spice: 1
  },
  {
    roman: "Samgyeopsal",
    name: { ko: "삼겹살", en: "BBQ Pork Belly", cn: "烤五花肉" },
    desc: {
      ko: "두툼한 돼지고기 삼겹살을 불판에 구워 상추에 싸 먹는 음식이에요.",
      en: "Thick-cut pork belly grilled on a hot plate and wrapped in lettuce.",
      cn: "厚切五花肉在铁板上烤，用生菜包着吃。"
    },
    ingredients: {
      ko: "삼겹살, 상추, 마늘, 청양고추, 쌈장",
      en: "Pork belly, lettuce, garlic, cheongyang pepper, ssamjang",
      cn: "猪五花、生菜、蒜、青阳辣椒、包饭酱"
    },
    tip: {
      ko: "노릇하게 구워 소금에 찍어 먹으면 가장 맛있어요. 소주와 함께 먹는 것이 대표적인 조합이에요.",
      en: "Best grilled until golden and dipped in salt. A classic pairing with soju.",
      cn: "烤到微焦蘸盐吃最香；配烧酒（소주）是经典组合。"
    },
    spice: 1
  },
  {
    roman: "Tteokbokki",
    name: { ko: "떡볶이", en: "Spicy Rice Cakes", cn: "辣炒年糕" },
    desc: {
      ko: "쫄깃한 떡을 고추장 양념에 볶은 한국의 대표 길거리 음식이에요.",
      en: "Chewy rice cakes stir-fried in a spicy gochujang sauce. A classic Korean street food.",
      cn: "糯米年糕用辣酱炒制，韩国街边小吃代表。"
    },
    ingredients: {
      ko: "떡, 어묵, 고추장, 대파",
      en: "Rice cakes, fish cake, gochujang, green onion",
      cn: "年糕、鱼糕、辣椒酱、大葱"
    },
    tip: {
      ko: "보통 어묵과 함께 먹어요. 치즈를 넣으면 더 부드러워져요.",
      en: "Usually eaten with fish cake. Adding cheese makes it milder.",
      cn: "通常配鱼糕串（어묵）一起吃；加奶酪会更柔和。"
    },
    spice: 3
  },
  {
    roman: "Naengmyeon",
    name: { ko: "냉면", en: "Cold Noodles", cn: "冷面" },
    desc: {
      ko: "메밀국수를 차가운 육수에 말아 먹는 음식으로, 여름에 꼭 먹는 메뉴예요.",
      en: "Buckwheat noodles in an icy beef broth — a must-eat in summer.",
      cn: "荞麦冷面配冰镇牛肉汤，夏天必吃。"
    },
    ingredients: {
      ko: "메밀국수, 육수, 오이, 달걀, 배",
      en: "Buckwheat noodles, broth, cucumber, egg, pear",
      cn: "荞麦面、牛肉汤、黄瓜、鸡蛋、梨"
    },
    tip: {
      ko: "먹기 전에 면을 가위로 잘라 달라고 할 수 있어요. 식초와 겨자를 넣으면 더 시원해요.",
      en: "You can ask the staff to cut the noodles. Add vinegar and mustard for extra zing.",
      cn: "吃前可以让店员剪一下面；加醋和芥末更开胃。"
    },
    spice: 1
  },
  {
    roman: "Doenjang Jjigae",
    name: { ko: "된장찌개", en: "Soybean Paste Stew", cn: "大酱汤" },
    desc: {
      ko: "된장으로 끓인 구수한 찌개로, 건강하고 담백한 가정식이에요.",
      en: "A savory stew made with fermented soybean paste. Healthy and mild home-style food.",
      cn: "用大豆酱做底的浓汤，健康清淡的家常味。"
    },
    ingredients: {
      ko: "된장, 두부, 애호박, 양파, 풋고추",
      en: "Doenjang, tofu, zucchini, onion, green chili",
      cn: "大酱、豆腐、西葫芦、洋葱、青椒"
    },
    tip: {
      ko: "맵지 않아서 밥과 함께 먹으면 편안한 맛이에요.",
      en: "Not spicy — comforting with a bowl of rice.",
      cn: "不辣，配米饭吃很舒服。"
    },
    spice: 1
  },
  {
    roman: "Sundubu Jjigae",
    name: { ko: "순두부찌개", en: "Soft Tofu Stew", cn: "嫩豆腐汤" },
    desc: {
      ko: "순두부와 매운 양념을 넣어 끓인 찌개로, 뜨겁게 끓여 나와요. 보통 달걀을 하나 넣어요.",
      en: "A spicy stew with soft tofu, served boiling hot, usually with an egg.",
      cn: "嫩豆腐配辣汤，滚烫上桌，通常加一个鸡蛋。"
    },
    ingredients: {
      ko: "순두부, 매운 양념, 달걀, 바지락",
      en: "Soft tofu, spicy broth, egg, clams",
      cn: "嫩豆腐、辣汤底、鸡蛋、蛤蜊"
    },
    tip: {
      ko: "나올 때 아주 뜨거워요. 밥이 함께 나오는데, 밥을 넣어 먹으면 맛있어요.",
      en: "Very hot when served. It comes with rice — adding it into the stew is delicious.",
      cn: "上桌时还很烫；会附一碗米饭，把饭泡进去很好吃。"
    },
    spice: 3
  },
  {
    roman: "Japchae",
    name: { ko: "잡채", en: "Glass Noodles", cn: "杂菜" },
    desc: {
      ko: "당면과 여러 채소를 볶은 음식으로, 달콤짭짤한 맛이 나요. 한국 명절 음식 중 하나예요.",
      en: "Stir-fried glass noodles with vegetables. Sweet and savory, a Korean holiday dish.",
      cn: "红薯粉条炒蔬菜，甜咸口味，韩国节日菜之一。"
    },
    ingredients: {
      ko: "당면, 시금치, 당근, 양파, 깨",
      en: "Glass noodles, spinach, carrot, onion, sesame",
      cn: "粉条、菠菜、胡萝卜、洋葱、芝麻"
    },
    tip: {
      ko: "맵지 않아요. 불고기와 함께 주문하면 좋은 조합이에요.",
      en: "Not spicy. Pairs well with bulgogi.",
      cn: "不辣；和烤牛肉（불고기）一起点是常见组合。"
    },
    spice: 1
  },
  {
    roman: "Kimbap",
    name: { ko: "김밥", en: "Seaweed Rice Rolls", cn: "紫菜包饭" },
    desc: {
      ko: "김에 밥과 여러 재료를 말아 만든 음식으로, 편의점과 길거리에서 흔히 볼 수 있어요.",
      en: "Rice and fillings rolled in seaweed, common at convenience stores and street stalls.",
      cn: "紫菜卷米饭和蔬菜，便利店和街边都常见。"
    },
    ingredients: {
      ko: "김, 밥, 당근, 달걀, 햄",
      en: "Seaweed, rice, carrot, egg, ham",
      cn: "紫菜、米饭、胡萝卜、鸡蛋、火腿"
    },
    tip: {
      ko: "맵지 않고 간편하게 들고 다닐 수 있어요. 소풍이나 바쁠 때 좋아요.",
      en: "Not spicy and easy to take away — great for picnics or busy days.",
      cn: "不辣，方便带走；野餐和赶课时首选。"
    },
    spice: 1
  },
  {
    roman: "Ramyun",
    name: { ko: "라면", en: "Instant Noodles", cn: "韩国拉面" },
    desc: {
      ko: "신라면처럼 끓여 먹는 라면으로, 한국인이 어릴 때부터 즐겨 먹는 음식이에요.",
      en: "Boiled instant noodles like Shin Ramyun — a Korean staple since childhood.",
      cn: "辛拉面这类煮面，韩国人从小吃到大。"
    },
    ingredients: {
      ko: "면, 매운 스프, 달걀, 대파",
      en: "Noodles, spicy seasoning, egg, green onion",
      cn: "面饼、辣味调料包、鸡蛋、大葱"
    },
    tip: {
      ko: "달걀이나 치즈를 넣어 먹어도 좋아요. 편의점에서 사서 끓여 먹는 것이 가장 간편해요.",
      en: "Try adding egg or cheese. Easiest to buy at a convenience store and cook at home.",
      cn: "可以加鸡蛋和芝士；在便利店买回去煮最方便。"
    },
    spice: 3
  },
  {
    roman: "Dakgalbi",
    name: { ko: "닭갈비", en: "Spicy Stir-fried Chicken", cn: "辣炒鸡排" },
    desc: {
      ko: "닭고기와 떡, 채소를 매운 양념에 볶아 먹는 춘천의 대표 음식이에요.",
      en: "Chicken, rice cakes, and vegetables stir-fried in spicy sauce. A Chuncheon specialty.",
      cn: "用辣酱炒鸡肉、年糕和蔬菜，春川特色菜。"
    },
    ingredients: {
      ko: "닭고기, 떡, 고추장 양념, 양배추, 고구마",
      en: "Chicken, rice cakes, gochujang sauce, cabbage, sweet potato",
      cn: "鸡肉、年糕、辣酱、卷心菜、红薯"
    },
    tip: {
      ko: "매운 편이에요. 거의 다 먹었을 때 밥을 넣어 볶음밥으로 만들어 먹으면 좋아요.",
      en: "Quite spicy. When nearly finished, add rice to make fried rice.",
      cn: "比较辣；快吃完时可以加饭炒成炒饭（볶음밥）。"
    },
    spice: 4
  },
  {
    roman: "Budae Jjigae",
    name: { ko: "부대찌개", en: "Army Stew", cn: "部队锅" },
    desc: {
      ko: "스팸, 햄, 소시지에 매운 양념을 넣어 끓인 찌개로, 전쟁 이후에 생겨난 음식이에요.",
      en: "A spicy stew with Spam, ham, and sausage, born after the Korean War.",
      cn: "午餐肉、火腿、香肠加辣汤底的火锅，战后诞生的“混合锅”。"
    },
    ingredients: {
      ko: "스팸, 소시지, 두부, 김치, 라면",
      en: "Spam, sausage, tofu, kimchi, instant noodles",
      cn: "午餐肉、香肠、豆腐、泡菜、拉面"
    },
    tip: {
      ko: "양이 많아서 두세 명이 함께 먹기 좋아요. 라면을 넣어 먹어도 맛있어요.",
      en: "A big portion, great for two or three people. Add instant noodles to it.",
      cn: "分量足，适合两三个人一起吃；可以加拉面。"
    },
    spice: 3
  },
  {
    roman: "Galbitang",
    name: { ko: "갈비탕", en: "Beef Rib Soup", cn: "排骨汤" },
    desc: {
      ko: "소갈비를 푹 끓여 낸 맑은 국으로, 고기가 부드럽고 국물이 진해요. 담백하고 몸에 좋아요.",
      en: "A clear soup made by simmering beef short ribs. Tender meat and rich broth, mild and nourishing.",
      cn: "牛排骨炖的清汤，肉烂汤浓，清淡滋补。"
    },
    ingredients: {
      ko: "소갈비, 무, 대파, 마늘",
      en: "Beef short ribs, radish, green onion, garlic",
      cn: "牛排骨、萝卜、大葱、蒜"
    },
    tip: {
      ko: "소면과 함께 먹는 것도 흔해요.",
      en: "Often served with thin noodles.",
      cn: "配细面（소면）吃也很常见。"
    },
    spice: 1
  },
  {
    roman: "Jjimdak",
    name: { ko: "찜닭", en: "Braised Chicken", cn: "安东炖鸡" },
    desc: {
      ko: "닭고기와 채소를 간장 양념에 조린 음식으로, 달콤하고 매콤한 양념이 진해요.",
      en: "Chicken and vegetables braised in soy sauce, with a rich sweet-and-spicy sauce.",
      cn: "用酱油炖鸡肉和蔬菜，甜辣酱汁浓郁。"
    },
    ingredients: {
      ko: "닭고기, 감자, 당면, 당근, 고추",
      en: "Chicken, potato, glass noodles, carrot, chili",
      cn: "鸡肉、土豆、粉条、胡萝卜、辣椒"
    },
    tip: {
      ko: "양념이 배어든 당면이 가장 맛있어요. 밥과 함께 먹어요.",
      en: "The sauce-soaked glass noodles are the best part. Eat with rice.",
      cn: "粉条吸满汤汁是精华；和米饭一起吃。"
    },
    spice: 3
  }
];

const I18N = {
  ko: {
    title: "한국 메뉴 번역",
    subtitle: "한국 음식 메뉴 검색 도구",
    placeholder: "메뉴 이름을 입력하세요. 예: 김치찌개",
    searchBtn: "검색",
    spiceLabel: "맵기",
    ingredientsLabel: "주요 재료",
    resultsTitle: "검색 결과",
    notFound: "😅 메뉴를 찾지 못했어요",
    notFoundHint: "위의 자주 찾는 메뉴를 눌러보거나, 직원에게 직접 물어보세요.",
    footer: "첫 번째 MVP · 메뉴 데이터를 계속 추가할 예정이에요",
    spice: { 1: "안 매움", 2: "살짝 매움", 3: "보통 매움", 4: "매움", 5: "아주 매움" }
  },
  en: {
    title: "Korean Menu Guide",
    subtitle: "A lookup tool for Korean dishes",
    placeholder: "Type a menu name, e.g. kimchi jjigae",
    searchBtn: "Search",
    spiceLabel: "Spiciness",
    ingredientsLabel: "Main ingredients",
    resultsTitle: "Search results",
    notFound: "😅 Menu not found",
    notFoundHint: "Try one of the popular dishes above, or ask the staff.",
    footer: "First MVP · menu data will keep growing",
    spice: { 1: "Not spicy", 2: "Mild", 3: "Medium", 4: "Spicy", 5: "Very spicy" }
  },
  cn: {
    title: "韩国菜单翻译",
    subtitle: "韩餐菜单查询工具",
    placeholder: "输入菜单名，例如：김치찌개",
    searchBtn: "查询",
    spiceLabel: "辣度",
    ingredientsLabel: "主要食材",
    resultsTitle: "搜索结果",
    notFound: "😅 暂时没找到这个菜单",
    notFoundHint: "可以试试上方常见菜单，或者直接问店员。",
    footer: "第一版 MVP · 菜单数据会慢慢扩充",
    spice: { 1: "不辣", 2: "微辣", 3: "中辣", 4: "很辣", 5: "超辣" }
  }
};

// ===== DOM 요소 =====
const inputEl = document.getElementById("dish-input");
const btnEl = document.getElementById("search-btn");
const resultEl = document.getElementById("result");
const resultsEl = document.getElementById("results");
const resultListEl = document.getElementById("result-list");
const notFoundEl = document.getElementById("not-found");
const tagBox = document.getElementById("quick-tags");
const langSwitch = document.getElementById("lang-switch");

// ===== 상태 =====
let currentLang = "ko";
let currentDish = null;
let currentMatches = null;
let notFoundShown = false;

// ===== 자주 찾는 메뉴 빠른 버튼 (앞 8개) =====
function renderQuickTags() {
  tagBox.innerHTML = "";
  DISHES.slice(0, 8).forEach(function (dish) {
    const b = document.createElement("button");
    b.className = "tag";
    b.textContent = dish.name[currentLang];
    b.addEventListener("click", function () {
      renderDish(dish);
    });
    tagBox.appendChild(b);
  });
}

// ===== 검색 로직 =====
function search() {
  const q = inputEl.value.trim().toLowerCase();
  if (!q) return;

  // 한국어 / 로마자 / 영어 / 중국어 이름으로 부분 일치 검색
  const matches = DISHES.filter(function (d) {
    return (
      d.name.ko.toLowerCase().includes(q) ||
      d.roman.toLowerCase().includes(q) ||
      d.name.en.toLowerCase().includes(q) ||
      d.name.cn.toLowerCase().includes(q)
    );
  });

  if (matches.length === 0) {
    showNotFound();
  } else if (matches.length === 1) {
    renderDish(matches[0]);
  } else {
    renderList(matches);
  }
}

function renderDish(d) {
  currentDish = d;
  currentMatches = null;
  notFoundShown = false;

  notFoundEl.classList.add("hidden");
  resultsEl.classList.add("hidden");
  resultEl.classList.remove("hidden");

  document.getElementById("dish-name").textContent = d.name[currentLang];
  document.getElementById("dish-roman").textContent = d.roman;
  document.getElementById("spice-level").textContent = "🌶".repeat(d.spice);
  document.getElementById("spice-text").textContent =
    I18N[currentLang].spice[d.spice] || "";
  document.getElementById("dish-desc").textContent = d.desc[currentLang];
  document.getElementById("dish-ingredients").textContent = d.ingredients[currentLang];
  document.getElementById("dish-tip").textContent = d.tip[currentLang];
}

function renderList(matches) {
  currentDish = null;
  currentMatches = matches;
  notFoundShown = false;

  resultEl.classList.add("hidden");
  notFoundEl.classList.add("hidden");
  resultsEl.classList.remove("hidden");

  resultListEl.innerHTML = "";
  matches.forEach(function (d) {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.className = "result-item";
    b.textContent = d.name[currentLang] + " · " + d.roman;
    b.addEventListener("click", function () {
      renderDish(d);
    });
    li.appendChild(b);
    resultListEl.appendChild(li);
  });
}

function showNotFound() {
  currentDish = null;
  currentMatches = null;
  notFoundShown = true;

  resultEl.classList.add("hidden");
  resultsEl.classList.add("hidden");
  notFoundEl.classList.remove("hidden");
}

// ===== 언어 전환 =====
function applyLanguage(lang) {
  currentLang = lang;
  const t = I18N[lang];

  document.documentElement.lang = lang;
  document.title = t.title;
  document.getElementById("app-title").textContent = t.title;
  document.getElementById("subtitle").textContent = t.subtitle;
  inputEl.placeholder = t.placeholder;
  btnEl.textContent = t.searchBtn;
  document.getElementById("spice-label").textContent = t.spiceLabel;
  document.getElementById("ingredients-label").textContent = t.ingredientsLabel + ": ";
  document.getElementById("results-title").textContent = t.resultsTitle;
  document.getElementById("not-found-title").textContent = t.notFound;
  document.getElementById("not-found-hint").textContent = t.notFoundHint;
  document.getElementById("footer-text").textContent = t.footer;

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderQuickTags();

  if (currentDish) renderDish(currentDish);
  else if (currentMatches) renderList(currentMatches);
  else if (notFoundShown) showNotFound();
}

// ===== 이벤트 연결 =====
btnEl.addEventListener("click", search);
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") search();
});
langSwitch.addEventListener("click", function (e) {
  const btn = e.target.closest(".lang-btn");
  if (btn) applyLanguage(btn.dataset.lang);
});

// ===== 초기화 =====
applyLanguage("ko");
