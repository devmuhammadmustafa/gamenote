import DeleteIcon from "@/components/Icons/DeleteIcon";
import NewIcon from "@/components/Icons/NewIcon";
import PremiumIcon from "@/components/Icons/PremiumIcon";
import ProductCounter from "@/components/ProductInside/Counter";
import styles from "@/styles/components/BasketList.module.css";
import { useTranslation } from "next-i18next";
import BasketItem from "./BasketItem";
import Button from "@/components/Button";
import { useAtom } from "jotai";
import { BasketTotalPrice } from "@/store/atoms";
import { useState } from "react";
import { log } from "next/dist/server/typescript/utils";
import Link from "next/link";

export default function BasketList({ data }) {
  const { t } = useTranslation("common");
  const [totalPrice, setTotalPrice] = useAtom(BasketTotalPrice);
  const [test, setTest] = useState(0);
  const totalSum = (info) => {
    info && setTotalPrice(totalPrice + info);
    info && setTest(test + info);
  };

  return (
    <div className={`${styles.basketList} bg-white dark:bg-panel-dark`}>
      <div className={styles.basketLeft}>
        <div className={`${styles.title} text-black dark:text-light`}>
          {t("general.basket_page_left_title")}
        </div>

        <div className={styles.list}>
          {data?.products?.map((item, i) => (
            <BasketItem key={i} item={item} func={totalSum} />
          ))}
        </div>
      </div>

      <div className={`${styles.basketRight}`}>
        <div className={`${styles.title} text-black dark:text-light`}>
          {t("general.complete_title")}
        </div>

        <div className={`${styles.rightBar} bg-[#404040] dark:bg-[#292D32]`}>
          <div className={styles.row}>
            <span className={styles.left}>{t("labels.products_price")}</span>
            <span className={styles.right}>{data?.total_price} ₼</span>
          </div>
          <div className={styles.row}>
            <span className={styles.left}>{t("labels.discount")}</span>
            <span className={styles.right}>0 ₼</span>
          </div>

          <div className={styles.totalRow}>
            <span className={styles.left}>{t("general.complete_title")}:</span>
            <span className={styles.right}>{data?.total_price} ₼</span>
          </div>

          <Link href="/basket/complete">
            <Button text={t("general.complete_title")} full />
          </Link>
        </div>
      </div>
    </div>
  );
}
