import { Plane } from 'lucide-react';
import './Logo.css';

export interface LogoProps {
  variante?: 'completa' | 'compacta';
  imagem?: string;
  nome?: string;
  descricao?: string;
}
export function Logo({
  variante = 'completa',
  imagem,
  nome = 'Roamly',
  descricao,
}: Readonly<LogoProps>) {
  return (
    <div className="logo" role="img" aria-label={nome}>
      {imagem && variante === 'completa' ? (
        <img className="logo__imagem" src={imagem} alt="" />
      ) : (
        <>
          <span className="logo__icone">
            <Plane aria-hidden />
          </span>
          {variante === 'completa' && (
            <span className="logo__texto">
              <strong>{nome}</strong>
              {descricao && (
                <small className="logo__descricao">{descricao}</small>
              )}
            </span>
          )}
        </>
      )}
    </div>
  );
}
