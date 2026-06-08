/** Volume 2 — 药事管理与法规精讲 — All content data */

/* ──────────────────────── Section 1: 法律体系 ──────────────────────── */

export const legalHierarchyColumns = [
  { key: 'level', header: '层级' },
  { key: 'source', header: '法的渊源' },
  { key: 'authority', header: '制定机关' },
  { key: 'example', header: '举例' },
];

export const legalHierarchyRows = [
  { level: '1', source: '宪法', authority: '全国人大', example: '国家根本大法，具有最高法律效力' },
  { level: '2', source: '法律', authority: '全国人大及其常委会', example: '《药品管理法》《疫苗管理法》《中医药法》' },
  { level: '3', source: '行政法规', authority: '国务院', example: '《药品管理法实施条例》《麻醉药品和精神药品管理条例》' },
  { level: '4', source: '地方性法规', authority: '地方人大', example: '各省市药品监督管理条例' },
  { level: '5', source: '部门规章', authority: '国务院部委（NMPA）', example: '《药品注册管理办法》《药品经营质量管理规范》' },
  { level: '6', source: '地方政府规章', authority: '地方政府', example: '省级药品监管实施细则' },
  { level: '7', source: '规范性文件', authority: 'NMPA及下属机构', example: '各种通知、公告、技术指导原则' },
];

export const fiveLawsColumns = [
  { key: 'law', header: '法律名称' },
  { key: 'date', header: '施行时间' },
  { key: 'points', header: '核心考点' },
  { key: 'importance', header: '考试重要度' },
];

export const fiveLawsRows = [
  { law: '《药品管理法》', date: '2019年修订', points: '药品全生命周期管理基本法，共12章155条；假药/劣药认定标准', importance: '★★★★★' },
  { law: '《疫苗管理法》', date: '2019年12月1日', points: '疫苗"四个最严"全程监管；全程电子追溯；疑似即报', importance: '★★★★' },
  { law: '《中医药法》', date: '2017年7月1日', points: '中药保护与发展；经典名方简化审批；中药材种植管理', importance: '★★★' },
  { law: '《基本医疗卫生与健康促进法》', date: '2020年6月1日', points: '基本医疗卫生制度；健康中国战略；公立医院药品采购', importance: '★★★' },
  { law: '《医师法》', date: '2022年3月1日', points: '处方权管理；麻精药品处方资格；抗菌药物处方权限分级', importance: '★★★★' },
];

export const nmpaDutyColumns = [
  { key: 'dept', header: '部门' },
  { key: 'duty', header: '药品相关核心职责' },
  { key: 'keyword', header: '关键词记忆' },
];

export const nmpaDutyRows = [
  { dept: 'NMPA（国家药监局）', duty: '安全监督管理、标准管理、注册管理、质量管理、上市后风险管理、执业药师资格准入、监督检查、国际交流、指导省级工作', keyword: '安监标册质险师查流交' },
  { dept: '卫生健康部门', duty: '组织拟订国家药物政策和国家基本药物制度；公立医院药事管理', keyword: '药物政策+基本药物' },
  { dept: '医疗保障部门', duty: '医保目录制定与调整；医保支付标准；药品招标采购政策', keyword: '医保目录+支付+集采' },
  { dept: '中医药管理部门', duty: '中医药事业发展战略规划；中药资源普查；中医药标准制定', keyword: '中医药发展+资源' },
  { dept: '国家药典委员会', duty: '组织制定和修订国家药品标准（药典）', keyword: '药典=标准' },
  { dept: 'CDE（药品审评中心）', duty: '药品注册申请的技术审评', keyword: '技术审评' },
  { dept: '海关', duty: '药品进出口口岸检验；打击走私药品', keyword: '进出口+打假' },
];

/* ──────────────────────── Section 2: 药品经营管理 ──────────────────────── */

export const wholesaleRetailColumns = [
  { key: 'item', header: '对比项目' },
  { key: 'wholesale', header: '药品批发企业' },
  { key: 'retail', header: '药品零售企业' },
];

