// import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import Hamburger from './svg/hamburger';

const Header = ({ parentCallback }) => {
  const router = useRouter();
  // const [lang, setLang] = useState('english');
  const handleDropdown = (e) => {
    e.preventDefault();
    // setLang(e.target.value);
    parentCallback(e.target.value);
    // console.log(e.target.value);
    // console.log(lang);
  };
  // useEffect(() => {
  //   console.log(lang);
  // }, [lang]);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/'>
          <img className={styles.logo} src='/logo.png' alt='' />
        </Link>
        <ul className={styles.links}>
          <Link href='/about'>
            <li
              style={{
                color: router.pathname === '/about' ? '#FFA100' : '#1A2B3B',
              }}
            >
              About
            </li>
          </Link>
          <Link href='/suppliers'>
            <li
              style={{
                color: router.pathname === '/suppliers' ? '#FFA100' : '#1A2B3B',
              }}
            >
              Suppliers
            </li>
          </Link>
          <Link href='/products'>
            <li
              style={{
                color: router.pathname === '/products' ? '#FFA100' : '#1A2B3B',
              }}
            >
              Products
            </li>
          </Link>
          <Link href='/the-team'>
            <li
              style={{
                color: router.pathname === '/the-team' ? '#FFA100' : '#1A2B3B',
              }}
            >
              The Team
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
              Polymer Distribution
            </li>
          </Link>
          <Link href='/contact'>
            <li
              style={{
                color: router.pathname === '/contact' ? '#FFA100' : '#1A2B3B',
              }}
            >
              Contact
            </li>
          </Link>
          <li className={styles.dropdown}>
            <span>English</span>
            <img src='/down.svg' alt='' />
          </li>
          {/* <li className={styles.drop}>
            <select name='lang' id='lang' onChange={handleDropdown}>
              <option value='english'>English</option>
              <option value='spanish'>Spanish</option>
            </select>
          </li> */}
        </ul>
        <div>
          {/* <img className={styles.hamburger} src='/hamburger.svg' alt='' /> */}
          <Hamburger />
          <a
            href='https://sterlinginc.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className={styles.partner} src='/nav-sterling.svg' alt='' />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
