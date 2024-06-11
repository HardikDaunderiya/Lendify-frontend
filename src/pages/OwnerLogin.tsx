import Login from "@/components/Login";
import axios from "axios";
import React from "react";

const OwnerLogin = () => {
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          user_email: String(data.email),
          user_password: String(data.password),
        }
      );
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <div>
      <Login title={"Owner Login"} onSubmit={onSubmit} />
    </div>
  );
};

export default OwnerLogin;
