import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Button from '../components/button';
import Menu from '../components/menu';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <main className={styles.contact}>
        {/* <div className='wrapper'> */}
        <h1>Get in touch</h1>
        <p>
          Don’t hesitate to ask us something. Email us directly at{' '}
          <a
            href='mailto: info@longchem.co.uk'
            target='_blank'
            rel='noopener noreferrer'
          >
            info@longchem.co.uk
          </a>
          .{' '}
        </p>
        <p>
          We are always open to answering questions and forming new
          partnerships.{' '}
        </p>
        <form action='' className={styles.form}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='Your name' />
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' placeholder='Your email' />
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            id='phone'
            name='phone'
            placeholder='Your phone number'
          />
          <label htmlFor='message'>Message</label>
          <input
            className={styles.message}
            type='text'
            id='message'
            name='message'
            placeholder='Your message'
          />
          <Button text='SEND MESSAGE' small={true} />
        </form>
        {/* </div> */}
      </main>
      <Footer />
      <Menu />
    </>
  );
};

export default Contact;
