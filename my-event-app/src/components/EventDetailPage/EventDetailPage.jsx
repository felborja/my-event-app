import React from "react";
import Navigation from "../common/Navigation";
import EventDetails from "./EventDetails";
import Button from "../common/Button";

function EventDetailPage() {
  return (
    <div>
      <Navigation isLoggedIn={true} />
      <div className="event-detail-page">
        <a href="/home">Go back to home</a>
        <EventDetails />
        <Button text="Edit" onClick={() => alert("Redirect to edit event")} />
        <Button
          text="Delete"
          onClick={() => alert("Show delete confirmation modal")}
        />
      </div>
    </div>
  );
}

export default EventDetailPage;
