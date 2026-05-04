import { useState } from "react";
import { createAppointment } from "../api/createAppointment";
import { validation } from "./validation";
import { useNotificationState } from "@/shared/lib/store";

export function useMakeAppointment() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    webinarDate: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const notificationStore: any = useNotificationState();

  const handleMakeAppointment = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const isValid = validation(formData);

    if (isValid) {
      try {
        const response = await createAppointment(formData);

        if (response && response?.data.success) {
          notificationStore.setSuccessMessage("Форма успешно отправлена!");
        } else {
          let errorMsg = response?.statusText || "Ошибка при создании записи";
          if (response && response.status === 409)
            errorMsg = "Такая запись уже существует";

          setError(errorMsg);
          notificationStore.setErrorMessage(errorMsg);
        }
      } catch (e) {
        const errorMsg = e instanceof Error ? e.message : "Неизвестная ошибка";
        console.error(e);
        setError(errorMsg);
        notificationStore.setErrorMessage(errorMsg);
      }
    } else {
      notificationStore.setErrorMessage("Форма не валидна");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    setFormData,
    handleMakeAppointment,
    handleChange,
    isLoading,
  };
}
