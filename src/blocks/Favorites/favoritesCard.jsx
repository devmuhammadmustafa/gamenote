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
import specificationsIcon from "@/store/specifications";
import RightArrowIcon from "@/components/Icons/RightArrowIcon";
import CheckIcon from "@/components/Icons/CheckIcon";
import Pagination from "../ProductsFilterPageBlock/Pagination";
import { useSearchParams } from "next/navigation";

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
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [token_, setToken_] = useState("");

  const handleOpenLoginModal = () => {
    setModalType("login");
    setModalVisibility(true);
  };

  useEffect(() => {
    if (data) {
      setPageCount(data.length - 1);
    }
  }, [data]);

  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("page")) {
      setCurrentPage(searchParams.get("page"));
    } else {
      setCurrentPage(1);
    }
  }, [searchParams, router]);

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
              <Link
                className={`block ${styles.image}`}
                href={`/product/${item?.first_variation?.slug}`}
              >
                <img className={styles.self} src={item.image} alt="test" />
              </Link>
              <Link href={`/product/${item?.first_variation?.slug}`}>
                <h3 className={styles.title}>{htmlParser.parse(item.name)}</h3>
              </Link>
            </div>
            <div className={styles.right}>
              <div className={styles.price}>
                <div className={`${styles.current} `}>
                  {item.first_variation?.price} ₼
                </div>
                {Number(item.first_variation?.price_old) !== 0 && (
                  <del className={`${styles.old} text-black dark:text-light`}>
                    {item.first_variation?.price_old} ₼
                  </del>
                )}
              </div>
              <ul className={styles.list}>
                {item?.label?.map((label, i) => (
                  <li
                    key={i}
                    className={`${styles.item} flex items-center bg-[#f5f5f5] dark:bg-[#292D32] text-black dark:text-light`}
                  >
                    <span className="mr-[5px] block">
                      <CheckIcon />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.middlePart + " product-card-middle"}>
            <div className={styles.left}>
              <div className={`${styles.title} text-black dark:text-light`}>
                {t("general.main_specifications")}
              </div>
              <div className="descriptions flex flex-wrap text-black dark:text-light">
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
              <Button
                text={t("general.add_to_basket")}
                icon={<ShopIcon />}
                iconRight
                onClickFunction={handleActionBasket.bind(
                  this,
                  item?.first_variation?.variation_id
                )}
              />

              {item.is_new == false && item.is_premium == true ? (
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
                <div className={`${styles.button} hidden max-[550px]:block`}>
                  <IconButton
                    onClick={handleActionBasket.bind(
                      this,
                      item?.first_variation?.variation_id
                    )}
                    background
                    icon={<ShopIcon style={{ fontSize: "16px" }} />}
                  />
                </div>
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
                <div className={`${styles.button} max-[550px]:hidden`}>
                  <Link href={`/product/${item?.first_variation?.slug}`}>
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

      {router.route == "/search" && (
        <Pagination currentPage={currentPage} pageCount={pageCount} />
      )}
    </>
  );
}
