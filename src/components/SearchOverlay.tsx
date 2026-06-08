import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import type { ReactNode } from 'react';
import { Search, X } from 'lucide-react';

interface SearchContextType {
  openSearch: () => void;
  closeSearch: () => void;
  isOpen: boolean;
}

const SearchContext = createContext<SearchContextType | null>(null);

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <SearchContext.Provider value={{ openSearch, closeSearch, isOpen }}>
      {children}
      {isOpen && <SearchOverlay onClose={closeSearch} />}
    </SearchContext.Provider>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const mockResults = [
    { vol: 'Vol. I', title: '执业药师考试概述', context: '了解2026年执业药师考试的最新政策与改革动向...' },
    { vol: 'Vol. II', title: '药品管理法', context: '药品管理法是药事管理与法规考试的核心内容...' },
    { vol: 'Vol. III', title: '药物化学基础', context: '药物化学结构修饰对药效的影响机制分析...' },
    { vol: 'Vol. IV', title: '抗菌药物分类', context: '抗菌药物按照化学结构和作用机制的分类方法...' },
    { vol: 'Vol. V', title: '处方审核要点', context: '处方审核的基本流程与常见错误点汇总...' },
  ].filter(r =>
    !query ||
    r.title.toLowerCase().includes(query.toLowerCase()) ||
    r.context.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-modal flex items-start justify-center pt-[15vh]"
      style={{ background: 'var(--overlay)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[680px] mx-4 shadow-editorial-lg animate-in fade-in zoom-in-95 duration-300"
        style={{
          background: 'var(--paper)',
          border: '1px solid var(--border)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center border-b" style={{ borderColor: 'var(--border-light)' }}>
          <Search size={20} className="ml-5 flex-shrink-0" style={{ color: 'var(--ink-quaternary)' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="搜索考点、药物、法规..."
            className="flex-1 px-4 py-5 text-lg font-sans outline-none bg-transparent"
            style={{ color: 'var(--ink)', caretColor: 'var(--accent-rust)' }}
          />
          <button
            onClick={onClose}
            className="mr-3 p-2 transition-colors hover:bg-[var(--paper-dark)]"
            style={{ color: 'var(--ink-quaternary)' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {mockResults.length === 0 ? (
            <div className="px-6 py-12 text-center" style={{ color: 'var(--ink-tertiary)' }}>
              未找到相关结果
            </div>
          ) : (
            <ul>
              {mockResults.map((result, i) => (
                <li
                  key={i}
                  className="px-6 py-4 border-b cursor-pointer transition-colors duration-200 hover:bg-[var(--paper-dark)]"
                  style={{ borderColor: 'var(--border-light)' }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-ui-sm px-2 py-0.5"
                      style={{
                        background: 'var(--accent-rust-light)',
                        color: 'var(--accent-rust)',
                      }}
                    >
                      {result.vol}
                    </span>
                  </div>
                  <div
                    className="font-chinese-serif text-base font-semibold"
                    style={{ color: 'var(--ink)' }}
                  >
                    {result.title}
                  </div>
                  <div
                    className="text-body-sm mt-1"
                    style={{ color: 'var(--ink-tertiary)' }}
                  >
                    {result.context}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div
          className="px-6 py-3 flex items-center justify-between text-ui-sm"
          style={{ color: 'var(--ink-quaternary)', background: 'var(--paper-dark)' }}
        >
          <span>{mockResults.length} 个结果</span>
          <div className="flex items-center gap-4">
            <span>↑↓ 选择</span>
            <span>↵ 确认</span>
            <span>Esc 关闭</span>
          </div>
        </div>
      </div>
    </div>
  );
}
