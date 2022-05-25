import styles from '../styles/Endorsements.module.css';

const Endorsements = ({ lang }) => {
  return (
    <section className={styles.endorsements}>
      <div className='wrapper'>
        <div className={styles.grid}>
          <img src='/c-epsan.png' alt='Epsan' />
          <img
            src='/c-formosa-plastics.png'
            // className={styles.formosa}
            alt='Formosa Plastics'
          />
          <img src='/c-formosa-corp.png' alt='Formosa Plastics Corp' />
          <img src='/c-ineos.jpg' alt='Ineos Styrolution' />
          <img src='/c-inno.png' className={styles.inno} alt='Inno-Comp' />
          <img src='/c-kumho.svg' alt='Kumho Petrochemical' />
          <img src='/c-lg.svg' alt='LG Chem' />
          <img
            src='/c-long.png'
            className={styles.long}
            alt='Long Da Masterbatch'
          />
          <img src='/c-lotte.png' alt='Lotte Chemical' />
          <img src='/c-petrohemija.jpeg' alt='Petrohemija' />
          <img src='/c-petkim.svg' alt='Petkim' />
          <img src='/c-sibur.svg' alt='Sibur' />
          <img src='/c-sidpec.png' alt='Sidpec' />
          <img src='/c-unipetrol.png' alt='Unipetrol' />
        </div>
        <h1>
          {lang === 'english'
            ? 'These leading polymer producers choose Longfield'
            : 'Empresas lideres en polímeros que escogen Longfield'}
        </h1>
      </div>
    </section>
  );
};

export default Endorsements;
