// ==========================================
// AI Question Templates — Pharmaceutical Exam Prep
// ==========================================

export interface ChoiceVariation {
  condition: string;
  answer: string;
}

export interface ChoiceTemplate {
  id: string;
  category: string;
  tags: string[];
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  variations: ChoiceVariation[];
}

export interface MatchingGroup {
  left: string;
  right: string;
}

export interface BTypeTemplate {
  id: string;
  category: string;
  tags: string[];
  instruction: string;
  groups: MatchingGroup[];
  options: string[];
  correctOrder: number[];
  explanation: string;
}

export interface CalcVariation {
  params: Record<string, string | number>;
  correct: string;
}

export interface CalcTemplate {
  id: string;
  category: string;
  tags: string[];
  question: string;
  formula: string;
  variations: CalcVariation[];
  explanation: string;
}

// ==========================================
// 最佳选择题 Templates (30+)
// ==========================================
export const choiceTemplates: ChoiceTemplate[] = [
  // --- 抗高血压药 (5) ---
  {
    id: 'c1',
    category: '抗高血压药',
    tags: ['高血压', '降压药', '首选', '合并症'],
    question: '高血压合并{condition}的首选降压药是？',
    options: ['ACEI/ARB', 'CCB', 'β受体阻滞剂', '利尿剂'],
    correct: 0,
    explanation: 'ACEI/ARB类药物具有肾脏保护作用，可减少蛋白尿，是高血压合并糖尿病的首选。',
    variations: [
      { condition: '糖尿病肾病', answer: 'ACEI/ARB（降蛋白尿保护肾功能）' },
      { condition: '冠心病心绞痛', answer: 'β受体阻滞剂（降低心肌耗氧）' },
      { condition: '心力衰竭', answer: 'ACEI/ARB + β受体阻滞剂（逆转心室重构）' },
      { condition: '妊娠期', answer: '甲基多巴/拉贝洛尔（妊娠期安全）' },
      { condition: '双侧肾动脉狭窄', answer: 'CCB（ACEI/ARB禁忌）' },
    ],
  },
  {
    id: 'c2',
    category: '抗高血压药',
    tags: ['高血压', 'ACEI', '不良反应'],
    question: 'ACEI类药物最常见的不良反应是？',
    options: ['干咳', '踝部水肿', '心动过缓', '高钾血症'],
    correct: 0,
    explanation: 'ACEI类药物由于抑制缓激肽降解，最常见的副作用是干咳，发生率约5-20%。',
    variations: [
      { condition: '干咳', answer: '缓激肽积累所致，停药后可换用ARB' },
      { condition: '血管性水肿', answer: '虽少见但严重，需立即停药' },
      { condition: '首剂低血压', answer: '多见于容量不足或联用利尿剂者' },
    ],
  },
  {
    id: 'c3',
    category: '抗高血压药',
    tags: ['CCB', '钙通道阻滞剂', '分类'],
    question: '下列属于二氢吡啶类钙通道阻滞剂的是？',
    options: ['硝苯地平', '维拉帕米', '地尔硫䓬', '普萘洛尔'],
    correct: 0,
    explanation: '硝苯地平、氨氯地平、非洛地平均为二氢吡啶类CCB；维拉帕米和地尔硫䓬为非二氢吡啶类。',
    variations: [
      { condition: '二氢吡啶类', answer: '硝苯地平、氨氯地平（主要扩张血管）' },
      { condition: '非二氢吡啶类', answer: '维拉帕米、地尔硫䓬（兼有负性肌力作用）' },
    ],
  },
  {
    id: 'c4',
    category: '抗高血压药',
    tags: ['利尿剂', '氢氯噻嗪', '不良反应'],
    question: '长期使用氢氯噻嗪最常见的不良反应是？',
    options: ['低钾血症', '高尿酸血症', '高血糖', '血脂异常'],
    correct: 0,
    explanation: '氢氯噻嗪通过抑制远曲小管Na+-Cl-同向转运体，长期使用最常引起低钾血症。',
    variations: [
      { condition: '低钾', answer: '需定期监测血钾，必要时补钾' },
      { condition: '高尿酸', answer: '痛风患者慎用' },
      { condition: '高血糖', answer: '糖尿病患者需监测血糖' },
    ],
  },
  {
    id: 'c5',
    category: '抗高血压药',
    tags: ['β受体阻滞剂', '禁忌证'],
    question: '下列哪种情况禁用β受体阻滞剂？',
    options: ['支气管哮喘', '心绞痛', '心力衰竭', '甲亢'],
    correct: 0,
    explanation: 'β受体阻滞剂可诱发支气管痉挛，支气管哮喘患者禁用。',
    variations: [
      { condition: '支气管哮喘', answer: '阻断β2受体诱发支气管痉挛' },
      { condition: '严重心动过缓', answer: '加重心动过缓' },
      { condition: '二度以上房室传导阻滞', answer: '加重传导阻滞' },
    ],
  },

  // --- 抗菌药物 (6) ---
  {
    id: 'c6',
    category: '抗菌药物',
    tags: ['青霉素', '头孢', '过敏反应'],
    question: '青霉素过敏反应中最严重的是？',
    options: ['过敏性休克', '皮疹', '药物热', '血清病样反应'],
    correct: 0,
    explanation: '过敏性休克是青霉素最严重的不良反应，需立即皮下注射肾上腺素抢救。',
    variations: [
      { condition: '过敏性休克', answer: '立即注射肾上腺素0.3-0.5mg皮下/肌注' },
      { condition: '交叉过敏', answer: '青霉素与头孢交叉过敏率约5-10%' },
    ],
  },
  {
    id: 'c7',
    category: '抗菌药物',
    tags: ['头孢菌素', '分代', '特点'],
    question: '第三代头孢菌素的特点是？',
    options: ['对G-菌作用强，对G+菌作用弱', '对G+菌作用强', '抗铜绿假单胞菌最强', '对厌氧菌作用最强'],
    correct: 0,
    explanation: '三代头孢（头孢噻肟、头孢曲松、头孢他啶）对G-菌包括肠杆菌科作用增强，但对G+菌作用较二代弱。',
    variations: [
      { condition: '第三代', answer: 'G-杆菌为主，透过血脑屏障' },
      { condition: '第四代', answer: '头孢吡肟，G+/G-均强' },
      { condition: '第五代', answer: '头孢洛林，对MRSA有效' },
    ],
  },
  {
    id: 'c8',
    category: '抗菌药物',
    tags: ['喹诺酮', '环丙沙星', '禁忌'],
    question: '喹诺酮类药物的禁忌人群不包括？',
    options: ['高血压患者', '18岁以下青少年', '妊娠期妇女', '癫痫患者'],
    correct: 0,
    explanation: '喹诺酮可影响软骨发育，禁用于18岁以下；可诱发癫痫，癫痫患者慎用；妊娠期禁用。',
    variations: [
      { condition: '18岁以下', answer: '影响软骨发育' },
      { condition: '癫痫', answer: '降低惊厥阈值' },
      { condition: 'QT延长', answer: '可引起尖端扭转型室速' },
    ],
  },
  {
    id: 'c9',
    category: '抗菌药物',
    tags: ['氨基糖苷', '庆大霉素', '不良反应'],
    question: '氨基糖苷类抗生素的主要不良反应是？',
    options: ['耳毒性、肾毒性', '骨髓抑制', '肝毒性', '假膜性肠炎'],
    correct: 0,
    explanation: '氨基糖苷类（庆大霉素、阿米卡星）主要不良反应为耳毒性和肾毒性，需监测血药浓度。',
    variations: [
      { condition: '耳肾毒性', answer: '不可逆听力损害需警惕' },
      { condition: '神经肌肉阻滞', answer: '大剂量静脉快速给药可致呼吸抑制' },
    ],
  },
  {
    id: 'c10',
    category: '抗菌药物',
    tags: ['大环内酯', '红霉素', '相互作用'],
    question: '红霉素的主要不良反应是？',
    options: ['胃肠道反应', '骨髓抑制', '耳毒性', '光敏反应'],
    correct: 0,
    explanation: '红霉素最常见的不良反应是胃肠道反应（恶心、呕吐、腹泻），因促进胃肠蠕动所致。',
    variations: [
      { condition: '胃肠道反应', answer: '与促胃肠动力作用有关' },
      { condition: '肝毒性', answer: '酯化物（依托红霉素）可引起胆汁淤积性肝炎' },
      { condition: 'QT延长', answer: '大环内酯类均可延长QT间期' },
    ],
  },
  {
    id: 'c11',
    category: '抗菌药物',
    tags: ['万古霉素', 'MRSA', 'TDM'],
    question: '治疗MRSA感染的首选药物是？',
    options: ['万古霉素', '头孢唑林', '阿莫西林', '庆大霉素'],
    correct: 0,
    explanation: '万古霉素是治疗MRSA（耐甲氧西林金黄色葡萄球菌）感染的首选药物，需监测血药浓度。',
    variations: [
      { condition: 'MRSA', answer: '万古霉素或利奈唑胺' },
      { condition: 'VRE', answer: '利奈唑胺或达托霉素' },
    ],
  },

  // --- 消化系统药物 (4) ---
  {
    id: 'c12',
    category: '消化系统药物',
    tags: ['PPI', '奥美拉唑', '机制'],
    question: '奥美拉唑的作用机制是？',
    options: ['抑制H+/K+-ATP酶', '阻断H2受体', '中和胃酸', '保护胃黏膜'],
    correct: 0,
    explanation: 'PPI（质子泵抑制剂）通过不可逆抑制胃壁细胞H+/K+-ATP酶，阻断胃酸分泌的最后环节。',
    variations: [
      { condition: 'PPI', answer: '抑制H+/K+-ATP酶（质子泵）' },
      { condition: 'H2受体拮抗剂', answer: '雷尼替丁、法莫替丁' },
      { condition: '抗酸药', answer: '氢氧化铝、碳酸氢钠（中和胃酸）' },
    ],
  },
  {
    id: 'c13',
    category: '消化系统药物',
    tags: ['促胃肠动力', '甲氧氯普胺', '多潘立酮'],
    question: '甲氧氯普胺最主要的不良反应是？',
    options: ['锥体外系反应', '心律失常', '腹泻', '肝损伤'],
    correct: 0,
    explanation: '甲氧氯普胺阻断中枢多巴胺D2受体，可引起锥体外系反应（尤其是儿童和老年人）。',
    variations: [
      { condition: '锥体外系反应', answer: '与阻断中枢D2受体有关' },
      { condition: '高泌乳素血症', answer: '阻断多巴胺对泌乳素的抑制' },
    ],
  },
  {
    id: 'c14',
    category: '消化系统药物',
    tags: ['溃疡', '幽门螺杆菌', '三联疗法'],
    question: '根除幽门螺杆菌的标准三联疗法不包括？',
    options: ['甲硝唑+克拉霉素+铋剂', 'PPI+克拉霉素+阿莫西林', 'PPI+阿莫西林+甲硝唑', 'PPI+克拉霉素+甲硝唑'],
    correct: 0,
    explanation: '标准三联疗法：PPI + 克拉霉素 + 阿莫西林/甲硝唑。铋剂四联疗法含铋剂+PPI+两种抗生素。',
    variations: [
      { condition: '三联疗法', answer: 'PPI+两种抗生素' },
      { condition: '四联疗法', answer: '铋剂+PPI+两种抗生素（根除率更高）' },
    ],
  },
  {
    id: 'c15',
    category: '消化系统药物',
    tags: ['止泻药', '蒙脱石散', '洛哌丁胺'],
    question: '急性感染性腹泻不宜使用的是？',
    options: ['洛哌丁胺（重度感染性腹泻）', '口服补液盐', '蒙脱石散', '益生菌'],
    correct: 0,
    explanation: '重度感染性腹泻禁用洛哌丁胺，因抑制肠蠕动可导致毒素滞留，加重病情。',
    variations: [
      { condition: '感染性腹泻', answer: '避免使用抑制肠蠕动药物' },
      { condition: '功能性腹泻', answer: '可使用洛哌丁胺' },
    ],
  },

  // --- 呼吸系统药物 (3) ---
  {
    id: 'c16',
    category: '呼吸系统药物',
    tags: ['哮喘', '沙丁胺醇', 'β2激动剂'],
    question: '沙丁胺醇属于哪类平喘药？',
    options: ['短效β2受体激动剂', '长效β2受体激动剂', '抗胆碱药', '糖皮质激素'],
    correct: 0,
    explanation: '沙丁胺醇是短效β2受体激动剂（SABA），起效快（5-15min），用于急性发作缓解。',
    variations: [
      { condition: 'SABA', answer: '沙丁胺醇、特布他林（急性缓解）' },
      { condition: 'LABA', answer: '福莫特罗、沙美特罗（维持治疗）' },
      { condition: 'ICS', answer: '布地奈德、氟替卡松（控制炎症）' },
    ],
  },
  {
    id: 'c17',
    category: '呼吸系统药物',
    tags: ['氨茶碱', '茶碱', '毒性'],
    question: '氨茶碱的有效血药浓度范围和中毒浓度分别是？',
    options: ['5-15μg/ml；>20μg/ml', '10-20μg/ml；>30μg/ml', '2-5μg/ml；>10μg/ml', '15-25μg/ml；>40μg/ml'],
    correct: 0,
    explanation: '茶碱治疗窗窄，有效浓度5-15μg/ml，>20μg/ml可出现恶心、心律失常、抽搐等中毒症状。',
    variations: [
      { condition: '治疗窗', answer: '5-15μg/ml，需TDM监测' },
      { condition: '中毒表现', answer: '恶心、呕吐、心律失常、抽搐' },
    ],
  },
  {
    id: 'c18',
    category: '呼吸系统药物',
    tags: ['镇咳药', '祛痰药', '可待因'],
    question: '下列属于中枢性镇咳药的是？',
    options: ['右美沙芬', '氨溴索', '乙酰半胱氨酸', '溴己新'],
    correct: 0,
    explanation: '右美沙芬和可待因为中枢性镇咳药；氨溴索、乙酰半胱氨酸、溴己新为祛痰药。',
    variations: [
      { condition: '中枢镇咳', answer: '可待因、右美沙芬' },
      { condition: '外周镇咳', answer: '苯丙哌林' },
      { condition: '祛痰', answer: '氨溴索、乙酰半胱氨酸' },
    ],
  },

  // --- 糖尿病药物 (4) ---
  {
    id: 'c19',
    category: '糖尿病药物',
    tags: ['胰岛素', '类型', '作用时间'],
    question: '速效胰岛素类似物是？',
    options: ['门冬胰岛素', '普通胰岛素', '低精蛋白锌胰岛素', '甘精胰岛素'],
    correct: 0,
    explanation: '门冬胰岛素和赖脯胰岛素为速效类似物，起效15min，餐前即刻注射。',
    variations: [
      { condition: '速效', answer: '门冬、赖脯胰岛素（餐前即刻）' },
      { condition: '短效', answer: '普通胰岛素（餐前30min）' },
      { condition: '中效', answer: '低精蛋白锌胰岛素（NPH）' },
      { condition: '长效', answer: '甘精、地特胰岛素（基础胰岛素）' },
    ],
  },
  {
    id: 'c20',
    category: '糖尿病药物',
    tags: ['二甲双胍', '机制', '禁忌'],
    question: '二甲双胍最主要的降糖机制是？',
    options: ['抑制肝糖输出', '促进胰岛素分泌', '增加胰岛素敏感性', '延缓葡萄糖吸收'],
    correct: 0,
    explanation: '二甲双胍主要通过抑制肝脏糖异生和糖原分解，减少肝糖输出而降低血糖。',
    variations: [
      { condition: '机制', answer: '抑制肝糖异生、增加外周葡萄糖利用' },
      { condition: '禁忌', answer: '严重肾功能不全（eGFR<30）、酸中毒' },
      { condition: '优点', answer: '不增加体重、低血糖风险小' },
    ],
  },
  {
    id: 'c21',
    category: '糖尿病药物',
    tags: ['磺脲类', '格列本脲', '低血糖'],
    question: '磺脲类药物最常见的不良反应是？',
    options: ['低血糖', '胃肠道反应', '肝损伤', '体重减轻'],
    correct: 0,
    explanation: '磺脲类促进胰岛素分泌，最常见不良反应是低血糖，尤其是格列本脲半衰期长风险更大。',
    variations: [
      { condition: '低血糖', answer: '尤其是老年人和肝肾功能不全者' },
      { condition: '体重增加', answer: '胰岛素促泌剂通病' },
    ],
  },
  {
    id: 'c22',
    category: '糖尿病药物',
    tags: ['阿卡波糖', 'α糖苷酶抑制剂', '服用时间'],
    question: '阿卡波糖的正确服用时间是？',
    options: ['餐时与第一口饭同服', '餐前30分钟', '餐后即刻', '空腹服用'],
    correct: 0,
    explanation: '阿卡波糖需与第一口饭同服，以抑制小肠α-糖苷酶，延缓碳水化合物分解为葡萄糖。',
    variations: [
      { condition: '服用时间', answer: '餐时嚼服，与第一口饭同服' },
      { condition: '不良反应', answer: '胃肠道胀气（碳水在肠道发酵）' },
    ],
  },

  // --- 心血管其他 (3) ---
  {
    id: 'c23',
    category: '心血管药物',
    tags: ['强心苷', '地高辛', '中毒'],
    question: '地高辛中毒最早出现的症状是？',
    options: ['胃肠道症状（恶心、厌食）', '视觉异常', '心律失常', '头痛'],
    correct: 0,
    explanation: '地高辛中毒最早表现为胃肠道症状（厌食、恶心、呕吐），随后可出现心律失常和视觉异常。',
    variations: [
      { condition: '早期表现', answer: '胃肠道症状' },
      { condition: '特征性表现', answer: '视觉异常（黄视、绿视）' },
      { condition: '最严重', answer: '室性心律失常' },
      { condition: '解救', answer: '停药、补钾、抗地高辛抗体 Fab' },
    ],
  },
  {
    id: 'c24',
    category: '心血管药物',
    tags: ['他汀', '调血脂', '不良反应'],
    question: '他汀类药物最严重的潜在不良反应是？',
    options: ['横纹肌溶解', '肝酶升高', '胃肠道反应', '头痛'],
    correct: 0,
    explanation: '他汀类最严重不良反应为横纹肌溶解（肌痛+CK显著升高+肌红蛋白尿），需立即停药。',
    variations: [
      { condition: '横纹肌溶解', answer: '罕见但危及生命' },
      { condition: '肝酶升高', answer: 'AST/ALT>3倍ULN需停药' },
      { condition: '禁忌联用', answer: '避免与吉非贝齐、环孢素联用' },
    ],
  },
  {
    id: 'c25',
    category: '心血管药物',
    tags: ['阿司匹林', '抗血小板', '剂量'],
    question: '阿司匹林用于心血管疾病一级预防的推荐剂量是？',
    options: ['75-100mg/日', '300mg/日', '500mg/日', '1000mg/日'],
    correct: 0,
    explanation: '小剂量阿司匹林（75-100mg/日）不可逆抑制血小板COX-1，用于心血管事件预防。',
    variations: [
      { condition: '一级预防', answer: '75-100mg/日' },
      { condition: '急性期', answer: '负荷剂量150-300mg嚼服' },
      { condition: '解热镇痛', answer: '300-600mg/次' },
    ],
  },

  // --- 中枢神经系统 (4) ---
  {
    id: 'c26',
    category: '中枢神经系统药物',
    tags: ['癫痫', '苯妥英钠', '卡马西平'],
    question: '癫痫大发作（强直-阵挛发作）的首选药物是？',
    options: ['丙戊酸钠', '乙琥胺', '地西泮', '扑米酮'],
    correct: 0,
    explanation: '丙戊酸钠是广谱抗癫痫药，为大发作和部分性发作的一线用药。',
    variations: [
      { condition: '大发作', answer: '丙戊酸钠、卡马西平' },
      { condition: '失神发作', answer: '乙琥胺、丙戊酸钠' },
      { condition: '癫痫持续状态', answer: '地西泮静脉注射' },
      { condition: '局灶性发作', answer: '卡马西平、奥卡西平' },
    ],
  },
  {
    id: 'c27',
    category: '中枢神经系统药物',
    tags: ['帕金森', '左旋多巴', '卡比多巴'],
    question: '卡比多巴与左旋多巴合用的目的是？',
    options: ['抑制外周多巴脱羧，减少副作用', '增强中枢多巴胺受体激动', '延长左旋多巴半衰期', '促进左旋多巴透过血脑屏障'],
    correct: 0,
    explanation: '卡比多巴是外周多巴脱羧酶抑制剂，减少左旋多巴在外周转化为多巴胺，降低外周副作用。',
    variations: [
      { condition: '卡比多巴', answer: '外周脱羧酶抑制剂，减少外周副作用' },
      { condition: '金刚烷胺', answer: '促进多巴胺释放' },
      { condition: '司来吉兰', answer: 'MAO-B抑制剂' },
    ],
  },
  {
    id: 'c28',
    category: '中枢神经系统药物',
    tags: ['镇静催眠', '苯二氮䓬', '地西泮'],
    question: '苯二氮䓬类药物的作用机制是？',
    options: ['增强GABA_A受体氯离子通道开放', '阻断NMDA受体', '激动多巴胺受体', '抑制5-HT再摄取'],
    correct: 0,
    explanation: '苯二氮䓬类与GABA_A受体苯二氮䓬结合位点结合，增强GABA介导的Cl-内流，产生中枢抑制。',
    variations: [
      { condition: '机制', answer: '增强GABA能神经传递' },
      { condition: '中毒解救', answer: '氟马西尼（特异性拮抗剂）' },
      { condition: '依赖', answer: '长期使用可产生耐受和依赖' },
    ],
  },
  {
    id: 'c29',
    category: '中枢神经系统药物',
    tags: ['阿片', '吗啡', '哌替啶'],
    question: '吗啡急性中毒的解救药是？',
    options: ['纳洛酮', '烯丙吗啡', '地佐辛', '美沙酮'],
    correct: 0,
    explanation: '纳洛酮是纯阿片受体拮抗剂，可迅速逆转阿片类药物引起的呼吸抑制和昏迷。',
    variations: [
      { condition: '纳洛酮', answer: '特异性阿片受体拮抗剂' },
      { condition: '呼吸抑制', answer: '吗啡中毒致死主要原因' },
      { condition: '成瘾', answer: '吗啡具有强精神依赖性' },
    ],
  },

  // --- 抗肿瘤药 (3) ---
  {
    id: 'c30',
    category: '抗肿瘤药物',
    tags: ['化疗', '顺铂', '不良反应'],
    question: '顺铂最突出的不良反应是？',
    options: ['肾毒性', '骨髓抑制', '心脏毒性', '神经毒性'],
    correct: 0,
    explanation: '顺铂剂量限制性毒性为肾毒性，需充分水化（输液量>2L/日）并使用利尿剂预防。',
    variations: [
      { condition: '肾毒性', answer: '充分水化可预防' },
      { condition: '耳毒性', answer: '高频听力下降' },
      { condition: '呕吐', answer: '致吐性最强的化疗药之一' },
    ],
  },
  {
    id: 'c31',
    category: '抗肿瘤药物',
    tags: ['甲氨蝶呤', '叶酸拮抗剂', '解救'],
    question: '大剂量甲氨蝶呤的解救药物是？',
    options: ['亚叶酸钙', '维生素B12', '叶酸', '维生素B6'],
    correct: 0,
    explanation: '亚叶酸钙（甲酰四氢叶酸）可绕过甲氨蝶呤阻断的叶酸代谢途径， rescue正常细胞。',
    variations: [
      { condition: '亚叶酸钙', answer: '甲酰四氢叶酸，解救正常细胞' },
      { condition: 'MTX机制', answer: '抑制二氢叶酸还原酶' },
    ],
  },
  {
    id: 'c32',
    category: '抗肿瘤药物',
    tags: ['靶向药', '伊马替尼', '酪氨酸激酶抑制剂'],
    question: '伊马替尼的作用靶点是？',
    options: ['BCR-ABL酪氨酸激酶', 'EGFR', 'HER2', 'VEGFR'],
    correct: 0,
    explanation: '伊马替尼是首个分子靶向药，选择性抑制BCR-ABL酪氨酸激酶，用于慢性髓性白血病（CML）。',
    variations: [
      { condition: 'BCR-ABL', answer: 'CML的分子靶点' },
      { condition: 'EGFR-TKI', answer: '吉非替尼、厄洛替尼' },
      { condition: 'HER2', answer: '曲妥珠单抗' },
    ],
  },

  // --- 药事管理 (2) ---
  {
    id: 'c33',
    category: '药事管理与法规',
    tags: ['处方', '颜色', '有效期'],
    question: '普通处方的印刷用纸颜色是？',
    options: ['白色', '淡黄色', '淡绿色', '淡红色'],
    correct: 0,
    explanation: '普通处方为白色；急诊处方淡黄色；儿科处方淡绿色；麻醉药品和第一类精神药品处方淡红色。',
    variations: [
      { condition: '普通处方', answer: '白色' },
      { condition: '急诊处方', answer: '淡黄色，右上角标注"急诊"' },
      { condition: '儿科处方', answer: '淡绿色' },
      { condition: '麻醉处方', answer: '淡红色' },
    ],
  },
  {
    id: 'c34',
    category: '药事管理与法规',
    tags: ['特殊药品', '麻醉药品', '处方限量'],
    question: '门诊患者麻醉药品注射剂每张处方限量为？',
    options: ['一次常用量', '3日常用量', '7日常用量', '15日常用量'],
    correct: 0,
    explanation: '麻醉药品注射剂：门诊一次常用量；控缓释制剂：7日量；其他剂型：3日量。',
    variations: [
      { condition: '注射剂', answer: '一次常用量' },
      { condition: '控缓释', answer: '7日常用量' },
      { condition: '癌痛患者', answer: '可适当延长至15日' },
    ],
  },
  {
    id: 'c35',
    category: '药事管理与法规',
    tags: ['GSP', '药品储存', '温湿度'],
    question: '药品批发企业冷库的温度要求是？',
    options: ['2-10℃', '10-20℃', '20-30℃', '不超过20℃'],
    correct: 0,
    explanation: '冷库2-10℃；阴凉库≤20℃；常温库10-30℃；相对湿度35%-75%。',
    variations: [
      { condition: '冷库', answer: '2-10℃' },
      { condition: '阴凉库', answer: '≤20℃' },
      { condition: '常温库', answer: '10-30℃' },
    ],
  },
];

