import React, { Suspense, lazy } from "react";
import Loading from "./components/Utilities/Loading.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

const Home = lazy(() => import("./components/Home"));
const Tours = lazy(() => import("./pages/Tours"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Visa = lazy(() => import("./pages/Visa"));
const Blog = lazy(() => import("./pages/Blog"));
const Transportation = lazy(() => import("./pages/Transportation"));
const Hotels = lazy(() => import("./pages/Hotels"));
const Activities = lazy(() => import("./pages/Activities"));
const TourGuides = lazy(() => import("./pages/TourGuides"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register.jsx"));
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tours" element={<Tours />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="visa" element={<Visa />} />
            <Route path="blog" element={<Blog />} />
            <Route path="transportation" element={<Transportation />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="activities" element={<Activities />} />
            <Route path="tour-guides" element={<TourGuides />} />
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<Login></Login>} />
            <Route path="register" element={<Register></Register>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
