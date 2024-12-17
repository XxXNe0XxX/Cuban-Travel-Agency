import React, { useState, useEffect } from "react";

const randomClipPath = () => {
  // Generate a random polygon clip-path
  const points = Array.from(
    { length: 250 },
    () => `${Math.random() * 100}% ${Math.random() * 100}%`
  ).join(", ");
  return `polygon(${points})`;
};

const LoadingComponent = () => {
  const [clipPath, setClipPath] = useState(randomClipPath());

  useEffect(() => {
    const interval = setInterval(() => {
      setClipPath(randomClipPath());
    }, 1000); // Change clip-path every 1000 milliseconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <div className=" shadow-lg border-2 shadow-green-500 border-blue-500 h-32 w-32 bg-blue-500 overflow-hidden rounded-full">
        <div
          className={` w-40 h-40 bg-green-500 duration-100 ease-in-out`}
          style={{ clipPath: clipPath }}
        ></div>
      </div>
      <h1 className=" text-black text-xl">
        Loading<span className="animate-pulse">...</span>
      </h1>
    </div>
  );
};

export default LoadingComponent;
