"use client";

import { useNotificationState } from "./store";

export default function useNotification() {
  const successMessage = useNotificationState(
    (state: any) => state.successMessage,
  );
  const errorMessage = useNotificationState((state: any) => state.errorMessage);
  const resetState: any = useNotificationState();

  return {
    successMessage,
    errorMessage,
    hasSuccess: !!successMessage,
    hasError: !!errorMessage,
    resetState: resetState.resetState,
  };
}
