import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import CarouselMenu from "./CarouselMenu";
const images = [
  "./src/assets/imagen-cuba-7.jpg",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const slideVariants = {
  initial: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[url('/src/assets/backgrounds/bg1.jpg')] -z-10">
      <div className="md:px-20 md:py-4  ">
        <div className=" md:rounded-3xl  overflow-hidden flex flex-col justify-center relative shadow-xl z-10">
          <AnimatePresence>
            <motion.img
              className="absolute h-full w-full shadow-black -z-10 object-cover  "
              key={currentIndex}
              src={images[currentIndex]}
              variants={slideVariants}
              initial={"initial"}
              animate="visible"
              exit="exit"
            />
          </AnimatePresence>
          <div className="relative  h-[70vh] bg-[rgba(0,0,0,0.2)] *:rounded-3xl  ">
            <div className="*:absolute *:rounded-full *:bottom-0 *:mb-20 *:sm:mb-40 *:z-10 *:text-white  *:border-[1px] *:p-2 *:transition-all">
              <button
                className=" sm:ml-20 ml-4 left-0 hover:bg-gray-500 "
                onClick={handlePrevious}
              >
                <FaChevronLeft></FaChevronLeft>
              </button>
              <button
                className=" sm:mr-20 mr-4 right-0 hover:bg-gray-500 "
                onClick={handleNext}
              >
                <FaChevronRight></FaChevronRight>
              </button>
            </div>

            <div className="absolute  flex flex-col items-center justify-center gap-10 h-[70%] bottom-0 w-full p-2 mb-20 ">
              <h1 className="text-7xl text-white  font-extrabold ">
                Explore the tropical beauty
              </h1>
              <p className="text-center font-normal font-sans tracking-tight text-white text-2xl ">
                Enim culpa ex occaecat dolor et non culpa irure pariatur.
              </p>
              <button className="bg-green-800 w-fit text-white font-semibold hover:text-white transition-all hover:bg-green-600 rounded-lg px-5 py-3 ">
                Book
              </button>
            </div>
          </div>
          <CarouselMenu className=" w-full h-full "></CarouselMenu>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
