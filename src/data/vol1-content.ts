// ===== Vol.1 备考全攻略 — All structured content data =====

// --- Section 1: 2026 Exam Policy Overview ---

export const examPolicyTable = [
  { time: '2026年4月', event: '第九版·2026大纲正式发布' },
  { time: '8月4日-8月25日', event: '网上报名' },
  { time: '10月31日-11月1日', event: '正式考试（机考）' },
  { time: '12月中旬', event: '成绩公布' },
];

export const syllabusChangesTable = [
  { subject: '药事管理与法规', change: '约18%（最大）', detail: '新增《药品管理法实施条例》（828号令）、网络销售监管独立章节、医疗器械注册管理、药师法、惩罚性赔偿司法解释、反垄断指南' },
  { subject: '药学专业知识（一）', change: '约10-12%', detail: '匹配2025版药典，新增膜剂、洗剂等剂型分类' },
  { subject: '药学专业知识（二）', change: '约10-12%', detail: '细节调整，新增药物分析内容' },
  { subject: '药学综合知识与技能', change: '约10-12%', detail: '疼痛药物治疗扩展，"睡眠障碍"改为"失眠症"' },
];

// --- Section 2: Question Type Distribution ---

export const questionTypeTable = [
  { type: 'A型题（最佳选择题）', count: '40题', score: '40分', strategy: '每题控制在45秒内，注意关键词定位' },
  { type: 'B型题（配伍选择题）', count: '40题', score: '40分', strategy: '先读选项再读题干，注意配伍逻辑' },
  { type: 'C型题（综合分析选择题）', count: '10题', score: '10分', strategy: '仔细阅读案例背景，逐项分析' },
  { type: 'X型题（多项选择题）', count: '10题', score: '10分', strategy: '宁缺毋滥，不确定的选项不选' },
];

export const questionTypeBySubjectTable = [
  { type: 'A型题（最佳选择题）', count: '40题', score: '40分', pharma1: '基础知识+计算（有效期、半衰期、杂质限量）', pharma2: '药物分类、适应症、不良反应识记', practice: '药学服务基础、用药指导、疾病常识', law: '法规条文识记、管理制度判断' },
  { type: 'B型题（配伍选择题）', count: '40题', score: '40分', pharma1: '药物结构与药理作用配伍', pharma2: '★ 药物分类与特点匹配（占40分）', practice: '处方审核、药物相互作用配伍', law: '管理制度与法律责任配伍' },
  { type: 'C型题（综合分析选择题）', count: '10题', score: '10分', pharma1: '案例分析（药效学/药动学计算）', pharma2: '临床用药情景分析', practice: '★ 处方审核案例分析（占比较高）', law: '法规案例情境判断' },
  { type: 'X型题（多项选择题）', count: '10题', score: '10分', pharma1: '知识点全面性考查', pharma2: '药物不良反应、禁忌症综合考查', practice: '用药方案多维度评估', law: '备选项4个（其他科5个），难度略低' },
];

// --- Section 3: Three-Phase Timeline ---

export const timelineData = [
  {
    phase: '基础阶段',
    phaseEn: 'Phase I',
    duration: '3-6月（4个月）',
    dailyStudy: '工作日2-3h / 周末4-6h',
    goal: '掌握80%核心考点，构建四科知识框架',
    questions: '每科1500-2000题（章节练习）',
    actions: ['听精讲课', '做思维导图', '章节练习巩固'],
  },
  {
    phase: '强化阶段',
    phaseEn: 'Phase II',
    duration: '7-8月（2个月）',
    dailyStudy: '工作日3h / 周末6-8h',
    goal: '突破难点，纠正错题，高频考点正确率提升至75%以上',
    questions: '近5年真题刷2遍（重复考点占30%）',
    actions: ['专项突破薄弱章节', '真题限时训练', '建立错题本'],
  },
  {
    phase: '冲刺阶段',
    phaseEn: 'Phase III',
    duration: '9-10月（2个月）',
    dailyStudy: '工作日3.5h / 周末7-8h',
    goal: '查漏补缺，适应机考节奏，押题提分',
    questions: '错题本反复刷+密押卷3-5套',
    actions: ['90分钟限时模拟', '机考模拟系统练习', '新增考点专项突破'],
  },
];

// --- Section 4: Time Allocation (2+3+1) ---

