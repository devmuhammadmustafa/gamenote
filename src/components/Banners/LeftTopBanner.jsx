import styles from "@/styles/components/Banners.module.css";
import BannerImage from "@/assets/images/leftBanner.png";
import Image from "next/image";
import StarIcon from "@/components/Icons/StarIcon";
import Button from "@/components/Button";
import ShopIcon from "@/components/Icons/ShopIcon";
import CountdownTimer from "../Countdown/CountdownTimer";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDiscountProducts } from "@/pages/api/getDiscountProducts";
import { actionFavorite } from "@/pages/api/actionFavorite";
import { actionComparison } from "@/pages/api/actionComparison";
import { actionBasket } from "@/pages/api/actionBasket";
import { useAtom } from "jotai";
import {
  BasketReload,
  ComparisonReload,
  FavoriteReload,
  ModalType,
  ModalVisibility,
  PersonalInfoSuccess,
} from "@/store/atoms";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";
import Link from "next/link";
import specificationsIcon from "@/store/specifications";
import { Parser } from "html-to-react";
import CheckIcon from "../Icons/CheckIcon";

export default function LeftTopBanner() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = router.locale;
  const [data, setData] = useState([]);
  const [modalType, setModalType] = useAtom(ModalType);
  const [storeDataSuccess, setStoreDataSuccess] = useAtom(PersonalInfoSuccess);
  const [modalVisibility, setModalVisibility] = useAtom(ModalVisibility);
  const [favoriteReload, setFavoriteReload] = useAtom(FavoriteReload);
  const [comparisonReload, setComparisonReload] = useAtom(ComparisonReload);
  const [basketReload, setBasketReload] = useAtom(BasketReload);
  const token = getCookie("AccessToken");

  const htmlParser = new Parser();

  const [token_, setToken_] = useState("");

  const handleOpenLoginModal = () => {
    setModalType("login");
    setModalVisibility(true);
  };

  useEffect(() => {
    setToken_(token);
  }, [token]);

  const multiText = [
    {
      lang: "az",
      expireText: "Müddəti bitdi!",
      dayText: "Gün",
    },
    {
      lang: "ru",
      expireText: "Истекший!",
      dayText: "День",
    },
    {
      lang: "en",
      expireText: "Expired!",
      dayText: "Day",
    },
  ];

  useEffect(() => {
    const handleGetDiscountProduct = async () => {
      const response = await getDiscountProducts(locale);
      if (response) {
        setData(
          response?.responseStatus?.data[
            response?.responseStatus?.data.length - 1
          ]
        );
      }
    };
    handleGetDiscountProduct();
  }, [locale]);

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const end = new Date(data?.end_time);
      const timeDiff = end - now;

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        setTimeLeft(multiText.find((item) => item.lang == locale).expireText);
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft(
          !isNaN(days) &&
            `${days} ${
              multiText.find((item) => item.lang == locale).dayText
            } ${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }
    });

    return () => {
      clearInterval(intervalId);
    };
  }, [data?.end_time, locale]);

  const SuccessTimer = async (text) => {
    let timerInterval;
    Swal.fire({
      title: text,
      icon: "success",
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

  const handleActionBasket = async (id) => {
    setStoreDataSuccess(storeDataSuccess + 1);
    const response = await actionBasket(locale, id, 1);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message);
      setBasketReload(basketReload + 1);
    } else if (response?.responseStatus?.ResponseCode == 403) {
      handleOpenLoginModal();
    }
  };

  let link = data?.slug;

  return (
    <div
      className={`${styles.leftTopBanner} bg-white dark:bg-panel-dark flex flex-col`}
    >
      <div className={`${styles.header} bg-[#D9D9D9] dark:bg-[#D9D9D9]`}>
        <div className={styles.left}>{t("general.special_offer")}</div>
        <div className={styles.right}>{timeLeft}</div>
      </div>
      <div className={`${styles.body} flex-1 !px-[20px]`}>
        <div className="top">
          <div
            className={`${styles.image} flex mb-[20px] relative after:absolute after:h-[1px] after:w-full after:left-0 after:bottom-0 after:dark:bg-[#292D32] after:bg-[#D9D9D9]`}
          >
            <img
              className="w-1/3 object-contain mr-[20px] object-left-top"
              src={data?.pr_cover}
              alt=""
            />

            <div className="right">
              <Link
                href={`/product/${link}`}
                className={`${styles.title} !text-[12px] !mb-[10px] block text-black dark:text-light`}
              >
                {data?.pr_name}
              </Link>

              <div className={`${styles.price} !mb-[10px] !pb-0`}>
                <div
                  className={`${styles.current} !text-[12px] !pt-1 !pb-1 text-black dark:text-light`}
                >
                  {data?.pr_price_discount_hours} ₼
                </div>
                <del
                  className={`${styles.old} text-[10px] text-black dark:text-light`}
                >
                  {data?.price_old} ₼
                </del>
              </div>
            </div>
          </div>
          <div
            className={`${styles.details} !pb-[10px] flex justify-between !items-start`}
          >
            <div className="descriptions flex flex-wrap text-black dark:text-light">
              {data?.six_grid?.map((item, i) => (
                <div
                  className="technical flex w-full max-[750px]:w-full mb-[5px]"
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
                    <span className="text-[#7D7D7D] dark:text-light text-[10px]">
                      {item.f_name}
                    </span>
                    <p className="text-[10px] dark:text-white font-semibold">
                      {htmlParser.parse(item.f_val)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <ul className={styles.list}>
              {data?.discount_labels?.map((item, i) => (
                <li
                  key={i}
                  className={`${styles.listItem} flex items-center !mr-0 mb-[8px] w-max bg-[#f5f5f5] !text-[10px] dark:bg-[#292D32] text-black dark:text-light`}
                >
                  <span className="mr-[5px] block">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${styles.ratingBar} after:dark:bg-[#292D32] after:bg-[#D9D9D9]`}
          >
            <div className={`${styles.stars} opacity-0`}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <span
              className={`${styles.ratingCount} text-black dark:text-light opacity-0`}
            >
              515 səs
            </span>
          </div>
        </div>

        <div
          className={`${styles.button} after:bg-[#D9D9D9] after:!dark:bg-[#3f464d]`}
        >
          <Button
            discount
            onClickFunction={handleActionBasket.bind(this, data?.variation_id)}
            icon={<ShopIcon />}
            text={t("general.add_to_basket")}
            iconRight={true}
            full
          />
        </div>
      </div>
    </div>
  );
}
