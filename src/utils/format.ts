export const money = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
export const dateLabel = (value: string) =>
  value ? value.split('-').reverse().join('/') : '—';
export const imageUrl = (name: string) =>
  `${import.meta.env.BASE_URL}images/${encodeURIComponent(name)}`;
export const countNights = (start: string, end: string) =>
  Math.max(
    1,
    Math.round((Date.parse(end) - Date.parse(start)) / 86400000) || 1
  );
