import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error: string;
}

const InputBudget: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { title, error, ...rest },
  ref
) => {
  return (
    <div className={styles.container}>
      <input ref={ref} placeholder={title} {...rest} />
      {error && <span>{error}</span>}
    </div>
  );
};

export const Input = forwardRef(InputBudget);
