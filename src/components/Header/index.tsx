import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div>
        <p>logo</p>
        <nav>
          <a href="#">Home</a>
          <a href="#">Interview</a>
          <a href="#">Languages</a>
          <a href="#">Data Structure</a>
          <a href="#">Algorithm</a>
        </nav>
      </div>
    </header>
  );
}
