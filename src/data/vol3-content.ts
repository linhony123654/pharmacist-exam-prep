// ==========================================
// Volume 3: 药学专业知识（一）精讲 — Content Data
// ==========================================

// ----- Section 1: 药品质量标准与药物分析 -----

export const identificationMethodsColumns = [
  { key: 'category', header: '方法类别' },
  { key: 'method', header: '具体方法' },
  { key: 'pros', header: '优点' },
  { key: 'cons', header: '缺点' },
  { key: 'application', header: '典型应用' },
];

export const identificationMethodsRows = [
  {
    category: '化学鉴别法',
    method: '呈色反应、沉淀反应、焰色反应、气体生成反应',
    pros: '操作简便、快速、成本低、不需要昂贵仪器',
    cons: '专属性较差，易受干扰，灵敏度有限',
    application: '阿司匹林水解+三氯化铁反应呈紫堇色、芳香第一胺重氮化-偶合反应呈橙红色、丙二酰脲类银盐反应',
  },
  {
    category: '光谱鉴别法',
    method: 'UV-Vis（紫外-可见）、IR（红外）、NMR、MS',
    pros: 'UV快速简便适合批量检测；IR专属性强被称为"分子指纹"',
    cons: 'UV专属性差（结构相似物吸收相似）；IR需纯品、操作复杂',
    application: 'UV用于有共轭结构的药物；IR用于几乎所有药物的鉴别确认；荧光光谱用于有荧光特性的药物',
  },
  {
    category: '色谱鉴别法',
    method: 'HPLC保留时间比对、GC保留时间比对、TLC的Rf值+显色',
    pros: '高专属性，可同时鉴别和检查纯度，分离能力强',
    cons: '需对照品、仪器昂贵、操作复杂、耗时较长',
    application: 'HPLC保留时间比对（复方制剂首选）、TLC Rf值与显色行为结合、GC用于挥发性药物',
  },
];

export const contentDeterminationColumns = [
  { key: 'method', header: '方法类别' },
  { key: 'scenario', header: '适用场景' },
  { key: 'adoption', header: '药典采用情况' },
  { key: 'accuracy', header: '准确度' },
  { key: 'specificity', header: '专属性' },
  { key: 'cost', header: '成本/效率' },
];

export const contentDeterminationRows = [
  {
    method: '容量分析法（滴定法）',
    scenario: '原料药含量测定，纯度高的单一组分',
    adoption: '原料药标准中广泛使用',
    accuracy: '高（±0.5%）',
    specificity: '低',
    cost: '低成本、高效率',
  },
  {
    method: '光谱分析法（UV等）',
    scenario: '灵敏度要求高、样本量大的项目',
    adoption: '部分药物和制剂的含量测定',
    accuracy: '中',
    specificity: '中',
    cost: '中成本、高效率',
  },
  {
    method: '色谱分析法（HPLC）',
    scenario: '复方制剂、杂质多的样品、体内样品',
    adoption: '制剂标准首选',
    accuracy: '高',
    specificity: '高',
    cost: '高成本、中等效率',
  },
];

// ----- Section 2: 药物化学基础 -----

export const functionalGroupColumns = [
  { key: 'group', header: '官能团' },
  { key: 'effect', header: '对生物活性影响' },
  { key: 'memory', header: '记忆要点' },
  { key: 'example', header: '举例' },
];

export const functionalGroupRows = [
  {
    group: '烃基(-R)',
    effect: '脂溶性增加，位阻增加，稳定性增加',
    memory: '"火字旁，火上浇油"——烃字带火，增加脂溶性',
    example: '环己巴比妥引入甲基→海索比妥，脂溶性增加',
  },
  {
    group: '卤素(-X)',
    effect: '强吸电子性，脂溶性增加，作用时间延长',
    memory: '氟安定>安定（引入F增强脂溶性和活性）',
    example: '氟奋乃静>奋乃静（引入三氟甲基）',
  },
  {
    group: '羟基(-OH)',
    effect: '水溶性增加，与受体氢键结合力增强',
    memory: '"脱胎于水"——羟基来自水分子去掉一个H',
    example: '脂肪链上羟基使活性和毒性下降；芳环上羟基使酸性、活性和毒性均增强',
  },
  {
    group: '巯基(-SH)',
    effect: '脂溶性高，易吸收，可解毒',
    memory: '硫醇类化合物是常用解毒剂',
    example: '谷胱甘肽是细胞内最重要的解毒剂',
  },
  {
    group: '醚和硫醚',
    effect: '易通过生物膜；硫醚可氧化成亚砜/砜',
    memory: '"风流黄"——风=砜，流=硫醚的流动，黄=氧化过程颜色',
    example: '硫醚→亚砜→砜，极性递增（如奥美拉唑）',
  },
  {
    group: '季铵',
    effect: '水溶性强，难透过血脑屏障，无中枢作用',
    memory: '"金戈铁马"——形容季铵盐的刚性离子特性',
    example: '四代头孢含季铵结构可穿透细菌细胞壁但中枢副作用少',
  },
  {
    group: '磺酸/羧酸',
    effect: '水溶性强；成酯后脂溶性增加易吸收',
    memory: '前药设计常用策略——将羧酸制成酯增加口服吸收',
    example: '多种前药通过酯化修饰提高生物利用度',
  },
  {
    group: '胺类',
    effect: '碱性，易形成氢键；活性：伯胺>仲胺>叔胺',
    memory: '"大哥活性强"——按年龄排序，伯=大哥',
    example: '儿茶酚胺类去甲肾上腺素（伯胺）活性强于肾上腺素（仲胺）',
  },
];

export const bondingTypesColumns = [
  { key: 'type', header: '键合类型' },
  { key: 'feature', header: '特点' },
  { key: 'energy', header: '键能大小' },
  { key: 'example', header: '代表药物' },
  { key: 'memory', header: '记忆方法' },
];

