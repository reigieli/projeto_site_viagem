import React, { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Formulario/Formulario.css';

interface Page11Props {
  onMudarTela: (tela: number) => void;
}

export function Page11({ onMudarTela }: Page11Props) {
  const [metodo, setMetodo] = useState('cartao');

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2>11. Tela de Pagamento Seguro</h2>
        <p style={{ color: '#6b6375' }}>
          Escolha o método de sua preferência para concluir a reserva.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '16px',
          }}
        >
          <button
            className={`btn ${metodo === 'cartao' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setMetodo('cartao')}
          >
            💳 Cartão de Crédito
          </button>
          <button
            className={`btn ${metodo === 'pix' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setMetodo('pix')}
          >
            ⚡ PIX (5% Desconto)
          </button>
          <button
            className={`btn ${metodo === 'boleto' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setMetodo('boleto')}
          >
            📄 Boleto Bancário
          </button>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="form-group">
          <label className="form-label">Número do Cartão</label>
          <input
            type="text"
            className="form-input"
            defaultValue="4532 •••• •••• 8912"
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          <div className="form-group">
            <label className="form-label">Validade</label>
            <input type="text" className="form-input" defaultValue="08/30" />
          </div>
          <div className="form-group">
            <label className="form-label">CVV</label>
            <input type="text" className="form-input" defaultValue="882" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Opções de Parcelamento</label>
          <select className="form-select">
            <option>10x de R$ 1.587,00 sem juros</option>
            <option>À vista com desconto - R$ 15.000,00</option>
          </select>
        </div>

        <button
          className="btn btn-success btn-block"
          style={{ marginTop: '16px' }}
          onClick={() => onMudarTela(12)}
        >
          Confirmar e Pagar R$ 15.870,00 &gt;
        </button>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button className="btn btn-secondary" onClick={() => onMudarTela(10)}>
          Voltar
        </button>
      </div>
    </div>
  );
}
