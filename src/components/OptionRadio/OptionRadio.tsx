import './OptionRadio.css';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface OptionRadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'name' | 'value'
> {
  nome: string;
  valor: string;
  rotulo: string;
  descricao?: string;
  variante?: 'padrao' | 'cartao';
}

export interface GrupoRadioProps {
  titulo: string;
  children: ReactNode;
}

export function OpcaoRadio({
  nome,
  valor,
  rotulo,
  descricao,
  variante = 'padrao',
  ...props
}: Readonly<OptionRadioProps>) {
  return (
    <label className={`opcao-radio opcao-radio--${variante}`}>
      <input
        {...props}
        type="radio"
        name={nome}
        value={valor}
        className="opcao-radio__entrada"
      />
      <span>
        {rotulo}
        {descricao && (
          <small className="opcao-radio__descricao">{descricao}</small>
        )}
      </span>
    </label>
  );
}

export function GrupoRadio({ titulo, children }: Readonly<GrupoRadioProps>) {
  return (
    <fieldset className="grupo-radio">
      <legend>{titulo}</legend>
      {children}
    </fieldset>
  );
}
