import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import CabinetPersonalInfo from "@/components/Cabinet/CabinetPersonalInfo";
import { useRouter } from "next/router";
import { getUserDetail } from "@/pages/api/cabinet/getUserDetail";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { PersonalInfo, PersonalInfoSuccess } from "@/store/atoms";
import { deleteCookie } from "cookies-next";
import {useTranslation} from "next-i18next";

export default function ComparisonPage() {
  const { t } = useTranslation('common')
  const [success, setSuccess] = useState(false);
  const [storeData, setStoreData] = useAtom(PersonalInfo);
  const [storeDataSuccess] = useAtom(PersonalInfoSuccess);
  const [statusCode, setStatusCode] = useState(0);
  const router = useRouter();
  let locale = router.locale;

  useEffect(() => {
    const handleGetUserDetail = async () => {
      const response = await getUserDetail(locale);
      setStatusCode(response?.responseStatus?.ResponseCode);
      setStoreData(response?.responseStatus?.data);

      if (response?.responseStatus?.ResponseCode == 400) {
        deleteCookie("AccessToken");
        router.push("/");
        setSuccess(false);
      } else if (response?.responseStatus?.ResponseCode == 200) {
        setSuccess(true);
      }
    };
    handleGetUserDetail();
  }, [storeDataSuccess, router]);

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
        <title> {t('cabinet.title')}</title>
      </Head>
      {success && storeData?.length !== 0 ? (
        <CabinetPersonalInfo data={storeData} />
      ) : (
        <>Loading</>
      )}
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
