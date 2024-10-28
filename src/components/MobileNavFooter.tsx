import { Link } from "react-router-dom";
import { routes } from "./nav";
import { useDarkMode } from "../context";
import UserCircle from "../assets/icons/user-circle";
import { useState } from "react";

export const MobileNavFooter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const { isDarkMode } = useDarkMode();

  return (
    <div className="md:hidden     justify-between px-4  mt-[25px]  pb-[34px] border-t border-[#F3F4F6]">
      <div className="max-w-max flex gap-2 items-center mx-auto">
        {routes.slice(0, 4).map((item, i) => (
          <Link
            to={item.path}
            key={i}
            className={`h-[64px] flex flex-col gap-2 pt-2 items-center justify-center px-1 ${
              item.path === currentPath ? "border-t-4 border-t-[#8576FF]" : " "
            }`}
            onClick={() => setCurrentPath(item.path)}
          >
            {
              <item.icon
                width={24}
                height={24}
                outlineColor={
                  item.path === currentPath
                    ? "#8576FF"
                    : isDarkMode
                    ? "#8576FF"
                    : "#484554"
                }
              />
            }
            <p
              className={`dark:text-white ${
                item.path === currentPath ? "text-[#8576FF] " : "text-[#64748B]"
              }`}
            >
              {item.name}
            </p>
          </Link>
        ))}

        <Link
          to="/speakers"
          className="h-[64px] flex flex-col gap-2 pt-2 items-center justify-center"
        >
          {
            <UserCircle
              width={24}
              height={24}
              outlineColor={isDarkMode ? "#FFF" : "#484554"}
            />
          }
          <p
            className={`dark:text-white ${
              currentPath === "/speakers" ? "text-[#8576FF] " : "text-[#64748B]"
            }`}
          >
            Profile
          </p>
        </Link>
      </div>
    </div>
  );
};
