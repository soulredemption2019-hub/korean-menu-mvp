// ============================================
// 韩国菜单翻译 · 第一版 MVP
// 数据会慢慢扩充；先跑通：输入 → 点击 → 出结果
// ============================================

const DISHES = [
  {
    ko: "김치찌개", roman: "Kimchi Jjigae", cn: "泡菜汤",
    desc: "用发酵泡菜和猪肉（或金枪鱼）一起煮的汤锅，是韩国家常菜的代表。",
    ingredients: "泡菜、猪肉、豆腐、洋葱、大葱",
    spice: 3,
    tip: "很下饭，配白米饭吃最正宗。怕辣可以说“안 맵게 해주세요”（请做不辣的）。"
  },
  {
    ko: "비빔밥", roman: "Bibimbap", cn: "拌饭",
    desc: "米饭上铺各种蔬菜、鸡蛋和辣椒酱，吃之前拌匀。",
    ingredients: "米饭、蔬菜、鸡蛋、辣椒酱、芝麻油",
    spice: 1,
    tip: "全州拌饭最有名；辣椒酱可以按自己口味少放。"
  },
  {
    ko: "불고기", roman: "Bulgogi", cn: "烤牛肉",
    desc: "用酱油、糖、梨汁腌过的薄牛肉片，甜咸口味。",
    ingredients: "牛肉、洋葱、酱油、梨、大蒜",
    spice: 1,
    tip: "甜口不辣，很适合第一次吃韩餐的人。"
  },
  {
    ko: "삼겹살", roman: "Samgyeopsal", cn: "烤五花肉",
    desc: "厚切五花肉在铁板上烤，用生菜包着吃。",
    ingredients: "猪五花、生菜、蒜、青阳辣椒、包饭酱",
    spice: 1,
    tip: "烤到微焦蘸盐吃最香；配烧酒（소주）是经典组合。"
  },
  {
    ko: "떡볶이", roman: "Tteokbokki", cn: "辣炒年糕",
    desc: "糯米年糕用辣酱炒制，韩国街边小吃代表。",
    ingredients: "年糕、鱼糕、辣椒酱、大葱",
    spice: 3,
    tip: "通常配鱼糕串（어묵）一起吃；加奶酪会更柔和。"
  },
  {
    ko: "냉면", roman: "Naengmyeon", cn: "冷面",
    desc: "荞麦冷面配冰镇牛肉汤，夏天必吃。",
    ingredients: "荞麦面、牛肉汤、黄瓜、鸡蛋、梨",
    spice: 1,
    tip: "吃前可以让店员剪一下面；加醋和芥末更开胃。"
  },
  {
    ko: "된장찌개", roman: "Doenjang Jjigae", cn: "大酱汤",
    desc: "用大豆酱做底的浓汤，健康清淡的家常味。",
    ingredients: "大酱、豆腐、西葫芦、洋葱、青椒",
    spice: 1,
    tip: "不辣，配米饭吃很舒服。"
  },
  {
    ko: "순두부찌개", roman: "Sundubu Jjigae", cn: "嫩豆腐汤",
    desc: "嫩豆腐配辣汤，滚烫上桌，通常加一个鸡蛋。",
    ingredients: "嫩豆腐、辣汤底、鸡蛋、蛤蜊",
    spice: 3,
    tip: "上桌时还很烫；会附一碗米饭，把饭泡进去很好吃。"
  },
  {
    ko: "잡채", roman: "Japchae", cn: "杂菜",
    desc: "红薯粉条炒蔬菜，甜咸口味，韩国节日菜之一。",
    ingredients: "粉条、菠菜、胡萝卜、洋葱、芝麻",
    spice: 1,
    tip: "不辣；和烤牛肉（불고기）一起点是常见组合。"
  },
  {
    ko: "김밥", roman: "Kimbap", cn: "紫菜包饭",
    desc: "紫菜卷米饭和蔬菜，便利店和街边都常见。",
    ingredients: "紫菜、米饭、胡萝卜、鸡蛋、火腿",
    spice: 1,
    tip: "不辣，方便带走；野餐和赶课时首选。"
  },
  {
    ko: "라면", roman: "Ramyun", cn: "韩国拉面",
    desc: "辛拉面这类煮面，韩国人从小吃到大。",
    ingredients: "面饼、辣味调料包、鸡蛋、大葱",
    spice: 3,
    tip: "可以加鸡蛋和芝士；在便利店买回去煮最方便。"
  },
  {
    ko: "닭갈비", roman: "Dakgalbi", cn: "辣炒鸡排",
    desc: "用辣酱炒鸡肉、年糕和蔬菜，春川特色菜。",
    ingredients: "鸡肉、年糕、辣酱、卷心菜、红薯",
    spice: 4,
    tip: "比较辣；快吃完时可以加饭炒成炒饭（볶음밥）。"
  },
  {
    ko: "부대찌개", roman: "Budae Jjigae", cn: "部队锅",
    desc: "午餐肉、火腿、香肠加辣汤底的火锅，战后诞生的“混合锅”。",
    ingredients: "午餐肉、香肠、豆腐、泡菜、拉面",
    spice: 3,
    tip: "分量足，适合两三个人一起吃；可以加拉面。"
  },
  {
    ko: "갈비탕", roman: "Galbitang", cn: "排骨汤",
    desc: "牛排骨炖的清汤，肉烂汤浓，清淡滋补。",
    ingredients: "牛排骨、萝卜、大葱、蒜",
    spice: 1,
    tip: "配细面（소면）吃也很常见。"
  },
  {
    ko: "찜닭", roman: "Jjimdak", cn: "安东炖鸡",
    desc: "用酱油炖鸡肉和蔬菜，甜辣酱汁浓郁。",
    ingredients: "鸡肉、土豆、粉条、胡萝卜、辣椒",
    spice: 3,
    tip: "粉条吸满汤汁是精华；和米饭一起吃。"
  }
];

