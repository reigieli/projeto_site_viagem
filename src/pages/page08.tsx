import { useState } from 'react';
import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';

const TOURS = [
  {
    id: 'everest',
    title: 'Trekking ao Acampamento Base do Everest (Voo de Helicóptero)',
    duration: '1 dia inteiro',
    description: 'Sobrevoo espetacular pelos picos mais altos do planeta com parada para café da manhã nas montanhas.',
    price: 1450,
  },
  {
    id: 'durbar',
    title: 'Tour Cultural Templos de Kathmandu & Durbar Square',
    duration: '6 horas',
    description: 'Guia historiador local, entradas para templos sagrados e transporte privado incluídos.',
    price: 220,
  },
  {
    id: 'chitwan',
    title: 'Safari de Rinocerontes no Parque Nacional de Chitwan',
    duration: '2 dias / 1 noite',
    description: 'Aventura na selva nepalesa com avistamento de fauna selvagem e hospedagem estilo eco-lodge.',
    price: 580,
  },
];

const brl = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

interface Props {
  onMudarTela?: (tela: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
  onNavigate?: (step: number) => void;
  onChange?: (selectedIds: string[]) => void;
}

export function Passeios({ onMudarTela, onNavigate, onChange }: Props) {
  const [added, setAdded] = useState<string[]>(['everest']);

  const toggle = (id: string) => {
    setAdded((prev) => {
      const next = prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id];
      onChange?.(next);
      return next;
    });
  };

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
              <div>
                <h3 className="passeio-titulo">
                  {t.title}
                  <span className="passeio-duracao">{t.duration}</span>
                </h3>
                <p className="passeio-descricao">{t.description}</p>
              </div>
              <div className="passeio-acoes">
                <p className="passeio-preco">{brl(t.price)}</p>
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

export default Passeios;