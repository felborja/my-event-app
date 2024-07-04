import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../common/InputField";
import Button from "../common/Button";

function SignInForm() {
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
   * Validates the form fields to ensure all required fields for filled out.
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const errors = validateForm();
    // If there are validation errors, set the field errors and stop loading
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setLoading(false);
      return;
    }
    // Make a POST request to the server to login
    fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => {
        // Handle the response from the server
        console.log("Response", response);
        if (response.ok) {
          setSuccess("Successfully logged in!");
          setError("");
          setTimeout(() => {
            response.json().then((data) => {
              console.log("Data", data);
              //let know teammate who is responsible for this part!
              localStorage.setItem("authToken", data.token);
              navigate("/home");
              setLoading(false);
            });
          }, 1000);
        } else if (response.status === 400 || response.status === 403) {
          return response.json().then((data) => {
            setError(data.error || "Bad Request. Please check your input");
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          });
        } else {
          setError("Something went wrong. Please try again.");
          setLoading(false);
        }
      })
      .catch(() => {
        setError("Network error. Please try again.");
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
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
