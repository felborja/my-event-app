// src/components/SignInPage/SignInForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import InputField from "../common/InputField";
import Button from "../common/Button";

function SignInForm({ setIsLoggedIn }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: "" });
  };

  /**
   * Validates the form fields to ensure all required fields are filled out.
   * @returns {object} errors - An object containing error messages for each invalid field.
   */
  const validateForm = () => {
    const errors = {};
    if (!form.email) {
      errors.email = "Email is required";
    }
    if (!form.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/auth/login", form);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log(response.data);
      alert("Signed in");
      navigate("/home");
    } catch (error) {
      alert("Error signing in");
    }

    setLoading(true);
    const errors = validateForm();
    // If there are validation errors, set the field errors and stop loading
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

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
        if (response.status === 400 || response.status === 403) {
          const data = await response.json();
          setError(data.error || "Bad Request. Please check your input");
        } else {
          setError("Something went wrong. Please try again.");
        }
        throw new Error(`Response status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }

      // Otherwise, we can read the body as JSON
      setSuccess("Successfully logged in!");
      setError("");
      const data = await response.json();

      console.log("Response: ", { data });
      // let know teammate who is responsible for this part!
      localStorage.setItem("authToken", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));
      setIsLoggedIn(true);
      setLoading(false);

      // Sign-in successful
      alert("Signed in");
      navigate("/home"); // Redirect to home page after sign-in
    } catch (error) {
      setLoading(false);
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
        error={fieldErrors.email}
      />
      <InputField
        label="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
        name="password"
        error={fieldErrors.password}
      />
      <Button type="submit" text="Sign In" disabled={loading} />
      {loading && <span className="ml-2">Loading...</span>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && <p className="mt-4 text-green-500">{success}</p>}
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
