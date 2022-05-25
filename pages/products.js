import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Products.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Products = () => {
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
        <title>Products | Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header parentCallback={handleCallback} />
      <main>
        <div className={styles.products}>
          <div className='wrapper'>
            <div className={styles.text}>
              <h1>{lang === 'english' ? 'Products' : 'Productos'}</h1>
              <h2>
                {lang === 'english'
                  ? 'We offer an extensive range of products and grades from our global supplier network.'
                  : 'Ofrecemos una amplia gama de productos y calidades de nuestra red mundial de proveedores.'}
              </h2>
            </div>
            <img src='/polymer.svg' alt='' />
          </div>
        </div>
        <div className={styles.details}>
          <div className='wrapper'>
            <div className={styles.block}>
              <h1>
                {lang === 'english'
                  ? 'Polypropylene (PP)'
                  : 'Polipropileno (PP)'}
              </h1>
              <p>
                {lang === 'english'
                  ? 'PPH (homopolymer)'
                  : 'PPH (homopolimero)'}
              </p>
              <p>
                {lang === 'english'
                  ? 'PPC (block copolymer)'
                  : 'PPC (copolimero de bloque)'}
              </p>
              <p>
                {lang === 'english'
                  ? 'PPR (random copolymer)'
                  : 'PPR (copolimero aleatorio)'}
              </p>
            </div>
          </div>
          <div className='wrapper'>
            <div className={styles.block}>
              <h1>
                {lang === 'english' ? 'Polyethylene (PE)' : 'Polietileno (PE)'}
              </h1>
              <p>
                {lang === 'english'
                  ? 'LDPE (random copolymer)'
                  : 'LDPE (baja densidad)'}
              </p>
              <p>
                {lang === 'english'
                  ? 'LLDPE (linear low density)'
                  : 'LLDPE (lineal de baja densidad)'}
              </p>
              <p>
                {lang === 'english'
                  ? 'MDPE (medium density)'
                  : 'MDPE (media densidad)'}
              </p>
              <p>
                {lang === 'english'
                  ? 'HDPE (high density)'
                  : 'HDPE (alta densidad)'}
              </p>
            </div>
          </div>
          <div className='wrapper'>
            <div className={styles.block}>
              <h1>
                {lang === 'english' ? 'Polystyrene (PS)' : 'Poliestireno (PS)'}
              </h1>
              <p>
                {lang === 'english'
                  ? 'GPPS (general purpose/crystal)'
                  : 'GPPS (propósito general/cristal)'}
              </p>
              <p>
                {lang === 'english'
                  ? 'HIPS (high impact)'
                  : 'HIPS (resistente al impacto)'}
              </p>
            </div>
          </div>
          <div className='wrapper'>
            <div className={styles.block}>
              <h1>
                {lang === 'english'
                  ? 'ABS (acrylonitrile-butadiene-styrene)'
                  : 'ABS (acrilonitrilo butadieno estireno)'}
              </h1>
              <h1>
                {lang === 'english'
                  ? 'SAN (styrene-acrylonitrile)'
                  : 'SAN (estireno acrilonitrilo)'}
              </h1>
              <h1>
                {lang === 'english'
                  ? 'Polycarbonate (PC)'
                  : 'PC (policarbonato)'}
              </h1>
              <h1>
                {lang === 'english'
                  ? 'POM (acetal copolymer)'
                  : 'POM (poliacetal)'}
              </h1>
              <h1>
                {lang === 'english'
                  ? 'Polyethylene terephthalate (PET)'
                  : 'PET (tereftalato de polietileno)'}
              </h1>
              <h1>
                {lang === 'english'
                  ? 'Filled PP compounds'
                  : 'Compuestos de PP rellenos'}
              </h1>
              <h1>{lang === 'english' ? 'PA6 (nylon 6)' : 'PA6 (nylon 6)'}</h1>
              <h1>
                {lang === 'english' ? 'PA66 (nylon 66)' : 'PA66 (nylon 66)'}
              </h1>
              <h1>
                {lang === 'english'
                  ? 'Masterbatch & Additives'
                  : 'Masterbatch y aditivos'}
              </h1>
              <h1>
                {lang === 'english'
                  ? 'Reprocessed PP, PE, PS, ABS'
                  : 'Reprocesado PP, PE, PS, ABS'}
              </h1>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
      <Menu lang={lang} />
    </>
  );
};

export default Products;
