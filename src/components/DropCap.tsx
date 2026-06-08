import type { ReactNode } from 'react';

interface DropCapProps {
  letter: string;
  children: ReactNode;
  className?: string;
}

export default function DropCap({ letter, children, className = '' }: DropCapProps) {
  return (
    <div className={`${className}`}>
      <span
        className="drop-cap text-drop-cap float-left mr-3 mt-1"
        style={{ color: 'var(--accent-rust)' }}
        aria-hidden="true"
      >
        {letter}
      </span>
      <p className="text-body-xl" style={{ color: 'var(--ink-secondary)', lineHeight: 1.75 }}>
        {children}
      </p>
    </div>
  );
}
