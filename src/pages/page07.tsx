// Hospedagem.tsx 
// 1. IMPORTS: hooks do React e arquivos de estilo já existentes no projeto
import { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';
// Quantidade de noites e lista de hotéis exibidos na tela
const NIGHTS = 13;

const HOTELS = [

  { id: 'himalayan', name: 'Himalayan Boutique Hotel', rating: 4.9, perNight: 280 },
  {
    id: 'himalayan',
    name: 'Himalayan Boutique Hotel',
    rating: 4.9,
    perNight: 280,
  },

  { id: 'eco', name: 'Kathmandu Eco Resort', rating: 4.7, perNight: 190 },
  { id: 'yak', name: 'Yak & Yeti Heritage Resort', rating: 5.0, perNight: 450 },
];

const brl = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

//Funções que o App.tsx pode passar para a tela
interface Props {
  onMudarTela?: (tela: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
  onNavigate?: (step: number) => void;
  onSelectHotel?: (hotelId: string) => void;
}

//Renderiza a tela 7 de Hospedagem
export function Hospedagem({ onMudarTela, onNavigate, onSelectHotel }: Props) {
  const [selected, setSelected] = useState('himalayan');


export default function Hospedagem({ onPrev, onNext, onNavigate, onSelectHotel }: Props) {
  const [selected, setSelected] = useState("himalayan");

export default function LodgingScreen({
  onPrev,
  onNext,
  onNavigate,
  onSelectHotel,
}: Props) {
  const [selected, setSelected] = useState('himalayan');

//Atualiza o hotel escolhido e avisa o componente
  const select = (id: string) => {
    setSelected(id);
    onSelectHotel?.(id);
  };
// Navega para a tela 8 (Passeios) usando a função recebida do App.tsx
  const irParaPasseios = () => {
    onMudarTela?.(8);
    onNavigate?.(8);
  };

  //cabeçalho da tela e listagem/grade dos cards de hotéis
  return (
    <div className="container">
      <div className="hospedagem-header">
        <div>
          <h2 className="hospedagem-titulo">7. Seleção de Hospedagem em Kathmandu</h2>
          <p className="hospedagem-subtitulo">Escolha onde ficar hospedado durante sua aventura.</p>

    <AppLayout
      currentStep={7}
      title="Hospedagem"
      onPrev={onPrev}
      onNext={onNext}
      onNavigate={onNavigate}
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">
            7. Seleção de Hospedagem em Kathmandu
          </h2>
          <p className="text-xs text-slate-500">
            Escolha onde ficar hospedado durante sua aventura.
          </p>

        </div>
        <button
          type="button"
          onClick={irParaPasseios}
          className="btn-avancar"
        >
          Avançar para Passeios &gt;
        </button>
      </div>

      <div className="hospedagem-grid">
        {HOTELS.map((h) => {
          const isSelected = selected === h.id;
          return (
            <article
              key={h.id}

              className={`hotel-card ${isSelected ? 'hotel-card--selected' : ''}`}
            >
              <span className="hotel-rating">★ {h.rating.toFixed(1)}</span>

              className={`relative flex h-[490px] flex-col rounded-2xl bg-white p-4 ${
                isSelected
                  ? 'border-2 border-teal-500'
                  : 'border border-slate-200'
              }`}
            >
              <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-slate-700 px-2 py-0.5 text-[11px] font-bold text-white">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />{' '}
                {h.rating.toFixed(1)}
              </span>


              <div className="hotel-foto-placeholder" />

              <h3 className="hotel-nome">{h.name}</h3>
              <p className="hotel-comodidades">
                Café da manhã incluso • Wi-Fi Grátis • Vista para as Montanhas
              </p>

              <div className="hotel-footer">
                <div>

                  <p className="hotel-preco-noite">{brl(h.perNight)}</p>
                  <p className="hotel-preco-total">
                  <p className="text-lg font-bold text-teal-800">
                    {brl(h.perNight)}
                  </p>
                  <p className="text-[10px] text-slate-500">

                    {brl(h.perNight * NIGHTS)} ({NIGHTS} noites)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => select(h.id)}

                  className={`hotel-btn ${isSelected ? 'hotel-btn--selected' : ''}`}

                  className={`rounded-lg px-4 py-2 text-xs font-semibold ${
                    isSelected
                      ? 'bg-teal-600 text-white'
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
export default Hospedagem;