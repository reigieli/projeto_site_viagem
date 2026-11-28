import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SideBar } from '../../components/layout/Sidebar/Sidebar';
import { Header } from '../../components/layout/Header/Header';
import { Button } from '../../components/Button/Button';
import { GRUPOS_NAVEGACAO, itensNavegacao } from '../../constantes/navegacao';
import { obterMetadadosPagina } from '../../utils/obterMetadadosPagina';
import { servicos } from '../../services';
import { useEffect, useState } from 'react';
import type { Perfil } from '../../types/viagem';
import './LayoutPrincipal.css';
/** Dados compartilhados somente entre o layout e a página de conta. */
export interface LayoutOutletContext {
  atualizarPerfil: (perfil: Perfil) => void;
}

export function LayoutPrincipal() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const meta = obterMetadadosPagina(pathname);
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  useEffect(() => {
    let ativo = true;
    servicos.perfil
      .obter()
      .then((dados) => {
        if (ativo) setPerfil(dados);
      })
      .catch(() => {
        // O cabeçalho continua disponível mesmo sem o perfil.
      });
    return () => {
      ativo = false;
    };
  }, []);
  const outletContext: LayoutOutletContext = { atualizarPerfil: setPerfil };
  const index = itensNavegacao.findIndex((i) => i.caminho === pathname);
  function move(path: string) {
    navigate(path);
  }
  return (
    <div className="layout-principal">
      <a
        className="layout-principal__atalho"
        href="#conteudo-principal"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('conteudo-principal')?.focus();
        }}
      >
        Ir para o conteúdo principal
      </a>
      <SideBar
        grupos={GRUPOS_NAVEGACAO}
        caminhoAtual={pathname}
        versao="MVP 1.0"
      />
      <div className="layout-principal__estrutura">
        <Header
          titulo={meta.titulo}
          subtitulo={meta.descricao}
          perfil={perfil ? { nome: perfil.name } : undefined}
        />
        <main
          id="conteudo-principal"
          tabIndex={-1}
          className="layout-principal__pagina"
        >
          <Outlet key={pathname} context={outletContext} />
          {index >= 0 && (
            <nav
              className="layout-principal__navegacao"
              aria-label="Navegação de demonstração"
            >
              <Button
                variante="contorno"
                disabled={index === 0}
                onClick={() => move(itensNavegacao[index - 1].caminho)}
              >
                ← Anterior
              </Button>
              <Button
                variante="secundario"
                disabled={index === itensNavegacao.length - 1}
                onClick={() => move(itensNavegacao[index + 1].caminho)}
              >
                Próxima →
              </Button>
            </nav>
          )}
        </main>
      </div>
    </div>
  );
}
