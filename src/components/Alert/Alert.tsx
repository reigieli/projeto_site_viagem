import { Info, X } from 'lucide-react';
import './Alert.css';

import type { ReactNode } from 'react';

export interface AlertProps {
  variante?: 'sucesso' | 'atencao' | 'perigo' | 'informacao';
  titulo?: string;
  children: ReactNode;
  aoFechar?: () => void;
}

export function Alert({
  variante = 'informacao',
  titulo,
  children,
  aoFechar,
}: Readonly<AlertProps>) {
  return (
    <div
      className={`alert alert--${variante}`}
      role={variante === 'perigo' ? 'alert' : 'status'}
    >
      <Info size={20} />
      <div className="alert__conteudo">
        {titulo && <strong>{titulo}</strong>}
        <div>{children}</div>
      </div>
      {aoFechar && (
        <button
          type="button"
          className="alert__fechar"
          aria-label="Fechar alerta"
          onClick={aoFechar}
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
