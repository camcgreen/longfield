import Head from 'next/head';
import styles from '../styles/About.module.css';
import Header from '../components/header';
import Partnered from '../components/partnered';
import Footer from '../components/footer';
import Menu from '../components/menu';

const About = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>Longfield Polymers | About</title>
        <meta name='description' content='Longfield Polymers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.about}>
        <h1>About</h1>
        <div className={styles.grid}>
          <h1 className={styles.heroText}>
            We are the UK’s longest established independent distributor of low
            cost, high quality polymers.
          </h1>
          <img className={styles.heroImage} src='/dock.svg' alt='' />
          <div className={styles.fullWidth}>
            <p>
              Founded in 1968, Longfield remains the UK’s leading independent
              polymer distributor. Our partnerships with some of the World’s
              leading producers of polymer, allied to our low cost base business
              model, enable us to supply the UK with world class polymers at low
              prices. Typically we distribute around 25k tonnes of polymers per
              month. High class polymers at the worlds most competitive prices
            </p>
          </div>
          <div>
            <h1>Our Approach</h1>
            <p>
              We focus on each supplier and customer individually and are
              committed to doing what is right for them to the highest standard
              and in addition, we are committed to an effective and responsibly
              managed supply chain, which is essential to the future success of
              all our partners.
            </p>
          </div>
          <h1 className={styles.highlight}>
            “Our focus is on doing the basics brilliantly for you”.
          </h1>
          <img src='/monitor.svg' alt='' />
          <div>
            <h1>Market Knowledge</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt Established 1968 combined knowledge
              of 50 years Network of worldwide suppliers Knowledge of
              outsourcing logistics, prices,timely, contacts What, when, who
            </p>
          </div>
          <div>
            <h1>Sustainability</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut. Clean Sweep. ISO
              14001
            </p>
          </div>
          <img src='/clean-sweep.jpg' alt='' />
          <h1 className={styles.highlight}>
            “Our culture is what differs Longfield. Our added value”
          </h1>
          <div>
            <h1>Our Values</h1>
            <p>
              Our core values are diligent focus, integrity, trust, being
              results driven and organisational transparency. We expect our team
              to act transparently and with integrity, evidencing our values at
              all times.
            </p>
          </div>
          <div>
            <h1>Our Accreditations</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut. Link. ISO 9001, ISO
              14001, ICO
            </p>
          </div>
          <img src='/accreditations.png' alt='' />
        </div>
      </main>
      <Partnered />
      <Footer />
      <Menu />
    </div>
  );
};

export default About;
