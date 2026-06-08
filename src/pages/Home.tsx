import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import DropCap from '@/components/DropCap';
import SectionDivider from '@/components/SectionDivider';
import MemoryCard from '@/components/MemoryCard';
import KeyPointBadge from '@/components/KeyPointBadge';
import ScrollReveal from '@/components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

/* ========== Volume Data ========== */
const volumes = [
  {
    num: 'I',
    title: '备考全攻略',
    subtitle: '考试新政、时间规划、答题技巧与跨科目考点梳理',
    meta: '8 章节 · 12 表格',
    image: '/vol1-strategy.jpg',
    path: '/vol/1',
  },
  {
    num: 'II',
    title: '药事管理与法规精讲',
    subtitle: '法律体系、药品管理、特殊药品与2026新增法规',
    meta: '12 章节 · 35 表格',
    image: '/vol2-regulations.jpg',
    path: '/vol/2',
  },
  {
    num: 'III',
    title: '药学专业知识（一）精讲',
    subtitle: '药剂学、药物化学、药效学与生命药学专题',
    meta: '18 章节 · 52 表格',
    image: '/vol3-chemistry.jpg',
    path: '/vol/3',
  },
  {
    num: 'IV',
    title: '药学专业知识（二）精讲',
    subtitle: '各系统药物、抗菌药、抗肿瘤药详解',
    meta: '14 章节 · 38 表格',
    image: '/vol4-drugs.jpg',
    path: '/vol/4',
  },
  {
    num: 'V',
    title: '药学综合知识与技能精讲',
    subtitle: '处方审核、43种疾病管理、案例分析与TDM监测',
    meta: '15 章节 · 28 表格',
    image: '/vol5-clinical.jpg',
    path: '/vol/5',
  },
];

const stats = [
  { number: '80,000+', label: '字精编内容' },
  { number: '160+', label: '对比表格' },
  { number: '46', label: '记忆口诀' },
  { number: '5', label: '分册期刊' },
];

/* ========== Easing Constants ========== */
const easeEditorial = [0.22, 1, 0.36, 1] as [number, number, number, number];
const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ========== Section 1: Hero ========== */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;
    const ctx = gsap.context(() => {
      // Image parallax
      gsap.to(imageRef.current!, {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current!,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: 'var(--paper)' }}
    >
      {/* Background Paper Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url(/hero-cover-bg.jpg)',
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-1 w-full max-w-page mx-auto flex flex-col lg:flex-row min-h-[100dvh]">
        {/* Left Column — Typography */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeEditorial }}
            className="text-ui-sm"
            style={{ color: 'var(--accent-rust)', letterSpacing: '0.15em', marginTop: '5vh' }}
          >
            2026 · 西药类 · 五册合辑
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: easeOutExpo }}
            className="font-chinese-serif mt-4"
            style={{
              fontSize: 'clamp(4rem, 10vw, 9rem)',
              fontWeight: 700,
              color: 'var(--ink)',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
            }}
          >
            药考纪
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: easeOutExpo }}
            className="font-display mt-2"
            style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 700,
              color: 'var(--ink)',
              letterSpacing: '0.02em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
            }}
          >
            PHARMACIST
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: easeEditorial }}
            className="font-chinese-sans text-body-xl mt-6"
            style={{ color: 'var(--ink-secondary)', maxWidth: '400px' }}
          >
            执业药师备考期刊系列
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: easeEditorial }}
            className="my-8 mx-auto lg:mx-0 origin-center"
            style={{
              width: '80px',
              height: '2px',
              background: 'var(--accent-rust)',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: easeEditorial }}
            className="text-body-md mx-auto lg:mx-0 text-center lg:text-left"
            style={{ color: 'var(--ink-secondary)', maxWidth: '420px', lineHeight: 1.7 }}
          >
            五册精编备考资料，覆盖药事法规、药学专业知识与综合技能，以杂志编辑的精致排版呈现80,000+考点。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: easeEditorial }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          >
            <Link
              to="/vol/1"
              className="text-ui-lg font-medium px-8 py-3.5 transition-all duration-250 hover:brightness-90"
              style={{
                background: 'var(--accent-rust)',
                color: 'var(--paper)',
              }}
            >
              开始阅读
            </Link>
            <a
              href="#volume-grid"
              className="text-ui-lg font-medium px-8 py-3.5 border transition-all duration-250 hover:border-[var(--accent-rust)] hover:text-[var(--accent-rust)]"
              style={{
                background: 'transparent',
                borderColor: 'var(--border)',
                color: 'var(--ink-secondary)',
              }}
            >
              浏览目录
            </a>
          </motion.div>

          {/* Issue Metadata */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: easeEditorial }}
            className="text-ui-sm mt-auto pt-12"
            style={{ color: 'var(--ink-quaternary)', letterSpacing: '0.08em' }}
          >
            Vol. I–V · 2026 Edition · 80,000+ Words · 160+ Tables
          </motion.p>
        </div>

        {/* Right Column — Hero Image */}
        <div className="w-full lg:w-[45%] relative min-h-[40vh] lg:min-h-full">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: easeOutExpo }}
            className="absolute inset-0"
          >
            <img
              src="/hero-cover-bg.jpg"
              alt="Pharmaceutical editorial still-life"
              className="w-full h-full object-cover"
            />
            {/* Left edge gradient blend */}
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background: 'linear-gradient(to right, var(--paper) 0%, transparent 30%)',
              }}
            />
            {/* Bottom gradient */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background: 'linear-gradient(to top, var(--paper) 0%, transparent 40%)',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown
          size={24}
          className="animate-bounce-scroll"
          style={{ color: 'var(--ink-quaternary)' }}
        />
      </motion.div>
    </section>
  );
}

