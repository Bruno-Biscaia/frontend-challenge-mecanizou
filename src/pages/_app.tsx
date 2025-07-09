
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AuthContainer from '@/containers/AuthContainer';
import MainLayout from '@/layouts/MainLayout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContainer>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthContainer>
  );
}
