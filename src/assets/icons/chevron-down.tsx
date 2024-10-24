import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const ChevronDown: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "16"}
      height={props.height || "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1667 7.16666L8 9.5L5.83334 7.16666"
        stroke="#334155"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDown;
