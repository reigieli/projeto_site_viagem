import { useState } from 'react';
import type { FormEvent } from 'react';
import { useAuth } from '../../context/authContext';
import type { UserUpdateRequest } from '../../types/user';
import { Alert } from '../../components/Alert/Alert';
import { Button } from '../../components/Button/button';
import { Card } from '../../components/Card/Card';
import { Formulario } from '../../components/Formulario/Formulario';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { getErrorMessage } from '../../utils/errors';
import { formatDateLong, maskCpf } from '../../utils/masks';
import { isValid, validateEmail, validateName } from '../../utils/validators';
import './ProfilePage.css';

type Fields = { name: string; email: string };

const ROLE_LABEL = { CLIENT: 'Cliente', ADMIN: 'Administrador' } as const;

export function ProfilePage() {
  const { usuario, atualizarUsuario } = useAuth();

  const [editando, setEditando] = useState(false);
  const [values, setValues] = useState<Fields>({ name: usuario?.name ?? '', email: usuario?.email ?? '' });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [serverError, setServerError] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [salvando, setSalvando] = useState(false);

  // a rota é protegida, mas o tipo do contexto aceita null
  if (!usuario) return null;

  const alterado =
    values.name.trim() !== usuario.name || values.email.trim() !== usuario.email;

  function handleChange(field: keyof Fields, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: '' }));
  }

  function iniciarEdicao() {
    setSucesso('');
    setServerError('');
    setEditando(true);
  }

  function cancelarEdicao() {
    if (!usuario) return;
    setValues({ name: usuario.name, email: usuario.email });
    setErrors({});
    setServerError('');
    setEditando(false);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!usuario) return;
    setServerError('');

    const nextErrors = {
      name: validateName(values.name),
      email: validateEmail(values.email),
    };
    setErrors(nextErrors);
    if (!isValid(nextErrors)) return;

    // envia só o que mudou
    const changes: UserUpdateRequest = {};
    if (values.name.trim() !== usuario.name) changes.name = values.name.trim();
    if (values.email.trim() !== usuario.email) changes.email = values.email.trim();

    setSalvando(true);
    try {
      await atualizarUsuario(changes);
      setEditando(false);
      setSucesso('Dados atualizados com sucesso!');
    } catch (error) {
      setServerError(getErrorMessage(error, 'Não foi possível salvar as alterações.'));
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div className="profile">
      <PageHeader
        tag="MINHA CONTA"
        title="Dados pessoais"
        subtitle="Consulte e atualize as informações da sua conta."
        actions={
          !editando && (
            <Button variant="outline" onClick={iniciarEdicao}>
              Editar dados
            </Button>
          )
        }
      />

      {sucesso && <Alert variant="success">{sucesso}</Alert>}
      {serverError && <Alert variant="error">{serverError}</Alert>}

      <div className="profile__grid">
        <Card className="profile__summary">
          <h2 className="profile__name">{usuario.name}</h2>
          <p className="profile__email">{usuario.email}</p>

          <div className="profile__badges">
            <span className="badge badge-success">{usuario.is_active ? 'Conta ativa' : 'Conta inativa'}</span>
            <span className="badge profile__badge-role">{ROLE_LABEL[usuario.role]}</span>
          </div>

          <p className="profile__since">Membro desde {formatDateLong(usuario.create_at)}</p>
        </Card>

        <Card>
          <form onSubmit={handleSubmit} noValidate>
            <h3 className="profile__section-title">INFORMAÇÕES PESSOAIS</h3>

            <div className="form-row">
              <Formulario
                label="Nome completo"
                name="name"
                autoComplete="name"
                readOnly={!editando}
                value={editando ? values.name : usuario.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={errors.name}
              />

              <Formulario
                label="E-mail"
                type="email"
                name="email"
                autoComplete="email"
                readOnly={!editando}
                value={editando ? values.email : usuario.email}
                onChange={(e) => handleChange('email', e.target.value)}
                error={errors.email}
              />
            </div>

            <Formulario
              label="CPF"
              name="cpf"
              readOnly
              value={maskCpf(usuario.cpf)}
              hint={editando ? 'O CPF não pode ser alterado.' : undefined}
            />

            {editando && (
              <div className="profile__actions">
                <Button variant="outline" onClick={cancelarEdicao} disabled={salvando}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={!alterado || salvando}>
                  {salvando ? 'Salvando...' : 'Salvar alterações'}
                </Button>
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
}

export default ProfilePage;
