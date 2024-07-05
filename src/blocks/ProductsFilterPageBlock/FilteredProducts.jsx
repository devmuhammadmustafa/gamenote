import styles from "@/styles/components/ProductsFilterPage.module.css";
import FilterSelect from "@/components/FilterSelect";
import Image1 from "@/assets/images/product.png";
import Image from "next/image";
import StarIcon from "@/components/Icons/StarIcon";
import IconButton from "@/components/Button/iconButton";
import CompareIcon from "@/components/Icons/CompareIcon";
import FavoriteIcon from "@/components/Icons/FavoriteIcon";
import ShopIcon from "@/components/Icons/ShopIcon";
import Link from "next/link";
import Button from "@/components/Button";
import RightArrowIcon from "@/components/Icons/RightArrowIcon";
import PaginationNextIcon from "@/components/Icons/PaginationNextIcon";
import PaginationPrevIcon from "@/components/Icons/PaginationPrevIcon";
import { useRouter } from "next/router";
import { getSearchResults } from "@/pages/api/search";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  BasketReload,
  ComparisonReload,
  FavoriteReload,
  Filters,
  MenuList,
  ModalType,
  ModalVisibility,
  PersonalInfoSuccess,
  ProductFilters,
} from "@/store/atoms";
import { getFilters } from "@/pages/api/getFilters";
import { Parser } from "html-to-react";
import Empty_Image from "@/assets/images/empty.svg";
import { actionFavorite } from "@/pages/api/actionFavorite";
import { actionComparison } from "@/pages/api/actionComparison";
import { actionBasket } from "@/pages/api/actionBasket";
import Swal from "sweetalert2";
import { getCookie } from "cookies-next";
import { useTranslation } from "next-i18next";
import specificationsIcon from "@/store/specifications";
import { ProductSingleItemTrigger } from "@/store/atoms";
import { fi } from "date-fns/locale";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";

