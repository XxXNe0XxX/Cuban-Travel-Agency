import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-900">
      <div className="text-center flex flex-col">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl md:text-3xl font-semibold">Page Not Found</p>
        <p className="mt-2 text-base md:text-lg">
          We can't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