export const bondingTypesRows = [
  {
    type: '共价键',
    feature: '不可逆结合，电子共享，作用持久甚至永久',
    energy: '最强（200-400 kJ/mol）',
    example: '烷化剂类抗肿瘤药、β-内酰胺类、拉唑类',
    memory: '"共价=共享=结婚=不可逆"',
  },
  {
    type: '离子键',
    feature: '强静电引力，带相反电荷基团间',
    energy: '强（20-40 kJ/mol）',
    example: '去甲肾上腺素、氯贝胆碱',
    memory: '—',
  },
  {
    type: '氢键',
    feature: '最常见非共价键，H与电负性原子间',
    energy: '中等（4-25 kJ/mol）',
    example: '磺酰胺类利尿药与碳酸酐酶',
    memory: '"谁常探亲黄家"——氢=谁，键=亲，磺=黄',
  },
  {
    type: '离子-偶极',
    feature: '离子与极性分子间（含羰基化合物）',
    energy: '中等',
    example: '美沙酮',
    memory: '"拍欧美风照片"——偶=拍，极=级',
  },
  {
    type: '疏水性相互作用',
    feature: '非极性基团间的聚集效应',
    energy: '弱（~4 kJ/mol）',
    example: '普鲁卡因的结合模式',
    memory: '—',
  },
  {
    type: '范德华力',
    feature: '普遍存在但较弱的分子间作用力',
    energy: '最弱（<4 kJ/mol）',
    example: '所有药物与受体均有贡献',
    memory: '—',
  },
];

export const metabolismPhaseColumns = [
  { key: 'item', header: '比较项目' },
  { key: 'phase1', header: 'I相代谢（Phase I）' },
  { key: 'phase2', header: 'II相代谢（Phase II）' },
];

export const metabolismPhaseRows = [
  {
    item: '反应类型',
    phase1: '氧化、还原、水解',
    phase2: '结合反应（与内源性物质结合）',
  },
  {
    item: '结果',
    phase1: '引入或暴露极性基团（-OH、-NH₂、-SH、-COOH）',
    phase2: '与葡萄糖醛酸、硫酸、氨基酸等结合',
  },
  {
    item: '主要酶系',
    phase1: 'CYP450酶系（氧化）、酯酶（水解）、还原酶',
    phase2: 'UDP-葡萄糖醛酸转移酶（UGT）、磺基转移酶（SULT）、N-乙酰转移酶（NAT）',
  },
  {
    item: '代表性反应',
    phase1: '芳环羟基化、O-脱烷基、N-脱烷基、酯键/酰胺键水解',
    phase2: '葡萄糖醛酸结合、硫酸结合、谷胱甘肽结合、乙酰化、甲基化',
  },
  {
    item: '活性变化',
    phase1: '可能产生活性代谢物（前药活化）或失活或产生毒性代谢物',
    phase2: '通常使药物失活、水溶性增加、易于排泄',
  },
];

export const cyp450Columns = [
  { key: 'subtype', header: '亚型' },
  { key: 'pct', header: '占比' },
  { key: 'substrates', header: '主要底物' },
  { key: 'inhibitors', header: '强抑制剂' },
  { key: 'inducers', header: '强诱导剂' },
  { key: 'clinical', header: '临床意义' },
];

export const cyp450Rows = [
  {
    subtype: 'CYP1A2',
    pct: '~13%',
    substrates: '咖啡因、茶碱、华法林、氯氮平',
    inhibitors: '环丙沙星、氟伏沙明、西咪替丁',
    inducers: '吸烟、利福平、苯巴比妥、炭烤食物',
    clinical: '吸烟者茶碱代谢快需加量；环丙沙星抑制茶碱代谢可致中毒',
  },
  {
    subtype: 'CYP2C9',
    pct: '~15%',
    substrates: '华法林、塞来昔布、苯妥英钠、格列吡嗪',
    inhibitors: '氟康唑、磺胺苯吡唑、胺碘酮',
    inducers: '利福平、卡马西平、苯巴比妥、圣约翰草',
    clinical: '氟康唑+华法林→出血风险增加；监测INR',
  },
  {
    subtype: 'CYP2C19',
    pct: '~15%',
    substrates: '奥美拉唑、氯吡格雷、地西泮、伏立康唑',
    inhibitors: '奥美拉唑、氟伏沙明、氟西汀、西咪替丁',
    inducers: '利福平、卡马西平、苯妥英钠、吸烟',
    clinical: '奥美拉唑抑制氯吡格雷活化→心血管事件风险↑',
  },
  {
    subtype: 'CYP2D6',
    pct: '~5%',
    substrates: '美托洛尔、可待因、他莫昔芬、文拉法辛',
    inhibitors: '氟西汀、帕罗西汀、奎尼丁、西咪替丁',
    inducers: '利福平（诱导作用较弱）',
    clinical: '可待因经2D6转化为吗啡→慢代谢者镇痛效果差',
  },
  {
    subtype: 'CYP3A4（★最重要）',
    pct: '~30%',
    substrates: '硝苯地平、辛伐他汀、环孢素、咪达唑仑、红霉素',
    inhibitors: '酮康唑、伊曲康唑、克拉霉素、西咪替丁、葡萄柚汁',
    inducers: '利福平、卡马西平、苯妥英钠、圣约翰草',
    clinical: '参与~50%药物代谢；葡萄柚汁+他汀→横纹肌溶解风险',
  },
];

export const prodrugColumns = [
  { key: 'prodrug', header: '前药' },
  { key: 'active', header: '活性药物' },
  { key: 'modification', header: '修饰方式' },
  { key: 'purpose', header: '修饰目的' },
  { key: 'memory', header: '记忆要点' },
];

export const prodrugRows = [
  {
    prodrug: '洛伐他汀、辛伐他汀',
    active: '开环3,5-二羟基羧酸',
    modification: '内酯环（闭环）',
    purpose: '增加脂溶性，改善口服吸收',
    memory: '口诀"星落"——辛伐+洛伐是前药',
  },
  {
    prodrug: '贝诺酯',
    active: '阿司匹林+对乙酰氨基酚',
    modification: '酯键拼合',
    purpose: '降低胃肠道刺激',
    memory: '拼合原理，在体内水解为两个活性药物',
  },
  {
    prodrug: '环磷酰胺',
    active: '磷酰胺氮芥',
    modification: '磷酰胺基保护',
    purpose: '降低毒性，靶向活化',
    memory: '代谢产生活性氮芥+丙烯醛（毒性→出血性膀胱炎）',
  },
  {
    prodrug: '福辛普利、依那普利、贝那普利',
    active: '活性二酸形式',
    modification: '酯化',
    purpose: '增加口服吸收',
    memory: '多数ACEI是前药（除卡托普利和赖诺普利外）',
  },
  {
    prodrug: '舒林酸、萘丁美酮、洛索洛芬',
    active: '活性代谢物',
    modification: '结构修饰',
    purpose: '降低胃肠道刺激',
    memory: '口诀"啰嗦的叔叔奶奶是前辈"',
  },
  {
    prodrug: '匹氨西林',
    active: '氨苄西林',
    modification: '酯化',
    purpose: '增加口服吸收',
    memory: '氨苄西林的前药',
  },
  {
    prodrug: '磷苯妥英',
    active: '苯妥英',
    modification: '磷酸酯化',
    purpose: '增加水溶性，便于注射',
    memory: '苯妥英水溶性差，制成磷苯妥英可静脉给药',
  },
];

