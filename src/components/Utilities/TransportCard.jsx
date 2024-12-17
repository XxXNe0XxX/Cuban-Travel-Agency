import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import the blur effect CSS
import { IoBus } from "react-icons/io5";
import { IoTrain } from "react-icons/io5";
import { IoBicycle } from "react-icons/io5";
import { IoCar } from "react-icons/io5";
import RatingUtil from "./RatingUtil";
const TransportCard = ({ data }) => {
  const {
    name,
    distance_from_center_km,
    transportation,
    review_score,
    imgSrc,
  } = data;

  return (
    <>
      <div className=" group justify-self-center relative min-w-[350px] max-w-[400px] w-full min-h-[500px] bg-white shadow-lg hover:shadow-2xl shadow-gray-400  duration-200 rounded-lg overflow-hidden">
        <div className=" relative overflow-hidden group">
          <div className="*:h-full *:w-full *:object-cover *:rounded-lg  *:transition-all *:duration-700  duration-700 object-cover h-96 w-full overflow-hidden">
            <LazyLoadImage src={imgSrc}></LazyLoadImage>
          </div>
          <h1 className=" absolute   right-0 text-4xl text-white transition-all duration-500 tracking-tighter bottom-8 py-1 px-2 font-cursive">
            {name}
          </h1>
        </div>
        <div className="absolute top-0  flex flex-col *:text-sm font-semibold bg-green-600 text-white text-xl p-1 px-2 ">
          {distance_from_center_km} km
        </div>

        <div className="flex flex-col gap-3  px-2 py-4 text-lg font-semibold">
          <div className="flex items-center justify-between  ">
            <h1>Available transportation:</h1>
            <span className="text-sm text-right">
              <RatingUtil rating={review_score} />
              {review_score}
            </span>
          </div>
          <ul className="flex w-full justify-around *:border *:rounded-md *:p-2 *:text-4xl  text-green-400">
            {transportation.map((each) => {
              return <li>{each}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TransportCard;
