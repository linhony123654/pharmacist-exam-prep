// ═══════════════════════════════════════════════════════════
// Volume 5: 药学综合知识与技能精讲 — Content Data
// ═══════════════════════════════════════════════════════════

// ─── Section 1: 处方审核与调剂管理 ───

export const prescriptionAuditItems = {
  legality: [
    { seq: '1', item: '医师资格与执业注册', points: '是否取得医师资格并完成执业注册', handling: '不得调剂' },
    { seq: '2', item: '处方权审核', points: '是否在执业地点取得相应处方权', handling: '不得调剂' },
    { seq: '3', item: '特殊药品处方权', points: '麻、精、毒、放等特殊药品是否具有相应处方权', handling: '不得调剂' },
  ],
  normative: [
    { seq: '1', item: '处方前记、正文、后记完整清晰', error: '缺项漏填' },
    { seq: '2', item: '每张处方只限于一名患者', error: '混方' },
    { seq: '3', item: '字迹清楚不得涂改，修改处签名+日期', error: '涂改未签名' },
    { seq: '4', item: '使用药品通用名称', error: '使用商品名/自编缩写' },
    { seq: '5', item: '新生儿、婴幼儿写日/月龄，必要时注明体重', error: '年龄不规范' },
    { seq: '6', item: '中药饮片单独开具处方', error: '中西药混开' },
    { seq: '7', item: '每张处方不超过5种药品', error: '超5种药品' },
    { seq: '8', item: '按说明书常用剂量使用，超剂量需注明原因+再次签名', error: '超剂量未说明' },
    { seq: '9', item: '空白处画斜线以示处方完毕', error: '未画斜线' },
    { seq: '10', item: '门诊≤7日用量，急诊≤3日用量', error: '超量未注明理由' },
    { seq: '11', item: '剂量与数量用阿拉伯数字书写', error: '中文数字' },
    { seq: '12', item: '开具麻醉药品处方时有病历记录', error: '无病历' },
  ],
  suitability: [
    { seq: '1', item: '处方用药与诊断是否相符', exam: '无适应证/超适应证/过度治疗' },
    { seq: '2', item: '必须做皮试的药品是否注明过敏试验及结果', exam: '青霉素类、链霉素、含碘对比剂' },
    { seq: '3', item: '处方剂量、用法是否正确，总量是否符合规定', exam: '剂量计算、给药频次' },
    { seq: '4', item: '选用剂型与给药途径是否适宜', exam: '能口服不注射' },
    { seq: '5', item: '是否有重复给药和相互作用情况', exam: '消渴丸+格列本脲=重复' },
    { seq: '6', item: '是否存在配伍禁忌', exam: '头孢曲松+含钙溶液=沉淀' },
    { seq: '7', item: '是否有用药禁忌（特殊人群/过敏史等）', exam: '孕妇用沙星类=禁忌' },
    { seq: '8', item: '溶媒选择、用法用量、输注速度是否适宜', exam: '万古霉素滴速过快' },
    { seq: '9', item: '是否存在其他用药不适宜情况', exam: '超说明书用药' },
  ],
};

export const fourChecksTenMatches = [
  { check: '查处方', matches: '对科别、对姓名、对年龄', count: '3项' },
  { check: '查药品', matches: '对药名、对剂型、对规格、对数量', count: '4项' },
  { check: '查配伍禁忌', matches: '对药品性状、对用法用量', count: '2项' },
  { check: '查用药合理性', matches: '对临床诊断', count: '1项' },
];

export const prescriptionColors = [
  { type: '普通处方', color: '白色', mark: '无', limit: '≤7日', storage: '1年' },
  { type: '急诊处方', color: '淡黄色', mark: '"急诊"', limit: '≤3日', storage: '1年' },
  { type: '儿科处方', color: '淡绿色', mark: '"儿科"', limit: '≤7日', storage: '1年' },
  { type: '第二类精神药品', color: '白色', mark: '"精二"', limit: '≤7日', storage: '2年' },
  { type: '麻醉药品和第一类精神药品', color: '淡红色', mark: '"麻、精一"', limit: '注射剂一次常用量', storage: '3年' },
];

export const cyp450Table = [
  { enzyme: 'CYP1A2', substrates: '咖啡因、茶碱、华法林、氯氮平', inhibitors: '环丙沙星、氟伏沙明', inducers: '吸烟、利福平、苯巴比妥' },
  { enzyme: 'CYP2C9', substrates: '华法林、苯妥英、塞来昔布', inhibitors: '氟康唑、胺碘酮', inducers: '利福平、巴比妥类' },
  { enzyme: 'CYP2C19', substrates: '奥美拉唑、氯吡格雷、地西泮', inhibitors: '氟康唑、奥美拉唑、氯霉素', inducers: '利福平、卡马西平' },
  { enzyme: 'CYP2D6', substrates: '可待因、美托洛尔、阿米替林', inhibitors: '帕罗西汀、氟西汀、奎尼丁', inducers: '利福平' },
  { enzyme: 'CYP3A4/5', substrates: '硝苯地平、辛伐他汀、环孢素、咪达唑仑', inhibitors: '酮康唑、克拉霉素、红霉素、西柚汁', inducers: '利福平、卡马西平、苯妥英、圣约翰草' },
];