// ==========================================
// 配伍选择题 Templates (20+)
// ==========================================
export const btypeTemplates: BTypeTemplate[] = [
  {
    id: 'b1',
    category: '抗高血压药',
    tags: ['高血压', '合并症', '选药'],
    instruction: '根据合并症选择首选降压药',
    groups: [
      { left: '高血压合并糖尿病肾病', right: 'A' },
      { left: '高血压合并心绞痛', right: 'B' },
      { left: '高血压合并心衰', right: 'C' },
      { left: '高血压合并妊娠', right: 'D' },
    ],
    options: ['ACEI/ARB', 'β受体阻滞剂', 'ACEI+β受体阻滞剂', '甲基多巴'],
    correctOrder: [0, 1, 2, 3],
    explanation: '糖尿病肾病首选ACEI/ARB保护肾功能；心绞痛选β受体阻滞剂降低心肌耗氧；心衰需ACEI+β受体阻滞剂逆转重构；妊娠选用甲基多巴最安全。',
  },
  {
    id: 'b2',
    category: '头孢菌素',
    tags: ['头孢', '分代', '特点'],
    instruction: '将头孢菌素分代与其特点配伍',
    groups: [
      { left: '对G+菌作用最强', right: 'A' },
      { left: '对G-菌作用增强', right: 'B' },
      { left: '可透过血脑屏障', right: 'C' },
      { left: '对MRSA有效', right: 'D' },
    ],
    options: ['第一代头孢', '第二代头孢', '第三代头孢', '第五代头孢'],
    correctOrder: [0, 1, 2, 3],
    explanation: '一代头孢（唑林）对G+菌最强；二代（呋辛）G-增强；三代（噻肟、曲松）可透过血脑屏障；五代（洛林）覆盖MRSA。',
  },
  {
    id: 'b3',
    category: '抗菌药物',
    tags: ['机制', '杀菌/抑菌'],
    instruction: '将抗菌药物与其作用机制配伍',
    groups: [
      { left: '抑制细胞壁合成', right: 'A' },
      { left: '抑制蛋白质合成（30S亚基）', right: 'B' },
      { left: '抑制蛋白质合成（50S亚基）', right: 'C' },
      { left: '抑制DNA旋转酶', right: 'D' },
    ],
    options: ['青霉素', '四环素', '红霉素', '环丙沙星'],
    correctOrder: [0, 1, 2, 3],
    explanation: '青霉素类抑制细胞壁合成；四环素结合30S亚基；红霉素结合50S亚基；喹诺酮抑制DNA旋转酶。',
  },
  {
    id: 'b4',
    category: '消化系统',
    tags: ['消化性溃疡', '药物', '机制'],
    instruction: '将抗溃疡药与其作用机制配伍',
    groups: [
      { left: '抑制质子泵', right: 'A' },
      { left: '阻断H2受体', right: 'B' },
      { left: '中和胃酸', right: 'C' },
      { left: '保护胃黏膜', right: 'D' },
    ],
    options: ['奥美拉唑', '雷尼替丁', '氢氧化铝', '枸橼酸铋钾'],
    correctOrder: [0, 1, 2, 3],
    explanation: '奥美拉唑抑制H+/K+-ATP酶；雷尼替丁阻断H2受体；氢氧化铝中和胃酸；铋剂形成保护膜。',
  },
  {
    id: 'b5',
    category: '糖尿病',
    tags: ['降糖药', '机制'],
    instruction: '将降糖药与其作用机制配伍',
    groups: [
      { left: '促进胰岛素分泌', right: 'A' },
      { left: '抑制肝糖输出', right: 'B' },
      { left: '延缓碳水化合物吸收', right: 'C' },
      { left: '增加胰岛素敏感性', right: 'D' },
    ],
    options: ['格列本脲', '二甲双胍', '阿卡波糖', '罗格列酮'],
    correctOrder: [0, 1, 2, 3],
    explanation: '磺脲类促胰岛素分泌；二甲双胍抑制肝糖异生；阿卡波糖抑制α-糖苷酶；噻唑烷二酮增加胰岛素敏感性。',
  },
  {
    id: 'b6',
    category: '癫痫',
    tags: ['抗癫痫', '发作类型'],
    instruction: '将癫痫发作类型与首选药物配伍',
    groups: [
      { left: '强直-阵挛发作', right: 'A' },
      { left: '失神发作', right: 'B' },
      { left: '癫痫持续状态', right: 'C' },
      { left: '单纯部分性发作', right: 'D' },
    ],
    options: ['丙戊酸钠', '乙琥胺', '地西泮iv', '卡马西平'],
    correctOrder: [0, 1, 2, 3],
    explanation: '大发作首选丙戊酸钠；失神发作首选乙琥胺；持续状态用地西泮静注；局灶性发作首选卡马西平。',
  },
  {
    id: 'b7',
    category: '平喘药',
    tags: ['哮喘', '药物分类'],
    instruction: '将平喘药与其分类配伍',
    groups: [
      { left: '沙丁胺醇', right: 'A' },
      { left: '异丙托溴铵', right: 'B' },
      { left: '布地奈德', right: 'C' },
      { left: '孟鲁司特', right: 'D' },
    ],
    options: ['β2受体激动剂', 'M受体拮抗剂', '糖皮质激素', '白三烯受体拮抗剂'],
    correctOrder: [0, 1, 2, 3],
    explanation: '沙丁胺醇激动β2受体；异丙托溴铵阻断M受体；布地奈德为吸入激素；孟鲁司特阻断白三烯受体。',
  },
  {
    id: 'b8',
    category: '调血脂药',
    tags: ['他汀', '贝特', '机制'],
    instruction: '将调血脂药与其主要适应证配伍',
    groups: [
      { left: '高胆固醇血症首选', right: 'A' },
      { left: '高甘油三酯血症首选', right: 'B' },
      { left: '胆酸螯合剂', right: 'C' },
      { left: '抑制胆固醇吸收', right: 'D' },
    ],
    options: ['阿托伐他汀', '非诺贝特', '考来烯胺', '依折麦布'],
    correctOrder: [0, 1, 2, 3],
    explanation: '他汀类降低LDL-C首选；贝特类降TG首选；考来烯胺为胆酸螯合剂；依折麦布抑制肠道胆固醇吸收。',
  },
  {
    id: 'b9',
    category: '药物不良反应',
    tags: ['不良反应', '特征性'],
    instruction: '将药物与其特征性不良反应配伍',
    groups: [
      { left: '灰婴综合征', right: 'A' },
      { left: '耳毒性', right: 'B' },
      { left: '红人综合征', right: 'C' },
      { left: '流感样综合征', right: 'D' },
    ],
    options: ['氯霉素', '庆大霉素', '万古霉素', '利福平'],
    correctOrder: [0, 1, 2, 3],
    explanation: '氯霉素致灰婴综合征；庆大霉素致耳肾毒性；万古霉素快速静滴致红人综合征；利福平致流感样综合征。',
  },
  {
    id: 'b10',
    category: '抗凝药',
    tags: ['抗凝', '华法林', '肝素'],
    instruction: '将抗凝药与其特点配伍',
    groups: [
      { left: '口服有效', right: 'A' },
      { left: '需监测APTT', right: 'B' },
      { left: '维生素K拮抗', right: 'C' },
      { left: '可用于妊娠期', right: 'D' },
    ],
    options: ['华法林', '普通肝素', '华法林', '低分子肝素'],
    correctOrder: [0, 1, 2, 3],
    explanation: '华法林口服有效；普通肝素需监测APTT；华法林为维生素K拮抗剂；低分子肝素可用于妊娠期。',
  },
  {
    id: 'b11',
    category: '镇痛药',
    tags: ['阿片', '非甾体', '分类'],
    instruction: '将镇痛药与其特点配伍',
    groups: [
      { left: '天花板效应（有封顶效应）', right: 'A' },
      { left: '无天花板效应', right: 'B' },
      { left: '主要用于炎性疼痛', right: 'C' },
      { left: '可致便秘、呼吸抑制', right: 'D' },
    ],
    options: ['对乙酰氨基酚', '吗啡', '布洛芬', '吗啡'],
    correctOrder: [0, 1, 2, 3],
    explanation: '对乙酰氨基酚有剂量封顶；吗啡无封顶但受副作用限制；NSAIDs用于炎性疼痛；吗啡致便秘和呼吸抑制。',
  },
  {
    id: 'b12',
    category: 'adr',
    tags: ['解救', '中毒'],
    instruction: '将中毒与解救药物配伍',
    groups: [
      { left: '肝素过量', right: 'A' },
      { left: '华法林过量', right: 'B' },
      { left: '地高辛中毒', right: 'C' },
      { left: '阿片类药物中毒', right: 'D' },
    ],
    options: ['鱼精蛋白', '维生素K', '抗地高辛抗体Fab', '纳洛酮'],
    correctOrder: [0, 1, 2, 3],
    explanation: '鱼精蛋白中和肝素；维生素K逆转华法林；地高辛Fab片段特异性解毒；纳洛酮逆转阿片中毒。',
  },
  {
    id: 'b13',
    category: '糖皮质激素',
    tags: ['激素', '不良反应', '适应证'],
    instruction: '将糖皮质激素的作用与用途配伍',
    groups: [
      { left: '抗炎', right: 'A' },
      { left: '免疫抑制', right: 'B' },
      { left: '抗休克', right: 'C' },
      { left: '替代疗法', right: 'D' },
    ],
    options: ['风湿性关节炎', '器官移植抗排斥', '感染性休克', 'Addison病'],
    correctOrder: [0, 1, 2, 3],
    explanation: '激素用于RA抗炎；移植抗排斥用免疫抑制；感染性休克用大剂量抗休克；Addison病用替代剂量。',
  },
  {
    id: 'b14',
    category: '利尿药',
    tags: ['利尿剂', '分类', '适应证'],
    instruction: '将利尿药与其特点配伍',
    groups: [
      { left: '作用髓袢升支粗段', right: 'A' },
      { left: '作用远曲小管近端', right: 'B' },
      { left: '保钾利尿', right: 'C' },
      { left: '醛固酮拮抗剂', right: 'D' },
    ],
    options: ['呋塞米', '氢氯噻嗪', '氨苯蝶啶', '螺内酯'],
    correctOrder: [0, 1, 2, 3],
    explanation: '呋塞米作用于髓袢升支粗段；氢氯噻嗪作用于远曲小管近端；氨苯蝶啶保钾；螺内酯为醛固酮拮抗剂。',
  },
  {
    id: 'b15',
    category: '药物代谢',
    tags: ['CYP450', '酶诱导', '酶抑制'],
    instruction: '将药物对CYP450的作用配伍',
    groups: [
      { left: '强效酶诱导剂', right: 'A' },
      { left: '酶抑制剂（大环内酯类）', right: 'B' },
      { left: 'CYP3A4底物', right: 'C' },
      { left: '葡萄柚汁影响的代谢酶', right: 'D' },
    ],
    options: ['利福平', '红霉素', '硝苯地平', 'CYP3A4'],
    correctOrder: [0, 1, 2, 3],
    explanation: '利福平是强效CYP450诱导剂；红霉素抑制CYP3A4；硝苯地平是CYP3A4底物；葡萄柚汁抑制肠道CYP3A4。',
  },
  {
    id: 'b16',
    category: '药品管理',
    tags: ['处方', '颜色', '管理'],
    instruction: '将处方类型与颜色配伍',
    groups: [
      { left: '急诊处方', right: 'A' },
      { left: '儿科处方', right: 'B' },
      { left: '麻醉药品处方', right: 'C' },
      { left: '第二类精神药品', right: 'D' },
    ],
    options: ['淡黄色', '淡绿色', '淡红色', '白色'],
    correctOrder: [0, 1, 2, 3],
    explanation: '急诊处方淡黄色；儿科淡绿色；麻醉药品淡红色；二类精神药品白色。',
  },
  {
    id: 'b17',
    category: '抗组胺药',
    tags: ['H1受体', '一代', '二代'],
    instruction: '将抗组胺药与其特点配伍',
    groups: [
      { left: '镇静作用强', right: 'A' },
      { left: '无明显镇静作用', right: 'B' },
      { left: '有抗胆碱作用', right: 'C' },
      { left: '心脏毒性风险', right: 'D' },
    ],
    options: ['苯海拉明', '氯雷他定', '异丙嗪', '阿司咪唑'],
    correctOrder: [0, 1, 2, 3],
    explanation: '苯海拉明一代药镇静强；氯雷他定二代无镇静；异丙嗪有抗胆碱作用；阿司咪唑可致心律失常（已少用）。',
  },
  {
    id: 'b18',
    category: '钙通道阻滞剂',
    tags: ['CCB', '分类', '适应证'],
    instruction: '将CCB与其特点配伍',
    groups: [
      { left: '可用于心律失常（室上速）', right: 'A' },
      { left: '主要用于高血压', right: 'B' },
      { left: '变异性心绞痛首选', right: 'C' },
      { left: '兼有抗心绞痛和降压', right: 'D' },
    ],
    options: ['维拉帕米', '氨氯地平', '硝苯地平', '地尔硫䓬'],
    correctOrder: [0, 1, 2, 3],
    explanation: '维拉帕米可用于室上速；氨氯地平主要用于降压；硝苯地平为变异性心绞痛首选；地尔硫䓬兼顾心绞痛和降压。',
  },
  {
    id: 'b19',
    category: '甲状腺',
    tags: ['甲亢', '药物', '治疗'],
    instruction: '将甲亢药物与其机制配伍',
    groups: [
      { left: '抑制甲状腺激素合成', right: 'A' },
      { left: '抑制甲状腺激素释放', right: 'B' },
      { left: '破坏甲状腺组织', right: 'C' },
      { left: '阻断外周T4转T3', right: 'D' },
    ],
    options: ['甲巯咪唑', '大剂量碘', '放射性碘', '丙硫氧嘧啶'],
    correctOrder: [0, 1, 2, 3],
    explanation: '甲巯咪唑抑制过氧化物酶；大剂量碘抑制释放（Wolff-Chaikoff效应）；¹³¹I破坏组织；PTU阻断外周T4转T3。',
  },
  {
    id: 'b20',
    category: '口服降糖药',
    tags: ['DPP-4', 'SGLT2i', 'GLP-1'],
    instruction: '将新型降糖药与其机制配伍',
    groups: [
      { left: '抑制DPP-4', right: 'A' },
      { left: '抑制SGLT2', right: 'B' },
      { left: '激动GLP-1受体', right: 'C' },
      { left: '激动PPAR-γ', right: 'D' },
    ],
    options: ['西格列汀', '达格列净', '利拉鲁肽', '罗格列酮'],
    correctOrder: [0, 1, 2, 3],
    explanation: '西格列汀抑制DPP-4延长内源性GLP-1；达格列净促进尿糖排出；利拉鲁肽为GLP-1受体激动剂；罗格列酮激动PPAR-γ。',
  },
];

