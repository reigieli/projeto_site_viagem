import type { ReactNode } from 'react';
import './Grid.css';
export interface GridProps {
  children: ReactNode;
  colunas?: 2 | 3 | 4;
}
/** Grade responsiva para distribuir componentes em colunas. */
export function Grid({ children, colunas = 2 }: Readonly<GridProps>) {
  return <div className={`grid grid--${colunas}`}>{children}</div>;
}
