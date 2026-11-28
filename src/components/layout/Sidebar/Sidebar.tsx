import type { GrupoMenu } from '../../../types/navegacao.types';
import { Logo } from '../Logo/Logo';
import { GrupoNav } from '../GrupoNav/GrupoNav';
import './BarraLateral.css';

export interface SideBarProps {
  grupos: readonly GrupoMenu[];
  caminhoAtual: string;
  recolhida: boolean;
  imagemLogo?: string;
  versao?: string;
  aoNavegar?: () => void;
}
export function SideBar({
  grupos,
  caminhoAtual,
  recolhida,
  imagemLogo,
  versao,
  aoNavegar,
}: Readonly<SideBarProps>) {
  return (
    <aside
      id="barra-lateral"
      className={`barra-lateral${recolhida ? ' barra-lateral--recolhida' : ''}`}
    >
      <div className="barra-lateral__marca">
        <Logo
          variante={recolhida ? 'compacta' : 'completa'}
          imagem={imagemLogo}
        />
      </div>
      <nav
        className="barra-lateral__navegacao"
        aria-label="Navegação principal"
        onClick={(event) => {
          if ((event.target as Element).closest('a')) aoNavegar?.();
        }}
      >
        {grupos.map((grupo) => (
          <GrupoNav
            key={grupo.id}
            grupo={grupo}
            caminhoAtual={caminhoAtual}
            recolhido={recolhida}
          />
        ))}
      </nav>
      <footer className="barra-lateral__rodape">
        {!recolhida && 'Roamly · '}
        {versao}
      </footer>
    </aside>
  );
}
