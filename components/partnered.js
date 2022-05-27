import styles from '../styles/Partnered.module.css';

const Partnered = ({ lang }) => {
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
            <h1>{lang === 'english' ? 'Partnered with' : 'Asociados con'}</h1>
            <h1>Sterling International, USA.</h1>
          </div>
        </div>
        <p>
          {lang === 'english'
            ? 'Longfield Polymers are partners with Louisiana based Sterling International, contributing to the Polymer Distributor’s £250m annual turnover.'
            : 'Longfield Polymers se enorgullece de ser socio de Sterling International, con sede en Luisiana y una facturación anual combinada de 250 millones de libras.'}
        </p>
      </div>
    </section>
  );
};

export default Partnered;
