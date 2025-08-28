import React from 'react';

function Hero({ darkMode }) {
  return (
    <div
      className={`hero flex flex-col-reverse lg:flex-row items-center transition-colors duration-500 px-6 py-10 ${
        darkMode ? "bg-gray-300" : "bg-pink-100"
      }`}
    >
      {/* Text Section */}
      <div className="flex-1 text-left mt-6 lg:mt-0 lg:mr-6">
        <h1 className="text-4xl sm:text-5xl font-bold py-2 text-black">
          Welcome to <span className="text-pink-500">Bookstore!!!</span>
        </h1>
        <p className="py-2 sm:py-4 w-full sm:w-5/6 lg:w-full text-black">
          Discover a world of knowledge and imagination within these pages.
          Each book offers a unique journey, from timeless classics to modern
          tales, sparking curiosity, creativity, and insight in every reader.
        </p>
        <button className="btn btn-secondary mt-2">Get Started</button>
      </div>

      {/* Hero Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="Booksimage.jpg"
          alt="Hero"
          className="w-full md:w-80 lg:w-96 rounded-lg object-cover shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Hero;
