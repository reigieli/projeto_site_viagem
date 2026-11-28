import type { ReactNode } from 'react';
import './Cartao.css';

export interface CardProps {
  children: ReactNode;
  variante?: 'padrao' | 'elevado' | 'selecionado';
  semEspacamento?: boolean;
  className?: string;
}

export function Card({
  children,
  variante = 'padrao',
  semEspacamento = false,
  className = '',
}: Readonly<CardProps>) {
  const classes = [
    'cartao',
    `cartao--${variante}`,
    semEspacamento && 'cartao--sem-espacamento',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}

export function CardCabecalho({
  children,
}: Readonly<Pick<CardProps, 'children'>>) {
  return <div className="cartao__cabecalho">{children}</div>;
}

export function CardCorpo({ children }: Readonly<Pick<CardProps, 'children'>>) {
  return <div className="cartao__corpo">{children}</div>;
}

export function CardRodape({
  children,
}: Readonly<Pick<CardProps, 'children'>>) {
  return <div className="cartao__rodape">{children}</div>;
}
