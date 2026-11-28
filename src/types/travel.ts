export type TravelStyle = 'beach' | 'snow' | 'urban' | 'adventure';

export interface Destination {
  id: string;
  city: string;
  country: string;
  airport: string;
  image: string;
  price: number;
  description: string;
  style: TravelStyle;
  match: number;
}

export interface Flight {
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
export interface Tour {
  id: string;
  title: string;
  duration: string;
  description: string;
  price: number;
}
export interface Passenger {
  name: string;
  passport: string;
  birth: string;
  email: string;
}
export interface Trip {
  origin: string;
  destination: string;
  departure: string;
  returnDate: string;
  passengers: number;
  purpose: string;
  style: TravelStyle;
}
export interface Expense {
  id: string;
  description: string;
  value: number;
}
export interface ChecklistItem {
  id: string;
  label: string;
  done: boolean;
}
export interface Profile {
  name: string;
  email: string;
  phone: string;
}
export type PaymentMethod = 'card' | 'pix' | 'boleto';
