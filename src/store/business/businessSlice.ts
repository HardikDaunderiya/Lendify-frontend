// businessSlice.js
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { businessService } from "./businessService";

interface Business {
  business_owner_firstname: string;
  business_owner_lastname: string;
  business_email: string;
  business_contact: string;
  business_name: string;
  business_ratings: number;
  business_minamount: number;
}

interface BusinessState {
  businesses: Business[];
  business: Business | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  message: string;
}

export const fetchBusinesses = createAsyncThunk<
  Business[], // Specify the return type as Business[]
  void, // Specify the type of the first argument as void
  { rejectValue: string } // Specify the type of the `rejectValue` option
>("business/fetchBusinesses", async (_, thunkAPI) => {
  try {
    console.log("in slice");

    const response = await businessService.fetchBusinesses();
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    const message =
      error.response?.data?.message || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchBusinessById = createAsyncThunk<
  Business, // Specify the return type as Business
  string, // Specify the type of the first argument as string (id)
  { rejectValue: string } // Specify the type of the `rejectValue` option
>("business/fetchBusinessById", async (id, thunkAPI) => {
  try {
    const response = await businessService.fetchBusinessById(id);
    console.log(response);
    return response.data;
  } catch (error: any) {
    const message = error.message || "Failed to fetch business by ID";
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState: BusinessState = {
  businesses: [],
  business: null,
  status: "idle",
  error: null,
  message: "",
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinesses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchBusinesses.fulfilled,
        (state, action: PayloadAction<Business[]>) => {
          state.status = "succeeded";
          state.businesses = action.payload.business_info;
          // console.log(state.businesses);
        }
      )
      .addCase(
        fetchBusinesses.rejected,
        (state, action: PayloadAction<string>) => {
          state.status = "failed";
          state.message = action.payload;
        }
      )
      .addCase(fetchBusinessById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchBusinessById.fulfilled,
        (state, action: PayloadAction<Business>) => {
          state.status = "succeeded";
          state.business = action.payload;
          console.log(action);
        }
      )
      .addCase(
        fetchBusinessById.rejected,
        (state, action: PayloadAction<string>) => {
          state.status = "failed";
          state.message = action.payload;
        }
      );
  },
});

export default businessSlice.reducer;
