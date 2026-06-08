import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-up-stagger' | 'scale-in' | 'slide-left' | 'slide-right' | 'line-grow';
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.7,
  stagger = 0.1,
  className = '',
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      let fromVars: gsap.TweenVars = {};

      switch (animation) {
        case 'fade-up':
        case 'fade-up-stagger':
          fromVars = { y: 40, opacity: 0 };
          break;
        case 'scale-in':
          fromVars = { scale: 0.95, opacity: 0 };
          break;
        case 'slide-left':
          fromVars = { x: 60, opacity: 0 };
          break;
        case 'slide-right':
          fromVars = { x: -60, opacity: 0 };
          break;
        case 'line-grow':
          fromVars = { scaleX: 0 };
          break;
      }

      const targets = animation === 'fade-up-stagger'
        ? containerRef.current!.children
        : containerRef.current!;

      gsap.from(targets, {
        ...fromVars,
        duration,
        delay,
        stagger: animation === 'fade-up-stagger' ? stagger : 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current!,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [animation, delay, duration, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
