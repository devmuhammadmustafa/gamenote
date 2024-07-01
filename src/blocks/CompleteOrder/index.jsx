import Container from "@/components/Container";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import styles from "@/styles/components/BasketList.module.css";
import { useTranslation } from "next-i18next";
import CompleteLeft from "@/blocks/CompleteOrder/CompleteLeft";
import CompleteRight from "@/blocks/CompleteOrder/CompleteRight";

export default function CompleteOrder({ data }) {
  const { t } = useTranslation("common");
  return (
    <div className={styles.comparison}>
      <Container>
        <ProductListTopTexts title={t("general.complete_title")} />
        <div className={`${styles.basketList} bg-white dark:bg-panel-dark`}>
          <CompleteLeft />
          <CompleteRight data={data} />
        </div>
      </Container>
    </div>
  );
}
