import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { businessService } from "./ownerBusinessService";
import {
  Business,
  BusinessFeedResponse,
  BusinessDetailResponse,
  BusinessState,
} from "./../../lib/types/BusinessTypes"; // Import the types

export const fetchBusinesses = createAsyncThunk<
  BusinessFeedResponse,
  void,
  { rejectValue: string }
>("business/fetchBusinesses", async (_, thunkAPI) => {
  try {
    const response = await businessService.fetchBusinesses();
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const createBusiness = createAsyncThunk(
  "business/createBusiness",
  async (businessDetails, thunkAPI) => {
    try {
      const response = await businessService.createBusiness(businessDetails);
      console.log(response); // Add this log to check the payload being returned
      return response; // Return the correct structure directly from response.data
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchBusinessById = createAsyncThunk<
  BusinessDetailResponse,
  string,
  { rejectValue: string }
>("business/fetchBusinessById", async (id, thunkAPI) => {
  try {
    const response = await businessService.fetchBusinessById(id);
    return response.data;
  } catch (error: any) {
    const message = error.message || "Failed to fetch business by ID";
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState: BusinessState = {
  businesses: [],
  business: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const ownerBusinessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    reset: (state) => {
      console.log("i am in reset");
      state.businesses = [];
      state.business = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinesses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchBusinesses.fulfilled,
        (state, action: PayloadAction<BusinessFeedResponse>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.businesses = action.payload.business_info;
        }
      )
      .addCase(
        fetchBusinesses.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      )
      .addCase(fetchBusinessById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchBusinessById.fulfilled,
        (state, action: PayloadAction<BusinessDetailResponse>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.business = action.payload;
        }
      )
      .addCase(
        fetchBusinessById.rejected,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      )
      .addCase(createBusiness.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBusiness.fulfilled, (state, action) => {
        console.log("i am here");
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        console.log("Fulfilled action payload:", action.payload); // Add this log to check the action payload
      })
      .addCase(createBusiness.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        console.log("Rejected action payload:", action.payload);
      });
  },
});

export const { reset } = ownerBusinessSlice.actions;
export default ownerBusinessSlice.reducer;
