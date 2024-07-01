import Container from "@/components/Container";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import styles from "@/styles/components/Favorites.module.css";
import ProductList from "@/components/Products";
import EmptyPanel from "@/blocks/EmptyPanel";
import { useTranslation } from "next-i18next";
import BasketList from "./BasketList";

export default function ComparisonBlock({ data }) {
  const { t } = useTranslation("common");
  return (
    <div className={styles.comparison}>
      <Container>
        <ProductListTopTexts title={t("general.basket_title_inside")} />
        {data?.products?.length ? (
          <BasketList data={data} />
        ) : (
          <EmptyPanel title={t("general.basket_empty")} />
        )}
      </Container>
    </div>
  );
}
