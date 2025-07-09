'use client';

import { useTheme } from "@/hooks/useTheme";



export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="p-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
