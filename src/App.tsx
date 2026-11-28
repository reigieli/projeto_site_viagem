import { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Page01 } from './pages/page01';
import { Page02 } from './pages/page02';
import { Page03 } from './pages/page03';
import { Page04 } from './pages/page04';
import { Page05 } from './pages/page05';
import { Page06 } from './pages/page06';
//import { Page07 } from './pages/page07';
//import { Page08 } from './pages/page08';
import { Page09 } from './pages/page09';
import { Page10 } from './pages/page10';
import { Page11 } from './pages/page11';
import { Page12 } from './pages/page12';
import './App.css';

export function App() {
  const [telaAtual, setTelaAtual] = useState(9);

  const nomesDasTelas: { [key: number]: string } = {
    1: 'Início',
    2: 'Dados da Viagem',
    3: 'Preferências',
    4: 'Sugestões Destinos',
    5: 'Pesquisa de Voos',
    6: 'Comparar Voos',
    7: 'Hospedagem',
    8: 'Passeios & Tours',
    9: 'Resumo da Reserva',
    10: 'Passageiros',
    11: 'Pagamento',
    12: 'Confirmação',
    13: 'Meu Roteiro',
    14: 'Controle Financeiro',
    15: 'Checklist da Mala',
    16: 'Minha Conta',
  };

  return (
    <div className="app-layout">
      <Sidebar telaAtual={telaAtual} onMudarTela={setTelaAtual} />

      <div className="main-content" style={{ backgroundColor: '#f8fafc' }}>
        <header className="topbar">
          <div className="topbar__info">
            <span className="screen-indicator">
              Tela {telaAtual} de 16 — {nomesDasTelas[telaAtual]}
            </span>
          </div>

          <div className="topbar-actions">
            <button
              className="btn-nav"
              onClick={() => setTelaAtual((t) => Math.max(t - 1, 1))}
              disabled={telaAtual === 1}
            >
              ← Anterior
            </button>
            <button
              className="btn-nav primary"
              onClick={() => setTelaAtual((t) => Math.min(t + 1, 16))}
              disabled={telaAtual === 16}
            >
              Próxima →
            </button>
          </div>
        </header>

        <main className="content-body">
          {telaAtual === 1 && <Page01 onMudarTela={setTelaAtual} />}
          {telaAtual === 2 && <Page02 onMudarTela={setTelaAtual} />}
          {telaAtual === 3 && <Page03 onMudarTela={setTelaAtual} />}
          {telaAtual === 4 && <Page04 onMudarTela={setTelaAtual} />}
          {telaAtual === 5 && <Page05 onMudarTela={setTelaAtual} />}
          {telaAtual === 6 && <Page06 onMudarTela={setTelaAtual} />}
          {/*{telaAtual === 7 && <Page07 onMudarTela={setTelaAtual} />}*/}
          {/*{telaAtual === 8 && <Page08 onMudarTela={setTelaAtual} />}*/}
          {telaAtual === 9 && <Page09 onMudarTela={setTelaAtual} />}
          {telaAtual === 10 && <Page10 onMudarTela={setTelaAtual} />}
          {telaAtual === 11 && <Page11 onMudarTela={setTelaAtual} />}
          {telaAtual === 12 && <Page12 onMudarTela={setTelaAtual} />}
          {telaAtual !== 9 && telaAtual !== 10 && telaAtual !== 11 && telaAtual !== 12 && (
            <div className="container">
              <h2>{telaAtual}. {nomesDasTelas[telaAtual]}</h2>
              <p>Conteúdo em desenvolvimento.</p>
            </div>
          )}

        
        </main>
      </div>
    </div>
  );
}

export default App;