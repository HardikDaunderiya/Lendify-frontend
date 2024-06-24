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

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    reset: (state) => initialState,
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
      );
  },
});

export const { reset } = businessSlice.actions;
export default businessSlice.reducer;
