import Head from 'next/head';
import styles from '../styles/Team.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Team = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>Longfield Polymers | The Team</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.team}>
        <h1>Our team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
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
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
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
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
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
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
                </div>
              </div>
              <h2>Louise Georgiou</h2>
              <h2>Chief Finance Officer</h2>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.profile}>
              <div className={styles.image}>
                <img src='/mark.jpg' alt='Mark Pepper - Director' />
                <div className={styles.overlay}>
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
                </div>
              </div>
              <h2>Mark Pepper</h2>
              <h2>Director</h2>
            </div>
            <div className={styles.profile}>
              <div className={styles.image}>
                <img src='/shane.jpg' alt='Shane Richardson - Director' />
                <div className={styles.overlay}>
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
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
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
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
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
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
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
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
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
                </div>
              </div>
              <h2>Harry Forsyth</h2>
              <h2>Commercial Executive</h2>
            </div>
            <div className={styles.suppProfile}>
              <div className={styles.image}>
                <img src='/zoe.jpg' alt='Zoe Gallimore - Accounts Assistant' />
                <div className={styles.overlay}>
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
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
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
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
                <div className={styles.overlay}>
                  <img className={styles.linkedin} src='/linkedin.svg' alt='' />
                </div>
              </div>
              <h2>Polaris Zhang</h2>
              <h2>Representative in China</h2>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Menu />
    </div>
  );
};

export default Team;