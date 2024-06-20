import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, reset } from "@/store/auth/authSlice"; // Ensure correct paths
import Login from "@/components/Login";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useToast } from "@/components/ui/use-toast";
import { LoadingSpinner } from "@/components/ui/LoadingSpinnet";

const OwnerLogin = () => {
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
      navigate("/owner/dashboard"); // Adjust the route as necessary

      toast({
        variant: "sucessfull",
        title: "Success",
        description: message,
      });
      //Navigate to the next route over here
      // navigate("/next-route"); // Adjust the route as necessary
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
      <Login title={"Owner Login"} onSubmit={onSubmit} />
    </div>
  );
};

export default OwnerLogin;
