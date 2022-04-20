import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Menu.module.css';
import Close from './svg/close';

const Menu = ({ active = false }) => {
  const router = useRouter();
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
      </ul>
      <Close />
    </div>
  );
};

export default Menu;
