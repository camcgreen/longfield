import Head from 'next/head';
import styles from '../styles/Suppliers.module.css';
import Header from '../components/header';
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
        <h1>Suppliers</h1>
        <div className={styles.grid}>
          <div>
            <img src='/c-ineos.png' alt='Ineos Styrolution' />
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
            <img src='/c-long.png' alt='Long Da Masterbatch' />
          </div>
          <div>
            <img src='/c-petkim.png' alt='Petkim' />
          </div>
          <div>
            <img src='/c-kumho.png' alt='Kumho Petrochemical' />
          </div>
          <div>
            <img src='/c-inno.png' alt='Inno-Comp' />
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
        <div className={styles.flex}>
          <div>
            <img src='/c-ineos.png' alt='Ineos Styrolution' />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut
            </p>
          </div>
          <div>
            <img src='/c-formosa-plastics.png' alt='Formosa Plastics' />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut
            </p>
          </div>
          <div>
            <img src='/c-formosa-corp.png' alt='Formosa Plastics Corp' />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut
            </p>
          </div>
          <div>
            <img src='/c-unipetrol.png' alt='Unipetrol' />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut
            </p>
          </div>
          <div>
            <img src='/c-sibur.png' alt='Sibur' />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Suppliers;
