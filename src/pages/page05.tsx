// Passagens.tsx
import React, { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';

interface Flight {
  id: string;
  airline: string;
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
  price: number;
}

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

const brl = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

interface Props {
  onMudarTela?: (tela: number) => void;
  onSelectFlight?: (flight: Flight) => void;
}

export function Buscadepassagens({ onMudarTela, onSelectFlight }: Props) {
  const [selectedId, setSelectedId] = useState<string>(FLIGHTS[0]?.id ?? '');

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
}

export const Page05 = Buscadepassagens;
export default Buscadepassagens;