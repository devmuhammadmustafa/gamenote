import { Cites } from "@/services/city.service";
import axios from "axios";
import { getCookie } from 'cookies-next';

export const getCityList = async (locale) => {
    const cityList = await Cites(locale);



    return cityList.data

    // try {
    //     const token = getCookie('token');
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'Accept-Language': locale,
    //     };
    //     const data = {
    //         apiKey: '4b4277bd1523915d0655ecc44992f2db',
    //         AccessToken: token
    //     };
    //     const response = await axios.post(`https://api.komplekt.az/az/users/city.json`, data, { headers });
    //     return response.data;
    // } catch (error) {
    //     console.error('Error posting data:', error);
    //     return null;
    // }
};