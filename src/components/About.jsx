const images = [
  {
    id: 1,
    src: "/src/assets/imagen-cuba-1.jpg",
    style: " left-20 to6 w-[350px] h-[450px]",
  },
  {
    id: 2,
    src: "/src/assets/imagen-cuba-8.jpg",
    style: "bottom-0 left-0 h-[500px] -z-10 w-[250px]",
  },
  {
    id: 3,
    src: "/src/assets/imagen-cuba-3.jpg",
    style: "top-0 right-16 h-[300px]  w-[500px]",
  },
  {
    id: 4,
    src: "/src/assets/imagen-cuba-4.jpg",

    style: "left-0 -top-6 h-[350px] w-[250px]",
  },
  {
    id: 5,
    src: "/src/assets/imagen-cuba-7.jpg",

    style: "right-0 bottom-5 h-[500px] w-[250px]",
  },
  {
    id: 6,
    src: "/src/assets/imagen-cuba-2.jpg",

    style: "right-0 bottom-5 h-[500px] w-[250px]",
  },
];

const About = () => {
  return (
    <section className="flex  h-screen items-center w-[80vw] m-auto">
      <div className="w-[40%] p-4 flex flex-col leading-8 gap-4  ">
        <h1 className="font-sans text-green-800 tracking-tighter text-6xl ">
          About us
        </h1>
        <h1 className="font-sans text-3xl p-4 tracking-tight ">
          Dolor id reprehenderit incididunt aliquip laboris fugiat elit nulla
          labore.
        </h1>
        <p className="text-lg">
          In voluptate cillum velit sint irure magna tempor culpa dolore ea
          occaecat quis. Aute eiusmod tempor sunt exercitation commodo nulla
          consectetur ullamco. Minim qui elit cillum quis nulla est pariatur
          aliquip non anim. Ad consequat cupidatat consequat eu proident qui ut
        </p>
      </div>
      <div className=" hidden  gap-4 *:border-2 lg:grid grid-rows-12 grid-cols-12  h-[70vh]  w-[60%]  ">
        {images.map((each, i) => {
          return (
            <img
              loading="lazy"
              key={i}
              src={each.src}
              className={`
              ${
                i === 0
                  ? " row-start-3 row-span-5 col-span-3 bg-green-500  shadow-lg shadow-green-500"
                  : i === 1
                  ? " row-start-8 col-start-8 row-span-4 col-span-4 bg-slate-500  shadow-lg shadow-slate-500"
                  : i === 2
                  ? " row-start-2 row-span-3 col-span-3 bg-purple-500  shadow-lg shadow-purple-500"
                  : i === 3
                  ? "row-span-3 col-span-8 bg-orange-500  shadow-lg shadow-orange-500"
                  : i === 4
                  ? " row-span-5 col-span-7 bg-pink-500  shadow-lg shadow-pink-500"
                  : i === 5
                  ? "row-start-1 row-span-4 col-span-4 bg-blue-500  shadow-lg shadow-blue-500"
                  : i === 6
                  ? " row-span-3 col-span-7 bg-yellow-500  shadow-lg shadow-yellow-500"
                  : ""
              }
               rounded-xl w-full h-full object-cover `}
            />
          );
        })}
      </div>
    </section>
  );
};

export default About;
