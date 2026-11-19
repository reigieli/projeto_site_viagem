import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  telaAtual: number;
  onMudarTela: (tela: number) => void;
}

export function Sidebar({ telaAtual, onMudarTela }: SidebarProps) {
  const grupos = [
    {
      titulo: 'PLANEJAMENTO',
      itens: [
        { id: 1, nome: '1. Início' },
        { id: 2, nome: '2. Dados da Viagem' },
        { id: 3, nome: '3. Preferências' },
        { id: 4, nome: '4. Sugestões Destinos' },
      ],
    },
    {
      titulo: 'RESERVAS & SELEÇÃO',
      itens: [
        { id: 5, nome: '5. Pesquisa de Voos' },
        { id: 6, nome: '6. Comparar Voos' },
        { id: 7, nome: '7. Hospedagem' },
        { id: 8, nome: '8. Passeios & Tours' },
      ],
    },
    {
      titulo: 'CHECKOUT',
      itens: [
        { id: 9, nome: '9. Resumo da Reserva' },
        { id: 10, nome: '10. Passageiros' },
        { id: 11, nome: '11. Pagamento' },
        { id: 12, nome: '12. Confirmação' },
      ],
    },
    {
      titulo: 'GESTÃO DA VIAGEM',
      itens: [
        { id: 13, nome: '13. Meu Roteiro' },
        { id: 14, nome: '14. Controle Financeiro' },
        { id: 15, nome: '15. Checklist da Mala' },
        { id: 16, nome: '16. Minha Conta' },
      ],
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-area">
          <div className="logo-icon">✈</div>
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 800, margin: 0, letterSpacing: '0.5px' }}>
              ROAMLY
            </h2>
            <span style={{ fontSize: '11px', color: '#94a3b8' }}>Travel Planner</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {grupos.map((grupo) => (
          <div key={grupo.titulo} style={{ marginBottom: '16px' }}>
            <div className="nav-section-title">{grupo.titulo}</div>
            <ul className="nav-list">
              {grupo.itens.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onMudarTela(item.id)}
                    className={`nav-link ${telaAtual === item.id ? 'active' : ''}`}
                    style={{
                      background: telaAtual === item.id ? '#0d9488' : 'transparent',
                      border: 'none',
                      width: '100%',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    {item.nome}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}