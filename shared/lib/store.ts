import { create } from "zustand";

export const useNotificationState = create((set) => ({
  successMessage: "",
  errorMessage: "",
  setSuccessMessage: (message: string) => set({ successMessage: message }),
  setErrorMessage: (message: string) => set({ errorMessage: message }),
  resetSuccessMessage: () => set({ successMessage: "" }),
  resetErrorMessage: () => set({ errorMessage: "" }),
  resetState: () =>
    set({
      successMessage: "",
      errorMessage: "",
    }),
}));
