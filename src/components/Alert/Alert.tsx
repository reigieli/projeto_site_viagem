import type { ReactNode } from 'react';
import './Alert.css';

type AlertProps = {
  variant?: 'error' | 'success';
  children: ReactNode;
};

/* Faixa de feedback (erro da API, "dados salvos com sucesso"...). */
export function Alert({ variant = 'error', children }: AlertProps) {
  return (
    <div className={`alert alert--${variant}`} role={variant === 'error' ? 'alert' : 'status'}>
      {children}
    </div>
  );
}
