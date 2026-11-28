import type { FormEvent } from 'react';

import { Formulario } from '../../../components/Formulario';
import { Campo } from '../../../components/Field';
import { Button } from '../../../components/Button/Button';

interface FormularioDespesaProps {
  descricao: string;
  valor: string;
  salvando: boolean;
  aoAlterarDescricao: (descricao: string) => void;
  aoAlterarValor: (valor: string) => void;
  aoAdicionar: (evento: FormEvent) => void;
}

export function FormularioDespesa({
  descricao,
  valor,
  salvando,
  aoAlterarDescricao,
  aoAlterarValor,
  aoAdicionar,
}: FormularioDespesaProps) {

  return (
    <>
      <h3>Adicionar despesa</h3>

      <Formulario
        className="finance-page__budget-form"
        onSubmit={aoAdicionar}
      >
        <Campo
          rotulo="Descrição"
          required
          value={descricao}
          onChange={(e) =>
            aoAlterarDescricao(e.target.value)
          }
        />

        <Campo
          rotulo="Valor (R$)"
          type="number"
          min="0.01"
          step="0.01"
          required
          value={valor}
          onChange={(e) =>
            aoAlterarValor(e.target.value)
          }
        />

        <Button
          type="submit"
          disabled={salvando}
        >
          Adicionar
        </Button>
      </Formulario>
    </>
  );
}