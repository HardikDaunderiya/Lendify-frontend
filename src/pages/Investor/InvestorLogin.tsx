import Login from "@/components/Login";
import { LoadingSpinner } from "@/components/ui/LoadingSpinnet";
import { useToast } from "@/components/ui/use-toast";
import { login, reset } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InvestorLogin = () => {
  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (isError == true) {
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
    }
    if (isSuccess && user) {
      navigate("/investor/feed"); // Adjust the route as necessary
      toast({
        variant: "successfully",
        title: "Success",
        description: message,
      });
      //Navigate to the next route over here
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, dispatch, navigate, toast]);

  const onSubmit = (data) => {
    const userData = {
      user_email: String(data.email),
      user_password: String(data.password),
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    console.log("Loading....");
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Login title={"Investor Login"} onSubmit={onSubmit} />
    </div>
  );
};

export default InvestorLogin;
