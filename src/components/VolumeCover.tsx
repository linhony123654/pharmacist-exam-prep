import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VolumeCoverProps {
  volumeNum: string;
  volumeRoman: string;
  title: string;
  subtitle: string;
  metadata: string;
  bgColor?: string;
  className?: string;
}

export default function VolumeCover({
  volumeNum,
  volumeRoman,
  title,
  subtitle,
  metadata,
  bgColor,
  className = '',
}: VolumeCoverProps) {
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!coverRef.current) return;
    const ctx = gsap.context(() => {
      const elements = coverRef.current!.querySelectorAll('.animate-in');
      gsap.from(elements, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: coverRef.current!,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, coverRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={coverRef}
      className={`relative min-h-[50vh] flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: bgColor || 'var(--paper)',
      }}
    >
      {/* Decorative Volume Number Watermark */}
      <div
        className="absolute font-display select-none pointer-events-none animate-in"
        style={{
          fontSize: 'clamp(6rem, 12vw, 10rem)',
          fontWeight: 700,
          color: 'var(--accent-rust)',
          opacity: 0.15,
          lineHeight: 0.85,
          letterSpacing: '-0.03em',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {volumeNum}
      </div>

      {/* Content */}
      <div className="relative z-1 text-center max-w-[600px] mx-auto px-6 py-16">
        <p
          className="font-display text-ui-md uppercase animate-in"
          style={{ color: 'var(--accent-rust)', letterSpacing: '0.1em' }}
        >
          Vol. {volumeRoman}
        </p>

        <h1
          className="font-chinese-serif text-display-lg mt-4 animate-in"
          style={{ color: 'var(--ink)' }}
        >
          {title}
        </h1>

        <p
          className="text-body-xl mt-4 animate-in"
          style={{ color: 'var(--ink-secondary)', maxWidth: '500px', margin: '1rem auto 0' }}
        >
          {subtitle}
        </p>

        {/* Accent Line */}
        <div
          className="mx-auto mt-6 animate-in"
          style={{
            width: '60px',
            height: '2px',
            background: 'var(--accent-rust)',
          }}
        />

        {/* Metadata */}
        <p
          className="text-ui-sm mt-6 animate-in"
          style={{ color: 'var(--ink-tertiary)' }}
        >
          {metadata}
        </p>
      </div>
    </div>
  );
}
