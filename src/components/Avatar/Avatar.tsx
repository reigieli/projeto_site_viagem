import { useState } from 'react';
import { UserRound } from 'lucide-react';
import './Avatar.css';

export interface AvatarProps {
  nome?: string;
  imagem?: string;
  tamanho?: 'pequeno' | 'medio' | 'grande';
}
export function Avatar({
  nome = '',
  imagem,
  tamanho = 'medio',
}: Readonly<AvatarProps>) {
  const [erro, setErro] = useState('');
  const partes = nome.trim().split(/\s+/).filter(Boolean);
  const iniciais = (
    (partes[0]?.[0] ?? '') +
    (partes.length > 1 ? (partes.at(-1)?.[0] ?? '') : '')
  ).toUpperCase();
  return (
    <span
      className={`avatar avatar--${tamanho}`}
      role="img"
      aria-label={nome || 'Usuário'}
    >
      {imagem && erro !== imagem ? (
        <img src={imagem} alt="" onError={() => setErro(imagem)} />
      ) : (
        iniciais || <UserRound aria-hidden />
      )}
    </span>
  );
}
