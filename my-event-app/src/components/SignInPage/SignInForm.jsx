import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";

function SignInForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signed in");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <p>
        <a href="/forgot-password">Forgot password?</a>
      </p>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </form>
  );
}

export default SignInForm;
