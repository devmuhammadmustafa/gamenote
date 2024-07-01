import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import CabinetPersonalInfo from "@/components/Cabinet/CabinetPersonalInfo";
import { useRouter } from "next/router";
import { getUserDetail } from "@/pages/api/cabinet/getUserDetail";
import { useEffect, useState } from "react";
import CabinetResetPassword from "@/components/Cabinet/CabinetResetPassword";
import {useTranslation} from "next-i18next";

export default function ComparisonPage() {
  const { t } = useTranslation('common')
  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetUserDetail = async () => {
      const response = await getUserDetail(locale);
      setData(response?.responseStatus?.data);
    };
    handleGetUserDetail();
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
        <title>{t('cabinet.reset_password')}</title>
      </Head>
      {data?.length !== 0 ? <CabinetResetPassword data={data} /> : <>Loading</>}
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
