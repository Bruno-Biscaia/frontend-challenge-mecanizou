'use client';

import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Alternar Tema"
      className="px-3 py-1 border rounded transition
                 bg-white text-black
                 dark:bg-gray-800 dark:text-white"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
