import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

/**
 * Componente de botão reutilizável que permite personalizar sua aparência
 * por meio das propriedades `variante` e `fullWidth`.
 *
 * - variante: define o estilo do botão ('primary' ou 'outline'), sendo
 *   'primary' o padrão.
 * - fullWidth: quando true, faz o botão ocupar 100% da largura disponível.
 * - className: permite adicionar classes CSS personalizadas.
 * - props: recebe e repassa todas as propriedades nativas de um elemento
 *   HTML button, como onClick, disabled e type.
 *
 * Os estilos são aplicados dinamicamente por meio de classes CSS,
 * mantendo o componente reutilizável e flexível.
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variante = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClass = 'btn';
  const varianteClass = `btn--${variante}`;
  const widthClass = fullWidth ? 'btn--full' : '';

  return (
    <button className={`${baseClass} ${varianteClass} ${widthClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};