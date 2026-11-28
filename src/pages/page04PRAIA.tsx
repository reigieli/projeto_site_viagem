import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';
// Mantenha aqui os imports dos seus arquivos CSS adicionais, se necessário.
// import '../ArquivosCSS/reset.css';
// import '../ArquivosCSS/sidebar.css';
// ...

// 1. Componente do Card de Destino isolado
const DestinationCard = ({ 
  country, city, description, price, match, image, onMudarTela 
}: { 
  country: string, city: string, description: string, price: string, match: string, image: string, onMudarTela: (tela: number) => void 
}) => (
  <article className="card" style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', background: '#fff' }}>
    <div style={{ height: '180px', position: 'relative', backgroundColor: '#cbd5e1' }}>
      <img className="card__image" src={image} alt={`${city}, ${country}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#0d9488', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
        {match} Compatível
      </span>
    </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '4px' }}>
        {country}
      </div>
      <div style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
        {city}
      </div>
      <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5, marginBottom: '24px', flex: 1 }}>
        {description}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6', paddingTop: '16px' }}>
        <div>
          <div style={{ fontSize: '11px', color: '#9ca3af' }}>Estimativa total</div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: '#0d9488' }}>{price}</div>
        </div>
        <a href="#" onClick={(e) => { e.preventDefault(); onMudarTela(5); }} className="select-link" style={{ color: '#0d9488', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
          Selecionar
        </a>
      </div>
    </div>
  </article>
);

// 2. Componente Principal da Página
export function Page04PRAIA({ onMudarTela }: { onMudarTela: (tela: number) => void }) {
  
  // Dados dinâmicos dos destinos de Praia & Sol
  const destinations = [
    {
      id: 1,
      country: 'Brazil',
      city: 'Rio de Janeiro',
      description: 'Praias paradisíacas e vida noturna agitada.',
      price: 'R$ 1.500',
      match: '98%',
      image: '/imagens/Rio.PNG'
    },
    {
      id: 2,
      country: 'Colombia',
      city: 'San Andres',
      description: 'O luxo das águas cristalinas aliado aos melhores beach clubs do Caribe.',
      price: 'R$ 8.400',
      match: '92%',
      image: '/imagens/Colombia.PNG'
    },
    {
      id: 3,
      country: 'Tailandia',
      city: 'Phuket',
      description: 'O paraíso Tailandês, descanso e aventura.',
      price: 'R$ 6.800',
      match: '87%',
      image: '/imagens/Phunket.PNG'
    }
  ];

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
                Com base nas suas preferências: <strong style={{ color: '#374151' }}>Praia & Sol</strong>
              </p>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); onMudarTela(5); }} className="btn-dark" style={{ backgroundColor: '#111827', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '12px 20px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
              Ir para Pesquisa de Passagens &gt;
            </a>
          </div>

          {/* Grid de Destinos renderizado com o Map */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {destinations.map((dest) => (
              <DestinationCard 
                key={dest.id}
                country={dest.country}
                city={dest.city}
                description={dest.description}
                price={dest.price}
                match={dest.match}
                image={dest.image}
                onMudarTela={onMudarTela} 
              />
            ))}
          </div>

        </section>
      </main>
    </div>
  );
}