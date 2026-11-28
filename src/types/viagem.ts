export type EstiloViagem = 'beach' | 'snow' | 'urban' | 'adventure';

export interface Destino {
  id: string;
  city: string;
  country: string;
  airport: string;
  image: string;
  price: number;
  description: string;
  style: EstiloViagem;
  match: number;
}

export interface Voo {
  id: string;
  airline: string;
  code: string;
  connection: string;
  duration: string;
  departure: string;
  arrival: string;
  price: number;
  bags: number;
  rating: number;
}

export interface Hotel {
  id: string;
  name: string;
  rating: number;
  nightly: number;
}
export interface Passeio {
  id: string;
  title: string;
  duration: string;
  description: string;
  price: number;
}
export interface Passageiro {
  name: string;
  passport: string;
  birth: string;
  email: string;
}
export interface Viagem {
  origin: string;
  destination: string;
  departure: string;
  returnDate: string;
  passengers: number;
  purpose: string;
  style: EstiloViagem;
}
export interface Despesa {
  id: string;
  description: string;
  value: number;
}
export interface Perfil {
  name: string;
  email: string;
  phone: string;
}
export type MetodoPagamento = 'card' | 'pix' | 'boleto';