export const wholesaleRetailRows = [
  { item: '审批部门', wholesale: '省级药品监督管理部门', retail: '县级以上地方药品监督管理部门' },
  { item: '企业负责人资质', wholesale: '大学专科以上学历或中级以上职称', retail: '必须具有执业药师资格' },
  { item: '质量负责人资质', wholesale: '本科以上+执业药师+3年以上经验', retail: '执业药师或依法认定的药学技术人员' },
  { item: '经营范围', wholesale: '麻醉药品、精神药品、生物制品等', retail: '处方药、甲类/乙类非处方药' },
  { item: '不得经营的品种', wholesale: '—', retail: '麻精一类、易制毒化学品、蛋白同化制剂（胰岛素除外）' },
  { item: '许可证有效期', wholesale: '5年（期满前6个月换发）', retail: '5年（期满前6个月换发）' },
  { item: '处方审核', wholesale: '—', retail: '执业药师负责，不得由其他岗位代行' },
  { item: '储存管理', wholesale: '专库/专区+色标管理', retail: '阴凉区、处方药与非处方药分区' },
];

export const purchaseMethodsColumns = [
  { key: 'method', header: '采购方式' },
  { key: 'type', header: '适用药品类型' },
  { key: 'mnemonic', header: '记忆口诀' },
];

export const purchaseMethodsRows = [
  { method: '招标采购', type: '临床用量大、金额高、多家企业生产的品种', mnemonic: '量多额高招' },
  { method: '谈判采购', type: '专利药、独家生产的药品', mnemonic: '专利独家谈' },
  { method: '直接挂网', type: '妇儿专科非专利药、急抢救药、基础输液、低价药', mnemonic: '妇儿急挂网' },
  { method: '定点生产', type: '临床必需、用量小、市场供应短缺的品种', mnemonic: '必需短缺定' },
  { method: '按现行规定', type: '麻精药品、免费用药、免疫规划疫苗、中药饮片', mnemonic: '特殊按现行' },
];

export const rxOtcColumns = [
  { key: 'item', header: '对比项目' },
  { key: 'rx', header: '处方药(Rx)' },
  { key: 'otc', header: '非处方药(OTC)' },
];

export const rxOtcRows = [
  { item: '购买方式', rx: '凭执业医师/助理医师处方', otc: '消费者自行判断、购买和使用' },
  { item: '专有标识', rx: '无', otc: '甲类红色OTC、乙类绿色OTC' },
  { item: '分类', rx: '无细分', otc: '甲类（安全性需药师指导）、乙类（安全性更高）' },
  { item: '销售场所', rx: '医疗机构、药店', otc: '甲类：药店；乙类：药店+经批准的商业企业' },
  { item: '广告管理', rx: '只能在专业医药报刊发布', otc: '经批准可在大众媒体发布' },
  { item: '安全性', rx: '需在医师指导下使用', otc: '乙类比甲类更安全' },
];

export const traceabilityColumns = [
  { key: 'principle', header: '原则' },
  { key: 'requirement', header: '具体要求' },
];

export const traceabilityRows = [
  { principle: '显著性', requirement: '追溯码需在药品包装上显著位置标注，不得被其他图案遮挡' },
  { principle: '清晰性', requirement: '图案、文字需清晰完整，无模糊、残缺、污损' },
  { principle: '易识别性', requirement: '格式符合国家通用标准，便于扫码设备快速识别' },
  { principle: '稳定性', requirement: '标识应稳定持久，在正常储运条件下不易脱落或变质' },
];

/* ──────────────────────── Section 3: 特殊管理药品 ──────────────────────── */

export const specialDrugsCategories = [
  {
    category: '麻醉药品',
    borderColor: 'var(--accent-rust)',
    points: ['五专管理', '专用处方（淡红色）', '限量规定', '空安瓿回收', '逐日消耗登记'],
  },
  {
    category: '精神药品',
    borderColor: 'var(--accent-olive)',
    points: ['一类精神药品参照麻醉药品管理', '二类精神药品普通处方（白色）', '限量较宽'],
  },
  {
    category: '毒性药品',
    borderColor: 'var(--accent-gold)',
    points: ['专人负责', '专柜加锁', '专用账册', '包装标志（黑底白字毒字）', '处方限量'],
  },
  {
    category: '放射性药品',
    borderColor: 'var(--ink-quaternary)',
    points: ['使用许可证制度', '防护要求', '废弃物处理', '专用储存'],
  },
];

