// ============================================
// Volume 4: 药学专业知识（二）精讲 — All Content Data
// ============================================

// ----- Section 1: 神经与精神疾病用药 -----

export const sedativeHypnoticTable = {
  columns: [
    { key: 'category', header: '分类' },
    { key: 'drugs', header: '代表药物' },
    { key: 'halfLife', header: '半衰期' },
    { key: 'indications', header: '主要适应症' },
    { key: 'adverse', header: '特征性不良反应' },
    { key: 'notes', header: '备注' },
  ],
  rows: [
    { category: '苯二氮卓类-短效', drugs: '三唑仑', halfLife: '1.5-5.5h', indications: '入睡困难', adverse: '遗忘症、依赖性', notes: '国内限制使用' },
    { category: '苯二氮卓类-中效', drugs: '艾司唑仑、劳拉西泮、替马西泮', halfLife: '6-24h', indications: '失眠维持睡眠', adverse: '宿醉现象、耐受性', notes: '替马西泮经肾排泄，适合老年人' },
    { category: '苯二氮卓类-长效', drugs: '地西泮、氟西泮、夸西泮', halfLife: '20-70h', indications: '焦虑伴失眠、早醒', adverse: '明显宿醉、蓄积风险', notes: '地西泮吸收最快' },
    { category: '非苯二氮卓类', drugs: '唑吡坦、佐匹克隆、扎来普隆', halfLife: '1-6h', indications: '原发性失眠', adverse: '日间镇静、口苦', notes: '选择性激动GABA_A受体' },
    { category: '巴比妥类', drugs: '苯巴比妥、异戊巴比妥、硫喷妥钠', halfLife: '可变', indications: '抗癫痫、麻醉诱导', adverse: '呼吸抑制、肝药酶诱导', notes: '安全范围窄，已少用' },
    { category: '褪黑素受体激动剂', drugs: '雷美替胺', halfLife: '1-2.6h', indications: '入睡困难', adverse: '头晕、疲劳', notes: '无依赖性' },
  ],
};

export const antiEpilepsyTable = {
  columns: [
    { key: 'type', header: '发作类型' },
    { key: 'first', header: '首选药物' },
    { key: 'alt', header: '备选药物' },
    { key: 'contra', header: '禁用/慎用' },
  ],
  rows: [
    { type: '全面性强直-阵挛发作', first: '丙戊酸钠、拉莫三嗪', alt: '左乙拉西坦、卡马西平', contra: '卡马西平可能加重肌阵挛' },
    { type: '失神发作', first: '乙琥胺、丙戊酸钠', alt: '拉莫三嗪', contra: '禁用卡马西平、奥卡西平、苯妥英钠' },
    { type: '局灶性（部分性）发作', first: '卡马西平、奥卡西平', alt: '拉莫三嗪、左乙拉西坦', contra: 'HLA-B*1502阳性者慎用卡马西平' },
    { type: '肌阵挛发作', first: '丙戊酸钠、左乙拉西坦', alt: '—', contra: '禁用卡马西平、奥卡西平' },
    { type: '癫痫持续状态', first: '地西泮静注', alt: '苯妥英钠、丙戊酸钠', contra: '避免少量多次给药' },
  ],
};

export const antipsychoticTable = {
  columns: [
    { key: 'item', header: '对比项目' },
    { key: 'firstGen', header: '第一代（典型）' },
    { key: 'secondGen', header: '第二代（非典型）' },
  ],
  rows: [
    { item: '代表药物', firstGen: '氯丙嗪、氟哌啶醇、奋乃静', secondGen: '利培酮、奥氮平、喹硫平、阿立哌唑' },
    { item: '作用机制', firstGen: '阻断D2受体', secondGen: '阻断5-HT2A/D2受体（比例不同）' },
    { item: 'EPS发生率', firstGen: '高', secondGen: '低（利培酮中等）' },
    { item: '代谢综合征', firstGen: '较少', secondGen: '常见（体重增加、糖脂异常）' },
    { item: '对阴性症状疗效', firstGen: '较差', secondGen: '较好' },
    { item: '高泌乳素血症', firstGen: '常见', secondGen: '利培酮较多见' },
    { item: '价格', firstGen: '便宜', secondGen: '较贵' },
  ],
};

