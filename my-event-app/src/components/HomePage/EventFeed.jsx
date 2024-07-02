import React from "react";
import Card from "../common/Card";

function EventFeed() {
  // Dummy data for events
  const events = [
    {
      id: 1,
      image: "event1.jpg",
      title: "Event 1",
      date: "2023-07-01",
      location: "Location 1",
    },
    {
      id: 2,
      image: "event2.jpg",
      title: "Event 2",
      date: "2023-07-02",
      location: "Location 2",
    },
    {
      id: 3,
      image: "event3.jpg",
      title: "Event 3",
      date: "2023-07-03",
      location: "Location 3",
    },
  ];

  return (
    <div className="event-feed-grid">
      {events.map((event) => (
        <Card
          key={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
    </div>
  );
}

export default EventFeed;