export const prescriptionReviewSystem = [
  { type: '不规范处方', count: '15项', examples: '前记/正文/后记缺项；未使用通用名；单张处方超5种药品；超用量未注明理由' },
  { type: '用药不适宜处方', count: '9项', examples: '适应证不适宜；遴选药品不适宜；剂型或给药途径不适宜；无正当理由不首选基药；用法用量不适宜；联合用药不适宜；重复给药；配伍禁忌或不良相互作用' },
  { type: '超常处方', count: '4项', examples: '无适应证用药；无正当理由开具高价药；无正当理由超说明书用药；无正当理由为同一患者同时开具2种以上药理作用相同药物' },
];

// ─── Section 2: 用药适宜性审核专项 ───

export const specialPopulationsTable = [
  { population: '老年人', pkChanges: '吸收↓、分布↑、代谢↓、排泄↓', adjustments: '减量起始（1/3-1/2）、延长间隔', notes: '多重用药相互作用，一般≤5种药物' },
  { population: '儿童', pkChanges: '肝酶不成熟、Vd大、蛋白结合↓', adjustments: '按体重/体表面积计算', notes: '年龄分段给药' },
  { population: '孕妇', pkChanges: '血浆容量↑、蛋白结合↓、肝代谢↑', adjustments: '避免X、D级药物', notes: '妊娠分期考虑' },
  { population: '哺乳期', pkChanges: '药物可经乳汁分泌', adjustments: '选择L1-L2级药物', notes: '服药时间避开哺乳高峰' },
  { population: '肝功不全', pkChanges: '代谢↓、首过效应↓', adjustments: 'CTP评分指导剂量调整', notes: 'A级50%/B级25%/C级慎用' },
  { population: '肾功不全', pkChanges: '排泄↓', adjustments: '按CrCl调整剂量', notes: 'Cockcroft-Gault公式' },
];

export const fdaPregnancyCategories = [
  { grade: 'A级', definition: '临床对照研究未见对胎儿有害', examples: '维生素类、左甲状腺素钠、叶酸、KCl' },
  { grade: 'B级', definition: '动物实验未见危害，无人类对照研究', examples: '青霉素、头孢菌素、红霉素、地高辛、胰岛素' },
  { grade: 'C级', definition: '动物实验显示有害，无人类研究；权衡利弊后使用', examples: '大多数药物（默认值）' },
  { grade: 'D级', definition: '有足够证据证明对胎儿有害，但治疗获益可能超过风险', examples: '四环素类、卡马西平、阿替洛尔、螺内酯、碘' },
  { grade: 'X级', definition: '证实会导致胎儿异常，禁用', examples: '利巴韦林、辛伐他汀/洛伐他汀、异维A酸、己烯雌酚、艾司唑仑' },
];

export const ctpScoringTable = [
  { grade: 'A级（轻度）', score: '5-6分', dose: '正常剂量的50%', note: '剂量减半' },
  { grade: 'B级（中度）', score: '7-9分', dose: '正常剂量的25%', note: '剂量减至1/4' },
  { grade: 'C级（重度）', score: '10-15分', dose: '选用安全性好、不受肝病影响的药物', note: '慎重选择' },
];

export const driverDrugWarnings = [
  { effect: '嗜睡/困倦', drugClass: '抗感冒药（含抗组胺成分）、第一代抗过敏药、镇静催眠药、质子泵抑制剂', examples: '含氯苯那敏的复方制剂、苯海拉明、异丙嗪、阿普唑仑、艾司唑仑、奥美拉唑' },
  { effect: '眩晕或幻觉', drugClass: '镇咳药、抗病毒药、周围血管扩张药', examples: '右美沙芬、那可丁、金刚烷胺、氟桂利嗪' },
  { effect: '视物模糊/辨色困难', drugClass: '解热镇痛药、抗胆碱药、抗癫痫药、抗心绞痛药', examples: '布洛芬、吲哚美辛、东莨菪碱、阿托品、卡马西平、苯妥英钠、硝酸甘油' },
  { effect: '定向力障碍', drugClass: '镇痛药、H2受体阻滞剂、抗抑郁药', examples: '哌替啶、西咪替丁、雷尼替丁、舒必利、丙咪嗪' },
  { effect: '多尿/多汗', drugClass: '利尿药、降压药', examples: '阿米洛利、吲达帕胺、哌唑嗪' },
];

