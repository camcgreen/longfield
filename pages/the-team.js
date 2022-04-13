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
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
            <div className={styles.profile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
            <div className={styles.profile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.profile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
            <div className={styles.profile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.profile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
            <div className={styles.profile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
          </div>
          <div className={styles.supplementary}>
            <div className={styles.suppProfile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
            <div className={styles.suppProfile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
            <div className={styles.suppProfile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
            <div className={styles.suppProfile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
            </div>
            <div className={styles.suppProfile}>
              <img
                src='/mark.jpg'
                alt='Stephen Kilburn - Chief Operating Officer'
              />
              <h2>Stephen Kilburn</h2>
              <h2>Chief Operating Officer</h2>
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