export const antidepressantTable = {
  columns: [
    { key: 'category', header: '分类' },
    { key: 'drugs', header: '代表药物' },
    { key: 'mechanism', header: '作用机制' },
    { key: 'indications', header: '主要适应症' },
    { key: 'adverse', header: '典型不良反应' },
  ],
  rows: [
    { category: '三环类(TCAs)', drugs: '阿米替林、丙米嗪、氯米帕明、多塞平', mechanism: '抑制5-HT和NE再摄取', indications: '抑郁伴疼痛、强迫症（氯米帕明）', adverse: '抗胆碱能反应（口干、便秘、视物模糊）、体位性低血压、心脏毒性' },
    { category: '四环类', drugs: '马普替林', mechanism: '选择性抑制NE再摄取', indications: '抑郁症', adverse: '与TCAs类似但较轻' },
    { category: 'SSRI', drugs: '氟西汀、帕罗西汀、舍曲林、西酞普兰', mechanism: '选择性抑制5-HT再摄取', indications: '各类抑郁、焦虑、强迫症', adverse: '胃肠道反应、性功能障碍、失眠/嗜睡' },
    { category: 'SNRI', drugs: '文拉法辛、度洛西汀', mechanism: '抑制5-HT和NE再摄取', indications: '严重抑郁、伴疼痛者', adverse: '高血压（文拉法辛高剂量）、出汗' },
    { category: 'NaSSA', drugs: '米氮平', mechanism: '阻断α2受体，增加NE和5-HT释放', indications: '伴失眠、食欲下降者', adverse: '体重增加、嗜睡' },
  ],
};

export const morphineVsPethidineTable = {
  columns: [
    { key: 'item', header: '对比项目' },
    { key: 'morphine', header: '吗啡（Morphine）' },
    { key: 'pethidine', header: '哌替啶（Pethidine）' },
  ],
  rows: [
    { item: '作用机制', morphine: 'μ受体激动', pethidine: 'μ受体激动' },
    { item: '镇痛强度', morphine: '强', pethidine: '约为吗啡的1/10' },
    { item: '起效时间', morphine: '15-30min', pethidine: '10-15min' },
    { item: '持续时间', morphine: '4-6h', pethidine: '2-4h' },
    { item: '成瘾性', morphine: '高', pethidine: '较高' },
    { item: '镇咳作用', morphine: '有（中枢性镇咳）', pethidine: '无' },
    { item: '缩瞳作用', morphine: '有', pethidine: '无' },
    { item: '代谢产物', morphine: '吗啡-6-葡萄糖醛酸（活性）', pethidine: '去甲哌替啶（有活性，可致惊厥）' },
    { item: '临床应用', morphine: '急性剧痛、癌痛、心梗', pethidine: '仅用于急性疼痛，不用于慢性癌痛' },
  ],
};

// ----- Section 2: 解热镇痛抗炎与抗痛风药 -----

export const nsaidCoxTable = {
  columns: [
    { key: 'category', header: '分类' },
    { key: 'drugs', header: '代表药物' },
    { key: 'selectivity', header: 'COX选择性' },
    { key: 'giSafety', header: '胃肠道安全性' },
    { key: 'cvSafety', header: '心血管安全性' },
    { key: 'notes', header: '特点' },
  ],
  rows: [
    { category: '非选择性NSAIDs', drugs: '阿司匹林', selectivity: 'COX-1=COX-2', giSafety: '差（胃肠道出血风险高）', cvSafety: '小剂量保护心血管', notes: '不可逆抑制COX' },
    { category: '非选择性NSAIDs', drugs: '布洛芬', selectivity: 'COX-1≥COX-2', giSafety: '较差', cvSafety: '中性', notes: '退热首选' },
    { category: '非选择性NSAIDs', drugs: '吲哚美辛', selectivity: 'COX-1≥COX-2', giSafety: '差', cvSafety: '中性', notes: '抗炎最强，不良反应多' },
    { category: '选择性COX-2抑制剂', drugs: '塞来昔布', selectivity: 'COX-2>COX-1', giSafety: '较好', cvSafety: '可能增加心血管风险', notes: '有磺胺过敏史者禁用' },
    { category: '选择性COX-2抑制剂', drugs: '依托考昔', selectivity: '高选择性COX-2', giSafety: '较好', cvSafety: '需关注', notes: '镇痛效果强' },
  ],
};

