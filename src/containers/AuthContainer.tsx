'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '@/hooks/useAuth';

interface Props {
  children: React.ReactNode;
}

export default function AuthContainer({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    // agora liberamos "/" e "/login"
    const openRoutes = ['/', '/login'];

    if (!isAuthenticated() && !openRoutes.includes(router.pathname)) {
      router.replace('/login');
    }
  }, [router]);

  return <>{children}</>;
}
