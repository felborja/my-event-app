import React from "react";

function Navigation({ isLoggedIn, onSignOut }) {
  return (
    <nav>
      <div className="logo">EventMaster</div>
      <div className="links">
        {isLoggedIn ? (
          <button onClick={onSignOut}>Sign Out</button>
        ) : (
          <>
            <a href="/signup">Sign Up</a>
            <a href="/signin">Sign In</a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