export const goutTreatmentTable = {
  columns: [
    { key: 'stage', header: '分期' },
    { key: 'goal', header: '治疗目标' },
    { key: 'first', header: '首选药物' },
    { key: 'notes', header: '用药要点' },
  ],
  rows: [
    { stage: '急性发作期', goal: '快速抗炎镇痛', first: '秋水仙碱、NSAIDs（依托考昔/吲哚美辛）', notes: '秋水仙碱36小时内疗效最佳；急性期禁用降尿酸药' },
    { stage: '缓解期', goal: '持续降尿酸', first: '别嘌醇、非布司他、苯溴马隆', notes: '降尿酸药可诱发急性发作，初期需联用秋水仙碱或NSAIDs预防' },
    { stage: '慢性痛风石期', goal: '溶解尿酸盐结晶', first: '非布司他、苯溴马隆（促排泄）', notes: '碱化尿液（pH 6.2-6.9），多饮水' },
  ],
};

// ----- Section 3: 呼吸系统用药 -----

export const asthmaDrugsTable = {
  columns: [
    { key: 'category', header: '分类' },
    { key: 'drugs', header: '代表药物' },
    { key: 'mechanism', header: '作用靶点/机制' },
    { key: 'onset', header: '起效时间' },
    { key: 'scene', header: '适用场景' },
  ],
  rows: [
    { category: 'SABA（短效β2激动剂）', drugs: '沙丁胺醇、特布他林', mechanism: '激动β2受体，松弛支气管平滑肌', onset: '数分钟', scene: '急性发作首选、运动前预防' },
    { category: 'LABA（长效β2激动剂）', drugs: '沙美特罗、福莫特罗', mechanism: '激动β2受体', onset: '15-30min', scene: '慢性持续期控制（不可单用）' },
    { category: 'ICS（吸入性糖皮质激素）', drugs: '布地奈德、氟替卡松', mechanism: '抑制气道炎症', onset: '数天', scene: '慢性持续期控制（基石药物）' },
    { category: 'LAMA（长效M受体拮抗剂）', drugs: '噻托溴铵', mechanism: '阻断M3受体，舒张支气管', onset: '30min', scene: 'COPD首选、哮喘辅助治疗' },
    { category: '白三烯受体拮抗剂', drugs: '孟鲁司特', mechanism: '阻断半胱氨酰白三烯受体', onset: '数天', scene: '阿司匹林哮喘、运动诱发哮喘' },
  ],
};

// ----- Section 4: 消化系统用药 -----

export const h2VsPpiTable = {
  columns: [
    { key: 'item', header: '对比项目' },
    { key: 'h2', header: 'H2受体阻断剂' },
    { key: 'ppi', header: 'PPI' },
  ],
  rows: [
    { item: '代表药物', h2: '西咪替丁、雷尼替丁、法莫替丁', ppi: '奥美拉唑、兰索拉唑、泮托拉唑、雷贝拉唑' },
    { item: '作用靶点', h2: 'H2受体', ppi: 'H+-K+-ATP酶（质子泵）' },
    { item: '抑酸强度', h2: '中等（抑制基础胃酸70%）', ppi: '强（抑制胃酸90%以上）' },
    { item: '起效速度', h2: '较快', ppi: '较慢（需3-5天达最大效应）' },
    { item: '作用持续时间', h2: '较短（6-12h）', ppi: '长（24h以上）' },
    { item: '主要适应症', h2: '轻中度GERD、消化性溃疡', ppi: '重度GERD、消化性溃疡、Hp根除、卓-艾综合征' },
    { item: '特殊不良反应', h2: '西咪替丁：抗雄激素、肝药酶抑制', ppi: '长期用：低镁血症、骨折风险、VitB12缺乏、肠道感染' },
  ],
};

// ----- Section 5: 心血管系统用药 -----

