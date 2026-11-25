import { ApiError } from '../service/apiClient';

/* Converte qualquer erro lançado pelos serviços em uma mensagem amigável. */
export function getErrorMessage(error: unknown, fallback = 'Erro inesperado. Tente novamente.'): string {
  if (error instanceof ApiError) return error.message;
  if (error instanceof TypeError) return 'Não foi possível conectar ao servidor. Verifique sua internet.';
  return fallback;
}
