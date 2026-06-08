import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Flag,
  CheckCircle2,
  XCircle,
  BookOpen,
  Award,
  RotateCcw,
  FileText,
  BarChart3,
  Circle,
  AlertTriangle,
  CheckSquare,
  Square,
  Timer,
  Zap,
} from 'lucide-react';
import { generateQuestions, type GeneratedQuestion } from '@/data/question-templates';

/* ==========================================
   Types
   ========================================== */
type ExamPhase = 'config' | 'exam' | 'review';

interface ExamConfig {
  subjects: string[];
  count: number;
  timeLimit: number; // minutes
}

interface ExamAnswer {
  questionId: string;
  selected: number | null;
  marked: boolean;
}

/* ==========================================
   Constants
   ========================================== */
const SUBJECT_OPTIONS = [
  { key: 'pharmacy1', label: '药学专业知识（一）', tags: ['药剂学', '药物化学', '药效学'] },
  { key: 'pharmacy2', label: '药学专业知识（二）', tags: ['抗高血压药', '抗菌药物', '消化系统药物', '糖尿病药物', '平喘药', '调血脂药', '抗凝药', '中枢神经系统药物', '糖皮质激素', '利尿药'] },
  { key: 'regulations', label: '药事管理与法规', tags: ['药事管理与法规'] },
  { key: 'practice', label: '药学综合知识与技能', tags: ['心血管药物', '甲状腺', '药动学', '剂量计算', 'TDM', '输液'] },
];

const LETTERS = ['A', 'B', 'C', 'D'];

const easeEditorial = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ==========================================
   Helper Functions
   ========================================== */
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function generateExamQuestions(config: ExamConfig): GeneratedQuestion[] {
  const allQuestions: GeneratedQuestion[] = [];
  const perSubject = Math.floor(config.count / config.subjects.length);
  let remainder = config.count % config.subjects.length;

  for (const subjKey of config.subjects) {
    const subject = SUBJECT_OPTIONS.find((s) => s.key === subjKey);
    if (!subject) continue;

    const countForSubject = perSubject + (remainder > 0 ? 1 : 0);
    remainder = Math.max(0, remainder - 1);

    const generated = generateQuestions(
      subject.tags,
      'all',
      'basic',
      countForSubject
    );
    allQuestions.push(...generated);
  }

  // Shuffle
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  // Ensure we have exactly the right count
  return allQuestions.slice(0, config.count);
}

/* ==========================================
   Config Phase
   ========================================== */
