import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 text-center text-xl font-bold text-gray-700">
        <h1 className="font-bold mb-4 text-center text-gray-700 text-3xl">
          Settlement Process
        </h1>
        <div className="flex justify-center space-x-4">
          <Link
            to="/party-a"
            target="_blank"
            className="transition duration-200 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 font-bold text-xl"
          >
            Party A
          </Link>
          <Link
            to="/party-b"
            target="_blank"
            className="transition duration-200 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 font-bold text-xl"
          >
            Party B
          </Link>
        </div>
      </div>
    </div>
  );
};
