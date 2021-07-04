import Head from 'next/head';
import Image from 'next/image';

import { Header } from '../components/Header';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Verçoza Engenharia</title>
      </Head>
      <div className={styles.firstSection}>
        <Image
          className={styles.imageBackground}
          alt="Placas solares"
          src="/images/background-01.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        <Header />
        <p className={styles.teste}>Maeu oppkj</p>
      </div>
    </>
  );
}
