import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Search,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  BookOpen,
  FlaskConical,
  Calculator,
  ClipboardList,
  Zap,
  Filter,
} from 'lucide-react';
import { generateQuestions, type GeneratedQuestion } from '@/data/question-templates';

/* ---------- Types ---------- */
type QType = 'choice' | 'matching' | 'calc' | 'all';
type Difficulty = 'basic' | 'advanced' | 'challenge';

interface FilterState {
  keywords: string;
  qType: QType;
  difficulty: Difficulty;
  count: number;
}

/* ---------- Constants ---------- */
const TYPE_PILLS: { value: QType; label: string; icon: React.ReactNode }[] = [
  { value: 'choice', label: '最佳选择题', icon: <BookOpen size={14} /> },
  { value: 'matching', label: '配伍选择题', icon: <ClipboardList size={14} /> },
  { value: 'calc', label: '计算题', icon: <Calculator size={14} /> },
  { value: 'all', label: '全部题型', icon: <FlaskConical size={14} /> },
];

const DIFF_PILLS: { value: Difficulty; label: string; desc: string }[] = [
  { value: 'basic', label: '基础', desc: '核心知识点' },
  { value: 'advanced', label: '进阶', desc: '综合应用' },
  { value: 'challenge', label: '挑战', desc: '深度辨析' },
];

const COUNT_OPTIONS = [5, 10, 20];

/* ---------- Seed Keywords ---------- */
const SEED_KEYWORDS = [
  '高血压', '头孢', '胰岛素', 'PPI', '哮喘',
  '他汀', '癫痫', '阿司匹林', '地高辛', '抗肿瘤',
  '糖尿病', '抗菌药', '药物分析', '药事管理',
];

/* ---------- Easing ---------- */
const easeEditorial = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ==========================================
   Hero Section
   ========================================== */
function HeroSection() {
  return (
    <section
      className="relative w-full px-6 pt-16 pb-12 lg:pt-20 lg:pb-14 overflow-hidden"
      style={{ background: 'var(--ink)' }}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeEditorial }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-ui-sm"
            style={{ background: 'rgba(194, 91, 60, 0.2)', color: '#E8A88E' }}
          >
            <Zap size={12} />
            智能出题
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeEditorial }}
          className="font-chinese-serif text-3xl lg:text-4xl font-bold tracking-tight mb-4"
          style={{ color: 'var(--paper)' }}
        >
          AI出题助手
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeEditorial }}
          className="font-chinese-sans text-base lg:text-lg"
          style={{ color: 'var(--ink-tertiary)' }}
        >
          输入知识点，智能生成练习题
        </motion.p>
      </div>
    </section>
  );
}

/* ==========================================
   Question Card
   ========================================== */
