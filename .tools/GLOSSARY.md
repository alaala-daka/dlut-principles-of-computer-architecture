# 术语表（日中对照）· 新增讲义用

> **硬性要求：** 本表给出的译名**不得擅自改动**。跨讲次一致性优先于个人偏好。
> 表里没有的词，按计算机体系结构学科的标准中文译名处理，并在该 deck 里**首次出现处随行标注日文原文**。
> 写法示例：`<span class="kw">溢出</span>（日文：桁あふれ / overflow）`。

---

## 0. 讲义通用词（每讲都会出现）

| 日语原文 | 中文译名 | 英文 | 备注 |
|---|---|---|---|
| 講義内容 | 讲义内容 | — | 目录页标题 |
| 確認問題 | 确认问题 | — | 练习页标题 |
| 参考文献 | 参考文献 | references | 末页标题 |
| 復習 | 复习 | review | 标题后缀「… 復習」→「…（复习）」 |
| 例) / (例) | 例） / （例） | — | |
| 問 / Q. | 问 / Q. | — | |
| 解答 / 答え | 解答 / 答案 | answer | 用 `.abox` 承载 |
| 正しい | 正确 | — | 计算结果标注 |
| 無視 | 忽略 | ignore | 如"最高位的进位忽略" |

## 1. 算術演算の実行（第 10–12 回）

### 1.1 基本运算

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| 算術演算 | 算术运算 | arithmetic operation |
| 論理演算 | 逻辑运算 | logic operation |
| 加算 | 加法 | addition |
| 減算 | 减法 | subtraction |
| 乗算 | 乘法 | multiplication |
| 除算 | 除法 | division |
| 加減算 | 加减运算 | addition/subtraction |
| 加算器 | 加法器 | adder |
| 減算器 | 减法器 | subtractor |
| 半加算器 | 半加器 | half adder |
| 全加算器（下位からの繰り上げあり） | 全加器（含来自低位的进位） | full adder |
| 算術論理演算ユニット / ALU | 算术逻辑单元 | arithmetic logic unit |
| 算術演算ユニット | 算术运算单元 | arithmetic unit |
| 制御信号 | 控制信号 | control signal |
| マルチプレクサ（セレクタ）/ MUX | 多路选择器（选择器） | multiplexer / selector |
| XOR ゲート（排他的論理和） | 异或门（逻辑异或） | XOR gate |
| AND 演算 / OR 演算 | 与运算 / 或运算 | AND / OR |
| ゲート | 门（电路） | gate |

### 1.2 数制与符号

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| 2 進数 / 10 進数 / 16 進数 | 二进制数 / 十进制数 / 十六进制数 | binary / decimal / hexadecimal |
| 符号なし | 无符号 | unsigned |
| 符号付き | 有符号 | signed |
| 符号ビット | 符号位 | sign bit |
| 1 の補数 | 反码（一补数） | one's complement |
| 2 の補数 | 补码（二补数） | two's complement |
| 正数 / 負数 / 非負 | 正数 / 负数 / 非负 | positive / negative / non-negative |
| 最上位ビット / MSB | 最高有效位 | most significant bit |
| 最下位ビット / LSB | 最低有效位 | least significant bit |
| 上位ビット / 下位ビット | 高位 / 低位 | upper / lower bits |
| 桁数 | 位数 | number of digits |
| ビット数 | 位宽（比特数） | bit width |

### 1.3 溢出与进位

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| 桁あふれ / オーバーフロー | 溢出 | overflow |
| アンダーフロー | 下溢 | underflow |
| オーバーフロー判定 | 溢出判定 | overflow detection |
| オーバーフロー例外 | 溢出异常 | overflow exception |
| 繰り上がり / 繰り上げ | 进位 | carry |
| 最上位への繰り上がり | 向最高位的进位 | carry into the MSB |
| 最上位からの繰り上がり | 从最高位输出的进位 | carry out of the MSB |
| 例外 | 异常 | exception |
| 例外プログラムカウンタ（EPC） | 异常程序计数器 | exception program counter |
| 状況依存 | 视情况而定 | situation-dependent |

### 1.4 移位与扩展

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| シフト演算 | 移位运算 | shift operation |
| 論理シフト | 逻辑移位 | logical shift |
| 算術シフト | 算术移位 | arithmetic shift |
| 左シフト / 右シフト | 左移 / 右移 | left / right shift |
| シフト量 | 移位量 | shift amount |
| 符号拡張 | 符号扩展 | sign extension |
| 切り捨て | 截断（舍去） | truncation |
| 小数点以下切り捨て | 舍去小数部分 | truncate the fractional part |
| 2 倍 / 1/2 倍 | 2 倍 / 1/2 倍 | — |

