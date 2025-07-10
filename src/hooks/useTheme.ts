'use client';

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');

  // Ao montar: lê do localStorage (ou usa preferência de sistema)
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const initial: Theme =
      stored === 'light' || stored === 'dark'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';

    setTheme(initial);
    // aplica a classe no html
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  // Toggle: inverte, grava e aplica
  function toggle() {
    setTheme(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      document.documentElement.classList.toggle('dark', next === 'dark');
      return next;
    });
  }

  return { theme, toggle };
}
