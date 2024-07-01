import axios from "axios";
import { getCookie } from "cookies-next";

export const actionComparison = async (locale, id) => {
  try {
    const AccessToken = getCookie("AccessToken");
    const token = getCookie("token");
    const headers = {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    };
    const data = {
      apiKey: "4b4277bd1523915d0655ecc44992f2db",
      GuestToken: token,
      AccessToken: AccessToken,
      product_id: id,
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${locale}/comparisons/action.json`,
      data,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};