export const timeAllocationTable = [
  { phase: '第一阶段', timeRange: '0-30分钟', type: 'A型题（最佳选择题）', count: '40题', limit: '每题≤45秒，总计≤30分钟', principle: '快速决断，不会的题目标记后跳过' },
  { phase: '第二阶段', timeRange: '30-70分钟', type: 'B型题（配伍选择题）', count: '40题', limit: '每题≤60秒，总计≤40分钟', principle: '先读备选项全局，再逐题匹配；可重复选用' },
  { phase: '第三阶段', timeRange: '70-82分钟', type: 'C型题（综合分析题）', count: '10题', limit: '每题约72秒，总计≤12分钟', principle: '先通读案例背景，提取关键信息再作答' },
  { phase: '第四阶段', timeRange: '82-88分钟', type: 'X型题（多选题）', count: '10题', limit: '每题约36秒，总计≤6分钟', principle: '宁缺毋滥，没有把握的选项不选' },
  { phase: '检查阶段', timeRange: '88-90分钟', type: '标记题目复查', count: '—', limit: '最后2分钟', principle: '检查未作答题目，确认后交卷' },
];

// --- Section 5: Answer Strategies ---

export const answerStrategies = [
  {
    category: 'A型题（最佳选择题）',
    categoryNum: 'A',
    methods: ['排除法', '关键词定位法', '逆向思维法'],
    keyPoint: '限定词精准定位——"首选""禁忌""最常见""最特征"直接指向唯一答案',
    warning: '否定式题干容易因惯性思维误选，先判断肯定/否定再分析',
  },
  {
    category: 'B型题（配伍选择题）',
    categoryNum: 'B',
    methods: ['备选项全局浏览法', '分类匹配法', '重复选用策略'],
    keyPoint: '先浏览全部备选项，对可选范围心中有数，再逐题匹配',
    warning: '一荣俱荣、一损俱损——一个药物不认识可能影响多道题',
  },
  {
    category: 'C型题（综合分析选择题）',
    categoryNum: 'C',
    methods: ['三步信息提取法', '先读问题再看案例', '逐题独立判断'],
    keyPoint: '快速提取患者信息（年龄、诊断、合并症、过敏史）和用药信息',
    warning: '案例题干较长，建议先读问题再回头读案例',
  },
  {
    category: 'X型题（多项选择题）',
    categoryNum: 'X',
    methods: ['宁缺毋滥保守策略', '对立选项分析法', '相似选项排除法'],
    keyPoint: '只选100%把握的选项，法规科目备选项减至4个难度降低',
    warning: '不确定的选项宁可不选，错选可能全题不得分',
  },
];

// --- Section 6: Cross-Subject Knowledge Chains ---

export const crossSubjectChains = [
  {
    theme: '麻精药品管理',
    subjects: '法规+药二+药综',
    law: '五专管理；处方保存3年；逐日限量',
    pharma2: '吗啡/哌替啶/芬太尼药理；癌痛三阶梯',
    practice: '处方限量审核；淡红色处方；四查十对',
    pharma1: '—',
    score: '15-20分',
    frequency: '★★★★★',
  },
  {
    theme: '抗高血压药物',
    subjects: '药一+药二+药综',
    law: '—',
    pharma2: 'ACEI干咳/ARB无干咳/CCB踝水肿',
    practice: '合并症用药选择（糖尿病→ACEI）',
    pharma1: 'ACEI含巯基/ARB联苯/CCB二氢吡啶',
    score: '10-15分',
    frequency: '★★★★★',
  },
  {
    theme: 'β-内酰胺类抗菌药',
    subjects: '药一+药二+药综',
    law: '—',
    pharma2: '五代头孢分类；抗菌谱记忆',
    practice: '抗菌药物合理应用；TDM',
    pharma1: 'β-内酰胺环+氢化噻唑/噻嗪环',
    score: '8-12分',
    frequency: '★★★★☆',
  },
  {
    theme: '苯二氮卓类药物',
    subjects: '药一+药二+药综+法规',
    law: '第二类精神药品管理',
    pharma2: '短中长效分类；癫痫持续状态首选地西泮',
    practice: '老年人跌倒风险；驾驶员禁用',
    pharma1: '1,4-苯二氮卓母核；地西泮代谢路径',
    score: '5-8分',
    frequency: '★★★★☆',
  },
  {
    theme: 'CYP450酶系',
    subjects: '药一+药二+药综',
    law: '—',
    pharma2: '西咪替丁抑制肝药酶；药物相互作用',
    practice: '各亚型底物/抑制剂/诱导剂列表',
    pharma1: 'I相代谢氧化反应（CYP450介导）',
    score: '5-8分',
    frequency: '★★★☆☆',
  },
];

// --- Memory Cards (Mnemonics) ---

