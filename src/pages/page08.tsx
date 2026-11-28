//Estado do React e folhas de estilo do projeto
import { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';

//Lista de passeios disponíveis para incluir no roteiro
const TOURS = [
  {
    id: 'everest',
    title: 'Trekking ao Acampamento Base do Everest (Voo de Helicóptero)',
    duration: '1 dia inteiro',
    description: 'Sobrevoo espetacular pelos picos mais altos do planeta com parada para café da manhã nas montanhas.',

    description:
      'Sobrevoo espetacular pelos picos mais altos do planeta com parada para café da manhã nas montanhas.',
    price: 1450,
  },
  {
    id: 'durbar',
    title: 'Tour Cultural Templos de Kathmandu & Durbar Square',
    duration: '6 horas',
    description: 'Guia historiador local, entradas para templos sagrados e transporte privado incluídos.',
    description:
      'Guia historiador local, entradas para templos sagrados e transporte privado incluídos.',
    price: 220,
  },
  {
    id: 'chitwan',
    title: 'Safari de Rinocerontes no Parque Nacional de Chitwan',
    duration: '2 dias / 1 noite',
    description: 'Aventura na selva nepalesa com avistamento de fauna selvagem e hospedagem estilo eco-lodge.',
    description:
      'Aventura na selva nepalesa com avistamento de fauna selvagem e hospedagem estilo eco-lodge.',
    price: 580,
  },
];

const brl = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

//TIPAGEM props
interface Props {
  onMudarTela?: (tela: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
  onNavigate?: (step: number) => void;
  onChange?: (selectedIds: string[]) => void;
}

//Tela 8 de Passeios & Tours
export function Passeios({ onMudarTela, onNavigate, onChange }: Props) {
  const [added, setAdded] = useState<string[]>(['everest']);
// Adiciona ou remove um passeio da lista de selecionados
  const toggle = (id: string) => {
    setAdded((prev) => {
      const next = prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id];
      onChange?.(next);
      return next;
    });
  };
// Avança para a tela 9
  const irParaResumo = () => {
    onMudarTela?.(9);
    onNavigate?.(9);
  };

  return (
    <div className="container">
      <div className="passeios-header">
        <div>
          <h2 className="passeios-titulo">8. Adicionar Passeios e Experiências</h2>
          <p className="passeios-subtitulo">Personalize seu pacote adicionando tours guiados ao seu roteiro.</p>

export default function Passeios({ onPrev, onNext, onNavigate, onChange }: Props) {
  const [added, setAdded] = useState<string[]>(["everest"]);

  export default function ToursScreen({
  onPrev,
  onNext,
  onNavigate,
  onChange,
}: Props) {
  const [added, setAdded] = useState<string[]>(['everest']);

  const toggle = (id: string) => {
    const next = added.includes(id)
      ? added.filter((t) => t !== id)
      : [...added, id];
    setAdded(next);
    onChange?.(next);
  };

  return (
    <AppLayout
      currentStep={8}
      title="Passeios & Tours"
      onPrev={onPrev}
      onNext={onNext}
      onNavigate={onNavigate}
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">
            8. Adicionar Passeios e Experiências
          </h2>
          <p className="text-xs text-slate-500">
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

      <div className="passeios-lista">
        {TOURS.map((t) => {
          const isAdded = added.includes(t.id);
          return (
            <article key={t.id} className="passeio-card">
            <article
              key={t.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4"
            >
              <div>
                <h3 className="passeio-titulo">
                  {t.title}
                  <span className="passeio-duracao">{t.duration}</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                    {t.duration}
                  </span>
                </h3>
                <p className="passeio-descricao">{t.description}</p>
              </div>
              <div className="passeio-acoes">
                <p className="passeio-preco">{brl(t.price)}</p>
              <div className="ml-6 flex shrink-0 flex-col items-end gap-1.5">
                <p className="text-base font-bold text-teal-800">
                  {brl(t.price)}
                </p>
                <button
                  type="button"
                  onClick={() => toggle(t.id)}
                  className={`btn ${isAdded ? 'btn-success' : 'btn-secondary'}`}
                >
                  {isAdded ? '✓ Adicionado' : '+ Incluir no Pacote'}
                  className={`flex items-center gap-1 rounded-lg px-4 py-1.5 text-xs font-semibold ${
                    isAdded
                      ? 'border border-teal-300 bg-teal-50 text-teal-700'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Adicionado
                    </>
                  ) : (
                    '+ Incluir no Pacote'
                  )}

                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Passeios;