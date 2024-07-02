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
    <div className="event-details mt-4">
      <img src={event.image} alt={event.title} className="rounded shadow-lg" />
      <h2 className="text-2xl mt-4 mb-2">{event.title}</h2>
      <p className="text-gray-700 mb-2">Date: {event.date}</p>
      <p className="text-gray-700 mb-2">Location: {event.location}</p>
      <p className="text-blue-500 hover:underline">
        URL:{" "}
        <a href={event.url} target="_blank" rel="noopener noreferrer">
          {event.url}
        </a>
      </p>
      <p className="text-gray-700">Comments: {event.comments}</p>
    </div>
  );
}

export default EventDetails;
