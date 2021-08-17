import '~/styles/index.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import App from '~/layouts/App';

function MyApp({ pageProps, Component }: AppProps) {
  return (
    <ThemeProvider>
      <App {...pageProps} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
