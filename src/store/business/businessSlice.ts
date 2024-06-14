// businessSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBusinesses = createAsyncThunk(
  "business/fetchBusinesses",
  async () => {
    const response = await fetch("/api/businesses");
    return response.json();
  }
);

export const fetchBusinessById = createAsyncThunk(
  "business/fetchBusinessById",
  async (id) => {
    const response = await fetch(`/api/businesses/${id}`);
    return response.json();
  }
);

const businessSlice = createSlice({
  name: "business",
  initialState: {
    businesses: [],
    business: null,
    status: "idle",
    error: null,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinesses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBusinesses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.businesses = action.payload;
        state.message = action.payload.data.message;
      })
      .addCase(fetchBusinesses.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
        state.message = action.payload as string;
      })
      .addCase(fetchBusinessById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBusinessById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.business = action.payload;
        state.message = action.payload.data.message;
      })
      .addCase(fetchBusinessById.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
        state.message = action.payload as string;
      });
  },
});

export default businessSlice.reducer;
