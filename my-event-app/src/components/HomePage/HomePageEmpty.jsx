import React from "react";
import Navigation from "../common/Navigation";
import Button from "../common/Button";

function HomePageEmpty() {
  return (
    <div>
      <Navigation isLoggedIn={true} />
      <div className="create-button">
        <Button
          text="Create"
          onClick={() => alert("Redirect to create event")}
        />
      </div>
      <div className="welcome-message">
        <h2>Welcome back</h2>
        <span>Your event feed is empty</span>
        <Button
          text="Create"
          onClick={() => alert("Redirect to create event")}
        />
      </div>
    </div>
  );
}

export default HomePageEmpty;
