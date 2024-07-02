import React from "react";

function EventDetails() {
  // Dummy data for an event
  const event = {
    image: "event1.jpg",
    title: "Event 1",
    date: "2023-07-01",
    location: "Location 1",
    url: "http://example.com",
    comments: "This is a sample event.",
  };

  return (
    <div className="event-details">
      <img src={event.image} alt={event.title} />
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>
        URL:{" "}
        <a href={event.url} target="_blank" rel="noopener noreferrer">
          {event.url}
        </a>
      </p>
      <p>Comments: {event.comments}</p>
    </div>
  );
}

export default EventDetails;
