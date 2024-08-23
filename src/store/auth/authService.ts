import axios from "axios";
import { setAccessToken } from "@/lib/helper";

const API_URL = "http://localhost:8000/api/v1/users/";

const signup = async (userData) => {
  const response = await axios.post(API_URL + "signup", userData);
  return response;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("userInfo", JSON.stringify(response.data.data));
    setAccessToken(response.data.data.access_token);
  }
  return response;
};

const logout = async () => {
  const response = await axios.post(API_URL + "logout");
  return response;
};

export const authService = { login, signup };

