import axios from "axios";
import { getAccessToken } from "@/lib/helper";
export const fetchBusinesses = async () => {
  console.log("in business");

  // Retrieve and parse the user token from localStorage

  const response = await axios.get(
    "http://localhost:8000/api/v1/investor/feed",
    {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }
  );
  console.log(response);
  return response.data;
};

export const fetchBusinessById = async (id) => {
  const response = await axios.get(
    `http://localhost:8000/api/v1/investor/business/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }
  );
  console.log(response.data);
  return response.data;
};

export const businessService = { fetchBusinesses, fetchBusinessById };
