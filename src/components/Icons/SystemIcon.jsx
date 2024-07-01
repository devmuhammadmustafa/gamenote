import React from "react";

function SystemIcon(props) {
  return (
    <span
      className={"GameNoteIcon " + (props?.dark ? "dark:text-green" : "")}
      {...props}
    >
      <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none">
        <g clipPath="url(#clip0_1548_23502)">
          <path
            d="M12.8848 3.20059C17.4935 2.49561 22.1111 1.8347 26.7375 1.19141C26.7375 5.2362 26.7375 9.281 26.7375 13.3346C22.1199 13.3522 17.5024 13.4227 12.8848 13.4404C12.8848 10.03 12.8848 6.61972 12.8848 3.2094V3.20059Z"
            stroke="currentColor"
            strokeMiterlimit="10"
          />
          <path
            d="M1.17385 4.83092C4.64585 4.29337 8.13548 3.83514 11.6163 3.39453C11.6163 6.75198 11.6163 10.1094 11.6163 13.4669C8.13548 13.4669 4.64585 13.5197 1.16504 13.5109V4.83092H1.17385Z"
            stroke="currentColor"
            strokeMiterlimit="10"
          />
          <path
            d="M1.17383 14.5684C4.65464 14.5596 8.13546 14.6124 11.6163 14.6036C11.6163 17.9699 11.6163 21.3361 11.6163 24.7024C8.13546 24.1913 4.65464 23.7331 1.17383 23.266V14.5684Z"
            stroke="currentColor"
            strokeMiterlimit="10"
          />
          <path
            d="M12.8594 14.7002H26.7298C26.7298 18.7362 26.7298 22.7722 26.7298 26.817C22.121 26.1296 17.5034 25.4863 12.877 24.8606C12.877 21.4768 12.8594 18.0929 12.8594 14.709V14.7002Z"
            stroke="currentColor"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_1548_23502">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}

export default SystemIcon;
