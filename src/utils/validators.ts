import { onlyDigits } from './masks';

/*
  Cada validador devolve a mensagem de erro (string) ou '' quando está válido.
  São usados no Login, Cadastro e Minha Conta, então as regras ficam em um lugar só.
*/

export const MIN_PASSWORD_LENGTH = 8;

export function validateName(value: string): string {
  const name = value.trim();
  if (!name) return 'Informe seu nome completo.';
  if (name.length < 3) return 'O nome deve ter pelo menos 3 caracteres.';
  return '';
}

export function validateEmail(value: string): string {
  const email = value.trim();
  if (!email) return 'Informe seu e-mail.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Informe um e-mail válido.';
  return '';
}

export function validateCpf(value: string): string {
  const cpf = onlyDigits(value);
  if (!cpf) return 'Informe seu CPF.';
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return 'CPF inválido.';

  const digit = (length: number) => {
    let sum = 0;
    for (let i = 0; i < length; i++) sum += Number(cpf[i]) * (length + 1 - i);
    const rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  if (digit(9) !== Number(cpf[9]) || digit(10) !== Number(cpf[10])) return 'CPF inválido.';
  return '';
}

export function validatePassword(value: string): string {
  if (!value) return 'Informe sua senha.';
  if (value.length < MIN_PASSWORD_LENGTH) {
    return `A senha deve ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres.`;
  }
  return '';
}

export function validatePasswordConfirmation(password: string, confirmation: string): string {
  if (!confirmation) return 'Confirme sua senha.';
  if (password !== confirmation) return 'As senhas não conferem.';
  return '';
}

/** true se nenhum campo do objeto de erros tem mensagem */
export function isValid(errors: Record<string, string>): boolean {
  return Object.values(errors).every((message) => !message);
}
