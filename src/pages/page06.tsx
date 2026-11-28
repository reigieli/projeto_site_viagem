import { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';

//Companhias comparadas lado a lado
export function Page06({ onMudarTela }: { onMudarTela: (tela: number) => void })
const OPTIONS = [
  {
    id: 'qatar',
    name: 'Qatar',
    label: 'Opção 1 (Qatar)',
    recommended: true,
    price: 5200,
    duration: '18h 45m',
    durationNote: '(Mais rápido)',
    layover: 'Doha (2h de espera)',
    baggage: '2 malas (23kg cada)',
    bags: 2,
    rating: 4.9,
  },
  {
    id: 'emirates',
    name: 'Emirates',
    label: 'Opção 2 (Emirates)',
    recommended: false,
    price: 4950,
    duration: '20h 15m',
    durationNote: '',
    layover: 'Dubai (3h 30m de espera)',
    baggage: '2 malas (23kg cada)',
    bags: 2,
    rating: 4.8,
  },
  {
    id: 'turkish',
    name: 'Turkish',
    label: 'Opção 3 (Turkish)',
    recommended: false,
    price: 4600,
    duration: '22h 35m',
    durationNote: '',
    layover: 'Istambul (5h de espera)',
    baggage: '1 mala (23kg)',
    bags: 1,
    rating: 4.5,
  },
];

const brl = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;
const buttonStyle = [
  'bg-teal-600 text-white hover:bg-teal-700',
  'bg-slate-900 text-white hover:bg-slate-800',
  'bg-slate-200 text-slate-800 hover:bg-slate-300',
];

//callbacks enviados pelo App.tsx
interface Props {
  onMudarTela?: (tela: number) => void;
}
//Renderiza a tela 6 de Comparação de Voos
export function Comparacaodepassagens({ onMudarTela }: Props) {
  const [escolhido, setEscolhido] = useState<string>('opcao-1');

  return (
    <div className="container">
      <div className="passeios-header">
        <div>
          <h2>6. Comparar Voos</h2>
          <p>Compare tarifas, horários e bagagem antes de avançar.</p>

export default function FlightCompareScreen({
  onPrev,
  onNext,
  onNavigate,
  onChoose,
}: Props) {
  const [chosen, setChosen] = useState<string | null>(null);

  const choose = (id: string) => {
    setChosen(id);
    onChoose?.(id);
  };

  const cell = 'px-4 py-3.5 text-xs';
  const rowLabel = `${cell} font-medium text-slate-800`;

  return (
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">6. Tabela Comparativa de Voos</h2>
          <p className="text-xs text-slate-500">
            Compare lado a lado os detalhes antes de decidir.
          </p>

        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onMudarTela?.(7)}
        >
          Avançar para Hospedagem &gt;
        </button>
      </div>

      <div className="passeios-lista">
        <article className="passeio-card">
          <div>
            <h3>Opção 1 — Menor tempo de viagem</h3>
            <p>1 escala • Bagagem despachada incluída • R$ 5.490</p>
          </div>
          <button
            type="button"
            className={`btn ${escolhido === 'opcao-1' ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => setEscolhido('opcao-1')}
          >
            {escolhido === 'opcao-1' ? 'Selecionado' : 'Escolher'}
          </button>
        </article>

        <article className="passeio-card">
          <div>
            <h3>Opção 2 — Melhor custo-benefício</h3>
            <p>1 escala • Bagagem de mão + despachada • R$ 5.120</p>
          </div>
          <button
            type="button"
            className={`btn ${escolhido === 'opcao-2' ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => setEscolhido('opcao-2')}
          >
            {escolhido === 'opcao-2' ? 'Selecionado' : 'Escolher'}
          </button>
        </article>

      <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className={`${cell} w-1/5 font-medium`}>Recurso</th>
              {OPTIONS.map((o) => (
                <th
                  key={o.id}
                  className={`${cell} font-semibold ${o.recommended ? 'text-teal-700' : 'text-slate-800'}`}
                >
                  {o.label} {o.recommended && '★ Recomendada'}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&>tr]:border-b [&>tr]:border-slate-100">
            <tr>
              <td className={rowLabel}>Preço Total</td>
              {OPTIONS.map((o) => (
                <td
                  key={o.id}
                  className={`${cell} text-sm font-bold ${o.recommended ? 'text-teal-800' : 'text-slate-900'}`}
                >
                  {brl(o.price)}
                </td>
              ))}
            </tr>
            <tr>
              <td className={rowLabel}>Tempo de Voo Total</td>
              {OPTIONS.map((o) => (
                <td key={o.id} className={`${cell} text-slate-600`}>
                  {o.duration} {o.durationNote}
                </td>
              ))}
            </tr>
            <tr>
              <td className={rowLabel}>Conexão</td>
              {OPTIONS.map((o) => (
                <td key={o.id} className={`${cell} text-slate-600`}>
                  {o.layover}
                </td>
              ))}
            </tr>
            <tr>
              <td className={rowLabel}>Bagagem Despachada</td>
              {OPTIONS.map((o) => (
                <td
                  key={o.id}
                  className={`${cell} font-semibold ${o.bags === 2 ? 'text-teal-700' : 'text-slate-500'}`}
                >
                  {o.baggage}
                </td>
              ))}
            </tr>
            <tr>
              <td className={rowLabel}>Avaliação do Voo</td>
              {OPTIONS.map((o) => (
                <td
                  key={o.id}
                  className={`${cell} font-semibold text-amber-500`}
                >
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />{' '}
                    {o.rating.toFixed(1)} / 5.0
                  </span>
                </td>
              ))}
            </tr>
            <tr className="!border-b-0">
              <td className={rowLabel}>Ação</td>
              {OPTIONS.map((o, i) => (
                <td key={o.id} className="px-4 py-3">
                  <button
                    onClick={() => choose(o.id)}
                    className={`w-full rounded-md py-2 text-xs font-semibold ${buttonStyle[i]} ${chosen === o.id ? 'ring-2 ring-teal-400 ring-offset-2' : ''}`}
                  >
                    Escolher {o.name}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


export const Page06 = Comparacaodepassagens;
export default Comparacaodepassagens;