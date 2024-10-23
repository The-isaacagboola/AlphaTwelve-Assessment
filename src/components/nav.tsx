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
import { useState } from "react";

const routes = [
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

  return (
    <nav className="p-2 max-w-[240px] md:h-[1024px] border-r border-r-[#F1F5F9]">
      <div>
        <div className="p-2 max-w-max mb-4">
          <h1 className="text-[#2563EB] border border-[#2563EB] bg-[#93C5FD] border-dashed px-[6px] py-2 text-xs font-semibold cursor-pointer">
            Full Logo
          </h1>
        </div>

        <div className="text-[#334155] text-[14px] flex flex-col gap-2">
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
                  className={
                    route.path === presentRoute ? "text-[#8576FF]" : ""
                  }
                >
                  {route.name}
                </p>

                {route.path === "/notifications" ? (
                  <div className="flex items-center justify-center ml-auto rounded-full w-6 h-6 px-2 py-1 text-white bg-[#F43F5E] self-end">
                    3
                  </div>
                ) : null}
              </div>
            </Link>
          ))}

          <div className="flex gap-4 p-2 hover:text-[#8576FF] hover:bg-[#FCF7FF] cursor-pointer">
            <DoubleLeftArrow />
            <p>Collapse</p>
          </div>

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
            <p>Dark mode</p>
          </div>

          {/* Account info */}
          <div className="flex items-center gap-2 px-2 cursor-pointer text-xs">
            <img src={avatar} alt="profile image" className="w-8 h-8" />
            <div>
              <p>Rudra Devi</p>
              <p className="text-[#64748B]">rudra.devi@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
