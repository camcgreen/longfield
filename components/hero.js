import styles from '../styles/Hero.module.css';
import Button from './button';

const Hero = ({ lang }) => {
  return (
    <section className={styles.hero}>
      {/* <img src='/hero.svg' alt='hero image' /> */}
      <img src='/hero-new.svg' alt='hero image' />
      <div className={styles.content}>
        <h1>
          {lang === 'english'
            ? 'Cost effective polymers.'
            : 'Polímeros de coste eficiente.'}
        </h1>
        <h1>
          {lang === 'english' ? 'Delivered globally.' : 'Con envío mundial.'}
        </h1>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
        </p> */}
        <p>
          {lang === 'english'
            ? "Established in 1968, Longfield is entrusted by some of the world's leading suppliers to distribute their products globally."
            : 'Fundada en 1968, Longfield recibe la confianza de proveedores líderes en el mercado global para para distribuir sus productos en todo el mundo.'}
        </p>
        <Button
          text={lang === 'english' ? 'LEARN MORE' : 'LEER MÁS'}
          link='/about'
        />
      </div>
    </section>
  );
};

export default Hero;
