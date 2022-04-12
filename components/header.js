import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Hamburger from './svg/hamburger';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/'>
          <img className={styles.logo} src='/logo.png' alt='' />
        </Link>
        <ul className={styles.links}>
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
          <li className={styles.dropdown}>
            <span>English</span>
            <img src='/down.svg' alt='' />
          </li>
        </ul>
        <div>
          {/* <img className={styles.hamburger} src='/hamburger.svg' alt='' /> */}
          <Hamburger />
          <img className={styles.partner} src='/nav-sterling.svg' alt='' />
        </div>
      </nav>
    </header>
  );
};

export default Header;
