'use client';

import NavContainer from '@/components/Organisms/navigation/NavContainer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <NavContainer>
      <div className="p-6 h-screen">{children}</div>
    </NavContainer>
  );
}
