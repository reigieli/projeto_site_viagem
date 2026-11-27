import React from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';

interface Page09Props {
  onMudarTela: (tela: number) => void;
}

export function Page09({ onMudarTela }: Page09Props) {
  return (
    <div className="container">
      <h2>9. Resumo do Pacote & Valores</h2>
      <p style={{ marginBottom: '20px', color: '#6b6375' }}>
        Revise todos os itens selecionados antes de preencher os dados dos
        passageiros.
      </p>

      <div className="grid-2" style={{ alignItems: 'start' }}>
        {/* Coluna Esquerda: Detalhes dos Itens */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="card">
            <div className="card-header">
              <span className="badge badge-success">Voo Escolhido</span>
              <span style={{ fontWeight: 600, color: '#0d9488' }}>
                Qatar Airways
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>
              São Paulo (GRU) → Kathmandu (KTM) • 12 Mai - 25 Mai (2
              Passageiros)
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="badge badge-success">Hospedagem</span>
              <span style={{ fontWeight: 600, color: '#0d9488' }}>
                Himalayan Boutique Hotel
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>
              13 noites • Quarto Duplo Deluxe com Vista para Montanhas
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="badge badge-success">Passeios Incluídos</span>
              <span style={{ fontSize: '13px', fontWeight: 600 }}>
                1 selecionado(s)
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>
              Trekking Helicóptero Everest Acampamento Base
            </p>
          </div>
        </div>

        {/* Coluna Direita: Resumo Financeiro */}
        <div
          className="card"
          style={{
            backgroundColor: '#16171d',
            color: '#f3f4f6',
            border: 'none',
          }}
        >
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '18px' }}>
            Resumo Financeiro
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontSize: '14px',
              marginBottom: '24px',
              borderBottom: '1px solid #2e303a',
              paddingBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Passagens (2x):</span>
              <span>R$ 10.400</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Hospedagem (13nts):</span>
              <span>R$ 3.640</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Passeios Adicionais:</span>
              <span>R$ 1.450</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Taxas de Embarque:</span>
              <span>R$ 380</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#10b981',
            }}
          >
            <span>TOTAL DA VIAGEM:</span>
            <span>R$ 15.870</span>
          </div>

          <button
            className="btn btn-success btn-block"
            onClick={() => onMudarTela(10)}
          >
            Continuar para Passageiros &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
