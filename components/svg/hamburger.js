import { useEffect } from 'react';
import styles from '../../styles/Hamburger.module.css';

const Hamburger = () => {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');
    const menu = document.getElementById('menu');
    hamburger.addEventListener('click', () => {
      menu.classList.add('active');
    });
  });
  return (
    <svg
      className={styles.hamburger}
      id='hamburger'
      // fill='#000000'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 50'
      width='50px'
      height='50px'
    >
      <path d='M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z' />
    </svg>
  );
};

export default Hamburger;