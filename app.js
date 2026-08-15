// ============================================
// 한국 메뉴 번역 · 첫 번째 MVP
// 메뉴 데이터를 계속 추가할 예정. 우선: 입력 → 클릭 → 결과 표시
// ============================================

const DISHES = [
  {
    ko: "김치찌개", roman: "Kimchi Jjigae",
    desc: "잘 익은 김치와 돼지고기(또는 참치)를 넣고 끓인 찌개로, 한국 가정식의 대표 메뉴예요.",
    ingredients: "김치, 돼지고기, 두부, 양파, 대파",
    spice: 3,
    tip: "밥과 함께 먹으면 아주 잘 어울려요. 맵지 않게 먹고 싶다면 '안 맵게 해주세요'라고 말하세요."
  },
  {
    ko: "비빔밥", roman: "Bibimbap",
    desc: "밥 위에 여러 가지 나물과 달걀, 고추장을 올려 비벼 먹는 음식이에요.",
    ingredients: "밥, 나물, 달걀, 고추장, 참기름",
    spice: 1,
    tip: "전주비빔밥이 가장 유명해요. 고추장은 입맛에 맞게 조금만 넣어도 돼요."
  },
  {
    ko: "불고기", roman: "Bulgogi",
    desc: "간장, 설탕, 배즙에 재운 얇은 쇠고기를 달콤짭짤하게 구운 요리예요.",
    ingredients: "소고기, 양파, 간장, 배, 마늘",
    spice: 1,
    tip: "달콤하고 맵지 않아서 처음 한국 음식을 접하는 분에게 좋아요."
  },
  {
    ko: "삼겹살", roman: "Samgyeopsal",
    desc: "두툼한 돼지고기 삼겹살을 불판에 구워 상추에 싸 먹는 음식이에요.",
    ingredients: "삼겹살, 상추, 마늘, 청양고추, 쌈장",
    spice: 1,
    tip: "노릇하게 구워 소금에 찍어 먹으면 가장 맛있어요. 소주와 함께 먹는 것이 대표적인 조합이에요."
  },
  {
    ko: "떡볶이", roman: "Tteokbokki",
    desc: "쫄깃한 떡을 고추장 양념에 볶은 한국의 대표 길거리 음식이에요.",
    ingredients: "떡, 어묵, 고추장, 대파",
    spice: 3,
    tip: "보통 어묵과 함께 먹어요. 치즈를 넣으면 더 부드러워져요."
  },
  {
    ko: "냉면", roman: "Naengmyeon",
    desc: "메밀국수를 차가운 육수에 말아 먹는 음식으로, 여름에 꼭 먹는 메뉴예요.",
    ingredients: "메밀국수, 육수, 오이, 달걀, 배",
    spice: 1,
    tip: "먹기 전에 면을 가위로 잘라 달라고 할 수 있어요. 식초와 겨자를 넣으면 더 시원해요."
  },
  {
    ko: "된장찌개", roman: "Doenjang Jjigae",
    desc: "된장으로 끓인 구수한 찌개로, 건강하고 담백한 가정식이에요.",
    ingredients: "된장, 두부, 애호박, 양파, 풋고추",
    spice: 1,
    tip: "맵지 않아서 밥과 함께 먹으면 편안한 맛이에요."
  },
  {
    ko: "순두부찌개", roman: "Sundubu Jjigae",
    desc: "순두부와 매운 양념을 넣어 끓인 찌개로, 뜨겁게 끓여 나와요. 보통 달걀을 하나 넣어요.",
    ingredients: "순두부, 매운 양념, 달걀, 바지락",
    spice: 3,
    tip: "나올 때 아주 뜨거워요. 밥이 함께 나오는데, 밥을 넣어 먹으면 맛있어요."
  },
  {
    ko: "잡채", roman: "Japchae",
    desc: "당면과 여러 채소를 볶은 음식으로, 달콤짭짤한 맛이 나요. 한국 명절 음식 중 하나예요.",
    ingredients: "당면, 시금치, 당근, 양파, 깨",
    spice: 1,
    tip: "맵지 않아요. 불고기와 함께 주문하면 좋은 조합이에요."
  },
  {
    ko: "김밥", roman: "Kimbap",
    desc: "김에 밥과 여러 재료를 말아 만든 음식으로, 편의점과 길거리에서 흔히 볼 수 있어요.",
    ingredients: "김, 밥, 당근, 달걀, 햄",
    spice: 1,
    tip: "맵지 않고 간편하게 들고 다닐 수 있어요. 소풍이나 바쁠 때 좋아요."
  },
  {
    ko: "라면", roman: "Ramyun",
    desc: "신라면처럼 끓여 먹는 라면으로, 한국인이 어릴 때부터 즐겨 먹는 음식이에요.",
    ingredients: "면, 매운 스프, 달걀, 대파",
    spice: 3,
    tip: "달걀이나 치즈를 넣어 먹어도 좋아요. 편의점에서 사서 끓여 먹는 것이 가장 간편해요."
  },
  {
    ko: "닭갈비", roman: "Dakgalbi",
    desc: "닭고기와 떡, 채소를 매운 양념에 볶아 먹는 춘천의 대표 음식이에요.",
    ingredients: "닭고기, 떡, 고추장 양념, 양배추, 고구마",
    spice: 4,
    tip: "매운 편이에요. 거의 다 먹었을 때 밥을 넣어 볶음밥으로 만들어 먹으면 좋아요."
  },
  {
    ko: "부대찌개", roman: "Budae Jjigae",
    desc: "스팸, 햄, 소시지에 매운 양념을 넣어 끓인 찌개로, 전쟁 이후에 생겨난 음식이에요.",
    ingredients: "스팸, 소시지, 두부, 김치, 라면",
    spice: 3,
    tip: "양이 많아서 두세 명이 함께 먹기 좋아요. 라면을 넣어 먹어도 맛있어요."
  },
  {
    ko: "갈비탕", roman: "Galbitang",
    desc: "소갈비를 푹 끓여 낸 맑은 국으로, 고기가 부드럽고 국물이 진해요. 담백하고 몸에 좋아요.",
    ingredients: "소갈비, 무, 대파, 마늘",
    spice: 1,
    tip: "소면과 함께 먹는 것도 흔해요."
  },
  {
    ko: "찜닭", roman: "Jjimdak",
    desc: "닭고기와 채소를 간장 양념에 조린 음식으로, 달콤하고 매콤한 양념이 진해요.",
    ingredients: "닭고기, 감자, 당면, 당근, 고추",
    spice: 3,
    tip: "양념이 배어든 당면이 가장 맛있어요. 밥과 함께 먹어요."
  }
];

