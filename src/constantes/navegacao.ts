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
  LayoutGrid,
} from 'lucide-react';
import type { GrupoMenu } from '../types/navegacao.tipos';
export const caminhos = {
  inicio: '/',
  viagem: '/trip',
  preferencias: '/preferences',
  destinos: '/destinations',
  voos: '/flights',
  compararVoos: '/flights/compare',
  hoteis: '/hotels',
  passeios: '/tours',
  resumoReserva: '/booking/summary',
  passageiros: '/booking/passengers',
  pagamento: '/booking/payment',
  confirmacao: '/booking/confirmation',
  roteiro: '/itinerary',
  financeiro: '/finance',
  listaBagagem: '/checklist',
  minhaConta: '/account',
  sistemaDesign: '/design-system',
} as const;
export const GRUPOS_NAVEGACAO: GrupoMenu[] = [
  {
    id: 'planning',
    titulo: 'Planejamento',
    itens: [
      { id: 'home', rotulo: 'Início', caminho: caminhos.inicio, icone: House },
      {
        id: 'trip',
        rotulo: 'Dados da viagem',
        caminho: caminhos.viagem,
        icone: MapPin,
      },
      {
        id: 'preferences',
        rotulo: 'Preferências',
        caminho: caminhos.preferencias,
        icone: SlidersHorizontal,
      },
      {
        id: 'destinations',
        rotulo: 'Sugestões de destinos',
        caminho: caminhos.destinos,
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
        caminho: caminhos.voos,
        icone: Plane,
      },
      {
        id: 'compare',
        rotulo: 'Comparar voos',
        caminho: caminhos.compararVoos,
        icone: ArrowLeftRight,
      },
      {
        id: 'hotels',
        rotulo: 'Hospedagem',
        caminho: caminhos.hoteis,
        icone: Hotel,
      },
      {
        id: 'tours',
        rotulo: 'Passeios & tours',
        caminho: caminhos.passeios,
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
        caminho: caminhos.resumoReserva,
        icone: ClipboardList,
      },
      {
        id: 'passengers',
        rotulo: 'Passageiros',
        caminho: caminhos.passageiros,
        icone: Users,
      },
      {
        id: 'payment',
        rotulo: 'Pagamento',
        caminho: caminhos.pagamento,
        icone: CreditCard,
      },
      {
        id: 'confirmation',
        rotulo: 'Confirmação',
        caminho: caminhos.confirmacao,
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
        caminho: caminhos.roteiro,
        icone: CalendarDays,
      },
      {
        id: 'finance',
        rotulo: 'Controle financeiro',
        caminho: caminhos.financeiro,
        icone: Wallet,
      },
      {
        id: 'checklist',
        rotulo: 'Checklist da mala',
        caminho: caminhos.listaBagagem,
        icone: Luggage,
      },
      {
        id: 'account',
        rotulo: 'Minha conta',
        caminho: caminhos.minhaConta,
        icone: UserRound,
      },
    ],
  },
  {
    id: 'documentation',
    titulo: 'Documentação',
    itens: [
      {
        id: 'design-system',
        rotulo: 'Design System',
        caminho: caminhos.sistemaDesign,
        icone: LayoutGrid,
      },
    ],
  },
];
export const itensNavegacao = GRUPOS_NAVEGACAO.filter(
  (g) => g.id !== 'documentation'
).flatMap((g) => g.itens);
