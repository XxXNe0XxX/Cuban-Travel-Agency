import TransportCard from "../Utilities/TransportCard";
import { IoBus } from "react-icons/io5";
import { IoTrain } from "react-icons/io5";
import { IoBicycle } from "react-icons/io5";
import { IoCar } from "react-icons/io5";
const data = [
  {
    name: "Havana",
    distance_from_center_km: 360,
    transportation: [<IoCar />, <IoBicycle />, <IoBus />, <IoTrain />],
    review_score: 4.8,
    imgSrc: "./src/assets/imagen-cuba-1.jpg",
  },
  {
    name: "Santiago de Cuba",
    distance_from_center_km: 860,
    transportation: [<IoCar />, <IoBicycle />, <IoBus />, <IoTrain />],

    review_score: 4.6,
    imgSrc: "./src/assets/imagen-cuba-2.jpg",
  },
  {
    name: "Camagüey",
    distance_from_center_km: 540,
    transportation: [<IoCar />, <IoBicycle />, <IoBus />, <IoTrain />],

    review_score: 4.5,
    imgSrc: "./src/assets/imagen-cuba-3.jpg",
  },
  {
    name: "Holguín",
    distance_from_center_km: 750,
    transportation: [<IoCar />, <IoBicycle />, <IoBus />, <IoTrain />],

    review_score: 4.4,
    imgSrc: "./src/assets/imagen-cuba-4.jpg",
  },
  {
    name: "Santa Clara",
    distance_from_center_km: 280,
    transportation: [<IoCar />, <IoBicycle />, <IoBus />, <IoTrain />],

    review_score: 4.7,
    imgSrc: "./src/assets/imagen-cuba-5.jpg",
  },
  {
    name: "Cienfuegos",
    distance_from_center_km: 300,
    transportation: [<IoCar />, <IoBicycle />, <IoBus />, <IoTrain />],

    review_score: 4.6,
    imgSrc: "./src/assets/imagen-cuba-6.jpg",
  },
];
const Transport = () => {
  return (
    <section className="flex flex-wrap justify-center gap-8  ">
      {data.map((each) => {
        return <TransportCard key={each.id} data={each}></TransportCard>;
      })}
    </section>
  );
};

export default Transport;
