'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Container from '@/containers/Container';
import { ThemeToggle } from '@/components/ThemeToggle';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  // só para controle de "splash" de hidratação
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);



  return (
    <Container>
      {/* Aqui vão os estilos e header que eram do MainLayout */}
      <div
        className="
    min-h-screen
    bg-background-light text-text-light
    dark:bg-background-dark dark:text-text-dark
    transition-colors duration-300
  "
      >
        {/* Header comum a ambos */}
        <header className="flex justify-between items-center">
          {mounted && (
            // Se você tiver o ThemeToggle e o botão de logout
            <>
              {/* ThemeToggle poderia ficar aqui */}
              {/* Logout dentro do PrivateContainer já faz redirect */}
            </>
          )}
        </header>

        {/* Conteúdo da página */}
        <main>{children}</main>
      </div>
    </Container>
  );
}
