/**
 * scripts/build-data.js — 从远程 v1 数据生成 js/data.js (v2 结构化 schema)
 *
 * 用法: node scripts/build-data.js
 * 流程:
 *   1. 读取 scripts/remote-dishes.json（远程仓库 DISHES 的 v1 快照）
 *   2. 与本地已精修的 20 道菜（js/data.js）合并，按韩文名去重
 *   3. 为新菜补充结构化元数据：category / tastes / price / kcal / rating / searchTerms
 *   4. 重新生成 js/data.js（UMD，浏览器与 Node 均可加载）
 *
 * META 表按 remote roman 名索引；未覆盖或多余的条目会报错退出，保证不漏菜。
 */
"use strict";

var fs = require("fs");
var path = require("path");

var ROOT = path.join(__dirname, "..");

// ===== 读取本地已精修数据 =====
var KM = require(path.join(ROOT, "js", "data.js"));
var curated = KM.dishes;
var curatedNames = curated.map(function (d) { return d.name.ko; });

// ===== 读取远程 v1 快照 =====
var remote = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts", "remote-dishes.json"), "utf8"));

// 显式跳过：与本地精修条目重复（김치볶음밥 / 육개장 / 곱창）
var SKIP_ROMANS = ["Kimchi Bokkeumbap", "Yukgaejang", "Gopchang Gui"];

