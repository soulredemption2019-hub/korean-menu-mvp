/**
 * js/data.js — 菜品数据层 (v2 结构化 schema)
 * 由 scripts/build-data.js 生成，请勿手改（改 META 后重新运行）。
 * 数据来源：远程仓库 v1 数据（scripts/remote-dishes.json）+ 本地精修条目。
 */
(function (global) {
  "use strict";

  var CATEGORIES = ["stew","soup","rice","noodle","grill","fried","snack","stir","side","drink","porridge"];
  var TASTES = ["spicy","sweet","savory","mild","sour","hot","cold","fresh"];

  var DISHES = [
  {
    "id": "kimchi-jjigae",
    "roman": "Kimchi Jjigae",
    "name": {
      "ko": "김치찌개",
      "en": "Kimchi Stew",
      "zh": "泡菜汤"
    },
    "category": "stew",
    "tastes": [
      "spicy",
      "savory",
      "hot"
    ],
    "desc": {
      "ko": "잘 익은 김치와 돼지고기(또는 참치)를 넣고 끓인 찌개로, 한국 가정식의 대표 메뉴예요.",
      "en": "A stew made with well-fermented kimchi and pork (or tuna). A representative Korean home-style dish.",
      "zh": "用发酵泡菜和猪肉（或金枪鱼）一起煮的汤锅，是韩国家常菜的代表。"
    },
    "ingredients": {
      "ko": "김치, 돼지고기, 두부, 양파, 대파",
      "en": "Kimchi, pork, tofu, onion, green onion",
      "zh": "泡菜、猪肉、豆腐、洋葱、大葱"
    },
    "tip": {
      "ko": "밥과 함께 먹으면 아주 잘 어울려요. 맵지 않게 먹고 싶다면 '안 맵게 해주세요'라고 말하세요.",
      "en": "Great with rice. If you want it less spicy, say '안 맵게 해주세요' (please make it not spicy).",
      "zh": "很下饭，配白米饭吃最正宗。怕辣可以说“안 맵게 해주세요”（请做不辣的）。"
    },
    "spice": 3,
    "price": {
      "min": 8000,
      "max": 12000
    },
    "kcal": 350,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "국민찌개"
      ],
      "en": [
        "kimchi soup",
        "pork stew"
      ],
      "zh": [
        "炖菜",
        "下饭"
      ]
    },
    "collections": [
      "kdrama"
    ],
    "appearances": [
      {
        "collection": "kdrama",
        "note": {
          "ko": "드라마 밥상 장면에 단골로 등장하는 국민 찌개",
          "en": "The national stew that shows up constantly at drama dinner tables",
          "zh": "韩剧饭桌戏里的国民家常汤锅"
        }
      }
    ]
  },
  {
    "id": "bibimbap",
    "roman": "Bibimbap",
    "name": {
      "ko": "비빔밥",
      "en": "Bibimbap",
      "zh": "拌饭"
    },
    "category": "rice",
    "tastes": [
      "fresh",
      "savory"
    ],
    "desc": {
      "ko": "밥 위에 여러 가지 나물과 달걀, 고추장을 올려 비벼 먹는 음식이에요.",
      "en": "Rice topped with assorted vegetables, an egg, and gochujang, mixed together before eating.",
      "zh": "米饭上铺各种蔬菜、鸡蛋和辣椒酱，吃之前拌匀。"
    },
    "ingredients": {
      "ko": "밥, 나물, 달걀, 고추장, 참기름",
      "en": "Rice, vegetables, egg, gochujang, sesame oil",
      "zh": "米饭、蔬菜、鸡蛋、辣椒酱、芝麻油"
    },
    "tip": {
      "ko": "전주비빔밥이 가장 유명해요. 고추장은 입맛에 맞게 조금만 넣어도 돼요.",
      "en": "Jeonju bibimbap is the most famous. Add gochujang to your taste.",
      "zh": "全州拌饭最有名；辣椒酱可以按自己口味少放。"
    },
    "spice": 1,
    "price": {
      "min": 8000,
      "max": 11000
    },
    "kcal": 550,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "돌솥비빔밥",
        "전주비빔밥"
      ],
      "en": [
        "mixed rice",
        "rice bowl"
      ],
      "zh": [
        "石锅拌饭",
        "韩式拌饭"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "bulgogi",
    "roman": "Bulgogi",
    "name": {
      "ko": "불고기",
      "en": "Bulgogi",
      "zh": "烤牛肉"
    },
    "category": "grill",
    "tastes": [
      "sweet",
      "savory"
    ],
    "desc": {
      "ko": "간장, 설탕, 배즙에 재운 얇은 쇠고기를 달콤짭짤하게 구운 요리예요.",
      "en": "Thin-sliced beef marinated in soy sauce, sugar, and pear juice, grilled sweet and savory.",
      "zh": "用酱油、糖、梨汁腌过的薄牛肉片，甜咸口味。"
    },
    "ingredients": {
      "ko": "소고기, 양파, 간장, 배, 마늘",
      "en": "Beef, onion, soy sauce, pear, garlic",
      "zh": "牛肉、洋葱、酱油、梨、大蒜"
    },
    "tip": {
      "ko": "달콤하고 맵지 않아서 처음 한국 음식을 접하는 분에게 좋아요.",
      "en": "Sweet and not spicy — great for first-time Korean food eaters.",
      "zh": "甜口不辣，很适合第一次吃韩餐的人。"
    },
    "spice": 1,
    "price": {
      "min": 12000,
      "max": 18000
    },
    "kcal": 420,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "소불고기",
        "고기"
      ],
      "en": [
        "korean bbq",
        "beef bbq"
      ],
      "zh": [
        "韩式烤肉",
        "烤肉"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "samgyeopsal",
    "roman": "Samgyeopsal",
    "name": {
      "ko": "삼겹살",
      "en": "BBQ Pork Belly",
      "zh": "烤五花肉"
    },
    "category": "grill",
    "tastes": [
      "savory",
      "hot"
    ],
    "desc": {
      "ko": "두툼한 돼지고기 삼겹살을 불판에 구워 상추에 싸 먹는 음식이에요.",
      "en": "Thick-cut pork belly grilled on a hot plate and wrapped in lettuce.",
      "zh": "厚切五花肉在铁板上烤，用生菜包着吃。"
    },
    "ingredients": {
      "ko": "삼겹살, 상추, 마늘, 청양고추, 쌈장",
      "en": "Pork belly, lettuce, garlic, cheongyang pepper, ssamjang",
      "zh": "猪五花、生菜、蒜、青阳辣椒、包饭酱"
    },
    "tip": {
      "ko": "노릇하게 구워 소금에 찍어 먹으면 가장 맛있어요. 소주와 함께 먹는 것이 대표적인 조합이에요.",
      "en": "Best grilled until golden and dipped in salt. A classic pairing with soju.",
      "zh": "烤到微焦蘸盐吃最香；配烧酒（소주）是经典组合。"
    },
    "spice": 1,
    "price": {
      "min": 15000,
      "max": 22000
    },
    "kcal": 550,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "삼겹",
        "고기"
      ],
      "en": [
        "pork bbq",
        "barbecue"
      ],
      "zh": [
        "烤肉",
        "五花"
      ]
    },
    "collections": [
      "idol"
    ],
    "appearances": [
      {
        "collection": "idol",
        "note": {
          "ko": "아이돌 예능 속 철판 위 삼겹살과 상추쌈 명장면의 주인공",
          "en": "The sizzling pork belly behind classic idol-variety ssam scenes",
          "zh": "偶像综艺里铁板烤肉、生菜包肉名场面的主角"
        }
      }
    ]
  },
  {
    "id": "tteokbokki",
    "roman": "Tteokbokki",
    "name": {
      "ko": "떡볶이",
      "en": "Spicy Rice Cakes",
      "zh": "辣炒年糕"
    },
    "category": "snack",
    "tastes": [
      "spicy",
      "sweet"
    ],
    "desc": {
      "ko": "쫄깃한 떡을 고추장 양념에 볶은 한국의 대표 길거리 음식이에요.",
      "en": "Chewy rice cakes stir-fried in a spicy gochujang sauce. A classic Korean street food.",
      "zh": "糯米年糕用辣酱炒制，韩国街边小吃代表。"
    },
    "ingredients": {
      "ko": "떡, 어묵, 고추장, 대파",
      "en": "Rice cakes, fish cake, gochujang, green onion",
      "zh": "年糕、鱼糕、辣椒酱、大葱"
    },
    "tip": {
      "ko": "보통 어묵과 함께 먹어요. 치즈를 넣으면 더 부드러워져요.",
      "en": "Usually eaten with fish cake. Adding cheese makes it milder.",
      "zh": "通常配鱼糕串（어묵）一起吃；加奶酪会更柔和。"
    },
    "spice": 3,
    "price": {
      "min": 4000,
      "max": 8000
    },
    "kcal": 480,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "국물떡볶이",
        "분식"
      ],
      "en": [
        "rice cake",
        "street food"
      ],
      "zh": [
        "辣年糕",
        "炒年糕",
        "街边小吃"
      ]
    },
    "collections": [
      "idol",
      "variety"
    ],
    "appearances": [
      {
        "collection": "idol",
        "note": {
          "ko": "아이돌 라이브에서 자주 등장하는 분식집 간식",
          "en": "The snack-shop favorite that keeps popping up in idol content",
          "zh": "偶像直播里出镜率超高的街头小吃"
        }
      },
      {
        "collection": "variety",
        "note": {
          "ko": "예능 길거리 미션의 단골 메뉴",
          "en": "A staple of variety-show street-food missions",
          "zh": "综艺街头美食任务里的常客"
        }
      }
    ]
  },
  {
    "id": "naengmyeon",
    "roman": "Naengmyeon",
    "name": {
      "ko": "냉면",
      "en": "Cold Noodles",
      "zh": "冷面"
    },
    "category": "noodle",
    "tastes": [
      "cold",
      "sour"
    ],
    "desc": {
      "ko": "메밀국수를 차가운 육수에 말아 먹는 음식으로, 여름에 꼭 먹는 메뉴예요.",
      "en": "Buckwheat noodles in an icy beef broth — a must-eat in summer.",
      "zh": "荞麦冷面配冰镇牛肉汤，夏天必吃。"
    },
    "ingredients": {
      "ko": "메밀국수, 육수, 오이, 달걀, 배",
      "en": "Buckwheat noodles, broth, cucumber, egg, pear",
      "zh": "荞麦面、牛肉汤、黄瓜、鸡蛋、梨"
    },
    "tip": {
      "ko": "먹기 전에 면을 가위로 잘라 달라고 할 수 있어요. 식초와 겨자를 넣으면 더 시원해요.",
      "en": "You can ask the staff to cut the noodles. Add vinegar and mustard for extra zing.",
      "zh": "吃前可以让店员剪一下面；加醋和芥末更开胃。"
    },
    "spice": 1,
    "price": {
      "min": 9000,
      "max": 12000
    },
    "kcal": 380,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "물냉면",
        "평양냉면",
        "국수"
      ],
      "en": [
        "cold noodle",
        "buckwheat"
      ],
      "zh": [
        "荞麦面",
        "凉面"
      ]
    },
    "collections": [
      "variety"
    ],
    "appearances": [
      {
        "collection": "variety",
        "note": {
          "ko": "여름 특집마다 등장하는 냉면 먹방의 주인공",
          "en": "The star of summer specials and cold-noodle eating segments",
          "zh": "综艺夏天特辑冷面吃播的主角"
        }
      }
    ]
  },
  {
    "id": "doenjang-jjigae",
    "roman": "Doenjang Jjigae",
    "name": {
      "ko": "된장찌개",
      "en": "Soybean Paste Stew",
      "zh": "大酱汤"
    },
    "category": "stew",
    "tastes": [
      "mild",
      "savory",
      "hot"
    ],
    "desc": {
      "ko": "된장으로 끓인 구수한 찌개로, 건강하고 담백한 가정식이에요.",
      "en": "A savory stew made with fermented soybean paste. Healthy and mild home-style food.",
      "zh": "用大豆酱做底的浓汤，健康清淡的家常味。"
    },
    "ingredients": {
      "ko": "된장, 두부, 애호박, 양파, 풋고추",
      "en": "Doenjang, tofu, zucchini, onion, green chili",
      "zh": "大酱、豆腐、西葫芦、洋葱、青椒"
    },
    "tip": {
      "ko": "맵지 않아서 밥과 함께 먹으면 편안한 맛이에요.",
      "en": "Not spicy — comforting with a bowl of rice.",
      "zh": "不辣，配米饭吃很舒服。"
    },
    "spice": 1,
    "price": {
      "min": 7000,
      "max": 10000
    },
    "kcal": 300,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "된장국"
      ],
      "en": [
        "bean paste stew",
        "tofu stew"
      ],
      "zh": [
        "酱汤",
        "清淡"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "sundubu-jjigae",
    "roman": "Sundubu Jjigae",
    "name": {
      "ko": "순두부찌개",
      "en": "Soft Tofu Stew",
      "zh": "嫩豆腐汤"
    },
    "category": "stew",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "순두부와 매운 양념을 넣어 끓인 찌개로, 뜨겁게 끓여 나와요. 보통 달걀을 하나 넣어요.",
      "en": "A spicy stew with soft tofu, served boiling hot, usually with an egg.",
      "zh": "嫩豆腐配辣汤，滚烫上桌，通常加一个鸡蛋。"
    },
    "ingredients": {
      "ko": "순두부, 매운 양념, 달걀, 바지락",
      "en": "Soft tofu, spicy broth, egg, clams",
      "zh": "嫩豆腐、辣汤底、鸡蛋、蛤蜊"
    },
    "tip": {
      "ko": "나올 때 아주 뜨거워요. 밥이 함께 나오는데, 밥을 넣어 먹으면 맛있어요.",
      "en": "Very hot when served. It comes with rice — adding it into the stew is delicious.",
      "zh": "上桌时还很烫；会附一碗米饭，把饭泡进去很好吃。"
    },
    "spice": 3,
    "price": {
      "min": 8000,
      "max": 11000
    },
    "kcal": 320,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "순두부"
      ],
      "en": [
        "tofu stew",
        "soft tofu"
      ],
      "zh": [
        "豆腐汤",
        "豆腐锅"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "japchae",
    "roman": "Japchae",
    "name": {
      "ko": "잡채",
      "en": "Glass Noodles",
      "zh": "杂菜"
    },
    "category": "noodle",
    "tastes": [
      "sweet",
      "savory"
    ],
    "desc": {
      "ko": "당면과 여러 채소를 볶은 음식으로, 달콤짭짤한 맛이 나요. 한국 명절 음식 중 하나예요.",
      "en": "Stir-fried glass noodles with vegetables. Sweet and savory, a Korean holiday dish.",
      "zh": "红薯粉条炒蔬菜，甜咸口味，韩国节日菜之一。"
    },
    "ingredients": {
      "ko": "당면, 시금치, 당근, 양파, 깨",
      "en": "Glass noodles, spinach, carrot, onion, sesame",
      "zh": "粉条、菠菜、胡萝卜、洋葱、芝麻"
    },
    "tip": {
      "ko": "맵지 않아요. 불고기와 함께 주문하면 좋은 조합이에요.",
      "en": "Not spicy. Pairs well with bulgogi.",
      "zh": "不辣；和烤牛肉（불고기）一起点是常见组合。"
    },
    "spice": 1,
    "price": {
      "min": 9000,
      "max": 14000
    },
    "kcal": 380,
    "rating": 4.2,
    "searchTerms": {
      "ko": [
        "당면",
        "명절음식"
      ],
      "en": [
        "stir fried noodles",
        "sweet potato noodles"
      ],
      "zh": [
        "炒杂菜",
        "粉丝"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "kimbap",
    "roman": "Kimbap",
    "name": {
      "ko": "김밥",
      "en": "Seaweed Rice Rolls",
      "zh": "紫菜包饭"
    },
    "category": "rice",
    "tastes": [
      "fresh",
      "mild"
    ],
    "desc": {
      "ko": "김에 밥과 여러 재료를 말아 만든 음식으로, 편의점과 길거리에서 흔히 볼 수 있어요.",
      "en": "Rice and fillings rolled in seaweed, common at convenience stores and street stalls.",
      "zh": "紫菜卷米饭和蔬菜，便利店和街边都常见。"
    },
    "ingredients": {
      "ko": "김, 밥, 당근, 달걀, 햄",
      "en": "Seaweed, rice, carrot, egg, ham",
      "zh": "紫菜、米饭、胡萝卜、鸡蛋、火腿"
    },
    "tip": {
      "ko": "맵지 않고 간편하게 들고 다닐 수 있어요. 소풍이나 바쁠 때 좋아요.",
      "en": "Not spicy and easy to take away — great for picnics or busy days.",
      "zh": "不辣，方便带走；野餐和赶课时首选。"
    },
    "spice": 1,
    "price": {
      "min": 3000,
      "max": 5000
    },
    "kcal": 450,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "간편식"
      ],
      "en": [
        "rice roll",
        "seaweed roll"
      ],
      "zh": [
        "紫菜卷",
        "海苔饭卷"
      ]
    },
    "collections": [
      "idol"
    ],
    "appearances": []
  },
  {
    "id": "ramyun",
    "roman": "Ramyun",
    "name": {
      "ko": "라면",
      "en": "Instant Noodles",
      "zh": "韩国拉面"
    },
    "category": "noodle",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "신라면처럼 끓여 먹는 라면으로, 한국인이 어릴 때부터 즐겨 먹는 음식이에요.",
      "en": "Boiled instant noodles like Shin Ramyun — a Korean staple since childhood.",
      "zh": "辛拉面这类煮面，韩国人从小吃到大。"
    },
    "ingredients": {
      "ko": "면, 매운 스프, 달걀, 대파",
      "en": "Noodles, spicy seasoning, egg, green onion",
      "zh": "面饼、辣味调料包、鸡蛋、大葱"
    },
    "tip": {
      "ko": "달걀이나 치즈를 넣어 먹어도 좋아요. 편의점에서 사서 끓여 먹는 것이 가장 간편해요.",
      "en": "Try adding egg or cheese. Easiest to buy at a convenience store and cook at home.",
      "zh": "可以加鸡蛋和芝士；在便利店买回去煮最方便。"
    },
    "spice": 3,
    "price": {
      "min": 4000,
      "max": 6000
    },
    "kcal": 500,
    "rating": 4.1,
    "searchTerms": {
      "ko": [
        "신라면",
        "야식"
      ],
      "en": [
        "ramen",
        "instant noodle"
      ],
      "zh": [
        "泡面",
        "辛拉面"
      ]
    },
    "collections": [
      "kdrama"
    ],
    "appearances": [
      {
        "collection": "kdrama",
        "note": {
          "ko": "드라마 속 심야 라면 먹방의 단골 주인공",
          "en": "The late-night ramyun mukbang staple of K-dramas",
          "zh": "韩剧深夜煮拉面吃播的固定主角"
        }
      }
    ]
  },
  {
    "id": "dakgalbi",
    "roman": "Dakgalbi",
    "name": {
      "ko": "닭갈비",
      "en": "Spicy Stir-fried Chicken",
      "zh": "辣炒鸡排"
    },
    "category": "grill",
    "tastes": [
      "spicy",
      "savory"
    ],
    "desc": {
      "ko": "닭고기와 떡, 채소를 매운 양념에 볶아 먹는 춘천의 대표 음식이에요.",
      "en": "Chicken, rice cakes, and vegetables stir-fried in spicy sauce. A Chuncheon specialty.",
      "zh": "用辣酱炒鸡肉、年糕和蔬菜，春川特色菜。"
    },
    "ingredients": {
      "ko": "닭고기, 떡, 고추장 양념, 양배추, 고구마",
      "en": "Chicken, rice cakes, gochujang sauce, cabbage, sweet potato",
      "zh": "鸡肉、年糕、辣酱、卷心菜、红薯"
    },
    "tip": {
      "ko": "매운 편이에요. 거의 다 먹었을 때 밥을 넣어 볶음밥으로 만들어 먹으면 좋아요.",
      "en": "Quite spicy. When nearly finished, add rice to make fried rice.",
      "zh": "比较辣；快吃完时可以加饭炒成炒饭（볶음밥）。"
    },
    "spice": 4,
    "price": {
      "min": 13000,
      "max": 17000
    },
    "kcal": 520,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "춘천닭갈비",
        "닭고기"
      ],
      "en": [
        "stir fried chicken",
        "chicken"
      ],
      "zh": [
        "炒鸡排",
        "春川",
        "鸡肉"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "budae-jjigae",
    "roman": "Budae Jjigae",
    "name": {
      "ko": "부대찌개",
      "en": "Army Stew",
      "zh": "部队锅"
    },
    "category": "stew",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "스팸, 햄, 소시지에 매운 양념을 넣어 끓인 찌개로, 전쟁 이후에 생겨난 음식이에요.",
      "en": "A spicy stew with Spam, ham, and sausage, born after the Korean War.",
      "zh": "午餐肉、火腿、香肠加辣汤底的火锅，战后诞生的“混合锅”。"
    },
    "ingredients": {
      "ko": "스팸, 소시지, 두부, 김치, 라면",
      "en": "Spam, sausage, tofu, kimchi, instant noodles",
      "zh": "午餐肉、香肠、豆腐、泡菜、拉面"
    },
    "tip": {
      "ko": "양이 많아서 두세 명이 함께 먹기 좋아요. 라면을 넣어 먹어도 맛있어요.",
      "en": "A big portion, great for two or three people. Add instant noodles to it.",
      "zh": "分量足，适合两三个人一起吃；可以加拉面。"
    },
    "spice": 3,
    "price": {
      "min": 12000,
      "max": 16000
    },
    "kcal": 550,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "햄찌개",
        "스팸"
      ],
      "en": [
        "army base stew",
        "sausage stew"
      ],
      "zh": [
        "部队火锅",
        "火腿锅",
        "火锅"
      ]
    },
    "collections": [
      "variety"
    ],
    "appearances": [
      {
        "collection": "variety",
        "note": {
          "ko": "예능 회식 장면에서 한 냄비 가득 끓는 인기 메뉴",
          "en": "The bubbling pot that shows up in variety-show group dinners",
          "zh": "综艺聚餐场景里热气腾腾的一锅"
        }
      }
    ]
  },
  {
    "id": "galbitang",
    "roman": "Galbitang",
    "name": {
      "ko": "갈비탕",
      "en": "Beef Rib Soup",
      "zh": "排骨汤"
    },
    "category": "soup",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "소갈비를 푹 끓여 낸 맑은 국으로, 고기가 부드럽고 국물이 진해요. 담백하고 몸에 좋아요.",
      "en": "A clear soup made by simmering beef short ribs. Tender meat and rich broth, mild and nourishing.",
      "zh": "牛排骨炖的清汤，肉烂汤浓，清淡滋补。"
    },
    "ingredients": {
      "ko": "소갈비, 무, 대파, 마늘",
      "en": "Beef short ribs, radish, green onion, garlic",
      "zh": "牛排骨、萝卜、大葱、蒜"
    },
    "tip": {
      "ko": "소면과 함께 먹는 것도 흔해요.",
      "en": "Often served with thin noodles.",
      "zh": "配细面（소면）吃也很常见。"
    },
    "spice": 1,
    "price": {
      "min": 13000,
      "max": 17000
    },
    "kcal": 350,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "소갈비탕",
        "보양식"
      ],
      "en": [
        "beef soup",
        "rib soup"
      ],
      "zh": [
        "牛排骨汤",
        "清炖"
      ]
    },
    "collections": [
      "kdrama"
    ],
    "appearances": []
  },
  {
    "id": "jjimdak",
    "roman": "Jjimdak",
    "name": {
      "ko": "찜닭",
      "en": "Braised Chicken",
      "zh": "安东炖鸡"
    },
    "category": "stew",
    "tastes": [
      "sweet",
      "spicy"
    ],
    "desc": {
      "ko": "닭고기와 채소를 간장 양념에 조린 음식으로, 달콤하고 매콤한 양념이 진해요.",
      "en": "Chicken and vegetables braised in soy sauce, with a rich sweet-and-spicy sauce.",
      "zh": "用酱油炖鸡肉和蔬菜，甜辣酱汁浓郁。"
    },
    "ingredients": {
      "ko": "닭고기, 감자, 당면, 당근, 고추",
      "en": "Chicken, potato, glass noodles, carrot, chili",
      "zh": "鸡肉、土豆、粉条、胡萝卜、辣椒"
    },
    "tip": {
      "ko": "양념이 배어든 당면이 가장 맛있어요. 밥과 함께 먹어요.",
      "en": "The sauce-soaked glass noodles are the best part. Eat with rice.",
      "zh": "粉条吸满汤汁是精华；和米饭一起吃。"
    },
    "spice": 3,
    "price": {
      "min": 25000,
      "max": 35000
    },
    "kcal": 480,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "안동찜닭",
        "닭고기"
      ],
      "en": [
        "soy chicken",
        "braised chicken"
      ],
      "zh": [
        "炖鸡",
        "安东鸡",
        "鸡肉"
      ]
    },
    "collections": [
      "kdrama"
    ],
    "appearances": []
  },
  {
    "id": "fried-chicken",
    "roman": "Fried Chicken",
    "name": {
      "ko": "치킨",
      "en": "Korean Fried Chicken",
      "zh": "韩式炸鸡"
    },
    "category": "fried",
    "tastes": [
      "savory",
      "spicy"
    ],
    "desc": {
      "ko": "바삭하게 튀긴 닭고기에 양념 소스를 바른 한국 대표 야식이에요. 맥주와 함께 먹는 '치맥'이 유명해요.",
      "en": "Crispy fried chicken coated in sauce — Korea's iconic late-night food. Famous with beer as 'chimaek'.",
      "zh": "酥脆炸鸡裹上酱汁，韩国夜宵之王，配啤酒的“치맥（炸鸡啤酒）”最有名。"
    },
    "ingredients": {
      "ko": "닭고기, 튀김가루, 양념소스, 맥주",
      "en": "Chicken, frying batter, sauce, beer",
      "zh": "鸡肉、炸粉、酱料、啤酒"
    },
    "tip": {
      "ko": "양념치킨과 후라이드 반반으로 주문하면 두 맛을 다 즐길 수 있어요.",
      "en": "Order half-and-half (seasoned + original) to enjoy both flavors.",
      "zh": "可以点半半（调味+原味），一次吃到两种口味。"
    },
    "spice": 2,
    "price": {
      "min": 15000,
      "max": 20000
    },
    "kcal": 530,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "치맥",
        "프라이드",
        "양념치킨",
        "야식"
      ],
      "en": [
        "chicken",
        "chimaek",
        "beer chicken"
      ],
      "zh": [
        "炸鸡",
        "鸡啤",
        "夜宵"
      ]
    },
    "collections": [
      "idol",
      "kdrama",
      "variety"
    ],
    "appearances": [
      {
        "collection": "idol",
        "note": {
          "ko": "아이돌 라이브·단체 예능 속 '야식 치킨' 단골 메뉴",
          "en": "The late-night fried chicken constantly seen in idol livestreams and group shows",
          "zh": "偶像直播与团综里的「深夜炸鸡」常客"
        }
      },
      {
        "collection": "kdrama",
        "note": {
          "ko": "드라마 속 '치맥'(치킨+맥주) 조합의 원조",
          "en": "The original 'chimaek' (chicken + beer) pairing of K-dramas",
          "zh": "韩剧里「炸鸡配啤酒（치맥）」组合的原点"
        }
      },
      {
        "collection": "variety",
        "note": {
          "ko": "예능 야식 장면에서 빠지지 않는 국민 메뉴",
          "en": "The nation's favorite that never misses a variety-show late-night scene",
          "zh": "综艺夜宵场景里从不缺席的国民菜单"
        }
      }
    ]
  },
  {
    "id": "gopchang",
    "roman": "Gopchang",
    "name": {
      "ko": "곱창",
      "en": "Grilled Beef Intestines",
      "zh": "烤牛肠"
    },
    "category": "grill",
    "tastes": [
      "savory",
      "hot"
    ],
    "desc": {
      "ko": "소의 곱창을 불에 구워 먹는 음식으로, 쫄깃하고 고소해요. 야식과 회식 메뉴로 인기가 많아요.",
      "en": "Beef intestines grilled over fire — chewy and savory. Popular for late-night and group dinners.",
      "zh": "牛肠上火烤制，口感Q弹油香，夜宵和聚餐人气菜品。"
    },
    "ingredients": {
      "ko": "소곱창, 양파, 대파, 소금, 참기름",
      "en": "Beef intestines, onion, green onion, salt, sesame oil",
      "zh": "牛肠、洋葱、大葱、盐、香油"
    },
    "tip": {
      "ko": "불조절이 중요해요. 노릇하게 구워 소금에 찍어 먹으면 가장 맛있어요.",
      "en": "Grill until golden and dip in salt — that's the best way.",
      "zh": "火候很重要，烤到微焦蘸盐吃最香。"
    },
    "spice": 2,
    "price": {
      "min": 28000,
      "max": 35000
    },
    "kcal": 480,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "곱창구이",
        "소곱창",
        "야식"
      ],
      "en": [
        "intestine bbq",
        "beef tripe"
      ],
      "zh": [
        "牛肠",
        "烤肠",
        "夜宵"
      ]
    },
    "collections": [
      "variety"
    ],
    "appearances": [
      {
        "collection": "variety",
        "note": {
          "ko": "예능 회식 마무리 '곱창+소주' 조합의 대표 주자",
          "en": "The signature 'gopchang + soju' finale of variety-show dinners",
          "zh": "综艺聚餐收尾「烤牛肠+烧酒」组合的代表"
        }
      }
    ]
  },
  {
    "id": "haejanguk",
    "roman": "Haejanguk",
    "name": {
      "ko": "해장국",
      "en": "Hangover Soup",
      "zh": "解酒汤"
    },
    "category": "soup",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "뼈 육수에 고기와 채소를 넣어 얼큰하게 끓인 국으로, 술 마신 다음 날 먹는 해장 음식이에요.",
      "en": "A hearty, spicy bone-broth soup with meat and vegetables — the classic morning-after cure.",
      "zh": "骨头汤底加肉和蔬菜熬的浓郁辣汤，宿醉后的“醒酒神器”。"
    },
    "ingredients": {
      "ko": "소뼈, 양지머리, 콩나물, 대파, 고추",
      "en": "Beef bones, brisket, bean sprouts, green onion, chili",
      "zh": "牛骨、牛胸肉、豆芽、大葱、辣椒"
    },
    "tip": {
      "ko": "밥을 말아 먹으면 속이 편해져요. 술 마신 다음 날 아침에 먹는 것이 국룰이에요.",
      "en": "Add rice into it for comfort. The classic move after a night of drinking.",
      "zh": "泡饭吃很舒服；宿醉第二天早上吃是韩式标配。"
    },
    "spice": 3,
    "price": {
      "min": 9000,
      "max": 12000
    },
    "kcal": 340,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "뼈해장국",
        "해장"
      ],
      "en": [
        "hangover",
        "bone soup"
      ],
      "zh": [
        "醒酒汤",
        "宿醉汤"
      ]
    },
    "collections": [
      "variety",
      "kdrama"
    ],
    "appearances": [
      {
        "collection": "variety",
        "note": {
          "ko": "예능 '숙취' 에피소드의 아침을 책임지는 국물",
          "en": "The soup that saves variety-show hangover mornings",
          "zh": "综艺「宿醉」情节第二天早上的灵魂汤"
        }
      }
    ]
  },
  {
    "id": "kimchi-fried-rice",
    "roman": "Kimchi Fried Rice",
    "name": {
      "ko": "김치볶음밥",
      "en": "Kimchi Fried Rice",
      "zh": "泡菜炒饭"
    },
    "category": "rice",
    "tastes": [
      "spicy",
      "savory"
    ],
    "desc": {
      "ko": "잘 익은 김치와 밥을 볶아 만든 간단한 한 끼로, 달걀 프라이를 올려 먹는 것이 정석이에요.",
      "en": "Stir-fried rice with aged kimchi — a quick one-bowl meal, best topped with a fried egg.",
      "zh": "泡菜和米饭炒成一锅的简单一餐，顶上煎蛋是标准吃法。"
    },
    "ingredients": {
      "ko": "김치, 밥, 달걀, 대파, 참기름",
      "en": "Kimchi, rice, egg, green onion, sesame oil",
      "zh": "泡菜、米饭、鸡蛋、大葱、香油"
    },
    "tip": {
      "ko": "치즈를 올려 먹으면 더 고소해요. 김치가 익을수록 맛있어요.",
      "en": "Add cheese on top for extra richness. The more aged the kimchi, the better.",
      "zh": "撒芝士更香；泡菜越陈越好吃。"
    },
    "spice": 2,
    "price": {
      "min": 7000,
      "max": 9000
    },
    "kcal": 520,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "볶음밥"
      ],
      "en": [
        "fried rice"
      ],
      "zh": [
        "炒饭"
      ]
    },
    "collections": [
      "kdrama"
    ],
    "appearances": []
  },
  {
    "id": "yukgaejang",
    "roman": "Yukgaejang",
    "name": {
      "ko": "육개장",
      "en": "Spicy Beef Soup",
      "zh": "辣牛肉汤"
    },
    "category": "soup",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "쇠고기와 고사리, 대파를 넣고 얼큰하게 끓인 매운 국이에요. 땀을 내고 싶을 때 먹는 음식이에요.",
      "en": "A fiery soup with beef, bracken fern, and scallions — the go-to when you want to sweat it out.",
      "zh": "牛肉加蕨菜、大葱熬的香辣浓汤，想出一身汗时必吃。"
    },
    "ingredients": {
      "ko": "소고기, 고사리, 대파, 고춧가루, 달걀",
      "en": "Beef, bracken fern, green onion, chili powder, egg",
      "zh": "牛肉、蕨菜、大葱、辣椒粉、鸡蛋"
    },
    "tip": {
      "ko": "밥을 말아 먹으면 든든해요. 매운맛이 강한 편이에요.",
      "en": "Great with rice mixed in. It's on the spicier side.",
      "zh": "泡饭吃很扎实；辣度偏强。"
    },
    "spice": 4,
    "price": {
      "min": 9000,
      "max": 13000
    },
    "kcal": 360,
    "rating": 4.2,
    "searchTerms": {
      "ko": [
        "얼큰한 국"
      ],
      "en": [
        "spicy soup",
        "beef soup"
      ],
      "zh": [
        "牛肉辣汤",
        "辣汤"
      ]
    },
    "collections": [
      "kdrama"
    ],
    "appearances": []
  },
  {
    "id": "galbi-gui",
    "roman": "Galbi Gui",
    "name": {
      "ko": "갈비구이",
      "en": "Grilled Beef Short Ribs",
      "zh": "烤牛排"
    },
    "category": "grill",
    "tastes": [
      "savory",
      "sweet"
    ],
    "desc": {
      "ko": "양념에 재운 소갈비를 숯불에 구워 먹는 음식이에요. 한국인들이 가장 좋아하는 구이 메뉴 중 하나예요.",
      "en": "Beef short ribs marinated in soy-based sauce and grilled over charcoal. One of the most loved grilled dishes in Korea.",
      "zh": "用酱油酱料腌过的牛排骨炭火烤制，韩国人最喜欢的烤肉之一。"
    },
    "ingredients": {
      "ko": "소갈비, 간장, 설탕, 마늘, 참기름",
      "en": "Beef short ribs, soy sauce, sugar, garlic, sesame oil",
      "zh": "牛排骨、酱油、糖、大蒜、芝麻油"
    },
    "tip": {
      "ko": "식당에서는 보통 직원이 직접 구워줘요. 뼈에 붙은 살까지 먹으면 더 맛있어요.",
      "en": "Staff usually grill it for you. The meat near the bone is the tastiest.",
      "zh": "店里一般由店员帮你烤；贴着骨头的肉最香。"
    },
    "spice": 2,
    "price": {
      "min": 35000,
      "max": 55000
    },
    "kcal": 550,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "소갈비구이"
      ],
      "en": [
        "beef ribs"
      ],
      "zh": [
        "烤牛排骨",
        "牛小排"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "galbi-jjim",
    "roman": "Galbi Jjim",
    "name": {
      "ko": "갈비찜",
      "en": "Braised Short Ribs",
      "zh": "炖排骨"
    },
    "category": "stew",
    "tastes": [
      "sweet",
      "savory"
    ],
    "desc": {
      "ko": "소갈비를 간장 양념에 푹 끓여 만든 음식으로, 고기가 부드럽고 양념이 진해요.",
      "en": "Short ribs braised slowly in soy sauce until tender. Rich, savory, and slightly sweet.",
      "zh": "牛排骨用酱油炖到软烂，酱汁浓郁咸甜。"
    },
    "ingredients": {
      "ko": "소갈비, 무, 당근, 표고버섯, 밤",
      "en": "Beef short ribs, radish, carrot, shiitake, chestnuts",
      "zh": "牛排骨、萝卜、胡萝卜、香菇、板栗"
    },
    "tip": {
      "ko": "명절이나 특별한 날에 먹는 음식이에요. 양념이 배어든 무가 맛있어요.",
      "en": "A holiday and special-occasion dish. The radish soaked in sauce is delicious.",
      "zh": "节日或特别日子吃的菜；吸饱酱汁的萝卜很好吃。"
    },
    "spice": 2,
    "price": {
      "min": 30000,
      "max": 45000
    },
    "kcal": 480,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "소갈비찜"
      ],
      "en": [
        "braised ribs"
      ],
      "zh": [
        "炖牛排骨"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "samgyetang",
    "roman": "Samgyetang",
    "name": {
      "ko": "삼계탕",
      "en": "Ginseng Chicken Soup",
      "zh": "参鸡汤"
    },
    "category": "soup",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "어린 닭의 배 속에 찹쌀, 인삼, 대추를 넣고 푹 끓인 보양식이에요.",
      "en": "A whole young chicken stuffed with glutinous rice, ginseng, and jujube, simmered until tender. Classic Korean health food.",
      "zh": "童子鸡腹中填入糯米、人参、红枣炖煮，是韩国传统滋补料理。"
    },
    "ingredients": {
      "ko": "닭, 찹쌀, 인삼, 대추, 마늘",
      "en": "Chicken, glutinous rice, ginseng, jujube, garlic",
      "zh": "鸡、糯米、人参、红枣、大蒜"
    },
    "tip": {
      "ko": "여름철에 땀 흘린 뒤 먹는 보양식으로 유명해요. 소금과 후추로 간을 맞춰 먹어요.",
      "en": "Famous as summer stamina food. Season with salt and pepper to taste.",
      "zh": "以夏天流汗后进补著称；按口味加盐和胡椒。"
    },
    "spice": 1,
    "price": {
      "min": 14000,
      "max": 18000
    },
    "kcal": 650,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "복날 음식"
      ],
      "en": [
        "ginseng chicken soup"
      ],
      "zh": [
        "人参鸡汤",
        "参汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "haemul-pajeon",
    "roman": "Haemul Pajeon",
    "name": {
      "ko": "해물파전",
      "en": "Seafood Scallion Pancake",
      "zh": "海鲜葱饼"
    },
    "category": "side",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "파와 해물을 듬뿍 넣어 부친 바삭한 부침개예요. 비 오는 날에 어울리는 음식이에요.",
      "en": "A crispy pancake loaded with green onions and seafood. The classic rainy-day dish.",
      "zh": "放满大葱和海鲜的酥脆煎饼，下雨天最配的小吃。"
    },
    "ingredients": {
      "ko": "파, 오징어, 새우, 밀가루, 달걀",
      "en": "Green onion, squid, shrimp, flour, egg",
      "zh": "大葱、鱿鱼、虾、面粉、鸡蛋"
    },
    "tip": {
      "ko": "막걸리와 함께 먹는 것이 국민 조합이에요. 가장자리가 바삭할 때가 제일 맛있어요.",
      "en": "The classic pairing is with makgeolli (rice wine). Best when the edges are crispy.",
      "zh": "和米酒（막걸리）是国民搭配；边缘煎脆时最好吃。"
    },
    "spice": 1,
    "price": {
      "min": 13000,
      "max": 18000
    },
    "kcal": 520,
    "rating": 4.1,
    "searchTerms": {
      "ko": [
        "파전"
      ],
      "en": [
        "seafood pancake"
      ],
      "zh": [
        "海鲜饼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "kimchi-jeon",
    "roman": "Kimchi Jeon",
    "name": {
      "ko": "김치전",
      "en": "Kimchi Pancake",
      "zh": "泡菜饼"
    },
    "category": "side",
    "tastes": [
      "spicy",
      "savory"
    ],
    "desc": {
      "ko": "잘 익은 김치를 넣고 부친 매콤한 부침개예요. 술안주로 인기가 많아요.",
      "en": "A savory pancake made with well-fermented kimchi. A popular drinking snack.",
      "zh": "用熟成泡菜做的辣味煎饼，很受欢迎的下酒菜。"
    },
    "ingredients": {
      "ko": "김치, 밀가루, 물, 대파",
      "en": "Kimchi, flour, water, green onion",
      "zh": "泡菜、面粉、水、大葱"
    },
    "tip": {
      "ko": "김치가 익을수록 맛있어요. 초간장에 찍어 먹으면 더 맛있어요.",
      "en": "The more fermented the kimchi, the better. Dip in soy-vinegar sauce.",
      "zh": "泡菜越熟越好吃；蘸酱油醋汁更香。"
    },
    "spice": 3,
    "price": {
      "min": 8000,
      "max": 12000
    },
    "kcal": 400,
    "rating": 4.1,
    "searchTerms": {
      "ko": [
        "김치 부침개"
      ],
      "en": [
        "kimchi pancake"
      ],
      "zh": [
        "泡菜煎饼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "sundae",
    "roman": "Sundae",
    "name": {
      "ko": "순대",
      "en": "Blood Sausage",
      "zh": "米肠"
    },
    "category": "snack",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "돼지 창자에 당면과 채소를 넣어 만든 한국식 소시지예요. 길거리에서 흔히 볼 수 있어요.",
      "en": "Korean blood sausage made with pork intestine stuffed with glass noodles and vegetables. Common street food.",
      "zh": "猪肠里灌入粉条和蔬菜做成的韩式血肠，常见街头小吃。"
    },
    "ingredients": {
      "ko": "돼지 창자, 당면, 채소, 소금",
      "en": "Pork intestine, glass noodles, vegetables, salt",
      "zh": "猪肠、粉条、蔬菜、盐"
    },
    "tip": {
      "ko": "소금과 함께 찍어 먹어요. 떡볶이 가게에서 팔 때가 많아요.",
      "en": "Eat with salt. Often sold at tteokbokki shops.",
      "zh": "蘸盐吃；辣炒年糕店通常也卖。"
    },
    "spice": 1,
    "price": {
      "min": 4000,
      "max": 7000
    },
    "kcal": 450,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "분식"
      ],
      "en": [
        "korean sausage",
        "blood sausage"
      ],
      "zh": [
        "血肠",
        "韩式米肠"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "mandu",
    "roman": "Mandu",
    "name": {
      "ko": "만두",
      "en": "Korean Dumplings",
      "zh": "饺子"
    },
    "category": "snack",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "얇은 피에 고기와 채소 소를 넣어 찌거나 튀긴 음식이에요. 겨울에 많이 먹어요.",
      "en": "Thin wrappers filled with meat and vegetables, steamed or fried. A winter favorite.",
      "zh": "薄皮包入肉和蔬菜馅，蒸或煎着吃，冬季最爱。"
    },
    "ingredients": {
      "ko": "밀가루 피, 돼지고기, 배추, 부추, 두부",
      "en": "Wheat wrappers, pork, napa cabbage, chives, tofu",
      "zh": "面皮、猪肉、白菜、韭菜、豆腐"
    },
    "tip": {
      "ko": "군만두(튀긴 만두)와 찐만두가 있어요. 국물만두로 떡국에 넣어 먹기도 해요.",
      "en": "Comes fried or steamed; also dropped into tteokguk (rice cake soup).",
      "zh": "有煎饺和蒸饺之分；也会放进年糕汤里吃。"
    },
    "spice": 1,
    "price": {
      "min": 4000,
      "max": 7000
    },
    "kcal": 300,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "군만두",
        "찐만두"
      ],
      "en": [
        "dumplings"
      ],
      "zh": [
        "锅贴",
        "蒸饺"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "tteokguk",
    "roman": "Tteokguk",
    "name": {
      "ko": "떡국",
      "en": "Rice Cake Soup",
      "zh": "年糕汤"
    },
    "category": "soup",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "가래떡을 얇게 썰어 육수에 넣고 끓인 국이에요. 설날에 꼭 먹는 음식이에요.",
      "en": "Thinly sliced rice cakes simmered in broth. The essential dish for Korean New Year (Seollal).",
      "zh": "年糕切成薄片放进高汤里煮的汤，韩国春节必吃。"
    },
    "ingredients": {
      "ko": "가래떡, 쇠고기 육수, 달걀, 김, 대파",
      "en": "Rice cakes, beef broth, egg, seaweed, green onion",
      "zh": "年糕、牛肉汤、鸡蛋、紫菜、大葱"
    },
    "tip": {
      "ko": "떡국을 먹어야 한 살 더 먹는다고 해요. 김가루와 달걀지단을 올려 먹어요.",
      "en": "Koreans say you turn a year older after eating tteokguk. Top with seaweed and egg strips.",
      "zh": "韩国人说吃了年糕汤才算长一岁；上面放紫菜丝和蛋丝。"
    },
    "spice": 1,
    "price": {
      "min": 8000,
      "max": 11000
    },
    "kcal": 420,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "설날 음식"
      ],
      "en": [
        "rice cake soup"
      ],
      "zh": [
        "年糕汤",
        "新年汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "miyeokguk",
    "roman": "Miyeokguk",
    "name": {
      "ko": "미역국",
      "en": "Seaweed Soup",
      "zh": "海带汤"
    },
    "category": "soup",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "미역을 넣고 끓인 국으로, 생일날 먹는 대표 음식이에요.",
      "en": "Seaweed soup traditionally eaten on birthdays.",
      "zh": "海带煮的汤，韩国生日必吃的代表食物。"
    },
    "ingredients": {
      "ko": "미역, 소고기, 간장, 참기름",
      "en": "Seaweed, beef, soy sauce, sesame oil",
      "zh": "海带、牛肉、酱油、芝麻油"
    },
    "tip": {
      "ko": "생일 아침에 꼭 먹어요. 미역과 소고기를 참기름에 볶은 뒤 끓이면 더 고소해요.",
      "en": "A must on birthday mornings. Stir-fry the seaweed and beef in sesame oil first for more flavor.",
      "zh": "生日早晨必吃；海带和牛肉先用芝麻油炒过再煮更香。"
    },
    "spice": 1,
    "price": {
      "min": 7000,
      "max": 10000
    },
    "kcal": 250,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "생일 미역국"
      ],
      "en": [
        "seaweed soup"
      ],
      "zh": [
        "海带汤",
        "生日汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "gyeranjjim",
    "roman": "Gyeranjjim",
    "name": {
      "ko": "계란찜",
      "en": "Steamed Egg",
      "zh": "鸡蛋羹"
    },
    "category": "side",
    "tastes": [
      "mild",
      "savory"
    ],
    "desc": {
      "ko": "달걀을 풀어 뜨겁게 찐 부드러운 음식이에요. 밥반찬으로 인기가 많아요.",
      "en": "Fluffy steamed egg, a soft and comforting side dish.",
      "zh": "打散的鸡蛋蒸成的嫩滑鸡蛋羹，很受欢迎的小菜。"
    },
    "ingredients": {
      "ko": "달걀, 물, 소금, 대파",
      "en": "Egg, water, salt, green onion",
      "zh": "鸡蛋、水、盐、大葱"
    },
    "tip": {
      "ko": "뜨거울 때 먹어야 부드러워요. 뚝배기에 나오는 계란찜이 제일 맛있어요.",
      "en": "Eat while hot for the fluffiest texture. Best served in a hot stone pot.",
      "zh": "趁热吃最嫩；石锅上桌的鸡蛋羹最好吃。"
    },
    "spice": 1,
    "price": {
      "min": 5000,
      "max": 9000
    },
    "kcal": 220,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "달걀찜"
      ],
      "en": [
        "steamed egg"
      ],
      "zh": [
        "蒸蛋",
        "韩式蒸蛋"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "agujjim",
    "roman": "Agujjim",
    "name": {
      "ko": "아구찜",
      "en": "Braised Monkfish",
      "zh": "炖安康鱼"
    },
    "category": "stew",
    "tastes": [
      "spicy",
      "savory"
    ],
    "desc": {
      "ko": "아귀와 콩나물을 매운 양념에 찐 음식이에요. 남해안 지방에서 유명해요.",
      "en": "Monkfish and bean sprouts steamed in spicy seasoning. Famous along the southern coast.",
      "zh": "安康鱼和豆芽用辣酱蒸制，韩国南海岸名菜。"
    },
    "ingredients": {
      "ko": "아귀, 콩나물, 미나리, 고춧가루",
      "en": "Monkfish, bean sprouts, water parsley, chili powder",
      "zh": "安康鱼、豆芽、水芹、辣椒粉"
    },
    "tip": {
      "ko": "매운 편이에요. 콩나물이 국물을 흡수해서 정말 맛있어요.",
      "en": "Quite spicy. The bean sprouts soak up the sauce — the best part.",
      "zh": "偏辣；吸饱汤汁的豆芽是精华。"
    },
    "spice": 4,
    "price": {
      "min": 35000,
      "max": 55000
    },
    "kcal": 500,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "아구"
      ],
      "en": [
        "monkfish stew"
      ],
      "zh": [
        "炖安康鱼",
        "鮟鱇鱼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "maeuntang",
    "roman": "Maeuntang",
    "name": {
      "ko": "매운탕",
      "en": "Spicy Fish Stew",
      "zh": "辣鱼汤"
    },
    "category": "soup",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "생선과 채소, 매운 양념을 넣고 끓인 탕이에요. 주로 농어, 도미, 우럭으로 만들어요.",
      "en": "A spicy stew with fresh fish and vegetables. Usually made with sea bass, snapper, or rockfish.",
      "zh": "鲜鱼和蔬菜加辣汤煮成，常用鲈鱼、鲷鱼、石斑鱼。"
    },
    "ingredients": {
      "ko": "생선, 무, 콩나물, 고춧가루, 미나리",
      "en": "Fish, radish, bean sprouts, chili powder, water parsley",
      "zh": "鱼、萝卜、豆芽、辣椒粉、水芹"
    },
    "tip": {
      "ko": "국물을 시원하게 먹으려면 생선을 먼저 끓인 뒤 매운 양념을 넣어요.",
      "en": "For a cleaner broth, simmer the fish first, then add the spicy seasoning.",
      "zh": "想喝清爽汤底，先煮鱼再加辣酱。"
    },
    "spice": 4,
    "price": {
      "min": 15000,
      "max": 25000
    },
    "kcal": 350,
    "rating": 4.1,
    "searchTerms": {
      "ko": [
        "생선 매운탕"
      ],
      "en": [
        "spicy fish soup"
      ],
      "zh": [
        "辣鱼汤",
        "鲜辣鱼汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "ojingeo-bokkeum",
    "roman": "Ojingeo Bokkeum",
    "name": {
      "ko": "오징어볶음",
      "en": "Stir-fried Squid",
      "zh": "辣炒鱿鱼"
    },
    "category": "stir",
    "tastes": [
      "spicy",
      "savory"
    ],
    "desc": {
      "ko": "오징어를 매콤한 양념에 볶은 음식이에요. 밥반찬과 술안주로 다 좋아요.",
      "en": "Squid stir-fried in a spicy sauce. Great with rice or as a drinking snack.",
      "zh": "鱿鱼用辣酱爆炒，下饭下酒都合适。"
    },
    "ingredients": {
      "ko": "오징어, 양파, 당근, 고추장, 대파",
      "en": "Squid, onion, carrot, gochujang, green onion",
      "zh": "鱿鱼、洋葱、胡萝卜、辣椒酱、大葱"
    },
    "tip": {
      "ko": "다 먹고 남은 양념에 밥을 볶아 먹으면 맛있어요.",
      "en": "Fry leftover rice in the remaining sauce — delicious.",
      "zh": "吃完后剩的酱汁用来炒饭很好吃。"
    },
    "spice": 3,
    "price": {
      "min": 12000,
      "max": 16000
    },
    "kcal": 380,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "오징어"
      ],
      "en": [
        "stir fried squid"
      ],
      "zh": [
        "炒鱿鱼",
        "辣炒鱿鱼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "nakji-bokkeum",
    "roman": "Nakji Bokkeum",
    "name": {
      "ko": "낙지볶음",
      "en": "Stir-fried Octopus",
      "zh": "辣炒小章鱼"
    },
    "category": "stir",
    "tastes": [
      "spicy",
      "savory"
    ],
    "desc": {
      "ko": "낙지와 채소를 매콤하게 볶은 음식이에요. 쫄깃한 식감이 일품이에요.",
      "en": "Baby octopus stir-fried with vegetables in spicy sauce. Chewy texture at its best.",
      "zh": "小章鱼和蔬菜辣炒，口感弹韧。"
    },
    "ingredients": {
      "ko": "낙지, 양파, 대파, 고추장, 고춧가루",
      "en": "Baby octopus, onion, green onion, gochujang, chili powder",
      "zh": "小章鱼、洋葱、大葱、辣椒酱、辣椒粉"
    },
    "tip": {
      "ko": "다 먹고 난 뒤 볶음밥으로 마무리하는 것이 기본 코스예요.",
      "en": "Finishing with fried rice in the leftover sauce is the standard course.",
      "zh": "吃完后加饭炒成炒饭是标准收尾。"
    },
    "spice": 4,
    "price": {
      "min": 15000,
      "max": 20000
    },
    "kcal": 360,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "낙지"
      ],
      "en": [
        "stir fried octopus"
      ],
      "zh": [
        "炒章鱼",
        "辣炒小章鱼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "jeyuk-bokkeum",
    "roman": "Jeyuk Bokkeum",
    "name": {
      "ko": "제육볶음",
      "en": "Spicy Stir-fried Pork",
      "zh": "辣炒猪肉"
    },
    "category": "stir",
    "tastes": [
      "spicy",
      "savory"
    ],
    "desc": {
      "ko": "돼지고기를 매운 고추장 양념에 볶은 음식이에요. 밥도둑이라고 불려요.",
      "en": "Pork stir-fried in spicy gochujang sauce. Nicknamed the 'rice thief'.",
      "zh": "猪肉用辣酱炒制，被称为“米饭小偷”（下饭神器）。"
    },
    "ingredients": {
      "ko": "돼지고기, 양파, 대파, 고추장, 마늘",
      "en": "Pork, onion, green onion, gochujang, garlic",
      "zh": "猪肉、洋葱、大葱、辣椒酱、大蒜"
    },
    "tip": {
      "ko": "상추에 싸 먹거나 밥 위에 올려 먹어요. 매콤한 맛이 끝내줘요.",
      "en": "Wrap in lettuce or serve over rice. The spiciness is addictive.",
      "zh": "用生菜包着吃或盖在米饭上；辣味很过瘾。"
    },
    "spice": 3,
    "price": {
      "min": 10000,
      "max": 14000
    },
    "kcal": 520,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "제육"
      ],
      "en": [
        "stir fried pork"
      ],
      "zh": [
        "炒猪肉",
        "辣炒五花"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "dakdoritang",
    "roman": "Dakdoritang",
    "name": {
      "ko": "닭도리탕",
      "en": "Spicy Chicken Stew",
      "zh": "辣炖鸡块"
    },
    "category": "stew",
    "tastes": [
      "spicy",
      "savory",
      "hot"
    ],
    "desc": {
      "ko": "닭고기와 감자, 당근을 매운 양념에 끓인 찜 요리예요.",
      "en": "Chicken stewed with potatoes and carrots in a spicy sauce.",
      "zh": "鸡肉、土豆、胡萝卜加辣酱炖煮的菜肴。"
    },
    "ingredients": {
      "ko": "닭고기, 감자, 당근, 양파, 고추장",
      "en": "Chicken, potato, carrot, onion, gochujang",
      "zh": "鸡肉、土豆、胡萝卜、洋葱、辣椒酱"
    },
    "tip": {
      "ko": "국물이 진해서 밥에 비벼 먹으면 정말 맛있어요.",
      "en": "The rich sauce is perfect mixed into rice.",
      "zh": "汤汁浓郁，拌饭一流。"
    },
    "spice": 3,
    "price": {
      "min": 28000,
      "max": 38000
    },
    "kcal": 550,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "닭볶음탕"
      ],
      "en": [
        "spicy chicken stew"
      ],
      "zh": [
        "辣炖鸡",
        "炖鸡块"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "kongnamul-guk",
    "roman": "Kongnamul Guk",
    "name": {
      "ko": "콩나물국",
      "en": "Bean Sprout Soup",
      "zh": "豆芽汤"
    },
    "category": "soup",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "콩나물을 넣고 끓인 맑은 국이에요. 해장국으로도 유명해요.",
      "en": "A light, clear soup with bean sprouts. Famous as a hangover cure.",
      "zh": "豆芽煮的清汤，有名的醒酒汤。"
    },
    "ingredients": {
      "ko": "콩나물, 대파, 마늘, 소금",
      "en": "Bean sprouts, green onion, garlic, salt",
      "zh": "豆芽、大葱、大蒜、盐"
    },
    "tip": {
      "ko": "매운 양념장을 넣어 먹으면 더 맛있어요.",
      "en": "Add a bit of spicy seasoning sauce for extra flavor.",
      "zh": "加点辣酱调料更香。"
    },
    "spice": 1,
    "price": {
      "min": 5000,
      "max": 8000
    },
    "kcal": 120,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "해장"
      ],
      "en": [
        "bean sprout soup"
      ],
      "zh": [
        "豆芽汤",
        "醒酒豆芽汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "bibim-naengmyeon",
    "roman": "Bibim Naengmyeon",
    "name": {
      "ko": "비빔냉면",
      "en": "Spicy Cold Noodles",
      "zh": "拌冷面"
    },
    "category": "noodle",
    "tastes": [
      "spicy",
      "cold",
      "sour"
    ],
    "desc": {
      "ko": "메밀면을 매운 양념과 채소에 비벼 먹는 음식이에요. 여름에 인기예요.",
      "en": "Buckwheat noodles tossed with spicy sauce and vegetables. A summer favorite.",
      "zh": "荞麦面和辣酱、蔬菜拌匀吃，夏天人气款。"
    },
    "ingredients": {
      "ko": "메밀면, 고추장 양념, 배, 오이, 달걀",
      "en": "Buckwheat noodles, gochujang sauce, pear, cucumber, egg",
      "zh": "荞麦面、辣酱、梨、黄瓜、鸡蛋"
    },
    "tip": {
      "ko": "물냉면보다 매워요. 식초를 넣으면 더 시원한 맛이 나요.",
      "en": "Spicier than mul naengmyeon. Add vinegar for extra freshness.",
      "zh": "比汤冷面辣；加醋更清爽。"
    },
    "spice": 4,
    "price": {
      "min": 9000,
      "max": 12000
    },
    "kcal": 450,
    "rating": 4.1,
    "searchTerms": {
      "ko": [
        "함흥냉면"
      ],
      "en": [
        "spicy cold noodles"
      ],
      "zh": [
        "拌冷面",
        "咸兴冷面"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "kongguksu",
    "roman": "Kongguksu",
    "name": {
      "ko": "콩국수",
      "en": "Cold Soy Milk Noodles",
      "zh": "豆浆冷面"
    },
    "category": "noodle",
    "tastes": [
      "cold",
      "mild"
    ],
    "desc": {
      "ko": "차가운 콩국물에 소면을 말아 먹는 여름철 음식이에요.",
      "en": "Thin noodles in chilled soybean milk. A cooling summer dish.",
      "zh": "细面泡在冰凉的豆浆里，夏日消暑美食。"
    },
    "ingredients": {
      "ko": "소면, 콩, 물, 소금, 오이",
      "en": "Thin noodles, soybean, water, salt, cucumber",
      "zh": "细面、黄豆、水、盐、黄瓜"
    },
    "tip": {
      "ko": "간이 약해서 소금을 따로 넣어 먹어요. 고소한 맛이 일품이에요.",
      "en": "Lightly seasoned — add salt to taste. The nutty flavor is wonderful.",
      "zh": "味道偏淡需自己加盐；豆香浓郁。"
    },
    "spice": 1,
    "price": {
      "min": 9000,
      "max": 12000
    },
    "kcal": 480,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "콩국"
      ],
      "en": [
        "soy milk noodles"
      ],
      "zh": [
        "豆浆面",
        "豆汁面"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "jajangmyeon",
    "roman": "Jajangmyeon",
    "name": {
      "ko": "짜장면",
      "en": "Black Bean Noodles",
      "zh": "炸酱面"
    },
    "category": "noodle",
    "tastes": [
      "savory",
      "sweet"
    ],
    "desc": {
      "ko": "춘장으로 만든 짜장 소스를 면에 비벼 먹는 음식이에요. 한국식 중화요리의 대표예요.",
      "en": "Noodles tossed in black bean sauce. A classic Korean-Chinese dish.",
      "zh": "春酱做的炸酱拌面，韩式中餐代表。"
    },
    "ingredients": {
      "ko": "면, 춘장, 돼지고기, 양파, 감자",
      "en": "Noodles, black bean paste, pork, onion, potato",
      "zh": "面、春酱、猪肉、洋葱、土豆"
    },
    "tip": {
      "ko": "단무지와 양파, 그리고 짜장면은 함께 먹는 것이 기본이에요.",
      "en": "Standard sides are pickled radish (danmuji) and raw onion.",
      "zh": "标配是腌萝卜（단무지）和生洋葱。"
    },
    "spice": 1,
    "price": {
      "min": 6000,
      "max": 9000
    },
    "kcal": 700,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "자장면"
      ],
      "en": [
        "black bean noodles"
      ],
      "zh": [
        "炸酱面",
        "韩式炸酱面"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "jjamppong",
    "roman": "Jjamppong",
    "name": {
      "ko": "짬뽕",
      "en": "Spicy Seafood Noodle Soup",
      "zh": "海鲜辣汤面"
    },
    "category": "noodle",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "해물과 매운 국물에 면을 넣은 음식이에요. 짜장면과 함께 중국집의 대표 메뉴예요.",
      "en": "Noodles in a spicy broth loaded with seafood. The other classic Korean-Chinese menu item.",
      "zh": "海鲜加辣汤的面，中餐馆和炸酱面并列的招牌。"
    },
    "ingredients": {
      "ko": "면, 오징어, 새우, 홍합, 고춧가루",
      "en": "Noodles, squid, shrimp, mussels, chili powder",
      "zh": "面、鱿鱼、虾、青口、辣椒粉"
    },
    "tip": {
      "ko": "국물이 아주 시원하고 매워요. 해물을 많이 넣을수록 맛있어요.",
      "en": "The broth is very savory and spicy. More seafood means more flavor.",
      "zh": "汤头鲜辣；海鲜越多越鲜。"
    },
    "spice": 4,
    "price": {
      "min": 9000,
      "max": 13000
    },
    "kcal": 580,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "해물짬뽕"
      ],
      "en": [
        "seafood noodle soup"
      ],
      "zh": [
        "海鲜面",
        "辣汤面"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "kalguksu",
    "roman": "Kalguksu",
    "name": {
      "ko": "칼국수",
      "en": "Knife-cut Noodle Soup",
      "zh": "刀切面"
    },
    "category": "noodle",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "칼로 썬 면을 시원한 육수에 넣어 끓인 국수예요. 진한 닭육수가 보통이에요.",
      "en": "Hand-cut noodles in a savory broth, usually rich chicken stock.",
      "zh": "刀切的面条下入鲜美高汤，通常用浓郁鸡汤。"
    },
    "ingredients": {
      "ko": "면, 닭육수, 애호박, 감자, 김",
      "en": "Noodles, chicken broth, zucchini, potato, seaweed",
      "zh": "面条、鸡汤、西葫芦、土豆、紫菜"
    },
    "tip": {
      "ko": "면을 쫄깃하게 먹으려면 바로 먹어야 해요. 김가루를 올려 먹으면 고소해요.",
      "en": "Eat right away for the chewiest noodles. Top with shredded seaweed.",
      "zh": "面要趁早吃才筋道；撒紫菜丝更香。"
    },
    "spice": 1,
    "price": {
      "min": 8000,
      "max": 11000
    },
    "kcal": 480,
    "rating": 4.2,
    "searchTerms": {
      "ko": [
        "손칼국수"
      ],
      "en": [
        "knife cut noodles"
      ],
      "zh": [
        "刀切面",
        "手擀面"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "sujebi",
    "roman": "Sujebi",
    "name": {
      "ko": "수제비",
      "en": "Hand-torn Dough Soup",
      "zh": "面片汤"
    },
    "category": "noodle",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "반죽을 손으로 떼어 넣고 끓인 국이에요. 칼국수와 비슷하지만 면이 두꺼워요.",
      "en": "Soup with hand-torn dough pieces. Similar to kalguksu but with thicker, chewier pieces.",
      "zh": "面团用手撕成片下锅煮的汤，类似刀切面但面片更厚更劲道。"
    },
    "ingredients": {
      "ko": "밀가루 반죽, 육수, 감자, 애호박, 대파",
      "en": "Wheat dough, broth, potato, zucchini, green onion",
      "zh": "面团、高汤、土豆、西葫芦、大葱"
    },
    "tip": {
      "ko": "동치미와 함께 먹으면 정말 잘 어울려요.",
      "en": "Pairs wonderfully with dongchimi (radish water kimchi).",
      "zh": "配萝卜水泡菜（동치미）特别搭。"
    },
    "spice": 1,
    "price": {
      "min": 8000,
      "max": 11000
    },
    "kcal": 420,
    "rating": 4.7,
    "searchTerms": {
      "ko": [],
      "en": [
        "hand torn noodle soup"
      ],
      "zh": [
        "面片汤",
        "面疙瘩"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "makguksu",
    "roman": "Makguksu",
    "name": {
      "ko": "막국수",
      "en": "Chuncheon Buckwheat Noodles",
      "zh": "荞麦拌面"
    },
    "category": "noodle",
    "tastes": [
      "spicy",
      "cold"
    ],
    "desc": {
      "ko": "춘천의 대표 음식으로, 메밀면을 매콤달콤한 양념에 비벼 먹어요.",
      "en": "A Chuncheon specialty — buckwheat noodles tossed in sweet-spicy sauce.",
      "zh": "春川代表美食，荞麦面拌甜辣酱。"
    },
    "ingredients": {
      "ko": "메밀면, 고추장, 참기름, 오이, 달걀",
      "en": "Buckwheat noodles, gochujang, sesame oil, cucumber, egg",
      "zh": "荞麦面、辣椒酱、芝麻油、黄瓜、鸡蛋"
    },
    "tip": {
      "ko": "육수와 함께 나오는데, 반쯤 먹은 뒤 국물을 부어 먹어요.",
      "en": "Comes with broth — pour it in after eating half.",
      "zh": "会附一碗汤，吃到一半再倒进去。"
    },
    "spice": 3,
    "price": {
      "min": 9000,
      "max": 12000
    },
    "kcal": 460,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "메밀국수"
      ],
      "en": [
        "buckwheat noodles"
      ],
      "zh": [
        "荞麦拌面"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "janchi-guksu",
    "roman": "Janchi Guksu",
    "name": {
      "ko": "잔치국수",
      "en": "Banquet Noodles",
      "zh": "喜面"
    },
    "category": "noodle",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "잔치(잔칫날)에 먹는 맑은 국수예요. 간단하면서도 정겨운 맛이에요.",
      "en": "Clear noodle soup served at celebrations. Simple and heartwarming.",
      "zh": "宴席上吃的清爽汤面，简单又温暖。"
    },
    "ingredients": {
      "ko": "소면, 육수, 달걀, 김, 호박",
      "en": "Thin noodles, broth, egg, seaweed, zucchini",
      "zh": "细面、高汤、鸡蛋、紫菜、西葫芦"
    },
    "tip": {
      "ko": "김가루와 참기름을 넣으면 더 고소해요.",
      "en": "Add shredded seaweed and sesame oil for extra aroma.",
      "zh": "加紫菜丝和芝麻油更香。"
    },
    "spice": 1,
    "price": {
      "min": 5000,
      "max": 8000
    },
    "kcal": 400,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "온면"
      ],
      "en": [
        "banquet noodles"
      ],
      "zh": [
        "喜面",
        "汤面"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "hoe",
    "roman": "Hoe",
    "name": {
      "ko": "회",
      "en": "Raw Fish",
      "zh": "生鱼片"
    },
    "category": "side",
    "tastes": [
      "fresh",
      "cold"
    ],
    "desc": {
      "ko": "신선한 생선을 얇게 썰어 먹는 음식이에요. 초장과 쌈 채소와 함께 먹어요.",
      "en": "Fresh raw fish sliced thin, eaten with vinegared chili sauce and wrap vegetables.",
      "zh": "新鲜生鱼切薄片，配醋辣酱和包菜吃。"
    },
    "ingredients": {
      "ko": "생선, 초장, 상추, 깻잎, 마늘",
      "en": "Fish, vinegared chili sauce, lettuce, perilla leaves, garlic",
      "zh": "鱼、醋辣酱、生菜、苏子叶、大蒜"
    },
    "tip": {
      "ko": "밥과 함께 먹는 회덮밥이나 매운탕으로 이어서 먹는 것이 흔한 코스예요.",
      "en": "Often followed by hoedeopbap (fish rice bowl) or maeuntang (spicy stew).",
      "zh": "常见吃法是接着吃生鱼片盖饭或辣鱼汤。"
    },
    "spice": 1,
    "price": {
      "min": 25000,
      "max": 45000
    },
    "kcal": 250,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "활어회"
      ],
      "en": [
        "sashimi",
        "raw fish"
      ],
      "zh": [
        "生鱼片",
        "刺身"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "hoedeopbap",
    "roman": "Hoedeopbap",
    "name": {
      "ko": "회덮밥",
      "en": "Raw Fish Rice Bowl",
      "zh": "生鱼片盖饭"
    },
    "category": "rice",
    "tastes": [
      "fresh",
      "spicy"
    ],
    "desc": {
      "ko": "밥 위에 회와 채소를 올리고 초고추장을 뿌려 비벼 먹는 음식이에요.",
      "en": "Raw fish and vegetables over rice, mixed with vinegared chili sauce.",
      "zh": "米饭上铺生鱼片和蔬菜，淋醋辣酱拌匀。"
    },
    "ingredients": {
      "ko": "밥, 회, 오이, 양파, 초고추장",
      "en": "Rice, raw fish, cucumber, onion, vinegared chili sauce",
      "zh": "米饭、生鱼片、黄瓜、洋葱、醋辣酱"
    },
    "tip": {
      "ko": "비벼 먹지 말고 조금씩 버무려 먹어야 생선이 신선해요.",
      "en": "Mix little by little rather than all at once to keep the fish fresh.",
      "zh": "一点一点拌着吃，鱼片更新鲜。"
    },
    "spice": 2,
    "price": {
      "min": 12000,
      "max": 16000
    },
    "kcal": 520,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "회밥"
      ],
      "en": [
        "raw fish rice bowl"
      ],
      "zh": [
        "生鱼片盖饭"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "eomuk",
    "roman": "Eomuk",
    "name": {
      "ko": "어묵",
      "en": "Fish Cake",
      "zh": "鱼糕"
    },
    "category": "snack",
    "tastes": [
      "savory",
      "hot"
    ],
    "desc": {
      "ko": "생선 살로 만든 어묵을 국물에 끓여 먹는 길거리 음식이에요. 겨울에 인기예요.",
      "en": "Fish cakes simmered in a warm broth. A popular winter street food.",
      "zh": "鱼浆做的鱼糕串在汤里煮，冬季街头人气小吃。"
    },
    "ingredients": {
      "ko": "어묵, 무, 국물, 대파",
      "en": "Fish cake, radish, broth, green onion",
      "zh": "鱼糕、萝卜、汤、大葱"
    },
    "tip": {
      "ko": "국물도 마실 수 있어요. 겨울에 손이 시려울 때 먹으면 몸이 따뜻해져요.",
      "en": "The broth is drinkable — perfect for warming up in winter.",
      "zh": "汤也可以喝；冬天吃完全身暖和。"
    },
    "spice": 1,
    "price": {
      "min": 1000,
      "max": 3000
    },
    "kcal": 150,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "오뎅"
      ],
      "en": [
        "fish cake"
      ],
      "zh": [
        "鱼糕串",
        "鱼饼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "hotteok",
    "roman": "Hotteok",
    "name": {
      "ko": "호떡",
      "en": "Sweet Syrup Pancake",
      "zh": "糖饼"
    },
    "category": "snack",
    "tastes": [
      "sweet"
    ],
    "desc": {
      "ko": "반죽 안에 갈색 설탕과 계피를 넣고 납작하게 구운 길거리 간식이에요.",
      "en": "A flat griddled pancake filled with brown sugar and cinnamon. Classic street snack.",
      "zh": "面团里包红糖和肉桂煎扁，经典街头小吃。"
    },
    "ingredients": {
      "ko": "밀가루, 갈색 설탕, 계피, 견과류",
      "en": "Flour, brown sugar, cinnamon, nuts",
      "zh": "面粉、红糖、肉桂、坚果"
    },
    "tip": {
      "ko": "겨울철 길거리에서 가장 인기 있는 간식이에요. 뜨거울 때 조심해서 먹어요.",
      "en": "The most popular winter street snack. Be careful — the filling is molten hot.",
      "zh": "冬天街头最火的小吃；内馅很烫要小心。"
    },
    "spice": 1,
    "price": {
      "min": 1000,
      "max": 2000
    },
    "kcal": 350,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "씨앗호떡"
      ],
      "en": [
        "sweet pancake"
      ],
      "zh": [
        "糖饼",
        "糖馅饼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "bungeoppang",
    "roman": "Bungeoppang",
    "name": {
      "ko": "붕어빵",
      "en": "Fish-shaped Pastry",
      "zh": "鲫鱼饼"
    },
    "category": "snack",
    "tastes": [
      "sweet"
    ],
    "desc": {
      "ko": "붕어 모양 틀에 만든 달콤한 간식이에요. 팥소가 들어 있어요.",
      "en": "A fish-shaped pastry filled with sweet red bean paste.",
      "zh": "鲫鱼造型的甜点，内馅是红豆沙。"
    },
    "ingredients": {
      "ko": "밀가루, 팥소, 설탕",
      "en": "Flour, red bean paste, sugar",
      "zh": "面粉、红豆沙、糖"
    },
    "tip": {
      "ko": "겨울철에 먹는 대표 간식이에요. 꼬리 부분이 가장 바삭해요.",
      "en": "A winter staple snack. The tail end is the crispiest.",
      "zh": "冬天代表小吃；鱼尾部分最脆。"
    },
    "spice": 1,
    "price": {
      "min": 1000,
      "max": 2000
    },
    "kcal": 250,
    "rating": 4.1,
    "searchTerms": {
      "ko": [
        "팥붕어빵"
      ],
      "en": [
        "fish shaped pastry"
      ],
      "zh": [
        "鲫鱼饼",
        "红豆饼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "gyeranppang",
    "roman": "Gyeranppang",
    "name": {
      "ko": "계란빵",
      "en": "Egg Bread",
      "zh": "鸡蛋面包"
    },
    "category": "snack",
    "tastes": [
      "sweet",
      "savory"
    ],
    "desc": {
      "ko": "달걀 하나를 통째로 올려 구운 빵이에요. 달콤하고 부드러워요.",
      "en": "A small sweet bread with a whole egg baked on top. Soft and comforting.",
      "zh": "面包上烤一整颗鸡蛋，甜软可口。"
    },
    "ingredients": {
      "ko": "밀가루, 달걀, 설탕, 우유",
      "en": "Flour, egg, sugar, milk",
      "zh": "面粉、鸡蛋、糖、牛奶"
    },
    "tip": {
      "ko": "겨울 길거리 간식으로 인기예요. 따뜻할 때 먹는 것이 가장 맛있어요.",
      "en": "A winter street snack. Best eaten warm.",
      "zh": "冬季街头小吃；趁热吃最好。"
    },
    "spice": 1,
    "price": {
      "min": 1500,
      "max": 2500
    },
    "kcal": 280,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "겨울 간식"
      ],
      "en": [
        "egg bread"
      ],
      "zh": [
        "鸡蛋面包"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "dakgangjeong",
    "roman": "Dakgangjeong",
    "name": {
      "ko": "닭강정",
      "en": "Sweet Crispy Chicken",
      "zh": "韩式糖醋鸡块"
    },
    "category": "fried",
    "tastes": [
      "sweet",
      "spicy"
    ],
    "desc": {
      "ko": "튀긴 닭고기를 달콤한 간장 양념에 버무린 음식이에요.",
      "en": "Crispy fried chicken coated in a sweet soy-garlic glaze.",
      "zh": "炸鸡块裹上甜酱油蒜味酱汁。"
    },
    "ingredients": {
      "ko": "닭고기, 간장, 설탕, 마늘, 깨",
      "en": "Chicken, soy sauce, sugar, garlic, sesame",
      "zh": "鸡肉、酱油、糖、大蒜、芝麻"
    },
    "tip": {
      "ko": "간식이나 맥주 안주로 인기예요. 마늘 향이 포인트예요.",
      "en": "Popular as a snack or beer pairing. The garlic aroma is the key.",
      "zh": "当零食或啤酒小菜都很火；蒜香是灵魂。"
    },
    "spice": 2,
    "price": {
      "min": 15000,
      "max": 20000
    },
    "kcal": 560,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "순살닭강정"
      ],
      "en": [
        "sweet fried chicken"
      ],
      "zh": [
        "糖醋鸡块",
        "韩式炸鸡块"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "yangnyeom-chicken",
    "roman": "Yangnyeom Chicken",
    "name": {
      "ko": "양념치킨",
      "en": "Seasoned Fried Chicken",
      "zh": "酱料炸鸡"
    },
    "category": "fried",
    "tastes": [
      "spicy",
      "sweet"
    ],
    "desc": {
      "ko": "바삭하게 튀긴 치킨에 매콤달콤한 양념소스를 발라 만든 음식이에요.",
      "en": "Crispy fried chicken coated in a sticky sweet-spicy sauce. A Korean staple.",
      "zh": "酥脆炸鸡裹上甜辣酱汁，韩国国民美食。"
    },
    "ingredients": {
      "ko": "닭고기, 고추장, 케첩, 설탕, 마늘",
      "en": "Chicken, gochujang, ketchup, sugar, garlic",
      "zh": "鸡肉、辣椒酱、番茄酱、糖、大蒜"
    },
    "tip": {
      "ko": "맥주와 함께 먹는 '치맥'이 한국의 대표 문화예요.",
      "en": "'Chimaek' (chicken + beer) is a signature Korean food culture.",
      "zh": "配啤酒的“치맥（炸鸡+啤酒）”是韩国代表文化。"
    },
    "spice": 3,
    "price": {
      "min": 16000,
      "max": 21000
    },
    "kcal": 550,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "치킨"
      ],
      "en": [
        "seasoned chicken"
      ],
      "zh": [
        "酱料炸鸡",
        "调味炸鸡"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "huraideu-chicken",
    "roman": "Huraideu Chicken",
    "name": {
      "ko": "후라이드치킨",
      "en": "Fried Chicken",
      "zh": "原味炸鸡"
    },
    "category": "fried",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "양념 없이 바삭하게 튀긴 치킨이에요. 소금 간이 되어 있어요.",
      "en": "Plain crispy fried chicken, seasoned with just salt.",
      "zh": "不裹酱的酥脆炸鸡，只撒盐调味。"
    },
    "ingredients": {
      "ko": "닭고기, 튀김가루, 소금, 후추",
      "en": "Chicken, frying batter, salt, pepper",
      "zh": "鸡肉、炸粉、盐、胡椒"
    },
    "tip": {
      "ko": "바삭함을 살리려면 바로 먹어야 해요. 양념치킨과 반반으로 시키는 사람이 많아요.",
      "en": "Eat immediately for maximum crunch. Many order half and half with seasoned chicken.",
      "zh": "趁热吃最酥脆；很多人点半半（原味+酱料）。"
    },
    "spice": 1,
    "price": {
      "min": 15000,
      "max": 20000
    },
    "kcal": 520,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "치킨",
        "프라이드"
      ],
      "en": [
        "fried chicken",
        "crispy chicken"
      ],
      "zh": [
        "原味炸鸡",
        "脆皮炸鸡"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "omurice",
    "roman": "Omurice",
    "name": {
      "ko": "오므라이스",
      "en": "Omelette Rice",
      "zh": "蛋包饭"
    },
    "category": "rice",
    "tastes": [
      "savory",
      "sweet"
    ],
    "desc": {
      "ko": "밥을 볶아 달걀 지단으로 감싼 음식이에요. 케첩을 뿌려 먹어요.",
      "en": "Fried rice wrapped in a thin omelette, topped with ketchup.",
      "zh": "炒饭裹上蛋皮，淋番茄酱吃。"
    },
    "ingredients": {
      "ko": "밥, 달걀, 양파, 당근, 케첩",
      "en": "Rice, egg, onion, carrot, ketchup",
      "zh": "米饭、鸡蛋、洋葱、胡萝卜、番茄酱"
    },
    "tip": {
      "ko": "아이들이 특히 좋아해요. 가정식 식당에서 흔히 볼 수 있어요.",
      "en": "A kid favorite, commonly found at casual family restaurants.",
      "zh": "小孩特别喜欢，在家庭餐馆很常见。"
    },
    "spice": 1,
    "price": {
      "min": 8000,
      "max": 11000
    },
    "kcal": 600,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "옴라이스"
      ],
      "en": [
        "omelette rice"
      ],
      "zh": [
        "蛋包饭"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "jumeokbap",
    "roman": "Jumeokbap",
    "name": {
      "ko": "주먹밥",
      "en": "Rice Balls",
      "zh": "饭团"
    },
    "category": "rice",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "밥에 참치나 채소를 섞어 주먹 크기로 뭉친 음식이에요.",
      "en": "Rice mixed with tuna or vegetables, shaped into fist-sized balls.",
      "zh": "米饭拌入金枪鱼或蔬菜，捏成拳头大小的饭团。"
    },
    "ingredients": {
      "ko": "밥, 참치, 마요네즈, 김, 참기름",
      "en": "Rice, tuna, mayonnaise, seaweed, sesame oil",
      "zh": "米饭、金枪鱼、蛋黄酱、紫菜、芝麻油"
    },
    "tip": {
      "ko": "소풍이나 캠핑 때 인기예요. 김을 둘러주면 더 맛있어요.",
      "en": "Great for picnics and camping. Wrap with seaweed for extra flavor.",
      "zh": "野餐露营人气款；包上紫菜更好吃。"
    },
    "spice": 1,
    "price": {
      "min": 2500,
      "max": 4000
    },
    "kcal": 300,
    "rating": 4.8,
    "searchTerms": {
      "ko": [],
      "en": [
        "rice ball"
      ],
      "zh": [
        "饭团"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "mayak-gimbap",
    "roman": "Mayak Gimbap",
    "name": {
      "ko": "마약김밥",
      "en": "Mini Seaweed Rice Rolls",
      "zh": "迷你紫菜包饭"
    },
    "category": "rice",
    "tastes": [
      "savory",
      "sweet"
    ],
    "desc": {
      "ko": "손가락 크기의 작은 김밥으로, '중독된다'고 해서 마약김밥이라고 불러요.",
      "en": "Finger-sized gimbap nicknamed 'drug gimbap' because it's so addictive.",
      "zh": "手指大小的迷你紫菜包饭，因为好吃到上瘾而得名。"
    },
    "ingredients": {
      "ko": "김, 밥, 당근, 오이, 겨자소스",
      "en": "Seaweed, rice, carrot, cucumber, mustard sauce",
      "zh": "紫菜、米饭、胡萝卜、黄瓜、芥末酱"
    },
    "tip": {
      "ko": "겨자 간장 소스에 찍어 먹는 것이 포인트예요.",
      "en": "The key is dipping in mustard-soy sauce.",
      "zh": "灵魂是蘸芥末酱油汁。"
    },
    "spice": 1,
    "price": {
      "min": 2000,
      "max": 4000
    },
    "kcal": 320,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "꼬마김밥"
      ],
      "en": [
        "mini kimbap"
      ],
      "zh": [
        "迷你紫菜包饭",
        "小紫菜卷"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "seolleongtang",
    "roman": "Seolleongtang",
    "name": {
      "ko": "설렁탕",
      "en": "Ox Bone Soup",
      "zh": "牛骨汤"
    },
    "category": "soup",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "소뼈를 오랫동안 끓여 뽀얗게 만든 국이에요. 소면과 함께 먹어요.",
      "en": "A milky white soup made by simmering beef bones for hours. Served with thin noodles.",
      "zh": "牛骨长时间熬出的奶白色汤，配细面吃。"
    },
    "ingredients": {
      "ko": "소뼈, 소고기, 소면, 대파, 소금",
      "en": "Beef bones, beef, thin noodles, green onion, salt",
      "zh": "牛骨、牛肉、细面、大葱、盐"
    },
    "tip": {
      "ko": "간이 거의 없어서 소금과 후추로 직접 간을 해요. 깍두기와 함께 먹어요.",
      "en": "Barely seasoned — add salt and pepper yourself. Eat with kkakdugi (radish kimchi).",
      "zh": "本身几乎没调味，自己加盐和胡椒；配萝卜泡菜吃。"
    },
    "spice": 1,
    "price": {
      "min": 10000,
      "max": 14000
    },
    "kcal": 450,
    "rating": 4.5,
    "searchTerms": {
      "ko": [],
      "en": [
        "ox bone soup"
      ],
      "zh": [
        "牛骨汤",
        "牛杂汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "gomtang",
    "roman": "Gomtang",
    "name": {
      "ko": "곰탕",
      "en": "Beef Bone Soup",
      "zh": "浓牛骨汤"
    },
    "category": "soup",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "소고기와 뼈를 푹 고아 낸 진한 국이에요. 설렁탕보다 더 진해요.",
      "en": "A rich, hearty broth made from simmered beef and bones. Fuller-bodied than seolleongtang.",
      "zh": "牛肉和骨头久熬的浓汤，比牛骨汤更浓郁。"
    },
    "ingredients": {
      "ko": "소고기, 소뼈, 대파, 마늘, 소금",
      "en": "Beef, beef bones, green onion, garlic, salt",
      "zh": "牛肉、牛骨、大葱、大蒜、盐"
    },
    "tip": {
      "ko": "밥을 말아 먹거나 소면을 넣어 먹어요. 간을 맞춰 먹는 것이 기본이에요.",
      "en": "Serve over rice or with noodles. Season to taste at the table.",
      "zh": "泡饭吃或加细面；自己调味。"
    },
    "spice": 1,
    "price": {
      "min": 10000,
      "max": 14000
    },
    "kcal": 400,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "곰국"
      ],
      "en": [
        "beef bone soup"
      ],
      "zh": [
        "浓牛骨汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "sogogi-muguk",
    "roman": "Sogogi Muguk",
    "name": {
      "ko": "소고기무국",
      "en": "Beef Radish Soup",
      "zh": "牛肉萝卜汤"
    },
    "category": "soup",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "소고기와 무를 넣고 끓인 맑고 시원한 국이에요.",
      "en": "A clear, savory soup with beef and radish.",
      "zh": "牛肉和萝卜煮的清爽汤品。"
    },
    "ingredients": {
      "ko": "소고기, 무, 대파, 마늘, 간장",
      "en": "Beef, radish, green onion, garlic, soy sauce",
      "zh": "牛肉、萝卜、大葱、大蒜、酱油"
    },
    "tip": {
      "ko": "무가 국물을 맑고 시원하게 만들어요. 밥과 함께 먹으면 잘 어울려요.",
      "en": "The radish keeps the broth clean and fresh. Great with rice.",
      "zh": "萝卜让汤更清甜；配米饭很搭。"
    },
    "spice": 1,
    "price": {
      "min": 9000,
      "max": 13000
    },
    "kcal": 300,
    "rating": 4.1,
    "searchTerms": {
      "ko": [
        "무국"
      ],
      "en": [
        "beef radish soup"
      ],
      "zh": [
        "牛肉萝卜汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "nokdu-jeon",
    "roman": "Nokdu Jeon",
    "name": {
      "ko": "녹두전",
      "en": "Mung Bean Pancake",
      "zh": "绿豆煎饼"
    },
    "category": "side",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "불린 녹두를 갈아 반죽해 부친 전이에요. 바삭하고 고소해요.",
      "en": "Pancakes made from ground mung beans. Crispy and nutty.",
      "zh": "泡发绿豆磨浆煎成的饼，酥脆喷香。"
    },
    "ingredients": {
      "ko": "녹두, 돼지고기, 숙주, 대파, 김치",
      "en": "Mung beans, pork, bean sprouts, green onion, kimchi",
      "zh": "绿豆、猪肉、豆芽、大葱、泡菜"
    },
    "tip": {
      "ko": "겨울철에 인기 있는 안주예요. 막걸리와 함께 먹으면 최고예요.",
      "en": "A popular winter snack. Perfect with makgeolli.",
      "zh": "冬季人气下酒菜；配米酒一流。"
    },
    "spice": 2,
    "price": {
      "min": 10000,
      "max": 15000
    },
    "kcal": 480,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "빈대떡"
      ],
      "en": [
        "mung bean pancake"
      ],
      "zh": [
        "绿豆煎饼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "donggeurangttaeng",
    "roman": "Donggeurangttaeng",
    "name": {
      "ko": "동그랑땡",
      "en": "Korean Meat Patties",
      "zh": "韩式肉饼"
    },
    "category": "side",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "두부와 고기를 섞어 동그랗게 빚은 뒤 부쳐 먹는 음식이에요.",
      "en": "Round patties of minced meat and tofu, pan-fried until golden.",
      "zh": "豆腐和肉末拌匀做成圆饼煎制。"
    },
    "ingredients": {
      "ko": "돼지고기, 두부, 달걀, 양파, 부침가루",
      "en": "Pork, tofu, egg, onion, frying batter",
      "zh": "猪肉、豆腐、鸡蛋、洋葱、煎饼粉"
    },
    "tip": {
      "ko": "도시락 반찬으로 인기예요. 케첩이나 간장에 찍어 먹어요.",
      "en": "A popular lunchbox side. Dip in ketchup or soy sauce.",
      "zh": "便当人气小菜；蘸番茄酱或酱油。"
    },
    "spice": 1,
    "price": {
      "min": 8000,
      "max": 12000
    },
    "kcal": 420,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "완자전"
      ],
      "en": [
        "meat patties"
      ],
      "zh": [
        "韩式肉饼",
        "煎肉饼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "hobak-jeon",
    "roman": "Hobak Jeon",
    "name": {
      "ko": "호박전",
      "en": "Zucchini Pancake",
      "zh": "西葫芦煎饼"
    },
    "category": "side",
    "tastes": [
      "mild",
      "savory"
    ],
    "desc": {
      "ko": "애호박을 얇게 썰어 달걀물에 부친 전이에요.",
      "en": "Thin zucchini slices dipped in egg and pan-fried.",
      "zh": "西葫芦切片裹蛋液煎制。"
    },
    "ingredients": {
      "ko": "애호박, 달걀, 밀가루, 소금",
      "en": "Zucchini, egg, flour, salt",
      "zh": "西葫芦、鸡蛋、面粉、盐"
    },
    "tip": {
      "ko": "부드럽고 담백해요. 간장에 찍어 먹으면 더 맛있어요.",
      "en": "Soft and mild. Even better dipped in soy sauce.",
      "zh": "软嫩清淡；蘸酱油更香。"
    },
    "spice": 1,
    "price": {
      "min": 8000,
      "max": 12000
    },
    "kcal": 280,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "애호박전"
      ],
      "en": [
        "zucchini pancake"
      ],
      "zh": [
        "西葫芦煎饼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "ganjang-gejang",
    "roman": "Ganjang Gejang",
    "name": {
      "ko": "간장게장",
      "en": "Soy Sauce Marinated Crab",
      "zh": "酱油腌蟹"
    },
    "category": "side",
    "tastes": [
      "savory",
      "fresh"
    ],
    "desc": {
      "ko": "살아있는 꽃게를 간장 양념에 절인 음식이에요. 밥도둑 중의 밥도둑이에요.",
      "en": "Raw blue crabs marinated in soy sauce. Known as the ultimate 'rice thief'.",
      "zh": "活花蟹用酱油腌制，被称为米饭小偷之王。"
    },
    "ingredients": {
      "ko": "꽃게, 간장, 마늘, 생강, 고추",
      "en": "Blue crab, soy sauce, garlic, ginger, chili",
      "zh": "花蟹、酱油、大蒜、生姜、辣椒"
    },
    "tip": {
      "ko": "게딱지에 밥을 비벼 먹는 것이 별미예요. 간이 세서 밥이 계속 땡겨요.",
      "en": "Mixing rice into the crab shell is a delicacy. The salty sauce makes you crave rice.",
      "zh": "把饭拌进蟹盖里是绝品；酱咸下饭。"
    },
    "spice": 2,
    "price": {
      "min": 20000,
      "max": 35000
    },
    "kcal": 320,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "게장"
      ],
      "en": [
        "soy marinated crab"
      ],
      "zh": [
        "酱蟹",
        "酱油腌蟹"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "yangnyeom-gejang",
    "roman": "Yangnyeom Gejang",
    "name": {
      "ko": "양념게장",
      "en": "Spicy Marinated Crab",
      "zh": "辣酱腌蟹"
    },
    "category": "side",
    "tastes": [
      "spicy",
      "savory"
    ],
    "desc": {
      "ko": "꽃게를 매운 고추장 양념에 절인 음식이에요. 간장게장보다 매워요.",
      "en": "Blue crabs marinated in spicy gochujang sauce. Spicier than ganjang gejang.",
      "zh": "花蟹用辣酱腌制，比酱油腌蟹更辣。"
    },
    "ingredients": {
      "ko": "꽃게, 고추장, 고춧가루, 마늘, 참기름",
      "en": "Blue crab, gochujang, chili powder, garlic, sesame oil",
      "zh": "花蟹、辣椒酱、辣椒粉、大蒜、芝麻油"
    },
    "tip": {
      "ko": "매콤한 양념이 밥과 정말 잘 어울려요. 비벼 먹으면 최고예요.",
      "en": "The spicy sauce is amazing with rice. Mix it in!",
      "zh": "辣酱配饭一流；拌着吃最爽。"
    },
    "spice": 4,
    "price": {
      "min": 20000,
      "max": 35000
    },
    "kcal": 340,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "게장"
      ],
      "en": [
        "spicy marinated crab"
      ],
      "zh": [
        "辣酱腌蟹"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "jangeo-gui",
    "roman": "Jangeo Gui",
    "name": {
      "ko": "장어구이",
      "en": "Grilled Eel",
      "zh": "烤鳗鱼"
    },
    "category": "grill",
    "tastes": [
      "savory",
      "sweet"
    ],
    "desc": {
      "ko": "장어를 양념해서 구운 음식이에요. 여름철 보양식으로 유명해요.",
      "en": "Grilled eel glazed with savory sauce. Famous summer stamina food.",
      "zh": "鳗鱼刷酱烤制，夏天滋补名菜。"
    },
    "ingredients": {
      "ko": "장어, 간장, 설탕, 마늘, 생강",
      "en": "Eel, soy sauce, sugar, garlic, ginger",
      "zh": "鳗鱼、酱油、糖、大蒜、生姜"
    },
    "tip": {
      "ko": "초가을에 먹는 장어가 가장 맛있어요. 기력 회복에 좋다고 해요.",
      "en": "Early autumn eel is the tastiest. Believed to restore energy.",
      "zh": "初秋的鳗鱼最肥美；被认为能恢复体力。"
    },
    "spice": 2,
    "price": {
      "min": 30000,
      "max": 45000
    },
    "kcal": 500,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "민물장어"
      ],
      "en": [
        "grilled eel"
      ],
      "zh": [
        "烤鳗鱼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "godeungeo-gui",
    "roman": "Godeungeo Gui",
    "name": {
      "ko": "고등어구이",
      "en": "Grilled Mackerel",
      "zh": "烤鲭鱼"
    },
    "category": "grill",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "고등어를 소금에 절여 구운 음식이에요. 밥반찬으로 아주 흔해요.",
      "en": "Salted mackerel grilled until golden. A very common everyday side dish.",
      "zh": "鲭鱼用盐腌后煎烤，很常见的家常菜。"
    },
    "ingredients": {
      "ko": "고등어, 소금, 레몬",
      "en": "Mackerel, salt, lemon",
      "zh": "鲭鱼、盐、柠檬"
    },
    "tip": {
      "ko": "비린내를 줄이려면 레몬즙을 뿌려 먹어요. 무와 함께 먹으면 잘 어울려요.",
      "en": "Squeeze lemon over it to cut the fishiness. Pairs well with radish.",
      "zh": "挤柠檬去腥；配萝卜一起吃。"
    },
    "spice": 1,
    "price": {
      "min": 10000,
      "max": 14000
    },
    "kcal": 400,
    "rating": 4.1,
    "searchTerms": {
      "ko": [
        "자반고등어"
      ],
      "en": [
        "grilled mackerel"
      ],
      "zh": [
        "烤鲭鱼",
        "烤青花鱼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "makchang-gui",
    "roman": "Makchang Gui",
    "name": {
      "ko": "막창구이",
      "en": "Grilled Pork Intestines",
      "zh": "烤猪大肠"
    },
    "category": "grill",
    "tastes": [
      "savory",
      "hot"
    ],
    "desc": {
      "ko": "돼지의 큰 창자를 구워 먹는 음식이에요. 대구의 대표 음식이에요.",
      "en": "Grilled large pork intestines, a specialty of Daegu.",
      "zh": "烤猪大肠，大邱代表美食。"
    },
    "ingredients": {
      "ko": "막창, 소금, 참깨, 양파",
      "en": "Pork intestines, salt, sesame, onion",
      "zh": "猪大肠、盐、芝麻、洋葱"
    },
    "tip": {
      "ko": "쫄깃하고 담백해요. 양파와 함께 먹으면 느끼함이 줄어요.",
      "en": "Chewy and clean-tasting. Eating with onion cuts the richness.",
      "zh": "弹韧不腻；配洋葱解腻。"
    },
    "spice": 2,
    "price": {
      "min": 25000,
      "max": 32000
    },
    "kcal": 500,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "막창"
      ],
      "en": [
        "grilled pork intestines"
      ],
      "zh": [
        "烤猪大肠",
        "烤肥肠"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "jokbal",
    "roman": "Jokbal",
    "name": {
      "ko": "족발",
      "en": "Pig's Trotters",
      "zh": "卤猪蹄"
    },
    "category": "side",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "돼지 발을 간장 양념에 푹 삶은 음식이에요. 껍질이 쫄깃하고 고소해요.",
      "en": "Pig's trotters braised in soy sauce until gelatinous and tender. Chewy skin, savory flavor.",
      "zh": "猪蹄用酱油久卤，皮弹肉香，富含胶质。"
    },
    "ingredients": {
      "ko": "돼지 발, 간장, 마늘, 생강, 대파",
      "en": "Pig's trotters, soy sauce, garlic, ginger, green onion",
      "zh": "猪蹄、酱油、大蒜、生姜、大葱"
    },
    "tip": {
      "ko": "콜라겐이 풍부해서 피부에 좋다고 해요. 새우젓과 함께 먹는 것이 기본이에요.",
      "en": "Rich in collagen. Traditionally eaten with salted shrimp (saeujeot).",
      "zh": "富含胶原蛋白；配虾酱吃是传统吃法。"
    },
    "spice": 1,
    "price": {
      "min": 30000,
      "max": 40000
    },
    "kcal": 600,
    "rating": 4.7,
    "searchTerms": {
      "ko": [],
      "en": [
        "braised pig trotters"
      ],
      "zh": [
        "卤猪蹄",
        "酱猪蹄"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "bossam",
    "roman": "Bossam",
    "name": {
      "ko": "보쌈",
      "en": "Boiled Pork Wraps",
      "zh": "菜包肉"
    },
    "category": "side",
    "tastes": [
      "savory",
      "mild"
    ],
    "desc": {
      "ko": "삶은 돼지고기를 채소에 싸 먹는 음식이에요. 굴과 함께 먹는 것이 별미예요.",
      "en": "Boiled pork belly sliced and wrapped in vegetables, often with fresh oysters.",
      "zh": "白煮猪肉切片用蔬菜包着吃，配生蚝是绝品。"
    },
    "ingredients": {
      "ko": "돼지고기, 배추, 깻잎, 굴, 새우젓",
      "en": "Pork, napa cabbage, perilla leaves, oyster, salted shrimp",
      "zh": "猪肉、白菜、苏子叶、生蚝、虾酱"
    },
    "tip": {
      "ko": "겨울철 굴보쌈이 특히 유명해요. 쌈장과 마늘을 곁들여 먹어요.",
      "en": "Winter oyster bossam is especially famous. Serve with ssamjang and garlic.",
      "zh": "冬季生蚝菜包肉特别有名；配包饭酱和大蒜。"
    },
    "spice": 1,
    "price": {
      "min": 28000,
      "max": 38000
    },
    "kcal": 580,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "보쌈김치"
      ],
      "en": [
        "boiled pork wraps"
      ],
      "zh": [
        "菜包肉",
        "包肉"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "yukhoe",
    "roman": "Yukhoe",
    "name": {
      "ko": "육회",
      "en": "Beef Tartare",
      "zh": "生拌牛肉"
    },
    "category": "side",
    "tastes": [
      "fresh",
      "cold",
      "savory"
    ],
    "desc": {
      "ko": "신선한 소고기를 가늘게 썰어 달걀노른자와 배를 곁들여 먹는 음식이에요.",
      "en": "Fresh raw beef sliced thin, served with egg yolk and pear.",
      "zh": "新鲜牛肉切细丝，配蛋黄和梨丝吃。"
    },
    "ingredients": {
      "ko": "소고기, 달걀노른자, 배, 참기름, 마늘",
      "en": "Beef, egg yolk, pear, sesame oil, garlic",
      "zh": "牛肉、蛋黄、梨、芝麻油、大蒜"
    },
    "tip": {
      "ko": "신선한 고기가 중요해요. 참기름과 소금으로 간을 해요.",
      "en": "Freshness is everything. Season with sesame oil and salt.",
      "zh": "新鲜度最重要；用芝麻油和盐调味。"
    },
    "spice": 1,
    "price": {
      "min": 25000,
      "max": 35000
    },
    "kcal": 300,
    "rating": 4.6,
    "searchTerms": {
      "ko": [],
      "en": [
        "beef tartare"
      ],
      "zh": [
        "生拌牛肉",
        "生牛肉"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "dolsot-bibimbap",
    "roman": "Dolsot Bibimbap",
    "name": {
      "ko": "돌솥비빔밥",
      "en": "Stone Pot Bibimbap",
      "zh": "石锅拌饭"
    },
    "category": "rice",
    "tastes": [
      "savory",
      "fresh"
    ],
    "desc": {
      "ko": "뜨거운 돌솥에 밥과 나물을 담아 비벼 먹는 음식이에요. 누룽지까지 맛있어요.",
      "en": "Bibimbap served in a sizzling stone pot — even the scorched rice at the bottom is delicious.",
      "zh": "石锅里装上米饭和蔬菜拌着吃，连锅底的锅巴都好吃。"
    },
    "ingredients": {
      "ko": "밥, 나물, 고추장, 달걀, 참기름",
      "en": "Rice, vegetables, gochujang, egg, sesame oil",
      "zh": "米饭、蔬菜、辣椒酱、鸡蛋、芝麻油"
    },
    "tip": {
      "ko": "돌솥이 아주 뜨거우니 조심하세요. 바닥의 누룽지를 긁어 먹는 것이 별미예요.",
      "en": "The stone pot is scorching hot. Scrape up the crispy rice from the bottom — a treat.",
      "zh": "石锅非常烫要小心；刮锅底的锅巴吃是美味。"
    },
    "spice": 2,
    "price": {
      "min": 10000,
      "max": 14000
    },
    "kcal": 600,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "돌솥"
      ],
      "en": [
        "stone pot bibimbap"
      ],
      "zh": [
        "石锅拌饭"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "bibim-guksu",
    "roman": "Bibim Guksu",
    "name": {
      "ko": "비빔국수",
      "en": "Spicy Cold Noodles",
      "zh": "拌面"
    },
    "category": "noodle",
    "tastes": [
      "spicy",
      "cold",
      "sour"
    ],
    "desc": {
      "ko": "소면을 매콤달콤한 양념에 비벼 먹는 음식이에요. 더운 날씨에 인기예요.",
      "en": "Thin noodles tossed in sweet-spicy sauce. A hot-weather favorite.",
      "zh": "细面拌甜辣酱，天热时的人气款。"
    },
    "ingredients": {
      "ko": "소면, 고추장, 식초, 설탕, 오이",
      "en": "Thin noodles, gochujang, vinegar, sugar, cucumber",
      "zh": "细面、辣椒酱、醋、糖、黄瓜"
    },
    "tip": {
      "ko": "차갑게 먹는 것이 기본이에요. 오이와 달걀을 올리면 더 맛있어요.",
      "en": "Served cold. Top with cucumber and egg for extra goodness.",
      "zh": "冷吃是标准；加黄瓜和鸡蛋更香。"
    },
    "spice": 3,
    "price": {
      "min": 8000,
      "max": 11000
    },
    "kcal": 450,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "비빔면"
      ],
      "en": [
        "spicy mixed noodles"
      ],
      "zh": [
        "拌面",
        "韩式拌面"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "sinseollo",
    "roman": "Sinseollo",
    "name": {
      "ko": "신선로",
      "en": "Royal Hot Pot",
      "zh": "神仙炉"
    },
    "category": "stew",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "예전 궁중에서 먹던 요리로, 여러 재료를 보기 좋게 담아 끓이는 냄비 요리예요.",
      "en": "A royal court dish — a beautiful hot pot layered with many ingredients.",
      "zh": "古代宫廷料理，多种食材摆盘精美的火锅。"
    },
    "ingredients": {
      "ko": "쇠고기, 해물, 채소, 달걀, 버섯",
      "en": "Beef, seafood, vegetables, egg, mushroom",
      "zh": "牛肉、海鲜、蔬菜、鸡蛋、蘑菇"
    },
    "tip": {
      "ko": "재료를 동그랗게 돌려 담는 것이 전통이에요. 시식 코스에 자주 나와요.",
      "en": "Traditionally arranged in a circle. Often served in royal tasting courses.",
      "zh": "传统上食材要摆成一圈；常出现在宫廷套餐里。"
    },
    "spice": 1,
    "price": {
      "min": 50000,
      "max": 80000
    },
    "kcal": 450,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "궁중요리"
      ],
      "en": [
        "royal hot pot"
      ],
      "zh": [
        "神仙炉",
        "宫廷火锅"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "gujeolpan",
    "roman": "Gujeolpan",
    "name": {
      "ko": "구절판",
      "en": "Nine-section Platter",
      "zh": "九折坂"
    },
    "category": "side",
    "tastes": [
      "fresh",
      "mild"
    ],
    "desc": {
      "ko": "여덟 가지 고명과 얇은 밀전병을 아홉 칸 접시에 담은 궁중 요리예요.",
      "en": "A royal dish of eight fillings and thin wheat pancakes served in a nine-section platter.",
      "zh": "八种配菜配薄饼摆成九格盘子的宫廷菜。"
    },
    "ingredients": {
      "ko": "밀전병, 소고기, 채소, 버섯, 달걀",
      "en": "Wheat pancakes, beef, vegetables, mushroom, egg",
      "zh": "薄饼、牛肉、蔬菜、蘑菇、鸡蛋"
    },
    "tip": {
      "ko": "각 재료를 전병에 올려 돌돌 말아 먹어요. 한입에 여러 맛이 나요.",
      "en": "Wrap a bit of each filling in a pancake and roll it up. One bite, many flavors.",
      "zh": "每种料夹进薄饼卷着吃，一口多种味道。"
    },
    "spice": 1,
    "price": {
      "min": 30000,
      "max": 45000
    },
    "kcal": 400,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "궁중요리"
      ],
      "en": [
        "nine section platter"
      ],
      "zh": [
        "九折坂",
        "宫廷拼盘"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "dakbal",
    "roman": "Dakbal",
    "name": {
      "ko": "닭발",
      "en": "Spicy Chicken Feet",
      "zh": "辣鸡爪"
    },
    "category": "side",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "닭발을 매콤한 양념에 조린 음식이에요. 술안주로 인기가 많아요.",
      "en": "Chicken feet braised in fiery sauce. A hugely popular drinking snack.",
      "zh": "鸡爪用超辣酱炖煮，人气下酒菜。"
    },
    "ingredients": {
      "ko": "닭발, 고추장, 고춧가루, 마늘, 설탕",
      "en": "Chicken feet, gochujang, chili powder, garlic, sugar",
      "zh": "鸡爪、辣椒酱、辣椒粉、大蒜、糖"
    },
    "tip": {
      "ko": "아주 매운 편이에요. 뼈를 발라 먹는 불닭발도 있어요.",
      "en": "Very spicy. Boneless (bultakbal) versions exist too.",
      "zh": "非常辣；也有去骨的版本。"
    },
    "spice": 5,
    "price": {
      "min": 14000,
      "max": 18000
    },
    "kcal": 350,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "무뼈닭발"
      ],
      "en": [
        "spicy chicken feet"
      ],
      "zh": [
        "辣鸡爪"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "golbaengi-muchim",
    "roman": "Golbaengi Muchim",
    "name": {
      "ko": "골뱅이무침",
      "en": "Sea Snail Salad",
      "zh": "凉拌海螺"
    },
    "category": "side",
    "tastes": [
      "spicy",
      "sour"
    ],
    "desc": {
      "ko": "골뱅이와 채소를 매콤달콤한 양념에 무친 음식이에요. 면과 함께 먹어요.",
      "en": "Sea snails and vegetables tossed in sweet-spicy sauce, often served with noodles.",
      "zh": "海螺和蔬菜拌甜辣酱，常配面条吃。"
    },
    "ingredients": {
      "ko": "골뱅이, 오이, 양파, 고추장, 소면",
      "en": "Sea snails, cucumber, onion, gochujang, thin noodles",
      "zh": "海螺、黄瓜、洋葱、辣椒酱、细面"
    },
    "tip": {
      "ko": "남은 양념에 소면을 비벼 먹는 것이 인기예요.",
      "en": "Mixing leftover sauce with noodles is a popular finish.",
      "zh": "剩的酱汁拌面是热门吃法。"
    },
    "spice": 3,
    "price": {
      "min": 20000,
      "max": 28000
    },
    "kcal": 250,
    "rating": 4.1,
    "searchTerms": {
      "ko": [
        "골뱅이"
      ],
      "en": [
        "spicy whelk salad"
      ],
      "zh": [
        "凉拌海螺"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "kkotgetang",
    "roman": "Kkotgetang",
    "name": {
      "ko": "꽃게탕",
      "en": "Blue Crab Stew",
      "zh": "花蟹汤"
    },
    "category": "soup",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "꽃게와 채소를 넣고 얼큰하게 끓인 탕이에요. 국물이 아주 시원해요.",
      "en": "A spicy stew with blue crabs and vegetables. The broth is incredibly savory.",
      "zh": "花蟹和蔬菜煮的辣汤，汤头极鲜。"
    },
    "ingredients": {
      "ko": "꽃게, 무, 애호박, 고춧가루, 대파",
      "en": "Blue crab, radish, zucchini, chili powder, green onion",
      "zh": "花蟹、萝卜、西葫芦、辣椒粉、大葱"
    },
    "tip": {
      "ko": "게 껍질에 붙은 살을 빼 먹는 재미가 있어요. 국물에 밥을 말아 먹어요.",
      "en": "Picking meat from the shells is half the fun. Soak rice in the broth.",
      "zh": "拆蟹壳吃肉是乐趣；汤泡饭很香。"
    },
    "spice": 3,
    "price": {
      "min": 30000,
      "max": 45000
    },
    "kcal": 380,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "꽃게"
      ],
      "en": [
        "crab stew"
      ],
      "zh": [
        "花蟹汤",
        "蟹汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "jogaetang",
    "roman": "Jogaetang",
    "name": {
      "ko": "조개탕",
      "en": "Clam Soup",
      "zh": "蛤蜊汤"
    },
    "category": "soup",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "조개를 넣고 끓인 시원한 국이에요. 숙취 해소에 좋아요.",
      "en": "A light, savory clam soup. Great for a hangover.",
      "zh": "蛤蜊煮的清淡鲜汤，适合解酒。"
    },
    "ingredients": {
      "ko": "조개, 무, 대파, 마늘, 미나리",
      "en": "Clams, radish, green onion, garlic, water parsley",
      "zh": "蛤蜊、萝卜、大葱、大蒜、水芹"
    },
    "tip": {
      "ko": "조개가 입을 벌릴 때까지 끓여요. 간은 소금으로만 해요.",
      "en": "Boil until the clams open. Season with salt only.",
      "zh": "煮到蛤蜊开口即可；只放盐调味。"
    },
    "spice": 1,
    "price": {
      "min": 15000,
      "max": 22000
    },
    "kcal": 280,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "조개"
      ],
      "en": [
        "clam soup"
      ],
      "zh": [
        "蛤蜊汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "bajirak-kalguksu",
    "roman": "Bajirak Kalguksu",
    "name": {
      "ko": "바지락칼국수",
      "en": "Clam Noodle Soup",
      "zh": "蛤蜊刀切面"
    },
    "category": "noodle",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "바지락을 넣어 끓인 칼국수예요. 국물이 시원하고 구수해요.",
      "en": "Knife-cut noodles in a savory clam broth. Clean, briny, and comforting.",
      "zh": "蛤蜊汤底的刀切面，汤鲜味美。"
    },
    "ingredients": {
      "ko": "칼국수 면, 바지락, 애호박, 감자, 대파",
      "en": "Noodles, clams, zucchini, potato, green onion",
      "zh": "面条、蛤蜊、西葫芦、土豆、大葱"
    },
    "tip": {
      "ko": "바지락을 씻을 때 소금물에 해감하면 비린내가 없어져요.",
      "en": "Soak the clams in salt water first to remove sand and fishiness.",
      "zh": "蛤蜊先放盐水里吐沙更干净。"
    },
    "spice": 1,
    "price": {
      "min": 10000,
      "max": 14000
    },
    "kcal": 480,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "바지락"
      ],
      "en": [
        "clam noodle soup"
      ],
      "zh": [
        "蛤蜊刀切面"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "nurungji",
    "roman": "Nurungji",
    "name": {
      "ko": "누룽지",
      "en": "Scorched Rice",
      "zh": "锅巴"
    },
    "category": "rice",
    "tastes": [
      "mild"
    ],
    "desc": {
      "ko": "밥을 눌려 바삭하게 만든 뒤 물을 부어 먹거나 그대로 먹는 음식이에요.",
      "en": "Crispy scorched rice from the bottom of the pot, eaten plain or with hot water poured over.",
      "zh": "锅底的焦香米饭，可以直接吃或倒热水泡着吃。"
    },
    "ingredients": {
      "ko": "밥, 물, 소금",
      "en": "Rice, water, salt",
      "zh": "米饭、水、盐"
    },
    "tip": {
      "ko": "뜨거운 물을 부으면 금방 불어나요. 구수한 냄새가 매력이에요.",
      "en": "Hot water makes it puff up instantly. The toasty aroma is the charm.",
      "zh": "倒热水立刻泡开，米香扑鼻。"
    },
    "spice": 1,
    "price": {
      "min": 3000,
      "max": 5000
    },
    "kcal": 350,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "누룽지탕"
      ],
      "en": [
        "scorched rice"
      ],
      "zh": [
        "锅巴",
        "锅巴汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "yakbap",
    "roman": "Yakbap",
    "name": {
      "ko": "약밥",
      "en": "Sweet Rice with Dates",
      "zh": "药饭"
    },
    "category": "rice",
    "tastes": [
      "sweet"
    ],
    "desc": {
      "ko": "찹쌀에 대추와 밤, 간장과 꿀을 넣어 찐 달콤한 음식이에요.",
      "en": "Sweet steamed glutinous rice with jujube, chestnuts, honey, and soy sauce.",
      "zh": "糯米加大枣、板栗、蜂蜜蒸制的甜点。"
    },
    "ingredients": {
      "ko": "찹쌀, 대추, 밤, 꿀, 간장",
      "en": "Glutinous rice, jujube, chestnut, honey, soy sauce",
      "zh": "糯米、大枣、板栗、蜂蜜、酱油"
    },
    "tip": {
      "ko": "정월대보름이나 명절에 먹어요. 조각내어 먹기 좋게 만들어요.",
      "en": "Eaten on the first full moon festival and holidays. Cut into easy pieces.",
      "zh": "正月十五和节日食用；切成小块吃。"
    },
    "spice": 1,
    "price": {
      "min": 3000,
      "max": 6000
    },
    "kcal": 450,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "약식"
      ],
      "en": [
        "sweet rice with nuts"
      ],
      "zh": [
        "药饭",
        "八宝饭"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "songpyeon",
    "roman": "Songpyeon",
    "name": {
      "ko": "송편",
      "en": "Half-moon Rice Cakes",
      "zh": "松饼"
    },
    "category": "snack",
    "tastes": [
      "sweet"
    ],
    "desc": {
      "ko": "추석에 먹는 반달 모양의 떡이에요. 소에 팥이나 깨를 넣어요.",
      "en": "Half-moon shaped rice cakes eaten at Chuseok, filled with red bean or sesame.",
      "zh": "中秋节吃的半月形年糕，内馅是红豆或芝麻。"
    },
    "ingredients": {
      "ko": "쌀가루, 팥소, 깨, 솔잎",
      "en": "Rice flour, red bean paste, sesame, pine needles",
      "zh": "米粉、红豆沙、芝麻、松针"
    },
    "tip": {
      "ko": "솔잎과 함께 찌면 솔향이 나요. 예쁘게 빚어야 예쁜 딸을 낳는다는 말이 있어요.",
      "en": "Steamed with pine needles for aroma. A saying goes that pretty songpyeon bring pretty daughters.",
      "zh": "垫松针蒸有松香；俗语说包得漂亮能生漂亮女儿。"
    },
    "spice": 1,
    "price": {
      "min": 5000,
      "max": 8000
    },
    "kcal": 250,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "추석"
      ],
      "en": [
        "pine rice cake"
      ],
      "zh": [
        "松饼",
        "松糕"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "injeolmi",
    "roman": "Injeolmi",
    "name": {
      "ko": "인절미",
      "en": "Soybean Powder Rice Cake",
      "zh": "豆粉年糕"
    },
    "category": "snack",
    "tastes": [
      "sweet"
    ],
    "desc": {
      "ko": "찹쌀떡을 콩가루에 굴려 만든 떡이에요. 고소한 맛이 특징이에요.",
      "en": "Glutinous rice cake coated in roasted soybean powder. Nutty and soft.",
      "zh": "糯米糕裹上熟黄豆粉，豆香浓郁。"
    },
    "ingredients": {
      "ko": "찹쌀, 콩가루, 소금, 설탕",
      "en": "Glutinous rice, soybean powder, salt, sugar",
      "zh": "糯米、黄豆粉、盐、糖"
    },
    "tip": {
      "ko": "쫀득쫀득한 식감이 매력이에요. 커피나 차와 함께 먹기 좋아요.",
      "en": "Loved for its chewy texture. Goes well with coffee or tea.",
      "zh": "口感弹糯；配咖啡或茶很好。"
    },
    "spice": 1,
    "price": {
      "min": 4000,
      "max": 7000
    },
    "kcal": 300,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "콩고물 떡"
      ],
      "en": [
        "soybean rice cake"
      ],
      "zh": [
        "豆粉年糕"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "gyeongdan",
    "roman": "Gyeongdan",
    "name": {
      "ko": "경단",
      "en": "Rice Ball Cakes",
      "zh": "米团糕"
    },
    "category": "snack",
    "tastes": [
      "sweet"
    ],
    "desc": {
      "ko": "찹쌀가루로 만든 작은 공 모양의 떡이에요. 여러 가지 고물을 입혀요.",
      "en": "Small ball-shaped rice cakes coated in various toppings like bean powder or sesame.",
      "zh": "糯米粉做的小圆球年糕，裹各种豆粉芝麻。"
    },
    "ingredients": {
      "ko": "찹쌀가루, 콩가루, 깨, 꿀",
      "en": "Glutinous rice flour, bean powder, sesame, honey",
      "zh": "糯米粉、豆粉、芝麻、蜂蜜"
    },
    "tip": {
      "ko": "색색으로 만들어 먹는 재미가 있어요. 꼬치에 꽂아 먹기도 해요.",
      "en": "Fun to make in different colors. Often served on skewers.",
      "zh": "做成各种颜色很有趣；也常串成串吃。"
    },
    "spice": 1,
    "price": {
      "min": 4000,
      "max": 7000
    },
    "kcal": 280,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "떡"
      ],
      "en": [
        "rice cake balls"
      ],
      "zh": [
        "米团糕",
        "甜米团"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "chapssal-tteok",
    "roman": "Chapssal Tteok",
    "name": {
      "ko": "찹쌀떡",
      "en": "Glutinous Rice Cake",
      "zh": "糯米糕"
    },
    "category": "snack",
    "tastes": [
      "sweet"
    ],
    "desc": {
      "ko": "찹쌀로 만든 쫀득한 떡이에요. 팥소가 들어간 것이 보통이에요.",
      "en": "Chewy glutinous rice cakes, usually filled with sweet red bean paste.",
      "zh": "糯米做的弹牙年糕，通常包红豆沙。"
    },
    "ingredients": {
      "ko": "찹쌀, 팥소, 소금",
      "en": "Glutinous rice, red bean paste, salt",
      "zh": "糯米、红豆沙、盐"
    },
    "tip": {
      "ko": "중국의 탕위안과 비슷한 식감이에요. 차와 함께 먹는 전통 간식이에요.",
      "en": "Texture similar to tangyuan. A traditional snack with tea.",
      "zh": "口感类似汤圆；配茶的傳統点心。"
    },
    "spice": 1,
    "price": {
      "min": 3000,
      "max": 5000
    },
    "kcal": 280,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "떡"
      ],
      "en": [
        "glutinous rice cake"
      ],
      "zh": [
        "糯米糕",
        "糯米糍"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "sikhye",
    "roman": "Sikhye",
    "name": {
      "ko": "식혜",
      "en": "Sweet Rice Drink",
      "zh": "食醯（甜米露）"
    },
    "category": "drink",
    "tastes": [
      "sweet",
      "cold"
    ],
    "desc": {
      "ko": "엿기름물에 밥을 삭혀 만든 달콤한 전통 음료예요.",
      "en": "A sweet traditional drink made by fermenting rice in malt water.",
      "zh": "麦芽水发酵米饭做的传统甜饮。"
    },
    "ingredients": {
      "ko": "엿기름, 밥, 설탕, 잣",
      "en": "Malt, rice, sugar, pine nuts",
      "zh": "麦芽、米饭、糖、松子"
    },
    "tip": {
      "ko": "디저트로 먹는 전통 음료예요. 설날과 명절에 자주 마셔요.",
      "en": "A traditional dessert drink, often served on holidays.",
      "zh": "传统甜品饮料，节日常喝。"
    },
    "spice": 1,
    "price": {
      "min": 1500,
      "max": 3000
    },
    "kcal": 150,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "음료"
      ],
      "en": [
        "sweet rice drink"
      ],
      "zh": [
        "甜米露",
        "米酿"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "sujeonggwa",
    "roman": "Sujeonggwa",
    "name": {
      "ko": "수정과",
      "en": "Cinnamon Punch",
      "zh": "柿饼茶"
    },
    "category": "drink",
    "tastes": [
      "sweet",
      "cold"
    ],
    "desc": {
      "ko": "생강과 계피를 끓여 만든 전통 음료예요. 곶감이 들어가요.",
      "en": "A traditional drink brewed with ginger and cinnamon, garnished with dried persimmon.",
      "zh": "生姜和肉桂煮的传统饮品，里面泡柿饼。"
    },
    "ingredients": {
      "ko": "계피, 생강, 설탕, 곶감, 잣",
      "en": "Cinnamon, ginger, sugar, dried persimmon, pine nuts",
      "zh": "肉桂、生姜、糖、柿饼、松子"
    },
    "tip": {
      "ko": "차갑게 마시면 더 시원해요. 식혜와 함께 대표 전통 음료예요.",
      "en": "Best served cold. Along with sikhye, it's a signature traditional drink.",
      "zh": "冰着喝更爽；和甜米露并称传统代表饮品。"
    },
    "spice": 1,
    "price": {
      "min": 1500,
      "max": 3000
    },
    "kcal": 120,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "음료"
      ],
      "en": [
        "cinnamon punch"
      ],
      "zh": [
        "柿饼茶",
        "肉桂甜茶"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "hwachae",
    "roman": "Hwachae",
    "name": {
      "ko": "화채",
      "en": "Fruit Punch",
      "zh": "花菜（水果茶）"
    },
    "category": "drink",
    "tastes": [
      "sweet",
      "cold",
      "fresh"
    ],
    "desc": {
      "ko": "여러 과일과 꿀, 탄산수를 섞어 만든 시원한 음료예요.",
      "en": "A refreshing punch of assorted fruits, honey, and sparkling water.",
      "zh": "多种水果加蜂蜜和气泡水做的清爽饮品。"
    },
    "ingredients": {
      "ko": "과일, 꿀, 탄산수, 얼음",
      "en": "Fruit, honey, sparkling water, ice",
      "zh": "水果、蜂蜜、气泡水、冰块"
    },
    "tip": {
      "ko": "여름에 마시는 대표 전통 음료예요. 과일을 예쁘게 썰어 넣어요.",
      "en": "A classic summer drink. Slice the fruit prettily.",
      "zh": "夏天传统饮品；水果切漂亮点更有食欲。"
    },
    "spice": 1,
    "price": {
      "min": 4000,
      "max": 7000
    },
    "kcal": 130,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "음료"
      ],
      "en": [
        "fruit punch"
      ],
      "zh": [
        "花菜",
        "水果甜汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "yuja-cha",
    "roman": "Yuja-cha",
    "name": {
      "ko": "유자차",
      "en": "Citron Tea",
      "zh": "柚子茶"
    },
    "category": "drink",
    "tastes": [
      "sweet",
      "hot"
    ],
    "desc": {
      "ko": "유자를 설탕에 절여 뜨거운 물에 타 마시는 차예요. 향이 아주 좋아요.",
      "en": "Citron preserved in sugar, stirred into hot water. Wonderful aroma.",
      "zh": "柚子蜜冲热水喝，香气迷人。"
    },
    "ingredients": {
      "ko": "유자, 설탕, 물",
      "en": "Citron, sugar, water",
      "zh": "柚子、糖、水"
    },
    "tip": {
      "ko": "감기 기운이 있을 때 마시면 좋아요. 따뜻하게 마시는 것이 기본이에요.",
      "en": "Good when you feel a cold coming. Best served warm.",
      "zh": "着凉时喝很好；温着喝是标准。"
    },
    "spice": 1,
    "price": {
      "min": 3000,
      "max": 5000
    },
    "kcal": 100,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "유자"
      ],
      "en": [
        "citron tea"
      ],
      "zh": [
        "柚子茶"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "insam-cha",
    "roman": "Insam-cha",
    "name": {
      "ko": "인삼차",
      "en": "Ginseng Tea",
      "zh": "人参茶"
    },
    "category": "drink",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "인삼을 달여 만든 차예요. 몸을 따뜻하게 해요.",
      "en": "Tea brewed from ginseng root, believed to warm and energize the body.",
      "zh": "人参煎煮的茶，被认为能暖身提神。"
    },
    "ingredients": {
      "ko": "인삼, 대추, 물, 꿀",
      "en": "Ginseng, jujube, water, honey",
      "zh": "人参、大枣、水、蜂蜜"
    },
    "tip": {
      "ko": "피로할 때 마시면 좋아요. 대추와 함께 달이면 더 달콤해요.",
      "en": "Great when tired. Brewing with jujube adds sweetness.",
      "zh": "疲劳时喝；加大枣一起煮更甜。"
    },
    "spice": 1,
    "price": {
      "min": 4000,
      "max": 7000
    },
    "kcal": 90,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "인삼"
      ],
      "en": [
        "ginseng tea"
      ],
      "zh": [
        "人参茶"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "daechu-cha",
    "roman": "Daechu-cha",
    "name": {
      "ko": "대추차",
      "en": "Jujube Tea",
      "zh": "大枣茶"
    },
    "category": "drink",
    "tastes": [
      "sweet",
      "hot"
    ],
    "desc": {
      "ko": "대추를 달여 만든 달콤한 차예요. 몸을 따뜻하게 해줘요.",
      "en": "Sweet tea made by simmering jujube. Warming and soothing.",
      "zh": "大枣煮的甜茶，暖身安神。"
    },
    "ingredients": {
      "ko": "대추, 물, 꿀",
      "en": "Jujube, water, honey",
      "zh": "大枣、水、蜂蜜"
    },
    "tip": {
      "ko": "잠이 잘 안 올 때 마시면 좋아요. 겨울철에 인기예요.",
      "en": "Good before bed. A winter favorite.",
      "zh": "睡眠不好时适合喝；冬季人气。"
    },
    "spice": 1,
    "price": {
      "min": 3000,
      "max": 5000
    },
    "kcal": 110,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "대추"
      ],
      "en": [
        "jujube tea"
      ],
      "zh": [
        "大枣茶",
        "红枣茶"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "omija-cha",
    "roman": "Omija-cha",
    "name": {
      "ko": "오미자차",
      "en": "Schisandra Tea",
      "zh": "五味子茶"
    },
    "category": "drink",
    "tastes": [
      "sour",
      "sweet"
    ],
    "desc": {
      "ko": "오미자를 우려낸 붉은 색의 차예요. 새콤달콤한 맛이 나요.",
      "en": "A red-hued tea brewed from schisandra berries. Sweet and slightly tart.",
      "zh": "五味子泡出的红色茶饮，酸甜可口。"
    },
    "ingredients": {
      "ko": "오미자, 물, 꿀",
      "en": "Schisandra, water, honey",
      "zh": "五味子、水、蜂蜜"
    },
    "tip": {
      "ko": "여름에 차갑게 마시면 상큼해요. 미리 우려둔 농축액을 타 먹어요.",
      "en": "Refreshing iced in summer. Usually made from a concentrated extract.",
      "zh": "夏天冰着喝很清爽；多用浓缩液冲泡。"
    },
    "spice": 1,
    "price": {
      "min": 3000,
      "max": 5000
    },
    "kcal": 100,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "오미자"
      ],
      "en": [
        "omija tea"
      ],
      "zh": [
        "五味子茶"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "boricha",
    "roman": "Boricha",
    "name": {
      "ko": "보리차",
      "en": "Barley Tea",
      "zh": "大麦茶"
    },
    "category": "drink",
    "tastes": [
      "mild"
    ],
    "desc": {
      "ko": "보리를 볶아 끓인 차예요. 한국 식당에서 항상 나오는 기본 차예요.",
      "en": "Toasted barley tea — the free table drink at every Korean restaurant.",
      "zh": "炒大麦泡的茶，韩国餐厅的标配免费茶。"
    },
    "ingredients": {
      "ko": "보리, 물",
      "en": "Barley, water",
      "zh": "大麦、水"
    },
    "tip": {
      "ko": "식당에 가면 공짜로 나와요. 차갑게 마셔도 따뜻하게 마셔도 좋아요.",
      "en": "Served free at restaurants. Good hot or iced.",
      "zh": "餐厅免费供应；冷热都好喝。"
    },
    "spice": 1,
    "price": {
      "min": 1000,
      "max": 2000
    },
    "kcal": 5,
    "rating": 4.3,
    "searchTerms": {
      "ko": [
        "물"
      ],
      "en": [
        "barley tea"
      ],
      "zh": [
        "大麦茶"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "makgeolli",
    "roman": "Makgeolli",
    "name": {
      "ko": "막걸리",
      "en": "Korean Rice Wine",
      "zh": "米酒"
    },
    "category": "drink",
    "tastes": [
      "sweet",
      "sour"
    ],
    "desc": {
      "ko": "쌀로 빚은 한국 전통 술이에요. 맛이 부드럽고 과일 향이 나요.",
      "en": "A milky, lightly sparkling Korean rice wine. Soft and gently fruity.",
      "zh": "大米酿造的韩国传统酒，口感柔和带果香。"
    },
    "ingredients": {
      "ko": "쌀, 누룩, 물",
      "en": "Rice, nuruk (fermentation starter), water",
      "zh": "大米、酒曲、水"
    },
    "tip": {
      "ko": "흔들어 마시는 것이 기본이에요. 전과 함께 마시면 정말 잘 어울려요.",
      "en": "Shake well before drinking. A perfect match with jeon (pancakes).",
      "zh": "喝前摇匀是标准；配煎饼一绝。"
    },
    "spice": 1,
    "price": {
      "min": 4000,
      "max": 8000
    },
    "kcal": 120,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "전통주"
      ],
      "en": [
        "rice wine"
      ],
      "zh": [
        "米酒",
        "马格利"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "cheongju",
    "roman": "Cheongju",
    "name": {
      "ko": "청주",
      "en": "Korean Clear Rice Wine",
      "zh": "清酒"
    },
    "category": "drink",
    "tastes": [
      "mild"
    ],
    "desc": {
      "ko": "쌀로 빚은 맑은 한국 전통 술이에요. 깔끔하고 부드러워요.",
      "en": "A clear, refined Korean rice wine. Clean and smooth.",
      "zh": "大米酿造的清澈韩国传统酒，口感干净柔和。"
    },
    "ingredients": {
      "ko": "쌀, 누룩, 물",
      "en": "Rice, nuruk, water",
      "zh": "大米、酒曲、水"
    },
    "tip": {
      "ko": "차갑게 마시는 것이 좋아요. 가볍게 즐기기 좋아요.",
      "en": "Best served chilled. Easy to drink.",
      "zh": "冰镇饮用最佳；轻松易饮。"
    },
    "spice": 1,
    "price": {
      "min": 8000,
      "max": 15000
    },
    "kcal": 110,
    "rating": 4,
    "searchTerms": {
      "ko": [
        "약주"
      ],
      "en": [
        "clear rice wine"
      ],
      "zh": [
        "清酒"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "sanjeok",
    "roman": "Sanjeok",
    "name": {
      "ko": "산적",
      "en": "Skewered Beef",
      "zh": "烤肉串"
    },
    "category": "grill",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "소고기와 채소를 꼬치에 꽂아 구운 음식이에요. 잔칫상에 자주 올라와요.",
      "en": "Beef and vegetables skewered and grilled. Often served at celebrations.",
      "zh": "牛肉和蔬菜串在签子上烤制，宴席常见。"
    },
    "ingredients": {
      "ko": "소고기, 대파, 버섯, 간장",
      "en": "Beef, green onion, mushroom, soy sauce",
      "zh": "牛肉、大葱、蘑菇、酱油"
    },
    "tip": {
      "ko": "간장 양념을 발라가며 구워요. 명절 음식 중 하나예요.",
      "en": "Brush with soy glaze while grilling. A holiday dish.",
      "zh": "边烤边刷酱油；节日料理之一。"
    },
    "spice": 1,
    "price": {
      "min": 12000,
      "max": 16000
    },
    "kcal": 450,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "꼬치"
      ],
      "en": [
        "skewered meat"
      ],
      "zh": [
        "烤肉串",
        "肉串"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "sigeumchi-namul",
    "roman": "Sigeumchi Namul",
    "name": {
      "ko": "시금치나물",
      "en": "Seasoned Spinach",
      "zh": "凉拌菠菜"
    },
    "category": "side",
    "tastes": [
      "mild",
      "fresh"
    ],
    "desc": {
      "ko": "데친 시금치를 참기름과 마늘로 무친 반찬이에요.",
      "en": "Blanched spinach seasoned with sesame oil and garlic. A staple side dish.",
      "zh": "焯水菠菜用芝麻油和大蒜拌的凉菜。"
    },
    "ingredients": {
      "ko": "시금치, 참기름, 마늘, 소금, 깨",
      "en": "Spinach, sesame oil, garlic, salt, sesame",
      "zh": "菠菜、芝麻油、大蒜、盐、芝麻"
    },
    "tip": {
      "ko": "비빔밥에 빠지지 않는 재료예요. 무칠 때 물기를 꼭 짜야 해요.",
      "en": "An essential bibimbap ingredient. Squeeze out water well before seasoning.",
      "zh": "拌饭必备；拌前要挤干水分。"
    },
    "spice": 1,
    "price": {
      "min": 4000,
      "max": 6000
    },
    "kcal": 80,
    "rating": 4.2,
    "searchTerms": {
      "ko": [
        "나물"
      ],
      "en": [
        "seasoned spinach"
      ],
      "zh": [
        "凉拌菠菜"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "gamja-jorim",
    "roman": "Gamja Jorim",
    "name": {
      "ko": "감자조림",
      "en": "Braised Potatoes",
      "zh": "炖土豆"
    },
    "category": "side",
    "tastes": [
      "sweet",
      "savory"
    ],
    "desc": {
      "ko": "감자를 간장 양념에 조린 달콤짭짤한 반찬이에요.",
      "en": "Potatoes braised in a sweet-salty soy glaze. A beloved home side dish.",
      "zh": "土豆用酱油炖煮的甜咸小菜。"
    },
    "ingredients": {
      "ko": "감자, 간장, 설탕, 물엿, 깨",
      "en": "Potato, soy sauce, sugar, corn syrup, sesame",
      "zh": "土豆、酱油、糖、糖稀、芝麻"
    },
    "tip": {
      "ko": "아이들이 정말 좋아하는 반찬이에요. 도시락 반찬으로도 인기예요.",
      "en": "A kid favorite. Also popular in lunchboxes.",
      "zh": "小孩最爱；便当里也常见。"
    },
    "spice": 1,
    "price": {
      "min": 5000,
      "max": 8000
    },
    "kcal": 260,
    "rating": 4.1,
    "searchTerms": {
      "ko": [
        "반찬"
      ],
      "en": [
        "braised potatoes"
      ],
      "zh": [
        "炖土豆",
        "酱土豆"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "gyeran-mari",
    "roman": "Gyeran Mari",
    "name": {
      "ko": "계란말이",
      "en": "Rolled Omelette",
      "zh": "鸡蛋卷"
    },
    "category": "side",
    "tastes": [
      "mild",
      "savory"
    ],
    "desc": {
      "ko": "달걀물을 얇게 부쳐 돌돌 말아 만든 반찬이에요. 부드럽고 고소해요.",
      "en": "Thin layers of egg rolled into a soft, savory omelette log.",
      "zh": "蛋液摊薄后卷起来的鸡蛋卷，软嫩香滑。"
    },
    "ingredients": {
      "ko": "달걀, 당근, 대파, 소금",
      "en": "Egg, carrot, green onion, salt",
      "zh": "鸡蛋、胡萝卜、大葱、盐"
    },
    "tip": {
      "ko": "도시락 반찬의 대표예요. 당근과 파를 잘게 다져 넣어요.",
      "en": "A lunchbox classic. Finely chop carrot and onion into the egg.",
      "zh": "便当代表菜；胡萝卜和葱切碎拌入蛋液。"
    },
    "spice": 1,
    "price": {
      "min": 6000,
      "max": 9000
    },
    "kcal": 220,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "계란"
      ],
      "en": [
        "rolled omelette"
      ],
      "zh": [
        "鸡蛋卷",
        "韩式玉子烧"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "twigim",
    "roman": "Twigim",
    "name": {
      "ko": "튀김",
      "en": "Korean Fried Fritters",
      "zh": "韩式炸物"
    },
    "category": "fried",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "채소나 해물에 튀김옷을 입혀 바삭하게 튀긴 음식이에요.",
      "en": "Vegetables and seafood battered and deep-fried until crispy.",
      "zh": "蔬菜海鲜裹面糊炸得酥脆。"
    },
    "ingredients": {
      "ko": "오징어, 새우, 고구마, 양파, 튀김가루",
      "en": "Squid, shrimp, sweet potato, onion, frying batter",
      "zh": "鱿鱼、虾、红薯、洋葱、炸粉"
    },
    "tip": {
      "ko": "떡볶이 가게에서 같이 파는 경우가 많아요. 간장에 찍어 먹어요.",
      "en": "Often sold at tteokbokki shops. Dip in soy sauce.",
      "zh": "辣炒年糕店常一起卖；蘸酱油吃。"
    },
    "spice": 1,
    "price": {
      "min": 5000,
      "max": 9000
    },
    "kcal": 450,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "야채튀김",
        "새우튀김"
      ],
      "en": [
        "fried snacks"
      ],
      "zh": [
        "炸物",
        "韩式天妇罗"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "ojingeo-sundae",
    "roman": "Ojingeo Sundae",
    "name": {
      "ko": "오징어순대",
      "en": "Stuffed Squid",
      "zh": "鱿鱼米肠"
    },
    "category": "snack",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "오징어 몸통에 당면과 채소를 채워 쪄낸 음식이에요. 쫄깃한 맛이 일품이에요.",
      "en": "Squid bodies stuffed with glass noodles and vegetables, then steamed. Chewy and tasty.",
      "zh": "鱿鱼身里塞粉条蔬菜蒸制，弹牙鲜美。"
    },
    "ingredients": {
      "ko": "오징어, 당면, 채소, 고추",
      "en": "Squid, glass noodles, vegetables, chili",
      "zh": "鱿鱼、粉条、蔬菜、辣椒"
    },
    "tip": {
      "ko": "초간장이나 소금에 찍어 먹어요. 담백하고 쫄깃해요.",
      "en": "Dip in soy-vinegar sauce or salt. Clean and chewy.",
      "zh": "蘸酱油醋或盐；清淡弹牙。"
    },
    "spice": 1,
    "price": {
      "min": 8000,
      "max": 12000
    },
    "kcal": 400,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "오징어"
      ],
      "en": [
        "squid sundae"
      ],
      "zh": [
        "鱿鱼米肠"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "chueo-tang",
    "roman": "Chueo-tang",
    "name": {
      "ko": "추어탕",
      "en": "Loach Soup",
      "zh": "泥鳅汤"
    },
    "category": "soup",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "미꾸라지를 갈아 끓인 진한 국이에요. 보양식으로 유명해요.",
      "en": "A hearty soup made from ground loach. Famous as stamina food.",
      "zh": "泥鳅磨碎熬煮的浓汤，著名滋补品。"
    },
    "ingredients": {
      "ko": "미꾸라지, 배추, 들깨가루, 고춧가루",
      "en": "Loach, napa cabbage, perilla seed powder, chili powder",
      "zh": "泥鳅、白菜、紫苏籽粉、辣椒粉"
    },
    "tip": {
      "ko": "들깨 향이 고소해요. 남원 지방이 가장 유명해요.",
      "en": "Nutty from perilla seed powder. Namwon is the most famous place for it.",
      "zh": "紫苏籽粉很香；南原的最有名。"
    },
    "spice": 2,
    "price": {
      "min": 12000,
      "max": 16000
    },
    "kcal": 400,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "추어"
      ],
      "en": [
        "loach soup"
      ],
      "zh": [
        "泥鳅汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "al-tang",
    "roman": "Al-tang",
    "name": {
      "ko": "알탕",
      "en": "Cod Roe Stew",
      "zh": "明太鱼子汤"
    },
    "category": "soup",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "명란을 넣고 얼큰하게 끓인 탕이에요. 알이 톡톡 터지는 맛이 일품이에요.",
      "en": "A spicy stew with cod roe. The roe pops in your mouth — delightful.",
      "zh": "明太鱼子煮的辣汤，鱼子在嘴里爆开的口感绝佳。"
    },
    "ingredients": {
      "ko": "명란, 무, 콩나물, 고춧가루, 대파",
      "en": "Cod roe, radish, bean sprouts, chili powder, green onion",
      "zh": "明太鱼子、萝卜、豆芽、辣椒粉、大葱"
    },
    "tip": {
      "ko": "알이 터지지 않게 너무 세게 끓이지 마세요. 해장으로도 인기예요.",
      "en": "Don't boil too hard or the roe bursts. Also popular as a hangover cure.",
      "zh": "别煮太猛以免鱼子爆掉；也常当醒酒汤。"
    },
    "spice": 4,
    "price": {
      "min": 15000,
      "max": 22000
    },
    "kcal": 350,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "명란"
      ],
      "en": [
        "fish roe soup"
      ],
      "zh": [
        "鱼子汤",
        "明太鱼子汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "dakjuk",
    "roman": "Dakjuk",
    "name": {
      "ko": "닭죽",
      "en": "Chicken Porridge",
      "zh": "鸡肉粥"
    },
    "category": "porridge",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "닭고기를 푹 삶아 육수로 쌀을 끓인 죽이에요. 부드럽고 소화가 잘 돼요.",
      "en": "Rice porridge cooked in chicken stock. Soft and easy to digest.",
      "zh": "用鸡汤熬的米粥，软烂易消化。"
    },
    "ingredients": {
      "ko": "쌀, 닭고기, 마늘, 대파, 참기름",
      "en": "Rice, chicken, garlic, green onion, sesame oil",
      "zh": "大米、鸡肉、大蒜、大葱、芝麻油"
    },
    "tip": {
      "ko": "몸이 아플 때 먹으면 좋아요. 간장으로 간을 맞춰 먹어요.",
      "en": "Comfort food when you're unwell. Season with soy sauce.",
      "zh": "生病时的好选择；用酱油调味。"
    },
    "spice": 1,
    "price": {
      "min": 8000,
      "max": 11000
    },
    "kcal": 350,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "죽"
      ],
      "en": [
        "chicken porridge"
      ],
      "zh": [
        "鸡肉粥"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "hobakjuk",
    "roman": "Hobakjuk",
    "name": {
      "ko": "호박죽",
      "en": "Pumpkin Porridge",
      "zh": "南瓜粥"
    },
    "category": "porridge",
    "tastes": [
      "sweet",
      "mild"
    ],
    "desc": {
      "ko": "늙은 호박을 갈아 끓인 달콤한 죽이에요. 팥소를 넣기도 해요.",
      "en": "Sweet porridge made from ripe pumpkin, sometimes with red bean paste.",
      "zh": "老南瓜磨浆煮的甜粥，有时加红豆沙。"
    },
    "ingredients": {
      "ko": "늙은 호박, 찹쌀가루, 설탕, 소금",
      "en": "Pumpkin, glutinous rice flour, sugar, salt",
      "zh": "南瓜、糯米粉、糖、盐"
    },
    "tip": {
      "ko": "디저트로 먹는 죽이에요. 다이어트 식사로도 인기예요.",
      "en": "Eaten as dessert. Also popular for diet meals.",
      "zh": "当甜点吃；减肥期也很受欢迎。"
    },
    "spice": 1,
    "price": {
      "min": 7000,
      "max": 10000
    },
    "kcal": 320,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "죽"
      ],
      "en": [
        "pumpkin porridge"
      ],
      "zh": [
        "南瓜粥"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "patjuk",
    "roman": "Patjuk",
    "name": {
      "ko": "팥죽",
      "en": "Red Bean Porridge",
      "zh": "红豆粥"
    },
    "category": "porridge",
    "tastes": [
      "sweet",
      "mild"
    ],
    "desc": {
      "ko": "팥을 삶아 으깨어 만든 붉은 죽이에요. 동지에 먹는 전통 음식이에요.",
      "en": "A red porridge of simmered and mashed red beans. Traditionally eaten on Dongji (winter solstice).",
      "zh": "红豆煮烂熬成的红粥，冬至传统食物。"
    },
    "ingredients": {
      "ko": "팥, 쌀, 소금, 설탕",
      "en": "Red beans, rice, salt, sugar",
      "zh": "红豆、大米、盐、糖"
    },
    "tip": {
      "ko": "동지에 팥죽을 먹어야 나이를 먹는다고 해요. 새알심(찹쌀 경단)을 넣어요.",
      "en": "Koreans say you must eat patjuk on Dongji to grow a year older. Add chewy rice balls.",
      "zh": "冬至吃红豆粥才算长一岁；会加小糯米团。"
    },
    "spice": 1,
    "price": {
      "min": 7000,
      "max": 10000
    },
    "kcal": 380,
    "rating": 4.2,
    "searchTerms": {
      "ko": [
        "동지 팥죽"
      ],
      "en": [
        "red bean porridge"
      ],
      "zh": [
        "红豆粥"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "jatjuk",
    "roman": "Jatjuk",
    "name": {
      "ko": "잣죽",
      "en": "Pine Nut Porridge",
      "zh": "松子粥"
    },
    "category": "porridge",
    "tastes": [
      "mild",
      "hot"
    ],
    "desc": {
      "ko": "잣을 갈아 쌀과 함께 끓인 고소한 죽이에요. 예전 궁중 음식이에요.",
      "en": "Nutty porridge of ground pine nuts and rice. A former royal dish.",
      "zh": "松子磨碎和大米一起熬的香粥，曾是宫廷料理。"
    },
    "ingredients": {
      "ko": "쌀, 잣, 소금, 물",
      "en": "Rice, pine nuts, salt, water",
      "zh": "大米、松子、盐、水"
    },
    "tip": {
      "ko": "고소하고 부드러워요. 위가 약할 때 먹기 좋아요.",
      "en": "Rich and silky — gentle on the stomach.",
      "zh": "香滑养胃。"
    },
    "spice": 1,
    "price": {
      "min": 10000,
      "max": 15000
    },
    "kcal": 450,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "죽"
      ],
      "en": [
        "pine nut porridge"
      ],
      "zh": [
        "松子粥"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "pyeonyuk",
    "roman": "Pyeonyuk",
    "name": {
      "ko": "편육",
      "en": "Sliced Boiled Meat",
      "zh": "熟肉片"
    },
    "category": "side",
    "tastes": [
      "savory",
      "mild"
    ],
    "desc": {
      "ko": "돼지고기나 소고기를 삶아 눌러 얇게 썬 음식이에요. 술안주로 인기예요.",
      "en": "Boiled and pressed meat sliced thin. A classic drinking snack.",
      "zh": "猪肉或牛肉煮后压制切薄片，经典下酒菜。"
    },
    "ingredients": {
      "ko": "돼지고기, 소고기, 소금, 마늘",
      "en": "Pork, beef, salt, garlic",
      "zh": "猪肉、牛肉、盐、大蒜"
    },
    "tip": {
      "ko": "새우젓이나 소금에 찍어 먹어요. 담백한 맛이 좋아요.",
      "en": "Dip in salted shrimp or salt. Clean and mild.",
      "zh": "蘸虾酱或盐吃；清淡不腻。"
    },
    "spice": 1,
    "price": {
      "min": 15000,
      "max": 22000
    },
    "kcal": 350,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "수육"
      ],
      "en": [
        "boiled beef slices"
      ],
      "zh": [
        "熟肉片",
        "白切肉"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "neobiani",
    "roman": "Neobiani",
    "name": {
      "ko": "너비아니",
      "en": "Grilled Thin Beef Patties",
      "zh": "烤牛肉饼"
    },
    "category": "grill",
    "tastes": [
      "savory",
      "sweet"
    ],
    "desc": {
      "ko": "간장 양념에 재운 얇은 소고기를 넓적하게 구운 음식이에요.",
      "en": "Thin, wide slices of soy-marinated beef grilled flat. An old royal favorite.",
      "zh": "酱油腌过的薄牛肉大片烤制，古代宫廷喜爱。"
    },
    "ingredients": {
      "ko": "소고기, 간장, 설탕, 참기름, 대파",
      "en": "Beef, soy sauce, sugar, sesame oil, green onion",
      "zh": "牛肉、酱油、糖、芝麻油、大葱"
    },
    "tip": {
      "ko": "불고기의 원조라고 해요. 반찬으로도 안주로도 좋아요.",
      "en": "Considered the ancestor of bulgogi. Great as a side or a snack.",
      "zh": "被认为是烤牛肉（불고기）的始祖；做小菜下酒都行。"
    },
    "spice": 1,
    "price": {
      "min": 18000,
      "max": 26000
    },
    "kcal": 450,
    "rating": 4.4,
    "searchTerms": {
      "ko": [
        "궁중요리"
      ],
      "en": [
        "grilled beef patties"
      ],
      "zh": [
        "烤牛肉饼",
        "宫廷烤肉"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "samhap",
    "roman": "Samhap",
    "name": {
      "ko": "삼합",
      "en": "Three-combination Platter",
      "zh": "三合"
    },
    "category": "side",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "김치, 돼지고기, 홍어를 함께 싸 먹는 전라도 별미예요.",
      "en": "A Jeolla-do specialty wrapping kimchi, pork, and fermented skate together.",
      "zh": "泡菜、猪肉、发酵鳐鱼包在一起吃的全罗道美食。"
    },
    "ingredients": {
      "ko": "김치, 돼지고기, 홍어, 마늘",
      "en": "Kimchi, pork, skate, garlic",
      "zh": "泡菜、猪肉、鳐鱼、大蒜"
    },
    "tip": {
      "ko": "홍어 특유의 향이 있어요. 처음 먹는 분은 조금씩 먹어보세요.",
      "en": "Skate has a distinctive strong aroma. First-timers should start small.",
      "zh": "鳐鱼有独特气味；第一次吃建议小口尝试。"
    },
    "spice": 3,
    "price": {
      "min": 30000,
      "max": 40000
    },
    "kcal": 550,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "홍어삼합"
      ],
      "en": [
        "samhap platter"
      ],
      "zh": [
        "三合",
        "烤肠拼盘"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "haemultang",
    "roman": "Haemultang",
    "name": {
      "ko": "해물탕",
      "en": "Seafood Stew",
      "zh": "海鲜汤"
    },
    "category": "soup",
    "tastes": [
      "spicy",
      "hot"
    ],
    "desc": {
      "ko": "오징어, 새우, 조개 등 해물을 듬뿍 넣고 얼큰하게 끓인 탕이에요.",
      "en": "A hearty spicy stew packed with squid, shrimp, clams, and more seafood.",
      "zh": "鱿鱼、虾、蛤蜊等海鲜放满一锅的辣汤。"
    },
    "ingredients": {
      "ko": "오징어, 새우, 조개, 게, 고춧가루",
      "en": "Squid, shrimp, clams, crab, chili powder",
      "zh": "鱿鱼、虾、蛤蜊、蟹、辣椒粉"
    },
    "tip": {
      "ko": "해물이 많아서 2~3명이 함께 먹기 좋아요. 라면사리를 넣어도 맛있어요.",
      "en": "Big portions for 2-3 people. Adding instant noodles is delicious.",
      "zh": "分量足适合2-3人；加方便面也好吃。"
    },
    "spice": 4,
    "price": {
      "min": 35000,
      "max": 50000
    },
    "kcal": 400,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "해물"
      ],
      "en": [
        "seafood stew"
      ],
      "zh": [
        "海鲜汤",
        "海鲜锅"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "oi-naengguk",
    "roman": "Oi Naengguk",
    "name": {
      "ko": "오이냉국",
      "en": "Cold Cucumber Soup",
      "zh": "黄瓜冷汤"
    },
    "category": "soup",
    "tastes": [
      "cold",
      "sour",
      "fresh"
    ],
    "desc": {
      "ko": "오이를 얇게 썰어 차가운 장국에 넣은 여름 국이에요. 시원해요.",
      "en": "Thin cucumber slices in a chilled broth. A refreshing summer soup.",
      "zh": "黄瓜切薄片泡在冰凉汤里的夏日冷汤。"
    },
    "ingredients": {
      "ko": "오이, 간장, 식초, 물, 참기름",
      "en": "Cucumber, soy sauce, vinegar, water, sesame oil",
      "zh": "黄瓜、酱油、醋、水、芝麻油"
    },
    "tip": {
      "ko": "냉면처럼 식초를 더 넣어도 좋아요. 더운 날씨에 딱이에요.",
      "en": "Add extra vinegar like naengmyeon. Perfect for hot days.",
      "zh": "像冷面一样多加醋也行；热天绝配。"
    },
    "spice": 1,
    "price": {
      "min": 5000,
      "max": 8000
    },
    "kcal": 60,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "냉국"
      ],
      "en": [
        "cold cucumber soup"
      ],
      "zh": [
        "黄瓜冷汤"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "ogokbap",
    "roman": "Ogokbap",
    "name": {
      "ko": "오곡밥",
      "en": "Five-grain Rice",
      "zh": "五谷饭"
    },
    "category": "rice",
    "tastes": [
      "mild"
    ],
    "desc": {
      "ko": "쌀에 다섯 가지 곡식을 섞어 지은 밥이에요. 정월대보름에 먹어요.",
      "en": "Rice steamed with five grains. Eaten on the first full moon of the lunar year.",
      "zh": "大米混合五种谷物煮的饭，正月十五食用。"
    },
    "ingredients": {
      "ko": "쌀, 찹쌀, 조, 수수, 팥, 콩",
      "en": "Rice, glutinous rice, millet, sorghum, red beans, beans",
      "zh": "大米、糯米、小米、高粱、红豆、黄豆"
    },
    "tip": {
      "ko": "정월대보름에 먹는 전통 음식이에요. 나물과 함께 먹어요.",
      "en": "A Jeongwol Daeboreum tradition. Eat with seasoned vegetables.",
      "zh": "正月十五传统食物；配凉拌菜吃。"
    },
    "spice": 1,
    "price": {
      "min": 4000,
      "max": 7000
    },
    "kcal": 400,
    "rating": 4.5,
    "searchTerms": {
      "ko": [
        "잡곡밥"
      ],
      "en": [
        "multigrain rice"
      ],
      "zh": [
        "五谷饭",
        "杂粮饭"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "daechang-gui",
    "roman": "Daechang Gui",
    "name": {
      "ko": "대창구이",
      "en": "Grilled Beef Intestines",
      "zh": "烤牛大肠"
    },
    "category": "grill",
    "tastes": [
      "savory",
      "hot"
    ],
    "desc": {
      "ko": "소의 큰 창자를 구워 먹는 음식이에요. 곱창보다 더 쫄깃해요.",
      "en": "Grilled large beef intestines. Chewier than gopchang.",
      "zh": "烤牛大肠，比牛小肠更弹韧。"
    },
    "ingredients": {
      "ko": "대창, 소금, 대파, 양파",
      "en": "Beef intestines, salt, green onion, onion",
      "zh": "牛大肠、盐、大葱、洋葱"
    },
    "tip": {
      "ko": "기름이 많아 고소해요. 겉이 노릇해질 때까지 구워 먹어요.",
      "en": "Rich and fatty. Grill until the outside is golden.",
      "zh": "油脂丰富很香；烤到表面金黄。"
    },
    "spice": 2,
    "price": {
      "min": 28000,
      "max": 35000
    },
    "kcal": 520,
    "rating": 4.8,
    "searchTerms": {
      "ko": [
        "대창"
      ],
      "en": [
        "grilled beef large intestines"
      ],
      "zh": [
        "烤牛大肠"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "galchi-jorim",
    "roman": "Galchi Jorim",
    "name": {
      "ko": "갈치조림",
      "en": "Braised Hairtail",
      "zh": "炖带鱼"
    },
    "category": "stew",
    "tastes": [
      "spicy",
      "savory"
    ],
    "desc": {
      "ko": "갈치를 매콤한 양념에 조린 음식이에요. 무와 함께 조려요.",
      "en": "Hairtail braised in spicy sauce with radish.",
      "zh": "带鱼和萝卜用辣酱炖制。"
    },
    "ingredients": {
      "ko": "갈치, 무, 고춧가루, 간장, 대파",
      "en": "Hairtail, radish, chili powder, soy sauce, green onion",
      "zh": "带鱼、萝卜、辣椒粉、酱油、大葱"
    },
    "tip": {
      "ko": "무에 양념이 배어들면 정말 맛있어요. 국물이 밥과 잘 어울려요.",
      "en": "The sauce-soaked radish is delicious. The broth pairs great with rice.",
      "zh": "吸满汤汁的萝卜是精华；汤汁拌饭一流。"
    },
    "spice": 3,
    "price": {
      "min": 18000,
      "max": 26000
    },
    "kcal": 380,
    "rating": 4.6,
    "searchTerms": {
      "ko": [
        "갈치"
      ],
      "en": [
        "braised hairtail fish"
      ],
      "zh": [
        "炖带鱼"
      ]
    },
    "collections": [],
    "appearances": []
  },
  {
    "id": "samgak-gimbap",
    "roman": "Samgak Gimbap",
    "name": {
      "ko": "삼각김밥",
      "en": "Triangular Rice Balls",
      "zh": "三角饭团"
    },
    "category": "rice",
    "tastes": [
      "savory"
    ],
    "desc": {
      "ko": "삼각형 모양의 김밥으로, 편의점에서 가장 잘 팔리는 음식이에요.",
      "en": "Triangular seaweed-wrapped rice balls — the best-selling convenience store food in Korea.",
      "zh": "三角造型的紫菜饭团，韩国便利店销量冠军。"
    },
    "ingredients": {
      "ko": "밥, 김, 참치마요, 소고기, 스팸",
      "en": "Rice, seaweed, tuna mayo, beef, spam",
      "zh": "米饭、紫菜、金枪鱼蛋黄酱、牛肉、午餐肉"
    },
    "tip": {
      "ko": "김을 나중에 붙이는 것이 비결이에요. 포장에 설명이 있어요.",
      "en": "The trick is attaching the seaweed just before eating — the wrapper explains how.",
      "zh": "吃前才贴紫菜是秘诀；包装上有说明。"
    },
    "spice": 1,
    "price": {
      "min": 1500,
      "max": 3000
    },
    "kcal": 300,
    "rating": 4.7,
    "searchTerms": {
      "ko": [
        "편의점 김밥"
      ],
      "en": [
        "triangle kimbap"
      ],
      "zh": [
        "三角饭团",
        "便利店饭团"
      ]
    },
    "collections": [],
    "appearances": []
  }
];

  var COLLECTIONS = [
  {
    "key": "idol",
    "emoji": "⭐",
    "name": {
      "ko": "아이돌 픽",
      "en": "Idol Picks",
      "zh": "爱豆同款"
    },
    "desc": {
      "ko": "아이돌 라이브와 예능 속 야식·먹방 단골 메뉴",
      "en": "Late-night and mukbang favorites seen across idol content",
      "zh": "偶像直播与综艺里出镜率超高的美食"
    }
  },
  {
    "key": "kdrama",
    "emoji": "📺",
    "name": {
      "ko": "드라마 픽",
      "en": "K-Drama Picks",
      "zh": "韩剧同款"
    },
    "desc": {
      "ko": "드라마 명장면 속 먹방·밥상 메뉴 모음",
      "en": "Dishes from memorable K-drama eating and dinner scenes",
      "zh": "韩剧名场面里的吃播与饭桌菜单合集"
    }
  },
  {
    "key": "variety",
    "emoji": "🎬",
    "name": {
      "ko": "예능 픽",
      "en": "Variety Picks",
      "zh": "综艺同款"
    },
    "desc": {
      "ko": "예능 프로그램에서 MC들이 맛있게 먹던 메뉴",
      "en": "The dishes MCs dig into on variety shows",
      "zh": "综艺节目里MC们大快朵颐的菜单"
    }
  }
];

  var CURRENCIES = {
  "CNY": {
    "symbol": "¥",
    "rate": 0.0053
  },
  "USD": {
    "symbol": "$",
    "rate": 0.00074
  }
};

  var KM = (global.KM = global.KM || {});
  KM.dishes = DISHES;
  KM.collections = COLLECTIONS;
  KM.currencies = CURRENCIES;
  KM.schema = { categories: CATEGORIES, tastes: TASTES };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = KM;
  }
})(typeof window !== "undefined" ? window : globalThis);
