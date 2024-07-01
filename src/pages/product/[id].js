import ProductInside from "@/blocks/ProductInside";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProductSingle } from "@/pages/api/getProductSingle";
import TextFiltering, { filterProductData } from "@/components/Filtering";
import { getSimiliarProducts } from "@/pages/api/getSimiliarProducts";
import { Parser } from "html-to-react";
import { getMetaData } from "@/pages/api/getMetaData";
import { useAtom } from "jotai";
import { ComparisonReload, FavoriteReload } from "@/store/atoms";
import { ProductSingle } from "@/store/atoms";

export default function ProductInsidePage({ metaData, data, query, params }) {
  const { t } = useTranslation("common");
  const [favoriteReload] = useAtom(FavoriteReload);
  const [comparisonReload] = useAtom(ComparisonReload);
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  let slug = router.query.id;
  const [similiarProducts, setSimiliarProducts] = useState([]);
  const [singleList, setSingleList] = useAtom(ProductSingle);

  useEffect(() => {
    const handleGetProductInside = async () => {
      const response = await getProductSingle(locale, slug);
      setProductData(response?.product);

      setSingleList(response?.product);
    };
    handleGetProductInside();
  }, [locale, favoriteReload, comparisonReload, slug]);

  useEffect(() => {
    const handleGetSpecifications = async () => {
      //   const filteredData = await filterProductData(productData);
      setFilteredData(productData?.technical_specifications_detail);
    };
    handleGetSpecifications();
  }, [productData]);

  useEffect(() => {
    const handleGetSimiliarProducts = async () => {
      const response = await getSimiliarProducts(
        locale,
        productData?.product_id
      );
      setSimiliarProducts(response?.products);
    };
    handleGetSimiliarProducts();
  }, [locale, productData]);

  const htmlParser = new Parser();
  return (
    <>
      <Head>{htmlParser.parse(metaData?.HEADER_ASSETS)}</Head>
      <ProductInside
        data={productData}
        similiarData={similiarProducts}
        filteredData={filteredData}
      />
    </>
  );
}

export async function getServerSideProps({ locale, params, query }) {
  const data = await getProductSingle(locale, params.id);
  const metaData = await getMetaData(locale, data?.product?.full_slug);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      metaData,
      data,
      query,
      params,
    },
  };
}
