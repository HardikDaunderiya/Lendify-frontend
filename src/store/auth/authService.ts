import axios from "axios";
import { useAppDispatch } from "../hooks";

const API_URL = "http://localhost:8000/api/v1/users/";

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response;
};

export const authService = { login };
