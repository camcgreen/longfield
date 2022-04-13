import Link from 'next/link';
import styles from '../styles/Menu.module.css';
import Close from './svg/close';

const Menu = ({ active = false }) => {
  return (
    <div
      // className={active ? `${styles.menu} ${styles.active}` : `${styles.menu}`}
      className={styles.menu}
      id='menu'
    >
      <ul className={styles.links}>
        <li>
          <img src='/nav-sterling.svg' alt='' />
        </li>
        <Link href='/about'>
          <li>About</li>
        </Link>
        <Link href='/suppliers'>
          <li>Suppliers</li>
        </Link>
        <Link href='/products'>
          <li>Products</li>
        </Link>
        <Link href='/the-team'>
          <li>The Team</li>
        </Link>
        <Link href='/polymer-distribution'>
          <li>Polymer Distribution</li>
        </Link>
        <Link href='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
      <Close />
    </div>
  );
};

export default Menu;
