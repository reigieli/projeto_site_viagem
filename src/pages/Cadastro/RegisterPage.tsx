import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Alert } from '../../components/Alert/Alert';
import { Button } from '../../components/Button/button';
import { Formulario } from '../../components/Formulario/Formulario';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { PasswordField } from '../../components/PasswordField/PasswordField';
import { getErrorMessage } from '../../utils/errors';
import { maskCpf, onlyDigits } from '../../utils/masks';
import {
  MIN_PASSWORD_LENGTH,
  isValid,
  validateCpf,
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordConfirmation,
} from '../../utils/validators';

type Fields = {
  name: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
};

const EMPTY: Fields = { name: '', email: '', cpf: '', password: '', confirmPassword: '' };

export function RegisterPage() {
  const { cadastro } = useAuth();
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [serverError, setServerError] = useState('');
  const [enviando, setEnviando] = useState(false);

  function handleChange(field: keyof Fields, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: '' }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setServerError('');

    const nextErrors = {
      name: validateName(values.name),
      email: validateEmail(values.email),
      cpf: validateCpf(values.cpf),
      password: validatePassword(values.password),
      confirmPassword: validatePasswordConfirmation(values.password, values.confirmPassword),
    };
    setErrors(nextErrors);
    if (!isValid(nextErrors)) return;

    setEnviando(true);
    try {
      // Se der certo, o AuthLayout redireciona sozinho para a Home (a API já devolve o usuário logado).
      await cadastro({
        name: values.name.trim(),
        email: values.email.trim(),
        cpf: onlyDigits(values.cpf),
        password: values.password,
      });
    } catch (error) {
      setServerError(getErrorMessage(error, 'Não foi possível criar a conta. Tente novamente.'));
      setEnviando(false);
    }
  }

  return (
    <>
      <PageHeader tag="CRIE SUA CONTA" title="Cadastre-se" subtitle="Leva menos de um minuto para começar a planejar." />

      {serverError && <Alert variant="error">{serverError}</Alert>}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <Formulario
          label="Nome completo"
          name="name"
          autoComplete="name"
          placeholder="Seu nome"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={errors.name}
        />

        <Formulario
          label="E-mail"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="voce@exemplo.com"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={errors.email}
        />

        <Formulario
          label="CPF"
          name="cpf"
          inputMode="numeric"
          placeholder="000.000.000-00"
          value={values.cpf}
          onChange={(e) => handleChange('cpf', maskCpf(e.target.value))}
          error={errors.cpf}
        />

        <div className="form-row">
          <PasswordField
            label="Senha"
            name="password"
            autoComplete="new-password"
            hint={`Mínimo de ${MIN_PASSWORD_LENGTH} caracteres.`}
            value={values.password}
            onChange={(e) => handleChange('password', e.target.value)}
            error={errors.password}
          />

          <PasswordField
            label="Confirmar senha"
            name="confirmPassword"
            autoComplete="new-password"
            value={values.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            error={errors.confirmPassword}
          />
        </div>

        <Button type="submit" fullWidth className="auth-form__submit" disabled={enviando}>
          {enviando ? 'Criando conta...' : 'Criar conta'}
        </Button>
      </form>

      <p className="auth-switch">
        Já tem conta? <Link to="/login">Entrar</Link>
      </p>
    </>
  );
}

export default RegisterPage;
