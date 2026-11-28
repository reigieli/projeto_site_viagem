import { navigationItems } from '../constants/navegacao';
export function obterMetadadosPagina(pathname: string) {
  const index = navigationItems.findIndex((item) => item.caminho === pathname);
  return {
    titulo: index < 0 ? 'Página não encontrada' : navigationItems[index].rotulo,
    descricao:
      index < 0
        ? 'Roamly'
        : `Tela ${index + 1} de ${navigationItems.length} · MVP acadêmico`,
  };
}
