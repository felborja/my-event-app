// src/components/SignInPage/SignInForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import InputField from "../common/InputField";
import Button from "../common/Button";

function SignInForm() {
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