export const athleteDrugWarnings = [
  { category: '蛋白同化制剂', examples: '睾酮、诺龙', effect: '促进肌肉生长' },
  { category: '肽类激素', examples: '促红素(EPO)、生长激素', effect: '增强氧运输' },
  { category: '麻醉药品', examples: '吗啡、芬太尼', effect: '镇痛、欣快感' },
  { category: '刺激剂', examples: '麻黄碱、哌甲酯', effect: '兴奋中枢神经' },
  { category: '利尿剂和掩蔽剂', examples: '呋塞米、螺内酯', effect: '快速降体重/掩盖用药' },
  { category: '糖皮质激素', examples: '泼尼松、地塞米松', effect: '抗炎（需申报）' },
];

// ─── Section 3: 治疗药物监测与药物警戒 ───

export const tdmDrugsTable = [
  { drug: '地高辛', window: '0.5-0.9 ng/ml（最佳）', timing: '给药后6h或给药前（谷浓度）', toxicity: '>2.0 ng/ml' },
  { drug: '苯妥英钠', window: '10-20 μg/ml', timing: '给药前（谷浓度）', toxicity: '>20 μg/ml' },
  { drug: '茶碱/氨茶碱', window: '10-20 μg/ml', timing: '给药前', toxicity: '>20 μg/ml' },
  { drug: '万古霉素', window: '谷浓度10-20 μg/ml', timing: '第4-5剂前（谷浓度）', toxicity: '—' },
  { drug: '卡马西平', window: '4-10 μg/ml', timing: '给药前（谷浓度）', toxicity: '>12 μg/ml' },
  { drug: '丙戊酸钠', window: '50-100 μg/ml', timing: '给药前', toxicity: '—' },
  { drug: '环孢素', window: '100-400 ng/ml', timing: '给药前', toxicity: '—' },
  { drug: '他克莫司', window: '5-15 ng/ml', timing: '给药前', toxicity: '—' },
  { drug: '碳酸锂', window: '0.3-1.3 mmol/L', timing: '给药前', toxicity: '>1.5 mmol/L' },
  { drug: '甲氨蝶呤', window: '<1 μmol/L（48h）', timing: '根据方案定时', toxicity: '—' },
];

export const adrClassification = [
  { type: 'A型（量变型）', feature: '与剂量相关，可预测，发生率高，死亡率低', examples: '副作用、毒性反应、后遗效应、继发反应' },
  { type: 'B型（质变型）', feature: '与剂量无关，难以预测，发生率低，死亡率高', examples: '过敏反应、特异质反应' },
  { type: 'C型（长期用药型）', feature: '潜伏期长，与剂量关系不明确', examples: '致癌、致畸、长期用药后心血管疾病' },
];

export const adrCausalityScale = [
  { level: '肯定', criteria: '时间合理+停药好转+再用药再现+文献佐证+排除其他', flag: '再次用药症状再现' },
  { level: '很可能', criteria: '无重复用药史，其余同"肯定"；或有合并用药但可排除', flag: '无重复用药史' },
  { level: '可能', criteria: '时间关系密切+文献佐证；引发ADR的药品不止一种', flag: '多种药物可能' },
  { level: '可能无关', criteria: '时间相关性不密切+反应与已知ADR不相符', flag: '—' },
  { level: '待评价', criteria: '报表填写不齐全，等待补充', flag: '—' },
  { level: '无法评价', criteria: '缺项太多，资料无法补充', flag: '—' },
];

export const adrReportingTimeline = [
  { scenario: '死亡病例/群体不良事件', timeline: '立即报告', mnemonic: '死亡立即报' },
  { scenario: '新的或严重的ADR', timeline: '15个工作日内', mnemonic: '新严十五天' },
  { scenario: '非严重的ADR', timeline: '30日内', mnemonic: '一般三十天' },
];

export const pharmacovigilanceMethods = [
  { method: '比例报告比', abbr: 'PRR', note: '最早最基本的信号检测方法' },
  { method: '报告比值比', abbr: 'ROR', note: '统计性质更优，偏差更小' },
  { method: '贝叶斯置信传播神经网络', abbr: 'BCPNN', note: '报告数量少时也稳定' },
  { method: '多项伽玛泊松收缩器', abbr: 'MGPS/GPS', note: '美国FDA广泛应用，可减少假阳性' },
];

// ─── Section 4: 心血管系统疾病管理 ───

export const hypertensionComorbidity = [
  { comorbidity: '高血压合并糖尿病/糖尿病肾病', firstChoice: 'ACEI/ARB（保护肾脏，降蛋白尿）', contraindication: '—' },
  { comorbidity: '高血压合并冠心病/心绞痛', firstChoice: 'β受体阻滞剂 + ACEI/ARB', contraindication: '—' },
  { comorbidity: '高血压合并心衰', firstChoice: 'ACEI/ARB + β受体阻滞剂 + 螺内酯', contraindication: 'CCB（非二氢吡啶类可能加重心衰）' },
  { comorbidity: '老年高血压（≥60岁）', firstChoice: 'CCB、噻嗪类利尿剂', contraindication: '—' },
  { comorbidity: '高血压合并高脂血症', firstChoice: '二氢吡啶类CCB、ACEI/ARB', contraindication: '大剂量利尿剂、非选择性β阻滞剂' },
  { comorbidity: '高血压合并高尿酸', firstChoice: '氯沙坦（有促尿酸排泄作用）、CCB', contraindication: '噻嗪类利尿剂（升高尿酸）' },
  { comorbidity: '高血压合并哮喘/COPD', firstChoice: 'ACEI/ARB、CCB', contraindication: '非选择性β阻滞剂（诱发支气管痉挛）' },
  { comorbidity: '高血压合并前列腺增生', firstChoice: 'α受体阻滞剂（坦索罗辛等）', contraindication: '—' },
  { comorbidity: '妊娠期高血压', firstChoice: '甲基多巴（首选）', contraindication: 'ACEI/ARB（致畸，X级）' },
];

