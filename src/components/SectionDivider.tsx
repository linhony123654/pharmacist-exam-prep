interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`ornamental-divider ${className}`}>
      <div
        className="h-px w-[60px]"
        style={{ background: 'var(--border)' }}
      />
      <span style={{ color: 'var(--accent-rust)', fontSize: '0.5rem' }}>◆</span>
      <div
        className="h-px w-[60px]"
        style={{ background: 'var(--border)' }}
      />
    </div>
  );
}
