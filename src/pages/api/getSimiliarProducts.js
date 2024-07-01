import axios from "axios";
import { getCookie } from "cookies-next";

export const getSimiliarProducts = async (locale, id) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    };
    const data = {
      apiKey: "4b4277bd1523915d0655ecc44992f2db",
      page: 1,
      limit: 2,
      product_id: id,
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${locale}/product/similar_list.json`,
      data,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};
