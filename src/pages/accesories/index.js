import ProductInside from "@/blocks/ProductInside";
import Head from "next/head";
import ProductsFilter from "@/blocks/ProductsFilterPageBlock";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BreadCrumb from "@/components/Breadcrumb";
import { useRouter } from "next/router";
import { Parser } from "html-to-react";
import { useEffect, useState } from "react";
import { getToken } from "@/pages/api/getToken";
import { setCookie } from "cookies-next";
import { getMetaData } from "@/pages/api/getMetaData";

export default function ProductsPage() {
  const router = useRouter();
  const link = router.pathname + "?category=" + router.query.category;
  console.log(link, "link");
  const dataBreadCrumb = [
    {
      link: "/",
      text: "GameNote",
    },
    {
      link: `${router.pathname}`,
      text: "Aksesuarlar1",
    },
    {
      link: ``,
      text: "router.query?.name",
    },
  ];

  const htmlParser = new Parser();
  let locale = router.locale;
  let slug = router.pathname.split("/")[1];
  const [metaData, setMetaData] = useState([]);

  useEffect(() => {
    const handleGetMetaData = async () => {
      const response = await getMetaData(locale, slug);
      setMetaData(response);
    };
    handleGetMetaData();
  }, [locale]);

  return (
    <>
      <Head>{htmlParser.parse(metaData?.HEADER_ASSETS)}</Head>
      <BreadCrumb data={dataBreadCrumb} />
      <ProductsFilter />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
