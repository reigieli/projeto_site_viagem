import './Steps.css';
import { Check } from 'lucide-react';

export interface Step {
  id: string;
  titulo: string;
  descricao?: string;
}

export type StateStep = 'concluida' | 'atual' | 'pendente';

export interface StepsProps {
  etapas: readonly Step[];
  etapaAtualId: string;
  rotulo?: string;
  aoSelecionarEtapa?: (id: string) => void;
}

export function Steps({
  etapas,
  etapaAtualId,
  rotulo = 'Etapas do processo',
  aoSelecionarEtapa,
}: Readonly<StepsProps>) {
  const atual = etapas.findIndex((e) => e.id === etapaAtualId);
  return (
    <ol className="indicador-etapas" aria-label={rotulo}>
      {etapas.map((e, i) => {
        const estado =
          i < atual ? 'concluida' : i === atual ? 'atual' : 'pendente';
        const conteudo = (
          <>
            <span className="indicador-etapas__numero" aria-hidden="true">
              {estado === 'concluida' ? <Check size={18} /> : i + 1}
            </span>
            <strong>{e.titulo}</strong>
            <small>
              {estado === 'concluida'
                ? 'Concluída'
                : estado === 'atual'
                  ? 'Em andamento'
                  : 'Pendente'}
            </small>
            {e.descricao && <small>{e.descricao}</small>}
          </>
        );
        return (
          <li
            key={e.id}
            aria-current={estado === 'atual' ? 'step' : undefined}
            className={`indicador-etapas__item indicador-etapas__item--${estado}`}
          >
            {estado === 'concluida' && aoSelecionarEtapa ? (
              <button
                type="button"
                className="indicador-etapas__controle"
                onClick={() => aoSelecionarEtapa(e.id)}
              >
                {conteudo}
              </button>
            ) : (
              <div className="indicador-etapas__controle">{conteudo}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
