import { useEffect, useState } from "react";
import styles from "@/styles/components/ProductInside.module.css";
import DecreaseIcon from "../Icons/DecreaseIcon";
import IncreaseIcon from "../Icons/IncreaseIcon";
import { useAtom } from "jotai";
import { BasketReload, ProductQuantity } from "@/store/atoms";
import { actionBasket } from "@/pages/api/actionBasket";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useTranslation } from "next-i18next";

export default function ProductCounter({
  disabled,
  stockCount,
  func,
  quantity,
  id,
}) {
  const router = useRouter();
  const locale = router.locale;
  const [basketReload, setBasketReload] = useAtom(BasketReload);
  const [value, setValue] = useState(
    stockCount == 0 ? 0 : quantity ? quantity : 1
  );
  const [productQuantity, setProductQuantity] = useAtom(ProductQuantity);
  const { t } = useTranslation("common");
  useEffect(() => {
    stockCount == 0 ? setValue(0) : quantity ? setValue(quantity) : setValue(1);
  }, [stockCount, quantity]);

  useEffect(() => {
    func && func(value);
  }, [value]);

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

  const Decrease = () => {
    value >= 2 ? setValue(value - 1) : value;
    value >= 2 ? setProductQuantity(value - 1) : setProductQuantity(value);

    const handleActionBasket = async () => {
      const response = await actionBasket(locale, id, value - 1);
      if (response?.responseStatus?.ResponseCode == 200) {
        // await SuccessTimer(response?.responseStatus?.Message);
        setBasketReload(basketReload + 1);
        SuccessTimer(t("modals.noted"));
      }
    };
    if (router.pathname == "/basket") {
      handleActionBasket();
    }
  };
  const Increase = () => {
    value <= stockCount ? setValue(value + 1) : value;
    value <= stockCount
      ? setProductQuantity(value + 1)
      : setProductQuantity(value);

    const handleActionBasket = async () => {
      const response = await actionBasket(locale, id, value + 1);
      if (response?.responseStatus?.ResponseCode == 200) {
        // await SuccessTimer(response?.responseStatus?.Message);
        setBasketReload(basketReload + 1);
        SuccessTimer(t("modals.noted"));
      }
    };
    if (router.pathname == "/basket") {
      handleActionBasket();
    }
  };

  useEffect(() => {});

  return (
    <div className={styles.productCounter}>
      <button
        onClick={Decrease}
        className={`${styles.decrease} dark:text-light ${
          value == 1 || value == 0 ? styles.disabled : ""
        }`}
      >
        <DecreaseIcon />
      </button>
      <input
        type="number"
        className={`${styles.input} dark:text-light`}
        readOnly
        value={value}
        disabled={disabled}
      />
      <button
        onClick={Increase}
        className={`${styles.increase} dark:text-light ${
          value == stockCount ? styles.disabled : ""
        }`}
      >
        <IncreaseIcon />
      </button>
    </div>
  );
}
