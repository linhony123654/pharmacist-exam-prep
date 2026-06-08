import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ReadingProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(progressRef.current!, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[2px] z-[100] origin-left"
      style={{ background: 'var(--border-light)' }}
    >
      <div
        ref={progressRef}
        className="h-full origin-left"
        style={{
          background: 'var(--accent-rust)',
          transform: 'scaleX(0)',
        }}
      />
    </div>
  );
}
