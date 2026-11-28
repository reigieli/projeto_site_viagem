import { useEffect, useState, type FormEvent } from 'react';
import { Button } from '../../components/Button/Button';
import { CabecalhoPagina } from '../../components/CabecalhoPagina/CabecalhoPagina';
import { Card } from '../../components/Card/Card';
import { Alert } from '../../components/Alert/Alert';
import { Carregamento } from '../../components/Carregamento/Carregamento';
import type { DadosFinanceiros } from '../../services/contratos';
import { servicos } from '../../services';
import { ControleOrcamento } from './components/ControleOrcamento';
import { FormularioDespesa } from './components/FormularioDespesa';
import { ResumoFinanceiro } from './components/ResumoFinanceiro';
import { TabelaDespesas } from './components/TabelaDespesa';
import './Financeiro.css';

export function Financeiro() {
  const [data, setData] = useState<DadosFinanceiros | null>(null);
  const [payable, setPayable] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [tentativa, setTentativa] = useState(0);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [budgetDraft, setBudgetDraft] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    let ativo = true;
    Promise.all([servicos.reserva.obter(), servicos.financeiro.obter()])
      .then(([reserva, financeiro]) => {
        if (!ativo) return;
        setPayable(reserva.payable);
        setData(financeiro);
        setBudgetDraft(String(financeiro.budget));
      })
      .catch((e: unknown) => {
        if (ativo)
          setErro(
            e instanceof Error
              ? e.message
              : 'Não foi possível carregar os dados.'
          );
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });
    return () => {
      ativo = false;
    };
  }, [tentativa]);

  if (carregando)
    return <Carregamento mensagem="Carregando dados…" centralizado />;
  if (!data)
    return (
      <Alert variante="perigo">
        {erro ?? 'Dados indisponíveis.'}
        <Button
          variante="contorno"
          tamanho="pequeno"
          onClick={() => {
            setErro(null);
            setCarregando(true);
            setTentativa((anterior) => anterior + 1);
          }}
        >
          Tentar novamente
        </Button>
      </Alert>
    );
  const { budget, expenses } = data;

  const extra = expenses.reduce((sum, item) => sum + item.value, 0);
  const spent = payable + extra;
  const saldo = budget - spent;
  const estourado = saldo < 0;

  const resumos = [
    { titulo: 'Pacote de viagem', valor: payable },
    { titulo: 'Gastos extras', valor: extra },
    { titulo: 'Total estimado', valor: spent },
  ];

  async function salvarOrcamento(e: FormEvent) {
    e.preventDefault();
    if (salvando) return;
    setSalvando(true);
    setErro(null);
    try {
      const atualizado = await servicos.financeiro.atualizarOrcamento(
        Number(budgetDraft)
      );
      setData(atualizado);
      setBudgetDraft(String(atualizado.budget));
    } catch (e) {
      setErro(
        e instanceof Error ? e.message : 'Não foi possível salvar o orçamento.'
      );
    } finally {
      setSalvando(false);
    }
  }

  async function adicionarDespesa(e: FormEvent) {
    e.preventDefault();
    if (salvando) return;
    setSalvando(true);
    setErro(null);
    try {
      setData(
        await servicos.financeiro.adicionarDespesa(description, Number(value))
      );
      setDescription('');
      setValue('');
    } catch (e) {
      setErro(
        e instanceof Error ? e.message : 'Não foi possível adicionar a despesa.'
      );
    } finally {
      setSalvando(false);
    }
  }

  async function removerDespesa(id: string) {
    if (salvando) return;
    setSalvando(true);
    setErro(null);
    try {
      setData(await servicos.financeiro.removerDespesa(id));
    } catch (e) {
      setErro(
        e instanceof Error ? e.message : 'Não foi possível remover a despesa.'
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
  <div
    className="finance-page"
    aria-busy={salvando}
  >
    {erro && (
      <Alert variante="perigo">
        {erro}
      </Alert>
    )}

    <CabecalhoPagina
      titulo="Controle financeiro"
      descricao="Acompanhe o custo do pacote e suas despesas adicionais."
    />

    <ResumoFinanceiro
      pacote={payable}
      gastosExtras={extra}
      total={spent}
    />

    <ControleOrcamento
      orcamento={budget}
      total={spent}
      valorFormulario={budgetDraft}
      salvando={salvando}
      aoAlterar={setBudgetDraft}
      aoSalvar={salvarOrcamento}
    />

    <Card>
      <FormularioDespesa
        descricao={description}
        valor={value}
        salvando={salvando}
        aoAlterarDescricao={setDescription}
        aoAlterarValor={setValue}
        aoAdicionar={adicionarDespesa}
      />

      <TabelaDespesas
        despesas={expenses}
        salvando={salvando}
        aoRemover={removerDespesa}
      />
    </Card>
  </div>
);
}
