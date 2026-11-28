import type { GrupoMenu } from '../../../types/navegacao.tipos';
import { Logo } from '../Logo/Logo';
import { GrupoNav } from '../GrupoNav/GrupoNav';
import './Sidebar.css';

export interface SideBarProps {
  id?: string;
  grupos: readonly GrupoMenu[];
  caminhoAtual: string;
  imagemLogo?: string;
  versao?: string;
}

/** Menu permanente: reutiliza a composição do layout e o visual do menu legado. */
export function SideBar({
  id = 'sidebar',
  grupos,
  caminhoAtual,
  imagemLogo,
  versao,
}: Readonly<SideBarProps>) {
  return (
    <aside id={id} className="sidebar">
      <div className="sidebar__marca">
        <Logo imagem={imagemLogo} nome="ROAMLY" descricao="Travel Planner" />
      </div>
      <nav className="sidebar__navegacao" aria-label="Navegação principal">
        {grupos.map((grupo) => (
          <GrupoNav key={grupo.id} grupo={grupo} caminhoAtual={caminhoAtual} />
        ))}
      </nav>
      {versao && <footer className="sidebar__rodape">Roamly · {versao}</footer>}
    </aside>
  );
}
