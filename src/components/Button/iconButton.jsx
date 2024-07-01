import styles from "@/styles/components/Button.module.css";

export default function IconButton({
  icon,
  onClick,
  fullBackground,
  darkBackground,
  background,
  disable,
}) {
  return (
    <>
      <button
        disabled={disable}
        onClick={onClick}
        className={`dark:border-green ${styles.iconButton} ${
          disable ? "cursor-not-allowed !bg-transparent !border-gray" : ""
        } ${
          fullBackground
            ? "bg-green !border-green hover:!bg-dark-green text-[22px] !w-[48px] !h-[48px] fullBackground"
            : ""
        } ${
            background
                ? "bg-green !border-green hover:!bg-dark-green"
                : ""
        } ${
          darkBackground
            ? "!border-black hover:!border-green bg-black !w-[48px] !h-[48px]"
            : ""
        } !text-red`}
      >
        {icon}
      </button>
    </>
  );
}
