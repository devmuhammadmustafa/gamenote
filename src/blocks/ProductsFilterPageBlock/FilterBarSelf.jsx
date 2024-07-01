import LeftFilterBar from "@/blocks/ProductsFilterPageBlock/LeftFilterBar";
import FilteredProducts from "@/blocks/ProductsFilterPageBlock/FilteredProducts";
import Container from "@/components/Container";
import styles from "@/styles/components/ProductsFilterPage.module.css";

export default function FilterBarSelf() {
  return (
    <Container>
      <div className={styles.filterBarSelf}>
        <LeftFilterBar />
        <FilteredProducts />
      </div>
    </Container>
  );
}
