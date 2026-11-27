import {
  House,
  MapPin,
  SlidersHorizontal,
  Compass,
  Plane,
  ArrowLeftRight,
  Hotel,
  Ticket,
  ClipboardList,
  Users,
  CreditCard,
  CircleCheck,
  CalendarDays,
  Wallet,
  Luggage,
  UserRound,
} from 'lucide-react';

import type { GrupoMenu } from '../types/navegacao.types';

export const paths = {
  home: '/',
  trip: '/trip',
  preferences: '/preferences',
  destinations: '/destinations',
  flights: '/flights',
  compare: '/flights/compare',
  hotels: '/hotels',
  tours: '/tours',
  summary: '/booking/summary',
  passengers: '/booking/passengers',
  payment: '/booking/payment',
  confirmation: '/booking/confirmation',
  itinerary: '/itinerary',
  finance: '/finance',
  checklist: '/checklist',
  account: '/account',
} as const;

export const GRUPOS_NAVEGACAO: GrupoMenu[] = [
  {
    id: 'planning',
    titulo: 'Planejamento',
    itens: [
      { id: 'home', rotulo: 'Início', caminho: paths.home, icone: House },
      {
        id: 'trip',
        rotulo: 'Dados da viagem',
        caminho: paths.trip,
        icone: MapPin,
      },
      {
        id: 'preferences',
        rotulo: 'Preferências',
        caminho: paths.preferences,
        icone: SlidersHorizontal,
      },
      {
        id: 'destinations',
        rotulo: 'Sugestões de destinos',
        caminho: paths.destinations,
        icone: Compass,
      },
    ],
  },
  {
    id: 'search',
    titulo: 'Pesquisa e seleção',
    itens: [
      {
        id: 'flights',
        rotulo: 'Pesquisa de voos',
        caminho: paths.flights,
        icone: Plane,
      },
      {
        id: 'compare',
        rotulo: 'Comparar voos',
        caminho: paths.compare,
        icone: ArrowLeftRight,
      },
      {
        id: 'hotels',
        rotulo: 'Hospedagem',
        caminho: paths.hotels,
        icone: Hotel,
      },
      {
        id: 'tours',
        rotulo: 'Passeios & tours',
        caminho: paths.tours,
        icone: Ticket,
      },
    ],
  },
  {
    id: 'booking',
    titulo: 'Reserva',
    itens: [
      {
        id: 'summary',
        rotulo: 'Resumo da reserva',
        caminho: paths.summary,
        icone: ClipboardList,
      },
      {
        id: 'passengers',
        rotulo: 'Passageiros',
        caminho: paths.passengers,
        icone: Users,
      },
      {
        id: 'payment',
        rotulo: 'Pagamento',
        caminho: paths.payment,
        icone: CreditCard,
      },
      {
        id: 'confirmation',
        rotulo: 'Confirmação',
        caminho: paths.confirmation,
        icone: CircleCheck,
      },
    ],
  },
  {
    id: 'management',
    titulo: 'Minha viagem',
    itens: [
      {
        id: 'itinerary',
        rotulo: 'Meu roteiro',
        caminho: paths.itinerary,
        icone: CalendarDays,
      },
      {
        id: 'finance',
        rotulo: 'Controle financeiro',
        caminho: paths.finance,
        icone: Wallet,
      },
      {
        id: 'checklist',
        rotulo: 'Checklist da mala',
        caminho: paths.checklist,
        icone: Luggage,
      },
      {
        id: 'account',
        rotulo: 'Minha conta',
        caminho: paths.account,
        icone: UserRound,
      },
    ],
  },
];
export const navigationItems = GRUPOS_NAVEGACAO.flatMap((g) => g.itens);
