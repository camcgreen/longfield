import styles from '../styles/Endorsements.module.css';

const Endorsements = () => {
  return (
    <section className={styles.endorsements}>
      <div className={styles.grid}>
        <img src='/c-ineos.png' alt='Ineos Styrolution' />
        <img src='/c-formosa-plastics.png' alt='Formosa Plastics' />
        <img src='/c-lg.png' alt='LG Chem' />
        <img src='/c-unipetrol.png' alt='Unipetrol' />
        <img src='/c-sibur.png' alt='Sibur' />
        <img src='/c-long.png' alt='Long Da Masterbatch' />
        <img src='/c-petkim.png' alt='Petkim' />
        <img src='/c-petkim.png' alt='Petkim' />
        <img src='/c-kumho.png' alt='Kumho Petrochemical' />
        <img src='/c-inno.png' alt='Inno-Comp' />
        <img src='/c-formosa-corp.png' alt='Formosa Plastics Corp' />
        <img src='/c-sidpec.png' alt='Sidpec' />
        <img src='/c-epsan.png' alt='Epsan' />
        <img src='/c-lotte.png' alt='Lotte Chemical' />
      </div>
      <h1>These leading polymer producers choose Longfield</h1>
    </section>
  );
};

export default Endorsements;
