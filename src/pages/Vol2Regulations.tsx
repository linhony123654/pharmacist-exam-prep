import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Pill, FlaskConical } from 'lucide-react';
import ComparisonTable from '@/components/ComparisonTable';
import MemoryCard from '@/components/MemoryCard';
import KeyPointBadge from '@/components/KeyPointBadge';
import DropCap from '@/components/DropCap';
import SectionDivider from '@/components/SectionDivider';
import ScrollReveal from '@/components/ScrollReveal';
import * as D from '@/data/vol2-content';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────── Section 1: Volume Cover ──────────────────────── */

function Vol2Cover() {
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!coverRef.current) return;
    const ctx = gsap.context(() => {
      const els = coverRef.current!.querySelectorAll('.v2-anim');
      gsap.from(els, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2,
      });
    }, coverRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={coverRef}
      className="relative min-h-[55vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--ink)', padding: '6rem 2rem 4rem' }}
    >
      {/* Decorative "II" */}
      <div
        className="absolute font-display select-none pointer-events-none v2-anim"
        style={{
          fontSize: 'clamp(10rem, 20vw, 16rem)',
          fontWeight: 700,
          color: 'var(--paper)',
          opacity: 0.05,
          lineHeight: 0.85,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      >
        II
      </div>

      <div className="relative z-10 text-center max-w-[600px] mx-auto">
        <p
          className="font-display text-ui-md uppercase v2-anim"
          style={{ color: 'var(--accent-rust)', letterSpacing: '0.15em' }}
        >
          Vol. II
        </p>

        <h1
          className="font-chinese-serif text-display-lg mt-4 v2-anim"
          style={{ color: 'var(--paper)' }}
        >
          药事管理与法规精讲
        </h1>

        <p
          className="text-body-xl uppercase v2-anim"
          style={{
            color: 'rgba(250,248,245,0.4)',
            letterSpacing: '0.12em',
            marginTop: '1rem',
          }}
        >
          PHARMACEUTICAL REGULATIONS
        </p>

        <div
          className="mx-auto mt-6 v2-anim"
          style={{ width: '60px', height: '2px', background: 'var(--accent-rust)' }}
        />

        <p
          className="text-body-lg mt-6 v2-anim"
          style={{ color: 'rgba(250,248,245,0.7)', maxWidth: '580px', margin: '1.5rem auto 0' }}
        >
          从《药品管理法》到《麻醉药品管理办法》，系统梳理药事法规体系。涵盖药品经营管理、特殊药品管制、执业药师制度及2026年新增七大法规考点。
        </p>

        <p
          className="text-ui-sm mt-6 v2-anim"
          style={{ color: 'rgba(250,248,245,0.4)' }}
        >
          12 章节 · 35 对比表格 · 10 组记忆口诀 · 2026新增7大考点
        </p>
      </div>
    </div>
  );
}

/* ──────────────────────── Section 2: Lead Article ──────────────────────── */

