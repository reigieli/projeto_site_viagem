import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../Button/Button';
import './PageActions.css';

export interface PageActionsProps {
  back?: string;
  next?: string;
  label?: string;
  children?: ReactNode;
}

/** Apresenta as ações de navegação entre páginas. */
export function PageActions({
  back,
  next,
  label = 'Continuar',
  children,
}: Readonly<PageActionsProps>) {
  const navigate = useNavigate();

  return (
    <div className="page-actions">
      {back && (
        <Button variante="contorno" onClick={() => navigate(back)}>
          Voltar
        </Button>
      )}

      <div className="page-actions__next">
        {children}

        {next && (
          <Button onClick={() => navigate(next)}>
            {label}
            <ArrowRight size={16} />
          </Button>
        )}
      </div>
    </div>
  );
}
