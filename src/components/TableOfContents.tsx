import { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(items[i].id);
          return;
        }
      }
      if (items.length > 0) setActiveId(items[0].id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav
      className="fixed right-8 top-1/2 -translate-y-1/2 w-[200px] z-sticky hidden xl:block"
      style={{
        background: 'var(--paper)',
        border: '1px solid var(--border)',
        padding: '1rem',
      }}
    >
      <p
        className="text-ui-sm mb-3"
        style={{ color: 'var(--ink-tertiary)' }}
      >
        目录
      </p>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-left w-full text-body-sm transition-colors duration-200"
              style={{
                color: activeId === item.id ? 'var(--accent-rust)' : 'var(--ink-tertiary)',
                fontWeight: activeId === item.id ? 600 : 400,
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
