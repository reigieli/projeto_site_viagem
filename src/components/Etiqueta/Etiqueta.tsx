import type { ReactNode } from 'react';
import './Etiqueta.css';

export interface EtiquetaProps {
  children: ReactNode;
  variante?:
    'neutra' | 'primaria' | 'sucesso' | 'alerta' | 'perigo' | 'informacao';
  icone?: ReactNode;
}

export function Etiqueta({
  children,
  variante = 'neutra',
  icone,
}: Readonly<EtiquetaProps>) {
  return (
    <span className={`etiqueta etiqueta--${variante}`}>
      {icone}
      {children}
    </span>
  );
}
