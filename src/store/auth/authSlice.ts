import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";
import { userInfoFromStorage } from "@/lib/helper";
//implement types here afterwards
//afterwards add the refresh token here

//role--1-->owner
//role--2-->investor

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
  user_role_id: number; // Assuming role id 2 for investor
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
  user: userInfoFromStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const login = createAsyncThunk(
  "auth/login",
  async (user: LoginUser, thunkAPI) => {
    try {
      const response = await authService.login(user);
      console.log(response);
      return response;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const signup = createAsyncThunk(
  "auth/signup",
  async (user: SignUpUser, thunkAPI) => {
    try {
      const response = await authService.signup(user);
      return response;
    } catch (error) {
      console.log(error);
      const message =
        error.response?.data?.message || error.message || error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },

    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  //to correctly uderstand first console log the actions object in thet you can see which you can extract and also actions object struicture various according to the state from fulfilled to rejected

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.data.data;
        state.message = action.payload.data.message;
        // console.log(action);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        // console.log(action);
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.data.data;
        state.message = action.payload.data.message;
        console.log(action);
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        // console.log(action);
      });
  },
});

export const { reset, logout } = authSlice.actions; // Export actions

export default authSlice.reducer;
