import React from "react";

function Cards({ item }) {
  return (
    <div className="w-full sm:w-80 md:w-72 lg:w-80 mx-auto">
      <div className="card bg-[#FDE2E4] text-black shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 shadow-xl hover:scale-105">
        <figure className="h-48 w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body flex flex-col">
          <h2 className="card-title text-lg font-semibold flex justify-between items-center">
            {item.name}
            <div className="badge badge-secondary text-sm">{item.category}</div>
          </h2>
          <p className="text-gray-700 mt-1">{item.title}</p>
          <div className="card-actions justify-between mt-auto">
            <div className="badge badge-outline px-2 py-1 rounded-full border-[2px]">
              ${item.price}
            </div>
            <button
              className="px-4 py-2 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-200 font-semibold"
            >
              {item.price > 0 ? "Buy Now" : "Get for Free"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