// ===== 新菜元数据映射: roman -> { c: category, t: tastes, p: [min,max], k: kcal, r?: rating, a: {ko,en,zh} } =====
var META = {
  "Galbi Gui":           { c: "grill", t: ["savory", "sweet"], p: [35000, 55000], k: 550, a: { ko: ["소갈비구이"], en: ["beef ribs"], zh: ["烤牛排骨", "牛小排"] } },
  "Galbi Jjim":          { c: "stew", t: ["sweet", "savory"], p: [30000, 45000], k: 480, a: { ko: ["소갈비찜"], en: ["braised ribs"], zh: ["炖牛排骨"] } },
  "Samgyetang":          { c: "soup", t: ["mild", "hot"], p: [14000, 18000], k: 650, r: 4.6, a: { ko: ["복날 음식"], en: ["ginseng chicken soup"], zh: ["人参鸡汤", "参汤"] } },
  "Haemul Pajeon":       { c: "side", t: ["savory"], p: [13000, 18000], k: 520, a: { ko: ["파전"], en: ["seafood pancake"], zh: ["海鲜饼"] } },
  "Kimchi Jeon":         { c: "side", t: ["spicy", "savory"], p: [8000, 12000], k: 400, a: { ko: ["김치 부침개"], en: ["kimchi pancake"], zh: ["泡菜煎饼"] } },
  "Sundae":              { c: "snack", t: ["savory"], p: [4000, 7000], k: 450, a: { ko: ["분식"], en: ["korean sausage", "blood sausage"], zh: ["血肠", "韩式米肠"] } },
  "Mandu":               { c: "snack", t: ["savory"], p: [4000, 7000], k: 300, a: { ko: ["군만두", "찐만두"], en: ["dumplings"], zh: ["锅贴", "蒸饺"] } },
  "Tteokguk":            { c: "soup", t: ["mild", "hot"], p: [8000, 11000], k: 420, a: { ko: ["설날 음식"], en: ["rice cake soup"], zh: ["年糕汤", "新年汤"] } },
  "Miyeokguk":           { c: "soup", t: ["mild", "hot"], p: [7000, 10000], k: 250, a: { ko: ["생일 미역국"], en: ["seaweed soup"], zh: ["海带汤", "生日汤"] } },
  "Gyeranjjim":          { c: "side", t: ["mild", "savory"], p: [5000, 9000], k: 220, a: { ko: ["달걀찜"], en: ["steamed egg"], zh: ["蒸蛋", "韩式蒸蛋"] } },
  "Agujjim":             { c: "stew", t: ["spicy", "savory"], p: [35000, 55000], k: 500, a: { ko: ["아구"], en: ["monkfish stew"], zh: ["炖安康鱼", "鮟鱇鱼"] } },
  "Maeuntang":           { c: "soup", t: ["spicy", "hot"], p: [15000, 25000], k: 350, a: { ko: ["생선 매운탕"], en: ["spicy fish soup"], zh: ["辣鱼汤", "鲜辣鱼汤"] } },
  "Ojingeo Bokkeum":     { c: "stir", t: ["spicy", "savory"], p: [12000, 16000], k: 380, a: { ko: ["오징어"], en: ["stir fried squid"], zh: ["炒鱿鱼", "辣炒鱿鱼"] } },
  "Nakji Bokkeum":       { c: "stir", t: ["spicy", "savory"], p: [15000, 20000], k: 360, a: { ko: ["낙지"], en: ["stir fried octopus"], zh: ["炒章鱼", "辣炒小章鱼"] } },
  "Jeyuk Bokkeum":       { c: "stir", t: ["spicy", "savory"], p: [10000, 14000], k: 520, a: { ko: ["제육"], en: ["stir fried pork"], zh: ["炒猪肉", "辣炒五花"] } },
  "Dakdoritang":         { c: "stew", t: ["spicy", "savory", "hot"], p: [28000, 38000], k: 550, a: { ko: ["닭볶음탕"], en: ["spicy chicken stew"], zh: ["辣炖鸡", "炖鸡块"] } },
  "Kongnamul Guk":       { c: "soup", t: ["mild", "hot"], p: [5000, 8000], k: 120, a: { ko: ["해장"], en: ["bean sprout soup"], zh: ["豆芽汤", "醒酒豆芽汤"] } },
  "Bibim Naengmyeon":    { c: "noodle", t: ["spicy", "cold", "sour"], p: [9000, 12000], k: 450, a: { ko: ["함흥냉면"], en: ["spicy cold noodles"], zh: ["拌冷面", "咸兴冷面"] } },
  "Kongguksu":           { c: "noodle", t: ["cold", "mild"], p: [9000, 12000], k: 480, a: { ko: ["콩국"], en: ["soy milk noodles"], zh: ["豆浆面", "豆汁面"] } },
  "Jajangmyeon":         { c: "noodle", t: ["savory", "sweet"], p: [6000, 9000], k: 700, r: 4.3, a: { ko: ["자장면"], en: ["black bean noodles"], zh: ["炸酱面", "韩式炸酱面"] } },
  "Jjamppong":           { c: "noodle", t: ["spicy", "hot"], p: [9000, 13000], k: 580, r: 4.4, a: { ko: ["해물짬뽕"], en: ["seafood noodle soup"], zh: ["海鲜面", "辣汤面"] } },
  "Kalguksu":            { c: "noodle", t: ["mild", "hot"], p: [8000, 11000], k: 480, a: { ko: ["손칼국수"], en: ["knife cut noodles"], zh: ["刀切面", "手擀面"] } },
  "Sujebi":              { c: "noodle", t: ["mild", "hot"], p: [8000, 11000], k: 420, a: { ko: [], en: ["hand torn noodle soup"], zh: ["面片汤", "面疙瘩"] } },
  "Makguksu":            { c: "noodle", t: ["spicy", "cold"], p: [9000, 12000], k: 460, a: { ko: ["메밀국수"], en: ["buckwheat noodles"], zh: ["荞麦拌面"] } },
  "Janchi Guksu":        { c: "noodle", t: ["mild", "hot"], p: [5000, 8000], k: 400, a: { ko: ["온면"], en: ["banquet noodles"], zh: ["喜面", "汤面"] } },
  "Hoe":                 { c: "side", t: ["fresh", "cold"], p: [25000, 45000], k: 250, r: 4.7, a: { ko: ["활어회"], en: ["sashimi", "raw fish"], zh: ["生鱼片", "刺身"] } },
  "Hoedeopbap":          { c: "rice", t: ["fresh", "spicy"], p: [12000, 16000], k: 520, a: { ko: ["회밥"], en: ["raw fish rice bowl"], zh: ["生鱼片盖饭"] } },
  "Eomuk":               { c: "snack", t: ["savory", "hot"], p: [1000, 3000], k: 150, a: { ko: ["오뎅"], en: ["fish cake"], zh: ["鱼糕串", "鱼饼"] } },
  "Hotteok":             { c: "snack", t: ["sweet"], p: [1000, 2000], k: 350, a: { ko: ["씨앗호떡"], en: ["sweet pancake"], zh: ["糖饼", "糖馅饼"] } },
  "Bungeoppang":         { c: "snack", t: ["sweet"], p: [1000, 2000], k: 250, a: { ko: ["팥붕어빵"], en: ["fish shaped pastry"], zh: ["鲫鱼饼", "红豆饼"] } },
  "Gyeranppang":         { c: "snack", t: ["sweet", "savory"], p: [1500, 2500], k: 280, a: { ko: ["겨울 간식"], en: ["egg bread"], zh: ["鸡蛋面包"] } },
  "Dakgangjeong":        { c: "fried", t: ["sweet", "spicy"], p: [15000, 20000], k: 560, a: { ko: ["순살닭강정"], en: ["sweet fried chicken"], zh: ["糖醋鸡块", "韩式炸鸡块"] } },
  "Yangnyeom Chicken":   { c: "fried", t: ["spicy", "sweet"], p: [16000, 21000], k: 550, r: 4.8, a: { ko: ["치킨"], en: ["seasoned chicken"], zh: ["酱料炸鸡", "调味炸鸡"] } },
  "Huraideu Chicken":    { c: "fried", t: ["savory"], p: [15000, 20000], k: 520, r: 4.7, a: { ko: ["치킨", "프라이드"], en: ["fried chicken", "crispy chicken"], zh: ["原味炸鸡", "脆皮炸鸡"] } },
  "Omurice":             { c: "rice", t: ["savory", "sweet"], p: [8000, 11000], k: 600, a: { ko: ["옴라이스"], en: ["omelette rice"], zh: ["蛋包饭"] } },
  "Jumeokbap":           { c: "rice", t: ["savory"], p: [2500, 4000], k: 300, a: { ko: [], en: ["rice ball"], zh: ["饭团"] } },
  "Mayak Gimbap":        { c: "rice", t: ["savory", "sweet"], p: [2000, 4000], k: 320, a: { ko: ["꼬마김밥"], en: ["mini kimbap"], zh: ["迷你紫菜包饭", "小紫菜卷"] } },
  "Seolleongtang":       { c: "soup", t: ["mild", "hot"], p: [10000, 14000], k: 450, r: 4.5, a: { ko: [], en: ["ox bone soup"], zh: ["牛骨汤", "牛杂汤"] } },
  "Gomtang":             { c: "soup", t: ["mild", "hot"], p: [10000, 14000], k: 400, a: { ko: ["곰국"], en: ["beef bone soup"], zh: ["浓牛骨汤"] } },
  "Sogogi Muguk":        { c: "soup", t: ["mild", "hot"], p: [9000, 13000], k: 300, a: { ko: ["무국"], en: ["beef radish soup"], zh: ["牛肉萝卜汤"] } },
  "Nokdu Jeon":          { c: "side", t: ["savory"], p: [10000, 15000], k: 480, a: { ko: ["빈대떡"], en: ["mung bean pancake"], zh: ["绿豆煎饼"] } },
  "Donggeurangttaeng":   { c: "side", t: ["savory"], p: [8000, 12000], k: 420, a: { ko: ["완자전"], en: ["meat patties"], zh: ["韩式肉饼", "煎肉饼"] } },
  "Hobak Jeon":          { c: "side", t: ["mild", "savory"], p: [8000, 12000], k: 280, a: { ko: ["애호박전"], en: ["zucchini pancake"], zh: ["西葫芦煎饼"] } },
  "Ganjang Gejang":      { c: "side", t: ["savory", "fresh"], p: [20000, 35000], k: 320, r: 4.6, a: { ko: ["게장"], en: ["soy marinated crab"], zh: ["酱蟹", "酱油腌蟹"] } },
  "Yangnyeom Gejang":    { c: "side", t: ["spicy", "savory"], p: [20000, 35000], k: 340, a: { ko: ["게장"], en: ["spicy marinated crab"], zh: ["辣酱腌蟹"] } },
  "Jangeo Gui":          { c: "grill", t: ["savory", "sweet"], p: [30000, 45000], k: 500, a: { ko: ["민물장어"], en: ["grilled eel"], zh: ["烤鳗鱼"] } },
  "Godeungeo Gui":       { c: "grill", t: ["savory"], p: [10000, 14000], k: 400, a: { ko: ["자반고등어"], en: ["grilled mackerel"], zh: ["烤鲭鱼", "烤青花鱼"] } },
  "Makchang Gui":        { c: "grill", t: ["savory", "hot"], p: [25000, 32000], k: 500, a: { ko: ["막창"], en: ["grilled pork intestines"], zh: ["烤猪大肠", "烤肥肠"] } },
  "Jokbal":              { c: "side", t: ["savory"], p: [30000, 40000], k: 600, r: 4.7, a: { ko: [], en: ["braised pig trotters"], zh: ["卤猪蹄", "酱猪蹄"] } },
  "Bossam":              { c: "side", t: ["savory", "mild"], p: [28000, 38000], k: 580, r: 4.7, a: { ko: ["보쌈김치"], en: ["boiled pork wraps"], zh: ["菜包肉", "包肉"] } },
  "Yukhoe":              { c: "side", t: ["fresh", "cold", "savory"], p: [25000, 35000], k: 300, r: 4.6, a: { ko: [], en: ["beef tartare"], zh: ["生拌牛肉", "生牛肉"] } },
  "Dolsot Bibimbap":     { c: "rice", t: ["savory", "fresh"], p: [10000, 14000], k: 600, r: 4.7, a: { ko: ["돌솥"], en: ["stone pot bibimbap"], zh: ["石锅拌饭"] } },
  "Bibim Guksu":         { c: "noodle", t: ["spicy", "cold", "sour"], p: [8000, 11000], k: 450, a: { ko: ["비빔면"], en: ["spicy mixed noodles"], zh: ["拌面", "韩式拌面"] } },
  "Sinseollo":           { c: "stew", t: ["mild", "hot"], p: [50000, 80000], k: 450, r: 4.5, a: { ko: ["궁중요리"], en: ["royal hot pot"], zh: ["神仙炉", "宫廷火锅"] } },
  "Gujeolpan":           { c: "side", t: ["fresh", "mild"], p: [30000, 45000], k: 400, r: 4.5, a: { ko: ["궁중요리"], en: ["nine section platter"], zh: ["九折坂", "宫廷拼盘"] } },
  "Dakbal":              { c: "side", t: ["spicy", "hot"], p: [14000, 18000], k: 350, a: { ko: ["무뼈닭발"], en: ["spicy chicken feet"], zh: ["辣鸡爪"] } },
  "Golbaengi Muchim":    { c: "side", t: ["spicy", "sour"], p: [20000, 28000], k: 250, a: { ko: ["골뱅이"], en: ["spicy whelk salad"], zh: ["凉拌海螺"] } },
  "Kkotgetang":          { c: "soup", t: ["spicy", "hot"], p: [30000, 45000], k: 380, a: { ko: ["꽃게"], en: ["crab stew"], zh: ["花蟹汤", "蟹汤"] } },
  "Jogaetang":           { c: "soup", t: ["mild", "hot"], p: [15000, 22000], k: 280, a: { ko: ["조개"], en: ["clam soup"], zh: ["蛤蜊汤"] } },
  "Bajirak Kalguksu":    { c: "noodle", t: ["mild", "hot"], p: [10000, 14000], k: 480, a: { ko: ["바지락"], en: ["clam noodle soup"], zh: ["蛤蜊刀切面"] } },
  "Nurungji":            { c: "rice", t: ["mild"], p: [3000, 5000], k: 350, a: { ko: ["누룽지탕"], en: ["scorched rice"], zh: ["锅巴", "锅巴汤"] } },
  "Yakbap":              { c: "rice", t: ["sweet"], p: [3000, 6000], k: 450, a: { ko: ["약식"], en: ["sweet rice with nuts"], zh: ["药饭", "八宝饭"] } },
  "Songpyeon":           { c: "snack", t: ["sweet"], p: [5000, 8000], k: 250, a: { ko: ["추석"], en: ["pine rice cake"], zh: ["松饼", "松糕"] } },
  "Injeolmi":            { c: "snack", t: ["sweet"], p: [4000, 7000], k: 300, a: { ko: ["콩고물 떡"], en: ["soybean rice cake"], zh: ["豆粉年糕"] } },
  "Gyeongdan":           { c: "snack", t: ["sweet"], p: [4000, 7000], k: 280, a: { ko: ["떡"], en: ["rice cake balls"], zh: ["米团糕", "甜米团"] } },
  "Chapssal Tteok":      { c: "snack", t: ["sweet"], p: [3000, 5000], k: 280, a: { ko: ["떡"], en: ["glutinous rice cake"], zh: ["糯米糕", "糯米糍"] } },
  "Sikhye":              { c: "drink", t: ["sweet", "cold"], p: [1500, 3000], k: 150, a: { ko: ["음료"], en: ["sweet rice drink"], zh: ["甜米露", "米酿"] } },
  "Sujeonggwa":          { c: "drink", t: ["sweet", "cold"], p: [1500, 3000], k: 120, a: { ko: ["음료"], en: ["cinnamon punch"], zh: ["柿饼茶", "肉桂甜茶"] } },
  "Hwachae":             { c: "drink", t: ["sweet", "cold", "fresh"], p: [4000, 7000], k: 130, a: { ko: ["음료"], en: ["fruit punch"], zh: ["花菜", "水果甜汤"] } },
  "Yuja-cha":            { c: "drink", t: ["sweet", "hot"], p: [3000, 5000], k: 100, a: { ko: ["유자"], en: ["citron tea"], zh: ["柚子茶"] } },
  "Insam-cha":           { c: "drink", t: ["mild", "hot"], p: [4000, 7000], k: 90, a: { ko: ["인삼"], en: ["ginseng tea"], zh: ["人参茶"] } },
  "Daechu-cha":          { c: "drink", t: ["sweet", "hot"], p: [3000, 5000], k: 110, a: { ko: ["대추"], en: ["jujube tea"], zh: ["大枣茶", "红枣茶"] } },
  "Omija-cha":           { c: "drink", t: ["sour", "sweet"], p: [3000, 5000], k: 100, a: { ko: ["오미자"], en: ["omija tea"], zh: ["五味子茶"] } },
  "Boricha":             { c: "drink", t: ["mild"], p: [1000, 2000], k: 5, a: { ko: ["물"], en: ["barley tea"], zh: ["大麦茶"] } },
  "Makgeolli":           { c: "drink", t: ["sweet", "sour"], p: [4000, 8000], k: 120, r: 4.5, a: { ko: ["전통주"], en: ["rice wine"], zh: ["米酒", "马格利"] } },
  "Cheongju":            { c: "drink", t: ["mild"], p: [8000, 15000], k: 110, a: { ko: ["약주"], en: ["clear rice wine"], zh: ["清酒"] } },
  "Sanjeok":             { c: "grill", t: ["savory"], p: [12000, 16000], k: 450, a: { ko: ["꼬치"], en: ["skewered meat"], zh: ["烤肉串", "肉串"] } },
  "Sigeumchi Namul":     { c: "side", t: ["mild", "fresh"], p: [4000, 6000], k: 80, a: { ko: ["나물"], en: ["seasoned spinach"], zh: ["凉拌菠菜"] } },
  "Gamja Jorim":         { c: "side", t: ["sweet", "savory"], p: [5000, 8000], k: 260, a: { ko: ["반찬"], en: ["braised potatoes"], zh: ["炖土豆", "酱土豆"] } },
  "Gyeran Mari":         { c: "side", t: ["mild", "savory"], p: [6000, 9000], k: 220, a: { ko: ["계란"], en: ["rolled omelette"], zh: ["鸡蛋卷", "韩式玉子烧"] } },
  "Twigim":              { c: "fried", t: ["savory"], p: [5000, 9000], k: 450, a: { ko: ["야채튀김", "새우튀김"], en: ["fried snacks"], zh: ["炸物", "韩式天妇罗"] } },
  "Ojingeo Sundae":      { c: "snack", t: ["savory"], p: [8000, 12000], k: 400, a: { ko: ["오징어"], en: ["squid sundae"], zh: ["鱿鱼米肠"] } },
  "Chueo-tang":          { c: "soup", t: ["spicy", "hot"], p: [12000, 16000], k: 400, a: { ko: ["추어"], en: ["loach soup"], zh: ["泥鳅汤"] } },
  "Al-tang":             { c: "soup", t: ["spicy", "hot"], p: [15000, 22000], k: 350, a: { ko: ["명란"], en: ["fish roe soup"], zh: ["鱼子汤", "明太鱼子汤"] } },
  "Dakjuk":              { c: "porridge", t: ["mild", "hot"], p: [8000, 11000], k: 350, a: { ko: ["죽"], en: ["chicken porridge"], zh: ["鸡肉粥"] } },
  "Hobakjuk":            { c: "porridge", t: ["sweet", "mild"], p: [7000, 10000], k: 320, a: { ko: ["죽"], en: ["pumpkin porridge"], zh: ["南瓜粥"] } },
  "Patjuk":              { c: "porridge", t: ["sweet", "mild"], p: [7000, 10000], k: 380, a: { ko: ["동지 팥죽"], en: ["red bean porridge"], zh: ["红豆粥"] } },
  "Jatjuk":              { c: "porridge", t: ["mild", "hot"], p: [10000, 15000], k: 450, a: { ko: ["죽"], en: ["pine nut porridge"], zh: ["松子粥"] } },
  "Pyeonyuk":            { c: "side", t: ["savory", "mild"], p: [15000, 22000], k: 350, a: { ko: ["수육"], en: ["boiled beef slices"], zh: ["熟肉片", "白切肉"] } },
  "Neobiani":            { c: "grill", t: ["savory", "sweet"], p: [18000, 26000], k: 450, a: { ko: ["궁중요리"], en: ["grilled beef patties"], zh: ["烤牛肉饼", "宫廷烤肉"] } },
  "Samhap":              { c: "side", t: ["savory"], p: [30000, 40000], k: 550, a: { ko: ["홍어삼합"], en: ["samhap platter"], zh: ["三合", "烤肠拼盘"] } },
  "Haemultang":          { c: "soup", t: ["spicy", "hot"], p: [35000, 50000], k: 400, a: { ko: ["해물"], en: ["seafood stew"], zh: ["海鲜汤", "海鲜锅"] } },
  "Oi Naengguk":         { c: "soup", t: ["cold", "sour", "fresh"], p: [5000, 8000], k: 60, a: { ko: ["냉국"], en: ["cold cucumber soup"], zh: ["黄瓜冷汤"] } },
  "Ogokbap":             { c: "rice", t: ["mild"], p: [4000, 7000], k: 400, a: { ko: ["잡곡밥"], en: ["multigrain rice"], zh: ["五谷饭", "杂粮饭"] } },
  "Daechang Gui":        { c: "grill", t: ["savory", "hot"], p: [28000, 35000], k: 520, a: { ko: ["대창"], en: ["grilled beef large intestines"], zh: ["烤牛大肠"] } },
  "Galchi Jorim":        { c: "stew", t: ["spicy", "savory"], p: [18000, 26000], k: 380, a: { ko: ["갈치"], en: ["braised hairtail fish"], zh: ["炖带鱼"] } },
  "Samgak Gimbap":       { c: "rice", t: ["savory"], p: [1500, 3000], k: 300, a: { ko: ["편의점 김밥"], en: ["triangle kimbap"], zh: ["三角饭团", "便利店饭团"] } }
};

