import { Outlet } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loading from "./Utilities/Loading.jsx";
import Nav from "./Nav";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div className=" max-w-screen ">
      <Nav />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
