import styles from './styles.module.scss';

interface Props {
  title: string;
}

export function InputBudget({ title }: Props) {
  return <input className={styles.container} placeholder={title} type="text" />;
}
