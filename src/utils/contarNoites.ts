/** Quantidade de noites usada na cotação ilustrativa. */
export const contarNoites = (start: string, end: string) =>
  Math.max(
    1,
    Math.round((Date.parse(end) - Date.parse(start)) / 86400000) || 1
  );
