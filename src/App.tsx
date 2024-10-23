import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import EventPage from "./pages/events";
import SpeakersPage from "./pages/speakers";
import ReportsPage from "./pages/reports";
import NotificationsPage from "./pages/notifications";
import MessagesPage from "./pages/Messages";
import { Nav } from "./components/nav";
import SettingsPage from "./pages/settings";

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
  return (
    <BrowserRouter>
      <div className="md:flex max-w-[1440px]">
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
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
