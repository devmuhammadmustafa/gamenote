import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BreadCrumb from "@/components/Breadcrumb";
import AboutUs from "@/blocks/AboutUs";
import FavoritesBlock from "@/blocks/Favorites";
import { getFavoritesList } from "./api/getFavoritesList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { FavoriteReload } from "@/store/atoms";
import { useTranslation } from "next-i18next";

export default function FavoritesPage() {
  const { t } = useTranslation("common");
  const dataBreadCrumb = [
    {
      link: "/",
      text: "GameNote",
    },
    {
      link: "#",
      text: t("general.favorites_title"),
    },
  ];

  const [data, setData] = useState([]);
  const [favoriteReload] = useAtom(FavoriteReload);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetFavoritesList = async () => {
      const response = await getFavoritesList(locale);
      setData(response?.products);
    };
    handleGetFavoritesList();
  }, [favoriteReload]);

  return (
    <>
      <Head>
        <title>{t("general.favorites_title")}</title>
      </Head>
      <BreadCrumb data={dataBreadCrumb} />
      <FavoritesBlock data={data} />
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
