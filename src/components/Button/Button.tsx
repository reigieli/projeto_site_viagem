import { LoaderCircle } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primario' | 'secundario' | 'contorno' | 'perigo';
  tamanho?: 'pequeno' | 'medio' | 'grande';
  carregando?: boolean;
  iconeEsquerda?: ReactNode;
  iconeDireita?: ReactNode;
  larguraTotal?: boolean;
}
/** Componente reutilizável de apresentação. */
export function Button({
  variante = 'primario',
  tamanho = 'medio',
  carregando = false,
  iconeEsquerda,
  iconeDireita,
  larguraTotal = false,
  children,
  disabled,
  type = 'button',
  className = '',
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled || carregando}
      aria-busy={carregando}
      className={`button button--${variante} button--${tamanho} ${larguraTotal ? 'button--total' : ''} ${className}`}
    >
      {carregando ? (
        <LoaderCircle className="button__giro" size={18} />
      ) : (
        iconeEsquerda
      )}
      {children}
      {iconeDireita}
    </button>
  );
}
