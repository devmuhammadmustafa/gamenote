import styles from "@/styles/components/Form/Inputs.module.css";
import { useEffect, useState } from "react";
import {useTranslation} from "next-i18next";
export default function InputText({
  label,
  type,
  name,
  placeholder,
  register,
  required,
  errors,
  clearErrors,
  value,
  disabled,
  datepicker,
  icon,
  clear,
    setValue,
}) {
  const [inputValue, setInputValue] = useState(value || "");
  const { t } = useTranslation('common')

  const patterns = {
    email: {
      value: /\S+@\S+\.\S+/,
      message: t('static_pages.required_email'),
    },
  };

  useEffect(() => {
    if (clear) {
      setInputValue("");
    }
  }, [clear]);

  useEffect(() => {
    value && setInputValue(value);
    value && setValue(name, value)
  }, [value]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    clearErrors(e.target.name);
    setValue && setValue(name, e.target.value)
  };

  return (
    <div className={styles.inputText}>
      <label
        className={`${styles.label} text-black dark:text-white`}
        htmlFor={`#${name}`}
      >
        {label}
      </label>
      <input
        {...register(name, {
          required: required ? t('static_pages.required_field') : "",
          pattern: type == "email" ? patterns[type] : "",
        })}
        className={`${styles.input} ${errors[name] ? styles.error : ""}`}
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete='off'
      />
      {icon && <div className={styles.icon}>{icon}</div>}
      {errors[name] && (
        <span className={styles.errorText}>{errors[name].message}</span>
      )}
    </div>
  );
}
