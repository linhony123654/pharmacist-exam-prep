import { useState } from 'react';
import { Link2, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface BQuestion {
  id: string;
  category: string;
  title: string;
  description: string;
  options: { label: string; text: string }[];
  questions: { q: string; answer: string; explanation: string }[];
  skillTip: string;
}

const questions: BQuestion[] = [
  // ======== 抗高血压药 ========
  {
    id: 'b-hyp-01',
    category: '抗高血压药',
    title: '配伍1：抗高血压药的不良反应',
    description: '下列药物的主要不良反应：',
    options: [
      { label: 'A', text: '干咳' },
      { label: 'B', text: '踝部水肿' },
      { label: 'C', text: '高钾血症' },
      { label: 'D', text: '低血糖' },
      { label: 'E', text: '支气管痉挛' },
    ],
    questions: [
      { q: '1. 卡托普利的主要不良反应是', answer: 'A', explanation: '卡托普利是ACEI类药物，抑制ACE导致缓激肽蓄积，引起刺激性干咳（发生率5-20%），是其特征性不良反应。' },
      { q: '2. 氨氯地平的主要不良反应是', answer: 'B', explanation: '氨氯地平是二氢吡啶类钙通道阻滞剂，扩张外周血管导致毛细血管静水压升高，引起踝部水肿（与心力衰竭无关的水肿）。' },
      { q: '3. 螺内酯的主要不良反应是', answer: 'C', explanation: '螺内酯是醛固酮受体拮抗剂（保钾利尿药），拮抗醛固酮的排钾作用，可导致高钾血症，需定期监测血钾。' },
      { q: '4. 普萘洛尔的主要不良反应是', answer: 'E', explanation: '普萘洛尔是非选择性β受体阻滞剂，阻断支气管平滑肌β₂受体，可诱发或加重支气管哮喘，禁用于哮喘患者。' },
    ],
    skillTip: 'ACEI=干咳、CCB=踝水肿、螺内酯=高钾、β阻滞=支气管痉挛——记住特征性不良反应是配伍题的关键。',
  },
  {
    id: 'b-hyp-02',
    category: '抗高血压药',
    title: '配伍2：高血压合并症的用药选择',
    description: '下列患者应首选的降压药：',
    options: [
      { label: 'A', text: 'ACEI/ARB' },
      { label: 'B', text: 'CCB' },
      { label: 'C', text: 'β受体阻滞剂' },
      { label: 'D', text: '利尿剂' },
      { label: 'E', text: 'α受体阻滞剂' },
    ],
    questions: [
      { q: '1. 高血压合并糖尿病肾病', answer: 'A', explanation: 'ACEI/ARB可降低肾小球内压、减少蛋白尿、保护肾功能，是糖尿病肾病伴高血压的首选（有肾脏保护作用）。' },
      { q: '2. 高血压合并冠心病心绞痛', answer: 'C', explanation: 'β受体阻滞剂可降低心肌耗氧量、减少心绞痛发作，是高血压合并冠心病心绞痛的首选。' },
      { q: '3. 老年单纯收缩期高血压', answer: 'B', explanation: 'CCB对收缩压降低效果好，对代谢无不良影响，是老年单纯收缩期高血压的首选。' },
      { q: '4. 高血压合并前列腺增生', answer: 'E', explanation: 'α受体阻滞剂（如特拉唑嗪）可同时松弛血管平滑肌和前列腺平滑肌，降压同时改善排尿症状。' },
    ],
    skillTip: '糖尿病肾病→ACEI/ARB、心绞痛→β阻滞、老年收缩期高→CCB、前列腺增生→α阻滞。合并症用药选择是每年必考！',
  },

  // ======== 抗菌药物 ========
  {
    id: 'b-abx-01',
    category: '抗菌药物',
    title: '配伍3：头孢菌素五代特点',
    description: '各代头孢菌素的主要特点：',
    options: [
      { label: 'A', text: '对G+菌作用强，肾毒性较大' },
      { label: 'B', text: '对G-菌作用增强，对铜绿假单胞菌无效' },
      { label: 'C', text: '对G-菌作用强，部分对铜绿假单胞菌有效' },
      { label: 'D', text: '广谱，对铜绿假单胞菌有效，对β-内酰胺酶稳定' },
      { label: 'E', text: '对MRSA有效，广谱' },
    ],
    questions: [
      { q: '1. 第一代头孢菌素（如头孢唑林）', answer: 'A', explanation: '一代头孢主要作用于G+菌（金葡菌、链球菌），对G-菌弱，肾毒性相对较大（头孢噻吩>头孢唑林>头孢拉定）。' },
      { q: '2. 第三代头孢菌素（如头孢他啶）', answer: 'C', explanation: '三代头孢对G-菌作用强，头孢他啶和头孢哌酮对铜绿假单胞菌有效，但对G+菌弱于二代，对MRSA无效。' },
      { q: '3. 第四代头孢菌素（如头孢吡肟）', answer: 'D', explanation: '四代头孢兼具三代对G-的强效和二代对G+的活性，对铜绿假单胞菌有效，对AmpC酶稳定（这是优于三代的特点）。' },
      { q: '4. 第五代头孢菌素（如头孢洛林）', answer: 'E', explanation: '五代头孢是目前唯一对MRSA有效的头孢菌素（头孢洛林和头孢吡普），同时保留了对G-菌的活性。' },
    ],
    skillTip: '口诀：一G强肾毒，二均衡，三G强部分铜绿，四广谱铜绿AmpC稳，五抗MRSA。MRSA→五代头孢→万古霉素。',
  },
  {
    id: 'b-abx-02',
    category: '抗菌药物',
    title: '配伍4：抗菌药物的抗菌谱',
    description: '下列药物的主要抗菌谱特点：',
    options: [
      { label: 'A', text: '军团菌、支原体、衣原体' },
      { label: 'B', text: '厌氧菌（脆弱拟杆菌）' },
      { label: 'C', text: '铜绿假单胞菌' },
      { label: 'D', text: '结核分枝杆菌' },
      { label: 'E', text: '真菌（白色念珠菌）' },
    ],
    questions: [
      { q: '1. 阿奇霉素覆盖的特殊病原体是', answer: 'A', explanation: '阿奇霉素是大环内酯类，覆盖非典型病原体：军团菌、支原体、衣原体、百日咳杆菌，常用于社区获得性肺炎。' },
      { q: '2. 甲硝唑覆盖的特殊病原体是', answer: 'B', explanation: '甲硝唑对厌氧菌（尤其是脆弱拟杆菌）杀菌效果好，是治疗腹腔感染、牙周感染、伪膜性肠炎的首选。' },
      { q: '3. 头孢他啶覆盖的特殊病原体是', answer: 'C', explanation: '头孢他啶是三代头孢中对铜绿假单胞菌活性最强的，常与氨基糖苷类联合用于铜绿假单胞菌感染。' },
      { q: '4. 异烟肼覆盖的病原体是', answer: 'D', explanation: '异烟肼是抗结核一线药物，对繁殖期结核分枝杆菌有强大杀菌作用，可穿透 caseous necrosis 到达病灶。' },
    ],
    skillTip: '大环内酯→非典型(军团/支/衣)、甲硝唑→厌氧菌、他啶→铜绿、异烟肼→结核。特殊病原体覆盖是高频考点。',
  },
  {
    id: 'b-abx-03',
    category: '抗菌药物',
    title: '配伍5：抗结核药的不良反应',
    description: '下列抗结核药的特征性不良反应：',
    options: [
      { label: 'A', text: '肝毒性+周围神经炎' },
      { label: 'B', text: '肝毒性+体液橘红色' },
      { label: 'C', text: '视神经炎' },
      { label: 'D', text: '耳毒性+肾毒性' },
      { label: 'E', text: '高尿酸血症' },
    ],
    questions: [
      { q: '1. 异烟肼的特征性不良反应是', answer: 'A', explanation: '异烟肼：肝毒性（最常见，需定期监测ALT）+ 周围神经炎（与VitB6缺乏有关，需同服VitB6预防）。' },
      { q: '2. 利福平的特征性不良反应是', answer: 'B', explanation: '利福平：肝毒性 + 体液/分泌物/泪液呈橘红色（正常现象，需告知患者不必恐慌）+ 强CYP450诱导剂。' },
      { q: '3. 乙胺丁醇的特征性不良反应是', answer: 'C', explanation: '乙胺丁醇：视神经炎（球后视神经炎，表现为视力下降、色觉障碍），需定期眼科检查，发生后立即停药。' },
      { q: '4. 链霉素的特征性不良反应是', answer: 'D', explanation: '链霉素：耳毒性（前庭损害为主，表现为眩晕、共济失调）+ 肾毒性（蛋白尿、管型尿），需监测肾功能和前庭功能。' },
    ],
    skillTip: '口诀：异烟肼→肝+神经、利福平→肝+橘红、乙胺丁醇→视神经、链霉素→耳+肾、吡嗪酰胺→肝+高尿酸。',
  },

  // ======== 降糖药 ========
  {
    id: 'b-dm-01',
    category: '降糖药',
    title: '配伍6：降糖药的分类与特点',
    description: '下列降糖药的作用机制：',
    options: [
      { label: 'A', text: '促进胰岛素分泌' },
      { label: 'B', text: '抑制肝糖输出，增加外周胰岛素敏感性' },
      { label: 'C', text: '抑制α-糖苷酶，延缓葡萄糖吸收' },
      { label: 'D', text: '抑制DPP-4，增加内源性GLP-1' },
      { label: 'E', text: '促进尿糖排泄' },
    ],
    questions: [
      { q: '1. 二甲双胍的作用机制是', answer: 'B', explanation: '二甲双胍通过激活AMPK通路，抑制肝脏糖异生和糖原分解（减少肝糖输出），同时增加肌肉和脂肪组织对胰岛素的敏感性。' },
      { q: '2. 阿卡波糖的作用机制是', answer: 'C', explanation: '阿卡波糖是α-糖苷酶抑制剂，在小肠竞争性抑制α-糖苷酶，延缓碳水化合物分解为单糖，延缓葡萄糖吸收（降餐后血糖）。' },
      { q: '3. 西格列汀的作用机制是', answer: 'D', explanation: '西格列汀是DPP-4抑制剂，抑制DPP-4酶降解内源性GLP-1，增加GLP-1浓度，以葡萄糖依赖性方式促进胰岛素分泌。' },
      { q: '4. 达格列净的作用机制是', answer: 'E', explanation: '达格列净是SGLT2抑制剂，抑制肾小管对葡萄糖的重吸收，促进尿糖排泄（每天排糖约70-80g），同时有利尿和减重作用。' },
    ],
    skillTip: '二甲双胍→AMPK→抑肝糖、阿卡波糖→α糖苷酶→延缓吸收、DPP-4i→保护GLP-1、SGLT2i→尿糖排泄。',
  },
  {
    id: 'b-dm-02',
    category: '降糖药',
    title: '配伍7：降糖药的低血糖风险',
    description: '下列降糖药的低血糖风险分类：',
    options: [
      { label: 'A', text: '低血糖风险高（常见）' },
      { label: 'B', text: '低血糖风险中等' },
      { label: 'C', text: '低血糖风险低（罕见）' },
      { label: 'D', text: '单独使用不引起低血糖' },
      { label: 'E', text: '可引起酮症酸中毒（正常血糖性）' },
    ],
    questions: [
      { q: '1. 格列美脲（磺脲类）', answer: 'A', explanation: '磺脲类直接刺激胰岛β细胞分泌胰岛素，降糖作用强，是口服降糖药中低血糖风险最高的，老年患者尤其需注意。' },
      { q: '2. 二甲双胍', answer: 'D', explanation: '二甲双胍单独使用时不会引起低血糖（因其不直接刺激胰岛素分泌），但与其他降糖药联用时可能出现低血糖。' },
      { q: '3. 西格列汀（DPP-4抑制剂）', answer: 'C', explanation: 'DPP-4抑制剂以葡萄糖依赖性方式促进胰岛素分泌（血糖高时促分泌，血糖正常时作用弱），低血糖风险低。' },
      { q: '4. 达格列净（SGLT2抑制剂）', answer: 'E', explanation: 'SGLT2抑制剂可致正常血糖性酮症酸中毒（euDKA），虽然罕见但可能致命。胰岛素缺乏时（如手术、感染）风险增加。' },
    ],
    skillTip: '低血糖高风险：胰岛素+磺脲+格列奈。二甲双胍、α糖苷酶抑制剂、DPP-4i、SGLT2i单独使用不低血糖。SGLT2i特殊风险：正常血糖性酮症酸中毒。',
  },

  // ======== 心血管药物 ========
  {
    id: 'b-cv-01',
    category: '心血管药物',
    title: '配伍8：调血脂药的作用靶点',
    description: '下列调血脂药的作用靶点：',
    options: [
      { label: 'A', text: '抑制HMG-CoA还原酶' },
      { label: 'B', text: '抑制胆固醇肠道吸收' },
      { label: 'C', text: '激活PPAR-α' },
      { label: 'D', text: '抑制脂肪组织脂解' },
      { label: 'E', text: '抑制PCSK9' },
    ],
    questions: [
      { q: '1. 阿托伐他汀', answer: 'A', explanation: '他汀类竞争性抑制HMG-CoA还原酶（胆固醇合成的限速酶），减少胆固醇合成，同时上调LDL受体→增加LDL清除→降低LDL-C 30-50%。' },
      { q: '2. 非诺贝特', answer: 'C', explanation: '贝特类是PPAR-α激动剂，激活过氧化物酶体增殖物激活受体α，促进脂肪酸氧化，降低TG（30-50%），升高HDL-C。' },
      { q: '3. 依折麦布', answer: 'B', explanation: '依折麦布选择性抑制小肠刷状缘的尼曼-匹克C1型类蛋白（NPC1L1），抑制胆固醇的肠道吸收，单用可降低LDL-C约18%。' },
      { q: '4. 依洛尤单抗', answer: 'E', explanation: '依洛尤单抗是全人源抗PCSK9单克隆抗体，结合PCSK9阻止其降解LDL受体，增加LDL-C清除，可降低LDL-C达60%以上。' },
    ],
    skillTip: '他汀→HMG-CoA还原酶、贝特→PPAR-α、依折麦布→抑吸收、PCSK9单抗→保LDL受体。四类调脂药靶点各不相同。',
  },
  {
    id: 'b-cv-02',
    category: '心血管药物',
    title: '配伍9：抗凝药的特点对比',
    description: '下列抗凝药的特点：',
    options: [
      { label: 'A', text: '起效快（分钟级），需监测APTT，鱼精蛋白可逆转' },
      { label: 'B', text: '起效慢（数天），需监测INR，VitK可逆转' },
      { label: 'C', text: '口服，直接抑制Xa因子，无需常规监测' },
      { label: 'D', text: '口服，直接抑制IIa因子，无特异性拮抗剂' },
      { label: 'E', text: '抑制血小板聚集，不可逆抑制COX-1' },
    ],
    questions: [
      { q: '1. 肝素', answer: 'A', explanation: '肝素静脉给药起效极快（数分钟），需监测APTT调整剂量，过量可用鱼精蛋白中和（1mg鱼精蛋白中和约100U肝素）。' },
      { q: '2. 华法林', answer: 'B', explanation: '华法林口服起效慢（需3-5天才能达到稳态抗凝），需监测INR（目标2.0-3.0），过量用VitK逆转，孕期禁用。' },
      { q: '3. 利伐沙班', answer: 'C', explanation: '利伐沙班是直接Xa因子抑制剂，口服给药，固定剂量，无需常规凝血监测。目前Andexanet alfa可逆转其抗凝作用。' },
      { q: '4. 阿司匹林', answer: 'E', explanation: '阿司匹林通过不可逆乙酰化血小板COX-1，抑制TXA₂生成，从而抑制血小板聚集。小剂量（75-100mg/d）用于心血管事件一级/二级预防。' },
    ],
    skillTip: '肝素→快/监测APTT/鱼精蛋白逆转、华法林→慢/监测INR/VitK逆转、DOAC→口服固定量/不常规监测、阿司匹林→抗血小板不可逆。',
  },

  // ======== 消化系统 ========
  {
    id: 'b-gi-01',
    category: '消化系统用药',
    title: '配伍10：抑酸药的作用机制',
    description: '下列抑酸药的作用靶点：',
    options: [
      { label: 'A', text: 'H₂受体' },
      { label: 'B', text: 'H⁺/K⁺-ATP酶（质子泵）' },
      { label: 'C', text: 'M胆碱受体' },
      { label: 'D', text: '胃泌素受体' },
      { label: 'E', text: '前列腺素受体' },
    ],
    questions: [
      { q: '1. 雷尼替丁作用于', answer: 'A', explanation: '雷尼替丁是H₂受体阻断剂，竞争性阻断胃壁细胞H₂受体，抑制基础胃酸和刺激引起的胃酸分泌，抑酸强度中等。' },
      { q: '2. 奥美拉唑作用于', answer: 'B', explanation: '奥美拉唑是PPI，不可逆抑制胃壁细胞H⁺/K⁺-ATP酶（质子泵），抑制胃酸分泌的最后一步，抑酸作用强而持久（可降低胃酸90%以上）。' },
      { q: '3. 哌仑西平作用于', answer: 'C', explanation: '哌仑西平是选择性M₁胆碱受体阻断剂，阻断迷走神经释放的乙酰胆碱对胃壁细胞的刺激，减少胃酸分泌。' },
      { q: '4. 米索前列醇作用于', answer: 'E', explanation: '米索前列醇是PGE₁类似物，作用于前列腺素受体，抑制胃酸分泌+增加胃黏膜血流+促进黏液和HCO₃⁻分泌（胃黏膜保护作用）。' },
    ],
    skillTip: 'H₂→雷尼替丁、PPI→奥美拉唑、M₁→哌仑西平、PGE→米索前列醇。抑酸强度：PPI > H₂ > M₁。PPI不可逆结合，需新合成酶才能恢复。',
  },
];

function BQuestionCard({ q }: { q: BQuestion }) {
  const [revealed, setRevealed] = useState<boolean[]>(q.questions.map(() => false));
  const toggle = (i: number) => {
    const next = [...revealed];
    next[i] = !next[i];
    setRevealed(next);
  };

  return (
    <div className="border" style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}>
      {/* Header */}
      <div className="px-6 py-4 border-b" style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-2">
          <Link2 size={16} style={{ color: 'var(--accent-olive)' }} />
          <span className="text-ui-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--accent-olive)' }}>
            {q.category}
          </span>
        </div>
        <h3 className="font-chinese-serif text-lg font-bold mt-2" style={{ color: 'var(--ink)' }}>{q.title}</h3>
        <p className="text-sm mt-1" style={{ color: 'var(--ink-tertiary)' }}>{q.description}</p>
      </div>

      {/* Options */}
      <div className="px-6 py-3 border-b" style={{ borderColor: 'var(--border-light)' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {q.options.map((opt) => (
            <div key={opt.label} className="flex items-start gap-2 px-3 py-2" style={{ background: 'var(--paper-dark)' }}>
              <span className="shrink-0 w-6 h-6 flex items-center justify-center text-xs font-bold" style={{ background: 'var(--accent-olive)', color: 'var(--paper)' }}>
                {opt.label}
              </span>
              <span className="text-sm" style={{ color: 'var(--ink-secondary)' }}>{opt.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="divide-y" style={{ borderColor: 'var(--border-light)' }}>
        {q.questions.map((ques, i) => (
          <div key={i} className="px-6 py-4">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium leading-relaxed flex-1" style={{ color: 'var(--ink)' }}>
                {ques.q}
              </p>
              <button
                onClick={() => toggle(i)}
                className="shrink-0 px-3 py-1 text-xs border transition-all hover:opacity-80"
                style={{
                  background: revealed[i] ? 'var(--accent-olive)' : 'transparent',
                  color: revealed[i] ? 'var(--paper)' : 'var(--ink-tertiary)',
                  borderColor: 'var(--border)',
                }}
              >
                {revealed[i] ? '隐藏解析' : '查看答案'}
              </button>
            </div>

            {revealed[i] && (
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center text-xs font-bold" style={{ background: 'var(--accent-olive)', color: 'var(--paper)' }}>
                    {ques.answer}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--accent-olive)' }}>正确答案</span>
                </div>
                <p className="text-sm leading-relaxed pl-8" style={{ color: 'var(--ink-secondary)' }}>
                  {ques.explanation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Skill Tip */}
      <div className="px-6 py-3 border-t flex items-start gap-2" style={{ background: 'var(--accent-gold-light)', borderColor: 'var(--border-light)' }}>
        <CheckCircle size={14} style={{ color: 'var(--accent-gold)' }} className="shrink-0 mt-0.5" />
        <p className="text-sm" style={{ color: 'var(--ink-secondary)' }}>{q.skillTip}</p>
      </div>
    </div>
  );
}

export default function BTypePractice() {
  const [filter, setFilter] = useState('全部');
  const categories = ['全部', ...Array.from(new Set(questions.map((q) => q.category)))];
  const filtered = filter === '全部' ? questions : questions.filter((q) => q.category === filter);

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)' }}>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 flex items-center justify-center overflow-hidden" style={{ background: 'var(--ink)' }}>
        <div className="relative text-center px-6 max-w-[800px] mx-auto">
          <span className="font-display text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--accent-olive)' }}>
            B-Type Questions
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--paper)' }}>
            配伍选择题专项训练
          </h1>
          <div className="w-16 h-[2px] mx-auto mt-6" style={{ background: 'var(--accent-olive)' }} />
          <p className="mt-6 text-lg leading-relaxed max-w-[600px] mx-auto" style={{ color: 'var(--ink-tertiary)' }}>
            西药二 · B型题占40分 · 每组5选4 · 先藏答案自测再展开解析
          </p>
          <p className="mt-3 text-sm" style={{ color: 'var(--ink-quaternary)' }}>
            共 {questions.length} 组配伍题 · {questions.reduce((a, q) => a + q.questions.length, 0)} 道小题
          </p>
        </div>
      </section>

      {/* Strategy Banner */}
      <section className="max-w-content mx-auto px-6 py-8">
        <ScrollReveal>
          <div className="border p-6" style={{ background: 'var(--paper-dark)', borderColor: 'var(--accent-olive)' }}>
            <h2 className="font-chinese-serif text-lg font-bold mb-3" style={{ color: 'var(--ink)' }}>
              B型题答题策略
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold" style={{ color: 'var(--accent-olive)' }}>Step 1：先读选项</span>
                <p className="mt-1" style={{ color: 'var(--ink-secondary)' }}>快速浏览5个选项，了解考查范围</p>
              </div>
              <div>
                <span className="font-semibold" style={{ color: 'var(--accent-olive)' }}>Step 2：逐题匹配</span>
                <p className="mt-1" style={{ color: 'var(--ink-secondary)' }}>每道题独立判断，不受其他题影响</p>
              </div>
              <div>
                <span className="font-semibold" style={{ color: 'var(--accent-olive)' }}>Step 3：排除法</span>
                <p className="mt-1" style={{ color: 'var(--ink-secondary)' }}>先用确定答案排除选项，减少剩余难度</p>
              </div>
            </div>
            <p className="mt-4 text-sm" style={{ color: 'var(--accent-rust)' }}>
              ⚠️ 注意：B型题选项可以重复选用，也可以不被选用！每道题独立作答。
            </p>
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
              style={{ background: filter === c ? 'var(--accent-olive)' : 'transparent', color: filter === c ? 'var(--paper)' : 'var(--ink-secondary)', borderColor: filter === c ? 'var(--accent-olive)' : 'var(--border)' }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Questions */}
      <main className="max-w-content mx-auto px-6 pb-24 pt-8 space-y-8">
        {filtered.map((q, i) => (
          <ScrollReveal key={q.id} delay={i * 0.05}>
            <BQuestionCard q={q} />
          </ScrollReveal>
        ))}
      </main>
    </div>
  );
}
