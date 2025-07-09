'use client';

import { useRouter } from 'next/router';
import { logout, isAuthenticated } from '@/hooks/useAuth';
import ThemeToggle from '@/components/ThemeToggle';
import { useState, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const router = useRouter();

  // Estados para evitar mismatches de hidratação
  const [mounted, setMounted] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLogged(isAuthenticated());
  }, []);

  function handleLogout() {
    logout();
    router.push('/login');
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="p-4 flex justify-between items-center">
        <ThemeToggle />
        {mounted && logged && (
          <button
            onClick={handleLogout}
            className="px-3 py-1 border rounded text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        )}
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}