export const antihypertensiveTable = {
  columns: [
    { key: 'category', header: '分类' },
    { key: 'drugs', header: '代表药物' },
    { key: 'mechanism', header: '作用机制' },
    { key: 'indications', header: '主要适应症' },
    { key: 'adverse', header: '典型不良反应' },
    { key: 'contra', header: '禁忌症' },
  ],
  rows: [
    { category: 'ACEI', drugs: '卡托普利、依那普利、福辛普利', mechanism: '抑制ACE，减少AngII生成，减少醛固酮分泌', indications: '高血压伴心衰、糖尿病肾病、蛋白尿', adverse: '干咳（最常见，10-20%）、血管神经性水肿、高血钾', contra: '妊娠、双侧肾动脉狭窄、高钾血症' },
    { category: 'ARB', drugs: '缬沙坦、氯沙坦、替米沙坦', mechanism: '选择性阻断AT1受体', indications: '不能耐受ACEI干咳者、心衰、糖尿病肾病', adverse: '高血钾、低血压（无干咳）', contra: '妊娠、双侧肾动脉狭窄' },
    { category: 'CCB-二氢吡啶类', drugs: '氨氯地平、硝苯地平、非洛地平', mechanism: '阻断L型钙通道，抑制Ca2+内流', indications: '老年高血压、单纯收缩期高血压、稳定型心绞痛', adverse: '踝部水肿、面部潮红、头痛、牙龈增生', contra: '心源性休克、严重主动脉狭窄' },
    { category: '噻嗪类利尿药', drugs: '氢氯噻嗪、吲达帕胺', mechanism: '抑制远曲小管Na+-Cl-共转运体', indications: '轻中度高血压、老年高血压', adverse: '低血钾、高尿酸、高血糖、高血脂', contra: '痛风、严重肾功能不全' },
    { category: 'β受体阻滞剂', drugs: '美托洛尔、比索洛尔、卡维地洛', mechanism: '阻断β受体，降低心输出量，抑制肾素释放', indications: '高血压伴冠心病、心衰、快速心律失常', adverse: '心动过缓、支气管痉挛、乏力、性功能障碍', contra: '哮喘、严重心动过缓、二度以上AVB' },
  ],
};

export const antiarrhythmicVWTable = {
  columns: [
    { key: 'class', header: '分类' },
    { key: 'drugs', header: '代表药物' },
    { key: 'mechanism', header: '作用机制' },
    { key: 'features', header: '特点' },
  ],
  rows: [
    { class: 'Ia类', drugs: '奎尼丁、普鲁卡因胺', mechanism: '中度阻滞Na+通道，延长ERP', features: '广谱，但不良反应多，现已少用' },
    { class: 'Ib类', drugs: '利多卡因、美西律', mechanism: '轻度阻滞Na+通道，缩短APD', features: '室性心律失常首选' },
    { class: 'Ic类', drugs: '普罗帕酮、氟卡尼', mechanism: '重度阻滞Na+通道，明显减慢传导', features: '无器质性心脏病者可用' },
    { class: 'II类（β阻滞剂）', drugs: '美托洛尔、普萘洛尔、艾司洛尔', mechanism: '阻断β受体减慢心率和传导', features: '降低猝死风险' },
    { class: 'III类（K+通道阻滞）', drugs: '胺碘酮', mechanism: '阻滞K+通道延长APD和ERP', features: '最广谱，含碘，半衰期40-55天' },
    { class: 'IV类（Ca2+通道阻滞）', drugs: '维拉帕米、地尔硫䓬', mechanism: '阻滞L型钙通道', features: '用于室上性心动过速' },
  ],
};

export const lipidLoweringTable = {
  columns: [
    { key: 'category', header: '分类' },
    { key: 'drugs', header: '代表药物' },
    { key: 'target', header: '作用靶点' },
    { key: 'indications', header: '主要适应症' },
    { key: 'adverse', header: '典型不良反应' },
  ],
  rows: [
    { category: '他汀类', drugs: '阿托伐他汀、瑞舒伐他汀、辛伐他汀', target: '抑制HMG-CoA还原酶', indications: '高胆固醇血症、ASCVD预防（降LDL最强）', adverse: '肝毒性、肌肉毒性（肌痛→横纹肌溶解）' },
    { category: '贝特类', drugs: '非诺贝特、吉非贝齐', target: '激活PPARα', indications: '高TG血症', adverse: '胃肠道反应、胆石症、与他汀合用增加肌病风险' },
    { category: '烟酸类', drugs: '烟酸、阿昔莫司', target: '抑制脂肪组织脂解', indications: '广谱调脂（升HDL最强）', adverse: '面部潮红、肝毒性、高血糖、高尿酸' },
    { category: '胆固醇吸收抑制剂', drugs: '依折麦布', target: '抑制小肠胆固醇吸收', indications: '高胆固醇血症（与他汀合用增效）', adverse: '头痛、腹痛' },
    { category: '胆汁酸螯合剂', drugs: '考来烯胺', target: '结合胆汁酸', indications: '高胆固醇血症', adverse: '便秘、影响脂溶性维生素吸收' },
  ],
};

