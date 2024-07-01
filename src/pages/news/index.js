import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import AboutUs from "@/blocks/AboutUs";
import NewsBlock from "@/blocks/News";
import {useRouter} from "next/router";
import {Parser} from "html-to-react";
import {getMetaData} from "@/pages/api/getMetaData";
import {getPagesContent} from "@/pages/api/getPagesContent";
import {useEffect, useState} from "react";

export default function NewsPage(){
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
            text: 'Xəbərlər'
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
            setData(response)
        };
        handleGetPageData();
    }, [locale]);

    return(
        <>
            <Head>
                {htmlParser.parse(metaData?.HEADER_ASSETS)}
            </Head>
            <BreadCrumb data={dataBreadCrumb}/>
            <NewsBlock newsData={data}/>
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