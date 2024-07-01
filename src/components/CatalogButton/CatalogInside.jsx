import styles from "@/styles/components/Catalog.module.css";
import Link from "next/link";
import Brand_1 from "@/assets/images/menu/brand_1.svg";
import Brand_2 from "@/assets/images/menu/brand_2.svg";
import Brand_3 from "@/assets/images/menu/brand_3.svg";
import Brand_4 from "@/assets/images/menu/brand_4.svg";
import Brand_5 from "@/assets/images/menu/brand_5.svg";
import Brand_6 from "@/assets/images/menu/brand_6.svg";
import Brand_7 from "@/assets/images/menu/brand_7.svg";
import Cat_1 from "@/assets/images/categories/cat-1.svg";
import Cat_2 from "@/assets/images/categories/cat-2.svg";
import Cat_3 from "@/assets/images/categories/cat-3.svg";
import Cat_4 from "@/assets/images/categories/cat-4.svg";
import Cat_5 from "@/assets/images/categories/cat-5.svg";
import Cat_6 from "@/assets/images/categories/cat-6.svg";
import Cat_7 from "@/assets/images/categories/cat-7.svg";
import Cat_8 from "@/assets/images/categories/cat-8.svg";
import Cat_9 from "@/assets/images/categories/cat-9.svg";
import Cat_10 from "@/assets/images/categories/cat-10.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";
import { CatalogOpen } from "@/store/atoms";

export default function CatalogInside({ data }) {
  const { t } = useTranslation("common");
  const [open, setOpen] = useAtom(CatalogOpen);

  const CloseMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={`bg-white dark:bg-panel-dark ${styles.catalogInside}`}>
        <div className={styles.types}>
          {data?.map((item) =>
            (item.child && item.slug == "notebooks") ||
            item.slug == "accesories" ||
            item.slug == "monitors" ? (
              <div
                className={`${styles.type} ${
                  item.class == "brands" ? styles.brands : styles.categories
                }`}
                key={item.id}
              >
                {item.slug == "notebooks" ||
                item.slug == "accesories" ||
                item.slug == "monitors" ? (
                  <h3
                    className={`text-[#A5A5A5] dark:text-[#a5a5a5] ${styles.title}`}
                  >
                    {item.title}
                  </h3>
                ) : (
                  <></>
                )}

                <div className={styles.links}>
                  {item.slug == "notebooks" ? (
                    item?.child?.map((item) => (
                      <Link
                        className={`dark:text-light ${styles.link}`}
                        onClick={CloseMenu}
                        key={item.id}
                        href={`/notebooks?category=${item.id}`}
                      >
                        {/*<div className={`${styles.image} dark:invert`}>*/}
                        {/*    <img src={item.icon} alt='test'/>*/}
                        {/*</div>*/}
                        <span className={styles.text}>{item.name}</span>
                      </Link>
                    ))
                  ) : item.slug == "accesories" ? (
                    item?.child?.map((item) => (
                      <Link
                        className={`dark:text-light ${styles.link}`}
                        onClick={CloseMenu}
                        key={item.id}
                        href={`/accesories?category=${item.id}`}
                      >
                        {/*<div className={`${styles.image} dark:invert`}>*/}
                        {/*    <img src={item.icon} alt='test'/>*/}
                        {/*</div>*/}
                        <span className={styles.text}>{item.name}</span>
                      </Link>
                    ))
                  ) : item.slug == "monitors" ? (
                    item?.child?.map((item) => (
                      <Link
                        className={`dark:text-light ${styles.link}`}
                        onClick={CloseMenu}
                        key={item.id}
                        href={`/monitors?category=${item.id}`}
                      >
                        {/*<div className={`${styles.image} dark:invert`}>*/}
                        {/*    <img src={item.icon} alt='test'/>*/}
                        {/*</div>*/}
                        <span className={styles.text}>{item.name}</span>
                      </Link>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </>
  );
}