export const fourSpecialDrugsColumns = [
  { key: 'item', header: '管理要求' },
  { key: 'narcotic', header: '麻醉药品' },
  { key: 'psycho1', header: '精神药品（一类）' },
  { key: 'psycho2', header: '精神药品（二类）' },
  { key: 'toxic', header: '毒性药品' },
  { key: 'radio', header: '放射性药品' },
];

export const fourSpecialDrugsRows = [
  { item: '处方颜色', narcotic: '淡红色', psycho1: '淡红色', psycho2: '白色', toxic: '无特殊', radio: '无特殊' },
  { item: '专册登记', narcotic: '✓', psycho1: '✓', psycho2: '✗', toxic: '✓', radio: '✓' },
  { item: '限量（每次）', narcotic: '注射剂≤2日常用量', psycho1: '同麻醉药品', psycho2: '≤7日常用量', toxic: '不得超过极量', radio: '按品种规定' },
  { item: '处方保存', narcotic: '3年', psycho1: '3年', psycho2: '2年', toxic: '2年', radio: '按品种' },
];

export const prescriptionLimitColumns = [
  { key: 'patient', header: '患者类型' },
  { key: 'form', header: '剂型' },
  { key: 'narcotic', header: '麻醉药品/第一类精神药品' },
  { key: 'psycho2', header: '第二类精神药品' },
];

export const prescriptionLimitRows = [
  { patient: '普通患者', form: '注射剂', narcotic: '1次常用量', psycho2: '—' },
  { patient: '普通患者', form: '其他剂型', narcotic: '≤3日常用量', psycho2: '≤7日用量' },
  { patient: '普通患者', form: '控缓释制剂', narcotic: '≤7日常用量', psycho2: '≤7日用量' },
  { patient: '癌痛/中重度疼痛患者', form: '注射剂', narcotic: '≤3日常用量', psycho2: '—' },
  { patient: '癌痛/中重度疼痛患者', form: '其他剂型', narcotic: '≤7日常用量', psycho2: '—' },
  { patient: '癌痛/中重度疼痛患者', form: '控缓释制剂', narcotic: '≤15日常用量', psycho2: '—' },
  { patient: '住院患者', form: '全部剂型', narcotic: '逐日开具，1日常用量', psycho2: '—' },
];

export const maResponsibilityColumns = [
  { key: 'item', header: '项目' },
  { key: 'detail', header: '具体要求' },
];

export const maResponsibilityRows = [
  { item: '全生命周期责任', detail: '非临床研究→临床试验→生产→经营→上市后研究→不良反应监测' },
  { item: '自行生产条件', detail: '需取得药品生产许可证' },
  { item: '委托生产限制', detail: '不得委托：血液制品、麻精毒、药品类易制毒化学品' },
  { item: '自行销售条件', detail: '批发无需经营许可证；零售需取得经营许可证' },
  { item: '质量责任主体', detail: '法定代表人、主要负责人对药品质量全面负责' },
  { item: '追溯制度', detail: '建立并实施药品追溯制度（★2025重点）' },
  { item: '年度报告', detail: '每年向省级药监部门报告生产销售、上市后研究、风险管理等情况' },
];

/* ──────────────────────── Section 4: 上市后管理 ──────────────────────── */

export const adrReportColumns = [
  { key: 'type', header: '报告类型' },
  { key: 'time', header: '报告时限' },
  { key: 'note', header: '说明' },
];

export const adrReportRows = [
  { type: '死亡病例/群体不良事件', time: '立即报告', note: '死亡立即报，不得延误' },
  { type: '新的/严重ADR', time: '15日内', note: '严重15日，需尽快上报' },
  { type: '非严重ADR', time: '30日内', note: '一般病例30日内上报即可' },
];

export const recallColumns = [
  { key: 'level', header: '召回级别' },
  { key: 'hazard', header: '危害程度' },
  { key: 'notify', header: '通知时限' },
  { key: 'report', header: '报告时限' },
  { key: 'mnemonic', header: '口诀' },
];

export const recallRows = [
  { level: '一级召回', hazard: '可能引起严重健康危害', notify: '1日内', report: '1日内', mnemonic: '严重危害一级召' },
  { level: '二级召回', hazard: '可能引起暂时或可逆健康危害', notify: '2日内', report: '3日内', mnemonic: '暂时逆害二级召' },
  { level: '三级召回', hazard: '一般不会引起健康危害，因其他原因需收回', notify: '3日内', report: '7日内', mnemonic: '无害他因三级召' },
];

