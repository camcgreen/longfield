import styles from '../styles/Hero.module.css';
import Button from './button';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src='/hero.svg' alt='hero image' />
      <div className={styles.content}>
        <h1>Cost effective polymers.</h1>
        <h1>Delivered globally.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
        </p>
        <Button text='LEARN MORE' />
      </div>
    </section>
  );
};

export default Hero;
