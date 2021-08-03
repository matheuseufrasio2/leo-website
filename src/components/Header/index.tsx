import { FiMenu } from 'react-icons/fi';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <img src="/images/blue_logo.png" alt="Logo Verçosa Engenharia" />
        <button>
          <FiMenu />
        </button>
        <nav className={styles.menu}>
          <a href="#">Início</a>
          <a href="#">Serviços</a>
          <a href="#">Benefícios</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
}
