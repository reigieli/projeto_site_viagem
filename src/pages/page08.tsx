import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';

const TOURS = [
  { id: "everest", title: "Trekking ao Acampamento Base do Everest (Voo de Helicóptero)", duration: "1 dia inteiro", description: "Sobrevoo espetacular pelos picos mais altos do planeta com parada para café da manhã nas montanhas.", price: 1450 },
  { id: "durbar", title: "Tour Cultural Templos de Kathmandu & Durbar Square", duration: "6 horas", description: "Guia historiador local, entradas para templos sagrados e transporte privado incluídos.", price: 220 },
  { id: "chitwan", title: "Safari de Rinocerontes no Parque Nacional de Chitwan", duration: "2 dias / 1 noite", description: "Aventura na selva nepalesa com avistamento de fauna selvagem e hospedagem estilo eco-lodge.", price: 580 },
];

const brl = (v: number) => `R$ ${v.toLocaleString("pt-BR")}`;

interface Props {
  onPrev?: () => void;
  onNext?: () => void;
  onNavigate?: (step: number) => void;
  onChange?: (selectedIds: string[]) => void;
}

export default function ToursScreen({ onPrev, onNext, onNavigate, onChange }: Props) {
  const [added, setAdded] = useState<string[]>(["everest"]);

  const toggle = (id: string) => {
    const next = added.includes(id) ? added.filter((t) => t !== id) : [...added, id];
    setAdded(next);
    onChange?.(next);
  };

  return (
    <AppLayout currentStep={8} title="Passeios & Tours" onPrev={onPrev} onNext={onNext} onNavigate={onNavigate}>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">8. Adicionar Passeios e Experiências</h2>
          <p className="text-xs text-slate-500">Personalize seu pacote adicionando tours guiados ao seu roteiro.</p>
        </div>
        <button
          onClick={() => onNavigate?.(9)}
          className="rounded-lg bg-teal-600 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700"
        >
          Ir para Resumo da Compra &gt;
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {TOURS.map((t) => {
          const isAdded = added.includes(t.id);
          return (
            <article key={t.id} className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-bold">
                  {t.title}
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">{t.duration}</span>
                </h3>
                <p className="mt-1 text-xs text-slate-500">{t.description}</p>
              </div>
              <div className="ml-6 flex shrink-0 flex-col items-end gap-1.5">
                <p className="text-base font-bold text-teal-800">{brl(t.price)}</p>
                <button
                  onClick={() => toggle(t.id)}
                  className={`flex items-center gap-1 rounded-lg px-4 py-1.5 text-xs font-semibold ${
                    isAdded
                      ? "border border-teal-300 bg-teal-50 text-teal-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {isAdded ? <><Check className="h-3.5 w-3.5" /> Adicionado</> : "+ Incluir no Pacote"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </AppLayout>
  );
}