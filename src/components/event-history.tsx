import ChevronDown from "../assets/icons/chevron-down";
import DownloadIcon from "../assets/icons/downloadIcon";
import SearchIcon from "../assets/icons/searchIcon";
import ThreeDots from "../assets/icons/three-dots";

const EventHistoryData = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    completed: true,
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    completed: false,
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    completed: true,
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "Jane Doe",
    completed: true,
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    completed: true,
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    completed: true,
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    completed: false,
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    completed: true,
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    completed: false,
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    completed: false,
  },
];

const EventHistory = () => {
  return (
    <section className="mt-7">
      <h2 className="font-medium text-lg mb-[6px]">Events History</h2>

      <div className="md:flex items-center justify-between text-[#334155]">
        <div className="flex gap-2 items-center">
          <div className="p-2 flex gap-2 items-center border border-[#E2E8F0] rounded-sm cursor-pointer">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search..."
              className="placeholder:text-[#CBD5E1] w-[156px] border-none outline-none"
            />
          </div>

          <div className="py-2 px-4 flex gap-2 items-center border border-[#E2E8F0] rounded-sm cursor-pointer">
            <p>Date</p>
            <ChevronDown />
          </div>

          <div className="py-2 px-4 flex gap-2 items-center border border-[#E2E8F0] rounded-sm cursor-pointer">
            <p>Status</p>
            <ChevronDown />
          </div>

          <div className="py-2 px-4 flex gap-2 items-center border border-[#E2E8F0] rounded-sm cursor-pointer">
            <p>Name</p>
            <ChevronDown />
          </div>

          <h3 className="font-semibold">Displaying 100 results</h3>
        </div>

        <div className="flex gap-2 items-center">
          <p>Sort:</p>

          <div className="py-2 px-4 flex gap-2 items-center border border-[#E2E8F0] rounded-sm cursor-pointer">
            <p>Most Recent</p>
            <ChevronDown />
          </div>

          <div className="p-2 border border-[#E2E8F0] rounded-sm cursor-pointer">
            <ThreeDots />
          </div>

          <div className="py-2 px-4 flex gap-2 items-center border border-[#E2E8F0] rounded-sm cursor-pointer">
            <DownloadIcon />
            <p>Most Recent</p>
          </div>
        </div>
      </div>

      {/* Events Table --- Desktop  */}
      <table className="w-full text-left mt-4">
        <thead className="bg-[#F1F5F9] text-xs text-[#64748B]">
          <tr>
            <th className="p-4">Event Name</th>
            <th className="p-4">Date</th>
            <th className="p-4">Speaker</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
      </table>
    </section>
  );
};
export default EventHistory;
