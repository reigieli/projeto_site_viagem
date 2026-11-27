import { NavLink } from 'react-router-dom';
import type { ItemMenu } from '../../../types/navegacao.types';
import './ItemNav.css';

export interface ItemNavProps {
  item: ItemMenu;
  ativo: boolean;
  recolhido: boolean;
}
export function ItemNav({ item, ativo, recolhido }: Readonly<ItemNavProps>) {
  const Icone = item.icone;
  return (
    <NavLink
      to={item.caminho}
      end
      aria-label={item.rotulo}
      title={recolhido ? item.rotulo : undefined}
      className={({ isActive }) =>
        `item-navegacao${isActive || ativo ? ' item-navegacao--ativo' : ''}${recolhido ? ' item-navegacao--recolhido' : ''}`
      }
    >
      <Icone className="item-navegacao__icone" aria-hidden />
      {!recolhido && <span>{item.rotulo}</span>}
    </NavLink>
  );
}
