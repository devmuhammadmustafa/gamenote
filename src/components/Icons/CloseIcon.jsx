import React from "react";

function CloseIcon(props) {
  return (
    <span
      className={"GameNoteIcon " + (props?.dark ? "dark:text-green" : "")}
      {...props}
    >
      <svg width="1em" viewBox="0 0 18 18">
        <path
          d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
        />
        <path
          d="M6.87744 11.1225L11.1224 6.8775"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1224 11.1225L6.87744 6.8775"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default CloseIcon;