function LeadArticle() {
  return (
    <section style={{ background: 'var(--paper)', padding: '5rem 2rem' }}>
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal animation="fade-up">
          <p className="text-ui-sm" style={{ color: 'var(--ink-quaternary)' }}>
            Vol. II · 药事管理与法规精讲
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <p className="text-ui-sm mt-4" style={{ color: 'var(--accent-rust)' }}>
            体系总览
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.15}>
          <h2 className="font-chinese-serif text-display-md mt-2" style={{ color: 'var(--ink)' }}>
            中国药事管理法规体系架构
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2}>
          <div
            className="mt-4 mb-8 flex items-center gap-3"
            style={{ color: 'var(--ink-tertiary)' }}
          >
            <div className="w-10 h-px" style={{ background: 'var(--border)' }} />
            <span className="text-ui-sm">法规体系 · 层级结构</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.25}>
          <DropCap letter={D.leadParagraph.dropCap}>
            {D.leadParagraph.text}
          </DropCap>
        </ScrollReveal>

        {/* Legal Framework Pyramid */}
        <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-4">
            {/* Level 1: Law */}
            <div
              className="w-full max-w-[400px] text-center py-3 px-4 transition-all duration-200 hover:border-[var(--accent-rust)] hover:bg-[var(--accent-rust-light)]"
              style={{ border: '1px solid var(--border)', background: 'var(--paper-dark)' }}
            >
              <p className="font-chinese-serif text-body-md font-semibold" style={{ color: 'var(--ink)' }}>
                法律（全国人大及其常委会）
              </p>
              <p className="text-body-sm" style={{ color: 'var(--ink-secondary)' }}>
                《药品管理法》
              </p>
            </div>

            {/* Connector */}
            <div className="w-px h-4" style={{ background: 'var(--border)' }} />

            {/* Level 2: Administrative Regulation */}
            <div
              className="w-full max-w-[480px] text-center py-3 px-4 transition-all duration-200 hover:border-[var(--accent-rust)] hover:bg-[var(--accent-rust-light)]"
              style={{ border: '1px solid var(--border)', background: 'var(--paper-dark)' }}
            >
              <p className="font-chinese-serif text-body-md font-semibold" style={{ color: 'var(--ink)' }}>
                行政法规（国务院）
              </p>
              <p className="text-body-sm" style={{ color: 'var(--ink-secondary)' }}>
                《药品管理法实施条例》
              </p>
            </div>

            {/* Connector */}
            <div className="w-px h-4" style={{ background: 'var(--border)' }} />

            {/* Level 3: Department Rules */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-[600px]">
              {[
                '《药品注册管理办法》',
                '《药品经营质量管理规范 GSP》',
                '《麻醉药品管理办法》',
              ].map((name) => (
                <div
                  key={name}
                  className="text-center py-3 px-2 transition-all duration-200 hover:border-[var(--accent-rust)] hover:bg-[var(--accent-rust-light)]"
                  style={{ border: '1px solid var(--border)', background: 'var(--paper-dark)' }}
                >
                  <p className="text-body-sm font-medium" style={{ color: 'var(--ink)' }}>
                    部门规章
                  </p>
                  <p className="text-body-sm mt-1" style={{ color: 'var(--ink-secondary)' }}>
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────────── Section 3: 法律体系架构 ──────────────────────── */

function Section1LegalSystem() {
  return (
    <section style={{ background: 'var(--paper-dark)', padding: '5rem 2rem' }}>
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-ui-md" style={{ color: 'var(--accent-rust)' }}>01</span>
            <span className="text-ui-sm" style={{ color: 'var(--accent-rust)' }}>法律体系</span>
          </div>
          <h2 className="font-chinese-serif text-display-sm mb-8" style={{ color: 'var(--ink)' }}>
            药事法规层级结构
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="mb-8 max-w-prose" style={{ columns: '2', columnGap: '3rem' }}>
            <p className="text-body-lg mb-4" style={{ color: 'var(--ink-secondary)' }}>
              中国的药事管理法规体系是一个金字塔式的层级结构，从上到下依次为宪法、法律、行政法规、地方性法规、部门规章、地方政府规章和规范性文件。
            </p>
            <p className="text-body-lg" style={{ color: 'var(--ink-secondary)' }}>
              药品管理领域最核心的是法律（第二层）和行政法规（第三层），执业药师考试80%的法规题目都围绕这两个层级展开。效力冲突解决三原则：上位法优于下位法、特别法优于一般法、新法优于旧法。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.15}>
          <h3 className="font-chinese-serif text-display-sm mb-4" style={{ color: 'var(--ink)' }}>
            法律效力层级金字塔
          </h3>
          <ComparisonTable
            columns={D.legalHierarchyColumns}
            rows={D.legalHierarchyRows}
            className="mb-8"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2}>
          <h3 className="font-chinese-serif text-display-sm mb-4" style={{ color: 'var(--ink)' }}>
            五部核心法律要点速记
          </h3>
          <ComparisonTable
            columns={D.fiveLawsColumns}
            rows={D.fiveLawsRows}
            className="mb-8"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.25}>
          <MemoryCard
            mnemonic="药苗医基师"
            explanation="药品管理法、疫苗管理法、中医药法、基本医疗卫生与健康促进法、医师法——五部核心法律速记"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.3}>
          <h3 className="font-chinese-serif text-display-sm mb-4 mt-8" style={{ color: 'var(--ink)' }}>
            药品监督管理部门职责分工
          </h3>
          <ComparisonTable
            columns={D.nmpaDutyColumns}
            rows={D.nmpaDutyRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.35}>
          <KeyPointBadge type="key" text={D.keyPointTexts.drugLaw2019} />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────────── Section 4: 药品经营管理 ──────────────────────── */

function Section2DrugBusiness() {
  return (
    <section style={{ background: 'var(--paper)', padding: '5rem 2rem' }}>
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-ui-md" style={{ color: 'var(--accent-rust)' }}>02</span>
            <span className="text-ui-sm" style={{ color: 'var(--accent-rust)' }}>药品经营 ★最高分值</span>
          </div>
          <h2 className="font-chinese-serif text-display-sm mb-8" style={{ color: 'var(--ink)' }}>
            药品经营管理规范
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <p className="text-body-lg mb-6" style={{ color: 'var(--ink-secondary)' }}>
            2026年预估分值约25分，是法规科目中分值最高的章节。新增《药品网络交易监督管理办法》及网络销售监管专章、药品追溯码、集采政策等内容。
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.15}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4" style={{ color: 'var(--ink)' }}>
            02-A 药品批发企业 vs 零售企业对比
          </h3>
          <ComparisonTable
            columns={D.wholesaleRetailColumns}
            rows={D.wholesaleRetailRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2}>
          <KeyPointBadge type="warning" text="零售企业负责人必须是执业药师，而批发企业负责人只需大专以上或中级职称，两者要求差异巨大，考试常将两者混淆考查。" />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.25}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4 mt-8" style={{ color: 'var(--ink)' }}>
            02-B 药品分类采购五方式
          </h3>
          <ComparisonTable
            columns={D.purchaseMethodsColumns}
            rows={D.purchaseMethodsRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.3}>
          <MemoryCard
            mnemonic="量多额高招，专利独家谈，妇儿急挂网，必需短缺定，特殊按现行"
            explanation="五种采购方式覆盖了临床用药的全部场景：招标/谈判/挂网/定点/现行"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.35}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4 mt-8" style={{ color: 'var(--ink)' }}>
            02-C 处方药(Rx) vs 非处方药(OTC)
          </h3>
          <ComparisonTable
            columns={D.rxOtcColumns}
            rows={D.rxOtcRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.4}>
          <KeyPointBadge type="warning" text={D.keyPointTexts.rxColor} />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.45}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4 mt-8" style={{ color: 'var(--ink)' }}>
            02-D 药品追溯码编码四原则
          </h3>
          <ComparisonTable
            columns={D.traceabilityColumns}
            rows={D.traceabilityRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.5}>
          <KeyPointBadge type="key" text="追溯码是2026年法规大纲新增重点，已出现在历年真题中（第96题多选题），属于必考内容。" />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────────── Section 5: 特殊管理药品 ──────────────────────── */

