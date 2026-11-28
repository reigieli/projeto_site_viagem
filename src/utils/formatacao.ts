export const formatarMoeda = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
export const obterUrlImagem = (name: string) =>
  `${import.meta.env.BASE_URL}images/${encodeURIComponent(name)}`;
