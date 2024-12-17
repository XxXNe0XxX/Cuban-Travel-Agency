import About from "./About";
import Carousel from "./Carousel";
import TravelExperience from "./TravelExperience";
import VacationSpots from "./VacationSpots";

const Home = () => {
  return (
    <main className="flex flex-col  w-screen  *:min-h-screen ">
      <section>
        <Carousel />
      </section>
      <section>
        <About />
      </section>
      <section>
        <VacationSpots></VacationSpots>
      </section>
      <section>
        <TravelExperience></TravelExperience>
      </section>
    </main>
  );
};

export default Home;
