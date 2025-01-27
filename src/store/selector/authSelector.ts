import { RootState } from "../index";

export const getIsLoggedIn = (state: RootState) => {
  return state.auth.isLoggedIn;
};

export const getUser = (state: RootState) => {
  return state.auth.user;
};