export const fakeDrugCrimeColumns = [
  { key: 'situation', header: '情形' },
  { key: 'penalty', header: '刑罚' },
  { key: 'mnemonic', header: '记忆口诀' },
];

export const fakeDrugCrimeRows = [
  { situation: '生产/销售假药足以危害人体健康', penalty: '3年以下有期徒刑或拘役', mnemonic: '足以危害3年下' },
  { situation: '生产/销售假/劣药对人体健康造成严重危害', penalty: '3年以上10年以下有期徒刑', mnemonic: '严重危害3至10' },
  { situation: '生产/销售假药致人死亡或有其他特别严重情节', penalty: '10年以上有期徒刑、无期徒刑或死刑', mnemonic: '死特重10无期死' },
  { situation: '生产/销售劣药后果特别严重', penalty: '10年以上有期徒刑或无期徒刑', mnemonic: '劣药果特10无期' },
];

/* ──────────────────────── Section 5: 执业药师 ──────────────────────── */

export const registrationColumns = [
  { key: 'type', header: '注册类型' },
  { key: 'condition', header: '申请条件' },
  { key: 'validity', header: '有效期' },
  { key: 'note', header: '备注' },
];

export const registrationRows = [
  { type: '首次注册', condition: '取得资格证书', validity: '5年', note: '需在取得证书1年内申请' },
  { type: '延续注册', condition: '注册期满前30日', validity: '5年', note: '需完成继续教育学分' },
  { type: '变更注册', condition: '执业地区/单位/范围变更', validity: '随原注册', note: '需提交变更证明材料' },
  { type: '注销注册', condition: '死亡/丧失能力/吊销证书', validity: '—', note: '由注册机构办理' },
];

export const continuingEduColumns = [
  { key: 'item', header: '项目' },
  { key: 'detail', header: '具体内容' },
  { key: 'note', header: '备注' },
];

export const continuingEduRows = [
  { item: '注册有效期', detail: '5年', note: '2021年起由3年改为5年' },
  { item: '延续注册申请时间', detail: '有效期届满30日前', note: '旧规为3个月' },
  { item: '继续教育起始', detail: '取得资格证的次年开始', note: '首年注册无需继续教育证明' },
  { item: '继续教育学时', detail: '每年≥90学时', note: '公需30+专业60' },
  { item: '继续教育学分', detail: '每年≥30学分', note: '每3学时=1学分' },
  { item: '专业科目比例', detail: '不少于总学时的2/3', note: '即≥60学时' },
  { item: '双证药师', detail: '每年只需参加一类的继续教育', note: '中西药双证便利' },
];

/* ──────────────────────── Section 6: 2026新增7大考点 ──────────────────────── */

export const newLaw828Columns = [
  { key: 'link', header: '管理环节' },
  { key: 'change', header: '2026年新版条例核心变化' },
  { key: 'focus', header: '考试重点' },
];

export const newLaw828Rows = [
  { link: '药品生产许可', change: '细化生产许可条件，强化全过程质量管理要求；明确委托生产双方责任划分', focus: '许可条件、委托生产责任' },
  { link: '药品经营许可', change: '统一全国经营许可标准，规范经营范围表述；简化连锁企业审批程序', focus: '批发/零售许可区别、连锁审批' },
  { link: '上市后变更管理', change: '建立变更分类管理制度（审批类/备案类/报告类），明确各类变更程序与时限', focus: '三类变更的区分标准与程序' },
  { link: '药品追溯', change: '强制要求MAH建立药品追溯系统，实现"一物一码、物码同追"', focus: 'MAH追溯义务、追溯码管理' },
  { link: '法律责任', change: '细化违法情形处罚幅度，提高罚款上限，强化信用惩戒', focus: '货值金额倍数罚款标准' },
];

export const onlineSalesColumns = [
  { key: 'dimension', header: '监管维度' },
  { key: 'rule', header: '核心规定' },
  { key: 'keyword', header: '考试关键词' },
];

