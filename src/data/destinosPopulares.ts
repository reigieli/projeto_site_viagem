import type { DestinoCard } from '../types/destinoCard';

/*
  Destinos em alta da Home. Dados fixos por enquanto (vindos do protótipo tela1.html).
  Quando o GET /destinations (ENDPOINTS.destinations) estiver pronto, troque por uma chamada de serviço.
*/
export const destinosPopulares: DestinoCard[] = [
  { id: 'nepal', titulo: 'Kathmandu, Nepal', categoria: 'Aventura', preco: 5200, imageURL: '/imagens/destinos/nepal.webp' },
  { id: 'paris', titulo: 'Paris, França', categoria: 'Romântico', preco: 12100, imageURL: '/imagens/destinos/paris.webp' },
  { id: 'bariloche', titulo: 'Bariloche, Argentina', categoria: 'Neve', preco: 3400, imageURL: '/imagens/destinos/bariloche.webp' },
  { id: 'phuket', titulo: 'Phuket, Tailândia', categoria: 'Praia', preco: 4800, imageURL: '/imagens/destinos/phuket.webp' },
];
