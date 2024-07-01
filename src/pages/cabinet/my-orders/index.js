import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import CabinetPersonalInfo from "@/components/Cabinet/CabinetPersonalInfo";
import { useRouter } from "next/router";
import { getUserDetail } from "@/pages/api/cabinet/getUserDetail";
import { useEffect, useState } from "react";
import CabinetResetPassword from "@/components/Cabinet/CabinetResetPassword";
import CabinetMyOrders from "@/components/Cabinet/CabinetMyOrders";
import { getMyOrders } from "@/pages/api/cabinet/getMyOrders";
import { useTranslation } from "next-i18next";

export default function ComparisonPage() {
  const { t } = useTranslation("common");
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetMyOrders = async () => {
      const response = await getMyOrders(locale);
      setMessage(response?.responseStatus?.Message);
      setData(response?.responseStatus?.data);
    };
    handleGetMyOrders();
  }, []);

  const dataBreadCrumb = [
    {
      link: "/",
      text: "GameNote",
    },
    {
      link: "/cabinet/personal-info",
      text: "Şəxsi kabinet",
    },
    {
      link: "#",
      text: "Şəxsi məlumatlar",
    },
  ];

  return (
    <>
      <Head>
        <title>{t("cabinet.orders")}</title>
      </Head>
      {data?.length !== 0 ? <CabinetMyOrders data={data} /> : <>{message}</>}
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
