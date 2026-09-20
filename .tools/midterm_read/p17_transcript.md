<!-- page 17 -->

<!--
Notation notes (not part of the exam):
- 得点 box: one is printed at the top-left, beside the 四、heading; reproduced above the heading as an empty two-cell table (printed label 得点 縦書き, score cell blank).
- Hand-written student answer marks ignored and omitted: circles/ovals around (C) in the (21) choices, (C) in the (22) choices and (A) in the (23) choices; also faint oval marks on the option digits/letters.
- The printed blank markers inside the assembly code — a small rectangle containing (21), a small rectangle containing (22), and a small rectangle containing (23) — are rendered inline as (21), (22)($t0) and (23) inside the fenced code block, as instructed.
- The word 空欄 in the 四、heading ("アセンブリコード中の各空欄にあてはまる") is printed very small in this photo; it is read as 空欄 (standard wording of this paper) but the exact glyph is at the limit of legibility.
- Bottom-right corner carries a "Scanned with CamScanner" watermark; omitted. No Zoom UI, no glare, no fingers, no page-edge cut-off of printed text on this page.
- No [[UNREADABLE]] tokens: every printed character on this page was legible.
-->

| 得点 |  |
| --- | --- |
|  |  |

四、以下は C 言語で記述されたステートメントと、それを変換した
アセンブリコードである。アセンブリコード中の各空欄にあてはまる
ものを選び、A～D の記号で答えよ。ただし、変数 f,g,h,i はそれ
ぞれレジスタ$a0, $a1, $a2, $a3 に対応しているものとする。また、配列 h の各
要素はいずれも int 型(各要素 4 バイト相当)と考える。

ソースコード

```c
f = g + h[i];
```

アセンブリコード

```
(21)	$t0, $a3, 2
add	$t0, $t0, $a2
lw	$t1, (22)($t0)
add	(23), $s1, $t1
```

(21)の選択肢：(A)add　(B)sub　(C)sll　(D)lw
(22)の選択肢：(A)$s2　(B)$s3　(C)0　(D)2
(23)の選択肢：(A)$s0　(B)$s1　(C)$s2　(D)$s3

<!-- end page 17 -->
