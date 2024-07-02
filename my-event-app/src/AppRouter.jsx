import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import EventDetail from "./pages/EventDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import TestEventFeedPage from "./pages/TestEventFeedPage";
import Layout from "./components/Layout/Layout";
import LayoutProtected from "./components/Layout/LayoutProtected";

// Mock authentication function
const isAuthenticated = () => {
  // Replace with real authentication check logic
  return true; // or false based on actual authentication status
};

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/test-event-feed"
          element={
            <LayoutProtected>
              <TestEventFeedPage />
            </LayoutProtected>
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated() ? (
              <LayoutProtected>
                <Home />
              </LayoutProtected>
            ) : (
              <SignIn />
            )
          }
        />
        <Route
          path="/create-event"
          element={
            isAuthenticated() ? (
              <LayoutProtected>
                <CreateEvent />
              </LayoutProtected>
            ) : (
              <SignIn />
            )
          }
        />
        <Route
          path="/event/:id"
          element={
            isAuthenticated() ? (
              <LayoutProtected>
                <EventDetail />
              </LayoutProtected>
            ) : (
              <SignIn />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
