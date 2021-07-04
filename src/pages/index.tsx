import Image from 'next/image';

import { Header } from '../components/Header';
import SEO from '../components/SEO';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
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
          <h1>DEMOCRATIZANDO O ACESSO à ENERGIA SOLAR.</h1>
          <p>
            Ajudamos a disseminar essa tecnologia, colaboramos para que você
            possa gerar sua própria energia por meio de uma fonte sustentável,
            inesgotável e renovável, o Sol.
          </p>
        </section>
      </div>
    </>
  );
}
