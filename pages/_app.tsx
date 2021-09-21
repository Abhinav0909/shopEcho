import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Head>
      <meta name="description" content="A place where you can visualize things in 3d and learn new concepts"/>
    </Head>
    <Component
        {...pageProps}
      />
      </div>
  )
}
export default MyApp;