function QuestionCard({
  q,
  index,
  showAnswer,
}: {
  q: GeneratedQuestion;
  index: number;
  showAnswer: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(showAnswer);

  useEffect(() => {
    setRevealed(showAnswer);
  }, [showAnswer]);

  const isCorrect = selected === q.correct;
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: easeEditorial }}
      className="border rounded-lg overflow-hidden"
      style={{
        background: 'var(--paper)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Card Header */}
      <div
        className="px-5 py-3 flex items-center gap-3 border-b"
        style={{ borderColor: 'var(--border-light)', background: 'var(--paper-dark)' }}
      >
        <span
          className="font-display text-sm font-semibold px-2 py-0.5 rounded"
          style={{ background: 'var(--accent-rust-light)', color: 'var(--accent-rust)' }}
        >
          {index + 1}
        </span>
        <span className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>
          {q.type === 'choice' && '最佳选择题'}
          {q.type === 'matching' && '配伍选择题'}
          {q.type === 'calc' && '计算题'}
        </span>
        <span className="text-ui-sm ml-auto" style={{ color: 'var(--ink-quaternary)' }}>
          {q.category}
        </span>
      </div>

      {/* Question Body */}
      <div className="px-5 py-4">
        <p
          className="font-chinese-sans text-sm lg:text-base leading-relaxed mb-4 whitespace-pre-line"
          style={{ color: 'var(--ink)' }}
        >
          {q.question}
        </p>

        {/* Options */}
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrectOption = revealed && i === q.correct;
            const isWrong = revealed && isSelected && !isCorrect;

            return (
              <button
                key={i}
                onClick={() => {
                  if (!revealed) setSelected(i);
                }}
                className={`
                  w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 flex items-start gap-3
                  ${isCorrectOption ? 'ring-1' : ''}
                  ${isWrong ? 'ring-1' : ''}
                `}
                style={{
                  background: isCorrectOption
                    ? 'var(--accent-olive-light)'
                    : isWrong
                    ? 'rgba(220, 50, 50, 0.08)'
                    : isSelected
                    ? 'var(--accent-rust-light)'
                    : 'var(--paper-dark)',
                  borderColor: isCorrectOption
                    ? 'var(--accent-olive)'
                    : isWrong
                    ? '#DC3232'
                    : isSelected
                    ? 'var(--accent-rust)'
                    : 'var(--border)',
                  color: 'var(--ink)',
                }}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-display font-semibold mt-0.5"
                  style={{
                    background: isCorrectOption
                      ? 'var(--accent-olive)'
                      : isWrong
                      ? '#DC3232'
                      : isSelected
                      ? 'var(--accent-rust)'
                      : 'var(--border)',
                    color: isSelected || isCorrectOption || isWrong ? '#fff' : 'var(--ink-secondary)',
                  }}
                >
                  {letters[i]}
                </span>
                <span className="font-chinese-sans text-sm leading-relaxed">{opt}</span>
                {isCorrectOption && (
                  <CheckCircle2 size={16} className="ml-auto flex-shrink-0" style={{ color: 'var(--accent-olive)' }} />
                )}
                {isWrong && (
                  <XCircle size={16} className="ml-auto flex-shrink-0" style={{ color: '#DC3232' }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Reveal / Explanation */}
        <AnimatePresence>
          {(revealed || selected !== null) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <div
                className="rounded-lg px-4 py-3 flex items-start gap-2"
                style={{ background: 'var(--accent-gold-light)' }}
              >
                <Lightbulb size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <p className="text-ui-sm mb-1" style={{ color: 'var(--accent-gold)' }}>
                    解析
                  </p>
                  <p className="font-chinese-sans text-sm" style={{ color: 'var(--ink-secondary)' }}>
                    {q.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ==========================================
   Main Page
   ========================================== */
export default function AIGenerator() {
  const [filters, setFilters] = useState<FilterState>({
    keywords: '',
    qType: 'all',
    difficulty: 'basic',
    count: 10,
  });
  const [questions, setQuestions] = useState<GeneratedQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleGenerate = useCallback(() => {
    setLoading(true);
    setHasGenerated(false);

    // Simulate AI "thinking"
    setTimeout(() => {
      const kws = filters.keywords
        ? filters.keywords.split(/[,，\s]+/).filter(Boolean)
        : [];
      const generated = generateQuestions(
        kws,
        filters.qType,
        filters.difficulty,
        filters.count
      );
      setQuestions(generated);
      setLoading(false);
      setHasGenerated(true);
      setShowAllAnswers(false);

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 1200);
  }, [filters]);

  const handleKeywordClick = (kw: string) => {
    setFilters((prev) => ({
      ...prev,
      keywords: prev.keywords ? `${prev.keywords}, ${kw}` : kw,
    }));
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)' }}>
      {/* Hero */}
      <HeroSection />

      {/* Controls Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border rounded-xl p-5 lg:p-6 shadow-editorial"
          style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
        >
          {/* Search Input */}
          <div className="mb-5">
            <label
              className="text-ui-sm mb-2 block"
              style={{ color: 'var(--ink-tertiary)' }}
            >
              知识点关键词
            </label>
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--ink-quaternary)' }}
              />
              <input
                type="text"
                value={filters.keywords}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, keywords: e.target.value }))
                }
                placeholder="输入药物名、知识点或题型（如：头孢菌素、半衰期、配伍题）"
                className="w-full pl-10 pr-4 py-3 rounded-lg border font-chinese-sans text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                style={{
                  background: 'var(--paper-dark)',
                  borderColor: 'var(--border)',
                  color: 'var(--ink)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-rust)';
                  e.currentTarget.style.setProperty('--tw-ring-color', 'var(--accent-rust-light)');
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleGenerate();
                }}
              />
            </div>

            {/* Quick Keywords */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {SEED_KEYWORDS.map((kw) => (
                <button
                  key={kw}
                  onClick={() => handleKeywordClick(kw)}
                  className="px-2 py-0.5 rounded-full text-xs font-chinese-sans transition-all duration-200 hover:scale-105"
                  style={{
                    background: filters.keywords.includes(kw)
                      ? 'var(--accent-rust-light)'
                      : 'var(--paper-dark)',
                    color: filters.keywords.includes(kw)
                      ? 'var(--accent-rust)'
                      : 'var(--ink-tertiary)',
                    border: `1px solid ${filters.keywords.includes(kw) ? 'var(--accent-rust)' : 'var(--border)'}`,
                  }}
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>

          {/* Question Type Pills */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <Filter size={12} style={{ color: 'var(--ink-tertiary)' }} />
              <label className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>
                题型
              </label>
            </div>
            <div className="flex flex-wrap gap-2">
              {TYPE_PILLS.map((pill) => (
                <button
                  key={pill.value}
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, qType: pill.value }))
                  }
                  className={`
                    inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-chinese-sans
                    transition-all duration-200
                  `}
                  style={{
                    background:
                      filters.qType === pill.value
                        ? 'var(--accent-rust)'
                        : 'var(--paper-dark)',
                    borderColor:
                      filters.qType === pill.value
                        ? 'var(--accent-rust)'
                        : 'var(--border)',
                    color:
                      filters.qType === pill.value
                        ? '#fff'
                        : 'var(--ink-secondary)',
                  }}
                >
                  {pill.icon}
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Pills */}
          <div className="mb-5">
            <label className="text-ui-sm mb-2 block" style={{ color: 'var(--ink-tertiary)' }}>
              难度
            </label>
            <div className="flex flex-wrap gap-2">
              {DIFF_PILLS.map((pill) => (
                <button
                  key={pill.value}
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, difficulty: pill.value }))
                  }
                  className={`
                    px-4 py-2 rounded-lg border text-sm font-chinese-sans transition-all duration-200
                  `}
                  style={{
                    background:
                      filters.difficulty === pill.value
                        ? 'var(--accent-rust)'
                        : 'var(--paper-dark)',
                    borderColor:
                      filters.difficulty === pill.value
                        ? 'var(--accent-rust)'
                        : 'var(--border)',
                    color:
                      filters.difficulty === pill.value
                        ? '#fff'
                        : 'var(--ink-secondary)',
                  }}
                >
                  {pill.label}
                  <span className="ml-1 opacity-70 text-xs">({pill.desc})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Count Selector & Generate Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
            <div>
              <label className="text-ui-sm mb-2 block" style={{ color: 'var(--ink-tertiary)' }}>
                出题数量
              </label>
              <div className="flex gap-2">
                {COUNT_OPTIONS.map((n) => (
                  <button
                    key={n}
                    onClick={() =>
                      setFilters((prev) => ({ ...prev, count: n }))
                    }
                    className={`
                      w-12 h-10 rounded-lg border text-sm font-display font-semibold
                      transition-all duration-200
                    `}
                    style={{
                      background:
                        filters.count === n
                          ? 'var(--accent-rust)'
                          : 'var(--paper-dark)',
                      borderColor:
                        filters.count === n
                          ? 'var(--accent-rust)'
                          : 'var(--border)',
                      color:
                        filters.count === n ? '#fff' : 'var(--ink-secondary)',
                    }}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1" />

            <button
              onClick={handleGenerate}
              disabled={loading}
              className={`
                w-full sm:w-auto inline-flex items-center justify-center gap-2
                px-8 py-3 rounded-lg text-sm font-chinese-sans font-medium
                transition-all duration-300
                ${loading ? 'cursor-not-allowed opacity-80' : 'hover:scale-[1.02] active:scale-[0.98]'}
              `}
              style={{
                background: loading ? 'var(--ink-tertiary)' : 'var(--accent-rust)',
                color: '#fff',
              }}
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles size={16} />
                  </motion.div>
                  正在出题...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  开始出题
                </>
              )}
            </button>
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        {hasGenerated && questions.length > 0 && (
          <>
            {/* Results Toolbar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"
            >
              <div className="flex items-center gap-3">
                <h2
                  className="font-chinese-serif text-xl font-semibold"
                  style={{ color: 'var(--ink)' }}
                >
                  生成结果
                </h2>
                <span
                  className="text-ui-sm px-2 py-0.5 rounded-full"
                  style={{
                    background: 'var(--accent-olive-light)',
                    color: 'var(--accent-olive)',
                  }}
                >
                  共 {questions.length} 题
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAllAnswers((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-chinese-sans transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: 'var(--paper)',
                    borderColor: 'var(--border)',
                    color: 'var(--ink-secondary)',
                  }}
                >
                  {showAllAnswers ? (
                    <><ChevronUp size={14} /> 隐藏答案</>
                  ) : (
                    <><ChevronDown size={14} /> 显示全部答案</>
                  )}
                </button>
                <button
                  onClick={handleRegenerate}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-chinese-sans transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: 'var(--paper)',
                    borderColor: 'var(--accent-rust)',
                    color: 'var(--accent-rust)',
                  }}
                >
                  <RotateCcw size={14} />
                  重新出题
                </button>
              </div>
            </motion.div>

            {/* Questions */}
            <div className="space-y-4">
              {questions.map((q, i) => (
                <QuestionCard
                  key={q.id}
                  q={q}
                  index={i}
                  showAnswer={showAllAnswers}
                />
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <button
                onClick={handleRegenerate}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-chinese-sans transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: 'var(--accent-rust-light)',
                  color: 'var(--accent-rust)',
                  border: '1px solid var(--accent-rust)',
                }}
              >
                <RotateCcw size={14} />
                换一批题目
              </button>
            </motion.div>
          </>
        )}

        {hasGenerated && questions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search size={40} className="mx-auto mb-3" style={{ color: 'var(--ink-quaternary)' }} />
            <p className="font-chinese-sans text-base" style={{ color: 'var(--ink-tertiary)' }}>
              未找到匹配的题目，请尝试其他关键词
            </p>
          </motion.div>
        )}

        {!hasGenerated && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: 'var(--accent-rust-light)' }}
            >
              <Sparkles size={28} style={{ color: 'var(--accent-rust)' }} />
            </div>
            <p className="font-chinese-serif text-lg font-medium mb-2" style={{ color: 'var(--ink-secondary)' }}>
              准备好开始练习了吗？
            </p>
            <p className="font-chinese-sans text-sm" style={{ color: 'var(--ink-tertiary)' }}>
              输入关键词，选择题型和难度，点击「开始出题」生成个性化练习题
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
              {[
                { icon: <BookOpen size={20} />, title: '30+ 选择题模板', desc: '覆盖各系统药物' },
                { icon: <ClipboardList size={20} />, title: '20+ 配伍题模板', desc: '药物机制与分类' },
                { icon: <Calculator size={20} />, title: '15+ 计算题模板', desc: '药动学与剂量计算' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border"
                  style={{
                    background: 'var(--paper-dark)',
                    borderColor: 'var(--border-light)',
                  }}
                >
                  <div className="mb-2" style={{ color: 'var(--accent-rust)' }}>
                    {item.icon}
                  </div>
                  <p className="font-chinese-sans text-sm font-medium" style={{ color: 'var(--ink)' }}>
                    {item.title}
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--ink-tertiary)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="py-16 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 rounded-full border-2 border-t-transparent mx-auto mb-4"
              style={{ borderColor: 'var(--accent-rust)', borderTopColor: 'transparent' }}
            />
            <p className="font-chinese-sans text-sm" style={{ color: 'var(--ink-tertiary)' }}>
              AI正在为您生成题目...
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
