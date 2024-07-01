import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import CabinetPersonalInfo from "@/components/Cabinet/CabinetPersonalInfo";
import { useRouter } from "next/router";
import { getUserDetail } from "@/pages/api/cabinet/getUserDetail";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { PersonalInfo, PersonalInfoSuccess } from "@/store/atoms";
import CabinetMyCoupons from "@/components/Cabinet/CabinetMyCoupons";
import {useTranslation} from "next-i18next";
import {getMyAddresses} from "@/pages/api/cabinet/getMyAddresses";
import {getCouponsList} from "@/pages/api/cabinet/getCouponsList";

export default function ComparisonPage() {
  const { t } = useTranslation('common')
  const [storeData] = useAtom(PersonalInfo);

  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;

  useEffect(() => {
    const handleGetCouponsList = async () => {
      const response = await getCouponsList(locale);
      setData(response)
    };
    handleGetCouponsList();
  }, [locale]);

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
        <title>{t('cabinet.coupons')}</title>
      </Head>
      <CabinetMyCoupons data={data}/>
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
