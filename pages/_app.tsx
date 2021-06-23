import '~/styles/global.css';

import type { AppProps } from 'next/app';

import App from './index';

function MyApp({ Component, pageProps }: AppProps) {
  return <App {...pageProps} />;
}
export default MyApp;
