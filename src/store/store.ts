import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import businessReducer from "./business/businessSlice";
// Customize middleware to disable serializable check

const store = configureStore({
  reducer: {
    auth: authReducer,
    business: businessReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
