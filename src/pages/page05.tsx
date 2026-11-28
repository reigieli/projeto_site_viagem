// Passagens.tsx
//Arquivos de estilo já existentes no projeto
import React, { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';

//Formato de cada voo da lista
interface Flight {
  id: string;
  airline: string;
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
  price: number;
}
//Voos encontrados para exibição e filtragem
const FLIGHTS: Flight[] = [
  {

    id: 'gru-ktm-1',
    airline: 'Qatar Airways',
    origin: 'GRU',
    destination: 'KTM',
    departure: '01:15',
    arrival: '14:40 +1',
    price: 5490,
  },
  {
    id: 'gru-ktm-2',
    airline: 'Emirates',
    origin: 'GRU',
    destination: 'KTM',
    departure: '21:30',
    arrival: '11:20 +2',
    price: 5890,
  },
];

    id: 'qatar',
    code: 'QA',
    airline: 'Qatar Airways',
    stops: 1,
    stopCity: 'Doha',
    duration: '18h 45m',
    departure: '14:30 GRU',
    arrival: '19:15 KTM (+1d)',
    price: 5200,
  },
  {
    id: 'emirates',
    code: 'AE',
    airline: 'Emirates',
    stops: 1,
    stopCity: 'Dubai',
    duration: '20h 15m',
    departure: '01:25 GRU',
    arrival: '08:40 KTM (+1d)',
    price: 4950,
  },
  {
    id: 'turkish',
    code: 'TR',
    airline: 'Turkish Airlines',
    stops: 1,
    stopCity: 'Istambul',
    duration: '22h 35m',
    departure: '22:40 GRU',
    arrival: '06:15 KTM (+1d)',
    price: 4600,
  },


const AIRLINES = FLIGHTS.map((f) => f.airline);
const brl = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

//Funções recebidas do App.tsx para navegação e seleção
interface Props {
  onMudarTela?: (tela: number) => void;
  onSelectFlight?: (flight: Flight) => void;
}
//Renderiza a tela 5 de Pesquisa de Passagens Aéreas
export function Buscadepassagens({ onMudarTela, onSelectFlight }: Props) 
  const [selectedId, setSelectedId] = useState<string>(FLIGHTS[0]?.id ?? '');

export default function FlightSearchScreen({
  onPrev,
  onNext,
  onNavigate,
  onSelectFlight,
}: Props) {
  const [maxPrice, setMaxPrice] = useState(6000);
  const [direct, setDirect] = useState(true);
  const [oneStop, setOneStop] = useState(true);
  const [twoPlus, setTwoPlus] = useState(false);
  const [airlines, setAirlines] = useState<string[]>(AIRLINES);

  const escolherVoo = (flight: Flight) => {
    setSelectedId(flight.id);
    onSelectFlight?.(flight);
  };

  return (
    <div className="container">
      <div className="passeios-header">
        <div>
          <h2>5. Pesquisa de Voos</h2>
          <p>Escolha a opção de voo para o seu roteiro.</p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onMudarTela?.(6)}
        >
          Comparar Voos &gt;
        </button>
      </div>

      <div className="passeios-lista">
        {FLIGHTS.map((flight) => {
          const isSelected = selectedId === flight.id;
          return (
            <article key={flight.id} className="passeio-card">
              <div>
                <h3>
                  {flight.airline} ({flight.origin} → {flight.destination})
                </h3>
                <p>
                  Saída: {flight.departure} • Chegada: {flight.arrival}
                </p>
              </div>
              <div>
                <p>{brl(flight.price)}</p>
  const toggleAirline = (name: string) =>
    setAirlines((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );

  const results = useMemo(
    () =>
      FLIGHTS.filter((f) => {
        const stopsOk =
          (f.stops === 0 && direct) ||
          (f.stops === 1 && oneStop) ||
          (f.stops >= 2 && twoPlus);
        return f.price <= maxPrice && stopsOk && airlines.includes(f.airline);
      }),
    [maxPrice, direct, oneStop, twoPlus, airlines]
  );

  const checkbox = 'h-4 w-4 rounded border-slate-300 accent-teal-600';

  return (
    <AppLayout
      currentStep={5}
      title="Pesquisa de Voos"
      onPrev={onPrev}
      onNext={onNext}
      onNavigate={onNavigate}
    >
      <h2 className="text-xl font-bold">5. Pesquisa de Passagens Aéreas</h2>
      <p className="text-xs text-slate-500">
        Voos encontrados para: <b>São Paulo (GRU) ➔ Kathmandu (KTM)</b>
      </p>

      <div className="mt-4 flex gap-4">
        <aside className="h-fit w-64 shrink-0 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 font-semibold">
              <Filter className="h-3.5 w-3.5" /> Filtros
            </span>
            <button onClick={clear} className="font-semibold text-teal-700">
              Limpar
            </button>
          </div>
          <hr className="my-3" />

          <label className="text-xs font-medium">
            Preço Máximo: {brl(maxPrice)}
          </label>
          <input
            type="range"
            min={2000}
            max={8000}
            step={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-2 w-full accent-teal-600"
          />

          <p className="mt-4 text-xs font-medium">Paradas / Escalas</p>
          <div className="mt-2 space-y-2 text-xs">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className={checkbox}
                checked={direct}
                onChange={() => setDirect(!direct)}
              />{' '}
              Voos Diretos
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className={checkbox}
                checked={oneStop}
                onChange={() => setOneStop(!oneStop)}
              />{' '}
              1 Parada
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className={checkbox}
                checked={twoPlus}
                onChange={() => setTwoPlus(!twoPlus)}
              />{' '}
              2+ Paradas
            </label>
          </div>

          <p className="mt-4 text-xs font-medium">Companhias Aéreas</p>
          <div className="mt-2 space-y-2 text-xs">
            {AIRLINES.map((name) => (
              <label key={name} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className={checkbox}
                  checked={airlines.includes(name)}
                  onChange={() => toggleAirline(name)}
                />
                {name}
              </label>
            ))}
          </div>
        </aside>

        <div className="flex-1 space-y-3">
          {results.map((f) => (
            <article
              key={f.id}
              className="flex items-center rounded-2xl border border-slate-200 bg-white px-5 py-4"
            >
              <div className="flex w-1/3 items-center gap-3">
                <span className="w-8 text-lg font-semibold text-slate-600">
                  {f.code}
                </span>
                <div>
                  <p className="text-sm font-bold">{f.airline}</p>
                  <p className="text-xs text-slate-500">
                    {f.stops} parada ({f.stopCity}) • {f.duration}
                  </p>
                </div>
              </div>
              <div className="flex-1 text-center">
                <p className="text-sm font-bold">
                  {f.departure} ➔ {f.arrival}
                </p>
                <p className="text-xs text-teal-700">
                  Bagagem de mão + despachada inclusa
                </p>
              </div>
              <div className="w-32 text-right">
                <p className="text-lg font-bold text-teal-800">
                  {brl(f.price)}
                </p>
                <button
                  type="button"
                  className={`btn ${isSelected ? 'btn-success' : 'btn-secondary'}`}
                  onClick={() => escolherVoo(flight)}
                >
                  {isSelected ? 'Selecionado' : 'Selecionar Voo'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );


export { FlightSearchScreen as Page 05};