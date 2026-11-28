import { forwardRef } from 'react';
import type {
  FormHTMLAttributes,
  HTMLAttributes,
  FieldsetHTMLAttributes,
} from 'react';
import './Formulario.css';

export interface FormularioProps extends FormHTMLAttributes<HTMLFormElement> {
  espacamento?: 'pequeno' | 'medio' | 'grande';
}
export interface FormularioGrupoProps extends HTMLAttributes<HTMLDivElement> {
  colunas?: 1 | 2 | 3 | 4;
}
export interface FormularioSecaoProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  titulo?: string;
  descricao?: string;
}
export interface FormularioAcoesProps extends HTMLAttributes<HTMLDivElement> {
  alinhamento?: 'inicio' | 'centro' | 'fim' | 'entre';
}

/** Container semântico: estado, validação e submissão pertencem à página. */
export const Formulario = forwardRef<HTMLFormElement, FormularioProps>(
  function Formulario(
    { children, espacamento = 'medio', className = '', ...props },
    ref
  ) {
    return (
      <form
        {...props}
        ref={ref}
        className={`formulario formulario--${espacamento} ${className}`}
      >
        {children}
      </form>
    );
  }
);

export function FormularioGrupo({
  children,
  colunas = 1,
  className = '',
  ...props
}: FormularioGrupoProps) {
  return (
    <div
      {...props}
      className={`formulario__grupo formulario__grupo--${colunas}-colunas ${className}`}
    >
      {children}
    </div>
  );
}

export function FormularioSecao({
  titulo,
  descricao,
  children,
  className = '',
  ...props
}: FormularioSecaoProps) {
  return (
    <fieldset {...props} className={`formulario__secao ${className}`}>
      {titulo && <legend className="formulario__titulo">{titulo}</legend>}
      {descricao && <p className="formulario__descricao">{descricao}</p>}
      {children}
    </fieldset>
  );
}

export function FormularioAcoes({
  children,
  alinhamento = 'fim',
  className = '',
  ...props
}: FormularioAcoesProps) {
  return (
    <div
      {...props}
      className={`formulario__acoes formulario__acoes--${alinhamento} ${className}`}
    >
      {children}
    </div>
  );
}