### 1.5 乘法与除法（第 11 回）

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| 筆算 | 竖式笔算 | longhand / paper-and-pencil |
| 被乗数 | 被乘数 | multiplicand |
| 乗数 | 乘数 | multiplier |
| 積 | 积 | product |
| 部分積 | 部分积 | partial product |
| 被乗数加算 | 加被乘数 | add multiplicand |
| シフト操作 | 移位操作 | shift operation |
| 積レジスタ | 积寄存器 | product register |
| 乗算回路（第 1 版／第 2 版／第 3 版） | 乘法器电路（第 1 版／第 2 版／第 3 版） | multiplier circuit |
| 被除数 | 被除数 | dividend |
| 除数 | 除数 | divisor |
| 商 | 商 | quotient |
| 剰余 | 余数 | remainder |
| 除算回路（第 1 版／第 2 版） | 除法器电路（第 1 版／第 2 版） | divider circuit |
| 余り | 余 | remainder（口语式写法，译作「余」） |
| Hi, Lo レジスタ | Hi、Lo 寄存器 | Hi / Lo registers |
| 同じハードウェアを利用可能 | 可以复用同一套硬件 | — |

### 1.6 小数与浮点数（第 12 回）

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| 小数 | 小数 | fraction / decimal fraction |
| 小数第 1 位 | 小数点后第 1 位 | first fractional digit |
| 固定小数点形式 | 定点格式 | fixed-point format |
| 浮動小数点（形式） | 浮点数（格式） | floating point |
| 科学記数法 | 科学记数法 | scientific notation |
| 仮数（部） | 尾数（部分） | mantissa / significand |
| 指数（部） | 指数（部分）／阶码 | exponent |
| 基数 | 基数 | radix / base |
| ゲタ（バイアス） | 偏置值（移码） | bias |
| 下駄を履かせる | 加上偏置值 | apply a bias |
| 正規化 | 规格化 | normalization |
| 非正規（化数） | 非规格化数（次正规数） | denormalized number |
| 単精度（32bit） | 单精度（32 位） | single precision |
| 倍精度（64bit） | 双精度（64 位） | double precision |
| 非数（NaN） | 非数（NaN） | Not a Number |
| ±∞ | ±∞ | — |
| 特別な値 | 特殊值 | special values |
| 小数点の位置合わせ | 小数点对齐 | alignment of radix points |
| 仮数の有効桁合わせ | 尾数有效位对齐 | significand alignment |
| 大きい方の指数 | 较大的指数 | larger exponent |
| 指数の差 | 指数之差 | exponent difference |
| 表現可能な数値の幅 | 可表示数的范围 | representable range |
| 刻み幅 | 步长（间隔） | granularity / step size |

### 1.7 误差（第 12 回）

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| 誤差 | 误差 | error |
| 丸め | 舍入 | rounding |
| 丸める | 舍入 | round |
| 四捨五入 | 四舍五入 | round half up |
| 切り上げ | 进位取整（向上舍入） | round up |
| 切り捨て | 截断（向下舍入） | round down / truncate |
| 丸め誤差 | 舍入误差 | rounding error |
| 桁落ち | 有效位丢失（相消） | cancellation |
| 情報落ち | 信息丢失（大数吃小数） | loss of information |
| 有効桁（数） | 有效位（数） | significant digits |
| 計算途中 | 计算过程中 | intermediate steps |
| 余分に保持する | 额外保留 | keep extra digits |

