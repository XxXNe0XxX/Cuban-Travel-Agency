import { useState } from "react";
import Tour from "./SearchBarComponents/Tour";
import Hotel from "./SearchBarComponents/Hotel";
import Visa from "./SearchBarComponents/Visa";
import Activities from "./SearchBarComponents/Activities";
import Transport from "./SearchBarComponents/Transport";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = ({ show }) => {
  const [tour, setTour] = useState("");
  const [hotel, setHotel] = useState("");
  const [visa, setVisa] = useState("");
  const [activities, setActivities] = useState("");
  const [transport, setTransport] = useState("");

  return (
    <nav className=" *:py-2  flex-wrap   bg-black *:px-2  *:flex gap-[1px] *:flex-grow *:justify-center *:items-center flex *:bg-orange-200  *:gap-2">
      {show === "Tour" ? (
        <Tour className="" setTour={setTour}></Tour>
      ) : show === "Hotel" ? (
        <Hotel setHotel={setHotel}></Hotel>
      ) : show === "Visa" ? (
        <Visa setVisa={setVisa}></Visa>
      ) : show === "Activities" ? (
        <Activities setActivities={setActivities}></Activities>
      ) : show === "Transport" ? (
        <Transport setTransport={setTransport}></Transport>
      ) : (
        "No Results Found"
      )}

      <button className="group-hover:w-0 !bg-green-700 text-white transition-all hover:bg-green-500 min-h-12 ">
        <span className=" transition-all  ">Search</span>
        <FaSearch className="transition-all "></FaSearch>
      </button>
    </nav>
  );
};

export default SearchBar;
