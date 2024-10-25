import { Link } from "react-router-dom";
import { routes } from "./nav";

export const MobileNavFooter = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="md:hidden flex max-w-[375px] mx-auto w-full items-center justify-between px-4 gap-2 mt-[25px]  mb-[34px] border-t border-[#F3F4F6]">
      {routes.slice(0, 4).map((item, i) => (
        <Link
          to={item.path}
          key={i}
          className="h-[64px] flex flex-col gap-2 items-center justify-center"
        >
          {<item.icon width={24} height={24} outlineColor="#484554" />}
          <p
            className={`${
              item.path === currentPath ? "text-[#8576FF]" : "text-[#64748B]"
            }`}
          >
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};
