import { Card } from '../../../components/Card/Card';
import { formatarMoeda } from '../../../utils/formatacao';

interface ResumoFinanceiroProps {
  pacote: number;
  gastosExtras: number;
  total: number;
}

export function ResumoFinanceiro({
  pacote,
  gastosExtras,
  total,
}: ResumoFinanceiroProps) {

  const resumos = [
    { titulo: 'Pacote de viagem', valor: pacote },
    { titulo: 'Gastos extras', valor: gastosExtras },
    { titulo: 'Total estimado', valor: total },
  ];

  return (
    <div className="finance-page__grid">
      {resumos.map(({ titulo, valor }) => (
        <Card key={titulo}>
          <h3>{titulo}</h3>

          <strong className="finance-page__number">
            {formatarMoeda(valor)}
          </strong>
        </Card>
      ))}
    </div>
  );
}