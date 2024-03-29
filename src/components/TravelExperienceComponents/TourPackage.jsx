import CustomCard from "../Utilities/CustomCard";

const data = [
  {
    id: 0,
    imgSrc: "./src/assets/imagen-cuba-1.jpg",
    discount: "3000",
    price: "2,898",
    days: 3,
    nights: 2,
    tour: ["Bayamo", "Santa Clara"],
  },
  {
    id: 1,
    imgSrc: "./src/assets/imagen-cuba-2.jpg",
    discount: "4500",
    price: "3,499",
    days: 4,
    nights: 3,
    tour: ["Havana", "Trinidad", "Cienfuegos"],
  },
  {
    id: 2,
    imgSrc: "./src/assets/imagen-cuba-3.jpg",
    discount: "5000",
    price: "4,799",
    days: 7,
    nights: 6,
    tour: ["Varadero", "Cienfuegos", "Camagüey", "Holguín", "Santiago "],
  },
  {
    id: 3,
    imgSrc: "./src/assets/imagen-cuba-4.jpg",
    discount: "7500",
    price: "6,999",
    days: 10,
    nights: 9,
    tour: [
      "Havana",
      "Viñales",
      "Cienfuegos",
      "Trinidad",
      "Holguín",
      "Santiago ",
    ],
  },
  {
    id: 4,
    imgSrc: "./src/assets/imagen-cuba-5.jpg",
    discount: "12000",
    price: "9,499",
    days: 14,
    nights: 13,
    tour: [
      "Havana",
      "Viñales",
      "Cienfuegos",
      "Trinidad",
      "Camagüey",
      "Holguín",
      "Santiago ",
      "Baracoa",
    ],
  },
  {
    id: 5,
    imgSrc: "./src/assets/imagen-cuba-6.jpg",

    discount: "4100",
    price: "3,699",
    days: 5,
    nights: 4,
    tour: ["Havana", "Viñales", "Trinidad", "Cienfuegos"],
  },
  {
    id: 6,
    imgSrc: "./src/assets/imagen-cuba-7.jpg",

    discount: "5500",
    price: "4,999",
    days: 8,
    nights: 7,
    tour: ["Havana", "Viñales", "Cienfuegos", "Trinidad", "Santiago"],
  },
  {
    id: 7,
    imgSrc: "./src/assets/imagen-cuba-8.jpg",
    discount: "8200",
    price: "7,999",
    days: 12,
    nights: 11,
    tour: [
      "Havana",
      "Viñales",
      "Cienfuegos",
      "Trinidad",
      "Camagüey",
      "Holguín",
      "Santiago",
    ],
  },
];

const TourPackage = () => {
  return (
    <section className="grid grid-rows-2 grid-cols-4 gap-8  ">
      {data.map((each) => {
        return <CustomCard key={each.id} data={each}></CustomCard>;
      })}
    </section>
  );
};

export default TourPackage;
