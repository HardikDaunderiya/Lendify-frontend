import { useAppSelector } from "@/store/hooks";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedInvestorRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);

  //   const navigate = useNavigate();
  //   const [loader, setLoader] = useState(true);
  //    console.log(user);

  // role id = 2 says that it is an Owner

  if (user && user.Role === 1) {
    // console.log("I am inside a protected roite");
    return <Outlet />;
  } else {
    return <Navigate to="/owner/login" />;
  }
};
