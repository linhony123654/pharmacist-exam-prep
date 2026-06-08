import { useState } from 'react';
import { Calculator, ChevronDown, ChevronUp, AlertCircle, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface CalcProblem {
  id: string;
  type: string;
  title: string;
  question: string;
  given: string[];
  formula: string;
  steps: { desc: string; calc: string; result: string }[];
  answer: string;
  tip: string;
}

const problems: CalcProblem[] = [
  // ======== 半衰期计算 ========
  {
    id: 't12-01',
    type: '半衰期计算',
    title: '例题1：由消除速率常数求半衰期',
    question: '某药物按一级动力学消除，消除速率常数 k = 0.05 h⁻¹，求该药物的半衰期 t₁/₂。',
    given: ['消除速率常数 k = 0.05 h⁻¹'],
    formula: 't₁/₂ = 0.693 / k',
    steps: [
      { desc: '第一步：写出公式', calc: 't₁/₂ = 0.693 / k', result: '' },
      { desc: '第二步：代入已知值 k = 0.05 h⁻¹', calc: 't₁/₂ = 0.693 / 0.05', result: '' },
      { desc: '第三步：计算', calc: '0.693 ÷ 0.05 = 13.86', result: 't₁/₂ = 13.86 h' },
    ],
    answer: '13.86 小时（约14小时）',
    tip: '记忆口诀：一级反应半衰期与浓度无关，只取决于k值。0.693是ln2的近似值。',
  },
  {
    id: 't12-02',
    type: '半衰期计算',
    title: '例题2：由半衰期求消除速率常数',
    question: '某药物的半衰期为8小时，求其消除速率常数 k。',
    given: ['半衰期 t₁/₂ = 8 h'],
    formula: 'k = 0.693 / t₁/₂',
    steps: [
      { desc: '第一步：写出公式', calc: 'k = 0.693 / t₁/₂', result: '' },
      { desc: '第二步：代入已知值 t₁/₂ = 8 h', calc: 'k = 0.693 / 8', result: '' },
      { desc: '第三步：计算', calc: '0.693 ÷ 8 = 0.086625', result: 'k = 0.0866 h⁻¹' },
    ],
    answer: 'k = 0.0866 h⁻¹（约0.087 h⁻¹）',
    tip: '考试时常反过来考——给你半衰期让你求k。记住公式变形：k = 0.693 / t₁/₂',
  },
  {
    id: 't12-03',
    type: '半衰期计算',
    title: '例题3：静脉给药后血药浓度预测',
    question: '某患者静脉注射某药500mg，初始血药浓度 C₀ = 20 μg/ml，k = 0.1 h⁻¹。求给药后10小时的血药浓度。',
    given: ['剂量 = 500 mg', 'C₀ = 20 μg/ml', 'k = 0.1 h⁻¹', 't = 10 h'],
    formula: 'C = C₀ × e^(-kt)',
    steps: [
      { desc: '第一步：写出一级消除公式', calc: 'C = C₀ × e^(-kt)', result: '' },
      { desc: '第二步：代入已知值', calc: 'C = 20 × e^(-0.1 × 10)', result: '' },
      { desc: '第三步：计算指数部分', calc: '-0.1 × 10 = -1.0', result: '' },
      { desc: '第四步：计算 e⁻¹', calc: 'e⁻¹ ≈ 0.3679', result: '' },
      { desc: '第五步：最终计算', calc: 'C = 20 × 0.3679 = 7.358', result: 'C = 7.36 μg/ml' },
    ],
    answer: '7.36 μg/ml',
    tip: 'e⁻¹ ≈ 0.368，e⁻² ≈ 0.135，e⁻³ ≈ 0.050，记住这几个常用值可以加快心算速度。',
  },
  {
    id: 't12-04',
    type: '半衰期计算',
    title: '例题4：达稳态时间计算',
    question: '某药物 t₁/₂ = 6小时，每日口服3次（每8小时一次），问大约需要多久血药浓度可达稳态的90%以上？',
    given: ['t₁/₂ = 6 h', '给药间隔 τ = 8 h'],
    formula: '达稳态时间 ≈ 4~5 个 t₁/₂',
    steps: [
      { desc: '第一步：确定达稳态需要的半衰期个数', calc: '4个 t₁/₂ → 达稳态 93.75%', result: '' },
      { desc: '第二步：计算总时间', calc: '时间 = 4 × t₁/₂ = 4 × 6', result: '' },
      { desc: '第三步：得出结果', calc: '4 × 6 = 24', result: '24 小时（1天）' },
      { desc: '延伸：5个半衰期可达多少？', calc: '5 × 6 = 30小时 → 达稳态 96.875%', result: '更稳妥的答案：30小时' },
    ],
    answer: '约24~30小时（4~5个半衰期）',
    tip: '核心规律：4个t₁/₂达93.75%，5个t₁/₂达96.88%，与给药间隔无关！只与药物本身的半衰期有关。',
  },
  {
    id: 't12-05',
    type: '半衰期计算',
    title: '例题5：一级消除后剩余药量百分比',
    question: '某药物 t₁/₂ = 4h，静脉注射后，经过12小时，体内剩余药量约为原来的百分之几？',
    given: ['t₁/₂ = 4 h', 't = 12 h'],
    formula: '剩余% = (1/2)^(t/t₁/₂) × 100%',
    steps: [
      { desc: '第一步：计算经历了几个半衰期', calc: 'n = t / t₁/₂ = 12 / 4 = 3', result: '经历了3个半衰期' },
      { desc: '第二步：每过一个半衰期减半', calc: '第1个：100% → 50%', result: '' },
      { desc: '第三步：继续减半', calc: '第2个：50% → 25%', result: '' },
      { desc: '第四步：再减半', calc: '第3个：25% → 12.5%', result: '剩余12.5%' },
      { desc: '验证：用公式', calc: '(1/2)³ = 1/8 = 0.125 = 12.5%', result: '✓ 一致' },
    ],
    answer: '12.5%',
    tip: ' shortcut：直接算 t/t₁/₂ = n，然后 (1/2)ⁿ。n=1→50%, n=2→25%, n=3→12.5%, n=4→6.25%。',
  },

  // ======== 有效期计算 ========
  {
    id: 'exp-01',
    type: '有效期计算',
    title: '例题6：一级反应有效期（经典公式）',
    question: '某药物在25°C下的降解反应为一级反应，速率常数 k = 2.0×10⁻⁵ h⁻¹，求其有效期 t₀.₉。',
    given: ['k = 2.0 × 10⁻⁵ h⁻¹', '反应级数：一级'],
    formula: 't₀.₉ = 0.1054 / k（一级反应）',
    steps: [
      { desc: '第一步：写出公式', calc: 't₀.₉ = 0.1054 / k', result: '' },
      { desc: '第二步：代入 k 值', calc: 't₀.₉ = 0.1054 / (2.0 × 10⁻⁵)', result: '' },
      { desc: '第三步：计算', calc: '0.1054 ÷ 0.00002 = 5270', result: 't₀.₉ = 5270 小时' },
      { desc: '第四步：换算为天数', calc: '5270 ÷ 24 = 219.58', result: '≈ 219.6 天' },
      { desc: '第五步：换算为月数', calc: '219.6 ÷ 30 = 7.32', result: '≈ 7.3 个月' },
    ],
    answer: '约7.3个月（或219.6天）',
    tip: '0.1054 = ln(10/9) = ln(1.111...)，表示降解10%所需时间。有效期通常以月或年表示，注意单位换算。',
  },
  {
    id: 'exp-02',
    type: '有效期计算',
    title: '例题7：零级反应有效期',
    question: '某药物在40°C下为零级降解，初始浓度 C₀ = 100 mg/ml，降解速率常数 k₀ = 0.5 mg/(ml·月)。求有效期 t₀.₉。',
    given: ['C₀ = 100 mg/ml', 'k₀ = 0.5 mg/(ml·月)', '反应级数：零级'],
    formula: 't₀.₉ = 0.1 × C₀ / k₀（零级反应）',
    steps: [
      { desc: '第一步：写出零级反应有效期公式', calc: 't₀.₉ = 0.1 × C₀ / k₀', result: '' },
      { desc: '第二步：代入数值', calc: 't₀.₉ = 0.1 × 100 / 0.5', result: '' },
      { desc: '第三步：逐步计算', calc: '0.1 × 100 = 10', result: '' },
      { desc: '第四步：继续', calc: '10 / 0.5 = 20', result: 't₀.₉ = 20 个月' },
    ],
    answer: '20个月（约1年8个月）',
    tip: '一级vs零级有效期公式对比：一级 t₀.₉=0.1054/k（与初始浓度无关）；零级 t₀.₉=0.1×C₀/k₀（与初始浓度有关）。考试经常考这个区别！',
  },
  {
    id: 'exp-03',
    type: '有效期计算',
    title: '例题8：用Arrhenius方程预测有效期（温度加速试验）',
    question: '某药物在60°C加速试验中测得k₆₀ = 8.5×10⁻⁴ h⁻¹，活化能Ea = 83.14 kJ/mol。求25°C下的有效期。已知R = 8.314 J/(mol·K)。',
    given: ['k₆₀ = 8.5×10⁻⁴ h⁻¹', 'Ea = 83.14 kJ/mol = 83140 J/mol', 'T₁ = 60°C = 333K', 'T₂ = 25°C = 298K'],
    formula: 'ln(k₂/k₁) = Ea/R × (1/T₁ - 1/T₂)',
    steps: [
      { desc: '第一步：温度换算为开尔文', calc: 'T₁ = 60 + 273 = 333K, T₂ = 25 + 273 = 298K', result: '' },
      { desc: '第二步：代入Arrhenius方程', calc: 'ln(k₂₅/k₆₀) = 83140/8.314 × (1/333 - 1/298)', result: '' },
      { desc: '第三步：计算括号内', calc: '1/333 = 0.003003, 1/298 = 0.003356', result: '' },
      { desc: '第四步：相减', calc: '0.003003 - 0.003356 = -0.000353', result: '' },
      { desc: '第五步：计算Ea/R', calc: '83140 / 8.314 = 10000', result: '' },
      { desc: '第六步：相乘', calc: '10000 × (-0.000353) = -3.53', result: 'ln(k₂₅/k₆₀) = -3.53' },
      { desc: '第七步：求k₂₅', calc: 'k₂₅/k₆₀ = e⁻³·⁵³ = 0.0293', result: '' },
      { desc: '第八步：', calc: 'k₂₅ = 8.5×10⁻⁴ × 0.0293 = 2.49×10⁻⁵ h⁻¹', result: '' },
      { desc: '第九步：算有效期', calc: 't₀.₉ = 0.1054 / 2.49×10⁻⁵ = 4233h ≈ 176天', result: '≈ 5.9 个月' },
    ],
    answer: '约5.9个月（176天）',
    tip: 'Arrhenius方程是加速试验的核心。记住规律：温度每升高10°C，反应速率约增加2~4倍（Q₁₀规则）。',
  },

  // ======== 杂质限量计算 ========
  {
    id: 'imp-01',
    type: '杂质限量计算',
    title: '例题9：杂质限量百分比计算',
    question: '检查某药物中的氯化物杂质，取供试品2.0g，依法检查。标准氯化钠溶液（每1ml相当于10μg的Cl⁻）取2.0ml作为对照。求氯化物杂质的限量。',
    given: ['供试品量 S = 2.0 g = 2000 mg', '标准液体积 V = 2.0 ml', '标准液浓度 C = 10 μg/ml'],
    formula: '限量(%) = (V × C) / S × 100%',
    steps: [
      { desc: '第一步：计算杂质允许量', calc: '杂质允许量 = V × C = 2.0 × 10 = 20 μg', result: '' },
      { desc: '第二步：统一单位（供试品换算为μg）', calc: 'S = 2.0 g = 2.0 × 10⁶ μg', result: '' },
      { desc: '第三步：代入限量公式', calc: '限量 = 20 / (2.0 × 10⁶) × 100%', result: '' },
      { desc: '第四步：计算', calc: '20 / 2000000 = 0.00001 = 0.001%', result: '限量 = 0.001%' },
    ],
    answer: '0.001%',
    tip: '杂质限量公式的核心是"对照液中所含杂质量 = 供试品中允许的最大杂质量"。单位统一是关键！',
  },
  {
    id: 'imp-02',
    type: '杂质限量计算',
    title: '例题10：标准液体积反求',
    question: '某药物中重金属杂质限量规定不得过0.0005%，取供试品1.0g检查。标准铅溶液（每1ml相当于10μg的Pb）应取多少ml？',
    given: ['限量 L = 0.0005%', '供试品 S = 1.0 g = 10⁶ μg', '标准液浓度 C = 10 μg/ml'],
    formula: 'V = (L × S) / C',
    steps: [
      { desc: '第一步：变换限量公式求V', calc: 'V = (L × S) / C', result: '' },
      { desc: '第二步：代入数值（注意%要化为小数）', calc: 'V = (0.0005% × 1.0g) / 10μg/ml', result: '' },
      { desc: '第三步：0.0005% = 0.000005 = 5×10⁻⁶', calc: 'L = 5 × 10⁻⁶', result: '' },
      { desc: '第四步：计算杂质允许量', calc: '允许量 = 5×10⁻⁶ × 10⁶ μg = 5 μg', result: '' },
      { desc: '第五步：计算标准液体积', calc: 'V = 5 / 10 = 0.5', result: 'V = 0.5 ml' },
    ],
    answer: '0.5 ml',
    tip: '%化为小数时容易出错：0.0005% = 0.0005/100 = 0.000005 = 5×10⁻⁶。注意是"除以100"不是"去掉百分号"！',
  },

  // ======== 生物利用度计算 ========
  {
    id: 'f-01',
    type: '生物利用度计算',
    title: '例题11：绝对生物利用度',
    question: '某药口服给药后AUCₒᵣₐₗ = 120 mg·h/L，静脉注射后AUCᵢᵥ = 200 mg·h/L，剂量相同。求绝对生物利用度F。',
    given: ['AUC oral = 120 mg·h/L', 'AUC iv = 200 mg·h/L', '剂量相同'],
    formula: 'F = (AUC oral / AUC iv) × 100%',
    steps: [
      { desc: '第一步：写出公式', calc: 'F = (AUC oral / AUC iv) × 100%', result: '' },
      { desc: '第二步：代入数值', calc: 'F = (120 / 200) × 100%', result: '' },
      { desc: '第三步：计算', calc: '120 / 200 = 0.6 = 60%', result: 'F = 60%' },
    ],
    answer: '60%',
    tip: '绝对生物利用度以静脉注射为基准（F=100%）。F<100%说明口服后有首过效应或吸收不完全。',
  },
  {
    id: 'f-02',
    type: '生物利用度计算',
    title: '例题12：相对生物利用度（仿制药BE试验）',
    question: '某仿制药AUCₜ = 95 mg·h/L，参比制剂AUCᵣ = 100 mg·h/L。求相对生物利用度，并判断是否达到BE等效性标准（80%~125%）。',
    given: ['AUC test = 95', 'AUC ref = 100'],
    formula: 'F rel = (AUC test / AUC ref) × 100%',
    steps: [
      { desc: '第一步：计算相对生物利用度', calc: 'F rel = 95/100 × 100% = 95%', result: 'F rel = 95%' },
      { desc: '第二步：与BE标准比较下限', calc: '95% > 80%', result: '✓ 通过下限' },
      { desc: '第三步：与BE标准比较上限', calc: '95% < 125%', result: '✓ 通过上限' },
      { desc: '结论', calc: '80% < 95% < 125%', result: '达到BE等效性标准' },
    ],
    answer: '95%，达到BE等效性标准',
    tip: '仿制药一致性评价的BE标准是80%~125%。注意是双向区间，不是简单的>80%。',
  },

  // ======== 表观分布容积计算 ========
  {
    id: 'vd-01',
    type: '表观分布容积计算',
    title: '例题13：Vd计算与意义',
    question: '患者静脉注射某药500mg，测得初始血药浓度C₀ = 25 μg/ml。求表观分布容积Vd，并判断药物主要分布在血浆还是组织。',
    given: ['剂量 X₀ = 500 mg', 'C₀ = 25 μg/ml'],
    formula: 'Vd = X₀ / C₀',
    steps: [
      { desc: '第一步：统一单位', calc: 'X₀ = 500 mg = 500000 μg; C₀ = 25 μg/ml', result: '' },
      { desc: '第二步：写出公式', calc: 'Vd = X₀ / C₀', result: '' },
      { desc: '第三步：代入计算', calc: 'Vd = 500000 / 25 = 20000', result: 'Vd = 20000 ml = 20 L' },
      { desc: '第四步：判断分布', calc: '正常人体血浆容积约3L，总体液约42L', result: '' },
      { desc: '第五步：比较', calc: 'Vd = 20L，介于血浆(3L)和总体液(42L)之间', result: '主要分布在细胞外液' },
    ],
    answer: 'Vd = 20 L，药物主要分布在细胞外液',
    tip: 'Vd判断分布：Vd≈3L→主要在血浆；Vd≈15-20L→细胞外液；Vd≈42L→全身体液；Vd>100L→大量分布到组织（脂溶性药物）。',
  },

  // ======== 稳态浓度计算 ========
  {
    id: 'ss-01',
    type: '稳态浓度计算',
    title: '例题14：多次给药稳态平均血药浓度',
    question: '某药口服F=0.8，剂量X₀=200mg，τ=8h，k=0.1h⁻¹，Vd=20L。求稳态平均血药浓度 Css,av。',
    given: ['F = 0.8', 'X₀ = 200 mg', 'τ = 8 h', 'k = 0.1 h⁻¹', 'Vd = 20 L'],
    formula: 'Css,av = (F × X₀) / (k × Vd × τ)',
    steps: [
      { desc: '第一步：写出公式', calc: 'Css,av = (F × X₀) / (k × Vd × τ)', result: '' },
      { desc: '第二步：代入数值（注意单位统一）', calc: 'X₀ = 200mg = 200000μg, Vd = 20L', result: '' },
      { desc: '第三步：计算分子', calc: 'F × X₀ = 0.8 × 200 = 160 mg', result: '' },
      { desc: '第四步：计算分母', calc: 'k × Vd × τ = 0.1 × 20 × 8 = 16 L', result: '' },
      { desc: '第五步：最终计算', calc: 'Css,av = 160 / 16 = 10', result: 'Css,av = 10 mg/L = 10 μg/ml' },
    ],
    answer: '10 μg/ml',
    tip: '稳态平均血药浓度公式是考试重点。记住：Css,av与给药剂量成正比，与给药间隔成反比。',
  },
  {
    id: 'ss-02',
    type: '稳态浓度计算',
    title: '例题15：负荷剂量计算',
    question: '某药维持剂量为100mg，k=0.1h⁻¹，τ=8h。求使首次给药即达稳态的负荷剂量X*₀。',
    given: ['维持剂量 X₀ = 100 mg', 'k = 0.1 h⁻¹', 'τ = 8 h'],
    formula: 'X*₀ = X₀ / (1 - e^(-kτ))',
    steps: [
      { desc: '第一步：写出负荷剂量公式', calc: 'X*₀ = X₀ / (1 - e^(-kτ))', result: '' },
      { desc: '第二步：计算kτ', calc: 'k × τ = 0.1 × 8 = 0.8', result: '' },
      { desc: '第三步：计算e⁻⁰·⁸', calc: 'e⁻⁰·⁸ ≈ 0.4493', result: '' },
      { desc: '第四步：计算分母', calc: '1 - 0.4493 = 0.5507', result: '' },
      { desc: '第五步：计算负荷剂量', calc: 'X*₀ = 100 / 0.5507 = 181.6', result: 'X*₀ ≈ 182 mg' },
    ],
    answer: '约182 mg（约为维持剂量的1.8倍）',
    tip: '临床意义：地高辛、氨茶碱等治疗窗窄的药物，首次给药时常用负荷剂量以快速达效。负荷剂量 ≈ 维持剂量 × 累积因子。',
  },

  // ======== 清除率计算 ========
  {
    id: 'cl-01',
    type: '清除率计算',
    title: '例题16：总清除率与肾清除率',
    question: '某药Vd=30L，t₁/₂=6h，尿中排泄原形药占60%。求总清除率Cl和肾清除率Clr。',
    given: ['Vd = 30 L', 't₁/₂ = 6 h', '尿中排泄比 fe = 0.6'],
    formula: 'Cl = k × Vd = (0.693/t₁/₂) × Vd; Clr = fe × Cl',
    steps: [
      { desc: '第一步：先求k', calc: 'k = 0.693 / 6 = 0.1155 h⁻¹', result: '' },
      { desc: '第二步：求总清除率', calc: 'Cl = k × Vd = 0.1155 × 30', result: 'Cl = 3.465 L/h' },
      { desc: '第三步：求肾清除率', calc: 'Clr = fe × Cl = 0.6 × 3.465', result: 'Clr = 2.079 L/h' },
    ],
    answer: '总清除率 Cl = 3.47 L/h；肾清除率 Clr = 2.08 L/h',
    tip: '清除率 = 单位时间内清除药物的体积。肾清除率反映肾脏排泄能力，肾功能不全时需调整剂量。',
  },
];

// 按类型分组
const grouped = problems.reduce<Record<string, CalcProblem[]>>((acc, p) => {
  if (!acc[p.type]) acc[p.type] = [];
  acc[p.type].push(p);
  return acc;
}, {});

function ProblemCard({ problem }: { problem: CalcProblem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border transition-all duration-300 hover:shadow-editorial"
      style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-start gap-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <Calculator size={18} style={{ color: 'var(--accent-rust)' }} className="shrink-0 mt-1" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-ui-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--accent-rust)' }}>
              {problem.type}
            </span>
            <span className="text-ui-sm" style={{ color: 'var(--ink-quaternary)' }}>
              {problem.id}
            </span>
          </div>
          <h3 className="font-chinese-serif text-lg font-bold mt-1" style={{ color: 'var(--ink)' }}>
            {problem.title}
          </h3>
          <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
            {problem.question}
          </p>
        </div>
        <button className="shrink-0 mt-1" style={{ color: 'var(--ink-tertiary)' }}>
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: 'var(--border-light)' }}>
          {/* Given */}
          <div className="mt-4">
            <span className="text-ui-sm font-semibold" style={{ color: 'var(--ink-tertiary)' }}>已知条件：</span>
            <ul className="mt-2 space-y-1">
              {problem.given.map((g, i) => (
                <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--ink-secondary)' }}>
                  <span style={{ color: 'var(--accent-rust)' }}>•</span> {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Formula */}
          <div
            className="mt-4 px-4 py-3 border-l-[3px]"
            style={{ background: 'var(--accent-olive-light)', borderColor: 'var(--accent-olive)' }}
          >
            <span className="text-ui-sm font-semibold" style={{ color: 'var(--accent-olive)' }}>核心公式：</span>
            <p className="text-base font-medium mt-1 font-display" style={{ color: 'var(--ink)' }}>
              {problem.formula}
            </p>
          </div>

          {/* Steps */}
          <div className="mt-4 space-y-3">
            <span className="text-ui-sm font-semibold" style={{ color: 'var(--ink-tertiary)' }}>详细解题步骤：</span>
            {problem.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-4 py-3"
                style={{ background: i % 2 === 0 ? 'var(--paper-dark)' : 'transparent' }}
              >
                <span
                  className="shrink-0 w-6 h-6 flex items-center justify-center text-xs font-bold"
                  style={{ background: 'var(--accent-rust)', color: 'var(--paper)' }}
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: 'var(--ink-secondary)' }}>{step.desc}</p>
                  {step.calc && (
                    <p className="text-base font-medium mt-1 font-display" style={{ color: 'var(--ink)' }}>
                      {step.calc}
                    </p>
                  )}
                  {step.result && (
                    <p className="text-sm font-semibold mt-1" style={{ color: 'var(--accent-rust)' }}>
                      → {step.result}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Final Answer */}
          <div
            className="mt-4 px-4 py-3 border-l-[3px] flex items-start gap-3"
            style={{ background: 'var(--accent-rust-light)', borderColor: 'var(--accent-rust)' }}
          >
            <CheckCircle size={18} style={{ color: 'var(--accent-rust)' }} className="shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-semibold" style={{ color: 'var(--accent-rust)' }}>最终答案：</span>
              <p className="text-base font-bold mt-1" style={{ color: 'var(--ink)' }}>{problem.answer}</p>
            </div>
          </div>

          {/* Tip */}
          <div className="mt-3 flex items-start gap-2 px-4 py-3" style={{ background: 'var(--accent-gold-light)' }}>
            <AlertCircle size={16} style={{ color: 'var(--accent-gold)' }} className="shrink-0 mt-0.5" />
            <p className="text-sm" style={{ color: 'var(--ink-secondary)' }}>{problem.tip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CalcPractice() {
  const [activeFilter, setActiveFilter] = useState<string>('全部');
  const filters = ['全部', ...Object.keys(grouped)];
  const filtered = activeFilter === '全部' ? problems : grouped[activeFilter] || [];

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)' }}>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 flex items-center justify-center overflow-hidden" style={{ background: 'var(--ink)' }}>
        <div className="relative text-center px-6 max-w-[800px] mx-auto">
          <span className="font-display text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--accent-rust)' }}>
            Practice Collection
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--paper)' }}>
            计算题专项训练
          </h1>
          <div className="w-16 h-[2px] mx-auto mt-6" style={{ background: 'var(--accent-rust)' }} />
          <p className="mt-6 text-lg leading-relaxed max-w-[600px] mx-auto" style={{ color: 'var(--ink-tertiary)' }}>
            西药一 · 每题都有详细步骤解析 · 从公式到答案一步不落
          </p>
          <p className="mt-3 text-sm" style={{ color: 'var(--ink-quaternary)' }}>
            共 {problems.length} 道精选计算题 · 覆盖全部高频考点
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b sticky top-0 z-10" style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}>
        <div className="max-w-content mx-auto px-6 py-3 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 text-sm transition-all duration-200 border ${
                activeFilter === f
                  ? 'font-semibold'
                  : 'hover:bg-[var(--paper-dark)]'
              }`}
              style={{
                background: activeFilter === f ? 'var(--accent-rust)' : 'transparent',
                color: activeFilter === f ? 'var(--paper)' : 'var(--ink-secondary)',
                borderColor: activeFilter === f ? 'var(--accent-rust)' : 'var(--border)',
              }}
            >
              {f}
              {f !== '全部' && ` (${grouped[f]?.length || 0})`}
            </button>
          ))}
        </div>
      </section>

      {/* Formula Quick Reference */}
      <section className="max-w-content mx-auto px-6 py-8">
        <ScrollReveal>
          <div className="border p-6" style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)' }}>
            <h2 className="font-chinese-serif text-lg font-bold mb-4" style={{ color: 'var(--ink)' }}>
              公式速查卡
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { name: '半衰期', formula: 't₁/₂ = 0.693 / k' },
                { name: '一级有效期', formula: 't₀.₉ = 0.1054 / k' },
                { name: '零级有效期', formula: 't₀.₉ = 0.1 × C₀ / k₀' },
                { name: '生物利用度', formula: 'F = AUC oral / AUC iv × 100%' },
                { name: '表观分布容积', formula: 'Vd = X₀ / C₀' },
                { name: '稳态浓度', formula: 'Css,av = F×X₀ / (k×Vd×τ)' },
                { name: '负荷剂量', formula: 'X*₀ = X₀ / (1 - e^(-kτ))' },
                { name: '清除率', formula: 'Cl = k × Vd = 0.693×Vd / t₁/₂' },
                { name: '杂质限量', formula: 'L(%) = V×C / S × 100%' },
                { name: '血药浓度', formula: 'C = C₀ × e^(-kt)' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3 px-3 py-2" style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <span className="text-sm font-semibold shrink-0 w-24" style={{ color: 'var(--accent-rust)' }}>{item.name}</span>
                  <span className="text-sm font-display" style={{ color: 'var(--ink)' }}>{item.formula}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Problem List */}
      <main className="max-w-content mx-auto px-6 pb-24 space-y-6">
        {filtered.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 0.03}>
            <ProblemCard problem={p} />
          </ScrollReveal>
        ))}
      </main>
    </div>
  );
}
