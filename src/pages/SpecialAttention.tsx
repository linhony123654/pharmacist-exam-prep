import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Bookmark, ChevronRight, Stethoscope, Pill, FileText, FlaskConical } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionDivider from '../components/SectionDivider';

gsap.registerPlugin(ScrollTrigger);

// ============ 数据定义 ============

interface TrapCase {
  id: string;
  category: string;
  title: string;
  trap: string;      // 陷阱是什么
  whyWrong: string;  // 为什么容易错
  correct: string;   // 正确答案/做法
  caseQuestion: string;  // 案例题目
  caseAnswer: string;    // 案例解析
  badge: 'trap' | 'key' | 'case';
}

const trapCases: TrapCase[] = [
  // ======== 药事管理与法规 ========
  {
    id: 'reg-01',
    category: '法规',
    title: '麻精药品处方保存期限 vs 普通处方',
    trap: '混淆麻精药品处方和普通处方的保存年限',
    whyWrong: '普通处方保存1年，麻精药品处方保存3年，许多考生记混',
    correct: '普通处方1年 / 麻精药品处方3年 / 第二类精神药品2年',
    caseQuestion: '【案例】某医院门诊开具盐酸吗啡缓释片，其处方应保存多久？A. 1年 B. 2年 C. 3年 D. 5年',
    caseAnswer: '答案：C（3年）。麻精药品处方保存期限为3年，普通处方仅1年。许多考生误选A，因为平时接触普通处方较多。',
    badge: 'trap',
  },
  {
    id: 'reg-02',
    category: '法规',
    title: '五专管理 vs 四查十对',
    trap: '把"五专管理"和"四查十对"的内容混为一谈',
    whyWrong: '两者都是麻精药品管理的核心制度，但内容完全不同',
    correct: '五专：专人负责、专柜加锁、专用账册、专用处方、专册登记。四查十对：查处方/药品/配伍禁忌/用药合理性',
    caseQuestion: '【案例】药师小王在审核麻醉药品处方时，发现处方医师未使用专用处方笺。这违反了哪项管理制度？',
    caseAnswer: '答案：违反了"五专管理"中的"专用处方"要求。注意区分：五专管理是麻精药品的储存和使用管理制度，四查十对是处方审核的操作规范。',
    badge: 'trap',
  },
  {
    id: 'reg-03',
    category: '法规',
    title: 'ADR报告时限：死亡立即 vs 严重15日 vs 一般30日',
    trap: 'ADR三种报告时限记混，特别是"死亡"和"严重"的区别',
    whyWrong: '死亡需要立即报告（越级上报），严重15日，一般30日——时间递进容易记反',
    correct: '死亡→立即报告（必要时电话先行）/ 严重→15日内 / 一般→30日内',
    caseQuestion: '【案例】某患者使用头孢曲松后出现过敏性休克死亡，医疗机构应在多长时间内上报ADR？',
    caseAnswer: '答案：立即报告。出现死亡病例需立即报告，可先电话报告再补书面报告。注意："立即"不是"当天"，而是越快越好，法规要求不得迟延。',
    badge: 'key',
  },
  {
    id: 'reg-04',
    category: '法规',
    title: '假药 vs 劣药认定标准',
    trap: '分不清哪些情形属于假药、哪些属于劣药',
    whyWrong: '假药是"冒充"（成分不对、没批文、变质等），劣药是"质量不合格"（含量不达标、过期、污染等）',
    correct: '假药：成分不符、非药品冒充、变质、适应症超范围、未批准生产。劣药：含量不达标、过期、污染、擅自添加防腐剂',
    caseQuestion: '【案例】某药品标签标注的适应症超出批准范围，该药品属于？A.假药 B.劣药 C.合格药品 D.需要重新审批',
    caseAnswer: '答案：A（假药）。"适应症超范围"属于假药认定标准（按假药论处）。注意区分：含量不足→劣药；成分不符→假药。',
    badge: 'trap',
  },
  {
    id: 'reg-05',
    category: '法规',
    title: '2026新增：药品网络销售监管',
    trap: '2026年大纲新增内容，很多旧资料没有覆盖',
    whyWrong: '新增《药品网络销售监督管理办法》，处方药网络销售有条件放开',
    correct: '处方药网络销售：需处方审核、实名制、执业药师在岗。疫苗、精神药品、医疗用毒性药品等不得网络销售',
    caseQuestion: '【案例】某电商平台拟开展处方药网络销售，以下哪种做法符合2026年法规要求？',
    caseAnswer: '答案：应在药品展示页面显著位置公示执业药师资格证书号，处方药须凭处方销售，且处方须经执业药师审核。注意：麻醉药品、第一类精神药品、疫苗等绝对禁止网络销售。',
    badge: 'case',
  },

  // ======== 药学专业知识（一）========
  {
    id: 'ph1-01',
    category: '西药一',
    title: '半衰期计算：t₁/₂ = 0.693/k',
    trap: '公式记住了但不会灵活运用，特别是多次给药后的稳态浓度计算',
    whyWrong: '考试不给公式，需要熟练。稳态浓度达到99%需要约7个半衰期',
    correct: 't₁/₂ = 0.693/k | 达坪时间 ≈ 4-5个t₁/₂ | 负荷剂量 = 维持剂量 / (1 - e^(-k·τ))',
    caseQuestion: '【案例】某药t₁/₂=8h，每日给药3次（每8h一次），患者首次服药后多久血药浓度可达稳态的90%以上？',
    caseAnswer: '答案：约32-40小时（4-5个半衰期）。每8h给药一次，经过4个半衰期（32h）达稳态90%以上。考点：稳态浓度与给药间隔无关，只与半衰期有关。',
    badge: 'key',
  },
  {
    id: 'ph1-02',
    category: '西药一',
    title: 'CYP450酶系：抑制剂 vs 诱导剂',
    trap: '分不清哪些是抑制剂、哪些是诱导剂，特别是常见药物的分类',
    whyWrong: '抑制剂增加血药浓度→中毒风险；诱导剂降低血药浓度→疗效不足',
    correct: '强抑制剂：酮康唑、克拉霉素、伊曲康唑、ritonavir。强诱导剂：利福平、苯妥英、卡马西平、圣约翰草',
    caseQuestion: '【案例】患者长期服用华法林，因真菌感染开始服用酮康唑。最应关注的风险是？A.出血 B.血栓 C.肝损伤 D.过敏',
    caseAnswer: '答案：A（出血）。酮康唑是CYP3A4强抑制剂，抑制华法林代谢→华法林血药浓度升高→INR升高→出血风险增加。应监测INR并调整华法林剂量。',
    badge: 'trap',
  },
  {
    id: 'ph1-03',
    category: '西药一',
    title: '片剂崩解时限：不同片型的时限差异',
    trap: '普通片、糖衣片、肠溶衣片的崩解时限容易混淆',
    whyWrong: '糖衣片60min最长，普通片15min最短，肠溶衣片先酸后碱',
    correct: '普通片15min / 薄膜衣30min / 糖衣片60min / 肠溶衣：盐酸中2h不崩解，磷酸盐缓冲液中1h崩解',
    caseQuestion: '【案例】检查某肠溶衣片剂崩解时限，正确的操作方法是？',
    caseAnswer: '答案：先在0.1mol/L盐酸中检查2小时（不得有裂缝、崩解或软化），然后在磷酸盐缓冲液（pH6.8）中1小时内应完全崩解。注意顺序不能颠倒。',
    badge: 'trap',
  },
  {
    id: 'ph1-04',
    category: '西药一',
    title: '有效期计算：t₀.₉ = 0.1054/k',
    trap: '公式记住了但单位换算出错（天数、温度等）',
    whyWrong: 'k值的单位要和有效期单位一致，Arrhenius方程涉及温度换算',
    correct: 't₀.₉ = 0.1054/k（一级反应）| t₀.₉ = C₀/(10k)（零级反应）| 有效期一般取t₀.₉',
    caseQuestion: '【案例】某药物在25°C下k=2.0×10⁻⁵/h（一级反应），求其有效期（月）？',
    caseAnswer: '答案：t₀.₉ = 0.1054/(2.0×10⁻⁵) = 5270h ≈ 219.6天 ≈ 7.3个月。注意：先算出小时再换算成月（除以24再除以30），不要直接想当然。',
    badge: 'key',
  },

  // ======== 药学专业知识（二）========
  {
    id: 'ph2-01',
    category: '西药二',
    title: 'ACEI干咳 vs ARB无干咳：机制与用药选择',
    trap: '知道ACEI会干咳但不知道为什么，也不知道ARB为什么不干咳',
    whyWrong: 'ACEI抑制ACE→缓激肽蓄积→干咳；ARB阻断AT1受体→不影响缓激肽→无干咳',
    correct: 'ACEI干咳机制：缓激肽和P物质降解减少→刺激咳嗽反射。ARB不抑制ACE，不增加缓激肽→无干咳。不能耐受ACEI干咳→换ARB',
    caseQuestion: '【案例】高血压患者服用依那普利后出现持续性干咳，血压控制良好。最佳处理方案是？',
    caseAnswer: '答案：换用ARB（如缬沙坦）。依那普利是ACEI，干咳是常见不良反应（发生率5-20%），因缓激肽蓄积所致。ARB（缬沙坦/氯沙坦等）不引起干咳，降压效果相当。',
    badge: 'key',
  },
  {
    id: 'ph2-02',
    category: '西药二',
    title: '头孢五代对比：每代的关键特征',
    trap: '只记代表药，不记每代的关键区别（G+/G-活性、酶稳定性、肾毒性）',
    whyWrong: '考试常考"哪代对铜绿假单胞菌有效""哪代肾毒性最低"等区分点',
    correct: '一代：G+强、肾毒性较大（头孢唑林）。二代：均衡（头孢呋辛）。三代：G-强、部分抗铜绿（头孢他啶）。四代：广谱、抗铜绿（头孢吡肟）。五代：抗MRSA（头孢洛林）',
    caseQuestion: '【案例】MRSA感染的肺炎，应首选哪种头孢菌素？A.头孢唑林 B.头孢呋辛 C.头孢曲松 D.头孢洛林',
    caseAnswer: '答案：D（头孢洛林）。五代头孢（头孢洛林、头孢吡普）是唯一能覆盖MRSA的头孢菌素。前四代头孢均对MRSA无效。注意：MRSA感染首选万古霉素或利奈唑胺，头孢洛林是替代选择。',
    badge: 'trap',
  },
  {
    id: 'ph2-03',
    category: '西药二',
    title: '抗结核药不良反应口诀："肝神耳肾胃肠"',
    trap: '各药的不良反应容易混淆，特别是肝毒性和耳毒性',
    whyWrong: '异烟肼→肝毒性+周围神经炎；利福平→肝毒性+体液橘红色；乙胺丁醇→视神经炎；链霉素→耳肾毒性',
    correct: '异烟肼：肝+神经 / 利福平：肝+橘红体液+诱导肝药酶 / 吡嗪酰胺：肝+高尿酸 / 乙胺丁醇：视神经炎 / 链霉素：耳肾毒性',
    caseQuestion: '【案例】结核患者服用乙胺丁醇2个月后视物模糊，最可能的原因是？',
    caseAnswer: '答案：乙胺丁醇引起的视神经炎。乙胺丁醇特征性不良反应是视神经炎（发生率<1%但严重），表现为视物模糊、色觉障碍。应立即停药并眼科检查。注意区分：异烟肼→周围神经炎（手脚麻木）。',
    badge: 'key',
  },
  {
    id: 'ph2-04',
    category: '西药二',
    title: '他汀类药物的肌肉毒性监测',
    trap: '只知道他汀伤肌肉，但不知道监测指标和停药标准',
    whyWrong: 'CK升高>5倍正常上限或出现肌痛+CK>3倍应停药，横纹肌溶解可致命',
    correct: '监测CK（肌酸激酶）：CK>3×ULN+肌痛→停药 / CK>5×ULN→立即停药 / 出现褐色尿→横纹肌溶解可能',
    caseQuestion: '【案例】患者服用阿托伐他汀20mg/d，复查CK为450U/L（正常上限120U/L），无肌肉疼痛。应如何处理？',
    caseAnswer: '答案：CK为3.75倍正常上限（450/120），虽无肌痛但CK>3×ULN，应暂停他汀类药物，1-2周后复查CK。如CK恢复正常可换用低剂量或换用瑞舒伐他汀等肌肉不良反应较小的他汀。',
    badge: 'case',
  },
  {
    id: 'ph2-05',
    category: '西药二',
    title: '降糖药八大类：低血糖风险排名',
    trap: '记不清哪些降糖药容易引起低血糖',
    whyWrong: '低血糖是糖尿病患者最常见急性并发症，药物选择时需考虑',
    correct: '高风险：胰岛素、磺脲类（格列美脲）、格列奈类（瑞格列奈）。中风险：α-糖苷酶抑制剂（单独用时不会低血糖）。低风险：二甲双胍、SGLT2抑制剂、GLP-1受体激动剂、DPP-4抑制剂',
    caseQuestion: '【案例】老年糖尿病患者（78岁），独居，既往有低血糖昏迷史。首选的口服降糖药是？',
    caseAnswer: '答案：二甲双胍（肾功能正常时）。老年独居患者低血糖风险极高，应避免磺脲类和胰岛素单药。二甲双胍单独使用不引起低血糖，是老年患者的一线选择。如肾功能不全可考虑DPP-4抑制剂。',
    badge: 'case',
  },

  // ======== 药学综合知识与技能 ========
  {
    id: 'prac-01',
    category: '药综',
    title: '处方审核十八项：超适应症用药的判断',
    trap: '知道超适应症不对，但分不清哪些是合理的超适应症用药',
    whyWrong: '有些超说明书用药有循证依据且被指南推荐（如二甲双胍用于PCOS），需区分',
    correct: '合理超说明书用药：有高质量证据+指南推荐+医院备案（如二甲双胍PCOS、美托洛尔偏头痛）。不合理超适应症：无证据、无备案、超出药品说明书明确的禁忌',
    caseQuestion: '【案例】处方开具二甲双胍治疗多囊卵巢综合征（PCOS），该用药属于？A.合理超说明书用药 B.不合理超适应症 C.调剂差错 D.非法用药',
    caseAnswer: '答案：A（合理超说明书用药）。二甲双胍用于PCOS有大量循证医学证据支持，多个指南推荐，且有医院备案的超说明书用药目录可查。注意：单纯按说明书看属于超适应症，但有循证依据时不判定为不合理。',
    badge: 'case',
  },
  {
    id: 'prac-02',
    category: '药综',
    title: '处方颜色速查：白/淡黄/淡绿/淡红',
    trap: '四种处方颜色对应的类型容易记混',
    whyWrong: '颜色记忆没有规律，容易混淆',
    correct: '白色→普通处方 / 淡黄色→急诊处方 / 淡绿色→儿科处方 / 淡红色→麻精药品处方',
    caseQuestion: '【案例】某儿科处方笺为淡绿色，一位不熟悉规定的药师认为是印刷错误，应如何指导？',
    caseAnswer: '答案：淡绿色是儿科处方的标准颜色，不是印刷错误。四种处方颜色：白（普通）、黄（急诊）、绿（儿科）、红（麻精）。注意：麻精处方为淡红色且有专用标识。',
    badge: 'trap',
  },
  {
    id: 'prac-03',
    category: '药综',
    title: 'TDM监测药物：地高辛治疗窗 0.5-2.0 ng/ml',
    trap: '只记得地高辛要监测，不记得具体浓度范围和中毒表现',
    whyWrong: '地高辛治疗窗窄（0.5-2.0 ng/ml），>2.0 ng/ml即中毒，>3.0 ng/ml危及生命',
    correct: '地高辛治疗窗：0.5-2.0 ng/ml。>2.0→中毒（视觉异常：黄视/绿视、心律失常）。采血时间：服药后6-8h（分布相结束后）',
    caseQuestion: '【案例】心衰患者服用地高辛0.25mg/d，服药8小时后采血测得血药浓度2.8ng/ml，主诉看东西发黄。应如何处理？',
    caseAnswer: '答案：地高辛中毒（浓度2.8>2.0，伴黄视）。处理：①立即停药 ②监测心电图（注意房室传导阻滞、室性心律失常）③纠正低钾（补钾，低钾会加重地高辛毒性）④严重者用地高辛抗体Fab片段。注意：肾功能不全时地高辛排泄减慢，老年人需减量。',
    badge: 'key',
  },
  {
    id: 'prac-04',
    category: '药综',
    title: '心衰"新四联"方案：ARNI + β阻滞 + MRA + SGLT2i',
    trap: '只知道旧"金三角"（ACEI+β阻滞+MRA），不知道2026年新四联加了SGLT2抑制剂',
    whyWrong: '2026年指南更新，新四联方案降低了心衰死亡率约30%',
    correct: '新四联：ARNI（沙库巴曲缬沙坦）+ β受体阻滞剂（美托洛尔/比索洛尔）+ MRA（螺内酯）+ SGLT2抑制剂（达格列净）。ARNI替代ACEI/ARB',
    caseQuestion: '【案例】HFrEF患者已服用美托洛尔+缬沙坦+螺内酯，血压120/75mmHg，肾功能正常。下一步应如何优化治疗方案？',
    caseAnswer: '答案：加用SGLT2抑制剂（达格列净10mg qd），并将缬沙坦换为ARNI（沙库巴曲缬沙坦）。这是2026年指南推荐的"新四联"方案，相比传统方案进一步降低心血管死亡和心衰住院风险。注意：ARNI与ACEI替换需间隔36小时。',
    badge: 'case',
  },
  {
    id: 'prac-05',
    category: '药综',
    title: '妊娠期用药：FDA A/B/C/D/X 分级速查',
    trap: '记不清常见药物的分级，特别是降压药和降糖药',
    whyWrong: '妊娠用药是高频考点，X级绝对禁用，C级需权衡利弊',
    correct: 'A级：安全（叶酸、甲状腺素）。B级：可用（头孢类、阿莫西林、二甲双胍、拉贝洛尔）。C级：权衡利弊（氨氯地平）。D级：有风险但可能获益（卡马西平、锂盐）。X级：禁用（华法林、沙利度胺、异维A酸）',
    caseQuestion: '【案例】妊娠28周孕妇诊断为妊娠期高血压（BP 155/95mmHg），可安全使用的降压药是？A.卡托普利 B.缬沙坦 C.拉贝洛尔 D.螺内酯',
    caseAnswer: '答案：C（拉贝洛尔）。拉贝洛尔是妊娠期高血压的一线降压药（B级）。ACEI（卡托普利）和ARB（缬沙坦）为D级（妊娠中晚期禁用，可致胎儿肾损伤）。螺内酯（MRA）在妊娠期安全性数据不足。注意：妊娠期禁用ACEI/ARB是全孕期禁用。',
    badge: 'key',
  },
];

