import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Input } from '../InputBudget';
import styles from './styles.module.scss';

interface FormProps {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório.'),
  email: Yup.string()
    .required('E-mail é obrigatório.')
    .email('Digite um email válido'),
  phone: Yup.string().required('Telefone é obrigatório.'),
  budget: Yup.string().required('Gasto é obrigatório.'),
});

export function BudgetSection() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSubmitContactForm(formData: FormProps) {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.status === 200) {
        console.log('Response succeeded!');
        setHasSubmitted(true);
        alert('E-mail Enviado!');
      }
    });
  }

  return (
    <div className={styles.container}>
      <h1>Quer economizar de verdade?</h1>
      <p>
        Preencha o formulário abaixo que entraremos em contato em até 24 horas
        para fazermos uma simulação e esclarescer todas as suas dúvidas.
      </p>
      <form onSubmit={handleSubmit(handleSubmitContactForm)}>
        <div className={styles.basicData}>
          <Input
            error={errors.name && errors.name.message}
            {...register('name')}
            title="Nome e Sobrenome"
            type="text"
          />
          <Input
            error={errors.email && errors.email.message}
            {...register('email')}
            title="E-mail"
            type="email"
          />
          <Input
            error={errors.phone && errors.phone.message}
            {...register('phone')}
            title="Telefone"
            type="text"
          />
          <Input
            error={errors.budget && errors.budget.message}
            {...register('budget')}
            title="Qual o seu gasto médio de energia?"
            type="text"
          />
        </div>
        <textarea
          {...register('message')}
          placeholder="Digite aqui sua mensagem pra nós"
          className={styles.message}
          name="message"
          id="message"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
