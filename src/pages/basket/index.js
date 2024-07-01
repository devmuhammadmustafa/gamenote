import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import AboutUs from "@/blocks/AboutUs";
import BasketBlock from "@/blocks/BasketBlock";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBestSellers } from "@/pages/api/getBestSellers";
import { getBasketProducts } from "@/pages/api/cabinet/getBasketProducts";
import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";
import { BasketReload } from "@/store/atoms";

export default function ComparisonPage() {
  const { t } = useTranslation("common");
  const [basketReload] = useAtom(BasketReload);
  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetBasketProducts = async () => {
      const response = await getBasketProducts(locale);
      setData(response);
    };
    handleGetBasketProducts();
  }, [basketReload]);

  const dataBreadCrumb = [
    {
      link: "/",
      text: "GameNote",
    },
    {
      link: "#",
      text: t("general.basket_title"),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("general.basket_title")}</title>
      </Head>
      <BreadCrumb data={dataBreadCrumb} />
      <BasketBlock data={data} />
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
