import styles from "@/styles/components/TrendsCarousel.module.css";
import TrendsCarouselComponent from "@/components/TrendsCarousel";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBanners } from "@/pages/api/getBanners";

export default function TrendsCarousel() {
  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetBanners = async () => {
      const response = await getBanners(locale);
      setData(response?.topbrands);
    };
    handleGetBanners();
  }, []);
  return (
    <div
      className={`${styles.trendsCarousel} trends-carousel max-[550px]:!py-0`}
    >
      <TrendsCarouselComponent data={data} />
    </div>
  );
}
