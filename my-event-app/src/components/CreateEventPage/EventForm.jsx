import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";

function EventForm() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    url: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event created");
  };

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
      <InputField
        label="URL"
        value={form.url}
        onChange={handleChange}
        name="url"
      />
      <InputField
        label="Comments"
        value={form.comments}
        onChange={handleChange}
        name="comments"
      />
      <Button type="submit" text="Save" />
    </form>
  );
}

export default EventForm;
