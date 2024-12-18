import React, { useState } from "react";
import { motion } from "framer-motion";
import { GrMapLocation, GrDocumentUser } from "react-icons/gr";
import { MdOutlineHotel } from "react-icons/md";
import { FaListCheck, FaBus } from "react-icons/fa6";
import SearchBar from "./SearchBar";

const navItems = [
  { key: "Tour", label: "Tour", icon: <GrMapLocation className="scale-125" /> },
  {
    key: "Hotel",
    label: "Hotel",
    icon: <MdOutlineHotel className="scale-125" />,
  },
  {
    key: "Visa",
    label: "Visa",
    icon: <GrDocumentUser className="scale-125" />,
  },
  {
    key: "Activities",
    label: "Activities",
    icon: <FaListCheck className="scale-125" />,
  },
  {
    key: "Transport",
    label: "Transport",
    icon: <FaBus className="scale-125" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const CarouselMenu = React.memo(() => {
  const [show, setShow] = useState("Tour");

  return (
    <motion.nav
      className="bg-[rgba(0,0,0,0.2)] text-gray-700 flex flex-col justify-center items-center   "
      aria-label="Main Navigation"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.ul
        role="tablist"
        className="flex flex-row gap-px mb-[1px] w-full sm:w-1/2 rounded-t-3xl "
      >
        {navItems.map((item, index) => {
          const isActive = show === item.key;
          return (
            <motion.li
              key={item.key}
              role="tab"
              aria-selected={isActive}
              className="flex-1 items-center justify-center "
              variants={itemVariants}
            >
              <button
                className={`w-full p-2 flex flex-col items-center justify-center font-bold transition-colors duration-300 
                  ${
                    isActive
                      ? "bg-green-700 text-gray-100"
                      : "bg-orange-200 text-gray-700"
                  }
                  ${index === 0 ? "rounded-ss-3xl" : ""}
                  ${index === navItems.length - 1 ? "rounded-se-3xl" : ""}
                  hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500`}
                onClick={() => setShow(item.key)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </motion.li>
          );
        })}
      </motion.ul>
      <motion.div
        className="w-full  "
        key={show}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <SearchBar show={show} />
      </motion.div>
    </motion.nav>
  );
});

export default CarouselMenu;
