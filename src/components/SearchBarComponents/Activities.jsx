import { LuCalendarClock } from "react-icons/lu";
import DatePicker from "../Utilities/DatePicker";

const Activities = () => {
  return (
    <div>
      <LuCalendarClock className="scale-150"></LuCalendarClock>
      <div className="flex flex-col justify-start">
        <span className=" text-sm font-medium text-gray-500">Activity Day</span>
        <DatePicker></DatePicker>
      </div>
    </div>
  );
};

export default Activities;
