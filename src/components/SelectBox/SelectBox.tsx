import './SelectBox.css';
import type { InputHTMLAttributes } from 'react';

export interface SelectBoxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  rotulo: string;
  descricao?: string;
}

/** Componente reutilizável de apresentação. */
export function CaixaSelecao({
  rotulo,
  descricao,
  ...props
}: Readonly<SelectBoxProps>) {
  return (
    <label className="select-box">
      <input {...props} type="checkbox" className="select-box__entrada" />
      <span>
        {rotulo}
        {descricao && (
          <small className="select-box__descricao">{descricao}</small>
        )}
      </span>
    </label>
  );
}
