import { Navigate, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../components/Layout/AppLayout';
import { AuthLayout } from '../components/Layout/AuthLayout';
import { HomePage } from '../pages/Home/HomePage';
import { LoginPage } from '../pages/Login/LoginPage';
import { RegisterPage } from '../pages/Cadastro/RegisterPage';
import { ProfilePage } from '../pages/Perfil/ProfilePage';
import { PrototipoPage } from '../pages/Prototipo/PrototipoPage';
import { ProtectedRoute } from './ProtectedRoute';

export function AppRoutes() {
  return (
    <Routes>
      {/* Aplicação principal com Header/Footer */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />

        {/* Só para usuários logados (senão vai para /login e volta depois) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/perfil" element={<ProfilePage />} />
        </Route>
      </Route>

      {/* Autenticação com layout dividido */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
      </Route>

      {/* Protótipo antigo (sidebar + telas 9 a 12), preservado */}
      <Route path="/prototipo" element={<PrototipoPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
