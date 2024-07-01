import Button from "@/components/Button";
import SearchIcon from "@/components/Icons/SearchIcon";
import styles from "@/styles/components/Search.module.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { log } from "next/dist/server/typescript/utils";
import { getSearchResults } from "@/pages/api/search";
import Link from "next/link";
import { useDebounce } from "@uidotdev/usehooks";

export default function Search({ siteData }) {
  const { t } = useTranslation("common");
  const [value, setValue] = useState("");
  const router = useRouter();
  const locale = router.locale;
  const [data, setData] = useState([]);
  const debouncedSearch = useDebounce(value, 500);
  const [filters, setFilters] = useState([{ filter_id: "search", values: "" }]);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    router.push(`/search?search=${data.search}`);
    setValue(""), setData([]);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!value || !debouncedSearch) return;

    const newFilters = filters.map((filter) => {
      if (filter.filter_id === "search" && debouncedSearch) {
        return { ...filter, values: debouncedSearch || "" };
      }
      return filter;
    });

    setFilters(newFilters);
  }, [value, debouncedSearch]);

  useEffect(() => {
    const handleGetSearchResults = async () => {
      const response = await getSearchResults(
        locale,
        `search=${debouncedSearch}`
      );
      setData(response?.products);
    };
    if (debouncedSearch.length > 0) {
      handleGetSearchResults();
    }
  }, [locale, router, debouncedSearch]);

  const checkKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit({ search: value });
    }
  };

  const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escapedValue, "ig");

  const highlightSearchTerm = (text, term) => {
    if (!term.trim()) {
      return <span style={{ color: "black" }}>{text}</span>;
    }

    const terms = term.split(/\s+/).filter((t) => t.trim() !== "");

    let currentColorIndex = 0;

    return text.split(/\b/).map((chunk, index) => {
      const isMatch = terms.some((t) => {
        const escapedTerm = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
        const regex = new RegExp(`\\b(${escapedTerm})\\b`, "gi");
        return regex.test(chunk);
      });

      if (isMatch) {
        currentColorIndex = (currentColorIndex + 1) % terms.length;
        return (
          <span key={index} style={{ color: "red" }}>
            {chunk}
          </span>
        );
      } else {
        return <span key={index}>{chunk}</span>;
      }
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => checkKeyDown(e)}
        className={styles.searchForm}
      >
        <input
          {...register("search")}
          autoComplete="off"
          className={`dark:bg-panel-dark border-white dark:border-panel-dark placeholder:text-[#A5A5A5] dark:placeholder:text-light dark:text-light ${styles.searchInput}`}
          type="text"
          placeholder={siteData?.search_title}
          onChange={handleChange}
          value={value}
        />
        <div className={styles.searchButton}>
          <Button
            type="submit"
            icon={<SearchIcon />}
            text={siteData?.search_button}
          />
        </div>

        {debouncedSearch.length && data?.length > 0 ? (
          <div
            className={`search-results ${styles.searchInput} absolute overflow-auto top-[calc(100%+10px)] z-[3] border-none bg-white shadow-md flex flex-col !h-fit !max-h-[315px] !rounded-[15px] !pl-0`}
          >
            {data?.slice(0, 6).map((item, i) => (
              <Link
                key={i}
                onClick={() => {
                  setValue(""), setData([]);
                }}
                href={
                  item.first_variation &&
                  `/product/${item.first_variation?.slug}`
                }
                className="py-[10px] text-[14px] font-medium px-[25px] border-b last:border-none border-[#f1f1f1] hover:bg-[#f1f1f1] hover:text-green-hover"
              >
                {highlightSearchTerm(item.name, value)}
              </Link>
            ))}
            {data?.length > 6 && (
              <button
                type="submit"
                className="text-left px-[25px] py-[10px] font-semibold"
              >
                {t("all_search_results")}
              </button>
            )}
          </div>
        ) : (
          <></>
        )}
      </form>
    </>
  );
}
