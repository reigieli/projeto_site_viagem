import { forwardRef, useId } from 'react';
import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from 'react';
import './Field.css';

export interface CampoComumProps {
  rotulo: string;
  erro?: string;
  descricao?: string;
  icone?: ReactNode;
}
export type FieldProps = InputHTMLAttributes<HTMLInputElement> &
  CampoComumProps;
export type CampoSelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  CampoComumProps;
export type CampoTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  CampoComumProps;
export type CampoCheckboxProps = Omit<FieldProps, 'type'>;
export type CampoRadioProps = Omit<FieldProps, 'type'>;
export type CampoArquivoProps = Omit<
  FieldProps,
  'type' | 'value' | 'defaultValue'
>;
export type CampoRangeProps = Omit<FieldProps, 'type'>;

function useCampo(
  id: string | undefined,
  erro?: string,
  descricao?: string,
  externo?: string
) {
  const gerado = useId();
  const identificador = id ?? gerado;
  const mensagemId =
    erro || descricao ? `${identificador}-descricao` : undefined;
  return {
    identificador,
    mensagemId,
    describedBy: [externo, mensagemId].filter(Boolean).join(' ') || undefined,
  };
}

function EstruturaCampo({
  rotulo,
  erro,
  descricao,
  icone,
  identificador,
  mensagemId,
  children,
  inline = false,
}: CampoComumProps & {
  identificador: string;
  mensagemId?: string;
  children: ReactNode;
  inline?: boolean;
}) {
  const rotuloElemento = (
    <label htmlFor={identificador} className="campo__rotulo">
      {rotulo}
    </label>
  );
  return (
    <div className={`campo${inline ? ' campo--inline' : ''}`}>
      {!inline && rotuloElemento}
      <div className="campo__controle">
        {icone}
        {children}
        {inline && rotuloElemento}
      </div>
      {(erro || descricao) && (
        <span
          id={mensagemId}
          className={`campo__descricao${erro ? ' campo__descricao--erro' : ''}`}
        >
          {erro || descricao}
        </span>
      )}
    </div>
  );
}

/** Aceita todos os atributos nativos de input, inclusive ref para bibliotecas de formulário. */
export const Campo = forwardRef<HTMLInputElement, FieldProps>(function Campo(
  {
    rotulo,
    erro,
    descricao,
    id,
    icone,
    type = 'text',
    className = '',
    'aria-describedby': ariaDescricao,
    'aria-invalid': ariaInvalido,
    ...props
  },
  ref
) {
  const { identificador, mensagemId, describedBy } = useCampo(
    id,
    erro,
    descricao,
    ariaDescricao
  );
  return (
    <EstruturaCampo
      rotulo={rotulo}
      erro={erro}
      descricao={descricao}
      icone={icone}
      identificador={identificador}
      mensagemId={mensagemId}
      inline={type === 'checkbox' || type === 'radio'}
    >
      <input
        {...props}
        ref={ref}
        type={type}
        id={identificador}
        aria-invalid={erro ? true : ariaInvalido}
        aria-describedby={describedBy}
        className={`campo__entrada ${className}`}
      />
    </EstruturaCampo>
  );
});

export const CampoSelect = forwardRef<HTMLSelectElement, CampoSelectProps>(
  function CampoSelect(
    {
      rotulo,
      erro,
      descricao,
      id,
      icone,
      children,
      className = '',
      'aria-describedby': ariaDescricao,
      'aria-invalid': ariaInvalido,
      ...props
    },
    ref
  ) {
    const { identificador, mensagemId, describedBy } = useCampo(
      id,
      erro,
      descricao,
      ariaDescricao
    );
    return (
      <EstruturaCampo
        rotulo={rotulo}
        erro={erro}
        descricao={descricao}
        icone={icone}
        identificador={identificador}
        mensagemId={mensagemId}
      >
        <select
          {...props}
          ref={ref}
          id={identificador}
          aria-invalid={erro ? true : ariaInvalido}
          aria-describedby={describedBy}
          className={`campo__entrada ${className}`}
        >
          {children}
        </select>
      </EstruturaCampo>
    );
  }
);

export const CampoTextarea = forwardRef<
  HTMLTextAreaElement,
  CampoTextareaProps
>(function CampoTextarea(
  {
    rotulo,
    erro,
    descricao,
    id,
    icone,
    className = '',
    'aria-describedby': ariaDescricao,
    'aria-invalid': ariaInvalido,
    ...props
  },
  ref
) {
  const { identificador, mensagemId, describedBy } = useCampo(
    id,
    erro,
    descricao,
    ariaDescricao
  );
  return (
    <EstruturaCampo
      rotulo={rotulo}
      erro={erro}
      descricao={descricao}
      icone={icone}
      identificador={identificador}
      mensagemId={mensagemId}
    >
      <textarea
        {...props}
        ref={ref}
        id={identificador}
        aria-invalid={erro ? true : ariaInvalido}
        aria-describedby={describedBy}
        className={`campo__entrada ${className}`}
      />
    </EstruturaCampo>
  );
});

export const CampoCheckbox = forwardRef<HTMLInputElement, CampoCheckboxProps>(
  function CampoCheckbox(props, ref) {
    return <Campo {...props} ref={ref} type="checkbox" />;
  }
);
export const CampoRadio = forwardRef<HTMLInputElement, CampoRadioProps>(
  function CampoRadio(props, ref) {
    return <Campo {...props} ref={ref} type="radio" />;
  }
);
export const CampoArquivo = forwardRef<HTMLInputElement, CampoArquivoProps>(
  function CampoArquivo(props, ref) {
    return <Campo {...props} ref={ref} type="file" />;
  }
);
export const CampoRange = forwardRef<HTMLInputElement, CampoRangeProps>(
  function CampoRange(props, ref) {
    return <Campo {...props} ref={ref} type="range" />;
  }
);
