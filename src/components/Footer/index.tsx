import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { FiPhoneCall, FiMail, FiMap } from 'react-icons/fi';
import { RiCopyrightFill } from 'react-icons/ri';

import { ContactCard } from './ContactCard';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        <div className={styles.contactUs}>
          <ContactCard
            icon={FiPhoneCall}
            title="Telefone"
            info="(86) 99924-9627 - (98) 98600-4240"
          />
          <ContactCard
            icon={FiMail}
            title="E-mail"
            info="vercoza.engenharia@gmail.com "
          />
          <ContactCard
            icon={FiMap}
            title="Endereço"
            info="Teresina e São Luís"
          />
        </div>
        <div className={styles.socialMedias}>
          <a
            href="https://api.whatsapp.com/message/JHSRWTHZE3C6E1"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://api.whatsapp.com/message/JHSRWTHZE3C6E1"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/vercozaengenharia/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://api.whatsapp.com/message/JHSRWTHZE3C6E1"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <section className={styles.copyright}>
        <p>
          <RiCopyrightFill />
          Verçoza Engenharia - Todos os direitos reservados
        </p>
        <a
          href="https://www.instagram.com/matheuseufrasio/"
          target="_blank"
          rel="noreferrer"
        >
          Website by Matheus Eufrásio
        </a>
      </section>
    </footer>
  );
}
