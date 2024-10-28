import { Chart } from "react-google-charts";
import SummaryCard from "../components/summary-card";
import Carousel from "../components/Carousel";
import EventHistory from "../components/event-history";
import { useEffect, useState } from "react";
import { useDarkMode } from "../context";

const eventSummary = [
  {
    title: "Total Events",
    value: 100000,
    rise: true,
    rate: 5.0,
  },
  {
    title: "Active Speakers",
    value: 25,
    rise: false,
    rate: 5.0,
  },
  {
    title: "Total Registrations",
    value: 300,
    rise: true,
    rate: 5.0,
  },
  {
    title: "Total Revenue",
    value: 500000,
    rise: true,
    rate: 5.0,
  },
];
const DesktopChartData = [
  ["Month", "Number of Events"],
  ["Jan", 700],
  ["Feb", 950],
  ["Mar", 780],
  ["Apr", 420],
  ["May", 1000],
  ["Jun", 540],
  ["Jul", 850],
  ["Aug", 350],
  ["Sep", 860],
  ["Oct", 650],
  ["Nov", 950],
  ["Dec", 600],
];
const MobileChartData = [
  ["Month", "Number of Events"],
  ["Ja", 700],
  ["Fb", 950],
  ["Mr", 780],
  ["Ap", 420],
  ["Ma", 1000],
  ["Jn", 540],
  ["Jl", 850],
  ["Au", 350],
  ["Se", 860],
  ["Oc", 650],
  ["No", 950],
  ["De", 600],
];
const options = {
  legend: "none",
  vAxis: {
    ticks: [0, 200, 400, 600, 800, 1000],
  },
  bar: { groupWidth: "80%" },
};

const HomePage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="lg:mr-6 dark:text-white">
      <div className="mx-5 lg:mx-0">
        <h1 className="text-[17px] md:text-[22px] mt-2">
          Welcome! here’s your summary
        </h1>
        {/* Summary Cards */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:flex-wrap w-full ">
          {eventSummary.map((item, i) => (
            <SummaryCard key={i} prop={item} />
          ))}
        </div>
        {/* Graph and Carousel */}
        <div className="mt-[21px] md:mt-[34px]">
          <h2 className="font-medium text-lg mb-3">
            Event Registrations per month
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[.55fr_.45fr] content-center gap-3 ">
            <div className="flex border border-[#F2F2F7] dark:border-primaryDark dark:bg-primaryDark rounded-md justify-center  overflow-x-scroll">
              <Chart
                chartType="ColumnChart"
                data={screenWidth > 768 ? DesktopChartData : MobileChartData}
                options={{
                  ...options,
                  backgroundColor: isDarkMode ? "#484554" : "#FFF",
                  vAxis: {
                    textStyle: { color: isDarkMode ? "#FFF" : "#64748B" },
                  },
                  hAxis: {
                    textStyle: { color: isDarkMode ? "#FFF" : "#64748B" },
                  },
                  colors: ["#8576FF"],
                }}
                width={screenWidth > 768 ? "570px" : "500px"}
                height={screenWidth > 768 ? "240px" : "260px"}
              />
            </div>
            <Carousel />
          </div>
        </div>
      </div>

      {/* Desktop and Mobile Event Table */}
      <EventHistory />
    </main>
  );
};
export default HomePage;
// 383544
