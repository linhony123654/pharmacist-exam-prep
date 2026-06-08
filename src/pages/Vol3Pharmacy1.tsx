import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  VolumeCover,
  DropCap,
  ComparisonTable,
  MemoryCard,
  KeyPointBadge,
  SectionDivider,
  ScrollReveal,
} from '@/components';
import { Link } from 'react-router-dom';
import {
  // Section 1
  identificationMethodsColumns,
  identificationMethodsRows,
  contentDeterminationColumns,
  contentDeterminationRows,
  // Section 2
  functionalGroupColumns,
  functionalGroupRows,
  bondingTypesColumns,
  bondingTypesRows,
  metabolismPhaseColumns,
  metabolismPhaseRows,
  cyp450Columns,
  cyp450Rows,
  prodrugColumns,
  prodrugRows,
  // Section 3 - Structure
  benzodiazepineColumns,
  benzodiazepineRows,
  cardiovascularColumns,
  cardiovascularRows,
  antibioticColumns,
  antibioticRows,
  structureRecognitionColumns,
  structureRecognitionRows,
  // Section 4 - Solid dosage
  solidDosageColumns,
  solidDosageRows,
  excipientColumns,
  excipientRows,
  disintegrationColumns,
  disintegrationRows,
  dosageFormsColumns,
  dosageFormsRows,
  // Section 5 - Liquid
  surfactantColumns,
  surfactantRows,
  emulsionInstabilityColumns,
  emulsionInstabilityRows,
  // Section 6 - Sterile
  pharmaceuticalWaterColumns,
  pharmaceuticalWaterRows,
  pyrogenColumns,
  pyrogenRows,
  // Section 7 - Novel delivery
  controlledReleaseColumns,
  controlledReleaseRows,
  // Section 8 - PK/PD
  pharmacodynamicsColumns,
  pharmacodynamicsRows,
  pkParametersColumns,
  pkParametersRows,
  steadyStateColumns,
  steadyStateRows,
  // Section 9 - Life pharma
  tCellColumns,
  tCellRows,
  hypersensitivityColumns,
  hypersensitivityRows,
  // Cards & Points
  memoryCardsData,
  warningPointsData,
  keyPointsData,
  partDividers,
} from '@/data/vol3-content';

gsap.registerPlugin(ScrollTrigger);

/* ─── Part Divider Component ─── */
function PartDivider({ data }: { data: typeof partDividers[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current!.querySelectorAll('.pd-animate'), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current!,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="relative min-h-[35vh] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--paper-dark) 0%, var(--paper) 100%)',
        borderTop: `3px solid ${data.accentColor}`,
      }}
    >
      {/* Watermark */}
      <div
        className="absolute font-display select-none pointer-events-none pd-animate"
        style={{
          fontSize: 'clamp(4rem, 8vw, 7rem)',
          fontWeight: 700,
          color: data.accentColor,
          opacity: 0.12,
          lineHeight: 0.85,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        PART {data.roman}
      </div>

      <div className="relative z-10 text-center max-w-[500px] mx-auto px-6 py-16">
        <p
          className="font-display text-body-lg uppercase pd-animate"
          style={{ color: 'var(--ink-tertiary)', letterSpacing: '0.1em' }}
        >
          PART {data.roman}
        </p>
        <h2
          className="font-chinese-serif text-display-md mt-3 pd-animate"
          style={{ color: 'var(--ink)' }}
        >
          {data.title}
        </h2>
        <p
          className="text-body-lg mt-3 pd-animate"
          style={{ color: 'var(--ink-secondary)' }}
        >
          {data.english}
        </p>
        <div
          className="mx-auto mt-4 pd-animate"
          style={{ width: '40px', height: '2px', background: data.accentColor }}
        />
        <p
          className="text-body-md mt-4 pd-animate"
          style={{ color: 'var(--ink-secondary)' }}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ num, label, title }: { num: string; label: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="font-display text-ui-md"
          style={{ color: 'var(--accent-olive)', fontWeight: 600 }}
        >
          {num}
        </span>
        <span
          className="text-ui-sm uppercase"
          style={{ color: 'var(--ink-tertiary)', letterSpacing: '0.05em' }}
        >
          {label}
        </span>
      </div>
      <h2 className="font-chinese-serif text-display-sm" style={{ color: 'var(--ink)' }}>
        {title}
      </h2>
      <div
        className="mt-4"
        style={{ width: '40px', height: '2px', background: 'var(--accent-olive)' }}
      />
    </div>
  );
}

/* ─── Formula Block ─── */
function FormulaBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`my-6 p-6 ${className}`}
      style={{
        background: 'var(--paper-dark)',
        border: '1px solid var(--border)',
        fontFamily: 'Source Serif 4, Georgia, serif',
      }}
    >
      {children}
    </div>
  );
}

