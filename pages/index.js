import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import Endorsements from '../components/endorsements';
import Services from '../components/services';
import Stats from '../components/stats';
import Partnered from '../components/partnered';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Home = () => {
  return (
    <>
      <Head>
        <title>Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <div className='wrapper'> */}
        <Endorsements />
        <Services />
        <Stats />
        <Partnered />
        {/* </div> */}
      </main>
      <Footer />
      <Menu />
    </>
  );
};

export default Home;
