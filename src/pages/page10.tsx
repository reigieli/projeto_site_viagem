import React from 'react';
import '../components/Card/Card.css';
import '../components/Formulario/Formulario.css';

interface Page10Props {
  onMudarTela: (tela: number) => void;
}

export function Page10({ onMudarTela }: Page10Props) {
  return (
    <div className="container">
      <span className="badge badge-success" style={{ marginBottom: '8px' }}>
        IDENTIFICAÇÃO
      </span>
      <h2>10. Dados dos Passageiros</h2>
      <p style={{ marginBottom: '24px', color: '#6b6375' }}>
        Informe os dados conforme constam no Passaporte para emissão do bilhete.
      </p>

      {/* Bloco Passageiro 1 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h4
          style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#0d9488',
            marginBottom: '16px',
          }}
        >
          PASSAGEIRO 1 (TITULAR)
        </h4>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          <div className="form-group">
            <label className="form-label">Nome Completo</label>
            <input
              type="text"
              className="form-input"
              defaultValue="Ashik Kumar"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Número do Passaporte</label>
            <input
              type="text"
              className="form-input"
              defaultValue="FP9823412"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Data de Nascimento</label>
            <input
              type="text"
              className="form-input"
              defaultValue="14/08/1995"
            />
          </div>
          <div className="form-group">
            <label className="form-label">E-mail de Contato</label>
            <input
              type="email"
              className="form-input"
              defaultValue="ashik@travelplanner.com"
            />
          </div>
        </div>
      </div>

      {/* Bloco Passageiro 2 */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h4
          style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#4b5563',
            marginBottom: '16px',
          }}
        >
          PASSAGEIRO 2
        </h4>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          <div className="form-group">
            <label className="form-label">Nome Completo</label>
            <input
              type="text"
              className="form-input"
              defaultValue="Mariana Silva"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Número do Passaporte</label>
            <input
              type="text"
              className="form-input"
              defaultValue="FP4410923"
            />
          </div>
        </div>
      </div>

      {/* Rodapé de Ações */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button className="btn btn-secondary" onClick={() => onMudarTela(9)}>
          Voltar
        </button>
        <button className="btn btn-success" onClick={() => onMudarTela(11)}>
          Ir para Pagamento &gt;
        </button>
      </div>
    </div>
  );
}