// 按分类分组
const grouped = trapCases.reduce<Record<string, TrapCase[]>>((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {});

const categoryIcons: Record<string, React.ReactNode> = {
  '法规': <FileText size={18} />,
  '西药一': <FlaskConical size={18} />,
  '西药二': <Pill size={18} />,
  '药综': <Stethoscope size={18} />,
};

const categoryColors: Record<string, string> = {
  '法规': 'var(--accent-rust)',
  '西药一': 'var(--accent-gold)',
  '西药二': 'var(--accent-olive)',
  '药综': '#6B7B8D',
};

// ============ 组件 ============

export default function SpecialAttention() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)' }}>
      {/* ======== Hero Cover ======== */}
      <section
        ref={heroRef}
        className="relative py-24 lg:py-32 flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--ink)' }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,0.08) 35px,
            rgba(255,255,255,0.08) 36px
          )`
        }} />
        <div className="relative text-center px-6 max-w-[800px] mx-auto">
          <span
            className="font-display text-sm uppercase tracking-[0.3em]"
            style={{ color: 'var(--accent-rust)' }}
          >
            Special Collection
          </span>
          <h1
            className="font-display text-4xl lg:text-6xl font-bold mt-4"
            style={{ color: 'var(--paper)' }}
          >
            特别注意
          </h1>
          <div className="w-16 h-[2px] mx-auto mt-6" style={{ background: 'var(--accent-rust)' }} />
          <p
            className="mt-6 text-lg lg:text-xl leading-relaxed max-w-[600px] mx-auto"
            style={{ color: 'var(--ink-tertiary)' }}
          >
            编辑部精选 · 高频易错点 · 典型案例解析
          </p>
          <p
            className="mt-3 text-sm"
            style={{ color: 'var(--ink-quaternary)' }}
          >
            共 {trapCases.length} 个考点 · 覆盖四科核心陷阱
          </p>
        </div>
      </section>

      {/* ======== Summary Bar ======== */}
      <section className="border-b py-6" style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)' }}>
        <div className="max-w-content mx-auto px-6 flex flex-wrap justify-center gap-8">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="flex items-center gap-2">
              <span style={{ color: categoryColors[cat] }}>{categoryIcons[cat]}</span>
              <span className="font-chinese-sans text-sm font-medium" style={{ color: 'var(--ink-secondary)' }}>
                {cat}
              </span>
              <span className="text-ui-sm" style={{ color: 'var(--ink-quaternary)' }}>
                ({items.length})
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ======== Main Content ======== */}
      <main className="max-w-content mx-auto px-6 py-16 lg:py-24">
        {Object.entries(grouped).map(([category, cases]) => (
          <div key={category} className="mb-20 last:mb-0">
            {/* Category Header */}
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-10">
                <div
                  className="w-10 h-10 flex items-center justify-center border"
                  style={{ borderColor: categoryColors[category], color: categoryColors[category] }}
                >
                  {categoryIcons[category]}
                </div>
                <div>
                  <h2
                    className="font-chinese-serif text-2xl lg:text-3xl font-bold"
                    style={{ color: 'var(--ink)' }}
                  >
                    {category === '法规' ? '药事管理与法规' :
                      category === '西药一' ? '药学专业知识（一）' :
                      category === '西药二' ? '药学专业知识（二）' :
                      '药学综合知识与技能'}
                  </h2>
                  <p className="text-ui-sm mt-1" style={{ color: 'var(--ink-tertiary)' }}>
                    {cases.length} 个高频考点
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Trap Cards */}
            <div className="space-y-6">
              {cases.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.05}>
                  <div
                    className="border transition-all duration-300 hover:shadow-editorial"
                    style={{
                      borderColor: item.badge === 'trap' ? 'var(--accent-rust)' : 'var(--border)',
                      background: item.badge === 'trap' ? 'var(--accent-rust-light)' : 'var(--paper)',
                    }}
                  >
                    {/* Card Header */}
                    <div className="px-6 py-4 flex items-start gap-3 border-b" style={{ borderColor: 'var(--border-light)' }}>
                      {item.badge === 'trap' ? (
                        <AlertTriangle size={20} style={{ color: 'var(--accent-rust)' }} className="shrink-0 mt-0.5" />
                      ) : item.badge === 'key' ? (
                        <Bookmark size={20} style={{ color: 'var(--accent-olive)' }} className="shrink-0 mt-0.5" />
                      ) : (
                        <ChevronRight size={20} style={{ color: 'var(--accent-gold)' }} className="shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-ui-sm uppercase tracking-wider font-semibold"
                            style={{ color: item.badge === 'trap' ? 'var(--accent-rust)' : item.badge === 'key' ? 'var(--accent-olive)' : 'var(--accent-gold)' }}
                          >
                            {item.badge === 'trap' ? '易错陷阱' : item.badge === 'key' ? '重点必背' : '典型案例'}
                          </span>
                          <span className="text-ui-sm" style={{ color: 'var(--ink-quaternary)' }}>
                            {category}
                          </span>
                        </div>
                        <h3
                          className="font-chinese-serif text-lg font-bold mt-1"
                          style={{ color: 'var(--ink)' }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-5 space-y-4">
                      {/* 陷阱说明 */}
                      <div>
                        <span className="text-ui-sm font-semibold" style={{ color: 'var(--accent-rust)' }}>
                          陷阱：
                        </span>
                        <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                          {item.trap}
                        </p>
                      </div>

                      {/* 为什么容易错 */}
                      <div className="pl-4 border-l-2" style={{ borderColor: 'var(--accent-gold)' }}>
                        <span className="text-ui-sm font-semibold" style={{ color: 'var(--accent-gold)' }}>
                          为什么容易错：
                        </span>
                        <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--ink-tertiary)' }}>
                          {item.whyWrong}
                        </p>
                      </div>

                      {/* 正确答案 */}
                      <div
                        className="px-4 py-3 border-l-[3px]"
                        style={{
                          background: 'var(--accent-olive-light)',
                          borderColor: 'var(--accent-olive)',
                        }}
                      >
                        <span className="text-ui-sm font-semibold" style={{ color: 'var(--accent-olive)' }}>
                          正确要点：
                        </span>
                        <p className="text-sm mt-1 leading-relaxed font-medium" style={{ color: 'var(--ink)' }}>
                          {item.correct}
                        </p>
                      </div>

                      {/* 案例题目 */}
                      <div
                        className="px-4 py-4 border"
                        style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)' }}
                      >
                        <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--ink)' }}>
                          {item.caseQuestion}
                        </p>
                      </div>

                      {/* 案例解析 */}
                      <div className="pl-4 border-l-2" style={{ borderColor: 'var(--accent-rust)' }}>
                        <span className="text-ui-sm font-semibold" style={{ color: 'var(--accent-rust)' }}>
                          解析：
                        </span>
                        <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                          {item.caseAnswer}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <SectionDivider />
          </div>
        ))}

        {/* ======== 考前速查卡 ======== */}
        <ScrollReveal>
          <section
            className="py-12 px-8 text-center"
            style={{ background: 'var(--ink)' }}
          >
            <h2
              className="font-display text-2xl lg:text-3xl font-bold"
              style={{ color: 'var(--paper)' }}
            >
              考前5分钟速查
            </h2>
            <div className="w-12 h-[2px] mx-auto mt-4" style={{ background: 'var(--accent-rust)' }} />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px] mx-auto text-left">
              {[
                { k: '麻精处方保存', v: '3年（普通1年，二类精神2年）' },
                { k: 'ADR死亡上报', v: '立即（先电话后书面）' },
                { k: '半衰期公式', v: 't₁/₂ = 0.693/k' },
                { k: '有效期公式', v: 't₀.₉ = 0.1054/k' },
                { k: 'ACEI干咳换', v: 'ARB（缬沙坦/氯沙坦）' },
                { k: '头孢五代抗MRSA', v: '头孢洛林（五代）' },
                { k: '地高辛治疗窗', v: '0.5-2.0 ng/ml，>2.0中毒' },
                { k: '心衰新四联', v: 'ARNI+β阻滞+MRA+SGLT2i' },
                { k: '降糖低血糖高', v: '胰岛素、磺脲类、格列奈类' },
                { k: '妊娠X级禁用', v: '华法林、异维A酸、沙利度胺' },
                { k: '四查十对', v: '处方/药品/配伍/合理性' },
                { k: '五专管理', v: '专人/专柜/专账/专方/专册' },
              ].map((item) => (
                <div
                  key={item.k}
                  className="flex items-start gap-3 px-4 py-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span className="text-sm font-semibold shrink-0 w-28" style={{ color: 'var(--accent-rust)' }}>
                    {item.k}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--paper)' }}>
                    {item.v}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
}
