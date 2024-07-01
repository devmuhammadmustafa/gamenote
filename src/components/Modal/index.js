import styles from "@/styles/components/Modal.module.css";
import CloseIcon from "@/components/Icons/CloseIcon";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  FilterModalVisibility,
  ModalType,
  ModalVisibility,
} from "@/store/atoms";
import IconButton from "@/components/Button/iconButton";

export default function Modal({
  title,
  className,
  subtitle,
  children,
  visibility,
  large,
  filterMode,
}) {
  const [delay, setDelay] = useState(false);
  const [modalType, setModaltype] = useAtom(ModalType);
  const [modalVisibility, setModalVisibility] = useAtom(ModalVisibility);
  const [filterModalVisibility, setFilterModalVisibility] = useAtom(
    FilterModalVisibility
  );

  useEffect(() => {
    setDelay(!delay);
  }, [visibility]);

  const onCloseFunction = () => {
    setModalVisibility(false);
    setTimeout(() => {
      setModaltype("");
    }, 500);
  };

  const onCloseFilterModalFunction = () => {
    setFilterModalVisibility(false);
  };

  return (
    <div
      className={`${styles.modal} ${
        filterMode ? `${styles.filterMode} filter-modal` : ""
      } ${className == "register" ? styles.register : ""}`}
    >
      <div
        onClick={filterMode ? onCloseFilterModalFunction : onCloseFunction}
        className={styles.closeBar}
      ></div>

      {filterModalVisibility && (
        <div className={styles.filterModalCloseButton}>
          <IconButton
            fullBackground="true"
            icon={<CloseIcon />}
            onClick={onCloseFilterModalFunction}
          />
        </div>
      )}

      <div
        className={`${
          styles.modalContainer
        } bg-white dark:bg-panel-dark modal-container ${
          delay ? styles.active : ""
        } ${large ? styles.largeSize : ""}`}
      >
        <div className={`${styles.title} text-black dark:text-white`}>
          {title}
        </div>

        {!filterMode && (
          <button onClick={onCloseFunction} className={styles.closeButton}>
            <CloseIcon />
          </button>
        )}

        <div className={styles.subtitle}>{subtitle}</div>

        {children}
      </div>
    </div>
  );
}
