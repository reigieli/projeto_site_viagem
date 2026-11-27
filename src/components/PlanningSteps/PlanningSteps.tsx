import { useNavigate } from 'react-router-dom';
import { Steps } from '../Steps/Steps';
import { paths } from '../../constants/navegacao';

export interface PlanningStepsProps {
  step: string;
}

/** Etapas disponíveis no planejamento da viagem. */
const planningSteps = [
  {
    id: paths.trip,
    titulo: 'Dados da viagem',
  },
  {
    id: paths.preferences,
    titulo: 'Preferências',
  },
  {
    id: paths.destinations,
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
