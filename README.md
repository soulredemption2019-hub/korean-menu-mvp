# 韩餐点餐助手 (Korean Menu Helper)

面向在韩外国留学生的韩餐菜单搜索、翻译与发音助手。
基于 5 位真实用户访谈的需求，把「查菜单翻译工具」升级为「点餐决策助手」。

纯前端单页应用：**无构建、无依赖、无框架**，浏览器直接打开或任意静态服务器即可运行。

当前数据：**117 道菜**（本地精修 20 道 + 远程仓库合并 97 道），11 个分类（汤锅炖菜/汤类/米饭类/面食/烤肉烤物/炒菜/炸物/街头小吃·糕饼/小菜·下酒菜/饮品/粥类）。

## 功能（用户访谈 → 实现）

| 访谈需求 | 功能 | 说明 |
|---|---|---|
| 价格区间 + 货币换算（访谈1） | 每道菜显示韩元价格区间，自动换算人民币/美元（可切换） | 汇率常量为参考值，见 `js/data.js` |
| 韩语发音朗读（访谈2） | 菜名旁 🔊 按钮，Web Speech API 朗读韩语菜名（ko-KR） | 自动选择韩语语音，播放中可再次点击停止 |
| 用户评分（访谈3） | 社区平均评分（半星展示）+ 个人 1-5 星打分 | 个人评分存 localStorage，可清除 |
| 模糊搜索 + 辣度/类型筛选（访谈4） | 按菜名/食材/口味/描述搜索，无需准确菜名；辣度 1-5 筛选 + 类型筛选 | 支持中文口语（"辣的鸡肉""想喝汤"）、英文、韩文；**首页直接点筛选可浏览全部符合条件的菜** |
| 专题推荐（访谈5） | 爱豆同款 / 韩剧同款 / 综艺同款 专题，附出处说明 | 文化性通用描述，不虚构具体艺人 |
| 搜索历史（P1） | 最近搜索记录，去重、可回看、可清空 | localStorage |
| 营养热量（P1） | 每道菜显示参考热量 | kcal |

另有：防抖实时搜索、相关度排序、hash 深链接（`#/dish/<id>`、`#/theme/<key>`、`#/search/<q>`）、三语界面（中/韩/英）、偏好持久化、无障碍（aria/焦点样式/减少动效）。

## 快速开始

```bash
# 任意静态服务器即可（也可直接双击 index.html）
python3 -m http.server 8090
# 打开 http://localhost:8090
```

## 目录结构

```
index.html            语义化页面骨架
style.css             设计令牌 + 组件样式
js/
  data.js             菜品数据（117 道，由脚本生成）· 专题 · 汇率 · schema 枚举
  i18n.js             三语界面文案字典（单一数据源，无冗余）
  search.js           纯函数搜索引擎（分词/打分/排序/筛选）
  app.js              UI 控制器（状态/渲染/事件/路由/TTS/存储）
scripts/
  build-data.js       数据构建脚本：合并远程 v1 快照 + 本地精修，生成 js/data.js
  remote-dishes.json  远程仓库 DISHES 的 v1 快照（同步远程菜单时更新它）
tests/
  data.test.js        数据完整性 + i18n 一致性
  search.test.js      搜索引擎单测
  app.test.js         UI 集成测试（DOM stub）
  helpers/dom.js      极简 DOM stub
README.md
```

## 同步远程菜单数据

远程仓库的菜单（v1 格式）放在 `scripts/remote-dishes.json`（从远程 app.js 提取的 DISHES 快照）。
合并流程：更新快照 → 在 `scripts/build-data.js` 的 `META` 表里为新菜补充元数据（分类/口味/价格/热量/别名）→ 运行：

```bash
node scripts/build-data.js   # 重新生成 js/data.js（校验：未映射或多余条目会报错）
npm test                     # 跑全部测试
```

## 测试

```bash
node --test tests/*.test.js   # 或 npm test
```

测试覆盖：数据 schema 校验、三语字典键一致性、分词/相关度排序/组合筛选、完整 UI 流程（搜索→筛选浏览→详情→评分→货币→TTS→专题→历史→深链接→实时搜索）。

## 数据模型（如何加一道菜）

在 `js/data.js` 的 `DISHES` 数组中追加：

```js
{
  id: "my-dish",                     // 唯一、稳定（用于深链接与评分）
  roman: "My Dish",
  name: { ko: "…", en: "…", zh: "…" },
  category: "stew",                  // stew|soup|rice|noodle|grill|stir|fried|snack|side|drink|porridge
  tastes: ["spicy", "hot"],          // spicy|sweet|savory|mild|sour|hot|cold|fresh
  desc: { ko, en, zh },
  ingredients: { ko, en, zh },
  tip: { ko, en, zh },
  spice: 3,                          // 1-5
  price: { min: 8000, max: 12000 },  // 韩元
  kcal: 350,
  rating: 4.5,                       // 0-5
  searchTerms: { ko: [], en: [], zh: [] },   // 别名/近义词
  collections: ["kdrama"],           // idol|kdrama|variety（可多个）
  appearances: [                     // 专题出处说明（可选）
    { collection: "kdrama", note: { ko: "…", en: "…", zh: "…" } }
  ]
}
```

- 菜名/食材/描述/别名/类型标签/口味标签全部参与搜索；
- `category` 和 `tastes` 的枚举标签在 `js/i18n.js` 中定义（三种语言各一份），新增枚举需同步补充三语标签（`tests/data.test.js` 会自动校验一致性）。

## 已知限制

- 价格为估算参考值，汇率为常量（如需真实数据，接入汇率 API 即可）
- 中文搜索为单字级匹配，结果偏宽松（模糊搜索的预期行为）
- TTS 依赖浏览器语音引擎（Chrome/Edge 支持最佳），无韩语语音时回退到系统默认音
