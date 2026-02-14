import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="w-full max-w-sm overflow-visible">
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 overflow-visible">
        
        {/* Image */}
        <figure className="px-4 pt-4">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-xl w-full h-44 object-cover"
          />
        </figure>

        {/* Body */}
        <div className="card-body p-4 overflow-visible">
          
          {/* Title + Badge (FIXED) */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold leading-tight break-words">
              {item.name}
            </h2>
            <div className="badge badge-secondary w-fit">
              {item.category}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {item.title}
          </p>

          {/* Actions */}
          <div className="card-actions flex justify-between items-center mt-3 overflow-visible">
            <div className="badge badge-outline">${item.price}</div>

            <button
              className="px-4 py-1 border-2 rounded-full
              hover:bg-pink-500 hover:text-white duration-200"
            >
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cards;
