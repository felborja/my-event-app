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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
      <p className="mt-4">
        Already have an account?{" "}
        <a href="/signin" className="text-blue-500 hover:underline">
          Sign in
        </a>
      </p>
    </form>
  );
}

export default SignUpForm;