/* ========== Section 2: Editorial Masthead Bar ========== */
function MastheadBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className={`
        w-full z-40 transition-all duration-400
        ${isSticky ? 'fixed top-0 left-0' : 'relative'}
        hidden lg:block
      `}
      style={{
        background: 'var(--ink)',
        color: 'var(--paper)',
        boxShadow: isSticky ? '0 1px 0 rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-chinese-serif text-base font-semibold" style={{ color: 'var(--paper)' }}>
            药考纪
          </span>
          <span style={{ color: 'var(--ink-tertiary)' }}>◆</span>
          <span className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>
            2026 EDITION
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {['首页', '备考攻略', '药事法规', '药学知识', '综合技能'].map((item, i) => (
            <a
              key={item}
              href={i === 0 ? '#' : `#vol${i}`}
              className="text-ui-md link-underline transition-colors duration-200 hover:text-[var(--accent-rust)]"
              style={{ color: 'var(--paper)', letterSpacing: '0.06em' }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>
            执业药师备考期刊系列
          </span>
        </div>
      </div>
    </div>
  );
}

/* ========== Section 3: About This Series ========== */
function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ background: 'var(--paper-dark)' }}
    >
      <div className="max-w-[800px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="section-number">01</span>
            <span className="text-ui-sm" style={{ color: 'var(--ink-tertiary)', letterSpacing: '0.1em' }}>
              关于本系列
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="font-chinese-serif text-display-sm mb-8"
            style={{ color: 'var(--ink)' }}
          >
            一本为执业药师考生编辑的备考期刊
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <DropCap letter="药">
            药学专业资格考试的备考过程往往被淹没在厚重的教材与零散的笔记之中。我们尝试以一本期刊编辑的严谨与审美，将执业药师考试的全部知识点重新编排——从药事管理与法规到药学综合技能，五册内容覆盖考试大纲的每一个角落。
          </DropCap>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p
            className="text-body-lg mt-6"
            style={{ color: 'var(--ink-secondary)' }}
          >
            每一册都采用杂志排版的阅读体验：多栏布局让长文不再枯燥，对比表格让药物知识一目了然，记忆口诀以精心设计的卡片呈现，易错点则以醒目标注提醒你注意。这不是一本教材的电子化复制，而是一次为在职考生量身定制的知识重构。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <SectionDivider className="my-12" />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========== Section 4: Volume Grid ========== */
function VolumeGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gridRef.current!.querySelectorAll('.vol-card');
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current!,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="volume-grid"
      className="py-24 lg:py-32"
      style={{ background: 'var(--paper)' }}
    >
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">02</span>
          </div>
          <h2
            className="font-chinese-serif text-display-sm"
            style={{ color: 'var(--ink)' }}
          >
            五册内容
          </h2>
          <p className="text-body-md mt-2" style={{ color: 'var(--ink-tertiary)' }}>
            覆盖执业药师考试全部科目
          </p>
        </div>

        {/* Volume Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {volumes.map(vol => (
            <Link
              key={vol.num}
              to={vol.path}
              className="vol-card group block overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-editorial"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--paper)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-rust)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* Image Area */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={vol.image}
                  alt={vol.title}
                  className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, var(--paper) 0%, transparent 40%)',
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col" style={{ minHeight: '200px' }}>
                <p
                  className="font-display text-xs uppercase"
                  style={{ color: 'var(--accent-rust)', letterSpacing: '0.1em' }}
                >
                  Vol. {vol.num}
                </p>
                <h3
                  className="font-chinese-serif text-body-lg font-semibold mt-2 leading-snug transition-colors duration-200 group-hover:text-[var(--accent-rust)]"
                  style={{ color: 'var(--ink)' }}
                >
                  {vol.title}
                </h3>
                <p
                  className="text-body-sm mt-2 line-clamp-3"
                  style={{ color: 'var(--ink-tertiary)' }}
                >
                  {vol.subtitle}
                </p>
                <p
                  className="text-ui-sm mt-auto pt-4"
                  style={{ color: 'var(--ink-quaternary)' }}
                >
                  {vol.meta}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== Section 5: Statistics Band ========== */
function StatsBand() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!statsRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: statsRef.current!,
        start: 'top 80%',
        onEnter: () => {
          if (animated) return;
          setAnimated(true);
          const targets = [80000, 160, 46, 5];
          const duration = 1800;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCounts(targets.map(t => Math.round(t * eased)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        },
      });
    }, statsRef);

    return () => ctx.revert();
  }, [animated]);

  const displayNumbers = [
    counts[0] > 0 ? `${counts[0].toLocaleString()}+` : '0+',
    counts[1] > 0 ? `${counts[1]}+` : '0+',
    `${counts[2]}`,
    `${counts[3]}`,
  ];

  return (
    <section
      ref={statsRef}
      className="py-16"
      style={{ background: 'var(--accent-rust)', color: 'var(--paper)' }}
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 700,
                  color: 'var(--paper)',
                }}
              >
                {displayNumbers[i]}
              </div>
              <p
                className="font-chinese-sans text-body-sm mt-2"
                style={{ color: 'rgba(250,248,245,0.7)' }}
              >
                {stat.label}
              </p>
              {i < stats.length - 1 && (
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 hidden lg:block"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== Section 6: Featured Excerpts ========== */
function FeaturedExcerpts() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: 'var(--paper-dark)' }}
    >
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-number">03</span>
              <span className="text-ui-sm" style={{ color: 'var(--ink-tertiary)', letterSpacing: '0.1em' }}>
                内容精选
              </span>
            </div>
            <h2
              className="font-chinese-serif text-display-sm"
              style={{ color: 'var(--ink)' }}
            >
              精选预览
            </h2>
          </div>
        </ScrollReveal>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Memory Card */}
          <ScrollReveal animation="scale-in">
            <MemoryCard
              mnemonic="四环素类，光敏骨牙黄，八岁以下不用忙，妊娠哺乳要提防"
              explanation="四环素类药物不良反应速记：光敏反应、骨骼牙齿黄染，8岁以下儿童禁用，妊娠期及哺乳期禁用。"
            />
          </ScrollReveal>

          {/* Right — Stacked Excerpts */}
          <div className="space-y-8">
            {/* Comparison Table Preview */}
            <ScrollReveal delay={0.2}>
              <div
                className="p-6"
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--border)',
                }}
              >
                <h4
                  className="font-chinese-serif text-base font-semibold mb-4"
                  style={{ color: 'var(--ink)' }}
                >
                  药物对比速查
                </h4>
                <div className="overflow-hidden" style={{ maxHeight: '200px', position: 'relative' }}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
                        <th className="text-left px-3 py-2 font-sans text-xs uppercase">药物</th>
                        <th className="text-left px-3 py-2 font-sans text-xs uppercase">类别</th>
                        <th className="text-left px-3 py-2 font-sans text-xs uppercase">主要作用</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { drug: '青霉素', cat: 'β-内酰胺', action: '抑制细胞壁合成' },
                        { drug: '红霉素', cat: '大环内酯', action: '抑制蛋白质合成' },
                        { drug: '四环素', cat: '四环素类', action: '抑制蛋白质合成' },
                        { drug: '庆大霉素', cat: '氨基糖苷', action: '抑制蛋白质合成' },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            background: i % 2 === 0 ? 'var(--paper)' : 'var(--paper-dark)',
                            borderBottom: '1px solid var(--border-light)',
                          }}
                        >
                          <td className="px-3 py-2 font-semibold" style={{ color: 'var(--ink)' }}>{row.drug}</td>
                          <td className="px-3 py-2" style={{ color: 'var(--ink-secondary)' }}>{row.cat}</td>
                          <td className="px-3 py-2" style={{ color: 'var(--ink-secondary)' }}>{row.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Fade overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, transparent, var(--paper))' }}
                  />
                </div>
                <a
                  href="#/vol/4"
                  className="inline-block mt-4 text-body-sm transition-colors duration-200 hover:underline"
                  style={{ color: 'var(--accent-rust)' }}
                >
                  查看完整表格 →
                </a>
              </div>
            </ScrollReveal>

            {/* Key Point Badge Preview */}
            <ScrollReveal delay={0.3}>
              <KeyPointBadge
                type="key"
                text="执业药师考试采用机考形式，2026年起题型全部为客观题（A型、B型、C型、X型），考试时间为150分钟/科。"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== Section 7: Call to Action ========== */
