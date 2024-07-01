import styles from "@/styles/components/TopBrands.module.css";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import BrandsCarouselSelf from "@/components/BrandsCarousel/BrandsCarouselSelf";

import Image1 from "@/assets/images/brands-carousel/brand-1.svg";
import Image2 from "@/assets/images/brands-carousel/brand-2.svg";
import Image3 from "@/assets/images/brands-carousel/brand-3.svg";
import Image4 from "@/assets/images/brands-carousel/brand-4.svg";
import Image5 from "@/assets/images/brands-carousel/brand-6.svg";
import { useTranslation } from "next-i18next";
export default function BrandsCarousel({ data }) {
  const { t } = useTranslation("common");
  return (
    <div
      className={`${styles.self} after:bg-[#D9D9D9] after:dark:bg-[#3B474E] before:bg-[#D9D9D9] before:dark:bg-[#3B474E]`}
    >
      <ProductListTopTexts title={t("general.top_brands")} />
      <BrandsCarouselSelf data={data} />
    </div>
  );
}
