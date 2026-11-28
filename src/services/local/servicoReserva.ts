import {
  destinations,
  flights,
  hotels,
  tours,
  initialTrip,
  initialBooking,
} from '../../mocks/travel.mock';
import type {
  RascunhoReserva,
  ServicoReserva,
  ResumoReserva,
  Catalogo,
} from '../contratos';
import { gerarOfertasDemo } from '../../utils/gerarOfertasDemo';
import { calcularCustos } from '../../utils/calcularCustos';
import { contarNoites } from '../../utils/contarNoites';
import { criarRegistro, chavesArmazenamento } from './armazenamento';
import type { PortaArmazenamento } from './armazenamento';
import { ehReserva, ehCatalogo } from './validacao';

/** Implementa as regras da reserva simulada fora do React. */
export function criarServicoReserva(
  storage: () => PortaArmazenamento
): ServicoReserva {
  const catalog = criarRegistro<Catalogo>(
    storage,
    chavesArmazenamento.catalogo,
    () => ({ destinations, flights, hotels, tours }),
    ehCatalogo
  );
  const booking = criarRegistro<RascunhoReserva>(
    storage,
    chavesArmazenamento.reserva,
    () => ({
      trip: initialTrip,
      ...initialBooking,
      passengers: [],
      confirmed: false,
    }),
    ehReserva
  );

  function view(draft: RascunhoReserva, data: Catalogo): ResumoReserva {
    const { trip, payment, confirmed } = draft;
    const destination = data.destinations.find(
      (item) => item.id === trip.destination
    );
    if (!destination) throw new Error('Destino da reserva indisponível.');
    const offers = gerarOfertasDemo(destination, data);
    const flight = offers.flights.find((item) => item.id === draft.flightId);
    const hotel = offers.hotels.find((item) => item.id === draft.hotelId);
    if (
      !flight ||
      !hotel ||
      draft.tourIds.some((id) => !offers.tours.some((t) => t.id === id))
    )
      throw new Error('Oferta da reserva indisponível.');
    const selectedTours = offers.tours.filter((item) =>
      draft.tourIds.includes(item.id)
    );
    const nights = contarNoites(trip.departure, trip.returnDate);
    const pricing = calcularCustos({
      flight,
      hotel,
      tours: selectedTours,
      nights,
      passengers: trip.passengers,
      payment,
    });
    return { destination, confirmed, payable: pricing.payable };
  }
  return {
    async obter() {
      return view(booking.ler(), catalog.ler());
    },
  };
}
