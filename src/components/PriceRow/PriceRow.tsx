import { formatarMoeda } from '../../utils/formatacao';
import './PriceRow.css';

export function PriceRow({
  label,
  value,
  total = false,
}: {
  label: string;
  value: number;
  total?: boolean;
}) {
  return (
    <div className={`price-row${total ? ' price-row--total' : ''}`}>
      <span>{label}</span>
      <strong>{formatarMoeda(value)}</strong>
    </div>
  );
}
