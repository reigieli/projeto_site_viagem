import { initialBudget, initialProfile } from '../../mocks/travel.mock';
import type {
  DadosFinanceiros,
  ServicoFinanceiro,
  ServicoPerfil,
} from '../contratos';
import type { Perfil } from '../../types/viagem';
import { criarRegistro, chavesArmazenamento } from './armazenamento';
import type { PortaArmazenamento } from './armazenamento';
import { ehFinanceiro, ehPerfil } from './validacao';

/** Orçamento e despesas persistidos, sem dependência da reserva. */
export function criarServicoFinanceiro(
  storage: () => PortaArmazenamento
): ServicoFinanceiro {
  const record = criarRegistro<DadosFinanceiros>(
    storage,
    chavesArmazenamento.financeiro,
    () => ({ budget: initialBudget, expenses: [] }),
    ehFinanceiro
  );
  return {
    async obter() {
      return record.ler();
    },
    async atualizarOrcamento(budget) {
      if (!Number.isFinite(budget) || budget < 1)
        throw new Error('Informe um orçamento válido.');
      return record.atualizar((current) => ({ ...current, budget }));
    },
    async adicionarDespesa(description, value) {
      if (!description.trim() || !Number.isFinite(value) || value <= 0)
        throw new Error('Informe uma descrição e um valor positivo.');
      return record.atualizar((current) => ({
        ...current,
        expenses: [
          ...current.expenses,
          { id: crypto.randomUUID(), description: description.trim(), value },
        ],
      }));
    },
    async removerDespesa(id) {
      return record.atualizar((current) => ({
        ...current,
        expenses: current.expenses.filter((item) => item.id !== id),
      }));
    },
  };
}

/** Perfil fictício utilizado pela página de conta e pelo cabeçalho. */
export function criarServicoPerfil(
  storage: () => PortaArmazenamento
): ServicoPerfil {
  const record = criarRegistro<Perfil>(
    storage,
    chavesArmazenamento.perfil,
    () => initialProfile,
    ehPerfil
  );
  return {
    async obter() {
      return record.ler();
    },
    async atualizar(patch) {
      return record.atualizar((current) => {
        const next = { ...current, ...patch };
        if (!next.name.trim() || !next.email.includes('@'))
          throw new Error('Informe um nome e e-mail válidos.');
        return next;
      });
    },
  };
}
