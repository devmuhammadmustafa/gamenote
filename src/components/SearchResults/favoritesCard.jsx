import styles from "@/styles/components/Products.module.css";
import Image1 from "@/assets/images/product.png";
import Image from "next/image";
import Button from "@/components/Button";
import NewIcon from "@/components/Icons/NewIcon";
import Link from "next/link";
import IconButton from "@/components/Button/iconButton";
import CompareIcon from "@/components/Icons/CompareIcon";
import FavoriteIcon from "@/components/Icons/FavoriteIcon";
import ShopIcon from "@/components/Icons/ShopIcon";
import ProductBanner from "@/assets/images/ProductBanner.png";
import PremiumIcon from "@/components/Icons/PremiumIcon";
import { Parser } from "html-to-react";
import Swal from "sweetalert2";
import { actionFavorite } from "@/pages/api/actionFavorite";
import { actionBasket } from "@/pages/api/actionBasket";
import { useRouter } from "next/router";
import {
  BasketReload,
  ComparisonReload,
  FavoriteReload,
  ModalType,
  ModalVisibility,
  PersonalInfoSuccess,
} from "@/store/atoms";
import { useAtom } from "jotai";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { actionComparison } from "@/pages/api/actionComparison";
import { useTranslation } from "next-i18next";

export default function FavoritesCard({ banner, data }) {
  const { t } = useTranslation("common");
  const htmlParser = new Parser();
  const router = useRouter();
  let locale = router.locale;
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

  const colors = [
    {
      value: "#fff",
    },
    {
      value: "#292D32",
    },
    {
      value: "#A5A5A5",
    },
    {
      value: "#25540F",
    },
  ];
  // const test = data[0]?.technical_specifications_short;

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

  const handleActionFavorite = async (id) => {
    setStoreDataSuccess(storeDataSuccess + 1);
    const response = await actionFavorite(locale, id);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message);
      setFavoriteReload(favoriteReload + 1);
    } else if (response?.responseStatus?.ResponseCode == 403) {
      handleOpenLoginModal();
    }
  };

  const handleActionComparison = async (id) => {
    setStoreDataSuccess(storeDataSuccess + 1);
    const response = await actionComparison(locale, id);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message);
      setComparisonReload(comparisonReload + 1);
    } else if (response?.responseStatus?.ResponseCode == 403) {
      handleOpenLoginModal();
    }
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

  return (
    <>
      {data?.map((item) => (
        <div
          key={item.id}
          className={`${styles.productCard} bg-white dark:bg-panel-dark`}
        >
          <div className={styles.topPart}>
            <div className={styles.left}>
              <div className={styles.image}>
                <img className={styles.self} src={item.image} alt="test" />
              </div>
              <Link href={`/product/${item?.first_variation?.slug}`}>
                <h3 className={styles.title}>{htmlParser.parse(item.name)}</h3>
              </Link>
            </div>
            <div className={styles.right}>
              <div className={styles.price}>
                <div className={`${styles.current} text-black dark:text-light`}>
                  {Number(item.first_variation?.price_dis) == 0
                    ? item.first_variation?.price
                    : item.first_variation?.price_dis}{" "}
                  ₼
                </div>
                {Number(item.first_variation?.price_dis) !== 0 && (
                  <del className={styles.old}>
                    {item.first_variation?.price} ₼
                  </del>
                )}
              </div>
              <ul className={styles.list}>
                <li
                  className={`${styles.item} bg-[#f5f5f5] dark:bg-[#292D32] text-black dark:text-light`}
                >
                  {t("general.pro_stock")}
                </li>
                <li
                  className={`${styles.item} bg-[#f5f5f5] dark:bg-[#292D32] text-black dark:text-light`}
                >
                  {t("general.pro_discount")}
                </li>
                <li
                  className={`${styles.item} bg-[#f5f5f5] dark:bg-[#292D32] text-black dark:text-light`}
                >
                  {t("general.pro_loan")}
                </li>
                <li
                  className={`${styles.item} bg-[#f5f5f5] dark:bg-[#292D32] text-black dark:text-light`}
                >
                  {t("general.pro_comission")}
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.middlePart + " product-card-middle"}>
            <div className={styles.left}>
              <div className={`${styles.title} text-black dark:text-light`}>
                {t("general.main_specifications")}
              </div>
              <div className="descriptions text-black dark:text-light line-clamp-4">
                {htmlParser.parse(
                  htmlParser.parse(item.technical_specifications_short)
                )}
              </div>
            </div>

            <div className={styles.right}>
              {colors.map((item, index) => (
                <div
                  key={index}
                  style={
                    item.value === "#fff"
                      ? { background: item.value }
                      : { background: item.value }
                  }
                  className={`${styles.color} ${
                    item.value === "#fff" ? `before:!opacity-100` : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className={styles.bottomPart}>
            <div className={styles.left}>
              <Link href={`/product/${item?.first_variation?.slug}`}>
                <Button text={t("general.more")} />
              </Link>

              {item.is_new == false ? (
                <div
                  className={`${styles.productType} ${styles.premium} premium`}
                >
                  <span className={styles.text}>{t("general.premium")}</span>
                  <PremiumIcon />
                </div>
              ) : item.is_new == true ? (
                <div
                  className={`${styles.productType} ${styles.new} new border-black dark:border-[#7d7d7d]`}
                >
                  <NewIcon />
                  <span className={`${styles.text} text-black dark:text-light`}>
                    {t("general.new")}
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.right}>
              <div className={styles.buttons}>
                <div className={styles.button}>
                  <IconButton
                    onClick={handleActionComparison.bind(this, item.id)}
                    icon={
                      <CompareIcon dark="true" style={{ fontSize: "24px" }} />
                    }
                  />
                </div>
                <div className={styles.button}>
                  <IconButton
                    onClick={handleActionFavorite.bind(this, item.id)}
                    icon={
                      <FavoriteIcon dark="true" style={{ fontSize: "18px" }} />
                    }
                  />
                </div>
                <div className={styles.button}>
                  <IconButton
                    onClick={handleActionBasket.bind(
                      this,
                      item?.first_variation?.variation_id
                    )}
                    icon={<ShopIcon dark="true" style={{ fontSize: "18px" }} />}
                  />
                </div>
                <div className={`${styles.button} ${styles.type}`}>
                  {item.is_new == false ? (
                    <div
                      className={`${styles.productType} ${styles.premium} premium`}
                    >
                      <span className={styles.text}>Premium</span>
                      <PremiumIcon />
                    </div>
                  ) : item.is_new == true ? (
                    <div
                      className={`${styles.productType} ${styles.new} new border-black dark:border-[#7d7d7d]`}
                    >
                      <NewIcon />
                      <span
                        className={`${styles.text} text-black dark:text-light`}
                      >
                        Yeni
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
