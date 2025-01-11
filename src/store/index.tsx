import authSlice from "@/store/slices/authSlice";
import snackBarSlice from "@/store/slices/snackBarSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  auth: authSlice,
  toast: snackBarSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
