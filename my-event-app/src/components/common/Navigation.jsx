import React from "react";
import { Link } from "react-router-dom";

function Navigation({ isLoggedIn, onSignOut }) {
  return (
    <nav
      className="bg-gray-800"
      style={{ padding: "0 4.8rem", height: "4.8rem" }}
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to="/" className="text-white text-xl font-bold">
          EventMaster
        </Link>
        <div className="flex space-x-4 items-center justify-center">
          {isLoggedIn ? (
            <>
              <button
                onClick={onSignOut}
                className="text-gray-300 hover:text-white"
              >
                Sign Out
              </button>
              <Link
                to="/create-event"
                className="px-4 py-2 bg-[#5664f5] text-white rounded hover:bg-[#2e3de2]"
              >
                Create Event
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="px-4 py-2 bg-[#5664f5] text-white rounded hover:bg-[#2e3de2]"
              >
                Sign Up for free
              </Link>
              <Link to="/signin" className="text-gray-300 hover:text-white">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
