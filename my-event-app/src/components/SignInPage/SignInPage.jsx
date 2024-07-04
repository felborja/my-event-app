import React from "react";
import SignInForm from "./SignInForm";
import MinimalFooter from "../common/MinimalFooter";

function SignInPage({ setIsLoggedIn }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl m-4">Sign In</h2>
        <SignInForm setIsLoggedIn={setIsLoggedIn} />
      </div>
      <MinimalFooter />
    </div>
  );
}

export default SignInPage;
