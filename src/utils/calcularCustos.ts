import { TAXA_POR_PASSAGEIRO, DESCONTO_PIX } from '../constantes/reserva';
import type { Voo, Hotel, Passeio, MetodoPagamento } from '../types/viagem';

interface ParametrosCalculoCustos {
  flight: Voo;
  hotel: Hotel;
  tours: Passeio[];
  nights: number;
  passengers: number;
  payment: MetodoPagamento;
}

/** Calcula os valores da reserva sem depender do React ou modificar os dados. */
export function calcularCustos({
  flight,
  hotel,
  tours,
  nights,
  passengers,
  payment,
}: ParametrosCalculoCustos) {
  const costs = {
    flights: flight.price * passengers,
    hotel: hotel.nightly * nights,
    tours: tours.reduce((sum, tour) => sum + tour.price, 0),
    fees: TAXA_POR_PASSAGEIRO * passengers,
  };
  const total = costs.flights + costs.hotel + costs.tours + costs.fees;
  const payable =
    payment === 'pix' ? Math.round(total * (100 - DESCONTO_PIX)) / 100 : total;

  return { costs, total, payable };
}
