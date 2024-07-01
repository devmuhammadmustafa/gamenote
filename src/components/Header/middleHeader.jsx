import Container from "@/components/Container";
import Link from "next/link";
import IconButton from "@/components/Button/iconButton";
import DarkModeIcon from "@/components/Icons/DarkModeIcon";
import LightModeIcon from "@/components/Icons/LightModeIcon";
import DarkModeButton from "@/components/DarkModeButton";
import LanguageSelect from "@/components/Select/LanguageSelect";
import styles from "@/styles/components/Header.module.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function MiddleHeader({ data }) {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className={styles.middleHeader}>
      <Container>
        <div className={styles.self}>
          <ul className={styles.list}>
            {data?.map((item) => (
              <li
                key={item.id}
                className={`${styles.item} after-divider dark:text-light`}
              >
                <Link
                  target={item.targetBlank == true ? "_blank" : ""}
                  href={`/${
                    item.slug === "notebooks"
                      ? "notebooks?category=106"
                      : item.slug === "monitors"
                      ? "monitors?category=148"
                      : item.slug === "accesories"
                      ? "accesories?category=115"
                      : item.slug
                  }`}
                  className={`${
                    router.pathname.split("/")[1] == item.slug
                      ? styles.active
                      : ""
                  } font-medium`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.right}>
            <DarkModeButton className={styles.darkModeButton} />
            <LanguageSelect id="header-lang-select" />
          </div>
        </div>
      </Container>
    </div>
  );
}
