import { api } from "@/shared/api/axiosInstance";
import { ads } from "../config/defaultAds";

export async function getAds() {
  // async code to server
  // await new Promise((resolve) => setTimeout(resolve, 500));

  console.debug("!!!");
  try {
    const response = await fetch(
      `${process.env.WP_API}/wp-json/wp/v2/announcements`,
      {
        next: { tags: ["ads"] },
      },
    );
    console.debug(response);

    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
