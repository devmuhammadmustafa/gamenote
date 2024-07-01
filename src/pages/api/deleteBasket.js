import axios from "axios";
import { getCookie } from "cookies-next";

export const deleteBasket = async (locale, id) => {
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
      variation_id: Number(id),
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${locale}/basket_v2/delete.json`,
      data,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};
