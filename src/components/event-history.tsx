import ChevronDown from "../assets/icons/chevron-down";
import DownloadIcon from "../assets/icons/downloadIcon";
import SearchIcon from "../assets/icons/searchIcon";
import ThreeDots from "../assets/icons/three-dots";
import { EventHistoryData } from "../assets/Event-history-data";
import { useMemo, useState } from "react";
import ChevronLeftIcon from "../assets/icons/chevron-left";
import ChevronRightIcon from "../assets/icons/chevron-right";
import ChevronRightIcon2 from "../assets/icons/chevron-right2";
import { useDarkMode } from "../context";

const EventHistory = () => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const selectedData = useMemo(
    () =>
      EventHistoryData.slice(paginationIndex * 10, paginationIndex * 10 + 10),
    [paginationIndex]
  );
  const [openCell, setOpenCell] = useState<number | null>(null);

  const { isDarkMode } = useDarkMode();

  return (
    <section className="mt-7 mb-[25px] lg:mb-[64px]">
      <div className="mx-5 lg:mx-0">
        <h2 className="font-medium text-lg mb-[6px]">Events History</h2>

        <div className="block md:flex items-center justify-between text-[#334155]">
          <div className="space-y-2 md:space-y-0 md:flex gap-2 items-center">
            <div className="p-2 flex gap-2 items-center border border-[#E2E8F0] rounded-sm cursor-pointer dark:bg-primaryDark">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search..."
                className="placeholder:text-[#CBD5E1] w-[156px] border-none bg-transparent outline-none dark:text-[#FCF7FF]"
              />
            </div>

            <div className="py-2 px-4 flex gap-2 dark:text-[#FCF7FF] justify-center border border-[#E2E8F0] rounded-sm cursor-pointer dark:bg-primaryDark">
              <p>Date</p>
              <ChevronDown outlineColor={isDarkMode ? "#FCF7FF" : "#334155"} />
            </div>

            <div className="py-2 px-4 flex gap-2 dark:text-[#FCF7FF] items-center justify-center border border-[#E2E8F0] rounded-sm cursor-pointer dark:bg-primaryDark">
              <p>Status</p>
              <ChevronDown outlineColor={isDarkMode ? "#FCF7FF" : "#334155"} />
            </div>

            <div className="py-2 px-4 flex gap-2 dark:text-[#FCF7FF] items-center justify-center border border-[#E2E8F0] rounded-sm cursor-pointer dark:bg-primaryDark">
              <p>Name</p>
              <ChevronDown outlineColor={isDarkMode ? "#FCF7FF" : "#334155"} />
            </div>

            <h3 className="font-semibold pb-[10px] dark:text-[#FCF7FF] lg:mr-[80px] md:pb-0">
              Displaying {EventHistoryData.length} results
            </h3>
          </div>

          <div className="space-y-2 md:space-y-0 dark:text-[#FCF7FF] md:flex gap-2 items-center">
            <div className="flex items-center justify-between">
              <p className="lg:mr-2">Sort:</p>

              <div className="py-2 px-4 flex gap-2 items-center border border-[#E2E8F0] rounded-sm cursor-pointer dark:bg-primaryDark">
                <p>Most Recent</p>
                <ChevronDown
                  outlineColor={isDarkMode ? "#FCF7FF" : "#334155"}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="p-2 border border-[#E2E8F0] rounded-sm cursor-pointer dark:bg-primaryDark lg:mr-2">
                <ThreeDots outlineColor={isDarkMode ? "#FCF7FF" : "#334155"} />
              </div>

              <div className="py-2 px-4 flex gap-2 items-center border border-[#E2E8F0] rounded-sm cursor-pointer dark:bg-primaryDark">
                <DownloadIcon
                  outlineColor={isDarkMode ? "#FCF7FF" : "#334155"}
                />
                <p>Export</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Table --- Desktop  */}
      <table className="w-full text-left my-4">
        <thead className="bg-[#F1F5F9] dark:bg-[#6A6676] dark:text-white text-xs text-[#64748B]">
          <tr>
            <th className="p-4">Event Name</th>
            <th className="hidden md:table-cell p-4">Date</th>
            <th className="hidden md:table-cell p-4">Speaker</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {selectedData.length > 0 ? (
            selectedData.map((event, i) => (
              <tr
                key={i}
                className={`cursor-pointer hover:bg-[#F5F5F5] dark:hover:bg-primaryDark relative text-[15px] ${
                  openCell === i
                    ? "bg-[#F5F5F5] dark:bg-primaryDark pb-14 z-[10]"
                    : "z-[2]"
                }`}
                onClick={() =>
                  openCell !== i ? setOpenCell(i) : setOpenCell(null)
                }
              >
                <td className="px-4 py-[16px] w-[215px] text-nowrap text-ellipsis flex lg:table-cell">
                  <div
                    className={`lg:hidden transition-all ${
                      openCell === i && "rotate-90"
                    }`}
                  >
                    <ChevronRightIcon2 width={24} height={24} />
                  </div>
                  {event.name}
                </td>
                <td className="hidden md:table-cell px-4 py-[16px]">
                  {event.date}
                </td>
                <td className=" hidden md:table-cell px-4 py-[16px]">
                  {event.speaker}
                </td>
                <td className="px-4 py-[16px]">
                  <div
                    className={`flex items-center justify-center px-2 py-1 rounded-[100px] max-w-[100px] text-nowrap ${
                      event.completed
                        ? "bg-[#10B981] lg:bg-[#D1FAE5] dark:lg:bg-transparent dark:lg:border dark:lg:border-[#65DDB5]"
                        : "bg-[#3B82F6] lg:bg-[#DBEAFE] dark:lg:bg-transparent dark:lg:border dark:lg:border-[#77B1FF]"
                    }`}
                  >
                    <span
                      className={`w-[6px] m-[5px] h-[6px] rounded-full hidden lg:inline-block ${
                        event.completed ? "bg-[#10B981]" : "bg-[#3B82F6]"
                      }`}
                    />
                    <p
                      className={`text-xs ml-1 ${
                        event.completed
                          ? "text-white lg:text-[#10B981]"
                          : "text-white lg:text-[#3B82F6]"
                      }`}
                    >
                      {event.completed ? "Completed" : "In Progress"}
                    </p>
                  </div>
                </td>

                <div
                  className={`md:hidden left-0 top-[60px] absolute justify-between p-4  w-full h-[60px] z-[1000] bg-[#F5F5F5] dark:bg-primaryDark ${
                    openCell === i ? "flex mb-[57px]" : "hidden"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <p>{event.speaker}</p>
                  <p className="mr-8">{event.date}</p>
                </div>
              </tr>
            ))
          ) : (
            <tr>
              <p className="mx-auto font-semibold py-3 w-full text-center">
                No Events to display
              </p>
            </tr>
          )}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="flex w-full justify-between text-sm px-5 md:px-0">
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-sm border border-[#E2E8F0] disabled:bg-slate-200"
            onClick={() => {
              setOpenCell(null);
              setPaginationIndex((index) => (index !== 0 ? index - 1 : index));
            }}
            disabled={paginationIndex == 0}
          >
            <ChevronLeftIcon
              outlineColor={isDarkMode ? "#8576FF" : "#64748B"}
            />
          </button>

          {[...Array(3)].map((_, i) => (
            <button
              key={i}
              className={`p-[2px] w-6 h-6 rounded-full flex items-center justify-center ${
                i == 0 ? "bg-[#8576FF] text-white" : ""
              }`}
              onClick={() => {
                setOpenCell(null);
                setPaginationIndex(paginationIndex + i);
              }}
            >
              {paginationIndex + 1 + i}
            </button>
          ))}

          <button
            className="p-2 rounded-sm border border-[#E2E8F0]"
            onClick={() => setPaginationIndex((index) => index + 1)}
            disabled={paginationIndex > 10}
          >
            <ChevronRightIcon
              outlineColor={isDarkMode ? "#8576FF" : "#64748B"}
            />
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <p className="hidden lg:block">Show:</p>

          <div className="py-2 px-2 lg:px-4 text-nowrap flex gap-2 items-center border border-[#E2E8F0] rounded-sm cursor-pointer">
            <p>{Math.ceil(EventHistoryData.length / 10)} Rows</p>
            <ChevronDown />
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventHistory;
