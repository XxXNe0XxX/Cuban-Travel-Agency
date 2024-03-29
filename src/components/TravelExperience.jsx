import { useState } from "react";
import TourPackage from "./TravelExperienceComponents/TourPackage";
import Hotel from "./TravelExperienceComponents/Hotel";
import Transport from "./TravelExperienceComponents/Transport";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdHotel } from "react-icons/md";
import { RiBus2Line } from "react-icons/ri";

const TravelExperience = () => {
  const [active, setActive] = useState("Tour Package");
  return (
    <>
      <h1 className="font-medium text-6xl  text-green-800 tracking-tight text-center">
        Travel Experience
      </h1>
      <ul className="flex *:p-3  justify-around *:rounded-3xl *:justify-center  *:flex *:items-center *:text-lg    *:gap-2 *:text-center *:w-full text-nowrap  w-[30%] m-auto p-6 my-4 gap-4 *:cursor-pointer ">
        <li
          className={`border-white ${
            active === "Tour Package"
              ? "text-green-500 border-green-500   shadow-inner shadow-gray-300 transition-all"
              : ""
          } `}
          onClick={() => setActive("Tour Package")}
        >
          <FaMapLocationDot className="scale-125"></FaMapLocationDot>
          Tours
        </li>
        <li
          className={`border-white ${
            active === "Hotel"
              ? "text-green-500 border-green-500 shadow-inner shadow-gray-300 transition-all"
              : ""
          } `}
          onClick={() => setActive("Hotel")}
        >
          <MdHotel className="scale-125"></MdHotel>
          Hotel
        </li>
        <li
          className={`border-white ${
            active === "Transport"
              ? "text-green-500 border-green-500   shadow-inner shadow-gray-300 transition-all"
              : ""
          } `}
          onClick={() => setActive("Transport")}
        >
          <RiBus2Line className="scale-125"></RiBus2Line>
          Transport
        </li>
      </ul>
      <div className="grid w-[80vw] m-auto  ">
        {active === "Tour Package" ? (
          <>
            <TourPackage></TourPackage>
          </>
        ) : active === "Hotel" ? (
          <>
            <Hotel></Hotel>
          </>
        ) : active === "Transport" ? (
          <>
            <Transport></Transport>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TravelExperience;
