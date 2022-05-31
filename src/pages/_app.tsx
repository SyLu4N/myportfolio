import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { GlobalStyles } from '../styles/globa';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
