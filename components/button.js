import Link from 'next/link';
import styles from '../styles/Button.module.css';

const Button = ({ text, small, link }) => {
  return link ? (
    <Link href={link}>
      <button
        className={
          small ? `${styles.button} ${styles.small}` : `${styles.button}`
        }
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      className={
        small ? `${styles.button} ${styles.small}` : `${styles.button}`
      }
    >
      {text}
    </button>
  );
};

export default Button;
