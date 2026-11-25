import type { DestinoCard } from '../../types/destinoCard';
import { formatCurrencyBRL } from '../../utils/masks';
import '../Card/Card.css';
import '../Hero/Hero.css';

type DestinationCardProps = DestinoCard & {
  onSelect?: (destino: DestinoCard) => void;
};

/* Card de destino (estilos .card--destination em Hero.css). */
export function DestinationCard({ onSelect, ...destino }: DestinationCardProps) {
  const { titulo, categoria, preco, imageURL } = destino;

  return (
    <article
      className="card card--destination card-interactive"
      onClick={() => onSelect?.(destino)}
    >
      <span className="badge card__tag">{categoria}</span>
      <img className="card__image" src={imageURL} alt={titulo} loading="lazy" />
      <div className="card__body">
        <h3 className="card__title">{titulo}</h3>
        <p className="card__price">
          <span>A partir de</span>
          <strong>{formatCurrencyBRL(preco)}</strong>
        </p>
      </div>
    </article>
  );
}
