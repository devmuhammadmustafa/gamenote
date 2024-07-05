import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/blocks/Footer";
import CabinetLayout from "./CabinetLayout";
import { getSiteData } from "@/pages/api/getSiteData";
import { useAtom } from "jotai";
import { SiteDataStore } from "@/store/atoms";

export default function MainLayout({ children }) {
  const router = useRouter();
  const locale = router.locale;
  const [data, setData] = useAtom(SiteDataStore);
  const path = router.pathname.split("/")[1];

  useEffect(() => {
    const handleGetSiteData = async () => {
      const response = await getSiteData(locale);
      setData(response);
    };
    handleGetSiteData();
  }, [router, locale]);

  return (
    <>
      <Header siteData={data} />
      {path != "cabinet" && children}
      {path == "cabinet" && <CabinetLayout>{children}</CabinetLayout>}
      <Footer siteData={data} />
    </>
  );
}
