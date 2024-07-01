import styles from "@/styles/components/TrendsCarousel.module.css";
import Item1 from "@/assets/images/trends/trendCarousel1.png";
import Item2 from "@/assets/images/trends/trendCarousel2.png";
import Item3 from "@/assets/images/trends/trendCarousel3.png";
import Item4 from "@/assets/images/trends/trendCarousel4.png";
import Slider from "react-slick";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import Item21 from "@/assets/images/trends-m/trend-m-1.png";
import Item22 from "@/assets/images/trends-m/trend-m-2.png";
import Item23 from "@/assets/images/trends-m/trend-m-3.png";
import Item24 from "@/assets/images/trends-m/trend-m-4.png";
import Item25 from "@/assets/images/trends-m/trend-m-5.png";

export default function TrendsCarouselComponent({ data }) {
  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };

  return (
    <div className={styles.self}>
      <div className={styles.webSlider}>
        <Slider {...settings}>
          {data?.map((item) => (
            <div key={item.id} className={styles.item}>
              <Link href={item.link || "/"} target="_blank">
                <img src={item.logo} alt={item.name} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      {/*<div className={styles.mobSlider}>*/}
      {/*    {*/}
      {/*        data?.map(item => (*/}
      {/*            <Link className={styles.link} key={item.id} href='/'>*/}
      {/*                <img className='rounded-[25px]' src={item.logo} alt={item.name}/>*/}
      {/*            </Link>*/}
      {/*        ))*/}
      {/*    }*/}
      {/*</div>*/}
    </div>
  );
}
