import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import './Field.css';

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  rotulo: string;
  erro?: string;
  descricao?: string;
  icone?: ReactNode;
}

export function Campo({
  rotulo,
  erro,
  descricao,
  id,
  icone,
  ...props
}: Readonly<FieldProps>) {
  const gerado = useId();
  const identificador = id ?? gerado;
  const descricaoId =
    erro || descricao ? `${identificador}-descricao` : undefined;
  return (
    <div className="campo">
      <label htmlFor={identificador} className="campo__rotulo">
        {rotulo}
      </label>
      <div className="campo__controle">
        {icone}
        <input
          {...props}
          id={identificador}
          aria-invalid={!!erro}
          aria-describedby={descricaoId}
          className="campo__entrada"
        />
      </div>
      {(erro || descricao) && (
        <span
          id={descricaoId}
          className={`campo__descricao ${erro ? 'campo__descricao--erro' : ''}`}
        >
          {erro || descricao}
        </span>
      )}
    </div>
  );
}
