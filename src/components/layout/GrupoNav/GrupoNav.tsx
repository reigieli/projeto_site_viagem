import './GrupoNav.css';
import type { GrupoMenu } from '../../../types/navegacao.types';
import { ItemNav } from '../ItemNav/ItemNav';
import './GrupoNavegacao.css';

export interface GrupoNavProps {
  grupo: GrupoMenu;
  caminhoAtual: string;
  recolhido: boolean;
}

export function GrupoNav({
  grupo,
  caminhoAtual,
  recolhido,
}: Readonly<GrupoNavProps>) {
  return (
    <section className="grupo-nav" aria-label={grupo.titulo}>
      {!recolhido && <h2 className="grupo-nav__titulo">{grupo.titulo}</h2>}
      <ul className="grupo-nav__lista">
        {grupo.itens.map((item) => (
          <li key={item.id}>
            <ItemNav
              item={item}
              recolhido={recolhido}
              ativo={[item.caminho, ...(item.caminhosRelacionados ?? [])].some(
                (c) => c === caminhoAtual
              )}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
