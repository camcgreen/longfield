import Head from 'next/head';
import styles from '../styles/PolymerDistribution.module.css';
import Header from '../components/header';
import Partnered from '../components/partnered';
import Footer from '../components/footer';
import Menu from '../components/menu';

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
          As a globally trusted polymer distributor, with supply partners all
          over the World, we are able to provide a fast and efficient service
          for all your requirements. From Pallet orders to Trailer Deliveries,
          we ensure the same level of focus, dedication and commitment to any
          level of order or customer. Whether we’re distributing locally or
          globally, we strive to maintain strong relationships with all of our
          customers and suppliers, guaranteeing reliable and high quality
          production and distribution at a low cost for all.
        </p>
      </main>
      <Footer />
      <Menu />
    </div>
  );
};

export default PolymerDistribution;
