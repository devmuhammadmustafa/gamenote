import styles from "@/styles/components/Products.module.css";
import Image1 from "@/assets/images/product.png";
import Image from "next/image";
import Button from "@/components/Button";
import NewIcon from "@/components/Icons/NewIcon";
import Link from "next/link";
import IconButton from "@/components/Button/iconButton";
import CompareIcon from "@/components/Icons/CompareIcon";
import FavoriteIcon from "@/components/Icons/FavoriteIcon";
import ShopIcon from "@/components/Icons/ShopIcon";
import ProductBanner from "@/assets/images/ProductBanner.png";
import PremiumIcon from "@/components/Icons/PremiumIcon";
import { Parser } from "html-to-react";
export default function ProductCard({ banner, data }) {
  const htmlParser = new Parser();
  const htmlString =
    '<ul><li>Processor: Intel Core i9-12900HX (12th Gen)</li><li>Video kart: 2.2 GHz Intel Core i9 24-Core (13th Gen)</li><li>Ram: 32GB DDR5 RAM | 1TB NVMe M.2 SSD</li><li>Ve s.</li></ul><ul classname="{styles.indicators}"> <li classname="{styles.item}"> <span classname="{styles.label}">Processor:</span> <span classname="{`${styles.value}" dark:text-black="" dark:text-light`}=""> Intel Core i9-12900HX (12th Gen) </span> </li> <li classname="{styles.item}"> <span classname="{styles.label}">Video kart:</span> <span classname="{`${styles.value}" dark:text-black="" dark:text-light`}=""> 2.2 GHz Intel Core i9 24-Core (13th Gen) </span> </li> <li classname="{styles.item}"> <span classname="{styles.label}">Ram:</span> <span classname="{`${styles.value}" dark:text-black="" dark:text-light`}=""> 32GB DDR5 RAM | 1TB NVMe M.2 SSD </span> </li> <li classname="{styles.item}"> <span classname="{styles.label}">Və s.</span> </li> </ul><ul><li><br></li></ul>';

  const colors = [
    {
      value: "#fff",
    },
    {
      value: "#292D32",
    },
    {
      value: "#A5A5A5",
    },
    {
      value: "#25540F",
    },
  ];
  // const test = data[0]?.technical_specifications_short;
  return (
    <>
      {data?.map((item) => (
        <div
          key={item.id}
          className={`${styles.productCard} bg-white dark:bg-panel-dark`}
        >
          <div className={styles.topPart}>
            <div className={styles.left}>
              <div className={styles.image}>
                <img className={styles.self} src={item.image} alt="test" />
              </div>
              <Link href="/">
                <h3 className={styles.title}>{htmlParser.parse(item.name)}</h3>
              </Link>
            </div>
            <div className={styles.right}>
              <div className={styles.price}>
                <div className={`${styles.current} text-black dark:text-light`}>
                  {Number(item.first_variation?.price_dis) == 0
                    ? item.first_variation.price
                    : item.first_variation.price_dis}{" "}
                  ₼
                </div>
                {Number(item.first_variation?.price_dis) !== 0 && (
                  <del className={styles.old}>
                    {item.first_variation.price} ₼
                  </del>
                )}
              </div>
              <ul className={styles.list}>
                <li
                  className={`${styles.item} bg-[#f5f5f5] dark:bg-[#292D32] text-black dark:text-light`}
                >
                  Stokda mövcuddur
                </li>
                <li
                  className={`${styles.item} bg-[#f5f5f5] dark:bg-[#292D32] text-black dark:text-light`}
                >
                  Nəğd alışda 35% endirim
                </li>
                <li
                  className={`${styles.item} bg-[#f5f5f5] dark:bg-[#292D32] text-black dark:text-light`}
                >
                  Faizsiz kredit təklifi
                </li>
                <li
                  className={`${styles.item} bg-[#f5f5f5] dark:bg-[#292D32] text-black dark:text-light`}
                >
                  Komissiyasız
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.middlePart + " product-card-middle"}>
            <div className={styles.left + " text-black dark:text-light"}>
              <div className={`${styles.title} text-black dark:text-light`}>
                Əsas göstəricilər
              </div>

              {/*<ul>*/}
              {/*    <li>*/}
              {/*        <span>Processor:</span>*/}
              {/*        <span>*/}
              {/*            Intel Core i9-12900HX (12th Gen)*/}
              {/*        </span>*/}
              {/*    </li>*/}
              {/*</ul>*/}
              {/*<div dangerouslySetInnerHTML={{__html: item.technical_specifications_short}}></div>*/}
              {htmlParser.parse(
                htmlParser.parse(item.technical_specifications_short)
              )}
            </div>

            <div className={styles.right}>
              {colors.map((item, index) => (
                <div
                  key={index}
                  style={
                    item.value === "#fff"
                      ? { background: item.value }
                      : { background: item.value }
                  }
                  className={`${styles.color} ${
                    item.value === "#fff" ? `before:!opacity-100` : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className={styles.bottomPart}>
            <div className={styles.left}>
              <Link href={`/product/${item?.first_variation.slug}`}>
                <Button text="Ətraflı bax" />
              </Link>

              {item.is_new == false ? (
                <div
                  className={`${styles.productType} ${styles.premium} premium`}
                >
                  <span className={styles.text}>Premium</span>
                  <PremiumIcon />
                </div>
              ) : item.is_new == true ? (
                <div
                  className={`${styles.productType} ${styles.new} new border-black dark:border-[#7d7d7d]`}
                >
                  <NewIcon />
                  <span className={`${styles.text} text-black dark:text-light`}>
                    Yeni
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.right}>
              <div className={styles.buttons}>
                <div href="/" className={styles.button}>
                  <IconButton
                    icon={
                      <CompareIcon dark="true" style={{ fontSize: "24px" }} />
                    }
                  />
                </div>
                <div href="/" className={styles.button}>
                  <IconButton
                    icon={
                      <FavoriteIcon dark="true" style={{ fontSize: "18px" }} />
                    }
                  />
                </div>
                <div href="/" className={styles.button}>
                  <IconButton
                    icon={<ShopIcon dark="true" style={{ fontSize: "18px" }} />}
                  />
                </div>
                <div className={`${styles.button} ${styles.type}`}>
                  {item.is_new == false ? (
                    <div
                      className={`${styles.productType} ${styles.premium} premium`}
                    >
                      <span className={styles.text}>Premium</span>
                      <PremiumIcon />
                    </div>
                  ) : item.is_new == true ? (
                    <div
                      className={`${styles.productType} ${styles.new} new border-black dark:border-[#7d7d7d]`}
                    >
                      <NewIcon />
                      <span
                        className={`${styles.text} text-black dark:text-light`}
                      >
                        Yeni
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/*{*/}
      {/*    banner &&*/}

      {/*    <Link className={styles.productBanner} href='/'>*/}
      {/*        <Image src={ProductBanner} alt='test'/>*/}
      {/*    </Link>*/}
      {/*}*/}
    </>
  );
}
