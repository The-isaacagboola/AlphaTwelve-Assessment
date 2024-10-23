import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const DoubleLeftArrow: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "20"}
      height={props.height || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.37498 7.29166L6.45831 10L9.37498 12.7083M13.5416 7.29166L10.625 10L13.5416 12.7083"
        stroke={props.outlineColor || "#64748B"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DoubleLeftArrow;
