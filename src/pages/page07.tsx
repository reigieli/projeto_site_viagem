// Hospedagem.tsx
import { useState } from "react";
import { Star } from "lucide-react";
import AppLayout from "./AppLayout";

const NIGHTS = 13;
const HOTELS = [
  { id: "himalayan", name: "Himalayan Boutique Hotel", rating: 4.9, perNight: 280 },
  { id: "eco", name: "Kathmandu Eco Resort", rating: 4.7, perNight: 190 },
  { id: "yak", name: "Yak & Yeti Heritage Resort", rating: 5.0, perNight: 450 },
];

const brl = (v: number) => `R$ ${v.toLocaleString("pt-BR")}`;

interface Props {
  onPrev?: () => void;
  onNext?: () => void;
  onNavigate?: (step: number) => void;
  onSelectHotel?: (hotelId: string) => void;
}

export default function LodgingScreen({ onPrev, onNext, onNavigate, onSelectHotel }: Props) {
  const [selected, setSelected] = useState("himalayan");

  const select = (id: string) => {
    setSelected(id);
    onSelectHotel?.(id);
  };

  return (
    <AppLayout currentStep={7} title="Hospedagem" onPrev={onPrev} onNext={onNext} onNavigate={onNavigate}>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">7. Seleção de Hospedagem em Kathmandu</h2>
          <p className="text-xs text-slate-500">Escolha onde ficar hospedado durante sua aventura.</p>
        </div>
        <button
          onClick={() => onNavigate?.(8)}
          className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
        >
          Avançar para Passeios &gt;
        </button>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4">
        {HOTELS.map((h) => {
          const isSelected = selected === h.id;
          return (
            <article
              key={h.id}
              className={`relative flex h-[490px] flex-col rounded-2xl bg-white p-4 ${
                isSelected ? "border-2 border-teal-500" : "border border-slate-200"
              }`}
            >
              <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-slate-700 px-2 py-0.5 text-[11px] font-bold text-white">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {h.rating.toFixed(1)}
              </span>

              {/* Espaço reservado para a foto do hotel */}
              <div className="flex-1" />

              <h3 className="text-sm font-bold">{h.name}</h3>
              <p className="mt-1 text-[11px] text-slate-500">
                Café da manhã incluso • Wi-Fi Grátis • Vista para as Montanhas
              </p>

              <div className="mt-auto flex items-end justify-between border-t border-slate-100 pt-4">
                <div>
                  <p className="text-lg font-bold text-teal-800">{brl(h.perNight)}</p>
                  <p className="text-[10px] text-slate-500">{brl(h.perNight * NIGHTS)} ({NIGHTS} noites)</p>
                </div>
                <button
                  onClick={() => select(h.id)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold ${
                    isSelected ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {isSelected ? "Selecionado" : "Escolher"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </AppLayout>
  );
}