import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import AboutUs from "@/blocks/AboutUs";
import ContactBlock from "@/blocks/Contact";
import {useTranslation} from "next-i18next";
import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {ComparisonReload} from "@/store/atoms";
import {useRouter} from "next/router";
import {getComparisonList} from "@/pages/api/getComparisonList";
import {getStaticPage, getStaticPagesData} from "@/pages/api/getStaticPage";
import {sl} from "date-fns/locale";

export default function ContactPage() {
  const { t } = useTranslation('common')
  const dataBreadCrumb = [
    {
      link: "/",
      text: "GameNote",
    },
    {
      link: "#",
      text: t('static_pages.contact'),
    },
  ];

  const [data, setData] = useState([]);
  const [comparisonReload] = useAtom(ComparisonReload);
  const router = useRouter();
  let locale = router.locale;
  let slug = router.pathname.split('/')[1];

  useEffect(() => {
    const handleGetStaticPagesData = async () => {
      const response = await getStaticPagesData(locale, slug);
      setData(response)
    };
    handleGetStaticPagesData();
  }, [comparisonReload]);

  return (
    <>
      <Head>
        <title>{t('static_pages.contact')}</title>
      </Head>
      <BreadCrumb data={dataBreadCrumb} />
      <ContactBlock pageData={data}/>
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
