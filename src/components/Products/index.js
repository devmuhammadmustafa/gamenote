import styles from "@/styles/components/Products.module.css";
import ProductCard from "@/components/Products/ProductCard";
import MoreButton from "@/components/Products/MoreButton";
import FavoritesCard from "@/blocks/Favorites/favoritesCard";

export default function ProductList({ data, banner }) {
  return (
    <div className={styles.productList}>
      <FavoritesCard banner={banner} data={data} />
    </div>
  );
}
