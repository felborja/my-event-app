import React from "react";
import HomePageEmpty from "../components/HomePage/HomePageEmpty";
import HomePagePopulated from "../components/HomePage/HomePagePopulated";

function Home() {
  const events = []; // Fetch your events from an API or state management store

  return events.length === 0 ? (
    <HomePageEmpty />
  ) : (
    <HomePagePopulated events={events} />
  );
}

export default Home;
