import Container from "@/components/Container";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import styles from "@/styles/components/Favorites.module.css";
import ProductList from "@/components/Products";
import EmptyPanel from "@/blocks/EmptyPanel";
import { useTranslation } from "next-i18next";

export default function BasketBlock({ data }) {
  const { t } = useTranslation("common");
  return (
    <div className={styles.basket}>
      <Container>
        <ProductListTopTexts
          data={data}
          title={t("general.comparison_title")}
        />
        {data ? (
          <ProductList data={data} />
        ) : (
          <EmptyPanel title={t("general.comparison_empty")} />
        )}
      </Container>
    </div>
  );
}
