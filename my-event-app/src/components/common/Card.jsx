import React from "react";

function Card({ image, title, date, location }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-96 h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{date}</p>
        <p className="text-gray-700 text-base">{location}</p>
      </div>
    </div>
  );
}

export default Card;
