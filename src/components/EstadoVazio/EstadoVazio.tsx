import type { ReactNode } from 'react';
import { Inbox } from 'lucide-react';
import './EstadoVazio.css';

export interface EstadoVazioProps {
  titulo: string;
  descricao?: string;
  icone?: ReactNode;
  acao?: ReactNode;
}

export function EstadoVazio({
  titulo,
  descricao,
  icone,
  acao,
}: Readonly<EstadoVazioProps>) {
  return (
    <div className="estado-vazio">
      <div className="estado-vazio__icone" aria-hidden="true">
        {icone ?? <Inbox />}
      </div>
      <h3>{titulo}</h3>
      {descricao && <p className="estado-vazio__descricao">{descricao}</p>}
      {acao}
    </div>
  );
}
