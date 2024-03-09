import About from "./About";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <main className="flex flex-col items-around content-around ">
      <section className="sm:px-24  py-4">
        <Carousel />
      </section>

      <About />
    </main>
  );
};

export default Home;
