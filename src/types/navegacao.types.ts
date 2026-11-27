import type { LucideIcon } from 'lucide-react';

export interface ItemMenu {
  id: string;
  rotulo: string;
  caminho: string;
  icone: LucideIcon;
  caminhosRelacionados?: string[];
}

export interface GrupoMenu {
  id: string;
  titulo: string;
  itens: ItemMenu[];
}