// ==========================================
// 计算题 Templates (15+)
// ==========================================
export const calcTemplates: CalcTemplate[] = [
  {
    id: 'calc1',
    category: '药动学',
    tags: ['半衰期', '消除', 't1/2'],
    question: '某药物半衰期{t12}h，静脉注射后体内药量从{X}mg降至多少需要{time}h？',
    formula: '剩余药量 = 初始量 × (1/2)^(t / t1/2)',
    variations: [
      { params: { t12: 4, X: 100, time: 12, target: '12.5' }, correct: '12.5 mg' },
      { params: { t12: 6, X: 200, time: 18, target: '25' }, correct: '25 mg' },
      { params: { t12: 8, X: 160, time: 24, target: '20' }, correct: '20 mg' },
    ],
    explanation: '根据半衰期公式：n = t/t1/2 为经历的半衰期个数，剩余量 = 初始量 × (1/2)^n。',
  },
  {
    id: 'calc2',
    category: '药动学',
    tags: ['半衰期', '达稳态'],
    question: '某药物半衰期{t12}h，连续恒速静脉滴注，约需多少时间达到稳态血药浓度？',
    formula: '达稳态时间 ≈ 4-5个半衰期',
    variations: [
      { params: { t12: 4, target: '20' }, correct: '约20 h（4-5个半衰期）' },
      { params: { t12: 6, target: '30' }, correct: '约30 h（4-5个半衰期）' },
      { params: { t12: 8, target: '40' }, correct: '约40 h（4-5个半衰期）' },
    ],
    explanation: '恒速给药达稳态需4-5个半衰期，此时血药浓度达稳态的93.75%-96.875%。',
  },
  {
    id: 'calc3',
    category: '药动学',
    tags: ['给药间隔', '维持量'],
    question: '某药维持剂量为每{interval}h给药一次，半衰期为{t12}h，负荷剂量应为维持量的几倍？',
    formula: '负荷剂量 = 维持量 / (1 - e^(-λτ))',
    variations: [
      { params: { interval: 6, t12: 6, target: '2' }, correct: '约2倍' },
      { params: { interval: 8, t12: 8, target: '2' }, correct: '约2倍' },
      { params: { interval: 12, t12: 6, target: '1.33' }, correct: '约1.33倍' },
    ],
    explanation: '当给药间隔等于半衰期时，负荷剂量约为维持量的2倍（稳态浓度的积累因子）。',
  },
  {
    id: 'calc4',
    category: '剂量计算',
    tags: ['儿童', '体表面积', '剂量'],
    question: '某5岁儿童体表面积为{BSA}m²，成人剂量为{adultDose}mg，按体表面积计算该儿童剂量为多少？',
    formula: '儿童剂量 = 成人剂量 × (儿童BSA / 1.73)',
    variations: [
      { params: { BSA: 0.7, adultDose: 500, target: '202' }, correct: '约202 mg' },
      { params: { BSA: 0.65, adultDose: 300, target: '113' }, correct: '约113 mg' },
      { params: { BSA: 0.8, adultDose: 400, target: '185' }, correct: '约185 mg' },
    ],
    explanation: '按体表面积折算儿童剂量：儿童剂量 = 成人剂量 × 儿童BSA/1.73（1.73m²为标准成人体表面积）。',
  },
  {
    id: 'calc5',
    category: '剂量计算',
    tags: ['输液速度', '滴速'],
    question: '需输注{volume}ml液体，要求{time}h内输完，输液器滴系数为{dropFactor}滴/ml，计算滴速为多少滴/分？',
    formula: '滴速(滴/分) = 总液量 × 滴系数 / (时间 × 60)',
    variations: [
      { params: { volume: 500, time: 4, dropFactor: 20, target: '42' }, correct: '约42滴/分' },
      { params: { volume: 250, time: 2, dropFactor: 15, target: '31' }, correct: '约31滴/分' },
      { params: { volume: 1000, time: 8, dropFactor: 20, target: '42' }, correct: '约42滴/分' },
    ],
    explanation: '滴速 = 总液量(ml) × 滴系数(滴/ml) ÷ 时间(min)。注意单位统一。',
  },
  {
    id: 'calc6',
    category: '浓度计算',
    tags: ['溶液配制', '稀释'],
    question: '现有{conc}%某药液{volume}ml，需稀释为{targetConc}%，应加蒸馏水至多少ml？',
    formula: 'C1 × V1 = C2 × V2',
    variations: [
      { params: { conc: 10, volume: 50, targetConc: 2, target: '250' }, correct: '250 ml' },
      { params: { conc: 5, volume: 100, targetConc: 1, target: '500' }, correct: '500 ml' },
      { params: { conc: 20, volume: 25, targetConc: 5, target: '100' }, correct: '100 ml' },
    ],
    explanation: '根据稀释公式C1V1=C2V2，加水至目标体积。注意：是加至该体积，不是加该体积的水。',
  },
  {
    id: 'calc7',
    category: '药动学',
    tags: ['清除率', 'Cl', '剂量调整'],
    question: '某患者肾清除率下降为正常的{percent}%，该主要经肾排泄的药物剂量应调整为正常的多少？',
    formula: '调整剂量 = 原剂量 × (患者肾功/正常肾功)',
    variations: [
      { params: { percent: 50, target: '50' }, correct: '约50%' },
      { params: { percent: 25, target: '25' }, correct: '约25%' },
      { params: { percent: 30, target: '30-50' }, correct: '约30-50%（视治疗窗而定）' },
    ],
    explanation: '肾功能不全时主要经肾排泄的药物需减量，一般按肌酐清除率比例调整。',
  },
  {
    id: 'calc8',
    category: 'TDM',
    tags: ['血药浓度', '剂量调整'],
    question: '某患者服用地高辛{dose}mg/日，测得血药浓度为{conc}ng/ml（目标0.8-2.0ng/ml），如调整剂量至使浓度达目标中值，新剂量约为多少？',
    formula: '新剂量 = 原剂量 × 目标浓度 / 实测浓度',
    variations: [
      { params: { dose: 0.25, conc: 0.5, target: '0.25-0.5' }, correct: '约0.25-0.5 mg/日' },
      { params: { dose: 0.25, conc: 2.5, target: '0.125' }, correct: '约0.125 mg/日' },
      { params: { dose: 0.125, conc: 0.4, target: '0.25' }, correct: '约0.25 mg/日' },
    ],
    explanation: '线性动力学药物：剂量与浓度成正比。地高辛治疗窗窄（0.8-2.0ng/ml），>2.0ng/ml中毒风险增加。',
  },
  {
    id: 'calc9',
    category: '剂量计算',
    tags: ['mg/kg', '体重'],
    question: '某药儿童剂量为{mgPerKg}mg/kg，患儿体重{weight}kg，每次给药量为多少？',
    formula: '给药量 = 剂量(mg/kg) × 体重(kg)',
    variations: [
      { params: { mgPerKg: 10, weight: 20, target: '200' }, correct: '200 mg' },
      { params: { mgPerKg: 5, weight: 15, target: '75' }, correct: '75 mg' },
      { params: { mgPerKg: 8, weight: 25, target: '200' }, correct: '200 mg' },
    ],
    explanation: '按体重计算儿科剂量是最常用的给药计算方法。',
  },
  {
    id: 'calc10',
    category: '浓度计算',
    tags: ['百分浓度', '摩尔浓度'],
    question: '某药物分子量为{MW}，配制{percent}%（g/ml）溶液，其摩尔浓度约为多少mmol/L？',
    formula: '摩尔浓度(mmol/L) = 百分浓度(g/ml) × 10000 / 分子量',
    variations: [
      { params: { MW: 180, percent: 5, target: '278' }, correct: '约278 mmol/L' },
      { params: { MW: 234, percent: 0.9, target: '38.5' }, correct: '约38.5 mmol/L' },
      { params: { MW: 58.5, percent: 0.9, target: '154' }, correct: '约154 mmol/L（生理盐水）' },
    ],
    explanation: '1% (g/ml) = 10g/L = 10000mg/L。mmol/L = mg/L ÷ 分子量 × 1000。',
  },
  {
    id: 'calc11',
    category: '药动学',
    tags: ['Vd', '表观分布容积'],
    question: '静脉注射某药{X}mg后，测得血药浓度为{C0}μg/ml，该药的表观分布容积Vd为多少L？',
    formula: 'Vd = 给药量 / 血药浓度',
    variations: [
      { params: { X: 100, C0: 10, target: '10' }, correct: '10 L' },
      { params: { X: 500, C0: 25, target: '20' }, correct: '20 L' },
      { params: { X: 200, C0: 5, target: '40' }, correct: '40 L' },
    ],
    explanation: 'Vd = X/C0，反映药物在体内分布范围。Vd≈5L主要分布于血浆；Vd≈15L细胞外液；Vd>40L广泛分布。',
  },
  {
    id: 'calc12',
    category: '输液计算',
    tags: ['微量泵', '速度'],
    question: '某药需以{mcgPerMin}μg/min速度泵入，现配制成{mg}mg/{volume}ml，输液泵应设置为多少ml/h？',
    formula: 'ml/h = 速度(μg/min) × 60(min) ÷ 浓度(μg/ml)',
    variations: [
      { params: { mcgPerMin: 10, mg: 50, volume: 50, target: '0.6' }, correct: '0.6 ml/h' },
      { params: { mcgPerMin: 5, mg: 10, volume: 50, target: '1.5' }, correct: '1.5 ml/h' },
      { params: { mcgPerMin: 20, mg: 100, volume: 50, target: '0.6' }, correct: '0.6 ml/h' },
    ],
    explanation: '先计算浓度(μg/ml)，再换算ml/h。注意单位统一：mg→μg（×1000）。',
  },
  {
    id: 'calc13',
    category: '剂量计算',
    tags: ['老年人', '剂量调整'],
    question: '某70岁老年人，肌酐清除率(CrCl)为{crcl}ml/min（正常90-120），主要经肾排泄的药物剂量应调整为正常剂量的百分之多少？',
    formula: '调整比例 = 患者CrCl / 正常CrCl × 100%',
    variations: [
      { params: { crcl: 45, target: '50' }, correct: '约50%' },
      { params: { crcl: 30, target: '25-33' }, correct: '约25-33%' },
      { params: { crcl: 60, target: '50-67' }, correct: '约50-67%' },
    ],
    explanation: '老年人和肾功能不全患者，主要经肾排泄的药物需根据CrCl调整剂量。Cockcroft-Gault公式估算CrCl。',
  },
  {
    id: 'calc14',
    category: '药动学',
    tags: ['生物利用度', 'F'],
    question: '某药口服给药{X}mg后AUC为{aucPO}，静脉注射{Y}mg后AUC为{aucIV}，其绝对生物利用度约为多少？',
    formula: 'F(%) = (AUCpo/剂量po) / (AUCiv/剂量iv) × 100%',
    variations: [
      { params: { X: 100, aucPO: 80, Y: 100, aucIV: 100, target: '80' }, correct: '约80%' },
      { params: { X: 200, aucPO: 90, Y: 100, aucIV: 100, target: '45' }, correct: '约45%' },
      { params: { X: 100, aucPO: 50, Y: 50, aucIV: 100, target: '100' }, correct: '约100%' },
    ],
    explanation: '绝对生物利用度 = (AUCpo/口服剂量) ÷ (AUCiv/静注剂量) × 100%。',
  },
  {
    id: 'calc15',
    category: '剂量计算',
    tags: ['肠外营养', '热量'],
    question: '某患者TPN需非蛋白质热量{npc}kcal，脂肪乳提供脂肪{fat}g，剩余热量由葡萄糖提供，需{conc}%葡萄糖多少ml？（1g葡萄糖=3.4kcal，1g脂肪=9kcal）',
    formula: '葡萄糖热量 = NPC - 脂肪热量；葡萄糖量(g) = 热量/3.4；体积 = 糖量/(浓度%)×100',
    variations: [
      { params: { npc: 1500, fat: 50, conc: 50, target: '441' }, correct: '约441 ml' },
      { params: { npc: 1200, fat: 40, conc: 25, target: '988' }, correct: '约988 ml' },
      { params: { npc: 1800, fat: 60, conc: 50, target: '529' }, correct: '约529 ml' },
    ],
    explanation: '非蛋白质热量由脂肪和葡萄糖共同提供。先算脂肪热量，余下为葡萄糖热量，再算葡萄糖用量和体积。',
  },
];

