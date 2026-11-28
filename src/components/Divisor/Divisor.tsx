import './Divisor.css';

export interface DivisorProps {
  texto?: string;
  decorativo?: boolean;
}

export function Divisor({ texto, decorativo = false }: Readonly<DivisorProps>) {
  return (
    <div
      className="divisor"
      role={decorativo ? undefined : 'separator'}
      aria-hidden={decorativo || undefined}
    >
      {texto && <span className="divisor__texto">{texto}</span>}
    </div>
  );
}
