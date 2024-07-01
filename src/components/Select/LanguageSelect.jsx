import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import AzFlag from "../../assets/images/az.svg";
import EnFlag from "../../assets/images/en.svg";
import RUFlag from "../../assets/images/ru.svg";
import Image from "next/image";
import DropdownIcon from "@/components/Icons/DropdownIcon";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";

const countries = [
  { value: "az", label: "Azərbaycan dili", icon: AzFlag },
  { value: "ru", label: "Русский", icon: RUFlag },
  { value: "en", label: "English", icon: EnFlag },
];

const Option = (props) => (
  <components.Option {...props} className="country-option !flex">
    <div className="border border-gray rounded-full overflow-hidden">
      <Image
        src={props.data.icon}
        width="20"
        height="20"
        alt="logo"
        className="country-logo"
      />
    </div>
    <span className="block ml-[10px] font-medium flex-1">
      {props.data.label}
    </span>
  </components.Option>
);

export default function LanguageSelect({ id }) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const locale = router.locale;
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (value) => {
    setSelectedCountry(value);
    setCookie("lang", value.value);
    i18n.changeLanguage(selectedCountry.value);
    router.push(router.asPath, router.asPath, { locale: value.value });
  };

  useEffect(() => {
    const lang = getCookie("lang");
    if (lang) {
      setSelectedCountry(countries.find((item) => item.value == lang));
    } else {
      setSelectedCountry(countries.find((item) => item.value == i18n.language));
    }
  }, [locale, selectedCountry]);

  const DropdownIndicator = ({ children, ...props }) => (
    <components.DropdownIndicator {...props}>
      <DropdownIcon />
    </components.DropdownIndicator>
  );

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <div className="border border-gray rounded-full overflow-hidden">
        <Image
          src={selectedCountry.icon}
          width="20"
          height="20"
          alt="s-logo"
          className="selected-logo"
        />
      </div>
      <span className="inline-block ml-[10px] font-medium dark:text-light">
        {children}
      </span>
    </components.SingleValue>
  );

  return (
    <div>
      <Select
        value={selectedCountry}
        options={countries}
        id={id}
        isSearchable={false}
        instanceId={id}
        onChange={handleChange}
        className="lang-select"
        classNamePrefix="select"
        styles={{
          singleValue: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
          }),
        }}
        components={{
          Option,
          SingleValue,
          DropdownIndicator,
        }}
      />
    </div>
  );
}