export const memoryCards = [
  {
    mnemonic: 'A型最佳快准狠，B型配伍看逻辑，C型案例要细读，X型多项宁少选',
    explanation: '四型答题总策略：最佳选择题要快，配伍题重逻辑，综合分析题重细节，多项选择题保守为上。',
  },
  {
    mnemonic: '四环素类，光敏骨牙黄，eight以下不用忙',
    explanation: '四环素类不良反应：光敏反应、骨骼牙齿黄染，8岁以下禁用。',
  },
  {
    mnemonic: 'ACEI护心肾，干咳是副作用，孕妇不能用',
    explanation: 'ACEI类药物：保护心肾，常见干咳副作用，妊娠禁用。',
  },
  {
    mnemonic: '他汀类，晚上吃，肝功监测别忘记',
    explanation: '他汀类调脂药：宜晚间服用，需定期监测肝功能。',
  },
  {
    mnemonic: '抗菌药物分四级，非限、限制、特殊、经验',
    explanation: '抗菌药物分级管理：非限制级、限制级、特殊使用级、经验用药。',
  },
  {
    mnemonic: '处方审核三要素，合法性、规范性、适宜性',
    explanation: '处方审核三大维度：合法性审核、规范性审核、适宜性审核。',
  },
  {
    mnemonic: '五专管理麻精药，专人、专柜、专锁、专册、专处方',
    explanation: '麻醉药品和精神药品的"五专"管理制度。',
  },
  {
    mnemonic: '基础搭框架，强化攻真题，冲刺练节奏，新增必会考',
    explanation: '三阶段备考重点口诀：基础阶段建知识框架，强化阶段攻克真题，冲刺阶段练习考试节奏。',
  },
  {
    mnemonic: '麻精降压是重头，β-内酰胺头孢流，苯二氮卓镇静药，CYP酶系相互作用，五群掌握跨科通',
    explanation: '五大跨科考点群速记：麻精药品、抗高血压、β-内酰胺类、苯二氮卓类、CYP450酶系。',
  },
];

// --- Key Points ---

export const keyPoints = [
  {
    text: '2026年起执业药师考试实行四年滚动制——参加全部4个科目考试的人员须在连续4个考试年度内通过全部科目。',
  },
  {
    text: 'B型配伍选择题在四科中均占40%分值，是名副其实的"半壁江山"，西药二的B型题尤其重要。',
  },
  {
    text: '抗菌药物合理使用和处方审核规范是每年考试的重中之重，两科交叉考点必须融会贯通。',
  },
  {
    text: '法规科目X型题备选项减至4个，是四科中多选题难度最低的，考生应在此争取满分。',
  },
  {
    text: '机考环境下，54秒/题的时间压力要求考生熟练掌握"2+3+1"时间分配法和标记跳过策略。',
  },
];

// --- Warning Points ---

export const warningPoints = [
  {
    text: '部分考生认为"题量减少=难度降低"，这是严重误判。90分钟完成100题，每题54秒的限时对阅读速度、信息提取速度和计算速度都提出了更高要求。',
  },
  {
    text: '机考中标记功能的使用——很多考生不知道可以先标记不确定的题目，最后统一回顾。考试结束前15分钟系统会提示，此时应优先检查标记题目。',
  },
  {
    text: '很多考生按题目顺序从头做到尾，遇到难题反复纠结，导致后面简单的题目没有时间作答。"标记+跳过"是必会的时间管理技巧。',
  },
  {
    text: '执业药师与药师职称考试不同——前者是准入类资格考试，后者是水平评价类考试，报考条件与效力范围完全不同。',
  },
  {
    text: '机考交卷后不可返回修改——与纸笔考试不同，机考中一旦交卷即视为完成该科目，无法返回检查。',
  },
  {
    text: '成绩滚动周期从通过第一科开始计算——不是从报名年份算起，务必注意时间节点。',
  },
];

// --- CBT (Computer-Based Testing) 7 Key Changes ---