export const anticoagulantTable = {
  columns: [
    { key: 'item', header: '对比项目' },
    { key: 'heparin', header: '肝素（Heparin）' },
    { key: 'warfarin', header: '华法林（Warfarin）' },
    { key: 'doac', header: 'DOACs（达比加群/利伐沙班）' },
  ],
  rows: [
    { item: '给药途径', heparin: '静脉/皮下', warfarin: '口服', doac: '口服' },
    { item: '起效时间', heparin: '即刻', warfarin: '慢（需3-5天）', doac: '1-3h（快）' },
    { item: '作用机制', heparin: '激活抗凝血酶III', warfarin: '抑制VitK依赖性凝血因子（II、VII、IX、X）', doac: '直接抑制凝血酶（达比加群）或Xa因子（利伐沙班）' },
    { item: '监测指标', heparin: 'APTT', warfarin: 'INR（目标2-3）', doac: '一般无需常规监测' },
    { item: '解毒药', heparin: '鱼精蛋白', warfarin: 'VitK、FFP、凝血酶原复合物', doac: '依达赛珠单抗（达比加群）、Andexanet alfa（Xa因子抑制剂）' },
    { item: '适应症', heparin: '急性血栓、DIC、体外循环', warfarin: '长期抗凝（房颤、机械瓣膜、VTE预防）', doac: '非瓣膜性房颤、VTE预防和治疗' },
  ],
};

// ----- Section 6: 内分泌系统用药 -----

export const diabetesDrugsTable = {
  columns: [
    { key: 'category', header: '分类' },
    { key: 'drugs', header: '代表药物' },
    { key: 'mechanism', header: '作用机制' },
    { key: 'hypoRisk', header: '低血糖风险' },
    { key: 'weight', header: '体重影响' },
    { key: 'notes', header: '特殊注意' },
  ],
  rows: [
    { category: '胰岛素', drugs: '速效（门冬）、短效（常规）、中效（NPH）、长效（甘精）', mechanism: '补充外源性胰岛素', hypoRisk: '高', weight: '增加', notes: '1型糖尿病必需' },
    { category: '双胍类', drugs: '二甲双胍', mechanism: '抑制肝糖输出，增加外周胰岛素敏感性', hypoRisk: '无', weight: '不变/略减', notes: '2型糖尿病首选、eGFR<30禁用' },
    { category: '磺脲类', drugs: '格列美脲、格列吡嗪、格列本脲', mechanism: '刺激胰岛β细胞分泌胰岛素', hypoRisk: '高', weight: '增加', notes: '格列本脲作用最长，低血糖风险最高' },
    { category: '格列奈类', drugs: '瑞格列奈、那格列奈', mechanism: '刺激胰岛素分泌（快速短效）', hypoRisk: '中（餐时）', weight: '增加', notes: '餐时服药，灵活方便' },
    { category: 'α-糖苷酶抑制剂', drugs: '阿卡波糖、伏格列波糖', mechanism: '抑制小肠α-糖苷酶，延缓糖吸收', hypoRisk: '无', weight: '不变', notes: '餐时嚼服、胃肠胀气' },
    { category: '噻唑烷二酮类', drugs: '吡格列酮、罗格列酮', mechanism: '激活PPARγ，改善胰岛素敏感性', hypoRisk: '无', weight: '增加', notes: '心衰、骨质疏松患者禁用' },
    { category: 'DPP-4抑制剂', drugs: '西格列汀、沙格列汀', mechanism: '抑制DPP-4，增加内源性GLP-1', hypoRisk: '无', weight: '中性', notes: '口服方便，耐受性好' },
    { category: 'SGLT2抑制剂', drugs: '达格列净、恩格列净', mechanism: '抑制肾小管SGLT2，促进尿糖排泄', hypoRisk: '无', weight: '减轻', notes: '泌尿生殖道感染风险、血容量减少' },
  ],
};

// ----- Section 7: 抗感染药物 -----

export const cephalosporinTable = {
  columns: [
    { key: 'item', header: '对比项目' },
    { key: 'gen1', header: '第一代' },
    { key: 'gen2', header: '第二代' },
    { key: 'gen3', header: '第三代' },
    { key: 'gen4', header: '第四代' },
    { key: 'gen5', header: '第五代' },
  ],
  rows: [
    { item: '代表药', gen1: '头孢唑林、头孢拉定、头孢氨苄', gen2: '头孢呋辛、头孢克洛、头孢丙烯', gen3: '头孢曲松、头孢他啶、头孢哌酮、头孢噻肟', gen4: '头孢吡肟、头孢匹罗', gen5: '头孢洛林、头孢吡普' },
    { item: 'G+菌活性', gen1: '+++（最强）', gen2: '++', gen3: '+', gen4: '++', gen5: '+++' },
    { item: 'G-菌活性', gen1: '+', gen2: '++', gen3: '+++（最强）', gen4: '++++', gen5: '+++' },
    { item: '铜绿假单胞菌', gen1: '无效', gen2: '无效', gen3: '有效（头孢他啶最强）', gen4: '有效', gen5: '有效' },
    { item: 'MRSA', gen1: '无效', gen2: '无效', gen3: '无效', gen4: '无效', gen5: '有效（★第五代独有）' },
    { item: 'β-内酰胺酶稳定性', gen1: '低', gen2: '中', gen3: '高', gen4: '很高', gen5: '很高' },
    { item: '肾毒性', gen1: '有（头孢拉定最甚）', gen2: '较轻', gen3: '基本无', gen4: '无', gen5: '无' },
    { item: '透过血脑屏障', gen1: '难', gen2: '部分可', gen3: '部分可（头孢曲松可）', gen4: '可', gen5: '可' },
  ],
};