export const onlineSalesRows = [
  { dimension: '第三方平台责任', rule: '平台需向省级药监部门备案；对入驻经营者实名登记、资质审核；发现违规行为及时制止并报告', keyword: '备案+审核+报告义务' },
  { dimension: '处方药网售管理', rule: '处方药允许网络销售，但必须严格执行"先方后药"；处方来源真实合法；配备执业药师审核处方', keyword: '先方后药、处方审核' },
  { dimension: '禁止网售品种', rule: '疫苗、血液制品、麻醉药品、精神药品、医疗用毒性药品、药品类易制毒化学品、放射性药品', keyword: '麻精毒放+血制品+疫苗' },
  { dimension: '药品追溯要求', rule: '网售药品须全程纳入追溯体系，确保来源可查、去向可追', keyword: '一物一码、追溯义务' },
  { dimension: '数据安全管理', rule: '网络售药平台须建立药品销售数据管理制度，保障消费者个人信息和用药数据安全', keyword: '数据安全、隐私保护' },
  { dimension: '信息展示规范', rule: '处方药页面须显著标注"本药品为处方药，请凭处方购买"；不得进行处方药促销活动', keyword: '提示语标注、禁止促销' },
];

export const onlineVsTraditionalColumns = [
  { key: 'item', header: '对比项目' },
  { key: 'online', header: '网络药品销售' },
  { key: 'traditional', header: '传统实体经营' },
  { key: 'note', header: '考试注意点' },
];

export const onlineVsTraditionalRows = [
  { item: '经营许可', online: '需取得药品经营许可证', traditional: '需取得药品经营许可证', note: '两者均需许可，无区别' },
  { item: '处方审核', online: '必须配备执业药师远程审核', traditional: '执业药师现场审核', note: '均须执业药师审核' },
  { item: '禁止品种', online: '麻精毒放+血制品+疫苗', traditional: '麻精一类零售禁用等', note: '网售禁止范围更广' },
  { item: '备案要求', online: '第三方平台需省级备案', traditional: '实体店无需平台备案', note: '平台特有义务' },
  { item: '追溯要求', online: '数据接口对接追溯系统', traditional: '扫码上传追溯信息', note: '技术要求更高' },
];

export const medicalDeviceColumns = [
  { key: 'category', header: '类别' },
  { key: 'risk', header: '风险程度' },
  { key: 'measure', header: '管理措施' },
  { key: 'authority', header: '审批/备案机关' },
  { key: 'validity', header: '证书有效期' },
  { key: 'example', header: '举例' },
];

export const medicalDeviceRows = [
  { category: '第一类', risk: '低', measure: '备案管理', authority: '设区市药监部门', validity: '无期限', example: '医用退热贴、创可贴、纱布绷带' },
  { category: '第二类', risk: '中', measure: '注册管理', authority: '省级药监部门', validity: '5年', example: '血压计、体温计、避孕套、助听器' },
  { category: '第三类', risk: '高', measure: '注册管理', authority: 'NMPA', validity: '5年', example: '心脏支架、人工关节、植入式心脏起搏器' },
];

export const pharmacistLawColumns = [
  { key: 'point', header: '考点' },
  { key: 'content', header: '核心内容' },
  { key: 'keyword', header: '考试关键词' },
];

export const pharmacistLawRows = [
  { point: '药师定义', content: '依法取得药师资格，经注册在执业单位从事药学服务的专业技术人员', keyword: '资格+注册+药学服务' },
  { point: '药师职责', content: '处方审核、用药指导、药品管理、药物治疗监测、药学信息服务、健康宣教', keyword: '六大核心职责' },
  { point: '处方审核权限', content: '药师对医师处方有审核权，发现用药不适宜可拒绝调配，必要时与医师沟通', keyword: '审核权+拒绝调配权' },
  { point: '药学服务规范', content: '药师应当遵循药学服务规范，提供个性化用药指导，开展用药重整', keyword: '个体化+用药重整' },
  { point: '继续教育', content: '药师应当按规定参加继续教育，保持和提升专业能力', keyword: '继续教育义务' },
  { point: '法律责任', content: '药师未履行处方审核义务导致严重后果的，承担相应法律责任', keyword: '失职追责' },
];

export const punishmentColumns = [
  { key: 'item', header: '核心内容' },
  { key: 'detail', header: '具体要求' },
];

