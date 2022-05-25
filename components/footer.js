import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const [showEurope, setShowEurope] = useState(true);
  const [showUsa, setShowUsa] = useState(true);
  const [showChina, setShowChina] = useState(true);

  useEffect(() => {
    const setAddressState = () => {
      if (window.innerWidth <= 1024) {
        setShowEurope(false);
        setShowUsa(false);
        setShowChina(false);
      } else {
        setShowEurope(true);
        setShowUsa(true);
        setShowChina(true);
      }
    };

    setAddressState();

    window.addEventListener('resize', setAddressState);
  }, []);
  return (
    <footer className={styles.footer}>
      <div className='wrapper'>
        <div className={styles.content}>
          <ul className={`${styles.column} ${styles.links}`}>
            <h1>NAVIGATION</h1>
            <Link href='/'>
              <li>HOME</li>
            </Link>
            <Link href='/about'>
              <li>ABOUT</li>
            </Link>
            <Link href='/the-team'>
              <li>THE TEAM</li>
            </Link>
            <Link href='/suppliers'>
              <li>SUPPLIERS</li>
            </Link>
            <Link href='/products'>
              <li>PRODUCTS</li>
            </Link>
            <Link href='/polymer-distribution'>
              <li>POLYMER DISTRIBUTION</li>
            </Link>
            <Link href='/contact'>
              <li>CONTACT</li>
            </Link>
          </ul>
          <ul
            className={styles.column}
            // style={{ marginTop: showEurope ? 80 : 40 }}
          >
            <h1
              style={{ marginBottom: showEurope ? 20 : 0 }}
              onClick={() => {
                if (window.innerWidth <= 1024) {
                  setShowEurope(!showEurope);
                }
              }}
            >
              EUROPE <img src={showEurope ? '/fUp.svg' : '/fDown.svg'} alt='' />
            </h1>
            <div
              className={styles.europe}
              style={{
                display: showEurope ? 'block' : 'none',
              }}
            >
              <li>SUITE 1, FLOOR 1</li>
              <li>CHELFORD HOUSE</li>
              <li>GADBROOK PARK</li>
              <li>NORTHWICH</li>
              <li>CW9 7LN</li>
              <li>UNITED KINGDOM</li>
              <li
                className={styles.email}
                // style={{ marginBottom: showEurope ? 40 : 0 }}
                style={{ marginBottom: showEurope ? 40 : 0 }}
              >
                <a
                  href='mailto:info@longchem.co.uk'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  E. info@longchem.co.uk
                </a>
              </li>
            </div>
          </ul>
          <ul
            className={styles.column}
            // style={{ marginTop: showUsa ? 80 : 40 }}
            // style={{ marginTop: 20 }}
          >
            <h1
              style={{ marginBottom: showUsa ? 20 : 0 }}
              // onClick={() => setShowUsa(!showUsa)}
              onClick={() => {
                if (window.innerWidth <= 1024) {
                  setShowUsa(!showUsa);
                }
              }}
            >
              USA <img src={showUsa ? '/fUp.svg' : '/fDown.svg'} alt='' />
            </h1>
            <div
              className={styles.usa}
              style={{ display: showUsa ? 'block' : 'none' }}
            >
              <li>4750 SHERWOOD</li>
              <li>COMMON BLVD.</li>
              <li>SUITE 100</li>
              <li>BATON ROUGE</li>
              <li>LOUISIANA</li>
              <li>70816</li>
              <li>USA</li>
              <li
                className={`${styles.email} ${styles.emailUsa}`}
                // style={{ marginBottom: showUsa ? 40 : 0 }}
                style={{ marginBottom: showUsa ? 40 : 0 }}
              >
                <a
                  href='mailto:americas@longchem.co.uk'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  E. americas@longchem.co.uk
                </a>
              </li>
            </div>
          </ul>
          <ul
            className={styles.column}
            // style={{ marginTop: showChina ? 80 : 40 }}
            // style={{ marginTop: 20 }}
          >
            <h1
              // style={{ marginBottom: showChina ? 60 : 60 }}
              style={{ marginBottom: showChina ? 20 : 0 }}
              // onClick={() => setShowChina(!showChina)}
              onClick={() => {
                if (window.innerWidth <= 1024) {
                  setShowChina(!showChina);
                }
              }}
            >
              CHINA <img src={showChina ? '/fUp.svg' : '/fDown.svg'} alt='' />
            </h1>
            <div
              className={styles.china}
              style={{ display: showChina ? 'block' : 'none' }}
            >
              <li>ZIBO</li>
              <li>SHANDONG PROVINCE</li>
              <li>CHINA</li>
              <li className={styles.liPlaceholder}></li>
              <li className={styles.liPlaceholder}></li>
              <li className={styles.liPlaceholder}></li>
              <li className={styles.email}>
                <a
                  href='mailto:china@longchem.co.uk'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ marginBottom: showChina ? 40 : 0 }}
                >
                  E. china@longchem.co.uk
                </a>
              </li>
              <li>+86 186 1083 1479</li>
            </div>
          </ul>
          <ul className={`${styles.column} ${styles.form}`}>
            <h1>STAY UP TO DATE</h1>
            <input type='text' placeholder='your email' />
            <button>Join</button>
            <li>Follow us:</li>
            {/* <img className={styles.linkedin} src='/linkedin.svg' alt='' /> */}
            <img
              className={styles.linkedinLogo}
              // src='/linkedin-logo.png'
              src='/random.svg'
              alt=''
              style={{ display: 'block !important' }}
            />
          </ul>
        </div>
      </div>
      <div className={styles.break}></div>
      <div className='wrapper'>
        <div className={styles.legal}>
          <div className={`${styles.column} ${styles.legalLinks}`}>
            <h1>
              <a href='path_to_file' download='proposed_file_name'>
                PRIVACY POLICY
              </a>
            </h1>
          </div>
          <div className={`${styles.column} ${styles.legalLinks}`}>
            <h1>
              <a href='/Terms of Sale.pdf' download='Terms of Sale'>
                TERMS & CONDITIONS
              </a>
            </h1>
          </div>
          <div className={`${styles.column} ${styles.legalLinks}`}>
            <h1>
              <a
                href='/Anti-Slavery Statement.pdf'
                download='Anti-Slavery Statement'
              >
                ANTI SLAVERY STATEMENT
              </a>
            </h1>
          </div>
          <div className={`${styles.column} ${styles.legalLinks}`}>
            <h1>
              <a href='/Certificates.pdf' download='Certificates'>
                DOWNLOAD CERTIFICATES
              </a>
            </h1>
          </div>
        </div>
        <p className={styles.disclaimer}>
          Longfield Polymers is the trading name of Longfield Chemicals a
          limited company which is registered in England and Wales with number
          925463 VAT no. GB 344 1687 51, BE 074 8632 538, NL 826434137B01
          Registered office - Suite 1, Floor 1, Chelford House, Gadbrook Park,
          Northwich, CW9 7LN{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
