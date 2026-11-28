// Hospedagem.tsx 
import { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';

const NIGHTS = 13;

const HOTELS = [
  { id: 'himalayan', name: 'Himalayan Boutique Hotel', rating: 4.9, perNight: 280 },
  { id: 'eco', name: 'Kathmandu Eco Resort', rating: 4.7, perNight: 190 },
  { id: 'yak', name: 'Yak & Yeti Heritage Resort', rating: 5.0, perNight: 450 },
];

const brl = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

interface Props {
  onMudarTela?: (tela: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
  onNavigate?: (step: number) => void;
  onSelectHotel?: (hotelId: string) => void;
}

export function Hospedagem({ onMudarTela, onNavigate, onSelectHotel }: Props) {
  const [selected, setSelected] = useState('himalayan');

  const select = (id: string) => {
    setSelected(id);
    onSelectHotel?.(id);
  };

  const irParaPasseios = () => {
    onMudarTela?.(8);
    onNavigate?.(8);
  };

  return (
    <div className="container">
      <div className="hospedagem-header">
        <div>
          <h2 className="hospedagem-titulo">7. Seleção de Hospedagem em Kathmandu</h2>
          <p className="hospedagem-subtitulo">Escolha onde ficar hospedado durante sua aventura.</p>
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

              <div className="hotel-foto-placeholder" />

              <h3 className="hotel-nome">{h.name}</h3>
              <p className="hotel-comodidades">
                Café da manhã incluso • Wi-Fi Grátis • Vista para as Montanhas
              </p>

              <div className="hotel-footer">
                <div>
                  <p className="hotel-preco-noite">{brl(h.perNight)}</p>
                  <p className="hotel-preco-total">
                    {brl(h.perNight * NIGHTS)} ({NIGHTS} noites)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => select(h.id)}
                  className={`hotel-btn ${isSelected ? 'hotel-btn--selected' : ''}`}
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