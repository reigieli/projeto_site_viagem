import type { ReactNode } from 'react';
import './PageHeader.css';

type PageHeaderProps = {
  tag?: string;
  title: string;
  subtitle?: string;
  /** ação à direita do título (ex: botão "Editar") */
  actions?: ReactNode;
};

/* Cabeçalho padrão de página: selo + título + subtítulo (+ ações). */
export function PageHeader({ tag, title, subtitle, actions }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="page-header__text">
        {tag && <span className="badge badge-success">{tag}</span>}
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
      {actions && <div className="page-header__actions">{actions}</div>}
    </div>
  );
}
