import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import AboutUs from "@/blocks/AboutUs";
import {useRouter} from "next/router";
import {getMetaData} from "@/pages/api/getMetaData";
import {useEffect, useState} from "react";
import {getPagesContent} from "@/pages/api/getPagesContent";
import {Parser} from "html-to-react";
import {useTranslation} from "next-i18next";

export default function AboutUsPage(){
    const { t } = useTranslation('common')
    const router = useRouter()
    const locale = router.locale;
    const slug = router.pathname.split('/')[1]
    const [metaData, setMetaData] = useState([])
    const [data, setData] = useState([])
    const htmlParser = new Parser();

    const dataBreadCrumb = [
        {
            link: '/',
            text: 'Gamenote'
        },
        {
            link: "#",
            text: t('about_small_title')
        }
    ]

    useEffect(() => {
        const handleGetMetaData = async () => {
            const response = await getMetaData(locale, slug);
            setMetaData(response)
        };
        handleGetMetaData();
    }, [locale]);

    useEffect(() => {
        const handleGetPageData = async () => {
            const response = await getPagesContent(locale, slug);
            setData(response?.result?.content)
        };
        handleGetPageData();
    }, [locale]);

    return(
        <>
            <Head>
                {htmlParser.parse(metaData.HEADER_ASSETS)}
            </Head>
            <BreadCrumb data={dataBreadCrumb}/>
            <AboutUs data={data}/>
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