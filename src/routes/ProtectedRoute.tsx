import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import type { UserRole } from "../types/user";

export function ProtectedRoute( { role }: { role?: UserRole }) {
    const { ehAutenticado, usuario, estaCarregando } = useAuth();
    const location = useLocation();

    if (estaCarregando) return null;
    if (!ehAutenticado) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }
    if (role && usuario?.role !== role) {
        return <Navigate to="/" replace />
    }

    return <Outlet />

}