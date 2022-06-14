import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { Header } from '@/components';
import { SEO } from '@/shared/configs';
import { globalStyles } from '@/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
