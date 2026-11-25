import './footer.css'

const FOOTER_LINKS = [
  { label: 'Central de ajuda', to:'/ajuda'},
  { label: 'Termos de uso', to:'/termos'},
  { label: 'Politica de privacidade', to:'/privacidade'},
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <nav aria-label='links do rodapé'>
        <ul className='footer__links'>
          {FOOTER_LINKS.map(({ label, to}) => (
            <li key={to} className='footer__item'>
              {label}
            </li>
          ))}
        </ul>
      </nav>
      <p className='footer__copyright'>
        &copy; {year} ROAMLY. Todos os direitos reservados.
      </p>
    </footer>
  );
}