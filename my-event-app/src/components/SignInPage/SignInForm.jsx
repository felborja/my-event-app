import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../common/InputField";
import Button from "../common/Button";

function SignInForm({ setIsLoggedIn }) {
  const [form, setForm] = useState({
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
    // Add authentication logic here

    // Do the API call and process the result (success / error)
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      // Send the request
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
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
      localStorage.setItem("apiKey", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));
      setIsLoggedIn(true);

      // Sign-in succesful
      alert("Signed in");
      navigate("/home"); // Redirect to home page after sign-in
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
      <Button type="submit" text="Sign In" />
      <p className="mt-4">
        <a href="/forgot-password" className="text-blue-500 hover:underline">
          Forgot password?
        </a>
      </p>
      <p className="mt-2">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
}

export default SignInForm;
