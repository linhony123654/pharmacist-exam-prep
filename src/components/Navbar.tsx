import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Search, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useSearch } from './SearchOverlay';

const volumes = [
  { num: 'I', title: '备考全攻略', path: '/vol/1' },
  { num: 'II', title: '药事管理与法规精讲', path: '/vol/2' },
  { num: 'III', title: '药学专业知识（一）精讲', path: '/vol/3' },
  { num: 'IV', title: '药学专业知识（二）精讲', path: '/vol/4' },
  { num: 'V', title: '药学综合知识与技能精讲', path: '/vol/5' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { openSearch } = useSearch();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-mobile-menu lg:hidden w-10 h-10 flex items-center justify-center border backdrop-blur-sm transition-colors hover:bg-[var(--paper-dark)]"
        style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}
        aria-label="Open menu"
      >
        <Menu size={18} style={{ color: 'var(--ink)' }} />
      </button>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-overlay backdrop-blur-sm lg:hidden"
          style={{ background: 'var(--overlay)' }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[280px] z-sidebar flex flex-col
          border-r transition-transform duration-[600ms]
          lg:translate-x-0
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{
          background: 'var(--sidebar-bg)',
          borderColor: 'var(--border)',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Masthead */}
        <div className="px-6 pt-8 pb-6">
          <Link to="/" className="block">
            <h1
              className="font-chinese-serif text-2xl font-bold tracking-tight"
              style={{ color: 'var(--ink)' }}
            >
              药考纪
            </h1>
            <p
              className="text-ui-sm mt-1"
              style={{ color: 'var(--ink-tertiary)' }}
            >
              执业药师备考
            </p>
          </Link>
        </div>

        {/* Volume Navigation */}
        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {volumes.map((vol, i) => (
              <li
                key={vol.num}
                className={`
                  transform transition-all duration-500
                  ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
                `}
                style={{
                  transitionDelay: mounted ? `${0.1 + i * 0.08}s` : '0s',
                }}
              >
                <Link
                  to={vol.path}
                  className={`
                    flex items-start gap-3 px-4 py-3 border-l-[3px] transition-all duration-300
                    ${isActive(vol.path)
                      ? 'bg-[var(--accent-rust-light)]'
                      : 'border-transparent hover:bg-[var(--paper-dark)] hover:border-[var(--border)]'
                    }
                  `}
                  style={{
                    borderLeftColor: isActive(vol.path) ? 'var(--sidebar-active)' : 'transparent',
                  }}
                >
                  <span
                    className="font-display text-sm font-semibold mt-0.5"
                    style={{ color: 'var(--accent-rust)' }}
                  >
                    Vol. {vol.num}
                  </span>
                  <span
                    className="font-chinese-sans text-sm leading-snug"
                    style={{ color: 'var(--sidebar-text)' }}
                  >
                    {vol.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="px-6 py-6 border-t flex items-center gap-3" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[var(--paper-dark)] group"
            style={{ borderColor: 'var(--border)' }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon
                size={16}
                className="transition-colors group-hover:text-[var(--accent-rust)]"
                style={{ color: 'var(--ink-tertiary)' }}
              />
            ) : (
              <Sun
                size={16}
                className="transition-colors group-hover:text-[var(--accent-rust)]"
                style={{ color: 'var(--ink-tertiary)' }}
              />
            )}
          </button>
          <button
            onClick={openSearch}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[var(--paper-dark)] group"
            style={{ borderColor: 'var(--border)' }}
            aria-label="Search"
          >
            <Search
              size={16}
              className="transition-colors group-hover:text-[var(--accent-rust)]"
              style={{ color: 'var(--ink-tertiary)' }}
            />
          </button>
        </div>

        {/* Mobile Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center lg:hidden"
          style={{ color: 'var(--ink-tertiary)' }}
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </aside>
    </>
  );
}