// ----- Section 3: 典型药物结构特征 -----

export const benzodiazepineColumns = [
  { key: 'position', header: '结构位置' },
  { key: 'modification', header: '修饰' },
  { key: 'effect', header: '对活性的影响' },
  { key: 'example', header: '代表药物' },
];

export const benzodiazepineRows = [
  {
    position: 'A环7位',
    modification: '引入吸电子基(NO₂>Br>CF₃>Cl)',
    effect: '活性显著增强',
    example: '硝西泮、氯硝西泮、氟西泮',
  },
  {
    position: 'B环1位',
    modification: 'N-去甲基',
    effect: '产生活性代谢物',
    example: '地西泮→去甲西泮',
  },
  {
    position: 'B环3位',
    modification: '引入羟基(-OH)',
    effect: '增加极性，易于排泄，保持活性',
    example: '奥沙西泮、替马西泮',
  },
  {
    position: 'B环1,2位',
    modification: '并合三氮唑环',
    effect: '代谢稳定性↑，脂溶性↑，活性显著增加',
    example: '阿普唑仑、艾司唑仑、三唑仑',
  },
  {
    position: 'C环2\'位',
    modification: '引入吸电子基(F、Cl)',
    effect: '活性增强',
    example: '氟西泮、氟地西泮',
  },
];

export const cardiovascularColumns = [
  { key: 'category', header: '药物类别' },
  { key: 'nucleus', header: '母核/特征结构' },
  { key: 'examples', header: '代表药物' },
  { key: 'memory', header: '结构记忆口诀' },
  { key: 'mechanism', header: '作用机制' },
];

export const cardiovascularRows = [
  {
    category: 'ACEI（普利类）',
    nucleus: '含巯基(-SH)/二羧基(-COOH)₂/磷酰基(-PO₂)',
    examples: '卡托普利（-SH）、赖诺普利（非前药）、福辛普利（-PO₂）',
    memory: '"普利含巯磷酰基，ACE抑制降血压"',
    mechanism: '抑制血管紧张素转换酶，减少AngII生成',
  },
  {
    category: 'ARB（沙坦类）',
    nucleus: '联苯结构+四氮唑环',
    examples: '氯沙坦、缬沙坦、厄贝沙坦、替米沙坦',
    memory: '"沙坦含联苯，受体阻断降血压"',
    mechanism: '阻断AT₁受体，不引起干咳',
  },
  {
    category: '他汀类',
    nucleus: '十氢化萘环+3,5-二羟基羧酸',
    examples: '洛伐他汀、辛伐他汀（前药）、阿托伐他汀、瑞舒伐他汀',
    memory: '"他汀十氢环，3,5-二羟调血脂"',
    mechanism: '抑制HMG-CoA还原酶',
  },
  {
    category: 'CCB（地平类）',
    nucleus: '1,4-二氢吡啶母核',
    examples: '硝苯地平、氨氯地平、非洛地平、尼群地平',
    memory: '"地平含二氢吡啶，钙通道阻滞降血压"',
    mechanism: '阻断L型钙通道',
  },
];

export const antibioticColumns = [
  { key: 'feature', header: '特征' },
  { key: 'penicillin', header: '青霉素类' },
  { key: 'cephalosporin', header: '头孢菌素类' },
];

export const antibioticRows = [
  {
    feature: '母核',
    penicillin: 'β-内酰胺环+氢化噻唑环（五元）',
    cephalosporin: 'β-内酰胺环+氢化噻嗪环（六元）',
  },
  {
    feature: '手性碳',
    penicillin: '3个（2S,5R,6R有活性）',
    cephalosporin: '2个（6R,7R有活性）',
  },
  {
    feature: '稳定性',
    penicillin: '不稳定（不耐酸、不耐酶、易水解）',
    cephalosporin: '较稳定（耐酸性优于青霉素）',
  },
  {
    feature: '侧链',
    penicillin: '6位侧链决定抗菌谱和耐酶性',
    cephalosporin: '7位侧链决定抗菌谱，3位侧链决定药代特性',
  },
  {
    feature: '代表药物',
    penicillin: '青霉素G、氨苄西林、阿莫西林',
    cephalosporin: '头孢唑林、头孢克洛、头孢呋辛、头孢曲松',
  },
];

export const structureRecognitionColumns = [
  { key: 'mnemonic', header: '口诀' },
  { key: 'meaning', header: '含义' },
  { key: 'category', header: '药物类别' },
  { key: 'examples', header: '代表药物' },
];

export const structureRecognitionRows = [
  {
    mnemonic: '"西泮苯二氮卓核"',
    meaning: '西泮类含1,4-苯二氮卓母核',
    category: '镇静催眠药',
    examples: '地西泮、硝西泮、奥沙西泮',
  },
  {
    mnemonic: '"唑仑三氮唑加固"',
    meaning: '唑仑类在苯二氮卓基础上并合三氮唑环',
    category: '镇静催眠药（增强型）',
    examples: '三唑仑、艾司唑仑、阿普唑仑',
  },
  {
    mnemonic: '"地平二氢吡啶核"',
    meaning: '地平类含1,4-二氢吡啶母核',
    category: '钙通道阻滞剂',
    examples: '硝苯地平、氨氯地平、非洛地平',
  },
  {
    mnemonic: '"普利巯磷二羧基"',
    meaning: '普利类含巯基/磷酰基/二羧基',
    category: 'ACE抑制剂',
    examples: '卡托普利、福辛普利、依那普利',
  },
  {
    mnemonic: '"沙坦联苯四氮唑"',
    meaning: '沙坦类含联苯+四氮唑',
    category: 'ARB',
    examples: '氯沙坦、缬沙坦、厄贝沙坦',
  },
  {
    mnemonic: '"他汀十氢二羟酸"',
    meaning: '他汀类含十氢化萘+3,5-二羟基羧酸',
    category: 'HMG-CoA还原酶抑制剂',
    examples: '洛伐他汀、阿托伐他汀、瑞舒伐他汀',
  },
  {
    mnemonic: '"青五头六内酰胺"',
    meaning: '青霉素五元稠环、头孢六元稠环',
    category: '抗生素',
    examples: '青霉素G、头孢唑林',
  },
  {
    mnemonic: '"喹诺酮羧酮必需"',
    meaning: '喹诺酮3位羧基+4位酮羰基为必需结构',
    category: '合成抗菌药',
    examples: '环丙沙星、左氧氟沙星、莫西沙星',
  },
  {
    mnemonic: '"洛尔芳氧丙醇胺"',
    meaning: '洛尔类含芳氧丙醇胺结构',
    category: 'β受体阻滞剂',
    examples: '普萘洛尔、美托洛尔、比索洛尔',
  },
  {
    mnemonic: '"拉唑苯并咪唑环"',
    meaning: '拉唑类含苯并咪唑母核',
    category: '质子泵抑制剂',
    examples: '奥美拉唑、兰索拉唑、泮托拉唑',
  },
];

