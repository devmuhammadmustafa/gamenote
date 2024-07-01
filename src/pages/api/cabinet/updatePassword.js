import axios from "axios";
import { getCookie } from "cookies-next";

export const updatePassword = async (locale, data) => {
  try {
    const token = getCookie("AccessToken");
    const headers = {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    };
    const body = {
      apiKey: "4b4277bd1523915d0655ecc44992f2db",
      AccessToken: token,
      for_update: "password",
      data,
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${locale}/users/update_profile.json`,
      body,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};
