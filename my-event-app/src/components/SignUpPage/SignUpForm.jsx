import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Do the API call and process the result (success / error)
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      // Send the request
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
        headers: myHeaders,
      });

      // Check for errors
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }

      // Otherwise, we can read the body as JSON
      const data = await response.json();

      console.log("Response : ", { data });

      // Sign-up succesful
      alert("Account created");
      navigate("/signin"); // Redirect to Sign-in page
    } catch (error) {
      console.error(error.message);
    }
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
