export const formatarMoeda = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
export const formatarData = (value: string) =>
  value ? value.split('-').reverse().join('/') : '—';
export const obterUrlImagem = (name: string) =>
  `${import.meta.env.BASE_URL}images/${encodeURIComponent(name)}`;
export { contarNoites } from './contarNoites';
