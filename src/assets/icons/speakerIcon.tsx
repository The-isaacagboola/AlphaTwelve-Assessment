import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const SpeakerIcon: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "24"}
      height={props.width || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z"
        stroke={props.outlineColor || "black"}
        strokeWidth="1.5"
      />
      <path
        d="M10 21C13.866 21 17 19.2091 17 17C17 14.7909 13.866 13 10 13C6.13401 13 3 14.7909 3 17C3 19.2091 6.13401 21 10 21Z"
        stroke={props.outlineColor || "black"}
        strokeWidth="1.5"
      />
      <path
        d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8"
        stroke={props.outlineColor || "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SpeakerIcon;
