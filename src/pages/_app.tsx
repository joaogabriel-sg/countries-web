import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { Header } from '@/components';
import { globalStyles } from '@/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
