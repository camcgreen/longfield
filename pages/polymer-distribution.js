import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/PolymerDistribution.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

const PolymerDistribution = () => {
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
        <title>Polymer Distribution | Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header parentCallback={handleCallback} />
      <main className={styles.content}>
        <div className='wrapper'>
          <img
            src='/polymer-distribution-map.png'
            alt='Polymer distribution map'
          />
          <h1>
            {lang === 'english'
              ? 'As a globally trusted polymer distributor, with supply partners all over the world, we are able to provide a reliable and efficient service for all your requirements.'
              : 'Como distribuidor de polímeros de confianza a nivel mundial, con socios de suministro en todo el mundo, podemos ofrecer un servicio fiable y eficaz para todas sus necesidades.'}
          </h1>
          <p>
            {lang === 'english'
              ? 'Underpinned with considerable investment in technology, our efficient Europe-wide logistics network and strategically positioned UK distribution hubs ensure we deliver the right product in time at the right price.'
              : 'Apoyados en una considerable inversión en tecnología, nuestra eficiente red de logística en toda Europa y los centros de distribución estrategicamente situados en el Reino Unido garantizan que entreguemos a nuestros clientes el producto adecuado a tiempo con un precio justo.'}
          </p>
        </div>
      </main>
      <Footer lang={lang} />
      <Menu lang={lang} />
    </>
  );
};

export default PolymerDistribution;