export const heartFailureNewQuad = [
  { drugClass: 'ARNI', drug: '沙库巴曲缬沙坦', targetDose: '200mg bid', effect: '首选替代ACEI/ARB，降低心血管死亡和心衰住院' },
  { drugClass: 'β受体阻滞剂', drug: '美托洛尔缓释片、比索洛尔、卡维地洛', targetDose: '心率55-60次/分', effect: '降低死亡率，所有HFrEF患者除非禁忌均需使用' },
  { drugClass: 'MRA', drug: '螺内酯、依普利酮', targetDose: '25mg qd', effect: 'eGFR≥30且血钾正常方可使用' },
  { drugClass: 'SGLT2抑制剂', drug: '达格列净、恩格列净', targetDose: '10mg qd', effect: '所有HFrEF患者（无论是否合并糖尿病）均需使用' },
];

// ─── Section 5: 消化系统疾病管理 ───

export const hpQuadTherapy = [
  { component: 'PPI（标准剂量）', drug: '艾司奥美拉唑/雷贝拉唑等', dose: '标准剂量 bid', note: '强力抑酸，提高抗生素稳定性' },
  { component: '铋剂', drug: '枸橼酸铋钾', dose: '标准剂量 bid', note: '保护胃黏膜，直接杀灭Hp' },
  { component: '抗生素1', drug: '阿莫西林', dose: '1000mg bid', note: 'Hp耐药率低，首选' },
  { component: '抗生素2', drug: '克拉霉素', dose: '500mg bid', note: '替代：甲硝唑/替硝唑/四环素/左氧氟沙星' },
];

// ─── Section 6: 内分泌系统疾病管理 ───

export const diabetesDrugPathway = [
  { category: '双胍类', drug: '二甲双胍', mechanism: '减少肝糖输出，改善胰岛素敏感性', keyPoints: '★一线首选；减轻体重；eGFR<45禁用' },
  { category: '磺脲类', drug: '格列美脲、格列齐特', mechanism: '刺激胰岛β细胞分泌胰岛素', keyPoints: '低血糖风险；增加体重' },
  { category: '格列奈类', drug: '瑞格列奈、那格列奈', mechanism: '快速刺激胰岛素分泌', keyPoints: '餐时服用；低血糖风险较低' },
  { category: 'α-糖苷酶抑制剂', drug: '阿卡波糖、伏格列波糖', mechanism: '延缓碳水化合物吸收', keyPoints: '降餐后血糖；胃肠道反应（腹胀）' },
  { category: '噻唑烷二酮类', drug: '吡格列酮', mechanism: '增加胰岛素敏感性', keyPoints: '体重增加、水肿、心衰禁用' },
  { category: 'DPP-4抑制剂', drug: '西格列汀、利格列汀', mechanism: '延长内源性GLP-1作用', keyPoints: '低血糖风险低；利格列汀肾不全优选' },
  { category: 'SGLT2抑制剂', drug: '达格列净、恩格列净', mechanism: '促进尿糖排泄', keyPoints: '★降体重、降压、心肾保护；所有HFrEF均可用' },
  { category: 'GLP-1受体激动剂', drug: '利拉鲁肽、司美格鲁肽', mechanism: '促进胰岛素分泌，抑制食欲', keyPoints: '注射给药；降体重效果显著' },
];

// ─── Section 7: 呼吸系统与神经系统 ───

export const asthmaManagement = [
  { level: '第1级（间歇）', controlDrug: '无需常规用药', reliefDrug: '按需SABA（沙丁胺醇）' },
  { level: '第2级（轻度持续）', controlDrug: '低剂量ICS', reliefDrug: '按需SABA' },
  { level: '第3级（中度持续）', controlDrug: '低剂量ICS+LABA或中剂量ICS', reliefDrug: '按需SABA' },
  { level: '第4级（重度持续）', controlDrug: '中/高剂量ICS+LABA', reliefDrug: '按需SABA' },
];

export const copdBCA = [
  { letter: 'B', meaning: 'Bronchodilators（支气管扩张剂）', drug: 'SABA±SAMA', note: '★首选，不是抗菌药！' },
  { letter: 'C', meaning: 'Corticosteroids（糖皮质激素）', drug: '全身应用，疗程5-7天', note: '改善肺功能' },
  { letter: 'A', meaning: 'Antibiotics（抗菌药物）', drug: '有指征时使用，疗程5-7天', note: '仅在有感染指征时用' },
];

