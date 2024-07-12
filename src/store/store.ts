import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import investorBusinessReducer from "./investor-business/investorBusinessSlice";
import ownerBusinessReducer from "./owner-business/ownerBusinessSlice";
// Customize middleware to disable serializable check

const store = configureStore({
  reducer: {
    auth: authReducer,
    investorBusiness: investorBusinessReducer,
    ownerBusiness: ownerBusinessReducer,
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
