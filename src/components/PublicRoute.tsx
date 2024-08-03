import { useAppSelector } from "@/store/hooks";
import { Outlet, Navigate } from "react-router-dom";

export const PublicRoute = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (user) {
    // If user is logged in, redirect to the appropriate page
    if (user.user_role_id === 2) {
      return <Navigate to="/investor/feed" />;
    } else if (user.user_role_id === 1) {
      return <Navigate to="/owner/mybusiness" />; // Replace with the appropriate owner page
    }
  }

  return <Outlet />;
};
