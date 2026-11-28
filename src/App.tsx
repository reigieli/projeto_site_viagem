import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { LayoutPrincipal } from './layouts/LayoutPrincipal/LayoutPrincipal';
import { caminhos, itensNavegacao } from './constantes/navegacao';
import { Page01 } from './pages/page01';
import { Page02 } from './pages/page02';
import { Page03 } from './pages/page03';
import { Page04 } from './pages/page04';
import { Page04PRAIA } from './pages/page04PRAIA';
import { Page04NEVE } from './pages/page04NEVE';
import { Page04URBANO } from './pages/page04URBANO';
import { Page04TRILHA } from './pages/page04TRILHA';
import FlightSearchScreen from './pages/page05';
import FlightCompareScreen from './pages/page06';
import Hospedagem from './pages/page07';
import Passeios from './pages/page08';
import { Page09 } from './pages/page09';
import { Page10 } from './pages/page10';
import { Page11 } from './pages/page11';
import { Page12 } from './pages/page12';
import { Financeiro } from './pages/Financeiro/Financeiro';
import { MinhaConta } from './pages/MinhaConta/MinhaConta';

function Rotas() {
  const navigate = useNavigate();
  function mudarTela(tela: number) {
    const item = itensNavegacao[tela - 1];
    if (item) navigate(item.caminho);
  }

  return (
    <Routes>
      <Route element={<LayoutPrincipal />}>
        <Route
          path={caminhos.inicio}
          element={<Page01 onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.viagem}
          element={<Page02 onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.preferencias}
          element={<Page03 onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.destinos}
          element={<Page04 onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.destinosPraia}
          element={<Page04PRAIA onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.destinosNeve}
          element={<Page04NEVE onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.destinosUrbano}
          element={<Page04URBANO onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.destinosTrilha}
          element={<Page04TRILHA onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.voos}
          element={<FlightSearchScreen onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.compararVoos}
          element={<FlightCompareScreen onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.hoteis}
          element={<Hospedagem onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.passeios}
          element={<Passeios onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.resumoReserva}
          element={<Page09 onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.passageiros}
          element={<Page10 onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.pagamento}
          element={<Page11 onMudarTela={mudarTela} />}
        />
        <Route
          path={caminhos.confirmacao}
          element={<Page12 onMudarTela={mudarTela} />}
        />
        <Route path={caminhos.financeiro} element={<Financeiro />} />
        <Route path={caminhos.minhaConta} element={<MinhaConta />} />
        {itensNavegacao
          .filter((_, i) => [12, 14].includes(i))
          .map((item) => (
            <Route
              key={item.id}
              path={item.caminho}
              element={
                <div className="container">
                  <h2>{item.rotulo}</h2>
                  <p>Conteúdo em desenvolvimento.</p>
                </div>
              }
            />
          ))}
        <Route path="*" element={<p>Página não encontrada.</p>} />
      </Route>
    </Routes>
  );
}

export function App() {
  return (
    <HashRouter>
      <Rotas />
    </HashRouter>
  );
}

export default App;