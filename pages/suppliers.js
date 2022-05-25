import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Suppliers.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Suppliers = () => {
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
        <title>Suppliers | Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header parentCallback={handleCallback} />
      <main className={styles.suppliers}>
        <div className='wrapper'>
          <h1>{lang === 'english' ? 'Suppliers' : 'Proveedores'}</h1>
          <div className={styles.grid}>
            <a
              href='https://epsan.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-epsan.png' alt='Epsan' />
            </a>
            <a
              href='https://www.fpcusa.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-formosa-plastics.png' alt='Formosa Plastics' />
            </a>
            <a
              href='https://www.fpcusa.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-formosa-corp.png' alt='Formosa Plastics Corp' />
            </a>
            <a
              href='https://www.ineos-styrolution.com/index.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-ineos.jpg' alt='Ineos Styrolution' />
            </a>
            <a
              href='https://inno-comp.hu/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-inno.png' className={styles.inno} alt='Inno-Comp' />
            </a>
            <a
              href='https://www.kkpc.com/eng/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-kumho.svg' alt='Kumho Petrochemical' />
            </a>
            <a
              href='https://www.lgchem.com/main/index'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-lg.svg' alt='LG Chem' />
            </a>
            <div>
              <img
                src='/c-long.png'
                className={styles.long}
                alt='Long Da Masterbatch'
              />
            </div>
            <a
              href='https://www.lottechem.com/en/index.do'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-lotte.png' alt='Lotte Chemical' />
            </a>
            <a
              href='https://www.hip-petrohemija.com/home.8.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-petrohemija.jpeg' alt='Petrohemija' />
            </a>
            <a
              href='https://www.petkim.com.tr/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-petkim.svg' alt='Petkim' />
            </a>
            <a
              href='https://www.sibur.ru/en/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-sibur.svg' alt='Sibur' />
            </a>
            <a
              href='https://www.sidpec.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-sidpec.png' alt='Sidpec' />
            </a>
            <a
              href='https://www.orlenunipetrol.cz/en/Pages/default.aspx'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/c-unipetrol.png' alt='Unipetrol' />
            </a>
          </div>
          <div className={styles.overlay} />
          <h2>
            {lang === 'english'
              ? "We partner with some of the world's greatest polymer brands."
              : 'En asociación con varias de las mejores marcas de polímeros a nivel mundial.'}
          </h2>
        </div>
      </main>
      <Footer lang={lang} extraId={'goToBottom'} />
      <Menu lang={lang} />
    </>
  );
};

export default Suppliers;
