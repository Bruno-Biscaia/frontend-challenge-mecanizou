'use client';

import { useEffect, useState } from 'react';
import Container from '@/containers/Container';

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

      <div
        className="
          min-h-screen
          bg-background-light text-text-light
          dark:bg-background-dark dark:text-text-dark
          transition-colors duration-300
        "
      >
        {/* Conteúdo da página */}
        <main>{children}</main>
      </div>
    </Container>
  );
}
