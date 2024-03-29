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
    <nav className=" *:flex *:gap-3 *:justify-center *:items-center  flex space-x-[1px] *:w-full sm:h-20  h-14  *:bg-orange-200 font-bold">
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
      <button className=" last-of-type:bg-green-700 text-white">
        Search<FaSearch></FaSearch>
      </button>
    </nav>
  );
};

export default SearchBar;
