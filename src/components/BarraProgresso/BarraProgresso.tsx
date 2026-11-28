import './BarraProgresso.css';

export type VarianteProgresso = 'primaria' | 'sucesso' | 'atencao' | 'perigo';
export interface BarraProgressoProps {
  valor: number;
  maximo?: number;
  rotulo: string;
  variante?: VarianteProgresso;
  tamanho?: 'pequeno' | 'medio' | 'grande';
  exibirPercentual?: boolean;
}

/** Componente reutilizável de apresentação. */
export function BarraProgresso({
  valor,
  maximo = 100,
  rotulo,
  variante = 'primaria',
  tamanho = 'medio',
  exibirPercentual = true,
}: Readonly<BarraProgressoProps>) {
  const limite = Number.isFinite(maximo) && maximo > 0 ? maximo : 100;
  const atual = Number.isFinite(valor)
    ? Math.min(limite, Math.max(0, valor))
    : 0;
  return (
    <div
      className={`barra-progresso barra-progresso--${variante} barra-progresso--${tamanho}`}
    >
      <div className="barra-progresso__cabecalho">
        <span aria-hidden="true">{rotulo}</span>
        {exibirPercentual && (
          <span aria-hidden="true">{Math.round((atual / limite) * 100)}%</span>
        )}
      </div>
      <progress
        aria-label={rotulo}
        className="barra-progresso__entrada"
        value={atual}
        max={limite}
      />
    </div>
  );
}
