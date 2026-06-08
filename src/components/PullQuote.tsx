interface PullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export default function PullQuote({ quote, attribution, className = '' }: PullQuoteProps) {
  return (
    <blockquote
      className={`pull-quote my-8 ${className}`}
      style={{
        borderLeft: '3px solid var(--accent-rust)',
        paddingLeft: '2rem',
        fontStyle: 'italic',
        fontSize: '1.25rem',
        lineHeight: 1.7,
        color: 'var(--ink)',
      }}
    >
      <p className="font-serif">{quote}</p>
      {attribution && (
        <cite
          className="block mt-3 font-sans"
          style={{
            fontStyle: 'normal',
            fontSize: '0.75rem',
            color: 'var(--ink-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          {attribution}
        </cite>
      )}
    </blockquote>
  );
}
