import type { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  titulo?: string;
  descricao?: string;
  interactive?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Card({ titulo, descricao, interactive = false, className, children }: CardProps) {
  const classes = ['card', interactive && 'card-interactive', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {titulo && <h3>{titulo}</h3>}
      {descricao && <p>{descricao}</p>}
      {children}
    </div>
  );
}
