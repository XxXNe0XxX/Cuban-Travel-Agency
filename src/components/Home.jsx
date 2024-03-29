import About from "./About";
import Carousel from "./Carousel";
import TravelExperience from "./TravelExperience";
import VacationSpots from "./VacationSpots";

const Home = () => {
  return (
    <main className="flex flex-col space-y-40 items-around content-around *:min-h-screen ">
      <section className="sm:px-24  py-4">
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
