import React, { useState } from "react";
import Select, { components } from "react-select";
import DownArrowIcon from "@/components/Icons/DownArrowIcon";
import { useTranslation } from "next-i18next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterSelect({ id }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const datas = [
    { value: "0", label: t("sorting_created_date") },
    { value: "1", label: t("sorting_price_asc") },
    { value: "2", label: t("sorting_price_desc") },
  ];
  const [selectedValue, setSelectedValue] = useState(datas[0]);

  const handleChange = (value) => {
    setSelectedValue(value);

    const current = new URLSearchParams(Array.from(searchParams.entries()));

    const newValue = value.value;

    if (!newValue) {
      current.delete("sort_by");
    } else {
      current.set("sort_by", value.value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  const Option = (props) => (
    <components.Option {...props} className="country-option !flex">
      <span className="block ml-[10px] font-medium flex-1">
        {props.data.label}
      </span>
    </components.Option>
  );

  const DropdownIndicator = ({ children, ...props }) => (
    <components.DropdownIndicator {...props}>
      <DownArrowIcon />
    </components.DropdownIndicator>
  );

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <span className="inline-block ml-[10px] font-medium dark:text-light">
        <span className="text-[14px] text-[#a5a5a5]">
          {t("sorting_label")}:{" "}
        </span>
        {children}
      </span>
    </components.SingleValue>
  );

  return (
    <div>
      <Select
        value={selectedValue}
        options={datas}
        id={id}
        instanceId={id}
        onChange={handleChange}
        isSearchable={false}
        className="lang-select filter-select"
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
