import React from "react";
import HomePageEmpty from "../components/HomePage/HomePageEmpty";
import HomePagePopulated from "../components/HomePage/HomePagePopulated";

function Home() {
  const events = []; // Assume events array is fetched from an API

  return events.length === 0 ? <HomePageEmpty /> : <HomePagePopulated />;
}

export default Home;
