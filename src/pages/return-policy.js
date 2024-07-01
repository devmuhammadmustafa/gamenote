import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import AboutUs from "@/blocks/AboutUs";
import ContactBlock from "@/blocks/Contact";
import BrandsPageBlock from "@/blocks/BrandsPageBlock";
import DeliveryAndPaymentPageBlock from "@/blocks/DeliveryAndPayment";
import WarrantConditionsBlock from "@/blocks/WarrantConditions";
import PrivacyTermsBlock from "@/blocks/PrivacyTerms";
import ReturnPolicyBlock from "@/blocks/ReturnPolicy";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {getTopBrands} from "@/pages/api/getTopBrands";
import {useEffect, useState} from "react";
import {getStaticPagesData} from "@/pages/api/getStaticPage";

export default function ReturnPolicyPage() {
  const { t } = useTranslation('common')
  const dataBreadCrumb = [
    {
      link: "/",
      text: "GameNote",
    },
    {
      link: "#",
      text: t('static_pages.return'),
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
        <title>{t('static_pages.return')}</title>
      </Head>
      <BreadCrumb data={dataBreadCrumb} />
      <ReturnPolicyBlock data={data}/>
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
