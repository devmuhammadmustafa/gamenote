import styles from "@/styles/components/BasketList.module.css";
import BasketItem from "@/blocks/BasketBlock/BasketItem";
import Button from "@/components/Button";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCityList } from "@/pages/api/getCityList";
import { useForm } from "react-hook-form";
import InputText from "@/components/Form/InputText";
import FormSelect from "@/components/Form/FormSelect";
import Textarea from "@/components/Form/Textarea";
import InputRadio from "@/blocks/CompleteOrder/InputRadio";
import { getMyAddresses } from "@/pages/api/cabinet/getMyAddresses";
import { useAtom } from "jotai";
import {
  CompleteOrderAction,
  PersonalInfo,
  ShippingMethod,
} from "@/store/atoms";
import Link from "next/link";
import EditIcon from "@/components/Icons/EditIcon";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";

export default function CompleteLeft({ data }) {
  const { t } = useTranslation("common");
  const [storeData, setStoreData] = useAtom(PersonalInfo);
  const [completeOrder, setCompleteOrder] = useAtom(CompleteOrderAction);
  const [shippingMethod] = useAtom(ShippingMethod);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cityData, setCityData] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [message, setMessage] = useState("");
  const [mailSuccess, setMailSuccess] = useState(false);
  const [blockType, setBlockType] = useState("");
  const token = getCookie("AccessToken");

  const shippingMethods = [
    {
      id: 1,
      name: t("labels.shipping_method_1"),
    },
    {
      id: 2,
      name: t("labels.shipping_method_2"),
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      name: t("labels.payment_method_1"),
    },
  ];

  const router = useRouter();
  let locale = router.locale;

  useEffect(() => {
    const handleGetCityList = async () => {
      const response = await getCityList(locale);
      setCityData(response?.responseStatus?.data);
    };
    handleGetCityList();
  }, []);

  useEffect(() => {
    const handleGetUserAddresses = async () => {
      const response = await getMyAddresses(locale);
      setAddresses(response?.responseStatus?.data);
    };
    handleGetUserAddresses();
  }, []);

  const formattedAddresses = addresses?.map((item, i) => ({
    id: i + 1,
    name: item.address,
  }));

  const values = {
    apiKey: "4b4277bd1523915d0655ecc44992f2db",
    AccessToken: token,
    promo: "test",
  };
  const {
    register,
    handleSubmit,
    clearErrors,
    control,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    values,
  });

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
    }).then((result) => {});
  };

  const onSubmit = async (data, e) => {
    console.log(data, "test");
    try {
      setLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${locale}/order/store.json`,
        requestOptions
      );
      const jsonData = await response.json();
      if (jsonData?.responseStatus?.ResponseCode == 200) {
        await SuccessTimer(jsonData?.responseStatus?.Message);
        setTimeout(() => {
          router.push("/cabinet/my-orders");
        }, 5000);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      return null;
    }
  };

  useEffect(() => {
    if (completeOrder) {
      handleSubmit(onSubmit)();
    }
  }, [completeOrder]);

  return (
    <div className={styles.basketLeft}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.form} ${styles.twoColumn}`}
      >
        <InputText
          clearErrors={clearErrors}
          errors={errors}
          register={register}
          required
          setValue={setValue}
          label={t("labels.nameSurname")}
          type="text"
          name="full_name"
          value={storeData?.fullname}
          placeholder={t("inputs.nameSurname")}
        />
        <InputText
          clearErrors={clearErrors}
          errors={errors}
          register={register}
          required
          setValue={setValue}
          label="Email"
          type="email"
          name="email"
          value={storeData?.email}
          placeholder={t("inputs.email")}
        />
        <InputText
          clearErrors={clearErrors}
          errors={errors}
          register={register}
          required
          setValue={setValue}
          label={t("labels.phone")}
          type="text"
          name="phone"
          value={storeData?.phone}
          placeholder={t("inputs.phone")}
        />
        <FormSelect
          clearErrors={clearErrors}
          errors={errors}
          register={register}
          control={control}
          required
          label={t("labels.city")}
          name="city_id"
          options={cityData}
          placeholder={t("inputs.city")}
          defaultValue="1"
        />
        <Textarea
          clearErrors={clearErrors}
          errors={errors}
          register={register}
          full
          setValue={setValue}
          label={t("labels.notes")}
          name="notes"
          placeholder={t("labels.notes_placeholder")}
        />

        <div className={styles.methods}>
          <div className={styles.methodTitle}>
            {t("labels.shipping_method_title")}
          </div>

          <InputRadio
            clearErrors={clearErrors}
            errors={errors}
            register={register}
            setDefaultValue={setValue}
            data={shippingMethods}
            name="shippingMethod"
            defaultValue="1"
          />
        </div>
        {shippingMethod == 2 &&
          (token && formattedAddresses ? (
            <div className={styles.methods}>
              <div className={styles.methodTitle}>
                {t("labels.my_addresses")}
              </div>

              <InputRadio
                clearErrors={clearErrors}
                errors={errors}
                register={register}
                setDefaultValue={setValue}
                required
                data={formattedAddresses}
                name="address"
              />
            </div>
          ) : (
            <Textarea
              clearErrors={clearErrors}
              errors={errors}
              register={register}
              required
              full
              setValue={setValue}
              label={t("cabinet.deliver_address")}
              name="address_id"
              placeholder={t("inputs.address")}
            />
          ))}
        <div className={styles.methods}>
          <div className={styles.methodTitle}>
            {t("labels.payment_method_title")}
          </div>

          <InputRadio
            clearErrors={clearErrors}
            errors={errors}
            register={register}
            setDefaultValue={setValue}
            required
            data={paymentMethods}
            name="payment_method"
            defaultValue="1"
          />
        </div>
        <div className="bottom !w-full flex py-[20px] justify-between items-center flex-wrap max-[600px]:flex-col-reverse max-[600px]:items-center">
          <div className="left">
            <Link
              href="/basket"
              className="flex items-center font-semibold text-[18px] hover:opacity-70"
            >
              <EditIcon />
              <span className="text-[14px] inline-block ml-[8px]">
                {t("labels.edit")}
              </span>
            </Link>
          </div>
          <div className="right flex items-center">
            <div className="terms flex items-center">
              <input
                {...register("terms", { required: true })}
                type="checkbox"
                id="terms"
                className="bg-red"
              />
              <label
                htmlFor="terms"
                className={`text-[14px] font-semibold pl-[5px] select-none cursor-pointer ${
                  errors["terms"] ? "text-red" : ""
                }`}
              >
                {locale == "az" && (
                  <>
                    <Link
                      href="/"
                      target="_blank"
                      className="text-green-hover hover:underline"
                    >
                      {t("labels.terms.az.text_1")}
                    </Link>{" "}
                    {t("labels.terms.az.text_2")}
                  </>
                )}
                {locale == "ru" && (
                  <>
                    {t("labels.terms.ru.text_1")}{" "}
                    <Link
                      href="/"
                      target="_blank"
                      className="text-green-hover hover:underline"
                    >
                      {t("labels.terms.ru.text_2")}
                    </Link>
                  </>
                )}
                {locale == "en" && (
                  <>
                    {t("labels.terms.en.text_1")}{" "}
                    <Link
                      href="/"
                      target="_blank"
                      className="text-green-hover hover:underline"
                    >
                      {t("labels.terms.en.text_2")}
                    </Link>
                  </>
                )}
              </label>
            </div>
            <div className="button ml-[20px]">
              <Button text={t("labels.complete_button")} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
