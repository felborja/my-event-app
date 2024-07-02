import React from "react";
import Navigation from "../common/Navigation";
import EventForm from "./EventForm";

function CreateEventPage() {
  return (
    <div>
      <Navigation isLoggedIn={true} />
      <div className="create-event-page">
        <h2>Create Event</h2>
        <EventForm />
      </div>
    </div>
  );
}

export default CreateEventPage;
