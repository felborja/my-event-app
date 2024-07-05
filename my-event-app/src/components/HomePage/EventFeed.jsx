import React from "react";
import Card from "../common/Card";
import axios from "axios";

function EventFeed({ events }) {
  const getData = () => {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
