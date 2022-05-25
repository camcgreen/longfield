import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/About.module.css';
import Header from '../components/header';
import Partnered from '../components/partnered';
import Footer from '../components/footer';
import Menu from '../components/menu';

const About = () => {
  const [lang, setLang] = useState('english');
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    lang && setLang(lang);
  }, []);
  const handleCallback = (childData) => {
    setLang(childData);
  };
  return (
    <>
      <Head>
        <title>About | Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header parentCallback={handleCallback} />
      <main className={styles.about}>
        <div className='wrapper'>
          <h1>{lang === 'english' ? 'About' : 'Acerca de Nosotros'}</h1>
          <div className={styles.grid}>
            <h1 className={styles.heroText}>
              {lang === 'english'
                ? 'We are the UK’s longest established independent distributor of low cost, high quality polymers.'
                : 'Somos el distribuidor independiente mas consolidado de polímeros de alta calidad y bajo coste de Reino Unido'}
            </h1>
            <img className={styles.heroImage} src='/dock.svg' alt='' />
            <div className={styles.fullWidth}>
              <p>
                {lang === 'english'
                  ? 'Trusted by the world’s leading polymer producers since 1968, we are focused and committed to each individual customer and supplier. Our combined know-how and continual improvement has not only earned us multiple accreditations, but ensures that we supply world class polymers at low prices globally.'
                  : 'Con la confianza de los principales productores de polímeros del mundo desde 1968, estamos centrados y comprometidos con cada cliente y proveedor. Nuestra amplia experiencia, conocimientos técnicos y mejora continua garantizan el suministro de polímeros a nivel mundial a precios competitivos todos los días en todo el mundo.'}
              </p>
            </div>
            <div>
              <h1>
                {lang === 'english' ? 'Our Approach' : 'Nuestra Estrategia'}
              </h1>
              <p>
                {lang === 'english'
                  ? 'We focus on each supplier and customer individually and are committed to doing what is right for them to the highest standard and in addition, we are committed to an effective and responsibly managed supply chain, which is essential to the future success of all our partners.'
                  : 'Nos centramos en cada proveedor y cliente de forma individual para entregar su producto a través de una cadena de suministro eficaz y responsable, que es esencial para el éxito futuro de todos nuestros socios.'}
              </p>
            </div>
            <h1 className={styles.highlight}>
              {lang === 'english'
                ? '“Our focus is on doing the basics brilliantly for you.”'
                : '"Nos centramos en hacer lo lo básico de forma brillante para usted."'}
            </h1>
            <img src='/monitor.svg' alt='' />
            <div>
              <h1>
                {lang === 'english'
                  ? 'Market Knowledge'
                  : 'Conocimiento del Mercado'}
              </h1>
              <p>
                {lang === 'english'
                  ? 'Established in 1968, we ensure that our worldwide network of suppliers benefit from our combined 50 years of experience and market knowledge. We work closely with a trusted network of logistics companies to ensure that products are delivered at the best price within a set timeframe.'
                  : 'Fundada en 1968, nos aseguramos de que nuestra red mundial de proveedores se beneficie de la experiencia combinada de nuestros directores desde hace casi 100 años. Trabajamos en estrecha colaboración con una red de empresas de logística de confianza para garantizar que nuestros productos se entreguen al mejor precio dentro del plazo establecido.'}
              </p>
            </div>
            <div>
              <h1>
                {lang === 'english' ? 'Sustainability' : 'Sostenibilidad'}
              </h1>
              <p>
                {lang === 'english'
                  ? 'Our integral sustainability management allows us to continue our work while minimising our environmental impact. We will achieve this by ensuring the improvement of our environmental performance, setting and monitoring sustainability targets, and communicating with our partners to confirm that our sustainability goals are met and upheld both within and outside of our industry.'
                  : 'Como socio empresarial, empleador y miembro de la comunidad, nuestra gestión de la sostenibilidad nos permite seguir entregando a tiempo productos de bajo precio minimizando nuestro impacto medioambiental.'}
              </p>
            </div>
            <img src='/clean-sweep.jpg' alt='' />
            <h1 className={styles.highlight}>
              {lang === 'english'
                ? '“Our culture is what differs Longfield. Our added value.”'
                : '"Nuestra cultura es lo que distingue a Longfield. Nuestro valor añadido."'}
            </h1>
            <div>
              <h1>{lang === 'english' ? 'Our Values' : 'Nuestros Valores'}</h1>
              <p>
                {lang === 'english'
                  ? 'At Longfield, we ensure that we put our heart into every decision we make. We focus on each individual customer and are committed to doing what is right for them, in every action demonstrating our integrity while remaining open and honest about what we do and how we do it. These core values also help us to support and inspire our colleagues, encouraging them to be the best they can be and achieve great things.'
                  : 'Nuestros valores fundamentales son la diligencia, la integridad, la orientación hacia resultados y la transparencia. Esperamos que nuestro equipo actúe con transparencia e integridad, haciendo gala de nuestros valores en todo momento.'}
              </p>
            </div>
            <div>
              <h1>
                {lang === 'english'
                  ? 'Our Accreditations'
                  : 'Nuestras Acreditaciones'}
              </h1>
              <p>
                {lang === 'english'
                  ? 'We are proud to be accredited with ISO 9001, ISO 14001 and ICO certifications. These acknowledgements not only serve as proof of our high quality services and help to inspire trust in our global network of suppliers, but encourage us to upkeep our excellent standards of practice.'
                  : 'Estar acreditados con las certificaciones ISO 9001, ISO 14001 e ICO evidencian nuestra alta calidad creando confianza con nuestra red global de proveedores y clientes.'}
              </p>
            </div>
            <img src='/accreditations.png' alt='' />
          </div>
        </div>
      </main>
      <Partnered lang={lang} />
      <Footer lang={lang} />
      <Menu lang={lang} />
    </>
  );
};

export default About;
