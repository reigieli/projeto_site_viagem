import { useId } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import '../Formulario/Formulario.css';

type FormularioProps = Omit<ComponentProps<'input'>, 'className'> & {
  label: string;
  error?: string;
  hint?: string;
  /** conteúdo posicionado dentro do campo, à direita (ex: botão "mostrar senha") */
  trailing?: ReactNode;
};

/*
  Campo de formulário padrão: label + input + dica + mensagem de erro.
  Reaproveita as classes de Formulario.css (.form-group, .form-label, .form-input).

  <Formulario label="E-mail" type="email" value={email} onChange={...} error={erros.email} />
*/
export function Formulario({ label, error, hint, trailing, id, ...inputProps }: FormularioProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const messageId = `${inputId}-message`;
  const hasMessage = Boolean(error || hint);

  const inputClasses = [
    'form-input',
    error && 'form-input--error',
    trailing && 'form-input--with-trailing',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={inputId}>
        {label}
      </label>

      <div className="form-control">
        <input
          id={inputId}
          className={inputClasses}
          aria-invalid={error ? true : undefined}
          aria-describedby={hasMessage ? messageId : undefined}
          {...inputProps}
        />
        {trailing && <div className="form-control__trailing">{trailing}</div>}
      </div>

      {error ? (
        <span id={messageId} className="form-error" role="alert">
          {error}
        </span>
      ) : (
        hint && (
          <span id={messageId} className="form-hint">
            {hint}
          </span>
        )
      )}
    </div>
  );
}
