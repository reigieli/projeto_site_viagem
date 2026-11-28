import './DestinationCard.css';
import type { Destino } from '../../types/viagem';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Etiqueta } from '../Etiqueta/Etiqueta';
import { obterUrlImagem, formatarMoeda } from '../../utils/formatacao';

/** Propriedades do cartão de destino. */
export interface DestinationCardProps {
  destination: Destino;
  onSelect: () => void;
  recommended?: boolean;
  selected?: boolean;
}

/** Apresenta as informações de um destino de viagem. */
export function DestinationCard({
  destination,
  onSelect,
  recommended = false,
  selected = false,
}: Readonly<DestinationCardProps>) {
  return (
    <Card
      variante={selected ? 'selecionado' : 'padrao'}
      semEspacamento
      className="destination-card"
    >
      <img
        className="destination-card__image"
        src={obterUrlImagem(destination.image)}
        alt={`${destination.city}, ${destination.country}`}
      />

      <div className="destination-card__body">
        <Etiqueta variante="sucesso">
          {recommended
            ? `${destination.match}% compatível (demo)`
            : destination.country}
        </Etiqueta>

        <h3 className="destination-card__title">
          {destination.city}, {destination.country}
        </h3>

        <p className="destination-card__description">
          {destination.description}
        </p>

        <div className="destination-card__footer">
          <div className="destination-card__pricing">
            <small className="destination-card__price-label">
              Estimativa por pessoa
            </small>

            <strong className="destination-card__price">
              {formatarMoeda(destination.price)}
            </strong>
          </div>

          <Button
            variante={selected ? 'contorno' : 'primario'}
            onClick={onSelect}
          >
            {selected ? 'Selecionado' : 'Selecionar'}
          </Button>
        </div>
      </div>
    </Card>
  );
}