// ----- Section 4: 药剂学—固体制剂 -----

export const solidDosageColumns = [
  { key: 'form', header: '剂型' },
  { key: 'features', header: '主要特点' },
  { key: 'state', header: '粒径/状态' },
  { key: 'onset', header: '起效速度' },
  { key: 'scenario', header: '适用场景' },
];

export const solidDosageRows = [
  {
    form: '散剂',
    features: '粉末状，比表面积大，易分散，易分剂量',
    state: '能通过6号筛≥95%',
    onset: '最快',
    scenario: '小儿给药、外用收敛保护、紧急给药',
  },
  {
    form: '颗粒剂',
    features: '颗粒状，冲服方便，口感较好',
    state: '干燥颗粒',
    onset: '较快',
    scenario: '吞咽困难者、儿童、需快速起效',
  },
  {
    form: '胶囊剂',
    features: '掩盖不良气味，保护药物免受胃酸破坏',
    state: '粉末/颗粒装入囊壳',
    onset: '中等',
    scenario: '有不良气味、对胃有刺激、需肠溶的药物',
  },
  {
    form: '片剂',
    features: '剂量准确，携带方便，生产自动化，成本低',
    state: '压制成型',
    onset: '较慢',
    scenario: '最常用口服剂型，适合长期用药',
  },
  {
    form: '丸剂',
    features: '作用缓慢而持久，传统剂型',
    state: '球形或类球形',
    onset: '最慢',
    scenario: '缓释、中药丸剂',
  },
];

export const excipientColumns = [
  { key: 'category', header: '类别' },
  { key: 'abbr', header: '缩写' },
  { key: 'name', header: '代表品种' },
  { key: 'function', header: '功能与特点' },
];

export const excipientRows = [
  {
    category: '填充剂（稀释剂）',
    abbr: 'MCC',
    name: '微晶纤维素',
    function: '"干粘合剂"，粉末直接压片首选，可压性好，崩解性也好 ★最常考缩写',
  },
  {
    category: '填充剂',
    abbr: '—',
    name: '淀粉',
    function: '最常用填充剂，可兼作崩解剂（用量5%~20%），价格低',
  },
  {
    category: '填充剂',
    abbr: '—',
    name: '预胶化淀粉（可压性淀粉）',
    function: '流动性好，有崩解作用，可用于粉末直压',
  },
  {
    category: '填充剂',
    abbr: '—',
    name: '乳糖',
    function: '优良填充剂，流动性好，适合粉末直压，不吸湿',
  },
  {
    category: '填充剂',
    abbr: '—',
    name: '甘露醇',
    function: '适合咀嚼片（清凉甜味，口感好），不吸湿',
  },
  {
    category: '黏合剂',
    abbr: 'HPMC',
    name: '羟丙甲纤维素',
    function: '最常用薄膜衣材料，也可作黏合剂，水溶性 ★最常考缩写',
  },
  {
    category: '黏合剂',
    abbr: 'CMC-Na',
    name: '羧甲基纤维素钠',
    function: '1%~2%水溶液，可压性差的药物常用，也是助悬剂 ★与MCC区分',
  },
  {
    category: '黏合剂',
    abbr: 'PVP',
    name: '聚乙烯吡咯烷酮（聚维酮）',
    function: '水溶液或醇溶液，黏合力和溶解性均好',
  },
  {
    category: '黏合剂',
    abbr: '—',
    name: '淀粉浆',
    function: '片剂中最经典、最常用的黏合剂，10%浓度最常用 ★经典考点',
  },
  {
    category: '崩解剂',
    abbr: 'CMS-Na',
    name: '羧甲基淀粉钠',
    function: '超级崩解剂，吸水膨胀约300倍，崩解效果极佳 ★最常考缩写',
  },
  {
    category: '崩解剂',
    abbr: 'L-HPC',
    name: '低取代羟丙基纤维素',
    function: '超级崩解剂，吸水膨胀+毛细管作用 ★最常考缩写',
  },
  {
    category: '崩解剂',
    abbr: 'CCMC-Na',
    name: '交联羧甲纤维素钠',
    function: '超级崩解剂，吸水膨胀，崩解力强 ★最常考缩写',
  },
  {
    category: '崩解剂',
    abbr: 'PVPP',
    name: '交联聚维酮',
    function: '超级崩解剂，在水中迅速溶胀 ★最常考缩写',
  },
  {
    category: '崩解剂',
    abbr: '—',
    name: '干淀粉',
    function: '经典崩解剂，用量5%~20%，需加水或醇活化 ★传统崩解剂代表',
  },
  {
    category: '崩解剂',
    abbr: '—',
    name: '泡腾崩解剂',
    function: '碳酸氢钠+枸橼酸/酒石酸，遇水产气崩解，泡腾片专用',
  },
  {
    category: '润滑剂',
    abbr: 'MS',
    name: '硬脂酸镁',
    function: '最常用润滑剂，用量0.1%~1%，疏水性强过量影响崩解 ★最常考缩写',
  },
  {
    category: '润滑剂',
    abbr: '—',
    name: '微粉硅胶',
    function: '助流剂，改善粉末流动性，用量0.1%~0.5%',
  },
  {
    category: '润滑剂',
    abbr: '—',
    name: 'PEG 4000/6000',
    function: '水溶性润滑剂，不影响崩解，水溶片首选',
  },
];

