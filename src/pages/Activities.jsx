import ActivityCard from "./ActivityCard";

const activities = [
  {
    id: 1,
    name: "Dolore nulla ad ullamco esse excepteur laboris cupidatat dolore ex qui duis sit.",
    imgSrc: "src/assets/imagen-cuba-2.jpg",
    location: "La Habana",
  },
  {
    id: 2,
    name: "Sunt ipsum id laboris reprehenderit mollit.",
    imgSrc: "src/assets/imagen-cuba-3.jpg",
    location: "Trinidad",
  },
  {
    id: 3,
    name: "Consequat nostrud ipsum incididunt excepteur elit ea pariatur ut occaecat.",
    imgSrc: "src/assets/imagen-cuba-4.jpg",
    location: "Santiago de Cuba",
  },
];

const Activities = () => {
  return (
    <section className="flex p-10 gap-10 content-center flex-wrap w-full min-h-screen  justify-around">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          name={activity.name}
          imgSrc={activity.imgSrc}
          location={activity.location}
        />
      ))}
    </section>
  );
};

export default Activities;
