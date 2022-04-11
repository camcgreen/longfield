import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Header from '../components/header';
import Partnered from '../components/partnered';
import Footer from '../components/footer';
import Button from '../components/button';

const Contact = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>Longfield Polymers | Contact</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.contact}>
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
          <Button text='SEND MESSAGE' />
        </form>
      </main>
      <Partnered />
      <Footer />
    </div>
  );
};

export default Contact;
