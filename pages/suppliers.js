import Head from 'next/head';
import styles from '../styles/Suppliers.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Suppliers = () => {
  return (
    <>
      <Head>
        <title>Suppliers | Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <main className={styles.suppliers}>
        <div className='wrapper'>
          <h1>Suppliers</h1>
          <div className={styles.grid}>
            <div>
              {/* <a
                href='https://www.ineos-styrolution.com/index.html'
                target='_blank'
                rel='noopener noreferrer'
              > */}
              <img src='/c-ineos.png' alt='Ineos Styrolution' />
              {/* </a> */}
            </div>
            <div>
              <img src='/c-formosa-plastics.png' alt='Formosa Plastics' />
            </div>
            <div>
              <img src='/c-lg.png' alt='LG Chem' />
            </div>
            <div>
              <img src='/c-unipetrol.png' alt='Unipetrol' />
            </div>
            <div>
              <img src='/c-sibur.png' alt='Sibur' />
            </div>
            <div>
              <img
                src='/c-long.png'
                className={styles.long}
                alt='Long Da Masterbatch'
              />
            </div>
            <div>
              <img src='/c-petkim.png' alt='Petkim' />
            </div>
            <div>
              <img src='/c-kumho.png' alt='Kumho Petrochemical' />
            </div>
            <div>
              <img src='/c-inno.png' className={styles.inno} alt='Inno-Comp' />
            </div>
            <div>
              <img src='/c-formosa-corp.png' alt='Formosa Plastics Corp' />
            </div>
            <div>
              <img src='/c-sidpec.png' alt='Sidpec' />
            </div>
            <div>
              <img src='/c-epsan.png' alt='Epsan' />
            </div>
            <div>
              <img src='/c-lotte.png' alt='Lotte Chemical' />
            </div>
          </div>
          <div className={styles.overlay} />
          <h2>We partner with some of the world's greatest polymer brands.</h2>
        </div>
      </main>
      <Footer />
      <Menu />
    </>
  );
};

export default Suppliers;
