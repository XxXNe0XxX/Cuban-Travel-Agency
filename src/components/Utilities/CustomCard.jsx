import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import the blur effect CSS

const CustomCard = ({ data }) => {
  const { imgSrc, days, nights, price, discount, tour } = data;
  return (
    <div className=" group justify-self-center relative min-w-[350px] max-w-[400px] w-full min-h-[500px] bg-white shadow-lg hover:shadow-2xl shadow-gray-400 transition-all duration-200 rounded-lg overflow-hidden">
      <div className=" relative h-96">
        <div className="*:h-full  *:w-full *:object-cover *:rounded-lg *:group-hover:rounded-none *:transition-all *:duration-700 group-hover:rounded-none group-hover:p-0 group-hover:h-full duration-700  p-3 transition-all rounded-3xl object-cover h-80 w-full overflow-hidden">
          <LazyLoadImage src={imgSrc}></LazyLoadImage>
        </div>
        <h1 className="group-hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] absolute bottom-0 group-hover:bottom-10 group-hover:text-4xl group-hover:text-white transition-all duration-500 font-bold tracking-tighter text-2xl py-1 px-2">
          Lorem ipsum dolor sit amet consectetur
        </h1>
      </div>
      <div className="absolute top-8 left-0 flex flex-col gap-2 *:p-1 w-[40%] *:text-sm font-bold  ">
        <span
          style={{ clipPath: "polygon(0 0, 100% 0%, 90% 100%, 0% 100%)" }}
          className="bg-black text-white"
        >
          {days + " days / " + nights + " nights"}
        </span>

        <ul className="bg-gray-100 h-8  text-gray-700 overflow-hidden">
          <motion.div
            className="flex w-full gap-2 "
            initial={tour > 2 ? { x: -100 } : { x: 0 }} // Start from the left
            animate={
              tour.length > 2
                ? {
                    x: [0, -200, 0], // Animate to the right and back to the left
                  }
                : {
                    x: [0, 0, 0], // Animate to the right and back to the left
                  }
            }
            transition={{
              type: "tween",
              ease: "easeInOut",
              repeat: Infinity, // Repeat the animation indefinitely
              repeatType: "reverse", // Reverse the animation direction each time
              repeatDelay: 1, // Delay before repeating
              duration: 10, // Duration of the animation
            }}
          >
            {tour.map((each, i) => {
              return (
                <li className="" key={i}>
                  {each}
                </li>
              );
            })}
          </motion.div>
        </ul>
      </div>

      <div className="h-[1px] w-[90%] mx-auto bg-gray-500 my-3"></div>
      <div className="flex justify-between items-center px-2 py-1">
        <div>
          <h1>Starting from:</h1>
          <p className="text-2xl font-bold tracking-tighter text-green-600">
            ${price}{" "}
            <span className=" text-gray-500 line-through"> ${discount}</span>
          </p>
          <p className="text-gray-500 text-sm font-bold">Taxes incl/pers</p>
        </div>
        <button className="bg-green-700 hover:bg-green-500 transition-all flex items-center rounded-3xl text-white p-3 gap-2">
          Book a trip{" "}
          <MdOutlineAirplanemodeActive className="scale-125"></MdOutlineAirplanemodeActive>
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