export const punishmentRows = [
  { item: '适用范围', detail: '消费者因购买不符合安全标准的药品受到损害，可请求惩罚性赔偿' },
  { item: '赔偿标准', detail: '价款十倍或损失三倍惩罚性赔偿；增加赔偿金额不足一千元的为一千元' },
  { item: '明知认定', detail: '销售过期药品、变质药品、未取得批准证明文件药品等情形推定为"明知"' },
  { item: '抗辩限制', detail: '经营者不得以"不知道"为由免责（药品经营者有更高的注意义务）' },
  { item: '职业打假', detail: '合理生活消费需要范围内的购买行为受保护' },
];

export const policyDocumentsColumns = [
  { key: 'doc', header: '政策文件' },
  { key: 'direction', header: '政策方向' },
  { key: 'requirement', header: '核心要求' },
];

export const policyDocumentsRows = [
  { doc: '《中药工业高质量发展实施方案（2026—2030年）》', direction: '中药产业发展', requirement: '到2030年中药工业产值显著提升；道地药材目录管理；全过程追溯；经典名方简化审批' },
  { doc: '《关于促进药品零售行业高质量发展的意见》', direction: '零售行业升级', requirement: '鼓励连锁化经营；严格执行执业药师配备；智慧药房建设；信用分类分级管理' },
  { doc: '《药品领域的反垄断指南》', direction: '反垄断监管', requirement: '禁止固定价格、分割市场等垄断协议；禁止滥用市场支配地位；药品并购须反垄断审查' },
];

export const insuranceUpdateColumns = [
  { key: 'area', header: '监管领域' },
  { key: 'update', header: '2026年更新要点' },
  { key: 'keyword', header: '考试关键词' },
];

export const insuranceUpdateRows = [
  { area: '医保支付方式改革', update: 'DRG/DIP支付方式全面推开，按病种付费覆盖范围持续扩大', keyword: 'DRG/DIP、按病种付费' },
  { area: '医保目录调整', update: '国家医保药品目录动态调整机制常态化，更多创新药纳入医保', keyword: '动态调整、创新药准入' },
  { area: '医保基金监管', update: '推进智能监控，强化飞行检查，严厉打击欺诈骗保行为', keyword: '智能监控、飞行检查' },
  { area: '门诊统筹', update: '职工医保门诊共济保障机制全面实施，定点药店纳入门诊统筹', keyword: '门诊共济、药店统筹' },
  { area: '药品价格治理', update: '建立药品价格常态化监管机制，治理虚高价格', keyword: '价格常态化监管' },
  { area: '集采中选结果执行', update: '强化集采中选药品的采购和使用监管，确保中选结果落地', keyword: '集采落地监管' },
];

/* ──────────────────────── Section 7: 8组记忆口诀 ──────────────────────── */

export interface MemoryCardData {
  mnemonic: string;
  explanation: string;
  scenario: string;
}

export const allMemoryCards: MemoryCardData[] = [
  {
    mnemonic: '药苗医基师',
    explanation: '药品管理法、疫苗管理法、中医药法、基本医疗卫生与健康促进法、医师法',
    scenario: '五部核心法律',
  },
  {
    mnemonic: '量多额高招，专利独家谈，妇儿急挂网，必需短缺定，特殊按现行',
    explanation: '招标/谈判/挂网/定点/现行五种药品采购方式',
    scenario: '五种药品采购方式',
  },
  {
    mnemonic: '普患注一其三七，癌痛注三其七控十五，住院逐日一',
    explanation: '普通患者：注射剂1次量，其他3日，控缓释7日；癌痛患者：注射剂3日，其他7日，控缓释15日；住院患者：逐日1日常用量',
    scenario: '麻精药品处方限量',
  },
  {
    mnemonic: '麻精一三，精二毒二，普急儿一，药店五',
    explanation: '麻精处方保存3年；精二/毒性处方保存2年；普通/急诊/儿科处方保存1年；零售药店处方保存≥5年',
    scenario: '处方保存期限',
  },
  {
    mnemonic: '死亡立即报，严重15日，非严重30日',
    explanation: '死亡病例和药品群体不良事件应当立即报告；新的/严重的ADR应当在15日内报告；非严重ADR应当在30日内报告',
    scenario: 'ADR报告时限',
  },
  {
    mnemonic: '严重危害一级召，暂时逆害二级召，无害他因三级召；通知123，报告137',
    explanation: '一级召回：严重危害，通知1日/报告1日；二级召回：暂时可逆危害，通知2日/报告3日；三级召回：无害他因，通知3日/报告7日',
    scenario: '药品召回分级',
  },
  {
    mnemonic: '足以危害3年下，严重危害3至10，死特重10无期死，劣药果特10无期',
    explanation: '假药/劣药四种量刑档次对应不同危害程度的刑事责任',
    scenario: '假劣药刑事责任',
  },
  {
    mnemonic: '显清易稳',
    explanation: '显著性、清晰性、易识别性、稳定性——药品追溯码编码四原则',
    scenario: '药品追溯码四原则',
  },
];

