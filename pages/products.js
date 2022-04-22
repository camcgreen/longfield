import Head from 'next/head';
import styles from '../styles/Products.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Products = () => {
  return (
    <>
      <Head>
        <title>Products | Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <main>
        <div className={styles.products}>
          <div className='wrapper'>
            <div className={styles.text}>
              <h1>Products</h1>
              <h2>
                We offer an extensive range of products and grades from our
                global supplier network.
              </h2>
            </div>
            <img src='/polymer.svg' alt='' />
          </div>
        </div>
        <div className={styles.details}>
          <div className='wrapper'>
            <div className={styles.block}>
              <h1>Polypropylene (PP)</h1>
              <p>PPH (homopolymer)</p>
              <p>PPC (block copolymer)</p>
              <p>PPR (random copolymer)</p>
            </div>
          </div>
          <div className='wrapper'>
            <div className={styles.block}>
              <h1>Polyethylene (PE)</h1>
              <p>LDPE (low density)</p>
              <p>LLDPE (linear low density)</p>
              <p>MDPE (medium density)</p>
              <p>HDPE (high density)</p>
            </div>
          </div>
          <div className='wrapper'>
            <div className={styles.block}>
              <h1>Polystyrene (PS)</h1>
              <p>GPPS (general purpose/crystal</p>
              <p>HIPS (high impact)</p>
            </div>
          </div>
          <div className='wrapper'>
            <div className={styles.block}>
              <h1>ABS (acrylonitrile-butadiene-styrene)</h1>
              <h1>SAN (styrene-acrylonitrile)</h1>
              <h1>Polycarbonate (PC)</h1>
              <h1>POM (acetal copolymer)</h1>
              <h1>Polyethylene terephthalate (PET)</h1>
              <h1>Filled PP compounds</h1>
              <h1>PA6 (nylon 6)</h1>
              <h1>PA66 (nylon 66)</h1>
              <h1>Masterbatch & Additives</h1>
              <h1>Reprocessed PP, PE, PS, ABS</h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Menu />
    </>
  );
};

export default Products;
