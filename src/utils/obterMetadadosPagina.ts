import { itensNavegacao, caminhos } from '../constantes/navegacao';

/**
 * Obtém o título e a descrição da página com base na rota atual.
 *
 * Procura o `pathname` na lista de navegação para exibir o rótulo da tela
 * e sua posição na sequência do fluxo. Caso a rota não seja encontrada,
 * retorna metadados padrão de página inexistente.
 *
 * @param pathname - Caminho da URL atual (ex: `"/perfil"`).
 * @returns Objeto contendo `titulo` e `descricao` para o cabeçalho da página.
 */
export function obterMetadadosPagina(pathname: string) {
  if (pathname === caminhos.sistemaDesign)
    return {
      titulo: 'Design System',
      descricao: 'Documentação de componentes · Roamly',
    };
  const index = itensNavegacao.findIndex((item) => item.caminho === pathname);
  return {
    titulo: index < 0 ? 'Página não encontrada' : itensNavegacao[index].rotulo,
    descricao:
      index < 0
        ? 'Roamly'
        : `Tela ${index + 1} de ${itensNavegacao.length} · MVP acadêmico`,
  };
}
