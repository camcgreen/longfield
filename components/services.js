import styles from '../styles/Services.module.css';
import Button from './button';

const Services = ({ lang }) => {
  return (
    <section className={styles.services}>
      <div className='wrapper'>
        <div className={styles.column}>
          <img src='/monitor.svg' alt='' />
          <p>
            {lang === 'english'
              ? 'Our stock management system gives live information about the availability and timescales of products.'
              : 'Nuestra tecnología y gestión de stock están respaldados con inversiones y un equipo comprometido de expertos para brindar disponibilidad y plazos precisos.'}
          </p>
          <Button
            text={lang === 'english' ? 'LEARN MORE' : 'LEER MÁS'}
            link='/products'
          />
        </div>
        <div className={styles.column}>
          <img src='/dock.svg' alt='' />
          <p className={lang === 'spanish' && styles.minHeight}>
            {lang === 'english'
              ? 'Typically, we distribute around 25,000 tonnes of polymer per month at the most competitive prices.'
              : 'Distribuimos alrededor de 25.000 toneladas de polímeros al mes, a los precios más eficientes.'}
          </p>
          <Button
            text={lang === 'english' ? 'LEARN MORE' : 'LEER MÁS'}
            link='/polymer-distribution'
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
