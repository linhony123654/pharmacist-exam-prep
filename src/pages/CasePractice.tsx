import { useState } from 'react';
import { Stethoscope, CheckCircle, Clock, Pill, XCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  scenario: string;
  question: string;
  choices: { label: string; text: string; isCorrect: boolean }[];
  analysis: string[];
  keyPoints: string[];
  relatedDrugs: string[];
}

const cases: CaseStudy[] = [
  {
    id: 'case-rx-01',
    category: '处方审核',
    title: '案例1：药物相互作用导致出血风险',
    scenario: '患者，男，68岁，因房颤长期服用华法林（3mg qd），INR维持在2.0-3.0。近日因社区获得性肺炎就诊，医师开具：①阿莫西林胶囊0.5g tid x7天 ②左氧氟沙星片0.5g qd x7天 ③布洛芬缓释胶囊0.3g bid（患者自述关节疼痛）',
    question: '作为药师，你审核该处方时发现的最严重问题是？',
    choices: [
      { label: 'A', text: '阿莫西林和左氧氟沙星联用属于重复用药', isCorrect: false },
      { label: 'B', text: '布洛芬与华法林联用增加出血风险，且左氧氟沙星可能增强华法林抗凝效果', isCorrect: true },
      { label: 'C', text: '复方甘草片含阿片成分，与左氧氟沙星有相互作用', isCorrect: false },
      { label: 'D', text: '左氧氟沙星剂量过大', isCorrect: false },
    ],
    analysis: [
      '【关键问题】该处方存在严重的药物相互作用风险，涉及华法林+布洛芬+左氧氟沙星三联。',
      '【步骤1】布洛芬是NSAIDs，可抑制血小板聚集，直接增加出血风险。同时布洛芬可损伤胃黏膜，增加消化道出血风险。',
      '【步骤2】左氧氟沙星是喹诺酮类，部分喹诺酮可抑制CYP1A2和CYP3A4，可能增强华法林的抗凝效果，导致INR升高。',
      '【步骤3】华法林治疗窗窄（INR 2.0-3.0），同时联用布洛芬+可能的左氧氟沙星增强效应，出血风险显著增加。',
      '【A为什么错】阿莫西林+左氧氟沙星在CAP中是合理联用（覆盖非典型病原体），不是重复用药。',
      '【正确做法】建议将布洛芬替换为对乙酰氨基酚（不影响凝血），并建议监测INR。',
    ],
    keyPoints: ['华法林与NSAIDs联用是出血高危组合', '喹诺酮类可能增强华法林抗凝', '处方审核先找最危险的问题'],
    relatedDrugs: ['华法林', '布洛芬', '左氧氟沙星', '对乙酰氨基酚'],
  },
  {
    id: 'case-rx-02',
    category: '处方审核',
    title: '案例2：妊娠期用药禁忌',
    scenario: '患者，女，28岁，妊娠12周。因上呼吸道感染就诊，体温38.5度，咽痛。医师开具：①头孢呋辛酯片0.25g bid x5天 ②复方甘草片3片 tid x3天 ③对乙酰氨基酚片0.5g prn ④阿司匹林肠溶片100mg qd（患者自述既往服用预防血栓）',
    question: '该处方中哪项存在妊娠用药安全问题？',
    choices: [
      { label: 'A', text: '头孢呋辛酯在妊娠期禁用', isCorrect: false },
      { label: 'B', text: '复方甘草片含伪麻黄碱，妊娠期禁用', isCorrect: false },
      { label: 'C', text: '阿司匹林在妊娠早期使用有致畸风险（FDA D级）', isCorrect: true },
      { label: 'D', text: '对乙酰氨基酚在妊娠期禁用', isCorrect: false },
    ],
    analysis: [
      '【关键问题】妊娠12周使用阿司匹林100mg qd存在胎儿致畸风险。',
      '【步骤1】阿司匹林在FDA妊娠分级中为C级（早期）和D级（晚期），妊娠早期使用可能与胎儿畸形风险轻度增加有关。',
      '【步骤2】低剂量阿司匹林（75-100mg）在妊娠期仅用于特定适应证（抗磷脂抗体综合征、子痫前期高危），需经产科评估。',
      '【步骤3】该患者因"预防血栓"自行服用阿司匹林，无明确产科适应证，应建议停用或转产科评估。',
      '【A为什么错】头孢呋辛是FDA B级，妊娠期可用，是安全的抗生素选择。',
      '【B为什么错】复方甘草片主要含甘草酸（非伪麻黄碱），问题在于可能导致假性醛固酮增多，但不是禁用。',
      '【D为什么错】对乙酰氨基酚是FDA B级，是妊娠期退热镇痛的首选药物。',
    ],
    keyPoints: ['阿司匹林妊娠早期C级/晚期D级', '对乙酰氨基酚是妊娠期退热首选', '头孢类多为B级，妊娠期可用'],
    relatedDrugs: ['阿司匹林', '对乙酰氨基酚', '头孢呋辛'],
  },
  {
    id: 'case-cvd-01',
    category: '心血管疾病',
    title: '案例3：高血压合并糖尿病的用药选择',
    scenario: '患者，男，55岁，确诊2型糖尿病5年，HbA1c 7.2%。本次体检发现血压158/96mmHg，连续3日测量均>140/90mmHg。BMI 28kg/m2。肾功能正常，尿微量白蛋白/肌酐比值45mg/g（升高）。医师拟启动降压治疗。',
    question: '该患者的首选降压药物是？',
    choices: [
      { label: 'A', text: '氨氯地平（CCB）', isCorrect: false },
      { label: 'B', text: '缬沙坦（ARB）', isCorrect: true },
      { label: 'C', text: '美托洛尔（beta阻滞剂）', isCorrect: false },
      { label: 'D', text: '氢氯噻嗪（利尿剂）', isCorrect: false },
    ],
    analysis: [
      '【关键信息】高血压+糖尿病+微量白蛋白尿（45mg/g，正常<30mg/g）= 需要肾脏保护。',
      '【步骤1】糖尿病患者合并高血压，且已出现微量白蛋白尿，提示早期糖尿病肾病。',
      '【步骤2】ARB（缬沙坦）或ACEI是糖尿病肾病伴高血压的首选，因为：①降低肾小球内压 ②减少蛋白尿 ③延缓肾功能恶化。',
      '【步骤3】JNC8指南明确推荐：糖尿病合并高血压且伴蛋白尿时，首选ACEI或ARB。',
      '【A为什么不是首选】CCB降压效果好，但没有肾脏保护作用，不能减少蛋白尿。可作为联合用药的二线选择。',
      '【C为什么不首选】beta阻滞剂可能影响糖代谢（掩盖低血糖症状、增加胰岛素抵抗），除非合并冠心病。',
      '【D为什么不首选】噻嗪类利尿剂可能升高血糖，加重糖代谢紊乱，在糖尿病患者中不作首选。',
      '【综合方案】首选缬沙坦，如血压不达标可联合氨氯地平。同时加强血糖控制（HbA1c目标<7%）。',
    ],
    keyPoints: ['糖尿病+蛋白尿=首选ACEI/ARB', 'ARB有肾脏保护作用（降蛋白尿）', '噻嗪类利尿剂可能升高血糖'],
    relatedDrugs: ['缬沙坦', '氨氯地平', '二甲双胍'],
  },
  {
    id: 'case-cvd-02',
    category: '心血管疾病',
    title: '案例4：心衰新四联方案的用药教育',
    scenario: '患者，男，70岁，因活动后气促3个月就诊。查体：BP 110/70mmHg，HR 88bpm，颈静脉怒张，双下肢水肿。BNP 1200pg/ml。超声心动图：LVEF 35%。诊断为HFrEF（射血分数降低的心衰）。医师启动新四联方案。',
    question: '关于新四联方案中ARNI（沙库巴曲缬沙坦）的用药教育，以下哪项最重要？',
    choices: [
      { label: 'A', text: '可以与ACEI同时服用以增强降压效果', isCorrect: false },
      { label: 'B', text: '从ACEI转换为ARNI时需间隔36小时', isCorrect: true },
      { label: 'C', text: 'ARNI只用于血压控制，不改善心功能', isCorrect: false },
      { label: 'D', text: '用药期间不需要监测肾功能和血钾', isCorrect: false },
    ],
    analysis: [
      '【关键知识点】ARNI（沙库巴曲缬沙坦）= 脑啡肽酶抑制剂（沙库巴曲）+ ARB（缬沙坦），是心衰新四联的核心药物。',
      '【步骤1】ARNI绝对禁忌与ACEI合用！两者合用可导致血管性水肿（发生率显著增加，可能致命）。',
      '【步骤2】从ACEI转换为ARNI的洗脱期：必须停用ACEI至少36小时（1.5天）后才能开始ARNI。',
      '【步骤3】ARNI不仅降压，还能显著降低HFrEF患者的心血管死亡和心衰住院风险（PARADIGM-HF研究：降低20%）。',
      '【A为什么错】ARNI+ACEI合用是禁忌，不是推荐。',
      '【C为什么错】ARNI是心衰基石用药，可改善心功能和预后，不只是降压。',
      '【D为什么错】ARNI含ARB成分，需定期监测肾功能和血钾（每1-2周一次，稳定后每3-6个月）。',
      '【新四联完整方案】ARNI + beta阻滞剂（美托洛尔） + MRA（螺内酯） + SGLT2i（达格列净）。',
    ],
    keyPoints: ['ACEI转ARNI需间隔36小时', 'ARNI+ACEI合用禁忌（血管性水肿风险）', '新四联：ARNI+beta+MRA+SGLT2i'],
    relatedDrugs: ['沙库巴曲缬沙坦', '美托洛尔', '螺内酯', '达格列净'],
  },
  {
    id: 'case-tdm-01',
    category: '治疗药物监测',
    title: '案例5：地高辛中毒的识别与处理',
    scenario: '患者，女，72岁，因房颤合并心衰长期服用地高辛0.25mg qd。近3日出现恶心、食欲不振，今晨视物发黄（自述看白墙是黄色的）。心电图：频发室性早搏，二联律。急查地高辛血药浓度2.8ng/ml（治疗窗0.5-2.0ng/ml）。Scr 150umol/L（肾功能轻度下降）。',
    question: '关于该患者地高辛中毒的处理，以下哪项不正确？',
    choices: [
      { label: 'A', text: '立即停用地高辛', isCorrect: false },
      { label: 'B', text: '静脉补钾（即使血钾正常）', isCorrect: true },
      { label: 'C', text: '严重中毒可给予地高辛抗体Fab片段', isCorrect: false },
      { label: 'D', text: '密切监测心电图和血药浓度', isCorrect: false },
    ],
    analysis: [
      '【关键信息】地高辛浓度2.8ng/ml（>2.0ng/ml为中毒）+ 胃肠道症状（恶心、纳差）+ 视觉异常（黄视）+ 心律失常（室早二联律）= 典型地高辛中毒。',
      '【步骤1】地高辛中毒三大表现：①胃肠道（恶心、呕吐、纳差）②视觉（黄视/绿视）③心律失常（室早、房室传导阻滞）。',
      '【步骤2】该患者中毒原因：肾功能下降（Scr 150umol/L）导致地高辛排泄减少，而剂量未调整。',
      '【步骤3】地高辛中毒处理：①立即停药 ②纠正电解质（低钾会加重复中毒，但高钾也危险——需先查血钾再决定）③严重中毒用地高辛抗体Fab ④对症支持。',
      '【B为什么不正确】静脉补钾需谨慎！必须先查血钾。如果患者血钾已经正常或偏高，盲目补钾可能导致高钾血症，加重心律失常。正确做法是先查电解质，低钾才补钾。',
      '【A正确】立即停用地高辛是第一步。',
      '【C正确】地高辛抗体Fab片段是严重中毒的特效解毒剂，可快速逆转中毒。',
      '【D正确】需密切监测心电图和血药浓度动态变化。',
    ],
    keyPoints: ['地高辛中毒三联征：胃肠+视觉+心律失常', '地高辛治疗窗0.5-2.0ng/ml', '肾功能不全需减量', '补钾前必须先查血钾'],
    relatedDrugs: ['地高辛', '地高辛抗体Fab片段'],
  },
  {
    id: 'case-dm-01',
    category: '糖尿病管理',
    title: '案例6：低血糖的处理与预防',
    scenario: '患者，男，62岁，2型糖尿病10年，服用格列美脲2mg qd + 二甲双胍0.5g tid。今晨未进食即外出活动，上午10点出现心慌、出汗、手抖、饥饿感。测血糖3.2mmol/L。患者意识清楚，能自主进食。',
    question: '关于该患者低血糖的即刻处理和后续调整，以下哪项不正确？',
    choices: [
      { label: 'A', text: '立即口服15g快速吸收的碳水化合物（如糖果、含糖饮料）', isCorrect: false },
      { label: 'B', text: '15分钟后复测血糖，如仍<3.9mmol/L再次给予15g碳水化合物', isCorrect: false },
      { label: 'C', text: '症状缓解后可正常进食，无需调整降糖方案', isCorrect: true },
      { label: 'D', text: '评估是否需减少格列美脲剂量或更换为低血糖风险低的药物', isCorrect: false },
    ],
    analysis: [
      '【关键信息】磺脲类（格列美脲）+ 未进食 + 运动 = 典型的磺脲类相关低血糖。血糖3.2mmol/L（<3.9为低血糖）。',
      '【步骤1】低血糖处理"15-15法则"：血糖<3.9时，口服15g快速碳水化合物，15分钟后复测。',
      '【步骤2】该患者意识清楚，可以口服处理。如果意识障碍则不能口服（防误吸），需静脉推注50%葡萄糖或肌注胰高血糖素。',
      '【步骤3】低血糖的根本原因是格列美脲（磺脲类低血糖风险高）+ 未进食+运动三重因素叠加。',
      '【C为什么不正确】症状缓解后不能简单恢复正常方案！需要：①评估并调整降糖方案（减格列美脲剂量或换DPP-4i/SGLT2i）②教育患者规律进食、运动前加餐 ③查明低血糖原因并预防再次发生。',
      '【磺脲类低血糖特点】作用持续时间长（格列美脲半衰期5-8h），低血糖可能反复发作，需密切监测。',
    ],
    keyPoints: ['低血糖15-15法则', '磺脲类低血糖风险高且可能反复', '需调整方案而非仅处理一次', '意识障碍时不能口服'],
    relatedDrugs: ['格列美脲', '胰高血糖素', '葡萄糖'],
  },
  {
    id: 'case-gi-01',
    category: '消化系统疾病',
    title: '案例7：根除幽门螺杆菌的四联方案',
    scenario: '患者，男，45岁，因反复上腹痛2个月就诊。胃镜检查：十二指肠球部溃疡。C13呼气试验阳性（DOB值=18，阳性>4）。无青霉素过敏史。医师拟行Hp根除治疗。',
    question: '根据2026年最新指南，该患者的首选根除方案是？',
    choices: [
      { label: 'A', text: '奥美拉唑+阿莫西林（二联疗法）', isCorrect: false },
      { label: 'B', text: '铋剂四联方案：PPI+铋剂+阿莫西林+克拉霉素，14天', isCorrect: true },
      { label: 'C', text: '铋剂四联方案：PPI+铋剂+阿莫西林+甲硝唑，7天', isCorrect: false },
      { label: 'D', text: '左氧氟沙星三联方案：PPI+阿莫西林+左氧氟沙星，10天', isCorrect: false },
    ],
    analysis: [
      '【关键知识点】Hp根除的首选是铋剂四联方案（含阿莫西林），疗程14天。',
      '【步骤1】2026年指南推荐：除非有特定禁忌，首选含阿莫西林的铋剂四联方案（PPI+铋剂+阿莫西林+第二种抗生素）。',
      '【步骤2】第二种抗生素选择：克拉霉素（克拉霉素敏感时）或甲硝唑（克拉霉素耐药地区）或左氧氟沙星（三线）。',
      '【步骤3】疗程14天（不是7天或10天），根除率可达90%以上。',
      '【A为什么错】二联疗法（PPI+阿莫西林高剂量）仅在特定情况下使用，不是常规首选。',
      '【C为什么错】疗程应为14天而不是7天。7天疗程根除率明显低于14天。',
      '【D为什么错】含氟喹诺酮的方案是三线选择（用于前两种方案失败时），不应作为首选（耐药率高+不良反应）。',
      '【用药教育】服药期间大便可能变黑（铋剂），属正常现象。必须完成14天疗程，不能自行停药。',
    ],
    keyPoints: ['首选铋剂四联方案（含阿莫西林）', '疗程必须14天', '服药后大便变黑是正常现象'],
    relatedDrugs: ['奥美拉唑', '枸橼酸铋钾', '阿莫西林', '克拉霉素'],
  },
  {
    id: 'case-abx-01',
    category: '抗感染用药',
    title: '案例8：抗菌药物合理选用',
    scenario: '患者，女，35岁，因急性肾盂肾炎就诊。体温39.2度，腰痛，尿频尿急尿痛。尿培养：大肠埃希菌，产ESBLs（超广谱beta-内酰胺酶）。肾功能正常，无药物过敏。',
    question: '根据药敏结果，该患者的首选抗菌药物是？',
    choices: [
      { label: 'A', text: '头孢曲松（三代头孢）', isCorrect: false },
      { label: 'B', text: '头孢吡肟（四代头孢）', isCorrect: false },
      { label: 'C', text: '碳青霉烯类（如厄他培南）', isCorrect: true },
      { label: 'D', text: '阿米卡星（氨基糖苷类）', isCorrect: false },
    ],
    analysis: [
      '【关键信息】产ESBLs大肠埃希菌 = 对三代头孢耐药（即使体外敏感，体内也可能无效）。',
      '【步骤1】ESBLs能水解三代和四代头孢菌素（头孢曲松、头孢吡肟），因此即使药敏显示"敏感"，也不推荐使用。',
      '【步骤2】碳青霉烯类（厄他培南、美罗培南）是产ESBLs肠杆菌科感染的首选，因为碳青霉烯类对ESBLs稳定。',
      '【步骤3】厄他培南1g qd静脉给药，疗程10-14天，是肾盂肾炎的合适选择。',
      '【A为什么错】头孢曲松对产ESBLs菌株治疗失败率高，即使药敏敏感也不推荐。',
      '【B为什么错】头孢吡肟（四代）虽然对AmpC酶稳定，但对ESBLs的效果也不可靠。',
      '【D为什么错】氨基糖苷类虽对G-菌有效，但肾盂肾炎需要药物在尿液中达到高浓度，碳青霉烯更可靠。',
    ],
    keyPoints: ['产ESBLs菌=禁用三代/四代头孢', '碳青霉烯是首选', 'ESBLs能水解头孢菌素'],
    relatedDrugs: ['厄他培南', '美罗培南'],
  },
];

