import { Formulario, FormularioAcoes } from '../../components/Formulario';
import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Alert } from '../../components/Alert/Alert';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';
import { CabecalhoPagina } from '../../components/CabecalhoPagina/CabecalhoPagina';
import { Campo } from '../../components/Field';
import { Card } from '../../components/Card/Card';
import { Etiqueta } from '../../components/Etiqueta/Etiqueta';
import { Carregamento } from '../../components/Carregamento/Carregamento';
import type { ResumoReserva } from '../../services/contratos';
import { servicos } from '../../services';
import type { Perfil } from '../../types/viagem';
import { useOutletContext } from 'react-router-dom';
import type { LayoutOutletContext } from '../../layouts/LayoutPrincipal/LayoutPrincipal';
import './MinhaConta.css';

export function MinhaConta() {
  const { atualizarPerfil } = useOutletContext<LayoutOutletContext>();
  const [reserva, setReserva] = useState<ResumoReserva | null>(null);
  const [profile, setProfile] = useState<Perfil | null>(null);
  const [draft, setDraft] = useState<Perfil>({
    name: '',
    email: '',
    phone: '',
  });
  const [carregando, setCarregando] = useState(true);
  const [tentativa, setTentativa] = useState(0);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let ativo = true;
    Promise.all([servicos.reserva.obter(), servicos.perfil.obter()])
      .then(([resumo, perfil]) => {
        if (!ativo) return;
        setReserva(resumo);
        setProfile(perfil);
        setDraft(perfil);
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

  async function salvarPerfil(e: FormEvent) {
    e.preventDefault();
    if (salvando) return;
    setSalvando(true);
    setErro(null);
    setSaved(false);
    try {
      const perfil = await servicos.perfil.atualizar(draft);
      setProfile(perfil);
      setDraft(perfil);
      atualizarPerfil(perfil);
      setSaved(true);
    } catch (e) {
      setErro(
        e instanceof Error ? e.message : 'Não foi possível salvar o perfil.'
      );
    } finally {
      setSalvando(false);
    }
  }

  if (carregando)
    return <Carregamento mensagem="Carregando dados…" centralizado />;
  if (!reserva || !profile)
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
  const { confirmed, destination } = reserva;
  return (
    <div className="account-page" aria-busy={salvando}>
      {erro && <Alert variante="perigo">{erro}</Alert>}
      <CabecalhoPagina
        titulo="Minha conta"
        descricao="Gerencie os dados fictícios do seu perfil. Os dados ficam salvos neste navegador."
      />
      <Card>
        <div className="account-page__profile">
          <Avatar nome={profile.name} tamanho="grande" />
          <div>
            <h2>{profile.name}</h2>
            <p className="account-page__muted">Perfil de demonstração</p>
          </div>
        </div>
        <Formulario espacamento="grande" onSubmit={salvarPerfil}>
          <Campo
            rotulo="Nome"
            required
            value={draft.name}
            onChange={(e) => {
              setDraft({ ...draft, name: e.target.value });
              setSaved(false);
            }}
          />
          <Campo
            rotulo="E-mail"
            type="email"
            required
            value={draft.email}
            onChange={(e) => {
              setDraft({ ...draft, email: e.target.value });
              setSaved(false);
            }}
          />
          <Campo
            rotulo="Telefone"
            type="tel"
            value={draft.phone}
            onChange={(e) => {
              setDraft({ ...draft, phone: e.target.value });
              setSaved(false);
            }}
          />
          <FormularioAcoes>
            <Button type="submit" larguraTotal disabled={salvando}>
              Salvar alterações
            </Button>
          </FormularioAcoes>
          {saved && (
            <Alert variante="sucesso">Perfil atualizado neste navegador.</Alert>
          )}
        </Formulario>
      </Card>
      <Card>
        <h2>Minha compra</h2>
        <p>Viagem para {destination.city}</p>
        <Etiqueta variante={confirmed ? 'sucesso' : 'alerta'}>
          {confirmed ? 'Confirmada (simulação)' : 'Em planejamento'}
        </Etiqueta>
      </Card>
    </div>
  );
}
