// Passeios.tsx
import { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';


const TOURS = [
  {
    id: 'everest',
    title: 'Trekking ao Acampamento Base do Everest (Voo de Helicóptero)',
    duration: '1 dia inteiro',
    description:
      'Sobrevoo espetacular pelos picos mais altos do planeta com parada para café da manhã nas montanhas.',
    price: 1450,
  },
  {
    id: 'durbar',
    title: 'Tour Cultural Templos de Kathmandu & Durbar Square',
    duration: '6 horas',
    description:
      'Guia historiador local, entradas para templos sagrados e transporte privado incluídos.',
    price: 220,
  },
  {
    id: 'chitwan',
    title: 'Safari de Rinocerontes no Parque Nacional de Chitwan',
    duration: '2 dias / 1 noite',
    description:
      'Aventura na selva nepalesa com avistamento de fauna selvagem e hospedagem estilo eco-lodge.',
    price: 580,
  },
];

const brl = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

interface Props {
  onMudarTela?: (tela: number) => void;
  onNext?: () => void;
  onNavigate?: (step: number) => void;
  onChange?: (selectedIds: string[]) => void;
}

export function Passeios({
  onMudarTela,
  onNext,
  onNavigate,
  onChange,
}: Props) {
  const [added, setAdded] = useState<string[]>(['everest']);

  const toggle = (id: string) => {
    setAdded((prev) => {
      const next = prev.includes(id)
        ? prev.filter((t) => t !== id)
        : [...prev, id];
      onChange?.(next);
      return next;
    });
  };

  const irParaResumo = () => {
    onMudarTela?.(9);
    onNavigate?.(9);
    onNext?.();
  };

  return (
    <div className="container">
      <div className="passeios-header flex items-start justify-between">
        <div>
          <h2 className="passeios-titulo text-xl font-bold">
            8. Adicionar Passeios e Experiências
          </h2>
          <p className="passeios-subtitulo text-xs text-slate-500">
            Personalize seu pacote adicionando tours guiados ao seu roteiro.
          </p>
        </div>
        <button
          type="button"
          onClick={irParaResumo}
          className="btn btn-primary"
        >
          Ir para Resumo da Compra &gt;
        </button>
      </div>

      <div className="passeios-lista mt-5 space-y-3">
        {TOURS.map((t) => {
          const isAdded = added.includes(t.id);
          return (
            <article
              key={t.id}
              className="passeio-card flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4"
            >
              <div>
                <h3 className="passeio-titulo flex items-center gap-2 font-bold">
                  {t.title}
                  <span className="passeio-duracao rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                    {t.duration}
                  </span>
                </h3>
                <p className="passeio-descricao mt-1 text-xs text-slate-500">
                  {t.description}
                </p>
              </div>

              <div className="passeio-acoes ml-6 flex shrink-0 flex-col items-end gap-1.5">
                <p className="passeio-preco text-base font-bold text-teal-800">
                  {brl(t.price)}
                </p>
                <button
                  type="button"
                  onClick={() => toggle(t.id)}
                  className={`btn ${isAdded ? 'btn-success' : 'btn-secondary'}`}
                >
                  {isAdded ? '✓ Adicionado' : '+ Incluir no Pacote'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export const Page08 = Passeios;
export default Passeios;