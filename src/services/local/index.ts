import type { Servicos } from '../contratos';
import type { PortaArmazenamento } from './armazenamento';
import { criarServicoReserva } from './servicoReserva';
import { criarServicoFinanceiro, criarServicoPerfil } from './servicosPessoais';

/** Permite injetar armazenamento em memória nos testes. */
export function criarServicosLocais(
  storage: () => PortaArmazenamento
): Servicos {
  return {
    reserva: criarServicoReserva(storage),
    financeiro: criarServicoFinanceiro(storage),
    perfil: criarServicoPerfil(storage),
  };
}
