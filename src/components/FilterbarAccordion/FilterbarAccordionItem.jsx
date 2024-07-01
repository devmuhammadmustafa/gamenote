import * as React from 'react';
import { useRouter } from 'next/router';
import DownArrowIcon from '@/components/Icons/DownArrowIcon';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '@/styles/components/ProductsFilterPage.module.css';
import {
  CategoryFilter,
  Filters,
  ProductFilters,
  RangeFilter,
} from '@/store/atoms';
import { useAtom } from 'jotai';
import { ProductSingleItemTrigger } from '@/store/atoms';
import {
  useRouter as useRouterNav,
  useSearchParams,
  usePathname,
} from 'next/navigation';

export default function FilterbarAccordionItem({
  i,
  data,
  title,
  expanded,
  setExpanded,
}) {
  const [filterList, setFilterList] = React.useState([]);
  const [list, setList] = React.useState({ filters: [] });
  const [testList, setTestList] = React.useState([]);
  const [storeList, setStoreList] = useAtom(Filters);
  const [storeList2, setStoreList2] = useAtom(ProductFilters);
  const [storeRangeFilter] = useAtom(RangeFilter);
  const [storeCategoryFilter] = useAtom(CategoryFilter);
  const [productSingleTrigger] = useAtom(ProductSingleItemTrigger);
  const [value, setValue] = React.useState('');

  const router = useRouter();
  const isOpen = i === expanded;

  React.useEffect(() => {
    setFilterList({
      filter_id: list.parentId,
      values: list.filters,
    });
  }, [list]);

  /*
  React.useEffect(() => {

    setAllFilterList([...list.filters, ...allFilterList]);
  }, [list.filters]);

  React.useEffect(() => {
    console.log("list", list);
  }, [list]);

  React.useEffect(() => {
    console.log("list.filters", list.filters);
  }, [list]);

  React.useEffect(() => {
    console.log("allFilterList", allFilterList);
  }, [allFilterList]);
  
*/

  const [checkedObject, setCheckedObject] = React.useState([]);

  const [dataList, setDataList] = React.useState([]);

  let slug = data?.f_slug;
  let query = router.query;
  let string = query[slug];
  let object;
  if (string) {
    object = JSON.parse(string);
  }

  const routerNav = useRouterNav();
  let searchParams = useSearchParams();
  const pathname = usePathname();

  React.useEffect(() => {
    setDataList((prevDataList) => {
      const dataOptionsList = data?.f_options?.map((item) => {
        const checked = router.query[data?.f_slug]
          ? Array.isArray(JSON.parse(router.query[data?.f_slug]))
            ? Boolean(
                JSON.parse(router.query[data?.f_slug])?.find((d) => {
                  return d == item.value_id;
                })
              )
            : item.value_id == router.query[data?.f_slug]
          : false;

        return {
          ...item,
          checked: checked,
        };
      });

      console.log('dataOptionsList', dataOptionsList);

      // const params = new URLSearchParams(searchParams);

      // if (!updatedList.length) {
      //   params.delete(slug);
      // } else {
      //   if (updatedList.length == 1) {
      //     params.set(slug, `${String(updatedList)}`);
      //   } else {
      //     params.set(slug, `[${String(updatedList)}]`);
      //   }
      // }

      // const URI = `${pathname}?${decodeURIComponent(params.toString())}`;

      // routerNav.push(URI, undefined, { shallow: true });

      return dataOptionsList;
    });
  }, [JSON.stringify(data), JSON.stringify(router.query)]);

  // React.useEffect(() => {
  //   if (router.query[data?.f_slug]) {
  //     setCheckedObject(
  //       ...checkedObject,
  //       JSON.parse(router.query[data?.f_slug])
  //     );
  //     console.log(JSON.parse(router.query[data?.f_slug]));
  //   }
  // }, [router.query, data?.f_slug]);

  // function handleCheckboxClick(e) {
  //   // Kopya oluştur
  //   const updatedCheckedObject = [...checkedObject];

  //   setValue(Number(e.value_id));

  //   if (updatedCheckedObject.includes(e.value_id)) {
  //     const index = updatedCheckedObject.indexOf(e.value_id);
  //     if (index > -1) {
  //       // only splice array when item is found
  //       updatedCheckedObject.splice(index, 1); // 2nd parameter means remove one item only
  //     }
  //   }
  // }

  // console.log('co', checkedObject);

  return (
    <div className={styles.accordion}>
      {/* <div>Store list: {JSON.stringify(storeList2, null, 2)}</div> */}
      <div
        onClick={() => setExpanded(isOpen ? false : i)}
        className={`${styles.title} text-black dark:text-light cursor-pointer`}>
        {data?.f_name}

        <span
          className={`${styles.arrow}  ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <DownArrowIcon />
        </span>
      </div>
      <AnimatePresence initial={false}>
        {!isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: 'linear' }}
            className="answer overflow-hidden">
            <div className={styles.content}>
              {/* {JSON.stringify(dataList, null, 2)} */}

              {dataList?.map((item, i) => (
                <div key={i} className={styles.inputRadio}>
                  <input
                    type="checkbox"
                    name={data?.f_slug}
                    className={styles.input}
                    id={item.value_id}
                    value={item.value_id}
                    checked={item?.checked}
                    onChange={() => {
                      setDataList((prev) => {
                        return prev.map((d) => {
                          if (d.value_id === item.value_id) {
                            return {
                              ...d,
                              checked: !d.checked,
                            };
                          } else {
                            return d;
                          }
                        });
                      });
                    }}
                  />
                  <label htmlFor={item.value_id} className={styles.label}>
                    {item.value_name}
                  </label>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
