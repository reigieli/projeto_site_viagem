import type {
  Destino,
  Voo,
  Hotel,
  Passeio,
  Viagem,
  Passageiro,
  MetodoPagamento,
  Despesa,
  Perfil,
} from '../types/viagem';

/** Catálogo de ofertas do ambiente de demonstração. */
export interface Catalogo {
  destinations: Destino[];
  flights: Voo[];
  hotels: Hotel[];
  tours: Passeio[];
}

/** Dados persistidos da única reserva de demonstração. */
export interface RascunhoReserva {
  trip: Viagem;
  flightId: string;
  hotelId: string;
  tourIds: string[];
  passengers: Passageiro[];
  payment: MetodoPagamento;
  confirmed: boolean;
}

/** Resumo de leitura da reserva utilizado por Financeiro e MinhaConta. */
export interface ResumoReserva {
  destination: Destino;
  confirmed: boolean;
  payable: number;
}

/** Consulta usada pelas páginas Financeiro e MinhaConta. */
export interface ServicoReserva {
  obter(): Promise<ResumoReserva>;
}

export interface DadosFinanceiros {
  budget: number;
  expenses: Despesa[];
}
export interface ServicoFinanceiro {
  obter(): Promise<DadosFinanceiros>;
  atualizarOrcamento(value: number): Promise<DadosFinanceiros>;
  adicionarDespesa(
    description: string,
    value: number
  ): Promise<DadosFinanceiros>;
  removerDespesa(id: string): Promise<DadosFinanceiros>;
}
export interface ServicoPerfil {
  obter(): Promise<Perfil>;
  atualizar(patch: Partial<Perfil>): Promise<Perfil>;
}
export interface Servicos {
  reserva: ServicoReserva;
  financeiro: ServicoFinanceiro;
  perfil: ServicoPerfil;
}
