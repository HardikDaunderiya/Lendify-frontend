import axios from "axios";

export const fetchBusinesses = async () => {
  const token = localStorage.getItem("user.token");
  const response = await axios.get(
    "http://localhost:8000/api/v1/investor/feed",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
console;
