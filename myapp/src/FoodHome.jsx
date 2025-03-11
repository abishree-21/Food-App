import React from "react";
import { useNavigate } from "react-router-dom";

const FoodHome = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <p className="quote">Get it while it's HOT!!</p>
          <div className="online-container">
            <button
              className="online-button"
              onClick={() => navigate("/order")}
            >
              Online Order
            </button>
            <p className="online-description">
              Stay home and order to your doorstep
            </p>
          </div>
        </div>
      </div>

      <div className="about-shushee">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us!</h2>
            <p>
              Welcome to Shushee – where flavor meets convenience! We're more
              than just a food delivery service; we’re a community of food
              lovers dedicated to bringing you delicious, restaurant-quality
              meals right to your door. Whether you're craving a quick snack, a
              healthy meal, or a feast with friends, we’ve got you covered. At
              Shushee, we believe food should be an experience – a fusion of
              flavors, culture, and creativity. Our curated menu offers a range
              of options to satisfy every craving, from local favorites to
              international delights. Join the Shushee family today and
              experience food that’s as fresh and exciting as you are!
            </p>
          </div>
          <div className="about-logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/8633/8633559.png"
              alt="Shushee Logo"
              className="shushee-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodHome;

