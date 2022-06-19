import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import { Header } from '@/components';
import { SEO } from '@/shared/configs';
import { darkTheme } from '@/stitches.config';
import { globalStyles } from '@/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProvider
      storageKey="@CountriesWeb:theme"
      attribute="class"
      defaultTheme="light"
      themes={['light', 'dark']}
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <DefaultSeo {...SEO} />
      <NextNProgress
        color="#f1c40f"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
