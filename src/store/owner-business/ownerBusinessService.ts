//apis
//fetch Business byowner
//fetch Busineess by ID
//Create Business
import axios from "axios";
import { getAccessToken } from "@/lib/helper";
export const fetchBusinesses = async () => {
  console.log("in business");

  // Retrieve and parse the user token from localStorage

  const response = await axios.get(
    "http://localhost:8000/api/v1/business/owner",
    {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }
  );
  // console.log(response);
  return response.data;
};

// export const createBusiness = async()=>{

// };

export const fetchBusinessById = async (id) => {
  const response = await axios.get(
    `http://localhost:8000/api/v1/business/${id}`,
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
