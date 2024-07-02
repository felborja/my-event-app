import React from "react";

function Card({ image, title, date, location }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default Card;