const SPICE_LABEL = { 1: "不辣", 2: "微辣", 3: "中辣", 4: "很辣", 5: "超辣" };

// ===== DOM 元素 =====
const inputEl = document.getElementById("dish-input");
const btnEl = document.getElementById("search-btn");
const resultEl = document.getElementById("result");
const notFoundEl = document.getElementById("not-found");
const tagBox = document.getElementById("quick-tags");

// ===== 常见菜单快捷按钮（取前 8 个）=====
DISHES.slice(0, 8).forEach(function (dish) {
  const b = document.createElement("button");
  b.className = "tag";
  b.textContent = dish.ko;
  b.addEventListener("click", function () {
    inputEl.value = dish.ko;
    search();
  });
  tagBox.appendChild(b);
});

// ===== 查询逻辑 =====
function search() {
  const q = inputEl.value.trim().toLowerCase();
  if (!q) return;

  // 支持韩语名 / 罗马音 / 中文名匹配
  const dish = DISHES.find(function (d) {
    return (
      d.ko.toLowerCase() === q ||
      d.roman.toLowerCase() === q ||
      d.cn.toLowerCase() === q
    );
  });

  if (dish) {
    renderDish(dish);
  } else {
    showNotFound();
  }
}

function renderDish(d) {
  notFoundEl.classList.add("hidden");
  resultEl.classList.remove("hidden");

  document.getElementById("dish-name").textContent = d.ko;
  document.getElementById("dish-roman").textContent = d.roman;
  document.getElementById("dish-cn").textContent = d.cn;
  document.getElementById("spice-level").textContent = "🌶".repeat(d.spice);
  document.getElementById("spice-text").textContent =
    SPICE_LABEL[d.spice] || "未知";
  document.getElementById("dish-desc").textContent = d.desc;
  document.getElementById("dish-ingredients").textContent = d.ingredients;
  document.getElementById("dish-tip").textContent = d.tip;
}

function showNotFound() {
  resultEl.classList.add("hidden");
  notFoundEl.classList.remove("hidden");
}

// ===== 事件绑定 =====
btnEl.addEventListener("click", search);
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") search();
});
