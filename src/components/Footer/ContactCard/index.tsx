import styles from './styles.module.scss';

interface Props {
  title: string;
  info: string;
  icon?: any;
}

export function ContactCard({ title, info, icon }: Props) {
  const Icon = icon;
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        {Icon && <Icon />}
        <p>{title}</p>
      </div>
      <p>{info}</p>
    </section>
  );
}
