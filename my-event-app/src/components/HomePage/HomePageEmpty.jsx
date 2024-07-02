import React from "react";
import Button from "../common/Button";

function HomePageEmpty() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl mb-4">Welcome back</h2>
      <span className="text-gray-600 mb-8 block">Your event feed is empty</span>
      <Button
        text="Create"
        onClick={() => (window.location.href = "/create-event")}
      />
    </div>
  );
}

export default HomePageEmpty;
