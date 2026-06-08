import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Search, Menu, X, Bot, ClipboardList, Settings } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useSearch } from './SearchOverlay';
import SettingsModal from './SettingsModal';

const volumes = [
  { num: 'I', title: '备考全攻略', path: '/vol/1' },
  { num: 'II', title: '药事管理与法规精讲', path: '/vol/2' },
  { num: 'III', title: '药学专业知识（一）精讲', path: '/vol/3' },
  { num: 'IV', title: '药学专业知识（二）精讲', path: '/vol/4' },
  { num: 'V', title: '药学综合知识与技能精讲', path: '/vol/5' },
];

const practiceLinks = [
  { path: '/quiz.html', icon: <span>📚</span>, title: '真题题库', desc: '2020-2025 历年真题', external: true },
  { path: '/practice/calc', icon: <span>🧮</span>, title: '计算题训练', desc: '西药一 · 步骤解析' },
  { path: '/practice/btype', icon: <span>🔗</span>, title: '配伍选择题', desc: '西药二 · B型题40分' },
  { path: '/practice/case', icon: <span>📋</span>, title: '案例分析题', desc: '药综 · 占30分' },
  { path: '/ai-generator', icon: <Bot size={16} />, title: 'AI出题助手', desc: '智能生成练习题' },
  { path: '/exam', icon: <ClipboardList size={16} />, title: '模拟考试', desc: '生成完整试卷' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { openSearch } = useSearch();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
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
          fixed top-0 left-0 h-full w-[280px] z-[80] flex flex-col
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
          {/* 特别注意 */}
          <ul className="space-y-1 mb-4">
            <li>
              <Link
                to="/special"
                className={`
                  flex items-center gap-3 px-4 py-3 border-l-[3px] transition-all duration-300
                  ${isActive('/special')
                    ? 'bg-[var(--accent-rust-light)]'
                    : 'border-transparent hover:bg-[var(--paper-dark)] hover:border-[var(--border)]'
                  }
                `}
                style={{
                  borderLeftColor: isActive('/special') ? 'var(--sidebar-active)' : 'transparent',
                }}
              >
                <span style={{ color: isActive('/special') ? 'var(--accent-rust)' : 'var(--ink-tertiary)' }}>★</span>
                <span className="font-chinese-sans text-sm" style={{ color: 'var(--sidebar-text)' }}>特别注意</span>
              </Link>
            </li>
          </ul>
          <div className="border-b mb-4" style={{ borderColor: 'var(--border)' }} />
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

          {/* Practice Section */}
          <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
            <p
              className="px-4 mb-2 text-ui-sm"
              style={{ color: 'var(--ink-quaternary)' }}
            >
              专项练习
            </p>
            <ul className="space-y-1">
              {practiceLinks.map((link, i) => (
                <li
                  key={link.path}
                  className={`
                    transform transition-all duration-500
                    ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
                  `}
                  style={{
                    transitionDelay: mounted ? `${0.5 + i * 0.08}s` : '0s',
                  }}
                >
                  {'external' in link && link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 border-l-[3px] border-transparent hover:bg-[var(--paper-dark)] hover:border-[var(--border)] transition-all duration-300"
                      style={{ borderLeftColor: 'transparent' }}
                    >
                      <span className="flex-shrink-0" style={{ color: 'var(--ink-tertiary)' }}>
                        {link.icon}
                      </span>
                      <div>
                        <span className="font-chinese-sans text-sm leading-snug block" style={{ color: 'var(--sidebar-text)' }}>
                          {link.title}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--ink-quaternary)' }}>
                          {link.desc}
                        </span>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className={`
                        flex items-center gap-3 px-4 py-2.5 border-l-[3px] transition-all duration-300
                        ${isActive(link.path)
                          ? 'bg-[var(--accent-rust-light)]'
                          : 'border-transparent hover:bg-[var(--paper-dark)] hover:border-[var(--border)]'
                        }
                      `}
                      style={{
                        borderLeftColor: isActive(link.path) ? 'var(--sidebar-active)' : 'transparent',
                      }}
                    >
                      <span
                        className="flex-shrink-0"
                        style={{ color: isActive(link.path) ? 'var(--accent-rust)' : 'var(--ink-tertiary)' }}
                      >
                        {link.icon}
                      </span>
                      <div>
                        <span
                          className="font-chinese-sans text-sm leading-snug block"
                          style={{ color: 'var(--sidebar-text)' }}
                        >
                          {link.title}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: 'var(--ink-quaternary)' }}
                        >
                          {link.desc}
                        </span>
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="px-6 py-6 border-t flex items-center gap-3" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
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
          <button
            onClick={() => setSettingsOpen(true)}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[var(--paper-dark)] group"
            style={{ borderColor: 'var(--border)' }}
            aria-label="Settings"
          >
            <Settings
              size={16}
              className="transition-colors group-hover:text-[var(--accent-rust)]"
              style={{ color: 'var(--ink-tertiary)' }}
            />
          </button>
        </div>

        {/* Settings Modal */}
        <SettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />

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
