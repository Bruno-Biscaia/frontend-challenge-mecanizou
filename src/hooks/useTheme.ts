'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(false);

  // Na montagem, lê o tema salvo e aplica
  useEffect(() => {
    const stored = localStorage.getItem('theme') === 'dark';
    setDark(stored);
    document.documentElement.classList.toggle('dark', stored);
  }, []);

  // Alterna entre claro e escuro
  function toggle() {
    const next = !dark;
    setDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  }

  return { dark, toggle };
}
