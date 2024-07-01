import styles from "@/styles/components/ProductInside.module.css";
import StarIcon from "../Icons/StarIcon";
import CheckIcon from "../Icons/CheckIcon";
import IconButton from "../Button/iconButton";
import CompareIcon from "../Icons/CompareIcon";
import FavoriteIcon from "../Icons/FavoriteIcon";
import Button from "../Button";
import ShopIcon from "../Icons/ShopIcon";
import ProductCounter from "./Counter";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getCookie, setCookie } from "cookies-next";
import { useAtom } from "jotai";
import {
  BasketReload,
  ComparisonReload,
  FavoriteReload,
  ModalType,
  ModalVisibility,
  PersonalInfoSuccess,
  ProductQuantity,
} from "@/store/atoms";
import { log } from "next/dist/server/typescript/utils";
import { Parser } from "html-to-react";
import { actionFavorite } from "@/pages/api/actionFavorite";
import { useRouter } from "next/router";
import { actionBasket } from "@/pages/api/actionBasket";
import Swal from "sweetalert2";
import { actionComparison } from "@/pages/api/actionComparison";
import { getSimiliarProducts } from "@/pages/api/getSimiliarProducts";
import { getMenuList } from "@/pages/api/getMenuList";
import { useTranslation } from "next-i18next";
import specificationsIcon from "@/store/specifications";
import CloseIcon from "@/components/Icons/CloseIcon";

export default function ProductMainDetails({ data }) {
  const { t } = useTranslation("common");
  const htmlParser = new Parser();
  const router = useRouter();
  const locale = router.locale;
  const [variationId, setVariationId] = useState();
  const [productSelf, setProductSelf] = useState([]);
  const [productData, setProductData] = useState([]);
  const [productQuantity, setProductQuantity] = useAtom(ProductQuantity);
  const [success, setSuccess] = useState(false);
  const [modalType, setModalType] = useAtom(ModalType);
  const [storeDataSuccess, setStoreDataSuccess] = useAtom(PersonalInfoSuccess);
  const [modalVisibility, setModalVisibility] = useAtom(ModalVisibility);
  const [favoriteReload, setFavoriteReload] = useAtom(FavoriteReload);
  const [comparisonReload, setComparisonReload] = useAtom(ComparisonReload);
  const [basketReload, setBasketReload] = useAtom(BasketReload);
  const [count, setCount] = useState();
  const token = getCookie("AccessToken");

  const [token_, setToken_] = useState("");

  const quantityChild = (data) => {
    setCount(data);
  };

  const handleOpenLoginModal = () => {
    setModalType("login");
    setModalVisibility(true);
  };

  // useEffect(() => {
  //   SuccessTimer("Dəyişiklik qeydə alındı");
  // }, [count]);

  useEffect(() => {
    setToken_(token);
  }, [token]);

  useEffect(() => {
    setProductData(data);
  }, [data]);

  useEffect(() => {
    productData?.variations &&
      setVariationId(productData?.variations[0].variation_id);
    productData?.variations && setProductSelf(productData?.variations[0]);
  }, [productData]);

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
    const response = await actionBasket(locale, id, count);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message);
      setBasketReload(basketReload + 1);
    } else if (response?.responseStatus?.ResponseCode == 403) {
      handleOpenLoginModal();
    }
  };

  return (
    <div className={styles.productMainDetails}>
      <h3 className={styles.title}>{productData?.name}</h3>

      <div className={styles.price}>
        <div className={`${styles.current}`}>
          <span class="price-current">{productSelf?.price} ₼</span>
        </div>
        {productSelf?.price_old && (
          <del className={`${styles.old} text-black dark:text-light`}>
            {productSelf?.price_old} ₼
          </del>
        )}
      </div>

      <div className={styles.generalInfo}>
        <ul className={styles.list}>
          {productData?.label?.map((item, i) => (
            <li className={styles.item} key={i}>
              <span className={styles.icon}>
                {item.status ? (
                  <CheckIcon />
                ) : (
                  <CloseIcon style={{ background: "red", color: "white" }} />
                )}
              </span>
              <span className={styles.text}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.buttons}>
        <div className={styles.buttonsContainer}>
          <div className={`${styles.button} ${styles.counterContainer}`}>
            <ProductCounter
              func={quantityChild}
              stockCount={
                productData?.variations && productData?.variations[0].stock
              }
              disabled={
                productData?.variations && productData?.variations[0].stock == 0
              }
            />
          </div>
          <div className={`${styles.button} ${styles.addToBasket}`}>
            <Button
              onClickFunction={handleActionBasket.bind(
                this,
                productData?.variations &&
                  productData?.variations[0]?.variation_id
              )}
              disabled={
                productData?.variations && productData?.variations[0].stock == 0
              }
              iconRight="true"
              text={t("general.add_to_basket")}
              icon={<ShopIcon style={{ fontSize: "18px" }} />}
            />
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.button}>
            <IconButton
              fullBackground={productData?.is_comparisons}
              onClick={handleActionComparison.bind(
                this,
                productData?.variations &&
                  productData?.variations[0]?.product_id
              )}
              icon={<CompareIcon dark="true" style={{ fontSize: "24px" }} />}
            />
          </div>
          <div className={styles.button}>
            <IconButton
              fullBackground={productData?.is_favorite}
              onClick={handleActionFavorite.bind(
                this,
                productData?.variations &&
                  productData?.variations[0]?.product_id
              )}
              icon={<FavoriteIcon dark="true" style={{ fontSize: "18px" }} />}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.mainDetails} main-details`}>
        <p className={`${styles.title} dark:!text-light`}>
          {t("general.main_specifications")}
        </p>
        <div className="text-black dark:text-light">
          <div className="descriptions flex flex-wrap text-black dark:text-light">
            {productData?.variations &&
            productData?.variations[0]?.six_grid.length > 0 ? (
              productData?.variations[0]?.six_grid?.map((item, i) => (
                <div className="technical flex w-1/2 mb-[10px]" key={i}>
                  <div className="left text-[28px] text-green pr-[15px] pt-[5px]">
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
              ))
            ) : (
              <>
                {htmlParser.parse(productData?.technical_specifications_short)}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
