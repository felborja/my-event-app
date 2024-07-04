import React, { useState } from "react";
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

function AppRouter() {
  // Authentication logic is here
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!JSON.parse(localStorage.getItem("user"))?.id ?? false
  );

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
              <SignIn setIsLoggedIn={setIsLoggedIn} />
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
            isLoggedIn ? (
              <LayoutProtected>
                <Home />
              </LayoutProtected>
            ) : (
              <SignIn setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/create-event"
          element={
            isLoggedIn ? (
              <LayoutProtected>
                <CreateEvent />
              </LayoutProtected>
            ) : (
              <SignIn setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/event/:id"
          element={
            isLoggedIn ? (
              <LayoutProtected>
                <EventDetail />
              </LayoutProtected>
            ) : (
              <SignIn setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
