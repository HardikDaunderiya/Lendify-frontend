import React from "react";
import SignupForm from "@/components/Signup";
import axios from "axios";

function OwnerSignup() {
  const handleSubmit = async (data) => {
    // Handle investor-specific signup logic
    const payload = {
      ProfileDetails: {
        profile_name: data.profile_name,
      },
      UserDetails: {
        user_email: data.user_email,
        user_password: data.user_password,
        user_role_id: 1, // Assuming role id 1 for investor
      },
      AddressDetails: {
        address_street: data.address_street,
        address_city: data.address_city,
        address_state: data.address_state,
        address_country: data.address_country,
        address_zipcode: data.address_zipcode,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/signup",
        payload
      );
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <SignupForm onSubmit={handleSubmit} title={"Owner Signup"} />
    </div>
  );
}

export default OwnerSignup;
