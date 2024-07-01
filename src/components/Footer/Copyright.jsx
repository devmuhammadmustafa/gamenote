import styles from "@/styles/components/Footer.module.css";
import Image from "next/image";
import EraSoftIcon from "@/assets/images/era-soft-logo.svg";
import Link from "next/link";
import { useTranslation } from "next-i18next";
export default function Copyright({ siteData }) {
  const { t } = useTranslation("common");
  return (
    <div className={styles.copyright}>
      <div className={styles.left}>
          {siteData?.copyright}
      </div>
      <div className={styles.right}>
        <span>{t("general.developed")}:</span>
        <Link target='_blank' href="https://era.az/" className="dark:grayscale">
          <Image src={EraSoftIcon} alt="Test" />
        </Link>
      </div>
    </div>
  );
}
