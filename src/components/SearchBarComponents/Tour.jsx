import { GrMapLocation } from "react-icons/gr";
import {
  MdOfflineBolt,
  MdOutlineHotel,
  MdOutlineLocationOn,
} from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { FaListCheck, FaBus } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { IoMdTrain } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { Listbox, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DatePicker from "../Utilities/DatePicker";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Select from "../Utilities/Select";
import ListAndSearch from "../Utilities/ListAndSearch";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export default function Tour() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <>
      <div className="">
        <MdOutlineLocationOn className="scale-150  text-green-600"></MdOutlineLocationOn>
        <div className="flex flex-col">
          <span className=" text-sm font-medium text-gray-500">
            Destination
          </span>
          <Select></Select>
        </div>
      </div>
      <div>
        <FaBus className="scale-150  text-green-600"> </FaBus>
        <div className="flex flex-col ">
          <span className=" text-sm font-medium text-gray-500">Tour Type</span>
          <Select></Select>
        </div>
      </div>
      <div>
        <LuCalendarClock className="scale-150 text-green-600">
          {" "}
        </LuCalendarClock>
        <div className="flex flex-col ">
          <span className=" text-sm font-medium text-gray-500">When</span>
          <DatePicker></DatePicker>
        </div>
      </div>
      <div>
        <FaBus className="scale-150 text-green-600"> </FaBus>
        <div className="flex flex-col ">
          <span className=" text-sm font-medium text-gray-500">
            Tour Category
          </span>
          <Select></Select>
        </div>
      </div>
    </>
  );
}
