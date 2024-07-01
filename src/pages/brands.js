import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import AboutUs from "@/blocks/AboutUs";
import ContactBlock from "@/blocks/Contact";
import BrandsPageBlock from "@/blocks/BrandsPageBlock";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {getTopBrands} from "@/pages/api/getTopBrands";
import {useEffect, useState} from "react";

export default function BrandsPage(){
    const { t } = useTranslation('common')
    const dataBreadCrumb = [
        {
            link: '/',
            text: 'Gamenote'
        },
        {
            text: t('static_pages.brands')
        }
    ]

    const [data, setData] = useState([]);
    const router = useRouter();
    let locale = router.locale;
    useEffect(() => {
        const handleGetTopBrands = async () => {
            const response = await getTopBrands(locale);
            setData(response?.topbrands);
        };
        handleGetTopBrands();
    }, []);

    return(
        <>
            <Head>
                <title>{t('static_pages.brands')}</title>
            </Head>
            <BreadCrumb data={dataBreadCrumb}/>
            <BrandsPageBlock data={data}/>
        </>
    )
}


export async function getStaticProps ({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"]))
        },
    };
}