function CTASection() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: 'var(--ink)', color: 'var(--paper)' }}
    >
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <ScrollReveal>
          <div
            className="mx-auto mb-12"
            style={{
              width: '60px',
              height: '1px',
              background: 'rgba(255,255,255,0.2)',
            }}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="font-chinese-serif text-display-md"
            style={{ color: 'var(--paper)' }}
          >
            开启备考之旅
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="text-body-lg mt-4"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            五册精编内容，从备考策略到综合技能，为你的执业药师考试之路提供系统化的知识支撑。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Link
            to="/vol/1"
            className="inline-block mt-8 text-ui-lg font-medium px-10 py-4 transition-all duration-250 hover:-translate-y-0.5"
            style={{
              background: 'var(--accent-rust)',
              color: 'var(--paper)',
              boxShadow: '0 8px 24px rgba(194,91,60,0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#E06B4A';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--accent-rust)';
            }}
          >
            阅读第一册：备考全攻略
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p
            className="text-body-sm mt-6"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            或使用上方搜索快速查找考点
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========== Home Page ========== */
export default function Home() {
  return (
    <div>
      <HeroSection />
      <MastheadBar />
      <AboutSection />
      <VolumeGrid />
      <StatsBand />
      <FeaturedExcerpts />
      <CTASection />
    </div>
  );
}
