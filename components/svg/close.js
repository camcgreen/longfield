import { useEffect } from 'react';
import styles from '../../styles/Close.module.css';

const Close = () => {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');
    const menu = document.getElementById('menu');
    close.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
  return (
    <svg
      className={styles.close}
      id='close'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={styles.path}
        d='M36.5155 13.492C35.7097 12.6862 34.4012 12.6862 33.5954 13.492L25.0003 22.0871L16.4053 13.492C15.5995 12.6862 14.291 12.6862 13.4852 13.492C12.6794 14.2978 12.6794 15.6064 13.4852 16.4121L22.0802 25.0072L13.5059 33.5816C12.7001 34.3873 12.7001 35.6959 13.5059 36.5017C13.9122 36.908 14.4356 37.1077 14.9659 37.1077C15.4962 37.1077 16.0265 36.908 16.426 36.5017L25.0003 27.9342L33.5747 36.5086C33.9811 36.9149 34.5045 37.1146 35.0348 37.1146C35.5651 37.1146 36.0954 36.9149 36.4948 36.5086C37.3006 35.7028 37.3006 34.3942 36.4948 33.5885L27.9205 25.0072L36.5155 16.4121C37.3213 15.6064 37.3213 14.2978 36.5155 13.492V13.492Z'
        // fill='black'
      />
      <path
        className={styles.path}
        d='M48.0372 15.2686C46.7769 12.2934 44.9725 9.62121 42.6791 7.32094C40.3857 5.02755 37.7135 3.22314 34.7314 1.96281C31.646 0.661157 28.3747 0 25 0C21.6253 0 18.354 0.661157 15.2686 1.96281C12.2934 3.22314 9.62121 5.02755 7.32094 7.32094C5.02755 9.61433 3.22314 12.2865 1.96281 15.2686C0.661157 18.354 0 21.6253 0 25C0 28.3747 0.661157 31.646 1.96281 34.7314C3.22314 37.7066 5.02755 40.3788 7.32094 42.6791C9.61433 44.9725 12.2865 46.7769 15.2686 48.0372C18.354 49.3388 21.6253 50 25 50C28.3747 50 31.646 49.3388 34.7314 48.0372C37.7066 46.7769 40.3788 44.9725 42.6791 42.6791C44.9725 40.3857 46.7769 37.7135 48.0372 34.7314C49.3388 31.646 50 28.3747 50 25C50 21.6253 49.3388 18.354 48.0372 15.2686ZM25 45.8678C13.4917 45.8678 4.13223 36.5083 4.13223 25C4.13223 13.4917 13.4917 4.13223 25 4.13223C36.5083 4.13223 45.8678 13.4917 45.8678 25C45.8678 36.5083 36.5083 45.8678 25 45.8678Z'
        // fill='black'
      />
    </svg>
  );
};

export default Close;