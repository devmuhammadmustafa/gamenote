import styles from "@/styles/components/BestSellers.module.css";
import Container from "@/components/Container";
import ProductList from "@/components/Products";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import { useRouter } from "next/router";
import { getNewProducts } from "@/pages/api/getNewProducts";
import { useEffect, useState } from "react";
import { getPremiumProducts } from "@/pages/api/getPremiumProducts";
import { useTranslation } from "next-i18next";

export default function PremiumProducts() {
  const { t } = useTranslation("common");
  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetPremiumProducts = async () => {
      const response = await getPremiumProducts(locale);
      setData(response?.products?.slice(0, 6));
    };
    handleGetPremiumProducts();
  }, []);

  return (
    <div className={styles.bestSellers}>
      <Container>
        <ProductListTopTexts title={t("general.premium")} />
        <ProductList data={data} />
      </Container>
    </div>
  );
}
