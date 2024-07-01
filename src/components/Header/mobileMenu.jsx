import styles from "@/styles/components/Header.module.css";
import PhoneIcon from "../Icons/PhoneIcon";
import Link from "next/link";
import DarkModeButton from "../DarkModeButton";
import LanguageSelect from "../Select/LanguageSelect";
import NotebookIcon from "../Icons/NotebookIcon";
import AccessoryIcon from "../Icons/AccessoryIcon";
import AboutIcon from "../Icons/AboutIcon";
import NvidiaIcon from "../Icons/NvidiaIcon";
import BrandIcon from "../Icons/BrandIcon";
import DeliveryIcon from "../Icons/DeliveryIcon";
import WarrantyIcon from "../Icons/WarrantyIcon";
import PrivacyIcon from "../Icons/PrivacyIcon";
import RefundIcon from "../Icons/RefundIcon";
import NewsIcon from "../Icons/NewsIcon";
import { useAtom } from "jotai";
import { MenuOpen } from "@/store/atoms";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MobileMenu({ data }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useAtom(MenuOpen);

  const handleToggleMenu = () => {
    setMenuOpen(false);
  };

  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [router]);

  return (
    <div
      className={`${styles.mobileMenu} mobile-menu bg-white dark:bg-panel-dark`}
    >
      <div className={styles.top}>
        <div className={styles.title}>Menyu</div>

        <div className={styles.list}>
          {data?.map((item) => (
            <Link
              onClick={handleToggleMenu}
              className={`${styles.item} text-black dark:text-light`}
              key={item.id}
              href={`/${
                item.slug === "notebooks"
                  ? "notebooks?category=106"
                  : item.slug === "monitors"
                  ? "monitors?category=148"
                  : item.slug === "accesories"
                  ? "accesories?category=115"
                  : item.slug
              }`}
            >
              {/*{item.icon}*/}
              <span className={styles.text}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <LanguageSelect id="header-lang-select" />
        <DarkModeButton className={styles.darkModeButton} />
      </div>
    </div>
  );
}
