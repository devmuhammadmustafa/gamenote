// components/Pagination.js

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, pageCount }) => {
  const router = useRouter();
  console.log(currentPage, pageCount);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const renderPageNumbers = () => {
    const pages = [];
    const totalPages = pageCount;

    const handleClick = (value) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      const newValue = value;

      if (!newValue) {
        current.delete("page");
      } else {
        current.set("page", value);
      }

      const search = current.toString();
      const query = search ? `?${search}` : "";

      router.push(`${pathname}${query}`);
    };

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            href={`/page/${i}`}
            className={`${
              currentPage == i
                ? "active !bg-dark-green !border-dark-green !text-white pointer-events-none"
                : ""
            } flex w-[30px] dark:border-dark-white dark:text-dark-white h-[30px] rounded-full border items-center justify-center mx-[4px] hover:!bg-dark-green hover:!text-white hover:!border-white transition`}
          >
            {i}
          </button>
        );
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + 4);

      if (startPage > 1) {
        pages.push(
          <button
            key={1}
            onClick={() => handleClick(1)}
            className={`${
              currentPage == 1
                ? "active !bg-dark-green !border-dark-green !text-white pointer-events-none"
                : ""
            } flex w-[30px] dark:border-dark-white dark:text-dark-white h-[30px] rounded-full border items-center justify-center mx-[4px] hover:!bg-dark-green hover:!text-white hover:!border-white transition`}
          >
            {1}
          </button>
        );
        if (startPage > 2) {
          pages.push(
            <span key="ellipsis1" className="block mx-[5px]">
              ...
            </span>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`${
              currentPage == i
                ? "active !bg-dark-green !border-dark-green !text-white pointer-events-none"
                : ""
            } flex w-[30px] dark:border-dark-white dark:text-dark-white h-[30px] rounded-full border items-center justify-center mx-[4px] hover:!bg-dark-green hover:!text-white hover:!border-white transition`}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push(
            <span key="ellipsis2" className="block mx-[5px]">
              ...
            </span>
          );
        }
        pages.push(
          <button
            key={totalPages}
            onClick={() => handleClick(totalPages)}
            className={`${
              currentPage == totalPages
                ? "active !bg-dark-green !border-dark-green !text-white pointer-events-none"
                : ""
            } flex w-[30px] dark:border-dark-white dark:text-dark-white h-[30px] rounded-full border items-center justify-center mx-[4px] hover:!bg-dark-green hover:!text-white hover:!border-white transition`}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className="pagination w-full flex justify-center items-end mt-[20px]">
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
