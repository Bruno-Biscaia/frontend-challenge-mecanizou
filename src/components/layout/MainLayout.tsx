'use client';

import NavContainer from '@/components/Organisms/navigation/NavContainer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <NavContainer>
      {/* pt-16 (ou pt-20) para dar espaço ao header fixo */}
      <div className="p-6 h-screen">
        {children}
      </div>
    </NavContainer>
  );
}
