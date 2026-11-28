import type { Destino } from '../types/viagem';
import type { Catalogo } from '../services/contratos';

const FATORES_VOOS_DEMO = [1, 0.95, 0.88];
const NOMES_HOTEIS_DEMO = ['Hotel Boutique', 'Eco Hotel', 'Hotel Premium'];
const TITULOS_PASSEIOS_DEMO = [
  'Passeio panorâmico',
  'Tour cultural',
  'Experiência na natureza',
];

/** Mantém as ofertas de Nepal e gera ofertas ilustrativas para outros destinos. */
export function gerarOfertasDemo(
  destination: Destino,
  catalog: Catalogo
): Pick<Catalogo, 'flights' | 'hotels' | 'tours'> {
  if (destination.id === 'nepal') {
    return {
      flights: catalog.flights,
      hotels: catalog.hotels,
      tours: catalog.tours,
    };
  }

  return {
    flights: catalog.flights.map((flight, index) => ({
      ...flight,
      airline: `Companhia ${index + 1} (demo)`,
      code: `0${index + 1}`,
      connection: 'Conexão ilustrativa',
      duration: 'A confirmar',
      departure: 'A confirmar',
      arrival: 'A confirmar',
      price: Math.round(destination.price * (FATORES_VOOS_DEMO[index] ?? 1)),
    })),
    hotels: catalog.hotels.map((hotel, index) => ({
      ...hotel,
      name: `${destination.city} — ${NOMES_HOTEIS_DEMO[index] ?? hotel.name} (demo)`,
    })),
    tours: catalog.tours.map((tour, index) => ({
      ...tour,
      title: TITULOS_PASSEIOS_DEMO[index] ?? tour.title,
      description: `Experiência ilustrativa em ${destination.city}.`,
    })),
  };
}
