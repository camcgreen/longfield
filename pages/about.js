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
              Trusted by the world’s leading polymer producers since 1968, our
              focus and commitment to each individual customer and supplier,
              along with our combined 50 years of knowledge and continual and
              effective improvement of environmental performance has not only
              earned us multiple accreditations, but ensure that we continue to
              supply world class polymers at low prices globally while upkeeping
              our core values of integrity, focus and trust.
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
              Established in 1968, we ensure that our worldwide network of
              suppliers benefit from our combined 50 years of experience and
              market knowledge. We work closely with a trusted network of
              logistics companies to ensure that products are delivered at the
              best price within a set timeframe.
            </p>
          </div>
          <div>
            <h1>Sustainability</h1>
            <p>
              Our integral sustainability management allows us to continue our
              work while minimising our environmental impact. We will achieve
              this by ensuring the improvement of our environmental performance,
              setting and monitoring sustainability targets, and communicating
              with our partners to confirm that our sustainability goals are met
              and upheld both within and outside of our industry.
            </p>
          </div>
          <img src='/clean-sweep.jpg' alt='' />
          <h1 className={styles.highlight}>
            “Our culture is what differs Longfield. Our added value”
          </h1>
          <div>
            <h1>Our Values</h1>
            <p>
              At Longfield, we ensure that we put our heart into every decision
              we make. We focus on each individual customer and are committed to
              doing what is right for them, in every action demonstrating our
              integrity while remaining open and honest about what we do and how
              we do it. These core values also help us to support and inspire
              our colleagues, encouraging them to be the best they can be and
              achieve great things.
            </p>
          </div>
          <div>
            <h1>Our Accreditations</h1>
            <p>
              We are proud to be accredited with ISO 9001, ISO 14001 and ICO
              certifications. These acknowledgements not only serve as proof of
              our high quality services and help to inspire trust in our global
              network of suppliers, but encourage us to upkeep our excellent
              standards of practice.
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
