import Select from "react-select";
import { useState } from "react";
import { useController } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "@/styles/components/Form/Inputs.module.css";
import {useTranslation} from "next-i18next";

export default function FormSelect({
  options,
  label,
  type,
  name,
  placeholder,
  register,
  control,
  required,
  errors,
  clearErrors,
  defaultValue,
}) {
  const router = useRouter();
  const { t } = useTranslation('common')
  const { locale } = router;
  const [id, setId] = useState(defaultValue || null);

  const formattedOptions = options?.map((item) => ({
    value: item.id,
    label: item.name[locale],
  }));
  const {
    field: { onChange, value },
    fieldState: { invalid },
  } = useController({
    name,
    control,
    rules: { required: required ? t('static_pages.required_field') : "" },
    defaultValue: id,
  });

  const handleChange = (selectedOption) => {
    onChange(selectedOption.value);
    setId(selectedOption.value);
  };

  return (
    <div className={styles.formSelect}>
      <label
        className={`${styles.label} text-black dark:text-white`}
        htmlFor={`#${name}`}
      >
        {label}
      </label>
      <Select
        value={id ? formattedOptions.find((e) => e.value == id) : ""}
        id={name}
        instanceId={name}
        placeholder={placeholder}
        options={formattedOptions}
        onChange={handleChange}
        isInvalid={invalid}
        className={"city-select " + (errors[name] ? "error" : "")}
        classNamePrefix="select"
        styles={{
          singleValue: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
          }),
        }}
      />
      {errors[name] && (
        <span className={styles.errorText}>{errors[name].message}</span>
      )}
    </div>
  );
}
