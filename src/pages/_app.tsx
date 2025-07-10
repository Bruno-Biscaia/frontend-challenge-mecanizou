
'use client';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = AppProps['Component'] & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = Omit<AppProps, 'Component'> & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Se a página exportou getLayout, usa ela
  const getLayout = Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(<Component {...pageProps} />);
}
