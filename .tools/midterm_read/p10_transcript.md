<!-- page 10 -->

<!--
Notation notes (not part of the exam):
- Convention used below: [    ] denotes a printed empty answer box (空欄) drawn in the paper; it is not text.
- Bottom of the page: the two code boxes of section 五 (ソースコード / アセンブリコード) are cut off by the
  bottom edge of the captured area — only the top sliver of each box is visible. The visible fragments are
  reproduced in the code blocks below; the remainder of those lines is off-frame, not illegible.
  No [[UNREADABLE]] token is used because the cut text is simply outside the captured area.
- Handwritten answer marks ignored (student's answers, not exam text): red/purple pen circles around (B) in
  (26), (D) in (27), (C) in (28), (C) in (29); faint pen marks near (26)-(29).
- Non-exam elements present: PDF-viewer window frame, title bar (ドキュメントビューアー, 10月27日 (水) 15:43,
  386.08%), mouse cursor, "Scanned with CamScanner" watermark.
- 得点 boxes: one box for section 四 and one box for section 五 are printed on this page.
-->

| 得点 |  |
| --- | --- |

四、それぞれの空欄にあてはまる数値や語句をA〜Dから選べ。

(26) 1 [    ] = 1000KB
(A) TB　(B) MB　(C) GB　(D) PB

(27) 1 [    ] = 1000TB
(A) EB　(B) YB　(C) GB　(D) PB

(28) 1KiB = [    ]バイト
(A) 8　(B) 1000　(C) 1024　(D) 1000000

(29) 1000[    ]秒 = 1マイクロ秒
(A) ミリ　(B) デカ　(C) ナノ　(D) ピコ

| 得点 |  |
| --- | --- |

五、以下は C 言語で記述されたステートメントと、それを変換した
アセンブリコードである。アセンブリコード中の各空欄にあてはまる
数値をそれぞれ A〜D から選べ。ただし、変数 f , g , i はそれぞれレ
ジスタ $s0, $s1, $s2 に対応しているものとする。また、配列 f の各要素はいずれ
も int 型(各要素 4 バイト相当)と考える。

ソースコード

```
f[i] = g - f[3];
```

アセンブリコード

```
lw    $t0,   (30)   ($s0)
```

<!-- end page 10 -->
