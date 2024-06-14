import axios from "axios";
import { useAppDispatch } from "../hooks";

const API_URL = "http://localhost:8000/api/v1/users/";

const signup = async (userData) => {
  const response = await axios.post(API_URL + "signup", userData);
  console.log(response);
  return response;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }

  return response;
};

export const authService = { login, signup };
