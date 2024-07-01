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
import { getCookie } from "cookies-next";
import ErrorBlock from "@/components/Cabinet/ErrorBlock";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { PersonalInfoSuccess } from "@/store/atoms";
import {useTranslation} from "next-i18next";

export default function CabinetPersonalInfo({ data }) {
  const { t } = useTranslation('common')
  const [personalInfoData, setPersonalInfoData] = useState([]);
  const [message, setMessage] = useState("");
  const [storeDataSuccess, setStoreDataSuccess] = useAtom(PersonalInfoSuccess);
  const [blockType, setBlockType] = useState("");
  const token = getCookie("AccessToken");
  const router = useRouter();
  let locale = router.locale;

  useEffect(() => {
    setPersonalInfoData(data);
  }, [data]);

  const values = {
    apiKey: "4b4277bd1523915d0655ecc44992f2db",
    AccessToken: token,
    for_update: "data",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    clearErrors,
      setValue,
    formState: { errors },
  } = useForm({ values });
  const onSubmit = async (data) => {
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
        setMessage(t('cabinet.success_save'));
        setBlockType("success");
        setStoreData(jsonData?.responseStatus?.data);
        setStoreDataSuccess(storeDataSuccess + 1);

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
        title={t('cabinet.title')}
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
        className={styles.personalInfoForm}
      >
        <div className={styles.col}>
          <InputText
            clearErrors={clearErrors}
            errors={errors}
            register={register}
            label={t('labels.email')}
            type="email"
            name="email"
            placeholder={t('inputs.email')}
            disabled
            value={personalInfoData?.email}
            setValue={setValue}
          />
        </div>
        <div className={styles.col}>
          <InputText
            clearErrors={clearErrors}
            errors={errors}
            register={register}
            required
            label={t('labels.phone')}
            type="text"
            name="phone"
            placeholder={t('inputs.phone')}
            value={personalInfoData?.phone}
            setValue={setValue}
          />
        </div>
        <div className={styles.col}>
          <InputText
            clearErrors={clearErrors}
            errors={errors}
            register={register}
            required
            label={t('labels.nameSurname')}
            type="text"
            name="fullname"
            placeholder={t('inputs.nameSurname')}
            value={personalInfoData?.fullname}
            setValue={setValue}
          />
        </div>
        <div className={styles.colFull}>
          <Button text={t('cabinet.save')} />
        </div>
      </form>
    </>
  );
}
