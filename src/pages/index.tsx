import { useEffect, useState } from 'react';

import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { GlobalStyles } from '../styles/globa';

export default function Home(): JSX.Element {
  const [theme, setTheme] = useState('');

  useEffect(
    () => setTheme(localStorage.getItem('USER_THEME') || 'ligth'),
    [theme]
  );

  return (
    <>
      <Head>
        <title>Luan Simões | Home </title>
      </Head>

      <Header setTheme={setTheme} theme={theme} />

      <GlobalStyles theme={theme} />

      <Main />

      <Footer />
    </>
  );
}
