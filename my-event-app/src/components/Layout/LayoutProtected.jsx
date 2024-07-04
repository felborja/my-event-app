import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../common/Navigation";
import MinimalFooter from "../common/MinimalFooter";

const LayoutProtected = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation
        isLoggedIn={true}
        onSignOut={() => {
          if (window.confirm("Are you sure you want to sign out?")) {
            localStorage.removeItem("authToken");
            navigate("/");
          }
        }}
      />
      <main className="container mx-auto p-4 flex-grow">{children}</main>
      <MinimalFooter />
    </div>
  );
};

export default LayoutProtected;
