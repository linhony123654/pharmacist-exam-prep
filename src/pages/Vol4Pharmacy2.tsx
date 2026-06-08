import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VolumeCover from '../components/VolumeCover';
import SectionDivider from '../components/SectionDivider';
import ComparisonTable from '../components/ComparisonTable';
import MemoryCard from '../components/MemoryCard';
import KeyPointBadge from '../components/KeyPointBadge';
import DropCap from '../components/DropCap';
import ScrollReveal from '../components/ScrollReveal';
import {
  sedativeHypnoticTable,
  antiEpilepsyTable,
  antipsychoticTable,
  antidepressantTable,
  morphineVsPethidineTable,
  nsaidCoxTable,
  goutTreatmentTable,
  asthmaDrugsTable,
  h2VsPpiTable,
  antihypertensiveTable,
  antiarrhythmicVWTable,
  lipidLoweringTable,
  anticoagulantTable,
  diabetesDrugsTable,
  cephalosporinTable,
  antimicrobialOverviewTable,
  antitumorTable,
  immunotherapyTable,
  allMemoryCards,
  warningPoints,
  keyPoints,
} from '../data/vol4-content';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Section Header                                                      */
/* ------------------------------------------------------------------ */
function SectionHeader({
  number,
  label,
  title,
  systemColor = 'var(--accent-rust)',
}: {
  number: string;
  label: string;
  title: string;
  systemColor?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="section-number">{number}</span>
        <span
          className="text-ui-sm"
          style={{ color: 'var(--ink-tertiary)' }}
        >
          {label}
        </span>
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: systemColor }}
        />
      </div>
      <h2
        className="font-chinese-serif text-display-md"
        style={{ color: 'var(--ink)' }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Part Divider Band                                                   */
/* ------------------------------------------------------------------ */
function PartDivider({
  partNum,
  title,
  english,
  description,
  borderColor = 'var(--accent-rust)',
}: {
  partNum: string;
  title: string;
  english: string;
  description: string;
  borderColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="relative py-20 my-8"
      style={{
        borderTop: `3px solid ${borderColor}`,
        borderBottom: `1px solid var(--border)`,
        background: 'var(--paper-dark)',
      }}
    >
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <p
          className="font-display text-ui-md uppercase tracking-widest mb-3"
          style={{ color: 'var(--accent-rust)' }}
        >
          {partNum}
        </p>
        <h2
          className="font-chinese-serif text-display-md mb-2"
          style={{ color: 'var(--ink)' }}
        >
          {title}
        </h2>
        <p
          className="font-display text-body-lg uppercase tracking-wide mb-4"
          style={{ color: 'var(--ink-tertiary)' }}
        >
          {english}
        </p>
        <p
          className="text-body-md"
          style={{ color: 'var(--ink-secondary)' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-section heading                                                 */
/* ------------------------------------------------------------------ */
function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-chinese-serif text-display-sm mt-12 mb-5"
      style={{ color: 'var(--ink)' }}
    >
      {children}
    </h3>
  );
}

/* ------------------------------------------------------------------ */
/*  Body text paragraph                                                 */
/* ------------------------------------------------------------------ */
function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-body-lg mb-4"
      style={{ color: 'var(--ink-secondary)', lineHeight: 1.75 }}
    >
      {children}
    </p>
  );
}

/* ================================================================== */
/*  MAIN PAGE COMPONENT                                               */
/* ================================================================== */
export default function Vol4Pharmacy2() {
  const pageRef = useRef<HTMLDivElement>(null);

  /* ---- system-color border tokens ---- */
  const SYS_NEURO = '#6B4C6B';
  const SYS_CARDIO = '#9B2C3B';
  const SYS_GI = '#C77D2E';
  const SYS_RESP = '#4A8BB0';
  const SYS_ENDO = '#5A7D5A';
  const SYS_ABX = '#2E8B8B';
  const SYS_ONCO = '#5A5A5A';

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      /* Staggered reveals for card grids */
      gsap.utils.toArray<HTMLElement>('.reveal-grid').forEach((grid) => {
        gsap.from(grid.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* ============================================================ */}
      {/* VOLUME COVER                                                  */}
      {/* ============================================================ */}
      <VolumeCover
        volumeNum="IV"
        volumeRoman="IV"
        title="药学专业知识（二）精讲"
        subtitle="SYSTEMIC PHARMACOLOGY"
        metadata="14 章节 · 38 对比表格 · 12 组记忆口诀 · 8大系统"
      />

      {/* Lead paragraph */}
      <section
        className="max-w-[800px] mx-auto px-6 py-16"
        style={{ background: 'var(--paper)' }}
      >
        <DropCap letter="药">
          学专业知识（二）是执业药师考试中内容量最大、分值最高的核心章节，覆盖神经、心血管、呼吸、消化、泌尿、血液、内分泌、抗感染、抗肿瘤等全部系统药物。要求考生建立"药物分类→作用机制→代表药→适应症→不良反应"的五维记忆框架，配合口诀与表格实现高效备考。
        </DropCap>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* PART I — 各系统药物                                            */}
      {/* ============================================================ */}
      <PartDivider
        partNum="PART I"
        title="各系统药物"
        english="SYSTEMIC PHARMACOLOGY"
        description="按人体系统分类的临床用药指南——神经、心血管、消化、呼吸、内分泌、血液"
        borderColor={SYS_CARDIO}
      />

      {/* -------------------------------------------------------------- */}
      {/* Section 1: 神经与精神疾病用药                                    */}
      {/* -------------------------------------------------------------- */}
      <section
        className="max-w-[1100px] mx-auto px-6 py-20"
        style={{
          background: 'var(--paper)',
          borderLeft: `3px solid ${SYS_NEURO}`,
          paddingLeft: '2.5rem',
        }}
      >
        <SectionHeader
          number="01"
          label="神经系统"
          title="神经与精神疾病用药"
          systemColor={SYS_NEURO}
        />

        <SubHeading>镇静催眠药分类对比</SubHeading>
        <ComparisonTable
          columns={sedativeHypnoticTable.columns}
          rows={sedativeHypnoticTable.rows}
        />
        <BodyText>
          苯二氮卓类的作用机制为促进中枢神经递质γ-氨基丁酸（GABA）的释放或突触传递，增强GABA_A受体介导的氯离子内流，产生镇静、催眠、抗焦虑、抗惊厥和中枢肌松作用。长效苯二氮卓类因半衰期长、活性代谢产物蓄积，在老年人中易引起跌倒和认知障碍，应谨慎使用。
        </BodyText>
        <KeyPointBadge
          type="warning"
          text="地西泮虽为长效药，但因脂溶性高、吸收最快，是癫痫持续状态的首选药，静脉注射每次10-20mg，一次性给予，避免少量多次。"
        />

        <MemoryCard
          mnemonic="苯二氮卓抗焦虑，镇静催眠抗惊厥；长效地西泮，短效唑吡坦，术中咪达唑仑"
          explanation="苯二氮卓类药物的共同作用+各代表药物的特点与用途"
        />

        <SubHeading>抗癫痫药选择原则对比</SubHeading>
        <ComparisonTable
          columns={antiEpilepsyTable.columns}
          rows={antiEpilepsyTable.rows}
        />
        <BodyText>
          丙戊酸钠是广谱抗癫痫药，几乎适用于所有类型癫痫，但对局灶性发作的疗效弱于卡马西平。苯妥英钠的神经系统反应与血浆浓度密切相关：≥20μg/ml出现眼球震颤，≥30μg/ml出现共济失调，≥40μg/ml出现嗜睡昏迷，且具有饱和代谢（零级动力学）特征。
        </BodyText>

        <MemoryCard
          mnemonic="全面发作丙戊酸，局灶发作卡马西；失神发作乙琥胺，持续状态地西泮；肌阵挛用丙戊酸，卡马奥卡要禁用。"
          explanation="抗癫痫药按发作类型选择——每年必考内容"
        />

        <SubHeading>抗精神病药对比</SubHeading>
        <ComparisonTable
          columns={antipsychoticTable.columns}
          rows={antipsychoticTable.rows}
        />
        <BodyText>
          氯丙嗪是第一代抗精神病药的代表，具有镇吐、降温（配合物理降温用于人工冬眠）和降压作用。氯氮平是第一个非典型抗精神病药，几无锥体外系反应，但严重不良反应为粒细胞减少，需定期监测血常规。
        </BodyText>

        <MemoryCard
          mnemonic="急数坐数帕数迟数——急性肌张力障碍数小时到数天，静坐不能和帕金森数天到数周，迟发性运动障碍数月到数年。"
          explanation="锥体外系反应四种类型按出现时间排序"
        />

        <SubHeading>抗抑郁药五大类对比</SubHeading>
        <ComparisonTable
          columns={antidepressantTable.columns}
          rows={antidepressantTable.rows}
        />
        <KeyPointBadge
          type="key"
          text="SSRI禁止与MAOI合用，换用需间隔至少2周；氟西汀因半衰期长，需停药5周后才能换用MAOI。"
        />

        <SubHeading>吗啡 vs 哌替啶</SubHeading>
        <ComparisonTable
          columns={morphineVsPethidineTable.columns}
          rows={morphineVsPethidineTable.rows}
        />
        <KeyPointBadge
          type="warning"
          text="哌替啶因代谢产物去甲哌替啶半衰期长（15-20h）且有神经毒性，反复使用可蓄积致震颤、抽搐、癫痫发作，故不推荐用于慢性疼痛和癌痛长期治疗。"
        />
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------- */}
      {/* Section 2: 解热镇痛抗炎与抗痛风药                                */}
      {/* -------------------------------------------------------------- */}
      <section
        className="max-w-[1100px] mx-auto px-6 py-20"
        style={{
          background: 'var(--paper-dark)',
          borderLeft: `3px solid ${SYS_GI}`,
          paddingLeft: '2.5rem',
        }}
      >
        <SectionHeader
          number="02"
          label="解热镇痛"
          title="解热镇痛抗炎与抗痛风药"
          systemColor={SYS_GI}
        />

        <SubHeading>NSAIDs COX选择性对比</SubHeading>
        <ComparisonTable
          columns={nsaidCoxTable.columns}
          rows={nsaidCoxTable.rows}
        />
        <BodyText>
          小剂量阿司匹林（75-150mg/d）不可逆抑制血小板COX-1，阻断TXA2生成，发挥抗血栓作用，用于心脑血管事件的一级和二级预防。但大剂量时抑制血管内皮COX-2，减少PGI2合成，反而可能促进血栓形成。
        </BodyText>

        <MemoryCard
          mnemonic="非选伤胃不伤heart，选二伤胃少但管得住；小剂量阿司匹林防血栓，大剂量反而促血栓。"
          explanation="NSAIDs COX选择性核心记忆"
        />

        <SubHeading>抗痛风分期用药</SubHeading>
        <ComparisonTable
          columns={goutTreatmentTable.columns}
          rows={goutTreatmentTable.rows}
        />
        <KeyPointBadge
          type="warning"
          text="痛风急性发作期只能用秋水仙碱或NSAIDs抗炎镇痛，加用降尿酸药会诱发或加重急性发作。降尿酸治疗需在急性发作缓解后2周开始。"
        />

        <MemoryCard
          mnemonic="急性抗炎缓降酸，急性期里别碰降酸药；别嘌醇防生成，苯溴马隆促排泄。"
          explanation="抗痛风分期用药原则"
        />
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------- */}
      {/* Section 3: 呼吸系统用药                                         */}
      {/* -------------------------------------------------------------- */}
      <section
        className="max-w-[1000px] mx-auto px-6 py-20"
        style={{
          background: 'var(--paper)',
          borderLeft: `3px solid ${SYS_RESP}`,
          paddingLeft: '2.5rem',
        }}
      >
        <SectionHeader
          number="03"
          label="呼吸系统"
          title="呼吸系统用药"
          systemColor={SYS_RESP}
        />

        <SubHeading>平喘药五大类对比</SubHeading>
        <ComparisonTable
          columns={asthmaDrugsTable.columns}
          rows={asthmaDrugsTable.rows}
        />
        <BodyText>
          SABA起效最快（吸入后1-5分钟），是缓解哮喘急性症状的"急救药"。ICS是哮喘长期控制的基石药物，通过局部吸入给药，全身不良反应少，但用药后需漱口以减少口腔念珠菌感染风险。
        </BodyText>
        <KeyPointBadge
          type="warning"
          text="LABA不可单独用于哮喘——FDA黑框警告，LABA单用可能增加严重哮喘发作风险，必须与ICS联合使用。"
        />

        <MemoryCard
          mnemonic="急性发作沙丁胺醇救，长期控制激素为首；LABA不可单独用，ICS+LABA才是正解；白三烯对阿司匹林哮喘最灵验。"
          explanation="哮喘用药速记"
        />
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------- */}
      {/* Section 4: 消化系统用药                                         */}
      {/* -------------------------------------------------------------- */}
      <section
        className="max-w-[1000px] mx-auto px-6 py-20"
        style={{
          background: 'var(--paper-dark)',
          borderLeft: `3px solid ${SYS_GI}`,
          paddingLeft: '2.5rem',
        }}
      >
        <SectionHeader
          number="04"
          label="消化系统"
          title="消化系统用药"
          systemColor={SYS_GI}
        />

        <SubHeading>H2受体阻断剂 vs 质子泵抑制剂（PPI）</SubHeading>
        <ComparisonTable
          columns={h2VsPpiTable.columns}
          rows={h2VsPpiTable.rows}
        />
        <BodyText>
          所有PPI均为前体药物，在壁细胞的酸性环境中活化后共价结合H+-K+-ATP酶，不可逆抑制质子泵。因此必须在餐前30-60分钟服用（进餐刺激质子泵激活时药效最佳）。
        </BodyText>

        <MemoryCard
          mnemonic="PPI强效抑胃酸，H2受体是轻中；铋剂铝剂保护膜，三联疗法除HP"
          explanation="抗溃疡药物的分类选择与幽门螺杆菌根除方案"
        />
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------- */}
      {/* Section 5: 心血管系统用药（★最高分值）                           */}
      {/* -------------------------------------------------------------- */}
      <section
        className="max-w-[1100px] mx-auto px-6 py-20"
        style={{
          background: 'var(--paper)',
          borderLeft: `3px solid ${SYS_CARDIO}`,
          paddingLeft: '2.5rem',
        }}
      >
        <SectionHeader
          number="05"
          label="心血管系统"
          title="心血管系统用药（★最高分值系统）"
          systemColor={SYS_CARDIO}
        />

        <KeyPointBadge
          type="key"
          text="心血管系统用药是执业药师西药二中考查分值最高的系统，预计占15-20分，且与西药一（药物化学结构）、西药综合（临床用药选择）形成完整知识链，跨科目总分可达25-30分。"
        />

        <SubHeading>抗高血压药五大类全维度对比（★核心大表）</SubHeading>
        <ComparisonTable
          columns={antihypertensiveTable.columns}
          rows={antihypertensiveTable.rows}
        />

        <KeyPointBadge
          type="key"
          text={keyPoints.aceiCough}
        />
        <KeyPointBadge
          type="warning"
          text="ACEI和ARB均可能引起血管神经性水肿（虽然ARB发生率较低），一旦发生需终身禁用此类药物。从ACEI换用ARNI（沙库巴曲缬沙坦）需停药36小时，以避免血管神经性水肿风险。"
        />

        <MemoryCard
          mnemonic="普利护肾又降压，咳嗽就换沙坦吧；地平老人最适宜，洛尔哮喘要禁用；利尿便宜钾要注意，心衰糖尿普利先。"
          explanation="抗高血压药选择原则"
        />

        <SubHeading>抗心律失常药 Vaughan-Williams 四分类</SubHeading>
        <ComparisonTable
          columns={antiarrhythmicVWTable.columns}
          rows={antiarrhythmicVWTable.rows}
        />
        <BodyText>
          胺碘酮因含碘量高（每个分子含2个碘原子），长期应用不良反应广泛而严重。半衰期极长（40-55天），停药后药物作用可持续数周至数月。禁用于甲状腺疾病、碘过敏、严重窦房结病变和二度以上房室传导阻滞患者。
        </BodyText>

        <MemoryCard
          mnemonic="肺纤甲减角膜黄，光敏皮蓝神经伤；半衰期长四十天，停药作用还绵延。"
          explanation="胺碘酮长期不良反应速记"
        />

        <SubHeading>调血脂药对比</SubHeading>
        <ComparisonTable
          columns={lipidLoweringTable.columns}
          rows={lipidLoweringTable.rows}
        />
        <KeyPointBadge
          type="key"
          text="阿托伐他汀和瑞舒伐他汀因半衰期长，可任意时间服用；其他他汀类（辛伐他汀、普伐他汀等）需在睡前服用（胆固醇合成夜间高峰）。"
        />

        <SubHeading>抗凝药对比</SubHeading>
        <ComparisonTable
          columns={anticoagulantTable.columns}
          rows={anticoagulantTable.rows}
        />
        <KeyPointBadge
          type="warning"
          text="华法林与多种药物和食物有相互作用：CYP450诱导剂（利福平、卡马西平）降低华法林效果；CYP450抑制剂（胺碘酮、甲硝唑）增强华法林效果；富含维生素K的食物（绿叶蔬菜）减弱抗凝效果。"
        />

        <MemoryCard
          mnemonic="心衰新四联：ARNI + β受体阻滞剂 + MRA + SGLT2抑制剂——从传统金三角全面升级！"
          explanation="心力衰竭药物治疗新方案（已取代传统金三角）"
        />
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------- */}
      {/* Section 6: 内分泌系统用药                                       */}
      {/* -------------------------------------------------------------- */}
      <section
        className="max-w-[1100px] mx-auto px-6 py-20"
        style={{
          background: 'var(--paper-dark)',
          borderLeft: `3px solid ${SYS_ENDO}`,
          paddingLeft: '2.5rem',
        }}
      >
        <SectionHeader
          number="06"
          label="内分泌系统"
          title="内分泌系统用药"
          systemColor={SYS_ENDO}
        />

        <SubHeading>糖皮质激素四抗作用</SubHeading>
        <BodyText>
          糖皮质激素（以泼尼松、甲泼尼龙、地塞米松为代表）具有"四抗"作用：抗炎（抑制炎症介质释放）、抗免疫（抑制T细胞和B细胞功能）、抗毒（提高机体对细菌内毒素的耐受力）和抗休克（增强血管对儿茶酚胺的敏感性）。长期大剂量使用不良反应包括满月脸、水牛背、向心性肥胖、高血糖、高血脂、骨质疏松、感染易感性增加、消化性溃疡、HPA轴抑制等。
        </BodyText>

        <MemoryCard
          mnemonic="满月脸水牛背，向心性肥胖血糖高；骨质疏松易感染，溃疡精神眼也伤；HPA轴被抑制，逐渐减量防危象。"
          explanation="糖皮质激素不良反应速记"
        />

        <SubHeading>降糖药八大类对比大表（★核心大表）</SubHeading>
        <ComparisonTable
          columns={diabetesDrugsTable.columns}
          rows={diabetesDrugsTable.rows}
        />
        <KeyPointBadge
          type="key"
          text="二甲双胍是2型糖尿病的一线首选药物（除非有禁忌症），不仅降糖还可降低心血管事件风险和全因死亡率。低血糖风险排序：磺脲类/胰岛素 > 格列奈类 > 其他类基本无低血糖风险。"
        />

        <MemoryCard
          mnemonic="磺脲促泌低血糖，双胍降肝是首选；α糖苷管餐后，SGLT-2排糖尿"
          explanation="口服降糖药的分类与临床选择原则"
        />
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* PART II — 抗微生物与抗肿瘤药物                                 */}
      {/* ============================================================ */}
      <PartDivider
        partNum="PART II"
        title="抗微生物与抗肿瘤药物"
        english="ANTIMICROBIAL & ANTINEOPLASTIC AGENTS"
        description="抗菌、抗病毒、抗真菌药物与抗肿瘤化疗药物、免疫治疗"
        borderColor={SYS_ABX}
      />

      {/* -------------------------------------------------------------- */}
      {/* Section 7: 抗感染药物（★最高分值系统）                           */}
      {/* -------------------------------------------------------------- */}
      <section
        className="max-w-[1100px] mx-auto px-6 py-20"
        style={{
          background: 'var(--paper)',
          borderLeft: `3px solid ${SYS_ABX}`,
          paddingLeft: '2.5rem',
        }}
      >
        <SectionHeader
          number="07"
          label="抗感染药物"
          title="抗感染药物（★最高分值系统）"
          systemColor={SYS_ABX}
        />

        <KeyPointBadge
          type="key"
          text="抗感染药物是西药二中考查分值最高的章节，预计占18-25分。考生需将'母核识别→侧链分析→药理推断→临床应用'形成自动化思维链。"
        />

        <SubHeading>抗菌药物分类概览</SubHeading>
        <ComparisonTable
          columns={antimicrobialOverviewTable.columns}
          rows={antimicrobialOverviewTable.rows}
        />
        <KeyPointBadge
          type="key"
          text={keyPoints.penicillinAllergy}
        />

        <SubHeading>头孢菌素五代对比大表（★核心大表）</SubHeading>
        <ComparisonTable
          columns={cephalosporinTable.columns}
          rows={cephalosporinTable.rows}
        />
        <KeyPointBadge
          type="warning"
          text="2026大纲新增：第五代头孢菌素头孢洛林对MRSA有效，这是五代头孢与前面四代最本质的区别。头孢哌酮、头孢孟多等含甲硫四氮唑侧链，可引起出血倾向和双硫仑样反应，用药期间禁酒。"
        />

        <MemoryCard
          mnemonic="一拉定唑林氨苄，二呋孟替克丙烯，三肟他啶哌曲松，四代吡肟骑匹马，五洛林托罗普。"
          explanation="五代头孢代表药记忆口诀"
        />

        <SubHeading>青霉素抗菌谱</SubHeading>
        <div
          className="p-6 mb-6"
          style={{
            background: 'var(--accent-gold-light)',
            border: '1px solid var(--accent-gold)',
          }}
        >
          <p
            className="font-chinese-serif text-body-lg mb-3"
            style={{ color: 'var(--ink)', fontStyle: 'italic' }}
          >
            "链葡螺放白肺炭"（廉颇落荒白灰滩）
          </p>
          <div className="space-y-1 text-body-md" style={{ color: 'var(--ink-secondary)' }}>
            <p>链 = 溶血性链球菌（A组β溶血性链球菌感染首选）</p>
            <p>葡 = 敏感的金黄色葡萄球菌（MRSA除外）</p>
            <p>螺 = 螺旋体（梅毒、钩端、回归热、莱姆病）</p>
            <p>放 = 放线菌</p>
            <p>白 = 白喉杆菌</p>
            <p>肺 = 肺炎球菌（肺炎链球菌）</p>
            <p>炭 = 炭疽杆菌</p>
          </div>
        </div>

        <SubHeading>抗结核药不良反应口诀</SubHeading>
        <div
          className="p-6 mb-6"
          style={{
            background: 'var(--accent-gold-light)',
            border: '1px solid var(--accent-gold)',
          }}
        >
          <p
            className="font-chinese-serif text-body-lg mb-3"
            style={{ color: 'var(--ink)', fontStyle: 'italic' }}
          >
            "INH肝神经，RFP红肝胃，EB眼尿酸，PZA肝痛风，SM耳肾"
          </p>
          <div className="space-y-1 text-body-md" style={{ color: 'var(--ink-secondary)' }}>
            <p><strong>异烟肼（INH）</strong>：周围神经炎（加用VitB6预防）、肝毒性（最常见严重不良反应）</p>
            <p><strong>利福平（RFP）</strong>：尿液变红橙（无害但需告知患者）、肝毒性、诱导肝药酶（使口服避孕药失效）</p>
            <p><strong>乙胺丁醇（EB）</strong>：球后视神经炎（视力模糊、视野缺损）、高尿酸血症</p>
            <p><strong>吡嗪酰胺（PZA）</strong>：肝毒性、高尿酸血症（痛风患者慎用）</p>
            <p><strong>链霉素（SM）</strong>：耳毒性、肾毒性、神经肌肉阻滞</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* -------------------------------------------------------------- */}
      {/* Section 8: 抗肿瘤药与免疫治疗（2026新增）                        */}
      {/* -------------------------------------------------------------- */}
      <section
        className="max-w-[1100px] mx-auto px-6 py-20"
        style={{
          background: 'var(--paper-dark)',
          borderLeft: `3px solid ${SYS_ONCO}`,
          paddingLeft: '2.5rem',
        }}
      >
        <SectionHeader
          number="08"
          label="抗肿瘤"
          title="抗肿瘤药与免疫治疗（2026大纲新增）"
          systemColor={SYS_ONCO}
        />

        <KeyPointBadge
          type="key"
          text="2026年大纲在抗肿瘤药物章节新增了PD-1/PD-L1抑制剂、ADC药物、CAR-T细胞治疗等内容，预计分值在15-18分，是当年考试的高概率出题区域。"
        />

        <SubHeading>抗肿瘤药物分类与毒性</SubHeading>
        <ComparisonTable
          columns={antitumorTable.columns}
          rows={antitumorTable.rows}
        />

        <MemoryCard
          mnemonic="环磷酰胺出血胱，甲氨蝶呤黏膜伤；长春新碱神经毒，蒽环类药心脏伤"
          explanation="各类抗肿瘤药物的特征性不良反应速记"
        />

        <SubHeading>靶向药物与免疫治疗对比</SubHeading>
        <ComparisonTable
          columns={immunotherapyTable.columns}
          rows={immunotherapyTable.rows}
        />
        <BodyText>
          免疫检查点抑制剂是抗肿瘤治疗领域的革命性突破。肿瘤细胞通过表达PD-L1与T细胞表面的PD-1结合，抑制T细胞活化，实现"免疫逃逸"。PD-1抑制剂阻断PD-1/PD-L1通路，恢复T细胞对肿瘤的杀伤功能。免疫治疗特有的不良反应是免疫相关不良反应（irAEs），处理原则为：1-2级→继续治疗+糖皮质激素；3-4级→暂停治疗+中高剂量糖皮质激素。
        </BodyText>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* Section 9: 西药二记忆口诀总表                                   */}
      {/* ============================================================ */}
      <section
        className="max-w-[1000px] mx-auto px-6 py-20"
        style={{ background: 'var(--paper)' }}
      >
        <SectionHeader
          number="09"
          label="速记口诀"
          title="西药二记忆口诀总表"
        />
        <p
          className="text-body-lg mb-8"
          style={{ color: 'var(--ink-secondary)' }}
        >
          以下12组核心口诀覆盖执业药师西药二最高频考点，建议在理解的基础上反复诵读直至形成条件反射。
        </p>
        <div className="reveal-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {allMemoryCards.map((card, i) => (
            <MemoryCard
              key={i}
              mnemonic={card.mnemonic}
              explanation={card.explanation}
            />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* Section 10: 西药二易错点                                       */}
      {/* ============================================================ */}
      <section
        className="max-w-[900px] mx-auto px-6 py-16"
        style={{ background: 'var(--paper-dark)' }}
      >
        <SectionHeader
          number="10"
          label="易错警示"
          title="西药二十大易错点"
        />
        <p
          className="text-body-lg mb-8"
          style={{ color: 'var(--ink-secondary)' }}
        >
          以下10个高频陷阱是历年考生最容易失分的地方，务必反复强化记忆。
        </p>
        <div className="reveal-grid space-y-4">
          {warningPoints.map((wp, i) => (
            <ScrollReveal key={i}>
              <KeyPointBadge type="warning" text={`${wp.title}——${wp.text}`} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* NEXT VOLUME NAVIGATION                                          */}
      {/* ============================================================ */}
      <section
        className="py-20"
        style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
        }}
      >
        <div className="max-w-[600px] mx-auto text-center px-6">
          <p
            className="text-ui-sm uppercase tracking-widest mb-4"
            style={{ color: 'var(--ink-tertiary)' }}
          >
            下一册
          </p>
          <h2
            className="font-chinese-serif text-display-md mb-4"
            style={{ color: 'var(--paper)' }}
          >
            药学综合知识与技能精讲
          </h2>
          <p
            className="text-body-lg mb-8"
            style={{ color: 'var(--ink-tertiary)' }}
          >
            处方审核、43种疾病管理、案例分析与TDM监测
          </p>
          <a
            href="#/vol/5"
            className="inline-block px-8 py-3 text-ui-lg border transition-all duration-300 hover:bg-[var(--accent-rust)] hover:border-[var(--accent-rust)]"
            style={{
              borderColor: 'var(--ink-quaternary)',
              color: 'var(--paper)',
            }}
          >
            继续阅读 →
          </a>
        </div>
      </section>
    </div>
  );
}
