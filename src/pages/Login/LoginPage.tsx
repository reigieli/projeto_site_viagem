import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { ApiError } from '../../service/apiClient';
import { Alert } from '../../components/Alert/Alert';
import { Button } from '../../components/Button/button';
import { Formulario } from '../../components/Formulario/Formulario';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { PasswordField } from '../../components/PasswordField/PasswordField';
import { getErrorMessage } from '../../utils/errors';
import { isValid, validateEmail } from '../../utils/validators';

type Fields = { email: string; password: string };

export function LoginPage() {
  const { login } = useAuth();
  const [values, setValues] = useState<Fields>({ email: '', password: '' });
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
      email: validateEmail(values.email),
      password: values.password ? '' : 'Informe sua senha.',
    };
    setErrors(nextErrors);
    if (!isValid(nextErrors)) return;

    setEnviando(true);
    try {
      // Se der certo, o AuthLayout redireciona sozinho (para a Home ou a página que o usuário tentou acessar).
      await login({ email: values.email.trim(), password: values.password });
    } catch (error) {
      setServerError(
        error instanceof ApiError && error.status === 401
          ? 'E-mail ou senha incorretos.'
          : getErrorMessage(error, 'Não foi possível entrar. Tente novamente.'),
      );
      setEnviando(false);
    }
  }

  return (
    <>
      <PageHeader tag="BEM-VINDO DE VOLTA" title="Entrar na sua conta" subtitle="Acesse para continuar planejando suas viagens." />

      {serverError && <Alert variant="error">{serverError}</Alert>}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
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

        <PasswordField
          label="Senha"
          name="password"
          autoComplete="current-password"
          placeholder="Sua senha"
          value={values.password}
          onChange={(e) => handleChange('password', e.target.value)}
          error={errors.password}
        />

        <Button type="submit" fullWidth className="auth-form__submit" disabled={enviando}>
          {enviando ? 'Entrando...' : 'Entrar'}
        </Button>
      </form>

      <p className="auth-switch">
        Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </>
  );
}

export default LoginPage;
