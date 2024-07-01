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
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import ErrorBlock from "@/components/Cabinet/ErrorBlock";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export default function ForgetPasswordModal() {
  const { t } = useTranslation("common");
  const [modalVisibility, setModalVisibility] = useAtom(ModalVisibility);
  const handleModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  const [message, setMessage] = useState("");
  const [mailSuccess, setMailSuccess] = useState(false);
  const [blockType, setBlockType] = useState("");
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
    control,
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
        `${process.env.NEXT_PUBLIC_API_URL}${locale}/users/forgot_password.json`,
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
        setMailSuccess(true);
        setMessage(jsonData?.responseStatus?.Message);
        setBlockType("success");

        setTimeout(() => {
          setBlockType("");
        }, 3000);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      return null;
    }
  };

  const onSubmitReset = async (data, e) => {
    try {
      setLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${locale}/users/reset_password.json`,
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
        setMailSuccess(true);
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

  return (
    <>
      <Modal
        visibility={modalVisibility}
        onClickFunction={handleModalVisibility}
        title={t("modals.forgot_title")}
      >
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-[22] -mb-[15px] mt-[20px]"
            >
              <ErrorBlock blockType={blockType} data={message} modalType />
            </motion.div>
          )}
        </AnimatePresence>
        <form
          onSubmit={
            mailSuccess ? handleSubmit(onSubmitReset) : handleSubmit(onSubmit)
          }
          className={styles.form}
        >
          {mailSuccess ? (
            <>
              <InputText
                clearErrors={clearErrors}
                errors={errors}
                register={register}
                required
                label={t("inputs.code")}
                type="password"
                name="code"
                placeholder={t("labels.code")}
                clear={blockType == "success"}
              />
              <InputText
                clearErrors={clearErrors}
                errors={errors}
                register={register}
                required
                label={t("labels.password")}
                type="password"
                name="password"
                placeholder={t("inputs.password")}
                clear={blockType == "success"}
              />
              <InputText
                clearErrors={clearErrors}
                errors={errors}
                register={register}
                required
                label={t("labels.password_confirm")}
                type="password"
                name="password_again"
                placeholder={t("inputs.password_confirm")}
                clear={blockType == "success"}
              />
            </>
          ) : (
            <InputText
              clearErrors={clearErrors}
              errors={errors}
              register={register}
              required
              label="Email"
              type="email"
              name="email"
              placeholder={t("inputs.email")}
              clear={blockType == "success"}
            />
          )}

          <Button
            type="submit"
            text={
              mailSuccess ? t("modals.forgot_button") : t("modals.forgot_mail")
            }
            full="true"
          />
        </form>
      </Modal>
    </>
  );
}
