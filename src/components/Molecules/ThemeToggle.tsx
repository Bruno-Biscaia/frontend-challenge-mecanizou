import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 border border-gray-300 text-gray-900 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
    >
      {theme === 'dark' ? '🌙 Light' : '☀️ Dark'}
    </button>
  );
}
