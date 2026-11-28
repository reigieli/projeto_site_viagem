// Hospedagem.tsx
import { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';


const NIGHTS = 13;

const HOTELS = [
  {
    id: 'himalayan',
    name: 'Himalayan Boutique Hotel',
    rating: 4.9,
    perNight: 280,
  },
  {
    id: 'eco',
    name: 'Kathmandu Eco Resort',
    rating: 4.7,
    perNight: 190,
  },
  {
    id: 'yak',
    name: 'Yak & Yeti Heritage Resort',
    rating: 5.0,
    perNight: 450,
  },
];

const brl = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

interface Props {
  onMudarTela?: (tela: number) => void;
  onNext?: () => void;
  onNavigate?: (step: number) => void;
  onSelectHotel?: (hotelId: string) => void;
}

export function Hospedagem({
  onMudarTela,
  onNext,
  onNavigate,
  onSelectHotel,
}: Props) {
  const [selected, setSelected] = useState('himalayan');

  const select = (id: string) => {
    setSelected(id);
    onSelectHotel?.(id);
  };

  const irParaPasseios = () => {
    onMudarTela?.(8);
    onNavigate?.(8);
    onNext?.();
  };

  return (
    <div className="container">
      <div className="hospedagem-header flex items-start justify-between">
        <div>
          <h2 className="hospedagem-titulo text-xl font-bold">
            7. Seleção de Hospedagem em Kathmandu
          </h2>
          <p className="hospedagem-subtitulo text-xs text-slate-500">
            Escolha onde ficar hospedado durante sua aventura.
          </p>
        </div>
        <button
          type="button"
          onClick={irParaPasseios}
          className="btn-avancar btn btn-primary"
        >
          Avançar para Passeios &gt;
        </button>
      </div>

      <div className="hospedagem-grid mt-5 grid gap-4 md:grid-cols-3">
        {HOTELS.map((h) => {
          const isSelected = selected === h.id;
          return (
            <article
              key={h.id}
              className={`hotel-card relative flex flex-col justify-between rounded-2xl bg-white p-4 ${
                isSelected
                  ? 'hotel-card--selected border-2 border-teal-500'
                  : 'border border-slate-200'
              }`}
            >
              <div>
                <span className="hotel-rating absolute right-3 top-3 rounded-md bg-slate-700 px-2 py-0.5 text-[11px] font-bold text-white">
                  ★ {h.rating.toFixed(1)}
                </span>

                <div className="hotel-foto-placeholder mb-3 h-40 rounded-xl bg-slate-100" />

                <h3 className="hotel-nome text-base font-bold">{h.name}</h3>
                <p className="hotel-comodidades mt-1 text-xs text-slate-500">
                  Café da manhã incluso • Wi-Fi Grátis • Vista para as Montanhas
                </p>
              </div>

              <div className="hotel-footer mt-4 flex items-center justify-between pt-3">
                <div>
                  <p className="hotel-preco-noite text-lg font-bold text-teal-800">
                    {brl(h.perNight)}
                  </p>
                  <p className="hotel-preco-total text-[11px] text-slate-500">
                    {brl(h.perNight * NIGHTS)} ({NIGHTS} noites)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => select(h.id)}
                  className={`hotel-btn rounded-lg px-4 py-2 text-xs font-semibold ${
                    isSelected
                      ? 'hotel-btn--selected bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {isSelected ? 'Selecionado' : 'Escolher'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export const Page07 = Hospedagem;
export default Hospedagem;