import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TableColumn {
  key: string;
  header: string;
}

interface TableRow {
  [key: string]: string;
}

interface ComparisonTableProps {
  columns: TableColumn[];
  rows: TableRow[];
  className?: string;
}

export default function ComparisonTable({ columns, rows, className = '' }: ComparisonTableProps) {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tableRef.current) return;
    const ctx = gsap.context(() => {
      const rowEls = tableRef.current!.querySelectorAll('.table-row');
      gsap.from(rowEls, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tableRef.current!,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, tableRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={tableRef}
      className={`overflow-x-auto relative ${className}`}
      style={{ border: '1px solid var(--border)' }}
    >
      {/* Scroll hint gradient */}
      <div
        className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-1 hidden md:block"
        style={{ background: 'linear-gradient(to right, transparent, var(--paper))' }}
      />

      <table className="w-full min-w-[600px]">
        <thead>
          <tr
            className="table-row"
            style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
            }}
          >
            {columns.map(col => (
              <th
                key={col.key}
                className="text-left px-5 py-4 font-sans text-ui-md uppercase"
                style={{ letterSpacing: '0.05em', fontWeight: 600 }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="table-row transition-colors duration-150 hover:bg-[var(--accent-rust-light)]"
              style={{
                background: i % 2 === 0 ? 'var(--paper)' : 'var(--paper-dark)',
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              {columns.map((col, j) => (
                <td
                  key={col.key}
                  className={`px-5 py-3.5 text-body-md ${j === 0 ? 'font-semibold' : ''}`}
                  style={{ color: 'var(--ink)' }}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
