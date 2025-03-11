import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(false);
    navigate("/foodhome");
  }, [navigate, setIsLoggedIn]);

  return (
    <div className="logout-container">
      <h2>You have been logged out.</h2>
    </div>
  );
};

export default Logout;

