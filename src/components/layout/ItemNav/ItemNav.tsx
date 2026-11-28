import { NavLink } from 'react-router-dom';
import type { ItemMenu } from '../../../tipos/navegacao.tipos';
import './ItemNav.css';

export interface ItemNavProps {
  item: ItemMenu;
  ativo: boolean;
}

/** Link semântico com destaque para a rota atual. */
export function ItemNav({ item, ativo }: Readonly<ItemNavProps>) {
  const Icone = item.icone;
  return (
    <NavLink
      to={item.caminho}
      end
      aria-label={item.rotulo}
      className={({ isActive }) =>
        `item-nav${isActive || ativo ? ' item-nav--ativo' : ''}`
      }
    >
      <Icone className="item-nav__icone" aria-hidden />
      <span>{item.rotulo}</span>
    </NavLink>
  );
}