const SPICE_LABEL = { 1: "안 매움", 2: "살짝 매움", 3: "보통 매움", 4: "매움", 5: "아주 매움" };

// ===== DOM 요소 =====
const inputEl = document.getElementById("dish-input");
const btnEl = document.getElementById("search-btn");
const resultEl = document.getElementById("result");
const notFoundEl = document.getElementById("not-found");
const resultsEl = document.getElementById("results");
const resultListEl = document.getElementById("result-list");
const tagBox = document.getElementById("quick-tags");

// ===== 자주 찾는 메뉴 빠른 버튼 (앞 8개) =====
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

// ===== 검색 로직 =====
function search() {
  const q = inputEl.value.trim().toLowerCase();
  if (!q) return;

  // 한국어 이름 또는 로마자 표기로 부분 일치 검색
  const matches = DISHES.filter(function (d) {
    return (
      d.ko.toLowerCase().includes(q) ||
      d.roman.toLowerCase().includes(q)
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
  notFoundEl.classList.add("hidden");
  resultsEl.classList.add("hidden");
  resultEl.classList.remove("hidden");

  document.getElementById("dish-name").textContent = d.ko;
  document.getElementById("dish-roman").textContent = d.roman;
  document.getElementById("spice-level").textContent = "🌶".repeat(d.spice);
  document.getElementById("spice-text").textContent =
    SPICE_LABEL[d.spice] || "알 수 없음";
  document.getElementById("dish-desc").textContent = d.desc;
  document.getElementById("dish-ingredients").textContent = d.ingredients;
  document.getElementById("dish-tip").textContent = d.tip;
}

function showNotFound() {
  resultEl.classList.add("hidden");
  resultsEl.classList.add("hidden");
  notFoundEl.classList.remove("hidden");
}

function renderList(matches) {
  resultEl.classList.add("hidden");
  notFoundEl.classList.add("hidden");
  resultsEl.classList.remove("hidden");

  resultListEl.innerHTML = "";
  matches.forEach(function (d) {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.className = "result-item";
    b.textContent = d.ko + " · " + d.roman;
    b.addEventListener("click", function () {
      renderDish(d);
    });
    li.appendChild(b);
    resultListEl.appendChild(li);
  });
}

// ===== 이벤트 연결 =====
btnEl.addEventListener("click", search);
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") search();
});
