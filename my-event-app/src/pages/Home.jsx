// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import HomePageEmpty from "../components/HomePage/HomePageEmpty";
import HomePagePopulated from "../components/HomePage/HomePagePopulated";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get("/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };
    fetchEvents();
  }, []);

  return events.length > 0 ? (
    <HomePagePopulated events={events} />
  ) : (
    <HomePageEmpty />
  );
}

export default Home;
