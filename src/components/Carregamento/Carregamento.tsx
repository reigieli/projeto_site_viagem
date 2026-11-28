import { LoaderCircle } from 'lucide-react';
import './Carregamento.css';

export type TamanhoCarregamento = 'pequeno' | 'medio' | 'grande';

export interface CarregamentoProps {
  tamanho?: TamanhoCarregamento;
  mensagem?: string;
  descricao?: string;
  orientacao?: 'horizontal' | 'vertical';
  centralizado?: boolean;
}

export function Carregamento({
  tamanho = 'medio',
  mensagem = 'Carregando...',
  descricao,
  orientacao = 'vertical',
  centralizado = false,
}: Readonly<CarregamentoProps>) {
  return (
    <div
      role="status"
      className={`carregamento carregamento--${tamanho} carregamento--${orientacao} ${centralizado ? 'carregamento--centralizado' : ''}`}
    >
      <LoaderCircle aria-hidden="true" className="carregamento__icone" />
      <div>
        <strong>{mensagem}</strong>
        {descricao && <p>{descricao}</p>}
      </div>
    </div>
  );
}
