// src/pages/_app.tsx
'use client';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import MainLayout from '@/layouts/MainLayout';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = AppProps['Component'] & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = Omit<AppProps, 'Component'> & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Título e favicon globais
  const head = (
    <Head>
      <title>Zone Fashion</title>
      <meta
        name="description"
        content="Zone Fashion – roupas, calçados e acessórios para quem vive na sua própria cena."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );

  // Se a página exportou getLayout, usa ela; caso contrário, usa MainLayout
  const getLayout =
    Component.getLayout ??
    ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <>
      {head}
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