function CaseCard({ c }: { c: CaseStudy }) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="border" style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}>
      {/* Header */}
      <div className="px-6 py-4 border-b" style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-2">
          <Stethoscope size={16} style={{ color: 'var(--accent-rust)' }} />
          <span className="text-ui-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--accent-rust)' }}>
            {c.category}
          </span>
        </div>
        <h3 className="font-chinese-serif text-lg font-bold mt-2" style={{ color: 'var(--ink)' }}>{c.title}</h3>
      </div>

      {/* Scenario */}
      <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--border-light)', background: 'var(--paper-dark)' }}>
        <div className="flex items-center gap-2 mb-2">
          <Clock size={14} style={{ color: 'var(--ink-tertiary)' }} />
          <span className="text-ui-sm font-semibold" style={{ color: 'var(--ink-tertiary)' }}>病例资料</span>
        </div>
        <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--ink-secondary)' }}>
          {c.scenario}
        </p>
      </div>

      {/* Question & Choices */}
      <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--border-light)' }}>
        <p className="text-base font-medium" style={{ color: 'var(--ink)' }}>{c.question}</p>
        <div className="mt-3 space-y-2">
          {c.choices.map((ch) => {
            const isSelected = selected === ch.label;
            const showCorrect = revealed && ch.isCorrect;
            const showWrong = revealed && isSelected && !ch.isCorrect;
            return (
              <button
                key={ch.label}
                onClick={() => !revealed && setSelected(ch.label)}
                className={`w-full flex items-start gap-3 px-4 py-3 border text-left transition-all ${
                  showCorrect ? 'border-[var(--accent-olive)] bg-[var(--accent-olive-light)]' :
                  showWrong ? 'border-[var(--accent-rust)] bg-[var(--accent-rust-light)]' :
                  isSelected ? 'border-[var(--accent-gold)] bg-[var(--accent-gold-light)]' :
                  'hover:bg-[var(--paper-dark)]'
                }`}
                style={{ borderColor: showCorrect ? 'var(--accent-olive)' : showWrong ? 'var(--accent-rust)' : isSelected ? 'var(--accent-gold)' : 'var(--border)' }}
              >
                <span className={`shrink-0 w-7 h-7 flex items-center justify-center text-sm font-bold ${
                  showCorrect ? 'bg-[var(--accent-olive)] text-white' :
                  showWrong ? 'bg-[var(--accent-rust)] text-white' :
                  'bg-[var(--paper-dark)]'
                }`} style={{ color: showCorrect || showWrong ? 'white' : 'var(--ink)' }}>
                  {ch.label}
                </span>
                <span className="text-sm leading-relaxed flex-1" style={{ color: 'var(--ink-secondary)' }}>{ch.text}</span>
                {showCorrect && <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--accent-olive)' }} />}
                {showWrong && <XCircle size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--accent-rust)' }} />}
              </button>
            );
          })}
        </div>

        {/* Reveal Button */}
        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="mt-4 px-6 py-2 text-sm border transition-all hover:opacity-80"
            style={{ background: 'var(--accent-rust)', color: 'var(--paper)', borderColor: 'var(--accent-rust)' }}
          >
            查看详细解析
          </button>
        )}
      </div>

      {/* Analysis */}
      {revealed && (
        <div className="px-6 py-5 space-y-3">
          <h4 className="font-chinese-serif text-base font-bold" style={{ color: 'var(--ink)' }}>
            详细解析
          </h4>
          {c.analysis.map((line, i) => (
            <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
              {line}
            </p>
          ))}

          {/* Key Points */}
          <div className="mt-4 px-4 py-3 border-l-[3px]" style={{ background: 'var(--accent-olive-light)', borderColor: 'var(--accent-olive)' }}>
            <span className="text-ui-sm font-semibold" style={{ color: 'var(--accent-olive)' }}>核心要点：</span>
            <ul className="mt-2 space-y-1">
              {c.keyPoints.map((kp, i) => (
                <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--ink-secondary)' }}>
                  <span style={{ color: 'var(--accent-olive)' }}>★</span> {kp}
                </li>
              ))}
            </ul>
          </div>

          {/* Related Drugs */}
          <div className="flex items-center gap-2 flex-wrap">
            <Pill size={14} style={{ color: 'var(--ink-tertiary)' }} />
            <span className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>相关药物：</span>
            {c.relatedDrugs.map((d, i) => (
              <span key={i} className="text-xs px-2 py-0.5 border" style={{ borderColor: 'var(--border)', color: 'var(--ink-secondary)' }}>
                {d}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CasePractice() {
  const [filter, setFilter] = useState('全部');
  const categories = ['全部', ...Array.from(new Set(cases.map((c) => c.category)))];
  const filtered = filter === '全部' ? cases : cases.filter((c) => c.category === filter);

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)' }}>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 flex items-center justify-center overflow-hidden" style={{ background: 'var(--ink)' }}>
        <div className="relative text-center px-6 max-w-[800px] mx-auto">
          <span className="font-display text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--accent-rust)' }}>
            Case Analysis
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--paper)' }}>
            案例分析题专项训练
          </h1>
          <div className="w-16 h-[2px] mx-auto mt-6" style={{ background: 'var(--accent-rust)' }} />
          <p className="mt-6 text-lg leading-relaxed max-w-[600px] mx-auto" style={{ color: 'var(--ink-tertiary)' }}>
            药学综合知识与技能 · 占30分 · 先做题再看分步解析
          </p>
          <p className="mt-3 text-sm" style={{ color: 'var(--ink-quaternary)' }}>
            共 {cases.length} 个完整案例 · 覆盖处方审核/心血管疾病/TDM/糖尿病/消化/抗感染
          </p>
        </div>
      </section>

      {/* Strategy */}
      <section className="max-w-content mx-auto px-6 py-8">
        <ScrollReveal>
          <div className="border p-6" style={{ background: 'var(--paper-dark)', borderColor: 'var(--accent-rust)' }}>
            <h2 className="font-chinese-serif text-lg font-bold mb-3" style={{ color: 'var(--ink)' }}>
              案例分析题三步解题法
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold" style={{ color: 'var(--accent-rust)' }}>Step 1：提取关键信息</span>
                <p className="mt-1" style={{ color: 'var(--ink-secondary)' }}>年龄、性别、诊断、合并症、正在用药、实验室检查异常值</p>
              </div>
              <div>
                <span className="font-semibold" style={{ color: 'var(--accent-rust)' }}>Step 2：匹配知识点</span>
                <p className="mt-1" style={{ color: 'var(--ink-secondary)' }}>确定考查的药物分类/适应证/禁忌/相互作用/监测</p>
              </div>
              <div>
                <span className="font-semibold" style={{ color: 'var(--accent-rust)' }}>Step 3：排除干扰项</span>
                <p className="mt-1" style={{ color: 'var(--ink-secondary)' }}>逐一分析每个选项，找出最符合/最不符合的</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Filter */}
      <section className="border-b sticky top-0 z-10" style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}>
        <div className="max-w-content mx-auto px-6 py-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 text-sm border transition-all ${filter === c ? 'font-semibold' : 'hover:bg-[var(--paper-dark)]'}`}
              style={{ background: filter === c ? 'var(--accent-rust)' : 'transparent', color: filter === c ? 'var(--paper)' : 'var(--ink-secondary)', borderColor: filter === c ? 'var(--accent-rust)' : 'var(--border)' }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Cases */}
      <main className="max-w-content mx-auto px-6 pb-24 pt-8 space-y-8">
        {filtered.map((c, i) => (
          <ScrollReveal key={c.id} delay={i * 0.05}>
            <CaseCard c={c} />
          </ScrollReveal>
        ))}
      </main>
    </div>
  );
}
