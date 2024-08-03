import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store"; // Ensure this path matches your project structure

export interface Location {
  name: string;
  code: string;
  description: string;
}

interface ApiResponse {
  status: string;
  data: Location[];
  message: string;
}

interface QuickCodesState {
  states: Location[];
  domains: Location[];
  loading: boolean;
  error: string | null;
}

const initialState: QuickCodesState = {
  states: [],
  domains: [],
  loading: false,
  error: null,
};

// Thunks for fetching states and domains
export const fetchStates = createAsyncThunk<
  Location[],
  void,
  { state: RootState }
>("quickCodes/fetchStates", async () => {
  const response = await axios.get<ApiResponse>("/api/states");
  return response.data.data;
});

export const fetchDomains = createAsyncThunk<
  Location[],
  void,
  { state: RootState }
>("quickCodes/fetchDomains", async () => {
  const response = await axios.get<ApiResponse>("/api/domains");
  return response.data.data;
});

const quickCodesSlice = createSlice({
  name: "quickCodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload;
      })
      .addCase(fetchStates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(fetchDomains.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDomains.fulfilled, (state, action) => {
        state.loading = false;
        state.domains = action.payload;
      })
      .addCase(fetchDomains.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default quickCodesSlice.reducer;
