import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";
//implement types here afterwards
//afterwards add the refresh token here

//role--1-->owner
//role--2-->investor
const user = JSON.parse(localStorage.getItem("user"));

interface LoginUser {
  user_email: string;
  user_password: string;
}

const initialState = {
  user: user ? user : null,
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
      return response;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
      });
  },
});

export const { reset } = authSlice.actions; // Export actions

export default authSlice.reducer;