const categoryIcons = [Pill, Lock, FlaskConical, Shield];

function Section3SpecialDrugs() {
  return (
    <section style={{ background: 'var(--paper-dark)', padding: '6rem 2rem' }}>
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-ui-md" style={{ color: 'var(--accent-rust)' }}>03</span>
            <span className="text-ui-sm" style={{ color: 'var(--accent-rust)' }}>特殊药品 ★超级考点</span>
          </div>
          <h2 className="font-chinese-serif text-display-sm mb-8" style={{ color: 'var(--ink)' }}>
            麻精毒放特殊药品管理
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <p className="text-body-lg mb-8 max-w-prose" style={{ color: 'var(--ink-secondary)' }}>
            麻精毒放四类特殊药品的管理是执业药师考试中最典型的"法规+药学+临床"三位一体考点。预计2026年考试中占5-8分，跨科目总计可达15-20分。这是所有考生必须拿满分的章节。
          </p>
        </ScrollReveal>

        {/* Four Category Cards */}
        <ScrollReveal animation="fade-up-stagger" stagger={0.15} className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {D.specialDrugsCategories.map((cat, i) => {
              const Icon = categoryIcons[i];
              return (
                <div
                  key={cat.category}
                  className="p-6 transition-all duration-250 hover:-translate-y-1 hover:shadow-editorial"
                  style={{
                    border: '1px solid var(--border)',
                    borderLeft: `4px solid ${cat.borderColor}`,
                    background: 'var(--paper)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} style={{ color: cat.borderColor }} />
                    <h4 className="font-chinese-serif text-body-lg font-semibold" style={{ color: 'var(--ink)' }}>
                      {cat.category}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {cat.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span style={{ color: cat.borderColor }}>•</span>
                        <span className="text-body-md" style={{ color: 'var(--ink-secondary)' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4" style={{ color: 'var(--ink)' }}>
            四类特殊药品管理对比
          </h3>
          <ComparisonTable
            columns={D.fourSpecialDrugsColumns}
            rows={D.fourSpecialDrugsRows}
            className="mb-8"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.15}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4" style={{ color: 'var(--ink)' }}>
            麻精药品处方限量对比（★核心考点，必须熟记）
          </h3>
          <ComparisonTable
            columns={D.prescriptionLimitColumns}
            rows={D.prescriptionLimitRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2}>
          <KeyPointBadge type="warning" text="哌替啶处方为一次常用量，仅限于医疗机构内使用；二氢埃托啡处方为一次常用量，仅限于二级以上医院内使用。" />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.25}>
          <div className="mt-6">
            <MemoryCard
              mnemonic="普患注一其三七，癌痛注三其七控十五，住院逐日一"
              explanation="普通患者：注射剂1次量，其他3日，控缓释7日；癌痛患者：注射剂3日，其他7日，控缓释15日；住院患者：逐日1日常用量。——麻精药品处方限量速记口诀"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.3}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4 mt-8" style={{ color: 'var(--ink)' }}>
            MAH药品上市许可持有人制度核心考点
          </h3>
          <ComparisonTable
            columns={D.maResponsibilityColumns}
            rows={D.maResponsibilityRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.35}>
          <KeyPointBadge type="key" text={D.keyPointTexts.maHKey} />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────────── Section 6: 上市后管理 ──────────────────────── */

function Section4PostMarket() {
  return (
    <section style={{ background: 'var(--paper)', padding: '5rem 2rem' }}>
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-ui-md" style={{ color: 'var(--accent-rust)' }}>04</span>
            <span className="text-ui-sm" style={{ color: 'var(--accent-rust)' }}>上市后管理</span>
          </div>
          <h2 className="font-chinese-serif text-display-sm mb-8" style={{ color: 'var(--ink)' }}>
            药品上市后管理与安全责任
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4" style={{ color: 'var(--ink)' }}>
            04-A 药品不良反应(ADR)报告时限
          </h3>
          <ComparisonTable
            columns={D.adrReportColumns}
            rows={D.adrReportRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.15}>
          <MemoryCard
            mnemonic="死亡立即报，严重15日，非严重30日"
            explanation="死亡病例和药品群体不良事件应当立即报告；新的/严重的ADR应当在15日内报告；非严重ADR应当在30日内报告"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4 mt-8" style={{ color: 'var(--ink)' }}>
            04-B 药品召回分级对比
          </h3>
          <ComparisonTable
            columns={D.recallColumns}
            rows={D.recallRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.25}>
          <MemoryCard
            mnemonic="严重危害一级召，暂时逆害二级召，无害他因三级召；通知123，报告137"
            explanation="一级召回：严重危害，通知1日/报告1日；二级召回：暂时可逆危害，通知2日/报告3日；三级召回：无害他因，通知3日/报告7日"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.3}>
          <KeyPointBadge type="key" text={D.keyPointTexts.recallKey} />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.35}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4 mt-8" style={{ color: 'var(--ink)' }}>
            04-C 假劣药刑事责任速查
          </h3>
          <ComparisonTable
            columns={D.fakeDrugCrimeColumns}
            rows={D.fakeDrugCrimeRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.4}>
          <KeyPointBadge type="warning" text={'假药=成分不符（没有有效成分或成分不对），劣药=含量不符（成分对但量不够或质量不达标）。记住"成分vs含量"四字诀即可快速区分。'} />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────────── Section 7: 执业药师 ──────────────────────── */

function Section5Pharmacist() {
  return (
    <section style={{ background: 'var(--paper-dark)', padding: '5rem 2rem' }}>
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-ui-md" style={{ color: 'var(--accent-rust)' }}>05</span>
            <span className="text-ui-sm" style={{ color: 'var(--accent-rust)' }}>药师制度</span>
          </div>
          <h2 className="font-chinese-serif text-display-sm mb-8" style={{ color: 'var(--ink)' }}>
            执业药师制度详解
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="mb-8 max-w-prose" style={{ columns: '2', columnGap: '3rem' }}>
            <p className="text-body-lg mb-4" style={{ color: 'var(--ink-secondary)' }}>
              执业药师是指经全国统一考试合格，取得《执业药师资格证书》并经注册登记，在药品生产、经营、使用单位中执业的药学技术人员。
            </p>
            <p className="text-body-lg" style={{ color: 'var(--ink-secondary)' }}>
              执业药师依法负责药品管理、处方审核和调配、合理用药指导等工作，在执业范围内对执业单位的药品质量和药学服务活动进行监督。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.15}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4" style={{ color: 'var(--ink)' }}>
            05-A 执业药师注册管理
          </h3>
          <ComparisonTable
            columns={D.registrationColumns}
            rows={D.registrationRows}
            className="mb-8"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2}>
          <h3 className="font-chinese-serif text-body-lg font-semibold mb-4" style={{ color: 'var(--ink)' }}>
            05-B 继续教育核心数据
          </h3>
          <ComparisonTable
            columns={D.continuingEduColumns}
            rows={D.continuingEduRows}
            className="mb-6"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.25}>
          <KeyPointBadge type="key" text={D.keyPointTexts.registration} />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────────── Section 8: 2026新增7大考点 ──────────────────────── */

function Section6New2026() {
  return (
    <section style={{ background: 'var(--accent-rust)', padding: '5rem 2rem' }}>
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-ui-md" style={{ color: 'var(--paper)', opacity: 0.7 }}>06</span>
            <span className="text-ui-sm" style={{ color: 'var(--paper)', opacity: 0.7 }}>2026新增 ★★★必考</span>
          </div>
          <h2 className="font-chinese-serif text-display-sm mb-4" style={{ color: 'var(--paper)' }}>
            2026年法规新增七大考点专项
          </h2>
          <p className="text-body-md mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            2026年法规大纲变动幅度约为四科之最（约18%），以下七大新增/重大更新内容是核心命题方向，预计本节内容在考试中占8-12分，务必重点掌握。
          </p>
        </ScrollReveal>

        {/* 01: 828号令 */}
        <ScrollReveal animation="fade-up" delay={0.05}>
          <div className="mb-8" style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '1.5rem' }}>
            <span className="font-display text-body-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>01</span>
            <h3 className="font-chinese-serif text-body-lg font-semibold mt-1 mb-2" style={{ color: 'var(--paper)' }}>
              《药品管理法实施条例》（国务院令第828号）
            </h3>
            <p className="text-body-md mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              2026年大纲首次将新修订的《药品管理法实施条例》纳入独立考核单元，是《药品管理法》最重要的配套行政法规。
            </p>
            <div className="overflow-x-auto" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>管理环节</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>核心变化</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>考试重点</th>
                  </tr>
                </thead>
                <tbody>
                  {D.newLaw828Rows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td className="px-4 py-3 text-body-md font-semibold" style={{ color: 'var(--paper)' }}>{row.link}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.change}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* 02: 网络销售监管 */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="mb-8" style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '1.5rem' }}>
            <span className="font-display text-body-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>02</span>
            <h3 className="font-chinese-serif text-body-lg font-semibold mt-1 mb-2" style={{ color: 'var(--paper)' }}>
              药品网络销售监管独立章节
            </h3>
            <p className="text-body-md mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              2026年大纲将药品网络销售监管从"药品经营管理"中独立出来，单独成章。
            </p>
            <div className="overflow-x-auto mb-4" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>监管维度</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>核心规定</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>关键词</th>
                  </tr>
                </thead>
                <tbody>
                  {D.onlineSalesRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td className="px-4 py-3 text-body-md font-semibold" style={{ color: 'var(--paper)' }}>{row.dimension}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.rule}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.keyword}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>对比项目</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>网络销售</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>传统经营</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>注意点</th>
                  </tr>
                </thead>
                <tbody>
                  {D.onlineVsTraditionalRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td className="px-4 py-3 text-body-md font-semibold" style={{ color: 'var(--paper)' }}>{row.item}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.online}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.traditional}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* 03: 医疗器械 */}
        <ScrollReveal animation="fade-up" delay={0.15}>
          <div className="mb-8" style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '1.5rem' }}>
            <span className="font-display text-body-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>03</span>
            <h3 className="font-chinese-serif text-body-lg font-semibold mt-1 mb-2" style={{ color: 'var(--paper)' }}>
              医疗器械注册与备案管理
            </h3>
            <p className="text-body-md mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              2026年大纲首次将医疗器械监督管理内容纳入执业药师法规考试范围。
            </p>
            <div className="overflow-x-auto" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>类别</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>风险</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>管理措施</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>审批机关</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>有效期</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>举例</th>
                  </tr>
                </thead>
                <tbody>
                  {D.medicalDeviceRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td className="px-4 py-3 text-body-md font-semibold" style={{ color: 'var(--paper)' }}>{row.category}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.risk}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.measure}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.authority}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.validity}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* 04: 药师法 */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="mb-8" style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '1.5rem' }}>
            <span className="font-display text-body-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>04</span>
            <h3 className="font-chinese-serif text-body-lg font-semibold mt-1 mb-2" style={{ color: 'var(--paper)' }}>
              《药师法》相关内容
            </h3>
            <p className="text-body-md mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              2026年大纲新增《药师法》相关内容，标志着药师职业的法律地位将进一步提升。
            </p>
            <div className="overflow-x-auto" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>考点</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>核心内容</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>关键词</th>
                  </tr>
                </thead>
                <tbody>
                  {D.pharmacistLawRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td className="px-4 py-3 text-body-md font-semibold" style={{ color: 'var(--paper)' }}>{row.point}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.content}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.keyword}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* 05: 惩罚性赔偿 */}
        <ScrollReveal animation="fade-up" delay={0.25}>
          <div className="mb-8" style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '1.5rem' }}>
            <span className="font-display text-body-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>05</span>
            <h3 className="font-chinese-serif text-body-lg font-semibold mt-1 mb-2" style={{ color: 'var(--paper)' }}>
              惩罚性赔偿司法解释
            </h3>
            <p className="text-body-md mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              《最高人民法院关于审理食品药品惩罚性赔偿纠纷案件适用法律若干问题的解释》（法释〔2024〕9号）是重要新增内容。
            </p>
            <div className="overflow-x-auto" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>核心内容</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>具体要求</th>
                  </tr>
                </thead>
                <tbody>
                  {D.punishmentRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td className="px-4 py-3 text-body-md font-semibold" style={{ color: 'var(--paper)' }}>{row.item}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* 06: 三大政策文件 */}
        <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="mb-8" style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '1.5rem' }}>
            <span className="font-display text-body-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>06</span>
            <h3 className="font-chinese-serif text-body-lg font-semibold mt-1 mb-2" style={{ color: 'var(--paper)' }}>
              三大政策文件
            </h3>
            <div className="overflow-x-auto" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>政策文件</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>方向</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>核心要求</th>
                  </tr>
                </thead>
                <tbody>
                  {D.policyDocumentsRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td className="px-4 py-3 text-body-md font-semibold" style={{ color: 'var(--paper)' }}>{row.doc}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.direction}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* 07: 医保监管更新 */}
        <ScrollReveal animation="fade-up" delay={0.35}>
          <div className="mb-8" style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '1.5rem' }}>
            <span className="font-display text-body-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>07</span>
            <h3 className="font-chinese-serif text-body-lg font-semibold mt-1 mb-2" style={{ color: 'var(--paper)' }}>
              医保监管更新
            </h3>
            <p className="text-body-md mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              2026年大纲对医保监管部分进行了较大幅度更新，重点涵盖医保支付改革最新进展和医保基金监管新规。
            </p>
            <div className="overflow-x-auto" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>监管领域</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>更新要点</th>
                    <th className="text-left px-4 py-3 text-ui-md uppercase font-semibold" style={{ color: 'var(--paper)' }}>关键词</th>
                  </tr>
                </thead>
                <tbody>
                  {D.insuranceUpdateRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td className="px-4 py-3 text-body-md font-semibold" style={{ color: 'var(--paper)' }}>{row.area}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.update}</td>
                      <td className="px-4 py-3 text-body-md" style={{ color: 'rgba(255,255,255,0.8)' }}>{row.keyword}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.4}>
          <div
            className="mt-6 p-4"
            style={{
              background: 'rgba(255,255,255,0.1)',
              borderLeft: '4px solid rgba(255,255,255,0.4)',
            }}
          >
            <p className="text-body-md font-semibold" style={{ color: 'var(--paper)' }}>重点</p>
            <p className="text-body-md mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {D.keyPointTexts.new2026}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────────── Section 9: 记忆口诀总表 ──────────────────────── */

