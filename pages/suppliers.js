import Head from 'next/head';
import styles from '../styles/Suppliers.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Suppliers = () => {
  return (
    <>
      <Head>
        <title>Longfield Polymers | Suppliers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.suppliers}>
        <div className='wrapper'>
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
                INEOS Styrolution is the leading, global styrenics supplier with
                a focus on styrene monomer, polystyrene, ABS Standard and
                styrenic specialties. With world-class production facilities and
                more than 90 years of experience, INEOS Styrolution helps its
                customers succeed by offering the best possible solution,
                designed to give them a competitive edge in their markets.
              </p>
            </div>
            <div>
              <img src='/c-formosa-plastics.png' alt='Formosa Plastics' />
              <p>
                Founded in 1978, Formosa Plastics Corporation, U.S.A. (Formosa
                Plastics) is a growing, vertically-integrated supplier of
                plastic resins and petrochemicals. With annual revenues of more
                than $5 billion, we employ over 3,000 people who operate over 20
                production units in five business divisions – Olefins,
                Polyolefins, Vinyl, Specialty Polyvinyl Chloride, and
                Chlor-Alkali.
              </p>
            </div>
            <div>
              <img src='/c-formosa-corp.png' alt='Formosa Plastics Corp' />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              </p>
            </div>
            <div>
              <img src='/c-unipetrol.png' alt='Unipetrol' />
              <p>
                The ORLEN Unipetrol refinery and petrochemical group constitutes
                an important part of the Czech industry. It is the only crude
                oil processor in the Czech Republic, one of the most important
                producers of plastics and the owner of the largest network of
                filling stations Benzina ORLEN.
              </p>
            </div>
            <div>
              <img src='/c-sibur.png' alt='Sibur' />
              <p>
                SIBUR is one of the world’s fastest-growing petrochemical
                players and Russia’s leading polymer and rubber manufacturer.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Menu />
    </>
  );
};

export default Suppliers;
