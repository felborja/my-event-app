import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LayoutProtected from "./components/Layout/LayoutProtected";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  // Retrieve the authentication token from LocalStorage
  return !!localStorage.getItem("authToken");
};
// Unauthorized
export const UnauthorizedRoute = ({ children }) => {
  return !isAuthenticated() ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to="/home" />
  );
};
// Authorized
export const AuthorizedRoute = ({ children }) => {
  return isAuthenticated() ? (
    <LayoutProtected>{children}</LayoutProtected>
  ) : (
    <Navigate to="/signin" />
  );
};
