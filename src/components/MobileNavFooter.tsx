import { Link } from "react-router-dom";
import { routes } from "./nav";
import { useDarkMode } from "../context";
import UserCircle from "../assets/icons/user-circle";

export const MobileNavFooter = () => {
  const currentPath = window.location.pathname;

  const { isDarkMode } = useDarkMode();

  return (
    <div className="md:hidden     justify-between px-4  mt-[25px]  pb-[34px] border-t border-[#F3F4F6]">
      <div className="max-w-max flex gap-2 items-center mx-auto">
        {routes.slice(0, 4).map((item, i) => (
          <Link
            to={item.path}
            key={i}
            className="h-[64px] flex flex-col gap-2 pt-2 items-center justify-center"
          >
            {
              <item.icon
                width={24}
                height={24}
                outlineColor={isDarkMode ? "#FFF" : "#484554"}
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
