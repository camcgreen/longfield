import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from '../styles/Endorsements.module.css';

const Endorsements = ({ lang }) => {
  // const [carousel] = useEmblaCarousel({ loop: true });
  const [carousel, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  return (
    <section className={styles.endorsements}>
      <div className='wrapper'>
        <div className={styles.carousel} ref={carousel}>
          <div className={styles.carouselContainer}>
            <div className={styles.carouselSlide}>
              <div className={styles.carouselFlex}>
                <a
                  href='https://epsan.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-epsan.png' alt='Epsan' />
                </a>
                <a
                  href='https://www.fpcusa.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-formosa-plastics.png' alt='Formosa Plastics' />
                </a>
                <a
                  href='https://www.fpcusa.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-formosa-corp.png' alt='Formosa Plastics Corp' />
                </a>
                <a
                  href='https://www.ineos-styrolution.com/index.html'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-ineos.jpg' alt='Ineos Styrolution' />
                </a>
              </div>
            </div>
            <div className={styles.carouselSlide}>
              <div className={styles.carouselFlex}>
                <a
                  href='https://inno-comp.hu/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='/c-inno.png'
                    className={styles.inno}
                    alt='Inno-Comp'
                  />
                </a>
                <a
                  href='https://www.kkpc.com/eng/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-kumho.svg' alt='Kumho Petrochemical' />
                </a>
                <a
                  href='https://www.lgchem.com/main/index'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-lg.svg' alt='LG Chem' />
                </a>
                <img src='/c-locapol.svg' alt='Locapol' />
              </div>
            </div>
            <div className={styles.carouselSlide}>
              <div className={styles.carouselFlex}>
                <img
                  src='/c-long.png'
                  className={styles.long}
                  alt='Long Da Masterbatch'
                />
                <a
                  href='https://www.lottechem.com/en/index.do'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-lotte.png' alt='Lotte Chemical' />
                </a>
                <a
                  href='https://www.hip-petrohemija.com/home.8.html'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-petrohemija.jpeg' alt='Petrohemija' />
                </a>
                <a
                  href='https://www.petkim.com.tr/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-petkim.svg' alt='Petkim' />
                </a>
              </div>
            </div>
            <div className={styles.carouselSlide}>
              <div className={styles.carouselFlex}>
                <a
                  href='https://www.sibur.ru/en/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-sibur.svg' alt='Sibur' />
                </a>
                <a
                  href='https://www.sidpec.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-sidpec.png' alt='Sidpec' />
                </a>
                <a
                  href='https://www.orlenunipetrol.cz/en/Pages/default.aspx'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/c-unipetrol.png' alt='Unipetrol' />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.grid}>
          <img src='/c-epsan.png' alt='Epsan' />
          <img
            src='/c-formosa-plastics.png'
            alt='Formosa Plastics'
          />
          <img src='/c-formosa-corp.png' alt='Formosa Plastics Corp' />
          <img src='/c-ineos.jpg' alt='Ineos Styrolution' />
          <img src='/c-inno.png' className={styles.inno} alt='Inno-Comp' />
          <img src='/c-kumho.svg' alt='Kumho Petrochemical' />
          <img src='/c-lg.svg' alt='LG Chem' />
          <img
            src='/c-long.png'
            className={styles.long}
            alt='Long Da Masterbatch'
          />
          <img src='/c-lotte.png' alt='Lotte Chemical' />
          <img src='/c-petrohemija.jpeg' alt='Petrohemija' />
          <img src='/c-petkim.svg' alt='Petkim' />
          <img src='/c-sibur.svg' alt='Sibur' />
          <img src='/c-sidpec.png' alt='Sidpec' />
          <img src='/c-unipetrol.png' alt='Unipetrol' />
        </div> */}
        <h1>
          {lang === 'english'
            ? 'These leading polymer producers choose Longfield'
            : 'Empresas lideres en polímeros que escogen Longfield'}
        </h1>
      </div>
    </section>
  );
};

export default Endorsements;