## 2. 性能評価（第 13 回）

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| 性能評価 | 性能评价 | performance evaluation |
| 性能 | 性能 | performance |
| スループット | 吞吐量 | throughput |
| 応答時間 | 响应时间 | response time |
| 実行時間 | 执行时间 | execution time |
| 経過時間 | 经过时间（墙钟时间） | elapsed time |
| CPU 実行時間 | CPU 执行时间 | CPU time |
| ユーザ CPU 時間 | 用户 CPU 时间 | user CPU time |
| システム CPU 時間 | 系统 CPU 时间 | system CPU time |
| オーバヘッド | 开销 | overhead |
| ディスク・アクセス | 磁盘访问 | disk access |
| メモリ・アクセス | 存储器访问 | memory access |
| 入出力動作 | 输入输出操作 | I/O operation |
| クロック・サイクル（数） | 时钟周期（数） | clock cycle |
| クロック・サイクル時間 | 时钟周期时间 | clock cycle time |
| クロック周波数 | 时钟频率 | clock rate / frequency |
| CPI (clock cycles per instruction) | 每指令时钟周期数 | CPI |
| 平均 CPI | 平均 CPI | average CPI |
| 命令あたりの平均クロック・サイクル数 | 每指令平均时钟周期数 | — |
| 命令クラス | 指令类别 | instruction class |
| 出現率 | 出现频率 | frequency of occurrence |
| 命令数 | 指令数 | instruction count |
| 実行命令数 | 执行的指令数 | number of executed instructions |
| MIPS (million instructions per second) | 每秒百万条指令 | MIPS |
| 長所 / 短所 | 优点 / 缺点 | advantage / disadvantage |
| ベンチマーク | 基准测试程序 | benchmark |
| プログラム群 | 程序集 | suite of programs |
| SPEC (Standard Performance Evaluation Corporation) | SPEC（标准性能评价机构） | SPEC |
| SPEC ratio | SPEC 比值 | SPEC ratio |
| 基準プロセッサ | 基准处理器 | reference processor |
| 幾何平均 | 几何平均 | geometric mean |
| アムダールの法則 | 阿姆达尔定律 | Amdahl's law |
| ムーアの法則 | 摩尔定律 | Moore's law |
| 改善度 | 改进倍数（加速比） | speedup |
| 改善の影響を受ける／受けない | 受改进影响／不受改进影响 | — |
| 電力消費 | 功耗 | power consumption |
| 面積あたりのトランジスタ数 | 单位面积晶体管数 | transistors per unit area |

## 3. パイプライン処理（第 14 回）

### 3.1 概説与数据通路

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| パイプライン処理 | 流水线处理 | pipelining |
| 概説 | 概述 | outline |
| データパス | 数据通路 | datapath |
| 命令の実行段階 | 指令执行阶段 | instruction execution stage |
| フェッチする | 取指（取出） | fetch |
| 命令フェッチ | 取指令 | instruction fetch |
| デコード | 译码 | decode |
| 命令デコードとレジスタフェッチ | 指令译码与取寄存器 | instruction decode & register fetch |
| 命令実行／アドレス生成 | 指令执行／地址生成 | execute / address generation |
| データメモリアクセス | 数据存储器访问 | data memory access |
| 書き込み | 写回 | write back |
| パイプライン・ステージ | 流水线级（阶段） | pipeline stage |
| パイプライン・レジスタ | 流水线寄存器 | pipeline register |
| レイテンシ | 延迟 | latency |
| 命令を取り出す | 取出指令 | fetch an instruction |
| 命令メモリ | 指令存储器 | instruction memory |
| データメモリ | 数据存储器 | data memory |
| レジスタ・ファイル（32 個の汎用レジスタ） | 寄存器堆（32 个通用寄存器） | register file |
| アドレス生成 | 地址生成 | address generation |

### 3.2 逻辑设计与时钟

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| 論理設計とクロック方式 | 逻辑设计与时钟方式 | — |
| 組み合わせ論理要素 | 组合逻辑元件 | combinational logic element |
| 状態論理要素 | 状态逻辑元件 | state (sequential) logic element |
| 内部状態 | 内部状态 | internal state |
| クロック・パルス | 时钟脉冲 | clock pulse |
| エッジ・トリガ・クロック方式 | 边沿触发时钟方式 | edge-triggered clocking |
| 高低切り替わり | 高低电平切换 | transition (edge) |
| 状態を進める | 推进状态 | advance the state |

### 3.3 流水线冒险

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| ハザード | 冒险 | hazard |
| データ・ハザード | 数据冒险 | data hazard |
| 構造ハザード | 结构冒险 | structural hazard |
| 制御ハザード | 控制冒险 | control hazard |
| 分岐ハザード | 分支冒险 | branch hazard |
| フォワーディング（バイパシング） | 前递（旁路） | forwarding / bypassing |
| パイプライン・ストール | 流水线停顿 | pipeline stall |
| 行き詰まる | 停滞（阻塞） | stall |
| コードの並べ替え | 代码重排 | code reordering |
| コードの実行順を変える | 改变代码执行顺序 | — |
| NOP 命令（何もしない命令） | NOP 指令（空操作指令） | NOP |
| 予測 | 预测 | prediction |
| 分岐の結果を予測 | 预测分支结果 | predict branch outcome |
| 条件不成立 | 条件不成立 | branch not taken |
| 競合する | 发生冲突（争用） | conflict |
| 所定のクロック・サイクル内 | 在规定的时钟周期内 | within the prescribed clock cycles |

