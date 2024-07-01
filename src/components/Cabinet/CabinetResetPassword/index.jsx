import CabinetTitlePart from "../CabinetTitlePart";
import { useForm } from "react-hook-form";
import InputText from "@/components/Form/InputText";
import styles from "@/styles/components/CabinetRightPart.module.css";
import CalendarIcon from "@/components/Icons/CalendarIcon";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { getSliderItems } from "@/pages/api/getSliderItems";
import { useEffect, useState } from "react";
import { getUserDetail } from "@/pages/api/cabinet/getUserDetail";
import { updatePassword } from "@/pages/api/cabinet/updatePassword";
import { getCookie } from "cookies-next";
import axios from "axios";
import ErrorBlock from "@/components/Cabinet/ErrorBlock";
import { AnimatePresence, motion } from "framer-motion";
import {useTranslation} from "next-i18next";

export default function CabinetResetPassword() {
  const { t } = useTranslation('common')
  const [message, setMessage] = useState("");
  const [blockType, setBlockType] = useState("");
  const token = getCookie("AccessToken");
  const router = useRouter();
  let locale = router.locale;

  const values = {
    apiKey: "4b4277bd1523915d0655ecc44992f2db",
    AccessToken: token,
    for_update: "password",
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({ values });

  const test = watch();
  const onSubmit = async (data, e) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${locale}/users/update_profile.json`,
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
        setMessage("Şifrə uğurla dəyişdirildi");
        setBlockType("success");
        reset();

        setTimeout(() => {
          setBlockType("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      return null;
    }
  };

  return (
    <>
      <CabinetTitlePart
        title={t('cabinet.reset_password')}
      />
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.personalInfoForm} flex-col !items-start`}
      >
        <div className={styles.col}>
          <InputText
            clearErrors={clearErrors}
            errors={errors}
            register={register}
            required
            label={t('cabinet.current_password_label')}
            type="password"
            name="old_password"
            placeholder={t('cabinet.current_password_placeholder')}
            clear={blockType == "success"}
          />
        </div>
        <div className={styles.col}>
          <InputText
            clearErrors={clearErrors}
            errors={errors}
            register={register}
            required
            label={t('labels.password')}
            type="password"
            name="password"
            placeholder={t('inputs.password')}
            clear={blockType == "success"}
          />
        </div>
        <div className={styles.col}>
          <InputText
            clearErrors={clearErrors}
            errors={errors}
            register={register}
            required
            label={t('labels.password_confirm')}
            type="password"
            name="password_confirmed"
            placeholder={t('inputs.password_confirm')}
            clear={blockType == "success"}
          />
        </div>
        <div className={`${styles.col}`}>
          <Button text={t('cabinet.save')} />
        </div>
      </form>
    </>
  );
}
