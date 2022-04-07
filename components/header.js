import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img className={styles.logo} src='/logo.png' alt='' />
        <ul className={styles.links}>
          <li>About</li>
          <li>Suppliers</li>
          <li>Products</li>
          <li>The Team</li>
          <li>Polymer Distribution</li>
          <li>Contact</li>
          <li className={styles.dropdown}>English</li>
        </ul>
        <img className={styles.partner} src='/nav-sterling.svg' alt='' />
      </nav>
    </header>
  );
};

export default Header;