// ===== 生成 =====
var CATEGORIES = KM.schema.categories.concat(["stir", "side", "drink", "porridge"]);

function slugify(roman) {
  return roman.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function defaultRating(roman) {
  var hash = 0;
  for (var i = 0; i < roman.length; i++) hash = (hash + roman.charCodeAt(i)) % 997;
  return Math.round((4.0 + (hash % 9) / 10) * 10) / 10;
}

var newDishes = [];
var skipped = [];

remote.forEach(function (r) {
  if (curatedNames.indexOf(r.name.ko) !== -1 || SKIP_ROMANS.indexOf(r.roman) !== -1) {
    skipped.push(r.roman);
    return;
  }
  var meta = META[r.roman];
  if (!meta) {
    console.error("缺少元数据: " + r.roman);
    process.exitCode = 1;
    return;
  }
  newDishes.push({
    id: slugify(r.roman),
    roman: r.roman,
    name: { ko: r.name.ko, en: r.name.en, zh: r.name.cn },
    category: meta.c,
    tastes: meta.t,
    desc: { ko: r.desc.ko, en: r.desc.en, zh: r.desc.cn },
    ingredients: { ko: r.ingredients.ko, en: r.ingredients.en, zh: r.ingredients.cn },
    tip: { ko: r.tip.ko, en: r.tip.en, zh: r.tip.cn },
    spice: r.spice,
    price: { min: meta.p[0], max: meta.p[1] },
    kcal: meta.k,
    rating: meta.r || defaultRating(r.roman),
    searchTerms: {
      ko: meta.a.ko || [],
      en: meta.a.en || [],
      zh: meta.a.zh || []
    },
    collections: [],
    appearances: []
  });
});

// 校验：META 覆盖与使用一致
var metaKeys = Object.keys(META).sort();
var usedKeys = newDishes.map(function (d) { return d.roman; }).sort();
var unused = metaKeys.filter(function (k) { return usedKeys.indexOf(k) === -1; });
var unmapped = remote.filter(function (r) {
  return curatedNames.indexOf(r.name.ko) === -1 && SKIP_ROMANS.indexOf(r.roman) === -1 && !META[r.roman];
}).map(function (r) { return r.roman; });

if (unused.length) console.error("META 有未使用的条目: " + unused.join(", "));
if (unmapped.length) console.error("未映射的远程菜: " + unmapped.join(", "));
if (unused.length || unmapped.length || process.exitCode) process.exit(1);

// 合并
var all = curated.concat(newDishes);
var allNames = all.map(function (d) { return d.name.ko; });
var dupNames = allNames.filter(function (n, i) { return allNames.indexOf(n) !== i; });
if (dupNames.length) {
  console.error("合并后存在重名: " + dupNames.join(", "));
  process.exit(1);
}

// 输出 js/data.js
var header = [
  "/**",
  " * js/data.js — 菜品数据层 (v2 结构化 schema)",
  " * 由 scripts/build-data.js 生成，请勿手改（改 META 后重新运行）。",
  " * 数据来源：远程仓库 v1 数据（scripts/remote-dishes.json）+ 本地精修条目。",
  " */"
].join("\n");

var body = [
  "(function (global) {",
  '  "use strict";',
  "",
  "  var CATEGORIES = " + JSON.stringify(CATEGORIES) + ";",
  "  var TASTES = " + JSON.stringify(KM.schema.tastes) + ";",
  "",
  "  var DISHES = " + JSON.stringify(all, null, 2) + ";",
  "",
  "  var COLLECTIONS = " + JSON.stringify(KM.collections, null, 2) + ";",
  "",
  "  var CURRENCIES = " + JSON.stringify(KM.currencies, null, 2) + ";",
  "",
  "  var KM = (global.KM = global.KM || {});",
  "  KM.dishes = DISHES;",
  "  KM.collections = COLLECTIONS;",
  "  KM.currencies = CURRENCIES;",
  "  KM.schema = { categories: CATEGORIES, tastes: TASTES };",
  "",
  "  if (typeof module !== \"undefined\" && module.exports) {",
  "    module.exports = KM;",
  "  }",
  "})(typeof window !== \"undefined\" ? window : globalThis);",
  ""
].join("\n");

fs.writeFileSync(path.join(ROOT, "js", "data.js"), header + "\n" + body);

console.log("已生成 js/data.js：本地精修 " + curated.length + " 道 + 远程新增 " + newDishes.length +
  " 道 = 共 " + all.length + " 道（跳过重复 " + skipped.length + " 道: " + skipped.join(", ") + "）");
console.log("分类:", CATEGORIES.join(", "));
