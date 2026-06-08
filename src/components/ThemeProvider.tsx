import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

export type Theme = 'light' | 'dark' | 'natgeo' | 'nature' | 'cell';

const THEME_CLASSES: Record<Theme, string> = {
  light: '',
  dark: 'dark',
  natgeo: 'theme-natgeo',
  nature: 'theme-nature',
  cell: 'theme-cell',
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored && ['light', 'dark', 'natgeo', 'nature', 'cell'].includes(stored)) {
        return stored;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes
    Object.values(THEME_CLASSES).forEach((cls) => {
      if (cls) root.classList.remove(cls);
    });
    // Add current theme class
    const cls = THEME_CLASSES[theme];
    if (cls) root.classList.add(cls);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
  }, []);

  const themes: Theme[] = ['light', 'dark', 'natgeo', 'nature', 'cell'];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}