// ==========================================
// Utility: Generate questions from templates
// ==========================================
export interface GeneratedQuestion {
  id: string;
  type: 'choice' | 'matching' | 'calc';
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  userAnswer?: number;
}

export function generateQuestions(
  keywords: string[],
  type: 'choice' | 'matching' | 'calc' | 'all',
  difficulty: 'basic' | 'advanced' | 'challenge',
  count: number
): GeneratedQuestion[] {
  const templates: { source: ChoiceTemplate[] | BTypeTemplate[] | CalcTemplate[]; type: 'choice' | 'matching' | 'calc' }[] = [];

  if (type === 'all' || type === 'choice') {
    templates.push({ source: choiceTemplates, type: 'choice' });
  }
  if (type === 'all' || type === 'matching') {
    templates.push({ source: btypeTemplates, type: 'matching' });
  }
  if (type === 'all' || type === 'calc') {
    templates.push({ source: calcTemplates, type: 'calc' });
  }

  const matched: GeneratedQuestion[] = [];
  const kwLower = keywords.map((k) => k.toLowerCase());

  // Filter by keywords
  for (const { source, type: t } of templates) {
    for (const tmpl of source) {
      const tags = (tmpl as any).tags || [];
      const cat = tmpl.category;
      const isMatch =
        kwLower.length === 0 ||
        kwLower.some(
          (k) =>
            tags.some((tag: string) => tag.includes(k)) ||
            cat.includes(k) ||
            (tmpl as any).question?.includes(k)
        );

      if (isMatch || kwLower.length === 0) {
        const q = buildQuestion(tmpl, t, difficulty);
        if (q) matched.push(q);
      }
    }
  }

  // Shuffle and take requested count
  for (let i = matched.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [matched[i], matched[j]] = [matched[j], matched[i]];
  }

  return matched.slice(0, count);
}

