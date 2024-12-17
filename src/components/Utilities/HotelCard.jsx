import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import the blur effect CSS
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { LuBedDouble, LuBedSingle } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import RatingUtil from "./RatingUtil";

const HotelCard = ({ data }) => {
  const {
    name,
    imgSrc,
    perks,
    price,
    location,
    discount,
    breakfastIncl,
    reviews,
    adults,
    children,
    beds,
  } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div class="max-w-sm bg-slate-100 rounded-md overflow-hidden w-full shadow-lg justify-self-center ">
      <div className="relative flex items-center ">
        <div
          className={`${
            breakfastIncl
              ? "bg-green-600 absolute top-0 left-0 p-2 rounded-md text-md tracking-wider text-white"
              : "hidden"
          }`}
        >
          Breakfast Included
        </div>
        <div className="*:h-full *:w-full *:object-cover   *:transition-all *:duration-700 group-hover:h-full duration-700  transition-all h-80 w-full overflow-hidden">
          <LazyLoadImage src={imgSrc ? imgSrc[currentIndex] : ""} />
        </div>
        <ul className="absolute bottom-4 justify-center z-20 w-full gap-2 flex ">
          {imgSrc
            ? imgSrc.map((each, i) => {
                return (
                  <>
                    <li
                      key={i}
                      className={`${
                        currentIndex === i ? "bg-green-500 transition-all" : ""
                      } h-3 w-3 rounded-full border-2 border-black`}
                      onClick={() => setCurrentIndex(i)}
                    ></li>
                  </>
                );
              })
            : ""}
        </ul>
      </div>
      <div class=" flex flex-col items-start p-2 ">
        <div className="flex justify-between w-full">
          <p className="text-gray-600 text-sm flex gap-1 items-center">
            <RatingUtil rating={reviews}></RatingUtil>
            {reviews} reviews
          </p>
          <p class="text-gray-700 flex items-center gap-1 text-sm">
            <CiLocationOn></CiLocationOn>
            {location}
          </p>
        </div>
        <div class="font-bold text-2xl mb-2 h-12">{name}</div>
      </div>
      <div className="flex items-end ">
        <ul class="grid justify-center  grid-cols-3 text-nowrap grid-rows-5  p-2  w-full grid-flow-dense gap-1 overflow-hidden ">
          {perks.map((each, i) => {
            return (
              <li
                class={`${
                  each.length >= 10
                    ? "col-span-3"
                    : each.length >= 5
                    ? "col-span-2"
                    : ""
                } text-sm rounded-3xl  font-semibold text-center bg-gray-200 h-full content-center `}
              >
                {each}
              </li>
            );
          })}
        </ul>
        <div className="  flex flex-col  items-end text-nowrap px-2">
          <p className="text-sm font-bold  text-gray-400">
            {adults} adults, {children} children
          </p>
          <p className="text-green-600  tracking-tighter font-bold text-3xl">
            ${price}{" "}
            <span className="text-gray-500 font-semibold text-2xl  line-through">
              ${discount}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between p-2 *:font-bold *:text-sm  items-center">
        <div className="flex flex-col justify-end">
          {beds.map((each, i) => {
            return (
              <p className="flex items-center text-gray-700 gap-1">
                {each.includes("King") ? (
                  <LuBedDouble></LuBedDouble>
                ) : each.includes("Queen") ? (
                  <LuBedSingle></LuBedSingle>
                ) : each.includes("Single") ? (
                  <FaBed></FaBed>
                ) : (
                  ""
                )}
                {each}
              </p>
            );
          })}
        </div>
        <button className="bg-green-700 flex items-center gap-2 rounded-lg p-3   font-bold text-white">
          {" "}
          <span className=" text-base">Check Availability</span>
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
