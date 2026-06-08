import { Bookmark, AlertTriangle } from 'lucide-react';

type BadgeType = 'key' | 'warning';

interface KeyPointBadgeProps {
  type: BadgeType;
  text: string;
  className?: string;
}

export default function KeyPointBadge({ type, text, className = '' }: KeyPointBadgeProps) {
  const isKey = type === 'key';

  return (
    <div
      className={`my-6 ${className}`}
      style={{
        background: isKey ? 'var(--accent-olive-light)' : 'var(--accent-rust-light)',
        borderLeft: `4px solid ${isKey ? 'var(--accent-olive)' : 'var(--accent-rust)'}`,
        padding: '1rem 1.25rem',
      }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        {isKey ? (
          <Bookmark size={14} style={{ color: 'var(--accent-olive)' }} />
        ) : (
          <AlertTriangle size={14} style={{ color: 'var(--accent-rust)' }} />
        )}
        <span
          className="text-ui-sm"
          style={{ color: isKey ? 'var(--accent-olive)' : 'var(--accent-rust)' }}
        >
          {isKey ? '重点' : '易错点'}
        </span>
      </div>
      <p
        className="text-body-md"
        style={{ color: 'var(--ink)' }}
      >
        {text}
      </p>
    </div>
  );
}
