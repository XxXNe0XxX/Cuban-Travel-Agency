const images = [
  {
    id: 1,
    src: "/src/assets/imagen-cuba-1.jpg",
    style: " left-20 top-16 w-[350px] h-[450px]",
  },
  {
    id: 2,
    src: "/src/assets/imagen-cuba-5.jpg",
    style: "bottom-0 left-0 h-[200px] -z-10 w-[250px]",
  },
  {
    id: 3,
    src: "/src/assets/imagen-cuba-6.jpg",
    style: "top-0 right-16 h-[300px]  w-[200px]",
  },
  {
    id: 4,
    src: "/src/assets/imagen-cuba-8.jpg",

    style: "left-0 top-0 h-[350px] w-[250px]",
  },
  {
    id: 5,
    src: "/src/assets/imagen-cuba-7.jpg",

    style: "right-0 bottom-0 h-[200px] w-[250px]",
  },
];

const About = () => {
  return (
    <section className="flex m-auto h-screen justify-around gap-4 p-3 items-center  w-full">
      <div className="w-[600px] flex flex-col leading-8 gap-4  ">
        <h1 className="font-sans text-5xl">About us</h1>
        <h1 className="font-sans text-3xl ">
          Dolor id reprehenderit incididunt aliquip laboris fugiat elit nulla
          labore.
        </h1>
        <p>
          In voluptate cillum velit sint irure magna tempor culpa dolore ea
          occaecat quis. Aute eiusmod tempor sunt exercitation commodo nulla
          consectetur ullamco. Minim qui elit cillum quis nulla est pariatur
          aliquip non anim. Ad consequat cupidatat consequat eu proident qui ut
        </p>
      </div>
      <div className="relative  overflow-hidden hidden lg:grid rounded-2xl h-[600px]  w-[600px]">
        {images.map((each) => {
          return (
            <img
              src={each.src}
              className={`absolute rounded-xl shadow-[0_0_20px_10px_rgba(0,0,0,0.1)] object-cover ${each.style}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default About;
