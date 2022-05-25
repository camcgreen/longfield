import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from './header';
import styles from '../styles/Menu.module.css';
import Close from './svg/close';

const Menu = ({ active = false, lang }) => {
  // const [lang, setLang] = useState('english');
  // useEffect(() => {
  //   const lang = localStorage.getItem('lang');
  //   lang && setLang(lang);
  // }, []);
  // const handleCallback = (childData) => {
  //   setLang(childData);
  // };
  const router = useRouter();
  return (
    <>
      {/* <Header parentCallback={handleCallback} style={{ opacity: '0' }} /> */}
      <div
        // className={active ? `${styles.menu} ${styles.active}` : `${styles.menu}`}
        className={styles.menu}
        id='menu'
      >
        <ul className={styles.links}>
          <li>
            <a
              href='https://sterlinginc.net/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/nav-sterling.svg' alt='' />
            </a>
          </li>
          <Link href='/about'>
            <li
              style={{
                color: router.pathname === '/about' ? '#FFA100' : '#1A2B3B',
              }}
            >
              {lang === 'english' ? 'About' : 'Sobre Nosotros'}
            </li>
          </Link>
          <Link href='/suppliers'>
            <li
              style={{
                color: router.pathname === '/suppliers' ? '#FFA100' : '#1A2B3B',
              }}
            >
              {lang === 'english' ? 'Suppliers' : 'Proveedores'}
            </li>
          </Link>
          <Link href='/products'>
            <li
              style={{
                color: router.pathname === '/products' ? '#FFA100' : '#1A2B3B',
              }}
            >
              {lang === 'english' ? 'Products' : 'Productos'}
            </li>
          </Link>
          <Link href='/the-team'>
            <li
              style={{
                color: router.pathname === '/the-team' ? '#FFA100' : '#1A2B3B',
              }}
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
            >
              {lang === 'english' ? 'Contact' : 'Contacto'}
            </li>
          </Link>
        </ul>
        <Close />
      </div>
    </>
  );
};

export default Menu;
