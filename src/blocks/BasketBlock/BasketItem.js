import IconButton from "@/components/Button/iconButton";
import DeleteIcon from "@/components/Icons/DeleteIcon";
import NewIcon from "@/components/Icons/NewIcon";
import PremiumIcon from "@/components/Icons/PremiumIcon";
import ProductCounter from "@/components/ProductInside/Counter";
import styles from "@/styles/components/BasketList.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";
import { BasketReload, PersonalInfoSuccess } from "@/store/atoms";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { actionBasket } from "@/pages/api/actionBasket";
import { deleteBasket } from "@/pages/api/deleteBasket";
import Link from "next/link";
import Image from "next/image";

export default function BasketItem({ i, item, func }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = router.locale;
  const [count, setCount] = useState();
  const [productSelf, setProductSelf] = useState([]);
  const [basketReload, setBasketReload] = useAtom(BasketReload);
  const [storeDataSuccess, setStoreDataSuccess] = useAtom(PersonalInfoSuccess);
  const quantityChild = (data) => {
    setCount(data);
  };

  useEffect(() => {
    setCount(item?.quantity);
  }, [item]);

  useEffect(() => {
    item?.variations && setVariationId(item?.variations[0].variation_id);
    item?.variations && setProductSelf(item?.variations[0]);
  }, [item]);

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
  const handleDeleteBasket = async (id) => {
    setStoreDataSuccess(storeDataSuccess + 1);
    const response = await deleteBasket(locale, id);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message);
      setBasketReload(basketReload + 1);
    } else {
    }
  };

  return (
    <div key={i} className={styles.listItem}>
      <div className={styles.itemLeft}>
        <div className="h-[157px] max-w-[185px]">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={item.image}
            alt="GameNote"
            className={styles.image}
          />
        </div>
        <div className={styles.button}>
          {item.is_new == false ? (
            <div className={`${styles.productType} ${styles.premium} premium`}>
              <span className={styles.text}>Premium</span>
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
      </div>

      <div className={styles.itemRight}>
        <Link
          href={`/product/${item?.variation?.slug}`}
          className={`${styles.title} min-h-[54px] block`}
        >
          {item.name}
        </Link>
        <div className={styles.deleteIcon}>
          <IconButton
            onClick={handleDeleteBasket.bind(
              this,
              Number(item?.variation?.variation_id)
            )}
            icon={<DeleteIcon dark="true" />}
          />
        </div>

        <div className={styles.buttonsContainer}>
          <div
            className={`${styles.button} ${styles.counterContainer} max-[800px]:w-full`}
          >
            <ProductCounter
              id={Number(item?.variation?.variation_id)}
              quantity={Number(item.quantity)}
              func={quantityChild}
              stockCount={item?.variation && item?.variation.stock}
              disabled={item?.variation && item?.variation.stock == 0}
            />
          </div>
          <div className={styles.price}>
            <div className={`${styles.current} text-black dark:!text-light`}>
              {item?.variation?.price_dis !== "0.00"
                ? parseFloat(item?.variation?.price_dis)
                : parseFloat(item?.variation?.price)}{" "}
              ₼
            </div>
            {item?.variation?.price_old && (
              <del className={styles.old}>
                {parseFloat(item?.variation?.price_old)} ₼
              </del>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