export const cbtChanges = [
  {
    num: '01',
    title: '无纸质草稿纸',
    desc: '机考系统内置计算器和记事本功能，所有计算和笔记需在屏幕上完成。西药一涉及半衰期计算、有效期推算、杂质限量换算等，必须提前训练在屏幕上快速操作计算器的能力。',
  },
  {
    num: '02',
    title: '题型分布统一化',
    desc: '四科均采用"A型40题+B型40题+C型10题+X型10题"的统一结构，但法规科目的X型题备选项由5个减至4个，难度相对降低。',
  },
  {
    num: '03',
    title: '答题不可逆',
    desc: '确认交卷后无法返回修改，交卷前系统会提示未作答题目数量，考生需在最后2分钟内完成全局检查。',
  },
  {
    num: '04',
    title: '标记功能必须善用',
    desc: '每道题旁的标记按钮可将题号设为"待复查"状态，左侧题号栏会以三角形标识提醒。建议将标记功能作为答题流程的常规环节。',
  },
  {
    num: '05',
    title: '入场与交卷新规',
    desc: '考试开始5分钟后禁止入场，结束前15分钟允许提前交卷。考生必须提前到达考场，完成身份验证和系统登录。',
  },
  {
    num: '06',
    title: '模拟系统考前4周开放',
    desc: '2026年考试时间为10月31日至11月1日，模拟系统预计在10月上旬上线。建议至少完成3次完整的90分钟模拟，熟悉界面布局、状态标识和交卷流程。',
  },
  {
    num: '07',
    title: '输入法限制',
    desc: '系统仅支持微软拼音、极点五笔、搜狗拼音三种输入法。虽然考试以选择题为主，但熟悉系统输入法仍是必要的考前准备。',
  },
];

// --- Syllabus 5 Major Changes ---

export const syllabusMajorChanges = [
  {
    num: '01',
    title: '西药一——新增"生命药学"章节',
    desc: '西药一由8章增至9章，新增第二章"生命药学"，全书增加25.5万字（相当于原内容的40%）。新增内容涵盖病理生理学、免疫学和微生物学三个模块。',
  },
  {
    num: '02',
    title: '西药二——章节合并整合',
    desc: '西药二由17章精简至13章，但页数增加72页、字数增加14.9万字。抗菌药+抗病毒药+抗寄生虫药合并为"抗感染药物"一章；新增PARP抑制剂、ADC药物、PD-1/PD-L1抑制剂、CAR-T细胞疗法。',
  },
  {
    num: '03',
    title: '西药综合——疾病数量激增',
    desc: '西药综合由17章减至15章，但全书增加20.6万字。最显著变化是常见病药物治疗管理从25种疾病增至43种，案例分析题占比提升至30%。',
  },
  {
    num: '04',
    title: '法规——新增《药师法》相关内容',
    desc: '法规科目新增约10万字、50页内容。核心新增包括：健康中国建设战略、药品追溯码管理制度、药品网络交易监管办法、集中带量采购政策等。',
  },
  {
    num: '05',
    title: '考试形式统一为机考',
    desc: '四科全部采用机考，法规科目视报名人数和机位情况可能实行分批次考试（10月19日上午和下午各一场）。分批次考试意味着不同场次的题目重复率较低。',
  },
];

// --- Last Two Weeks Schedule ---

export const lastTwoWeeksSchedule = [
  { period: '早晨（0.5h）', weekday: '背诵新增考点（追溯码、生命药学核心概念）', weekend: '完整90分钟模拟考试（按真实考试时间）' },
  { period: '上午（1.5h）', weekday: '刷错题本（按科目轮转：药一→药二→药综→法规）', weekend: '模拟考试+错题分析' },
  { period: '下午（1h）', weekday: '专项练习薄弱题型（如药一计算题、药综案例分析）', weekend: '机考模拟系统练习' },
  { period: '晚上（0.5h）', weekday: '快速过一遍高频考点速记卡片', weekend: '本周错题复盘+下周计划调整' },
];

// --- Subject Score Weights ---

export const subjectScoreWeights = [
  { subject: '西药一', highFreq: '药物化学（22-25分）\n药理学（20-22分）', midFreq: '药剂学（18-20分）\n生命药学（15-18分）★', lowFreq: '药物分析（10-12分）\n药品标准（8-10分）', new2026: '生命药学（免疫学/微生物学）\n药典2025版更新内容' },
  { subject: '西药二', highFreq: '抗感染药物（12-14分）\n抗肿瘤药（15-18分）★', midFreq: '内分泌系统（10-12分）\n神经系统（8-10分）', lowFreq: '消化系统（6-8分）\n呼吸系统（5-7分）\n其他系统（10-12分）', new2026: '特发性肺纤维化药物\nADC药物/PD-1抑制剂' },
  { subject: '西药综合', highFreq: '处方审核与用药咨询（15-18分）\n慢病管理-高血压/糖尿病（12-15分）', midFreq: '呼吸系统（8-10分）\n消化系统（8-10分）\n新增疾病群（8-10分）★', lowFreq: '药品管理（5-7分）\n药物警戒（4-6分）', new2026: '43种疾病用药方案\n案例分析题（占30%）' },
  { subject: '法规', highFreq: '第四章药品经营管理（25分）★\n第七章特殊管理药品（15分）', midFreq: '第五章医疗机构药事（13分）\n第八章信息广告价格（13分）\n第二章立法与监管（12分）', lowFreq: '第六章中药管理（9分）\n第十章法律责任（8分）\n第九章医疗器械等（5分）', new2026: '药品追溯码\n网络交易监管\n《药师法》' },
];

