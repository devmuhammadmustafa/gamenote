import Container from "@/components/Container";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import styles from "@/styles/components/Favorites.module.css";
import ProductList from "@/components/Products";
import EmptyPanel from "@/blocks/EmptyPanel";
import { useTranslation } from "next-i18next";

export default function FavoritesBlock({ data }) {
  const { t } = useTranslation("common");
  return (
    <div className={styles.favorites}>
      <Container>
        <ProductListTopTexts title={t("general.favorites_title")} />
        {data ? (
          <ProductList data={data} />
        ) : (
          <EmptyPanel title={t("general.favorites_empty")} />
        )}
      </Container>
    </div>
  );
}
