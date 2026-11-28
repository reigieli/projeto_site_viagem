import './Table.css';
import type { ReactNode, Key } from 'react';

export type AlinhamentoColuna = 'esquerda' | 'centro' | 'direita';

export interface ColunaTable<T> {
  id: string;
  titulo: string;
  renderizar: (registro: T) => ReactNode;
  alinhamento?: AlinhamentoColuna;
}
export interface TableProps<T> {
  registros: readonly T[];
  colunas: readonly ColunaTable<T>[];
  obterChave: (registro: T) => Key;
  titulo: string;
  mensagemVazia?: string;
  listrada?: boolean;
  compacta?: boolean;
}

export function Table<T>({
  registros,
  colunas,
  obterChave,
  titulo,
  mensagemVazia = 'Nenhum registro encontrado.',
  listrada = false,
  compacta = false,
}: Readonly<TableProps<T>>) {
  return (
    <div className="table">
      <table
        className={`table__estrutura ${listrada ? 'table__estrutura--listrada' : ''} ${compacta ? 'table__estrutura--compacta' : ''}`}
      >
        <caption className="table__titulo">{titulo}</caption>
        <thead>
          <tr>
            {colunas.map((c) => (
              <th
                key={c.id}
                scope="col"
                className={`table__celula table__celula--${c.alinhamento ?? 'esquerda'}`}
              >
                {c.titulo}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {registros.length ? (
            registros.map((r) => (
              <tr key={obterChave(r)}>
                {colunas.map((c) => (
                  <td
                    key={c.id}
                    className={`table__celula table__celula--${c.alinhamento ?? 'esquerda'}`}
                  >
                    {c.renderizar(r)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={Math.max(1, colunas.length)}
                className="table__vazia"
              >
                {mensagemVazia}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
