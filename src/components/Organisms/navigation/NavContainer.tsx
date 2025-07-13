'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isAuthenticated, logout } from '@/hooks/useAuth';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';


interface NavContainerProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Catálogo', href: '/products' },
];

export default function NavContainer({ children }: NavContainerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLogged(isAuthenticated());
  }, []);

  // Recheck auth ao mudar de rota
  useEffect(() => {
    setLogged(isAuthenticated());
    setMobileMenuOpen(false);
  }, [pathname]);

  // Redireciona do /login se já estiver logado
  useEffect(() => {
    if (mounted && logged && pathname === '/login') {
      router.replace('/products');
    }
  }, [mounted, logged, pathname, router]);

  if (!mounted) return null;

  function handleLogout() {
    logout();
    router.replace('/');
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-gray-100 ">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-10"
        >
          {/* Logo */}
          <div className="flex md:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Zone Fashion</span>
              <Image
                src="/logo.png"
                alt="Zone Fashion"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Botão mobile */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Navegação desktop */}
          <DesktopNav
            navigation={navigation}
            logged={logged}
            onLogout={handleLogout}
          />
        </nav>

        {/* Menu lateral mobile */}
        <MobileNav
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          navigation={navigation}
          logged={logged}
          onLogout={handleLogout}
        />
      </header>

      {/* Conteúdo da página, com padding-top para descer abaixo do header */}
      <main className="pt-20">
        {children}
      </main>
    </>
  );
}
