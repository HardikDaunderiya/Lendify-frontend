import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService"; // Reuse existing authService functions

interface LoginUser {
  user_email: string;
  user_password: string;
}

interface ProfileDetails {
  profile_name: string;
}

interface UserDetails {
  user_email: string;
  user_password: string;
  user_role_id: number;
}

interface AddressDetails {
  address_street: string;
  address_city: string;
  address_state: string;
  address_country: string;
  address_zipcode: string;
}

interface SignUpUser {
  ProfileDetails: ProfileDetails;
  UserDetails: UserDetails;
  AddressDetails: AddressDetails;
}

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Owner-specific Login
export const ownerLogin = createAsyncThunk(
  "ownerAuth/login",
  async (user: LoginUser, thunkAPI) => {
    try {
      const response = await authService.login(user); // Use existing login function
      return response;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Owner-specific Signup
export const ownerSignup = createAsyncThunk(
  "ownerAuth/signup",
  async (user: SignUpUser, thunkAPI) => {
    try {
      const response = await authService.signup(user); // Use existing signup function
      return response;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const ownerAuthSlice = createSlice({
  name: "ownerAuth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ownerLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ownerLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.data.data;
        state.message = action.payload.data.message;
      })
      .addCase(ownerLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(ownerSignup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ownerSignup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.data.data;
        state.message = action.payload.data.message;
      })
      .addCase(ownerSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset, logout } = ownerAuthSlice.actions;
export default ownerAuthSlice.reducer;
