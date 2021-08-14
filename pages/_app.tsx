import '~/styles/index.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import App from './index';

function MyApp({ pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <App {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
