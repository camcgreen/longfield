import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Team.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Team = () => {
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
        <title>The Team | Longfield Polymers</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header parentCallback={handleCallback} />
      <main className={styles.team}>
        <div className='wrapper'>
          <h1>{lang === 'english' ? 'Our team' : 'Nuestro equipo'}</h1>
          <p style={{ maxWidth: lang === 'english' ? 700 : 900 }}>
            {lang === 'english'
              ? 'We strive to ensure that all of our team members uphold our core values, putting these at the heart of every decision they make.'
              : 'Nos esforzamos en garantizar que todos los miembros de nuestro equipo defiendan nuestros valores, poniendo éstos en el centro de cada decisión que toman.'}
          </p>
          <p style={{ maxWidth: lang === 'english' ? 700 : 900 }}>
            {lang === 'english'
              ? 'We want everyone at Longfield to feel proud of the work they do, the company they work for and the difference that they make.'
              : 'Queremos que todos los miembros de Longfield se sientan orgullosos del trabajo que realizan, de la empresa para la que trabajan y de la diferencia que marcan.'}
          </p>
          <div className={styles.photos}>
            <div className={styles.row3}>
              <div className={styles.profile}>
                <div className={styles.image}>
                  <img
                    src='/stephen.jpg'
                    alt='Stephen Kilburn - Chief Operating Officer'
                  />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:stephen@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      stephen@longchem.co.uk
                    </a>
                    <a
                      href='https://www.linkedin.com/in/stephen-kilburn-b8647126/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        className={styles.linkedinLogo}
                        src='/random.svg'
                        alt=''
                      />
                    </a>
                    {/* <img
                      className={styles.linkedinLogo}
                      src='/random.svg'
                      alt=''
                    /> */}
                  </div>
                </div>
                <h2>Stephen Kilburn</h2>
                <h2>Chief Operating Officer</h2>
              </div>
              <div className={styles.profile}>
                <div className={styles.image}>
                  <img
                    src='/stuart.jpg'
                    alt='Stuart Forsyth - Chief Executive Officer'
                  />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:stuart@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      stuart@longchem.co.uk
                    </a>
                    <a
                      href='https://www.linkedin.com/in/stuart-forsyth-264b4025/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        className={styles.linkedinLogo}
                        src='/random.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <h2>Stuart Forsyth</h2>
                <h2>Chief Executive Officer</h2>
              </div>
              <div className={styles.profile}>
                <div className={styles.image}>
                  <img
                    src='/louise.jpg'
                    alt='Louise Georgiou - Chief Finance Officer'
                  />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:louise@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      louise@longchem.co.uk
                    </a>
                    <a
                      href='https://www.linkedin.com/in/louise-georgiou-27ba12b2/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        className={styles.linkedinLogo}
                        src='/random.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <h2>Louise Georgiou</h2>
                <h2>Chief Financial Officer</h2>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.profile}>
                <div className={styles.image}>
                  <img src='/mark.jpg' alt='Mark Pepper - Director' />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:mark@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      mark@longchem.co.uk
                    </a>
                    <a
                      href='https://www.linkedin.com/in/mark-pepper-48484145/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        className={styles.linkedinLogo}
                        src='/random.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <h2>Mark Pepper</h2>
                <h2>Chairman</h2>
              </div>
              <div className={styles.profile}>
                <div className={styles.image}>
                  <img src='/shane.jpg' alt='Shane Richardson - Director' />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:shane@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      shane@longchem.co.uk
                    </a>
                    <a
                      href='https://www.linkedin.com/in/shane-richardson-401b71/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        className={styles.linkedinLogo}
                        src='/random.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <h2>Shane Richardson</h2>
                <h2>Director</h2>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.profile}>
                <div className={styles.image}>
                  <img src='/mark.jpg' alt='Neil Croft - Head of Operations' />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:neil@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      neil@longchem.co.uk
                    </a>
                    <a
                      href='https://www.linkedin.com/in/neil-croft-a8474528/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        className={styles.linkedinLogo}
                        src='/random.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <h2>Neil Croft</h2>
                <h2>Head of Operations</h2>
              </div>
              <div className={styles.profile}>
                <div className={styles.image}>
                  <img
                    src='/arthur.jpg'
                    alt='Arthur Grant - Consultant Head of Resources'
                  />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:arthur@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      arthur@longchem.co.uk
                    </a>
                    <a
                      href='https://www.linkedin.com/in/arthur-grant-8a2b9b19/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        className={styles.linkedinLogo}
                        src='/random.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <h2>Arthur Grant</h2>
                <h2>Consultant Head of Resources</h2>
              </div>
            </div>
            <div className={styles.supplementary}>
              <div className={styles.suppProfile}>
                <div className={styles.image}>
                  <img src='/tim.jpg' alt='Tim Hughes - Credit Controller' />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:tim@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ marginBottom: 0 }}
                    >
                      tim@longchem.co.uk
                    </a>
                    {/* <img
                      className={styles.linkedinLogo}
                      src='/random.svg'
                      alt=''
                    /> */}
                  </div>
                </div>
                <h2>Tim Hughes</h2>
                <h2>Credit Controller</h2>
              </div>
              <div className={styles.suppProfile}>
                <div className={styles.image}>
                  <img
                    src='/harry.jpg'
                    alt='Harry Forsyth - Commercial Executive'
                  />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:harry.forsyth@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {'harry.forsyth\n@longchem.co.uk'}
                    </a>
                    <a
                      href='https://www.linkedin.com/in/harry-forsyth-714b03196/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        className={styles.linkedinLogo}
                        src='/random.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <h2>Harry Forsyth</h2>
                <h2>Commercial Executive</h2>
              </div>
              <div className={styles.suppProfile}>
                <div className={styles.image}>
                  <img
                    src='/zoe.jpg'
                    alt='Zoe Gallimore - Accounts Assistant'
                  />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:zoe@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ marginBottom: 0 }}
                    >
                      zoe@longchem.co.uk
                    </a>
                    {/* <img
                      className={styles.linkedinLogo}
                      src='/random.svg'
                      alt=''
                    /> */}
                  </div>
                </div>
                <h2>Zoe Gallimore</h2>
                <h2>Accounts Assistant</h2>
              </div>
              <div className={styles.suppProfile}>
                <div className={styles.image}>
                  <img
                    src='/lovisa.jpg'
                    alt='Lovisa Nygren - Logistics Controller'
                  />
                  <div className={styles.overlay}>
                    <a
                      href='mailto:lovisa@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      lovisa@longchem.co.uk
                    </a>
                    <a
                      href='https://www.linkedin.com/in/lovisa-nygren-683824165/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        className={styles.linkedinLogo}
                        src='/random.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <h2>Lovisa Nygren</h2>
                <h2>Logistics Coordinator</h2>
              </div>
              <div className={styles.suppProfile}>
                <div className={styles.image}>
                  <img
                    src='/polaris.jpg'
                    alt='Polaris Zhang - Representative in China'
                  />
                  {/* <div className={styles.overlay}>
                    <a
                      href='mailto:polaris@longchem.co.uk'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      polaris@longchem.co.uk
                    </a>
                    <img
                      className={styles.linkedinLogo}
                      src='/random.svg'
                      alt=''
                    />
                  </div> */}
                </div>
                <h2>Polaris Zhang</h2>
                <h2>Representative in China</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
      <Menu lang={lang} />
    </>
  );
};

export default Team;