// --- CBT System Functions ---

export const cbtSystemFunctions = [
  { function: '计算器', position: '屏幕右下角', purpose: '半衰期计算、剂量换算、有效期推算', tips: '提前熟悉界面布局；建议用鼠标点击而非键盘输入' },
  { function: '记事本', position: '计算器界面下方', purpose: '电子草稿纸，记录关键信息或公式', tips: '可跨题目使用，但交卷后内容不保存' },
  { function: '标记按钮', position: '每题右上角', purpose: '标记有疑问的题目，后续复查', tips: '养成习惯：不确定的题目标记后先跳过' },
  { function: '题号导航', position: '左侧题号栏', purpose: '快速跳转至任意题目', tips: '白色=未答/蓝色=已答/橙色=当前/三角形=标记' },
  { function: '字体缩放', position: '屏幕右下角', purpose: '调整字体大小', tips: '视力不佳的考生可放大至120%' },
  { function: '交卷按钮', position: '屏幕右上角', purpose: '提交试卷', tips: '点击后系统提示未作答题目，确认后不可逆' },
];

// --- Guessing Techniques ---

export const guessingTechniques = [
  { name: '排除绝对词', scenario: '选项含"所有""绝对""一定""必须"等绝对化表述', principle: '药学中存在大量例外情况，绝对化表述通常是错误的', reliability: '★★★' },
  { name: '对立选项法', scenario: '两个选项意思相反（如升高vs降低）', principle: '对立选项中通常一正一误，缩小范围至50%', reliability: '★★★★' },
  { name: '相似选项法', scenario: '两个选项意思相近（如两个ACEI药物）', principle: '相似选项中通常有一个是正确答案', reliability: '★★★' },
  { name: '选长/选短', scenario: '表述最完整或最精简的选项', principle: '正确选项通常表述严谨、不冗余', reliability: '★★☆' },
  { name: '数字区间法', scenario: '涉及剂量、时间的数字题', principle: '极端值（最大/最小）通常是干扰项，选中间值', reliability: '★★☆' },
  { name: '保守原则', scenario: '涉及用药安全、不良反应的题目', principle: '"安全""减量""监测"等保守表述通常是正确的', reliability: '★★★★' },
];

// --- Common Traps ---

export const commonTraps = [
  {
    title: '偷换概念',
    desc: '将药物的药理作用与临床应用混淆。区分方法：药理作用是"药物对机体做了什么"，临床应用是"用来治什么病"。',
  },
  {
    title: '张冠李戴',
    desc: '将A药物的不良反应安到B药物上。应对方法：对每个高频药物建立"专属标签"——最特征性的1-2个不良反应必须精准记忆。',
  },
  {
    title: '扩大适应症',
    desc: '将药物的适应症范围扩大化。应对方法：注意适应症中的限定词（原发/继发、急性/慢性、轻中度/重度）。',
  },
  {
    title: '混淆禁忌症与慎用',
    desc: '"禁忌症"是绝对不能使用，"慎用"是在特定条件下谨慎使用。命题人常将"慎用"包装成"禁忌症"。',
  },
  {
    title: '剂量单位陷阱',
    desc: '同一药物不同给药途径剂量差异巨大。注意题干中的给药途径和剂量单位。',
  },
  {
    title: '时间数字混淆',
    desc: '处方保存期限、不良反应报告时限、注册有效期等数字类知识点是命题人设置混淆选项的高发区。',
  },
];

// --- Linked Review Template ---

export const linkedReviewTemplate = [
  { day: '第1天', subject: '法规', content: '麻精药品五专管理、处方限量制度、保存期限', method: '建立管理制度框架' },
  { day: '第2天', subject: '西药二', content: '吗啡/哌替啶/芬太尼药理作用、癌痛三阶梯、不良反应', method: '将具体药物与法规制度对应' },
  { day: '第3天', subject: '西药综合', content: '处方颜色（淡红色）、处方限量审核、四查十对', method: '将临床应用与法规制度融合' },
  { day: '第4天', subject: '三科综合', content: '做跨科目配伍题和案例分析题', method: '检验三科知识是否已融合' },
  { day: '第5天', subject: '错题复盘', content: '整理三科错题，归纳共性问题', method: '固化知识链' },
];
