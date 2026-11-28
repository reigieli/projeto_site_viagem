import type { ReactNode } from 'react';
import type { Recurso } from '../../hooks/useResource';
import { Alert } from '../Alert/Alert';
import { Button } from '../Button/Button';
import { Carregamento } from '../Carregamento/Carregamento';
import './ResourceView.css';

/** Centraliza somente a apresentação dos estados assíncronos. */
export function ResourceView<T>({
  resource,
  render,
}: Readonly<{ resource: Recurso<T>; render: (data: T) => ReactNode }>) {
  if (resource.loading)
    return <Carregamento mensagem="Carregando dados…" centralizado />;
  if (resource.data === null)
    return (
      <Alert variante="perigo">
        {resource.error ?? 'Dados indisponíveis.'}
        <Button variante="contorno" tamanho="pequeno" onClick={resource.reload}>
          Tentar novamente
        </Button>
      </Alert>
    );
  return (
    <div className="resource-view" aria-busy={resource.pending}>
      {resource.error && <Alert variante="perigo">{resource.error}</Alert>}
      {resource.pending && (
        <Carregamento
          mensagem="Salvando…"
          tamanho="pequeno"
          orientacao="horizontal"
        />
      )}
      <div className="resource-view__content" inert={resource.pending}>
        {render(resource.data)}
      </div>
    </div>
  );
}
