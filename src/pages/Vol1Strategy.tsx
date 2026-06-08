import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Bookmark, ChevronRight } from 'lucide-react';

import DropCap from '@/components/DropCap';
import SectionDivider from '@/components/SectionDivider';
import ScrollReveal from '@/components/ScrollReveal';
import ComparisonTable from '@/components/ComparisonTable';
import MemoryCard from '@/components/MemoryCard';
import KeyPointBadge from '@/components/KeyPointBadge';

import {
  examPolicyTable,
  syllabusChangesTable,
  questionTypeTable,
  timelineData,
  timeAllocationTable,
  cbtChanges,
  memoryCards,
  warningPoints,
  crossSubjectChains,
  answerStrategies,
  guessingTechniques,
  commonTraps,
} from '@/data/vol1-content';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Section Number Header                                              */
/* ------------------------------------------------------------------ */
function SectionHeader({
  number,
  label,
  title,
  subtitle,
  light = false,
}: {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="section-number">{number}</span>
        <span
          className="text-ui-sm uppercase"
          style={{ color: light ? 'var(--paper)' : 'var(--accent-rust)', letterSpacing: '0.1em' }}
        >
          {label}
        </span>
      </div>
      <h2
        className="font-chinese-serif text-display-sm"
        style={{ color: light ? 'var(--paper)' : 'var(--ink)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-body-md mt-2"
          style={{ color: light ? 'rgba(250,248,245,0.7)' : 'var(--ink-tertiary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Running Header                                                     */
/* ------------------------------------------------------------------ */
function RunningHeader() {
  return (
    <p
      className="running-header text-center mb-12"
    >
      Vol. I · 备考全攻略
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Warning Card (for rust band section)                               */
/* ------------------------------------------------------------------ */
function WarningCard({ text }: { text: string }) {
  return (
    <div
      className="flex gap-3 items-start"
      style={{
        background: 'rgba(255,255,255,0.08)',
        borderLeft: '4px solid var(--paper)',
        padding: '1.25rem',
      }}
    >
      <AlertTriangle size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--paper)' }} />
      <div>
        <span
          className="text-ui-sm uppercase block mb-1"
          style={{ color: 'var(--paper)', opacity: 0.8 }}
        >
          易错点
        </span>
        <p className="text-body-md" style={{ color: 'var(--paper)' }}>
          {text}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Star Rating                                                        */
/* ------------------------------------------------------------------ */
function StarRating({ rating }: { rating: string }) {
  return (
    <span className="font-sans text-sm" style={{ color: 'var(--accent-gold)' }}>
      {rating}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                */
/* ------------------------------------------------------------------ */
export default function Vol1Strategy() {
  const coverRef = useRef<HTMLDivElement>(null);

  /* --- Page-load animations for the cover band --- */
  useEffect(() => {
    if (!coverRef.current) return;
    const ctx = gsap.context(() => {
      // Decorative blur-in for the "I"
      gsap.from('.decorative-roman', {
        filter: 'blur(8px)',
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      });

      // Staggered entrance for cover content
      const els = coverRef.current!.querySelectorAll('.cover-animate');
      gsap.from(els, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2,
      });

      // Accent line grow
      gsap.from('.cover-accent-line', {
        scaleX: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.7,
      });
    }, coverRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* ============================================================ */}
      {/* SECTION 0 — Volume Cover Band                                 */}
      {/* ============================================================ */}
      <div
        ref={coverRef}
        className="relative min-h-[55vh] flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--paper-dark) 0%, var(--paper) 100%)',
        }}
      >
        {/* Decorative Roman numeral */}
        <div
          className="decorative-roman absolute font-display select-none pointer-events-none"
          style={{
            fontSize: 'clamp(10rem, 20vw, 16rem)',
            fontWeight: 700,
            color: 'var(--accent-rust)',
            opacity: 0.08,
            lineHeight: 0.85,
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
        >
          I
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-[640px] mx-auto px-6 py-24">
          <p
            className="cover-animate font-display text-ui-md uppercase"
            style={{ color: 'var(--accent-rust)', letterSpacing: '0.15em' }}
          >
            Vol. I
          </p>

          <h1
            className="cover-animate font-chinese-serif text-display-lg mt-4"
            style={{ color: 'var(--ink)' }}
          >
            备考全攻略
          </h1>

          <p
            className="cover-animate text-body-xl uppercase mt-4"
            style={{ color: 'var(--ink-tertiary)', letterSpacing: '0.12em' }}
          >
            EXAMINATION STRATEGY
          </p>

          {/* Accent Line */}
          <div
            className="cover-accent-line mx-auto mt-6"
            style={{
              width: '60px',
              height: '2px',
              background: 'var(--accent-rust)',
              transformOrigin: 'center',
            }}
          />

          <p
            className="cover-animate text-body-lg mt-6"
            style={{ color: 'var(--ink-secondary)', maxWidth: '560px', margin: '1.5rem auto 0' }}
          >
            2026年执业药师考试新政解读、机考改革应对方案、科学三阶段备考路线、高效答题技巧与跨科目高频考点梳理。
          </p>

          <p
            className="cover-animate text-ui-sm mt-6"
            style={{ color: 'var(--ink-quaternary)' }}
          >
            8 章节 · 12 对比表格 · 6 组记忆口诀 · 2026新政
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECTION 1 — Lead Article: 2026 Exam Policy Overview           */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-32" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[800px] mx-auto px-6">
          <RunningHeader />

          <ScrollReveal>
            <p
              className="text-ui-sm uppercase mb-4"
              style={{ color: 'var(--accent-rust)', letterSpacing: '0.1em' }}
            >
              封面文章
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="font-chinese-serif text-display-md mb-6"
              style={{ color: 'var(--ink)' }}
            >
              2026年执业药师考试新政与备考总览
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-px" style={{ background: 'var(--border-light)' }} />
              <span className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>
                政策解读 · 备考规划
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <DropCap letter="2">
              2026年执业药师资格考试迎来重大变革。考试全面转向计算机化考试（机考）模式，所有科目均采用标准化考场统一进行。题型维持客观题为主，但考试时长由原先的每科120分钟调整为90分钟，题量相应调整为每科100题。对于在职备考的考生而言，这既是挑战也是机遇——需要适应屏幕阅读与电子答题的全新模式，时间管理能力成为决定成败的关键。
            </DropCap>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-8 text-body-lg" style={{ color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
              <p className="mb-4">
                2025年是执业药师考试全面改革的元年。考试形式从纸笔答题切换为计算机考试（CBT），大纲更新至第九版，题量、分值、合格线均发生调整。理解这些变化，是制定科学备考计划的前提。
              </p>
              <p>
                四科统一采用"A型40题+B型40题+C型10题+X型10题"结构，满分100分，合格线60分。与2024年及以前相比（120题/150分钟/72分合格），题量减少16.7%，但考试时间缩短40%，<strong style={{ color: 'var(--ink)' }}>每题平均可用时间从75秒压缩至54秒</strong>——时间压力实际上是增大的。
              </p>
            </div>
          </ScrollReveal>

          {/* Key Point Badge */}
          <ScrollReveal animation="slide-left" delay={0.3}>
            <div className="mt-8">
              <KeyPointBadge
                type="key"
                text="2026年起执业药师考试实行四年滚动制——参加全部4个科目考试的人员须在连续4个考试年度内通过全部科目。"
              />
            </div>
          </ScrollReveal>

          <SectionDivider className="my-16" />

          {/* Exam Policy Table */}
          <ScrollReveal>
            <h3
              className="font-chinese-serif text-display-sm mb-6"
              style={{ color: 'var(--ink)' }}
            >
              2026年考试时间表
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ComparisonTable
              columns={[
                { key: 'time', header: '时间' },
                { key: 'event', header: '事项' },
              ]}
              rows={examPolicyTable}
            />
          </ScrollReveal>

          {/* Syllabus Changes Table */}
          <ScrollReveal delay={0.2}>
            <h3
              className="font-chinese-serif text-display-sm mt-12 mb-6"
              style={{ color: 'var(--ink)' }}
            >
              2026年大纲变化总览
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <ComparisonTable
              columns={[
                { key: 'subject', header: '科目' },
                { key: 'change', header: '变动幅度' },
                { key: 'detail', header: '核心变化' },
              ]}
              rows={syllabusChangesTable}
            />
          </ScrollReveal>

          {/* Warning */}
          <ScrollReveal animation="slide-left" delay={0.3}>
            <div className="mt-8">
              <KeyPointBadge
                type="warning"
                text="2026年4月13日之后新印发或修订的法规不纳入2026年考试范围。"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 2 — 三阶段备考路线 (Three-Phase Timeline)              */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-32" style={{ background: 'var(--paper-dark)' }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              number="01"
              label="备考路线"
              title="科学三阶段备考时间规划"
              subtitle="从基础巩固到冲刺提分，合理分配6-8个月备考周期"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <DropCap letter="执">
              业药师备考周期通常为6-8个月。以2026年考试（10月31日-11月1日）为例，推荐从3月或4月启动复习，分三个阶段推进。基础阶段的核心目标是"建骨架"而非"填血肉"，强化阶段以真题训练突破难点，冲刺阶段则聚焦于适应机考节奏与查漏补缺。
            </DropCap>
          </ScrollReveal>

          {/* Timeline Cards */}
          <ScrollReveal animation="fade-up-stagger" stagger={0.2} className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {timelineData.map((item) => (
                <div
                  key={item.phase}
                  style={{
                    background: 'var(--paper)',
                    border: '1px solid var(--border)',
                    padding: '1.5rem',
                  }}
                >
                  <p
                    className="font-display text-ui-sm uppercase mb-2"
                    style={{ color: 'var(--accent-rust)', letterSpacing: '0.05em' }}
                  >
                    {item.phaseEn}
                  </p>
                  <h3
                    className="font-chinese-serif text-display-sm mb-2"
                    style={{ color: 'var(--ink)' }}
                  >
                    {item.phase}
                  </h3>
                  <span
                    className="inline-block text-ui-sm mb-4"
                    style={{
                      background: 'var(--accent-rust-light)',
                      color: 'var(--accent-rust)',
                      padding: '0.25rem 0.75rem',
                    }}
                  >
                    {item.duration}
                  </span>
                  <p
                    className="text-body-sm mb-3"
                    style={{ color: 'var(--ink-secondary)' }}
                  >
                    <strong>每日学习：</strong>
                    {item.dailyStudy}
                  </p>
                  <p
                    className="text-body-sm mb-3"
                    style={{ color: 'var(--ink-secondary)' }}
                  >
                    <strong>核心目标：</strong>
                    {item.goal}
                  </p>
                  <p
                    className="text-body-sm mb-3"
                    style={{ color: 'var(--ink-secondary)' }}
                  >
                    <strong>刷题量：</strong>
                    {item.questions}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {item.actions.map((action) => (
                      <li
                        key={action}
                        className="text-body-sm flex items-start gap-2"
                        style={{ color: 'var(--ink-secondary)' }}
                      >
                        <span style={{ color: 'var(--accent-rust)' }}>•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Study order recommendation */}
          <ScrollReveal delay={0.3} className="mt-12">
            <div
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--border)',
                padding: '1.5rem',
              }}
            >
              <h4
                className="font-chinese-serif text-display-sm mb-4"
                style={{ color: 'var(--ink)' }}
              >
                推荐复习顺序
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p
                    className="text-ui-sm uppercase mb-2"
                    style={{ color: 'var(--accent-rust)' }}
                  >
                    第一轮（基础阶段）
                  </p>
                  <p className="text-body-md" style={{ color: 'var(--ink-secondary)' }}>
                    西药二 → 西药综合 → 西药一 → 法规
                  </p>
                  <p className="text-body-sm mt-2" style={{ color: 'var(--ink-tertiary)' }}>
                    西药二的药物知识是西药综合临床用药的基础，西药一的药理学是生命药学新章节的理论根基，法规相对独立可后置。
                  </p>
                </div>
                <div>
                  <p
                    className="text-ui-sm uppercase mb-2"
                    style={{ color: 'var(--accent-rust)' }}
                  >
                    第二轮（强化阶段）
                  </p>
                  <p className="text-body-md" style={{ color: 'var(--ink-secondary)' }}>
                    主题式交叉复习
                  </p>
                  <p className="text-body-sm mt-2" style={{ color: 'var(--ink-tertiary)' }}>
                    按跨科目知识群组织复习：麻精药品主题周、抗高血压主题周、抗感染药物主题周，打破科目界限。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 3 — 机考改革与题型分布                                  */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-32" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              number="02"
              label="机考改革"
              title="机考改革与题型分布"
              subtitle="全面适应机考模式，掌握七大关键变化"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <DropCap letter="机">
              考改革涉及七个关键变化，考生必须逐一适应。2025年起，执业药师考试四科全部实行机考，核心参数如下：每科100题，满分100分，考试时间90分钟，合格线60分。90分钟完成100题，每题54秒的限时对阅读速度、信息提取速度和计算速度都提出了更高要求。
            </DropCap>
          </ScrollReveal>

          {/* 7 CBT Changes — numbered list */}
          <ScrollReveal animation="fade-up-stagger" stagger={0.12} className="mt-12">
            <div className="space-y-4">
              {cbtChanges.map((change) => (
                <div
                  key={change.num}
                  className="relative overflow-hidden"
                  style={{
                    background: 'var(--paper-dark)',
                    border: '1px solid var(--border)',
                    padding: '1.5rem',
                  }}
                >
                  {/* Decorative number watermark */}
                  <span
                    className="absolute font-display pointer-events-none select-none"
                    style={{
                      fontSize: '4rem',
                      fontWeight: 700,
                      color: 'var(--accent-rust)',
                      opacity: 0.08,
                      top: '0.5rem',
                      right: '1rem',
                      lineHeight: 1,
                    }}
                  >
                    {change.num}
                  </span>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-display text-ui-sm"
                        style={{ color: 'var(--accent-rust)' }}
                      >
                        {change.num}
                      </span>
                      <h4
                        className="font-chinese-serif text-body-lg font-semibold"
                        style={{ color: 'var(--ink)' }}
                      >
                        {change.title}
                      </h4>
                    </div>
                    <p
                      className="text-body-md"
                      style={{ color: 'var(--ink-secondary)' }}
                    >
                      {change.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Question Type Distribution Table */}
          <ScrollReveal delay={0.2} className="mt-16">
            <h3
              className="font-chinese-serif text-display-sm mb-6"
              style={{ color: 'var(--ink)' }}
            >
              四科题型分布对比
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <ComparisonTable
              columns={[
                { key: 'type', header: '题型' },
                { key: 'count', header: '题量' },
                { key: 'score', header: '分值' },
                { key: 'strategy', header: '答题建议' },
              ]}
              rows={questionTypeTable}
            />
          </ScrollReveal>

          {/* Warning Badge */}
          <ScrollReveal animation="slide-left" delay={0.3}>
            <div className="mt-8">
              <KeyPointBadge
                type="warning"
                text={`部分考生认为"题量减少=难度降低"，这是严重误判。90分钟完成100题，每题54秒的限时对阅读速度、信息提取速度和计算速度都提出了更高要求，尤其是西药综合的C型案例分析题（题干较长）和西药一的计算题。`}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 4 — 机考时间分配方案 (2+3+1 Time Management)           */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-32" style={{ background: 'var(--paper-dark)' }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              number="03"
              label="时间分配"
              title="机考时间分配方案"
              subtitle="“2+3+1”黄金法则——90分钟100题的高效时间管理"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <DropCap letter="9">
              0分钟100题，平均54秒/题。但实际答题中，A型题可以更快，C型题需要更久。采用"2+3+1"黄金法则进行时间分配：前30分钟完成基础题，中间50分钟攻克中等难度题，最后10分钟处理疑难题目并全局检查。这一时间分配方案的核心逻辑是"先易后难、先快后慢"。
            </DropCap>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-10">
            <ComparisonTable
              columns={[
                { key: 'phase', header: '阶段' },
                { key: 'timeRange', header: '时间区间' },
                { key: 'type', header: '目标题型' },
                { key: 'count', header: '题量' },
                { key: 'limit', header: '限时策略' },
                { key: 'principle', header: '核心原则' },
              ]}
              rows={timeAllocationTable}
            />
          </ScrollReveal>

          {/* Key point */}
          <ScrollReveal animation="slide-left" delay={0.3}>
            <div className="mt-8">
              <KeyPointBadge
                type="key"
                text="A型题相对基础，应在30分钟内果断完成，为后续题目争取时间。B型题占40分，是分值最高的题型，建议先浏览全部备选项，对整体范围有把握后再逐题作答。"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left" delay={0.35}>
            <div className="mt-4">
              <KeyPointBadge
                type="warning"
                text={`很多考生按题目顺序从头做到尾，遇到难题反复纠结，导致后面简单的题目没有时间作答。机考环境下，"标记+跳过"是必会的时间管理技巧。建议设定"单题时间上限"：A型题60秒、B型题75秒、C型题90秒，超过上限立即标记跳过。`}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 5 — 答题技巧与策略                                      */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-32" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[1000px] mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              number="04"
              label="答题技巧"
              title="高效答题技巧"
              subtitle="各类题型的核心解题方法与常见陷阱识别"
            />
          </ScrollReveal>

          {/* Answer Strategy Cards */}
          <ScrollReveal animation="fade-up-stagger" stagger={0.15} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {answerStrategies.map((strategy) => (
                <div
                  key={strategy.categoryNum}
                  style={{
                    background: 'var(--paper-dark)',
                    border: '1px solid var(--border)',
                    padding: '1.5rem',
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="font-display text-body-lg font-bold"
                      style={{ color: 'var(--accent-rust)' }}
                    >
                      {strategy.categoryNum}
                    </span>
                    <h4
                      className="font-chinese-serif text-body-lg font-semibold"
                      style={{ color: 'var(--ink)' }}
                    >
                      {strategy.category}
                    </h4>
                  </div>
                  <div className="mb-3">
                    <p
                      className="text-ui-sm uppercase mb-1"
                      style={{ color: 'var(--accent-olive)' }}
                    >
                      核心方法
                    </p>
                    <ul className="space-y-1">
                      {strategy.methods.map((m) => (
                        <li
                          key={m}
                          className="text-body-sm flex items-start gap-2"
                          style={{ color: 'var(--ink-secondary)' }}
                        >
                          <span style={{ color: 'var(--accent-rust)' }}>•</span>
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="mb-3"
                    style={{
                      background: 'var(--accent-olive-light)',
                      borderLeft: '3px solid var(--accent-olive)',
                      padding: '0.75rem 1rem',
                    }}
                  >
                    <p className="text-body-sm" style={{ color: 'var(--ink)' }}>
                      <Bookmark
                        size={12}
                        className="inline mr-1"
                        style={{ color: 'var(--accent-olive)' }}
                      />
                      {strategy.keyPoint}
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'var(--accent-rust-light)',
                      borderLeft: '3px solid var(--accent-rust)',
                      padding: '0.75rem 1rem',
                    }}
                  >
                    <p className="text-body-sm" style={{ color: 'var(--ink)' }}>
                      <AlertTriangle
                        size={12}
                        className="inline mr-1"
                        style={{ color: 'var(--accent-rust)' }}
                      />
                      {strategy.warning}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Memory Card — Master Mnemonic */}
          <ScrollReveal delay={0.3} className="mt-12">
            <div className="relative">
              <MemoryCard
                mnemonic={memoryCards[0].mnemonic}
                explanation={memoryCards[0].explanation}
              />
            </div>
          </ScrollReveal>

          {/* Guessing Techniques Table */}
          <ScrollReveal delay={0.2} className="mt-16">
            <h3
              className="font-chinese-serif text-display-sm mb-6"
              style={{ color: 'var(--ink)' }}
            >
              高频蒙题技巧
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <ComparisonTable
              columns={[
                { key: 'name', header: '技巧名称' },
                { key: 'scenario', header: '适用场景' },
                { key: 'principle', header: '原理说明' },
                { key: 'reliability', header: '可靠性' },
              ]}
              rows={guessingTechniques}
            />
          </ScrollReveal>

          {/* Common Traps */}
          <ScrollReveal delay={0.3} className="mt-12">
            <h3
              className="font-chinese-serif text-display-sm mb-6"
              style={{ color: 'var(--ink)' }}
            >
              六大命题陷阱识别
            </h3>
          </ScrollReveal>
          <ScrollReveal animation="fade-up-stagger" stagger={0.1} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonTraps.map((trap, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--paper-dark)',
                    border: '1px solid var(--border)',
                    padding: '1.25rem',
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={14} style={{ color: 'var(--accent-rust)' }} />
                    <h4
                      className="font-chinese-serif text-body-md font-semibold"
                      style={{ color: 'var(--ink)' }}
                    >
                      {trap.title}
                    </h4>
                  </div>
                  <p className="text-body-sm" style={{ color: 'var(--ink-secondary)' }}>
                    {trap.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 6 — 五大跨科目考点群                                    */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-32" style={{ background: 'var(--paper-dark)' }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              number="05"
              label="跨科考点"
              title="五大跨科目高频考点群"
              subtitle="横跨三科及以上的知识链，预计占总分30%-40%"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <DropCap letter="执">
              业药师四科并非孤立的知识孤岛，存在多条高频跨科目知识链。掌握这些知识链，可以实现"复习一科、带动多科"的杠杆效应，也是应对综合分析题（C型题）的必备能力。以下五大考点群横跨三个及以上科目，是2026年备考的"战略高地"。
            </DropCap>
          </ScrollReveal>

          {/* Cross-Subject Table */}
          <ScrollReveal delay={0.2} className="mt-10">
            <ComparisonTable
              columns={[
                { key: 'theme', header: '考点群' },
                { key: 'subjects', header: '涉及科目' },
                { key: 'score', header: '预估分值' },
                { key: 'frequency', header: '出现频率' },
              ]}
              rows={crossSubjectChains.map((c) => ({
                theme: c.theme,
                subjects: c.subjects,
                score: c.score,
                frequency: c.frequency,
              }))}
            />
          </ScrollReveal>

          {/* Detailed Cross-Subject Cards */}
          <ScrollReveal animation="fade-up-stagger" stagger={0.12} className="mt-10">
            <div className="space-y-6">
              {crossSubjectChains.map((chain) => (
                <div
                  key={chain.theme}
                  style={{
                    background: 'var(--paper)',
                    border: '1px solid var(--border)',
                    padding: '1.5rem',
                  }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h4
                      className="font-chinese-serif text-body-lg font-semibold"
                      style={{ color: 'var(--ink)' }}
                    >
                      {chain.theme}
                    </h4>
                    <span
                      className="text-ui-sm"
                      style={{
                        background: 'var(--accent-rust-light)',
                        color: 'var(--accent-rust)',
                        padding: '0.2rem 0.6rem',
                      }}
                    >
                      {chain.subjects}
                    </span>
                    <StarRating rating={chain.frequency} />
                    <span
                      className="text-ui-sm"
                      style={{ color: 'var(--accent-rust)' }}
                    >
                      {chain.score}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {chain.pharma1 !== '—' && (
                      <div>
                        <p
                          className="text-ui-sm uppercase mb-1"
                          style={{ color: 'var(--accent-olive)' }}
                        >
                          西药一
                        </p>
                        <p className="text-body-sm" style={{ color: 'var(--ink-secondary)' }}>
                          {chain.pharma1}
                        </p>
                      </div>
                    )}
                    {chain.pharma2 !== '—' && (
                      <div>
                        <p
                          className="text-ui-sm uppercase mb-1"
                          style={{ color: 'var(--accent-olive)' }}
                        >
                          西药二
                        </p>
                        <p className="text-body-sm" style={{ color: 'var(--ink-secondary)' }}>
                          {chain.pharma2}
                        </p>
                      </div>
                    )}
                    {chain.practice !== '—' && (
                      <div>
                        <p
                          className="text-ui-sm uppercase mb-1"
                          style={{ color: 'var(--accent-olive)' }}
                        >
                          西药综合
                        </p>
                        <p className="text-body-sm" style={{ color: 'var(--ink-secondary)' }}>
                          {chain.practice}
                        </p>
                      </div>
                    )}
                    {chain.law !== '—' && (
                      <div>
                        <p
                          className="text-ui-sm uppercase mb-1"
                          style={{ color: 'var(--accent-olive)' }}
                        >
                          法规
                        </p>
                        <p className="text-body-sm" style={{ color: 'var(--ink-secondary)' }}>
                          {chain.law}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left" delay={0.3}>
            <div className="mt-8">
              <KeyPointBadge
                type="key"
                text={`麻精药品管理是跨科目分值最高的考点群（预估15-20分），横跨法规、西药二、西药综合三科，需要从"管理制度→药理作用→处方审核"三个层面系统掌握。`}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 7 — 记忆口诀速查                                        */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-32" style={{ background: 'var(--paper)' }}>
        <div className="max-w-[1000px] mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              number="06"
              label="速记口诀"
              title="备考记忆口诀"
              subtitle="高效记忆卡片，点击可复制到剪贴板"
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up-stagger" stagger={0.1} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {memoryCards.slice(1).map((card, i) => (
                <div key={i} className="relative">
                  <MemoryCard mnemonic={card.mnemonic} explanation={card.explanation} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8 — 易错点警示 (Rust Band)                              */}
      {/* ============================================================ */}
      <section
        className="py-16 lg:py-24"
        style={{ background: 'var(--accent-rust)' }}
      >
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              number="07"
              label="警示"
              title="易错点警示"
              light
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up-stagger" stagger={0.15} className="mt-8 space-y-4">
            {warningPoints.slice(3).map((wp, i) => (
              <WarningCard key={i} text={wp.text} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9 — Next Volume Navigation                              */}
      {/* ============================================================ */}
      <section
        className="py-16"
        style={{ background: 'var(--paper)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal>
            <p
              className="text-ui-sm uppercase mb-3"
              style={{ color: 'var(--ink-tertiary)' }}
            >
              下一册
            </p>
            <h3
              className="font-chinese-serif text-display-sm mb-3"
              style={{ color: 'var(--ink)' }}
            >
              药事管理与法规精讲
            </h3>
            <p
              className="text-body-md mb-6"
              style={{ color: 'var(--ink-secondary)' }}
            >
              法律体系、药品管理、特殊药品与2026新增法规
            </p>
            <Link
              to="/vol/2"
              className="inline-flex items-center gap-2 px-8 py-3 text-ui-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-editorial"
              style={{
                background: 'var(--accent-rust)',
                color: 'var(--paper)',
              }}
            >
              继续阅读
              <ChevronRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
