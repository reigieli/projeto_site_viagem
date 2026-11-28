import { useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';
import './Modal.css';
import type { ReactNode } from 'react';

export interface ModalProps {
  aberto: boolean;
  titulo: string;
  aoFechar: () => void;
  children: ReactNode;
  rodape?: ReactNode;
}

export function Modal({
  aberto,
  titulo,
  aoFechar,
  children,
  rodape,
}: Readonly<ModalProps>) {
  const referencia = useRef<HTMLDialogElement>(null);
  const id = useId();

  useEffect(() => {
    const dialogo = referencia.current;
    if (!dialogo) return;
    if (aberto && !dialogo.open) dialogo.showModal();
    else if (!aberto && dialogo.open) dialogo.close();
  }, [aberto]);

  return (
    <dialog
      ref={referencia}
      className="modal"
      aria-labelledby={id}
      onCancel={(evento) => {
        evento.preventDefault();
        aoFechar();
      }}
    >
      <header className="modal__cabecalho">
        <h2 id={id}>{titulo}</h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={aoFechar}
          className="modal__fechar"
        >
          <X />
        </button>
      </header>
      <div className="modal__corpo">{children}</div>
      {rodape && <footer className="modal__rodape">{rodape}</footer>}
    </dialog>
  );
}