function buildQuestion(
  tmpl: any,
  type: 'choice' | 'matching' | 'calc',
  difficulty: string
): GeneratedQuestion | null {
  if (type === 'choice') {
    const variation =
      difficulty === 'basic'
        ? tmpl.variations[0] || tmpl.variations[Math.floor(Math.random() * tmpl.variations.length)]
        : difficulty === 'advanced'
        ? tmpl.variations[Math.min(1, tmpl.variations.length - 1)] || tmpl.variations[0]
        : tmpl.variations[Math.min(2, tmpl.variations.length - 1)] || tmpl.variations[tmpl.variations.length - 1];

    if (!variation) return null;

    const questionText = tmpl.question.replace('{condition}', variation.condition);
    return {
      id: `${tmpl.id}-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      type: 'choice',
      category: tmpl.category,
      question: questionText,
      options: tmpl.options,
      correct: tmpl.correct,
      explanation: `${variation.answer}。${tmpl.explanation}`,
    };
  }

  if (type === 'matching') {
    return {
      id: `${tmpl.id}-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      type: 'matching',
      category: tmpl.category,
      question: `${tmpl.instruction}\n${tmpl.groups.map((g: any, i: number) => `${String.fromCharCode(65 + i)}. ${g.left}`).join('\n')}`,
      options: tmpl.options,
      correct: 0,
      explanation: tmpl.explanation,
    };
  }

  if (type === 'calc') {
    const variation =
      difficulty === 'basic'
        ? tmpl.variations[0]
        : difficulty === 'advanced'
        ? tmpl.variations[Math.min(1, tmpl.variations.length - 1)]
        : tmpl.variations[Math.min(2, tmpl.variations.length - 1)];

    if (!variation) return null;

    let questionText = tmpl.question;
    Object.entries(variation.params).forEach(([key, val]) => {
      questionText = questionText.replace(`{${key}}`, String(val));
    });

    return {
      id: `${tmpl.id}-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      type: 'calc',
      category: tmpl.category,
      question: `${questionText}\n\n【公式】${tmpl.formula}`,
      options: [
        `A. ${Number(variation.params.target) * 0.5}`,
        `B. ${Number(variation.params.target) * 0.8}`,
        `C. ${variation.correct}`,
        `D. ${Number(variation.params.target) * 1.5}`,
      ],
      correct: 2,
      explanation: `${variation.correct}。${tmpl.explanation}`,
    };
  }

  return null;
}

// Get all categories for filter
export function getAllCategories(): string[] {
  const cats = new Set<string>();
  choiceTemplates.forEach((t) => cats.add(t.category));
  btypeTemplates.forEach((t) => cats.add(t.category));
  calcTemplates.forEach((t) => cats.add(t.category));
  return Array.from(cats);
}

// Get all tags for search
export function getAllTags(): string[] {
  const tags = new Set<string>();
  choiceTemplates.forEach((t) => t.tags.forEach((tag) => tags.add(tag)));
  btypeTemplates.forEach((t) => t.tags.forEach((tag) => tags.add(tag)));
  calcTemplates.forEach((t) => t.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags);
}
