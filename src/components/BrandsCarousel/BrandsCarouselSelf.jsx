import styles from "@/styles/components/TopBrands.module.css";
import IconButton from "@/components/Button/iconButton";
import RightArrowIcon from "@/components/Icons/RightArrowIcon";
import LeftArrowIcon from "@/components/Icons/LeftArrowIcon";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function CarouselNextArrow(props) {
  const { onClick } = props;

  return (
    <div className={styles.nextButton}>
      <IconButton icon={<RightArrowIcon dark="true" />} onClick={onClick} />
    </div>
  );
}

function CarouselPrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.prevButton}>
      <IconButton icon={<LeftArrowIcon dark="true" />} onClick={onClick} />
    </div>
  );
}
export default function BrandsCarouselSelf({ data }) {
  const [hoveredId, setHoveredId] = useState(null);
  const settings = {
    className: "brands-carousel",
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {data?.map((item) => (
          <Link
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            key={item.id}
            className={
              hoveredId === item.id
                ? `${styles.link} transition dark:invert dark:grayscale dark:contrast-0 dark:hover:opacity-30`
                : `${styles.link} ${styles.view}`
            }
            href={item.link}
          >
            <img className={styles.image} src={item.logo} alt={item.name} />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
