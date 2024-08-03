import { useAppSelector } from "@/store/hooks";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  allowedRoles: number[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  // ... (rest of the component code)

  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.user_role_id)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
export { ProtectedRoute };
