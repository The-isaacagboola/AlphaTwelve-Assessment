import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const ArrowUpRight: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "16"}
      height={props.height || "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 10.1667V4.5H5.83333M11.3333 4.66667L4.5 11.5"
        stroke={props.outlineColor || "#10B981"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRight;
