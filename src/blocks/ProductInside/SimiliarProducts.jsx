import styles from "@/styles/components/ProductInside.module.css";
import Image1 from "@/assets/images/product.png";
import Image from "next/image";
import StarIcon from "@/components/Icons/StarIcon";
import Button from "@/components/Button";
import Link from "next/link";
import IconButton from "@/components/Button/iconButton";
import CompareIcon from "@/components/Icons/CompareIcon";
import FavoriteIcon from "@/components/Icons/FavoriteIcon";
import ShopIcon from "@/components/Icons/ShopIcon";
import { useAtom } from "jotai";
import {
  BannerSlider,
  BasketReload,
  ComparisonReload,
  FavoriteReload,
  ModalType,
  ModalVisibility,
  PersonalInfoSuccess,
  ProductQuantity,
} from "@/store/atoms";
import { useEffect, useState } from "react";
import RightArrowIcon from "@/components/Icons/RightArrowIcon";
import LeftArrowIcon from "@/components/Icons/LeftArrowIcon";
import Slider from "react-slick";
import { getSimiliarProducts } from "@/pages/api/getSimiliarProducts";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { actionFavorite } from "@/pages/api/actionFavorite";
import { actionComparison } from "@/pages/api/actionComparison";
import { actionBasket } from "@/pages/api/actionBasket";
import { Parser } from "html-to-react";
import { getCookie } from "cookies-next";
import { useTranslation } from "next-i18next";
import specificationsIcon from "@/store/specifications";

export default function SimiliarProducts({ similiarData }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = router.locale;
  const [productData, setProductData] = useState([]);
  const [productQuantity, setProductQuantity] = useAtom(ProductQuantity);
  const [success, setSuccess] = useState(false);
  const [modalType, setModalType] = useAtom(ModalType);
  const [storeDataSuccess, setStoreDataSuccess] = useAtom(PersonalInfoSuccess);
  const [modalVisibility, setModalVisibility] = useAtom(ModalVisibility);
  const [favoriteReload, setFavoriteReload] = useAtom(FavoriteReload);
  const [comparisonReload, setComparisonReload] = useAtom(ComparisonReload);
  const [basketReload, setBasketReload] = useAtom(BasketReload);
  const token = getCookie("AccessToken");

  const [token_, setToken_] = useState("");

  const handleOpenLoginModal = () => {
    setModalType("login");
    setModalVisibility(true);
  };

  useEffect(() => {
    setToken_(token);
  }, [token]);
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
      <div className={`${styles.nextButton}`}>
        <IconButton icon={<RightArrowIcon dark="true" />} onClick={onClick} />
      </div>
    );
  }

  function CarouselPrevArrow(props) {
    const [bannerInfo] = useAtom(BannerSlider);
    const { onClick } = props;
    return (
      <div className={`${styles.prevButton}`}>
        <IconButton icon={<LeftArrowIcon dark="true" />} onClick={onClick} />
      </div>
    );
  }

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    arrows: true,
    fade: false,
    speed: 500,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const SuccessTimer = async (text, status) => {
    let timerInterval;
    Swal.fire({
      title: text,
      icon: status,
      timer: 5000,
      timerProgressBar: true,
      showCloseButton: true,
      confirmButtonColor: "green",
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      // if (result.dismiss === Swal.DismissReason.timer) {
      //     console.log('I was closed by the timer')
      // }
    });
  };

  const handleActionFavorite = async (id) => {
    setStoreDataSuccess(storeDataSuccess + 1);
    const response = await actionFavorite(locale, id);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message, "success");
      setFavoriteReload(favoriteReload + 1);
    } else if (response?.responseStatus?.ResponseCode == 403) {
      handleOpenLoginModal();
    }
  };

  const handleActionComparison = async (id) => {
    setStoreDataSuccess(storeDataSuccess + 1);
    const response = await actionComparison(locale, id);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message, "success");
      setComparisonReload(comparisonReload + 1);
    } else if (response?.responseStatus?.ResponseCode == 403) {
      handleOpenLoginModal();
    }
  };

  const handleActionBasket = async (id) => {
    setStoreDataSuccess(storeDataSuccess + 1);
    const response = await actionBasket(locale, id, productQuantity);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message, "success");
      setBasketReload(basketReload + 1);
    } else if (response?.responseStatus?.ResponseCode == 400) {
      await SuccessTimer(response?.responseStatus?.Message, "warning");
    }
  };

  const htmlParser = new Parser();

  return (
    <div className={styles.similiarProducts}>
      <p className={styles.title}>{t("general.similiar")}</p>

      <div className={`${styles.list} similiar-products`}>
        <Slider {...settings}>
          {similiarData?.map((item) => (
            <div
              key={item.id}
              className={`${styles.item} bg-white dark:!bg-panel-dark`}
            >
              <div className={styles.top}>
                <Link
                  href={item?.first_variation?.slug}
                  className={`${styles.image} flex justify-center`}
                >
                  <img className="max-h-[140px]" src={item.image} alt="test" />
                </Link>

                <div className={styles.details}>
                  <Link
                    href={item?.first_variation?.slug}
                    className={`${styles.productTitle} block`}
                  >
                    {item.name}
                  </Link>

                  <div className={styles.priceBar}>
                    <div className={styles.priceSelf}>
                      <div className={`${styles.current} `}>
                        {item?.first_variation?.price} ₼
                      </div>
                      {item?.first_variation?.price_old && (
                        <del
                          className={`${styles.old} text-black dark:!text-light`}
                        >
                          {item?.first_variation?.price_old} ₼
                        </del>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {item?.first_variation?.six_grid?.length > 0 && (
                <>
                  <div
                    className={`text-black dark:text-light mb-[10px] font-semibold`}
                  >
                    {t("general.main_specifications")}
                  </div>
                  <div className="descriptions flex flex-wrap text-black dark:text-light mb-[20px]">
                    {item?.first_variation?.six_grid?.map((item, i) => (
                      <div
                        className="technical flex w-1/2 max-[750px]:w-full mb-[10px]"
                        key={i}
                      >
                        <div className="left text-[20px] max-[500px]:text-[20px] text-green pr-[15px] max-[500px]:pr-[10px] pt-[5px]">
                          {
                            specificationsIcon?.find(
                              (icons) => icons.name == item.icon
                            ).icon
                          }
                        </div>
                        <div className="right">
                          <span className="text-[#7D7D7D] dark:text-light text-[12px]">
                            {item.f_name}
                          </span>
                          <p className="text-[12px] dark:text-white font-semibold">
                            {htmlParser.parse(item.f_val)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className={styles.bottom}>
                <div className={styles.left}>
                  <div onClick={handleActionBasket.bind(this, item?.id)}>
                    <Button
                      icon={<ShopIcon />}
                      text={t("general.add_to_basket")}
                    />
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.buttons}>
                    <div className={styles.button}>
                      <IconButton
                        onClick={handleActionComparison.bind(this, item?.id)}
                        icon={
                          <CompareIcon
                            dark="true"
                            style={{ fontSize: "24px" }}
                          />
                        }
                      />
                    </div>
                    <div className={styles.button}>
                      <IconButton
                        onClick={handleActionFavorite.bind(this, item?.id)}
                        icon={
                          <FavoriteIcon
                            dark="true"
                            style={{ fontSize: "18px" }}
                          />
                        }
                      />
                    </div>
                    <div className={styles.button}>
                      <Link href={item?.first_variation?.slug}>
                        <IconButton
                          icon={
                            <RightArrowIcon
                              dark="true"
                              style={{ fontSize: "18px" }}
                            />
                          }
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
