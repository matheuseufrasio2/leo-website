import { InputBudget } from '../InputBudget';
import styles from './styles.module.scss';

export function BudgetSection() {
  return (
    <div className={styles.container}>
      <h1>Quer economizar de verdade?</h1>
      <p>
        Preencha o formulário abaixo que entraremos em contato em até 24 horas
        para fazermos uma simulação e esclarescer todas as suas dúvidas.
      </p>
      <form>
        <div className={styles.basicData}>
          <InputBudget title="Nome e Sobrenome" />
          <InputBudget title="E-mail" />
          <InputBudget title="Telefone" />
          <InputBudget title="Qual o seu gasto médio de energia?" />
        </div>
        <textarea
          placeholder="Digite aqui sua mensagem pra nós"
          className={styles.message}
          name="message"
          id="message"
        />
      </form>
    </div>
  );
}
