import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDarkMode } from "./context";
import "./App.css";
import HomePage from "./pages/home";
import EventPage from "./pages/events";
import SpeakersPage from "./pages/speakers";
import ReportsPage from "./pages/reports";
import NotificationsPage from "./pages/notifications";
import MessagesPage from "./pages/Messages";
import { Nav } from "./components/nav";
import SettingsPage from "./pages/settings";
import { MobileNavFooter } from "./components/MobileNavFooter";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/Events", element: <EventPage /> },
  { path: "/Speakers", element: <SpeakersPage /> },
  { path: "/Reports", element: <ReportsPage /> },
  { path: "/Notifications", element: <NotificationsPage /> },
  { path: "/Messages", element: <MessagesPage /> },
  { path: "/Settings", element: <SettingsPage /> },
];
function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <BrowserRouter>
      <div
        className={`md:flex  w-full dark:bg-deepestBg ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <Nav />
        <section className="md:ml-[28px] md:mt-[40px]">
          <Routes>
            {routes.map((routeItem, i) => (
              <Route
                key={i}
                path={routeItem.path}
                element={routeItem.element}
              />
            ))}
          </Routes>
          <MobileNavFooter />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
