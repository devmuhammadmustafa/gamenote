import styles from "@/styles/components/CabinetRightPart.module.css";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import TrustIcon from "@/components/Icons/TrustIcon";
import InputText from "@/components/Form/InputText";
import FormSelect from "@/components/Form/FormSelect";
import Textarea from "@/components/Form/Textarea";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCityList } from "@/pages/api/getCityList";
import { getCookie } from "cookies-next";
import ErrorBlock from "@/components/Cabinet/ErrorBlock";
import { getCountryList } from "@/pages/api/getCountryList";
import { useAtom } from "jotai";
import {AddAddressSuccess, AddressReload} from "@/store/atoms";
import {useTranslation} from "next-i18next";
export default function NewAddressForm({ handleClick }) {
  const { t } = useTranslation('common')
  const [cityData, setCityData] = useState([]);
  const [addressReload, setAddressReload] = useAtom(AddressReload)
  const [addressSuccess, setAddressSuccess] = useAtom(AddAddressSuccess);
  const [countryData, setCountryData] = useState([]);
  const token = getCookie("AccessToken");
  const [message, setMessage] = useState("");
  const [blockType, setBlockType] = useState("");

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
    const handleGetCountryList = async () => {
      const response = await getCountryList(locale);
      setCountryData(response?.responseStatus?.data);
    };
    handleGetCountryList();
  }, []);

  const addAddress = true;
  const values = {
    apiKey: "4b4277bd1523915d0655ecc44992f2db",
    AccessToken: token
  };
  const {
    register,
    handleSubmit,
    clearErrors,
    control,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    values,
  });

  const onSubmit = async (data, e) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${locale}/users/add_address.json`,
        requestOptions
      );
      const jsonData = await response.json();
      if (jsonData?.responseStatus?.ResponseCode == 400) {
        setMessage("");
        setTimeout(() => {
          setMessage(jsonData?.responseStatus?.Message);
        }, 200);

        setBlockType("error");
      } else if (jsonData?.responseStatus?.ResponseCode == 200) {
        setMessage("Ünvan uğurla əlavə edildi");
        setBlockType("success");
        setAddressReload(addressReload + 1)

        setTimeout(() => {
          setBlockType("");
          handleClick();
        }, 3000);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      return null;
    }
  };

  return (
    <>
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-[22]"
          >
            <ErrorBlock blockType={blockType} data={message} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {addAddress && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.newAddressForm}
          >
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <FormSelect
                clearErrors={clearErrors}
                errors={errors}
                register={register}
                control={control}
                required
                label={t('cabinet.country')}
                name="country_id"
                options={countryData}
                placeholder={t('cabinet.select')}
              />
              <FormSelect
                clearErrors={clearErrors}
                errors={errors}
                register={register}
                control={control}
                required
                label={t('cabinet.city')}
                name="city_id"
                options={cityData}
                placeholder={t('cabinet.select')}
              />
              <InputText
                clearErrors={clearErrors}
                errors={errors}
                register={register}
                required
                label={t('cabinet.full_address')}
                type="text"
                name="address"
              />
              <InputText
                clearErrors={clearErrors}
                errors={errors}
                register={register}
                required
                label={t('cabinet.phone')}
                type="text"
                name="phone"
              />
              <div className="bottom !w-full flex justify-end flex-wrap mt-[10px]">
                <div className="button">
                  <Button text={t('cabinet.add_address')} full="true" />
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