export const antimicrobialOverviewTable = {
  columns: [
    { key: 'category', header: '大类' },
    { key: 'drugs', header: '代表药物' },
    { key: 'spectrum', header: '抗菌谱' },
    { key: 'indications', header: '主要适应症' },
    { key: 'adverse', header: '主要不良反应' },
  ],
  rows: [
    { category: 'β-内酰胺类', drugs: '青霉素、头孢菌素', spectrum: 'G+、G-菌', indications: '呼吸道、泌尿道、皮肤感染', adverse: '过敏反应（交叉）' },
    { category: '大环内酯类', drugs: '阿奇霉素、克拉霉素', spectrum: 'G+、非典型', indications: '呼吸道感染（尤其非典型）', adverse: '胃肠道反应、QT延长' },
    { category: '喹诺酮类', drugs: '左氧氟沙星、莫西沙星', spectrum: '广谱G+G-', indications: '呼吸、泌尿、肠道感染', adverse: '肌腱断裂、QT延长、CNS' },
    { category: '氨基糖苷类', drugs: '庆大霉素、阿米卡星', spectrum: 'G-为主', indications: '严重G-感染（联合）', adverse: '肾毒性、耳毒性' },
    { category: '四环素类', drugs: '多西环素、米诺环素', spectrum: '广谱', indications: '非典型、立克次体、痤疮', adverse: '光敏、牙齿着色' },
    { category: '硝基咪唑类', drugs: '甲硝唑、替硝唑', spectrum: '厌氧菌+原虫', indications: '厌氧菌感染、阿米巴', adverse: '双硫仑反应' },
  ],
};

// ----- Section 8: 抗肿瘤药 -----

export const antitumorTable = {
  columns: [
    { key: 'category', header: '分类' },
    { key: 'drugs', header: '代表药物' },
    { key: 'mechanism', header: '作用机制' },
    { key: 'indications', header: '主要适应症' },
    { key: 'toxicity', header: '特征性毒性' },
  ],
  rows: [
    { category: '烷化剂', drugs: '环磷酰胺', mechanism: '交联DNA', indications: '淋巴瘤、白血病', toxicity: '出血性膀胱炎（用美司钠预防）' },
    { category: '抗代谢药-叶酸拮抗', drugs: '甲氨蝶呤', mechanism: '抑制二氢叶酸还原酶', indications: '白血病、绒毛膜癌', toxicity: '骨髓抑制、黏膜炎' },
    { category: '抗代谢药-嘧啶拮抗', drugs: '5-FU', mechanism: '抑制胸苷酸合成酶', indications: '消化道肿瘤', toxicity: '手足综合征、腹泻' },
    { category: '植物碱类', drugs: '长春新碱', mechanism: '抑制微管聚合', indications: '淋巴瘤、儿童肿瘤', toxicity: '周围神经毒性' },
    { category: '紫杉类', drugs: '紫杉醇', mechanism: '促进微管稳定', indications: '乳腺癌、卵巢癌', toxicity: '过敏、周围神经毒性' },
    { category: '蒽环类', drugs: '多柔比星', mechanism: '嵌入DNA+自由基', indications: '广谱', toxicity: '心脏毒性（累积剂量）' },
    { category: '靶向-CD20', drugs: '利妥昔单抗', mechanism: '单抗靶向CD20', indications: 'B细胞淋巴瘤', toxicity: '输液反应' },
    { category: '靶向-HER2', drugs: '曲妥珠单抗', mechanism: '单抗靶向HER2', indications: 'HER2+乳腺癌', toxicity: '心脏毒性' },
    { category: '靶向-BCR-ABL', drugs: '伊马替尼', mechanism: '酪氨酸激酶抑制剂', indications: 'CML、GIST', toxicity: '水肿、骨髓抑制' },
  ],
};

