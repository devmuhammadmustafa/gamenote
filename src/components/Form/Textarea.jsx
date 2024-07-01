import styles from "@/styles/components/Form/Inputs.module.css";
import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
export default function Textarea({
  label,
  type,
  name,
  placeholder,
  register,
  required,
  errors,
  clearErrors,
    clear,
    setValue,
  full,
    value
}) {
  const patterns = {
    email: {
      value: /\S+@\S+\.\S+/,
      message: "Daxil etdiyiniz email formatı düzgün deyil",
    },
  };
    const { t } = useTranslation('common')
    const [inputValue, setInputValue] = useState(value || "");

    useEffect(() => {
        if (clear) {
            setInputValue("");
        }
    }, [clear]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        clearErrors(e.target.name);
    };

  return (
    <div className={`${styles.textareaPart} ${full ? "!w-full" : ""}`}>
      <label
        className={`${styles.label} text-black dark:text-white`}
        htmlFor={`#${name}`}
      >
        {label}
      </label>
      <textarea
        {...register(name, { required: required ? t('static_pages.required_field') : "" })}
        className={`${styles.textarea} ${errors[name] ? styles.error : ""}`}
        name={name}
        id={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      {errors[name] && (
        <span className={styles.errorText}>{errors[name].message}</span>
      )}
    </div>
  );
}
