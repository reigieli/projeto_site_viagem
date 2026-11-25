import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import logo from '../../assets/logo.png';
import '../Hero/Hero.css';
import './Layout.css';

type LocationState = { from?: { pathname: string } } | null;

/*
  Layout dividido de Login / Cadastro: painel de marca à esquerda, formulário à direita.
  Quem já está logado é mandado de volta para a página que tentou acessar (ou para a Home);
  isso também faz o redirecionamento automático logo depois de entrar ou se cadastrar.
*/
export function AuthLayout() {
  const { ehAutenticado, estaCarregando } = useAuth();
  const location = useLocation();

  if (estaCarregando) return null;
  if (ehAutenticado) {
    const destino = (location.state as LocationState)?.from?.pathname ?? '/';
    return <Navigate to={destino} replace />;
  }

  return (
    <div className="auth-layout">
      <aside className="auth-layout__aside">
        <Link to="/" aria-label="Voltar para o início">
          <img src={logo} alt="Roamly - Travel Planner App" className="auth-layout__logo" />
        </Link>

        <div>
          <span className="hero__tag">EXPLORE O MUNDO</span>
          <h2 className="auth-layout__headline">Sua próxima viagem começa aqui.</h2>
          <p className="auth-layout__text">
            Descubra destinos, compare voos e hospedagens e organize todo o seu roteiro em um só lugar.
          </p>
        </div>

        <p className="auth-layout__copy">&copy; {new Date().getFullYear()} ROAMLY</p>
      </aside>

      <main className="auth-layout__main">
        <div className="auth-layout__panel">
          <Outlet />
        </div>
      </main>
    </div>
  );
}