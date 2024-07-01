import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import AboutUs from "@/blocks/AboutUs";
import NewsBlock from "@/blocks/News";
import NewsInsideBlock from "@/blocks/News/NewsInsideBlock";
import { useRouter } from "next/router";
import { Parser } from "html-to-react";
import { getMetaData } from "@/pages/api/getMetaData";
import { getPagesContent } from "@/pages/api/getPagesContent";
import { useEffect, useState } from "react";

export default function NewsInsidePage() {
  const router = useRouter();
  const locale = router.locale;
  const slug = router.asPath.substring(1);
  const [metaData, setMetaData] = useState([]);
  const [data, setData] = useState([]);
  const htmlParser = new Parser();

  const dataBreadCrumb = [
    {
      link: "/",
      text: "Gamenote",
    },
    {
      link: "/news",
      text: "Xəbərlər",
    },
    {
      link: "#",
      text: data?.result?.title,
    },
  ];

  useEffect(() => {
    const handleGetMetaData = async () => {
      const response = await getMetaData(locale, slug);
      setMetaData(response);
    };
    handleGetMetaData();
  }, [locale]);

  useEffect(() => {
    const handleGetPageData = async () => {
      const response = await getPagesContent(locale, slug);
      setData(response);
    };
    handleGetPageData();
  }, [locale]);

  return (
    <>
      <Head>{htmlParser.parse(metaData?.HEADER_ASSETS)}</Head>
      <BreadCrumb data={dataBreadCrumb} />
      <NewsInsideBlock data={data} />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
