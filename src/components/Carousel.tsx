import image from "../assets/images/Slide.webp";
import image1 from "../assets/images/Slide (1).webp";
import image2 from "../assets/images/Slide (2).webp";
import { useMemo, useState } from "react";
import ChevronLeftIcon from "../assets/icons/chevron-left";
import ChevronRightIcon from "../assets/icons/chevron-right";

const data = [
  {
    image: image,
    title: "Latest News & Updates",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
  {
    image: image1,
    title: "Keep in Touch with Our Latest Updates",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
  {
    image: image2,
    title: "Improve Team Productivity",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
];

export default function Carousel() {
  const [active, setActive] = useState(0);

  const handlePrevious = (i: number) => {
    i !== data.length - 1 ? setActive(i + 1) : setActive(0);
  };
  const handleNext = (i: number) => {
    i !== 0 ? setActive(i - 1) : setActive(data.length - 1);
  };

  const ActivePostData = useMemo(() => {
    return data[active];
  }, [active]);
  return (
    <div className="relative rounded-[5px] overflow-clip">
      {data.map((item, i) => (
        <div
          key={i}
          className={`${i === active ? "block transition-all" : "hidden"}`}
        >
          <img src={item.image} alt="carousel image" />
        </div>
      ))}

      <div className="flex perfect-center p-4 justify-between items-center w-full absolute">
        <button
          className="w-6 h-6 bg-white flex items-center justify-center rounded-full border border-[#E2E8F0]"
          onClick={() => handleNext(active)}
        >
          <ChevronLeftIcon />
        </button>

        <button
          className="w-6 h-6 bg-white flex items-center justify-center rounded-full border border-[#E2E8F0]"
          onClick={() => handlePrevious(active)}
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="bg-gradient-custom px-4 pt-4 pb-[27px] text-xs bottom-0 text-white justify-between items-center w-full absolute">
        <p className="font-semibold mb-2">{ActivePostData.title}</p>
        <p>{ActivePostData.description}</p>

        <div className="flex gap-1 justify-center mt-2">
          {data.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-[3px] rounded-[100px] ${
                i === active ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
