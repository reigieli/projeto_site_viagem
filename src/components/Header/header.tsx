import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Button, ButtonLink } from '../Button/button';

function AuthActions() {
  const { ehAutenticado, usuario, logout } = useAuth();

  if (!ehAutenticado) {
    return (
      <>
        <ButtonLink variant="outline" to="/login">Entrar</ButtonLink>
        <ButtonLink variant="primary" to="/cadastro">Cadastrar-se</ButtonLink>
      </>
    );
  }

  return (
    <>
      <span className="header__greeting">Olá, {usuario?.nome}</span>
      <Button variant="outline" onClick={logout}>Sair</Button>
    </>
  );
}

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">Planejador de Viagens</Link>
      </h1>
      <div className="header__auth">
        <AuthActions />
      </div>
    </header>
  );
}