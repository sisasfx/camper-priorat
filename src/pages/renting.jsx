import React from "react";
import "../styles/pages.css";
import Slider from "../components/slider.jsx";
import Calendar from "../components/calendar";

export const Renting = () => {
  return (
    <div className="main-renting">
      <div className="title">
        <h1>Welcome to Camper Priorat Renting</h1>
      </div>
      <div className="slide-container">
        <Slider />
      </div>
      <Calendar/>
    </div>
  );
};

export default Renting;
