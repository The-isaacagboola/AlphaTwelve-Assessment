import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const CloseIcon: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "12"}
      height={props.height || "12"}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.625 3.375L3.375 8.625"
        stroke="#334155"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.375 3.375L8.625 8.625"
        stroke="#334155"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
