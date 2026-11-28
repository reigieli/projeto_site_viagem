import { useNavigate } from 'react-router-dom';
import { Steps } from '../Steps/Steps';
import { caminhos } from '../../constantes/navegacao';

export interface PlanningStepsProps {
  step: string;
}

/** Etapas disponíveis no planejamento da viagem. */
const planningSteps = [
  {
    id: caminhos.viagem,
    titulo: 'Dados da viagem',
  },
  {
    id: caminhos.preferencias,
    titulo: 'Preferências',
  },
  {
    id: caminhos.destinos,
    titulo: 'Sugestões',
  },
];

/** Apresenta as etapas do planejamento de viagens. */
export function PlanningSteps({ step }: Readonly<PlanningStepsProps>) {
  const navigate = useNavigate();

  return (
    <Steps
      etapas={planningSteps}
      etapaAtualId={step}
      aoSelecionarEtapa={navigate}
    />
  );
}
