import React from "react";
import Navigation from "../common/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation isLoggedIn={false} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
