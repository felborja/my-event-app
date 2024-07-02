import React from "react";
import Navigation from "../common/Navigation";
import EventDetails from "./EventDetails";
import Button from "../common/Button";

function EventDetailPage() {
  return (
    <div>
      <Navigation isLoggedIn={true} />
      <div className="container mx-auto p-4">
        <a href="/home" className="text-blue-500 hover:underline">
          Go back to home
        </a>
        <EventDetails />
        <div className="mt-4">
          <Button text="Edit" onClick={() => alert("Redirect to edit event")} />
          <Button
            text="Delete"
            onClick={() => alert("Show delete confirmation modal")}
          />
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
