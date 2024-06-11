// reducers.ts
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
// Import your specific reducer

interface usernameState {
  username: string;
}

//implement types here afterwards
//afterwards add the refresh token here

//role--1-->owner
//role--2-->investor

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  role: 0,
  roleName: "",
};

export const authSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    clearAuthState(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    authenticateUser(state, action) {
      state.isAuthenticated = action.payload;
    },
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setUser,
  setToken,
  clearAuthState,
  authenticateUser,
  loginSuccess,
  logout,
} = authSlice.actions; // Export actions

export default authSlice.reducer;
