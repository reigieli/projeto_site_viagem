import { Table } from '../../../components/Table/Table';
import { Button } from '../../../components/Button/Button';
import { formatarMoeda } from '../../../utils/formatacao';

import type { DadosFinanceiros } from '../../../services/contratos';

interface TabelaDespesasProps {
  despesas: DadosFinanceiros['expenses'];
  salvando: boolean;
  aoRemover: (id: string) => void;
}

export function TabelaDespesas({
  despesas,
  salvando,
  aoRemover,
}: TabelaDespesasProps) {

  return (
    <Table
      titulo="Despesas adicionais"
      registros={despesas}
      obterChave={(despesa) => despesa.id}
      colunas={[
        {
          id: 'name',
          titulo: 'Descrição',
          renderizar: (despesa) => despesa.description,
        },
        {
          id: 'value',
          titulo: 'Valor',
          renderizar: (despesa) =>
            formatarMoeda(despesa.value),
        },
        {
          id: 'action',
          titulo: 'Ações',
          renderizar: (despesa) => (
            <Button
              variante="perigo"
              tamanho="pequeno"
              disabled={salvando}
              onClick={() => aoRemover(despesa.id)}
            >
              Remover
            </Button>
          ),
        },
      ]}
    />
  );
}