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
            info="(86) 99924-9627"
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
            href="https://api.whatsapp.com/send?phone=5586999249627&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto!"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5586999249627&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto!"
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
            href="https://api.whatsapp.com/send?phone=5586999249627&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto!"
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