// ─── Section 8: 其他疾病管理 ───

export const utiTreatment = [
  { type: '急性单纯性膀胱炎（下尿路）', firstChoice: '磷霉素氨丁三醇（单剂）、呋喃妥因、头孢氨苄', duration: '单剂或3天' },
  { type: '急性肾盂肾炎（上尿路）', firstChoice: '左氧氟沙星、头孢曲松', duration: '7-14天' },
  { type: '复杂性尿路感染', firstChoice: '根据尿培养结果选择', duration: '10-14天' },
  { type: '复发性尿路感染', firstChoice: '低剂量长程抑菌疗法', duration: '6个月' },
];

export const bphTreatment = [
  { drugClass: 'α1受体阻滞剂（一线）', drug: '坦索罗辛、多沙唑嗪', indication: '中重度LUTS', notes: '起效快（数天）；注意体位性低血压' },
  { drugClass: '5α还原酶抑制剂', drug: '非那雄胺、度他雄胺', indication: '前列腺体积>30ml', notes: '起效慢（3-6个月）；可缩小前列腺体积' },
  { drugClass: '联合治疗', drug: '坦索罗辛+非那雄胺', indication: '前列腺增大+症状明显', notes: '长期疗效优于单药' },
];

export const gynecologicalDiseases = [
  { disease: '痛经', treatment: '原发性痛经首选NSAIDs——布洛芬、萘普生、双氯芬酸', notes: '于月经来潮前1-2天或疼痛开始时服用' },
  { disease: '更年期HRT', treatment: '雌二醇+孕激素（有子宫者必须加孕激素）', notes: '禁忌：乳腺癌、子宫内膜癌、活动性血栓、严重肝病、未控制的高血压' },
];

export const skinDiseases = [
  { disease: '湿疹/皮炎', treatment: '外用糖皮质激素+保湿剂', notes: '急性期中强效（糠酸莫米松），面部弱效（氢化可的松）或钙调磷酸酶抑制剂' },
  { disease: '痤疮（轻度）', treatment: '外用维A酸类', notes: '晚间使用，避免日光' },
  { disease: '痤疮（中度）', treatment: '外用维A酸 + 过氧化苯甲酰', notes: '—' },
  { disease: '痤疮（重度）', treatment: '口服异维A酸（首选）', notes: '育龄女性治疗前1个月、治疗期间及治疗后3个月必须严格避孕' },
  { disease: '手足癣', treatment: '外用抗真菌药（特比萘芬、克霉唑）', notes: '症状消失后再维持1-2周以防复发' },
];

// ─── Section 9: 2026年新增疾病要点 ───

export const new2026Diseases = [
  { disease: '麦粒肿（睑腺炎）', keyPoints: '金葡菌感染；早期热敷(40-45℃)+抗生素眼膏；脓肿形成切开排脓（★严禁挤压）', treatment: '左氧氟沙星眼膏、红霉素眼膏；严重时口服阿莫西林、头孢克洛' },
  { disease: '甲沟炎', keyPoints: '指甲周围急性感染；早期局部热敷+外用莫匹罗星软膏；化脓性切开引流', treatment: '外用莫匹罗星软膏；口服抗生素' },
  { disease: '特应性皮炎', keyPoints: '阶梯治疗：外用糖皮质激素+保湿剂+钙调磷酸酶抑制剂', treatment: '根据严重程度调整治疗方案' },
  { disease: '白癜风', keyPoints: '外用糖皮质激素、钙调神经磷酸酶抑制剂；光疗；进展期系统用糖皮质激素', treatment: '综合治疗方案' },
  { disease: '气道异物梗阻', keyPoints: '海姆立克急救法——站于患者背后，双臂环抱腰部，一手握拳拇指侧置于脐上两横指，快速向上向内冲击', treatment: '急救操作技术' },
];

// ─── Section 10: 案例分析题解题三步法 ───

export const caseStudyThreeSteps = [
  {
    step: '第一步：读题提取信息（20秒）',
    actions: [
      '快速浏览患者基本信息（年龄、性别、特殊身份如妊娠/哺乳）',
      '提取诊断（什么病）和处方药物清单',
      '标记关键词：合并症、过敏史、特殊人群标识',
    ],
  },
  {
    step: '第二步：匹配知识点（20秒）',
    actions: [
      '根据疾病诊断匹配首选药物',
      '根据合并症判断用药是否合理',
      '检查有无禁忌证、相互作用、重复用药',
      '特殊人群是否需要剂量调整',
    ],
  },
  {
    step: '第三步：规范作答（14秒）',
    actions: [
      '选择最符合临床指南的答案',
      '注意题目问的是"正确的"还是"不正确的"',
      '多选题注意"全选/不选"的陷阱',
    ],
  },
];

