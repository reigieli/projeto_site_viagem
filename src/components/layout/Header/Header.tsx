import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar } from '../../Avatar/Avatar';
import './Header.css';

export interface HeaderProps {
  titulo: string;
  subtitulo?: string;
  barraLateralRecolhida: boolean;
  aoAlternarBarraLateral: () => void;
  perfil?: {
    nome: string;
    descricao?: string;
    imagem?: string;
  };
}

export function Header({
  titulo,
  subtitulo,
  barraLateralRecolhida,
  aoAlternarBarraLateral,
  perfil,
}: Readonly<HeaderProps>) {
  return (
    <header className="cabecalho">
      <button
        className="cabecalho__alternador"
        aria-label="Alternar barra lateral"
        aria-expanded={!barraLateralRecolhida}
        aria-controls="barra-lateral"
        onClick={aoAlternarBarraLateral}
      >
        {barraLateralRecolhida ? <PanelLeftOpen /> : <PanelLeftClose />}
      </button>
      <div className="cabecalho__informacoes">
        <strong>{titulo}</strong>
        <small>{subtitulo}</small>
      </div>
      <Link className="cabecalho__perfil" to="/account">
        <Avatar nome={perfil?.nome} imagem={perfil?.imagem} />
        <span>{perfil?.nome ?? 'Minha conta'}</span>
      </Link>
    </header>
  );
}
