import HotelCard from "../Utilities/HotelCard";
const data = [
  {
    id: 0,
    name: "Ipsum lorem ipsum dolor sit",
    imgSrc: [
      "./src/assets/imgHotel/hotel-1.jpg",
      "./src/assets/imgHotel/hotel-2.jpg",
    ],
    perks: ["spa", "pool", "gym", "locker", "restaurant", "parking"],
    price: 300,
    location: "Santa Clara",
    discount: 400,
    breakfastIncl: true,
    reviews: 4.7,
    adults: 2,
    children: 1,
    beds: ["King Size", "Queen Size"],
  },
  {
    id: 1,
    name: "Luxury Beach Resort",
    imgSrc: ["./src/assets/imgHotel/hotel-2.jpg"],
    perks: [
      "private beach access",
      "pool",
      "spa",
      "gourmet dining",
      "fitness center",
      "concierge service",
    ],
    price: 600,
    location: "Varadero",
    discount: 800,
    breakfastIncl: true,
    reviews: 4.9,
    adults: 2,
    children: 0,
    beds: ["King Size", "King Size"],
  },
  {
    id: 2,
    name: "Colonial Charm Inn",
    imgSrc: [
      "./src/assets/imgHotel/hotel-3.jpg",
      "./src/assets/imgHotel/hotel-4.jpg",
    ],
    perks: [
      "historic ambiance",
      "courtyard garden",
      "complimentary breakfast",
      "Wi-Fi",
      "concierge service",
    ],
    price: 250,
    location: "Havana",
    discount: 300,
    breakfastIncl: true,
    reviews: 4.6,
    adults: 2,
    children: 0,
    beds: ["Queen Size"],
  },
  {
    id: 3,
    name: "Mountain Retreat Lodge",
    imgSrc: [
      "./src/assets/imgHotel/hotel-5.jpg",
      "./src/assets/imgHotel/hotel-6.jpg",
    ],
    perks: [
      "scenic mountain views",
      "hiking trails",
      "restaurant",
      "outdoor pool",
      "fitness center",
    ],
    price: 200,
    location: "Vinales",
    discount: 250,
    breakfastIncl: false,
    reviews: 4.5,
    adults: 2,
    children: 0,
    beds: ["Queen Size", "Single"],
  },
  {
    id: 4,
    name: "City Center Boutique Hotel",
    imgSrc: ["./src/assets/imgHotel/hotel-7.jpg"],
    perks: [
      "central location",
      "modern design",
      "rooftop terrace",
      "bar",
      "24-hour reception",
    ],
    price: 180,
    location: "Havana",
    discount: 200,
    breakfastIncl: false,
    reviews: 4.8,
    adults: 2,
    children: 0,
    beds: ["King Size"],
  },
];
const Hotel = () => {
  return (
    <div className="grid grid-cols-4 gap-12 grid-rows-2 grid-flow-dense">
      {data.map((each, i) => {
        return <HotelCard key={data.id} data={each}></HotelCard>;
      })}
    </div>
  );
};

export default Hotel;
