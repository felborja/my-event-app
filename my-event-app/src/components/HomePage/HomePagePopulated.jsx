import React from "react";
import Button from "../common/Button";
import EventFeed from "./EventFeed";

function HomePagePopulated({ events }) {
  return (
    <div className="text-center py-4">
      <Button
        text="Create"
        onClick={() => (window.location.href = "/create-event")}
      />
      <h2 className="text-2xl mt-4 mb-6">Event Feed</h2>
      <EventFeed events={events} />
    </div>
  );
}

export default HomePagePopulated;
