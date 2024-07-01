import styles from "@/styles/components/ProductInside.module.css";
import Button from "@/components/Button";
import { useTranslation } from "next-i18next";

export default function TabbarHeader({ active, func, name }) {
  const { t } = useTranslation("common");
  const data = [
    {
      id: 2,
      label: t("general.general_technical"),
    },
    {
      id: 1,
      label: `${t("general.general_view")}`,
    },
  ];
  return (
    <div className={styles.tabbarHeader}>
      {data.map((item) => (
        <button
          onClick={() => func(item.id)}
          key={item.id}
          className={`${styles.button} dark:hover:!text-white ${
            item.id === active ? styles.active : ""
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
