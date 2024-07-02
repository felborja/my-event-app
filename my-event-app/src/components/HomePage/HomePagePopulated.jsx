import React from "react";
import Navigation from "../common/Navigation";
import Button from "../common/Button";
import EventFeed from "./EventFeed";

function HomePagePopulated() {
  return (
    <div>
      <Navigation isLoggedIn={true} />
      <div className="create-button">
        <Button
          text="Create"
          onClick={() => alert("Redirect to create event")}
        />
      </div>
      <div className="event-feed">
        <h2>Event Feed</h2>
        <EventFeed />
      </div>
    </div>
  );
}

export default HomePagePopulated;
