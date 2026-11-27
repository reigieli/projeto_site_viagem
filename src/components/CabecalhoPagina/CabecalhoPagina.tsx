import './CabecalhoPagina.css';

import type { ReactNode } from 'react';
export interface CabecalhoPaginaProps {
  titulo: string;
  descricao?: string;
  icone?: ReactNode;
  acoes?: ReactNode;
}

/** Componente reutilizável de apresentação. */
export function CabecalhoPagina({
  titulo,
  descricao,
  icone,
  acoes,
}: Readonly<CabecalhoPaginaProps>) {
  return (
    <header className="cabecalho-pagina">
      <div className="cabecalho-pagina__identificacao">
        {icone && (
          <div className="cabecalho-pagina__icone" aria-hidden="true">
            {icone}
          </div>
        )}
        <div>
          <h1>{titulo}</h1>
          {descricao && (
            <p className="cabecalho-pagina__descricao">{descricao}</p>
          )}
        </div>
      </div>
      {acoes && <div className="cabecalho-pagina__acoes">{acoes}</div>}
    </header>
  );
}
