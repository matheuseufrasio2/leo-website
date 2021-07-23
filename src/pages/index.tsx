import { FaWhatsapp } from 'react-icons/fa';

import Image from 'next/image';

import { BudgetSection } from '../components/BudgetSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import SEO from '../components/SEO';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=5586999249627&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto!"
        className={styles.float}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
      <SEO title="Início" description="Página inicial" />
      <div className={styles.firstSection}>
        <Image
          className={styles.imageBackground}
          alt="Placas solares"
          src="/images/solar.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority={true}
        />
        <Header />
        <section className={styles.welcomeWords}>
          <h1>DEMOCRATIZANDO O ACESSO À ENERGIA SOLAR.</h1>
          <p>
            Ajudamos a disseminar essa tecnologia, colaboramos para que você
            possa gerar sua própria energia por meio de uma fonte sustentável,
            inesgotável e renovável, o Sol.
          </p>
        </section>
      </div>
      <BudgetSection />
      <Footer />
    </>
  );
}
