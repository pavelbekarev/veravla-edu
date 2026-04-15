import { ads } from "../config/defaultAds";

export async function getAds() {
  // async code to server
  await new Promise((resolve) => setTimeout(resolve, 500));

  return ads;
}
