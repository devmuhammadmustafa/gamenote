import axios from "axios";
import { useRouter } from "next/router";

export const getToken = async (data, locale) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    };
    const data = {
      apiKey: "4b4277bd1523915d0655ecc44992f2db",
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${locale}/users/cookie_token.json`,
      data,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};
