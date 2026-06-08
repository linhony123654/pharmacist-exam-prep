import { useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Shield, FileText, Activity, CheckSquare, Square,
  ChevronDown, ChevronUp,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';

import VolumeCover from '@/components/VolumeCover';
import SectionDivider from '@/components/SectionDivider';
import ComparisonTable from '@/components/ComparisonTable';
import MemoryCard from '@/components/MemoryCard';
import KeyPointBadge from '@/components/KeyPointBadge';
import DropCap from '@/components/DropCap';
import ScrollReveal from '@/components/ScrollReveal';

import {
  prescriptionAuditItems,
  fourChecksTenMatches,
  prescriptionColors,
  cyp450Table,
  prescriptionReviewSystem,
  specialPopulationsTable,
  fdaPregnancyCategories,
  ctpScoringTable,
  driverDrugWarnings,
  athleteDrugWarnings,
  tdmDrugsTable,
  adrClassification,
  adrCausalityScale,
  adrReportingTimeline,
  pharmacovigilanceMethods,
  hypertensionComorbidity,
  heartFailureNewQuad,
  hpQuadTherapy,
  diabetesDrugPathway,
  asthmaManagement,
  copdBCA,
  utiTreatment,
  bphTreatment,
  gynecologicalDiseases,
  skinDiseases,
  new2026Diseases,
  caseStudyThreeSteps,
  caseStudyExample,
  memoryCardsAll,
  warningPoints,
  clinicalChecklist,
  threePillars,
  unsuitablePrescribing,
  keyPointTexts,
  fiveAntihypertensiveClasses,
  insomniaDrugs2026,
  whoAnalgesicLadder,
  caseStudies,
  seriesConclusion,
} from '@/data/vol5-content';

gsap.registerPlugin(ScrollTrigger);

/* ─── Part Divider Component ─── */
function PartDivider({ part, titleCn, titleEn, description, borderColor }: {
  part: string; titleCn: string; titleEn: string; description: string; borderColor: string;
}) {
  return (
    <div className="w-full py-16 px-6" style={{ background: 'var(--paper-dark)', borderTop: `3px solid ${borderColor}` }}>
      <div className="max-w-[1000px] mx-auto text-center">
        <p className="font-display text-ui-md uppercase mb-3" style={{ color: 'var(--accent-rust)', letterSpacing: '0.15em' }}>
          {part}
        </p>
        <h2 className="font-chinese-serif text-display-md mb-2" style={{ color: 'var(--ink)' }}>
          {titleCn}
        </h2>
        <p className="font-display text-body-lg uppercase" style={{ color: 'var(--ink-tertiary)' }}>
          {titleEn}
        </p>
        <p className="text-body-md mt-4" style={{ color: 'var(--ink-secondary)' }}>{description}</p>
      </div>
    </div>
  );
}

/* ─── Pillar Card ─── */
function PillarCard({ title, items, color, icon: Icon }: {
  title: string; items: readonly string[]; color: string; icon: React.ElementType;
}) {
  const borderColor = color === 'rust' ? 'var(--accent-rust)' : color === 'olive' ? 'var(--accent-olive)' : 'var(--accent-gold)';
  return (
    <div
      className="p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-editorial"
      style={{
        background: 'var(--paper-dark)',
        border: '1px solid var(--border)',
        borderTop: `3px solid ${borderColor}`,
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon size={20} style={{ color: borderColor }} />
        <h3 className="font-chinese-serif text-display-sm" style={{ color: 'var(--ink)' }}>{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-body-md" style={{ color: 'var(--ink-secondary)' }}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Clinical Checklist ─── */
function ClinicalChecklist() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => {
    const next = new Set(checked);
    if (next.has(i)) next.delete(i); else next.add(i);
    setChecked(next);
  };
  return (
    <div className="space-y-2 mt-8">
      <p className="text-ui-sm uppercase mb-4" style={{ color: 'var(--ink-tertiary)', letterSpacing: '0.05em' }}>
        处方审核完整清单（可交互勾选）
      </p>
      <ScrollReveal animation="fade-up-stagger" stagger={0.05}>
        {clinicalChecklist.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className="w-full flex items-start gap-3 text-left py-2 px-3 transition-colors hover:bg-[var(--paper-dark)]"
            style={{ borderLeft: '2px solid var(--border)' }}
          >
            {checked.has(i) ? (
              <CheckSquare size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--accent-olive)' }} />
            ) : (
              <Square size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--ink-quaternary)' }} />
            )}
            <span className={`text-body-md ${checked.has(i) ? 'line-through' : ''}`} style={{ color: checked.has(i) ? 'var(--ink-quaternary)' : 'var(--ink)' }}>
              {item}
            </span>
          </button>
        ))}
      </ScrollReveal>
    </div>
  );
}

/* ─── Case Study Card ─── */
function CaseStudyCard({ id, category, patient, prescription, problem, analysis }: {
  id: number; category: string; patient: string; prescription: string; problem: string; analysis: string;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-6 mb-6" style={{ border: '1px solid var(--border)', background: 'var(--paper)' }}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-ui-sm uppercase" style={{ color: 'var(--accent-rust)' }}>CASE STUDY {String(id).padStart(2, '0')}</span>
        <span className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>— {category}</span>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4 text-body-sm" style={{ color: 'var(--ink-secondary)' }}>
        <span><strong>患者：</strong>{patient}</span>
      </div>
      <div className="space-y-2">
        <p className="text-body-md" style={{ color: 'var(--ink)' }}><strong>处方：</strong>{prescription}</p>
        <p className="text-body-md" style={{ color: 'var(--ink-secondary)' }}><strong>问题：</strong>{problem}</p>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-1 text-ui-md transition-colors hover:underline"
        style={{ color: 'var(--accent-rust)' }}
      >
        {expanded ? '收起分析与解答' : '查看分析与解答'}
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {expanded && (
        <div className="mt-4 p-4" style={{ background: 'var(--paper-dark)', borderLeft: '3px solid var(--accent-rust)' }}>
          <p className="text-body-md" style={{ color: 'var(--ink)' }}>{analysis}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-display text-ui-md" style={{ color: 'var(--accent-rust)' }}>{number}</span>
        <span className="text-ui-sm uppercase" style={{ color: 'var(--ink-tertiary)', letterSpacing: '0.1em' }}>{label}</span>
      </div>
      <h2 className="font-chinese-serif text-display-md" style={{ color: 'var(--ink)' }}>{title}</h2>
      <div className="mt-4 h-px w-full" style={{ background: 'var(--border-light)' }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function Vol5Practice() {
  useGSAP(() => {
    gsap.from('.vol5-pillar-card', {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
      scrollTrigger: { trigger: '.vol5-pillars', start: 'top 80%', toggleActions: 'play none none none' },
    });
    gsap.from('.vol5-disease-flow', {
      y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: '.vol5-disease-flow-container', start: 'top 80%', toggleActions: 'play none none none' },
    });
  });

  return (
    <div className="w-full">
      {/* ═══════ SECTION 0: Volume Cover ═══════ */}
      <VolumeCover
        volumeNum="V"
        volumeRoman="V"
        title="药学综合知识与技能精讲"
        subtitle="PHARMACY PRACTICE & CLINICAL SKILLS"
        metadata="15 章节 · 28 对比表格 · 10 组记忆口诀 · 43种疾病 · 9个案例"
      />

      {/* ═══════ Lead Article ═══════ */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <DropCap letter="处">
              方审核、治疗药物监测、疾病管理方案与临床案例分析——药学综合知识与技能是执业药师考试中临床应用性最强的科目，是连接药学理论与临床实践的关键桥梁。本册内容涵盖处方审核规范（合法性+规范性+适宜性）、治疗药物监测（TDM）、43种疾病管理方案、药学服务基础以及案例分析解题方法，旨在将药学知识转化为临床实践能力。
            </DropCap>
          </ScrollReveal>
          <div className="mt-8">
            <KeyPointBadge type="key" text={keyPointTexts.soap} />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════ PART I: 处方审核与调剂 ═══════ */}
      <PartDivider
        part="PART I"
        titleCn="处方审核与调剂"
        titleEn="PRESCRIPTION REVIEW & DISPENSING"
        description="处方合法性、规范性、适宜性审核要点"
        borderColor="var(--accent-gold)"
      />

      {/* ─── Section 1: 处方审核规范 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader number="01" label="处方审核" title="处方审核规范（★超级考点）" />

          <ScrollReveal>
            <DropCap letter="处">
              方审核是西药综合的超级考点，融合法规+药二+药综三个科目知识，考试分值15-20分。处方审核包括三大审核类型：合法性审核（3项）、规范性审核（12项）、适宜性审核（9项）。掌握审核要点和分类归属是考试得分的关键。
            </DropCap>
          </ScrollReveal>

          {/* Three-Pillar Cards */}
          <div className="vol5-pillars grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
            {threePillars.map((pillar) => (
              <div key={pillar.title} className="vol5-pillar-card">
                <PillarCard
                  title={pillar.title}
                  items={pillar.items}
                  color={pillar.color}
                  icon={pillar.icon === 'shield' ? Shield : pillar.icon === 'file-text' ? FileText : Activity}
                />
              </div>
            ))}
          </div>

          {/* Legality Audit Table */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              合法性审核（3项）
            </h3>
            <ComparisonTable
              columns={[{ key: 'seq', header: '序号' }, { key: 'item', header: '审核项目' }, { key: 'points', header: '审核要点' }, { key: 'handling', header: '不合格处理' }]}
              rows={prescriptionAuditItems.legality}
            />
          </ScrollReveal>

          {/* Normative Audit Table */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              规范性审核（12项）
            </h3>
            <ComparisonTable
              columns={[{ key: 'seq', header: '序号' }, { key: 'item', header: '审核项目' }, { key: 'error', header: '常见错误' }]}
              rows={prescriptionAuditItems.normative}
            />
          </ScrollReveal>

          {/* Suitability Audit Table */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              适宜性审核（9项核心中的核心）
            </h3>
            <ComparisonTable
              columns={[{ key: 'seq', header: '序号' }, { key: 'item', header: '审核项目' }, { key: 'exam', header: '典型考点' }]}
              rows={prescriptionAuditItems.suitability}
            />
          </ScrollReveal>

          {/* Four Checks Ten Matches */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              四查十对详细内容
            </h3>
            <KeyPointBadge type="key" text={keyPointTexts.fourChecks} />
            <ComparisonTable
              columns={[{ key: 'check', header: '四查' }, { key: 'matches', header: '十对内容' }, { key: 'count', header: '数字速记' }]}
              rows={fourChecksTenMatches}
            />
            <MemoryCard mnemonic="方三品四配二合一" explanation="查处方对3项，查药品对4项，查配伍禁忌对2项，查用药合理性对1项——四查十对数字速记口诀" />
          </ScrollReveal>

          {/* Prescription Colors */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              处方颜色速查表
            </h3>
            <ComparisonTable
              columns={[{ key: 'type', header: '处方类型' }, { key: 'color', header: '印刷用纸颜色' }, { key: 'mark', header: '右上角标注' }, { key: 'limit', header: '用量限制' }, { key: 'storage', header: '保存期限' }]}
              rows={prescriptionColors}
            />
            <MemoryCard mnemonic="普精二类是白色，急黄儿绿麻一红" explanation="处方颜色速查——普通和精二为白色，急诊为淡黄色，儿科为淡绿色，麻精一为淡红色" />
          </ScrollReveal>

          {/* CYP450 Table */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              CYP450五大亚型底物/抑制剂/诱导剂速查表
            </h3>
            <ComparisonTable
              columns={[{ key: 'enzyme', header: '亚型' }, { key: 'substrates', header: '底物（被代谢药物）' }, { key: 'inhibitors', header: '强抑制剂' }, { key: 'inducers', header: '诱导剂' }]}
              rows={cyp450Table}
            />
            <MemoryCard mnemonic="酮氯吩别多可惜，情绪难免受抑制" explanation="CYP3A4抑制剂包括酮康唑、克拉霉素、红霉素等，这些药物会升高经3A4代谢药物的浓度" />
          </ScrollReveal>

          {/* Prescription Review System */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              处方点评制度
            </h3>
            <ComparisonTable
              columns={[{ key: 'type', header: '处方类型' }, { key: 'count', header: '项数' }, { key: 'examples', header: '重点内容' }]}
              rows={prescriptionReviewSystem}
            />
          </ScrollReveal>

          {/* Clinical Checklist */}
          <ScrollReveal>
            <ClinicalChecklist />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 2: 用药适宜性审核专项 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper-dark)' }}>
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader number="02" label="适宜性审核" title="用药适宜性审核专项" />

          <ScrollReveal>
            <DropCap letter="适">
              宜性审核是处方审核中最复杂、考试频率最高的部分。涉及用法用量审核、特殊人群用药调整、驾驶员与运动员用药禁忌等多个维度。2026年大纲新增的驾驶员/运动员用药禁忌为近年考试热点。
            </DropCap>
          </ScrollReveal>

          {/* Unsuitable Prescribing Table */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-10" style={{ color: 'var(--ink)' }}>
              常见用药不适宜情形
            </h3>
            <ComparisonTable
              columns={[{ key: 'type', header: '不适宜类型' }, { key: 'scenario', header: '具体情形' }, { key: 'example', header: '示例' }, { key: 'advice', header: '处理建议' }]}
              rows={unsuitablePrescribing}
            />
          </ScrollReveal>

          {/* Special Populations */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              特殊人群用药原则对比表
            </h3>
            <ComparisonTable
              columns={[{ key: 'population', header: '人群' }, { key: 'pkChanges', header: '药动学变化' }, { key: 'adjustments', header: '常见调整' }, { key: 'notes', header: '特别注意' }]}
              rows={specialPopulationsTable}
            />
          </ScrollReveal>

          {/* FDA Pregnancy */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              妊娠FDA用药分级
            </h3>
            <ComparisonTable
              columns={[{ key: 'grade', header: '分级' }, { key: 'definition', header: '定义' }, { key: 'examples', header: '代表药物' }]}
              rows={fdaPregnancyCategories}
            />
            <KeyPointBadge type="warning" text="他汀类中只有辛伐他汀和洛伐他汀为X级，并非所有他汀。利巴韦林是抗病毒药中典型的X级药物，无论男女，用药期间及停药后6个月内均需严格避孕。" />
          </ScrollReveal>

          {/* CTP Scoring */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              肝功能不全CTP评分与剂量调整
            </h3>
            <ComparisonTable
              columns={[{ key: 'grade', header: 'CTP分级' }, { key: 'score', header: '评分' }, { key: 'dose', header: '剂量调整' }, { key: 'note', header: '说明' }]}
              rows={ctpScoringTable}
            />
          </ScrollReveal>

          {/* Driver Warnings */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              驾驶员用药禁忌清单（2026新增考点）
            </h3>
            <KeyPointBadge type="key" text={keyPointTexts.driver} />
            <ComparisonTable
              columns={[{ key: 'effect', header: '影响类型' }, { key: 'drugClass', header: '药物类别' }, { key: 'examples', header: '代表药物' }]}
              rows={driverDrugWarnings}
            />
          </ScrollReveal>

          {/* Athlete Warnings */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              运动员用药禁忌
            </h3>
            <ComparisonTable
              columns={[{ key: 'category', header: '类别' }, { key: 'examples', header: '代表药物' }, { key: 'effect', header: '作用' }]}
              rows={athleteDrugWarnings}
            />
          </ScrollReveal>

          <ScrollReveal>
            <MemoryCard mnemonic="老小人孕肝肾损，用药调整要个体；减量起始缓加量，监测指标保安全" explanation="特殊人群用药调整的基本原则" />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ PART II: 治疗药物监测 ═══════ */}
      <PartDivider
        part="PART II"
        titleCn="治疗药物监测"
        titleEn="THERAPEUTIC DRUG MONITORING"
        description="TDM基础理论与临床应用"
        borderColor="var(--accent-olive)"
      />

      {/* ─── Section 3: TDM与药物警戒 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader number="03" label="TDM监测" title="治疗药物监测与药物警戒" />

          <ScrollReveal>
            <DropCap letter="治">
              疗药物监测（TDM）是应用微量分析技术测定血液及体液中药物浓度，在药代动力学理论指导下调整用药方案，使血药浓度控制在有效治疗范围内的技术。TDM对于治疗窗窄、个体差异大、非线性药动学特征的药物尤为重要。
            </DropCap>
          </ScrollReveal>

          {/* TDM Drugs Table */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-10" style={{ color: 'var(--ink)' }}>
              需TDM监测的核心药物速查表（考试必须熟记）
            </h3>
            <ComparisonTable
              columns={[
                { key: 'drug', header: '药物' },
                { key: 'window', header: '治疗浓度范围' },
                { key: 'timing', header: '采血时间' },
                { key: 'toxicity', header: '毒性浓度' },
              ]}
              rows={tdmDrugsTable}
            />
            <KeyPointBadge type="key" text={keyPointTexts.phenytoin} />
            <KeyPointBadge type="warning" text={keyPointTexts.digoxin} />
          </ScrollReveal>

          {/* ADR Classification */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              ADR分类（传统分类法）
            </h3>
            <ComparisonTable
              columns={[{ key: 'type', header: '类型' }, { key: 'feature', header: '特点' }, { key: 'examples', header: '举例' }]}
              rows={adrClassification}
            />
          </ScrollReveal>

          {/* ADR Causality */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              ADR因果关系评价6级标准
            </h3>
            <ComparisonTable
              columns={[{ key: 'level', header: '级别' }, { key: 'criteria', header: '判断要点' }, { key: 'flag', header: '考试识别标志' }]}
              rows={adrCausalityScale}
            />
            <KeyPointBadge type="warning" text="再次用药症状再现=肯定；无重复用药史=很可能。这是考试最常考的因果关系判断题。" />
          </ScrollReveal>

          {/* ADR Reporting Timeline */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              ADR报告时限
            </h3>
            <ComparisonTable
              columns={[{ key: 'scenario', header: '情形' }, { key: 'timeline', header: '报告时限' }, { key: 'mnemonic', header: '记忆要点' }]}
              rows={adrReportingTimeline}
            />
            <MemoryCard mnemonic="死亡立即新严十五，一般三十五年全报" explanation="死亡/群体事件立即报；新的/严重的15个工作日；非严重的30日；上市5年内全部报" />
          </ScrollReveal>

          {/* Pharmacovigilance Methods */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              药物警戒信号检测四种方法
            </h3>
            <ComparisonTable
              columns={[{ key: 'method', header: '方法' }, { key: 'abbr', header: '英文缩写' }, { key: 'note', header: '说明' }]}
              rows={pharmacovigilanceMethods}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ PART III: 疾病管理与用药指导 ═══════ */}
      <PartDivider
        part="PART III"
        titleCn="疾病管理与用药指导"
        titleEn="DISEASE MANAGEMENT & MEDICATION GUIDANCE"
        description="43种常见疾病的管理方案与用药指导"
        borderColor="var(--accent-rust)"
      />

      {/* ─── Section 4: 心血管系统 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper-dark)' }}>
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader number="04" label="心血管" title="心血管系统疾病管理" />

          <ScrollReveal>
            <DropCap letter="高">
              血压药物治疗是跨科目知识链的典范（药一结构→药二药理→药综临床选择），考试分值高。JNC8推荐一线降压药物为噻嗪类利尿剂、CCB、ACEI、ARB四大类。β受体阻滞剂退出一线，降至四线。
            </DropCap>
          </ScrollReveal>

          {/* Five Classes */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-10" style={{ color: 'var(--ink)' }}>
              五大类降压药特点速查
            </h3>
            <ComparisonTable
              columns={[{ key: 'className', header: '分类' }, { key: 'drugs', header: '代表药物' }, { key: 'adverseEffects', header: '主要不良反应' }, { key: 'keyword', header: '考试关键词' }]}
              rows={fiveAntihypertensiveClasses}
            />
            <KeyPointBadge type="warning" text="ACEI和ARB不建议联用，联用增加高钾血症和肾功能损害风险，且不增加降压获益。" />
          </ScrollReveal>

          {/* Hypertension Comorbidity */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              高血压合并症用药选择
            </h3>
            <ComparisonTable
              columns={[{ key: 'comorbidity', header: '合并症' }, { key: 'firstChoice', header: '首选药物' }, { key: 'contraindication', header: '禁用/慎用' }]}
              rows={hypertensionComorbidity}
            />
            <MemoryCard mnemonic="心肾糖尿用ACEI，老年黑人利尿剂，冠心病用β阻滞，前列腺增生α阻" explanation="高血压合并症用药选择口诀——糖尿病/肾病首选ACEI/ARB，老年首选CCB/利尿剂，冠心病选β阻滞剂，前列腺增生选α阻滞剂" />
          </ScrollReveal>

          {/* Heart Failure New Quad */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              心衰"新四联"方案（★核心考点）
            </h3>
            <KeyPointBadge type="key" text={keyPointTexts.hfNewQuad} />
            <ComparisonTable
              columns={[{ key: 'drugClass', header: '药物类别' }, { key: 'drug', header: '代表药物' }, { key: 'targetDose', header: '目标剂量' }, { key: 'effect', header: '作用' }]}
              rows={heartFailureNewQuad}
            />
            <MemoryCard mnemonic="新四联护心脏：沙库巴曲+美托洛尔，螺内酯+达格列净" explanation="心衰新四联方案——ARNI（沙库巴曲缬沙坦）+ β受体阻滞剂（美托洛尔）+ MRA（螺内酯）+ SGLT2抑制剂（达格列净）" />
            <KeyPointBadge type="warning" text="SGLT2抑制剂不仅用于糖尿病患者，所有HFrEF患者无论是否合并糖尿病都应使用，这是心衰治疗近年来的重大突破。" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 5: 消化系统 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader number="05" label="消化系统" title="消化系统疾病管理" />

          <ScrollReveal>
            <DropCap letter="消">
              化性溃疡和幽门螺杆菌（Hp）根除是消化系统药物治疗的考试核心。PPI（质子泵抑制剂）是首选抑酸药物，胃溃疡疗程6-8周，十二指肠溃疡疗程4-6周。
            </DropCap>
          </ScrollReveal>

          {/* Hp Quad Therapy */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-10" style={{ color: 'var(--ink)' }}>
              根除Hp铋剂四联方案（2026年指南推荐首选）
            </h3>
            <ComparisonTable
              columns={[{ key: 'component', header: '组成' }, { key: 'drug', header: '药物' }, { key: 'dose', header: '剂量' }, { key: 'note', header: '说明' }]}
              rows={hpQuadTherapy}
            />
            <p className="text-body-md mt-4" style={{ color: 'var(--ink-secondary)' }}>
              <strong>疗程：14天。</strong>阿莫西林是Hp根除方案中耐药率最低的抗生素，除非青霉素过敏，否则应优先选用。
            </p>
            <MemoryCard mnemonic="PPI铋剂两抗菌，阿莫克拉是首选；疗程十四别短了，根除Hp靠规范" explanation="幽门螺杆菌铋剂四联方案——PPI+铋剂+阿莫西林+克拉霉素，疗程14天" />
          </ScrollReveal>

          {/* GERD */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              胃食管反流病（GERD）治疗
            </h3>
            <p className="text-body-md mb-4" style={{ color: 'var(--ink-secondary)' }}>
              PPI是治疗GERD的首选药物。伴有食管炎的GERD治疗首选PPI，通常疗程4-8周。
            </p>
            <KeyPointBadge type="warning" text="PPI起效需数天，不能立即缓解急性症状。急性烧心时应先用抗酸药（如铝碳酸镁）快速中和胃酸，同时启动PPI治疗。" />
          </ScrollReveal>

          {/* Constipation & Diarrhea */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              便秘与腹泻药物选择
            </h3>
            <KeyPointBadge type="key" text="慢性便秘首选容积性泻药（聚卡波非钙）或渗透性泻药（乳果糖、聚乙二醇）。刺激性泻药（比沙可啶、番泻叶）仅短期使用，长期用可致结肠黑变病。急性感染性腹泻首选口服补液盐（ORS），预防脱水为首要措施。" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 6: 内分泌系统 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper-dark)' }}>
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader number="06" label="内分泌系统" title="内分泌系统疾病管理" />

          <ScrollReveal>
            <DropCap letter="糖">
              尿病药物治疗路径是考试必考内容。治疗路径为：生活方式干预→单药治疗（二甲双胍）→二联治疗→三联治疗→胰岛素治疗。二甲双胍是2型糖尿病的一线首选药物，若无禁忌证，应一直保留在糖尿病的治疗方案中。
            </DropCap>
          </ScrollReveal>

          {/* Diabetes Drug Pathway */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-10" style={{ color: 'var(--ink)' }}>
              口服降糖药分类及特点
            </h3>
            <ComparisonTable
              columns={[{ key: 'category', header: '分类' }, { key: 'drug', header: '代表药物' }, { key: 'mechanism', header: '作用机制' }, { key: 'keyPoints', header: '主要特点/考试要点' }]}
              rows={diabetesDrugPathway}
            />
            <MemoryCard mnemonic="二甲双胍是一线，肥胖GLP-1争先；心肾保护SGLT2，α糖苷降餐后；磺脲促泌低血糖，DPP-4安全好" explanation="2型糖尿病药物治疗路径速记" />
          </ScrollReveal>

          {/* Hypoglycemia 15-15 */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              低血糖处理15-15法则
            </h3>
            <KeyPointBadge type="key" text={keyPointTexts.fifteenFifteen} />
            <p className="text-body-md mt-4" style={{ color: 'var(--ink-secondary)' }}>
              <strong>严重低血糖</strong>（意识障碍不能口服）：胰高血糖素肌注或静注，或静脉推注50%葡萄糖。
            </p>
          </ScrollReveal>

          {/* Thyroid */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              甲状腺功能异常药物治疗
            </h3>
            <KeyPointBadge type="key" text="甲亢首选甲巯咪唑（MMI），妊娠早期首选丙硫氧嘧啶（PTU），甲状腺危象首选PTU（可抑制外周T4→T3）。甲减唯一选择左甲状腺素钠（L-T4），需空腹服用（早餐前30-60分钟），避免与钙剂、铁剂同服（间隔≥4小时）。" />
          </ScrollReveal>

          {/* Osteoporosis */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              骨质疏松治疗
            </h3>
            <KeyPointBadge type="key" text="骨质疏松药物治疗以钙+维生素D为基础，所有患者均需补充。双膦酸盐（阿仑膦酸钠）为一线抗骨质疏松药。口服阿仑膦酸钠时必须空腹、直立（坐位或站位）、大量清水送服，服药后30分钟内不能平卧或进食，以防食管刺激和溃疡。" />
            <MemoryCard mnemonic="钙D基础双膦酸，骨松治疗三件套；口服阿仑要直立" explanation="骨质疏松治疗——钙+维生素D为基础，双膦酸盐为一线；口服阿仑膦酸钠需空腹、直立、大量清水送服" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 7: 呼吸系统与神经系统 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader number="07" label="呼吸神经" title="呼吸系统与神经系统疾病管理" />

          {/* Asthma */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4" style={{ color: 'var(--ink)' }}>
              哮喘分级管理与用药
            </h3>
            <ComparisonTable
              columns={[{ key: 'level', header: '分级' }, { key: 'controlDrug', header: '控制药物' }, { key: 'reliefDrug', header: '缓解药物' }]}
              rows={asthmaManagement}
            />
            <KeyPointBadge type="key" text="急性发作首选吸入短效β2受体激动剂（SABA）——沙丁胺醇气雾剂。长期控制首选ICS+LABA联合。哮喘不能长期单用LABA，必须与ICS联合使用。" />
            <MemoryCard mnemonic="急性发作β2激动，长期控制吸入激素；夜间发作抗胆碱，预防过敏白三烯" explanation="哮喘药物治疗口诀——急性发作选SABA，长期控制选ICS+LABA" />
          </ScrollReveal>

          {/* COPD BCA */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              COPD急性加重期治疗——BCA原则
            </h3>
            <ComparisonTable
              columns={[{ key: 'letter', header: '字母' }, { key: 'meaning', header: '含义' }, { key: 'drug', header: '具体用药' }, { key: 'note', header: '说明' }]}
              rows={copdBCA}
            />
            <KeyPointBadge type="warning" text="COPD急性加重首选支气管扩张剂，不是抗菌药物！只有出现三种指征之一（呼吸困难加重+痰量增加+脓性痰）才考虑使用抗菌药。" />
          </ScrollReveal>

          {/* Insomnia 2026 */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              失眠症药物治疗方案（2026年更新）
            </h3>
            <ComparisonTable
              columns={[{ key: 'type', header: '失眠类型' }, { key: 'firstChoice', header: '首选药物' }, { key: 'notes', header: '特点' }]}
              rows={insomniaDrugs2026}
            />
            <KeyPointBadge type="key" text={'2026年大纲将\u201C睡眠障碍\u201D更名为\u201C失眠症\u201D，新增褪黑素受体激动剂（雷美替胺）为老年失眠患者首选。非苯二氮䓬类（唑吡坦、艾司佐匹克隆）为一般首选。'} />
          </ScrollReveal>

          {/* Epilepsy */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              癫痫药物选择
            </h3>
            <KeyPointBadge type="key" text="强直-阵挛发作（大发作）首选苯妥英钠、丙戊酸钠；失神发作（小发作）首选乙琥胺；癫痫持续状态首选地西泮静脉注射（不是苯妥英钠）。丙戊酸钠是全能型抗癫痫药，对各种发作类型均有效。" />
            <MemoryCard mnemonic="大卡小乙丙戊全，精神运动卡马先；持续状态地西泮，三叉神经卡马平" explanation="癫痫用药——大发作选苯妥英钠/丙戊酸钠，小发作选乙琥胺，精神运动性发作选卡马西平，持续状态选地西泮静注" />
          </ScrollReveal>

          {/* Parkinson */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              帕金森病药物选择
            </h3>
            <KeyPointBadge type="warning" text="帕金森病首选左旋多巴，不是多巴胺激动剂。多巴胺激动剂（普拉克索、罗匹尼罗）主要用于年轻患者以延迟左旋多巴的使用。" />
          </ScrollReveal>

          {/* Pain Management 2026 */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              WHO三阶梯镇痛原则（2026年更新）
            </h3>
            <ComparisonTable
              columns={[{ key: 'step', header: '阶梯' }, { key: 'painLevel', header: '疼痛程度' }, { key: 'drugs', header: '代表药物' }, { key: 'keyPoint', header: '更新要点' }]}
              rows={whoAnalgesicLadder}
            />
            <KeyPointBadge type="warning" text="癌痛患者应按时给药而非按需给药；芬太尼透皮贴仅适用于阿片耐受患者，起效需12-24小时，不能用于急性疼痛或疼痛不稳定患者。" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 8: 其他疾病管理 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper-dark)' }}>
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader number="08" label="其他疾病" title="泌尿系统、妇科与其他疾病管理" />

          {/* UTI */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4" style={{ color: 'var(--ink)' }}>尿路感染用药</h3>
            <ComparisonTable
              columns={[{ key: 'type', header: '感染类型' }, { key: 'firstChoice', header: '首选药物' }, { key: 'duration', header: '疗程' }]}
              rows={utiTreatment}
            />
            <KeyPointBadge type="warning" text="下尿路感染（膀胱炎）首选磷霉素氨丁三醇单剂治疗或呋喃妥因3天疗法；上尿路感染（肾盂肾炎）需要7-14天疗程。区分上下尿路是正确选择用药的前提。" />
          </ScrollReveal>

          {/* BPH */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>前列腺增生用药</h3>
            <ComparisonTable
              columns={[{ key: 'drugClass', header: '药物类别' }, { key: 'drug', header: '代表药物' }, { key: 'indication', header: '适应证' }, { key: 'notes', header: '特点' }]}
              rows={bphTreatment}
            />
          </ScrollReveal>

          {/* Gynecological */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>妇科疾病</h3>
            <ComparisonTable
              columns={[{ key: 'disease', header: '疾病' }, { key: 'treatment', header: '治疗方案' }, { key: 'notes', header: '备注' }]}
              rows={gynecologicalDiseases}
            />
          </ScrollReveal>

          {/* Skin Diseases */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>皮肤疾病</h3>
            <ComparisonTable
              columns={[{ key: 'disease', header: '疾病' }, { key: 'treatment', header: '治疗方案' }, { key: 'notes', header: '注意事项' }]}
              rows={skinDiseases}
            />
            <KeyPointBadge type="warning" text="异维A酸有致畸作用，育龄期女性治疗前1个月、治疗期间及治疗后3个月必须严格避孕。外用维A酸宜晚间睡前使用（避免日光照射）。" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 9: 2026年新增疾病要点 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader number="09" label="2026新增" title="2026年新增疾病要点" />

          <ScrollReveal>
            <p className="text-body-lg mb-8" style={{ color: 'var(--ink-secondary)' }}>
              2026年大纲新增多个疾病，考试概率极高，需重点掌握：
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <ComparisonTable
              columns={[{ key: 'disease', header: '疾病' }, { key: 'keyPoints', header: '核心考点' }, { key: 'treatment', header: '治疗方案' }]}
              rows={new2026Diseases}
            />
          </ScrollReveal>

          <ScrollReveal>
            <KeyPointBadge type="key" text="2026年新增疾病考点：麦粒肿（严禁挤压！）、甲沟炎（早期局部→化脓引流）、特应性皮炎（阶梯治疗）、白癜风（外用+光疗）、气道异物（海姆立克急救法）。" />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ─── Section 10: 案例分析题解题三步法 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper-dark)' }}>
        <div className="max-w-[900px] mx-auto">
          <SectionHeader number="10" label="案例分析" title="案例分析题解题三步法" />

          <ScrollReveal>
            <p className="text-body-lg mb-8" style={{ color: 'var(--ink-secondary)' }}>
              2026年案例分析题（C型题）占比提升至30%，每题题干较长，需快速提取关键信息。掌握三步法可显著提高答题效率和准确率。
            </p>
          </ScrollReveal>

          {caseStudyThreeSteps.map((step, i) => (
            <ScrollReveal key={i}>
              <div className="mb-8 p-6" style={{ background: 'var(--paper)', borderLeft: '4px solid var(--accent-rust)' }}>
                <h3 className="font-chinese-serif text-display-sm mb-4" style={{ color: 'var(--ink)' }}>
                  {step.step}
                </h3>
                <ul className="space-y-2">
                  {step.actions.map((action, j) => (
                    <li key={j} className="text-body-md flex items-start gap-2" style={{ color: 'var(--ink-secondary)' }}>
                      <span style={{ color: 'var(--accent-rust)' }}>•</span> {action}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}

          {/* Example Case */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              案例分析示范
            </h3>
            <div className="p-6" style={{ background: 'var(--paper)', border: '1px solid var(--border)' }}>
              <p className="text-body-md mb-3" style={{ color: 'var(--ink)' }}>
                <strong>【题干】</strong>{caseStudyExample.patient}
              </p>
              <p className="text-body-md mb-3" style={{ color: 'var(--ink-secondary)' }}>
                <strong>处方：</strong>{caseStudyExample.prescription}
              </p>
              <p className="text-body-md mb-6" style={{ color: 'var(--accent-rust)' }}>
                <strong>【问题】</strong>{caseStudyExample.question}
              </p>
              <div className="p-4" style={{ background: 'var(--paper-dark)', borderLeft: '3px solid var(--accent-olive)' }}>
                <p className="text-ui-sm uppercase mb-2" style={{ color: 'var(--accent-olive)' }}>分析与解答</p>
                {caseStudyExample.analysis.map((line, i) => (
                  <p key={i} className="text-body-md mb-2" style={{ color: 'var(--ink)' }}>{i + 1}. {line}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Case Studies Cards */}
          <ScrollReveal>
            <h3 className="font-chinese-serif text-display-sm mb-4 mt-12" style={{ color: 'var(--ink)' }}>
              典型案例分析
            </h3>
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} {...cs} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 11: 记忆口诀总表 ─── */}
      <section className="w-full py-20 px-6" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader number="11" label="速记口诀" title="药学综合记忆口诀总表" />

          <ScrollReveal animation="fade-up-stagger" stagger={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {memoryCardsAll.map((card, i) => (
                <MemoryCard key={i} mnemonic={card.mnemonic} explanation={card.explanation} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 12: 易错点警示 ─── */}
      <section className="w-full py-16 px-6" style={{ background: 'var(--accent-gold)' }}>
        <div className="max-w-[900px] mx-auto">
          <div className="mb-10">
            <span className="font-display text-ui-md" style={{ color: 'var(--ink)', opacity: 0.5 }}>12</span>
            <h2 className="font-chinese-serif text-display-sm mt-2" style={{ color: 'var(--ink)' }}>
              药学综合易错点警示
            </h2>
          </div>

          <ScrollReveal animation="fade-up-stagger" stagger={0.12}>
            {warningPoints.map((warning, i) => (
              <div
                key={i}
                className="mb-4 p-4"
                style={{
                  background: 'rgba(26,26,26,0.06)',
                  borderLeft: '4px solid var(--ink)',
                }}
              >
                <div className="flex items-start gap-2">
                  <span className="font-display text-sm font-bold shrink-0 mt-0.5" style={{ color: 'var(--ink)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-body-md" style={{ color: 'var(--ink)' }}>{warning}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ Series Conclusion ═══════ */}
      <section className="w-full py-24 px-6" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="max-w-[600px] mx-auto text-center">
          <ScrollReveal animation="fade-up-stagger" stagger={0.15}>
            <div
              className="mx-auto mb-8"
              style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.2)' }}
            />
            <h2 className="font-chinese-serif text-display-md mb-4" style={{ color: 'var(--paper)' }}>
              {seriesConclusion.title}
            </h2>
            <p className="text-body-lg mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {seriesConclusion.subtitle}
            </p>
            <p className="text-body-lg mt-8" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '2rem auto 0' }}>
              {seriesConclusion.body}
            </p>

            {/* Volume Links */}
            <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
              {['I', 'II', 'III', 'IV', 'V'].map((num, i) => (
                <Link
                  key={num}
                  to={`/vol/${i + 1}`}
                  className="font-display text-ui-md transition-colors duration-200"
                  style={{
                    color: num === 'V' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.3)',
                  }}
                >
                  Vol. {num}
                </Link>
              ))}
            </div>

            <Link
              to="/"
              className="inline-block mt-8 px-8 py-3 transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'var(--paper)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
                e.currentTarget.style.color = 'var(--accent-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.color = 'var(--paper)';
              }}
            >
              返回首页
            </Link>

            <p className="text-body-sm italic mt-12" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {seriesConclusion.footerQuote}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
