import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Button from '../components/button';
import Menu from '../components/menu';

const Contact = () => {
  const [lang, setLang] = useState('english');
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    lang && setLang(lang);
  }, []);
  const handleCallback = (childData) => {
    setLang(childData);
  };
  const handleOnSubmit = async (e) => {
    // e.preventDefault();
    // let formData = {};
    // Array.from(e.currentTarget.elements).forEach((field) => {
    //   if (!field.name) return;
    //   formData[field.name] = field.value;
    // });
    // fetch('/api/mail', {
    //   method: 'post',
    //   body: JSON.stringify(formData),
    // });
    // alert('thank you!');
  };
  return (
    <>
      <Head>
        <title>Contact | Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header parentCallback={handleCallback} />
      {/* <Header /> */}
      <main className={styles.contact}>
        {/* <div className='wrapper'> */}
        <h1>{lang === 'english' ? 'Get in touch' : 'Contacta con nosotros'}</h1>
        <p>
          {lang === 'english'
            ? 'Don’t hesitate to ask us something. Email us directly at'
            : 'No dudes en preguntarnos. Envianos un email a'}{' '}
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
          {lang === 'english'
            ? 'We are always available to respond to enquires and are keen to build new customer and supplier relationships.'
            : 'Estamos siempre disponibles para resolver dudas y crear nuevas relaciones con clientes o proveedores.'}{' '}
        </p>
        <form
          // action='https://formsubmit.co/c.c.green@outlook.com'
          // action='https://formsubmit.co/2733827370778e0a461d763724570bae'
          action='https://formsubmit.co/info@longchem.co.uk'
          method='POST'
          className={styles.form}
          onSubmit={handleOnSubmit}
        >
          <label htmlFor='name'>{lang === 'english' ? 'Name' : 'Nombre'}</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder={lang === 'english' ? 'Your name' : 'Su nombre'}
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder={lang === 'english' ? 'Your email' : 'Email'}
            required
          />
          <label htmlFor='phone'>
            {lang === 'english' ? 'Phone' : 'Teléfono'}
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            placeholder={
              lang === 'english' ? 'Your phone number' : 'Numero de teléfono'
            }
            required
          />
          <label htmlFor='message'>
            {lang === 'english' ? 'Your message' : 'Mensaje'}
          </label>
          <input
            className={styles.message}
            type='text'
            id='message'
            name='message'
            placeholder={
              lang === 'english' ? 'Type message' : 'Escriba su mensaje'
            }
            required
          />
          <Button
            text={lang === 'english' ? 'SEND MESSAGE' : 'ENVIAR MENSAJE'}
            small={true}
          />
        </form>
        {/* </div> */}
      </main>
      <Footer lang={lang} />
      <Menu lang={lang} />
    </>
  );
};

export default Contact;
