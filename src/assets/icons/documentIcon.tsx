import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const DocumentIcon: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "20"}
      height={props.height || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66665 3.95834V6.87501M13.3333 3.95834V6.87501M6.45831 8.95834H13.5416M5.62498 16.0417H14.375C15.2955 16.0417 16.0416 15.2955 16.0416 14.375V7.29168C16.0416 6.3712 15.2955 5.62501 14.375 5.62501H5.62498C4.70451 5.62501 3.95831 6.3712 3.95831 7.29168V14.375C3.95831 15.2955 4.70451 16.0417 5.62498 16.0417Z"
        stroke={props.outlineColor || "#64748B"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DocumentIcon;
