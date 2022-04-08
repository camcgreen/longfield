import Head from 'next/head';
import styles from '../styles/About.module.css';
import Header from '../components/header';
import Partnered from '../components/partnered';
import Footer from '../components/footer';

const About = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>Longfield Polymers | About</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <h1>About</h1>
        <Partnered />
      </main>
      <Footer />
    </div>
  );
};

export default About;
