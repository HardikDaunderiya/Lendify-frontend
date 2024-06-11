// store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
// import cartReducer from "./cartSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