export const disintegrationColumns = [
  { key: 'type', header: '片剂类型' },
  { key: 'time', header: '崩解时限' },
  { key: 'mnemonic', header: '口诀对应' },
  { key: 'notes', header: '特殊要求' },
];

export const disintegrationRows = [
  {
    type: '可溶片',
    time: '3分钟',
    mnemonic: '第一个"三"',
    notes: '投入水中应迅速溶解',
  },
  {
    type: '分散片',
    time: '3分钟',
    mnemonic: '第二个"三"',
    notes: '投入温水中3分钟内崩解并通过2号筛',
  },
  {
    type: '舌下片',
    time: '5分钟',
    mnemonic: '"舌"',
    notes: '在舌下迅速崩解，经舌下黏膜吸收',
  },
  {
    type: '泡腾片',
    time: '5分钟',
    mnemonic: '"泡"',
    notes: '投入水中产生大量气泡（CO₂），迅速崩解溶解',
  },
  {
    type: '普通片',
    time: '15分钟',
    mnemonic: '"普一刻"',
    notes: '标准片剂，无特殊包衣',
  },
  {
    type: '含片',
    time: '30分钟',
    mnemonic: '"刻"',
    notes: '在口腔中缓慢溶解，发挥局部作用',
  },
  {
    type: '薄膜衣片',
    time: '30分钟',
    mnemonic: '"三十"+"薄"',
    notes: '薄膜包衣应在30分钟内崩解',
  },
  {
    type: '糖衣片',
    time: '60分钟',
    mnemonic: '"六十"+"趟"',
    notes: '糖衣层较厚，崩解时限较长',
  },
  {
    type: '肠溶片',
    time: '盐酸中2h不崩解+磷酸盐缓冲液中1h崩解',
    mnemonic: '"常"',
    notes: '先耐酸后释碱，保护药物或胃黏膜',
  },
];

// ----- Section 5: 液体制剂与半固体制剂 -----

export const surfactantColumns = [
  { key: 'category', header: '分类' },
  { key: 'examples', header: '代表品种' },
  { key: 'hlb', header: 'HLB值范围' },
  { key: 'application', header: '主要应用' },
  { key: 'toxicity', header: '毒性' },
];

export const surfactantRows = [
  {
    category: '阴离子型',
    examples: '十二烷基硫酸钠（SDS）、肥皂类',
    hlb: '—',
    application: '乳化剂、去污剂、外用制剂清洁剂',
    toxicity: '中等',
  },
  {
    category: '阳离子型',
    examples: '苯扎氯铵（洁尔灭）、苯扎溴铵（新洁尔灭）',
    hlb: '—',
    application: '杀菌、防腐、消毒',
    toxicity: '最高',
  },
  {
    category: '两性离子型',
    examples: '卵磷脂、氨基酸型、甜菜碱型',
    hlb: '—',
    application: '注射用乳剂乳化剂、制备脂质体',
    toxicity: '较低',
  },
  {
    category: '非离子型-Span',
    examples: '脂肪酸山梨坦（司盘）',
    hlb: '1.8~8.6',
    application: 'W/O型乳化剂',
    toxicity: '最低',
  },
  {
    category: '非离子型-Tween',
    examples: '聚山梨酯（吐温）',
    hlb: '10.5~16.7',
    application: 'O/W型乳化剂、增溶剂、润湿剂',
    toxicity: '最低',
  },
  {
    category: '非离子型-泊洛沙姆',
    examples: '普朗尼克F68（Poloxamer 188）',
    hlb: '—',
    application: '静脉乳剂乳化剂',
    toxicity: '最低',
  },
];

export const emulsionInstabilityColumns = [
  { key: 'phenomenon', header: '不稳定现象' },
  { key: 'definition', header: '定义' },
  { key: 'cause', header: '原因' },
  { key: 'reversible', header: '可逆性' },
];

export const emulsionInstabilityRows = [
  {
    phenomenon: '分层（乳析）',
    definition: '乳滴上浮或下沉，形成浓度梯度',
    cause: '分散相与分散介质密度差，重力作用',
    reversible: '可逆（振摇可恢复）',
  },
  {
    phenomenon: '絮凝',
    definition: '乳滴聚集成团但保持各自完整',
    cause: 'ζ电位降低，乳滴间静电排斥力减弱',
    reversible: '可逆（振摇可恢复）',
  },
  {
    phenomenon: '转相',
    definition: 'O/W型变为W/O型或相反',
    cause: '乳化剂性质改变、相体积比改变',
    reversible: '不可逆',
  },
  {
    phenomenon: '合并',
    definition: '乳滴变大，乳化膜部分破裂融合',
    cause: '乳化膜强度不够、机械力破坏',
    reversible: '不可逆',
  },
  {
    phenomenon: '破裂',
    definition: '油水两相完全分离，不能恢复',
    cause: '微生物污染、温度过高、保存过久',
    reversible: '不可逆',
  },
  {
    phenomenon: '酸败',
    definition: '油相或乳化剂氧化变质',
    cause: '微生物污染、光、热、空气氧化',
    reversible: '不可逆',
  },
];

// ----- Section 6: 无菌制剂 -----

export const pharmaceuticalWaterColumns = [
  { key: 'type', header: '用水类型' },
  { key: 'method', header: '制备方法' },
  { key: 'usage', header: '主要用途' },
  { key: 'limit', header: '关键限制' },
];

export const pharmaceuticalWaterRows = [
  {
    type: '饮用水',
    method: '天然水经净化处理（自来水标准）',
    usage: '药材净制漂洗、制药用具粗洗、饮片提取溶剂',
    limit: '不得用于制剂配制',
  },
  {
    type: '纯化水',
    method: '饮用水经蒸馏、离子交换、反渗透等方法制备',
    usage: '普通制剂溶剂和稀释剂；非灭菌制剂器具精洗',
    limit: '绝对不得用于注射剂配制',
  },
  {
    type: '注射用水',
    method: '纯化水经蒸馏所得（蒸馏水）',
    usage: '注射剂、滴眼剂溶剂或稀释剂；注射用容器精洗',
    limit: '制备后12小时内使用',
  },
  {
    type: '灭菌注射用水',
    method: '注射用水经灭菌处理',
    usage: '注射用灭菌粉末的溶剂、注射剂的稀释剂',
    limit: '不得用于注射剂的大量配制',
  },
];

