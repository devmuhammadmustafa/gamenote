import axios from "axios";
import { getCookie } from "cookies-next";

export const getDiscountProducts = async (locale) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Accept-Language": locale,
        };
        const data = {
            apiKey: "4b4277bd1523915d0655ecc44992f2db",
            page: 1,
            limit: 10
        };
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}${locale}/product/discount.json`,
            data,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        return null;
    }
};
