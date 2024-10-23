import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const ChevronRightIcon: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "12"}
      height={props.height || "12"}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.375 4.375L7.125 6L5.375 7.625"
        stroke={props.outlineColor || "#334155"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRightIcon;
