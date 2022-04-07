import styles from '../styles/Services.module.css';
import Button from './button';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.column}>
        <img src='/monitor.svg' alt='' />
        <p>
          Our stock management system give live information about the
          availability and timescales of products.
        </p>
        <Button text='LEARN MORE' />
      </div>
      <div className={styles.column}>
        <img src='/dock.svg' alt='' />
        <p>
          Typically, we distribute around 25,000 tonnes of polymer per month at
          the most competitive prices.
        </p>
        <Button text='LEARN MORE' />
      </div>
    </section>
  );
};

export default Services;
