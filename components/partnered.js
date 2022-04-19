import styles from '../styles/Partnered.module.css';

const Partnered = () => {
  return (
    <section className={styles.partnered}>
      <div className='wrapper'>
        <div className={styles.content}>
          <img src='/sterling-international.png' alt='Sterling International' />
          <div>
            <h1>Partnered with</h1>
            <h1>Sterling International, USA.</h1>
          </div>
        </div>
        <p>
          Longfield Polymers are partnered with Sterling International, a
          Louisiana based, US$300 million, polymer distribution company.
          Sterling are the biggest customer of Formosa.
        </p>
      </div>
    </section>
  );
};

export default Partnered;
