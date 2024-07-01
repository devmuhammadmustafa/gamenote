import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import AboutUs from "@/blocks/AboutUs";
import ContactBlock from "@/blocks/Contact";
import BrandsPageBlock from "@/blocks/BrandsPageBlock";
import DeliveryAndPaymentPageBlock from "@/blocks/DeliveryAndPayment";
import WarrantConditionsBlock from "@/blocks/WarrantConditions";
import PrivacyTermsBlock from "@/blocks/PrivacyTerms";
import {useTranslation} from "next-i18next";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getStaticPagesData} from "@/pages/api/getStaticPage";

export default function WarrantyConditionsPage() {
  const { t } = useTranslation('common')
  const dataBreadCrumb = [
    {
      link: "/",
      text: "GameNote",
    },
    {
      link: "#",
      text: t('static_pages.privacy'),
    },
  ];

  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  let slug = router.pathname.split('/')[1]
  useEffect(() => {
    const handleGetStaticPagesData = async () => {
      const response = await getStaticPagesData(locale, slug);
      setData(response?.result?.content)
    };
    handleGetStaticPagesData();
  }, [locale]);

  return (
    <>
      <Head>
        <title>{t('static_pages.privacy')}</title>
      </Head>
      <BreadCrumb data={dataBreadCrumb} />
      <PrivacyTermsBlock data={data}/>
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
