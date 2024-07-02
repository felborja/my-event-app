import React from "react";
import Navigation from "../common/Navigation";
import MinimalFooter from "../common/MinimalFooter";

const LayoutProtected = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation isLoggedIn={true} />
      <main className="container mx-auto p-4 flex-grow">{children}</main>
      <MinimalFooter />
    </div>
  );
};

export default LayoutProtected;
