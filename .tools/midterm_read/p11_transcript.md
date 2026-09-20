<!-- page 11 -->

<!--
Notation notes (not part of the exam):
- Convention used below: [    ] denotes a printed empty answer box (空欄) drawn in the paper; it is not text.
- This page repeats section 五 in full (stem, source code, assembly code and options (30)-(32)); the code
  boxes that are only partially visible on page 10 are completely visible here.
- Right-hand side of the page: a hand-drawn diagram (an address table with x, x+4, x+8, x+12 →, the labels
  f[0] f[1] f[2] f[3] … f[i] and a handwritten note "xもアドレス") is the student's own working, not part of
  the printed exam, and is ignored.
- Handwritten answer marks ignored (student's answers, not exam text): purple pen circles around (D) in (30),
  (C) in (31), (A) in (32).
- Non-exam elements present: PDF-viewer window frame, title bar (ドキュメントビューアー,
  10月27日 (水) 15:45, 386.08%), mouse cursor, "Scanned with CamScanner" watermark.
- Bottom of the page: the 得点 box for section 六 is cut off by the bottom edge (only the upper character 得
  of its vertical label 得点 is visible) and the heading of section 六 is printed; the questions of 六 continue
  below the captured area. No [[UNREADABLE]] token is used because nothing printed here is illegible.
-->

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
sub   $t0,   $s1,   $t0
sll   $t1,   $s2,   (31)
add   $t1,   $s0,   $t1
sw    $t0,   (32)   ($t1)
```

(30)　(A) 0　(B) 3　(C) 4　(D) 12
(31)　(A) 0　(B) 1　(C) 2　(D) 4
(32)　(A) 0　(B) 3　(C) 4　(D) 12

| 得点 |  |
| --- | --- |

六、以下の問いの答えとして正しいものを A〜D の記号で答えよ。

<!-- end page 11 -->
