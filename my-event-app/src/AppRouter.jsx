import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreateEvent from "./pages/CreateEvent";
import EventDetail from "./pages/EventDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import TestEventFeedPage from "./pages/TestEventFeedPage";
import { AuthorizedRoute, UnauthorizedRoute } from "./router";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <UnauthorizedRoute>
              <Landing />
            </UnauthorizedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <UnauthorizedRoute>
              <SignIn />
            </UnauthorizedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <UnauthorizedRoute>
              <SignUp />
            </UnauthorizedRoute>
          }
        />

        <Route
          path="/home"
          element={
            <AuthorizedRoute>
              <Home />
            </AuthorizedRoute>
          }
        />
        <Route
          path="/create-event"
          element={
            <AuthorizedRoute>
              <CreateEvent />
            </AuthorizedRoute>
          }
        />
        <Route
          path="/test-event-feed"
          element={
            <AuthorizedRoute>
              <TestEventFeedPage />
            </AuthorizedRoute>
          }
        />
        <Route
          path="/event/:id"
          element={
            <AuthorizedRoute>
              <EventDetail />
            </AuthorizedRoute>
          }
        />
        {/** Cath-all route for 404 */}
        <Route
          path="*"
          element={
            <UnauthorizedRoute>
              <NotFound />
            </UnauthorizedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
