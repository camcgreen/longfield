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
            {/* <a
              href='https://epsan.com/'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-epsan.png' alt='Epsan' />
            </div>
            {/* </a> */}
            {/* <a
              href='https://www.fpcusa.com/'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-formosa-plastics.png' alt='Formosa Plastics' />
            </div>
            {/* </a> */}
            {/* <a
              href='http://www.fpc.com.tw/fpcw/'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-formosa-corp.png' alt='Formosa Plastics Corp' />
            </div>
            {/* </a> */}
            {/* <a
              href='https://www.ineos-styrolution.com/index.html'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-ineos.jpg' alt='Ineos Styrolution' />
            </div>
            {/* </a> */}
            {/* <a
              href='https://inno-comp.hu/'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-inno.png' className={styles.inno} alt='Inno-Comp' />
            </div>
            {/* </a> */}
            {/* <a
              href='https://www.kkpc.com/eng/'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-kumho.svg' alt='Kumho Petrochemical' />
            </div>
            {/* </a> */}
            {/* <a
              href='https://www.lgchem.com/main/index'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-lg.svg' alt='LG Chem' />
            </div>
            {/* </a> */}
            <div>
              <img
                src='/c-locapol.svg'
                className={styles.locapol}
                alt='Locapol'
              />
            </div>
            {/* <a
              href='https://longdamasterbatch.en.alibaba.com/'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img
                src='/c-long.png'
                className={styles.long}
                alt='Long Da Masterbatch'
              />
            </div>
            {/* </a> */}
            {/* <a
              href='https://www.lottechem.com/en/index.do'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-lotte.png' alt='Lotte Chemical' />
            </div>
            {/* </a> */}
            {/* <a
              href='https://www.hip-petrohemija.com/home.8.html'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-petrohemija.jpeg' alt='Petrohemija' />
            </div>
            {/* </a> */}
            {/* <a
              href='https://www.petkim.com.tr/'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-petkim.svg' alt='Petkim' />
            </div>
            {/* </a> */}
            {/* <a
              href='https://www.sibur.ru/en/'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              {/* <img src='/c-sibur.svg' alt='Sibur' /> */}
              <img
                src='/c-locapol.svg'
                className={styles.locapol}
                alt='Locapol'
              />
            </div>
            {/* </a> */}
            {/* <a
              href='https://www.sidpec.com/'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-sidpec.png' alt='Sidpec' />
            </div>
            {/* </a> */}
            {/* <a
              href='https://www.orlenunipetrol.cz/en/Pages/default.aspx'
              target='_blank'
              rel='noopener noreferrer'
            > */}
            <div>
              <img src='/c-unipetrol.png' alt='Unipetrol' />
            </div>
            {/* </a> */}
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
