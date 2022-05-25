import styles from '../styles/Stats.module.css';

const Stats = ({ lang }) => {
  return (
    <section className={styles.stats}>
      <div className='wrapper'>
        <h1>
          {lang === 'english'
            ? '300,000 metric tonnes sourced globally per year and sold in 4 continents.'
            : '300.000 toneladas suministradas al año en todo el mundo y vendidas en 4 continentes.'}
        </h1>
        <img src='/map.svg' alt='' />
      </div>
    </section>
  );
};

export default Stats;
