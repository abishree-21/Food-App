import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header>
      <nav className="navbar">
        <h1>Shushee</h1>
        <div className="nav-links">
          <Link to="/foodhome">Home</Link>
          <Link to="/order">Menu</Link>
          {isLoggedIn ? (
            <Link to="/logout" onClick={handleLoginLogout}>
              Log Out
            </Link>
          ) : (
            <Link to="/login" onClick={handleLoginLogout}>
              Log In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
 
