import axios from "axios";
import { getCookie } from "cookies-next";

export const getSearchResults = async (locale, params) => {
  const token = getCookie("token");
  const accessToken = getCookie("AccessToken");
  try {
    const headers = {
      "Content-Type": "application/json",
      "Accept-Language": locale,
      apiKey: "4b4277bd1523915d0655ecc44992f2db",
      GuestToken: token,
    };
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${locale}/search/result.json?limit=12&${params}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};