export const immunotherapyTable = {
  columns: [
    { key: 'item', header: '对比项目' },
    { key: 'pd1', header: 'PD-1/PD-L1抑制剂' },
    { key: 'adc', header: 'ADC药物' },
    { key: 'cart', header: 'CAR-T细胞治疗' },
  ],
  rows: [
    { item: '代表药物', pd1: '帕博利珠单抗、纳武利尤单抗', adc: '恩美曲妥珠单抗（T-DM1）、德曲妥珠单抗', cart: '阿基仑赛、瑞基奥仑赛' },
    { item: '作用机制', pd1: '阻断PD-1/PD-L1通路，恢复T细胞杀伤功能', adc: '靶向抗体+连接子+细胞毒药物，精准杀伤', cart: '基因改造T细胞表达CAR，识别杀伤肿瘤' },
    { item: '适应症', pd1: '黑色素瘤、NSCLC、霍奇金淋巴瘤、MSI-H实体瘤', adc: 'HER2+乳腺癌等', cart: '复发/难治B-ALL、弥漫大B细胞淋巴瘤' },
    { item: '特征性不良反应', pd1: '免疫相关不良反应（irAEs）：肺炎、结肠炎、肝炎、内分泌病变', adc: '骨髓抑制、周围神经病变', cart: 'CRS（细胞因子释放综合征）、ICANS（神经毒性）' },
    { item: '给药方式', pd1: '静脉输注', adc: '静脉输注', cart: '体外制备后回输（个体化）' },
  ],
};

// ----- Memory Cards (12 total) -----
export interface MemoryCardData {
  mnemonic: string;
  explanation: string;
}

export const allMemoryCards: MemoryCardData[] = [
  { mnemonic: '"天长地久很浮夸"——长效：地西泮、氟西泮、夸西泮；入睡困难选扎来普隆（半衰期约1h）；原发性失眠首选唑吡坦。', explanation: '苯二氮卓类半衰期分类与选药原则' },
  { mnemonic: '"地西泮→去甲地西泮→替马西泮→奥沙西泮"，记住代谢顺序即可理解为什么替马西泮和奥沙西泮安全性更高。', explanation: '苯二氮卓代谢链——它们是代谢最终产物，不再经肝脏CYP450转化' },
  { mnemonic: '"全面发作丙戊酸，局灶发作卡马西；失神发作乙琥胺，持续状态地西泮；肌阵挛用丙戊酸，卡马奥卡要禁用。"', explanation: '抗癫痫药按发作类型选择' },
  { mnemonic: '"急数坐数帕数迟数"——急性肌张力障碍数小时到数天，静坐不能和帕金森数天到数周，迟发性运动障碍数月到数年。', explanation: '锥体外系反应时间顺序' },
  { mnemonic: '"三米多"（三环类：阿米替林、丙米嗪、多塞平+氯米帕明）；"吾怕媳妇和蛇"（SSRI：氟西汀、帕罗西汀、舍曲林、氟伏沙明、西酞普兰、艾司西酞普兰）；"能摆平"（米氮平）。', explanation: '抗抑郁药分类记忆' },
  { mnemonic: '"非选伤胃不伤heart，选二伤胃少但管得住；小剂量阿司匹林防血栓，大剂量反而促血栓。"', explanation: 'NSAIDs COX选择性核心记忆' },
  { mnemonic: '"急性抗炎缓降酸，急性期里别碰降酸药；别嘌醇防生成，苯溴马隆促排泄。"', explanation: '抗痛风分期用药原则' },
  { mnemonic: '"急性发作沙丁胺醇救，长期控制激素为首；LABA不可单独用，ICS+LABA才是正解；白三烯对阿司匹林哮喘最灵验。"', explanation: '哮喘用药速记' },
  { mnemonic: '"普利护肾又降压，咳嗽就换沙坦吧；地平老人最适宜，洛尔哮喘要禁用；利尿便宜钾要注意，心衰糖尿普利先。"', explanation: '抗高血压药选择原则' },
  { mnemonic: '"肺纤甲减角膜黄，光敏皮蓝神经伤；半衰期长四十天，停药作用还绵延。"', explanation: '胺碘酮长期不良反应速记' },
  { mnemonic: '"满月脸水牛背，向心性肥胖血糖高；骨质疏松易感染，溃疡精神眼也伤；HPA轴被抑制，逐渐减量防危象。"', explanation: '糖皮质激素不良反应速记' },
  { mnemonic: '"一拉定唑林氨苄，二呋孟替克丙烯，三肟他啶哌曲松，四代吡肟骑匹马，五洛林托罗普。"', explanation: '五代头孢代表药记忆口诀' },
];