function Section7Mnemonics() {
  return (
    <section style={{ background: 'var(--paper-dark)', padding: '5rem 2rem' }}>
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-ui-md" style={{ color: 'var(--accent-rust)' }}>07</span>
            <span className="text-ui-sm" style={{ color: 'var(--accent-rust)' }}>速记口诀</span>
          </div>
          <h2 className="font-chinese-serif text-display-sm mb-8" style={{ color: 'var(--ink)' }}>
            法规记忆口诀总表
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up-stagger" stagger={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {D.allMemoryCards.map((card, i) => (
              <MemoryCard
                key={i}
                mnemonic={card.mnemonic}
                explanation={`【${card.scenario}】${card.explanation}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────────── Section 10: 易错易混点 ──────────────────────── */

function Section8Traps() {
  return (
    <section style={{ background: 'var(--paper)', padding: '5rem 2rem' }}>
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-ui-md" style={{ color: 'var(--accent-rust)' }}>08</span>
            <span className="text-ui-sm" style={{ color: 'var(--accent-rust)' }}>易错警示</span>
          </div>
          <h2 className="font-chinese-serif text-display-sm mb-8" style={{ color: 'var(--ink)' }}>
            法规易错易混点辨析
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up-stagger" stagger={0.12} className="space-y-4">
          {D.warningPoints.map((wp, i) => (
            <KeyPointBadge
              key={i}
              type="warning"
              text={`${wp.text} —— ${wp.trap}`}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ──────────────────────── Next Volume Navigation ──────────────────────── */

function NextVolumeNav() {
  return (
    <section style={{ background: 'var(--paper-dark)', padding: '5rem 2rem' }}>
      <div className="max-w-[800px] mx-auto text-center">
        <ScrollReveal animation="fade-up">
          <p className="text-ui-sm mb-4" style={{ color: 'var(--ink-tertiary)' }}>下一册</p>
          <h2 className="font-chinese-serif text-display-md mb-4" style={{ color: 'var(--ink)' }}>
            药学专业知识（一）精讲
          </h2>
          <p className="text-body-lg mb-8" style={{ color: 'var(--ink-secondary)' }}>
            药剂学、药物化学、药效学与生命药学专题
          </p>
          <Link
            to="/vol/3"
            className="inline-flex items-center gap-2 px-6 py-3 font-sans text-ui-md transition-all duration-250 hover:opacity-90"
            style={{
              background: 'var(--accent-rust)',
              color: 'var(--paper)',
            }}
          >
            继续阅读
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════ Main Page ═══════════════════════════ */

export default function Vol2Regulations() {
  return (
    <div>
      <Vol2Cover />
      <LeadArticle />

      <SectionDivider />
      <Section1LegalSystem />

      <SectionDivider />
      <Section2DrugBusiness />

      <SectionDivider />
      <Section3SpecialDrugs />

      <SectionDivider />
      <Section4PostMarket />

      <SectionDivider />
      <Section5Pharmacist />

      <SectionDivider />
      <Section6New2026 />

      <SectionDivider />
      <Section7Mnemonics />

      <SectionDivider />
      <Section8Traps />

      <SectionDivider />
      <NextVolumeNav />
    </div>
  );
}
