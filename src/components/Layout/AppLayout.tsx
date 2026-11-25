import { Outlet } from 'react-router-dom';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';
import './Layout.css';

/* Layout das páginas internas: Header + conteúdo + Footer. */
export function AppLayout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-shell__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
