import React from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';

interface Props {
  onMudarTela: (tela: number) => void;
}

export function Page04URBANO({ onMudarTela }: Props) {
  
  return (
    <div className="main-content">
      {/* Cabeçalho da página */}
      <header className="topbar">
        <div className="topbar__info">
          <span className="screen-indicator">Tela 4 de 16</span>
          <h1 className="topbar__title">4. Sugestões Destinos</h1>
        </div>
        
        {/* Ações do Cabeçalho (próxima e anterior) */}
        <div className="topbar-actions">
          <a href="#" onClick={(e) => { e.preventDefault(); onMudarTela(3); }} className="btn-nav" style={{ textDecoration: 'none' }}>Anterior ›</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onMudarTela(5); }} className="btn-nav primary" style={{ textDecoration: 'none' }}>Próxima ›</a>
        </div>
      </header>

      {/* Corpo Principal */}
      <main style={{ backgroundColor: '#f3f4f6', padding: '32px', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        <section style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', maxWidth: '1000px', margin: '0 auto' }}>
            
          {/* Cabeçalho do Conteúdo */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
            <div>
              <span style={{ color: '#0d9488', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>PASSO 3 DE 3</span>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', margin: '8px 0 4px 0' }}>Sugestões de Destinos Recomendados</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
                Com base nas suas preferências: <strong style={{ color: '#374151' }}>Urbano & Cultura</strong>
              </p>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); onMudarTela(5); }} className="btn-dark" style={{ backgroundColor: '#111827', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '12px 20px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
              Ir para Pesquisa de Passagens &gt;
            </a>
          </div>

          {/* Grid de Destinos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              
            {/* CARD 1 - Malásia */}
            <article className="card" style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', background: '#fff' }}>
              <div style={{ height: '180px', position: 'relative', backgroundColor: '#cbd5e1' }}>
                <img className="card__image" src="/imagens/Kuala.PNG" alt="Kuala Lumpur, Malaysia" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#0d9488', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>98% Compatível</span>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '4px' }}>Malásia</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Kuala Lumpur</div>
                <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5, marginBottom: '24px', flex: 1 }}>A capital vibrante com uma mistura única de cultura, gastronomia e arquitetura moderna.</div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6', paddingTop: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>Estimativa total</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#0d9488' }}>R$ 7.900</div>
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); onMudarTela(5); }} className="select-link" style={{ color: '#0d9488', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Selecionar</a>
                </div>
              </div>
            </article>

            {/* CARD 2 - Hong Kong */}
            <article className="card" style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', background: '#fff' }}>
              <div style={{ height: '180px', position: 'relative', backgroundColor: '#cbd5e1' }}>
                <img className="card__image" src="/imagens/Hong kong.PNG" alt="Hong Kong, China" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#0d9488', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>92% Compatível</span>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '4px' }}>China</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Hong Kong</div>
                <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5, marginBottom: '24px', flex: 1 }}>Uma das mais fascinantes cidades do mundo, conhecida por sua energia vibrante e cultura rica.</div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6', paddingTop: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>Estimativa total</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#0d9488' }}>R$ 10.000</div>
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); onMudarTela(5); }} className="select-link" style={{ color: '#0d9488', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Selecionar</a>
                </div>
              </div>
            </article>

            {/* CARD 3 - Paris */}
            <article className="card" style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', background: '#fff' }}>
              <div style={{ height: '180px', position: 'relative', backgroundColor: '#cbd5e1' }}>
                <img className="card__image" src="/imagens/Paris2.PNG" alt="Paris, France" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#0d9488', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>87% Compatível</span>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '4px' }}>França</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Paris</div>
                <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5, marginBottom: '24px', flex: 1 }}>A cidade da luz, famosa por sua arquitetura, arte e cultura.</div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6', paddingTop: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>Estimativa total</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#0d9488' }}>R$ 18.800</div>
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); onMudarTela(5); }} className="select-link" style={{ color: '#0d9488', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Selecionar</a>
                </div>
              </div>
            </article>

          </div>
        </section>
      </main>
    </div>
  );
}