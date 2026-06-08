import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const volumeLinks = [
  { num: 'I', path: '/vol/1', label: '备考全攻略' },
  { num: 'II', path: '/vol/2', label: '药事管理与法规精讲' },
  { num: 'III', path: '/vol/3', label: '药学专业知识（一）精讲' },
  { num: 'IV', path: '/vol/4', label: '药学专业知识（二）精讲' },
  { num: 'V', path: '/vol/5', label: '药学综合知识与技能精讲' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current!, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current!,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full"
      style={{
        background: 'var(--ink)',
        color: 'var(--paper)',
        padding: '4rem 2rem',
      }}
    >
      <div className="max-w-content mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2
              className="font-chinese-serif text-2xl font-bold"
              style={{ color: 'var(--paper)' }}
            >
              药考纪
            </h2>
            <p
              className="text-body-sm mt-1"
              style={{ color: 'var(--ink-tertiary)' }}
            >
              执业药师备考期刊系列
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {volumeLinks.map(link => (
              <Link
                key={link.num}
                to={link.path}
                className="text-ui-sm transition-colors duration-200 hover:text-[var(--accent-rust)]"
                style={{ color: 'var(--ink-tertiary)' }}
              >
                Vol. {link.num}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p
            className="text-body-sm"
            style={{ color: 'var(--ink-quaternary)' }}
          >
            &copy; 2026 药考纪 · 执业药师备考资料
          </p>
          <p
            className="text-body-sm"
            style={{ color: 'var(--ink-quaternary)' }}
          >
            西药类 · 五册合辑 · 2026 Edition
          </p>
        </div>
      </div>
    </footer>
  );
}
