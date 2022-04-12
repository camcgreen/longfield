import styles from '../styles/Button.module.css';

const Button = ({ text, small }) => {
  return (
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
