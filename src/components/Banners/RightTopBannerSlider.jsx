import styles from '@/styles/components/Banners.module.css';
import GameNoteLogoIcon from '@/components/Icons/GameNoteLogoIcon';
import Link from 'next/link';
import PhoneIcon from '@/components/Icons/PhoneIcon';
import EnvelopeIcon from '@/components/Icons/EnvelopeIcon';
import { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import Slider from 'react-slick';
import Image from 'next/image';
import BannerImage from '@/assets/images/BannerSlider.png';
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon';
import RightArrowIcon from '@/components/Icons/RightArrowIcon';
import IconButton from '@/components/Button/iconButton';
import { useAtom } from 'jotai';
import { BannerSlider } from '@/store/atoms';
import { useRouter } from 'next/router';
import { getNewProducts } from '@/pages/api/getNewProducts';
import { getSliderItems } from '@/pages/api/getSliderItems';

function CarouselNextArrow(props) {
  const [bannerInfo, setBannerInfo] = useAtom(BannerSlider);
  const { onClick } = props;

  useEffect(() => {
    setBannerInfo({
      ...bannerInfo,
      currentSlide: props.currentSlide,
      slideCount: props.slideCount,
    });
  }, [props.currentSlide]);

  return (
    <div
      className={`${styles.nextButton} ${
        bannerInfo.slideCount - 1 === bannerInfo.currentSlide
          ? styles.disable
          : ''
      }`}>
      <IconButton icon={<RightArrowIcon />} onClick={onClick} disable={bannerInfo.slideCount - 1 === bannerInfo.currentSlide} />
    </div>
  );
}

function CarouselPrevArrow(props) {
  const [bannerInfo] = useAtom(BannerSlider);

  const { onClick } = props;
  
  return (
    <div
      className={`${styles.prevButton} ${
        bannerInfo.currentSlide === 0 ? styles.disable : ''
      }`}>
      <IconButton icon={<LeftArrowIcon />} onClick={onClick} disable={bannerInfo.currentSlide === 0} />
    </div>
  );
}
export default function RightTopBannerSlider() {
  const [data, setData] = useState([]);

  const router = useRouter();

  let locale = router.locale;

  useEffect(() => {
    const handleGetSliderItems = async () => {
      const response = await getSliderItems(locale);

      setData(response?.sliders);
    };

    handleGetSliderItems();
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    arrows: true,
    fade: true,
    speed: 1000,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
  };


  return (
    <div className={`${styles.rightTopBannerSlider} main-carousel`}>
      <div className={styles.slider}>
        <Slider {...settings}>
          {data?.map((item, i) => (
            <div key={i} className={styles.listItem}>
              <Link href={`${item.btn_link}`}>
                <img src={item.sl_image} alt="test" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
