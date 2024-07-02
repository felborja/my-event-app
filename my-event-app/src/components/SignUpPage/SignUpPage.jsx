import React from "react";
import SignUpForm from "./SignUpForm";
import MinimalFooter from "../common/MinimalFooter";

function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl m-4">Sign Up</h2>
        <SignUpForm />
      </div>
      <MinimalFooter />
    </div>
  );
}

export default SignUpPage;
