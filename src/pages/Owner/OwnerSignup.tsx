import { useEffect } from "react";
import SignupForm from "@/components/Signup";
import { reset, signup } from "@/store/auth/authSlice";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

function OwnerSignup() {
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
      navigate("/owner/login"); // Adjust the route as necessary
      toast({
        variant: "successfully",
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
        user_role_id: 1, // Assuming role id 2 for investor
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
      <SignupForm onSubmit={handleSubmit} title={"Owner Signup"} />
    </div>
  );
}

export default OwnerSignup;
