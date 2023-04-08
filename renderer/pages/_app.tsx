import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Sidebar';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>NextCompass</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div >
  );
}

export default MyApp;
