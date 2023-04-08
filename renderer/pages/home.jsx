import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <>
      <Head>
        <title>NextCompass</title>
      </Head>
      <Sidebar />
    </>
  );
};

export default Home;
