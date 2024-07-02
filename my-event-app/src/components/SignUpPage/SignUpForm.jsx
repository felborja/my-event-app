import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";

function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        value={form.name}
        onChange={handleChange}
        name="name"
      />
      <InputField
        label="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        name="email"
      />
      <InputField
        label="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
        name="password"
      />
      <Button type="submit" text="Create account" />
      <p>
        Already have an account? <a href="/signin">Sign in</a>
      </p>
    </form>
  );
}

export default SignUpForm;
