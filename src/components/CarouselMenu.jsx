import { GrMapLocation } from "react-icons/gr";
import { MdOutlineHotel, MdOutlineLocationOn } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { FaListCheck, FaBus } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { IoMdTrain } from "react-icons/io";
import { GoPeople } from "react-icons/go";

import { useState } from "react";
import SearchBar from "./SearchBar";

const CarouselMenu = () => {
  const [show, setShow] = useState("Tour");
  return (
    <nav className="bg-[rgba(0,0,0,0.2)] space-y-[1px] flex flex-col  justify-center content-center text-gray-700  ">
      <ul className=" *:flex *:items-center *:justify-center *:gap-2 h-12 *:p-1 *:w-full w-full flex text-sm sm:w-[50%] gap-[1px]  font-bold m-auto  rounded-t-3xl">
        <button
          className={`transition-all ${
            show === "Tour" ? "bg-green-700 text-gray-100" : "bg-orange-200"
          } rounded-ss-3xl`}
          onClick={() => setShow("Tour")}
        >
          <GrMapLocation className="scale-125"></GrMapLocation>
          <span>Tour</span>
        </button>
        <button
          className={`transition-all ${
            show === "Hotel" ? "bg-green-700 text-gray-100" : "bg-orange-200"
          }`}
          onClick={() => setShow("Hotel")}
        >
          <MdOutlineHotel className="scale-125"></MdOutlineHotel>
          <span>Hotel</span>
        </button>

        <button
          className={`transition-all ${
            show === "Visa" ? "bg-green-700 text-gray-100" : "bg-orange-200"
          }`}
          onClick={() => setShow("Visa")}
        >
          <GrDocumentUser className="scale-125"></GrDocumentUser>
          <span>Visa</span>
        </button>
        <button
          className={`transition-all ${
            show === "Activities"
              ? "bg-green-700 text-gray-100"
              : "bg-orange-200"
          }`}
          onClick={() => setShow("Activities")}
        >
          <FaListCheck className="scale-125"></FaListCheck>
          <span>Activities</span>
        </button>
        <button
          className={`${
            show === "Transport"
              ? "bg-green-700 text-gray-100"
              : "bg-orange-200"
          } rounded-se-3xl`}
          onClick={() => setShow("Transport")}
        >
          <FaBus className="scale-125"></FaBus>
          <span>Transport</span>
        </button>
      </ul>
      <ul>
        <SearchBar show={show}></SearchBar>
      </ul>
    </nav>
  );
};

export default CarouselMenu;
