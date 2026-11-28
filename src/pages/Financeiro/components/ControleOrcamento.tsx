import type { FormEvent } from 'react';

import { Card } from '../../../components/Card/Card';
import { Formulario } from '../../../components/Formulario';
import { Campo } from '../../../components/Field';
import { Button } from '../../../components/Button/Button';
import { BarraProgresso } from '../../../components/BarraProgresso/BarraProgresso';
import { formatarMoeda } from '../../../utils/formatacao';

interface ControleOrcamentoProps {
  orcamento: number;
  total: number;
  valorFormulario: string;
  salvando: boolean;
  aoAlterar: (valor: string) => void;
  aoSalvar: (evento: FormEvent) => void;
}

export function ControleOrcamento({
  orcamento,
  total,
  valorFormulario,
  salvando,
  aoAlterar,
  aoSalvar,
}: ControleOrcamentoProps) {

  const saldo = orcamento - total;
  const estourado = saldo < 0;

  return (
    <Card>
      <Formulario
        className="finance-page__budget-edit"
        onSubmit={aoSalvar}
      >
        <Campo
          rotulo="Orçamento planejado (R$)"
          type="number"
          min={1}
          step="0.01"
          required
          value={valorFormulario}
          onChange={(e) => aoAlterar(e.target.value)}
        />

        <Button
          type="submit"
          tamanho="pequeno"
          disabled={salvando}
        >
          Salvar orçamento
        </Button>
      </Formulario>

      <BarraProgresso
        rotulo="Orçamento utilizado"
        valor={total}
        maximo={orcamento}
        variante={estourado ? 'perigo' : 'primaria'}
      />

      <p>
        {estourado
          ? 'Acima do orçamento: '
          : 'Saldo disponível: '}

        {formatarMoeda(Math.abs(saldo))}
      </p>
    </Card>
  );
}