export const caseStudyExample = {
  patient: '患者，男，68岁，诊断：高血压2级、2型糖尿病、慢性肾病（eGFR 45ml/min）',
  prescription: '缬沙坦80mg qd、二甲双胍0.5g tid、氨氯地平5mg qd',
  question: '药师审核该处方时发现的问题是？',
  analysis: [
    '提取信息：老年男性，高血压+糖尿病+CKD（eGFR 45），处方含缬沙坦+二甲双胍+氨氯地平',
    '匹配知识点：eGFR 45属于CKD 3b期，二甲双胍在国内eGFR<45时应禁用；缬沙坦适用于高血压合并糖尿病肾病（正确）；氨氯地平适用于老年高血压（正确）',
    '答案：二甲双胍在eGFR 45时不应使用，需调整降糖方案',
  ],
};

// ─── Section 11: 药学综合记忆口诀总表 ───

export const memoryCardsAll = [
  { mnemonic: '老幼病残孕，透析很特殊', explanation: '药学服务重要人群——涵盖老年人、儿童、肝肾功能不全者、血液透析者、妊娠哺乳期妇女及特殊体质者' },
  { mnemonic: '方三品四配二合一', explanation: '四查十对——查处方对3项，查药品对4项，查配伍禁忌对2项，查用药合理性对1项' },
  { mnemonic: '普精二类是白色，急黄儿绿麻一红', explanation: '处方颜色速查——普通和精二为白色，急诊为淡黄色，儿科为淡绿色，麻精一为淡红色' },
  { mnemonic: '一儿意普，二毒二精，三麻一精', explanation: '处方保存期限——普通/急诊/儿科1年；毒性药品/第二类精神药品2年；麻醉药品/第一类精神药品3年' },
  { mnemonic: '心肾糖尿用ACEI，老年黑人利尿剂，冠心病用β阻滞，前列腺增生α阻', explanation: '高血压合并症用药选择口诀' },
  { mnemonic: '新四联护心脏：沙库巴曲+美托洛尔，螺内酯+达格列净', explanation: '心衰"新四联"方案——ARNI+β阻滞剂+MRA+SGLT2抑制剂' },
  { mnemonic: 'PPI铋剂两抗菌，阿莫克拉是首选；疗程十四别短了，根除Hp靠规范', explanation: '幽门螺杆菌铋剂四联方案——PPI+铋剂+阿莫西林+克拉霉素，疗程14天' },
  { mnemonic: '发热头痛用对乙，鼻塞伪麻流鼻涕；扑尔敏来抗过敏，干咳右美痰氨溴', explanation: '感冒对症用药速记' },
  { mnemonic: '大卡小乙丙戊全，精神运动卡马先；持续状态地西泮，三叉神经卡马平', explanation: '癫痫用药选择——大发作选苯妥英钠/丙戊酸钠，小发作选乙琥胺，精神运动性发作选卡马西平' },
  { mnemonic: '二甲双胍是一线，肥胖GLP-1争先；心肾保护SGLT2，α糖苷降餐后；磺脲促泌低血糖，DPP-4安全好', explanation: '2型糖尿病药物治疗路径速记' },
];

// ─── Section 12: 药学综合易错点 ───

export const warningPoints = [
  '处方审核中的"重复用药"最易被忽视——同一通用名不同商品名（如对乙酰氨基酚：泰诺、感康、白加黑均含有），需仔细核对成分而非只看商品名',
  '超剂量使用未注明原因+再次签名 → 属于规范性审核问题（不是适宜性审核）',
  '地高辛中毒与心力衰竭加重的鉴别——两者都可表现为恶心、心律失常。关键鉴别点：地高辛中毒常有视觉异常（黄视/绿视），且血地高辛浓度>2.0 ng/mL',
  'COPD急性加重首选支气管扩张剂（SABA±SAMA），不是抗菌药物！只有出现三种指征之一（呼吸困难加重+痰量增加+脓性痰）才考虑使用抗菌药',
  '哮喘不能长期单用LABA，必须与ICS联合使用。LABA单用可能增加哮喘相关死亡风险',
  'ACEI和ARB不建议联用——联用增加高钾血症和肾功能损害风险，且不增加降压获益',
  '二甲双胍本身不伤肾，但严重肾功能不全（eGFR<45）时禁用，因乳酸酸中毒风险增加',
  '所有HFrEF患者无论是否合并糖尿病均需使用SGLT2抑制剂——这是心衰治疗近年来的重大突破',
  '癫痫持续状态首选地西泮静脉注射（不是苯妥英钠）——地西泮起效最快，是控制癫痫持续状态的金标准',
  'PPI起效需数天，不能立即缓解GERD急性症状。急性烧心时应先用抗酸药（如铝碳酸镁）快速中和胃酸',
];

// ─── Pillar cards for Section 1 ───

