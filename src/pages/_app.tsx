// src/pages/_app.tsx
'use client';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import MainLayout from '@/components/layout/MainLayout';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

// Estende o tipo de Component para poder exportar getLayout nas páginas
type NextPageWithLayout = AppProps['Component'] & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = Omit<AppProps, 'Component'> & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Se a página exportou getLayout, usa ele; caso contrário, usa o MainLayout
  const getLayout =
    Component.getLayout ??
    ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Zone Fashion</title>
        <meta
          name="description"
          content="Zone Fashion – roupas, calçados e acessórios para quem vive na sua própria cena."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
