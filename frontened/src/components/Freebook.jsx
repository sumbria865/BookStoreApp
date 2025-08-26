import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import list from "../data/list.json";

function Freebook() {
  const filterData = list.filter(item => item.category === "Free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true, centerMode: true, centerPadding: "20px" }
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-pink-100 flex flex-col px-2 sm:px-6 md:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col mb-6">
        <h1 className="text-3xl font-bold text-black m-2 lg:m-4 leading-snug text-center">
          Free Courses Offered
        </h1>
        <p className="text-black text-lg m-2 lg:m-4 max-w-5xl text-center mx-auto pl-2 sm:pl-4">
          Explore a variety of free courses available for learners of all levels. 
          Each course is designed to provide valuable knowledge and practical skills.
        </p>
      </div>

      {/* Slider */}
      <div className="w-full bg-pink-100">
        <Slider {...settings}>
          {filterData.map((item) => (
            <div key={item.id} className="px-2 sm:px-3 bg-transparent">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
