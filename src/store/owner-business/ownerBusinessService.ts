import axios from "axios";
import { getAccessToken } from "@/lib/helper";

export const fetchBusinesses = async () => {
  console.log("in business");
  const response = await axios.get(
    "http://localhost:8000/api/v1/business/owner",
    {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }
  );
  return response.data;
};

export const fetchBusinessById = async (id: string) => {
  const response = await axios.get(
    `http://localhost:8000/api/v1/business/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }
  );
  return response.data;
};

export const createBusiness = async (businessDetails: any) => {
  const response = await axios.post(
    `http://localhost:8000/api/v1/business/createBusiness`,
    businessDetails,
    {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }
  );
  console.log(response.data); // Add this log to check the response structure
  return response.data; // Ensure this matches the expected structure
};

export const businessService = {
  fetchBusinesses,
  fetchBusinessById,
  createBusiness,
};
