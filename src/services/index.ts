import type { Servicos } from './contratos';
import { criarServicosLocais } from './local';

/** Ponto único de composição: trocar por criarServicosHttp() na integração REST. */
export const servicos: Servicos = criarServicosLocais(
  () => window.localStorage
);