export const threePillars = [
  {
    title: '合法性审核',
    icon: 'shield',
    color: 'rust',
    items: ['处方权审核', '处方签章审核', '处方期限审核'],
  },
  {
    title: '规范性审核',
    icon: 'file-text',
    color: 'olive',
    items: ['前记/正文/后记完整性', '药品名称规范', '剂量单位规范'],
  },
  {
    title: '适宜性审核',
    icon: 'activity',
    color: 'gold',
    items: ['适应症、禁忌症', '药物相互作用', '剂量疗程、剂型选择'],
  },
] as const;

// ─── Clinical checklist items ───

export const clinicalChecklist = [
  '处方前记是否完整（姓名、性别、年龄、日期）',
  '处方医师是否有处方权',
  '处方签章是否齐全',
  '药品名称是否使用通用名',
  '剂量、规格、数量是否明确',
  '用法用量是否合理',
  '适应症是否与诊断相符',
  '是否存在禁忌症',
  '是否存在药物相互作用',
  '给药途径是否适宜',
  '疗程是否合理',
  '特殊人群用药是否需要调整',
];

// ─── Drug storage conditions ───

export const drugStorageConditions = [
  { condition: '常温', range: '10℃～30℃', examples: '多数普通药品' },
  { condition: '阴凉处', range: '不超过20℃', examples: '锭剂、栓剂、头孢地尼等' },
  { condition: '凉暗处', range: '避光且不超过20℃', examples: '乳酶生片、气雾剂、阿法骨化醇软胶囊' },
  { condition: '冷处', range: '2℃～10℃', examples: '胰岛素、人血液制品、抗毒素、生物制品' },
];

// ─── High-alert drug classification ───

export const highAlertDrugs = [
  { level: 'A级（最高风险）', examples: '10%氯化钾注射液、25%硫酸镁注射液、胰岛素、丙泊酚、肾上腺素、去甲肾上腺素、吗啡、硝普钠、抗肿瘤静脉用药', color: '红色' },
  { level: 'B级', examples: '阿片酊、甲氨蝶呤(口服非肿瘤用途)、缩宫素静脉注射、异丙嗪静脉注射', color: '橙色' },
  { level: 'C级', examples: '口服降糖药、口服化疗药、中药注射剂、抗血栓药（低分子肝素除外）', color: '蓝色' },
];

// ─── Key point texts ───

export const keyPointTexts = {
  fourChecks: '处方审核中的"四查十对"——查处方、查药品、查配伍禁忌、查用药合理性；对科别、姓名、年龄，对药名、剂型、规格、数量，对药品性状、用法用量，对临床诊断。',
  phenytoin: '苯妥英钠的TDM特别注意事项——其代谢具有饱和性（零级动力学），血药浓度与剂量不成正比。小剂量增加可能导致血药浓度大幅升高，是考试最热的TDM考点。',
  digoxin: '地高辛的治疗窗极窄（0.5-2.0 ng/mL），且受低钾血症影响——低钾时心肌对地高辛敏感性增加，正常剂量也可能中毒。监测地高辛浓度时必须同时监测血钾。',
  hfNewQuad: '心衰"新四联"方案已从"金三角"演进而来，SGLT2抑制剂（达格列净/恩格列净）的加入是近年最重大突破。所有HFrEF患者无论是否合并糖尿病均需使用。',
  driver: '2026年大纲新增考点——驾驶员用药禁忌。开车前4小时慎用影响驾驶的药物，或服后休息6小时再开车。注意复方制剂中有无影响驾驶的成分。',
  fifteenFifteen: '★ 15-15法则：血糖≤3.9mmol/L时，立即摄入15g碳水化合物（如4片葡萄糖片、半杯果汁、1汤匙蜂蜜），等待15分钟后复测血糖。如仍≤3.9mmol/L，重复15-15法则。',
  soap: 'SOAP药历格式——S（主观资料：患者主诉、症状描述）、O（客观资料：体格检查、实验室检验、TDM数据）、A（评估：药物疗效评价、ADR评估）、P（计划：调整方案、用药教育、随访）。',
};

// ─── Unsuitable prescribing scenarios ───

export const unsuitablePrescribing = [
  { type: '适应症不适宜', scenario: '用药与诊断不符', example: '感冒开抗生素', advice: '退回处方，建议重新评估' },
  { type: '禁忌症用药', scenario: '患者有明确禁忌', example: '妊娠期用ACEI', advice: '拒绝调配，建议更换' },
  { type: '药物相互作用', scenario: '配伍禁忌或不良相互作用', example: '华法林+阿司匹林', advice: '评估风险，监测或换药' },
  { type: '剂量不适宜', scenario: '超量或不足', example: '肾功能不全者用常规剂量', advice: '按CrCl调整剂量' },
  { type: '疗程不适宜', scenario: '过长或过短', example: '抗生素疗程不足', advice: '按指南调整疗程' },
  { type: '剂型不适宜', scenario: '剂型选择不当', example: '吞咽困难者开普通片', advice: '建议换用液体制剂' },
  { type: '给药途径不适宜', scenario: '途径选择不当', example: '应静脉用药改为口服', advice: '按病情调整途径' },
  { type: '重复用药', scenario: '同一成分不同商品名', example: '感康+泰诺（均含对乙酰氨基酚）', advice: '合并或停用一种' },
];

