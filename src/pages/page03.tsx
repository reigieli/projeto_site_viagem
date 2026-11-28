import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';


// 1. Componente do Card de Preferência isolado
const PreferenceCard = ({ 
  icon, title, onMudarTela 
}: { 
  icon: string, title: string, onMudarTela: (tela: number) => void 
}) => (
  <article 
    className="card" 
    onClick={(e) => { e.preventDefault(); onMudarTela(4); }}
    style={{ padding: '32px 16px', textAlign: 'center', cursor: 'pointer', border: '1px solid #e5e7eb', borderRadius: '8px' }}
  >
    <div style={{ fontSize: '24px', marginBottom: '12px', color: '#9ca3af' }}>
      {icon}
    </div>
    <a href="#" className="nav-link" style={{ textDecoration: 'none', color: '#111827', fontWeight: 500 }}>
      {title}
    </a>
  </article>
);

// 2. Componente Principal da Página
export function Page03({ onMudarTela }: { onMudarTela: (tela: number) => void }) {
  
  // Cada opção agora aponta para um número de tela diferente
  const preferences = [
    { id: 1, icon: '☀️', title: 'Praia & Sol', telaDestino: 41 },
    { id: 2, icon: '❄️', title: 'Neve & Frio', telaDestino: 42 },
    { id: 3, icon: '🏢', title: 'Urbano & Cultura', telaDestino: 43 },
    { id: 4, icon: '🧭', title: 'Trilhas & Aventura', telaDestino: 44 }
  ];

  return (
    <div className="main-content">
      
      {/* Cabeçalho da Página */}
      <header className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
        {/* Ações do Cabeçalho (próxima e anterior) */}
        <div className="topbar-actions">
          <a href="#" onClick={(e) => { e.preventDefault(); onMudarTela(2); }} className="btn-nav" style={{ textDecoration: 'none' }}>Anterior ›</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onMudarTela(4); }} className="btn-nav primary" style={{ textDecoration: 'none' }}>Próxima ›</a>
        </div>
      </header>

      {/* Corpo Principal */}
      <main style={{ backgroundColor: '#f3f4f6', padding: '32px', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        <section className="form-wrapper" style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
            
          {/* Cabeçalho do Conteúdo */}
          <div className="form-header" style={{ marginBottom: '32px' }}>
            <span className="step-indicator" style={{ color: '#0d9488', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>PASSO 2 DE 3</span>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', margin: '8px 0 4px 0' }}>Suas Preferências de Viagem</h3>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Ajude nosso sistema a sugerir as melhores experiências para o seu perfil.</p>
          </div>

          <form className="travel-form">
              
            {/* Estilo de Viagem Favorito */}
            <div className="form-row" style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '16px' }}>
                Estilo de Viagem Favorito
              </label>
              
              {/* Grid renderizado com Map */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                {preferences.map((pref) => (
                  <PreferenceCard 
                    key={pref.id}
                    icon={pref.icon}
                    title={pref.title}
                    onMudarTela={onMudarTela}
                  />
                ))}
              </div>
            </div>

            {/* Rodapé do Formulário */}
            <div className="form-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
              
              <button 
                onClick={(e) => { e.preventDefault(); onMudarTela(2); }} 
                className="btn-voltar" 
                style={{ background: 'transparent', border: 'none', color: '#4b5563', fontWeight: 600, fontSize: '14px', cursor: 'pointer', padding: '8px 0', textDecoration: 'none' }}
              >
                Voltar
              </button>
              
              <button 
                onClick={(e) => { e.preventDefault(); onMudarTela(4); }} 
                className="btn-success" 
                style={{ backgroundColor: '#0d9488', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', textDecoration: 'none', display: 'inline-block' }}
              >
                Avançar para Sugestões &rarr;
              </button>
                  
            </div>
             
          </form>
        </section>
      </main>
    </div>
  );
}