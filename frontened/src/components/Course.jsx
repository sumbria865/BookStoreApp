import { Link } from "react-router-dom";
import React from "react";
import list from "../data/list.json";
import Cards from "./Cards";

function Course({ darkMode }) {
  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex justify-center px-2 py-4 mt-4 text-center">
          We're delighted to have you <span className="text-pink-500">Here! :)</span>
        </h1>
      </div>

      {/* Paragraph */}
      <div className="mt-8 px-2 sm:px-6 md:px-12">
        <p className="text-center text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Explore our wide range of books, e-books, and interactive courses below. 
          Start your learning journey today with curated reading materials, 
          in-depth guides, tutorials, and expert-led lessons designed to help you grow 
          your knowledge, improve your skills, and achieve your educational goals.
        </p>
      </div>

      {/* Back button */}
      <div className="flex justify-center mt-8">
        <Link to="/">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
            Back
          </button>
        </Link>
      </div>

      {/* Cards for courses */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 sm:px-4">
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
