import { Plane } from 'lucide-react';
import './Logotipo.css';

export interface LogoProps {
  variante?: 'completa' | 'compacta';
  imagem?: string;
  nome?: string;
}
export function Logo({
  variante = 'completa',
  imagem,
  nome = 'Roamly',
}: Readonly<LogoProps>) {
  return (
    <div className="logotipo" role="img" aria-label={nome}>
      {imagem && variante === 'completa' ? (
        <img className="logotipo__imagem" src={imagem} alt="" />
      ) : (
        <>
          <span className="logotipo__icone">
            <Plane aria-hidden />
          </span>
          {variante === 'completa' && <strong>{nome}</strong>}
        </>
      )}
    </div>
  );
}
