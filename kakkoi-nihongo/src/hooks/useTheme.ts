import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      document.body.className = 'dark-mode';
    } else {
      root.classList.remove('dark');
      document.body.className = 'light-mode';
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggle = useCallback(() => setDark((d) => !d), []);

  return { dark, toggle };
}
