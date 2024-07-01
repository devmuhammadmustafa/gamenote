import styles from "@/styles/components/Modal.module.css";
import InputText from "@/components/Form/InputText";
import InputCheckbox from "@/components/Form/InputCheckbox";
import Link from "next/link";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useAtom } from "jotai";
import { ModalType, ModalVisibility, PersonalInfoSuccess } from "@/store/atoms";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import ErrorBlock from "@/components/Cabinet/ErrorBlock";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export default function LoginModal() {
  const { t } = useTranslation("common");
  const [message, setMessage] = useState("");
  const [blockType, setBlockType] = useState("");
  const [modalVisibility, setModalVisibility] = useAtom(ModalVisibility);
  const [modalType, setModalType] = useAtom(ModalType);
  const [storeDataSuccess, setStoreDataSuccess] = useAtom(PersonalInfoSuccess);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const locale = router.locale;

  const token = getCookie("token");
  const values = {
    apiKey: "4b4277bd1523915d0655ecc44992f2db",
    GuestToken: token,
  };
  const {
    register,
    handleSubmit,
    clearErrors,
    watch,
    control,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    values,
  });

  const test = watch();

  const onSubmit = async (data, e) => {
    try {
      setLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${locale}/users/login.json`,
        requestOptions
      );
      const jsonData = await response.json();
      if (jsonData?.responseStatus?.ResponseCode == 400) {
        setLoading(false);
        setMessage("");
        setTimeout(() => {
          setMessage(jsonData?.responseStatus?.Message);
        }, 200);

        setBlockType("error");
      } else if (jsonData?.responseStatus?.ResponseCode == 200) {
        setBlockType("");
        setLoading(false);
        setCookie("AccessToken", jsonData?.responseStatus?.AccessToken);
        router.push("/cabinet/personal-info");
        setModalVisibility(false);
        setTimeout(() => {
          setModalType("");
        }, 500);
        setStoreDataSuccess(true);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      return null;
    }
  };

  const handleModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  };
  const handleOpenRegisterModal = () => {
    setModalType("register");
  };

  const handleOpenForgetModal = () => {
    setModalType("forgetPassword");
  };

  return (
    <>
      <Modal
        visibility={modalVisibility}
        onClickFunction={handleModalVisibility}
        title={t("modals.login")}
        subtitle={t("modals.login_text")}
      >
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-[22] mt-[25px] -mb-[20px]"
            >
              <ErrorBlock blockType={blockType} data={message} modalType />
            </motion.div>
          )}
        </AnimatePresence>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          autoComplete="off"
        >
          <InputText
            clearErrors={clearErrors}
            errors={errors}
            register={register}
            required
            label={t("labels.username")}
            type="text"
            name="email"
            setValue={setValue}
            placeholder={t("inputs.username")}
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

          <div className={styles.forgotPart}>
            <InputCheckbox
              label={t("labels.remind")}
              type="checkbox"
              name="testcheckbox"
            />
            <div
              onClick={handleOpenForgetModal}
              className={styles.link}
              href="/"
            >
              {t("labels.forgot_password")}
            </div>
          </div>

          <Button type="submit" text={t("modals.login")} full="true" />

          <div className={`${styles.hasAccount} text-black dark:text-white`}>
            {t("modals.login_bottom_text_1")}{" "}
            <span
              onClick={handleOpenRegisterModal}
              className={styles.link}
              href="/"
            >
              {t("modals.login_bottom_text_2")}
            </span>
          </div>
        </form>
      </Modal>
    </>
  );
}
