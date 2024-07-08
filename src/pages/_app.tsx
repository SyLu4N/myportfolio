import { useEffect, useState } from 'react';

import type { AppProps } from 'next/app';

import { Footer } from '../content/Footer';
import { Header } from '../content/Header';
import { GlobalStyles } from '../styles/globa';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState('');

  useEffect(
    () => setTheme(localStorage.getItem('USER_THEME') || 'ligth'),
    [theme]
  );

  return (
    <>
      <Header setTheme={setTheme} theme={theme} />

      <GlobalStyles theme={theme} />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
