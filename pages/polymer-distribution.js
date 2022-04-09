import Head from 'next/head';
import styles from '../styles/PolymerDistribution.module.css';
import Header from '../components/header';
import Partnered from '../components/partnered';
import Footer from '../components/footer';

const PolymerDistribution = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>Longfield Polymers | Polymer Distribution</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.content}>
        <img
          src='/polymer-distribution-map.png'
          alt='Polymer distribution map'
        />
        <h1>
          As the UK’s leading independent polymer distributor, with supply
          partners all over the World, we are able to provide a reliable and
          efficient service for all your requirements
        </h1>
        <p>
          As the UK’s leading independent polymer distributor, with supply
          partners all over the World, we are able to provide a fast and
          efficient service for all your requirementsLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PolymerDistribution;
