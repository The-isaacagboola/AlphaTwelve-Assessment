import ArrowUpRight from "../assets/icons/arrowUpRight";
import InfoIcon from "../assets/icons/infoIcon";

type innerProp = {
  title: string;
  value: number;
  rise: boolean;
  rate: number;
};
type SummardCardProps = {
  prop: innerProp;
};

export default function SummaryCard(props: SummardCardProps) {
  return (
    <div className="w-full dark:bg-primaryDark md:w-[260px] border border-[#F2F2F7] dark:border-deepestBg p-4 rounded-sm cursor-pointer">
      <div className="flex items-center gap-1">
        <p className="text-[#64748B] dark:text-white">{props.prop.title}</p>
        <InfoIcon />
      </div>
      <div className="flex items-center gap-1">
        <h2 className="font-semibold text-[#334155] dark:text-white text-xl">
          {props.prop.title === "Total Revenue" ? "$" : ""}
          {props.prop.value.toLocaleString()}
        </h2>
        <div
          className={`max-h-max flex items-center justify-center${
            props.prop.rise === false ? "rotate-90" : ""
          }`}
        >
          <ArrowUpRight
            outlineColor={props.prop.rise ? "#10B981" : "#F43F5E"}
          />
        </div>
        <p
          className={`text-[10px] font-semibold ${
            props.prop.rise ? "text-[#10B981]" : "text-[#F43F5E]"
          }`}
        >
          {props.prop.rise ? "+" : "-"}
          {props.prop.rate}%
        </p>
      </div>
    </div>
  );
}
