import styles from "@/styles/components/BestSellers.module.css";
import Container from "@/components/Container";
import ProductList from "@/components/Products";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import { useRouter } from "next/router";
import { getBestSellers } from "@/pages/api/getBestSellers";
import { useEffect, useState } from "react";
import { getNewProducts } from "@/pages/api/getNewProducts";
import { useTranslation } from "next-i18next";

export default function NewProducts() {
  const { t } = useTranslation("common");
  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetNewProducts = async () => {
      const response = await getNewProducts(locale);
      setData(response?.products?.slice(0, 6));
    };
    handleGetNewProducts();
  }, []);

  return (
    <div className={styles.bestSellers}>
      <Container>
        <ProductListTopTexts title={t("general.new_products")} />
        <ProductList banner={true} data={data} />
      </Container>
    </div>
  );
}
