import styles from '../styles/Partnered.module.css';

const Partnered = () => {
  return (
    <section className={styles.partnered}>
      <div className='wrapper'>
        <div className={styles.content}>
          <a
            href='https://sterlinginc.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/sterling-international.png'
              alt='Sterling International'
            />
          </a>
          <div>
            <h1>Partnered with</h1>
            <h1>Sterling International, USA.</h1>
          </div>
        </div>
        <p>
          Longfield Polymers are proud partners with Louisiana based Sterling
          International, contributing to the Polymer Distributor’s £250m annual
          turnover.
        </p>
      </div>
    </section>
  );
};

export default Partnered;
