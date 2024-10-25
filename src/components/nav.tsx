import { Link } from "react-router-dom";
import BellIcon from "../assets/icons/bellIcon";
import CalendarIcon from "../assets/icons/calendarIcon";
import Chat from "../assets/icons/chatIcon";
import DocumentIcon from "../assets/icons/documentIcon";
import HomeIcon from "../assets/icons/homeIcon";
import SettingsIcon from "../assets/icons/settingsIcon";
import SpeakerIcon from "../assets/icons/speakerIcon";
import DoubleLeftArrow from "../assets/icons/double-left-arrow";
import avatar from "../assets/images/avatar_temika.webp";
import { useEffect, useState } from "react";
import Hamburger from "../assets/icons/hamburger";
import CloseIcon from "../assets/icons/close-icon";

export const routes = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Events",
    path: "/events",
    icon: CalendarIcon,
  },
  {
    name: "Speakers",
    path: "/speakers",
    icon: SpeakerIcon,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: DocumentIcon,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: BellIcon,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: Chat,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: SettingsIcon,
  },
];
export const Nav = () => {
  const [presentRoute, setPresentRoute] = useState("/");
  const [collapsed, setCollapsed] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const closeMobileNav = () => setShowMobileNav(false);

  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileNav]);
  return (
    <nav
      className={`p-2 lg:border-r lg:border-r-[#F1F5F9] transition-all duration-700 ease-in-out ${
        collapsed ? "lg:w-[64px]" : "lg:w-[240px]"
      }`}
    >
      <div className="w-full relative">
        <div className="flex justify-between items-center w-full p-2 lg:max-w-max mb-4">
          <h1
            className={`${
              collapsed ? "w-8 h-8" : ""
            } text-[#2563EB] border border-[#2563EB] bg-[#93C5FD] border-dashed px-[6px] py-2 text-xs font-semibold cursor-pointer`}
          >
            {!collapsed && "Full Logo"}
          </h1>

          <button
            className="md:hidden"
            onClick={() => setShowMobileNav((prev) => !prev)}
          >
            {showMobileNav ? (
              <div className="p-[6px] rounded-full border border-[#E2E8F0]">
                <CloseIcon />
              </div>
            ) : (
              <Hamburger />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`text-[#334155] text-[14px] bg-white fixed top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${
            showMobileNav
              ? "translate-y-0 opacity-100 z-50"
              : "-translate-y-full opacity-0 z-1000"
          }`}
        >
          <div className="p-4 flex justify-between">
            <h1
              className={`text-[#2563EB] border border-[#2563EB] bg-[#93C5FD] border-dashed px-[6px] py-2 text-xs font-semibold cursor-pointer`}
            >
              {!collapsed && "Full Logo"}
            </h1>

            <button onClick={closeMobileNav}>
              <div className="p-[6px] rounded-full border border-[#E2E8F0]">
                <CloseIcon />
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-4 p-5">
            {routes.map((route, i) => (
              <Link
                key={i}
                to={route.path}
                onClick={() => {
                  setPresentRoute(route.path);
                  closeMobileNav();
                }}
              >
                <div className="flex items-center gap-2 p-2">
                  <route.icon outlineColor={"#ADA9BB"} width={30} height={30} />
                  <p>{route.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div
          className={`hidden text-[#334155] text-[14px] bg-white  md:flex md:relative flex-col gap-2 transition-all duration-500`}
        >
          {routes.map((route, i) => (
            <Link
              key={i}
              to={route.path}
              onClick={() => setPresentRoute(route.path)}
            >
              <div
                key={i}
                className={`flex items-center gap-4 p-2 rounded-sm hover:text-[#8576FF] hover:bg-[#FCF7FF] ${
                  presentRoute === route.path ? "bg-[#FCF7FF]" : ""
                }`}
              >
                <route.icon
                  outlineColor={
                    route.path === presentRoute ? "#8576FF" : "#ADA9BB"
                  }
                  width={20}
                  height={20}
                />
                <p
                  className={` ${collapsed && "hidden"}
                    ${route.path === presentRoute && "text-[#8576FF]"} 
                  `}
                >
                  {route.name}
                </p>

                {route.path === "/notifications" ? (
                  <div
                    className={`${
                      collapsed && "hidden"
                    } flex items-center justify-center ml-auto rounded-full w-6 h-6 px-2 py-1 text-white bg-[#F43F5E] self-end`}
                  >
                    3
                  </div>
                ) : null}
              </div>
            </Link>
          ))}

          <button
            className="hidden lg:flex gap-4 p-2 hover:text-[#8576FF] hover:bg-[#FCF7FF] cursor-pointer"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <div className={`${collapsed && "rotate-180"} transition-all`}>
              <DoubleLeftArrow />
            </div>
            <p className={`${collapsed && "hidden"}`}>Collapse</p>
          </button>

          {/* Dark Mode Toggle */}
          <div className="flex items-center gap-2 px-2 cursor-pointer text-xs">
            <div className="flex items-center p-[2px] max-h-max justify-center bg-[#E2E8F0] rounded-[100px]">
              <input
                className="w-3 h-3 bg-white outline-none border-none transition-all"
                type="radio"
                name="darkmode"
              />
              <input
                className="w-3 h-3 bg-white outline-none border-none transition-all"
                type="radio"
                name="darkmode"
              />
            </div>
            <p className={`${collapsed && "hidden"}`}>Dark mode</p>
          </div>

          {/* Account info */}
          <div className="flex items-center gap-2 px-2 cursor-pointer text-xs">
            <img src={avatar} alt="profile image" className="w-8 h-8" />
            <div className={`${collapsed && "hidden"}`}>
              <p>Rudra Devi</p>
              <p className="text-[#64748B]">rudra.devi@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