export const pyrogenColumns = [
  { key: 'property', header: '性质' },
  { key: 'performance', header: '具体表现' },
  { key: 'method', header: '对应除去方法' },
];

export const pyrogenRows = [
  {
    property: '耐热性',
    performance: '60℃加热1h不受影响，180℃ 3~4h可彻底破坏',
    method: '高温法（180℃ 2h或250℃ 30min以上）',
  },
  {
    property: '水溶性',
    performance: '能溶于水',
    method: '蒸馏法（利用不挥发性除去）',
  },
  {
    property: '不挥发性',
    performance: '本身不挥发，但可随水蒸气雾滴带入',
    method: '蒸馏时加隔沫装置',
  },
  {
    property: '滤过性',
    performance: '体积1~5nm，可通过一般滤器',
    method: '超滤法（3~15nm超滤膜）',
  },
  {
    property: '被吸附性',
    performance: '可被活性炭、白陶土、石棉滤器吸附',
    method: '吸附法（活性炭0.1%~0.5%）',
  },
  {
    property: '不耐强酸强碱',
    performance: '可被强酸、强碱、强氧化剂破坏',
    method: '酸碱法（重铬酸钾硫酸洗液、稀NaOH）',
  },
];

// ----- Section 7: 新型给药系统 -----

export const controlledReleaseColumns = [
  { key: 'type', header: '类型' },
  { key: 'subType', header: '分类' },
  { key: 'material', header: '材料/原理' },
  { key: 'feature', header: '释药特点' },
  { key: 'example', header: '代表制剂' },
];

export const controlledReleaseRows = [
  {
    type: '骨架型',
    subType: '亲水凝胶骨架',
    material: 'HPMC、PVP、CMC',
    feature: '扩散+溶蚀双重机制，释药速率逐渐减慢',
    example: '骨架片（如二甲双胍缓释片）',
  },
  {
    type: '骨架型',
    subType: '脂溶性（溶蚀性）骨架',
    material: '硬脂酸、蜂蜡、巴西棕榈蜡',
    feature: '溶蚀释药，从外层逐层剥离',
    example: '蜡质骨架片',
  },
  {
    type: '骨架型',
    subType: '不溶性骨架',
    material: '聚乙烯、EC（乙基纤维素）',
    feature: '扩散释药，骨架不被溶解，以原型排出',
    example: '不溶性骨架片',
  },
  {
    type: '膜控型',
    subType: '微孔膜包衣',
    material: 'EC+致孔剂（PEG、PVP）',
    feature: '微孔扩散释药，可通过调节致孔剂比例控制释药速率',
    example: '微孔膜片',
  },
  {
    type: '膜控型',
    subType: '肠溶膜控释',
    material: 'CAP、HPMCP、丙烯酸树脂',
    feature: 'pH依赖释放，在胃中不释药',
    example: '肠溶控释片',
  },
  {
    type: '渗透泵型',
    subType: '—',
    material: '渗透压驱动（半透膜+渗透促进剂+释药小孔）',
    feature: '零级释药，释药速率恒定',
    example: '渗透泵片（如硝苯地平控释片）',
  },
  {
    type: '胃滞留型',
    subType: '—',
    material: '黏附、漂浮（密度<1）、膨胀',
    feature: '延长胃内滞留时间',
    example: '漂浮片、膨胀片',
  },
];

// ----- Section 8: 药效学与药动学 -----

export const pharmacodynamicsColumns = [
  { key: 'concept', header: '概念' },
  { key: 'affinity', header: '亲和力' },
  { key: 'activity', header: '内在活性(α)' },
  { key: 'feature', header: '特点' },
  { key: 'example', header: '代表实例' },
];

export const pharmacodynamicsRows = [
  {
    concept: '完全激动药',
    affinity: '较强',
    activity: 'α=1（100%）',
    feature: '产生最大效应，与受体完全激活',
    example: '吗啡（μ受体）、异丙肾上腺素（β受体）',
  },
  {
    concept: '部分激动药',
    affinity: '较强',
    activity: '0<α<1',
    feature: '与激动药并用时可拮抗激动药部分效应',
    example: '喷他佐辛、丁丙诺啡',
  },
  {
    concept: '反向激动药',
    affinity: '较强',
    activity: 'α<0',
    feature: '对失活态受体亲和力>活化态，引起相反效应',
    example: '某些苯二氮卓类反向激动剂',
  },
  {
    concept: '竞争性拮抗药',
    affinity: '较强',
    activity: 'α=0',
    feature: '与激动剂竞争同一结合位点，Emax不变，曲线平行右移',
    example: '阿托品（M受体）、普萘洛尔（β受体）',
  },
  {
    concept: '非竞争性拮抗药',
    affinity: '较强',
    activity: 'α=0',
    feature: '与位点以外基团结合，Emax下降',
    example: '酚苄明（α受体烷化）',
  },
];

export const pkParametersColumns = [
  { key: 'param', header: '参数' },
  { key: 'symbol', header: '符号' },
  { key: 'definition', header: '定义' },
  { key: 'formula', header: '计算公式' },
  { key: 'clinical', header: '临床意义' },
];

export const pkParametersRows = [
  {
    param: '消除半衰期',
    symbol: 't₁/₂',
    definition: '血药浓度下降一半所需时间',
    formula: 't₁/₂ = 0.693/k = 0.693×Vd/CL',
    clinical: '决定给药间隔、达稳态时间（4~5个t₁/₂）',
  },
  {
    param: '药时曲线下面积',
    symbol: 'AUC',
    definition: '血药浓度-时间曲线下的面积',
    formula: '梯形法计算或积分法',
    clinical: '反映药物吸收总量，评价生物利用度',
  },
  {
    param: '峰浓度',
    symbol: 'Cmax',
    definition: '给药后达到的最高血药浓度',
    formula: '实测值或公式计算',
    clinical: '与疗效和毒性都有关，需在治疗窗内',
  },
  {
    param: '达峰时间',
    symbol: 'Tmax',
    definition: '达到Cmax所需时间',
    formula: '实测值',
    clinical: '反映吸收速率，Tmax短→起效快',
  },
  {
    param: '生物利用度',
    symbol: 'F',
    definition: '药物吸收进入体循环的相对量和速度',
    formula: 'F=(AUCpo×Div)/(AUCiv×Dpo)×100%',
    clinical: '评价制剂质量的指标；F<100%表示首过效应或吸收不完全',
  },
  {
    param: '表观分布容积',
    symbol: 'Vd',
    definition: '药物在体内分布程度的指标',
    formula: 'Vd = X₀/C₀',
    clinical: '推测分布范围；Vd<5L主要分布于血液；Vd>40L广泛分布于组织',
  },
  {
    param: '清除率',
    symbol: 'CL',
    definition: '单位时间清除含药血浆的体积',
    formula: 'CL = k×Vd = 0.693×Vd/t₁/₂ = D/AUC',
    clinical: '反映机体清除药物的能力，肝肾功能影响CL',
  },
];

