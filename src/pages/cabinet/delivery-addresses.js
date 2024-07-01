import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import CabinetPersonalInfo from "@/components/Cabinet/CabinetPersonalInfo";
import { useRouter } from "next/router";
import { getUserDetail } from "@/pages/api/cabinet/getUserDetail";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {AddressReload, PersonalInfo, PersonalInfoSuccess} from "@/store/atoms";
import CabinetMyAddresses from "@/components/Cabinet/CabinetMyAddresses";
import { getMyAddresses } from "@/pages/api/cabinet/getMyAddresses";
import {useTranslation} from "next-i18next";
import EmptyPanel from "@/blocks/EmptyPanel";

export default function ComparisonPage() {
  const [addressReload] = useAtom(AddressReload)
  const { t } = useTranslation('common')
  const [data, setData] = useState([]);
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter();
  let locale = router.locale;

  useEffect(() => {
    const handleGetUserAddresses = async () => {
      const response = await getMyAddresses(locale);
      if(response?.responseStatus?.ResponseCode === 400){
        setError(true)
        setMessage(response?.responseStatus?.Message)
      } else if(response?.responseStatus?.ResponseCode === 200){
        setData(response?.responseStatus?.data);
        setError(false)
      }
    };
    handleGetUserAddresses();
  }, [addressReload]);

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
        <title>{t('cabinet.addresses')}</title>
      </Head>
      <CabinetMyAddresses data={data} error={error} title={message}/>
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