/* ──────────────────────── Section 8: 易错易混点 ──────────────────────── */

export interface WarningPoint {
  text: string;
  trap: string;
}

export const warningPoints: WarningPoint[] = [
  {
    text: '假药的"成分不符"vs劣药的"含量不符"：成分=假药，含量=劣药',
    trap: '两词只差一字，含义天壤之别',
  },
  {
    text: '第一类精神药品vs第二类精神药品处方颜色：第一类=淡红色，第二类=白色',
    trap: '都带"精神药品"四字，颜色完全不同',
  },
  {
    text: '医疗机构vs零售药店处方保存期限：医疗机构1/2/3年分档，药店统一≥5年',
    trap: '问法一变，答案全变',
  },
  {
    text: '哌替啶vs普通麻精注射剂使用限制：哌替啶限机构内，普通注射剂1次常用量可在门诊',
    trap: '哌替啶比普通麻精更严格',
  },
  {
    text: 'MAH不得委托生产的品种：血液制品+麻精毒+易制毒，疫苗除外',
    trap: '疫苗是特殊规定可以委托',
  },
  {
    text: '预防性疫苗vs治疗性疫苗纳入医保：预防性不能纳入，治疗性可以纳入',
    trap: '一字之差结论相反',
  },
  {
    text: '执业药师注册有效期（2021年前后）：2021年前=3年，2021年后=5年',
    trap: '旧教材可能沿用旧规定',
  },
];

/* ──────────────────────── Key point texts ──────────────────────── */

export const keyPointTexts = {
  drugLaw2019: '《药品管理法》2019年修订是近年来最重要的法规变动，新增药品上市许可持有人（MAH）制度，考试必考。',
  gspGmpWarning: 'GSP与GMP的适用范围常被混淆——GSP针对经营（流通），GMP针对生产，两者人员要求、关键环节均不同。',
  rxColor: 'OTC的专有标识颜色是高频易错点。甲类OTC是红色（相对不安全，需药师指导），乙类OTC是绿色（更安全，可在普通商业企业销售）。记忆技巧：红灯停（需药师指导），绿灯行（可自由购买）。',
  registration: '执业药师注册有效期为5年（2021年起由3年改为5年），延续注册需在期满前30日内申请，且必须完成规定的继续教育学分（每年不少于30学分/90学时）。',
  adrKey: 'ADR报告时限是法规高频考点：死亡立即报、严重15日、非严重30日。',
  recallKey: '药品召回的责任主体是MAH（上市许可持有人），不是生产企业或经营企业。召回分级依据是"潜在健康危害程度"，不是已造成的实际损害。',
  maHKey: 'MAH委托生产的限制品种是考试高频考点。注意疫苗可以委托生产（特殊规定），但血液制品、麻醉药品、精神药品、医疗用毒性药品、药品类易制毒化学品绝对不得委托生产。',
  new2026: '药品网络销售管理办法和MAH药物警戒规范是2026年考试的最热新增考点，预计分值占比显著提高。',
};

/* ──────────────────────── Lead paragraph ──────────────────────── */

export const leadParagraph = {
  dropCap: '法',
  text: '中国的药事管理法规体系是一个金字塔式的层级结构。位于塔尖的是由全国人大制定的《药品管理法》，这是药品监管领域的基本法律。其下是国务院颁布的行政法规，如《药品管理法实施条例》。再往下是国家药品监督管理局（NMPA）等部门制定的部门规章，以及各类规范性文件和技术指南。理解这一层级关系，是掌握药事法规的基石。',
};
