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
    <nav className="*:w-full *:py-1 md:flex-nowrap flex-wrap   bg-black  *:flex gap-[1px] *:justify-center *:items-center flex *:bg-orange-200  *:gap-2">
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
      <button className="group w-full sm:h-16 h-14 last-of-type:bg-green-800 hover:bg-green-600 transition-all   text-white">
        <h1 className="group-hover:w-0  w-20 overflow-hidden transition-all ">
          Search
        </h1>
        <FaSearch className="transition-all "></FaSearch>
      </button>
    </nav>
  );
};

export default SearchBar;
