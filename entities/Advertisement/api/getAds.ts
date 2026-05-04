import { api } from "@/shared/api/axiosInstance";
import { ads } from "../config/defaultAds";

export async function getAds() {
  // async code to server
  // await new Promise((resolve) => setTimeout(resolve, 500));

  try {
    const response = await api.get("wp-json/wp/v2/announcements");
    console.debug(response);

    return response.data;
  } catch (e) {
    console.error(e);
  }
}