/* ─── Worked Example ─── */
function WorkedExample({ title, problem, solution }: { title: string; problem: string; solution: string }) {
  return (
    <div
      className="my-4 p-5"
      style={{
        background: 'var(--paper)',
        borderLeft: '3px solid var(--accent-rust)',
      }}
    >
      <p className="text-ui-sm mb-2" style={{ color: 'var(--accent-rust)', fontWeight: 600 }}>
        {title}
      </p>
      <p className="text-body-md mb-3" style={{ color: 'var(--ink-secondary)' }}>
        <strong>题目：</strong>{problem}
      </p>
      <p className="text-body-md" style={{ color: 'var(--ink)', fontFamily: 'Source Serif 4, Georgia, serif' }}>
        <strong>解答：</strong>{solution}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════ */

export default function Vol3Pharmacy1() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={pageRef}>
      {/* ═══════ VOLUME COVER ═══════ */}
      <VolumeCover
        volumeNum="III"
        volumeRoman="III"
        title="药学专业知识（一）精讲"
        subtitle="PHARMACEUTICS & MEDICINAL CHEMISTRY"
        metadata="18 章节 · 52 对比表格 · 12 组记忆口诀 · 四大专题"
        bgColor="var(--paper)"
      />

      {/* ═══════ LEAD ARTICLE ═══════ */}
      <section className="max-w-content mx-auto px-6 py-20" style={{ background: 'var(--paper)' }}>
        <ScrollReveal>
          <DropCap letter="药">
            学专业知识（一）是2026年执业药师西药类考试中内容最广、变化最大的一科。
            从8章扩展至9章，新增"生命药学"专题，全书增加25.5万字。药剂学部分占分最高（约35分），
            药物化学部分难度最大（约27分），药动学部分是计算题集中区（约15分）。
            本章以"表格对比+口诀记忆+计算示范"三位一体模式，帮你构建替代教材的完整知识体系。
            机考100题/90分钟，每题54秒，要求对核心知识点达到条件反射级别的熟练度。
          </DropCap>
        </ScrollReveal>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { label: '药剂学', value: '~35分', desc: '固体制剂、液体制剂、无菌制剂' },
            { label: '药物化学', value: '~27分', desc: '结构识别、构效关系、前药设计' },
            { label: '药动学+药效学', value: '~15分', desc: '参数计算、给药方案设计' },
          ].map((item) => (
            <ScrollReveal key={item.label}>
              <div
                className="p-5 text-center"
                style={{ border: '1px solid var(--border)', background: 'var(--paper-dark)' }}
              >
                <p className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>{item.label}</p>
                <p className="font-display text-display-md my-2" style={{ color: 'var(--accent-rust)' }}>
                  {item.value}
                </p>
                <p className="text-body-sm" style={{ color: 'var(--ink-secondary)' }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════ PART I: 药剂学 ═══════ */}
      <PartDivider data={partDividers[0]} />

      {/* ─── Section 1: 药品质量标准与药物分析 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper)' }}>
        <ScrollReveal>
          <SectionHeader num="01" label="药品质量标准" title="药品质量标准与药物分析" />
        </ScrollReveal>

        <ScrollReveal>
          <DropCap letter="鉴">
            别（Identification）是确认药物真伪的试验，药典收载的鉴别方法分为三大类。
            鉴别试验的原则是：用不同原理的方法进行双重或多重验证，确保确证性。
            分析方法选择遵循"先简后繁"原则——化学法是首选筛选方法，当化学法不足以确证时，
            需采用光谱法或色谱法。
          </DropCap>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            药品鉴别方法对比
          </h3>
          <ComparisonTable columns={identificationMethodsColumns} rows={identificationMethodsRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            含量测定方法选择
          </h3>
          <ComparisonTable columns={contentDeterminationColumns} rows={contentDeterminationRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <MemoryCard
            mnemonic="原料纯，滴定准；制剂杂，HPLC；挥发物，GC来。"
            explanation="原料药首选容量法（准确度高±0.5%），制剂首选HPLC（高专属性），挥发性药物用GC。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            杂质限量计算公式（★必考）
          </h3>
          <FormulaBlock>
            <p className="text-body-xl text-center" style={{ color: 'var(--ink)' }}>
              L(%) = (C × V) / S × 100%
            </p>
            <p className="text-body-sm mt-3 text-center" style={{ color: 'var(--ink-secondary)' }}>
              L = 杂质限量（%）；C = 标准溶液浓度；V = 标准溶液体积；S = 供试品量。注意单位统一为g或mg，1% = 10000 ppm。
            </p>
          </FormulaBlock>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <WorkedExample
            title="计算示范 ①"
            problem="检查某药物中的重金属，称取供试品2.0g，依法检查，与标准铅溶液（每1ml相当于10μg的Pb）2.0ml用同法制成的对照液比较，不得更深。求重金属限量。"
            solution="L = (10 μg/ml × 2.0 ml) / (2.0 × 10⁶ μg) × 100% = 20 / (2×10⁶) × 100% = 0.001%"
          />
          <WorkedExample
            title="计算示范 ②"
            problem="检查氯化钠中的砷盐，规定含砷量不得过0.0004%，取标准砷溶液2.0ml（每1ml相当于1μg的As）制备标准砷斑，应取供试品多少克？"
            solution="S = (C × V) / L = (1 μg/ml × 2.0 ml) / 0.000004 = 500000 μg = 0.5 g"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="warning"
            text="计算时最容易出错的是单位换算。标准溶液浓度常以μg/ml给出，供试品量以g给出，需要将g换算为μg（1g = 10⁶μg）。另一个常见错误是混淆供试品量S和标准溶液体积V的位置——分子是标准溶液带入的杂质量（C×V），分母是供试品总量（S）。"
          />
        </ScrollReveal>
      </section>

      {/* ─── Section 2: 药物剂型概论 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper-dark)' }}>
        <ScrollReveal>
          <SectionHeader num="02" label="药物剂型" title="常用剂型分类与特点" />
        </ScrollReveal>

        <ScrollReveal>
          <DropCap letter="剂">
            型是药物应用于临床的载体形式。不同剂型影响药物的吸收速度、生物利用度和给药途径。
            固体制剂是临床应用最广泛的剂型，其中片剂工艺最成熟、生产自动化程度最高。
            理解各类剂型的特点，是合理用药和制剂设计的基础。
          </DropCap>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            常用剂型对比
          </h3>
          <ComparisonTable columns={dosageFormsColumns} rows={dosageFormsRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            固体制剂体内过程
          </h3>
          <p className="text-body-lg mb-4" style={{ color: 'var(--ink-secondary)' }}>
            口服固体制剂的吸收经历三个步骤：崩解（disintegration）→ 溶出（dissolution）→ 吸收（absorption）。
            因此，固体制剂的吸收速度受崩解速度和溶出速度的双重影响。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="口服注射和吸入，栓剂贴剂和喷雾，剂型选择看病人，依从性是核心。"
            explanation="剂型选择需综合考虑患者年龄、意识状态、依从性等因素。"
          />
        </ScrollReveal>
      </section>


      {/* ─── Section 2b: 固体制剂详细对比 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper)' }}>
        <ScrollReveal>
          <SectionHeader num="02b" label="固体制剂" title="固体制剂分类与特点" />
        </ScrollReveal>

        <ScrollReveal>
          <DropCap letter="固">
            体制剂是药剂学中考查最多的内容，其核心规律是"粒径越小、分散度越大、吸收越快"。
            固体剂型吸收顺序：散剂 {'>'} 颗粒剂 {'>'} 胶囊剂 {'>'} 片剂 {'>'} 丸剂。
            片剂需经历"崩解→溶出→吸收"三步，是固体制剂中工艺最成熟、生产自动化程度最高的剂型。
          </DropCap>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            固体制剂对比
          </h3>
          <ComparisonTable columns={solidDosageColumns} rows={solidDosageRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="散粒胶丸片"
            explanation="固体制剂吸收顺序：散剂吸收最快（粉碎程度最大），丸剂吸收最慢（赋形剂多、硬度大）。口诀：散>粒>胶>丸>片"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            片剂四大辅料分类速记表
          </h3>
          <ComparisonTable columns={excipientColumns} rows={excipientRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="warning"
            text="MCC（微晶纤维素，填充剂）vs CMC-Na（羧甲基纤维素钠，黏合剂）——缩写仅一个字母之差但功能完全不同。CMS-Na（崩解剂，淀粉类）vs CMC-Na（黏合剂，纤维素类）——第二个字母S=淀粉，C=纤维素。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            片剂崩解时限汇总表与口诀
          </h3>
          <ComparisonTable columns={disintegrationColumns} rows={disintegrationRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="舌泡五分普一刻，三三十分刻薄，六十定位常趟河。"
            explanation="舌=舌下片（5min），泡=泡腾片（5min）；普=普通片（15min）；三三=可溶片/分散片（3min）+薄膜衣片/含片（30min），薄=薄膜衣片，刻=含片；六十=糖衣片（60min），定位=结肠定位肠溶片，常=肠溶片，趟=糖衣片。"
          />
        </ScrollReveal>
      </section>
      {/* ─── Section 3: 制剂工艺与稳定性 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper)' }}>
        <ScrollReveal>
          <SectionHeader num="03" label="制剂工艺" title="制剂稳定性与有效期" />
        </ScrollReveal>

        <ScrollReveal>
          <DropCap letter="药">
            物稳定性试验包括影响因素试验、加速试验和长期试验三类。
            稳定性研究贯穿药品全生命周期，从处方筛选到贮藏运输都需考虑。
            有效期计算是必考计算题类型。
          </DropCap>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            有效期计算公式
          </h3>
          <FormulaBlock>
            <p className="text-body-xl text-center" style={{ color: 'var(--ink)' }}>
              t₀.₉ = 0.1054 / k
            </p>
            <p className="text-body-sm mt-3 text-center" style={{ color: 'var(--ink-secondary)' }}>
              t₀.₉ = 有效期（药物降解10%所需时间）；k = 一级反应速率常数。对应半衰期：t₁/₂ = 0.693 / k
            </p>
          </FormulaBlock>
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <WorkedExample
            title="有效期计算"
            problem="某药物25℃时速率常数k = 2.0 × 10⁻⁵ h⁻¹，求有效期（以天表示）。"
            solution="t₀.₉ = 0.1054 / (2.0 × 10⁻⁵) = 5270小时 ≈ 219.6天 ≈ 7.3个月"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="key"
            text="药物稳定性试验包括：①影响因素试验（高温、高湿、强光）——筛选处方；②加速试验（40°C±2°C、RH75%±5%，6个月）——预测稳定性；③长期试验（25°C±2°C、RH60%±10%，≥12个月）——确定最终有效期。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="处方因素内部找：pH溶剂离子强，表面活性辅料包。外界因素外部环境：温湿光氧金宝财，包装材料别忘掉。"
            explanation="处方因素（内部）：pH、溶剂、离子强度、表面活性剂、辅料、包材；外界因素：温度、湿度、光线、氧气、金属离子、包装材料。"
          />
        </ScrollReveal>
      </section>


      {/* ─── Section 3b: 液体制剂与半固体制剂 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper-dark)' }}>
        <ScrollReveal>
          <SectionHeader num="03b" label="液体制剂" title="表面活性剂与乳剂" />
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-body-lg" style={{ color: 'var(--ink-secondary)' }}>
            表面活性剂（Surfactant）是液体制剂中的核心辅料，分子具有两亲性结构——亲水基团和亲油基团。
            HLB值（亲水亲油平衡值）是衡量表面活性剂亲水性与亲油性相对强弱的指标。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            表面活性剂分类与HLB值
          </h3>
          <ComparisonTable columns={surfactantColumns} rows={surfactantRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="阳阴两非毒性降"
            explanation="表面活性剂毒性顺序：阳离子型 > 阴离子型 > 两性离子型 > 非离子型。阳离子型（如苯扎氯铵）只能外用；非离子型毒性最小，可用于口服和注射。静脉乳剂只能用卵磷脂或泊洛沙姆F68。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            乳剂不稳定现象对比
          </h3>
          <ComparisonTable columns={emulsionInstabilityColumns} rows={emulsionInstabilityRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="key"
            text="六种不稳定现象中，只有分层与絮凝是可逆的（振摇后可恢复均匀）。转相、合并、破裂和酸败均为不可逆变化，一旦发生乳剂即不能使用。"
          />
        </ScrollReveal>
      </section>

      {/* ─── Section 3c: 无菌制剂 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper)' }}>
        <ScrollReveal>
          <SectionHeader num="03c" label="无菌制剂" title="制药用水与热原" />
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-body-lg" style={{ color: 'var(--ink-secondary)' }}>
            制药用水的分类和用途是无菌制剂考试的高频考点。热原（Pyrogen）是微生物产生的内毒素，
            主要成分为脂多糖（LPS），注入人体后可引起发热反应。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            制药用水对比
          </h3>
          <ComparisonTable columns={pharmaceuticalWaterColumns} rows={pharmaceuticalWaterRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="warning"
            text="纯化水绝对不可用于注射剂配制——注射剂必须用注射用水（蒸馏水）配制，因为蒸馏过程可以除去热原（热原虽溶于水但不挥发，留在蒸馏残液中）。灭菌注射用水不含抑菌剂，不适合大量配制。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            热原性质与除去方法
          </h3>
          <ComparisonTable columns={pyrogenColumns} rows={pyrogenRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="热原热原脂多糖，耐热吸附可滤亡。不耐酸碱强氧化，不挥水溶性质强。"
            explanation="热原=脂多糖，性质：耐热、可被吸附、可滤过；不耐强酸碱强氧化；不挥发、水溶性。除去方法：热吸酸碱反渗透，凝胶超滤离子帮。"
          />
        </ScrollReveal>
      </section>

      {/* ─── Section 3d: 新型给药系统 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper-dark)' }}>
        <ScrollReveal>
          <SectionHeader num="03d" label="新型给药" title="缓控释制剂分类" />
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-body-lg" style={{ color: 'var(--ink-secondary)' }}>
            缓释制剂（Sustained-release）和控释制剂（Controlled-release）的核心目的是延长药物作用时间、
            减少给药次数、平稳血药浓度（避免峰谷现象）、提高患者依从性。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            缓控释制剂分类对比
          </h3>
          <ComparisonTable columns={controlledReleaseColumns} rows={controlledReleaseRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="key"
            text="渗透泵型控释制剂是目前技术最先进的口服控释系统，以渗透压为唯一驱动力，零级释药，不受胃肠道pH和蠕动的影响。缓释制剂和控释制剂不可掰开或嚼碎服用（除非制剂设计允许），否则会导致药物突释（dose dumping）。"
          />
        </ScrollReveal>
      </section>
      {/* ═══════ PART II: 药物化学 ═══════ */}
      <PartDivider data={partDividers[1]} />

      {/* ─── Section 4: 药物化学基础 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper)' }}>
        <ScrollReveal>
          <SectionHeader num="04" label="药物化学" title="药物结构与药效关系基础" />
        </ScrollReveal>

        <ScrollReveal>
          <DropCap letter="化">
            学结构决定药物的一切性质。药物化学在西药一中预估占27分，是难度最大、分值最高的部分。
            学习的核心逻辑是"识别母核→分析官能团→推断活性"。官能团对生物活性的影响是每年必考考点。
          </DropCap>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            常见官能团与药效关系
          </h3>
          <ComparisonTable columns={functionalGroupColumns} rows={functionalGroupRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            药物键合类型与生物活性
          </h3>
          <ComparisonTable columns={bondingTypesColumns} rows={bondingTypesRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            I相/II相代谢反应对比
          </h3>
          <ComparisonTable columns={metabolismPhaseColumns} rows={metabolismPhaseRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="II相四大两小：四大（都带'酸'，极性大）——葡萄糖醛酸结合、硫酸结合、氨基酸结合、谷胱甘肽结合；两小（基团小，极性小）——乙酰化、甲基化。"
            explanation="四大反应使药物水溶性显著增加，易于经肾脏排泄；两小反应可能降低水溶性（如乙酰化后的对氨基水杨酸溶解度降低）。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="key"
            text="手性药物的对映体可能具有完全不同的药理活性——如沙利度胺，R-对映体有镇静作用，S-对映体有致畸作用。布洛芬S-异构体活性比R-强28倍，但临床用消旋体，因为R-可在体内转化为S-异构体。"
          />
        </ScrollReveal>
      </section>

      {/* ─── Section 5: CYP450酶系与前药设计 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper-dark)' }}>
        <ScrollReveal>
          <SectionHeader num="05" label="代谢酶系" title="CYP450酶系核心考点" />
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-body-lg" style={{ color: 'var(--ink-secondary)' }}>
            CYP450酶系（细胞色素P450）是连接药一、药二、药综的超级枢纽考点（预计5-8分），
            参与约75%临床药物的代谢。掌握它就等于掌握了药物相互作用的核心密码。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            CYP450五大亚型底物/抑制剂/诱导剂
          </h3>
          <ComparisonTable columns={cyp450Columns} rows={cyp450Rows} />
        </ScrollReveal>

        <ScrollReveal className="mt-8 grid md:grid-cols-2 gap-4">
          <MemoryCard
            mnemonic="灰黄土地诱惑大，两本就能卡一利，水喽！"
            explanation="CYP450诱导剂：灰黄霉素、苯巴比妥（本）、苯妥英钠（本）、卡马西平（卡）、利福平（利）、水合氯醛（水）"
          />
          <MemoryCard
            mnemonic="铜绿分别多可西，情绪难免受抑制"
            explanation="CYP450抑制剂：酮康唑（铜谐音）、氯霉素（绿谐音）、西咪替丁（西）、异烟肼（抑制谐音）"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="warning"
            text="CYP3A4参与约50%药物代谢，葡萄柚汁是其强抑制剂。奥美拉唑（CYP2C19抑制剂）与氯吡格雷（需经2C19活化）联用会降低抗血小板效果，临床应避免联用。"
          />
        </ScrollReveal>

        <SectionDivider />

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            前药设计原理与典型实例
          </h3>
          <ComparisonTable columns={prodrugColumns} rows={prodrugRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="赖卡不是前药"
            explanation="ACEI类药物中，卡托普利和赖诺普利是唯一两个不是前药的ACEI（以活性形式直接发挥作用），其余均为前药。卡托普利的巯基和赖诺普利的二羧基直接具有抑制ACE的活性。"
          />
        </ScrollReveal>
      </section>


      {/* ─── Section 5b: 典型药物结构特征 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper)' }}>
        <ScrollReveal>
          <SectionHeader num="05b" label="结构识别" title="典型药物结构特征（★高频考点）" />
        </ScrollReveal>

        <ScrollReveal>
          <DropCap letter="结">
            构识别是药物化学的核心考查形式。机考下（54秒/题），药物结构识别题需要快速、准确的解题方法。
            推荐"三步法"：第一步找母核，第二步找特征基团，第三步匹配名称。
          </DropCap>
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="key"
            text="药物结构识别三步法：①找母核（识别骨架结构，如1,4-苯二氮卓环→西泮/唑仑类；1,4-二氢吡啶环→地平类；β-内酰胺四元环→青霉素/头孢）；②找特征基团（识别侧链或取代基）；③匹配名称（母核+特征基团→确定药物名称）。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            苯二氮卓类构效关系
          </h3>
          <ComparisonTable columns={benzodiazepineColumns} rows={benzodiazepineRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="七位吸电活性增，一位去甲代谢行，三位羟基奥沙生，并上三氮唑仑成。"
            explanation="苯二氮卓构效关系：7位吸电子基增强活性；1位N-去甲基产生活性代谢物（地西泮→去甲西泮）；3位羟基化生成奥沙西泮；1,2位并三氮唑环生成唑仑类（阿普唑仑、艾司唑仑）。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            心血管药物结构识别
          </h3>
          <ComparisonTable columns={cardiovascularColumns} rows={cardiovascularRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="普利巯磷ACE抑，沙坦联苯阻受体，他汀十氢调血脂，地平二氢钙阻滞。"
            explanation="普利类含巯基/磷酰基/二羧基→抑制ACE；沙坦类含联苯+四氮唑→阻断AT₁受体；他汀类含十氢化萘+3,5-二羟基羧酸→抑制HMG-CoA还原酶；地平类含1,4-二氢吡啶→阻断钙通道。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            抗菌药物结构对比
          </h3>
          <ComparisonTable columns={antibioticColumns} rows={antibioticRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="key"
            text={'β-内酰胺环识别（★★★核心考点）：所有β-内酰胺类抗生素均含四元β-内酰胺环。青霉素类的稠合环为氢化噻唑环（五元含硫），头孢菌素类为氢化噻嗪环（六元含硫）。记住「青五头六」——青霉素五元稠环，头孢六元稠环。'}
          />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            母核识别口诀速查表
          </h3>
          <ComparisonTable columns={structureRecognitionColumns} rows={structureRecognitionRows} />
        </ScrollReveal>
      </section>
      {/* ═══════ PART III: 药效学与药动学 ═══════ */}
      <PartDivider data={partDividers[2]} />

      {/* ─── Section 8: 药效学基础 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper)' }}>
        <ScrollReveal>
          <SectionHeader num="06" label="药效学" title="药效学核心概念" />
        </ScrollReveal>

        <ScrollReveal>
          <DropCap letter="效">
            能（Efficacy）和效价强度（Potency）是两个完全不同的概念，考试中经常混淆。
            效能高指药物能产生的最大效应大，效价强指产生特定效应所需的剂量小。
            激动剂既有亲和力又有内在活性，拮抗剂有亲和力但无内在活性。
          </DropCap>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            受体药物相互作用分类
          </h3>
          <ComparisonTable columns={pharmacodynamicsColumns} rows={pharmacodynamicsRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="竞争性占座（抢椅子），非竞争性砸椅子"
            explanation="竞争性拮抗剂只是占据受体位置（抢椅子），增加激动剂浓度可以把拮抗剂挤走，最大效应不变；非竞争性拮抗剂改变了受体本身（把椅子砸了），即使加再多激动剂也达不到原来的最大效应，所以Emax下降。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="向下脱敏耐受来，向上增敏反跳现"
            explanation="向下调节（受体脱敏）→长期使用激动剂→受体数目减少→耐受性；向上调节（受体增敏）→长期使用拮抗剂→受体数目增加→突然停药后反跳。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="warning"
            text="效能高≠效价强。吗啡镇痛效能高于可待因（吗啡能缓解重度疼痛而可待因只能缓解中度疼痛），这是效能差异。临床上更关注效能（能否达到治疗效果），效价强度主要影响剂量设计。"
          />
        </ScrollReveal>
      </section>

      {/* ─── Section 7: 药动学核心参数 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper-dark)' }}>
        <ScrollReveal>
          <SectionHeader num="07" label="药动学" title="药动学核心参数与计算" />
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-body-lg" style={{ color: 'var(--ink-secondary)' }}>
            药动学参数是连接理论与临床的桥梁，也是计算题的集中区。要求做到看到题目就能写出公式、
            代入数据、算出结果。以下七个公式必须熟练掌握。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            药动学核心参数速查
          </h3>
          <ComparisonTable columns={pkParametersColumns} rows={pkParametersRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            七个关键公式汇总
          </h3>
          <FormulaBlock>
            <div className="grid md:grid-cols-2 gap-4 text-body-md" style={{ color: 'var(--ink)' }}>
              <p>① t₁/₂ = 0.693 / k</p>
              <p>② t₀.₉ = 0.1054 / k</p>
              <p>③ k = 0.693 / t₁/₂</p>
              <p>④ F = (AUCpo × Div) / (AUCiv × Dpo) × 100%</p>
              <p>⑤ Vd = X₀ / C₀</p>
              <p>⑥ CL = k × Vd = 0.693 × Vd / t₁/₂</p>
              <p>⑦ fss = 1 - (1/2)ⁿ</p>
            </div>
          </FormulaBlock>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            稳态血药浓度——达坪分数
          </h3>
          <ComparisonTable columns={steadyStateColumns} rows={steadyStateRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <MemoryCard
            mnemonic="一个半衰50%，两个75%，五个达稳态"
            explanation="连续多次给药后，每隔一个半衰期，血药浓度向稳态接近一半。1个t₁/₂达50%稳态，2个达75%，3个达87.5%，4个达93.75%，5个达约97%（临床认为已达稳态）。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            计算题专练
          </h3>
          <WorkedExample
            title="生物利用度计算"
            problem="某药物静脉注射10mg的AUC为100 μg·h/ml，口服20mg的AUC为160 μg·h/ml，求绝对生物利用度。"
            solution="F = (160 × 10) / (100 × 20) × 100% = 1600/2000 × 100% = 80%"
          />
          <WorkedExample
            title="半衰期与给药方案"
            problem="某药物半衰期为8小时，若每8小时给药一次，首剂应给予多少倍维持量可快速达稳态？经多长时间可达稳态？"
            solution="当τ = t₁/₂时，负荷剂量 = 2 × 维持剂量。达稳态时间 = 4~5 × t₁/₂ = 32~40小时。"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="warning"
            text="计算生物利用度时必须进行剂量校正——公式中是AUCpo×Div除以AUCiv×Dpo。忘记剂量校正是最常见的错误。如果剂量相同，可简化为F = (AUCpo/AUCiv) × 100%。"
          />
        </ScrollReveal>
      </section>

      {/* ═══════ PART IV: 生命药学专题 ═══════ */}
      <PartDivider data={partDividers[3]} />

      {/* ─── Section 9: 生命药学专题 ─── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper)' }}>
        <ScrollReveal>
          <SectionHeader num="08" label="生命药学" title="2026新增·免疫学与病理生理学" />
        </ScrollReveal>

        <ScrollReveal>
          <DropCap letter="生">
            命药学是2026年西药一新增章节，涵盖病理生理学、免疫学和微生物学三大模块。
            这一新增内容不仅是西药一的独立考点（预计10-15分），更为西药二的免疫治疗、
            抗感染药物和西药综合的临床用药管理提供了基础理论支撑。
          </DropCap>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            T细胞亚群功能对比（★高频考点）
          </h3>
          <ComparisonTable columns={tCellColumns} rows={tCellRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            PD-1/PD-L1免疫检查点机制（★★★必考）
          </h3>
          <div
            className="p-6 my-4"
            style={{ background: 'var(--paper-dark)', border: '1px solid var(--border)' }}
          >
            <p className="text-body-lg" style={{ color: 'var(--ink)' }}>
              PD-1（程序性死亡受体-1）是T细胞表面的<strong>抑制性受体</strong>，其配体PD-L1在肿瘤细胞表面高表达。
              当PD-1与PD-L1结合时，T细胞的抗肿瘤活性被"刹车"抑制，肿瘤细胞借此实现<strong>免疫逃逸</strong>。
            </p>
            <p className="text-body-lg mt-3" style={{ color: 'var(--ink)' }}>
              <strong>PD-1抑制剂</strong>（帕博利珠单抗、纳武利尤单抗）或<strong>PD-L1抑制剂</strong>（阿替利珠单抗、度伐利尤单抗）
              通过阻断PD-1/PD-L1相互作用，解除T细胞的抑制状态，恢复其对肿瘤细胞的杀伤功能。
            </p>
            <p className="text-body-md mt-3" style={{ color: 'var(--ink-secondary)' }}>
              不良反应主要是<strong>免疫相关不良反应（irAEs）</strong>：免疫性肺炎、免疫性肝炎、免疫性甲状腺炎、免疫性结肠炎、皮疹等。
              严重irAEs需停药并给予糖皮质激素。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <h3 className="font-chinese-serif text-body-xl mb-4" style={{ color: 'var(--ink)' }}>
            超敏反应类型
          </h3>
          <ComparisonTable columns={hypersensitivityColumns} rows={hypersensitivityRows} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <KeyPointBadge
            type="key"
            text={'Th1/Th2平衡是免疫调节的核心。Th1偏向细胞免疫（对抗病毒和胞内菌），Th2偏向体液免疫（产生抗体）。Th17异常活化与银屑病、类风湿关节炎密切相关。Treg的功能是「踩刹车」，防止免疫过度活化。'}
          />
        </ScrollReveal>
      </section>

      {/* ═══════ 记忆口诀总表 ═══════ */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper-dark)' }}>
        <ScrollReveal>
          <SectionHeader num="09" label="速记口诀" title="西药一记忆口诀总表" />
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-body-lg mb-8" style={{ color: 'var(--ink-secondary)' }}>
            以下12组口诀覆盖西药一90%以上的高频记忆考点。口诀是机考环境下快速回忆的利器，
            建议每天朗读一遍，形成条件反射。
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {memoryCardsData.slice(0, 8).map((card, i) => (
            <ScrollReveal key={i}>
              <MemoryCard mnemonic={card.mnemonic} explanation={card.explanation} />
            </ScrollReveal>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {memoryCardsData.slice(8).map((card, i) => (
            <ScrollReveal key={i}>
              <MemoryCard mnemonic={card.mnemonic} explanation={card.explanation} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════ 易错点警示 ═══════ */}
      <section
        className="w-full py-16"
        style={{ background: 'var(--accent-olive)', color: 'var(--paper)' }}
      >
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal>
            <div className="mb-10">
              <span className="font-display text-ui-md" style={{ opacity: 0.7 }}>10</span>
              <h2
                className="font-chinese-serif text-display-sm mt-2"
                style={{ color: 'var(--paper)' }}
              >
                西药一易错点警示
              </h2>
              <div
                className="mt-4"
                style={{ width: '40px', height: '2px', background: 'var(--paper)', opacity: 0.5 }}
              />
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {warningPointsData.map((wp, i) => (
              <ScrollReveal key={i}>
                <div
                  className="p-4"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderLeft: '3px solid var(--paper)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-ui-sm font-semibold"
                      style={{ color: 'var(--paper)', opacity: 0.8 }}
                    >
                      易错点 {i + 1}
                    </span>
                  </div>
                  <p className="text-body-md" style={{ color: 'var(--paper)', lineHeight: 1.7 }}>
                    {wp.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 重点速查 ═══════ */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper)' }}>
        <ScrollReveal>
          <SectionHeader num="11" label="重点速查" title="核心重点汇总" />
        </ScrollReveal>

        <div className="space-y-4">
          {keyPointsData.map((kp, i) => (
            <ScrollReveal key={i}>
              <KeyPointBadge type="key" text={kp.text} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════ 核心数字考点 ═══════ */}
      <section className="max-w-[1100px] mx-auto px-6 py-20" style={{ background: 'var(--paper-dark)' }}>
        <ScrollReveal>
          <SectionHeader num="12" label="数字考点" title="西药一核心数字速查" />
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-body-lg mb-8" style={{ color: 'var(--ink-secondary)' }}>
            以下数字是西药一考试中最常出现的核心数据，建议精准记忆——机考中数字题通常只需记住数字就能秒选。
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { num: '3分钟', desc: '可溶片、分散片崩解时限' },
            { num: '5分钟', desc: '舌下片、泡腾片崩解时限' },
            { num: '15分钟', desc: '普通片崩解时限' },
            { num: '30分钟', desc: '薄膜衣片、含片、硬胶囊崩解时限' },
            { num: '60分钟', desc: '糖衣片崩解时限' },
            { num: 't₀.₉=0.1054/k', desc: '有效期计算公式' },
            { num: 't₁/₂=0.693/k', desc: '半衰期计算公式' },
            { num: 'HLB 3~6', desc: 'W/O型乳化剂' },
            { num: 'HLB 8~18', desc: 'O/W型乳化剂' },
            { num: '4~5个t₁/₂', desc: '达稳态时间' },
            { num: '0.9% NaCl', desc: '等渗标准' },
            { num: 'pH 4~9', desc: '注射剂pH范围' },
          ].map((item, i) => (
            <ScrollReveal key={i}>
              <div
                className="p-4 text-center"
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--border)',
                }}
              >
                <p className="font-display text-display-sm" style={{ color: 'var(--accent-rust)' }}>
                  {item.num}
                </p>
                <p className="text-body-sm mt-1" style={{ color: 'var(--ink-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════ NEXT VOLUME NAV ═══════ */}
      <section
        className="w-full py-16"
        style={{ background: 'var(--paper)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-content mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-ui-sm uppercase" style={{ color: 'var(--ink-tertiary)', letterSpacing: '0.1em' }}>
              下一册
            </p>
            <h2
              className="font-chinese-serif text-display-sm mt-3"
              style={{ color: 'var(--ink)' }}
            >
              药学专业知识（二）精讲
            </h2>
            <p className="text-body-lg mt-3" style={{ color: 'var(--ink-secondary)' }}>
              各系统药物、抗菌药、抗肿瘤药详解
            </p>
            <Link
              to="/vol/4"
              className="inline-block mt-6 px-8 py-3 text-ui-md transition-all duration-300 hover:opacity-80"
              style={{
                background: 'var(--accent-rust)',
                color: 'var(--paper)',
              }}
            >
              继续阅读 →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
