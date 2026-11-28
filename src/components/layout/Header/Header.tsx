import { Link } from 'react-router-dom';
import { Avatar } from '../../Avatar/Avatar';
import './Header.css';

export interface HeaderProps {
  titulo: string;
  subtitulo?: string;
  perfil?: {
    nome: string;
    descricao?: string;
    imagem?: string;
  };
}

export function Header({ titulo, subtitulo, perfil }: Readonly<HeaderProps>) {
  return (
    <header className="header">
      <div className="header__informacoes">
        <strong>{titulo}</strong>
        <small>{subtitulo}</small>
      </div>
      <Link className="header__perfil" to="/account">
        <Avatar nome={perfil?.nome} imagem={perfil?.imagem} />
        <span>{perfil?.nome ?? 'Minha conta'}</span>
      </Link>
    </header>
  );
}
