import type { RascunhoReserva, Catalogo, DadosFinanceiros } from '../contratos';
import type {
  Perfil,
  Passageiro,
  Viagem,
  MetodoPagamento,
} from '../../types/viagem';

const object = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);
const strings = (v: Record<string, unknown>, keys: string[]) =>
  keys.every((key) => typeof v[key] === 'string');
const finite = (v: unknown): v is number =>
  typeof v === 'number' && Number.isFinite(v) && v >= 0;
const numbers = (v: Record<string, unknown>, keys: string[]) =>
  keys.every((key) => finite(v[key]));
const array = (v: unknown, predicate: (item: unknown) => boolean) =>
  Array.isArray(v) && v.every(predicate);
const ehPagamento = (v: unknown): v is MetodoPagamento =>
  v === 'card' || v === 'pix' || v === 'boleto';
const ehEstilo = (v: unknown) =>
  v === 'beach' || v === 'snow' || v === 'urban' || v === 'adventure';
const ehViagem = (v: unknown): v is Viagem =>
  object(v) &&
  strings(v, ['origin', 'destination', 'departure', 'returnDate', 'purpose']) &&
  ehEstilo(v.style) &&
  typeof v.passengers === 'number' &&
  Number.isInteger(v.passengers) &&
  v.passengers >= 1 &&
  v.passengers <= 6;
const ehPassageiro = (v: unknown): v is Passageiro =>
  object(v) && strings(v, ['name', 'passport', 'birth', 'email']);
export const ehReserva = (v: unknown): v is RascunhoReserva =>
  object(v) &&
  ehViagem(v.trip) &&
  strings(v, ['flightId', 'hotelId']) &&
  array(v.tourIds, (item) => typeof item === 'string') &&
  array(v.passengers, ehPassageiro) &&
  ehPagamento(v.payment) &&
  typeof v.confirmed === 'boolean';
export const ehPerfil = (v: unknown): v is Perfil =>
  object(v) && strings(v, ['name', 'email', 'phone']);
export const ehFinanceiro = (v: unknown): v is DadosFinanceiros =>
  object(v) &&
  finite(v.budget) &&
  v.budget >= 1 &&
  array(
    v.expenses,
    (item) =>
      object(item) &&
      strings(item, ['id', 'description']) &&
      finite(item.value) &&
      item.value > 0
  );
export function ehCatalogo(v: unknown): v is Catalogo {
  return (
    object(v) &&
    Array.isArray(v.destinations) &&
    v.destinations.length > 0 &&
    array(
      v.destinations,
      (d) =>
        object(d) &&
        strings(d, [
          'id',
          'city',
          'country',
          'airport',
          'image',
          'description',
        ]) &&
        numbers(d, ['price', 'match']) &&
        ehEstilo(d.style)
    ) &&
    Array.isArray(v.flights) &&
    v.flights.length > 0 &&
    array(
      v.flights,
      (f) =>
        object(f) &&
        strings(f, [
          'id',
          'airline',
          'code',
          'connection',
          'duration',
          'departure',
          'arrival',
        ]) &&
        numbers(f, ['price', 'bags', 'rating'])
    ) &&
    Array.isArray(v.hotels) &&
    v.hotels.length > 0 &&
    array(
      v.hotels,
      (h) =>
        object(h) &&
        strings(h, ['id', 'name']) &&
        numbers(h, ['rating', 'nightly'])
    ) &&
    array(
      v.tours,
      (t) =>
        object(t) &&
        strings(t, ['id', 'title', 'duration', 'description']) &&
        numbers(t, ['price'])
    )
  );
}
