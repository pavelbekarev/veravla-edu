import { api } from "@/shared/api/axiosInstance";

export const createAppointment = async (formData: any) => {
  try {
    const response = await api.post(
      "http://localhost/veravla_edu/wp-json/custom/v1/webinar",
      formData,
    );

    return response;
  } catch (e) {
    console.error(e);
  }
};
