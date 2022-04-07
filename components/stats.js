import styles from '../styles/Stats.module.css';

const Stats = () => {
  return (
    <section className={styles.stats}>
      <h1>
        300,000 metric tonnes sourced globally per year and sold in 4
        continents.
      </h1>
      <img src='/map.svg' alt='' />
    </section>
  );
};

export default Stats;