### 3.4 进一步发展

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| さらなる学習 | 进一步学习 | further study |
| キャッシュの利用 | 高速缓存的利用 | cache |
| 記憶階層 | 存储层次 | memory hierarchy |
| 仮想記憶（2 次記憶をキャッシュとして使う） | 虚拟存储（把二级存储当作高速缓存使用） | virtual memory |
| 並列処理 | 并行处理 | parallel processing |
| スーパースカラ | 超标量 | superscalar |
| ハードウェア・マルチスレッディング | 硬件多线程 | hardware multithreading |

## 4. 既有讲义沿用术语（第 1–8 回，**沿用不改**）

| 日语原文 | 中文译名 | 英文 |
|---|---|---|
| 命令形式 | 指令格式 | instruction format |
| R 形式 / I 形式 / J 形式 | R 格式 / I 格式 / J 格式 | R / I / J format |
| 機械語 | 机器语言 | machine language |
| 命令操作コード（opcode / オペコード） | 指令操作码 | opcode |
| 即値オペランド / 即値 | 立即数操作数 / 立即数 | immediate |
| オペランド | 操作数 | operand |
| レジスタ | 寄存器 | register |
| 配列 | 数组 | array |
| 分岐処理 | 分支处理 | branching |
| 無条件分岐 | 无条件转移 | unconditional jump |
| アドレシング・モード | 寻址模式 | addressing mode |
| レジスタ・アドレシング | 寄存器寻址 | register addressing |
| 即値アドレシング | 立即数寻址 | immediate addressing |
| ベース相対アドレシング | 基址相对寻址 | base-relative addressing |
| PC 相対アドレシング | PC 相对寻址 | PC-relative addressing |
| 擬似直接アドレシング | 伪直接寻址 | pseudo-direct addressing |
| 大小比較命令 | 大小比较指令 | set-less-than |
| 手続き | 过程 | procedure |
| スタック | 栈 | stack |
| スタックポインタ | 栈指针 | stack pointer |
| 手続きフレーム | 过程帧 | procedure frame |
| フレームポインタ | 帧指针 | frame pointer |
| 退避レジスタ | 被调用者保存寄存器（退避寄存器） | callee-saved register |
| 一時レジスタ | 临时寄存器 | temporary register |
| 変数 | 变量 | variable |
| 動的データ | 动态数据 | dynamic data |
| 静的データ | 静态数据 | static data |
| コンパイラ | 编译器 | compiler |
| アセンブラ | 汇编器 | assembler |
| リンカ | 链接器 | linker |
| ローダ | 加载器 | loader |
| オブジェクトファイル | 目标文件 | object file |
| ソースコード | 源代码 | source code |
| ヘッダー | 头部 | header |
| データ・セグメント | 数据段 | data segment |
| テキスト・セグメント | 代码段 | text segment |
| 桁あふれ | 溢出 | overflow |

## 5. 寄存器与指令名（**一律不译，保持原文**）

- 寄存器：`$zero` `$at` `$v0` `$v1` `$a0`–`$a3` `$t0`–`$t9` `$s0`–`$s7` `$k0` `$k1`
  `$gp` `$sp` `$fp` `$ra` `PC` `EPC` `Hi` `Lo`
- 指令：`add` `addu` `addi` `addiu` `sub` `subu` `lw` `sw` `beq` `bne` `j` `jal` `jr`
  `sll` `srl` `sra` `slt` `slti` `lui` `ori` `andi` `mult` `multu` `div` `divu`
  `mvhi` `mvlo` `nop` `mul`
- 字段：`op` `rs` `rt` `rd` `shamt` `funct` `immediate` `address`
- 形式名：`R形式` `I形式` `J形式`（正文里写 R 格式／I 格式／J 格式，代码块里保留原文）

## 6. 数学与数值写法

- 下标：原文把十进制下标压平成 `1510` 这种写法时，按数学含义还原为 `15₁₀`、`00001111₂`、`2⁻¹`。
  原文本身用上下标正确排版的（如 `11.11₂ = 1*2¹+1*2⁰+1*2⁻¹+1*2⁻²`）照抄并用 `<sup>`／`<sub>` 或 Unicode 上下标。
- 二进制串逐字符照抄，**分组方式与原文一致**（原文 4 位一组就 4 位一组，原文 `0000 0000` 就照写空格）。
- 横式竖式排版用 `<pre class="code code--plain">` + 等宽字体对齐，横线用 `─────` 绘制。
- 数值计算结果**不要重算**，照抄原讲义给出的值（原讲义偶有笔误也照译，可在「说明」框里指出）。
