import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface MemoryCardProps {
  mnemonic: string;
  explanation: string;
  className?: string;
}

export default function MemoryCard({ mnemonic, explanation, className = '' }: MemoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current!, {
        scale: 0.97,
        opacity: 0,
        duration: 0.6,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        scrollTrigger: {
          trigger: cardRef.current!,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-300 hover:-translate-y-0.5 hover:shadow-editorial ${className}`}
      style={{
        border: '2px solid var(--accent-gold)',
        background: 'var(--accent-gold-light)',
        padding: '1.5rem',
      }}
    >
      {/* Top Bar */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-1 h-5"
          style={{ background: 'var(--accent-gold)' }}
        />
        <Sparkles size={14} style={{ color: 'var(--accent-gold)' }} />
        <span
          className="text-ui-sm"
          style={{ color: 'var(--accent-gold)' }}
        >
          记忆口诀
        </span>
      </div>

      {/* Mnemonic Content */}
      <div
        className="font-chinese-serif text-body-lg mb-4"
        style={{
          color: 'var(--ink)',
          lineHeight: 1.8,
          fontStyle: 'italic',
        }}
      >
        {mnemonic}
      </div>

      {/* Explanation */}
      <p
        className="text-body-sm mb-4"
        style={{ color: 'var(--ink-secondary)' }}
      >
        {explanation}
      </p>

      {/* Decorative Bottom Line */}
      <div
        className="mx-auto w-10 h-px"
        style={{ background: 'var(--accent-gold)' }}
      />
    </div>
  );
}
