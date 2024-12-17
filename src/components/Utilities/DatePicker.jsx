import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Datetime from "react-datetime";
import { FaChevronDown } from "react-icons/fa";

export default function Example() {
  return (
    <div className="w-40 h-8 flex items-center justify-center ">
      <input type="date" className="  rounded-md w-full h-full shadow " />
    </div>
  );
}
