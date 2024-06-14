import SignupForm from "@/components/Signup";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { reset, signup } from "@/store/auth/authSlice";

function InvestorSignup() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );
  const { toast } = useToast();
  useEffect(() => {
    if (isError == true) {
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
    }
    if (isSuccess) {
      navigate("/investor/login"); // Adjust the route as necessary
      toast({
        variant: "sucessfull",
        title: "Success",
        description: message,
      });
      //Navigate to the next route over here
    }

    dispatch(reset());
  }, [isLoading, isError, isSuccess, message, dispatch, navigate, toast]);
  const handleSubmit = async (data) => {
    // Handle investor-specific signup logic
    const payload = {
      ProfileDetails: {
        profile_name: data.profile_name,
      },
      UserDetails: {
        user_email: data.user_email,
        user_password: data.user_password,
        user_role_id: 2, // Assuming role id 2 for investor
      },
      AddressDetails: {
        address_street: data.address_street,
        address_city: data.address_city,
        address_state: data.address_state,
        address_country: data.address_country,
        address_zipcode: data.address_zipcode,
      },
    };

    dispatch(signup(payload));
  };

  return (
    <div>
      <SignupForm onSubmit={handleSubmit} title={"Investor Signup"} />
    </div>
  );
}

export default InvestorSignup;
