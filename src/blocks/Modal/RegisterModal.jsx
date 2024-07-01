import styles from "@/styles/components/Modal.module.css";
import InputText from "@/components/Form/InputText";
import InputCheckbox from "@/components/Form/InputCheckbox";
import Link from "next/link";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useAtom } from "jotai";
import { ModalType, ModalVisibility } from "@/store/atoms";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getMenuList } from "@/pages/api/getMenuList";
import { getCityList } from "@/pages/api/getCityList";
import Select from "react-select";
import FormSelect from "@/components/Form/FormSelect";
import Textarea from "@/components/Form/Textarea";
import { getCookie } from "cookies-next";
import TrustIcon from "@/components/Icons/TrustIcon";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "@/components/Header/mobileMenu";
import ErrorBlock from "@/components/Cabinet/ErrorBlock";
import { useTranslation } from "next-i18next";

export default function RegisterModal() {
  const { t } = useTranslation("common");
  const [modalVisibility, setModalVisibility] = useAtom(ModalVisibility);
  const [modalType, setModalType] = useAtom(ModalType);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cityData, setCityData] = useState([]);
  const [message, setMessage] = useState("");
  const [mailSuccess, setMailSuccess] = useState(false);
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
  const handleModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  };
  const values = {
    apiKey: "4b4277bd1523915d0655ecc44992f2db",
  };
  const {
    register,
    handleSubmit,
    clearErrors,
    control,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    values,
  });

  const onSubmit = async (data, e) => {
    try {
      setLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${locale}/users/registration.json`,
        requestOptions
      );
      const jsonData = await response.json();
      if (jsonData?.responseStatus?.ResponseCode == 400) {
        setSuccess(false);
        setLoading(false);
        setMessage("");
        setTimeout(() => {
          setMessage(jsonData?.responseStatus?.Message);
        }, 200);

        setBlockType("error");
      } else if (jsonData?.responseStatus?.ResponseCode == 200) {
        setLoading(false);
        setSuccess(true);
        setMessage(jsonData?.responseStatus?.Message);
        setBlockType("success");

        setTimeout(() => {
          setBlockType("");
          setModalType("login");
        }, 1000);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      return null;
    }
  };

  const handleOpenLoginModal = () => {
    setModalType("login");
  };

  return (
    <>
      <Modal
        className="register"
        large="true"
        visibility={modalVisibility}
        onClickFunction={handleModalVisibility}
        title={success ? "" : t("modals.register_title")}
      >
        <AnimatePresence>
          {success ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-[22]"
            >
              <div className="modal-success flex items-center flex-col">
                <TrustIcon />
                <div className="title text-[24px] font-semibold mb-3">
                  {t("modals.register_success_title")}
                </div>
                <div>{t("modals.register_success_desc")}</div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-[22]"
            >
              <AnimatePresence>
                {message && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-[22]"
                  >
                    <ErrorBlock
                      blockType={blockType}
                      data={message}
                      modalType
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`${styles.form} ${styles.twoColumn}`}
              >
                <InputText
                  clearErrors={clearErrors}
                  errors={errors}
                  register={register}
                  required
                  label={t("labels.nameSurname")}
                  type="text"
                  name="full_name"
                  setValue={setValue}
                  placeholder={t("inputs.nameSurname")}
                />
                <InputText
                  clearErrors={clearErrors}
                  errors={errors}
                  register={register}
                  required
                  label="Email"
                  type="email"
                  name="email"
                  setValue={setValue}
                  placeholder={t("inputs.email")}
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
                <InputText
                  clearErrors={clearErrors}
                  errors={errors}
                  register={register}
                  required
                  label={t("labels.phone")}
                  type="text"
                  name="phone"
                  setValue={setValue}
                  placeholder={t("inputs.phone")}
                />
                <InputText
                  clearErrors={clearErrors}
                  errors={errors}
                  register={register}
                  required
                  label={t("labels.password")}
                  type="password"
                  name="password"
                  setValue={setValue}
                  placeholder={t("inputs.password")}
                />
                <InputText
                  clearErrors={clearErrors}
                  errors={errors}
                  register={register}
                  required
                  label={t("labels.password_confirm")}
                  type="password"
                  name="password_again"
                  setValue={setValue}
                  placeholder={t("inputs.password_confirm")}
                />
                <Textarea
                  clearErrors={clearErrors}
                  errors={errors}
                  register={register}
                  required
                  full
                  label={t("labels.address")}
                  name="address"
                  setValue={setValue}
                  placeholder={t("inputs.address")}
                />
                <div className="bottom !w-full flex justify-between flex-wrap max-[600px]:flex-col-reverse max-[600px]:items-center">
                  <div
                    className={`${styles.hasAccount} text-black dark:text-white !text-left !mt-0 h-[48px] flex items-center !justify-start w-[calc(50%-15px)] max-[600px]:w-full max-[600px]:!justify-center`}
                  >
                    {t("modals.register_bottom_text_1")}{" "}
                    <span
                      onClick={handleOpenLoginModal}
                      className={`${styles.link} block ml-2`}
                    >
                      {t("modals.register_bottom_text_2")}
                    </span>
                  </div>
                  <div className="button w-[calc(50%-15px)] max-[600px]:w-max">
                    <Button
                      type="submit"
                      text={t("modals.register_button")}
                      full="true"
                    />
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}
