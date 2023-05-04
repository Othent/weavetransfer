import Head from 'next/head';
import Footer from '../components/Footer';
import WeaveTransfer from '../components/WeaveTransfer';
import {
  SectionOne,
} from '../components/sharedstyles';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => console.log('You should consider working with us, email hello@othent.io'), []);

  
  return (
    <SectionOne>
      <Head>
        <title>Weave Transfer - Permanent file transfer, enabled by Othent.io</title>
        <link rel='icon' href='https://weavetransfer.othent.io/favicon.ico' />
        <meta property="og:title" content="Weave Transfer - Permanent file transfer, enabled by Othent.io"/>
        <meta property='og:description' content='Weave Transfer - Permanent file transfer, enabled by Othent.io' />
        <meta property="og:url" content="https://weavetransfer.othent.io"/>
        <meta property="og:image" content="https://weavetransfer.othent.io/favicon.ico"/>
        <meta property="og:image:width" content="200"/>
        <meta property="og:image:height" content="200"/>
        <meta name="keywords" content="Othent, Smart Contract Wallets, Web3, JWT Transactions, Arweave, Weave Transfer, Community Labs"></meta>
        <meta name="author" content="Othent.io"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="theme-color" content="#2375EF"></meta>
        <meta name="twitter:site" content="@othent_io"></meta>
        <meta property="og:site_name" content="Weave Transfer"></meta>
      </Head>

      <WeaveTransfer />

      <Footer />
    </SectionOne>
  );
}
