import axios from "axios";
import { getCookie } from "cookies-next";

export async function Cites(locale) {
  try {
    const token = getCookie("token");

    const headers = {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    };

    // console.log('env', process.env.NEXT_PUBLIC_API_KEY)

    const data = {
      // apiKey: '4b4277bd1523915d0655ecc44992f2db',
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      AccessToken: token,
    };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${locale}/users/city.json`,
      data,
      { headers }
    );

    return response;
  } catch (err) {
    throw Error(err);
  }
}
