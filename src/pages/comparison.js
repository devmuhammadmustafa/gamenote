import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import AboutUs from "@/blocks/AboutUs";
import ComparisonBlock from "@/blocks/ComparisonBlock";
import { getComparisonList } from "./api/getComparisonList";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { ComparisonReload, FavoriteReload } from "@/store/atoms";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function ComparisonPage() {
  const { t } = useTranslation("common");
  const dataBreadCrumb = [
    {
      link: "/",
      text: "GameNote",
    },
    {
      link: "#",
      text: t("general.comparison_title"),
    },
  ];

  const [data, setData] = useState([]);
  const [comparisonReload] = useAtom(ComparisonReload);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetComparisonList = async () => {
      const response = await getComparisonList(locale);
      setData(response?.products);
    };
    handleGetComparisonList();
  }, [comparisonReload]);

  return (
    <>
      <Head>
        <title>{t("general.comparison_title")}</title>
      </Head>
      <BreadCrumb data={dataBreadCrumb} />
      <ComparisonBlock data={data} />
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
