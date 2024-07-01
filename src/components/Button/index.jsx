import styles from "@/styles/components/Button.module.css";

export default function Button({
  type,
  text,
  icon,
  iconRight,
  backgroundBlack,
  full,
  onClickFunction,
  disabled,
  compact,
  backgroundGray,
  mobileHidden,
  discount,
}) {
  return (
    <>
      <button
        type={type || "button"}
        disabled={disabled}
        onClick={onClickFunction}
        className={`${styles.buttonDefault} ${
          backgroundBlack
            ? styles.backgroundBlack +
              " dark:bg-green dark:hover:bg-green-hover dark:text-black "
            : ""
        } ${icon ? styles.buttonWidthIcon : ""} ${
          iconRight ? styles.buttonIconRight : ""
        } ${full ? "w-full justify-between" : ""} ${
          disabled ? "!bg-[#d7d7d7] pointer-events-none" : ""
        } ${compact ? "!px-[15px]" : ""} ${
          backgroundGray ? "!bg-[#f5f5f5] hover:!bg-green" : ""
        } ${
          mobileHidden
            ? "max-[500px]:w-[38px] max-[500px]:!p-0 max-[500px]:flex max-[500px]:justify-center"
            : ""
        } ${discount ? "!h-[40px]" : "h-[50px]"}`}
      >
        <span
          className={`${styles.icon} ${compact ? "!ml-[4px]" : ""} ${
            mobileHidden ? "max-[500px]:!ml-0" : ""
          } !text-black`}
        >
          {icon}
        </span>
        <span
          className={`${
            iconRight ? styles.textLeft : icon ? styles.textRight : ""
          } ${mobileHidden ? "max-[500px]:hidden" : ""}`}
        >
          {text}
        </span>
      </button>
    </>
  );
}
