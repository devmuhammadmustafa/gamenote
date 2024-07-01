import ProductInside from "@/blocks/ProductInside";
import Head from "next/head";
import ProductsFilter from "@/blocks/ProductsFilterPageBlock";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BreadCrumb from "@/components/Breadcrumb";
import {useRouter} from "next/router";
import SearchResults from "@/components/SearchResults";
import {useTranslation} from "next-i18next";
import {useEffect, useState} from "react";
import {getSearchResults} from "@/pages/api/search";

export default function SearchResultsPage(){
    const { t } = useTranslation('common')
    const router = useRouter()
    const locale = router.locale
    const [data, setData] = useState([])

    useEffect(() => {
        const handleGetSearchResults = async () => {
          const response = await getSearchResults(
            locale,
            router.asPath.split("?")[1]
          );
          setData(response?.products);
        };
        handleGetSearchResults();
    }, [locale, router]);
    

    const dataBreadCrumb = [
        {
            link: '/',
            text: 'Gamenote'
        },
        {
            link: '#',
            text: t('general.search_result_title')
        }
    ]

    return(
        <>
            <Head>
                <title>Məhsullar</title>
            </Head>
            <BreadCrumb data={dataBreadCrumb}/>
            <SearchResults data={data}/>
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