export const steadyStateColumns = [
  { key: 'n', header: '经过半衰期数(n)' },
  { key: 'fraction', header: '达坪分数 fss' },
  { key: 'pct', header: '累积百分比' },
];

export const steadyStateRows = [
  { n: '1', fraction: '0.50', pct: '50%' },
  { n: '2', fraction: '0.75', pct: '75%' },
  { n: '3', fraction: '0.875', pct: '87.5%' },
  { n: '4', fraction: '0.9375', pct: '93.75%' },
  { n: '5', fraction: '~0.97', pct: '~97%' },
];

// ----- Section 9: 生命药学专题 -----

export const tCellColumns = [
  { key: 'subtype', header: 'T细胞亚型' },
  { key: 'function', header: '主要功能' },
  { key: 'cytokines', header: '分泌关键细胞因子' },
  { key: 'immunity', header: '介导免疫类型' },
  { key: 'clinical', header: '临床关联' },
];

export const tCellRows = [
  {
    subtype: 'Th1',
    function: '细胞免疫，激活巨噬细胞，促进CTL分化',
    cytokines: 'IFN-γ、IL-2、TNF-β',
    immunity: '细胞免疫',
    clinical: '抗胞内病原体（病毒、结核杆菌），与器官特异性自身免疫病相关',
  },
  {
    subtype: 'Th2',
    function: '体液免疫，促进B细胞增殖分化为浆细胞',
    cytokines: 'IL-4、IL-5、IL-10、IL-13',
    immunity: '体液免疫',
    clinical: '抗寄生虫感染，参与过敏反应和哮喘（IgE产生）',
  },
  {
    subtype: 'Th17',
    function: '促进炎症反应，招募中性粒细胞到感染部位',
    cytokines: 'IL-17、IL-22、IL-23',
    immunity: '促炎免疫',
    clinical: '与银屑病、类风湿关节炎、强直性脊柱炎等自身免疫病密切相关',
  },
  {
    subtype: 'Treg',
    function: '抑制免疫应答，维持免疫耐受，防止自身免疫',
    cytokines: 'TGF-β、IL-10',
    immunity: '免疫抑制',
    clinical: '防止自身免疫病；肿瘤中Treg过多→免疫逃逸',
  },
  {
    subtype: 'CTL',
    function: '直接杀伤被病毒感染细胞和肿瘤细胞',
    cytokines: '穿孔素、颗粒酶、IFN-γ',
    immunity: '细胞免疫',
    clinical: '抗病毒免疫、抗肿瘤免疫的核心效应细胞',
  },
];

export const hypersensitivityColumns = [
  { key: 'type', header: '类型' },
  { key: 'name', header: '名称' },
  { key: 'mediator', header: '介导因素' },
  { key: 'time', header: '发生时间' },
  { key: 'disease', header: '代表疾病' },
];

export const hypersensitivityRows = [
  {
    type: 'I型',
    name: '速发型',
    mediator: 'IgE抗体，肥大细胞释放组胺',
    time: '数分钟',
    disease: '过敏性休克、哮喘、荨麻疹',
  },
  {
    type: 'II型',
    name: '细胞毒型',
    mediator: 'IgG/IgM抗体，补体激活，细胞溶解',
    time: '数小时~数天',
    disease: '药物性溶血性贫血、血小板减少性紫癜',
  },
  {
    type: 'III型',
    name: '免疫复合物型',
    mediator: 'IgG/IgM形成的免疫复合物沉积',
    time: '数小时~数天',
    disease: '血清病、系统性红斑狼疮',
  },
  {
    type: 'IV型',
    name: '迟发型',
    mediator: 'T细胞介导，释放细胞因子',
    time: '24~72小时',
    disease: '接触性皮炎、结核菌素试验',
  },
];

// ----- Memory Cards -----

export const memoryCardsData = [
  {
    mnemonic: '"灰黄土地诱惑大，两本就能卡一利，水喽！"',
    explanation: 'CYP450诱导剂：灰黄霉素、苯巴比妥、苯妥英钠、卡马西平、利福平、水合氯醛',
  },
  {
    mnemonic: '"铜绿分别多可西，情绪难免受抑制"',
    explanation: 'CYP450抑制剂：酮康唑、氯霉素、西咪替丁、异烟肼',
  },
  {
    mnemonic: '"赖卡不是前药"',
    explanation: 'ACEI中卡托普利和赖诺普利不是前药，其余多为前药（依那普利、贝那普利、福辛普利等）',
  },
  {
    mnemonic: '"七位吸电活性增，一位去甲代谢行，三位羟基奥沙生，并上三氮唑仑成。"',
    explanation: '苯二氮卓类构效关系和代谢路径',
  },
  {
    mnemonic: '"普利巯磷ACE抑，沙坦联苯阻受体，他汀十氢调血脂，地平二氢钙阻滞。"',
    explanation: '四类心血管药物的识别特征和作用机制',
  },
  {
    mnemonic: '"散粒胶丸片"',
    explanation: '固体制剂吸收顺序：散剂>颗粒剂>胶囊剂>片剂>丸剂',
  },
  {
    mnemonic: '"舌泡五分普一刻，三三十分刻薄，六十定位常趟河。"',
    explanation: '舌下片/泡腾片5min，普通片15min，可溶片/分散片3min，薄膜衣片/含片30min，糖衣片60min',
  },
  {
    mnemonic: '"阳阴两非毒性降"',
    explanation: '表面活性剂毒性顺序：阳离子型>阴离子型>两性离子型>非离子型',
  },
  {
    mnemonic: '"竞争性占座（抢椅子），非竞争性砸椅子"',
    explanation: '竞争性拮抗剂占据受体位置（可加激动剂克服），非竞争性拮抗剂改变受体本身',
  },
  {
    mnemonic: '"热原热原脂多糖，耐热吸附可滤亡。不耐酸碱强氧化，不挥水溶性质强。"',
    explanation: '热原性质速记：脂多糖成分，耐热、可被吸附、可滤过；不耐强酸碱强氧化，不挥发、水溶性',
  },
  {
    mnemonic: '"一个半衰50%，两个75%，五个达稳态"',
    explanation: '达稳态时间与半衰期关系：1个t₁/₂达50%，2个达75%，5个达约97%稳态',
  },
  {
    mnemonic: '"三八W油，八八O水"',
    explanation: 'HLB值应用：3~8做W/O型乳化剂，8~16做O/W型乳化剂',
  },
];

