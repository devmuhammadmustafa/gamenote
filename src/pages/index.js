import Banners from "@/blocks/Banners";
import InfoBlock from "@/blocks/InfoPanel";
import TrendsCarousel from "@/blocks/TrendsCarousel";
import BestSellers from "@/blocks/BestSellers";
import FullBanner from "@/blocks/FullBanner";
import NewProducts from "@/blocks/NewProducts";
import TopBrands from "@/blocks/TopBrands";
import PremiumProducts from "@/blocks/PremiumProducts";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { getToken } from "@/pages/api/getToken";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { getMetaData } from "@/pages/api/getMetaData";
import { Parser } from "html-to-react";

export default function HomePage({ data }) {
  const htmlParser = new Parser();
  const router = useRouter();
  let locale = router.locale;
  const [metaData, setMetaData] = useState([]);

  const token = getCookie("token");

  useEffect(() => {
    const handleGetToken = async () => {
      const response = await getToken(locale);
      setCookie("token", response?.responseStatus?.cookie_token);
    };
    if (!token) {
      handleGetToken();
    }
  }, [token]);

  return (
    <>
      <Head>{htmlParser.parse(data?.HEADER_ASSETS)}</Head>
      <Banners />
      <TrendsCarousel />
      <InfoBlock />
      <BestSellers />
      <FullBanner />
      <NewProducts />
      <TopBrands />
      <PremiumProducts />
    </>
  );
}

export async function getServerSideProps({ locale, params }) {
  const data = await getMetaData(locale, params);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}