export default function FilteredProducts() {
  const { t } = useTranslation("common");
  const [modalType, setModalType] = useAtom(ModalType);
  const [storeDataSuccess, setStoreDataSuccess] = useAtom(PersonalInfoSuccess);
  const [modalVisibility, setModalVisibility] = useAtom(ModalVisibility);
  const [favoriteReload, setFavoriteReload] = useAtom(FavoriteReload);
  const [comparisonReload, setComparisonReload] = useAtom(ComparisonReload);
  const [basketReload, setBasketReload] = useAtom(BasketReload);
  const htmlParser = new Parser();
  const [filtersProduct] = useAtom(ProductFilters);
  const [productSingleTrigger] = useAtom(ProductSingleItemTrigger);
  const [menuList] = useAtom(MenuList);
  const router = useRouter();
  const locale = router.locale;
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const token = getCookie("AccessToken");
  const [pageCount, setPageCount] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [token_, setToken_] = useState("");

  const handleOpenLoginModal = () => {
    setModalType("login");
    setModalVisibility(true);
  };

  useEffect(() => {
    setToken_(token);
  }, [token]);

  useEffect(() => {
    const handleGetSearchResults = async () => {
      const response = await getSearchResults(
        locale,
        router.asPath.split("?")[1]
      );
      setData(response?.products);
      setPageCount(Math.ceil(response?.total / 12));
    };
    handleGetSearchResults();
  }, [locale, router]);

  const SuccessTimer = async (text, status) => {
    let timerInterval;
    Swal.fire({
      title: text,
      icon: status,
      timer: 5000,
      timerProgressBar: true,
      showCloseButton: true,
      confirmButtonColor: "green",
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      // if (result.dismiss === Swal.DismissReason.timer) {
      //     console.log('I was closed by the timer')
      // }
    });
  };

  const handleActionFavorite = async (id) => {
    setStoreDataSuccess(storeDataSuccess + 1);
    const response = await actionFavorite(locale, id);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message);
      setFavoriteReload(favoriteReload + 1);
    } else if (response?.responseStatus?.ResponseCode == 403) {
      handleOpenLoginModal();
    }
  };

  const handleActionComparison = async (id) => {
    setStoreDataSuccess(storeDataSuccess + 1);
    const response = await actionComparison(locale, id);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message);
      setComparisonReload(comparisonReload + 1);
    } else if (response?.responseStatus?.ResponseCode == 403) {
      handleOpenLoginModal();
    }
  };

  const handleActionBasket = async (id) => {
    setStoreDataSuccess(storeDataSuccess + 1);
    const response = await actionBasket(locale, id, 1);
    if (response?.responseStatus?.ResponseCode == 200) {
      await SuccessTimer(response?.responseStatus?.Message, "success");
      setBasketReload(basketReload + 1);
    } else if (response?.responseStatus?.ResponseCode == 400) {
      await SuccessTimer(response?.responseStatus?.Message, "warning");
    }
  };

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("page")) {
      setCurrentPage(searchParams.get("page"));
    } else {
      setCurrentPage(1);
    }
  }, [searchParams, router]);

  return (
    <div className={`${styles.filteredProducts} bg-white dark:bg-panel-dark`}>
      <div className={styles.titleBar}>
        <div className={styles.left}>
          {router.pathname == "/monitors"
            ? t("general.monitors_title")
            : router.pathname == "/accesories"
            ? t("general.accesories_title")
            : router.pathname == "/notebooks"
            ? t("general.notebooks_title")
            : t("general.search_result_title")}
        </div>
        <div className={`${styles.right} filter-select`}>
          <FilterSelect id="product-inside" />
        </div>
      </div>

      <div className={styles.products}>
        {data ? (
          data?.map((item) => (
            <div
              key={item.id}
              className={`${styles.item} border-[#d9d9d9] dark:border-border-dark filtered-product-card`}
            >
              <Link
                style={{ display: "flex" }}
                className={`block ${styles.image}`}
                href={`/product/${item?.first_variation?.slug}`}
              >
                <img src={item.image} alt="test" className={styles.imageSelf} />
              </Link>
              <Link href={`/product/${item?.first_variation?.slug}`}>
                <h4 className={`${styles.productTitle} line-clamp-2`}>
                  {item.name}
                </h4>
              </Link>
              <div className={styles.priceSelf}>
                <div className={`${styles.current}`}>
                  {item?.first_variation?.price != "0.00"
                    ? item?.first_variation?.price
                    : item?.first_variation?.price}{" "}
                  ₼
                </div>
                {item?.first_variation?.price_old && (
                  <del className={`${styles.old} text-black dark:text-light`}>
                    {item?.first_variation?.price_old} ₼
                  </del>
                )}
              </div>

              <div className={styles.filteredProductCardBottom}>
                <div
                  className={`${styles.buttons} mt-[5px] border-t border-[#d9d9d9]`}
                >
                  <div className={styles.button}>
                    <IconButton
                      onClick={handleActionComparison.bind(this, item.id)}
                      icon={
                        <CompareIcon dark="true" style={{ fontSize: "24px" }} />
                      }
                    />
                  </div>
                  <div className={styles.button}>
                    <IconButton
                      onClick={handleActionFavorite.bind(this, item.id)}
                      icon={
                        <FavoriteIcon
                          dark="true"
                          style={{ fontSize: "18px" }}
                        />
                      }
                    />
                  </div>
                  <div className={styles.button}>
                    <Button
                      compact
                      onClickFunction={handleActionBasket.bind(
                        this,
                        item?.first_variation?.variation_id
                      )}
                      mobileHidden
                      text={t("general.add_to_basket")}
                      icon={<ShopIcon style={{ fontSize: "18px" }} />}
                    />
                  </div>
                </div>

                <div className="descriptions flex flex-wrap text-black dark:text-light">
                  {item?.first_variation?.six_grid?.map((item, i) => (
                    <div className="technical flex w-full mb-[10px]" key={i}>
                      <div className="left text-[28px] text-green pr-[15px] pt-[5px]">
                        {
                          specificationsIcon?.find(
                            (icons) => icons.name == item.icon
                          ).icon
                        }
                      </div>
                      <div className="right">
                        <span className="text-[#7D7D7D] dark:text-light text-[12px]">
                          {item.f_name}
                        </span>
                        <p className="text-[12px] dark:text-white font-semibold">
                          {htmlParser.parse(item.f_val)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/product/${item?.first_variation?.slug}`}
                  className="block mt-[5px] -bottom-[5px] absolute w-[calc(100%-30px)]"
                >
                  <Button text={t("general.more")} backgroundGray full="true" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="flex flex-col justify-center items-center w-full">
              <Image src={Empty_Image} alt="test" />
              <div className="text-center text-[24px] leading-[32px] text-black dark:text-white font-bold mt-8">
                {t("general.search_result_empty")}
              </div>
            </div>
          </>
        )}
      </div>

      <Pagination currentPage={currentPage} pageCount={pageCount} />

      {/* <div className={styles.pagination}>*/}
      {/*    <Link href='/products' className={styles.disabled}>*/}
      {/*        <IconButton icon={<PaginationPrevIcon/>}/>*/}
      {/*    </Link>*/}
      {/*    <div className={styles.list}>*/}
      {/*        <Link className={`${styles.link} ${styles.active}`} href='/products'>1</Link>*/}
      {/*        <Link className={`${styles.link} text-black dark:text-light`} href='/products'>2</Link>*/}
      {/*        <Link className={`${styles.link} text-black dark:text-light`} href='/products'>3</Link>*/}
      {/*        <Link className={`${styles.link} text-black dark:text-light`} href='/products'>4</Link>*/}
      {/*        <Link className={`${styles.link} text-black dark:text-light`} href='/products'>5</Link>*/}
      {/*        <Link className={`${styles.link} text-black dark:text-light`} href='/products'>6</Link>*/}
      {/*        <Link className={`${styles.link} text-black dark:text-light`} href='/products'>...</Link>*/}
      {/*        <Link className={`${styles.link} text-black dark:text-light`} href='/products'>24</Link>*/}
      {/*    </div>*/}
      {/*    <Link href='/products'>*/}
      {/*        <IconButton icon={<PaginationNextIcon dark='true'/>}/>*/}
      {/*    </Link>*/}
      {/*</div> */}
    </div>
  );
}
