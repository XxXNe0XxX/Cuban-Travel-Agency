import React from "react";
import { useState } from "react";
const imgs = [
  { src: "./src/assets/imagen-cuba-1.jpg", location: "Santiago de Cuba" },
  { src: "./src/assets/imagen-cuba-2.jpg", location: "Santa Clara" },
  { src: "./src/assets/imagen-cuba-3.jpg", location: "Bayamo" },
  { src: "./src/assets/imagen-cuba-4.jpg", location: "La Habana" },
  { src: "./src/assets/imagen-cuba-5.jpg", location: "Camagüey" },
  { src: "./src/assets/imagen-cuba-6.jpg", location: "Holguín" },
  { src: "./src/assets/imagen-cuba-7.jpg", location: "Guantánamo" },
  { src: "./src/assets/imagen-cuba-8.jpg", location: "Pinar del Río" },
];

const ImageWithPlaceholder = React.memo(({ src, location, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <li className={className}>
      <img
        loading="lazy"
        src={src}
        className={`object-cover w-full h-full group-hover:scale-[105%] duration-500 transition-all    ${
          !isLoaded ? "blur-lg scale-110" : "scale-100"
        }`}
        onLoad={() => setIsLoaded(true)}
        alt={location}
      />
      <span className="absolute z-10 w-full h-full text-white tracking-tight group-hover:bg-[rgba(0,0,0,0.2)] transition-all font-bold text-right text-3xl bottom-0 flex items-end p-2   ">
        {location}
      </span>
    </li>
  );
});

const VacationSpots = () => {
  return (
    <div className="">
      <div className="backdrop-blur-sm">
        <h1 className="text-center font-cursive text-green-800 text-8xl tracking-tighter p-8">
          Make Memories
        </h1>
        <ul className=" *:rounded-3xl gap-4  p-2 *:h-[45vh] w-[80vw] m-auto  grid grid-rows-2 grid-cols-1 sm:grid-cols-9 grid-flow-row-dense ">
          {imgs.map((each, i) => {
            return (
              <ImageWithPlaceholder
                key={i}
                className={`
            ${i === 0 ? "col-span-2 " : ""}
            ${i === 1 ? "col-span-3" : ""}
            ${i === 2 ? "col-span-4" : ""}
            ${i === 3 ? "col-span-6" : ""}
            
            ${i === 4 ? "col-span-3" : ""}
            ${i === 5 ? "col-span-2" : ""} 
            ${i === 6 ? "col-span-3" : ""}
            ${i === 7 ? "col-span-4" : ""}
            
            w-full relative shadow-lg overflow-hidden hover:shadow-2xl   transition-all group h-full rounded-3xl`}
                src={each.src}
                location={each.location}
              ></ImageWithPlaceholder>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default VacationSpots;
