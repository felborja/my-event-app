import React from "react";
import Button from "../common/Button";

function WelcomeMessage() {
  return (
    <div className="welcome-message">
      <h2>Welcome back</h2>
      <span>Your event feed is empty</span>
      <Button text="Create" onClick={() => alert("Redirect to create event")} />
    </div>
  );
}

export default WelcomeMessage;
