import React from "react";
import EventFeed from "../components/HomePage/EventFeed";

const mockEvents = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x200?text=Event+1",
    title: "Music Concert",
    date: "2023-07-01",
    location: "Leipzig, Germany",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x200?text=Event+2",
    title: "Art Exhibition",
    date: "2023-07-02",
    location: "Berlin, Germany",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x200?text=Event+3",
    title: "Tech Conference",
    date: "2023-07-03",
    location: "Amsterdam, The Netherlands",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x200?text=Event+4",
    title: "Food Festival",
    date: "2023-07-04",
    location: "Lima, Perú",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/400x200?text=Event+5",
    title: "Marathon",
    date: "2023-07-05",
    location: "Sao Paulo, Brazil",
  },
];

function TestEventFeedPage() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl m-4">Test Event Feed</h2>
      <EventFeed events={mockEvents} />
    </div>
  );
}

export default TestEventFeedPage;
