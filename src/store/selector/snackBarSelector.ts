import { RootState } from "../index";

export const getSnackBarMessage = (state: RootState) => {
  return state.toast.message;
};

export const getSnackBarIsOpen = (state: RootState) => {
  return state.toast.isOpen;
};
