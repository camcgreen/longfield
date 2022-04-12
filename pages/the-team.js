import Head from 'next/head';
import styles from '../styles/Team.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Team = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>Longfield Polymers | The Team</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.team}>
        <h1>Under construction</h1>
      </main>
      <Footer />
      <Menu />
    </div>
  );
};

export default Team;
