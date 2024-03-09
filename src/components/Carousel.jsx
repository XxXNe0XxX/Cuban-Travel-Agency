import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselMenu from "./CarouselMenu";
const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
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

  // const handleDotClick = (index) => {
  //   setCurrentIndex(index);
  // };
  return (
    <div className=" rounded-3xl  overflow-hidden flex flex-col justify-center relative ">
      <div className="relative w-full bg-[rgba(0,0,0,0.3)]  h-[82vh]">
        <AnimatePresence>
          <motion.img
            className="absolute   shadow-black -z-10 object-cover w-full h-full"
            key={currentIndex}
            src={images[currentIndex]}
            variants={slideVariants}
            initial={"initial"}
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>

        <button
          className="absolute rounded-full bottom-0 mb-20 sm:mb-40 sm:ml-20 ml-4  left-0 z-20 bg-transparent backdrop-blur-sm "
          onClick={handlePrevious}
        >
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </button>
        <button
          className="absolute rounded-full bottom-0 mb-20 sm:mb-40 sm:mr-20 mr-4  right-0 z-20 bg-transparent "
          onClick={handleNext}
        >
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </button>

        <div className="absolute  flex flex-col items-center justify-center gap-10 h-[70%] bottom-0 w-full p-2 mb-20 ">
          <h1
            className="text-5xl font-sans
             tracking-wider font-bold"
          >
            Tour
          </h1>
          <p className="text-center font-normal font-sans tracking-wider text-2xl ">
            Enim culpa ex occaecat dolor et non culpa irure pariatur.
          </p>
          <button className="bg-green-500 w-fit text-white font-semibold hover:text-white transition-all hover:bg-green-600 rounded-lg px-5 py-3 ">
            Book
          </button>
        </div>
      </div>
      <CarouselMenu className="bottom-0 w-full absolute"></CarouselMenu>
    </div>
  );
};

export default Carousel;
