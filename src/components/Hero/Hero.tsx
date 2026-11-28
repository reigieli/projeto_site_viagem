import type { ReactNode } from 'react';
import './Hero.css';
export interface HeroProps {
  titulo: string;
  descricao?: string;
  etiqueta?: string;
  children?: ReactNode;
}
/** Faixa de destaque para títulos, descrição e ações de uma página. */
export function Hero({
  titulo,
  descricao,
  etiqueta,
  children,
}: Readonly<HeroProps>) {
  return (
    <section className="hero">
      {etiqueta && <span className="hero__tag">{etiqueta}</span>}
      <h2 className="hero__title">{titulo}</h2>
      {descricao && <p className="hero__text">{descricao}</p>}
      {children && <div className="hero__content">{children}</div>}
    </section>
  );
}
