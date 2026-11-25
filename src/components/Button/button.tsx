import { Link, type LinkProps } from 'react-router-dom';
import type { ComponentProps } from 'react';

{/* <ButtonLink variant="outline" to="/login">Entrar</ButtonLink>
<ButtonLink to="/cadastro">Cadastrar-se</ButtonLink>
<Button variant="outline" onClick={logout}>Sair</Button> */}

type Variant = 'primary' | 'outline';

type StyleProps = {
  variant?: Variant;
  fullWidth?: boolean;
};

function buttonClasses({
  variant = 'primary',
  fullWidth = false,
  className,
}: StyleProps & { className?: string }) {
  return ['button', `button--${variant}`, fullWidth && 'button--full', className]
    .filter(Boolean)
    .join(' ');
}

export function Button({
  variant,
  fullWidth,
  type = 'button',
  className,
  ...props
}: ComponentProps<'button'> & StyleProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, fullWidth, className })}
      {...props}
    />
  );
}

export function ButtonLink({
  variant,
  fullWidth,
  className,
  ...props
}: LinkProps & StyleProps) {
  return <Link className={buttonClasses({ variant, fullWidth, className })} {...props} />;
}