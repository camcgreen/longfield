import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Hero from '../components/hero';
import Endorsements from '../components/endorsements';
import Services from '../components/services';
import Stats from '../components/stats';
import Partnered from '../components/partnered';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className='wrapper'>
      <Head>
        <title>Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Header /> */}
      <main>
        <Hero />
        <Endorsements />
        {/* <Services />
        <Stats />
        <Partnered /> */}
      </main>
      <Footer />
    </div>
  );
}
