const CarouselMenu = () => {
  return (
    <nav className=" bg-orange-200 h-14 flex flex-col text-black">
      <ul className="flex justify-around h-full font-bold">
        <li className="w-full">Home</li>
        <li className="w-full">About</li>
        <li className="w-full">Contact</li>
        <button className="bg-green-800 w-full text-white">Search</button>
      </ul>
    </nav>
  );
};
//iiii
export default CarouselMenu;
