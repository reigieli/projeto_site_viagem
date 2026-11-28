import { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';

interface Props {
  onMudarTela?: (tela: number) => void;
}

export function Comparacaodepassagens({ onMudarTela }: Props) {
  const [escolhido, setEscolhido] = useState<string>('opcao-1');

  return (
    <div className="container">
      <div className="passeios-header">
        <div>
          <h2>6. Comparar Voos</h2>
          <p>Compare tarifas, horários e bagagem antes de avançar.</p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onMudarTela?.(7)}
        >
          Avançar para Hospedagem &gt;
        </button>
      </div>

      <div className="passeios-lista">
        <article className="passeio-card">
          <div>
            <h3>Opção 1 — Menor tempo de viagem</h3>
            <p>1 escala • Bagagem despachada incluída • R$ 5.490</p>
          </div>
          <button
            type="button"
            className={`btn ${escolhido === 'opcao-1' ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => setEscolhido('opcao-1')}
          >
            {escolhido === 'opcao-1' ? 'Selecionado' : 'Escolher'}
          </button>
        </article>

        <article className="passeio-card">
          <div>
            <h3>Opção 2 — Melhor custo-benefício</h3>
            <p>1 escala • Bagagem de mão + despachada • R$ 5.120</p>
          </div>
          <button
            type="button"
            className={`btn ${escolhido === 'opcao-2' ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => setEscolhido('opcao-2')}
          >
            {escolhido === 'opcao-2' ? 'Selecionado' : 'Escolher'}
          </button>
        </article>
      </div>
    </div>
  );
}

export const Page06 = Comparacaodepassagens;
export default Comparacaodepassagens;