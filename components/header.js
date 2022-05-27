import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import Hamburger from './svg/hamburger';

const Header = ({ parentCallback }) => {
  const router = useRouter();
  const [lang, setLang] = useState('english');
  const handleDropdown = (e) => {
    e.preventDefault();
    localStorage.setItem('lang', e.target.value);
    setLang(e.target.value);
    parentCallback(e.target.value);
  };
  useEffect(() => {
    const langStored = localStorage.getItem('lang');
    if (langStored === null) {
      localStorage.setItem('lang', 'english');
      setLang('english');
    } else {
      setLang(langStored);
    }
    const element = document.getElementById('lang');
    element.value = lang;
  });
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/'>
          <img
            className={styles.logo}
            src='/logo.svg'
            alt='Longfield Polymers'
          />
        </Link>
        <ul className={styles.links}>
          <Link href='/about'>
            <li
              style={{
                color: router.pathname === '/about' ? '#FFA100' : '#1A2B3B',
              }}
              className={lang === 'spanish' && styles.smallMargin}
            >
              {lang === 'english' ? 'About' : 'Sobre Nosotros'}
            </li>
          </Link>
          <Link href='/suppliers'>
            <li
              style={{
                color: router.pathname === '/suppliers' ? '#FFA100' : '#1A2B3B',
              }}
              className={lang === 'spanish' && styles.smallMargin}
            >
              {lang === 'english' ? 'Suppliers' : 'Proveedores'}
            </li>
          </Link>
          <Link href='/products'>
            <li
              style={{
                color: router.pathname === '/products' ? '#FFA100' : '#1A2B3B',
              }}
              className={lang === 'spanish' && styles.smallMargin}
            >
              {lang === 'english' ? 'Products' : 'Productos'}
            </li>
          </Link>
          <Link href='/the-team'>
            <li
              style={{
                color: router.pathname === '/the-team' ? '#FFA100' : '#1A2B3B',
              }}
              className={lang === 'spanish' && styles.smallMargin}
            >
              {lang === 'english' ? 'The Team' : 'Nuestro Equipo'}
            </li>
          </Link>
          <Link href='/polymer-distribution'>
            <li
              style={{
                color:
                  router.pathname === '/polymer-distribution'
                    ? '#FFA100'
                    : '#1A2B3B',
              }}
              className={lang === 'spanish' && styles.smallMargin}
            >
              {lang === 'english'
                ? 'Polymer Distribution'
                : 'Distribuición de Polímeros'}
            </li>
          </Link>
          <Link href='/contact'>
            <li
              style={{
                color: router.pathname === '/contact' ? '#FFA100' : '#1A2B3B',
              }}
              className={lang === 'spanish' && styles.smallMargin}
            >
              {lang === 'english' ? 'Contact' : 'Contacto'}
            </li>
          </Link>
          {/* <li className={styles.dropdown}>
            <span>English</span>
            <img src='/down.svg' alt='' />
          </li> */}
          <li className={styles.drop}>
            <select
              name='lang'
              id='lang'
              onChange={handleDropdown}
              className={lang === 'spanish' && styles.smallSelect}
            >
              <option value='english'>English</option>
              <option value='spanish'>Spanish</option>
            </select>
          </li>
        </ul>
        <div>
          {/* <img className={styles.hamburger} src='/hamburger.svg' alt='' /> */}
          <Hamburger />
          <a
            href='https://sterlinginc.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className={styles.partner}
              src={
                lang === 'english'
                  ? '/nav-sterling.svg'
                  : '/nav-sterling-esp.svg'
              }
              alt=''
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
