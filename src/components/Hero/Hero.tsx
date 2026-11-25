import type { ReactNode } from 'react';
import './Hero.css';

type HeroProps = {
  tag?: string;
  title: string;
  text?: string;
  /** normalmente a <SearchBar /> */
  children?: ReactNode;
};

/* Faixa verde de destaque (estilos em Hero.css). */
export function Hero({ tag, title, text, children }: HeroProps) {
  return (
    <section className="hero">
      {tag && <span className="hero__tag">{tag}</span>}
      <h2 className="hero__title">{title}</h2>
      {text && <p className="hero__text">{text}</p>}
      {children}
    </section>
  );
}