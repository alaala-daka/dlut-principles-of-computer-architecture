# 幻灯片制作规范（計算機構成論 中文翻译 · 新增讲义）

> 本文件是**硬性规范**。所有新 deck 必须逐条遵守；与已有 8 个 deck（`中文翻译/計算機構成論第N回*.html`）
> 的版式、组件、措辞习惯完全一致。**动手前先完整读一遍本文件，再读一遍同类已有 deck 作为实物参照。**

---

## 1. 交付物

| 项 | 规定 |
|---|---|
| 目录 | `D:\trans-for-CS\中文翻译\` |
| 文件名 | `計算機構成論第{N}回.html`（N = 10/11/12/13/14，或覆盖重做的 5/6/7/8） |
| 样式 | **只引用** `assets/slides.css`（同目录），**不得**新增 `<style>` 块、不得引入任何外链/CDN/Web 字体/`<script>` |
| 画布 | 每页固定 `1280×720`（由 `.slide` 保证），**纵向滚动即翻页**，不实现翻页脚本 |
| 页码 | 每页页脚 `<div class="page-no">{页码} / {总页数}</div>`，总页数 = 该 PDF 的总页数 |
| **逐页 1:1** | **第 k 张幻灯片 ↔ 原 PDF 第 k 页**，页数必须完全相等。这是本项目最基本的约定，不允许合并或拆页 |

### 讲次与文件对应

| 讲次 | PDF（`日语原文/`） | 页数 | 输出文件 | data-chapter |
|---|---|---|---|---|
| 第5回 | `5 - 問題回答ありver.pdf` | 24 | `計算機構成論第5回.html`（覆盖） | 5 |
| 第6回 | `6 - 問題回答ありver.pdf` | 30 | `計算機構成論第6回.html`（覆盖） | 6 |
| 第7回 | `7 - 問題回答ありver.pdf` | 30 | `計算機構成論第7回.html`（覆盖） | 7 |
| 第8回 | `8 - 問題回答ありver.pdf` | 34 | `計算機構成論第8回.html`（覆盖） | 8 |
| 第10回 | `10　 - 問題回答無しver.pdf` | 32 | `計算機構成論第10回.html` | 10 |
| 第11回 | `11　問題回答ありverを渡す.pdf` | 33 | `計算機構成論第11回.html` | 11 |
| 第12回 | `12　- 問題回答無しver.pdf` | 34 | `計算機構成論第12回.html` | 12 |
| 第13回 | `13  - 問題回答無しver.pdf` | 27 | `計算機構成論第13回.html` | 13 |
| 第14回 | `14  - 問題回答無しver.pdf` | 29 | `計算機構成論第14回.html` | 14 |

> 第 9 回不在本批资料中，`slides.css` 里的 `data-chapter="9"` 只是配色占位。

---

## 2. 三种可直接查阅的素材

翻译 **必须同时** 看下面三样，缺一样就会出错：

1. **页面图像（最重要）** —— `.tools/newpdf_pages/{N}/p{NN}.png`（144 dpi，真实版式、图、红字、箭头、留白全在这里）。
   用 `read_image` 工具逐页看。**不要只靠文本**：原讲义大量内容是矢量图（逻辑门、全加器、ALU、数据通路、
   加法器笔算排版），文本提取会丢。
2. **文本稿** —— `日语原文-md/第N回_*.md`（版式感知的 Markdown，带 `<!-- page N -->` 锚点）或
   `.tools/newpdf_txt/*.txt`（带 y 坐标与字号，判断"哪行是标题、哪行是小注"很有用）。
3. **同类既有 deck 实物** —— `中文翻译/計算機構成論第7回.html`、`…第8回.html`、`…第2回.html`。
   **新写任何组件前，先在这些文件里找有没有现成写法，照抄风格。**

第 5~8 回还要额外读 `.tools/newpdf_pages/PAGE_MAP.md`：它给出**新版每页对应旧版第几页**，
而旧版第几页已经有译好的幻灯片，能直接搬过来改，**不要重译**。

---

## 3. HTML 骨架（严格照此结构）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>计算机组成原理 第10讲 算术运算的执行（1）· 中文翻译幻灯片</title>
<link rel="stylesheet" href="assets/slides.css">
</head>
<body>
<div class="deck" data-chapter="10">

<!-- ======================================================== 1 封面 -->
<section class="slide cover" id="s01">
  <div class="cover__veil"></div>
  <div class="cover__inner">
    <div class="cover__kicker">计算机组成原理 · 第 10 讲</div>
    <h1 class="cover__title">算术运算的<em>执行</em>（1）</h1>
    <p class="cover__sub">二进制加减运算 · 移位 · ALU</p>
    <div class="cover__bar"></div>
  </div>
  <div class="cover__meta">
    大连理工大学 · 立命馆大学国际信息软件学院<br>
    薛昕惟
  </div>
  <div class="cover__badge">
    原讲义「計算機構成論 第10回 ―算術演算の実行(1)―」<br>
    中文翻译版
  </div>
  <div class="page-no" style="color:#8fb0cc">1 / 32</div>
</section>

<!-- ======================================================== 2 讲义内容 -->
<section class="slide" id="s02">
  <div class="slide__head">
    <h2 class="slide__title">讲义内容</h2>
    <div class="slide__rule"></div>
  </div>
  <div class="slide__body">
    ...
  </div>
  <div class="page-no">2 / 32</div>
</section>

<!-- … 逐页 … -->

<!-- ======================================================== 32 参考文献 -->
<section class="slide" id="s32">
  <div class="slide__head">
    <h2 class="slide__title">参考文献</h2>
    <div class="slide__rule"></div>
  </div>
  <div class="slide__body" style="padding-top:26px">
    <div class="refs">
      <div class="refs__item">《计算机组成与设计：硬件 / 软件接口》第 5 版（上）
        <span class="refs__en">コンピュータの構成と設計 上 第5版</span></div>
      <div class="refs__item">David A. Patterson、John L. Hennessy 著，成田光彰 译，日经 BP 社</div>
      <div class="refs__item">山下茂《计算机组成原理 1》课程讲义
        <span class="refs__en">山下茂「計算機構成論１」講義資料</span></div>
    </div>
    <div class="callout mt24" style="font-size:18px">
      <span class="callout__tag">本讲小结</span>
      <span>…（3–6 句，用 <span class="kw">关键词</span> 高亮，总结本讲主线）…</span>
    </div>
  </div>
  <div class="page-no">32 / 32</div>
</section>

</div>
</body>
</html>
```

**约定细节**

- 每张幻灯片前一行加分隔注释：
  `<!-- ======================================================== {页码} {中文小标题} -->`（`=` 数量与已有 deck 保持一致）。
- `id` 依次为 `s01`、`s02`…（两位数，与页码相同）。
- 第 1 页封面：`cover__badge` 第一行固定写**原讲义日文标题**（含第N回与副标题），第二行「中文翻译版」。
  封面页脚用 `<div class="page-no" style="color:#8fb0cc">1 / N</div>`（深色底需要浅色字）。
- 讲义内容页（`講義内容`）用 `.toc` 组件，每个中文条目后随行标注日文原文（`.toc__item--jp`），
  当前小节用 `.toc__item--active`。已有 deck 的第 2 页就是范例，**照抄结构**。
- 最后一页是参考文献 + 「本讲小结」callout（已有 deck 都这么做）。
- 所有 `<`、`>`、`&` 在文本与代码块中必须转义为 `&lt;`、`&gt;`、`&amp;`；
  `$s0`、`$sp` 等美元符号**不需要**转义。反引号不必用。
- 代码统一放在 `<pre class="code">` 里，注释用 `<span class="cmt"># …</span>`。

---

## 4. 可用组件清单（`assets/slides.css` 已全部提供，**不要自造类名**）

### 页面骨架
`.slide` `.slide__head` `.slide__title` `.slide__rule` `.slide__body` `.slide__foot` `.page-no`
`.cover` `.cover__veil` `.cover__inner` `.cover__kicker` `.cover__title` `.cover__title--long` `.cover__sub` `.cover__bar` `.cover__meta` `.cover__badge`

### 文字与强调
`.kw`（主色加粗）`.kw-blue` `.kw-teal` `.mono` `.note` `.red` `.center` `.nowrap`
`.bullets` / `.bullets--sub` / `.bullets--deep` / `.bullets--compact`（`<ul><li>`）
`.two-col-list`（两栏列表）

### 代码
`pre.code`、尺寸 `--sm`（15px）`--xs`（13.5px）`--tight`（12.6px）`--walk`（16px 逐步高亮）
`--vh`（12.5px 逐步高亮，超密）`--plain`（白底）`--wrap`（长行折行）`--ans`（**答案专用**，蓝色左标）
`.code-label`（代码块上方小标题）、`.cmt` `.hi` `.hi-blue` `.blank`
逐行高亮：`<span class="ln">`／`<span class="ln ln--on">`／`ln--new`／`ln--ell`

### 表格
`table.tbl`、密度 `--xs`（13px）`--sm`（14px）；`<tr class="alt">` 隔行浅底；
单元格 `td.c`（等宽居中，用于寄存器/编号）、`td.num`、`td.red`。
**表头 `<thead><tr><th style="width:…">` 要给宽度**，别让列宽乱飘。

### 提示框
`.callout`（琥珀）`.callout--blue` `.callout--red` `.callout--slim`（7px 紧凑）
+ `<span class="callout__tag">标签</span>`
`.panel` `.panel--tight` `.panel__title` `.panel__title--red` / `--amber` / `--teal`

### 练习 / 答案（**本次新增，务必使用**）
- 提问块：`<div class="qbox"><span class="qbox__tag">问题</span>…</div>`
- 解答块：`<div class="abox"><span class="abox__tag">答案</span>…</div>`，
  变体 `.abox--teal` `.abox--red`、紧凑 `.abox--slim`
- 答案里的指令序列用 `<pre class="code code--ans">`
- 填空题空格 `<span class="slot">…</span>`，小题编号 `<span class="qno">(1)</span>`

### 图形组件（重绘原图时优先用这些）
- 存储器版图：`.mem` `.mem__addr` `.mem__pt` `.mem__pt-label` `.mem__pt-arrow` `.mem__pt-val` `.mem__stack` `.mem__seg` `.mem__seg-name` `.mem__seg-en` `.mem__seg--arrow` `.mem__seg--hi` `.mem__note`
- 指令格式：`.iformat` `.iformat__row` `.iformat__cell` `.ibox` `.ibox__tag`
- 流程/时序：`.pipe` `.pipe__col` `.pipe__node` `.pipe__node--oval` `.pipe__arrow` `.pipe__merge`
- 步骤表：`.steps` `.steps__item` `.steps__no` `.steps__item--on` `.steps--tight`
- 逻辑门：`.gates` `.gate` `.gate__sym`（内含 `<svg>`）`.gate__name` `.gate__cn`
- 过程帧：`.frame` `.frame__head` `.frame__row` `.frame__row--on` `.frame__off` `.frame__slot` `.frame__reg`
- 寄存器阵列：`.regmap` `.regmap__title` `.regmap__grid` `.regmap__cell`
- 晶体管剖面：`.xsec*` 系列（第 2 回用过）
- 练习问答两栏：`.quiz` `.quiz__col` `.quiz__item` `.quiz__key` `.quiz__opt`

### 布局与微调
`.row`（flex，gap 22px）`.row--top` `.row--center` `.col` `.grow` `.shrink0`
`.duo` `.three` `.tbl-stack`
外边距 `.mt8 .mt10 .mt12 .mt16 .mt20 .mt24`、`.center`
行内调整用 `style="width:310px"`、`style="font-size:19px"`、`style="padding-top:14px"`（**已有 deck 就这么干**）。

---

## 5. 高度预算（防溢出，**这一步做对了才能一次通过**）

`720px` 画布减去标题区（约 100px）、`.slide__body` 上内边距 20px、页码区约 30px，
**正文可用高度约 560px**。下表是单行/单项的近似高度（经验值，用于估算）：

| 元素 | 单行/单项高度 |
|---|---|
| `table.tbl` 常规（15px） | 约 30px 一行（含 padding 与边框） |
| `table.tbl--sm`（14px） | 约 27px | 
| `table.tbl--xs`（13px） | 约 21px |
| `.bullets--compact li`（21px） | 约 30px + 8px 间距 |
| `.bullets li`（25px） | 约 36px + 14px 间距 |
| `.callout`（19px，两行） | 约 24 + 2×28 = 80px |
| `.abox` / `.qbox`（18px，两行） | 约 20 + 2×28 = 76px |
| `pre.code`（17px） | 每行约 26px，另加 padding 24px |
| `pre.code--sm`（15px） | 每行约 21px |
| `pre.code--tight`（12.6px） | 每行约 16px，另加 padding 8px |
| `pre.code--walk` / `--vh` | 每行约 25px / 17px |
| `.steps__item`（18.5px） | 约 27px + 6px 间距 |
| `.toc__lead` + N 个 `.toc__item` | 约 34 + N×(31 + 6) px |

**做法：** 内容多了就（按优先级）①换更小的代码字号 ②拆成 `.row` 两栏 ③表格换 `--sm/--xs`
④压 `.mt*` 外边距。**绝不允许内容被 `overflow:hidden` 静默裁掉**。

写完后**必须**跑：

```powershell
cd D:\trans-for-CS
python .tools\check_overflow.py "中文翻译\計算機構成論第10回.html"
```

输出里每页都必须是 `ok`；出现 `OVERFLOW` 就回去调版面，直到全部 `ok`。
另外自查页数：

```powershell
python -c "import re,io; h=io.open(r'中文翻译\計算機構成論第10回.html',encoding='utf-8').read(); print(len(re.findall(r'<section class=\"slide', h)))"
```

结果必须等于该 PDF 的页数。

---

## 6. 翻译规范

### 6.1 学术性与用词

- 采用**计算机体系结构学科的标准中文术语**（参照 `.tools/GLOSSARY.md`），不要用口语化说法。
  例：`桁あふれ` → **溢出**（不用"超位"）；`仮数部` → **尾数部分**；`丸め` → **舍入**；
  `スループット` → **吞吐量**；`応答時間` → **响应时间**；`分岐予測` → **分支预测**。
- 术语**首次出现处随行标注日文原文**，写法与已有 deck 一致：
  `<span class="kw">溢出</span>（日文：桁あふれ / overflow）`，之后只用中文。
- 已有 `GLOSSARY.md` 里给出的译名**不得擅自改动**（跨讲次一致性优先于个人偏好）。
- 度量与数字保持原文数值，**不要换算**；带上原文的下标表示法要写清楚（`15₁₀`、`00001111₂`、
  `2⁻¹` 等）。原文用 `1510` 这种"十进制下标被压平"的写法时，按数学含义还原为 `15₁₀`。
- 二进制串保持原样逐字符照抄，**不要加分隔空格**，除非原文本身就分组（如 `0000 0000 …`）。
  8 位以上建议用 `.mono` 并按原文 4 位/8 位分组以便阅读——**但分组方式必须与原文一致**。

### 6.2 不译的内容

- **指令名**（`add` `addi` `sub` `lw` `sw` `beq` `bne` `jal` `jr` `sll` `sra` `slt` `lui` …）、
  **寄存器名**（`$s0` `$sp` `$fp` `$ra` `$a0` `$v0` `$zero` `PC` `EPC` …）、
  **字段名**（`op` `rs` `rt` `rd` `shamt` `funct` `immediate`）、
  **C / MIPS 代码**、**函数名变量名**：一律保持原文。
- 参考文献（作者名、书名、出版社）保留日文原名，中文书名可加在 `.refs__en` 位置。

### 6.3 增补说明的边界

项目允许**增补原文省略的推理**，但只允许以
`<div class="callout callout--blue"><span class="callout__tag">说明</span>…</div>`
或 `.panel` + `.panel__title--red`（标题写「为什么不行？」之类的追问）形式出现，且：

- **不得改变原文语义**，不得添加原文没有的数据/结论；
- 增补内容要能明确区分于原文（用「说明」「补充」「为什么…」这类标签）；
- **原文已有的答案必须是"答案"框**（`.abox`），不要写成增补。

### 6.4 原讲义图的重绘

- 原讲义页面里的**矢量图**（逻辑门电路、1 位全加器、ALU、加减法器、溢出判定电路、
  乘法/除法器框图、数据通路、流水线时空图等）**必须在 HTML 里重绘为中文图**，
  不允许直接贴日文原图。重绘要求：**拓扑结构与原图一致**（元件、连线方向、进位方向、
  标注位置），配色沿用 `slides.css` 既有变量（`#10314f` 描边、`#fdfbe9` / `#e4f0f7` 填充等）。
  优先用现成的 `.gates` / `.iformat` / `.pipe` / `.frame` / `.mem` 组件 + 内联 `<svg>`。
- 讲义的**笔算排版**（如二进制乘法/除法的竖式）用等宽字体 + 对齐空格的 `<pre class="code code--plain">`
  重建，保持与原图的位数对齐；竖式里的横线用 `─────` 之类字符画。
- 若某页确实是**位图照片/截图**（如芯片显微照片、实拍图），把它复制到 `中文翻译/assets/`
  （命名 `ch{N}-p{NN}-{英文描述}.png`）后用 `<img class="figure figure--bordered" src="assets/…" alt="…">` 引用，
  并在图下方用 `.figure-cap` 写中文图注。

### 6.5 练习与答案页的处理（**本次重点**）

- 页面是「確認問題」/「練習」时：
  - 题目用 `.qbox`（标签「问题」），**逐字完整译出**，包括所有小问 `(1)(2)(3)`。
  - 题目下面的答案用 `.abox`（标签「答案」），**逐字完整译出**；答案里的指令序列用
    `<pre class="code code--ans">`，用 `ln--on` 标出与题目对应的关键行。
  - 原讲义把"题目页"和"答案页"分作两页（常见）时，**译文也保持两页**，页码各就各位。
    答案页要**重述题目要点**（原文就是这样做的），不要只放一个裸答案。
- 页面是**空白答案页**（原 PDF 只印了"確認問題"、没有答案，如第 10 回 p31）时：
  照译标题与题面，正文放
  `<div class="abox abox--slim"><span class="abox__tag">答案</span>原讲义此页未给出解答（問題回答無し ver.）。</div>`
  并在下方留出空白面板 `.panel`（标题「作答区」）——**保持与原文同页数**。
- 页面上有**红字**（原讲义用来强调/标出答案关键处）→ 译文中该处用
  `<span class="kw">…</span>`（主色）或 `<span class="red">…</span>` 高亮，位置一一对应。

---

## 7. 推荐工作流（**分次写文件，别想一次吐完**）

一个 deck 有 24–34 页，一次生成容易截断或漏页。**按下面节奏做**：

1. 先看素材：`PAGE_MAP.md`（仅 5~8 回）→ 该讲所有页面 PNG → 文本稿 → 一个同类既有 deck。
2. `write` 写出**骨架 + 封面 + 第 2 页 + 第 3~8 页**，并在末尾放占位注释：

```html
<!-- ===== APPEND HERE ===== -->
</div>
</body>
</html>
```

3. 之后每次 `edit`，把 `<!-- ===== APPEND HERE ===== -->` 替换为「接下来的 6~8 页 + 同一个占位注释」，
   如此推进到最后一页；最后一次替换为「最后几页 + `</div>` 收尾」并删掉占位注释。
4. 全部写完后：跑 `check_overflow.py` 与页数自查 → 修到全 `ok`。
5. 自查下表，逐条打勾后再报告完成。

### 完成前自查表

- [ ] 页数 == 原 PDF 页数；`page-no` 分母等于总页数、分子与页序一致
- [ ] 每页内容与原文第 k 页**逐条对齐**（含小注、脚注、页脚"※…"一类文字）
- [ ] 所有矢量图已重绘为中文，无残留日文图；图上文字为中文
- [ ] 术语全部查过 `GLOSSARY.md`，首次出现处标了日文原文
- [ ] 指令名/寄存器名/代码保持原文不译
- [ ] 练习页有 `.qbox` 问题 + `.abox` 答案；答案逐字完整
- [ ] `check_overflow.py` 输出**全部 `ok`**
- [ ] 文件开头 `<!DOCTYPE html>`、`<html lang="zh-CN">`；结尾 `</html>`；无 `<script>`、无外链
- [ ] 只引用 `assets/slides.css` 与（如需要）`assets/` 下已存在的图片

---

## 8. 报告格式（子任务结束时按此汇报）

```
deck: 中文翻译/計算機構成論第10回.html
slides: 32 / PDF 32 页  ✅1:1
overflow: 32/32 ok
重绘图: p21 AND/OR 门电路、p22 全一/半加器、p23 ALU、p24 减法器（均为内联 SVG/CSS 重绘）
新增图片: 无
存疑处: p26 「結果がすべてではない」原意把握为「不能只看结果本身」——请复核
```
