import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ReadingProgress from './ReadingProgress';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--paper)' }}>
      <Navbar />
      <ReadingProgress />

      {/* Main content area with sidebar offset */}
      <main
        className={`
          transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isHome ? '' : 'lg:ml-[280px]'}
        `}
      >
        <Outlet />
      </main>

      <div className={isHome ? '' : 'lg:ml-[280px]'}>
        <Footer />
      </div>
    </div>
  );
}