// ----- Warning Points (10 traps) -----
export interface WarningPoint {
  title: string;
  text: string;
}

export const warningPoints: WarningPoint[] = [
  { title: '陷阱1：ACEI干咳 vs ARB无干咳', text: 'ACEI因抑制缓激肽降解导致干咳（10-20%），ARB不影响缓激肽代谢故无干咳。这是考试最高频的区分点，临床中最常见的换药原因。' },
  { title: '陷阱2：肝素 vs 华法林——起效与监测', text: '肝素起效即刻，监测APTT，解毒用鱼精蛋白；华法林起效慢（3-5天），监测INR，解毒用VitK。两者换用需"桥接"。' },
  { title: '陷阱3：快速型心律失常补钾 vs 缓慢型忌钾', text: '地高辛中毒时出现快速型心律失常→补钾（K+与地高辛竞争Na+-K+-ATP酶）；出现缓慢型心律失常→忌钾（会加重传导阻滞）。' },
  { title: '陷阱4：急性痛风期禁用降尿酸药', text: '痛风急性发作期只能用秋水仙碱或NSAIDs抗炎镇痛，加用降尿酸药会诱发或加重急性发作。降尿酸治疗需在急性发作缓解后2周开始。' },
  { title: '陷阱5：SSRI不可与MAOI合用', text: '两者合用可致5-HT综合征（致命性），换药需间隔至少2周（氟西汀5周）。' },
  { title: '陷阱6：LABA不可单独用于哮喘', text: 'LABA（沙美特罗等）单用可能增加哮喘死亡风险，必须与ICS联合使用。' },
  { title: '陷阱7：吗啡解救 vs 哌替啶禁用慢性癌痛', text: '吗啡急性中毒用纳洛酮解救；哌替啶代谢产物去甲哌替啶有神经毒性，禁用于慢性疼痛。' },
  { title: '陷阱8：硝酸酯类+西地那非=致命低血压', text: '两者合用可导致严重低血压甚至猝死，绝对禁忌。' },
  { title: '陷阱9：他汀类与贝特类不可随意合用', text: '两者合用显著增加横纹肌溶解风险，如需合用首选非诺贝特（优于吉非贝齐），且需严密监测CK。' },
  { title: '陷阱10：袢利尿药耳毒性 vs 氨基糖苷类耳毒性', text: '两者合用耳毒性叠加，尤其肾功能不全患者需格外谨慎。' },
];

// ----- Key Points -----
export const keyPoints = {
  aceiCough: 'ACEI类药物引起的干咳——是考试高频考点，发生率约10-20%，由于缓激肽和P物质蓄积所致。不能耐受者应换用ARB类药物，不可加用止咳药。',
  betaBlockerWithdrawal: 'β受体阻滞剂不可突然停药——长期使用后突然停用可导致反跳性高血压、心动过速，甚至心肌梗死。需逐渐减量。',
  metforminRenal: '二甲双胍在eGFR 30-45时减量，eGFR<30时禁用——注意是eGFR不是血肌酐值，老年人需根据Cockcroft-Gault公式计算。',
  redManSyndrome: '万古霉素的"红人综合征"不是过敏反应——是由于药物引起组胺释放所致，与输注速度有关（>10mg/min），减慢输注即可预防。',
  doacBleeding: '利伐沙班等DOAC的出血解救——DOAC出血可用凝血酶原复合物（PCC），但注意：达比加群可用特异性拮抗剂依达赛珠单抗，Xa因子抑制剂可用andexanet alfa。',
  penicillinAllergy: 'β-内酰胺类抗生素的交叉过敏——青霉素过敏者约有5-10%对头孢菌素也过敏（因共享β-内酰胺环），但有严重青霉素过敏史（过敏性休克）者禁用头孢菌素。',
  labaWarning: 'LABA不可单独用于哮喘——FDA黑框警告，LABA单用可能增加严重哮喘发作风险，必须与ICS联合使用。',
  heartFailureNewQuad: '心衰"新四联"方案——ARNI+β受体阻滞剂+MRA+SGLT2抑制剂，已从传统"金三角"升级。',
};
