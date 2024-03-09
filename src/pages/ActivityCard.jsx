const ActivityCard = ({ name, imgSrc, location }) => {
  return (
    <article className="relative w-[450px] h-[600px]  group flex justify-center">
      <div
        className="  overflow-hidden flex justify-center
        bg-white rounded-xl  "
      >
        <img
          className="object-cover group-hover:scale-[105%] duration-500 transition-all "
          src={imgSrc}
        />
      </div>
      <h1 className="absolute text-transparent group-hover:text-white font-cursive text-5xl transition-all duration-500 p-5 top-0 right-0">
        {location}
      </h1>
      <h1 className="absolute group-hover:text-transparent bg-[rgba(0,0,0,0.3)] group-hover:bg-transparent flex items-end h-full transition-all rounded-xl p-3 font-sans font-semibold tracking-wide text-2xl">
        {name}
      </h1>
    </article>
  );
};

export default ActivityCard;