// ----- Warning Points (易错点) -----

export const warningPointsData = [
  {
    text: '纯化水绝对不可用于注射剂配制——注射剂必须用注射用水（蒸馏水）配制。记住"纯化水不配针"。',
  },
  {
    text: '效能高≠效价强——效能是最大效应（Emax），效价是产生效应所需剂量（EC50），两者无关。吗啡效能高（能镇痛重度），阿司匹林效能低。',
  },
  {
    text: '竞争性拮抗剂Emax不变，曲线平行右移；只有非竞争性拮抗剂才使Emax下降。"竞争性占座不砸椅"。',
  },
  {
    text: '静脉注射（输液）和椎管注射绝对禁用抑菌剂。"静脉不加防腐剂"。',
  },
  {
    text: '缓释片、控释片和肠溶片不可掰开或嚼碎服用（除非明确设计允许），否则会导致药物突释（dose dumping）。',
  },
  {
    text: '对乙酰氨基酚无抗炎作用，仅解热镇痛（对外周COX抑制弱）。"扑热息痛不抗炎"。',
  },
  {
    text: 'ACEI中卡托普利和赖诺普利不是前药——"赖卡不是前药"，其余多为前药。',
  },
  {
    text: '乳剂分层和絮凝可逆（振摇恢复），破裂、转相、合并、酸败均不可逆。"分层絮凝可振摇"。',
  },
  {
    text: '生物利用度计算必须进行剂量校正：F=(AUCpo×Div)/(AUCiv×Dpo)，剂量不同时不能简化。',
  },
  {
    text: 'MCC=微晶纤维素（填充剂），CMC-Na=羧甲基纤维素钠（黏合剂）——"M填充，C黏合"。',
  },
  {
    text: '半衰期是常数（一级动力学），不随血药浓度改变；零级动力学时半衰期会随浓度变化。',
  },
  {
    text: 'R/S命名与旋光方向(+/-)无必然对应关系——R/S由CIP规则决定，+/-由实验测定。',
  },
];

// ----- Key Points (重点) -----

export const keyPointsData = [
  {
    text: '手性药物的对映体可能具有完全不同的药理活性——如沙利度胺，R-对映体有镇静作用，S-对映体有致畸作用。',
  },
  {
    text: '阿司匹林鉴别——水解后产生水杨酸，水杨酸的酚羟基与三氯化铁试液反应呈紫堇色。跨科目考查概率极高。',
  },
  {
    text: 'CYP3A4参与约50%临床药物的代谢，葡萄柚汁是其强抑制剂，服用相关药物期间应避免饮用。',
  },
  {
    text: '激动剂既有亲和力又有内在活性，拮抗剂有亲和力但无内在活性（内在活性为零）。这是药效学的核心概念。',
  },
  {
    text: '固体制剂吸收顺序：散剂>颗粒剂>胶囊剂>片剂>丸剂。口诀"散粒胶丸片"。',
  },
  {
    text: '渗透泵型控释制剂是目前最先进的口服控释系统，以渗透压为唯一驱动力，零级释药，不受胃肠道pH和蠕动影响。',
  },
  {
    text: '膜剂是2026年新增剂型，PVA是最常用的成膜材料，膜剂不需崩解，药物直接溶出。',
  },
  {
    text: 'PD-1/PD-L1抑制剂通过阻断PD-1与PD-L1结合，解除T细胞抑制状态，恢复抗肿瘤杀伤功能。',
  },
];

// ----- Drug Dosage Forms Comparison -----

export const dosageFormsColumns = [
  { key: 'form', header: '剂型' },
  { key: 'route', header: '给药途径' },
  { key: 'absorption', header: '吸收特点' },
  { key: 'scope', header: '适用范围' },
];

export const dosageFormsRows = [
  {
    form: '片剂',
    route: '口服',
    absorption: '胃肠道吸收，受首过效应影响',
    scope: '大多数药物，注意崩解时限',
  },
  {
    form: '胶囊剂',
    route: '口服',
    absorption: '同片剂，掩盖不良气味',
    scope: '有异味、刺激性药物',
  },
  {
    form: '注射剂',
    route: '静脉/肌注/皮下',
    absorption: '直接入血，无首过效应',
    scope: '急救、不宜口服药物',
  },
  {
    form: '栓剂',
    route: '直肠/阴道',
    absorption: '直肠给药可部分避免首过效应',
    scope: '儿童、呕吐患者',
  },
  {
    form: '软膏剂',
    route: '皮肤',
    absorption: '局部作用为主，少量透皮吸收',
    scope: '皮肤病、局部炎症',
  },
  {
    form: '气雾剂',
    route: '吸入',
    absorption: '肺部吸收迅速',
    scope: '哮喘、COPD',
  },
];

// ----- Part divider data -----
export interface PartDividerData {
  roman: string;
  title: string;
  english: string;
  description: string;
  accentColor: string;
}

export const partDividers: PartDividerData[] = [
  {
    roman: 'I',
    title: '药剂学',
    english: 'PHARMACEUTICS',
    description: '药物剂型、制剂工艺、稳定性与新型给药系统',
    accentColor: 'var(--accent-olive)',
  },
  {
    roman: 'II',
    title: '药物化学',
    english: 'MEDICINAL CHEMISTRY',
    description: '药物分子结构、理化性质与构效关系',
    accentColor: 'var(--accent-rust)',
  },
  {
    roman: 'III',
    title: '药效学与药动学',
    english: 'PHARMACODYNAMICS & PHARMACOKINETICS',
    description: '药物作用机制、体内过程与核心参数计算',
    accentColor: 'var(--accent-gold)',
  },
  {
    roman: 'IV',
    title: '生命药学专题',
    english: 'BIOPHARMACY & CLINICAL',
    description: '免疫学基础与临床药理学应用（2026新增）',
    accentColor: 'var(--accent-rust)',
  },
];