function ConfigPhase({
  onStart,
}: {
  onStart: (config: ExamConfig) => void;
}) {
  const [config, setConfig] = useState<ExamConfig>({
    subjects: ['pharmacy2', 'practice'],
    count: 50,
    timeLimit: 60,
  });

  const toggleSubject = (key: string) => {
    setConfig((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(key)
        ? prev.subjects.filter((s) => s !== key)
        : [...prev.subjects, key],
    }));
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)' }}>
      {/* Hero */}
      <section
        className="w-full px-6 pt-14 pb-10 lg:pt-16 lg:pb-12"
        style={{ background: 'var(--ink)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeEditorial }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-ui-sm mb-4"
              style={{ background: 'rgba(194, 91, 60, 0.2)', color: '#E8A88E' }}
            >
              <FileText size={12} />
              模拟考试
            </span>
            <h1 className="font-chinese-serif text-3xl lg:text-4xl font-bold tracking-tight mb-3" style={{ color: 'var(--paper)' }}>
              执业药师模拟考试
            </h1>
            <p className="font-chinese-sans text-base" style={{ color: 'var(--ink-tertiary)' }}>
              生成完整试卷，检验学习成果
            </p>
          </motion.div>
        </div>
      </section>

      {/* Config Form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 -mt-6 relative z-10 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border rounded-xl p-5 lg:p-6 shadow-editorial"
          style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
        >
          {/* Subjects */}
          <div className="mb-6">
            <label className="text-ui-sm mb-3 block" style={{ color: 'var(--ink-tertiary)' }}>
              选择科目（至少1科）
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SUBJECT_OPTIONS.map((subj) => {
                const checked = config.subjects.includes(subj.key);
                return (
                  <button
                    key={subj.key}
                    onClick={() => toggleSubject(subj.key)}
                    className={`
                      flex items-start gap-3 p-4 rounded-lg border-2 transition-all duration-200 text-left
                    `}
                    style={{
                      background: checked ? 'var(--accent-rust-light)' : 'var(--paper-dark)',
                      borderColor: checked ? 'var(--accent-rust)' : 'var(--border)',
                    }}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {checked ? (
                        <CheckSquare size={18} style={{ color: 'var(--accent-rust)' }} />
                      ) : (
                        <Square size={18} style={{ color: 'var(--ink-quaternary)' }} />
                      )}
                    </div>
                    <div>
                      <p className="font-chinese-sans text-sm font-medium" style={{ color: 'var(--ink)' }}>
                        {subj.label}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--ink-tertiary)' }}>
                        {subj.tags.slice(0, 3).join('、')}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Count */}
          <div className="mb-6">
            <label className="text-ui-sm mb-3 block" style={{ color: 'var(--ink-tertiary)' }}>
              题目数量
            </label>
            <div className="flex gap-3">
              {[50, 100].map((n) => (
                <button
                  key={n}
                  onClick={() => setConfig((prev) => ({ ...prev, count: n }))}
                  className={`
                    flex-1 py-3 rounded-lg border text-sm font-chinese-sans font-medium
                    transition-all duration-200
                  `}
                  style={{
                    background: config.count === n ? 'var(--accent-rust)' : 'var(--paper-dark)',
                    borderColor: config.count === n ? 'var(--accent-rust)' : 'var(--border)',
                    color: config.count === n ? '#fff' : 'var(--ink-secondary)',
                  }}
                >
                  {n} 题
                </button>
              ))}
            </div>
          </div>

          {/* Time Limit */}
          <div className="mb-8">
            <label className="text-ui-sm mb-3 block" style={{ color: 'var(--ink-tertiary)' }}>
              考试时长
            </label>
            <div className="flex gap-3">
              {[60, 90, 120].map((t) => (
                <button
                  key={t}
                  onClick={() => setConfig((prev) => ({ ...prev, timeLimit: t }))}
                  className={`
                    flex-1 py-3 rounded-lg border text-sm font-chinese-sans font-medium
                    transition-all duration-200
                  `}
                  style={{
                    background: config.timeLimit === t ? 'var(--accent-rust)' : 'var(--paper-dark)',
                    borderColor: config.timeLimit === t ? 'var(--accent-rust)' : 'var(--border)',
                    color: config.timeLimit === t ? '#fff' : 'var(--ink-secondary)',
                  }}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <Clock size={14} />
                    {t} 分钟
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={() => {
              if (config.subjects.length === 0) return;
              onStart(config);
            }}
            disabled={config.subjects.length === 0}
            className={`
              w-full py-3.5 rounded-lg text-sm font-chinese-sans font-medium
              transition-all duration-300 flex items-center justify-center gap-2
              ${config.subjects.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-[0.99]'}
            `}
            style={{
              background: 'var(--accent-rust)',
              color: '#fff',
            }}
          >
            <Play size={16} />
            开始考试
          </button>

          {config.subjects.length === 0 && (
            <p className="text-center text-xs mt-2" style={{ color: '#DC3232' }}>
              请至少选择一科
            </p>
          )}
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { icon: <FileText size={18} />, title: '随机组卷', desc: '从题库中随机抽题，每次考试不重样' },
            { icon: <Timer size={18} />, title: '倒计时', desc: '模拟真实考试环境，严格计时' },
            { icon: <BarChart3 size={18} />, title: '成绩分析', desc: '考后详细分析各科得分情况' },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border text-center"
              style={{ background: 'var(--paper-dark)', borderColor: 'var(--border-light)' }}
            >
              <div className="mb-2 flex justify-center" style={{ color: 'var(--accent-rust)' }}>
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
        </motion.div>
      </section>
    </div>
  );
}

/* ==========================================
   Exam Phase
   ========================================== */
function ExamPhase({
  questions,
  config,
  onSubmit,
}: {
  questions: GeneratedQuestion[];
  config: ExamConfig;
  onSubmit: (answers: ExamAnswer[], timeUsed: number) => void;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<ExamAnswer[]>(
    questions.map((q) => ({ questionId: q.id, selected: null, marked: false }))
  );
  const [timeLeft, setTimeLeft] = useState(config.timeLimit * 60);
  const [paused, setPaused] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer
  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Auto submit when time is up
            clearInterval(timerRef.current!);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  // Auto submit when time is up
  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft]);

  const answeredCount = answers.filter((a) => a.selected !== null).length;
  const markedCount = answers.filter((a) => a.marked).length;
  const currentQ = questions[currentIdx];
  const currentAnswer = answers[currentIdx];

  const handleSelect = (optionIdx: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIdx] = { ...next[currentIdx], selected: optionIdx };
      return next;
    });
  };

  const handleMark = () => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIdx] = { ...next[currentIdx], marked: !next[currentIdx].marked };
      return next;
    });
  };

  const handleSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeUsed = config.timeLimit * 60 - timeLeft;
    onSubmit(answers, timeUsed);
  };

  const isUrgent = timeLeft <= 600; // <= 10 minutes
  const isWarning = timeLeft <= 300; // <= 5 minutes

  return (
    <div className="h-screen flex flex-col" style={{ background: 'var(--paper)' }}>
      {/* Top Bar */}
      <header
        className="flex-shrink-0 border-b px-4 py-2.5 flex items-center justify-between"
        style={{ background: 'var(--ink)', borderColor: 'var(--border)' }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSidebar((prev) => !prev)}
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded"
            style={{ color: 'var(--ink-tertiary)' }}
          >
            {showSidebar ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
          <span className="font-chinese-sans text-sm font-medium hidden sm:inline" style={{ color: 'var(--paper)' }}>
            模拟考试
          </span>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2">
          <Clock
            size={16}
            className={isWarning ? 'animate-pulse' : ''}
            style={{ color: isWarning ? '#FF6B6B' : isUrgent ? '#FFB347' : 'var(--ink-tertiary)' }}
          />
          <span
            className="font-display text-lg lg:text-xl font-bold tabular-nums"
            style={{
              color: isWarning ? '#FF6B6B' : isUrgent ? '#FFB347' : 'var(--paper)',
            }}
          >
            {formatTime(timeLeft)}
          </span>
        </div>

        {/* Progress & Pause */}
        <div className="flex items-center gap-3">
          <span className="text-ui-sm hidden sm:inline" style={{ color: 'var(--ink-tertiary)' }}>
            {currentIdx + 1} / {questions.length}
          </span>
          <button
            onClick={() => setPaused((prev) => !prev)}
            className="w-8 h-8 rounded-full border flex items-center justify-center transition-all"
            style={{ borderColor: 'var(--ink-quaternary)', color: 'var(--paper)' }}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigator */}
        <AnimatePresence>
          {showSidebar && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeEditorial }}
              className="flex-shrink-0 border-r overflow-y-auto"
              style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)' }}
            >
              <div className="w-[200px] lg:w-[240px] p-4">
                <p className="text-ui-sm mb-3" style={{ color: 'var(--ink-tertiary)' }}>
                  答题卡
                </p>

                {/* Stats mini */}
                <div className="flex items-center gap-3 mb-3 text-xs">
                  <span className="flex items-center gap-1">
                    <Circle size={8} style={{ color: 'var(--accent-olive)' }} />
                    {answeredCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <Circle size={8} style={{ color: 'var(--ink-quaternary)' }} />
                    {questions.length - answeredCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <Flag size={8} style={{ color: 'var(--accent-gold)' }} />
                    {markedCount}
                  </span>
                </div>

                {/* Question Grid */}
                <div className="grid grid-cols-5 gap-1.5">
                  {questions.map((q, i) => {
                    const ans = answers[i];
                    const isCurrent = i === currentIdx;
                    const isAnswered = ans.selected !== null;
                    const isMarked = ans.marked;

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentIdx(i)}
                        className={`
                          aspect-square rounded-md text-xs font-display font-semibold
                          transition-all duration-200 flex items-center justify-center
                        `}
                        style={{
                          background: isCurrent
                            ? 'var(--accent-rust)'
                            : isMarked
                            ? 'var(--accent-gold-light)'
                            : isAnswered
                            ? 'var(--accent-olive-light)'
                            : 'var(--paper)',
                          color: isCurrent
                            ? '#fff'
                            : isAnswered
                            ? 'var(--accent-olive)'
                            : 'var(--ink-secondary)',
                          border: `1.5px solid ${
                            isCurrent
                              ? 'var(--accent-rust)'
                              : isMarked
                              ? 'var(--accent-gold)'
                              : isAnswered
                              ? 'var(--accent-olive)'
                              : 'var(--border)'
                          }`,
                        }}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Submit Button */}
                <button
                  onClick={() => setShowSubmitConfirm(true)}
                  className="w-full mt-4 py-2.5 rounded-lg text-sm font-chinese-sans font-medium transition-all hover:scale-[1.02]"
                  style={{ background: 'var(--accent-rust)', color: '#fff' }}
                >
                  交卷
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Question Area */}
        <main className="flex-1 overflow-y-auto">
          {/* Progress Bar */}
          <div className="h-1 w-full" style={{ background: 'var(--border-light)' }}>
            <motion.div
              className="h-full"
              style={{ background: 'var(--accent-rust)' }}
              initial={{ width: 0 }}
              animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Question Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-display text-sm font-semibold px-2.5 py-1 rounded"
                    style={{ background: 'var(--accent-rust-light)', color: 'var(--accent-rust)' }}
                  >
                    {currentIdx + 1}
                  </span>
                  <span className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>
                    {currentQ.type === 'choice' && '最佳选择题'}
                    {currentQ.type === 'matching' && '配伍选择题'}
                    {currentQ.type === 'calc' && '计算题'}
                  </span>
                  <span className="text-ui-sm ml-auto" style={{ color: 'var(--ink-quaternary)' }}>
                    {currentQ.category}
                  </span>
                </div>

                {/* Question Text */}
                <div
                  className="border rounded-lg p-5 lg:p-6 mb-6"
                  style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
                >
                  <p
                    className="font-chinese-sans text-sm lg:text-base leading-relaxed whitespace-pre-line"
                    style={{ color: 'var(--ink)' }}
                  >
                    {currentQ.question}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-2.5 mb-8">
                  {currentQ.options.map((opt, i) => {
                    const isSelected = currentAnswer.selected === i;
                    return (
                      <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        className="w-full text-left px-4 py-3.5 rounded-lg border transition-all duration-200 flex items-start gap-3 hover:shadow-sm"
                        style={{
                          background: isSelected ? 'var(--accent-rust-light)' : 'var(--paper)',
                          borderColor: isSelected ? 'var(--accent-rust)' : 'var(--border)',
                        }}
                      >
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-semibold mt-0.5"
                          style={{
                            background: isSelected ? 'var(--accent-rust)' : 'var(--paper-dark)',
                            color: isSelected ? '#fff' : 'var(--ink-secondary)',
                            border: `1.5px solid ${isSelected ? 'var(--accent-rust)' : 'var(--border)'}`,
                          }}
                        >
                          {LETTERS[i]}
                        </span>
                        <span className="font-chinese-sans text-sm leading-relaxed pt-0.5" style={{ color: 'var(--ink)' }}>
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Bottom Bar */}
      <footer
        className="flex-shrink-0 border-t px-4 py-3 flex items-center justify-between"
        style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
      >
        <button
          onClick={handleMark}
          className={`
            inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-chinese-sans transition-all
          `}
          style={{
            background: currentAnswer?.marked ? 'var(--accent-gold-light)' : 'var(--paper-dark)',
            borderColor: currentAnswer?.marked ? 'var(--accent-gold)' : 'var(--border)',
            color: currentAnswer?.marked ? 'var(--accent-gold)' : 'var(--ink-secondary)',
          }}
        >
          <Flag size={14} />
          {currentAnswer?.marked ? '取消标记' : '标记疑问'}
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border text-sm font-chinese-sans transition-all disabled:opacity-40"
            style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)', color: 'var(--ink-secondary)' }}
          >
            <ChevronLeft size={14} />
            上一题
          </button>
          <button
            onClick={() => setCurrentIdx((prev) => Math.min(questions.length - 1, prev + 1))}
            disabled={currentIdx === questions.length - 1}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border text-sm font-chinese-sans transition-all disabled:opacity-40"
            style={{ background: 'var(--accent-rust)', borderColor: 'var(--accent-rust)', color: '#fff' }}
          >
            下一题
            <ChevronRight size={14} />
          </button>
        </div>
      </footer>

      {/* Pause Overlay */}
      <AnimatePresence>
        {paused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-modal flex items-center justify-center backdrop-blur-sm"
            style={{ background: 'rgba(0,0,0,0.5)' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="border rounded-xl p-8 text-center max-w-sm mx-4"
              style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
            >
              <Pause size={40} className="mx-auto mb-4" style={{ color: 'var(--accent-rust)' }} />
              <h3 className="font-chinese-serif text-xl font-semibold mb-2" style={{ color: 'var(--ink)' }}>
                考试暂停
              </h3>
              <p className="font-chinese-sans text-sm mb-6" style={{ color: 'var(--ink-tertiary)' }}>
                剩余时间：{formatTime(timeLeft)}
              </p>
              <button
                onClick={() => setPaused(false)}
                className="px-8 py-2.5 rounded-lg text-sm font-chinese-sans font-medium transition-all hover:scale-[1.02]"
                style={{ background: 'var(--accent-rust)', color: '#fff' }}
              >
                继续考试
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Confirmation */}
      <AnimatePresence>
        {showSubmitConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-modal flex items-center justify-center backdrop-blur-sm"
            style={{ background: 'rgba(0,0,0,0.5)' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="border rounded-xl p-6 max-w-sm mx-4 w-full"
              style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <h3 className="font-chinese-serif text-lg font-semibold" style={{ color: 'var(--ink)' }}>
                    确认交卷？
                  </h3>
                  <p className="font-chinese-sans text-sm mt-1" style={{ color: 'var(--ink-tertiary)' }}>
                    已答 {answeredCount}/{questions.length} 题，{questions.length - answeredCount} 题未答
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 py-2.5 rounded-lg border text-sm font-chinese-sans transition-all"
                  style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)', color: 'var(--ink-secondary)' }}
                >
                  继续答题
                </button>
                <button
                  onClick={() => {
                    setShowSubmitConfirm(false);
                    handleSubmit();
                  }}
                  className="flex-1 py-2.5 rounded-lg text-sm font-chinese-sans font-medium transition-all"
                  style={{ background: 'var(--accent-rust)', color: '#fff' }}
                >
                  确认交卷
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ==========================================
   Review Phase
   ========================================== */
function ReviewPhase({
  questions,
  answers,
  config: _config,
  timeUsed,
  onRestart,
}: {
  questions: GeneratedQuestion[];
  answers: ExamAnswer[];
  config: ExamConfig;
  timeUsed: number;
  onRestart: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'summary' | 'questions'>('summary');
  const [reviewIdx, setReviewIdx] = useState(0);

  // Calculate scores
  const correctCount = questions.filter((q, i) => answers[i]?.selected === q.correct).length;
  const score = Math.round((correctCount / questions.length) * 100);
  const passed = score >= 60;

  // Category breakdown
  const categoryStats = useMemo(() => {
    const stats: Record<string, { total: number; correct: number }> = {};
    questions.forEach((q, i) => {
      if (!stats[q.category]) stats[q.category] = { total: 0, correct: 0 };
      stats[q.category].total++;
      if (answers[i]?.selected === q.correct) stats[q.category].correct++;
    });
    return Object.entries(stats).map(([category, data]) => ({
      category,
      ...data,
      pct: Math.round((data.correct / data.total) * 100),
    }));
  }, [questions, answers]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)' }}>
      {/* Top Bar */}
      <div
        className="w-full px-4 py-4 border-b flex items-center justify-between"
        style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
      >
        <h1 className="font-chinese-serif text-lg font-semibold" style={{ color: 'var(--ink)' }}>
          考试结果
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-chinese-sans transition-all hover:scale-[1.02]"
            style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)', color: 'var(--ink-secondary)' }}
          >
            <RotateCcw size={14} />
            再来一次
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('summary')}
            className={`
              inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-chinese-sans transition-all
            `}
            style={{
              background: activeTab === 'summary' ? 'var(--accent-rust)' : 'var(--paper-dark)',
              borderColor: activeTab === 'summary' ? 'var(--accent-rust)' : 'var(--border)',
              color: activeTab === 'summary' ? '#fff' : 'var(--ink-secondary)',
            }}
          >
            <BarChart3 size={14} />
            成绩总览
          </button>
          <button
            onClick={() => setActiveTab('questions')}
            className={`
              inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-chinese-sans transition-all
            `}
            style={{
              background: activeTab === 'questions' ? 'var(--accent-rust)' : 'var(--paper-dark)',
              borderColor: activeTab === 'questions' ? 'var(--accent-rust)' : 'var(--border)',
              color: activeTab === 'questions' ? '#fff' : 'var(--ink-secondary)',
            }}
          >
            <BookOpen size={14} />
            逐题解析
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'summary' ? (
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {/* Score Card */}
              <div
                className="border rounded-xl p-6 lg:p-8 mb-6 text-center"
                style={{
                  background: passed ? 'var(--accent-olive-light)' : 'rgba(220, 50, 50, 0.05)',
                  borderColor: passed ? 'var(--accent-olive)' : 'rgba(220, 50, 50, 0.2)',
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2, duration: 0.5 }}
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: passed ? 'var(--accent-olive)' : '#DC3232' }}
                >
                  {passed ? (
                    <Award size={36} style={{ color: '#fff' }} />
                  ) : (
                    <XCircle size={36} style={{ color: '#fff' }} />
                  )}
                </motion.div>

                <p className="font-chinese-serif text-2xl font-bold mb-1" style={{ color: 'var(--ink)' }}>
                  {score} 分
                </p>
                <p
                  className="font-chinese-sans text-sm font-medium mb-4"
                  style={{ color: passed ? 'var(--accent-olive)' : '#DC3232' }}
                >
                  {passed ? '恭喜通过！' : '未通过，继续加油！'}（及格线 60 分）
                </p>

                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <div className="p-3 rounded-lg" style={{ background: 'var(--paper)' }}>
                    <p className="font-display text-xl font-bold" style={{ color: 'var(--ink)' }}>
                      {correctCount}
                    </p>
                    <p className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>
                      答对
                    </p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: 'var(--paper)' }}>
                    <p className="font-display text-xl font-bold" style={{ color: 'var(--ink)' }}>
                      {questions.length - correctCount}
                    </p>
                    <p className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>
                      答错
                    </p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: 'var(--paper)' }}>
                    <p className="font-display text-xl font-bold" style={{ color: 'var(--ink)' }}>
                      {Math.floor(timeUsed / 60)}:{(timeUsed % 60).toString().padStart(2, '0')}
                    </p>
                    <p className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>
                      用时
                    </p>
                  </div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div
                className="border rounded-xl p-5"
                style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
              >
                <h3 className="font-chinese-serif text-base font-semibold mb-4" style={{ color: 'var(--ink)' }}>
                  科目得分分析
                </h3>
                <div className="space-y-3">
                  {categoryStats.map((cat, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-chinese-sans text-sm" style={{ color: 'var(--ink)' }}>
                          {cat.category}
                        </span>
                        <span className="font-display text-sm font-semibold" style={{ color: cat.pct >= 60 ? 'var(--accent-olive)' : '#DC3232' }}>
                          {cat.correct}/{cat.total} ({cat.pct}%)
                        </span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--paper-dark)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${cat.pct}%` }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className="h-full rounded-full"
                          style={{
                            background: cat.pct >= 60 ? 'var(--accent-olive)' : '#DC3232',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="questions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {/* Review Question Navigator */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {questions.map((q, i) => {
                  const isCorrect = answers[i]?.selected === q.correct;
                  const isAnswered = answers[i]?.selected !== null;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setReviewIdx(i)}
                      className="w-8 h-8 rounded flex items-center justify-center text-xs font-display font-semibold transition-all"
                      style={{
                        background: i === reviewIdx
                          ? 'var(--accent-rust)'
                          : isCorrect
                          ? 'var(--accent-olive-light)'
                          : !isAnswered
                          ? 'var(--paper-dark)'
                          : 'rgba(220, 50, 50, 0.1)',
                        color: i === reviewIdx
                          ? '#fff'
                          : isCorrect
                          ? 'var(--accent-olive)'
                          : !isAnswered
                          ? 'var(--ink-quaternary)'
                          : '#DC3232',
                        border: `1.5px solid ${
                          i === reviewIdx
                            ? 'var(--accent-rust)'
                            : isCorrect
                            ? 'var(--accent-olive)'
                            : !isAnswered
                            ? 'var(--border)'
                            : 'rgba(220, 50, 50, 0.3)'
                        }`,
                      }}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>

              {/* Review Question Card */}
              {(() => {
                const q = questions[reviewIdx];
                const ans = answers[reviewIdx];
                const isCorrect = ans?.selected === q.correct;
                const isAnswered = ans?.selected !== null;

                return (
                  <div
                    className="border rounded-lg overflow-hidden"
                    style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
                  >
                    {/* Header */}
                    <div
                      className="px-5 py-3 flex items-center gap-3 border-b"
                      style={{
                        background: isCorrect
                          ? 'var(--accent-olive-light)'
                          : !isAnswered
                          ? 'var(--paper-dark)'
                          : 'rgba(220, 50, 50, 0.05)',
                        borderColor: 'var(--border-light)',
                      }}
                    >
                      <span className="font-display text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                        {reviewIdx + 1}
                      </span>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-ui-sm" style={{ color: 'var(--accent-olive)' }}>
                          <CheckCircle2 size={12} /> 正确
                        </span>
                      ) : !isAnswered ? (
                        <span className="inline-flex items-center gap-1 text-ui-sm" style={{ color: 'var(--ink-quaternary)' }}>
                          <Circle size={12} /> 未作答
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-ui-sm" style={{ color: '#DC3232' }}>
                          <XCircle size={12} /> 错误
                        </span>
                      )}
                      <span className="text-ui-sm ml-auto" style={{ color: 'var(--ink-quaternary)' }}>
                        {q.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="px-5 py-4">
                      <p className="font-chinese-sans text-sm lg:text-base leading-relaxed mb-4 whitespace-pre-line" style={{ color: 'var(--ink)' }}>
                        {q.question}
                      </p>

                      <div className="space-y-2">
                        {q.options.map((opt, i) => {
                          const isSelected = ans?.selected === i;
                          const isCorrectOption = i === q.correct;

                          return (
                            <div
                              key={i}
                              className="flex items-start gap-3 px-4 py-2.5 rounded-lg"
                              style={{
                                background: isCorrectOption
                                  ? 'var(--accent-olive-light)'
                                  : isSelected && !isCorrectOption
                                  ? 'rgba(220, 50, 50, 0.08)'
                                  : 'var(--paper-dark)',
                                border: `1px solid ${
                                  isCorrectOption
                                    ? 'var(--accent-olive)'
                                    : isSelected && !isCorrectOption
                                    ? 'rgba(220, 50, 50, 0.3)'
                                    : 'var(--border-light)'
                                }`,
                              }}
                            >
                              <span
                                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-display font-semibold"
                                style={{
                                  background: isCorrectOption
                                    ? 'var(--accent-olive)'
                                    : isSelected && !isCorrectOption
                                    ? '#DC3232'
                                    : 'var(--border)',
                                  color: isCorrectOption || (isSelected && !isCorrectOption) ? '#fff' : 'var(--ink-secondary)',
                                }}
                              >
                                {LETTERS[i]}
                              </span>
                              <span className="font-chinese-sans text-sm leading-relaxed">{opt}</span>
                              {isCorrectOption && (
                                <CheckCircle2 size={14} className="ml-auto flex-shrink-0" style={{ color: 'var(--accent-olive)' }} />
                              )}
                              {isSelected && !isCorrectOption && (
                                <XCircle size={14} className="ml-auto flex-shrink-0" style={{ color: '#DC3232' }} />
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      <div
                        className="mt-4 rounded-lg px-4 py-3 flex items-start gap-2"
                        style={{ background: 'var(--accent-gold-light)' }}
                      >
                        <Zap size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                        <p className="font-chinese-sans text-sm" style={{ color: 'var(--ink-secondary)' }}>
                          {q.explanation}
                        </p>
                      </div>
                    </div>

                    {/* Footer Nav */}
                    <div
                      className="px-5 py-3 border-t flex items-center justify-between"
                      style={{ borderColor: 'var(--border-light)' }}
                    >
                      <button
                        onClick={() => setReviewIdx((prev) => Math.max(0, prev - 1))}
                        disabled={reviewIdx === 0}
                        className="inline-flex items-center gap-1 text-sm font-chinese-sans disabled:opacity-40"
                        style={{ color: 'var(--ink-secondary)' }}
                      >
                        <ChevronLeft size={14} /> 上一题
                      </button>
                      <span className="text-ui-sm" style={{ color: 'var(--ink-tertiary)' }}>
                        {reviewIdx + 1} / {questions.length}
                      </span>
                      <button
                        onClick={() => setReviewIdx((prev) => Math.min(questions.length - 1, prev + 1))}
                        disabled={reviewIdx === questions.length - 1}
                        className="inline-flex items-center gap-1 text-sm font-chinese-sans disabled:opacity-40"
                        style={{ color: 'var(--ink-secondary)' }}
                      >
                        下一题 <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ==========================================
   Main Component
   ========================================== */
export default function ExamPaper() {
  const [phase, setPhase] = useState<ExamPhase>('config');
  const [config, setConfig] = useState<ExamConfig>({
    subjects: [],
    count: 50,
    timeLimit: 60,
  });
  const [questions, setQuestions] = useState<GeneratedQuestion[]>([]);
  const [answers, setAnswers] = useState<ExamAnswer[]>([]);
  const [timeUsed, setTimeUsed] = useState(0);

  const handleStart = useCallback((cfg: ExamConfig) => {
    setConfig(cfg);
    const qs = generateExamQuestions(cfg);
    setQuestions(qs);
    setAnswers(qs.map((q) => ({ questionId: q.id, selected: null, marked: false })));
    setPhase('exam');
  }, []);

  const handleSubmit = useCallback((finalAnswers: ExamAnswer[], used: number) => {
    setAnswers(finalAnswers);
    setTimeUsed(used);
    setPhase('review');
  }, []);

  const handleRestart = useCallback(() => {
    setPhase('config');
    setQuestions([]);
    setAnswers([]);
  }, []);

  if (phase === 'config') {
    return <ConfigPhase onStart={handleStart} />;
  }

  if (phase === 'exam') {
    return (
      <ExamPhase
        questions={questions}
        config={config}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <ReviewPhase
      questions={questions}
      answers={answers}
      config={config}
      timeUsed={timeUsed}
      onRestart={handleRestart}
    />
  );
}
