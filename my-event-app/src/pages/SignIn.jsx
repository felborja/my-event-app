import React from "react";
import SignInPage from "../components/SignInPage/SignInPage";

function SignIn({ setIsLoggedIn }) {
  console.log("SignIn : ", typeof setIsLoggedIn);
  return <SignInPage setIsLoggedIn={setIsLoggedIn} />;
}

export default SignIn;
