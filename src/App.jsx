import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Tours from "./pages/Tours";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Visa from "./pages/Visa";
import Blog from "./pages/Blog";
import Transportation from "./pages/Transportation";
import Hotels from "./pages/Hotels";
import Activities from "./pages/Activities";
import TourGuides from "./pages/TourGuides";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="tours" element={<Tours />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="visa" element={<Visa />} />
          <Route path="blog" element={<Blog />} />
          <Route path="transportation" element={<Transportation />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="activities" element={<Activities />} />
          <Route path="tour-guides" element={<TourGuides />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
