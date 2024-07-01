import styles from "@/styles/components/ProductInside.module.css";
import { Parser } from "html-to-react";
import { filterProductData } from "@/components/Filtering";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  MenuList,
  MenuOpen,
  ModalVisibility,
  ProductSingleItemTrigger,
} from "@/store/atoms";
import { ProductSingle } from "@/store/atoms";
import { useRouter } from "next/navigation";

export default function Specifications({ data, filteredData }) {
  const router = useRouter();
  const [menuList, setMenuList] = useAtom(MenuList);
  const [singleList, setSingleList] = useAtom(ProductSingle);
  const [productSingleItemTrigger, setProductSingleTigger] = useAtom(
    ProductSingleItemTrigger
  );
  const [mainSlug, setMainSlug] = useState('')

  const [categoryFilter, setCategoryFilter] = useState({
    filter_id: "category",
    values: "",
  });
  const htmlParser = new Parser();

  const productByFilter = menuList
      .map((menu) => {
        if (menu?.child) {
          if (menu?.child.find((child) => child.id === singleList.menu_id)) {
            return menu;
          }
        }
      })

    const productById = menuList.find((menu) => {
        return menu.slug === productByFilter[0]?.slug
    })

    useEffect(() => {
      setMainSlug(`${productByFilter[0]?.slug}?category=${productById?.id}`)
    }, [productById, productByFilter])

  return (
    <div className={styles.specifications}>
      {filteredData?.map((item, i) => (
        <div key={i} className={styles.specificationsPart}>
          <div className={`${styles.title} text-black dark:text-light`}>
            {item.name}
          </div>
          <ul className={styles.list}>
            {item?.list?.map((item, k) => (
              <li key={k} className={styles.item}>
                <span className={`${styles.label} text-black dark:text-light`}>
                  <span className="product-inside-count">{item.f_name}</span>
                </span>
                <span className={`${styles.value} text-black dark:text-light`}>
                  {item.clickable == "1" ? (
                    <Link
                      className="text-dark-green font-semibold bg-white hover:underline dark:bg-panel-dark pl-[7px]"
                      href={`/${mainSlug}&${item.f_slug}=[${item.f_val_id}]`}
                    >
                      {htmlParser.parse(item.f_val)}
                    </Link>
                  ) : (
                    <span className="product-inside-count">
                      {htmlParser.parse(item.f_val)}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* {
                data?.map((item, i) => (
                    <div key={i} className={styles.specificationsPart}>
                        <div className={styles.title}>
                            {item.title}
                        </div>

                        <ul className={styles.list}>
                            {
                                item.list.map((item, k) => (
                                    <li key={k} className={styles.item}>
                                        <span className={styles.label}>
                                            <span>
                                                {item.label}
                                            </span>
                                        </span>
                                        <span className={styles.value}>
                                            <span>
                                                {item.value}
                                            </span>
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            } */}
    </div>
  );
}
