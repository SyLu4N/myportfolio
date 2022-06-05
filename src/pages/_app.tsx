import type { AppProps } from 'next/app';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { GlobalStyles } from '../styles/globa';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
      <Footer />
    </>
  );
}

export default MyApp;
