/** Somente o adaptador conhece a API de armazenamento do navegador. */
export type PortaArmazenamento = Pick<Storage, 'getItem' | 'setItem'>;

export const chavesArmazenamento = {
  catalogo: 'roamly:local:v1:catalog',
  reserva: 'roamly:local:v1:booking',
  financeiro: 'roamly:local:v1:finance',
  perfil: 'roamly:local:v1:profile',
} as const;

/** Registro JSON versionado, inicializado somente na primeira leitura. */
export function criarRegistro<T>(
  storage: () => PortaArmazenamento,
  key: string,
  seed: () => T,
  isValid: (value: unknown) => value is T
) {
  function gravar(value: T): T {
    if (!isValid(value))
      throw new Error('Dados inválidos. A alteração não foi salva.');
    try {
      storage().setItem(key, JSON.stringify(value));
    } catch {
      throw new Error(
        'Não foi possível salvar no navegador. Verifique se o armazenamento está disponível.'
      );
    }
    return value;
  }
  function ler(): T {
    let raw: string | null;
    try {
      raw = storage().getItem(key);
    } catch {
      throw new Error('Não foi possível acessar o armazenamento do navegador.');
    }
    if (raw === null) return gravar(seed());
    try {
      const parsed: unknown = JSON.parse(raw);
      if (isValid(parsed)) return parsed;
    } catch {
      /* O registro original não é sobrescrito. */
    }
    throw new Error(
      `Dados locais inválidos (${key}). Verifique ou remova apenas esse registro para restaurar a demonstração.`
    );
  }
  return {
    ler,
    atualizar: (change: (current: T) => T) => gravar(change(ler())),
  };
}
