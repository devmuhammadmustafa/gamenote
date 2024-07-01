import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import CabinetPersonalInfo from "@/components/Cabinet/CabinetPersonalInfo";
import { useRouter } from "next/router";
import { getUserDetail } from "@/pages/api/cabinet/getUserDetail";
import { useEffect, useState } from "react";
import CabinetResetPassword from "@/components/Cabinet/CabinetResetPassword";
import CabinetMyOrders from "@/components/Cabinet/CabinetMyOrders";
import { getMyOrders } from "@/pages/api/cabinet/getMyOrders";
import { getMyOrderDetail } from "@/pages/api/cabinet/getMyOrderDetail";
import CabinetMyOrdersDetail from "@/components/Cabinet/CabinetMyOrders/detail";
import {useTranslation} from "next-i18next";

export default function ComparisonPage() {
  const { t } = useTranslation('common')
  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  let slug = router.query.slug;
  useEffect(() => {
    const handleGetMyOrderDetail = async () => {
      const response = await getMyOrderDetail(locale, slug);
      setData(response?.responseStatus?.data);
    };
    handleGetMyOrderDetail();
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
        <title>{t('cabinet.orders_details')}</title>
      </Head>
      {data?.length !== 0 ? (
        <CabinetMyOrdersDetail data={data} />
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export async function getServerSideProps({ locale, params }) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
}
