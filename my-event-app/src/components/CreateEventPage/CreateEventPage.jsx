import React from "react";
import EventForm from "./EventForm";

function CreateEventPage() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Create Event</h2>
      <EventForm />
    </div>
  );
}

export default CreateEventPage;
