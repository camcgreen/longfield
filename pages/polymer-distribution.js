import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/PolymerDistribution.module.css';
import Header from '../components/header';
import Partnered from '../components/partnered';
import Footer from '../components/footer';
import Menu from '../components/menu';

const PolymerDistribution = () => {
  const [lang, setLang] = useState('english');
  const handleCallback = (childData) => {
    setLang(childData);
  };
  useEffect(() => {
    console.log(lang);
  }, [lang]);
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
              ? 'As the UK’s leading independent polymer distributor, with supply partners all over the world, we are able to provide a reliable and efficient service for all your requirements'
              : 'Como el principal distribuidor independiente de polímeros del Reino Unido, con socios de suministro en todo el mundo, podemos brindar un servicio confiable y eficiente para todos sus requisitos.'}
          </h1>
          <p>
            {lang === 'english'
              ? 'As a globally trusted polymer distributor, with supply partners all over the world, we are able to provide a fast and efficient service for all your requirements. From pallet orders to trailer deliveries, we give the same level of focus, dedication and commitment to all customer orders. Whether we’re distributing locally or globally, we strive to maintain strong relationships with all of our customers and suppliers, guaranteeing reliable and high quality production and distribution at a low cost for all.'
              : 'Como distribuidor de polímeros de confianza a nivel mundial, con socios de suministro en todo el mundo, podemos brindar un servicio rápido y eficiente para todos sus requisitos. Desde pedidos de palés hasta entregas en remolque, damos el mismo nivel de enfoque, dedicación y compromiso a todos los pedidos de los clientes. Ya sea que estemos distribuyendo a nivel local o global, nos esforzamos por mantener relaciones sólidas con todos nuestros clientes y proveedores, garantizando una producción y distribución confiable y de alta calidad a un bajo costo para todos.'}
          </p>
        </div>
      </main>
      <Footer />
      <Menu />
    </>
  );
};

export default PolymerDistribution;
