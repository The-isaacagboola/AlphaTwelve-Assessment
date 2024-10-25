import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const BellIcon: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "20"}
      height={props.height || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49998 13.9583C7.49998 13.9583 7.49998 16.0417 9.99998 16.0417C12.5 16.0417 12.5 13.9583 12.5 13.9583M14.375 8.33334V10L16.0416 13.5417H3.95831L5.62498 10V8.33334C5.62498 5.9171 7.58373 3.95834 9.99998 3.95834C12.4162 3.95834 14.375 5.9171 14.375 8.33334Z"
        stroke={props.outlineColor || "#64748B"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BellIcon;
