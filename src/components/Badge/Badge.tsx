import type { ReactNode } from 'react';
import './Badge.css';

export interface BadgeProps {
  children: ReactNode;
  variante?: 'padrao' | 'sucesso';
}
/** Selo compacto de informação ou sucesso. */
export function Badge({ children, variante = 'padrao' }: Readonly<BadgeProps>) {
  return <span className={`badge badge--${variante}`}>{children}</span>;
}
