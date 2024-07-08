import React, { useState } from "react";
import axios from "axios";
import InputField from "../common/InputField";
import Button from "../common/Button";

function EventForm() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    organizerId: JSON.parse(localStorage.getItem("user")).id,
  });

  function handleChange(e) {
    const newdata = { ...form };
    newdata[e.target.name] = e.target.value;
    setForm(newdata);
    console.log(newdata);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:3002/api/events";
    axios
      .post(
        url,
        {
          title: form.title,
          date: form.date,
          location: form.location,
          organizerId: form.organizerId,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Event created");
      })
      .catch((error) => {
        console.error(error);
        alert("Error creating event");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Title"
        value={form.title}
        onChange={handleChange}
        name="title"
      />
      <InputField
        label="Date"
        type="date"
        value={form.date}
        onChange={handleChange}
        name="date"
      />
      <InputField
        label="Location"
        value={form.location}
        onChange={handleChange}
        name="location"
      />
      <Button type="submit" text="Save" />
    </form>
  );
}

export default EventForm;
