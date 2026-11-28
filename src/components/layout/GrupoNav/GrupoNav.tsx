import './GrupoNav.css';
import type { GrupoMenu } from '../../../tipos/navegacao.tipos';
import { ItemNav } from '../ItemNav/ItemNav';

export interface GrupoNavProps {
  grupo: GrupoMenu;
  caminhoAtual: string;
}

/** Agrupa links de uma etapa da viagem. */
export function GrupoNav({ grupo, caminhoAtual }: Readonly<GrupoNavProps>) {
  return (
    <section className="grupo-nav" aria-label={grupo.titulo}>
      <h2 className="grupo-nav__titulo">{grupo.titulo}</h2>
      <ul className="grupo-nav__lista">
        {grupo.itens.map((item) => (
          <li key={item.id}>
            <ItemNav
              item={item}
              ativo={[
                item.caminho,
                ...(item.caminhosRelacionados ?? []),
              ].includes(caminhoAtual)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
