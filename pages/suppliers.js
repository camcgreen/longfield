import Head from 'next/head';
import styles from '../styles/Suppliers.module.css';
import Header from '../components/header';
import Partnered from '../components/partnered';
import Footer from '../components/footer';

const Suppliers = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>Longfield Polymers | Suppliers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.suppliers}>
        <h1>Under construction</h1>
      </main>
      <Partnered />
      <Footer />
    </div>
  );
};

export default Suppliers;
