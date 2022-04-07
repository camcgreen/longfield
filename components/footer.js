import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <ul className={`${styles.column} ${styles.links}`}>
          <h1>NAVIGATION</h1>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>THE TEAM</li>
          <li>SUPPLIERS</li>
          <li>POLYMER DISTRIBUTION</li>
          <li>CONTACT</li>
        </ul>
        <ul className={styles.column}>
          <h1>EUROPE</h1>
          <li>SUITE 1, FLOOR 1</li>
          <li>CHELFORD HOUSE</li>
          <li>GADBROOK PARK</li>
          <li>NORTHWICH</li>
          <li>CW9 7LN</li>
          <li>UNITED KINGDOM</li>
          <li className={styles.email}>E. info@longchem.co.uk</li>
        </ul>
        <ul className={styles.column}>
          <h1>USA</h1>
          <li>4750 SHERWOOD COMMON BLVD. </li>
          <li>SUITE 100</li>
          <li>BATON ROUGE</li>
          <li>LOUISIANA</li>
          <li>70816</li>
          <li>USA</li>
          <li className={styles.email}>E. TBC@longchem.co.uk</li>
        </ul>
        <ul className={styles.column}>
          <h1>China</h1>
          <li>Address 1</li>
          <li>Address 2</li>
          <li>Address 3</li>
          <li>Address 4</li>
          <li>Address 5</li>
          <li>China</li>
          <li className={styles.email}>E. info@longchem.co.uk</li>
        </ul>
        <ul className={`${styles.column} ${styles.form}`}>
          <h1>STAY UP TO DATE</h1>
          <input type='text' placeholder='your email address' />
          <button>Join</button>
          <li>Follow us:</li>
          <img src='/linkedin.svg' alt='' />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
