import { useState } from 'react';
import type { ComponentProps } from 'react';
import { Formulario } from '../Formulario/Formulario';
import './PasswordField.css';

type PasswordFieldProps = Omit<ComponentProps<typeof Formulario>, 'type' | 'trailing'>;

/* Formulario de senha com botão "Mostrar / Ocultar". */
export function PasswordField(props: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <Formulario
      {...props}
      type={visible ? 'text' : 'password'}
      trailing={
        <button
          type="button"
          className="password-toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
          aria-pressed={visible}
        >
          {visible ? 'Ocultar' : 'Mostrar'}
        </button>
      }
    />
  );
}
