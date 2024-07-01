import "@/styles/globals.css";
import { Archivo } from "next/font/google";
import NextNProgress from "nextjs-progressbar";
import MainLayout from "@/layouts/MainLayout";
import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { PersonalInfo, PersonalInfoSuccess } from "@/store/atoms";
import { useRouter } from "next/router";
import { getUserDetail } from "@/pages/api/cabinet/getUserDetail";
import { deleteCookie, setCookie } from "cookies-next";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--archivo-font",
});

function App({ Component, pageProps }) {
  const [storeData, setStoreData] = useAtom(PersonalInfo);
  const [storeDataSuccess] = useAtom(PersonalInfoSuccess);
  const [statusCode, setStatusCode] = useState(0);
  const router = useRouter();
  let locale = router.locale;

  useEffect(() => {
    const handleGetUserDetail = async () => {
      const response = await getUserDetail(locale);
      setStatusCode(response?.responseStatus?.ResponseCode);
      setStoreData(response?.responseStatus?.data);

      if (response?.responseStatus?.ResponseCode == 400) {
        deleteCookie("AccessToken");
      }
    };
    handleGetUserDetail();
  }, [storeDataSuccess, router]);
  return (
    <div
      className={`dark:bg-dark min-h-screen py-[30px] max-[650px]:pt-[20px] max-[650px]:pb-[100px] transition ${archivo.className}`}
    >
      <MainLayout>
        <NextNProgress
          options={{ showSpinner: false }}
          height={3}
          color="#99E000"
        />
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}

export default appWithTranslation(App);
