import styles from "@/styles/components/BestSellers.module.css";
import Container from "@/components/Container";
import ProductList from "@/components/Products";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import { useRouter } from "next/router";
import { getBanners } from "@/pages/api/getBanners";
import { useEffect, useState } from "react";
import { getBestSellers } from "@/pages/api/getBestSellers";
import { useTranslation } from "next-i18next";

export default function BestSellers() {
  const { t } = useTranslation("common");
  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetBestSellers = async () => {
      const response = await getBestSellers(locale);
      setData(response?.products?.slice(0, 6));
    };
    handleGetBestSellers();
  }, []);

  return (
    <div className={styles.bestSellers}>
      <Container>
        <ProductListTopTexts title={t("general.bestseller")} />
        <ProductList data={data} />
      </Container>
    </div>
  );
}
