"use client";

import { useNotificationState } from "./store";

export default function useNotification() {
  const successMessage = useNotificationState((state) => state.successMessage);
  const errorMessage = useNotificationState((state) => state.errorMessage);
  const resetState = useNotificationState();

  return {
    successMessage,
    errorMessage,
    hasSuccess: !!successMessage,
    hasError: !!errorMessage,
    resetState: resetState.resetState,
  };
}
