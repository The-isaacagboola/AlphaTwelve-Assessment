import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const ChevronLeftIcon: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "12"}
      height={props.height || "12"}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.625 4.375L4.875 6L6.625 7.625"
        stroke={props.outlineColor || "#334155"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
