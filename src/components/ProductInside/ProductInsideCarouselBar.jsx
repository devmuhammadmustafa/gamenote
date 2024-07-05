import styles from "@/styles/components/ProductInside.module.css";
import PremiumIcon from "@/components/Icons/PremiumIcon";
import NewIcon from "@/components/Icons/NewIcon";
import { useRef, useState, useEffect } from "react";
import Image1 from "@/assets/images/product.png";
import Image from "next/image";
import Slider from "react-slick";
import Fancybox from "./Fancybox.jsx";
import Link from "next/link.js";

export default function ProductInsideCarouselBar({ type, data }) {
  let typeButton;
  switch (type) {
    case "premium":
      typeButton = (
        <div className={`${styles.productType} ${styles.premium}`}>
          <span className={styles.text}>Premium</span>
          <PremiumIcon />
        </div>
      );
      break;
    case "new":
      typeButton = (
        <div
          className={`${styles.productType} ${styles.new} border-black dark:border-[#7d7d7d]`}
        >
          <NewIcon />
          <span className={`${styles.text} text-black dark:text-light`}>
            Yeni
          </span>
        </div>
      );
      break;
    default:
      typeButton = <></>;
  }

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [width, setWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [slideWidth, setSlideWidth] = useState(null);
  const sliderRef = useRef();

  useEffect(() => {
    if (nav1) {
      nav1.slickGoTo(0);
      setTimeout(() => {
        nav1?.slickGoTo(0);
      }, 1000);
    }
    // console.log(nav1.slickGoTo(0))
  }, [nav1]);

  const handleAfterChange = (currentSlide) => {
    const slide = document.querySelector(`[data-index="${currentSlide}"]`);
    if (slide) {
      const slideWidth = slide.offsetWidth;
      setSlideWidth(slideWidth);
    }
  };

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    arrows: false,
    fade: false,
    asNavFor: nav2,
    ref: (slider1) => setNav1(slider1),
  };
  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    arrows: false,
    fade: false,
    asNavFor: nav1,
    ref: (slider2) => setNav2(slider2),
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const colors = [
    {
      id: 1,
      value: "#fff",
      active: false,
    },
    {
      id: 2,
      value: "#292D32",
      active: true,
    },
    {
      id: 3,
      value: "#A5A5A5",
      active: false,
    },
    {
      id: 4,
      value: "#25540F",
      active: false,
    },
  ];

  let linkRef = useRef();

  const currentSlideRef = useRef();

  useEffect(() => {
    setCurrentSlide(currentSlideRef);
  }, []);

  function handleClick() {
    linkRef.current.click();
  }

  return (
    <div className={styles.carouselBar}>
      {/*<div className={styles.infoButtons}>*/}
      {/*    {typeButton}*/}
      {/*</div>*/}

      <div className={styles.mainCarousel}>
        <Fancybox>
          <Slider ref={sliderRef} {...settingsMain}>
            {data?.images?.map((item, i) => (
              <div key={i} className={styles.item}>
                <Link data-fancybox="gallery" href={item.url} ref={linkRef}>
                  <img className={styles.image} src={item.url} alt="Gamenote" />
                </Link>
              </div>
            ))}
          </Slider>
        </Fancybox>
      </div>

      {/*<div className={styles.colors}>*/}
      {/*{*/}
      {/*    colors.map((item, index) => (*/}
      {/*        <div*/}
      {/*            key={index}*/}
      {/*            style={item.value === '#fff' ? {background: item.value} : {background: item.value}}*/}
      {/*            className={`${styles.color} ${item.value === '#fff' ? `before:!opacity-100` : ''} ${item.active ? styles.active : ''}`}*/}
      {/*        >*/}
      {/*        </div>*/}
      {/*    ))*/}
      {/*}*/}
      {/*</div>*/}

      <div className={`${styles.thumbsCarousel} product-thumbs-carousel`}>
        <Slider {...settingsThumbs}>
          {data?.images?.map((item, i) => (
            <div key={i} className={styles.item}>
              <img className={styles.image} src={item.url} alt={i} />
            </div>
          ))}
        </Slider>
        {data?.images?.length > 5 && (
          <div className={styles.moreViewContainer}>
            <div onClick={handleClick} className={styles.moreView}>
              +{data?.images.length - 5}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
