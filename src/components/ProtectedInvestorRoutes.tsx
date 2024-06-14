import { useAppSelector } from "@/store/hooks";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedInvestorRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);

  //   const navigate = useNavigate();
  //   const [loader, setLoader] = useState(true);
  console.log(user);

  if (user && user.Role === 2) {
    // console.log("I am inside a protected roite");
    return <Outlet />;
  } else {
    return <Navigate to="/investor/login" />;
  }
};
