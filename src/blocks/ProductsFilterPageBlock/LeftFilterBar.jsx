import styles from '@/styles/components/ProductsFilterPage.module.css';
import FilterbarAccordion from '@/components/FilterbarAccordion';
import { useRouter } from 'next/router';
import {
  useRouter as useRouterNav,
  useSearchParams,
  usePathname,
} from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getCityList } from '@/pages/api/getCityList';
import { getSearchResults } from '@/pages/api/search';
import PremiumIcon from '@/components/Icons/PremiumIcon';
import NewIcon from '@/components/Icons/NewIcon';
import { useAtom } from 'jotai';
import {
  CategoryFilter,
  MenuList,
  ProductFilters,
  RangeFilter,
  FilterProcessorParams,
} from '@/store/atoms';
import { getFilters } from '@/pages/api/getFilters';
import { useTranslation } from 'next-i18next';
import CloseIcon from '@/components/Icons/CloseIcon';
import { ProductSingleItemTrigger } from '@/store/atoms';
import Link from 'next/link';

export default function LeftFilterBar({ modalMode }) {
  const { t } = useTranslation('common');
  const [menuList] = useAtom(MenuList);
  const [categoryFilterId, setCategoryFilterId] = useState(0);
  const router = useRouter();
  const locale = router.locale;
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [resetValue, setResetValue] = useState(0);
  const [storeList2, setStoreList2] = useAtom(ProductFilters);
  const [rangeFilter, setRangeFilter] = useState({
    filter_id: '_minmax',
    values: [],
  });
  const [categoryId, setCategoryId] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState({
    filter_id: 'category',
    values: '',
  });
  const [storeRangeFilter, setStoreRangeFilter] = useAtom(RangeFilter);
  const [storeCategoryFilter, setStoreCategoryFilter] = useAtom(CategoryFilter);
  const [productSingleItemTrigger, setProductSingleItemTrigger] = useAtom(
    ProductSingleItemTrigger
  );

  const [filtersProduct, setFiltersProduct] = useAtom(ProductFilters);

  function findValueByName(data, name) {
    for (const item of data) {
      if (item.slug === name) {
        return item;
      } else if (item.child && item.child.length > 0) {
        const result = findValueByName(item.child, name);
        if (result) {
          return result;
        }
      }
    }
    return null;
  }

  useEffect(() => {
    if (router.query.name) {
      setCategoryId(
        menuList
          ?.find((item) => item.slug == router.pathname.split('/')[1])
          ?.child?.find((item) => item.slug == router.query.name)?.id
      );
    } else {
      setCategoryId(
        menuList?.find((item) => item.slug == router.pathname.split('/')[1])?.id
      );
    }
  }, [router.query.name, router.pathname, menuList]);

  useEffect(() => {
    setCategoryFilterId(router.query?.category);
  }, [router, menuList, categoryFilterId, resetValue]);

  useEffect(() => {
    const handleGetFilters = async () => {
      const response = await getFilters(locale, categoryFilterId);
      // setData(response?.filters);

      setData(() => {
        return response?.filters.map((item) => {
          return {
            ...item,
            f_options: item.f_options.map((item2) => {
              const checked = router.query[data?.f_slug]
                ? Array.isArray(JSON.parse(router.query[data?.f_slug]))
                  ? Boolean(
                      JSON.parse(router.query[data?.f_slug])?.find((d) => {
                        return d == item.value_id;
                      })
                    )
                  : router.query[data?.f_slug]
                : false;

              return {
                ...item2,
                checked: checked,
              };
            }),
          };
        });
      });

      // setData(() => {
      //   return response?.filters?.f_options?.map((item) => {
      //     const checked = router.query[data?.f_slug]
      //       ? Boolean(
      //           JSON.parse(router.query[data?.f_slug])?.find((d) => {
      //             return d == item.value_id;
      //           })
      //         )
      //       : false;

      //     return {
      //       ...item,
      //       checked: checked,
      //     };
      //   });
      // })
    };
    if (categoryFilterId) {
      console.log('categoryFilterId', data);

      handleGetFilters();
    }
  }, [categoryFilterId]);

  const minPriceInput = (e) => {
    setMin(Number(e.target.value));
  };

  const maxPriceInput = (e) => {
    setMax(Number(e.target.value));
  };

  useEffect(() => {
    if (!min && max > 1) {
      setRangeFilter({
        filter_id: '_minmax',
        values: [1, max],
      });
      setStoreRangeFilter({
        filter_id: '_minmax',
        values: [1, max],
      });
    } else if (min && max > 1) {
      setRangeFilter({
        filter_id: '_minmax',
        values: [min, max],
      });
      setStoreRangeFilter({
        filter_id: '_minmax',
        values: [min, max],
      });
    } else if (!max || max == 1) {
      setStoreRangeFilter();
    }
  }, [min, max]);

  useEffect(() => {
    setStoreList2((prevStoreList2) => ({
      ...prevStoreList2,
      storeRangeFilter,
      storeCategoryFilter,
    }));
  }, [storeRangeFilter, storeCategoryFilter, min, max]);

  const categoryHandleChange = (e) => {
    setCategoryId(
      Number(
        menuList
          ?.find((item) => item.slug == router.pathname.split('/')[1])
          ?.child.find((item) => item.slug == e.target.value).id
      )
    );
  };

  useEffect(() => {
    if (categoryId) {
      setCategoryFilter({
        filter_id: 'category',
        values: categoryId,
      });
      setStoreCategoryFilter({
        filter_id: 'category',
        values: categoryId,
      });
    } else {
      setCategoryFilter();
      setStoreCategoryFilter();
    }
  }, [categoryId]);

  const ResetFilter = () => {
    setStoreList2();
    setStoreRangeFilter();
    setStoreCategoryFilter();
    setResetValue(resetValue + 1);

    if (router.query.name) {
      const category = findValueByName(menuList, router.query.name);

      setCategoryFilterId(category?.id);
      setResetValue(resetValue + 1);
    } else if (router.pathname == '/notebooks') {
      const category = findValueByName(menuList, 'notebooks');

      setCategoryFilterId(category?.id);
      setResetValue(resetValue + 1);
    } else if (router.pathname == '/accesories') {
      const category = findValueByName(menuList, 'accesories');

      setCategoryFilterId(category?.id);
      setResetValue(resetValue + 1);
    }
  };

  const routerNav = useRouterNav();
  let searchParams = useSearchParams();
  const pathname = usePathname();

  const [_, setDatalist] = useState({});

  function handleCheckFilter(e, slug) {
    if (e.target.value) {
      setDatalist((prev) => {
        const checkdata = prev[slug] || [];

        const updatedList = checkdata.includes(e.target.value)
          ? checkdata.filter((item) => item !== e.target.value)
          : [...checkdata, e.target.value];

        console.log(
          'checkdata.includes(e.target.value) --->',
          checkdata.includes(e.target.value)
        );

        const newDataList = {
          ...prev,
          [slug]: updatedList,
        };

        const params = new URLSearchParams(searchParams);

        if (!updatedList.length) {
          params.delete(slug);
        } else {
          if (updatedList.length == 1) {
            params.set(slug, `${String(updatedList)}`);
          } else {
            params.set(slug, `[${String(updatedList)}]`);
          }
        }

        const URI = `${pathname}?${decodeURIComponent(params.toString())}`;

        routerNav.push(URI, undefined, { shallow: true });

        return newDataList;
      });
    }
  }

  const [categoryIdQuery, setCategoryIdQuery] = React.useState(0);

  React.useEffect(() => {
    setCategoryIdQuery(router.asPath.split('category')[1].split('=')[1]);
  }, [router]);

  // console.log(router);

  return (
    <div
      className={`${styles.leftFilterBar} ${
        modalMode ? styles.modalMode : ''
      } bg-white dark:bg-panel-dark`}>
      <div className="title-bar flex justify-between items-center w-full">
        <div
          className={`${styles.title} w-full text-black dark:text-light flex justify-between`}>
          <span>{t('general.filter_title')}</span>
          <Link
            href={`${pathname}?${searchParams.toString().split('&')[0]}`}
            type="button"
            className="border border-light  hover:border-dark transition dark:bg-light px-5 text-[12px] rounded-md text-dark">
            {t('reset')}
          </Link>
        </div>

        <div
          onClick={ResetFilter}
          className="hidden pb-[14px] font-semibold text-[#A5A5A5] flex items-center text-[16px] transition hover:text-black cursor-pointer">
          <CloseIcon />
          <span className="text-[14px] relative top-[1px] block pl-[4px]">
            {t('reset')}
          </span>
        </div>
      </div>

      <div className={`${styles.box} border-[#d9d9d9] dark:border-border-dark`}>
        {menuList
          ?.find(
            (item) => item.slug == router.asPath.split('?')[0].split('/')[1]
          )
          ?.child.map((item) => (
            <div key={item.id} className={styles.brand}>
              <Link
                href={`${router.asPath.split('?')[0]}?category=${item.id}`}
                className={`${styles.label} text-black dark:text-light ${
                  categoryIdQuery === item.id ? '!text-green-hover' : ''
                }`}>
                {item.name}
              </Link>
            </div>
          ))}
      </div>

      <div className={`${styles.box} border-[#d9d9d9] dark:border-border-dark`}>
        <p className={`${styles.title} text-black dark:text-light`}>
          {t('general.price_range')}
        </p>

        <div className={styles.rangeInputs}>
          <div className={styles.item}>
            <label
              className={`${styles.label} text-black dark:text-light`}
              htmlFor="fromRangeInput">
              {t('general.price_from')}
            </label>
            <input
              onChange={minPriceInput}
              maxLength={3}
              className={`${styles.input} border-[#a5a5a5] dark:border-border-dark bg-white dark:bg-panel-dark text-white dark:!text-light`}
              type="number"
              min="1"
              placeholder="1"
            />
          </div>
          <div className={styles.item}>
            <label
              className={`${styles.label} text-black dark:text-light`}
              htmlFor="fromRangeInput">
              {t('general.price_to')}
            </label>
            <input
              onChange={maxPriceInput}
              className={`${styles.input} border-[#a5a5a5] dark:border-border-dark bg-white dark:bg-panel-dark text-white dark:!text-light`}
              type="number"
              placeholder="6789"
            />
          </div>
        </div>
      </div>

      {data?.map((item, i) => (
        <div
          onClick={(e) => handleCheckFilter(e, item.f_slug)}
          key={i}
          className={`${styles.box} border-[#d9d9d9] dark:border-border-dark ${styles.accordionBox}`}>
          <FilterbarAccordion i={i} data={item} />
        </div>
      ))}
    </div>
  );
}
