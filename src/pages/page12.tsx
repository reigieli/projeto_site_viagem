import React from 'react';
import '../components/Card/Card.css';
import '../styles/botoes.css';

interface Page12Props {
  onMudarTela: (tela: number) => void;
}

export function Page12({ onMudarTela }: Page12Props) {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '40px 20px' }}>
      
      <div style={{ 
        width: '64px', height: '64px', background: '#d1fae5', borderRadius: '50%', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto',
        color: '#059669', fontSize: '28px', fontWeight: 'bold'
      }}>
        ✓
      </div>

      <span className="badge badge-success" style={{ marginBottom: '12px' }}>RESERVA FINALIZADA</span>
      <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Sua viagem para o Nepal está confirmada!</h2>
      <p style={{ color: '#6b6375', marginBottom: '32px' }}>
        Enviamos o voucher completo de confirmação e os e-tickets para o seu e-mail cadastrado.
      </p>

      <div className="card" style={{ maxWidth: '600px', margin: '0 auto 32px auto', textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid #e5e7eb', paddingBottom: '12px' }}>
          <span style={{ fontWeight: 600, color: '#4b5563' }}>Código da Reserva:</span>
          <span style={{ fontWeight: 700, color: '#0d9488' }}>#TRV-89412-NEPAL</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ color: '#4b5563' }}>Passageiro Principal:</span>
          <span style={{ fontWeight: 600 }}>Ashik Kumar</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#4b5563' }}>Data da Ida:</span>
          <span style={{ fontWeight: 600 }}>12 de Maio de 2026</span>
        </div>
      </div>

      <button 
        className="btn btn-success" 
        onClick={() => onMudarTela(13)} 
        style={{ padding: '12px 32px', fontSize: '16px' }}
      >
        Acessar Meu Roteiro (Dashboard) &gt;
      </button>

    </div>
  );
}