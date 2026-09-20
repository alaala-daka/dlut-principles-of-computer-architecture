<!-- page 18 -->

<!--
Notation notes (not part of the exam):
- Page region: this is a printed test-paper photo, left side of the sheet. The left edge of the
  sheet is slightly cropped/shadowed but no printed exam text is lost. The bottom edge cuts off
  just below the (25) option line; the next line of the paper continues on the following page.
- Non-exam elements present and deliberately omitted: "Scanned with CamScanner" watermark
  (bottom-right corner), photo glare/moire and page-edge shadow, a mouse cursor glyph in the
  middle of the page.
- Hand-written answer marks deliberately omitted: red/purple pen circles drawn around the printed
  choice labels "(A)" in (24) and "(D)" in (25). These are a student's answers, not exam content.
- Printed underlines: in the assembly block the labels "Else" (in the beq instruction) and "Exit"
  (in the j instruction) are underlined in print because questions (24)/(25) refer to them as
  下線部. The underlines are transcribed as plain text.
- The 得点 box at the top-left is printed as a two-cell box with 得点 written vertically in the
  left cell; rendered here as a one-row table.
- Register names in the preamble and in the code are $s0-$s4 (letter "s", not "a").
- No [[UNREADABLE]] tokens were needed on this page.
-->

| 得点 |  |
| --- | --- |

五、以下はC言語で記述されたステートメントと、それを変換した
アセンブリコードである。これについて、以下の各問にA〜Dの記号
で答えよ。ただし、変数f,g,h,i,jはそれぞれレジスタ$s0, $s1,
$s2, $s3, $s4に対応しているものとする。

ソースコード

```c
if(i!=j)
  f = g+h;
else
  f = g-h;
```

アセンブリコード

```
        beq $s3, $s4, Else
        add $s0, $s1, $s2
        j   Exit
Else:   sub $s0, $s1, $s2
Exit:
```

(24) 各命令を2進数に直したとき、下線部 Else が対応するフィールドの値を10進
数で表現したものはどれか。
(A)2 (B)3 (C)8 (D)12

(25) 各命令を2進数に直したとき、下線部 Exit が対応するフィールドの値を10進
数で表現したものはどれか。ただし、先頭の beq 命令はメモリアドレス1024番地か
ら始まっているものとする。
(A)1028 (B)1036 (C)1040 (D)260

<!-- end page 18 -->
