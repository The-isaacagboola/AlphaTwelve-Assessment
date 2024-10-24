import { Chart } from "react-google-charts";
import SummaryCard from "../components/summary-card";
import Carousel from "../components/Carousel";
import EventHistory from "../components/event-history";

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
const ChartData = [
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
const options = {
  legend: "none",
  vAxis: {
    ticks: [0, 200, 400, 600, 800, 1000],
  },
  bar: { groupWidth: "80%" },
};

const HomePage = () => {
  return (
    <main>
      <h1 className="text-[22px]">Welcome! here’s your summary</h1>
      {/* Summary Cards */}
      <div className="mt-6 flex gap-3">
        {eventSummary.map((item, i) => (
          <SummaryCard key={i} prop={item} />
        ))}
      </div>
      {/* Graph and Carousel */}
      <div className="mt-[21px] md:mt-[34px]">
        <h2 className="font-medium text-lg mb-3">
          Event Registrations per month
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <div className="flex items-center border border-[#F2F2F7] rounded-md justify-center lg:p-[20px] max-w-[554px]">
            <Chart
              chartType="ColumnChart"
              data={ChartData}
              options={options}
              width="570px"
              height="240px"
            />
          </div>
          <Carousel />
        </div>
      </div>

      {/* Event Table */}
      <EventHistory />
    </main>
  );
};
export default HomePage;
