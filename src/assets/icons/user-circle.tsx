import { FC } from "react";
import { Iconprops } from "./icons-props.types";

const UserCircle: FC<Iconprops> = (props) => {
  return (
    <svg
      width={props.width || "24"}
      height={props.width || "24"}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.09753 17C9.244 15.625 10.9699 14.75 12.9001 14.75C14.8303 14.75 16.5562 15.625 17.7026 17M20.15 12C20.15 16.0041 16.9041 19.25 12.9 19.25C8.89596 19.25 5.65002 16.0041 5.65002 12C5.65002 7.99594 8.89596 4.75 12.9 4.75C16.9041 4.75 20.15 7.99594 20.15 12ZM15.15 10C15.15 11.2426 14.1427 12.25 12.9 12.25C11.6574 12.25 10.65 11.2426 10.65 10C10.65 8.75736 11.6574 7.75 12.9 7.75C14.1427 7.75 15.15 8.75736 15.15 10Z"
        stroke={props.outlineColor || "#FCF7FF"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserCircle;