// ─── Disease management framework ───

export const diseaseManagementFramework = [
  { step: '疾病评估与风险分层', next: '用药方案制定与优化' },
  { step: '用药方案制定与优化', next: '用药指导与患者教育' },
  { step: '用药指导与患者教育', next: '疗效与ADR监测' },
  { step: '疗效与ADR监测', next: '随访与再评估' },
  { step: '随访与再评估', next: '疾病评估与风险分层' },
];

// ─── Five antihypertensive classes summary ───

export const fiveAntihypertensiveClasses = [
  { className: '噻嗪类利尿剂', drugs: '氢氯噻嗪、吲达帕胺', adverseEffects: '低钾、高尿酸、血糖升高', keyword: '高尿酸禁用' },
  { className: 'ACEI', drugs: '卡托普利、依那普利', adverseEffects: '★干咳（最常见）、血管性水肿', keyword: '护肾降蛋白' },
  { className: 'ARB', drugs: '缬沙坦、氯沙坦、厄贝沙坦', adverseEffects: '高钾血症', keyword: '无干咳' },
  { className: 'CCB（二氢吡啶类）', drugs: '氨氯地平、硝苯地平', adverseEffects: '★踝部水肿、头痛、面部潮红', keyword: '老年首选' },
  { className: 'β受体阻滞剂', drugs: '美托洛尔、比索洛尔', adverseEffects: '支气管痉挛、心动过缓', keyword: '冠心病首选' },
];

// ─── Insomnia drug selection (2026 update) ───

export const insomniaDrugs2026 = [
  { type: '入睡困难', firstChoice: '非苯二氮䓬类：唑吡坦、扎来普隆', notes: '起效快，半衰期短，次日残留效应少' },
  { type: '睡眠维持困难/早醒', firstChoice: '非苯二氮䓬类：艾司佐匹克隆', notes: '半衰期适中，改善睡眠维持' },
  { type: '焦虑相关性失眠', firstChoice: '苯二氮䓬类：艾司唑仑、劳拉西泮', notes: '缓解焦虑+助眠，但依赖性较高' },
  { type: '老年患者失眠', firstChoice: '褪黑素受体激动剂：雷美替胺', notes: '★安全性高，无依赖性，不干扰睡眠结构（2026新增首选）' },
  { type: '自主神经功能紊乱', firstChoice: '谷维素', notes: '安全性好，无依赖性' },
];

// ─── WHO analgesic ladder (2026 update) ───

export const whoAnalgesicLadder = [
  { step: '第一阶梯', painLevel: '轻度疼痛', drugs: '对乙酰氨基酚、NSAIDs（布洛芬、双氯芬酸）', keyPoint: '优先使用，注意胃肠道和心血管安全性' },
  { step: '第二阶梯', painLevel: '中度疼痛', drugs: '弱阿片类（可待因、曲马多）±非阿片类', keyPoint: '短疗程使用，关注依赖性风险' },
  { step: '第三阶梯', painLevel: '重度疼痛', drugs: '强阿片类（吗啡、羟考酮、芬太尼透皮贴）', keyPoint: '癌痛管理核心药物，个体化滴定' },
];

// ─── Case study cards ───

export const caseStudies = [
  {
    id: 1,
    category: '药物相互作用',
    patient: '68岁男性，高血压+房颤',
    prescription: '华法林 3mg qd + 胺碘酮 200mg qd',
    problem: '胺碘酮抑制CYP2C9和CYP1A2，显著升高华法林血药浓度',
    analysis: '两药联用需密切监测INR，建议华法林减量25-50%，INR目标2-3，初期每周监测',
  },
  {
    id: 2,
    category: '禁忌症',
    patient: '32岁女性，妊娠28周，高血压',
    prescription: '贝那普利 10mg qd',
    problem: 'ACEI类药物妊娠D级，妊娠中晚期使用可致胎儿肾损伤、羊水过少、颅骨发育不全',
    analysis: '立即停用ACEI，换用妊娠安全药物如拉贝洛尔或硝苯地平',
  },
  {
    id: 3,
    category: '剂量调整',
    patient: '75岁女性，CrCl=35 mL/min，社区获得性肺炎',
    prescription: '左氧氟沙星 500mg qd',
    problem: '肾功能不全需调整剂量',
    analysis: 'CrCl 20-49时左氧氟沙星应减至250mg qd 或 500mg q48h',
  },
];

// ─── Series conclusion ───

export const seriesConclusion = {
  title: '系列终章',
  subtitle: '五册内容，系统覆盖执业药师考试全部科目',
  body: '从备考策略到法规精讲，从药学专业知识到综合技能实践，这五册期刊系列涵盖了2026年执业药师考试的全部核心内容。愿每一位考生在备考路上找到属于自己的节奏，以扎实的知识与从容的心态迎接考试。',
  footerQuote: '知识是最好的处方',
};
