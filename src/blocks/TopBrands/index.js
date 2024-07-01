import styles from "@/styles/components/TopBrands.module.css";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import Container from "@/components/Container";
import BrandsCarousel from "@/components/BrandsCarousel";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCityList } from "@/pages/api/getCityList";
import { getTopBrands } from "@/pages/api/getTopBrands";

export default function TopBrands() {
  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetTopBrands = async () => {
      const response = await getTopBrands(locale);
      setData(response?.topbrands);
    };
    handleGetTopBrands();
  }, []);
  return (
    <div className={styles.topBrands}>
      <Container>
        <BrandsCarousel data={data} />
      </Container>
    </div>
  );
}
