import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Footer from "./Footer";
import FoodHome from "./FoodHome";
import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";
import OrderCart from "./OrderCart";
import Header from "./Header";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/foodhome" element={<FoodHome />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/logout"
            element={<Logout setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/order" element={<OrderCart />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
 
