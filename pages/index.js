import { useState, useEffect } from 'react';
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
  const [lang, setLang] = useState('english');
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    lang && setLang(lang);
  }, []);
  const handleCallback = (childData) => {
    setLang(childData);
  };
  return (
    <>
      <Head>
        <title>Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header parentCallback={handleCallback} />
      <main>
        <Hero lang={lang} />
        {/* <div className='wrapper'> */}
        <Endorsements lang={lang} />
        <Services lang={lang} />
        <Stats lang={lang} />
        <Partnered lang={lang} />
        {/* </div> */}
      </main>
      <Footer lang={lang} />
      <Menu lang={lang} />
    </>
  );
};

export default Home;
