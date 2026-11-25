// Passagens.tsx
import { useMemo, useState } from "react";
import { Filter } from "lucide-react";
import AppLayout from "./AppLayout";

interface Flight {
  id: string;
  code: string;
  airline: string;
  stops: number;
  stopCity: string;
  duration: string;
  departure: string;
  arrival: string;
  price: number;
}

const FLIGHTS: Flight[] = [
  { id: "qatar", code: "QA", airline: "Qatar Airways", stops: 1, stopCity: "Doha", duration: "18h 45m", departure: "14:30 GRU", arrival: "19:15 KTM (+1d)", price: 5200 },
  { id: "emirates", code: "AE", airline: "Emirates", stops: 1, stopCity: "Dubai", duration: "20h 15m", departure: "01:25 GRU", arrival: "08:40 KTM (+1d)", price: 4950 },
  { id: "turkish", code: "TR", airline: "Turkish Airlines", stops: 1, stopCity: "Istambul", duration: "22h 35m", departure: "22:40 GRU", arrival: "06:15 KTM (+1d)", price: 4600 },
];

const AIRLINES = FLIGHTS.map((f) => f.airline);
const brl = (v: number) => `R$ ${v.toLocaleString("pt-BR")}`;

interface Props {
  onPrev?: () => void;
  onNext?: () => void;
  onNavigate?: (step: number) => void;
  onSelectFlight?: (flight: Flight) => void;
}

export default function FlightSearchScreen({ onPrev, onNext, onNavigate, onSelectFlight }: Props) {
  const [maxPrice, setMaxPrice] = useState(6000);
  const [direct, setDirect] = useState(true);
  const [oneStop, setOneStop] = useState(true);
  const [twoPlus, setTwoPlus] = useState(false);
  const [airlines, setAirlines] = useState<string[]>(AIRLINES);

  const clear = () => {
    setMaxPrice(6000);
    setDirect(true);
    setOneStop(true);
    setTwoPlus(false);
    setAirlines(AIRLINES);
  };

  const toggleAirline = (name: string) =>
    setAirlines((prev) => (prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]));

  const results = useMemo(
    () =>
      FLIGHTS.filter((f) => {
        const stopsOk = (f.stops === 0 && direct) || (f.stops === 1 && oneStop) || (f.stops >= 2 && twoPlus);
        return f.price <= maxPrice && stopsOk && airlines.includes(f.airline);
      }),
    [maxPrice, direct, oneStop, twoPlus, airlines]
  );

  const checkbox = "h-4 w-4 rounded border-slate-300 accent-teal-600";

  return (
    <AppLayout currentStep={5} title="Pesquisa de Voos" onPrev={onPrev} onNext={onNext} onNavigate={onNavigate}>
      <h2 className="text-xl font-bold">5. Pesquisa de Passagens Aéreas</h2>
      <p className="text-xs text-slate-500">
        Voos encontrados para: <b>São Paulo (GRU) ➔ Kathmandu (KTM)</b>
      </p>

      <div className="mt-4 flex gap-4">
        <aside className="h-fit w-64 shrink-0 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 font-semibold"><Filter className="h-3.5 w-3.5" /> Filtros</span>
            <button onClick={clear} className="font-semibold text-teal-700">Limpar</button>
          </div>
          <hr className="my-3" />

          <label className="text-xs font-medium">Preço Máximo: {brl(maxPrice)}</label>
          <input
            type="range" min={2000} max={8000} step={100} value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-2 w-full accent-teal-600"
          />

          <p className="mt-4 text-xs font-medium">Paradas / Escalas</p>
          <div className="mt-2 space-y-2 text-xs">
            <label className="flex items-center gap-2"><input type="checkbox" className={checkbox} checked={direct} onChange={() => setDirect(!direct)} /> Voos Diretos</label>
            <label className="flex items-center gap-2"><input type="checkbox" className={checkbox} checked={oneStop} onChange={() => setOneStop(!oneStop)} /> 1 Parada</label>
            <label className="flex items-center gap-2"><input type="checkbox" className={checkbox} checked={twoPlus} onChange={() => setTwoPlus(!twoPlus)} /> 2+ Paradas</label>
          </div>

          <p className="mt-4 text-xs font-medium">Companhias Aéreas</p>
          <div className="mt-2 space-y-2 text-xs">
            {AIRLINES.map((name) => (
              <label key={name} className="flex items-center gap-2">
                <input type="checkbox" className={checkbox} checked={airlines.includes(name)} onChange={() => toggleAirline(name)} />
                {name}
              </label>
            ))}
          </div>
        </aside>

        <div className="flex-1 space-y-3">
          {results.map((f) => (
            <article key={f.id} className="flex items-center rounded-2xl border border-slate-200 bg-white px-5 py-4">
              <div className="flex w-1/3 items-center gap-3">
                <span className="w-8 text-lg font-semibold text-slate-600">{f.code}</span>
                <div>
                  <p className="text-sm font-bold">{f.airline}</p>
                  <p className="text-xs text-slate-500">
                    {f.stops} parada ({f.stopCity}) • {f.duration}
                  </p>
                </div>
              </div>
              <div className="flex-1 text-center">
                <p className="text-sm font-bold">{f.departure} ➔ {f.arrival}</p>
                <p className="text-xs text-teal-700">Bagagem de mão + despachada inclusa</p>
              </div>
              <div className="w-32 text-right">
                <p className="text-lg font-bold text-teal-800">{brl(f.price)}</p>
                <button
                  onClick={() => onSelectFlight?.(f)}
                  className="mt-1 rounded-lg bg-teal-600 px-5 py-1.5 text-xs font-semibold text-white hover:bg-teal-700"
                >
                  Selecionar
                </button>
              </div>
            </article>
          ))}
          {results.length === 0 && (
            <p className="py-10 text-center text-sm text-slate-500">
              Nenhum voo encontrado. Ajuste os filtros para ver mais opções.
            </p>
          )}
        </div>
      </div>
    </AppLayout>
  );
}